
/* ══ PROGRESS ══ */
function loadProgress(){try{return JSON.parse(localStorage.getItem('tq_progress')||'{}');}catch(e){return{};}}
function saveProgress(si,stars){
  const p=loadProgress();
  /* บันทึกเสมอถ้า stars ใหม่มากกว่าของเดิม หรือยังไม่เคยบันทึกด่านนี้เลย */
  if(p[si]===undefined||(stars>0&&stars>(p[si]||0))){
    p[si]=stars; localStorage.setItem('tq_progress',JSON.stringify(p));
  }
  checkAchievements(); // ตรวจ achievement ทุกครั้งที่ clear ด่าน
}
function isStageUnlocked(si){
  if(si===0) return true;
  if(si>=STAGES.length||STAGES[si].comingSoon) return false;
  return (loadProgress()[si-1]||0)>=1;
}

let seenMonsters=new Set(JSON.parse(localStorage.getItem('tq_seen')||'[]'));

/* ══ ACHIEVEMENT SYSTEM ══ */
const ACHIEVEMENTS=[
  // Story
  {id:'s0',  icon:'🌿',cat:'story',  name:'ก้าวแรก',        desc:'ผ่านด่าน Grassland'},
  {id:'s4',  icon:'💰',cat:'story',  name:'รักสมบัติ',       desc:'ผ่านด่าน Treasure Valley'},
  {id:'s7',  icon:'🏰',cat:'story',  name:'ป้อมมืด',         desc:'ผ่านด่าน Dark Fortress'},
  {id:'s9',  icon:'💀',cat:'story',  name:'ผู้พิชิตความมืด', desc:'ผ่านด่านสุดท้าย Dark Tower Summit'},
  {id:'sall',icon:'👑',cat:'story',  name:'ราชันผู้พิทักษ์', desc:'ผ่านครบทั้ง 10 ด่าน'},
  // Combat
  {id:'k100', icon:'⚔️',cat:'combat', name:'นักรบ',          desc:'สังหารรวม 100 ศัตรู'},
  {id:'k1000',icon:'🗡️',cat:'combat', name:'จอมนักรบ',       desc:'สังหารรวม 1,000 ศัตรู'},
  {id:'k5000',icon:'💥',cat:'combat', name:'เทพสงคราม',      desc:'สังหารรวม 5,000 ศัตรู'},
  {id:'boss1',icon:'👹',cat:'combat', name:'นักล่าบอส',      desc:'สังหาร Boss ครั้งแรก'},
  {id:'jmn',  icon:'👁️',cat:'combat', name:'ปราบจอมมาร',    desc:'สังหารจอมมารได้'},
  {id:'heal50',icon:'🧙',cat:'combat',name:'ตัดรากถอนโคน',   desc:'สังหารหมอผีรวม 50 ตัว'},
  // Skill
  {id:'combo5', icon:'🔥',cat:'skill', name:'Hot Streak!',   desc:'ทำ Combo ×5 ขึ้นไปได้'},
  {id:'combo10',icon:'💫',cat:'skill', name:'ULTRA COMBO',   desc:'ทำ Combo ×10 ขึ้นไปได้'},
  {id:'nodmg',  icon:'🛡️',cat:'skill', name:'ไร้ที่ติ',       desc:'ผ่าน Wave โดยไม่เสีย HP'},
  {id:'sc10k',  icon:'⭐',cat:'skill', name:'นักเก็บแต้ม',    desc:'ทำคะแนน 10,000 ในเกมเดียว'},
  {id:'sc50k',  icon:'🌟',cat:'skill', name:'ราชาแต้ม',      desc:'ทำคะแนน 50,000 ในเกมเดียว'},
  // Endgame
  {id:'eg3',icon:'🔥',cat:'endgame',name:'ผู้รอดชีวิต',     desc:'ผ่าน Endgame Round 3+'},
  {id:'eg7',icon:'☠️',cat:'endgame',name:'ไม่มีวันตาย',     desc:'ผ่าน Endgame Round 7+'},
  // Collection
  {id:'cdx_m',icon:'📖',cat:'collect',name:'นักวิชาการ',    desc:'พบ Monster ทุกตัวใน Codex'},
  {id:'cdx_t',icon:'🏗️',cat:'collect',name:'สถาปนิก',       desc:'ปลดล็อก Tower ทุกแบบ'},
];
const ACH_CATS={story:'📜 เนื้อเรื่อง',combat:'⚔️ การต่อสู้',skill:'🎯 ทักษะ',endgame:'🔥 Endgame',collect:'📚 สะสม'};

