const TNAMES=['ปืนใหญ่','น้ำแข็ง','เวทมนตร์','สไนเปอร์','ซัพพอร์ต','ธนู','เหมืองทอง','สายฟ้า'];
const TICONS=['💣','❄️','✨','🎯','💚','🏹','💰','⚡'];
const TCOLORS=['#c62828','#0d47a1','#4a148c','#1b5e20','#00695c','#4e342e','#f57f17'];
const TPROJ=['#ff7043','#80d8ff','#e040fb','#ffee58','#69f0ae','#a5d6a7','#ffd54f','#ffe57f'];
const TACCENT=['#ff5252','#40c4ff','#ea80fc','#69f0ae','#64ffda','#8d6e63','#ffca28','#ffe57f'];
const TSPLASH=[.8,0,1.2,0,0,0,0,0];
const TSLOW=[0,.45,0,0,0,0,0,0];
const TBUFF=[false,false,false,false,true,false,false,false];
const TCANAIR=[false,false,false,true,false,true,false,true]; /* ยิง air ได้ */
const TGOLDMINE=[false,false,false,false,false,false,true,false]; /* สร้างทอง */
const TCHAIN=[0,0,0,0,0,0,0,2]; /* chain lightning targets (Thunder=2) */
const TPIERCE=[false,false,false,true,false,false,false,true]; /* ทะลุโล่ได้ (Sniper, Thunder) */
const TFLAVOR=['ปืนใหญ่หนักที่ยิงกระสุนระเบิด ความเสียหายแบบกระจายทำลายล้างศัตรูที่อยู่รวมกัน',
  'ยิงน้ำแข็งที่ทำให้ศัตรูเยือกแข็ง วางไว้ก่อนทางยาวจะได้ผลดีที่สุด',
  'รวมพลังเวทมนตร์เป็นการโจมตีที่รุนแรง กระจายในวงกว้าง แต่ยิงช้า',
  'มือปืนระยะไกลที่แม่นยำ มีความเสียหายต่อเป้าหมายเดียวสูงสุดในเกม',
  'ปล่อยออร่าเสริมกำลังที่เพิ่มความเสียหายให้ป้อมใกล้เคียง ไม่โจมตีโดยตรง',
  'นักธนูผู้คล่องแคล่ว ยิงได้ทั้งศัตรูภาคพื้นดินและศัตรูที่บินอยู่บนอากาศ',
  'เหมืองทองที่สร้างรายได้ต่อเนื่อง ไม่โจมตี แต่ผลิตทองทุก 5 วินาที',
  'หอคอยพลังสายฟ้าที่ยิงฟ้าผ่าลงใส่ศัตรู และลัดไปยังศัตรูข้างเคียงอีก 2 ตัว ยิงโดนได้ทั้งพื้นและอากาศ'];
const TTAGS=[[{t:'กระจาย',c:'tag-orange'},{t:'ความเสียหายพื้นที่',c:'tag-red'}],
  [{t:'ช้า',c:'tag-blue'},{t:'ซัพพอร์ต',c:'tag-green'}],
  [{t:'กระจายกว้าง',c:'tag-purple'},{t:'ความเสียหายสูง',c:'tag-red'}],
  [{t:'ระยะไกลมาก',c:'tag-blue'},{t:'ความเสียหายสูงสุด',c:'tag-red'}],
  [{t:'ออร่าเสริมกำลัง',c:'tag-green'},{t:'ไม่โจมตี',c:'tag-purple'}],
  [{t:'ยิง Air',c:'tag-blue'},{t:'Fire Rate เร็ว',c:'tag-orange'}],
  [{t:'ผลิตทอง',c:'tag-green'},{t:'ไม่โจมตี',c:'tag-purple'}],
  [{t:'Chain Lightning',c:'tag-orange'},{t:'ยิง Air',c:'tag-blue'}]];
const TSPECIAL=['กระจาย: 0.8 ช่อง','ชะลอเหลือ 45% นาน 2 วินาที','กระจาย: 1.2 ช่อง','ระยะยิง 4.5 ช่อง','+10% ความเสียหาย/ระดับ ให้ป้อมใกล้เคียง','ยิง Air ได้ — ยิงค้างคาวและวิเวิร์นได้ (ร่วมกับ Sniper และ Thunder)','ผลิต 2/4/6/8 ทอง ทุก 5 วินาที ตาม Level','Chain Lightning ถึง 2 ตัว — ดาเมจลด 40% ต่อ chain — ยิง Air ได้'];
const TSTRENGTH=[
  ['ทำลายหมู่ศัตรูได้ดี','ระยะใกล้-กลาง'],
  ['ชะลอความเร็วศัตรู','เพิ่มเวลาให้ป้อมอื่น'],
  ['Splash กว้างที่สุด','ดาเมจสูง'],
  ['ระยะไกลสุดในเกม','ดาเมจต่อตัวสูงสุด'],
  ['เพิ่มพลังป้อมรอบข้าง','ไม่ต้องการเป้าหมาย'],
  ['ยิงได้ทั้ง ground และ air','Fire Rate สูง'],
  ['รายได้ต่อเนื่อง','ไม่ต้องการเป้าหมาย'],
  ['Chain ศัตรู 2 ตัวในหนึ่งยิง','ยิง Air ได้'],
];
const TWEAKNESS=[
  ['ยิงช้าถ้าศัตรูกระจาย','ระยะสั้นกว่าสไนเปอร์'],
  ['ดาเมจต่ำ','ไม่มีผลกับบอส'],
  ['Fire Rate ช้ามาก','ราคาแพงที่สุด'],
  ['ยิงได้ทีละตัวเท่านั้น','Fire Rate ช้า'],
  ['ไม่โจมตีโดยตรง','ต้องวางใกล้ป้อมอื่น'],
  ['ดาเมจต่ำกว่า Sniper','ระยะสั้นกว่า'],
  ['ไม่โจมตีเลย','ถ้าถูกทำลายเสียทอง'],
  ['ดาเมจต่อตัวต่ำกว่าป้อมอื่น','Chain ต้องการหลายศัตรู'],
];
/* ══ RUNE SYSTEM ══ */
const RUNES=[
  {id:0,icon:'🔥',name:'อัคนีรูน',  desc:'25% ติดเพลิง — DoT 8dmg ทุก 0.5s × 5 ครั้ง',  col:'#ff5722'},
  {id:1,icon:'❄️',name:'หิมะรูน',   desc:'Slow แรงขึ้น +25% และนานขึ้น +1 วินาที',       col:'#80d8ff'},
  {id:2,icon:'⚡',name:'พายุรูน',   desc:'On hit: 35% chain ฟ้า 1 ตัวใกล้ที่สุด (40% dmg)',col:'#ffe57f'},
  {id:3,icon:'🎯',name:'แม่นยำรูน', desc:'20% Crit → ×2.5 damage',                       col:'#69f0ae'},
  {id:4,icon:'💰',name:'ทองรูน',    desc:'+60% Gold จากการ Kill',                         col:'#ffd54f'},
  {id:5,icon:'💥',name:'พลังรูน',   desc:'Damage ทั้งหมด +25%',                          col:'#ff8a65'},
];

