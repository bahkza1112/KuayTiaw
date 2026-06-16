
/* ══ PROGRESS ══ */
function loadProgress(){try{return JSON.parse(localStorage.getItem('tq_progress')||'{}');}catch(e){return{};}}
const GEM_STAR_TABLE=[0,10,20,30]; // เพชรสะสมตามดาว 0/1/2/3
function saveProgress(si,stars){
  const p=loadProgress();
  const prevStars=p[si]||0;
  let gain=0;
  /* บันทึกเสมอถ้า stars ใหม่มากกว่าของเดิม หรือยังไม่เคยบันทึกด่านนี้เลย */
  if(p[si]===undefined||(stars>0&&stars>(p[si]||0))){
    p[si]=stars; localStorage.setItem('tq_progress',JSON.stringify(p));
    if(stars>prevStars){
      gain=GEM_STAR_TABLE[stars]-GEM_STAR_TABLE[prevStars];
      const pgGain=PGOLD_STAR_TABLE[stars]-PGOLD_STAR_TABLE[prevStars||0];
      if(gain>0) addGems(gain);
      if(pgGain>0) addPGold(pgGain);
      if(gain>0&&pgGain>0) showToast('💎 +'+gain+' Soul Gems  🪙 +'+pgGain+' ทองถาวร!');
      else if(gain>0) showToast('💎 +'+gain+' Soul Gems!');
      else if(pgGain>0) showToast('🪙 +'+pgGain+' ทองถาวร!');
    }
  }
  checkAchievements(); // ตรวจ achievement ทุกครั้งที่ clear ด่าน
  return gain;
}

/* ══ BAG / INVENTORY ══ */
const BAG_ITEM_DEFS=[
  {id:'gold_pot',icon:'🧪',name:'ยาเพิ่มทอง',  desc:'ได้ทองเพิ่ม +100 เมื่อเริ่มด่าน',   color:'#ffd54f',type:'buff'},
  {id:'hp_pot',  icon:'💊',name:'ยาเพิ่ม HP',   desc:'HP ปราสาทเพิ่ม +3 เมื่อเริ่มด่าน',  color:'#ef5350',type:'buff'},
  {id:'dmg_pot', icon:'⚔️',name:'ยาเข้มแข็ง',  desc:'ดาเมจป้อมทั้งหมด +10% เมื่อเริ่มด่าน',color:'#ff8a65',type:'buff'},
  {id:'shard_c', icon:'🔹',name:'เศษสีน้ำเงิน', desc:'ชิ้นส่วนสะสมสามัญจากกล่องบรอนซ์',   color:'#64b5f6',type:'shard'},
  {id:'shard_r', icon:'💜',name:'เศษสีม่วง',    desc:'ชิ้นส่วนสะสมหายากจากกล่องเงิน',     color:'#ab47bc',type:'shard'},
  {id:'shard_e', icon:'🌟',name:'เศษสีทอง',    desc:'ชิ้นส่วนสะสมพิเศษจากกล่องทอง',     color:'#ff8f00',type:'shard'},
];
function loadBag(){try{return JSON.parse(localStorage.getItem('tq_bag')||'{}');}catch(e){return{};}}
function saveBag(b){localStorage.setItem('tq_bag',JSON.stringify(b));}
function loadBagNew(){try{return new Set(JSON.parse(localStorage.getItem('tq_bagnew')||'[]'));}catch(e){return new Set();}}
function saveBagNew(s){localStorage.setItem('tq_bagnew',JSON.stringify([...s]));}
function clearBagNew(){localStorage.removeItem('tq_bagnew');}
function addBagItem(id,qty){
  if(!qty||qty<=0)return;
  const b=loadBag();b[id]=(b[id]||0)+qty;saveBag(b);
  const n=loadBagNew();n.add(id);saveBagNew(n);
}
function getBagQty(id){return loadBag()[id]||0;}
function loadActiveBuff(){return localStorage.getItem('tq_abuff')||'';}
function setActiveBuff(id){localStorage.setItem('tq_abuff',id||'');}
function consumeActiveBuff(){
  const id=loadActiveBuff(); if(!id) return '';
  const b=loadBag();
  if((b[id]||0)>0){b[id]--;if(!b[id]) delete b[id]; saveBag(b); setActiveBuff(''); return id;}
  setActiveBuff(''); return '';
}

