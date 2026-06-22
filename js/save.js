
/* ══ PROGRESS ══ */
function loadProgress(){try{return JSON.parse(localStorage.getItem('tq_progress')||'{}');}catch(e){return{};}}
const GEM_STAR_TABLE=[0,10,20,30]; // เพชรสะสมตามดาว 0/1/2/3
function saveProgress(si,stars){
  if(typeof questProgress==='function') questProgress('clear',1); // 📅 daily quest: clear stages
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
      addTickets(1); // 🎫 สถิติดาวใหม่ครั้งแรก → ตั๋วสกิล +1
      if(gain>0&&pgGain>0) showToast('💎 +'+gain+'  🪙 +'+pgGain+'  🎫 +1!');
      else if(gain>0) showToast('💎 +'+gain+' Soul Gems  🎫 +1!');
      else if(pgGain>0) showToast('🪙 +'+pgGain+' ทองถาวร  🎫 +1!');
      else showToast('🎫 +1 ตั๋วสกิล!');
    }
  }
  checkAchievements(); // ตรวจ achievement ทุกครั้งที่ clear ด่าน
  // ส่ง story leaderboard ไปเซิฟ (fire-and-forget)
  _submitStoryLb();
  return gain;
}

/* ══ BAG / INVENTORY ══ */
const BAG_ITEM_DEFS=[
  {id:'gold_pot',icon:'🧪',name:'ยาเพิ่มทอง',  desc:'ได้ทองเพิ่ม +100 เมื่อเริ่มด่าน',   color:'#ffd54f',type:'buff'},
  {id:'hp_pot',  icon:'💊',name:'ยาเพิ่ม HP',   desc:'HP ปราสาทเพิ่ม +3 เมื่อเริ่มด่าน',  color:'#ef5350',type:'buff'},
  {id:'dmg_pot', icon:'⚔️',name:'ยาเข้มแข็ง',  desc:'ดาเมจป้อมทั้งหมด +10% เมื่อเริ่มด่าน',color:'#ff8a65',type:'buff'},
  {id:'shard_c', icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10,1 18,7 16,17 9,19 2,14 3,5" fill="#37474f" stroke="#1a2327" stroke-width="1" stroke-linejoin="round"/><polygon points="10,1 18,7 13,4 7,2" fill="#546e7a"/><polygon points="10,1 7,2 2,14 3,5" fill="#263238"/><polyline points="11,8 9,12 13,15" fill="none" stroke="#1a2327" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="1" x2="18" y2="7" stroke="#78909c" stroke-width="1.2" stroke-linecap="round"/></svg>',name:'เศษหินมืด', desc:'ชิ้นส่วนสะสมสามัญจากกล่องบรอนซ์',   color:'#64b5f6',type:'shard'},
  {id:'shard_r', icon:'💜',name:'เศษแกนเวทย์',    desc:'ชิ้นส่วนสะสมหายากจากกล่องเงิน',     color:'#ab47bc',type:'shard'},
  {id:'shard_e', icon:'🌟',name:'เศษดวงดาว',    desc:'ชิ้นส่วนสะสมพิเศษจากกล่องทอง',     color:'#ff8f00',type:'shard'},
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
const GACHA_COST10=270; // ×10 ส่วนลด 10% (ปกติ 300 = ฟรี 1 ครั้ง)
function gachaCost(n){return n===10?GACHA_COST10:GACHA_COST*n;}
const GACHA_PITY=100; // รับ 001 guaranteed ทุก 100 pull
const GACHA_POOL=[
  {code:'001',icon:'🌑',name:'ป้อมมนตราโมฆะ', rarity:'legendary',color:'#b388ff',w:1,
   apply(){setVoidUnlocked();}},
  {code:'002',icon:'🌟',name:'ดาวตก x3',    rarity:'epic',   color:'#ff8f00',w:10,
   apply(){addMaterial(2,3);}},
  {code:'003',icon:'🌟',name:'ดาวตก x1',    rarity:'epic',   color:'#ffe082',w:20,
   apply(){addMaterial(2,1);}},
  {code:'004',icon:'🔘',name:'แกนเวท x3', rarity:'rare',   color:'#ce93d8',w:20,
   apply(){addMaterial(1,3);}},
  {code:'005',icon:'🔘',name:'แกนเวท x1', rarity:'rare',   color:'#ce93d8',w:30,
   apply(){addMaterial(1,1);}},
  {code:'006',icon:'🪨',name:'หินมืด x5',  rarity:'uncommon',color:'#90caf9',w:30,
   apply(){addMaterial(0,5);}},
  {code:'007',icon:'⚔️',name:'ยาเข้มแข็ง',    rarity:'uncommon',color:'#ff8a65',w:30,
   apply(){addBagItem('dmg_pot',1);}},
  {code:'008',icon:'💊',name:'ยาเพิ่ม HP',     rarity:'common', color:'#ef5350',w:30,
   apply(){addBagItem('hp_pot',1);}},
  {code:'009',icon:'🧪',name:'ยาเพิ่มทอง',    rarity:'common', color:'#ffd54f',w:30,
   apply(){addBagItem('gold_pot',1);}},
  {code:'010',icon:'🪙',name:'ทองถาวร +50',   rarity:'common', color:'#ffd54f',w:50,
   apply(){addPGold(50);}},
];
// Weighted roll /1000: 001=0.1%(1), 002=1%(10), 003=2%(20), 004=2%(20), 005=3%(30),
//   006=3%(30), 007=3%(30), 008=3%(30), 009=3%(30), 010=5%(50), dud=74.9%(749) — total=1000
const _GACHA_W=[1,10,20,20,30,30,30,30,30,50]; // cumulative sum stops at 251, rest=dud
function _gachaRoll(){
  const r=Math.floor(Math.random()*1000);
  let cum=0;
  for(let i=0;i<_GACHA_W.length;i++){
    cum+=_GACHA_W[i];
    if(r<cum) return {prizeIdx:i,num:i+1};
  }
  return {prizeIdx:-1,num:Math.floor(Math.random()*989)+11};
}
function loadGachaPity(){try{return Number(localStorage.getItem('tq_gpity'))||0;}catch(e){return 0;}}
function saveGachaPity(n){localStorage.setItem('tq_gpity',String(n));}
function _addDudShard(){
  const r=Math.random();
  let id;
  if(r<0.70) id='shard_c';
  else if(r<0.92) id='shard_r';
  else id='shard_e';
  addBagItem(id,1);
  return id;
}
function doGachaPulls(n){
  const gems=loadGems();
  const cost=gachaCost(n);
  if(gems<cost) return null;
  saveGems(gems-cost);
  let pity=loadGachaPity();
  const results=[];
  for(let i=0;i<n;i++){
    pity++;
    let roll=_gachaRoll();
    if(pity>=GACHA_PITY){roll={prizeIdx:0,num:1};pity=0;} // guaranteed 001
    else if(roll.prizeIdx===0){pity=0;}
    const prize=roll.prizeIdx>=0?GACHA_POOL[roll.prizeIdx]:null;
    let shardId=null;
    if(prize) prize.apply();
    else shardId=_addDudShard();
    results.push({num:roll.num, prize, shardId});
  }
  saveGachaPity(pity);
  return results;
}

/* ══ ACTIVE SKILL CARDS (v4.0.0 — Phase 1 backend) ══
   การ์ดสกิลกดเอง สุ่มจากตู้แยกด้วย "ตั๋วสกิล" (tq_tickets), เก็บถาวรใน tq_skills
   พร้อมระดับดาว ★1–★5 (ได้ใบซ้ำ = อัพดาว). ใส่ได้ 1 ใบ/รัน (tq_askill).
   ผลแต่ละสกิลเก็บเป็น tiers[star-1] เพื่อให้ทั้งเกมและ UI อ่านค่าเดียวกัน. */
const SKILL_MAX_STAR=5;
const SKILL_SHARD_COST=[2,4,6,10]; // เศษที่ต้องการอัพ: ★1→2 · ★2→3 · ★3→4 · ★4→5
const SKILL_DEFS=[
  {id:'goldrush', icon:'💰', name:'โกลด์รัช',     rarity:'uncommon', color:'#ffd54f', gw:38,
   desc:'ได้ทองทันที + เพิ่มทองจากการฆ่าชั่วคราว',
   tiers:[ // {gold:ทองทันที, bonus:+%ทอง/ฆ่า, dur:วินาที, cd:cooldown}
     {gold:80, bonus:.30, dur:8,  cd:45},
     {gold:110,bonus:.40, dur:8,  cd:42},
     {gold:150,bonus:.50, dur:10, cd:38},
     {gold:200,bonus:.60, dur:10, cd:34},
     {gold:280,bonus:.80, dur:12, cd:30},
   ]},
  {id:'freeze',   icon:'❄️', name:'แช่แข็งสนาม',  rarity:'rare',     color:'#4fc3f7', gw:27,
   desc:'หยุดศัตรูทั้งสนามชั่วขณะ',
   tiers:[ // {dur:freeze วินาที, cd}
     {dur:2.0, cd:40},
     {dur:2.5, cd:36},
     {dur:3.0, cd:32},
     {dur:3.5, cd:28},
     {dur:4.5, cd:24},
   ]},
  {id:'meteor',   icon:'☄️', name:'อุกกาบาต',     rarity:'epic',     color:'#ff7043', gw:16,
   desc:'ทิ้งอุกกาบาตระเบิด AoE ตรงจุดที่เลือก (ดาเมจตรง ไม่สนเกราะ)',
   tiers:[ // {dmg, radius:ช่อง, cd}
     {dmg:250, radius:1.5, cd:35},
     {dmg:350, radius:1.5, cd:32},
     {dmg:500, radius:2.0, cd:28},
     {dmg:700, radius:2.0, cd:24},
     {dmg:950, radius:2.5, cd:20},
   ]},
  {id:'overdrive',icon:'⚡', name:'พลังโจมตี',    rarity:'epic',     color:'#ffca28', gw:14,
   desc:'ป้อมทุกตัวดาเมจ+อัตรายิงเพิ่มชั่วคราว',
   tiers:[ // {dmg:+%ดาเมจ, rate:+%ยิง, dur, cd}
     {dmg:.25, rate:.20, dur:6,  cd:45},
     {dmg:.30, rate:.25, dur:6,  cd:42},
     {dmg:.40, rate:.30, dur:8,  cd:38},
     {dmg:.50, rate:.40, dur:8,  cd:34},
     {dmg:.65, rate:.50, dur:10, cd:28},
   ]},
  {id:'barrier',  icon:'🛡️', name:'กำแพงวิญญาณ',  rarity:'legendary',color:'#b388ff', gw:5,
   desc:'ฟื้น HP ปราสาท + กันดาเมจเข้าปราสาทชั่วขณะ',
   tiers:[ // {heal:HP, block:กันดาเมจ วินาที, cd}
     {heal:3,  block:4, cd:60},
     {heal:4,  block:5, cd:55},
     {heal:6,  block:6, cd:50},
     {heal:8,  block:7, cd:44},
     {heal:12, block:8, cd:38},
   ]},
];
function getSkillDef(id){return SKILL_DEFS.find(s=>s.id===id)||null;}
/* ค่าผลของสกิล id ที่ดาว star (clamp 1–5). คืน object จาก tiers พร้อม cd. */
function getSkillStat(id,star){
  const d=getSkillDef(id); if(!d) return null;
  const s=Math.max(1,Math.min(SKILL_MAX_STAR,star||1));
  return d.tiers[s-1];
}
/* คลังการ์ด: { id:{star} } */
function loadSkills(){try{return JSON.parse(localStorage.getItem('tq_skills')||'{}');}catch(e){return{};}}
function saveSkills(o){localStorage.setItem('tq_skills',JSON.stringify(o));}
function getSkillStar(id){const o=loadSkills();return o[id]?o[id].star:0;} // 0 = ยังไม่มี
function hasSkill(id){return getSkillStar(id)>0;}
function getSkillShards(id){const o=loadSkills();return o[id]?o[id].shards||0:0;}
/* เพิ่มการ์ด: ครั้งแรก ★1. ใบซ้ำสะสมเป็น "เศษ" (shards).
   เศษครบ SKILL_SHARD_COST[star-1] → star++. ★5+ซ้ำ = คืนตั๋ว 1 ใบ. */
function addSkillCard(id){
  const d=getSkillDef(id); if(!d) return null;
  const o=loadSkills();
  let result;
  if(!o[id]){
    o[id]={star:1,shards:0};
    saveSkills(o);
    result={id,star:1,shards:0,shardsNeeded:SKILL_SHARD_COST[0],isNew:true,maxed:false,refund:0,upgraded:false};
  } else if(o[id].star>=SKILL_MAX_STAR){
    addTickets(1);
    result={id,star:SKILL_MAX_STAR,shards:o[id].shards||0,shardsNeeded:0,isNew:false,maxed:true,refund:1,upgraded:false};
  } else {
    o[id].shards=(o[id].shards||0)+1;
    const needed=SKILL_SHARD_COST[o[id].star-1];
    let upgraded=false;
    if(o[id].shards>=needed){o[id].star++;o[id].shards-=needed;upgraded=true;}
    saveSkills(o);
    const nextNeeded=o[id].star<SKILL_MAX_STAR?SKILL_SHARD_COST[o[id].star-1]:0;
    result={id,star:o[id].star,shards:o[id].shards,shardsNeeded:nextNeeded,isNew:false,maxed:false,refund:0,upgraded};
  }
  // achievement checks
  const s2=loadSkills();
  if(Object.keys(s2).length>=SKILL_DEFS.length) unlockAchievement('sk_all5');
  if(Object.values(s2).some(c=>c.star>=SKILL_MAX_STAR)) unlockAchievement('sk_max');
  return result;
}
/* ตั๋วสกิล */
function loadTickets(){try{return Number(localStorage.getItem('tq_tickets'))||0;}catch(e){return 0;}}
function saveTickets(n){localStorage.setItem('tq_tickets',String(Math.max(0,Math.floor(n))));}
function addTickets(n){
  if(n<=0)return;
  saveTickets(loadTickets()+Math.floor(n));
  if(typeof updateMenuStats==='function') updateMenuStats();
}
const GEM_PER_TICKET=50; // 💎 แลกตั๋วสกิล
function exchangeGemForTicket(n){
  n=Math.max(1,Math.floor(n||1));
  const need=GEM_PER_TICKET*n, g=loadGems();
  if(g<need){showToast('💎 มณีไม่พอ (ต้องการ 💎'+need+')');return false;}
  saveGems(g-need); addTickets(n);
  if(typeof updateMenuStats==='function') updateMenuStats();
  showToast('🔁 แลก 💎'+need+' → 🎫'+n+' สำเร็จ!');
  return true;
}
/* การ์ดที่ใส่ใช้ในรัน (1 ใบ) */
function loadActiveSkill(){return localStorage.getItem('tq_askill')||null;}
function setActiveSkill(id){if(id)localStorage.setItem('tq_askill',id);else localStorage.removeItem('tq_askill');}
/* ตู้สกิล: ×1=🎫1, ×10=🎫9. อัตราการ์ดตามความหายาก (รวม 17%), ที่เหลือ 83%=เกลือ (ได้ 🔹 เศษไปแลกของ).
   Pity 30 → การันตี legendary (กันซวยยาว). */
const SKILL_PITY=30;
const SKILL_RARITY_RATE={uncommon:6,rare:4,epic:3,legendary:1}; // % ต่อใบตามความหายาก
function skillCardRate(d){return SKILL_RARITY_RATE[d.rarity]||1;}
function skillTotalRate(){return SKILL_DEFS.reduce((s,d)=>s+skillCardRate(d),0);} // รวมโอกาสได้การ์ด
function skillPullCost(n){return n===10?9:n;}
function loadSkillPity(){try{return Number(localStorage.getItem('tq_spity'))||0;}catch(e){return 0;}}
function saveSkillPity(n){localStorage.setItem('tq_spity',String(n));}
function _skillRoll(){ // คืน def การ์ด (สุ่มถ่วงน้ำหนักตามความหายาก) หรือ null (เกลือ)
  const r=Math.random()*100; let acc=0;
  for(const d of SKILL_DEFS){ acc+=skillCardRate(d); if(r<acc) return d; }
  return null;
}
function doSkillPulls(n){
  const tix=loadTickets();
  const cost=skillPullCost(n);
  if(tix<cost) return null;
  saveTickets(tix-cost);
  let pity=loadSkillPity();
  const results=[];
  for(let i=0;i<n;i++){
    pity++;
    let def;
    if(pity>=SKILL_PITY){def=getSkillDef('barrier');pity=0;} // การันตี legendary
    else def=_skillRoll();
    if(def){
      if(def.rarity==='legendary') pity=0;
      const res=addSkillCard(def.id); // อัพดาว/ปลดล็อก
      results.push({def,res});
    } else {
      const shardId=_addDudShard();
      results.push({def:null,res:null,shardId});
    }
  }
  saveSkillPity(pity);
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
  showToast('✅ ปลดทาเลนต์สำเร็จ!');
  if(typeof renderWorkshop==='function') renderWorkshop();
  if(typeof updateMenuGold==='function') updateMenuGold();
}
/* 🌳 LEVELED TALENTS — ทาเลนต์แบบเลเวล (1–100) เก็บเลเวลตรงๆ ใน localStorage
   ต้นทุนไต่ขึ้น 10 + lv*2 (L1=10 … L100=208 · รวม ~10,900 ทองถาวร).
   - sgold  (ทองเริ่มต้น): +3 ทอง/เลเวล (สูงสุด +300) · 🎁 Lv.100 แถมทองจากฆ่า +10%
   - gkill  (ทองจากศัตรู): +0.2%/เลเวล (สูงสุด +20%)
   - awaken (ลดราคาอเวค): −2.5/เลเวล (อเวค 350 → เหลือ 100 ที่ Lv.100)
   - tdmg   (ดาเมจป้อม): +0.5%/เลเวล (สูงสุด +50%)
   - hpmax  (HP ปราสาท): +0.5/เลเวล (สูงสุด +50)
   - skcool (คูลดาวน์สกิล): −0.5%/เลเวล (สูงสุด −50%) */
const AWAKEN_BASE_COST=350, AWAKEN_MIN_COST=100;
const LEVELED_TALENTS={
  sgold:{key:'tq_sgoldlv', perLv:3,  maxLv:100, bonusGm:.10, fmtEff:lv=>'+'+(lv*3)+' ทอง',
    migrate(){ let g=0; const ok=localStorage.getItem('tq_sgold_lv'); if(ok!=null)g=(Number(ok)||0)*25;
      else{ if(hasPUpgrade(0))g+=100; if(hasPUpgrade(3))g+=150; } return Math.round(g/3); }},
  gkill:{key:'tq_gkilllv', perLv:.2, maxLv:100, fmtEff:lv=>'+'+(lv*.2).toFixed(1)+'% ทองจากฆ่า',
    migrate(){ let p=0; if(hasPUpgrade(4))p+=5; if(hasPUpgrade(5))p+=5; return Math.round(p/.2); }}, // +5%=Lv25 · +10%=Lv50
  awaken:{key:'tq_awakenlv', perLv:2.5, maxLv:100, fmtEff:lv=>'อเวคเหลือ '+(AWAKEN_BASE_COST-Math.round(lv*2.5))+' ทอง',
    migrate(){ return hasPUpgrade(2)?20:0; }}, // เดิม −50 (350→300) = Lv20
  tdmg:{key:'tq_tdmglv', perLv:.5, maxLv:100, fmtEff:lv=>'+'+(lv*.5).toFixed(0)+'% ดาเมจป้อม',
    migrate(){ let p=0; if(hasPUpgrade(8))p+=10; if(hasPUpgrade(9))p+=10; if(hasPUpgrade(10))p+=10; return Math.round(p/.5); }},
  hpmax:{key:'tq_hpmaxlv', perLv:.5, maxLv:100, fmtEff:lv=>'+'+(lv*.5).toFixed(0)+' HP ปราสาท',
    migrate(){ let h=0; if(hasPUpgrade(1))h+=5; if(hasPUpgrade(6))h+=3; if(hasPUpgrade(7))h+=2; if(hasPUpgrade(11))h+=2; return Math.round(h/.5); }},
  skcool:{key:'tq_skcoolv', perLv:.5, maxLv:100, fmtEff:lv=>'-'+(lv*.5).toFixed(0)+'% cooldown สกิล',
    migrate(){ let r=0; if(hasPUpgrade(12))r+=10; if(hasPUpgrade(13))r+=10; return Math.round(r/.5); }},
};
/* ราคาอเวคป้อมหลังลดด้วยทาเลนต์ awaken (350 → เหลือต่ำสุด 100) */
function awakenCost(){ return Math.max(AWAKEN_MIN_COST, AWAKEN_BASE_COST-Math.round(loadTalentLv('awaken')*2.5)); }
function talentLvCost(lv){return 10+lv*2;} // ราคาเลื่อนจาก lv → lv+1 (lv=0..99) เหมือนกันทุกทาเลนต์เลเวล
function loadTalentLv(id){
  const t=LEVELED_TALENTS[id]; if(!t) return 0;
  const raw=localStorage.getItem(t.key);
  if(raw!=null) return Math.max(0,Math.min(t.maxLv,Number(raw)||0));
  let lv=0; try{ lv=t.migrate?t.migrate():0; }catch(e){}
  lv=Math.max(0,Math.min(t.maxLv,lv));
  localStorage.setItem(t.key,String(lv));
  return lv;
}
function buyTalentLv(id,n){
  const t=LEVELED_TALENTS[id]; if(!t) return;
  n=Math.max(1,n||1);
  let lv=loadTalentLv(id), bought=0;
  while(bought<n && lv<t.maxLv){ const c=talentLvCost(lv); if(loadPGold()<c) break; savePGold(loadPGold()-c); lv++; bought++; }
  if(bought===0){ showToast(lv>=t.maxLv?'✅ อัปเต็มแล้ว!':'🪙 ทองถาวรไม่พอ!'); return; }
  localStorage.setItem(t.key,String(lv));
  showToast('✅ อัปทาเลนต์ Lv.'+lv+(bought>1?' (+'+bought+')':'')+'!');
  if(typeof renderWorkshop==='function') renderWorkshop();
  if(typeof updateMenuGold==='function') updateMenuGold();
}
/* backward-compat wrappers (ทองเริ่มต้น) */
const SGOLD_PER_LV=3, SGOLD_MAX_LV=100;
function loadSGoldLv(){return loadTalentLv('sgold');}
function buySGoldLevel(n){return buyTalentLv('sgold',n);}
function sgoldLevelCost(lv){return talentLvCost(lv);}
/* 🌳 apply talent-tree effects onto current game state G (story + endgame). */
function applyTalents(){
  if(typeof G==='undefined'||!G) return;
  const h=hasPUpgrade;
  const sgLv=loadTalentLv('sgold'), gkLv=loadTalentLv('gkill');
  const hpLv=loadTalentLv('hpmax'), dmgLv=loadTalentLv('tdmg');
  const gold=sgLv*LEVELED_TALENTS.sgold.perLv;
  const hp  =Math.floor(hpLv*LEVELED_TALENTS.hpmax.perLv);     // 🛡️ castle HP (สูงสุด +50)
  const dmg =1+dmgLv*LEVELED_TALENTS.tdmg.perLv/100;           // ⚔️ tower damage (สูงสุด +50%)
  const gm  =1+gkLv*LEVELED_TALENTS.gkill.perLv/100+(sgLv>=LEVELED_TALENTS.sgold.maxLv?LEVELED_TALENTS.sgold.bonusGm:0);
  if(gold){ G.gold+=gold; }
  if(hp){ G.maxHp+=hp; G.hp+=hp; }
  G.dmgBuff=dmg;
  G.goldMult=gm;
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

function _submitStoryLb(){
  const name=localStorage.getItem('tq_displayName')||localStorage.getItem('tq_last_name')||''; if(!name) return;
  const p=loadProgress();
  const totalStars=Object.values(p).reduce((a,b)=>a+b,0);
  const stagesCleared=Object.keys(p).filter(k=>(p[k]||0)>=1).length;
  const _slav=localStorage.getItem('tq_avatar')||'🎮';
  fetch('/api/story-leaderboard',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name,totalStars,stagesCleared,avatar:_slav.startsWith('data:')?'👤':_slav,date:new Date().toLocaleDateString('th-TH')})})
    .then(r=>r.json()).then(d=>{ if(d.rank&&d.rank<=10) showToast('⭐ ติด TOP '+d.rank+' กระดานดาว!'); })
    .catch(()=>{});
}