function getTowerDmg(t,lv){return CFG.t_dmg[t]*(1+(lv-1)*.25);}
function getTowerRange(t,lv){return CFG.t_rng[t]*(1+(lv-1)*.15);}
function getTowerRate(t,lv){return CFG.t_rate[t]*(1+(lv-1)*.1);}
function getBuffMult(col,row){
  if(!G) return 1;
  const self=G.towers.find(t=>t.col===col&&t.row===row);
  if(self&&self._drainT>0) return 1; // ถูกเงามืดดูดพลัง — บัฟใช้งานไม่ได้ชั่วคราว
  let m=1;
  G.towers.forEach(t=>{
    if(TBUFF[t.type]&&Math.hypot(t.col-col,t.row-row)<=getTowerRange(t.type,t.rngLv||t.lv)) m*=1+(t.lv*.1);
  });
  return m;
}
// === Tower Synergy: คู่ป้อมที่เสริมกัน — ป้อม "to" ได้รับโบนัสเมื่อมีป้อม "from" อยู่ในระยะ ===
// effect: 'dmg'=โบนัสดาเมจ(mult), 'gold'=โบนัสผลผลิตทอง(amount), 'slow'=โบนัสหน่วงเหนี่ยว(amount)
const SYNERGY=[
  {from:1,to:2,effect:'dmg',mult:.20,name:'❄️🔮 ความเย็นยะเยือก',desc:'น้ำแข็งทำให้ศัตรูแข็งตัว เวทมนตร์สลายได้แรงขึ้น +20% dmg'},
  {from:2,to:7,effect:'dmg',mult:.20,name:'🔮⚡ ตัวนำเวทมนตร์',desc:'เวทมนตร์เสริมพลังให้สายฟ้านำกระแสได้แรงขึ้น +20% dmg'},
  {from:0,to:3,effect:'dmg',mult:.15,name:'💣🎯 ชี้เป้าระดมยิง',desc:'ปืนใหญ่ระดมยิงเปิดจุดอ่อนให้สไนเปอร์ +15% dmg'},
  {from:5,to:0,effect:'dmg',mult:.15,name:'🏹💣 สอดแนมตำแหน่ง',desc:'ธนูสอดแนมบอกตำแหน่งศัตรูให้ปืนใหญ่ +15% dmg'},
  {from:1,to:3,effect:'slow',amount:.30,name:'❄️🎯 กระสุนเยือกแข็ง',desc:'น้ำแข็งเสริมหัวกระสุนสไนเปอร์ให้หน่วงเหนี่ยวเป้าหมาย +30%'},
  {from:4,to:6,effect:'gold',amount:.25,name:'💰🛡️ ขุมทองคุ้มกัน',desc:'ซัพพอร์ตคุ้มกันเหมืองทอง ผลผลิตทองเพิ่ม +25%'},
];
function getActiveSynergies(type,col,row){
  if(!G) return [];
  const self=G.towers.find(t=>t.col===col&&t.row===row);
  if(self&&self._drainT>0) return []; // ถูกเงามืดดูดพลัง — synergy ใช้งานไม่ได้ชั่วคราว
  const out=[];
  SYNERGY.forEach(s=>{
    if(s.to===type){
      const has=G.towers.some(t=>t!==undefined&&t.type===s.from&&Math.hypot(t.col-col,t.row-row)<=getTowerRange(t.type,t.rngLv||t.lv));
      if(has) out.push(s);
    }
  });
  return out;
}
function getSynergyMult(type,col,row){
  let m=1;
  getActiveSynergies(type,col,row).forEach(s=>{ if(s.effect==='dmg') m+=s.mult; });
  return m;
}
function getSynergyGoldMult(col,row){
  let m=1;
  getActiveSynergies(6,col,row).forEach(s=>{ if(s.effect==='gold') m+=s.amount; });
  return m;
}
function getSynergySlowBonus(type,col,row){
  let b=0;
  getActiveSynergies(type,col,row).forEach(s=>{ if(s.effect==='slow') b+=s.amount; });
  return b;
}
/* ══ SPRITE DRAWING ══ */
/* ── sprite cache: pre-render static tower bodies once, drawImage every frame ── */
let _SC=null;
function _bldSC(){
  _SC={};
  const sz=CS-2,r=sz/2;
  const cw=Math.ceil(r*2.2),ch=Math.ceil(r*1.55),tx=cw/2,ty=Math.ceil(ch*.38);
  for(let t=0;t<8;t++){
    const oc=document.createElement('canvas');
    oc.width=cw;oc.height=ch;
    const ox=oc.getContext('2d');
    ox.translate(tx,ty);
    _twStatic(ox,t,r);
    _SC[t]={c:oc,tx,ty};
  }
}
function drawTowerIcon(ctx,type,sz,angle){
  if(!_SC)_bldSC();
  const r=sz/2,s=_SC[type];
  ctx.save();
  if(s)ctx.drawImage(s.c,-s.tx,-s.ty);else _twStatic(ctx,type,r);
  ctx.save();ctx.rotate((angle||0)+Math.PI/2);_twWeapon(ctx,type,r);ctx.restore();
  ctx.restore();
}
function _twStatic(ctx,type,r){
  // body colors per type: [dark, mid, shade]
  const BC=[['#0d3b9e','#3d7ae8','#2255cc'],['#005a8a','#00b4e0','#0088bb'],
            ['#5c0090','#a04de0','#7a22c0'],['#1e4a1e','#3a9f3a','#2d7030'],
            ['#004d3a','#00b07a','#007a55'],['#5c3400','#c87020','#9a5200'],
            ['#6b3800','#d4820a','#a06008'],['#0a1a44','#1a5abf','#122266']];
  const [bd,bm]=BC[type]||BC[0];
  // shadow under base
  ctx.globalAlpha=.28;ctx.fillStyle='#000';
  ctx.beginPath();ctx.ellipse(0,r*.82,r*.88,r*.2,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
  // stone base — bottom ellipse
  ctx.fillStyle='#686868';ctx.beginPath();ctx.ellipse(0,r*.66,r*.88,r*.21,0,0,Math.PI*2);ctx.fill();
  // stone side face
  const sg=ctx.createLinearGradient(-r,0,r,0);
  sg.addColorStop(0,'#4a4a4a');sg.addColorStop(.3,'#888');sg.addColorStop(.65,'#777');sg.addColorStop(1,'#3a3a3a');
  ctx.fillStyle=sg;
  ctx.beginPath();ctx.ellipse(0,r*.24,r*.88,r*.21,0,Math.PI,0,true);
  ctx.lineTo(r*.88,r*.66);ctx.ellipse(0,r*.66,r*.88,r*.21,0,0,Math.PI,true);
  ctx.lineTo(-r*.88,r*.24);ctx.closePath();ctx.fill();
  // stone block seams
  ctx.strokeStyle='rgba(0,0,0,.22)';ctx.lineWidth=.8;
  for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-r*.78,r*.3+i*r*.13);ctx.lineTo(r*.78,r*.3+i*r*.13);ctx.stroke();}
  [-r*.3,0,r*.3].forEach(x=>{ctx.beginPath();ctx.moveTo(x,r*.3);ctx.lineTo(x+r*.04,r*.54);ctx.stroke();});
  // stone top ellipse
  ctx.fillStyle='#9a9a9a';ctx.beginPath();ctx.ellipse(0,r*.24,r*.88,r*.21,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.13)';ctx.beginPath();ctx.ellipse(-r*.08,r*.21,r*.52,r*.13,0,0,Math.PI*2);ctx.fill();
  // body side cylinder
  const bg=ctx.createLinearGradient(-r*.72,0,r*.72,0);
  bg.addColorStop(0,bd);bg.addColorStop(.28,bm);bg.addColorStop(.65,bd);bg.addColorStop(1,shadeColor(bd,-30));
  ctx.fillStyle=bg;
  ctx.beginPath();ctx.ellipse(0,-r*.2,r*.72,r*.17,0,Math.PI,0,true);
  ctx.lineTo(r*.72,r*.24);ctx.ellipse(0,r*.24,r*.72,r*.17,0,0,Math.PI,true);
  ctx.lineTo(-r*.72,-r*.2);ctx.closePath();ctx.fill();
  // gold trim — bottom
  ctx.fillStyle='#9a7010';
  ctx.beginPath();ctx.ellipse(0,r*.18,r*.74,r*.18,0,Math.PI,0,true);
  ctx.lineTo(r*.74,r*.28);ctx.ellipse(0,r*.28,r*.74,r*.18,0,0,Math.PI,true);ctx.closePath();ctx.fill();
  ctx.fillStyle='#d4960e';ctx.beginPath();ctx.ellipse(0,r*.18,r*.74,r*.18,0,0,Math.PI*2);ctx.fill();
  // body top
  ctx.fillStyle=bm;ctx.beginPath();ctx.ellipse(0,-r*.2,r*.72,r*.17,0,0,Math.PI*2);ctx.fill();
  // gold trim — top
  ctx.fillStyle='#9a7010';
  ctx.beginPath();ctx.ellipse(0,-r*.26,r*.74,r*.18,0,Math.PI,0,true);
  ctx.lineTo(r*.74,-r*.15);ctx.ellipse(0,-r*.15,r*.74,r*.18,0,0,Math.PI,true);ctx.closePath();ctx.fill();
  ctx.fillStyle='#e8a820';ctx.beginPath();ctx.ellipse(0,-r*.26,r*.74,r*.18,0,0,Math.PI*2);ctx.fill();
  // gold studs
  ctx.fillStyle='#ffd740';
  for(let k=0;k<4;k++){const a=(k/3-.5)*Math.PI*.7,sx=Math.sin(a)*r*.65,sy=-Math.cos(a)*r*.17-r*.03;ctx.beginPath();ctx.arc(sx,sy,r*.055,0,Math.PI*2);ctx.fill();}
  // emblem / decal
  _twDecal(ctx,type,r);
}
function _twDecal(ctx,type,r){
  if(type===0){// shield+star
    ctx.fillStyle='#0d2288';ctx.beginPath();ctx.moveTo(0,r*.12);ctx.lineTo(-r*.17,r*.01);ctx.lineTo(-r*.17,-r*.13);ctx.lineTo(0,-r*.21);ctx.lineTo(r*.17,-r*.13);ctx.lineTo(r*.17,r*.01);ctx.closePath();ctx.fill();
    ctx.strokeStyle='#ffd740';ctx.lineWidth=r*.045;ctx.stroke();
    ctx.fillStyle='#ffd740';ctx.font=`${Math.round(r*.21)}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('★',0,-r*.06);
  } else if(type===1){// snowflake
    ctx.strokeStyle='#a8f0ff';ctx.lineWidth=r*.07;
    for(let k=0;k<3;k++){const a=k/3*Math.PI;ctx.beginPath();ctx.moveTo(Math.cos(a)*-r*.2,Math.sin(a)*-r*.08-r*.03);ctx.lineTo(Math.cos(a)*r*.2,Math.sin(a)*r*.08-r*.03);ctx.stroke();}
  } else if(type===2){// rune circle
    ctx.strokeStyle='#ea80fc';ctx.lineWidth=r*.06;ctx.beginPath();ctx.arc(0,-r*.03,r*.18,0,Math.PI*2);ctx.stroke();
    for(let k=0;k<4;k++){const a=k/4*Math.PI*2;ctx.beginPath();ctx.moveTo(Math.cos(a)*r*.07,Math.sin(a)*r*.07-r*.03);ctx.lineTo(Math.cos(a)*r*.18,Math.sin(a)*r*.18-r*.03);ctx.stroke();}
  } else if(type===3){// crosshair
    ctx.strokeStyle='#69f0ae';ctx.lineWidth=r*.05;ctx.beginPath();ctx.arc(0,-r*.03,r*.17,0,Math.PI*2);ctx.stroke();
    ctx.beginPath();ctx.moveTo(-r*.22,-r*.03);ctx.lineTo(r*.22,-r*.03);ctx.stroke();
    ctx.beginPath();ctx.moveTo(0,-r*.24);ctx.lineTo(0,r*.18);ctx.stroke();
  } else if(type===4){// plus sign
    ctx.strokeStyle='#69f0ae';ctx.lineWidth=r*.1;
    ctx.beginPath();ctx.moveTo(-r*.2,-r*.03);ctx.lineTo(r*.2,-r*.03);ctx.stroke();
    ctx.beginPath();ctx.moveTo(0,-r*.22);ctx.lineTo(0,r*.16);ctx.stroke();
    ctx.fillStyle='rgba(105,240,174,.3)';ctx.beginPath();ctx.arc(0,-r*.03,r*.14,0,Math.PI*2);ctx.fill();
  } else if(type===5){// arrow shape
    ctx.fillStyle='#ffe082';ctx.beginPath();ctx.moveTo(0,-r*.18);ctx.lineTo(-r*.08,r*.1);ctx.lineTo(0,r*.04);ctx.lineTo(r*.08,r*.1);ctx.closePath();ctx.fill();
  } else if(type===6){// $
    ctx.fillStyle='#ffd54f';ctx.font=`bold ${Math.round(r*.28)}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('$',0,-r*.03);
  } else if(type===7){// lightning bolt
    ctx.fillStyle='#ffe57f';
    ctx.beginPath();ctx.moveTo(r*.07,-r*.22);ctx.lineTo(-r*.08,-r*.02);ctx.lineTo(r*.03,-r*.02);ctx.lineTo(-r*.07,r*.18);ctx.lineTo(r*.14,r*.01);ctx.lineTo(r*.02,r*.01);ctx.closePath();ctx.fill();
    ctx.strokeStyle='#fff9c4';ctx.lineWidth=r*.025;ctx.stroke();
  }
}
function _twWeapon(ctx,type,r){
  // barrel points in -y (toward target) — context already rotated
  if(type===0){// Cannon
    ctx.fillStyle='#252525';ctx.beginPath();ctx.arc(0,0,r*.32,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#383838';ctx.beginPath();ctx.arc(-r*.07,-r*.07,r*.25,0,Math.PI*2);ctx.fill();
    const bg=ctx.createLinearGradient(-r*.23,0,r*.23,0);
    bg.addColorStop(0,'#1a1a1a');bg.addColorStop(.3,'#4c4c4c');bg.addColorStop(.7,'#333');bg.addColorStop(1,'#111');
    ctx.fillStyle=bg;ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.22,-r*1.2,r*.44,r*1.05,r*.09);else ctx.rect(-r*.22,-r*1.2,r*.44,r*1.05);ctx.fill();
    ctx.fillStyle='#111';ctx.beginPath();ctx.ellipse(0,-r*1.22,r*.16,r*.06,0,0,Math.PI*2);ctx.fill();
    const rg=ctx.createLinearGradient(-r*.26,0,r*.26,0);rg.addColorStop(0,'#6a4000');rg.addColorStop(.5,'#e8a820');rg.addColorStop(1,'#6a4000');
    ctx.fillStyle=rg;ctx.fillRect(-r*.26,-r*.5,r*.52,r*.14);
    ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-r*.07,-r*1.15,r*.09,r*.92);
  } else if(type===1){// Ice crystal spike
    ctx.fillStyle='#003d5a';ctx.beginPath();ctx.arc(0,0,r*.28,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#80deea';ctx.beginPath();ctx.moveTo(0,-r*1.1);ctx.lineTo(r*.2,-r*.4);ctx.lineTo(r*.3,0);ctx.lineTo(-r*.3,0);ctx.lineTo(-r*.2,-r*.4);ctx.closePath();ctx.fill();
    ctx.fillStyle='#e0f7fa';ctx.beginPath();ctx.moveTo(0,-r*1.1);ctx.lineTo(r*.08,-r*.4);ctx.lineTo(0,-r*.2);ctx.lineTo(-r*.08,-r*.4);ctx.closePath();ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(r*.08,-r*.75,r*.06,0,Math.PI*2);ctx.fill();
  } else if(type===2){// Magic orbiting
    const p=.5+.4*Math.sin(Date.now()*.004);
    ctx.globalAlpha=p*.6;ctx.strokeStyle='#e040fb';ctx.lineWidth=r*.12;ctx.beginPath();ctx.arc(0,0,r*.42,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    ctx.fillStyle='#7b1fa2';ctx.beginPath();ctx.arc(0,0,r*.26,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#ea80fc';ctx.beginPath();ctx.arc(0,0,r*.16,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-r*.05,-r*.05,r*.08,0,Math.PI*2);ctx.fill();
    const t=Date.now()*.003;for(let k=0;k<3;k++){const a=t+k/3*Math.PI*2;ctx.fillStyle=`rgba(234,128,252,${.5+.4*Math.sin(a)})`;ctx.beginPath();ctx.arc(Math.cos(a)*r*.55,Math.sin(a)*r*.55,r*.07,0,Math.PI*2);ctx.fill();}
  } else if(type===3){// Sniper long barrel
    ctx.fillStyle='#263238';ctx.beginPath();ctx.arc(0,0,r*.28,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#455a64';ctx.beginPath();if(ctx.roundRect)ctx.roundRect(-r*.15,-r*.42,r*.3,r*.38,r*.06);else ctx.rect(-r*.15,-r*.42,r*.3,r*.38);ctx.fill();
    const bg=ctx.createLinearGradient(-r*.14,0,r*.14,0);bg.addColorStop(0,'#1a1a1a');bg.addColorStop(.35,'#4a4a4a');bg.addColorStop(1,'#111');
    ctx.fillStyle=bg;ctx.fillRect(-r*.14,-r*1.35,r*.28,r*1.0);
    ctx.fillStyle='#1565c0';ctx.fillRect(-r*.2,-r*.88,r*.4,r*.16);
    ctx.fillStyle='#42a5f5';ctx.beginPath();ctx.arc(0,-r*.84,r*.1,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(200,230,255,.6)';ctx.beginPath();ctx.arc(-r*.02,-r*.86,r*.05,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.1)';ctx.fillRect(-r*.04,-r*1.3,r*.06,r*.95);
  } else if(type===4){// Support beacon
    const p=.4+.5*Math.sin(Date.now()*.004);
    ctx.globalAlpha=p*.5;ctx.strokeStyle='#69f0ae';ctx.lineWidth=r*.14;ctx.beginPath();ctx.arc(0,0,r*.5,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    ctx.fillStyle='#004d40';ctx.fillRect(-r*.22,-r*.75,r*.44,r*.7);
    ctx.fillStyle='#1de9b6';ctx.beginPath();ctx.arc(0,-r*.5,r*.26,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#a7ffeb';ctx.beginPath();ctx.arc(-r*.08,-r*.54,r*.13,0,Math.PI*2);ctx.fill();
  } else if(type===5){// Archer bow
    ctx.strokeStyle='#5d4037';ctx.lineWidth=r*.18;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(-r*.48,r*.62);ctx.bezierCurveTo(-r*.95,r*.2,-r*.95,-r*.2,-r*.48,-r*.62);ctx.stroke();
    ctx.strokeStyle='#ffe082';ctx.lineWidth=r*.06;ctx.beginPath();ctx.moveTo(-r*.48,-r*.62);ctx.lineTo(-r*.22,0);ctx.lineTo(-r*.48,r*.62);ctx.stroke();
    ctx.strokeStyle='#8d6e63';ctx.lineWidth=r*.1;ctx.beginPath();ctx.moveTo(-r*.22,0);ctx.lineTo(r*.62,0);ctx.stroke();
    ctx.fillStyle='#bdbdbd';ctx.beginPath();ctx.moveTo(r*.65,0);ctx.lineTo(r*.38,-r*.16);ctx.lineTo(r*.38,r*.16);ctx.closePath();ctx.fill();
    ctx.fillStyle='#f44336';ctx.beginPath();ctx.moveTo(-r*.08,0);ctx.lineTo(-r*.32,-r*.22);ctx.lineTo(-r*.22,0);ctx.closePath();ctx.fill();
    ctx.beginPath();ctx.moveTo(-r*.08,0);ctx.lineTo(-r*.32,r*.22);ctx.lineTo(-r*.22,0);ctx.closePath();ctx.fill();
  } else if(type===6){// Gold mine pickaxe
    ctx.fillStyle='#5d4037';ctx.beginPath();ctx.arc(0,0,r*.28,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#8d6e63';ctx.beginPath();ctx.arc(-r*.06,-r*.06,r*.2,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#9e9e9e';ctx.lineWidth=r*.1;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-r*.32,-r*.32);ctx.lineTo(r*.32,r*.32);ctx.stroke();
    ctx.strokeStyle='#e0e0e0';ctx.lineWidth=r*.18;ctx.beginPath();ctx.moveTo(r*.32,-r*.12);ctx.lineTo(-r*.12,r*.32);ctx.stroke();
  } else if(type===7){// Thunder — tesla coil / lightning rod
    // dark base disk
    ctx.fillStyle='#102244';ctx.beginPath();ctx.arc(0,0,r*.32,0,Math.PI*2);ctx.fill();
    // electric glow pulse
    const _tp=.5+.5*Math.sin(Date.now()*.008);
    ctx.globalAlpha=_tp*.5;ctx.strokeStyle='#ffe57f';ctx.lineWidth=r*.18;ctx.beginPath();ctx.arc(0,0,r*.44,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    // rod body
    const _rg=ctx.createLinearGradient(-r*.12,0,r*.12,0);_rg.addColorStop(0,'#1a3a66');_rg.addColorStop(.5,'#4a7acc');_rg.addColorStop(1,'#1a3a66');
    ctx.fillStyle=_rg;ctx.fillRect(-r*.12,-r*1.1,r*.24,r*.95);
    // tip glow
    ctx.fillStyle='#ffe57f';ctx.beginPath();ctx.arc(0,-r*1.12,r*.13,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#fff9c4';ctx.beginPath();ctx.arc(-r*.04,-r*1.15,r*.06,0,Math.PI*2);ctx.fill();
    // side prongs
    ctx.strokeStyle='#4a7acc';ctx.lineWidth=r*.07;
    ctx.beginPath();ctx.moveTo(-r*.12,-r*.75);ctx.lineTo(-r*.38,-r*.55);ctx.stroke();
    ctx.beginPath();ctx.moveTo(r*.12,-r*.75);ctx.lineTo(r*.38,-r*.55);ctx.stroke();
  }
}

/* ══ 3D TOWER OVERLAY (Three.js) ══ */
let _gl3D=null; // {renderer,scene,camera,glCv}
let _twMeshes=new Map(); // tower object -> mesh group
const _BC3D=[['#0d3b9e','#3d7ae8','#2255cc'],['#005a8a','#00b4e0','#0088bb'],
             ['#5c0090','#a04de0','#7a22c0'],['#1e4a1e','#3a9f3a','#2d7030'],
             ['#004d3a','#00b07a','#007a55'],['#5c3400','#c87020','#9a5200'],
             ['#6b3800','#d4820a','#a06008'],['#0a1a44','#1a5abf','#122266']];

function _gridToWorld3D(col,row){
  return {x:(col+0.5-COLS/2)*CS, z:(row+0.5-ROWS/2)*CS};
}

function _init3D(){
  if(_gl3D||typeof THREE==='undefined') return;
  const glCv=document.getElementById('gl3d');
  if(!glCv) return;
  const renderer=new THREE.WebGLRenderer({canvas:glCv,antialias:true,alpha:true});
  renderer.setClearColor(0x000000,0);
  renderer.setPixelRatio(window.devicePixelRatio||1);
  const scene=new THREE.Scene();
  const W=COLS*CS,H=ROWS*CS;
  const ELEV=THREE.MathUtils.degToRad(55);
  // Frustum: world X has no foreshortening from the camera tilt, but world Z
  // (depth) foreshortens onto the screen-vertical axis by sin(ELEV). To keep the
  // 3D grid aligned 1:1 with the flat 2D grid, size the frustum so width maps
  // world_x 1:1 and height maps (world_z*sin(ELEV)) 1:1 — zoom stays 1 and the
  // frustum height = canvas_height * sin(ELEV).
  const camera=new THREE.OrthographicCamera(-W/2,W/2,(H*Math.sin(ELEV))/2,-(H*Math.sin(ELEV))/2,1,4000);
  const CAM_DIST=1200;
  camera.position.set(0,Math.sin(ELEV)*CAM_DIST,Math.cos(ELEV)*CAM_DIST);
  camera.lookAt(0,0,0);
  camera.updateProjectionMatrix();
  scene.add(new THREE.AmbientLight(0xffffff,.65));
  const dl=new THREE.DirectionalLight(0xffffff,.65);
  dl.position.set(-300,600,400);
  scene.add(dl);
  _gl3D={renderer,scene,camera,glCv,W,H,ELEV};
  window.addEventListener('resize',_layoutGl3D);
}

function _layoutGl3D(){
  if(!_gl3D||!cv) return;
  const glCv=_gl3D.glCv;
  const r=cv.getBoundingClientRect();
  const pr=window.devicePixelRatio||1;
  glCv.style.position='absolute';
  glCv.style.left=cv.offsetLeft+'px';
  glCv.style.top=cv.offsetTop+'px';
  glCv.style.width=r.width+'px';
  glCv.style.height=r.height+'px';
  _gl3D.renderer.setPixelRatio(pr);
  _gl3D.renderer.setSize(r.width,r.height,false);
  // The 2D canvas's internal pixel size is fixed at COLS*CS × ROWS*CS and scaled
  // uniformly by CSS (width:auto;height:auto keep its aspect ratio constant), so
  // the displayed aspect always matches W/H — frustum stays grid-aligned 1:1.
  const W=_gl3D.W,H=_gl3D.H,ELEV=_gl3D.ELEV;
  _gl3D.camera.left=-W/2; _gl3D.camera.right=W/2;
  _gl3D.camera.top=(H*Math.sin(ELEV))/2; _gl3D.camera.bottom=-(H*Math.sin(ELEV))/2;
  _gl3D.camera.updateProjectionMatrix();
}

function _buildTowerMesh3D(type){
  const grp=new THREE.Group();
  const c=_BC3D[type]||_BC3D[0];
  const baseMat=new THREE.MeshLambertMaterial({color:c[2]});
  const bodyMat=new THREE.MeshLambertMaterial({color:c[1]});
  const roofMat=new THREE.MeshLambertMaterial({color:c[0]});
  const accentMat=new THREE.MeshLambertMaterial({color:'#fff8dc'});
  let turret=null;

  switch(type){
    case 0:{ // 💣 Cannon — squat bunker + thick rotating barrel
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.38,CS*.44,CS*.20,16),baseMat);
      base.position.y=CS*.10;
      const body=new THREE.Mesh(new THREE.CylinderGeometry(CS*.30,CS*.36,CS*.30,16),bodyMat);
      body.position.y=CS*.20+CS*.15;
      grp.add(base,body);
      turret=new THREE.Group();
      const dome=new THREE.Mesh(new THREE.SphereGeometry(CS*.20,14,10,0,Math.PI*2,0,Math.PI/2),roofMat);
      const barrel=new THREE.Mesh(new THREE.CylinderGeometry(CS*.075,CS*.095,CS*.5,12),baseMat);
      barrel.rotation.x=Math.PI/2; barrel.position.z=CS*.30;
      const muzzle=new THREE.Mesh(new THREE.CylinderGeometry(CS*.10,CS*.10,CS*.07,12),roofMat);
      muzzle.rotation.x=Math.PI/2; muzzle.position.z=CS*.54;
      turret.add(dome,barrel,muzzle);
      turret.position.y=CS*.20+CS*.30;
      grp.add(turret);
      break;}
    case 1:{ // ❄️ Ice — crystalline spire of stacked octahedron shards
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.32,CS*.38,CS*.16,8),baseMat);
      base.position.y=CS*.08; base.rotation.y=Math.PI/8;
      grp.add(base);
      const shard1=new THREE.Mesh(new THREE.OctahedronGeometry(CS*.22,0),bodyMat);
      shard1.position.y=CS*.16+CS*.20; shard1.scale.y=1.6;
      const shard2=new THREE.Mesh(new THREE.OctahedronGeometry(CS*.15,0),roofMat);
      shard2.position.set(CS*.16,CS*.16+CS*.16,CS*.05); shard2.scale.y=1.4; shard2.rotation.z=.3;
      const shard3=new THREE.Mesh(new THREE.OctahedronGeometry(CS*.13,0),roofMat);
      shard3.position.set(-CS*.15,CS*.16+CS*.12,-CS*.08); shard3.scale.y=1.3; shard3.rotation.z=-.4;
      grp.add(shard1,shard2,shard3);
      turret=new THREE.Group();
      const core=new THREE.Mesh(new THREE.OctahedronGeometry(CS*.09,0),accentMat);
      turret.add(core);
      turret.position.y=CS*.16+CS*.46;
      grp.add(turret);
      break;}
    case 2:{ // ✨ Magic — tall spire with hovering orbiting orb & ring
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.26,CS*.36,CS*.18,12),baseMat);
      base.position.y=CS*.09;
      const spire=new THREE.Mesh(new THREE.ConeGeometry(CS*.20,CS*.62,12),bodyMat);
      spire.position.y=CS*.18+CS*.31;
      grp.add(base,spire);
      turret=new THREE.Group();
      const ring=new THREE.Mesh(new THREE.TorusGeometry(CS*.20,CS*.03,8,20),accentMat);
      ring.rotation.x=Math.PI/2.3;
      const orb=new THREE.Mesh(new THREE.SphereGeometry(CS*.12,14,12),roofMat);
      orb.position.y=CS*.10;
      turret.add(ring,orb);
      turret.position.y=CS*.18+CS*.62+CS*.10;
      grp.add(turret);
      break;}
    case 3:{ // 🎯 Sniper — tall slender tower with long precision barrel
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.24,CS*.30,CS*.18,10),baseMat);
      base.position.y=CS*.09;
      const body=new THREE.Mesh(new THREE.CylinderGeometry(CS*.14,CS*.20,CS*.62,10),bodyMat);
      body.position.y=CS*.18+CS*.31;
      grp.add(base,body);
      turret=new THREE.Group();
      const head=new THREE.Mesh(new THREE.BoxGeometry(CS*.20,CS*.14,CS*.20),roofMat);
      const barrel=new THREE.Mesh(new THREE.CylinderGeometry(CS*.03,CS*.04,CS*.62,8),baseMat);
      barrel.rotation.x=Math.PI/2; barrel.position.z=CS*.36;
      const scope=new THREE.Mesh(new THREE.CylinderGeometry(CS*.035,CS*.035,CS*.16,8),accentMat);
      scope.rotation.x=Math.PI/2; scope.position.set(0,CS*.08,CS*.05);
      turret.add(head,barrel,scope);
      turret.position.y=CS*.18+CS*.62+CS*.07;
      grp.add(turret);
      break;}
    case 4:{ // 💚 Support — banner pavilion with glowing heart emblem
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.34,CS*.40,CS*.16,12),baseMat);
      base.position.y=CS*.08;
      const pillar=new THREE.Mesh(new THREE.CylinderGeometry(CS*.07,CS*.08,CS*.46,8),bodyMat);
      pillar.position.y=CS*.16+CS*.23;
      const canopy=new THREE.Mesh(new THREE.ConeGeometry(CS*.30,CS*.20,6),roofMat);
      canopy.position.y=CS*.16+CS*.46+CS*.06;
      grp.add(base,pillar,canopy);
      turret=new THREE.Group();
      const emblem=new THREE.Mesh(new THREE.SphereGeometry(CS*.10,12,10),accentMat);
      const halo=new THREE.Mesh(new THREE.TorusGeometry(CS*.16,CS*.022,8,18),roofMat);
      halo.rotation.x=Math.PI/2;
      turret.add(emblem,halo);
      turret.position.y=CS*.16+CS*.40;
      grp.add(turret);
      break;}
    case 5:{ // 🏹 Archer — wooden post with a drawn bow on top
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.24,CS*.30,CS*.16,8),baseMat);
      base.position.y=CS*.08;
      const post=new THREE.Mesh(new THREE.CylinderGeometry(CS*.10,CS*.13,CS*.50,8),bodyMat);
      post.position.y=CS*.16+CS*.25;
      grp.add(base,post);
      turret=new THREE.Group();
      const platform=new THREE.Mesh(new THREE.CylinderGeometry(CS*.18,CS*.18,CS*.05,10),bodyMat);
      const bow=new THREE.Mesh(new THREE.TorusGeometry(CS*.18,CS*.022,8,16,Math.PI*1.15),roofMat);
      bow.rotation.y=Math.PI/2; bow.rotation.z=Math.PI*.07; bow.position.z=CS*.16;
      const string=new THREE.Mesh(new THREE.CylinderGeometry(CS*.012,CS*.012,CS*.34,6),accentMat);
      string.position.z=CS*.16;
      turret.add(platform,bow,string);
      turret.position.y=CS*.16+CS*.50+CS*.05;
      grp.add(turret);
      break;}
    case 6:{ // 💰 Gold Mine — stout hut with chimney & gold-pile glow
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.40,CS*.44,CS*.16,12),baseMat);
      base.position.y=CS*.08;
      const hut=new THREE.Mesh(new THREE.BoxGeometry(CS*.50,CS*.34,CS*.50),bodyMat);
      hut.position.y=CS*.16+CS*.17;
      const roof=new THREE.Mesh(new THREE.ConeGeometry(CS*.40,CS*.26,4),roofMat);
      roof.rotation.y=Math.PI/4;
      roof.position.y=CS*.16+CS*.34+CS*.13;
      grp.add(base,hut,roof);
      turret=new THREE.Group();
      const pile=new THREE.Mesh(new THREE.DodecahedronGeometry(CS*.11,0),accentMat);
      pile.position.set(CS*.18,CS*.06,CS*.18);
      turret.add(pile);
      turret.position.y=CS*.16+CS*.10;
      grp.add(turret);
      break;}
    case 7:{ // ⚡ Lightning — tesla rod with crackling orb & rings
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.30,CS*.38,CS*.18,12),baseMat);
      base.position.y=CS*.09;
      const rod=new THREE.Mesh(new THREE.CylinderGeometry(CS*.05,CS*.09,CS*.58,10),bodyMat);
      rod.position.y=CS*.18+CS*.29;
      grp.add(base,rod);
      turret=new THREE.Group();
      const coilTop=new THREE.Mesh(new THREE.SphereGeometry(CS*.13,14,12),roofMat);
      const ring1=new THREE.Mesh(new THREE.TorusGeometry(CS*.17,CS*.02,6,16),accentMat);
      ring1.rotation.x=Math.PI/2;
      const ring2=new THREE.Mesh(new THREE.TorusGeometry(CS*.13,CS*.018,6,16),accentMat);
      ring2.rotation.x=Math.PI/2; ring2.position.y=-CS*.07;
      turret.add(coilTop,ring1,ring2);
      turret.position.y=CS*.18+CS*.58+CS*.10;
      grp.add(turret);
      break;}
    default:{
      const base=new THREE.Mesh(new THREE.CylinderGeometry(CS*.34,CS*.40,CS*.18,16),baseMat);
      base.position.y=CS*.09;
      const body=new THREE.Mesh(new THREE.CylinderGeometry(CS*.20,CS*.30,CS*.46,12),bodyMat);
      body.position.y=CS*.18+CS*.23;
      const roof=new THREE.Mesh(new THREE.ConeGeometry(CS*.24,CS*.26,12),roofMat);
      roof.position.y=CS*.18+CS*.46+CS*.13;
      grp.add(base,body,roof);
      turret=new THREE.Group();
      const sphere=new THREE.Mesh(new THREE.SphereGeometry(CS*.13,12,10),roofMat);
      const barrel=new THREE.Mesh(new THREE.CylinderGeometry(CS*.045,CS*.06,CS*.42,10),baseMat);
      barrel.rotation.x=Math.PI/2; barrel.position.z=CS*.24;
      turret.add(sphere,barrel);
      turret.position.y=CS*.18+CS*.30;
      grp.add(turret);
    }
  }
  if(turret) grp.userData.turret=turret;
  return grp;
}

