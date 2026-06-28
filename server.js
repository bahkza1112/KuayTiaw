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
const SAVES_FILE   = path.join(__dirname, 'data', 'saves.json');
const LB_FILE      = path.join(__dirname, 'data', 'leaderboard.json');
const SEASON_FILE  = path.join(__dirname, 'data', 'season.json');
const REWARDS_FILE = path.join(__dirname, 'data', 'lb_rewards.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(SAVES_FILE))   fs.writeFileSync(SAVES_FILE, '{}', 'utf8');
if (!fs.existsSync(LB_FILE))      fs.writeFileSync(LB_FILE, '[]', 'utf8');
if (!fs.existsSync(SEASON_FILE))  fs.writeFileSync(SEASON_FILE, JSON.stringify({start:Date.now(),num:1}), 'utf8');
if (!fs.existsSync(REWARDS_FILE)) fs.writeFileSync(REWARDS_FILE, '{}', 'utf8');

// ── One-time season reset (remove flag file to re-trigger) ──
const RESET_FLAG = path.join(__dirname, 'data', 'reset_ss1.flag');
if (!fs.existsSync(RESET_FLAG)) {
  fs.writeFileSync(LB_FILE, '[]', 'utf8');
  fs.writeFileSync(REWARDS_FILE, '{}', 'utf8');
  fs.writeFileSync(SEASON_FILE, JSON.stringify({start:Date.now(),num:1}), 'utf8');
  fs.writeFileSync(RESET_FLAG, new Date().toISOString(), 'utf8');
  console.log('✅ Season reset: leaderboard + rewards cleared, SS1 started');
}

// ── Season ────────────────────────────────────────
const SEASON_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const LB_PRIZE = [
  {gems:2000, tickets:50},  // 1st
  {gems:1000, tickets:25},  // 2nd
  {gems:500,  tickets:10},  // 3rd
  {pgold:500},{pgold:500},{pgold:500}, // 4-6
  {pgold:200},{pgold:200},{pgold:200},{pgold:200}, // 7-10
];
function loadSeason() { try { return JSON.parse(fs.readFileSync(SEASON_FILE,'utf8')); } catch { return {start:Date.now(),num:1}; } }
function writeSeason(d) { fs.writeFileSync(SEASON_FILE, JSON.stringify(d), 'utf8'); }
function loadRewards() { try { return JSON.parse(fs.readFileSync(REWARDS_FILE,'utf8')); } catch { return {}; } }
function writeRewards(d) { fs.writeFileSync(REWARDS_FILE, JSON.stringify(d,null,2), 'utf8'); }

function checkSeasonReset() {
  const season = loadSeason();
  if (Date.now() - season.start < SEASON_MS) return season;
  // snapshot top 10 and assign rewards
  const lb = loadLb().sort((a,b)=>b.score-a.score);
  const rewards = loadRewards();
  lb.slice(0,10).forEach((entry,i) => {
    if (entry.uid && LB_PRIZE[i]) {
      if (!rewards[entry.uid]) rewards[entry.uid] = [];
      rewards[entry.uid].push({rank:i+1, season:season.num, ...LB_PRIZE[i], ts:Date.now()});
    }
  });
  writeRewards(rewards);
  writeLb([]);
  const next = {start:Date.now(), num:season.num+1};
  writeSeason(next);
  console.log(`Season ${season.num} ended → Season ${next.num} started`);
  return next;
}

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

// ── Rate limiting (เรื่อง 3) ─────────────────────────────────────────────────
const _rlMap = new Map(); // ip → {count, resetAt}
function rateLimit(maxPerMin) {
  return (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    let s = _rlMap.get(ip);
    if (!s || now > s.resetAt) { s = { count: 0, resetAt: now + 60000 }; _rlMap.set(ip, s); }
    s.count++;
    if (s.count > maxPerMin) return res.status(429).json({ error: 'too many requests' });
    next();
  };
}
// clean up stale entries every 5 min
setInterval(() => { const now=Date.now(); _rlMap.forEach((v,k)=>{ if(now>v.resetAt) _rlMap.delete(k); }); }, 300000);

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
  const season = checkSeasonReset();
  const sorted = loadLb().sort((a,b)=>b.score-a.score);
  const entries = sorted.slice(0,10);
  const resetAt = season.start + SEASON_MS;
  // ส่ง rank ของผู้เล่นกลับมาด้วยถ้าอยู่นอก TOP 10
  let myEntry = null;
  const uid = req.query.uid;
  if(uid) {
    const idx = sorted.findIndex(e => e.uid === uid);
    if(idx >= 10) myEntry = { rank: idx+1, ...sorted[idx] };
  }
  res.json({ entries, season: season.num, resetAt, myEntry });
});

