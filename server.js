require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const { OAuth2Client } = require('google-auth-library');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const SAVES_FILE = path.join(__dirname, 'data', 'saves.json');
const LB_FILE    = path.join(__dirname, 'data', 'leaderboard.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(SAVES_FILE)) fs.writeFileSync(SAVES_FILE, '{}', 'utf8');
if (!fs.existsSync(LB_FILE))    fs.writeFileSync(LB_FILE, '[]', 'utf8');

function loadSaves() {
  try { return JSON.parse(fs.readFileSync(SAVES_FILE, 'utf8')); }
  catch { return {}; }
}
function writeSaves(data) {
  fs.writeFileSync(SAVES_FILE, JSON.stringify(data, null, 2), 'utf8');
}
function loadLb() {
  try { return JSON.parse(fs.readFileSync(LB_FILE, 'utf8')); }
  catch { return []; }
}
function writeLb(data) {
  fs.writeFileSync(LB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

const oauthClient = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, `${BASE_URL}/auth/google/callback`);

const TOKEN_SECRET = process.env.SESSION_SECRET || 'tq-secret';
app.set('trust proxy', 1);
app.use(express.json({ limit: '2mb' }));

// Stateless token auth — no sessions needed
function makeToken(uid) {
  return crypto.createHmac('sha256', TOKEN_SECRET).update(uid).digest('hex');
}
function verifyToken(uid, token) {
  if (!uid || !token) return false;
  return crypto.timingSafeEqual(Buffer.from(makeToken(uid)), Buffer.from(token));
}
function authMiddleware(req, res, next) {
  const auth = req.headers['x-auth-token'] || '';
  const [uid, token] = auth.split(':');
  if (uid && token && verifyToken(uid, token)) {
    req.authUser = { id: uid };
    return next();
  }
  res.status(401).json({ error: 'unauthorized' });
}

// Serve game files — HTML no-cache so players always get latest version
app.use(express.static(__dirname, {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// Redirect index to game
app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
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
    const user = { id: p.sub, name: p.name, email: p.email, picture: p.picture };
    const token = makeToken(user.id);
    // ส่ง user + HMAC token ผ่าน hash fragment → client เก็บใน localStorage
    const encoded = Buffer.from(JSON.stringify({ ...user, _token: token })).toString('base64url');
    res.redirect('/Tower%20Quest%20%F0%9F%8F%B0.html#tqauth=' + encoded);
  } catch (e) {
    console.error('Auth error:', e.message);
    res.redirect('/?error=auth_failed&msg=' + encodeURIComponent(e.message));
  }
});

app.get('/auth/logout', (req, res) => {
  res.redirect('/');
});

// ── API ───────────────────────────────────────────
app.get('/api/me', (req, res) => {
  res.json({ ok: true });
});

app.get('/api/save', authMiddleware, (req, res) => {
  const saves = loadSaves();
  res.json({ save: saves[req.authUser.id] || null });
});

app.post('/api/save', authMiddleware, (req, res) => {
  const saves = loadSaves();
  saves[req.authUser.id] = {
    ...req.body,
    _uid: req.authUser.id,
    _lastSaved: new Date().toISOString(),
  };
  writeSaves(saves);
  res.json({ ok: true });
});

// ── Leaderboard ───────────────────────────────────
app.get('/api/leaderboard', (req, res) => {
  const lb = loadLb().sort((a,b)=>b.score-a.score).slice(0,10);
  res.json({ entries: lb });
});

app.post('/api/leaderboard', (req, res) => {
  const { name, score, wave, diff, kills, maxCombo, round, date, avatar } = req.body;
  if (!name || typeof score !== 'number' || typeof wave !== 'number') {
    return res.status(400).json({ error: 'invalid' });
  }
  const lb = loadLb();
  const entry = { name: String(name).slice(0,30), score, wave, diff, kills:kills||0, maxCombo:maxCombo||1, round:round||1, avatar:avatar?String(avatar).slice(0,3000):'🎮', date: date||new Date().toLocaleDateString('th-TH'), ts: Date.now() };
  lb.push(entry);
  lb.sort((a,b)=>b.score-a.score);
  if (lb.length > 100) lb.length = 100;
  writeLb(lb);
  const rank = lb.findIndex(e=>e.ts===entry.ts) + 1;
  res.json({ ok: true, rank });
});

// ── Story Leaderboard ─────────────────────────────
const SLB_FILE = path.join(__dirname, 'data', 'story_lb.json');
function loadSlb() { try { return JSON.parse(fs.readFileSync(SLB_FILE,'utf8')); } catch { return []; } }
function writeSlb(d) { fs.writeFileSync(SLB_FILE, JSON.stringify(d,null,2),'utf8'); }
if (!fs.existsSync(SLB_FILE)) fs.writeFileSync(SLB_FILE,'[]','utf8');

app.get('/api/story-leaderboard', (req, res) => {
  const lb = loadSlb().sort((a,b)=>b.totalStars-a.totalStars||b.stagesCleared-a.stagesCleared).slice(0,10);
  res.json({ entries: lb });
});

app.post('/api/story-leaderboard', (req, res) => {
  const { name, totalStars, stagesCleared, date, avatar } = req.body;
  if (!name || typeof totalStars !== 'number') return res.status(400).json({ error:'invalid' });
  const lb = loadSlb();
  // keep best entry per name
  const idx = lb.findIndex(e=>e.name===name);
  const entry = { name:String(name).slice(0,30), totalStars, stagesCleared:stagesCleared||0, avatar:avatar?String(avatar).slice(0,3000):'🎮', date:date||new Date().toLocaleDateString('th-TH'), ts:Date.now() };
  if (idx>=0) { if (totalStars>lb[idx].totalStars||(totalStars===lb[idx].totalStars&&stagesCleared>lb[idx].stagesCleared)) lb[idx]=entry; }
  else lb.push(entry);
  lb.sort((a,b)=>b.totalStars-a.totalStars||b.stagesCleared-a.stagesCleared);
  if (lb.length > 100) lb.length = 100;
  writeSlb(lb);
  const rank = lb.findIndex(e=>e.name===entry.name)+1;
  res.json({ ok:true, rank });
});

app.listen(PORT, () => {
  console.log(`✅ Tower Quest server: http://localhost:${PORT}`);
});