function _buildAwakenAura3D(){
  const grp=new THREE.Group();
  const goldMat=new THREE.MeshBasicMaterial({color:'#ffe082',transparent:true,opacity:.75});
  const goldMat2=new THREE.MeshBasicMaterial({color:'#fff3c4',transparent:true,opacity:.55});
  // dual golden halo rings (counter-rotating)
  const ringA=new THREE.Mesh(new THREE.TorusGeometry(CS*.46,CS*.025,8,28),goldMat);
  ringA.rotation.x=Math.PI/2;
  const ringB=new THREE.Mesh(new THREE.TorusGeometry(CS*.36,CS*.018,8,24),goldMat2);
  ringB.rotation.x=Math.PI/2;
  grp.add(ringA,ringB);
  grp.userData.ringA=ringA; grp.userData.ringB=ringB;
  // orbiting motes
  const motes=[];
  const moteMat=new THREE.MeshBasicMaterial({color:'#fff9c4'});
  for(let i=0;i<5;i++){
    const m=new THREE.Mesh(new THREE.SphereGeometry(CS*.035,8,8),moteMat);
    m.userData.ang=i/5*Math.PI*2;
    m.userData.r=CS*(.42+ (i%2)*.10);
    m.userData.spd=1.4+ (i%3)*.35;
    m.userData.yOff=i*0.7;
    grp.add(m); motes.push(m);
  }
  grp.userData.motes=motes;
  // upward energy beam
  const beam=new THREE.Mesh(
    new THREE.CylinderGeometry(CS*.05,CS*.16,CS*1.05,14,1,true),
    new THREE.MeshBasicMaterial({color:'#ffe082',transparent:true,opacity:.16,side:THREE.DoubleSide})
  );
  beam.position.y=CS*.55;
  grp.add(beam);
  grp.userData.beam=beam;
  return grp;
}

