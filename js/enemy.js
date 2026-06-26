
/* ══ STATIC DATA ══ */
const ENAMES=['โกบลิน','โครงกระดูก','เงามืด','วิญญาณไฟ','บอส','โกเลม','ค้างคาว','วิเวิร์น','ชิลด์ไนท์','จอมมาร','หมอผี','นักรบเดือด','ผีดิบ','แม่ฝูง'];
const EICONS=['👺','💀','👻','🔥','👹','🪨','🦇','🐉','🛡️','👁️','🧙','🧱','💨','🕷️'];
const ESIZES=[46,52,52,56,88,62,38,54,56,96,50,54,48,60];
const MFLAVOR=['สิ่งมีชีวิตแสนเจ้าเล่ห์ที่พึ่งพาความเร็ว เดินทางเป็นฝูงและท่วมท้นด้วยจำนวน',
  'ฟื้นคืนชีพจากสนามรบโบราณ แข็งแกร่งแต่ช้า — กระดูกของมันยากจะทำลาย',
  'สิ่งมีชีวิตแห่งความมืด มีความต้านทานบางส่วนต่อการชะลอของน้ำแข็ง',
  'กำเนิดจากการระเบิดของภูเขาไฟ HP สูงและมั่นคง — ภัยคุกคามที่น่ากลัวอย่างยิ่ง',
  'จอมปีศาจขนาดใหญ่ที่บัญชาการมอนสเตอร์ทั้งหมด ต้องการความร่วมมืออย่างสูงเพื่อเอาชนะ',
  'หินยักษ์ที่ถูกสาปให้มีชีวิต HP สูงสุดในบรรดามอนธรรมดา ภูมิต้านทานน้ำแข็งโดยสมบูรณ์',
  'ค้างคาวมืดที่บินอยู่บนอากาศ Sniper, Archer และ Thunder เท่านั้นที่ยิงโดน',
  'มังกรน้อยพันธุ์วิเวิร์นที่บินร่อนอยู่บนฟ้า HP สูงกว่าค้างคาวมาก ป้อมสายฟ้าจัดการได้ดีที่สุด',
  'นักรบหุ้มเกราะถือโล่เหล็กหนา โล่ดูดซับความเสียหายก่อนถึง HP จริง — Sniper และ Thunder เท่านั้นที่ทะลุโล่ได้',
  'จอมมารผู้ยิ่งใหญ่ที่สถิตอยู่ ณ ยอดหอคอยมืด โล่พลังงานมืดปกป้องร่างกาย HP มหาศาลและเคลื่อนที่ช้า — ต้องใช้พลังรวมกันทั้งหมดจึงจะเอาชนะได้',
  'หมอผีแห่งความมืดผู้ปลุกเสกพลังชีวิตให้พวกพ้อง คอย Heal ศัตรูรอบข้างทุก 2 วินาที — กำจัดมันก่อนเป็นอันดับแรก!',
  'นักรบแห่งเถ้าถ่านผู้สาปแช่ง — ยิ่งบาดเจ็บยิ่งดุดัน เมื่อ HP ต่ำจะวิ่งพุ่งถล่มอย่างบ้าคลั่ง',
  'ผีดิบที่ล่องลอยข้ามมิติ — บางครั้งร่างจะเป็นหมอกอ่อนหายตัวชั่วคราว กระสุนทุกนัดทะลุผ่าน',
  'แม่มารแห่งฝูง HP สูงและเคลื่อนที่ช้า — เมื่อตายจะปล่อยลูกน้อยออกมา 2 ตัว'];
const MTAGS=[[],[],[],[],[],[],[],[],[],[],[],[],[],[]]; /* ไม่ใช้แล้ว — แทนที่ด้วยระบบจุดแข็งและจุดอ่อน */
const MSPECIAL=[
  '👺 Pack Rush — เร็วขึ้น 20% เมื่อมีโกบลินตัวอื่นอยู่ใกล้ (<1.2 ช่อง)',
  '💀 ตอนตาย แตกเป็นโครงกระดูกเล็ก 2 ตัว (HP/รางวัล 40% ต่อตัว)',
  'ต้านทานการชะลอของน้ำแข็งบางส่วน',
  '🔥 Scorch Flare — พ่นไฟป้องกันตัวเองเป็นช่วงๆ ลดดาเมจที่ได้รับ 30%',
  '⚠️ ปรากฏตัวตั้งแต่คลื่นที่ 4 เป็นต้นไป',
  '🛡️ Immune ต่อ Ice slow ทั้งหมด + Armor Crack: เกราะลดดาเมจ 24% แล้วค่อยร้าวลงเมื่อ HP ลด',
  '✈️ บินได้ — Sniper, Archer และ Thunder เท่านั้นที่ยิงโดน | 🦇 Erratic Dodge: มีโอกาส 25% หลบการโจมตี',
  '✈️ บินได้ — Thunder, Sniper, Archer ยิงโดน — HP สูง | 🐉 โฉบเร่งความเร็วเป็นช่วงๆ พร้อมหยุดป้อมสุ่ม 1 ป้อม 3 วิ',
  '🛡️ โล่ HP 86 — ต้องทำลายก่อน — Sniper/Thunder ทะลุโล่ได้ | ฟื้นโล่เอง 15%/วิ ถ้าไม่โดนตี 4 วิ',
  '🌑 Final Boss — โล่พลังงานมืด 250 HP + HP มหาศาล ต้องใช้พลังทุกป้อมเอาชนะ',
  '💚 Heal ศัตรูใกล้เคียงทุก 2 วิ — ฆ่าก่อนไม่งั้น Heal ไม่หยุด',
  '🔴 Berserk — HP < 35% เร็วขึ้น ×1.8 ทันที ป้อมน้ำแข็ง slow ลดความได้เปรียบ',
  '👻 Phantom Phase — ทุก 8 วิ จะหายตัว 1.5 วิ (ไม่รับดาเมจทั้งหมด) — รอให้ phase หมดก่อนยิง',
  '🕷️ Brood Burst — เมื่อตาย ปล่อยโกบลินลูก 2 ตัว (HP 30%) — ใช้ป้อม Splash จัดการฝูง'
];
/* เผ่า, จุดแข็ง, จุดอ่อน */
const MTRIBE=['อสูร','ปีศาจ','วิญญาณ','วิญญาณ','ปีศาจ','หิน','ปีศาจ','มังกร','มนุษย์','ปีศาจ','วิญญาณ','มนุษย์','วิญญาณ','ปีศาจ'];
const MSTRENGTH=[
  ['จำนวนมาก','เคลื่อนที่เร็ว'],
  ['HP สูง','ทนทานมาก'],
  ['ภูมิต้านทานน้ำแข็ง','หลบเลี่ยงได้ดี'],
  ['HP สูงมาก','ไม่หยุดนิ่ง'],
  ['HP มหาศาล','โจมตีหลายด้าน'],
  ['HP สูงมาก','Immune น้ำแข็ง'],
  ['บินได้','เร็วมาก'],
  ['บินได้','HP สูง','ป้อมส่วนใหญ่ยิงไม่โดน'],
  ['โล่ดูดซับความเสียหาย','ป้อมส่วนใหญ่โดนแค่โล่'],
  ['HP มหาศาล','โล่พลังงานมืดหนามาก','เคลื่อนที่ช้าแต่ไม่หยุด'],
  ['Heal พวกพ้อง','ทำให้ศัตรูข้างๆ ฆ่าไม่ตาย'],
  ['เร็วมากตอน HP ต่ำ','ยากจะหยุดได้ทัน'],
  ['ภูมิคุ้มกันชั่วคราว','ดาเมจระเบิดไม่มีประโยชน์ตอน phase'],
  ['HP สูง','สร้างภาระต่อเนื่องหลังตาย'],
];
const MWEAKNESS=[
  ['ป้อมกระจาย','ป้อมน้ำแข็ง'],
  ['ป้อมสไนเปอร์','ป้อมเวทมนตร์'],
  ['ป้อมปืนใหญ่','ป้อมสไนเปอร์'],
  ['ป้อมน้ำแข็ง','ป้อมเวทมนตร์'],
  ['ป้อมทุกแบบร่วมกัน','ซัพพอร์ตเสริมกำลัง'],
  ['ป้อมสไนเปอร์','ป้อมเวทมนตร์'],
  ['ป้อมสไนเปอร์','ป้อมธนู','ป้อมสายฟ้า'],
  ['ป้อมสายฟ้า','ป้อมสไนเปอร์','ป้อมธนู'],
  ['ป้อมสไนเปอร์','ป้อมสายฟ้า'],
  ['ป้อมสไนเปอร์','ป้อมสายฟ้า','Sniper/Thunder ทะลุโล่ได้'],
  ['เวทมนตร์+สไนเปอร์ล็อกเป้าก่อนเสมอ','ป้อมเวทมนตร์ Splash โดนพวกรอบข้างด้วย'],
  ['ป้อมน้ำแข็ง slow ก่อน Berserk','ยิงให้ตายก่อน HP ถึง 35%'],
  ['รอช่วงไม่ Phase','ป้อมเวทมนตร์ Splash ยิงรัวตาม phase'],
  ['ป้อมปืนใหญ่ Splash จัดการฝูง','ป้อมน้ำแข็งหน่วงลูกน้อย'],
];
/* 0=มอนธรรมดา 1=บอส */
const MTYPE=[0,0,0,0,1,0,0,0,0,1,0,0,0,0];
const MISAIR=[false,false,false,false,false,false,true,true,false,false,false,false,false,false]; /* บินได้ */
const MSHIELD=[0,0,0,0,0,0,0,0,86,250,0,0,0,0]; /* shield HP เริ่มต้น (0=ไม่มีโล่) */
// ด่าน 8-11 (si>=7) มี stage-mult สูง (×2.5–3.2) อัดเต็มตั้งแต่เวฟ 1 ทำให้เปิดมาโหดไม่มีจังหวะฟาร์ม
// _earlyEase ลด HP เวฟ 1-6 ลงแล้วไต่ขึ้นเต็มที่เวฟ 7 (เวฟ1 ×0.45 → เวฟ7 ×1.0) ให้ผู้เล่นสร้างป้อม/เก็บทองก่อนเจอของหนัก
function _earlyEase(si,wave){return (si>=7&&wave<7)?(0.45+0.55*((wave-1)/6)):1;}
function getEnemyHP(ti,si,wave){return CFG.m_hp[ti]*(1+si*CFG.stageMult)*(1+wave*CFG.waveMult)*_earlyEase(si,wave);}
function getEnemySpd(ti,si){return Math.min(CFG.m_spd[ti]*(1+si*CFG.spdStageMult),CFG.spdCap);}

