require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { OAuth2Client } = require('google-auth-library');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const SAVES_FILE = path.join(__dirname, 'data', 'saves.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(SAVES_FILE)) {
  fs.writeFileSync(SAVES_FILE, '{}', 'utf8');
}

function loadSaves() {
  try { return JSON.parse(fs.readFileSync(SAVES_FILE, 'utf8')); }
  catch { return {}; }
}
function writeSaves(data) {
  fs.writeFileSync(SAVES_FILE, JSON.stringify(data, null, 2), 'utf8');
}

const oauthClient = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, `${BASE_URL}/auth/google/callback`);

app.use(express.json({ limit: '2mb' }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'tq-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 30 * 24 * 60 * 60 * 1000 }
}));

// Serve game files
app.use(express.static(__dirname));

// Redirect index to game
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Tower Quest 🏰.html'));
});

// ── Auth ──────────────────────────────────────────
app.get('/auth/google', (req, res) => {
  const url = oauthClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
    prompt: 'select_account',
  });
  res.redirect(url);
});

app.get('/auth/google/callback', async (req, res) => {
  try {
    const { code } = req.query;
    // Exchange code for tokens using native fetch (avoids google-auth-library Node.js 24 issue)
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code, client_id: CLIENT_ID, client_secret: CLIENT_SECRET,
        redirect_uri: `${BASE_URL}/auth/google/callback`, grant_type: 'authorization_code',
      }),
    });
    const tokens = await tokenRes.json();
    if (!tokens.id_token) throw new Error('no id_token: ' + JSON.stringify(tokens));
    const ticket = await oauthClient.verifyIdToken({ idToken: tokens.id_token, audience: CLIENT_ID });
    const p = ticket.getPayload();
    req.session.user = { id: p.sub, name: p.name, email: p.email, picture: p.picture };
    res.redirect('/');
  } catch (e) {
    console.error('Auth error:', e.message);
    res.redirect('/?error=auth_failed');
  }
});

app.get('/auth/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

// ── API ───────────────────────────────────────────
app.get('/api/me', (req, res) => {
  res.json({ user: req.session.user || null });
});

app.get('/api/save', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'not_logged_in' });
  const saves = loadSaves();
  res.json({ save: saves[req.session.user.id] || null });
});

app.post('/api/save', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'not_logged_in' });
  const saves = loadSaves();
  saves[req.session.user.id] = {
    ...req.body,
    _uid: req.session.user.id,
    _name: req.session.user.name,
    _lastSaved: new Date().toISOString(),
  };
  writeSaves(saves);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✅ Tower Quest server: http://localhost:${PORT}`);
});
