/* ══ PROFILE ══ */
const PROFILE_AVATARS=['⚔️','🛡️','🧙','🏹','🗡️','🔥','❄️','⚡','🌑','<span class="gico"></span>','👑','🐉','🦅','🐺','🦁','🌟','💀','🎯','🌊','🏰'];
const AV_FREE_IDX=19; // 🏰 ฟรี
const AV_UNLOCK_GEMS=300;
const AV_UNLOCK_GOLD=1000;
function _avUnlocked(){try{return JSON.parse(localStorage.getItem('tq_av_unlocked')||'[]');}catch{return [];}}
function _isAvUnlocked(i){return i===AV_FREE_IDX||_avUnlocked().includes(i);}
function _showAvUnlockPopup(i){
  const e=PROFILE_AVATARS[i];
  const gems=loadGems(),gold=loadPGold();
  const canGems=gems>=AV_UNLOCK_GEMS,canGold=gold>=AV_UNLOCK_GOLD;
  const pop=document.createElement('div');pop.className='av-unlock-popup';
  pop.innerHTML=`<div class="av-unlock-box">
    <div class="av-preview">${e}</div>
    <h3>ปลดล็อค Avatar</h3>
    <p>เลือกวิธีชำระเพื่อปลดล็อคถาวร</p>
    <div class="av-unlock-opts">
      <button class="av-unlock-opt gems${canGems?'':' disabled'}" onclick="_avPay(${i},'gems')" ${canGems?'':'disabled'}>
        <span class="opt-price"><span class="gico"></span> ${AV_UNLOCK_GEMS}</span>
        <span style="font-size:10px;color:#b388ff;">มณีวิญญาณ</span>
        ${canGems?'':`<span style="font-size:9px;color:#f44;">ไม่พอ (มี ${gems})</span>`}
      </button>
      <button class="av-unlock-opt gold${canGold?'':' disabled'}" onclick="_avPay(${i},'gold')" ${canGold?'':'disabled'}>
        <span class="opt-price">💰 ${AV_UNLOCK_GOLD}</span>
        <span style="font-size:10px;color:#ffd24d;">ทองถาวร</span>
        ${canGold?'':`<span style="font-size:9px;color:#f44;">ไม่พอ (มี ${gold})</span>`}
      </button>
    </div>
    <button class="av-unlock-cancel" onclick="this.closest('.av-unlock-popup').remove()">ยกเลิก</button>
  </div>`;
  document.body.appendChild(pop);
  pop.addEventListener('click',ev=>{if(ev.target===pop)pop.remove();});
}
function _avPay(i,cur){
  if(cur==='gems'){if(loadGems()<AV_UNLOCK_GEMS){showToast('มณีไม่พอ');return;}saveGems(loadGems()-AV_UNLOCK_GEMS);}
  else{if(loadPGold()<AV_UNLOCK_GOLD){showToast('ทองไม่พอ');return;}savePGold(loadPGold()-AV_UNLOCK_GOLD);}
  const ul=_avUnlocked();if(!ul.includes(i))ul.push(i);
  localStorage.setItem('tq_av_unlocked',JSON.stringify(ul));
  document.querySelector('.av-unlock-popup')?.remove();
  showToast('✅ ปลดล็อค '+PROFILE_AVATARS[i]+' แล้ว!');
  selectAvatar(PROFILE_AVATARS[i]);
  // refresh grid
  const av=localStorage.getItem('tq_avatar')||'🏰';
  const grid=document.getElementById('profileAvatarGrid');
  if(grid) grid.innerHTML=PROFILE_AVATARS.map((e,idx)=>{
    const locked=!_isAvUnlocked(idx);
    const disp=e.startsWith('data:')?`<img src="${e}" style="width:28px;height:28px;object-fit:cover;border-radius:4px;">`:e;
    return `<button class="profile-avatar-btn${e===av?' selected':''}${locked?' locked':''}" onclick="${locked?`_showAvUnlockPopup(${idx})`:`selectAvatar(PROFILE_AVATARS[${idx}])`}" data-avi="${idx}">${disp}</button>`;
  }).join('');
}
function openProfile(){
  showScreen('profile',true);
  let av=localStorage.getItem('tq_avatar')||'🏰';
  // ถ้า avatar ปัจจุบันเป็น emoji ที่ล็อค → reset เป็น 🏰
  const avIdx=PROFILE_AVATARS.indexOf(av);
  if(avIdx>=0&&!_isAvUnlocked(avIdx)){av='🏰';localStorage.setItem('tq_avatar','🏰');}
  const nm=localStorage.getItem('tq_displayName')||localStorage.getItem('tq_last_name')||'';
  // Google pic
  const gPic=document.getElementById('profileGooglePic');
  const gName=document.getElementById('profileGoogleName');
  const avBig=document.getElementById('profileAvatarBig');
  const logoutWrap=document.getElementById('profileLogoutWrap');
  const loginWrap=document.getElementById('profileLoginWrap');
  // แสดง in-game avatar + ชื่อผู้เล่นเสมอ (ไม่ใช้ Google pic)
  if(gPic) gPic.style.display='none';
  if(avBig){
    avBig.style.display='flex';
    if(av.startsWith('data:')){
      avBig.textContent='';
      avBig.style.backgroundImage=`url(${av})`;
      avBig.style.backgroundSize='cover';
      avBig.style.backgroundPosition='center';
    } else {
      avBig.textContent=av;
      avBig.style.backgroundImage='';
    }
  }
  if(window.cloudUser){
    // ชื่อผู้เล่น (ถ้ายังไม่ตั้ง ใช้ชื่อ Google แทน)
    if(gName) gName.textContent=nm||cloudUser.name||cloudUser.email;
    if(logoutWrap) logoutWrap.style.display='block';
    if(loginWrap) loginWrap.style.display='none';
  } else {
    if(gName) gName.textContent='';
    if(logoutWrap) logoutWrap.style.display='none';
    if(loginWrap) loginWrap.style.display='block';
  }
  // avatar grid
  const grid=document.getElementById('profileAvatarGrid');
  if(grid){
    grid.innerHTML=PROFILE_AVATARS.map((e,i)=>{
      const locked=!_isAvUnlocked(i);
      const disp=e.startsWith('data:')?`<img src="${e}" style="width:28px;height:28px;object-fit:cover;border-radius:4px;">`:e;
      return `<button class="profile-avatar-btn${e===av?' selected':''}${locked?' locked':''}" onclick="${locked?`_showAvUnlockPopup(${i})`:`selectAvatar(PROFILE_AVATARS[${i}])`}" data-avi="${i}">${disp}</button>`;
    }).join('');
  }
  // name input
  const inp=document.getElementById('profileNameInput');
  if(inp) inp.value=nm;
  const msg=document.getElementById('profileSaveMsg');
  if(msg) msg.style.display='none';
  // stat summary
  const statBox=document.getElementById('profileStatSummary');
  if(statBox){
    try{
    const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
    const prog=JSON.parse(localStorage.getItem('tq_progress')||'{}');
    const egRuns=runs.filter(r=>r.mode==='endgame');
    const bestWave=egRuns.length?Math.max(...egRuns.map(r=>r.wave||0)):0;
    const bestScore=egRuns.length?Math.max(...egRuns.map(r=>r.score||0)):0;
    const totalStars=Object.values(prog).reduce((a,b)=>a+(b||0),0);
    const stagesCleared=Object.keys(prog).filter(k=>(prog[k]||0)>=1).length;
    const TOTAL_ST=typeof STAGES!=='undefined'?STAGES.filter(s=>!s.comingSoon).length:20;
    const achArr=JSON.parse(localStorage.getItem('tq_ach')||'[]');
    const achDone=Array.isArray(achArr)?achArr.length:Object.values(achArr).filter(Boolean).length;
    statBox.innerHTML=`<div style="font-size:11px;color:rgba(255,255,255,.4);font-weight:700;letter-spacing:1px;margin-bottom:10px;">📊 สถิติ</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:10px;text-align:center;">
          <div style="font-size:20px;font-weight:900;color:#ffd54f;">${totalStars}★</div>
          <div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px;">ดาวรวม</div>
        </div>
        <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:10px;text-align:center;">
          <div style="font-size:20px;font-weight:900;color:#80cbc4;">${stagesCleared}/${TOTAL_ST}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px;">ด่านที่ผ่าน</div>
        </div>
        <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:10px;text-align:center;">
          <div style="font-size:20px;font-weight:900;color:#ff8a65;">${bestWave||'—'}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px;">🌊 เวฟสูงสุด</div>
        </div>
        <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:10px;text-align:center;">
          <div style="font-size:17px;font-weight:900;color:#ffe082;">${bestScore?bestScore.toLocaleString():'—'}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px;">⭐ คะแนนสูงสุด</div>
        </div>
      </div>
      <div style="margin-top:8px;background:rgba(255,255,255,.04);border-radius:10px;padding:10px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:11px;color:rgba(255,255,255,.5);">🏅 รางวัลที่ได้</span>
        <span style="font-size:14px;font-weight:900;color:#ce93d8;">${achDone} รางวัล</span>
      </div>`;
    statBox.style.display='block';
    }catch(e){statBox.style.display='none';}
  }
  // reset draw panel to collapsed on open
  const dp=document.getElementById('drawPanel');
  const da=document.getElementById('drawToggleArrow');
  if(dp) dp.style.display='none';
  if(da) da.textContent='▼';
}
const _RN_PREFIX=['นัก','ราช','มหา','ขุน','ท้าว','พ่อ','แม่','เจ้า','จอม','ยอด','สุด','มือ','หัว','เพชร','ฟ้า','ดาว','พระ','ศึก'];
const _RN_MID=['รบ','พิชิต','ชัย','วีร','กล้า','ฮึก','บู๊','เก่ง','เทพ','ดุ','แกร่ง','โหด','ลับ','ใจ','ฮาร์ด','สาย','ดาร์ก','ไฟ','น้ำแข็ง','สายฟ้า'];
const _RN_SUFFIX=['เหล็ก','ทอง','เพชร','มังกร','เสือ','สิงห์','หมาป่า','อินทรี','พยัคฆ์','นักรบ','จอมทัพ','อมตะ','นิรันดร์','ตำนาน','ปีศาจ','เทวดา','สายเลือด','ผู้กล้า','ไร้พ่าย','ไม่แพ้'];
function rollRandomName(){
  const inp=document.getElementById('profileNameInput');
  if(!inp) return;
  // animate ปั่น 6 ครั้ง แล้วหยุดที่ชื่อจริง
  const final=_RN_PREFIX[Math.random()*_RN_PREFIX.length|0]+_RN_MID[Math.random()*_RN_MID.length|0]+_RN_SUFFIX[Math.random()*_RN_SUFFIX.length|0];
  let count=0; const total=8;
  const timer=setInterval(()=>{
    inp.value=_RN_PREFIX[Math.random()*_RN_PREFIX.length|0]+_RN_MID[Math.random()*_RN_MID.length|0]+_RN_SUFFIX[Math.random()*_RN_SUFFIX.length|0];
    count++;
    if(count>=total){ clearInterval(timer); inp.value=final; }
  },80);
}
function updateAvatarDisplay(){
  const av=localStorage.getItem('tq_avatar')||'⚔️';
  const el=document.getElementById('cloudAvatarDisplay');
  if(!el) return;
  if(av.startsWith('data:')){
    el.innerHTML='';
    const img=document.createElement('img');
    img.src=av; img.style.cssText='width:20px;height:20px;border-radius:50%;object-fit:cover;vertical-align:middle;';
    el.appendChild(img);
  } else { el.textContent=av; }
}
function selectAvatar(e){
  localStorage.setItem('tq_avatar',e);
  const idx=PROFILE_AVATARS.indexOf(e);
  document.querySelectorAll('.profile-avatar-btn').forEach(b=>b.classList.toggle('selected',b.dataset.avi==idx));
  const avBig=document.getElementById('profileAvatarBig');
  if(avBig){if(e.startsWith('data:')){avBig.textContent='';avBig.style.backgroundImage=`url(${e})`;avBig.style.backgroundSize='cover';}else{avBig.textContent=e;avBig.style.backgroundImage='';}}
  updateAvatarDisplay();
}