/* damage number colors per tower type */
const _DMGCOL=['#ff7043','#80d8ff','#ea80fc','#ffee58','#69f0ae','#a5d6a7','#ffd54f','#ffe57f','#ffe57f','#ffe57f','#ffe57f'];
const _DMGSUF=[' 💥','',' ✨',' 🎯','','','',' ⚡',' ⚡','',''];
function _pushDmgNum(e,dmg,shield){
  if(!G||!G.dmgNums) return;
  const col=shield?'#90caf9':(_DMGCOL[e._lastTowerType]||'#fff');
  const suf=shield?'🛡️':(_DMGSUF[e._lastTowerType]||'');
  const big=dmg>=60||(MTYPE[e.ti]===1);
  G.dmgNums.push({
    x:e.x+(Math.random()*16-8), y:e.y-ESIZES[e.ti]-4,
    txt:'-'+Math.ceil(dmg)+suf, col, life:1.1,
    vy:-(1.6+Math.random()*.6), vx:(Math.random()-.5)*.7,
    scale: big?1.45:0.95, decay:1.0
  });
}
function applyDmg(e,dmg,towerType,forcePierce){
  if(!e.alive) return;
  // 💨 ผีดิบ: Phantom Phase — หายตัวชั่วคราว ไม่รับดาเมจ
  if(e.ti===12&&e._phaseT>0){
    G.particles.push({x:e.x+(Math.random()*10-5),y:e.y-ESIZES[e.ti]-6,txt:'PHASE!',col:'#80deea',life:.55,vy:-1.2,vx:(Math.random()-.5)*.6,decay:2.2,scale:.8});
    return;
  }
  // 🦇 ค้างคาว: หลบเลี่ยงความเสียหายแบบสุ่ม 25% (Erratic Dodge)
  if(e.ti===6&&Math.random()<.25){
    e._dodgeFlash=.3;
    G.particles.push({x:e.x+(Math.random()*10-5),y:e.y-ESIZES[e.ti]-6,txt:'MISS!',col:'#fff',life:.6,vy:-1.4,vx:(Math.random()-.5)*.6,decay:2.2,scale:.8});
    return;
  }
  e._lastTowerType=towerType;
  // 🌑 Void Mark: ติดมาร์กแล้วรับดาเมจเพิ่มจากป้อมทุกชนิด
  if(e._voidMarkT>0&&e._voidMarkBonus) dmg*=(1+e._voidMarkBonus);
  const pierce=(TPIERCE[towerType]||false)||!!forcePierce;
  // 🔥 วิญญาณไฟ: ช่วงพ่นไฟป้องกันตัวเอง ลดดาเมจที่ได้รับ 30% (Scorch Flare)
  if(e.ti===3&&e._flareT>0) dmg*=.7;
  // 🪨 โกเลม: เกราะหิน ลดดาเมจตามรอยร้าวที่เหลือ (Armor Crack)
  if(e.ti===5){
    if(e._armorPct===undefined) e._armorPct=.24;
    dmg*=(1-e._armorPct);
  }
  // 📊 สะสมดาเมจต่อชนิดป้อม (สำหรับสถิติ DPS จบเกม)
  if(towerType!=null&&dmg>0){if(!G.dmgByType)G.dmgByType={};G.dmgByType[towerType]=(G.dmgByType[towerType]||0)+dmg;}
  if(e.shieldHp>0&&!pierce){
    // damage hits shield
    e.shieldHp-=dmg;
    e.hitFlash=.55;
    e._noDmgT=0; // 🛡️ ชิลด์ไนท์: โดนตี รีเซ็ตตัวจับเวลาฟื้นโล่ (Shield Regen)
    _pushDmgNum(e,dmg,true);
    if(e.shieldHp<=0){
      e.shieldHp=0;
      // shield break FX
      G.fxRings.push({x:e.x,y:e.y,r:3,maxR:ESIZES[e.ti]*3,life:.6,lw:3,col:'#90caf9',delay:0});
      for(let k=0;k<8;k++){const a=k/8*Math.PI*2;G.particles.push({x:e.x,y:e.y,txt:'▪',col:'#90caf9',life:.7,vy:Math.sin(a)*1.8,vx:Math.cos(a)*1.8,decay:2.2,scale:.7});}
      G.particles.push({x:e.x,y:e.y-ESIZES[e.ti]-14,txt:'🛡️ แตก!',col:'#90caf9',life:1.2,vy:-1.4,vx:0,scale:1,decay:1.2});
      G.shakeT=Math.min(.4,G.shakeT+.12);
      _playSound('shield_break');
    }
  } else {
    // damage hits HP (pierce or no shield)
    e.hp-=dmg;
    e.hitFlash=1;
    e._knockT=1; // knockback visual — ดีดกลับเล็กน้อยเมื่อโดนตี
    e._noDmgT=0; // 🛡️ ชิลด์ไนท์: โดนตี รีเซ็ตตัวจับเวลาฟื้นโล่ (Shield Regen)
    _pushDmgNum(e,dmg,false);
    // 🪨 โกเลม: ตรวจรอยร้าวเกราะตาม % HP ที่เหลือ — ร้าวขึ้นเรื่อยๆ ลดเกราะ 24%→16%→8%→0%
    if(e.ti===5&&e.hp>0){
      const pct=e.hp/e.mhp;
      if(pct<=.25) e._armorPct=0;
      else if(pct<=.5) e._armorPct=Math.min(e._armorPct,.08);
      else if(pct<=.75) e._armorPct=Math.min(e._armorPct,.16);
    }
    if(e.hp<=0) killEnemy(e);
  }
}
function spawnEnemy(ti){
  const si=currentStage.id;
  const hp=getEnemyHP(ti,si,G.wave)*((G&&G.weather&&G.weather.hpMult)?G.weather.hpMult:1);
  const shBase=MSHIELD[ti]||0;
  const sh=shBase>0?Math.round(shBase*(1+si*CFG.stageMult*.5)):0;
  const sx=currentPath[0][0]*CS+CS/2, sy=currentPath[0][1]*CS+CS/2;
  G.enemies.push({
    ti,pi:0,prog:0, x:sx,y:sy,
    hp,mhp:hp,spd:getEnemySpd(ti,si),reward:CFG.m_rew[ti],
    slow:1,slowT:0,alive:true,hitFlash:0,
    isAir:MISAIR[ti]||false,
    shieldHp:sh,maxShieldHp:sh,
  });
  /* ══ BOSS SPAWN ENTRANCE FX ══ */
  if(MTYPE[ti]===1){
    const isFinal=ti===9;
    G.shakeT=Math.min(.8,G.shakeT+(isFinal?.55:.32));
    // expanding rings burst from spawn
    for(let k=0;k<(isFinal?4:2);k++){
      G.fxRings.push({x:sx,y:sy,r:4,maxR:CS*(isFinal?3.5:2.2),
        life:.7+k*.1,lw:isFinal?3:2,col:isFinal?'#9c27b0':'#b71c1c',delay:k*.08});
    }
    // particle burst at spawn
    const _bc=isFinal?'#ce93d8':'#ef5350';
    for(let k=0;k<(isFinal?20:12);k++){
      const a=k/(isFinal?20:12)*Math.PI*2, sp=2+Math.random()*3;
      G.particles.push({x:sx,y:sy,txt:'●',col:_bc,
        life:.7+Math.random()*.4,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2.2,scale:.6+Math.random()*.5});
    }
    // warning banner
    const warningTxt=isFinal?'👁️ จอมมาร ปรากฏตัว!':'👹 '+ENAMES[ti]+' ปรากฏตัว!';
    G.bossWarning={text:warningTxt,t:2.2,col:isFinal?'#ce93d8':'#ef5350'};
    _playSound('boss_spawn');
  }
}