/* ══ GACHA ══ */
const GACHA_COST=30;
const GACHA_PITY=90; // รับ 001 guaranteed ทุก 90 pull
const GACHA_POOL=[
  {code:'001',icon:'🌑',name:'ป้อมมนตราโมฆะ', rarity:'legendary',color:'#b388ff',w:1,
   apply(){setVoidUnlocked();}},
  {code:'002',icon:'🌟',name:'ผงดาวตก x3',    rarity:'epic',   color:'#ff8f00',w:3,
   apply(){addMaterial(2,3);}},
  {code:'003',icon:'🌟',name:'ผงดาวตก x1',    rarity:'epic',   color:'#ffe082',w:6,
   apply(){addMaterial(2,1);}},
  {code:'004',icon:'🔘',name:'แกนเวทอสูร x3', rarity:'rare',   color:'#ce93d8',w:8,
   apply(){addMaterial(1,3);}},
  {code:'005',icon:'🔘',name:'แกนเวทอสูร x1', rarity:'rare',   color:'#ce93d8',w:10,
   apply(){addMaterial(1,1);}},
  {code:'006',icon:'🪨',name:'เศษหินมืด x5',  rarity:'uncommon',color:'#90caf9',w:15,
   apply(){addMaterial(0,5);}},
  {code:'007',icon:'⚔️',name:'ยาเข้มแข็ง',    rarity:'uncommon',color:'#ff8a65',w:12,
   apply(){addBagItem('dmg_pot',1);}},
  {code:'008',icon:'💊',name:'ยาเพิ่ม HP',     rarity:'common', color:'#ef5350',w:15,
   apply(){addBagItem('hp_pot',1);}},
  {code:'009',icon:'🧪',name:'ยาเพิ่มทอง',    rarity:'common', color:'#ffd54f',w:15,
   apply(){addBagItem('gold_pot',1);}},
  {code:'010',icon:'🪙',name:'ทองถาวร +25',   rarity:'common', color:'#ffd54f',w:15,
   apply(){addPGold(25);}},
];
// GACHA_POOL indexed by code number 1-10 for O(1) lookup
// Roll 1-100: 1→001(1%), 2→002(1%), 3→003(1%), 4→004(1%), 5→005(1%),
//             6→006(1%), 7→007(1%), 8→008(1%), 9→009(1%), 10→010(1%), 11-100→dud(90%)
function _gachaRoll(){
  const r=Math.floor(Math.random()*100)+1; // 1-100
  if(r<=10) return {prizeIdx:r-1, num:r}; // 001-010
  // dud: pick a random display number 011-999
  return {prizeIdx:-1, num:Math.floor(Math.random()*989)+11};
}
function loadGachaPity(){try{return Number(localStorage.getItem('tq_gpity'))||0;}catch(e){return 0;}}
function saveGachaPity(n){localStorage.setItem('tq_gpity',String(n));}
function doGachaPulls(n){
  const gems=loadGems();
  if(gems<GACHA_COST*n) return null;
  saveGems(gems-GACHA_COST*n);
  let pity=loadGachaPity();
  const results=[];
  for(let i=0;i<n;i++){
    pity++;
    let roll=_gachaRoll();
    if(pity>=GACHA_PITY){roll={prizeIdx:0,num:1};pity=0;} // guaranteed 001
    else if(roll.prizeIdx===0){pity=0;}
    const prize=roll.prizeIdx>=0?GACHA_POOL[roll.prizeIdx]:null;
    if(prize) prize.apply();
    else addBagItem('shard_c',1); // 🔹 dud pull → consolation เศษสีน้ำเงิน (v3.5.5)
    results.push({num:roll.num, prize});
  }
  saveGachaPity(pity);
  return results;
}

/* ══ PERSISTENT GOLD ══ */
const PGOLD_STAR_TABLE=[0,50,75,100]; // ทองถาวรที่ได้จากดาว 0/1★/2★/3★
function loadPGold(){try{return Number(localStorage.getItem('tq_pgold'))||0;}catch(e){return 0;}}
function savePGold(n){localStorage.setItem('tq_pgold',String(Math.max(0,Math.floor(n))));}
function addPGold(n){
  if(n<=0)return;
  savePGold(loadPGold()+Math.floor(n));
  if(typeof updateMenuGold==='function') updateMenuGold();
}
function loadPUpgrades(){try{return JSON.parse(localStorage.getItem('tq_pups')||'[]');}catch(e){return[];}}
function hasPUpgrade(idx){return loadPUpgrades().includes(idx);}
function buyPUpgrade(idx,cost){
  if(hasPUpgrade(idx)){showToast('✅ ซื้อแล้ว!');return;}
  const g=loadPGold();
  if(g<cost){showToast('🪙 ทองถาวรไม่พอ!');return;}
  savePGold(g-cost);
  const ups=loadPUpgrades(); ups.push(idx); localStorage.setItem('tq_pups',JSON.stringify(ups));
  showToast('✅ ซื้อ upgrade สำเร็จ!');
  if(typeof renderWorkshop==='function') renderWorkshop();
  if(typeof updateMenuGold==='function') updateMenuGold();
}

