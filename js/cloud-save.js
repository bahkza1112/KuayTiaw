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

  try {
    const res = await fetch('/api/me', { signal: AbortSignal.timeout(4000) });
    if (!res.ok) throw new Error('server_error');
    const data = await res.json();
    cloudAvailable = true;

    if (data.user) {
      cloudUser = data.user;
      // โหลด save จาก server
      const sr = await fetch('/api/save');
      const sd = await sr.json();
      restoreSave(sd.save);
      // อัปเดต UI ชื่อผู้เล่น
      const bar = document.getElementById('cloudUserBar');
      if (bar) { bar.style.display = 'flex'; updateAvatarDisplay(); }
      // แสดงเกม
      if (screen) screen.style.display = 'none';
      if (game)   game.style.display   = '';
    } else {
      // ยังไม่ login → เข้าเกมโดยตรง (login ได้จากหน้าโปรไฟล์)
      if (screen) screen.style.display = 'none';
      if (game)   game.style.display   = '';
      const bar = document.getElementById('cloudUserBar');
      if (bar) { bar.style.display = 'flex'; updateAvatarDisplay(); }
    }
  } catch (e) {
    // server ไม่ตอบสนอง → เล่น offline ได้เลย
    cloudAvailable = false;
    if (screen) screen.style.display = 'none';
    if (game)   game.style.display   = '';
    const bar = document.getElementById('cloudUserBar');
    if (bar) { bar.style.display = 'flex'; updateAvatarDisplay(); }
  }

  // auto-save ทุก 60 วิ
  setInterval(cloudSave, 60000);
  window.addEventListener('beforeunload', () => { cloudSave(); });
}

// เรียกหลังโหลด DOM
window.addEventListener('DOMContentLoaded', cloudInit);

function cloudLogout() {
  if (!confirm('ออกจากระบบ?')) return;
  cloudSave().finally(() => { window.location.href = '/auth/logout'; });
}

// expose ให้ game เรียกเมื่อ save เกิดขึ้น
window.cloudSave = cloudSave;
window.cloudLogout = cloudLogout;