function _sync3DTowerMesh(tw,cx2,cy2,bounce){
  if(!_gl3D) return;
  let mesh=_twMeshes.get(tw);
  if(!mesh){
    mesh=_buildTowerMesh3D(tw.type);
    _gl3D.scene.add(mesh);
    _twMeshes.set(tw,mesh);
  }
  const wp=_gridToWorld3D(tw.col,tw.row);
  mesh.position.set(wp.x,0,wp.z);
  mesh.scale.setScalar(bounce);
  if(mesh.userData.turret) mesh.userData.turret.rotation.y=Math.PI/2-(tw.angle||0);

  // ⚡ Awakened — extra dramatic aura FX (golden rings, orbiting motes, energy beam)
  if(tw.awakened){
    let aura=mesh.userData.aura;
    if(!aura){
      aura=_buildAwakenAura3D();
      mesh.add(aura);
      mesh.userData.aura=aura;
    }
    aura.visible=true;
    const t=performance.now()*.001;
    aura.userData.ringA.rotation.z=t*1.1;
    aura.userData.ringB.rotation.z=-t*1.6;
    aura.position.y=CS*.06+Math.sin(t*1.8)*CS*.025;
    const pulse=1+Math.sin(t*3.2)*.07;
    aura.userData.ringA.scale.setScalar(pulse);
    aura.userData.ringB.scale.setScalar(2-pulse);
    aura.userData.beam.material.opacity=.10+.07*Math.sin(t*2.4);
    aura.userData.motes.forEach(m=>{
      const ang=m.userData.ang+t*m.userData.spd;
      m.position.set(Math.cos(ang)*m.userData.r, CS*.28+Math.sin(t*2+m.userData.yOff)*CS*.12, Math.sin(ang)*m.userData.r);
    });
  } else if(mesh.userData.aura){
    mesh.userData.aura.visible=false;
  }
}