// 🕷️ Brood Queen: ตายแล้ว spawn โกบลิน 2 ตัว HP 30%
function _spawnBroodMinions(e){
  const _si=currentStage?currentStage.id:0,_wv=G.wave||1;
  const childHp=Math.max(1,Math.round(CFG.m_hp[0]*(1+_si*CFG.stageMult)*(1+_wv*CFG.waveMult)*_earlyEase(_si,_wv)*.3));
  const _safepi=Math.min(e.pi,Math.max(0,currentPath.length-3));
  for(let k=0;k<2;k++){
    G.enemies.push({ti:0,pi:_safepi,prog:Math.min(e.prog,CS*.5),x:e.x+(k?12:-12),y:e.y+(k?10:-10),
      hp:childHp,mhp:childHp,spd:getEnemySpd(0,currentStage?currentStage.id:0)*1.1,reward:Math.round(CFG.m_rew[0]*.5),
      slow:1,slowT:0,alive:true,hitFlash:0,isAir:false,shieldHp:0,maxShieldHp:0,_isSplit:true,_sizeMult:.6});
  }
}
// 💀 Skeleton Splitter: ตายแล้วแตกเป็นลูก 2 ตัว HP/reward 40% ของตัวแม่ (รวม 80%, reward/HP เท่าเดิม)
function _spawnSkeletonSplit(e){
  const childHp=Math.max(1,Math.round(e.mhp*.4));
  const childReward=Math.max(1,Math.round(e.reward*.4));
  for(let k=0;k<2;k++){
    G.enemies.push({
      ti:e.ti,pi:e.pi,prog:e.prog,x:e.x,y:e.y,
      hp:childHp,mhp:childHp,spd:e.spd,reward:childReward,
      slow:1,slowT:0,alive:true,hitFlash:0,
      isAir:e.isAir,shieldHp:0,maxShieldHp:0,
      _isSplit:true,_sizeMult:.65
    });
  }
}
function _deathFx(e){
  const x=e.x,y=e.y,sz=ESIZES[e.ti];
  const _busy=G.enemies.length>12;
  // ลด particle count เมื่อมีศัตรูเยอะ เพื่อลด lag
  const _sc=G.enemies.length>20?.35:_busy?.6:1;
  const _ring=(o)=>{if(G.fxRings.length<40) G.fxRings.push(o);};
  const _flash=(o)=>{if(!_busy) G.fxFlash.push(o);};
  switch(e.ti){
    case 0:{ // โกบลิน — ชิ้นส่วนสีเขียวกระจาย
      _ring({x,y,r:sz*.3,maxR:sz*3,life:.45,lw:2,col:'#4caf50',delay:0});
      for(let k=0,_n=Math.ceil(10*_sc);k<_n;k++){const a=Math.random()*Math.PI*2,sp=1.8+Math.random()*2.2;
        G.particles.push({x,y,txt:k%2?'▪':'▴',col:k%3?'#388e3c':'#66bb6a',life:.65+Math.random()*.4,vy:Math.sin(a)*sp+.5,vx:Math.cos(a)*sp,decay:2,scale:.5+Math.random()*.5});}
      break;}
    case 1:{ // โครงกระดูก — กระดูกกระจาย + หมอกขาว
      _ring({x,y,r:sz*.3,maxR:sz*3.5,life:.5,lw:2,col:'#eceff1',delay:0});
      _flash({x,y,r:sz*2,life:.2,maxLife:.2,col:'rgba(236,239,241,.35)'});
      for(let k=0,_n=Math.ceil(10*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=1.5+Math.random()*2.2;
        G.particles.push({x,y,txt:k%3?'─':'│',col:'#eceff1',life:.6+Math.random()*.5,vy:Math.sin(a)*sp+.8,vx:Math.cos(a)*sp,decay:1.8,scale:.6+Math.random()*.4});}
      break;}
    case 2:{ // เงามืด — สลายเป็นควันม่วง
      _ring({x,y,r:0,maxR:sz*5,life:.7,lw:1.5,col:'rgba(124,77,255,.5)',delay:.05});
      _ring({x,y,r:sz*.3,maxR:sz*3,life:.5,lw:2,col:'#7c4dff',delay:0});
      for(let k=0,_n=Math.ceil(14*_sc);k<_n;k++){const a=Math.random()*Math.PI*2,sp=.8+Math.random()*1.6;
        G.particles.push({x:x+(Math.random()-.5)*sz,y:y+(Math.random()-.5)*sz,txt:'●',col:k%2?'#4a148c':'#7c4dff',life:.9+Math.random()*.5,vy:Math.sin(a)*sp-.6,vx:Math.cos(a)*sp,decay:1.1,scale:.4+Math.random()*.7});}
      break;}
    case 3:{ // วิญญาณไฟ — ระเบิดเปลวไฟ
      _flash({x,y,r:sz*3.5,life:.3,maxLife:.3,col:'rgba(255,150,0,.5)'});
      _ring({x,y,r:0,maxR:sz*4.5,life:.5,lw:3,col:'#ff9800',delay:0});
      _ring({x,y,r:sz*.3,maxR:sz*2.5,life:.4,lw:2,col:'#ffeb3b',delay:.06});
      for(let k=0,_n=Math.ceil(16*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=2.2+Math.random()*2.8;
        const fc=k%3===0?'#ffeb3b':k%3===1?'#ff9800':'#ff5722';
        G.particles.push({x,y,txt:'●',col:fc,life:.5+Math.random()*.4,vy:Math.sin(a)*sp-1,vx:Math.cos(a)*sp,decay:2.5,scale:.5+Math.random()*.6});}
      break;}
    case 4:{ // บอส — ระเบิดใหญ่ + หน้าจอสั่น (boss ลด FX น้อยกว่าศัตรูทั่วไป — ต้องดูเด่น)
      _flash({x,y,r:sz*6,life:.4,maxLife:.4,col:'rgba(183,28,28,.55)'});
      _ring({x,y,r:0,maxR:sz*7,life:.65,lw:5,col:'#ef5350',delay:0});
      _ring({x,y,r:0,maxR:sz*5,life:.55,lw:3,col:'#ffcdd2',delay:.08});
      if(!_busy) _ring({x,y,r:0,maxR:sz*8.5,life:.5,lw:1.5,col:'rgba(239,83,80,.35)',delay:.18});
      G.hitStopT=Math.max(G.hitStopT||0,.1);
      G.shakeT=Math.min(.75,G.shakeT+.35);
      for(let k=0,_n=Math.ceil(22*Math.max(_sc,.5));k<_n;k++){const a=k/_n*Math.PI*2,sp=2.8+Math.random()*3;
        G.particles.push({x,y,txt:k%4===0?'★':'●',col:k%2?'#ef5350':'#ff8a80',life:.8+Math.random()*.5,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.9,scale:.6+Math.random()*.8});}
      break;}
    case 5:{ // โกเลม — หินแตก ร่วงลง
      _ring({x,y,r:sz*.3,maxR:sz*4,life:.55,lw:3,col:'#9e9e9e',delay:0});
      G.shakeT=Math.min(.5,G.shakeT+.2);
      for(let k=0,_n=Math.ceil(14*_sc);k<_n;k++){const a=Math.random()*Math.PI*2,sp=2+Math.random()*2.5;
        G.particles.push({x,y,txt:k%2?'▪':'◆',col:k%3?'#9e9e9e':'#bdbdbd',life:.9+Math.random()*.5,vy:Math.sin(a)*sp+1.2,vx:Math.cos(a)*sp,decay:1.4,scale:.7+Math.random()*.7});}
      break;}
    case 6:{ // ค้างคาว — ร่วงหล่น + กระจาย
      _ring({x,y,r:sz*.3,maxR:sz*2.8,life:.4,lw:1.5,col:'#37474f',delay:0});
      for(let k=0,_n=Math.ceil(8*_sc);k<_n;k++){const a=Math.random()*Math.PI*2,sp=1.2+Math.random()*2;
        G.particles.push({x,y,txt:k%2?'✦':'▪',col:'#37474f',life:.6+Math.random()*.4,vy:Math.sin(a)*sp+1.8,vx:Math.cos(a)*sp,decay:1.8,scale:.4+Math.random()*.5});}
      break;}
    case 7:{ // วิเวิร์น — ระเบิดมังกร + สั่น
      _flash({x,y,r:sz*4.5,life:.38,maxLife:.38,col:'rgba(156,39,176,.45)'});
      _ring({x,y,r:0,maxR:sz*6,life:.65,lw:4,col:'#ce93d8',delay:0});
      _ring({x,y,r:0,maxR:sz*4,life:.5,lw:6,col:'#9c27b0',delay:.07});
      if(!_busy) _ring({x,y,r:0,maxR:sz*7.5,life:.5,lw:1.5,col:'rgba(206,147,216,.3)',delay:.16});
      G.shakeT=Math.min(.55,G.shakeT+.18);
      for(let k=0,_n=Math.ceil(20*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=2.5+Math.random()*3.2;
        G.particles.push({x,y,txt:'●',col:k%3===0?'#ce93d8':k%3===1?'#9c27b0':'#e1bee7',life:.75+Math.random()*.5,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2.1,scale:.5+Math.random()*.8});}
      break;}
    case 8:{ // ชิลด์ไนท์ — เกราะแตกกระจาย
      _ring({x,y,r:0,maxR:sz*4.5,life:.52,lw:3,col:'#90caf9',delay:0});
      _ring({x,y,r:sz*.3,maxR:sz*2.5,life:.4,lw:2,col:'#cfd8dc',delay:.07});
      for(let k=0,_n=Math.ceil(14*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=2+Math.random()*2.2;
        G.particles.push({x,y,txt:k%3?'▪':'▸',col:k%2?'#90a4ae':'#cfd8dc',life:.8+Math.random()*.4,vy:Math.sin(a)*sp+.6,vx:Math.cos(a)*sp,decay:1.7,scale:.6+Math.random()*.6});}
      break;}
    case 9:{ // จอมมาร — cinematic สั่นสะเทือน (boss สำคัญ ลด FX น้อย)
      _flash({x,y,r:sz*9,life:.55,maxLife:.55,col:'rgba(100,0,150,.65)'});
      _ring({x,y,r:0,maxR:sz*8,life:.75,lw:6,col:'#9c27b0',delay:0});
      _ring({x,y,r:0,maxR:sz*5.5,life:.65,lw:4,col:'#e1bee7',delay:.1});
      if(!_busy) _ring({x,y,r:0,maxR:sz*10,life:.6,lw:2,col:'rgba(156,39,176,.4)',delay:.22});
      G.hitStopT=Math.max(G.hitStopT||0,.22);
      G.shakeT=Math.min(.8,G.shakeT+.55);
      for(let k=0,_n=Math.ceil(34*Math.max(_sc,.5));k<_n;k++){const a=k/_n*Math.PI*2,sp=3+Math.random()*4;
        G.particles.push({x,y,txt:k%4===0?'✦':k%4===1?'★':'●',col:k%3===0?'#9c27b0':k%3===1?'#ce93d8':'#fff',life:1.0+Math.random()*.7,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.5,scale:.6+Math.random()*.9});}
      break;}
    case 10:{ // หมอผี — คาถาสลาย สีเขียว
      _ring({x,y,r:0,maxR:sz*4.5,life:.55,lw:2.5,col:'#69f0ae',delay:0});
      if(!_busy) _ring({x,y,r:0,maxR:sz*3,life:.45,lw:1.5,col:'rgba(105,240,174,.4)',delay:.1});
      for(let k=0,_n=Math.ceil(14*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=1.6+Math.random()*2.2;
        G.particles.push({x,y,txt:k%3?'●':'✦',col:k%2?'#69f0ae':'#b2ff59',life:.7+Math.random()*.45,vy:Math.sin(a)*sp-.4,vx:Math.cos(a)*sp,decay:1.9,scale:.4+Math.random()*.6});}
      break;}
    case 11:{ // นักรบเดือด — ระเบิดแดง บลีดอาเซอร์
      _ring({x,y,r:0,maxR:sz*4,life:.5,lw:3,col:'#ff1744',delay:0});
      if(!_busy) _ring({x,y,r:0,maxR:sz*2.5,life:.4,lw:2,col:'#ff8a80',delay:.08});
      for(let k=0,_n=Math.ceil(16*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=2+Math.random()*2.8;
        G.particles.push({x,y,txt:k%3?'●':'💢',col:k%2?'#ff1744':'#ff8a80',life:.75+Math.random()*.4,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.9,scale:.5+Math.random()*.7});}
      break;}
    case 12:{ // ผีดิบ — ละลายฟ้าจางหาย
      _ring({x,y,r:0,maxR:sz*4,life:.6,lw:2,col:'#80deea',delay:0});
      if(!_busy) _ring({x,y,r:sz*.5,maxR:sz*2.8,life:.45,lw:1.5,col:'rgba(128,222,234,.3)',delay:.1});
      for(let k=0,_n=Math.ceil(12*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=1.2+Math.random()*1.8;
        G.particles.push({x,y,txt:k%2?'·':'○',col:k%2?'#80deea':'#b2ebf2',life:.9+Math.random()*.5,vy:Math.sin(a)*sp-.6,vx:Math.cos(a)*sp,decay:1.5,scale:.4+Math.random()*.5});}
      break;}
    case 13:{ // แม่ฝูง — ระเบิดสีม่วง+แมงมุมน้อย
      _ring({x,y,r:0,maxR:sz*4.5,life:.55,lw:3,col:'#ce93d8',delay:0});
      if(!_busy) _ring({x,y,r:0,maxR:sz*3,life:.4,lw:2,col:'#9c27b0',delay:.08});
      for(let k=0,_n=Math.ceil(18*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=2+Math.random()*3;
        G.particles.push({x,y,txt:k%4===0?'🕷️':'●',col:k%3===0?'#ce93d8':k%3===1?'#9c27b0':'#e1bee7',life:.7+Math.random()*.5,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.8,scale:.5+Math.random()*.7});}
      break;}
    default:{ // fallback
      _ring({x,y,r:sz*.4,maxR:sz*3.8,life:.55,lw:2.5,col:'#fff',delay:0});
      for(let k=0,_n=Math.ceil(8*_sc);k<_n;k++){const a=k/_n*Math.PI*2,sp=1.6+Math.random()*2.4;
        G.particles.push({x,y,txt:'●',col:'#fff',life:.65+Math.random()*.45,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2.3,scale:.5+Math.random()*.6});}
    }
  }
}
// ──────────────────────────────────────────────────────────
// Act 2 enemy sprites (cases 11-13) added after main switch
// ──────────────────────────────────────────────────────────
function killEnemy(e){
  if(!e.alive) return;
  e.alive=false;
  unlockMonster(e.ti);
  if(e.ti===1&&!e._isSplit) _spawnSkeletonSplit(e); // 💀 Skeleton split
  if(e.ti===13&&!e._isSplit) _spawnBroodMinions(e); // 🕷️ Brood Queen spawn
  _onKillForAch(e); // achievement tracking
  // combo system
  G.kills=(G.kills||0)+1;
  G.comboT=2.2; G.comboN=(G.comboN||0)+1;
  if(G.comboN>G.maxCombo) G.maxCombo=G.comboN;
  _onComboForAch(G.comboN); // achievement: combo milestone
  const comboMult=G.comboN>=10?3:G.comboN>=5?2:G.comboN>=3?1.5:1;
  const baseScore=e.reward*10;
  const _scDiff=isEndgame?(EG_SCORE_MULT[egDiff]||1):1; // 🔥 คะแนน Endgame คูณตามความยาก
  const finalScore=Math.round(baseScore*comboMult*_scDiff);
  G.score+=finalScore;
  _onScoreForAch(G.score); // achievement: score milestone
  if(G.comboN>=3&&G.comboN%3===0){
    const comboTxts=['','','','COMBO!','','','COMBO x2!','','','COMBO x3!'];
    const ct=comboTxts[Math.min(G.comboN,9)]||'COMBO!';
    G.particles.push({x:e.x,y:e.y-ESIZES[e.ti]-20,txt:'⚡'+ct,col:'#ffe234',
      life:1.2,vy:-1.6,vx:0,decay:.9,scale:1.3});
  }
  const _gr=Math.round(e.reward*(G.goldMult||1)*(1+((G.skillGoldT>0)?G.skillGoldMult:0))*(G.goldWaveMult||1)); // 🌳 talent + 💰 โกลด์รัช + 💰 เวฟทอง
  G.gold+=_gr;
  addParticle(e.x,e.y,'+'+_gr+'💰','#ffe082');
  // 📅 daily quest tracking
  if(typeof questProgress==='function'){questProgress('kill',1);questProgress('gold',e.reward);questProgress('combo',G.comboN);}
  updateHUD();
  _deathFx(e);
  // death sound (throttled — max once per 80ms)
  const _now=performance.now();
  if(_now-_sfxLastDie>80){_sfxLastDie=_now;_playSound('die');}
}

function drawEnemySprite(ctx,ti,x,y,sz,mv){
  const r=sz*.42;
  mv=mv||{};
  const _sm=Math.max(.4,Math.min(2.2,mv.spd||1)); // movement-speed multiplier for idle anim
  const _dir=mv.dir||0;
  ctx.save();ctx.translate(x,y);
  // walk lean — tilt slightly in the direction of travel, faster sway at higher speed
  ctx.save();ctx.rotate(Math.sin(Date.now()*.007*_sm+x*.05)*.05*_sm*Math.sign(Math.cos(_dir)));
  // chibi helper: Kingdom Rush style outline stroke
  function _ol(fn){ctx.save();ctx.strokeStyle='#1a1a1a';ctx.lineWidth=r*.3;ctx.lineJoin='round';fn();ctx.stroke();ctx.restore();}
  // chibi helper: cute round eye with shine
  function _eye(ex,ey,er,col){
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex,ey,er,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=col||'#111';ctx.beginPath();ctx.arc(ex+er*.1,ey,er*.62,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex-er*.15,ey-er*.32,er*.28,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.5)';ctx.beginPath();ctx.arc(ex+er*.18,ey+er*.18,er*.14,0,Math.PI*2);ctx.fill();
  }
  // chibi helper: blush
  function _blush(bx,by,br){
    ctx.globalAlpha=.45;ctx.fillStyle='#ff8a80';
    ctx.beginPath();ctx.ellipse(bx,by,br,br*.5,0,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=1;
  }
  switch(ti){
    case 0:{// Goblin — chibi green gremlin
      const _gb=Math.sin(Date.now()*.006*_sm+x*.05)*r*.05;
      ctx.save();ctx.translate(0,_gb);
      // outline first
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.1,r*.78,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,r*.55,r*.38,r*.3,0,0,Math.PI*2);});
      // tiny body
      ctx.fillStyle='#388e3c';ctx.beginPath();ctx.ellipse(0,r*.55,r*.38,r*.3,0,0,Math.PI*2);ctx.fill();
      // big round head
      ctx.fillStyle='#4caf50';ctx.beginPath();ctx.arc(0,-r*.1,r*.78,0,Math.PI*2);ctx.fill();
      // pointy ears
      ctx.fillStyle='#4caf50';ctx.beginPath();ctx.moveTo(-r*.62,-r*.28);ctx.lineTo(-r*1.0,-r*.72);ctx.lineTo(-r*.32,-r*.48);ctx.closePath();ctx.fill();
      ctx.fillStyle='#4caf50';ctx.beginPath();ctx.moveTo(r*.62,-r*.28);ctx.lineTo(r*1.0,-r*.72);ctx.lineTo(r*.32,-r*.48);ctx.closePath();ctx.fill();
      ctx.fillStyle='#ff8a80';ctx.beginPath();ctx.moveTo(-r*.65,-r*.36);ctx.lineTo(-r*.88,-r*.62);ctx.lineTo(-r*.42,-r*.5);ctx.closePath();ctx.fill();
      ctx.fillStyle='#ff8a80';ctx.beginPath();ctx.moveTo(r*.65,-r*.36);ctx.lineTo(r*.88,-r*.62);ctx.lineTo(r*.42,-r*.5);ctx.closePath();ctx.fill();
      // blush
      _blush(-r*.42,r*.06,r*.2);_blush(r*.42,r*.06,r*.2);
      // big eyes
      _eye(-r*.3,-r*.15,r*.24,'#c62828');_eye(r*.3,-r*.15,r*.24,'#c62828');
      // tiny tusks
      ctx.fillStyle='#fffde7';ctx.beginPath();ctx.moveTo(-r*.14,r*.22);ctx.lineTo(-r*.06,r*.42);ctx.lineTo(r*.02,r*.22);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.06,r*.22);ctx.lineTo(r*.14,r*.42);ctx.lineTo(r*.22,r*.22);ctx.closePath();ctx.fill();
      ctx.restore();
      break;}
    case 1:{// Skeleton — chibi cute skull
      const _sk=Math.sin(Date.now()*.005*_sm+x*.05)*r*.04;
      ctx.save();ctx.translate(0,_sk);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.12,r*.75,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,r*.55,r*.3,r*.26,0,0,Math.PI*2);});
      // tiny body
      ctx.fillStyle='#cfd8dc';ctx.beginPath();ctx.ellipse(0,r*.55,r*.3,r*.26,0,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#90a4ae';ctx.lineWidth=r*.07;
      for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-r*.24,r*.44+i*r*.1);ctx.lineTo(r*.24,r*.44+i*r*.1);ctx.stroke();}
      // big round skull head
      ctx.fillStyle='#fafafa';ctx.beginPath();ctx.arc(0,-r*.12,r*.75,0,Math.PI*2);ctx.fill();
      // shiny highlight on skull
      ctx.fillStyle='rgba(255,255,255,.65)';ctx.beginPath();ctx.ellipse(-r*.2,-r*.35,r*.28,r*.18,-.4,0,Math.PI*2);ctx.fill();
      // big dark eye sockets
      ctx.fillStyle='#1a1a2e';ctx.beginPath();ctx.arc(-r*.28,-r*.12,r*.26,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#1a1a2e';ctx.beginPath();ctx.arc(r*.28,-r*.12,r*.26,0,Math.PI*2);ctx.fill();
      // glowing purple pupils (idle flicker)
      const _skg=.7+.3*Math.sin(Date.now()*.006+x*.05);
      ctx.fillStyle=`rgba(124,77,255,${_skg})`;ctx.beginPath();ctx.arc(-r*.28,-r*.12,r*.14,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.28,-r*.12,r*.14,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(-r*.22,-r*.18,r*.06,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(r*.22,-r*.18,r*.06,0,Math.PI*2);ctx.fill();
      // cute teeth smile
      ctx.fillStyle='#fafafa';ctx.beginPath();ctx.arc(0,r*.2,r*.24,0,Math.PI,false);ctx.fill();
      ctx.fillStyle='#1a1a2e';for(let i=0;i<3;i++) ctx.fillRect(-r*.18+i*r*.14,r*.2,r*.1,r*.14);
      ctx.restore();
      break;}
    case 2:{// Shadow — chibi ghost blob
      const _gt2=Date.now()*.0045*_sm+x*.05;
      ctx.save();ctx.translate(0,Math.sin(_gt2)*r*.05);ctx.scale(1+Math.sin(_gt2)*.04,1-Math.sin(_gt2)*.04);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.08,r*.76,0,Math.PI*2);});
      // wispy ghost tail
      ctx.globalAlpha=.55;ctx.fillStyle='#311b92';
      ctx.beginPath();ctx.moveTo(-r*.52,r*.25);ctx.bezierCurveTo(-r*.65,r*.72,-r*.25,r*.88,0,r*.68);ctx.bezierCurveTo(r*.25,r*.88,r*.65,r*.72,r*.52,r*.25);ctx.closePath();ctx.fill();ctx.globalAlpha=1;
      // wavy bottom bumps
      for(let k=0;k<3;k++){ctx.globalAlpha=.45;ctx.fillStyle='#4527a0';ctx.beginPath();ctx.arc(-r*.38+k*r*.38,r*.55,r*.18,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // big round blob body
      ctx.fillStyle='#5e35b1';ctx.beginPath();ctx.arc(0,-r*.08,r*.76,0,Math.PI*2);ctx.fill();
      // inner glow
      const _sgg=ctx.createRadialGradient(-r*.2,-r*.3,0,0,-r*.08,r*.76);
      _sgg.addColorStop(0,'rgba(179,136,255,.55)');_sgg.addColorStop(1,'transparent');
      ctx.fillStyle=_sgg;ctx.beginPath();ctx.arc(0,-r*.08,r*.76,0,Math.PI*2);ctx.fill();
      // big cute eyes
      _eye(-r*.28,-r*.12,r*.26,'#1a237e');_eye(r*.28,-r*.12,r*.26,'#1a237e');
      // blush
      _blush(-r*.52,r*.05,r*.18);_blush(r*.52,r*.05,r*.18);
      // cute little smile
      ctx.strokeStyle='#311b92';ctx.lineWidth=r*.08;ctx.lineCap='round';
      ctx.beginPath();ctx.arc(0,r*.18,r*.2,0.2,Math.PI-.2);ctx.stroke();
      ctx.restore();
      break;}
    case 3:{// Fire Spirit — chibi fireball
      const _fb=Math.sin(Date.now()*.005*_sm+x*.05)*r*.06;
      ctx.save();ctx.translate(0,_fb);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.08,r*.72,0,Math.PI*2);});
      const fl=Math.sin(Date.now()*.012+x)*.14;
      // flame aura behind
      ctx.fillStyle='#bf360c';
      ctx.beginPath();ctx.moveTo(0,-r*(1.05+fl));ctx.bezierCurveTo(r*.85,-r*.45,r*.78,r*.35,0,r*.68);ctx.bezierCurveTo(-r*.78,r*.35,-r*.85,-r*.45,0,-r*(1.05+fl));ctx.fill();
      // side flames
      ctx.fillStyle='#e64a19';ctx.beginPath();ctx.moveTo(-r*.4,-r*.65+fl*r*.6);ctx.bezierCurveTo(-r*.85,-r*.2,-r*.75,r*.2,-r*.35,r*.35);ctx.bezierCurveTo(-r*.2,r*.15,-r*.3,-r*.15,-r*.4,-r*.65+fl*r*.6);ctx.fill();
      ctx.fillStyle='#e64a19';ctx.beginPath();ctx.moveTo(r*.4,-r*.65+fl*r*.6);ctx.bezierCurveTo(r*.85,-r*.2,r*.75,r*.2,r*.35,r*.35);ctx.bezierCurveTo(r*.2,r*.15,r*.3,-r*.15,r*.4,-r*.65+fl*r*.6);ctx.fill();
      // main round body
      ctx.fillStyle='#ff5722';ctx.beginPath();ctx.arc(0,-r*.08,r*.72,0,Math.PI*2);ctx.fill();
      // bright center
      ctx.fillStyle='#ffcc02';ctx.beginPath();ctx.arc(0,-r*.1,r*.42,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fff9c4';ctx.beginPath();ctx.arc(0,-r*.12,r*.2,0,Math.PI*2);ctx.fill();
      // cute chibi eyes
      _eye(-r*.26,-r*.12,r*.23,'#bf360c');_eye(r*.26,-r*.12,r*.23,'#bf360c');
      // smile
      ctx.strokeStyle='#bf360c';ctx.lineWidth=r*.09;ctx.lineCap='round';
      ctx.beginPath();ctx.arc(0,r*.14,r*.22,.15,Math.PI-.15);ctx.stroke();
      ctx.restore();
      break;}
    case 4:{// Boss — chibi demon king (HUGE head)
      const _bs=Math.sin(Date.now()*.003*_sm+x*.05)*r*.04;
      ctx.save();ctx.translate(0,_bs);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.1,r*.92,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,r*.55,r*.4,r*.3,0,0,Math.PI*2);});
      // tiny arms
      ctx.fillStyle='#c62828';ctx.beginPath();ctx.ellipse(-r*.9,r*.18,r*.28,r*.2,-.35,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(r*.9,r*.18,r*.28,r*.2,.35,0,Math.PI*2);ctx.fill();
      // tiny body
      ctx.fillStyle='#c62828';ctx.beginPath();ctx.ellipse(0,r*.55,r*.4,r*.3,0,0,Math.PI*2);ctx.fill();
      // GIANT chibi head
      ctx.fillStyle='#e53935';ctx.beginPath();ctx.arc(0,-r*.1,r*.92,0,Math.PI*2);ctx.fill();
      // head highlight
      const _bh=ctx.createRadialGradient(-r*.3,-r*.5,0,0,-r*.1,r*.92);
      _bh.addColorStop(0,'rgba(255,180,180,.35)');_bh.addColorStop(1,'transparent');
      ctx.fillStyle=_bh;ctx.beginPath();ctx.arc(0,-r*.1,r*.92,0,Math.PI*2);ctx.fill();
      // horns (curved)
      ctx.fillStyle='#4a0000';
      ctx.beginPath();ctx.moveTo(-r*.52,-r*.72);ctx.quadraticCurveTo(-r*.85,-r*1.3,-r*.42,-r*1.48);ctx.quadraticCurveTo(-r*.22,-r*.95,-r*.28,-r*.82);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.52,-r*.72);ctx.quadraticCurveTo(r*.85,-r*1.3,r*.42,-r*1.48);ctx.quadraticCurveTo(r*.22,-r*.95,r*.28,-r*.82);ctx.closePath();ctx.fill();
      // golden crown
      ctx.fillStyle='#ffd700';
      ctx.beginPath();ctx.moveTo(-r*.58,-r*.68);ctx.lineTo(-r*.58,-r*.9);ctx.lineTo(-r*.32,-r*.72);ctx.lineTo(-r*.12,-r*.96);ctx.lineTo(r*.12,-r*.72);ctx.lineTo(r*.32,-r*.96);ctx.lineTo(r*.58,-r*.72);ctx.lineTo(r*.58,-r*.68);ctx.closePath();ctx.fill();
      // crown jewels
      ctx.fillStyle='#f44336';ctx.beginPath();ctx.arc(-r*.12,-r*.94,r*.07,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#4caf50';ctx.beginPath();ctx.arc(r*.12,-r*.94,r*.07,0,Math.PI*2);ctx.fill();
      // big boss eyes
      _eye(-r*.32,-r*.16,r*.3,'#1a237e');_eye(r*.32,-r*.16,r*.3,'#1a237e');
      // blush (even boss is a bit cute)
      _blush(-r*.62,r*.06,r*.22);_blush(r*.62,r*.06,r*.22);
      // evil grin + fangs
      ctx.fillStyle='#7f0000';ctx.beginPath();ctx.arc(0,r*.24,r*.38,.08,Math.PI-.08,false);ctx.fill();
      ctx.fillStyle='#fffde7';ctx.fillRect(-r*.3,r*.24,r*.14,r*.22);ctx.fillRect(r*.14,r*.24,r*.14,r*.22);
      ctx.restore();
      break;}
    case 5:{// Golem — chibi rock monster
      const _gl=Math.sin(Date.now()*.0025*_sm+x*.05)*r*.04;
      ctx.save();ctx.translate(0,_gl);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.18,r*.82,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.52,r*.05,r*1.04,r*.62,r*.2);else ctx.rect(-r*.52,r*.05,r*1.04,r*.62);});
      // chunky arms
      ctx.fillStyle='#757575';ctx.beginPath();ctx.ellipse(-r*.92,r*.12,r*.28,r*.36,.2,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(r*.92,r*.12,r*.28,r*.36,-.2,0,Math.PI*2);ctx.fill();
      // squat body
      ctx.fillStyle='#616161';ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.52,r*.05,r*1.04,r*.62,r*.2);else ctx.rect(-r*.52,r*.05,r*1.04,r*.62);ctx.fill();
      // body cracks
      ctx.strokeStyle='#424242';ctx.lineWidth=r*.07;
      ctx.beginPath();ctx.moveTo(-r*.2,r*.1);ctx.lineTo(r*.05,r*.5);ctx.stroke();
      ctx.beginPath();ctx.moveTo(r*.22,r*.12);ctx.lineTo(r*.08,r*.45);ctx.stroke();
      // HUGE round rocky head
      ctx.fillStyle='#757575';ctx.beginPath();ctx.arc(0,-r*.18,r*.82,0,Math.PI*2);ctx.fill();
      // rock texture bumps
      ctx.fillStyle='#8a8a8a';ctx.beginPath();ctx.arc(-r*.38,-r*.4,r*.22,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.3,-r*.48,r*.16,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.5,-r*.12,r*.14,0,Math.PI*2);ctx.fill();
      // head crack
      ctx.strokeStyle='#424242';ctx.lineWidth=r*.08;
      ctx.beginPath();ctx.moveTo(-r*.08,-r*.78);ctx.lineTo(r*.06,-r*.2);ctx.stroke();
      // glowing orange eyes (idle flicker)
      const _glg=.75+.25*Math.sin(Date.now()*.005+x*.05);
      ctx.fillStyle=`rgba(255,143,0,${_glg})`;ctx.beginPath();ctx.arc(-r*.28,-r*.2,r*.28,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.28,-r*.2,r*.28,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#ffe082';ctx.beginPath();ctx.arc(-r*.28,-r*.22,r*.16,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#ffe082';ctx.beginPath();ctx.arc(r*.28,-r*.22,r*.16,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(-r*.22,-r*.28,r*.07,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(r*.22,-r*.28,r*.07,0,Math.PI*2);ctx.fill();
      // grumpy line mouth
      ctx.strokeStyle='#424242';ctx.lineWidth=r*.1;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(-r*.28,r*.1);ctx.lineTo(r*.28,r*.1);ctx.stroke();
      ctx.restore();
      break;}
    case 6:{// Bat — chibi cute bat
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.05,r*.65,0,Math.PI*2);});
      const wf=Math.sin(Date.now()*.015*_sm+x)*.28;
      // wings (big swoopy)
      ctx.fillStyle='#37474f';
      ctx.beginPath();ctx.moveTo(-r*.18,r*.08);ctx.bezierCurveTo(-r*.82,-r*.38-wf*r,-r*1.12,r*.32-wf*r,-r*.9,r*.65);ctx.bezierCurveTo(-r*.55,r*.5,-r*.2,r*.38,-r*.18,r*.08);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.18,r*.08);ctx.bezierCurveTo(r*.82,-r*.38-wf*r,r*1.12,r*.32-wf*r,r*.9,r*.65);ctx.bezierCurveTo(r*.55,r*.5,r*.2,r*.38,r*.18,r*.08);ctx.closePath();ctx.fill();
      // wing vein lines
      ctx.strokeStyle='#263238';ctx.lineWidth=r*.05;
      ctx.beginPath();ctx.moveTo(-r*.18,r*.1);ctx.bezierCurveTo(-r*.6,-r*.15-wf*r*.4,-r*.75,r*.2,-r*.18,r*.1);ctx.stroke();
      ctx.beginPath();ctx.moveTo(r*.18,r*.1);ctx.bezierCurveTo(r*.6,-r*.15-wf*r*.4,r*.75,r*.2,r*.18,r*.1);ctx.stroke();
      // round body/head
      ctx.fillStyle='#546e7a';ctx.beginPath();ctx.arc(0,-r*.05,r*.65,0,Math.PI*2);ctx.fill();
      // pointy ears with pink inside
      ctx.fillStyle='#546e7a';ctx.beginPath();ctx.moveTo(-r*.3,-r*.5);ctx.lineTo(-r*.52,-r*.98);ctx.lineTo(-r*.08,-r*.6);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.3,-r*.5);ctx.lineTo(r*.52,-r*.98);ctx.lineTo(r*.08,-r*.6);ctx.closePath();ctx.fill();
      ctx.fillStyle='#ff8a80';ctx.beginPath();ctx.moveTo(-r*.32,-r*.55);ctx.lineTo(-r*.46,-r*.86);ctx.lineTo(-r*.14,-r*.64);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.32,-r*.55);ctx.lineTo(r*.46,-r*.86);ctx.lineTo(r*.14,-r*.64);ctx.closePath();ctx.fill();
      // big cute eyes
      _eye(-r*.25,-r*.1,r*.24,'#b71c1c');_eye(r*.25,-r*.1,r*.24,'#b71c1c');
      // fangs
      ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(-r*.1,r*.18);ctx.lineTo(-r*.04,r*.34);ctx.lineTo(r*.02,r*.18);ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.06,r*.18);ctx.lineTo(r*.12,r*.34);ctx.lineTo(r*.18,r*.18);ctx.fill();
      break;}
    case 8:{// Shield Knight — chibi armored knight
      const _sn=Math.sin(Date.now()*.0035*_sm+x*.05)*r*.035;
      ctx.save();ctx.translate(0,_sn);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.18,r*.8,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.moveTo(-r*.56,r*.04);ctx.lineTo(r*.56,r*.04);ctx.lineTo(r*.64,r*.55);ctx.lineTo(0,r*.95);ctx.lineTo(-r*.64,r*.55);ctx.closePath();});
      // big round helmet (chibi head!)
      ctx.fillStyle='#546e7a';ctx.beginPath();ctx.arc(0,-r*.18,r*.8,0,Math.PI*2);ctx.fill();
      // helmet shine
      const _hg=ctx.createLinearGradient(-r*.5,-r*.7,r*.2,-r*.1);
      _hg.addColorStop(0,'rgba(255,255,255,.3)');_hg.addColorStop(1,'transparent');
      ctx.fillStyle=_hg;ctx.beginPath();ctx.arc(0,-r*.18,r*.8,0,Math.PI*2);ctx.fill();
      // visor bar (idle glow pulse)
      ctx.fillStyle='#263238';ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.58,-r*.34,r*1.16,r*.26,r*.06);else ctx.rect(-r*.58,-r*.34,r*1.16,r*.26);ctx.fill();
      const _snv=.55+.3*Math.sin(Date.now()*.006+x*.05);
      ctx.fillStyle=`rgba(255,60,60,${_snv})`;ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.5,-r*.3,r*1.0,r*.17,r*.04);else ctx.rect(-r*.5,-r*.3,r*1.0,r*.17);ctx.fill();
      // tiny armored body
      ctx.fillStyle='#455a64';ctx.beginPath();ctx.ellipse(0,r*.44,r*.35,r*.3,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#546e7a';ctx.beginPath();ctx.ellipse(-r*.58,-r*.24,r*.2,r*.16,-.3,0,Math.PI*2);ctx.fill();// shoulder L
      ctx.beginPath();ctx.ellipse(r*.58,-r*.24,r*.2,r*.16,.3,0,Math.PI*2);ctx.fill();// shoulder R
      // GIANT shield (chibi = big items!)
      ctx.fillStyle='#1565c0';ctx.beginPath();ctx.moveTo(-r*.56,r*.04);ctx.lineTo(r*.56,r*.04);ctx.lineTo(r*.64,r*.55);ctx.lineTo(0,r*.95);ctx.lineTo(-r*.64,r*.55);ctx.closePath();ctx.fill();
      ctx.fillStyle='#1976d2';ctx.beginPath();ctx.moveTo(-r*.46,r*.1);ctx.lineTo(r*.46,r*.1);ctx.lineTo(r*.54,r*.52);ctx.lineTo(0,r*.84);ctx.lineTo(-r*.54,r*.52);ctx.closePath();ctx.fill();
      // shield cross
      ctx.strokeStyle='#90caf9';ctx.lineWidth=r*.1;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(0,r*.14);ctx.lineTo(0,r*.8);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-r*.46,r*.44);ctx.lineTo(r*.46,r*.44);ctx.stroke();
      ctx.fillStyle='#e3f2fd';ctx.beginPath();ctx.arc(0,r*.44,r*.1,0,Math.PI*2);ctx.fill();
      ctx.restore();
      break;}
    case 7:{// Wyvern — chibi cute dragon
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.1,r*.8,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,r*.5,r*.32,r*.26,0,0,Math.PI*2);});
      const _wf=Math.sin(Date.now()*.01*_sm+x)*.28;
      // wings
      ctx.fillStyle='#6a1b9a';
      ctx.beginPath();ctx.moveTo(-r*.2,r*.12);ctx.bezierCurveTo(-r*1.02,-r*.42-_wf*r,-r*1.28,r*.24-_wf*r,-r*1.0,r*.68);ctx.bezierCurveTo(-r*.6,r*.52,-r*.22,r*.38,-r*.2,r*.12);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.2,r*.12);ctx.bezierCurveTo(r*1.02,-r*.42-_wf*r,r*1.28,r*.24-_wf*r,r*1.0,r*.68);ctx.bezierCurveTo(r*.6,r*.52,r*.22,r*.38,r*.2,r*.12);ctx.closePath();ctx.fill();
      // wing veins
      ctx.strokeStyle='#7b1fa2';ctx.lineWidth=r*.06;
      ctx.beginPath();ctx.moveTo(-r*.2,r*.14);ctx.bezierCurveTo(-r*.7,-r*.18-_wf*r*.4,-r*.85,r*.2,-r*.2,r*.14);ctx.stroke();
      ctx.beginPath();ctx.moveTo(r*.2,r*.14);ctx.bezierCurveTo(r*.7,-r*.18-_wf*r*.4,r*.85,r*.2,r*.2,r*.14);ctx.stroke();
      // tiny body
      ctx.fillStyle='#7b1fa2';ctx.beginPath();ctx.ellipse(0,r*.5,r*.32,r*.26,0,0,Math.PI*2);ctx.fill();
      // tail
      ctx.strokeStyle='#6a1b9a';ctx.lineWidth=r*.16;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(0,r*.6);ctx.bezierCurveTo(r*.5,r*.88,r*.78,r*.6,r*.6,r*.32);ctx.stroke();
      // HUGE chibi round head
      ctx.fillStyle='#9c27b0';ctx.beginPath();ctx.arc(0,-r*.1,r*.8,0,Math.PI*2);ctx.fill();
      const _dh=ctx.createRadialGradient(-r*.28,-r*.42,0,0,-r*.1,r*.8);
      _dh.addColorStop(0,'rgba(255,200,255,.3)');_dh.addColorStop(1,'transparent');
      ctx.fillStyle=_dh;ctx.beginPath();ctx.arc(0,-r*.1,r*.8,0,Math.PI*2);ctx.fill();
      // cute horns
      ctx.fillStyle='#ce93d8';
      ctx.beginPath();ctx.moveTo(-r*.35,-r*.62);ctx.quadraticCurveTo(-r*.58,-r*1.0,-r*.32,-r*1.12);ctx.quadraticCurveTo(-r*.18,-r*.82,-r*.18,-r*.72);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.35,-r*.62);ctx.quadraticCurveTo(r*.58,-r*1.0,r*.32,-r*1.12);ctx.quadraticCurveTo(r*.18,-r*.82,r*.18,-r*.72);ctx.closePath();ctx.fill();
      // big cute dragon eyes
      _eye(-r*.28,-r*.14,r*.26,'#4a148c');_eye(r*.28,-r*.14,r*.26,'#4a148c');
      // nostrils
      ctx.fillStyle='#4a148c';ctx.beginPath();ctx.ellipse(-r*.1,r*.12,r*.06,r*.04,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(r*.1,r*.12,r*.06,r*.04,0,0,Math.PI*2);ctx.fill();
      // blush
      _blush(-r*.55,r*.04,r*.2);_blush(r*.55,r*.04,r*.2);
      break;}
    case 9:{// Dark Lord — chibi evil overlord (giant eye body)
      const _dl=Math.sin(Date.now()*.0035*_sm+x*.05)*r*.05;
      ctx.save();ctx.translate(0,_dl);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.05,r*.88,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,-r*.08,r*.55,r*.4,0,0,Math.PI*2);});
      const _t9=Date.now()*.002;
      // dark swirling aura
      const _bg9=ctx.createRadialGradient(0,0,r*.2,0,0,r*1.15);
      _bg9.addColorStop(0,'#3a006a');_bg9.addColorStop(.6,'rgba(20,0,40,.85)');_bg9.addColorStop(1,'transparent');
      ctx.fillStyle=_bg9;ctx.beginPath();ctx.arc(0,r*.1,r*1.15,0,Math.PI*2);ctx.fill();
      // dark cloak bottom
      ctx.fillStyle='rgba(20,0,40,.8)';
      ctx.beginPath();ctx.moveTo(-r*.65,r*.2);ctx.lineTo(-r*.9,r*1.05);ctx.lineTo(r*.9,r*1.05);ctx.lineTo(r*.65,r*.2);ctx.closePath();ctx.fill();
      // cloak tentacles (animated)
      for(let _k9=0;_k9<5;_k9++){
        const _a9=(_k9/5)*Math.PI+_t9*.5+Math.sin(_t9+_k9)*.25;
        ctx.fillStyle=`rgba(80,0,140,${.45+.2*Math.sin(_t9*2+_k9)})`;
        ctx.beginPath();ctx.ellipse(Math.cos(_a9+Math.PI)*r*.5,r*.65+Math.sin(_a9+_k9)*.1*r,r*.12,r*(.5+Math.sin(_t9+_k9)*.15),_a9+Math.PI/2,0,Math.PI*2);ctx.fill();
      }
      // big round dark body (chibi!)
      ctx.fillStyle='#1a0030';ctx.beginPath();ctx.arc(0,-r*.05,r*.88,0,Math.PI*2);ctx.fill();
      // purple inner glow
      const _ig9=ctx.createRadialGradient(0,-r*.22,0,0,-r*.05,r*.88);
      _ig9.addColorStop(0,'rgba(156,39,176,.6)');_ig9.addColorStop(1,'transparent');
      ctx.fillStyle=_ig9;ctx.beginPath();ctx.arc(0,-r*.05,r*.88,0,Math.PI*2);ctx.fill();
      // curved evil horns
      ctx.strokeStyle='#ce93d8';ctx.lineWidth=r*.14;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(-r*.48,-r*.6);ctx.bezierCurveTo(-r*.78,-r*1.08,-r*.32,-r*1.3,r*.02,-r*1.05);ctx.stroke();
      ctx.beginPath();ctx.moveTo(r*.48,-r*.6);ctx.bezierCurveTo(r*.78,-r*1.08,r*.32,-r*1.3,-r*.02,-r*1.05);ctx.stroke();
      ctx.fillStyle=`rgba(255,100,255,${.7+.3*Math.sin(_t9*3)})`;
      ctx.beginPath();ctx.arc(r*.02,-r*1.04,r*.1,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(-r*.02,-r*1.04,r*.1,0,Math.PI*2);ctx.fill();
      // GIANT eye (the star of the show!)
      const _ep9=.6+.4*Math.sin(_t9*2.5);
      ctx.fillStyle='#f3e5f5';ctx.beginPath();ctx.ellipse(0,-r*.08,r*.55,r*.4,0,0,Math.PI*2);ctx.fill();
      // iris
      ctx.fillStyle='#7b1fa2';ctx.beginPath();ctx.arc(0,-r*.08,r*.32,0,Math.PI*2);ctx.fill();
      // pupil slit (vertical)
      ctx.fillStyle='#1a0030';ctx.beginPath();ctx.ellipse(0,-r*.08,r*.1,r*.28,0,0,Math.PI*2);ctx.fill();
      // evil glow pupil
      ctx.fillStyle=`rgba(234,128,252,${_ep9*.8})`;ctx.beginPath();ctx.arc(0,-r*.08,r*.1,0,Math.PI*2);ctx.fill();
      // eye shine
      ctx.fillStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.arc(-r*.12,-r*.18,r*.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.4)';ctx.beginPath();ctx.arc(r*.08,-r*.02,r*.06,0,Math.PI*2);ctx.fill();
      // eyelashes (dramatic)
      ctx.strokeStyle='#1a0030';ctx.lineWidth=r*.06;
      for(let _k9=0;_k9<5;_k9++){const _ex=-r*.5+_k9*r*.25,_ey=-r*.42;ctx.beginPath();ctx.moveTo(_ex,_ey);ctx.lineTo(_ex-r*.04,_ey-r*.2);ctx.stroke();}
      for(let _k9=0;_k9<5;_k9++){const _ex=-r*.5+_k9*r*.25,_ey=r*.25;ctx.beginPath();ctx.moveTo(_ex,_ey);ctx.lineTo(_ex+r*.04,_ey+r*.16);ctx.stroke();}
      // energy orb (hand)
      const _ox=r*.68,_oy=r*.28;
      ctx.fillStyle=`rgba(156,39,176,${.55+.3*Math.sin(_t9*4)})`;ctx.beginPath();ctx.arc(_ox,_oy,r*.2,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=`rgba(234,128,252,${.9+.1*Math.sin(_t9*5)})`;ctx.lineWidth=r*.05;ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,.85)';ctx.beginPath();ctx.arc(_ox-r*.06,_oy-r*.06,r*.06,0,Math.PI*2);ctx.fill();
      ctx.restore();
      break;}
    case 10:{// Shaman — chibi mushroom healer
      const _sh=Math.sin(Date.now()*.004*_sm+x*.05)*r*.045;
      ctx.save();ctx.translate(0,_sh);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.15,r*.72,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,-r*.88,r*.78,r*.38,0,0,Math.PI*2);});
      const _th=Date.now()*.0025;
      // heal pulse aura
      ctx.globalAlpha=.18+.12*Math.sin(_th*3);ctx.strokeStyle='#69f0ae';ctx.lineWidth=r*.2;
      ctx.beginPath();ctx.arc(0,0,r*1.38,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
      // orbiting heal sparkles
      for(let _ks=0;_ks<3;_ks++){
        const _as=_ks/3*Math.PI*2+_th*2.5;
        ctx.fillStyle=`rgba(178,255,89,${.6+.35*Math.sin(_th*3+_ks)})`;
        ctx.beginPath();ctx.arc(Math.cos(_as)*r*1.12,Math.sin(_as)*r*1.12,r*.1,0,Math.PI*2);ctx.fill();
      }
      // robe (bell shape)
      ctx.fillStyle='#2e7d32';
      ctx.beginPath();ctx.moveTo(-r*.42,r*.05);ctx.lineTo(-r*.6,r*.82);ctx.lineTo(r*.6,r*.82);ctx.lineTo(r*.42,r*.05);ctx.closePath();ctx.fill();
      // robe pattern
      ctx.fillStyle='rgba(255,255,255,.14)';ctx.beginPath();ctx.moveTo(0,r*.08);ctx.lineTo(-r*.12,r*.72);ctx.lineTo(r*.12,r*.72);ctx.closePath();ctx.fill();
      // staff
      ctx.strokeStyle='#6d4c41';ctx.lineWidth=r*.1;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(r*.55,r*.72);ctx.lineTo(r*.72,-r*.48);ctx.stroke();
      // staff orb pulsing
      const _gp=.7+.3*Math.sin(_th*6);
      ctx.fillStyle=`rgba(105,240,174,${_gp})`;ctx.beginPath();ctx.arc(r*.76,-r*.54,r*.2,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.7)';ctx.beginPath();ctx.arc(r*.7,-r*.6,r*.09,0,Math.PI*2);ctx.fill();
      // big round chibi head (skin tone)
      ctx.fillStyle='#ffe0b2';ctx.beginPath();ctx.arc(0,-r*.15,r*.72,0,Math.PI*2);ctx.fill();
      // blush
      _blush(-r*.4,r*.02,r*.2);_blush(r*.4,r*.02,r*.2);
      // cute eyes
      _eye(-r*.26,-r*.2,r*.22,'#2e7d32');_eye(r*.26,-r*.2,r*.22,'#2e7d32');
      // mushroom hat (big cute hat!)
      ctx.fillStyle='#6d4c41';
      ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.32,-r*.64,r*.64,r*.28,r*.06);else ctx.rect(-r*.32,-r*.64,r*.64,r*.28);ctx.fill();
      ctx.fillStyle='#a1887f';
      ctx.beginPath();ctx.ellipse(0,-r*.88,r*.78,r*.38,0,0,Math.PI*2);ctx.fill();
      // hat shade
      const _hsh=ctx.createLinearGradient(-r*.78,-r*.88,r*.78,-r*.88);
      _hsh.addColorStop(0,'rgba(0,0,0,.2)');_hsh.addColorStop(.4,'rgba(255,255,255,.15)');_hsh.addColorStop(1,'rgba(0,0,0,.2)');
      ctx.fillStyle=_hsh;ctx.beginPath();ctx.ellipse(0,-r*.88,r*.78,r*.38,0,0,Math.PI*2);ctx.fill();
      // mushroom spots
      ctx.fillStyle='rgba(255,255,255,.8)';
      ctx.beginPath();ctx.arc(-r*.3,-r*.9,r*.12,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.26,-r*.82,r*.09,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.05,-r*1.02,r*.08,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(-r*.55,-r*.78,r*.08,0,Math.PI*2);ctx.fill();
      ctx.restore();
      break;}
    case 11:{// นักรบเดือด — stocky ash soldier, glows red when berserk
      const _bk=Math.sin(Date.now()*.005*_sm+x*.05)*r*.04;
      ctx.save();ctx.translate(0,_bk);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.1,r*.72,0,Math.PI*2);});
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,r*.52,r*.4,r*.32,0,0,Math.PI*2);});
      // body
      ctx.fillStyle='#4e342e';ctx.beginPath();ctx.ellipse(0,r*.52,r*.4,r*.32,0,0,Math.PI*2);ctx.fill();
      // shoulder pads
      ctx.fillStyle='#6d4c41';ctx.beginPath();ctx.ellipse(-r*.5,r*.28,r*.24,r*.18,-.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(r*.5,r*.28,r*.24,r*.18,.3,0,Math.PI*2);ctx.fill();
      // head
      ctx.fillStyle='#bcaaa4';ctx.beginPath();ctx.arc(0,-r*.1,r*.72,0,Math.PI*2);ctx.fill();
      // helmet visor
      ctx.fillStyle='#3e2723';ctx.beginPath();ctx.ellipse(0,-r*.08,r*.6,r*.32,0,0,Math.PI);ctx.fill();
      // eyes glow
      const _bgl=Math.sin(Date.now()*.015+x*.05);
      ctx.fillStyle=`rgba(255,${mv._berserk?30:140},0,${.8+.2*_bgl})`;
      ctx.beginPath();ctx.arc(-r*.22,-r*.14,r*.14,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.22,-r*.14,r*.14,0,Math.PI*2);ctx.fill();
      // axe
      ctx.strokeStyle='#8d6e63';ctx.lineWidth=r*.1;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(r*.65,r*.68);ctx.lineTo(r*.82,-r*.4);ctx.stroke();
      ctx.fillStyle='#b0bec5';ctx.beginPath();ctx.ellipse(r*.88,-r*.48,r*.22,r*.38,.6,0,Math.PI*2);ctx.fill();
      ctx.restore();
      break;}
    case 12:{// ผีดิบ — wispy pale spirit, fades during phase
      const _gt=Date.now()*.005*_sm+x*.05;
      ctx.save();ctx.translate(0,Math.sin(_gt)*r*.07);ctx.scale(1,1-Math.sin(_gt)*.04);
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.06,r*.72,0,Math.PI*2);});
      // ghostly tail
      ctx.globalAlpha=.4;ctx.fillStyle='#e0f7fa';
      ctx.beginPath();ctx.moveTo(-r*.5,r*.22);ctx.bezierCurveTo(-r*.6,r*.68,-r*.22,r*.84,0,r*.64);ctx.bezierCurveTo(r*.22,r*.84,r*.6,r*.68,r*.5,r*.22);ctx.closePath();ctx.fill();
      for(let k=0;k<3;k++){ctx.globalAlpha=.3;ctx.fillStyle='#b2ebf2';ctx.beginPath();ctx.arc(-r*.36+k*r*.36,r*.54,r*.16,0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=1;
      // ectoplasm glow
      const _wg=ctx.createRadialGradient(-r*.18,-r*.28,0,0,-r*.06,r*.72);
      _wg.addColorStop(0,'rgba(224,247,250,.6)');_wg.addColorStop(1,'transparent');
      ctx.fillStyle='#b2ebf2';ctx.beginPath();ctx.arc(0,-r*.06,r*.72,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=_wg;ctx.beginPath();ctx.arc(0,-r*.06,r*.72,0,Math.PI*2);ctx.fill();
      // cracks on body
      ctx.strokeStyle='rgba(100,200,210,.6)';ctx.lineWidth=r*.04;
      ctx.beginPath();ctx.moveTo(-r*.24,-r*.3);ctx.lineTo(-r*.04,r*.1);ctx.stroke();
      ctx.beginPath();ctx.moveTo(r*.18,-r*.22);ctx.lineTo(r*.3,r*.2);ctx.stroke();
      // hollow eyes
      ctx.fillStyle='#006064';ctx.beginPath();ctx.arc(-r*.26,-r*.1,r*.22,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#006064';ctx.beginPath();ctx.arc(r*.26,-r*.1,r*.22,0,Math.PI*2);ctx.fill();
      const _wgl=.6+.4*Math.sin(Date.now()*.01+x);
      ctx.fillStyle=`rgba(0,229,255,${_wgl})`;ctx.beginPath();ctx.arc(-r*.26,-r*.1,r*.1,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(r*.26,-r*.1,r*.1,0,Math.PI*2);ctx.fill();
      ctx.restore();
      break;}
    case 13:{// แม่ฝูง — fat spider queen, 8 mini legs
      const _sq=Math.sin(Date.now()*.003*_sm+x*.05)*r*.03;
      ctx.save();ctx.translate(0,_sq);
      // legs (8 stick legs)
      ctx.strokeStyle='#4a148c';ctx.lineWidth=r*.07;ctx.lineCap='round';
      const _lp=[[-r*.72,r*.0,-r*1.1,-r*.35],[- r*.8,r*.22,-r*1.18,r*.0],[-r*.68,r*.48,-r*1.1,r*.58],[-r*.52,r*.6,-r*.78,r*.82],
                 [r*.72,r*.0,r*1.1,-r*.35],[r*.8,r*.22,r*1.18,r*.0],[r*.68,r*.48,r*1.1,r*.58],[r*.52,r*.6,r*.78,r*.82]];
      _lp.forEach(l=>{ctx.beginPath();ctx.moveTo(l[0],l[1]);ctx.lineTo(l[2],l[3]);ctx.stroke();});
      // abdomen (rear big blob)
      _ol(()=>{ctx.beginPath();ctx.ellipse(0,r*.62,r*.52,r*.44,0,0,Math.PI*2);});
      ctx.fillStyle='#6a1b9a';ctx.beginPath();ctx.ellipse(0,r*.62,r*.52,r*.44,0,0,Math.PI*2);ctx.fill();
      // abdomen pattern
      ctx.fillStyle='rgba(255,255,255,.14)';
      for(let k=0;k<3;k++){ctx.beginPath();ctx.ellipse(0,r*(.36+k*.22),r*(.3-k*.06),r*.08,0,0,Math.PI*2);ctx.fill();}
      // cephalothorax (head)
      _ol(()=>{ctx.beginPath();ctx.arc(0,-r*.06,r*.68,0,Math.PI*2);});
      ctx.fillStyle='#7b1fa2';ctx.beginPath();ctx.arc(0,-r*.06,r*.68,0,Math.PI*2);ctx.fill();
      // 4 eyes
      const _ep=[[-r*.28,-r*.22],[r*.28,-r*.22],[-r*.42,-r*.0],[r*.42,-r*.0]];
      _ep.forEach(p=>{ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(p[0],p[1],r*.12,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#1a237e';ctx.beginPath();ctx.arc(p[0]+r*.02,p[1],r*.07,0,Math.PI*2);ctx.fill();});
      // fangs
      ctx.fillStyle='#fffde7';ctx.beginPath();ctx.moveTo(-r*.16,r*.22);ctx.lineTo(-r*.08,r*.42);ctx.lineTo(r*.0,r*.22);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(r*.0,r*.22);ctx.lineTo(r*.08,r*.42);ctx.lineTo(r*.16,r*.22);ctx.closePath();ctx.fill();
      ctx.restore();
      break;}
  }
  ctx.restore();
  ctx.restore();
}