function loadAchievements(){
  try{return new Set(JSON.parse(localStorage.getItem('tq_ach')||'[]'));}catch(e){return new Set();}
}
function _saveAch(id){
  const s=loadAchievements(); s.add(id);
  localStorage.setItem('tq_ach',JSON.stringify([...s]));
}
function loadAchStats(){
  try{return Object.assign({totalKills:0,healerKills:0,bossKills:0,jommarnKills:0,wavesNoDmg:0,waveHpAtStart:0},
    JSON.parse(localStorage.getItem('tq_achstats')||'{}'));}catch(e){return{totalKills:0,healerKills:0,bossKills:0,jommarnKills:0,wavesNoDmg:0,waveHpAtStart:0};}
}
function saveAchStats(s){localStorage.setItem('tq_achstats',JSON.stringify(s));}

let _achQueue=[];
let _achShowing=false;
function _showNextAchNotif(){
  if(_achShowing||_achQueue.length===0) return;
  const ach=_achQueue.shift();
  _achShowing=true;
  const el=document.getElementById('achNotif');
  document.getElementById('achNotifIco').textContent=ach.icon;
  document.getElementById('achNotifName').textContent=ach.name;
  document.getElementById('achNotifDesc').textContent=ach.desc;
  el.classList.add('show');
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>{_achShowing=false;_showNextAchNotif();},500);
  },3200);
}
function unlockAchievement(id){
  const already=loadAchievements();
  if(already.has(id)) return;
  const ach=ACHIEVEMENTS.find(a=>a.id===id);
  if(!ach) return;
  _saveAch(id);
  _achQueue.push(ach);
  _showNextAchNotif();
  _updateAchBadge();
}
function _updateAchBadge(){
  // แสดง badge จำนวน ach ที่ unlock ล่าสุด (ยังไม่ได้ดู)
  const unlocked=loadAchievements();
  const seen=new Set(JSON.parse(localStorage.getItem('tq_ach_seen')||'[]'));
  const newCount=[...unlocked].filter(id=>!seen.has(id)).length;
  const badge=document.getElementById('achBadge');
  if(!badge) return;
  if(newCount>0){badge.textContent=newCount;badge.style.display='';}
  else badge.style.display='none';
}

function checkAchievements(){
  const prog=loadProgress();
  const cleared=Object.keys(prog).filter(k=>prog[k]>=1).map(Number);
  const stats=loadAchStats();
  const ach=loadAchievements();
  // Story
  if(cleared.includes(0)) unlockAchievement('s0');
  if(cleared.includes(4)) unlockAchievement('s4');
  if(cleared.includes(7)) unlockAchievement('s7');
  if(cleared.includes(9)) unlockAchievement('s9');
  if(cleared.length>=10)  unlockAchievement('sall');
  // Combat (cumulative stats)
  if(stats.totalKills>=100)  unlockAchievement('k100');
  if(stats.totalKills>=1000) unlockAchievement('k1000');
  if(stats.totalKills>=5000) unlockAchievement('k5000');
  if(stats.bossKills>=1)     unlockAchievement('boss1');
  if(stats.jommarnKills>=1)  unlockAchievement('jmn');
  if(stats.healerKills>=50)  unlockAchievement('heal50');
  // Skill (checked inline, but re-verify)
  if(stats.wavesNoDmg>=1) unlockAchievement('nodmg');
  // Collection
  const allM=ENAMES.length;
  if(seenMonsters.size>=allM) unlockAchievement('cdx_m');
  const tProg=loadProgress();
  const unlTowers=getUnlockedTowers();
  if(unlTowers.length>=TNAMES.length) unlockAchievement('cdx_t');
  // Endgame
  try{
    const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
    const best=Math.max(0,...runs.map(r=>r.round||0));
    if(best>=3) unlockAchievement('eg3');
    if(best>=7) unlockAchievement('eg7');
  }catch(e){}
}