/* ══ DRAW AVATAR ══ */
const DRAW_COLORS=['#ffffff','#000000','#f44336','#ff9800','#ffeb3b','#4caf50','#2196f3','#9c27b0','#00bcd4','#ff5722','#795548','#607d8b','#e91e63','#3f51b5','#69f0ae','#ffd24d'];
let _drawTool='brush', _drawColor=DRAW_COLORS[0], _drawDown=false, _drawCtx=null, _drawLast=null;

function toggleDrawPanel(){
  const panel=document.getElementById('drawPanel');
  const arrow=document.getElementById('drawToggleArrow');
  if(!panel) return;
  const open=panel.style.display==='none';
  panel.style.display=open?'':'none';
  if(arrow) arrow.textContent=open?'▲':'▼';
  if(open) initDrawCanvas();
}
function initDrawCanvas(){
  const cv=document.getElementById('drawCanvas'); if(!cv) return;
  _drawCtx=cv.getContext('2d');
  // fill background
  _drawCtx.fillStyle='#1a1a2e'; _drawCtx.fillRect(0,0,200,200);
  // restore saved drawing
  const saved=localStorage.getItem('tq_draw_draft');
  if(saved){const img=new Image();img.onload=()=>_drawCtx.drawImage(img,0,0);img.src=saved;}
  // color swatches
  const dc=document.getElementById('drawColors');
  if(dc) dc.innerHTML=DRAW_COLORS.map((c,i)=>`<div class="draw-color-swatch${i===0?' active':''}" style="background:${c}" onclick="_pickColor('${c}',this)" title="${c}"></div>`).join('');
  // events
  cv.addEventListener('pointerdown',_drawStart);
  cv.addEventListener('pointermove',_drawMove);
  cv.addEventListener('pointerup',_drawEnd);
  cv.addEventListener('pointercancel',_drawEnd);
  cv.addEventListener('contextmenu',e=>e.preventDefault());
}
function _pickColor(c,el){
  _drawColor=c;
  document.querySelectorAll('.draw-color-swatch').forEach(s=>s.classList.remove('active'));
  if(el) el.classList.add('active');
  setDrawTool('brush');
}
function setDrawTool(t){
  _drawTool=t;
  document.getElementById('drawBrushBtn')?.classList.toggle('active',t==='brush');
  document.getElementById('drawEraserBtn')?.classList.toggle('active',t==='eraser');
  document.getElementById('drawFillBtn')?.classList.toggle('active',t==='fill');
}
function _getPos(cv,e){
  const r=cv.getBoundingClientRect();
  const scaleX=cv.width/r.width, scaleY=cv.height/r.height;
  return {x:(e.clientX-r.left)*scaleX, y:(e.clientY-r.top)*scaleY};
}
function _drawStart(e){
  e.preventDefault(); _drawDown=true;
  const pos=_getPos(this,e);
  if(_drawTool==='fill'){_floodFill(Math.round(pos.x),Math.round(pos.y),_drawColor);return;}
  _drawCtx.beginPath(); _drawCtx.moveTo(pos.x,pos.y);
  _drawLast=pos;
  _drawDot(pos);
}
function _drawMove(e){
  if(!_drawDown) return; e.preventDefault();
  const pos=_getPos(this,e);
  _drawCtx.beginPath();
  _drawCtx.moveTo(_drawLast.x,_drawLast.y);
  _drawCtx.lineTo(pos.x,pos.y);
  const sz=Number(document.getElementById('drawSize')?.value||8);
  _drawCtx.lineWidth=_drawTool==='eraser'?sz*2:sz;
  _drawCtx.lineCap='round'; _drawCtx.lineJoin='round';
  _drawCtx.strokeStyle=_drawTool==='eraser'?'#1a1a2e':_drawColor;
  _drawCtx.globalCompositeOperation=_drawTool==='eraser'?'source-over':'source-over';
  _drawCtx.stroke();
  _drawLast=pos;
}
function _drawDot(pos){
  const sz=Number(document.getElementById('drawSize')?.value||8);
  _drawCtx.beginPath();
  _drawCtx.arc(pos.x,pos.y,(_drawTool==='eraser'?sz:sz/2),0,Math.PI*2);
  _drawCtx.fillStyle=_drawTool==='eraser'?'#1a1a2e':_drawColor;
  _drawCtx.fill();
}
function _drawEnd(){_drawDown=false;_drawLast=null;}
function _floodFill(sx,sy,fillCol){
  const d=_drawCtx.getImageData(0,0,200,200), pix=d.data;
  const idx=(sx+sy*200)*4;
  const tr=pix[idx],tg=pix[idx+1],tb=pix[idx+2],ta=pix[idx+3];
  const r2=parseInt(fillCol.slice(1,3),16),g2=parseInt(fillCol.slice(3,5),16),b2=parseInt(fillCol.slice(5,7),16);
  if(tr===r2&&tg===g2&&tb===b2) return;
  const stack=[[sx,sy]];
  while(stack.length){
    const [x,y]=stack.pop();
    if(x<0||x>=200||y<0||y>=200) continue;
    const i=(x+y*200)*4;
    if(pix[i]!==tr||pix[i+1]!==tg||pix[i+2]!==tb||pix[i+3]!==ta) continue;
    pix[i]=r2;pix[i+1]=g2;pix[i+2]=b2;pix[i+3]=255;
    stack.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
  }
  _drawCtx.putImageData(d,0,0);
}
function clearDrawCanvas(){
  if(!_drawCtx) return;
  _drawCtx.fillStyle='#1a1a2e'; _drawCtx.fillRect(0,0,200,200);
  localStorage.removeItem('tq_draw_draft');
}
function useDrawnAvatar(){
  const cv=document.getElementById('drawCanvas'); if(!cv||!_drawCtx) return;
  // save draft
  const draft=cv.toDataURL('image/png');
  localStorage.setItem('tq_draw_draft',draft);
  // crop to circle → save as avatar (80x80)
  const off=document.createElement('canvas'); off.width=off.height=80;
  const ctx2=off.getContext('2d');
  ctx2.beginPath(); ctx2.arc(40,40,40,0,Math.PI*2); ctx2.clip();
  ctx2.drawImage(cv,0,0,80,80);
  const url=off.toDataURL('image/png');
  localStorage.setItem('tq_avatar',url);
  // update big display
  const avBig=document.getElementById('profileAvatarBig');
  if(avBig){avBig.textContent='';avBig.style.backgroundImage=`url(${url})`;avBig.style.backgroundSize='cover';avBig.style.backgroundPosition='center';}
  document.querySelectorAll('.profile-avatar-btn').forEach(b=>b.classList.remove('selected'));
  updateAvatarDisplay();
  showToast('🖌️ ใช้รูปที่วาดแล้ว!');
}
function saveProfile(){
  const inp=document.getElementById('profileNameInput');
  const nm=(inp?inp.value.trim():'')||'ผู้เล่น';
  // อัปชื่อใน local runs ทั้งหมด เพื่อไม่ให้สถิติหายเมื่อเปลี่ยนชื่อ
  try{
    const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
    const oldName=localStorage.getItem('tq_last_name')||'';
    if(oldName&&oldName!==nm){
      runs.forEach(r=>{if(r.name===oldName) r.name=nm;});
      localStorage.setItem('tq_runs',JSON.stringify(runs));
    }
  }catch(e){}
  localStorage.setItem('tq_displayName',nm);
  localStorage.setItem('tq_last_name',nm);
  if(window.cloudSave) cloudSave();
  const msg=document.getElementById('profileSaveMsg');
  if(msg){msg.style.display='block';setTimeout(()=>msg.style.display='none',2000);}
  showToast('💾 บันทึกโปรไฟล์แล้ว!');
}