function _cleanup3DTowers(){
  if(!_gl3D) return;
  for(const [tw,mesh] of _twMeshes){
    if(!G||!G.towers||G.towers.indexOf(tw)<0){
      _gl3D.scene.remove(mesh);
      mesh.traverse(o=>{ if(o.geometry) o.geometry.dispose(); if(o.material) o.material.dispose(); });
      _twMeshes.delete(tw);
    }
  }
}

function _render3D(){
  if(!_gl3D) return;
  _cleanup3DTowers();
  _gl3D.renderer.render(_gl3D.scene,_gl3D.camera);
}

/* ══ TOWER POPUP (G1) ══ */
let _popupTw=null;
function showTowerPopup(tw,px,py){
  _popupTw=tw;
  const pop=document.getElementById('towerPopup');
  if(!pop||!G) return;
  // ป้อมเก่า (ก่อนระบบอัพแยกสาย) อาจไม่มี dmgLv/rngLv/rateLv — ตั้งค่าเริ่มต้นให้
  if(tw.dmgLv===undefined){tw.dmgLv=tw.lv||1;tw.rngLv=tw.lv||1;tw.rateLv=tw.lv||1;}
  const cost=tw.lv>=5?0:CFG.t_cost[tw.type]*tw.lv;
  const refund=Math.floor(CFG.t_cost[tw.type]*tw.lv*.6);
  const canUp=tw.lv<5&&G.gold>=cost;
  const dmgVal=CFG.t_dmg[tw.type]===0?'—':Math.round(getTowerDmg(tw.type,tw.dmgLv)*(tw.awakened?1.15:1)*getSynergyMult(tw.type,tw.col,tw.row));
  const rngVal=getTowerRange(tw.type,tw.rngLv).toFixed(1);
  const rateVal=CFG.t_rate[tw.type]===0?'—':getTowerRate(tw.type,tw.rateLv).toFixed(1);
  const canAwaken=tw.lv>=5&&!tw.awakened&&G.gold>=300;
  const showAwakenBtn=tw.lv>=5&&!tw.awakened;
  const activeSyn=getActiveSynergies(tw.type,tw.col,tw.row);
  const _synBonusTxt=s=>s.effect==='dmg'?`+${Math.round(s.mult*100)}% dmg`:s.effect==='gold'?`+${Math.round(s.amount*100)}% ทอง`:s.effect==='slow'?`+${Math.round(s.amount*100)}% หน่วงเหนี่ยว`:'';
  const synHtml=(tw._drainT>0)?
    `<div class="tp-syn-row"><div class="tp-syn-label">🔗 SYNERGY</div><div class="tp-syn-item" style="background:rgba(126,87,194,.15);border-color:rgba(126,87,194,.4);"><div class="tp-syn-name" style="color:#b39ddb;">🌑 ถูกดูดพลัง!</div><div class="tp-syn-desc">บัฟ/ซินเนอร์จี้/Awaken ของป้อมนี้ถูกระงับชั่วคราวโดยเงามืด</div></div></div>`
    : activeSyn.length?
    `<div class="tp-syn-row"><div class="tp-syn-label">🔗 SYNERGY (${activeSyn.length})</div>`+
    activeSyn.map(s=>`<div class="tp-syn-item"><div class="tp-syn-name">${s.name} <span style="color:#80deea;">${_synBonusTxt(s)}</span></div><div class="tp-syn-desc">${s.desc}</div></div>`).join('')+
    `</div>`
    : `<div class="tp-syn-row"><div class="tp-syn-label">🔗 SYNERGY</div><div class="tp-rune-empty" style="color:#555;">วางป้อมชนิดอื่นใกล้ๆ เพื่อปลดล็อกซินเนอร์จี้</div></div>`;
  pop.innerHTML=`<div class="tp-head">
    <canvas id="_tpIco" width="42" height="42" style="flex-shrink:0;border-radius:6px;"></canvas>
    <div>
      <div class="tp-name">${TNAMES[tw.type]}${tw.awakened?' <span style="color:#ffe082;font-size:10px;">⚡ AWAKENED</span>':''}</div>
      <div class="tp-lv">Level ${tw.lv}${tw.lv>=5?' 🔝 MAX':''} <span style="opacity:.55;font-size:9px;">(⚔️${tw.dmgLv} 📡${tw.rngLv} ⚡${tw.rateLv})</span></div>
    </div>
  </div>
  <div class="tp-stats">
    <div class="tp-stat">⚔️ ดาเมจ <small style="opacity:.5">Lv.${tw.dmgLv}</small><span>${dmgVal}${tw.awakened?' <span style="color:#ffe082;font-size:9px;">(+15%)</span>':''}</span></div>
    <div class="tp-stat">📡 ระยะ <small style="opacity:.5">Lv.${tw.rngLv}</small><span>${rngVal} ช่อง${tw.rngLv>=4?' <span style="color:#90caf9;font-size:9px;" title="กระสุนเจาะโล่ศัตรู ดาเมจเข้า HP ตรงๆ">🛡️✨เจาะโล่</span>':''}</span></div>
    <div class="tp-stat">⚡ Fire Rate <small style="opacity:.5">Lv.${tw.rateLv}</small><span>${rateVal}${tw.rateLv>=4?' <span style="color:#ffe234;font-size:9px;" title="มีโอกาสคูลดาวน์สั้นลงทันทีหลังยิง">⚡ยิงรัว</span>':''}</span></div>
    ${tw.lv<5?`<div class="tp-stat">💰 ค่าอัพต่อไป<span>${cost} ทอง</span></div>`:''}
  </div>
  ${synHtml}
  <div class="tp-rune-row" id="tpRuneRow"></div>
  <div class="tp-btns">
    ${showAwakenBtn?
      `<button class="tp-upbtn" ${canAwaken?'':'disabled'} onclick="awakenTowerFromPopup()" style="background:${canAwaken?'linear-gradient(180deg,#ffe234,#ff9800)':''};color:${canAwaken?'#6d2900':''};">
        ⚡ Awaken<br><small>💰300</small>
      </button>`
      : tw.lv>=5 ?
      `<button class="tp-upbtn" disabled>🔝 MAX</button>`
      :
      `<div class="tp-upgrade-pick">
        <div class="tp-upgrade-label">⬆ เลือกอัพสาย — 💰${cost}</div>
        <div class="tp-pick-row">
          <button class="tp-pickbtn" ${canUp?'':'disabled'} onclick="upgradeTowerFromPopup('dmg')" title="${CFG.t_dmg[tw.type]===0?'ป้อมนี้ไม่มีดาเมจ':'ดาเมจ Lv.'+tw.dmgLv+' → Lv.'+(tw.dmgLv+1)}">
            <span class="pi">⚔️</span>ดาเมจ<br><small>Lv.${tw.dmgLv}→${tw.dmgLv+1}</small>
          </button>
          <button class="tp-pickbtn" ${canUp?'':'disabled'} onclick="upgradeTowerFromPopup('rng')" title="ระยะ Lv.${tw.rngLv} → Lv.${tw.rngLv+1}${tw.rngLv===3?'  🔓 ปลดล็อก: เจาะโล่ศัตรู (ดาเมจเข้า HP ตรง ไม่โดนโล่ดูดซับ)':''}">
            <span class="pi">📡</span>ระยะ<br><small>Lv.${tw.rngLv}→${tw.rngLv+1}${tw.rngLv===3?' 🔓':''}</small>
          </button>
          <button class="tp-pickbtn" ${canUp?'':'disabled'} onclick="upgradeTowerFromPopup('rate')" title="${CFG.t_rate[tw.type]===0?'ป้อมนี้ไม่มี Fire Rate':'ความเร็ว Lv.'+tw.rateLv+' → Lv.'+(tw.rateLv+1)+(tw.rateLv===3?'  🔓 ปลดล็อก: ยิงรัว (โอกาสคูลดาวน์สั้นลงทันทีหลังยิง)':'')}">
            <span class="pi">⚡</span>ความเร็ว<br><small>Lv.${tw.rateLv}→${tw.rateLv+1}${tw.rateLv===3?' 🔓':''}</small>
          </button>
        </div>
      </div>`
    }
    <button class="tp-sellbtn" onclick="sellTowerFromPopup()">🗑 Sell<br><small style="color:#aaa">+💰${refund}</small></button>
  </div>`;
  // draw sprite on canvas
  requestAnimationFrame(()=>{
    const ic=document.getElementById('_tpIco');
    if(ic){const ix=ic.getContext('2d');ix.translate(21,23);drawTowerIcon(ix,tw.type,40,0);}
    updateTpRune(tw);
  });
  // position near tower but inside #gp
  const gp=document.getElementById('gp');
  const gr=gp.getBoundingClientRect();
  const popW=Math.min(200,gr.width-16);
  let lf=px-gr.left-popW/2, tp2=py-gr.top-190;
  lf=Math.max(4,Math.min(gr.width-popW-8,lf));
  tp2=Math.max(44,Math.min(gr.height-220,tp2));
  pop.style.maxWidth=popW+'px';
  pop.style.left=lf+'px'; pop.style.top=tp2+'px';
  pop.style.display='block';
  requestAnimationFrame(()=>pop.classList.add('show'));
}
function hideTowerPopup(){
  _popupTw=null;
  const pop=document.getElementById('towerPopup');
  if(!pop) return;
  pop.classList.remove('show');
  setTimeout(()=>{if(!pop.classList.contains('show'))pop.style.display='none';},160);
}