function _onKillForAch(e){
  const s=loadAchStats();
  s.totalKills=(s.totalKills||0)+1;
  if(e.ti===10) s.healerKills=(s.healerKills||0)+1;
  if(MTYPE[e.ti]===1) s.bossKills=(s.bossKills||0)+1;
  if(e.ti===9) s.jommarnKills=(s.jommarnKills||0)+1;
  saveAchStats(s);
  // ตรวจทันทีสำหรับ milestone
  if(s.totalKills===100)  unlockAchievement('k100');
  if(s.totalKills===1000) unlockAchievement('k1000');
  if(s.totalKills===5000) unlockAchievement('k5000');
  if(s.bossKills===1)     unlockAchievement('boss1');
  if(s.jommarnKills===1)  unlockAchievement('jmn');
  if(s.healerKills===50)  unlockAchievement('heal50');
}
function _onComboForAch(n){
  if(n>=5)  unlockAchievement('combo5');
  if(n>=10) unlockAchievement('combo10');
}
function _onScoreForAch(score){
  if(score>=10000) unlockAchievement('sc10k');
  if(score>=50000) unlockAchievement('sc50k');
}
function _onWaveEndForAch(hpBefore,hpAfter){
  if(hpAfter>=hpBefore&&hpBefore>0){
    const s=loadAchStats(); s.wavesNoDmg=(s.wavesNoDmg||0)+1; saveAchStats(s);
    unlockAchievement('nodmg');
  }
}

/* คำนวณป้อมที่ปลดล็อคแล้วจาก progress */
function getUnlockedTowers(){
  const p=loadProgress();
  const unlocked=new Set();
  STAGES.forEach((s,si)=>{
    if(s.comingSoon||!s.unlockedTowers) return;
    /* ด่าน 0 = เปิดอยู่เสมอ, ด่านอื่น = ต้องผ่านอย่างน้อย 1 ดาว */
    if(si===0||(p[si-1]||0)>=1){
      s.unlockedTowers.forEach(t=>unlocked.add(t));
    }
  });
  return unlocked;
}
function unlockMonster(ti){
  if(!seenMonsters.has(String(ti))){
    seenMonsters.add(String(ti));
    localStorage.setItem('tq_seen',JSON.stringify([...seenMonsters]));
    // BUG FIX: showToast called only when game is active
    if(G&&!G.over&&!G.win) showToast('📖 Codex: '+ENAMES[ti]+' ปลดล็อคแล้ว!');
  }
}

