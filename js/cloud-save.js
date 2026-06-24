/* ══ CLOUD SAVE SYSTEM ══
   โหลดก่อน save.js — sync localStorage ↔ server
   ถ้าไม่มี server (offline) → เล่น localStorage ปกติ
*/
'use strict';

let cloudUser = null;
let cloudAvailable = false;

// ทุก tq_* key ที่ต้อง sync
function getAllTqKeys() {
  const keys = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('tq_')) keys[k] = localStorage.getItem(k);
  }
  return keys;
}

function restoreSave(saveData) {
  if (!saveData) return;
  Object.entries(saveData).forEach(([k, v]) => {
    if (k.startsWith('_')) return; // skip meta fields
    if (v !== null && v !== undefined) localStorage.setItem(k, v);
  });
}

function authHeaders() {
  const tok = localStorage.getItem('tq_cloud_token');
  return tok ? { 'X-Auth-Token': tok } : {};
}

let _saveFailT = 0;
async function cloudSave() {
  if (!cloudUser || !cloudAvailable) return;
  try {
    const r = await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify(getAllTqKeys()),
    });
    if (!r.ok) throw new Error('http '+r.status);
    _saveFailT = 0;
  } catch (e) {
    const now = Date.now();
    if (now - _saveFailT > 120000) { // แจ้งเตือนซ้ำได้ทุก 2 นาทีเท่านั้น
      _saveFailT = now;
      if (typeof showToast === 'function') showToast('⚠️ บันทึกข้อมูลไม่สำเร็จ — ตรวจสอบการเชื่อมต่อ');
    }
  }
}

async function cloudInit() {
  const screen = document.getElementById('cloudLoginScreen');
  const game   = document.getElementById('gr');

  // ตรวจ hash fragment จาก OAuth callback (#tqauth=...)
  const hash = window.location.hash;
  if (hash.startsWith('#tqauth=')) {
    try {
      const encoded = hash.slice(8);
      // base64url → base64 (add padding, replace chars)
      const b64 = encoded.replace(/-/g,'+').replace(/_/g,'/');
      const padded = b64 + '='.repeat((4 - b64.length % 4) % 4);
      const payload = JSON.parse(atob(padded));
      const { _token, ...user } = payload;
      localStorage.setItem('tq_cloud_user', JSON.stringify(user));
      if (_token) localStorage.setItem('tq_cloud_token', user.id + ':' + _token);
      history.replaceState(null, '', '/');
    } catch(e) { console.error('tqauth parse error', e); }
  }

  // ตรวจ error
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('error') === 'auth_failed') {
    history.replaceState(null, '', '/');
    setTimeout(() => {
      if (typeof showToast === 'function') showToast('❌ เข้าสู่ระบบ Google ล้มเหลว');
    }, 800);
  }

  // โหลด user จาก localStorage
  try {
    const saved = localStorage.getItem('tq_cloud_user');
    if (saved) { cloudUser = JSON.parse(saved); window.cloudUser = cloudUser; }
  } catch(e) {}

  // แสดงเกมเสมอ (ไม่บังคับ login)
  if (screen) screen.style.display = 'none';
  if (game)   game.style.display   = '';
  const bar = document.getElementById('cloudUserBar');
  if (bar) { bar.style.display = 'flex'; updateAvatarDisplay(); }

  // sync กับ server ถ้า login แล้ว
  try {
    const res = await fetch('/api/me', { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      cloudAvailable = true;
      if (cloudUser) {
        const sr = await fetch('/api/save', { headers: authHeaders() });
        if (sr.ok) {
          const sd = await sr.json();
          restoreSave(sd.save);
        }
      }
    }
  } catch (e) { cloudAvailable = false; }

  // auto-save ทุก 60 วิ
  setInterval(cloudSave, 60000);
  window.addEventListener('beforeunload', () => { cloudSave(); });
  // check pending leaderboard rewards
  if (cloudUser && cloudAvailable) _checkLbRewards();
}

async function _checkLbRewards() {
  try {
    const r = await fetch('/api/leaderboard/claim', { headers: authHeaders() });
    if (!r.ok) return;
    const { pending } = await r.json();
    if (!pending || !pending.length) return;
    // claim all
    const cr = await fetch('/api/leaderboard/claim', { method:'POST', headers: authHeaders() });
    if (!cr.ok) return;
    const { claimed } = await cr.json();
    // ซ่อน badge เสมอหลัง claim (ไม่ว่า claimed จะว่างหรือไม่)
    const _badge = document.getElementById('lbRewardBadge');
    if (_badge) _badge.style.display = 'none';
    if (!claimed || !claimed.length) return;
    // apply rewards
    claimed.forEach(rew => {
      if (rew.gems)    { if(typeof addGems==='function') addGems(rew.gems); }
      if (rew.tickets) { if(typeof addTickets==='function') addTickets(rew.tickets); }
      if (rew.pgold)   { if(typeof addPGold==='function') addPGold(rew.pgold); }
    });
    cloudSave();
    // show popup — badge จะแสดงระหว่าง popup เปิดอยู่ ซ่อนเมื่อกด "รับรางวัล"
    const _badgeRef = document.getElementById('lbRewardBadge');
    if (_badgeRef) _badgeRef.style.display = 'block';
    if (typeof _showLbRewardPopup === 'function') _showLbRewardPopup(claimed, ()=>{ if(_badgeRef) _badgeRef.style.display='none'; });
  } catch(e) {}
}

// เรียกหลังโหลด DOM
window.addEventListener('DOMContentLoaded', cloudInit);

function cloudLogout() {
  if (!confirm('ออกจากระบบ?')) return;
  localStorage.removeItem('tq_cloud_user');
  localStorage.removeItem('tq_cloud_token');
  cloudUser = null;
  window.cloudUser = null;
  cloudAvailable = false;
  fetch('/auth/logout').catch(()=>{});
  // อัปเดต UI
  const bar = document.getElementById('cloudUserBar');
  if (bar) updateAvatarDisplay();
  if (typeof openProfile === 'function') openProfile();
}

// expose ให้ game เรียกเมื่อ save เกิดขึ้น
window.cloudSave = cloudSave;
window.cloudLogout = cloudLogout;