/* ══ SOUL GEMS / MATERIALS / WORKSHOP ══ */
function loadGems(){try{return Number(localStorage.getItem('tq_gems'))||0;}catch(e){return 0;}}
function saveGems(n){localStorage.setItem('tq_gems',String(Math.max(0,Math.floor(n))));}
function addGems(n){
  if(n<=0)return;
  saveGems(loadGems()+Math.floor(n));
  if(typeof updateMenuStats==='function') updateMenuStats();
  if(typeof checkAchievements==='function') checkAchievements();
}
function loadMaterials(){
  try{return Object.assign({0:0,1:0,2:0},JSON.parse(localStorage.getItem('tq_materials')||'{}'));}
  catch(e){return {0:0,1:0,2:0};}
}
function saveMaterials(m){localStorage.setItem('tq_materials',JSON.stringify(m));}
function addMaterial(idx,n){
  if(n<=0)return;
  const m=loadMaterials(); m[idx]=(m[idx]||0)+n; saveMaterials(m);
}
function isVoidUnlocked(){return localStorage.getItem('tq_voidUnlocked')==='1';}
function setVoidUnlocked(){localStorage.setItem('tq_voidUnlocked','1');}
function awardEndgameGems(finalWave,diff){
  const gemsEarned=Math.floor(Math.floor(finalWave/2)*(1+diff*0.5));
  if(gemsEarned>0){ addGems(gemsEarned); showToast('💎 +'+gemsEarned+' Soul Gems (Endgame)!'); }
  return gemsEarned;
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
  {id:'s9',  icon:'💀',cat:'story',  name:'ผู้พิชิตความมืด', desc:'ผ่านด่าน Dark Tower Summit'},
  {id:'s10', icon:'🌑',cat:'story',  name:'ผู้ยุติเงามืด',   desc:'ผ่านด่านสุดท้าย Shadow Remnant'},
  {id:'sall',icon:'👑',cat:'story',  name:'ราชันผู้พิทักษ์', desc:'ผ่านครบทั้ง 11 ด่าน'},
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
  {id:'eghw',icon:'🌩️',cat:'endgame',name:'ผู้ฝ่าวิกฤต',   desc:'ผ่าน Wave ใน Endgame ระดับยาก ขณะมีสภาพอากาศแปรปรวน'},
  // Collection
  {id:'cdx_m',icon:'📖',cat:'collect',name:'นักวิชาการ',    desc:'พบ Monster ทุกตัวใน Codex'},
  {id:'cdx_t',icon:'🏗️',cat:'collect',name:'สถาปนิก',       desc:'ปลดล็อก Tower ทุกแบบ'},
  {id:'gem1k',icon:'💎',cat:'collect',name:'นักสะสมมณีวิญญาณ',desc:'สะสม Soul Gems รวม 1,000'},
  {id:'void1',icon:'🌑',cat:'collect',name:'ผู้เชี่ยวชาญโมฆะ', desc:'ปลดล็อกป้อมมนตราโมฆะที่เวิร์กชอป'},
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
  el.className='cat-'+ach.cat; // 🎖️ รีเซ็ตคลาสกรอบเรืองแสงตามหมวดของ achievement นี้
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
  if(cleared.includes(10)) unlockAchievement('s10');
  if(cleared.length>=11)  unlockAchievement('sall');
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
  const unlTowers=getUnlockedTowers();
  if(isVoidUnlocked()) unlTowers.add(8);
  if(unlTowers.size>=TNAMES.length) unlockAchievement('cdx_t');
  if(loadGems()>=1000) unlockAchievement('gem1k');
  if(isVoidUnlocked()) unlockAchievement('void1');
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

/* ══ SAVE PROMPT (Endgame only — Story mode ไม่มีคะแนนสะสม) ══ */
function showSavePrompt(){
  const box=document.getElementById('saveBox');
  const overlay=document.getElementById('saveOverlay');
  const inp=document.getElementById('saveNameInput');
  // try load last used name
  const lastName=localStorage.getItem('tq_last_name')||'';
  inp.value=lastName;
  box.classList.add('eg'); box.classList.remove('save-box');
  document.getElementById('saveTitle').textContent='🔥 Save Endgame Score';
  inp.classList.add('eg');
  document.getElementById('saveConfirmBtn').style.background='linear-gradient(180deg,#ff5252,#b71c1c)';
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  const isTop=runs.length<10||G.score>Math.min(...runs.filter(r=>r.mode==='endgame').map(r=>r.score||0));
  document.getElementById('saveTopMsg').textContent=isTop&&runs.length>=3?'🏆 Top 10!':'';
  document.getElementById('saveResultGrid').innerHTML=
    `<div class="save-res-item"><div class="save-res-lbl">🌊 Wave สูงสุด</div><div class="save-res-val">${G.wave}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">⭐ Score</div><div class="save-res-val">${G.score.toLocaleString()}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">💀 Total Kills</div><div class="save-res-val">${G.kills||0}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">⚡ Max Combo</div><div class="save-res-val">×${G.maxCombo||1}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">🔥 Round</div><div class="save-res-val">${egRound+1}</div></div>
      <div class="save-res-item"><div class="save-res-lbl">⚙️ Difficulty</div><div class="save-res-val">${EG_DIFF_NAMES[egDiff]}</div></div>`;
  overlay.style.display='flex';
  setTimeout(()=>inp.focus(),100);
}

function skipSave(){
  document.getElementById('saveOverlay').style.display='none';
  showEgResult();
}

function confirmSave(){
  const name=document.getElementById('saveNameInput').value.trim()||'ผู้เล่น';
  localStorage.setItem('tq_last_name',name);
  const run={
    name, score:G.score, wave:G.wave,
    mode:'endgame',
    diff:EG_DIFF_NAMES[egDiff],
    stage:null,
    round:egRound+1,
    kills:G.kills||0,
    maxCombo:G.maxCombo||1,
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
  showEgResult();
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