/* ══ SAVE PROMPT ══ */
function showSavePrompt(isStoryWin){
  const box=document.getElementById('saveBox');
  const overlay=document.getElementById('saveOverlay');
  const inp=document.getElementById('saveNameInput');
  // try load last used name
  const lastName=localStorage.getItem('tq_last_name')||'';
  inp.value=lastName;
  if(isEndgame){
    box.classList.add('eg'); box.classList.remove('save-box');
    document.getElementById('saveTitle').textContent='🔥 Save Endgame Score';
    inp.classList.add('eg');
    document.getElementById('saveConfirmBtn').style.background='linear-gradient(180deg,#ff5252,#b71c1c)';
  } else {
    box.classList.remove('eg');
    document.getElementById('saveTitle').textContent='💾 Save Score';
    inp.classList.remove('eg');
    document.getElementById('saveConfirmBtn').style.background='';
  }
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  const isTop=runs.length<10||(isEndgame?G.score>Math.min(...runs.filter(r=>r.mode==='endgame').map(r=>r.score||0))
    :G.score>Math.min(...runs.filter(r=>r.mode==='story').map(r=>r.score||0)));
  document.getElementById('saveTopMsg').textContent=isTop&&runs.length>=3?'🏆 Top 10!':'';
  document.getElementById('saveResultGrid').innerHTML=isEndgame
    ?`<div class="save-res-item"><div class="save-res-lbl">🌊 Wave สูงสุด</div><div class="save-res-val">${G.wave}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">⭐ Score</div><div class="save-res-val">${G.score.toLocaleString()}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">💀 Total Kills</div><div class="save-res-val">${G.kills||0}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">⚡ Max Combo</div><div class="save-res-val">×${G.maxCombo||1}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">🔥 Round</div><div class="save-res-val">${egRound+1}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">⚙️ Difficulty</div><div class="save-res-val">${EG_DIFF_NAMES[egDiff]}</div></div>`
    :`<div class="save-res-item"><div class="save-res-lbl">⭐ Score</div><div class="save-res-val">${G.score}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">🗺️ Stage</div><div class="save-res-val">${currentStage.name}</div></div>`;
  overlay.style.display='flex';
  setTimeout(()=>inp.focus(),100);
}

function skipSave(){
  document.getElementById('saveOverlay').style.display='none';
  if(isEndgame){
    showEgResult();
  } else {
    document.getElementById('endOverlay').style.display='flex';
  }
}

function confirmSave(){
  const name=document.getElementById('saveNameInput').value.trim()||'ผู้เล่น';
  localStorage.setItem('tq_last_name',name);
  const run={
    name, score:G.score, wave:G.wave,
    mode:isEndgame?'endgame':'story',
    diff:isEndgame?EG_DIFF_NAMES[egDiff]:null,
    stage:isEndgame?null:currentStage.name,
    round:isEndgame?egRound+1:null,
    kills:isEndgame?(G.kills||0):null,
    maxCombo:isEndgame?(G.maxCombo||1):null,
    date:new Date().toLocaleDateString('th-TH'),
    ts:Date.now()
  };
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  runs.unshift(run);
  if(runs.length>50) runs.length=50; // keep max 50
  localStorage.setItem('tq_runs',JSON.stringify(runs));
  checkAchievements(); // check eg3/eg7 achievements after saving run
  showToast('💾 Save Scoreของ '+name+' แล้ว!');
  document.getElementById('saveOverlay').style.display='none';
  if(isEndgame) showEgResult();
  else document.getElementById('endOverlay').style.display='flex';
}

function showEgResult(){
  document.getElementById('endTitle').textContent='💀 Game Over — Endgame!';
  document.getElementById('starRow').textContent='🔥'.repeat(Math.min(5,Math.ceil(G.wave/5)));
  document.getElementById('endScore').textContent=
    'Wave '+G.wave+' · Score '+G.score.toLocaleString()+' · Kills '+( G.kills||0)+' · Max Combo ×'+(G.maxCombo||1);
  const banner=document.getElementById('unlockBanner');
  banner.style.display='block';
  banner.style.background='linear-gradient(135deg,rgba(180,0,0,.3),rgba(80,0,0,.2))';
  banner.style.borderColor='#ef5350';
  banner.innerHTML=`<strong>🔥 Round ${egRound+1}</strong> · Difficulty: ${EG_DIFF_NAMES[egDiff]} · <a href="#" onclick="openLeaderboard();return false;" style="color:#ffe082;">ดู Leaderboard →</a>`;
  document.getElementById('nextStageBtn').style.display='none';
  document.getElementById('endOverlay').style.display='flex';
}