// ── Season Rewards ────────────────────────────────
app.get('/api/leaderboard/claim', authMiddleware, (req, res) => {
  const rewards = loadRewards();
  const pending = rewards[req.authUser.id] || [];
  res.json({ pending });
});

app.post('/api/leaderboard/claim', authMiddleware, (req, res) => {
  const rewards = loadRewards();
  const uid = req.authUser.id;
  const pending = rewards[uid] || [];
  if (!pending.length) return res.json({ ok:true, claimed:[] });
  delete rewards[uid];
  writeRewards(rewards);
  res.json({ ok:true, claimed: pending });
});

app.post('/api/leaderboard', rateLimit(10), (req, res) => {
  const { name, score, wave, diff, kills, maxCombo, round, date, avatar, uid } = req.body;
  if (!name || typeof score !== 'number' || typeof wave !== 'number') {
    return res.status(400).json({ error: 'invalid' });
  }
  let lb = loadLb();
  const entry = { name: String(name).slice(0,30), score, wave, diff, kills:kills||0, maxCombo:maxCombo||1, round:round||1, avatar:avatar?String(avatar).slice(0,3000):'🎮', date: date||new Date().toLocaleDateString('th-TH'), ts: Date.now(), uid: uid||null };
  // ถ้า submit ด้วย uid → ลบ entry เก่าที่ไม่มี uid และชื่อเดียวกันออก (กัน ghost entry จากก่อน login)
  if (uid) lb = lb.filter(e => !(!e.uid && e.name === entry.name));
  // dedup: keep best score per uid (or per name if no uid)
  const key = uid ? (e=>e.uid===uid) : (e=>!e.uid&&e.name===entry.name);
  const idx = lb.findIndex(key);
  if (idx >= 0) {
    if (score > lb[idx].score) lb[idx] = entry;
    else { lb.sort((a,b)=>b.score-a.score); const rank=lb.findIndex(key)+1; return res.json({ok:true,rank}); }
  } else {
    lb.push(entry);
  }
  lb.sort((a,b)=>b.score-a.score);
  if (lb.length > 100) lb.length = 100;
  writeLb(lb);
  const rank = lb.findIndex(key) + 1;
  res.json({ ok: true, rank });
});

// ── Admin: delete leaderboard entry by rank (1-based) ─────────────────────────
app.delete('/api/leaderboard/:rank', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) return res.status(403).json({ error: 'forbidden' });
  const lb = loadLb().sort((a,b)=>b.score-a.score);
  const idx = parseInt(req.params.rank) - 1;
  if (idx < 0 || idx >= lb.length) return res.status(404).json({ error: 'not found' });
  const removed = lb.splice(idx, 1)[0];
  writeLb(lb);
  res.json({ ok: true, removed });
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

app.post('/api/story-leaderboard', rateLimit(10), (req, res) => {
  const { name, totalStars, stagesCleared, date, avatar, uid } = req.body;
  if (!name || typeof totalStars !== 'number') return res.status(400).json({ error:'invalid' });
  const lb = loadSlb();
  const key = uid ? (e=>e.uid===uid) : (e=>!e.uid&&e.name===name);
  const idx = lb.findIndex(key);
  const entry = { name:String(name).slice(0,30), totalStars, stagesCleared:stagesCleared||0, avatar:avatar?String(avatar).slice(0,3000):'🎮', date:date||new Date().toLocaleDateString('th-TH'), ts:Date.now(), uid:uid||null };
  if (idx>=0) { if (totalStars>lb[idx].totalStars||(totalStars===lb[idx].totalStars&&stagesCleared>lb[idx].stagesCleared)) lb[idx]=entry; }
  else lb.push(entry);
  lb.sort((a,b)=>b.totalStars-a.totalStars||b.stagesCleared-a.stagesCleared);
  if (lb.length > 100) lb.length = 100;
  writeSlb(lb);
  const rank = lb.findIndex(key)+1;
  res.json({ ok:true, rank });
});

// ── Admin: delete story leaderboard entry by rank ─────────────────────────────
app.delete('/api/story-leaderboard/:rank', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) return res.status(403).json({ error: 'forbidden' });
  const lb = loadSlb().sort((a,b)=>b.totalStars-a.totalStars||b.stagesCleared-a.stagesCleared);
  const idx = parseInt(req.params.rank) - 1;
  if (idx < 0 || idx >= lb.length) return res.status(404).json({ error: 'not found' });
  const removed = lb.splice(idx, 1)[0];
  writeSlb(lb);
  res.json({ ok: true, removed });
});

app.listen(PORT, () => {
  console.log(`✅ Tower Quest server: http://localhost:${PORT}`);
});