/* ══ DAILY LOGIN + DAILY QUESTS (v3.6.0) ══ */
function _todayStr(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function _daysBetween(a,b){return Math.round((Date.parse(b)-Date.parse(a))/86400000);}
/* 7-day login reward cycle */
const LOGIN_REWARDS=[
  {icon:'💎',label:'300 มณีวิญญาณ + ไอเท็มบัพ ×1',   grant(){addGems(300);addBagItem('dmg_pot',1);addBagItem('hp_pot',1);addBagItem('gold_pot',1);}},
  {icon:'🎫',label:'ตั๋ว 20 ใบ + ไอเท็มบัพ ×2',        grant(){addTickets(20);addBagItem('dmg_pot',2);addBagItem('hp_pot',2);addBagItem('gold_pot',2);}},
  {icon:'🪙',label:'ทอง 500 + ไอเท็มบัพ ×3',           grant(){addPGold(500);addBagItem('dmg_pot',3);addBagItem('hp_pot',3);addBagItem('gold_pot',3);}},
  {icon:'💰',label:'ทอง 1000',                          grant(){addPGold(1000);}},
  {icon:'✨',label:'600 มณีวิญญาณ',                     grant(){addGems(600);}},
  {icon:'🎫',label:'ตั๋ว 50 ใบ',                        grant(){addTickets(50);}},
  {icon:'🌟',label:'1000 มณีวิญญาณ + ไอเท็มบัพ ×5',   grant(){addGems(1000);addBagItem('dmg_pot',5);addBagItem('hp_pot',5);addBagItem('gold_pot',5);}},
];
function loadLogin(){try{return JSON.parse(localStorage.getItem('tq_login')||'{}');}catch(e){return {};}}
function saveLogin(o){localStorage.setItem('tq_login',JSON.stringify(o));}
function getLoginState(){
  const o=loadLogin(), today=_todayStr();
  const streak=o.streak||0, last=o.last||null, claimedToday=(last===today);
  let dayIndex; // 0-based reward index for TODAY
  if(claimedToday) dayIndex=((streak-1)%7+7)%7;
  else if(last&&_daysBetween(last,today)===1) dayIndex=streak%7; // streak continues
  else dayIndex=0; // streak reset
  return {claimedToday,streak,dayIndex,today,last};
}
function claimDailyLogin(){
  const st=getLoginState();
  if(st.claimedToday) return false;
  const o=loadLogin();
  const newStreak=(o.last&&_daysBetween(o.last,st.today)===1)?(o.streak||0)+1:1;
  const idx=(newStreak-1)%7;
  const rw=LOGIN_REWARDS[idx];
  rw.grant();
  saveLogin({last:st.today,streak:newStreak});
  return {reward:rw,streak:newStreak,idx};
}
/* Daily quests — 3 chosen deterministically per day from pool */
const QUEST_POOL=[
  {id:'kill60', icon:'⚔️',type:'kill', goal:60,  desc:'กำจัดศัตรู 60 ตัว',       grant(){addGems(30);},     rwTxt:'💎 30'},
  {id:'kill150',icon:'💀',type:'kill', goal:150, desc:'กำจัดศัตรู 150 ตัว',      grant(){addGems(60);},     rwTxt:'💎 60'},
  {id:'clear2', icon:'🏁',type:'clear',goal:2,   desc:'ผ่านด่าน 2 ครั้ง',        grant(){addGems(40);},     rwTxt:'💎 40'},
  {id:'combo8', icon:'⚡',type:'combo',goal:8,   desc:'ทำคอมโบ ×8',             grant(){addBagItem('shard_c',3);}, rwTxt:'🔹 ×3'},
  {id:'build12',icon:'🏗️',type:'build',goal:12,  desc:'สร้างป้อม 12 หลัง',       grant(){addGems(35);},     rwTxt:'💎 35'},
  {id:'gold600',icon:'💰',type:'gold', goal:600, desc:'เก็บทองรวม 600 (จากศัตรู)',grant(){addPGold(80);},    rwTxt:'🪙 80'},
  {id:'wave15', icon:'🌊',type:'wave', goal:15,  desc:'ไปถึงคลื่น 15 (เอนด์เกม)', grant(){addGems(50);},     rwTxt:'💎 50'},
];
const _QUEST_MAX_TYPES=['combo','wave']; // these track max value, others accumulate
function loadQuestProg(){
  let o; try{o=JSON.parse(localStorage.getItem('tq_quests')||'{}');}catch(e){o={};}
  if(o.date!==_todayStr()){o={date:_todayStr(),kill:0,clear:0,combo:0,build:0,gold:0,wave:0,_claimed:[]};localStorage.setItem('tq_quests',JSON.stringify(o));}
  return o;
}
function saveQuestProg(o){localStorage.setItem('tq_quests',JSON.stringify(o));}
function questProgress(type,amount){
  if(!amount&&amount!==0) return;
  const o=loadQuestProg();
  if(_QUEST_MAX_TYPES.includes(type)) o[type]=Math.max(o[type]||0,amount);
  else o[type]=(o[type]||0)+amount;
  saveQuestProg(o);
}
function _daySeed(){const t=_todayStr();let h=2166136261;for(let i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function getDailyQuests(){
  let s=_daySeed();
  const pool=QUEST_POOL.map((_,i)=>i), idxs=[];
  for(let k=0;k<3&&pool.length;k++){s=(Math.imul(s,1103515245)+12345)>>>0;idxs.push(pool.splice(s%pool.length,1)[0]);}
  const o=loadQuestProg(), claimed=o._claimed||[];
  return idxs.map(i=>{const q=QUEST_POOL[i];return {...q,prog:Math.min(o[q.type]||0,q.goal),done:(o[q.type]||0)>=q.goal,claimed:claimed.includes(q.id)};});
}
function claimDailyQuest(id){
  const q=QUEST_POOL.find(x=>x.id===id); if(!q) return false;
  const o=loadQuestProg();
  if((o._claimed||[]).includes(id)) return false;
  if((o[q.type]||0)<q.goal) return false;
  q.grant();
  addTickets(1); // 🎫 ภารกิจรายวันสำเร็จ → ตั๋วสกิล +1
  o._claimed=(o._claimed||[]).concat(id);
  saveQuestProg(o);
  return q;
}
/* badge: is there a login claim or completed-unclaimed quest available? */
function dailyHasClaimable(){
  if(!getLoginState().claimedToday) return true;
  return getDailyQuests().some(q=>q.done&&!q.claimed);
}

let seenMonsters=new Set(JSON.parse(localStorage.getItem('tq_seen')||'[]'));

/* ══ ACHIEVEMENT SYSTEM ══ */
const ACHIEVEMENTS=[
  // Story
  {id:'s0',  icon:'🌿',cat:'story',  name:'ก้าวแรก',        desc:'ผ่านด่าน Grassland',            reward:20},
  {id:'s4',  icon:'💰',cat:'story',  name:'รักสมบัติ',       desc:'ผ่านด่าน Treasure Valley',       reward:30},
  {id:'s7',  icon:'🏰',cat:'story',  name:'ป้อมมืด',         desc:'ผ่านด่าน Dark Fortress',         reward:50},
  {id:'s9',  icon:'💀',cat:'story',  name:'ผู้พิชิตความมืด', desc:'ผ่านด่าน Dark Tower Summit',     reward:60},
  {id:'s10', icon:'🌑',cat:'story',  name:'ผู้ยุติเงามืด',   desc:'ผ่านด่านสุดท้าย Shadow Remnant', reward:80},
  {id:'sall',icon:'👑',cat:'story',  name:'ราชันผู้พิทักษ์', desc:'ผ่านครบทั้ง 11 ด่าน',           reward:200},
  // Combat
  {id:'k100', icon:'⚔️',cat:'combat', name:'นักรบ',          desc:'สังหารรวม 100 ศัตรู',           reward:20},
  {id:'k1000',icon:'🗡️',cat:'combat', name:'จอมนักรบ',       desc:'สังหารรวม 1,000 ศัตรู',         reward:40},
  {id:'k5000',icon:'💥',cat:'combat', name:'เทพสงคราม',      desc:'สังหารรวม 5,000 ศัตรู',         reward:80},
  {id:'boss1',icon:'👹',cat:'combat', name:'นักล่าบอส',      desc:'สังหาร Boss ครั้งแรก',           reward:25},
  {id:'jmn',  icon:'👁️',cat:'combat', name:'ปราบจอมมาร',    desc:'สังหารจอมมารได้',               reward:60},
  {id:'heal50',icon:'🧙',cat:'combat',name:'ตัดรากถอนโคน',   desc:'สังหารหมอผีรวม 50 ตัว',         reward:30},
  // Skill
  {id:'combo5', icon:'🔥',cat:'skill', name:'Hot Streak!',   desc:'ทำ Combo ×5 ขึ้นไปได้',         reward:20},
  {id:'combo10',icon:'💫',cat:'skill', name:'ULTRA COMBO',   desc:'ทำ Combo ×10 ขึ้นไปได้',        reward:50},
  {id:'nodmg',  icon:'🛡️',cat:'skill', name:'ไร้ที่ติ',       desc:'ผ่าน Wave โดยไม่เสีย HP',       reward:40},
  {id:'sc10k',  icon:'⭐',cat:'skill', name:'นักเก็บแต้ม',    desc:'ทำคะแนน 10,000 ในเกมเดียว',    reward:30},
  {id:'sc50k',  icon:'🌟',cat:'skill', name:'ราชาแต้ม',      desc:'ทำคะแนน 50,000 ในเกมเดียว',    reward:80},
  // Endgame
  {id:'eg3',  icon:'🔥',cat:'endgame',name:'ผู้รอดชีวิต',   desc:'ผ่าน Endgame Round 3+',                          reward:50},
  {id:'eg7',  icon:'☠️',cat:'endgame',name:'ไม่มีวันตาย',   desc:'ผ่าน Endgame Round 7+',                          reward:120},
  {id:'eghw', icon:'🌩️',cat:'endgame',name:'ผู้ฝ่าวิกฤต',  desc:'ผ่าน Wave ใน Endgame ระดับยาก ขณะมีสภาพอากาศแปรปรวน', reward:60},
  {id:'egw25',icon:'🌊',cat:'endgame',name:'ผู้พิทักษ์นิรันดร์', desc:'อยู่รอดถึง Wave 25 ใน Endgame',            reward:80},
  {id:'egw50',icon:'🔱',cat:'endgame',name:'ราชันแห่งความวุ่นวาย', desc:'อยู่รอดถึง Wave 50 ใน Endgame',          reward:200},
  {id:'egw100',icon:'💀',cat:'endgame',name:'ตำนานไม่มีวันสิ้น', desc:'อยู่รอดถึง Wave 100 ใน Endgame — ไม่มีใครทำได้', reward:500},
  // Casino
  {id:'sl_first', icon:'🎰',cat:'casino',name:'มือใหม่นักพนัน',    desc:'หมุนสล็อตครั้งแรก',                              reward:20},
  {id:'sl_pair',  icon:'💰',cat:'casino',name:'คู่แรกในชีวิต',     desc:'ได้ผล "คู่" ในสล็อตครั้งแรก',                    reward:30},
  {id:'sl_great', icon:'🔮',cat:'casino',name:'โชคดีเข้าช่วย',     desc:'ได้ GREAT (🔮🔮🔮) ครั้งแรก',                     reward:50},
  {id:'sl_super', icon:'⭐',cat:'casino',name:'ดาวตกสามดวง',       desc:'ได้ SUPER (⭐⭐⭐) ครั้งแรก',                     reward:150},
  {id:'sl_jp',    icon:'💎',cat:'casino',name:'ราชันแจ็กพอต',      desc:'ได้ JACKPOT (💎💎💎) ครั้งแรก',                   reward:999},
  {id:'sl_100',   icon:'🎲',cat:'casino',name:'นักพนันตัวจริง',    desc:'หมุนสล็อตรวม 100 ครั้ง',                          reward:10},
  {id:'sl_dry50', icon:'😤',cat:'casino',name:'ขาดทุนแต่ไม่แคร์', desc:'หมุน 50 ครั้งติดโดยไม่ได้ GREAT ขึ้นไป',          reward:2},
  {id:'sl_dry100',icon:'⛏️',cat:'casino',name:'ราชานักขุดเกลือ',   desc:'หมุน 100 ครั้งติดโดยไม่ได้ GREAT ขึ้นไป',         reward:1},
  // Collection
  {id:'cdx_m',icon:'📖',cat:'collect',name:'นักวิชาการ',    desc:'พบ Monster ทุกตัวใน Codex',      reward:80},
  {id:'cdx_t',icon:'🏗️',cat:'collect',name:'สถาปนิก',       desc:'ปลดล็อก Tower ทุกแบบ',           reward:100},
  {id:'gem1k',icon:'💎',cat:'collect',name:'นักสะสมมณีวิญญาณ',desc:'สะสม Soul Gems รวม 1,000',     reward:50},
  {id:'void1',icon:'🌑',cat:'collect',name:'ผู้เชี่ยวชาญโมฆะ', desc:'ปลดล็อกป้อมมนตราโมฆะที่เวิร์กชอป',reward:100},
  {id:'sk_all5',icon:'🃏',cat:'collect',name:'นักสะสมการ์ด', desc:'เก็บการ์ดสกิลครบทั้ง 5 ใบ',      reward:100},
  {id:'sk_max', icon:'⭐',cat:'collect',name:'สกิลสูงสุด',   desc:'อัพการ์ดสกิลใบใดก็ได้ถึง ★5',   reward:150},
];
const ACH_CATS={story:'📜 เนื้อเรื่อง',combat:'⚔️ การต่อสู้',skill:'🎯 ทักษะ',endgame:'🔥 Endgame',casino:'🎰 คาสิโน',collect:'📚 สะสม'};

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
  document.getElementById('achNotifDesc').textContent=ach.desc+(ach.reward?'  💎 +'+ach.reward:'');
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
  if(ach.reward>0) addGems(ach.reward);
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
  const sk=loadSkills();
  if(Object.keys(sk).length>=SKILL_DEFS.length) unlockAchievement('sk_all5');
  if(Object.values(sk).some(c=>c.star>=SKILL_MAX_STAR)) unlockAchievement('sk_max');
  // Endgame
  try{
    const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
    const egRuns=runs.filter(r=>r.mode==='endgame');
    const bestRound=Math.max(0,...egRuns.map(r=>r.round||0));
    const bestWave=Math.max(0,...egRuns.map(r=>r.wave||0));
    if(bestRound>=3)  unlockAchievement('eg3');
    if(bestRound>=7)  unlockAchievement('eg7');
    if(bestWave>=25)  unlockAchievement('egw25');
    if(bestWave>=50)  unlockAchievement('egw50');
    if(bestWave>=100) unlockAchievement('egw100');
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
  if(isVoidUnlocked()) unlocked.add(8); // Void Tower ปลดล็อกผ่าน Workshop
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
  // ส่งคะแนนไปเซิฟโดยใช้ชื่อล่าสุด แม้ว่าผู้เล่นจะกด "ข้าม"
  const name=localStorage.getItem('tq_last_name')||localStorage.getItem('tq_displayName')||'';
  if(name&&G){
    const _av=localStorage.getItem('tq_avatar')||'🎮';
    const run={name,score:G.score,wave:G.wave,mode:'endgame',diff:EG_DIFF_NAMES[egDiff],
      stage:null,round:egRound+1,kills:G.kills||0,maxCombo:G.maxCombo||1,
      avatar:_av.startsWith('data:')?'👤':_av,
      date:new Date().toLocaleDateString('th-TH'),ts:Date.now()};
    fetch('/api/leaderboard',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(run)})
      .then(r=>r.json()).then(d=>{ if(d.rank&&d.rank<=10) showToast('🏆 ติด TOP '+d.rank+' ของเซิฟ!'); })
      .catch(()=>{});
  }
  document.getElementById('saveOverlay').style.display='none';
  showEgResult();
}

function confirmSave(){
  const name=document.getElementById('saveNameInput').value.trim()||'ผู้เล่น';
  localStorage.setItem('tq_last_name',name);
  const _cav=localStorage.getItem('tq_avatar')||'🎮';
  const run={
    name, score:G.score, wave:G.wave,
    mode:'endgame',
    diff:EG_DIFF_NAMES[egDiff],
    stage:null,
    round:egRound+1,
    kills:G.kills||0,
    maxCombo:G.maxCombo||1,
    avatar:_cav.startsWith('data:')?'👤':_cav,
    date:new Date().toLocaleDateString('th-TH'),
    ts:Date.now()
  };
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  runs.unshift(run);
  if(runs.length>50) runs.length=50; // keep max 50
  localStorage.setItem('tq_runs',JSON.stringify(runs));
  checkAchievements(); // check eg3/eg7 achievements after saving run
  // POST to server leaderboard (fire-and-forget)
  fetch('/api/leaderboard',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(run)})
    .then(r=>r.json()).then(d=>{ if(d.rank&&d.rank<=10) showToast('🏆 ติด TOP '+d.rank+' ของเซิฟ!'); })
    .catch(()=>{});
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
  if(typeof _renderEndStats==='function') _renderEndStats(); // 📊 สถิติจบเกม
  document.getElementById('endOverlay').style.display='flex';
}

