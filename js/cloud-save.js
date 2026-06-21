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

async function cloudSave() {
  if (!cloudUser || !cloudAvailable) return;
  try {
    await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getAllTqKeys()),
    });
  } catch (e) { /* silent fail */ }
}

async function cloudInit() {
  const screen = document.getElementById('cloudLoginScreen');
  const game   = document.getElementById('gr');

  // ตรวจ hash fragment จาก OAuth callback (#tqauth=...)
  const hash = window.location.hash;
  if (hash.startsWith('#tqauth=')) {
    try {
      const encoded = hash.slice(8);
      const user = JSON.parse(atob(encoded.replace(/-/g,'+').replace(/_/g,'/')));
      localStorage.setItem('tq_cloud_user', JSON.stringify(user));
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
    if (saved) cloudUser = JSON.parse(saved);
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
        const sr = await fetch('/api/save');
        const sd = await sr.json();
        restoreSave(sd.save);
      }
    }
  } catch (e) { cloudAvailable = false; }

  // auto-save ทุก 60 วิ
  setInterval(cloudSave, 60000);
  window.addEventListener('beforeunload', () => { cloudSave(); });
}

// เรียกหลังโหลด DOM
window.addEventListener('DOMContentLoaded', cloudInit);

function cloudLogout() {
  if (!confirm('ออกจากระบบ?')) return;
  localStorage.removeItem('tq_cloud_user');
  cloudUser = null;
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