/* ══ LEADERBOARD ══ */
let lbTab=0;
function openLeaderboard(){
  showScreen('leaderboard',true);
  switchLbTab(0);
}
function switchLbTab(i){
  lbTab=i;
  for(let j=0;j<3;j++) document.getElementById('lbt'+j).classList.toggle('active',j===i);
  renderLb();
}
function renderLb(){
  const body=document.getElementById('lbBody');
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  const lastName=localStorage.getItem('tq_last_name')||'';
  if(lbTab===0){
    // My Stats — ใช้ทุก run ใน local storage (local runs เป็นของผู้เล่นคนนี้เสมอ ไม่กรองชื่อเพื่อป้องกันสถิติหายเมื่อเปลี่ยนชื่อ)
    const myRuns=runs;
    const egRuns=myRuns.filter(r=>r.mode==='endgame');
    const p=loadProgress();
    const totalStars=Object.values(p).reduce((a,b)=>a+b,0);
    const bestWave=egRuns.length?Math.max(...egRuns.map(r=>r.wave)):0;
    const bestScore=egRuns.length?Math.max(...egRuns.map(r=>r.score)):0;
    const bestKills=egRuns.length?Math.max(...egRuns.map(r=>r.kills||0)):0;
    const bestCombo=egRuns.length?Math.max(...egRuns.map(r=>r.maxCombo||1)):1;
    const totalEgKills=egRuns.reduce((a,r)=>a+(r.kills||0),0);
    const achCount=loadAchievements().size;
    const av=localStorage.getItem('tq_avatar')||'⚔️';
    const displayName=lastName||'ผู้เล่น';
    const stagesCleared=Object.keys(p).filter(k=>(p[k]||0)>=1).length;
    const totalStagesAvail=STAGES.filter(s=>!s.comingSoon).length;
    const avHtml=av.startsWith('data:')?`<img src="${av}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`:`<span>${av}</span>`;
    let html=`<div class="my-stat-hero">
      <div class="my-stat-hero-av">${avHtml}</div>
      <div class="my-stat-hero-info">
        <div class="my-stat-hero-name">${displayName}</div>
        <div class="my-stat-hero-sub">🗺️ ${stagesCleared}/${totalStagesAvail} ด่าน · 🏅 ${achCount}/${ACHIEVEMENTS.length} รางวัล</div>
      </div>
    </div>
    <div class="my-stat-section">🔥 เอนด์เกม</div>
    <div class="my-stat-grid">
      <div class="my-stat-card eg"><div class="my-stat-val">${bestWave||'—'}</div><div class="my-stat-lbl">🌊 เวฟสูงสุด</div></div>
      <div class="my-stat-card eg"><div class="my-stat-val">${bestScore?bestScore.toLocaleString():'—'}</div><div class="my-stat-lbl">⭐ คะแนนสูงสุด</div></div>
      <div class="my-stat-card eg"><div class="my-stat-val">${bestKills||'—'}</div><div class="my-stat-lbl">💀 ฆ่าสูงสุด/รอบ</div></div>
      <div class="my-stat-card eg"><div class="my-stat-val">×${bestCombo}</div><div class="my-stat-lbl">⚡ คอมโบสูงสุด</div></div>
    </div>
    <div class="my-stat-section">📖 เนื้อเรื่อง</div>
    <div class="my-stat-grid">
      <div class="my-stat-card story"><div class="my-stat-val">${stagesCleared}/${totalStagesAvail}</div><div class="my-stat-lbl">🗺️ ด่านที่ผ่าน</div></div>
      <div class="my-stat-card story"><div class="my-stat-val">${totalStars}★</div><div class="my-stat-lbl">⭐ ดาวรวม</div></div>
    </div>
    <div class="my-stat-section">📊 รวม</div>
    <div class="my-stat-grid">
      <div class="my-stat-card gen"><div class="my-stat-val">${totalEgKills.toLocaleString()}</div><div class="my-stat-lbl">💀 ฆ่ารวม (เอนด์เกม)</div></div>
      <div class="my-stat-card gen"><div class="my-stat-val">${egRuns.length}</div><div class="my-stat-lbl">🔥 รอบเอนด์เกม</div></div>
    </div>`;
    if(myRuns.length){
      html+='<div class="run-hdr">⏱ ประวัติล่าสุด</div>';
      myRuns.slice(0,8).forEach(r=>{
        html+=`<div class="run-row">
          <div class="run-mode-icon">${r.mode==='endgame'?'🔥':'⚔️'}</div>
          <div class="run-info"><div class="run-name">${r.name}</div>
          <div class="run-meta">${r.mode==='endgame'?'เอนด์เกม · '+r.diff:'เนื้อเรื่อง · '+r.stage} · ${r.date}</div></div>
          <div class="run-val"><div class="run-score">${r.mode==='endgame'?r.score:''}</div><div class="run-wave">${r.mode==='endgame'?'เวฟ '+r.wave:r.stage}</div></div>
        </div>`;
      });
    } else {
      html+='<div class="lb-empty">ยังไม่มีข้อมูล<br><span style="font-size:11px;color:#333;">เล่นเกมแล้วบันทึกชื่อ</span></div>';
    }
    body.innerHTML=html;
  } else if(lbTab===1){
    // TOP 10 เซิฟเวอร์ — single combined table: avatar / name / score / wave
    const myName=lastName;
    const myAv=localStorage.getItem('tq_avatar')||'🎮';
    const _rankBadge=i=>{
      if(i===0) return '<span class="lb-rank-1">👑</span>';
      if(i===1) return '<span class="lb-rank-2">⚔️</span>';
      if(i===2) return '<span class="lb-rank-3">🛡️</span>';
      return `<span class="lb-rank-num">${i+1}</span>`;
    };
    const _diffEmoji={'ง่าย':'🟢','ปกติ':'🟡','ยาก':'🔴'};
    const _gridCols='40px 38px 1fr 52px 80px 56px';
    const _renderCombined=(entries)=>{
      const sorted=[...entries].sort((a,b)=>b.score-a.score).slice(0,10);
      if(!sorted.length) return `<div class="lb-empty">ยังไม่มีข้อมูล</div>`;
      let h=`<div class="lbt-header" style="grid-template-columns:${_gridCols};"><span>#</span><span></span><span>ชื่อ</span><span>ระดับ</span><span>⭐ คะแนน</span><span>🌊 เวฟ</span></div>`;
      sorted.forEach((r,i)=>{
        const me=r.name===myName;
        const rc=`lbt-row${i===0?' lbt-row-1':i===1?' lbt-row-2':i===2?' lbt-row-3':''}${me?' lbt-me':''}`;
        const av=me?myAv:(r.avatar||'🎮');
        const avHtml=av.startsWith('data:')?`<img src="${av}" style="width:26px;height:26px;border-radius:50%;object-fit:cover;vertical-align:middle;">`:`<span style="font-size:20px;line-height:26px;">${av}</span>`;
        h+=`<div class="${rc}" style="grid-template-columns:${_gridCols};align-items:center;">
          <span class="lbt-rank">${_rankBadge(i)}</span>
          <span style="display:flex;align-items:center;justify-content:center;">${avHtml}</span>
          <span class="lbt-name">${r.name}</span>
          <span style="display:flex;flex-direction:column;align-items:center;line-height:1.05;"><span style="font-size:13px;">${_diffEmoji[r.diff]||'⚪'}</span><span style="font-size:8.5px;color:#aaa;">${r.diff||'—'}</span></span>
          <span class="lbt-score">${r.score.toLocaleString()}</span>
          <span class="lbt-score" style="color:#80cbc4;">${r.wave}</span>
        </div>`;
      });
      return h;
    };
    const _LB_PRIZE_HTML=[
      `🥇 <span class="gico"></span>2000 + 🎫50`,
      `🥈 <span class="gico"></span>1000 + 🎫25`,
      `🥉 <span class="gico"></span>500 + 🎫10`,
      `4–6 💰500 ทองถาวร`,`4–6 💰500 ทองถาวร`,`4–6 💰500 ทองถาวร`,
      `7–10 💰200 ทองถาวร`,`7–10 💰200 ทองถาวร`,`7–10 💰200 ทองถาวร`,`7–10 💰200 ทองถาวร`,
    ];
    const _prizeLabel=(i)=>{
      if(i===0) return `<span class="gico"></span>2000 + 🎫50`;
      if(i===1) return `<span class="gico"></span>1000 + 🎫25`;
      if(i===2) return `<span class="gico"></span>500 + 🎫10`;
      if(i<=5)  return `💰500`;
      return `💰200`;
    };
    const _fmtCountdown=ms=>{if(ms<=0)return'รีเซ็ตเร็วๆนี้';const d=Math.floor(ms/86400000),h=Math.floor((ms%86400000)/3600000),m=Math.floor((ms%3600000)/60000);return(d?d+'ว ':'')+h+'ช '+m+'น';};
    const _svBanner=`<div class="lb-sv-hd"><div class="lb-sv-crown">👑</div><div class="lb-sv-title">TOP 10 เซิฟเวอร์</div><div class="lb-sv-sub" id="lbSeasonSub">เรียงตามคะแนนสูงสุด</div></div>`;
    const _prizeTable=`<div class="lb-prize-box"><div class="lb-prize-title">🏆 รางวัลประจำรอบ</div><div class="lb-prize-row"><span>🥇 อันดับ 1</span><span><span class="gico"></span> 2000 + 🎫 50</span></div><div class="lb-prize-row"><span>🥈 อันดับ 2</span><span><span class="gico"></span> 1000 + 🎫 25</span></div><div class="lb-prize-row"><span>🥉 อันดับ 3</span><span><span class="gico"></span> 500 + 🎫 10</span></div><div class="lb-prize-row"><span>4–6 อันดับ</span><span>💰 500 ทองถาวร</span></div><div class="lb-prize-row"><span>7–10 อันดับ</span><span>💰 200 ทองถาวร</span></div><div class="lb-prize-note">⚠️ ต้อง Login Google เพื่อรับรางวัล</div></div>`;
    body.innerHTML=_svBanner+'<div class="lb-empty" style="color:#aaa;padding:20px;">⏳ กำลังโหลด...</div>';
    const _myUid=typeof getPlayerId==='function'?getPlayerId():'';
    fetch('/api/leaderboard?uid='+encodeURIComponent(_myUid),{signal:AbortSignal.timeout(5000)})
      .then(r=>r.json())
      .then(d=>{
        const entries=d.entries||[];
        const sorted=[...entries].sort((a,b)=>b.score-a.score).slice(0,10);
        const myUid=_myUid;
        const myAv=localStorage.getItem('tq_avatar')||'🎮';
        const _gridCols2='40px 38px 1fr 52px 80px 56px 90px';
        let h=`<div class="lbt-header" style="grid-template-columns:${_gridCols2};"><span>#</span><span></span><span>ชื่อ</span><span>ระดับ</span><span>⭐ คะแนน</span><span>🌊 เวฟ</span><span style="color:#ffd24d;">🎁 รางวัล</span></div>`;
        const _diffEmoji2={'ง่าย':'🟢','ปกติ':'🟡','ยาก':'🔴'};
        sorted.forEach((r,i)=>{
          const me=r.uid?r.uid===myUid:r.name===lastName;
          const rc=`lbt-row${i===0?' lbt-row-1':i===1?' lbt-row-2':i===2?' lbt-row-3':''}${me?' lbt-me':''}`;
          const av=me?myAv:(r.avatar||'🎮');
          const avHtml=av.startsWith('data:')?`<img src="${av}" style="width:26px;height:26px;border-radius:50%;object-fit:cover;vertical-align:middle;">`:`<span style="font-size:20px;line-height:26px;">${av}</span>`;
          h+=`<div class="${rc}" style="grid-template-columns:${_gridCols2};align-items:center;">
            <span class="lbt-rank">${_rankBadge(i)}</span>
            <span style="display:flex;align-items:center;justify-content:center;">${avHtml}</span>
            <span class="lbt-name">${r.name}</span>
            <span style="display:flex;flex-direction:column;align-items:center;line-height:1.05;"><span style="font-size:13px;">${_diffEmoji2[r.diff]||'⚪'}</span><span style="font-size:8.5px;color:#aaa;">${r.diff||'—'}</span></span>
            <span class="lbt-score">${r.score.toLocaleString()}</span>
            <span class="lbt-score" style="color:#80cbc4;">${r.wave}</span>
            <span style="font-size:10px;color:#ffd24d;text-align:right;">${_prizeLabel(i)}</span>
          </div>`;
        });
        if(!sorted.length) h='<div class="lb-empty">ยังไม่มีข้อมูล</div>';
        // แสดง rank ของตัวเองถ้าอยู่นอก TOP 10
        if(d.myEntry){
          const me=d.myEntry;
          const av=myAv;
          const avHtml=av.startsWith('data:')?`<img src="${av}" style="width:26px;height:26px;border-radius:50%;object-fit:cover;vertical-align:middle;">`:`<span style="font-size:20px;line-height:26px;">${av}</span>`;
          h+=`<div style="text-align:center;color:rgba(255,255,255,.25);font-size:11px;padding:6px 0;letter-spacing:2px;">· · ·</div>`;
          h+=`<div class="lbt-row lbt-me" style="grid-template-columns:${_gridCols2};align-items:center;border:1px solid rgba(255,210,77,.35);border-radius:8px;">
            <span class="lbt-rank"><span class="lb-rank-num">${me.rank}</span></span>
            <span style="display:flex;align-items:center;justify-content:center;">${avHtml}</span>
            <span class="lbt-name">${me.name}</span>
            <span style="display:flex;flex-direction:column;align-items:center;line-height:1.05;"><span style="font-size:13px;">${_diffEmoji2[me.diff]||'⚪'}</span><span style="font-size:8.5px;color:#aaa;">${me.diff||'—'}</span></span>
            <span class="lbt-score">${me.score.toLocaleString()}</span>
            <span class="lbt-score" style="color:#80cbc4;">${me.wave}</span>
            <span style="font-size:10px;color:#aaa;text-align:right;">—</span>
          </div>`;
        }
        body.innerHTML=_svBanner+h+_prizeTable;
        if(d.resetAt){
          _lbResetAt=d.resetAt;_lbSeasonNum=d.season||1;
          const _updCD=()=>{const sub=document.getElementById('lbSeasonSub');if(!sub){clearInterval(_lbCountdownTimer);_lbCountdownTimer=0;return;}sub.textContent='SS'+_lbSeasonNum+' · รีเซ็ตใน '+_fmtCountdown(_lbResetAt-Date.now());};
          _updCD();
          if(_lbCountdownTimer) clearInterval(_lbCountdownTimer);
          _lbCountdownTimer=setInterval(_updCD,60000);
        }
      })
      .catch(()=>{
        const allRuns=[...runs].filter(r=>r.mode==='endgame');
        const offlineBanner=`<div class="lb-sv-hd"><div class="lb-sv-crown">📴</div><div class="lb-sv-title" style="color:#aaa;">Offline</div><div class="lb-sv-sub">ข้อมูลในเครื่อง</div></div>`;
        body.innerHTML=offlineBanner+_renderCombined(allRuns);
      });
    return; // async
  } else if(lbTab===2){
    // กระดานดาว — story TOP 10 by totalStars from server
    const myName=lastName;
    const _rb=i=>i===0?'<span class="lb-rank-1">👑</span>':i===1?'<span class="lb-rank-2">🥈</span>':i===2?'<span class="lb-rank-3">🥉</span>':`<span class="lb-rank-num">${i+1}</span>`;
    const mySlAv=localStorage.getItem('tq_avatar')||'🎮';
    const _hd=`<div class="lb-sv-hd"><div class="lb-sv-crown">⭐</div><div class="lb-sv-title">กระดานดาว เนื้อเรื่อง</div><div class="lb-sv-sub">เรียงตามดาวรวมสูงสุด</div></div>`;
    body.innerHTML=_hd+'<div class="lb-empty" style="color:#aaa;padding:20px;">⏳ กำลังโหลด...</div>';
    fetch('/api/story-leaderboard',{signal:AbortSignal.timeout(5000)})
      .then(r=>r.json())
      .then(d=>{
        const entries=d.entries||[];
        let html=_hd;
        if(!entries.length){ body.innerHTML=html+'<div class="lb-empty">ยังไม่มีข้อมูล — ผ่านด่านแล้วมาดูอันดับ!</div>'; return; }
        html+=`<div class="lbt-header" style="grid-template-columns:44px 38px 1fr 60px 70px;"><span>#</span><span></span><span>ชื่อ</span><span>ด่าน</span><span>⭐ ดาว</span></div>`;
        entries.forEach((r,i)=>{
          const isMe=r.name===myName;
          const rc=`lbt-row${i===0?' lbt-row-1':i===1?' lbt-row-2':i===2?' lbt-row-3':''}${isMe?' lbt-me':''}`;
          const sav=isMe?mySlAv:(r.avatar||'🎮');
          const savHtml=sav.startsWith('data:')?`<img src="${sav}" style="width:26px;height:26px;border-radius:50%;object-fit:cover;vertical-align:middle;">`:`<span style="font-size:20px;line-height:26px;">${sav}</span>`;
          html+=`<div class="${rc}" style="grid-template-columns:44px 38px 1fr 60px 70px;align-items:center;"><span class="lbt-rank">${_rb(i)}</span><span style="display:flex;align-items:center;justify-content:center;">${savHtml}</span><span class="lbt-name">${r.name}</span><span class="lbt-wave" style="color:#80cbc4;">${r.stagesCleared}</span><span class="lbt-score" style="color:#ffd54f;">${r.totalStars}★</span></div>`;
        });
        body.innerHTML=html;
      })
      .catch(()=>{
        // fallback: local progress only
        const p=loadProgress();
        const totalStars=Object.values(p).reduce((a,b)=>a+b,0);
        const stagesCleared=Object.keys(p).filter(k=>(p[k]||0)>=1).length;
        body.innerHTML=_hd+`<div style="text-align:center;padding:20px;"><div style="font-size:13px;color:rgba(255,255,255,.5);">📴 Offline — ข้อมูลของคุณ</div><div style="font-size:28px;font-weight:900;color:#ffd54f;margin-top:12px;">${totalStars}★</div><div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:4px;">${stagesCleared} ด่านที่ผ่าน</div></div>`;
      });
    return; // async
  }
}
function deleteRun(idx){
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  if(idx<0||idx>=runs.length) return;
  runs.splice(idx,1);
  localStorage.setItem('tq_runs',JSON.stringify(runs));
  renderLb();
}