/* ══ RUNE FUNCTIONS ══ */
function updateTpRune(tw){
  const row=document.getElementById('tpRuneRow');
  if(!row||!G) return;
  // ล็อก rune slot ถ้ายังไม่อเวค
  if(!tw.awakened){
    row.innerHTML=`<div class="tp-rune-label">🔮 RUNE</div><div class="tp-rune-empty" style="color:#555;">🔒 ต้องอัพเป็น Lv.5 แล้ว Awaken ก่อน</div>`;
    return;
  }
  if(tw.rune>=0){
    const r=RUNES[tw.rune];
    // แสดง rune ที่ใส่อยู่ — ไม่มีปุ่ม Remove, แต่สามารถใส่ทับได้
    let btns='';
    if(G.runeInv&&G.runeInv.length>0){
      const counts={};
      G.runeInv.forEach(id=>counts[id]=(counts[id]||0)+1);
      Object.entries(counts).forEach(([rid,cnt])=>{
        const rr=RUNES[+rid];
        btns+=`<button class="tp-rune-pick-btn" onclick="equipRuneToTower(${rid})" title="ใส่ทับ — อันเก่าจะหาย!">${rr.icon} ${rr.name}${cnt>1?' ×'+cnt:''}</button>`;
      });
    }
    row.innerHTML=`<div class="tp-rune-label">🔮 RUNE <span style="color:#ffe082;">(ใส่ทับได้ — อันเก่าหาย)</span></div>
    <div class="tp-rune-equipped" style="margin-bottom:${btns?'5px':'0'}"><span class="ri">${r.icon}</span><span style="color:${r.col}">${r.name}</span></div>
    ${btns?`<div class="tp-rune-picker">${btns}</div>`:''}`;
  } else if(G.runeInv&&G.runeInv.length>0){
    const counts={};
    G.runeInv.forEach(id=>counts[id]=(counts[id]||0)+1);
    let btns='';
    Object.entries(counts).forEach(([rid,cnt])=>{
      const r=RUNES[+rid];
      btns+=`<button class="tp-rune-pick-btn" onclick="equipRuneToTower(${rid})" title="${r.desc}">${r.icon} ${r.name}${cnt>1?' ×'+cnt:''}</button>`;
    });
    row.innerHTML=`<div class="tp-rune-label">🔮 RUNE</div><div class="tp-rune-picker">${btns}</div>`;
  } else {
    row.innerHTML=`<div class="tp-rune-label">🔮 RUNE</div><div class="tp-rune-empty">ยังไม่มี Rune — รอ Boss drop</div>`;
  }
}
function equipRuneToTower(runeId){
  if(!_popupTw||!G||!_popupTw.awakened) return;
  const idx=G.runeInv.indexOf(runeId);
  if(idx<0) return;
  // อันเก่าหายเลย — ไม่คืน inventory
  _popupTw.rune=runeId;
  G.runeInv.splice(idx,1);
  updateTpRune(_popupTw);
  const tx=_popupTw.col*CS+CS/2, ty=_popupTw.row*CS+CS/2;
  G.fxRings.push({x:tx,y:ty,r:4,maxR:CS*1.5,life:.7,lw:3,col:RUNES[runeId].col,delay:0});
  G.particles.push({x:tx,y:ty-CS*.3,txt:RUNES[runeId].icon+' Equipped!',col:RUNES[runeId].col,life:1.2,vy:-1,vx:0,decay:1,scale:1});
}
function awakenTowerFromPopup(){
  if(!_popupTw||!G) return;
  const tw=_popupTw;
  if(tw.awakened){showToast('⚡ อเวคแล้ว!');return;}
  if(tw.lv<5){showToast('⚡ ต้องอัพป้อมเป็น Lv.5 ก่อนถึงจะ Awaken ได้!');return;}
  if(G.gold<300){showToast('💰 ต้องการ 300 ทอง!');hideTowerPopup();return;}
  G.gold-=300; tw.awakened=true;
  tw.spawnAnim=0.8;
  const ax=tw.col*CS+CS/2, ay=tw.row*CS+CS/2;
  // FX — golden burst
  G.fxRings.push({x:ax,y:ay,r:0,maxR:CS*2.2,life:1,lw:3,col:'#ffe082',delay:0});
  G.fxRings.push({x:ax,y:ay,r:0,maxR:CS*1.4,life:.7,lw:5,col:'#fff9c4',delay:.05});
  for(let k=0;k<12;k++){
    const ang=k/12*Math.PI*2;
    G.particles.push({x:ax,y:ay,txt:'✦',col:'#ffe082',
      life:1.1,vy:Math.sin(ang)*2.2,vx:Math.cos(ang)*2.2,decay:1.6,scale:.9});
  }
  G.particles.push({x:ax,y:ay-CS*.4,txt:'⚡ AWAKENED!',col:'#ffe082',
    life:1.6,vy:-1.4,vx:0,decay:.8,scale:1.2});
  updateHUD();
  showToast(`⚡ ${TNAMES[tw.type]} อเวคแล้ว! +15% dmg ปลดล็อค Rune Slot!`);
  hideTowerPopup();
  setTimeout(()=>{
    if(G&&!G.over&&!G.win&&G.selTowerInfo===tw){
      const r=cv.getBoundingClientRect();
      showTowerPopup(tw,(tw.col+.5)*CS*r.width/cv.width+r.left,tw.row*CS*r.height/cv.height+r.top);
    }
  },80);
}
function _dropRune(x,y){
  if(!G||G.runeInv.length>=6) return;
  const rid=Math.floor(Math.random()*RUNES.length);
  G.runeInv.push(rid);
  const r=RUNES[rid];
  for(let k=0;k<8;k++){
    const ang=k/8*Math.PI*2;
    G.particles.push({x,y,txt:'✦',col:r.col,life:.9,vy:Math.sin(ang)*1.4,vx:Math.cos(ang)*1.4,decay:2,scale:.8});
  }
  G.particles.push({x,y:y-20,txt:r.icon+' Rune Drop!',col:r.col,life:1.6,vy:-1.2,vx:0,decay:.8,scale:1.1});
  showToast(r.icon+' ได้รับ '+r.name+'!');
}
function upgradeTowerFromPopup(stat){
  if(!_popupTw||!G) return;
  const tw=_popupTw;
  if(tw.dmgLv===undefined){tw.dmgLv=tw.lv||1;tw.rngLv=tw.lv||1;tw.rateLv=tw.lv||1;}
  if(tw.lv>=5){showToast('🔝 ระดับสูงสุด 5 แล้ว!');return;}
  if(stat!=='dmg'&&stat!=='rng'&&stat!=='rate'){showToast('⚠️ กรุณาเลือกสายที่จะอัพ');return;}
  const cost=CFG.t_cost[tw.type]*tw.lv;
  if(G.gold<cost){showToast('💰 ต้องการ '+cost+' ทอง!');hideTowerPopup();return;}
  G.gold-=cost;
  const _statInfo={dmg:{key:'dmgLv',icon:'⚔️',name:'ดาเมจ',col:'#ff7043'},rng:{key:'rngLv',icon:'📡',name:'ระยะ',col:'#4fc3f7'},rate:{key:'rateLv',icon:'⚡',name:'ความเร็ว',col:'#ffe234'}}[stat];
  tw[_statInfo.key]=(tw[_statInfo.key]||1)+1;
  tw.lv=(tw.dmgLv-1)+(tw.rngLv-1)+(tw.rateLv-1)+1; // lv รวม = 1 + แต้มที่ใช้ไปทั้งหมด (max 5)
  tw.spawnAnim=0.6;
  const ux=tw.col*CS+CS/2,uy=tw.row*CS+CS/2;
  G.fxRings.push({x:ux,y:uy,r:0,maxR:CS*1.4,life:1,col:_statInfo.col,lw:2.5});
  for(let k=0;k<6;k++){const a=k/6*Math.PI*2;G.particles.push({x:ux,y:uy,txt:_statInfo.icon,col:_statInfo.col,life:.9,vy:Math.sin(a)*1.8,vx:Math.cos(a)*1.8,decay:2});}
  addParticle(ux,uy,'⬆ '+_statInfo.icon+' '+_statInfo.name+' Lv.'+tw[_statInfo.key],_statInfo.col);
  updateHUD();
  // reopen popup with updated stats
  hideTowerPopup();
  setTimeout(()=>{
    if(G&&!G.over&&!G.win&&G.selTowerInfo===tw){
      const r=cv.getBoundingClientRect();
      showTowerPopup(tw,(tw.col+.5)*CS*r.width/cv.width+r.left,tw.row*CS*r.height/cv.height+r.top);
    }
  },60);
}
function sellTowerFromPopup(){
  if(!_popupTw||!G) return;
  const tw=_popupTw;
  const refund=Math.floor(CFG.t_cost[tw.type]*tw.lv*.6);
  const key=tw.col+'_'+tw.row;
  if(G.gmTimers) delete G.gmTimers[key];
  G.towers=G.towers.filter(t=>t!==tw);
  G.gold+=refund; updateHUD();
  const sx=tw.col*CS+CS/2,sy=tw.row*CS+CS/2;
  G.fxRings.push({x:sx,y:sy,r:4,maxR:CS*1.2,life:.8,lw:3,col:'#f44336',delay:0});
  for(let k=0;k<6;k++){const a=k/6*Math.PI*2;G.particles.push({x:sx,y:sy,txt:'💰',col:'#ffe082',life:.9,vy:Math.sin(a)*1.5,vx:Math.cos(a)*1.5,decay:2});}
  addParticle(sx,sy-16,'+'+refund+' ทอง','#4caf50');
  showToast('🗑 ขายป้อมได้ +'+refund+' ทอง');
  G.selTowerInfo=null; hideTowerPopup();
}

