const TNAMES=['ปืนใหญ่','น้ำแข็ง','เวทมนตร์','สไนเปอร์','ซัพพอร์ต','มินิกัน','เหมืองทอง','สายฟ้า','ป้อมมนตราโมฆะ','ป้อมกาลเวลา'];
const TICONS=['💣','❄️','✨','🎯','💚','🔫','💰','⚡','🌑','🌀'];
const TCOLORS=['#c62828','#0d47a1','#4a148c','#1b5e20','#00695c','#4e342e','#f57f17','#f9a825','#311b92','#1a0a4a'];
const TPROJ=['#ff7043','#80d8ff','#e040fb','#ffee58','#69f0ae','#a5d6a7','#ffd54f','#ffe57f','#b388ff','#b39ddb'];
const TACCENT=['#ff5252','#40c4ff','#ea80fc','#69f0ae','#64ffda','#8d6e63','#ffca28','#ffe57f','#7e57c2','#b39ddb'];
const TSPLASH=[0,0,1.2,0,0,0,0,0,0,0];
const TSLOW=[0,.30,0,0,0,0,0,0,0,0];
const TBUFF=[false,false,false,false,true,false,false,false,false,false];
const TCANAIR=[false,false,false,true,false,true,false,true,false,false]; /* ยิง air ได้ */
const TGOLDMINE=[false,false,false,false,false,false,true,false,false,false]; /* สร้างทอง */
const TCHAIN=[0,0,0,0,0,0,0,2,0,0]; /* chain lightning targets (Thunder=2) */
const TPIERCE=[false,false,false,false,false,false,false,true,false,false]; /* ทะลุโล่: Thunder เท่านั้น — Sniper ต้องอัพ Range ≥3 ก่อน */
const RARITY_COLORS={2:'#42a5f5',3:'#ab47bc',4:'#ff8f00'}; /* กรอบสีตาม★ — 2=น้ำเงิน(Rare) 3=ม่วง(Epic) 4=ส้มทอง(Legendary), Awaken มีออร่าทองของตัวเอง */
const TFLAVOR=['ปืนใหญ่หนักที่ยิงกระสุนเจาะเกราะ ดาเมจต่อยิงสูง เมื่ออเวคจะปลดพลัง Splash ทำลายล้างวงกว้าง',
  'ยิงลูกน้ำแข็งชะลอศัตรูลงอย่างรุนแรง เมื่ออเวคมีโอกาสแช่แข็งหยุดสนิท',
  'รวมพลังเวทมนตร์เป็นการโจมตีที่รุนแรง กระจายในวงกว้าง แต่ยิงช้า',
  'มือปืนระยะไกลที่แม่นยำ มีความเสียหายต่อเป้าหมายเดียวสูงสุดในเกม',
  'ปล่อยออร่าเสริมกำลังที่เพิ่มความเสียหายให้ป้อมใกล้เคียง ไม่โจมตีโดยตรง',
  'ป้อมมินิกัน 6 ลำกล้องหมุนยิงรัว ยิงได้ทั้งศัตรูภาคพื้นดินและศัตรูที่บินอยู่บนอากาศ',
  'เหมืองทองที่สร้างรายได้ต่อเนื่อง ไม่โจมตี แต่ผลิตทองทุก 5 วินาที',
  'หอคอยพลังสายฟ้าที่ยิงฟ้าผ่าลงใส่ศัตรู และลัดไปยังศัตรูข้างเคียงอีก 2 ตัว ยิงโดนได้ทั้งพื้นและอากาศ',
  'ป้อมมนตราต้องห้ามที่ปล่อยพลังโมฆะ มีโอกาสติดมาร์กศัตรู ทำให้รับดาเมจเพิ่มจากป้อมทุกชนิด ปลดล็อกได้จาก Workshop เท่านั้น',
  'ป้อมกาลเวลาที่บิดเบือนเวลาในพื้นที่ ชาร์จพลังแล้วปล่อยคลื่นเวลา ทำให้ศัตรูในรัศมีเคลื่อนที่ช้าลง 50% ปลดล็อกได้จาก Workshop เท่านั้น'];
const TTAGS=[[{t:'ดาเมจสูง',c:'tag-red'},{t:'อเวค: Splash',c:'tag-orange'}],
  [{t:'ช้า',c:'tag-blue'},{t:'ซัพพอร์ต',c:'tag-green'}],
  [{t:'กระจายกว้าง',c:'tag-purple'},{t:'ความเสียหายสูง',c:'tag-red'}],
  [{t:'ระยะไกลมาก',c:'tag-blue'},{t:'ความเสียหายสูงสุด',c:'tag-red'}],
  [{t:'ออร่าเสริมกำลัง',c:'tag-green'},{t:'ไม่โจมตี',c:'tag-purple'}],
  [{t:'ยิง Air',c:'tag-blue'},{t:'อัตรายิงเร็ว',c:'tag-orange'}],
  [{t:'ผลิตทอง',c:'tag-green'},{t:'ไม่โจมตี',c:'tag-purple'}],
  [{t:'Chain Lightning',c:'tag-orange'},{t:'ยิง Air',c:'tag-blue'}],
  [{t:'Void Mark',c:'tag-purple'},{t:'Workshop',c:'tag-red'}],
  [{t:'ช้าเวลา',c:'tag-purple'},{t:'ไม่โจมตี',c:'tag-green'},{t:'Workshop',c:'tag-red'}]];
const TSPECIAL=['-','ชะลอเหลือ 30% นาน 2-3 วิ (อัพสายระยะเวลา)','กระจาย: 1.2 ช่อง','ระยะยิง 4.5 ช่อง (คงที่ไม่ต้องอัพ) — ⚡ ความเร็ว Lv3: เจาะโล่ศัตรู — 🎯 คริติคอล +10%/Lv (Lv1=10% สูงสุด 50%) ดาเมจ ×2 — ล็อกเป้าหมอผีก่อนเสมอ','+10% ความเสียหาย/เลเวลบัฟ ให้ป้อมในรัศมี (อัพสาย "เพิ่มดาเมจบัฟ") | 🛡️ ออร่ากันหยุดป้อม: ★1-4 = 20/30/40/50% (อเวค 50%) +5%/เลเวลจากสาย "กันหยุดป้อม" — อัพสาย Lv3 ต่างฝ่ายต่างปลดล็อกโบนัสเพิ่ม +30%','ยิง Air ได้ — ยิงค้างคาวและวิเวิร์นได้ (ร่วมกับ Sniper และ Thunder) | DMG 10, Rate 2.5/s | 📡 ระยะ Lv3: เจาะโล่ | ⚡ ความเร็ว Lv3: ยิงรัว','ผลิตทองทุกรอบ (ลดเวลาได้ -20%/เลเวลจากสายคูลดาวน์) เริ่ม 2 ทอง/รอบ (+2/เลเวลจากสายจำนวน) — อเวคได้ทอง x2','Chain Lightning ถึง 2 ตัว — ดาเมจลด 40% ต่อ chain — ยิง Air ได้ — ทะลุโล่เสมอ | 📡 ระยะ Lv3: เพิ่มดาเมจ +50% (รวม chain)','Void Mark: 20% โอกาสติดมาร์ก (อเวค 60%) ทำให้ศัตรูรับดาเมจเพิ่ม +20% จากป้อมทุกชนิด (อเวค +50%) นาน 4 วินาที รีเฟรชเวลาได้แต่ไม่บวกซ้ำ | 📡 ระยะ Lv3: เจาะโล่ | ⚡ ความเร็ว Lv3: ยิงรัว',
'คลื่นเวลา: ชาร์จ 6s → ปล่อยพัลส์ 1.5s — รัศมี 2.0 ช่อง (อัพสาย🔮 ได้ถึง 3.5) — ช้าลง 50% ปกติ / บอสช้า 40% — อัพสาย⏳ เพิ่มระยะเวลา pulse — ไม่โจมตีโดยตรง'];
const TSTRENGTH=[
  ['ดาเมจต่อยิงสูง','เมื่ออเวค Splash 2.0 ช่อง'],
  ['ชะลอความเร็วศัตรู','เพิ่มเวลาให้ป้อมอื่น'],
  ['Splash กว้างที่สุด','ดาเมจสูง'],
  ['ระยะไกลสุดในเกม','ดาเมจต่อตัวสูงสุด'],
  ['เพิ่มพลังป้อมรอบข้าง','ไม่ต้องการเป้าหมาย'],
  ['ยิงได้ทั้ง ground และ air','อัตรายิงสูง'],
  ['รายได้ต่อเนื่อง','ไม่ต้องการเป้าหมาย'],
  ['Chain ศัตรู 2 ตัวในหนึ่งยิง','ยิง Air ได้'],
  ['เพิ่มดาเมจให้ทุกป้อมที่ยิงเป้าติดมาร์ก','ระยะยิงไกล'],
  ['ช้าศัตรูได้ทุกประเภท','รัศมีกว้างเมื่ออัพ'],
];
const TWEAKNESS=[
  ['Rate ต่ำ ยิงช้า','ระยะสั้นกว่าสไนเปอร์'],
  ['ดาเมจต่ำ','ไม่มีผลกับบอส'],
  ['อัตรายิงช้ามาก','ราคาแพงที่สุด'],
  ['ยิงได้ทีละตัวเท่านั้น','อัตรายิงช้า'],
  ['ไม่โจมตีโดยตรง','ระยะสั้นมาก ต้องวางใกล้ป้อมอื่น'],
  ['ดาเมจต่ำกว่า Sniper','ระยะสั้นกว่า'],
  ['ไม่โจมตีเลย','ถ้าถูกทำลายเสียทอง'],
  ['ดาเมจต่อตัวต่ำกว่าป้อมอื่น','Chain ต้องการหลายศัตรู'],
  ['ยิงได้ทีละตัว ไม่มี splash','ต้องปลดล็อกจาก Workshop ก่อน'],
  ['ไม่โจมตีโดยตรง','ต้องชาร์จก่อนปล่อยพัลส์'],
];
const TAWAKEN_DESC=[
  'ปลด Splash 2.0 ช่อง — กระสุนระเบิดถล่มวงกว้างทำลายล้าง',
  '35% โอกาสแช่แข็ง 2 วิ (หยุดสนิท) — ถ้าไม่ติดแช่แข็ง slow 70% ตามปกติ',
  'โอกาสยิงพร้อมกัน 3 นัด 50% (ปกติ 20%) — DPS พุ่งสูงขึ้นมาก',
  'ยิงทะลุเส้นตรง — โดนศัตรูทุกตัวบนเส้นยิงหลังเป้าหมาย',
  'กันหยุดป้อม 50% (ฐาน) + ออร่าบัฟแรงขึ้น — เอฟเฟกต์รวมกับอัพสายทั้งสองได้สูงสุด',
  'บาร์เรลหมุนเร็วขึ้น — อัตรายิง ×2 จากค่าปัจจุบัน (รวมโบนัสอัพสายแล้ว)',
  'ผลิตทอง ×2 ต่อรอบ — รายได้เพิ่มเท่าตัว',
  'Chain เพิ่มอีก 2 ตัว รวมสูงสุด 4 chain ต่อยิง',
  'Void Mark: proc 20%→60%, โบนัสดาเมจ +20%→+50%',
  'Awaken หยุดเวลา 1.5 วิ — ศัตรูในรัศมีหยุดสนิท (บอสช้า 85% แทน 40%) — ใช้งานเมื่อชาร์จเต็ม',
];
const STAR_DMG_BONUS=[0,.5,1,3];// โบนัสดาเมจพื้นฐานตาม★ (★1=+0%, ★2=+50%, ★3=+100%, ★4=+300%)
function getTowerDmg(t,lv,star){return CFG.t_dmg[t]*(1+STAR_DMG_BONUS[(star||1)-1])*(1+(lv-1)*.25);}
// 🎯 สไนเปอร์: สายที่ 2 (เดิมระยะ) ถูกเปลี่ยนเป็นคริติคอล — ระยะคงที่ไม่ต้องอัพ
function getTowerRange(t,lv){return (t===3||t===1)?CFG.t_rng[t]:CFG.t_rng[t]*(1+(lv-1)*.15);}
function getTowerRate(t,lv){return CFG.t_rate[t]*(1+(lv-1)*.1);}
// 🎯 สไนเปอร์: โอกาสคริติคอล +10%/lv (สูงสุด +40% ที่ Lv.5), คริติคอล x1.75 ดาเมจ (v3.0.1: 2→1.75)
const SNIPER_CRIT_MULT=2.0;
function getSniperCrit(critLv){return {chance:Math.min(.5,(critLv||1)*.1),mult:SNIPER_CRIT_MULT};}
// 💰 เหมืองทอง: สาย rateLv ลดคูลดาวน์ผลิตทอง -20%/lv (v3.11.3: -15%→-20%), สาย rngLv เพิ่มจำนวนทอง +2/lv
function getGoldMineInterval(rateLv){return CFG.t_goldrate*(1-((rateLv||1)-1)*.20);}
function getGoldMineAmt(rngLv){return CFG.t_goldamt[0]+((rngLv||1)-1)*2;}
// 💚 ซัพพอร์ต: กันป้อมหยุดทำงานจากสกิลมอน — base ตาม★/Awaken + บวกเพิ่มจากสาย rateLv (+5%/lv)
const STAR_RESIST=[.2,.3,.4,.5];// ★1-4 → 20/30/40/50% (Awaken = 50%)
function getSupportResist(col,row){
  if(!G) return 0;
  let resist=0;
  G.towers.forEach(t=>{
    if(t.type!==4) return;
    if(Math.hypot(t.col-col,t.row-row)>getTowerRange(t.type,t.rngLv||1)) return;
    const base=t.awakened?.5:STAR_RESIST[(t.star||1)-1];
    const bonus=((t.rateLv||1)-1)*.05+((t.dmgLv||1)>=3?.3:0);
    resist=Math.max(resist,Math.min(1,base+bonus));
  });
  return resist;
}
// 📈 ราคาป้อมชนิดนี้ถัดไปแพงขึ้นตามจำนวนป้อมชนิดนี้ที่วางอยู่บนกระดาน (+15 ทอง/ป้อม)
const FIXED_COST_TYPES=new Set([4]);// ป้อมที่ราคาคงที่ไม่ขึ้นตามจำนวน (ชัพพอร์ด)
function getTowerCost(t){return CFG.t_cost[t]+(FIXED_COST_TYPES.has(t)||!G?0:G.towers.filter(tw=>tw.type===t).length*15);}
function getBuffMult(col,row){
  if(!G) return 1;
  const self=G.towers.find(t=>t.col===col&&t.row===row);
  if(self&&self._drainT>0) return 1; // ถูกเงามืดดูดพลัง — บัฟใช้งานไม่ได้ชั่วคราว
  let m=1;
  G.towers.forEach(t=>{
    if(TBUFF[t.type]&&Math.hypot(t.col-col,t.row-row)<=getTowerRange(t.type,1)) m*=1+((t.dmgLv||1)*.1)+((t.rateLv||1)>=3?.3:0);
  });
  return m;
}
// 💚 ป้อม Support ที่ตื่นแล้ว (awakened) จะดับเบิลโบนัส Awaken ของป้อมอื่นที่อยู่ในระยะ
function getSupportAwakenBoost(col,row){
  if(!G) return 1;
  let boost=1;
  G.towers.forEach(t=>{
    if(t.type===4&&t.awakened&&Math.hypot(t.col-col,t.row-row)<=getTowerRange(t.type,t.rngLv||t.lv)) boost=2;
  });
  return boost;
}
/* ══ SPRITE DRAWING ══ */
/* ── sprite cache: pre-render static tower bodies once, drawImage every frame ── */
let _SC=null;
function _bldSC(){
  _SC={};
  const sz=CS-2,r=sz/2;
  const cw=Math.ceil(r*2.2),ch=Math.ceil(r*1.55),tx=cw/2,ty=Math.ceil(ch*.38);
  for(let t=0;t<10;t++){
    const oc=document.createElement('canvas');
    oc.width=cw;oc.height=ch;
    const ox=oc.getContext('2d');
    ox.translate(tx,ty);
    _twStatic(ox,t,r);
    _SC[t]={c:oc,tx,ty};
  }
}
function drawTowerIcon(ctx,type,sz,angle,lv,shootT){
  if(!_SC)_bldSC();
  const r=sz/2,s=_SC[type];
  ctx.save();
  _twAura(ctx,type,r);
  if(s)ctx.drawImage(s.c,-s.tx,-s.ty);else _twStatic(ctx,type,r);
  _twLevelRing(ctx,type,r,lv);
  ctx.save();ctx.rotate((angle||0)+Math.PI/2);
  ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=r*.12;ctx.shadowOffsetY=r*.05;
  _twWeapon(ctx,type,r,shootT||0);
  ctx.restore();
  ctx.restore();
}
// soft colored glow on the ground beneath the tower, tinted per tower type
function _twAura(ctx,type,r){
  const c=TACCENT[type]||'#ffffff';
  const pulse=.30+.12*Math.sin(Date.now()*.0025);
  ctx.save();
  ctx.globalAlpha=pulse;
  const g=ctx.createRadialGradient(0,r*.55,0,0,r*.55,r*1.15);
  g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;
  ctx.beginPath();ctx.ellipse(0,r*.55,r*1.05,r*.34,0,0,Math.PI*2);ctx.fill();
  ctx.restore();
}
// rings of light around the base — one extra ring per level above 1
function _twLevelRing(ctx,type,r,lv){
  if(!lv||lv<2) return;
  const cols=['#ffd740','#ff9100','#ff5252'];
  const n=Math.min(lv-1,3);
  for(let i=0;i<n;i++){
    ctx.save();
    ctx.globalAlpha=.5+.25*Math.sin(Date.now()*.004+i*1.7);
    ctx.strokeStyle=cols[i];ctx.lineWidth=r*.045;
    ctx.beginPath();ctx.ellipse(0,r*.68,r*(.92+i*.13),r*(.22+i*.035),0,0,Math.PI*2);ctx.stroke();
    ctx.restore();
  }
}
function _twStatic(ctx,type,r){
  // body colors per type: [dark, mid, shade]
  const BC=[['#0d3b9e','#3d7ae8','#2255cc'],['#005a8a','#00b4e0','#0088bb'],
            ['#5c0090','#a04de0','#7a22c0'],['#1e4a1e','#3a9f3a','#2d7030'],
            ['#004d3a','#00b07a','#007a55'],['#5c3400','#c87020','#9a5200'],
            ['#6b3800','#d4820a','#a06008'],['#0a1a44','#1a5abf','#122266'],
            ['#1a0a3a','#5e35b1','#3d2570'],
            ['#1a0a4a','#7c4dff','#4a148c']];
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
  bg.addColorStop(0,shadeColor(bd,12));bg.addColorStop(.16,shadeColor(bm,50));
  bg.addColorStop(.34,bm);bg.addColorStop(.65,bd);bg.addColorStop(1,shadeColor(bd,-40));
  ctx.fillStyle=bg;
  ctx.beginPath();ctx.ellipse(0,-r*.2,r*.72,r*.17,0,Math.PI,0,true);
  ctx.lineTo(r*.72,r*.24);ctx.ellipse(0,r*.24,r*.72,r*.17,0,0,Math.PI,true);
  ctx.lineTo(-r*.72,-r*.2);ctx.closePath();ctx.fill();
  // contact shadow (AO) where the body meets the stone base
  ctx.globalAlpha=.18;ctx.fillStyle='#000';
  ctx.beginPath();ctx.ellipse(0,r*.22,r*.76,r*.1,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
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
  // emblem / decal — drawn with a soft drop shadow for extra contrast
  ctx.save();
  ctx.shadowColor='rgba(0,0,0,.45)';ctx.shadowBlur=r*.1;ctx.shadowOffsetY=r*.025;
  _twDecal(ctx,type,r);
  ctx.restore();
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
  } else if(type===5){// minigun barrel cluster
    ctx.fillStyle='#616161';ctx.beginPath();ctx.arc(0,-r*.03,r*.2,0,Math.PI*2);ctx.fill();
    for(let i=0;i<6;i++){const a=i/6*Math.PI*2;ctx.fillStyle='#9e9e9e';ctx.beginPath();ctx.arc(Math.cos(a)*r*.1,Math.sin(a)*r*.1-r*.03,r*.065,0,Math.PI*2);ctx.fill();ctx.fillStyle='#212121';ctx.beginPath();ctx.arc(Math.cos(a)*r*.1,Math.sin(a)*r*.1-r*.03,r*.03,0,Math.PI*2);ctx.fill();}
    ctx.fillStyle='#424242';ctx.beginPath();ctx.arc(0,-r*.03,r*.055,0,Math.PI*2);ctx.fill();
  } else if(type===6){// $
    ctx.fillStyle='#ffd54f';ctx.font=`bold ${Math.round(r*.28)}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('$',0,-r*.03);
  } else if(type===7){// lightning bolt
    ctx.fillStyle='#ffe57f';
    ctx.beginPath();ctx.moveTo(r*.07,-r*.22);ctx.lineTo(-r*.08,-r*.02);ctx.lineTo(r*.03,-r*.02);ctx.lineTo(-r*.07,r*.18);ctx.lineTo(r*.14,r*.01);ctx.lineTo(r*.02,r*.01);ctx.closePath();ctx.fill();
    ctx.strokeStyle='#fff9c4';ctx.lineWidth=r*.025;ctx.stroke();
  } else if(type===8){// void eye
    ctx.strokeStyle='#b388ff';ctx.lineWidth=r*.05;ctx.beginPath();ctx.arc(0,-r*.03,r*.19,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='#0a0014';ctx.beginPath();ctx.arc(0,-r*.03,r*.12,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#7e57c2';ctx.beginPath();ctx.arc(0,-r*.03,r*.05,0,Math.PI*2);ctx.fill();
  } else if(type===9){// time: clock circle
    ctx.strokeStyle='#b39ddb';ctx.lineWidth=r*.05;ctx.beginPath();ctx.arc(0,-r*.03,r*.18,0,Math.PI*2);ctx.stroke();
    const _a=Date.now()*.001*.8;
    ctx.strokeStyle='#ede7f6';ctx.lineWidth=r*.04;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,-r*.03);ctx.lineTo(Math.cos(_a-Math.PI/2)*r*.12,Math.sin(_a-Math.PI/2)*r*.12-r*.03);ctx.stroke();
    ctx.strokeStyle='#b39ddb';ctx.lineWidth=r*.05;ctx.beginPath();ctx.moveTo(0,-r*.03);ctx.lineTo(Math.cos(_a*.07-Math.PI/2)*r*.09,Math.sin(_a*.07-Math.PI/2)*r*.09-r*.03);ctx.stroke();
  }
}
function _twWeapon(ctx,type,r,shootT){
  // barrel points in -y (toward target) — context already rotated
  if(shootT>0) ctx.translate(0, shootT*r*.28); // recoil: kick back along barrel axis
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
    // ไอความร้อนเรืองแสงที่ปากกระบอก (idle pulse)
    const _cp=.35+.35*Math.sin(Date.now()*.005);
    ctx.globalAlpha=_cp*.5;ctx.fillStyle='#ff8a50';ctx.beginPath();ctx.arc(0,-r*1.22,r*.12,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
  } else if(type===1){// Ice crystal spike
    ctx.fillStyle='#003d5a';ctx.beginPath();ctx.arc(0,0,r*.28,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#80deea';ctx.beginPath();ctx.moveTo(0,-r*1.1);ctx.lineTo(r*.2,-r*.4);ctx.lineTo(r*.3,0);ctx.lineTo(-r*.3,0);ctx.lineTo(-r*.2,-r*.4);ctx.closePath();ctx.fill();
    ctx.fillStyle='#e0f7fa';ctx.beginPath();ctx.moveTo(0,-r*1.1);ctx.lineTo(r*.08,-r*.4);ctx.lineTo(0,-r*.2);ctx.lineTo(-r*.08,-r*.4);ctx.closePath();ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(r*.08,-r*.75,r*.06,0,Math.PI*2);ctx.fill();
    // ประกายแวววาวบนผลึก (idle shimmer)
    const _it=Date.now()*.003;
    [[r*.12,-r*.85,0],[-r*.15,-r*.55,2],[r*.05,-r*.25,4]].forEach(([sx,sy,ph])=>{
      const a=Math.max(0,Math.sin(_it*2+ph));
      if(a>0){ctx.globalAlpha=a*.8;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(sx,sy,r*.035,0,Math.PI*2);ctx.fill();}
    });
    ctx.globalAlpha=1;
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
    // แสงเรืองที่เลนส์กล้องเล็ง (idle pulse)
    const _sp=.35+.35*Math.sin(Date.now()*.006);
    ctx.globalAlpha=_sp*.7;ctx.strokeStyle='#42a5f5';ctx.lineWidth=r*.04;ctx.beginPath();ctx.arc(0,-r*.84,r*.15,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
  } else if(type===4){// Support beacon
    const p=.4+.5*Math.sin(Date.now()*.004);
    ctx.globalAlpha=p*.5;ctx.strokeStyle='#69f0ae';ctx.lineWidth=r*.14;ctx.beginPath();ctx.arc(0,0,r*.5,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    ctx.fillStyle='#004d40';ctx.fillRect(-r*.22,-r*.75,r*.44,r*.7);
    ctx.fillStyle='#1de9b6';ctx.beginPath();ctx.arc(0,-r*.5,r*.26,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#a7ffeb';ctx.beginPath();ctx.arc(-r*.08,-r*.54,r*.13,0,Math.PI*2);ctx.fill();
  } else if(type===5){// Minigun rotating barrels
    const _rot=Date.now()*.008;
    const _nr=6;const _barrels=[];
    for(let i=0;i<_nr;i++){const a=_rot+i/_nr*Math.PI*2;_barrels.push({ox:Math.cos(a)*r*.2,depth:Math.sin(a)});}
    _barrels.sort((a,b)=>a.depth-b.depth);
    _barrels.forEach(({ox,depth})=>{
      const br=Math.round(70+depth*50);
      ctx.fillStyle=`rgb(${br},${br},${br})`;
      if(ctx.roundRect)ctx.roundRect(ox-r*.065,-r*1.15,r*.13,r*1.05,r*.025);else ctx.rect(ox-r*.065,-r*1.15,r*.13,r*1.05);
      ctx.fill();
      ctx.fillStyle=`rgba(0,0,0,${.5+depth*.3})`;ctx.beginPath();ctx.arc(ox,-r*1.1,r*.035,0,Math.PI*2);ctx.fill();
    });
    ctx.fillStyle='#424242';ctx.beginPath();ctx.arc(0,0,r*.28,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#757575';ctx.beginPath();ctx.arc(0,0,r*.14,0,Math.PI*2);ctx.fill();
    if(shootT>0){ctx.globalAlpha=shootT*.9;ctx.fillStyle='#fff9c4';ctx.beginPath();ctx.arc(0,-r*1.2,r*.18,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;}
  } else if(type===6){// Gold mine pickaxe
    // แสงทองเรืองจางๆ รอบกองแร่ (idle pulse)
    const _gp=.25+.35*Math.sin(Date.now()*.004);
    ctx.globalAlpha=_gp*.6;ctx.fillStyle='#ffd740';ctx.beginPath();ctx.arc(0,0,r*.45,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
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
  } else if(type===8){// Void — orbiting dark orb
    const p=.5+.4*Math.sin(Date.now()*.004);
    ctx.globalAlpha=p*.6;ctx.strokeStyle='#7e57c2';ctx.lineWidth=r*.12;ctx.beginPath();ctx.arc(0,0,r*.42,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    ctx.fillStyle='#1a0a3a';ctx.beginPath();ctx.arc(0,0,r*.26,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#311b92';ctx.beginPath();ctx.arc(0,0,r*.16,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#b388ff';ctx.beginPath();ctx.arc(-r*.05,-r*.05,r*.06,0,Math.PI*2);ctx.fill();
    const t=Date.now()*.003;for(let k=0;k<3;k++){const a=t+k/3*Math.PI*2;ctx.fillStyle=`rgba(126,87,194,${.5+.4*Math.sin(a)})`;ctx.beginPath();ctx.arc(Math.cos(a)*r*.55,Math.sin(a)*r*.55,r*.07,0,Math.PI*2);ctx.fill();}
  } else if(type===9){// Time Tower — clock face with spinning hands
    const p=.4+.45*Math.sin(Date.now()*.003);
    ctx.globalAlpha=p*.55;ctx.strokeStyle='#b39ddb';ctx.lineWidth=r*.14;ctx.beginPath();ctx.arc(0,0,r*.46,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    ctx.fillStyle='#1a0a4a';ctx.beginPath();ctx.arc(0,0,r*.32,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#b39ddb';ctx.lineWidth=r*.04;ctx.beginPath();ctx.arc(0,0,r*.28,0,Math.PI*2);ctx.stroke();
    const _now=Date.now()*.001;
    // minute hand (fast)
    const _mha=_now*.8;ctx.strokeStyle='#ede7f6';ctx.lineWidth=r*.055;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(_mha-Math.PI/2)*r*.22,Math.sin(_mha-Math.PI/2)*r*.22);ctx.stroke();
    // hour hand (slow)
    const _hha=_now*.07;ctx.strokeStyle='#b39ddb';ctx.lineWidth=r*.07;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(_hha-Math.PI/2)*r*.15,Math.sin(_hha-Math.PI/2)*r*.15);ctx.stroke();
    ctx.fillStyle='#7c4dff';ctx.beginPath();ctx.arc(0,0,r*.055,0,Math.PI*2);ctx.fill();
  }
}

/* ══ TOWER POPUP (G1) ══ */
let _popupTw=null;
// 🎛️ สายสกิลของป้อมแต่ละชนิด (2 สายเสมอ) — key ในข้อมูลป้อม + ป้ายกำกับ + ปลดล็อกพิเศษ
function trackDefs(t){
  if(t===1) return [ // ❄️ น้ำแข็ง
    {key:'rngLv',icon:'⏱️',name:'ระยะเวลาสโล',col:'#80d8ff',unlockLv:0,unlockText:''},
    {key:'rateLv',icon:'⚡',name:'ความเร็ว',col:'#ffe234',unlockLv:3,unlockText:'ยิงรัว (โอกาสคูลดาวน์สั้นลงทันทีหลังยิง)'}
  ];
  if(t===3) return [ // 🎯 สไนเปอร์
    {key:'rateLv',icon:'⚡',name:'ความเร็ว',col:'#ffe234',unlockLv:3,unlockText:'เจาะโล่ศัตรู (ดาเมจเข้า HP ตรง ไม่โดนโล่ดูดซับ)'},
    {key:'rngLv',icon:'🎯',name:'คริติคอล',col:'#ff5252',unlockLv:0,unlockText:''}
  ];
  if(t===4) return [ // 💚 ซัพพอร์ต
    {key:'dmgLv',icon:'💪',name:'เพิ่มดาเมจบัฟ',col:'#69f0ae',unlockLv:2,unlockText:'เพิ่มกันหยุดป้อม +30% เพิ่มเติม'},
    {key:'rateLv',icon:'🛡️',name:'กันหยุดป้อม',col:'#80cbc4',unlockLv:2,unlockText:'เพิ่มบัฟดาเมจ +30% เพิ่มเติม'}
  ];
  if(t===7) return [ // ⚡ สายฟ้า
    {key:'rngLv',icon:'📡',name:'ระยะ',col:'#ffe57f',unlockLv:2,unlockText:'เพิ่มดาเมจ +50% (รวม chain)'},
    {key:'rateLv',icon:'⚡',name:'ความเร็ว',col:'#ffe234',unlockLv:3,unlockText:'ยิงรัว (โอกาสคูลดาวน์สั้นลงทันทีหลังยิง)'}
  ];
  if(t===6) return [ // 💰 เหมืองทอง
    {key:'rateLv',icon:'⏱️',name:'คูลดาวน์',col:'#80deea',unlockLv:0,unlockText:''},
    {key:'rngLv',icon:'💰',name:'จำนวนทอง',col:'#ffd54f',unlockLv:0,unlockText:''}
  ];
  if(t===9) return [ // 🌀 ป้อมกาลเวลา
    {key:'rngLv',icon:'🔮',name:'รัศมีเวลา',col:'#b39ddb',unlockLv:0,unlockText:''},
    {key:'rateLv',icon:'⏳',name:'ความเข้ม',col:'#7c4dff',unlockLv:0,unlockText:''}
  ];
  return [ // ปืนใหญ่/น้ำแข็ง/เวทมนตร์/ธนู/สายฟ้า/ป้อมมนตราโมฆะ
    {key:'rngLv',icon:'📡',name:'ระยะ',col:'#4fc3f7',unlockLv:3,unlockText:'เจาะโล่ศัตรู (ดาเมจเข้า HP ตรง ไม่โดนโล่ดูดซับ)'},
    {key:'rateLv',icon:'⚡',name:'ความเร็ว',col:'#ffe234',unlockLv:3,unlockText:'ยิงรัว (โอกาสคูลดาวน์สั้นลงทันทีหลังยิง)'}
  ];
}
function showTowerPopup(tw,px,py){
  _popupTw=tw;
  const pop=document.getElementById('towerPopup');
  if(!pop||!G) return;
  // ป้อมเก่า (ก่อนระบบดาว) อาจไม่มี dmgLv/rngLv/rateLv/star — ตั้งค่าเริ่มต้นให้
  if(tw.dmgLv===undefined){tw.dmgLv=tw.lv||1;tw.rngLv=tw.lv||1;tw.rateLv=tw.lv||1;}
  if(tw.star===undefined) tw.star=1;
  const tracks=trackDefs(tw.type);
  // ⬆ แต้มสกิล 2 สาย — สาย "ดาเมจ" เดิมถูกตัดออก ค่า dmgLv ที่ลงไปแล้วแช่แข็งไว้เป็นโบนัส
  const used=(tw.rngLv-1)+(tw.rateLv-1);
  const remain=tw.star-used;
  const _awCost=awakenCost();
  const refund=Math.floor(CFG.t_cost[tw.type]*Math.pow(2,(tw.star||1)-1)*.6)+(tw.awakened?Math.floor(_awCost*.6):0);
  const canAwaken=tw.star>=3&&!tw.awakened&&G.gold>=_awCost;
  const showAwakenBtn=tw.star>=3&&!tw.awakened;
  if(showAwakenBtn&&!localStorage.getItem('tq_hint_awaken')){
    localStorage.setItem('tq_hint_awaken','1');
    setTimeout(()=>showToast('⚡ ป้อมถึง 3★ แล้ว! กด Awaken เพื่อปลดพลังพิเศษ'),400);
  }
  const starStr='★'.repeat(tw.star);
  let synHtml='';
  if(tw._drainT>0){
    synHtml=`<div class="tp-syn-row"><div class="tp-syn-label">🌑 สถานะ</div><div class="tp-syn-item" style="background:rgba(126,87,194,.15);border-color:rgba(126,87,194,.4);"><div class="tp-syn-name" style="color:#b39ddb;">🌑 ถูกดูดพลัง!</div><div class="tp-syn-desc">บัฟ/Awaken ของป้อมนี้ถูกระงับชั่วคราวโดยเงามืด</div></div></div>`;
  } else if(!TBUFF[tw.type]&&G){
    // 💚 Support buff synergy display
    const bm=getBuffMult(tw.col,tw.row);
    const awBoost=getSupportAwakenBoost(tw.col,tw.row);
    if(bm>1.001){
      const pct=Math.round((bm-1)*100);
      const awTag=awBoost>1?` <span style="color:#ffe234;font-size:9px;">⚡ Awaken ×2</span>`:'';
      synHtml=`<div class="tp-syn-row"><div class="tp-syn-label">💚 Synergy</div><div class="tp-syn-item" style="background:rgba(105,240,174,.08);border-color:rgba(105,240,174,.35);"><div class="tp-syn-name" style="color:#69f0ae;">💚 ซัพพอร์ตบัฟ +${pct}%${awTag}</div><div class="tp-syn-desc">ดาเมจจริง = ดาเมจฐาน ×${bm.toFixed(2)} จากป้อมซัพพอร์ตในรัศมี</div></div></div>`;
    }
  }
  // ── สถิติ ตามชนิดป้อม ──
  const dmgVal=CFG.t_dmg[tw.type]===0?null:Math.round(getTowerDmg(tw.type,tw.dmgLv,tw.star));
  const _bm=(!TBUFF[tw.type]&&G)?getBuffMult(tw.col,tw.row):1;
  const _bmTag=_bm>1.001?` <span style="color:#69f0ae;font-size:9px;">(×${_bm.toFixed(2)} บัฟ)</span>`:'';
  let statsHtml='';
  if(dmgVal!==null) statsHtml+=`<div class="tp-stat">⚔️ ดาเมจ <small style="opacity:.5">Lv.${tw.dmgLv}</small><span>${_bm>1.001?Math.round(dmgVal*_bm):dmgVal}${_bmTag}</span></div>`;
  if(tw.type===3){ // 🎯 สไนเปอร์ — ระยะคงที่, สาย 2 = คริติคอล
    const rngVal=getTowerRange(3,1).toFixed(1);
    const rateVal=getTowerRate(3,tw.rateLv).toFixed(1);
    const crit=getSniperCrit(tw.rngLv);
    const dpsVal=(dmgVal*_bm*parseFloat(rateVal)*(1+crit.chance*(crit.mult-1))).toFixed(1);
    statsHtml+=`<div class="tp-stat">📡 ระยะ <span>${rngVal} ช่อง</span></div>`;
    statsHtml+=`<div class="tp-stat">⚡ อัตรายิง <small style="opacity:.5">Lv.${tw.rateLv}</small><span>${rateVal}${tw.rateLv>=3?' <span style="color:#90caf9;font-size:9px;">🛡️✨เจาะโล่</span>':''}</span></div>`;
    statsHtml+=`<div class="tp-stat">🎯 คริติคอล <small style="opacity:.5">Lv.${tw.rngLv}</small><span>${Math.round(crit.chance*100)}% ×${crit.mult}</span></div>`;
    statsHtml+=`<div class="tp-stat">📊 DPS<span>${dpsVal}${_bmTag}</span></div>`;
  } else if(tw.type===6){ // 💰 เหมืองทอง — คูลดาวน์/จำนวนทอง
    const interval=getGoldMineInterval(tw.rateLv).toFixed(1);
    const amt=Math.round(getGoldMineAmt(tw.rngLv)*(tw.awakened?2:1));
    statsHtml+=`<div class="tp-stat">⏱️ ผลิตทุก <small style="opacity:.5">Lv.${tw.rateLv}</small><span>${interval} วิ</span></div>`;
    statsHtml+=`<div class="tp-stat">💰 ทองต่อครั้ง <small style="opacity:.5">Lv.${tw.rngLv}</small><span>+${amt}${tw.awakened?' (x2 อเวค)':''}</span></div>`;
  } else if(tw.type===4){ // 💚 ซัพพอร์ต — เพิ่มดาเมจบัฟ/กันหยุดป้อม
    const _dmgLv=tw.dmgLv||1,_rateLv2=tw.rateLv||1;
    const buffPct=Math.round(_dmgLv*10+(_rateLv2>=3?30:0));
    const ownBase=tw.awakened?.5:(STAR_RESIST[(tw.star||1)-1]||0);
    const ownBonus=(_rateLv2-1)*.05+(_dmgLv>=3?.3:0);
    const resist=Math.round(Math.min(1,ownBase+ownBonus)*100);
    statsHtml+=`<div class="tp-stat">💪 บัฟดาเมจ <small style="opacity:.5">Lv.${_dmgLv}</small><span>+${buffPct}% ให้ป้อมในรัศมี${_rateLv2>=3?' <span style="color:#80cbc4;font-size:9px;">🛡️+30%</span>':''}</span></div>`;
    statsHtml+=`<div class="tp-stat">🛡️ กันหยุดป้อม <small style="opacity:.5">Lv.${_rateLv2}</small><span>${resist}%${tw.awakened?' (อเวค)':''}${_dmgLv>=3?' <span style="color:#69f0ae;font-size:9px;">💪+30%</span>':''}</span></div>`;
  } else if(tw.type===9){ // 🌀 ป้อมกาลเวลา — รัศมี/ความเข้ม
    const _rngLv=tw.rngLv||1,_rateLv=tw.rateLv||1;
    const radius=(2.0+((_rngLv-1)*.5)).toFixed(1);
    const chargeTimes=[6,5,4,3],pulseDurs=[1.5,2,3,5];
    const chargeT=chargeTimes[Math.min(3,_rateLv-1)];
    const pulseT=pulseDurs[Math.min(3,_rateLv-1)];
    statsHtml+=`<div class="tp-stat">🔮 รัศมีเวลา <small style="opacity:.5">Lv.${_rngLv}</small><span>${radius} ช่อง</span></div>`;
    statsHtml+=`<div class="tp-stat">⏳ ชาร์จ/พัลส์ <small style="opacity:.5">Lv.${_rateLv}</small><span>${chargeT}s / ${pulseT}s</span></div>`;
    statsHtml+=`<div class="tp-stat">🐌 ช้าลง <span>50%${tw.awakened?' + หยุดเวลา (อเวค)':''}</span></div>`;
  } else if(tw.type===1){ // ❄️ น้ำแข็ง — ระยะเวลาสโล/ความเร็ว
    const slowDur=(1.5+(tw.rngLv||1)*.5).toFixed(1);
    const rateVal=getTowerRate(1,tw.rateLv).toFixed(1);
    const dpsVal=(dmgVal*_bm*parseFloat(rateVal)).toFixed(1);
    statsHtml+=`<div class="tp-stat">📡 ระยะ <span>${CFG.t_rng[1].toFixed(1)} ช่อง</span></div>`;
    statsHtml+=`<div class="tp-stat">⏱️ ระยะเวลาสโล <small style="opacity:.5">Lv.${tw.rngLv||1}</small><span>${slowDur} วิ</span></div>`;
    statsHtml+=`<div class="tp-stat">⚡ อัตรายิง <small style="opacity:.5">Lv.${tw.rateLv}</small><span>${rateVal}${tw.rateLv>=4?' <span style="color:#ffe234;font-size:9px;">⚡ยิงรัว</span>':''}</span></div>`;
    statsHtml+=`<div class="tp-stat">🐌 slow <span>70%${tw.awakened?' / 35% แช่แข็ง (อเวค)':''}</span></div>`;
    statsHtml+=`<div class="tp-stat">📊 DPS<span>${dpsVal}${_bmTag}</span></div>`;
  } else { // ปืนใหญ่/เวทมนตร์/มินิกัน/สายฟ้า/ป้อมมนตราโมฆะ — ระยะ/ความเร็ว
    const rngVal=getTowerRange(tw.type,tw.rngLv).toFixed(1);
    const _baseRate=getTowerRate(tw.type,tw.rateLv);
    const _effRate=tw.awakened&&tw.type===5?_baseRate*2:_baseRate;
    const rateVal=_effRate.toFixed(1);
    const dpsVal=(dmgVal*_bm*_effRate).toFixed(1);
    const _rngBadge=tw.type===7&&tw.rngLv>=3?' <span style="color:#ffe57f;font-size:9px;">⚡+50%ดาเมจ</span>':tw.rngLv>=4?' <span style="color:#90caf9;font-size:9px;" title="กระสุนเจาะโล่ศัตรู ดาเมจเข้า HP ตรงๆ">🛡️✨เจาะโล่</span>':'';
    statsHtml+=`<div class="tp-stat">📡 ระยะ <small style="opacity:.5">Lv.${tw.rngLv}</small><span>${rngVal} ช่อง${_rngBadge}</span></div>`;
    statsHtml+=`<div class="tp-stat">⚡ อัตรายิง <small style="opacity:.5">Lv.${tw.rateLv}</small><span>${rateVal}${tw.awakened&&tw.type===5?' <span style="color:#ff8a65;font-size:9px;">×2 (อเวค)</span>':tw.rateLv>=4?' <span style="color:#ffe234;font-size:9px;" title="มีโอกาสคูลดาวน์สั้นลงทันทีหลังยิง">⚡ยิงรัว</span>':''}</span></div>`;
    statsHtml+=`<div class="tp-stat">📊 DPS<span>${dpsVal}${_bmTag}</span></div>`;
  }
  // ⬆ แต้มสกิลติดตัว — ได้มาฟรีตามดาว (1★=1, 2★=2, 3★=3, 4★=4) จัดสรรได้ฟรี (ถาวร)
  const pickRowHtml=remain>0?`<div class="tp-pick-row">`+tracks.map(tr=>{
    const cur=tw[tr.key]||1;
    const unlock=tr.unlockLv&&cur===tr.unlockLv;
    return `<button class="tp-pickbtn" onclick="upgradeTowerFromPopup('${tr.key}')" title="${tr.name} Lv.${cur} → Lv.${cur+1} (ฟรี)${unlock?'  🔓 ปลดล็อก: '+tr.unlockText:''}">
            <span class="pi">${tr.icon}</span>${tr.name}<br><small>Lv.${cur}→${cur+1}${unlock?' 🔓':''}</small>
          </button>`;
  }).join('')+`</div>`:'';
  const leftCellHtml=tw.awakened?
    `<button class="tp-upbtn" disabled style="background:linear-gradient(180deg,#ffe234,#ff9800);color:#6d2900;">⚡ AWAKENED<br><small>ล็อก ${starStr}</small></button>`
    :
    `<div class="tp-upgrade-pick">
        <div class="tp-upgrade-label" style="display:flex;justify-content:space-between;align-items:center;">
          <span>⬆ แต้มสกิล ${remain>0?'เหลือ '+remain+'/'+tw.star+' (ฟรี)':'เต็ม '+used+'/'+tw.star}</span>
        </div>
        ${pickRowHtml}
        ${remain===0&&!showAwakenBtn?`<div style="font-size:9px;color:#888;text-align:center;margin-top:2px;">รวมป้อม ${starStr} อีกตัวเพื่อเลื่อนดาว</div>`:''}
      </div>`;
  const awakenCellHtml=showAwakenBtn?
    `<button class="tp-upbtn" ${canAwaken?'':'disabled'} onclick="awakenTowerFromPopup()" style="background:${canAwaken?'linear-gradient(180deg,#ffe234,#ff9800)':''};color:${canAwaken?'#6d2900':''};">
        ⚡ Awaken<br><small>💰${_awCost} (ล็อก${starStr})</small>
      </button>`
    : '';
  pop.innerHTML=`<div class="tp-head">
    <canvas id="_tpIco" width="42" height="42" style="flex-shrink:0;border-radius:6px;"></canvas>
    <div>
      <div class="tp-name">${TNAMES[tw.type]} <span style="color:#ffd54f;">${starStr}</span>${tw.awakened?' <span style="color:#ffe082;font-size:10px;">⚡ AWAKENED</span>':''}</div>
      <div class="tp-lv">แต้มสกิล ${used}/${tw.star} <span style="opacity:.55;font-size:9px;">(${tracks.map(tr=>tr.icon+tw[tr.key]).join(' ')})</span></div>
    </div>
  </div>
  <div class="tp-stats">
    ${statsHtml}
  </div>
  ${synHtml}
  <div class="tp-btns">
    ${leftCellHtml}
    ${awakenCellHtml}
    <button class="tp-sellbtn" style="grid-column:1/-1;" onclick="sellTowerFromPopup()">🗑 Sell<br><small style="color:#aaa">+💰${refund}</small></button>
  </div>`;
  // draw sprite on canvas
  requestAnimationFrame(()=>{
    const ic=document.getElementById('_tpIco');
    if(ic){
      const ix=ic.getContext('2d');
      // 🌟 พื้นหลังกรอบสีตาม Rarity (★/Awaken) ก่อนวาดไอคอนป้อม
      const _rc=tw.awakened?'#ffb300':RARITY_COLORS[tw.star||1];
      if(_rc){
        ix.save();
        ix.fillStyle=_rc; ix.globalAlpha=.22;
        ix.beginPath();ix.roundRect?ix.roundRect(0,0,42,42,6):ix.rect(0,0,42,42);
        ix.fill();
        ix.globalAlpha=1; ix.strokeStyle=_rc; ix.lineWidth=2;
        ix.beginPath();ix.roundRect?ix.roundRect(1,1,40,40,6):ix.rect(1,1,40,40);
        ix.stroke();
        ix.restore();
      }
      ix.translate(21,23);drawTowerIcon(ix,tw.type,40,0);
    }
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

function awakenTowerFromPopup(){
  if(!_popupTw||!G) return;
  const tw=_popupTw;
  if(tw.awakened){showToast('⚡ อเวคแล้ว!');return;}
  if((tw.star||1)<3){showToast('⚡ ต้องรวมป้อมให้ถึง 3★ ก่อนถึงจะ Awaken ได้!');return;}
  const _awC=awakenCost();
  if(G.gold<_awC){showToast('💰 ต้องการ '+_awC+' ทอง!');hideTowerPopup();return;}
  G.gold-=_awC; tw.awakened=true;
  tw.spawnAnim=0.8;
  const ax=tw.col*CS+CS/2, ay=tw.row*CS+CS/2;
  // FX — Awaken burst (stronger than merge)
  G.hitStopT=0.20;
  G.shakeT=Math.min((G.shakeT||0)+0.18,0.45);
  G.fxFlash.push({x:ax,y:ay,r:CS*4.5,life:0.40,maxLife:0.40,col:'#ffe082'});
  G.fxFlash.push({x:ax,y:ay,r:CS*2,life:0.25,maxLife:0.25,col:'#fff9c4'});
  G.fxRings.push({x:ax,y:ay,r:0,maxR:CS*4,life:1.2,lw:5,col:'#ffe082',delay:0});
  G.fxRings.push({x:ax,y:ay,r:0,maxR:CS*2.5,life:.9,lw:7,col:'#fff9c4',delay:.06});
  G.fxRings.push({x:ax,y:ay,r:0,maxR:CS*5.5,life:.6,lw:2,col:'rgba(255,224,130,.4)',delay:.15});
  for(let k=0;k<20;k++){
    const ang=k/20*Math.PI*2,spd=2+Math.random()*2.5;
    G.particles.push({x:ax,y:ay,txt:k%3===0?'⚡':'✦',col:k%2===0?'#ffe082':'#fff9c4',
      life:1.5,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:1.1,scale:0.9+Math.random()*0.6});
  }
  G.dmgNums.push({x:ax,y:ay-CS*.6,txt:'⚡ AWAKENED!',col:'#ffe082',life:1.8,vy:-2,vx:0,decay:0.55,scale:2.5});
  updateHUD();
  showToast(`⚡ ${TNAMES[tw.type]} อเวคแล้ว! ปลดล็อกพลังพิเศษ!`);
  hideTowerPopup();
  setTimeout(()=>{
    if(G&&!G.over&&!G.win&&G.selTowerInfo===tw){
      const r=cv.getBoundingClientRect();
      showTowerPopup(tw,(tw.col+.5)*CS*r.width/cv.width+r.left,tw.row*CS*r.height/cv.height+r.top);
    }
  },80);
}
function upgradeTowerFromPopup(stat){
  if(!_popupTw||!G) return;
  const tw=_popupTw;
  if(tw.dmgLv===undefined){tw.dmgLv=tw.lv||1;tw.rngLv=tw.lv||1;tw.rateLv=tw.lv||1;}
  if(tw.star===undefined) tw.star=1;
  if(tw.awakened){showToast('⚡ อเวคแล้ว ปรับแต้มไม่ได้!');return;}
  const used=(tw.rngLv-1)+(tw.rateLv-1);
  if(used>=tw.star){showToast('⚠️ แต้มเต็มแล้ว! รวมป้อมเพื่อรับแต้มเพิ่ม');return;}
  const tr=trackDefs(tw.type).find(t=>t.key===stat);
  if(!tr){showToast('⚠️ กรุณาเลือกสายที่จะอัพ');return;}
  tw[tr.key]=(tw[tr.key]||1)+1;
  tw.lv=(tw.rngLv-1)+(tw.rateLv-1)+1; // lv รวม = 1 + แต้มที่ใช้ไปทั้งหมด (max = star+1)
  tw.spawnAnim=0.6;
  const ux=tw.col*CS+CS/2,uy=tw.row*CS+CS/2;
  G.fxRings.push({x:ux,y:uy,r:0,maxR:CS*1.4,life:1,col:tr.col,lw:2.5});
  for(let k=0;k<6;k++){const a=k/6*Math.PI*2;G.particles.push({x:ux,y:uy,txt:tr.icon,col:tr.col,life:.9,vy:Math.sin(a)*1.8,vx:Math.cos(a)*1.8,decay:2});}
  addParticle(ux,uy,'⬆ '+tr.icon+' '+tr.name+' Lv.'+tw[tr.key],tr.col);
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
  if(!_popupTw||!G||G.over||G.win) return;
  const tw=_popupTw;
  const refund=Math.floor(CFG.t_cost[tw.type]*Math.pow(2,(tw.star||1)-1)*.6)+(tw.awakened?Math.floor(awakenCost(tw.type)*.6):0);
  const key=tw.col+'_'+tw.row;
  if(G.gmTimers) delete G.gmTimers[key];
  G.towers=G.towers.filter(t=>t!==tw);
  _invalidateBg();
  G.gold+=refund; updateHUD();
  const sx=tw.col*CS+CS/2,sy=tw.row*CS+CS/2;
  G.fxRings.push({x:sx,y:sy,r:4,maxR:CS*1.2,life:.8,lw:3,col:'#f44336',delay:0});
  for(let k=0;k<6;k++){const a=k/6*Math.PI*2;G.particles.push({x:sx,y:sy,txt:'💰',col:'#ffe082',life:.9,vy:Math.sin(a)*1.5,vx:Math.cos(a)*1.5,decay:2});}
  addParticle(sx,sy-16,'+'+refund+' ทอง','#4caf50');
  showToast('🗑 ขายป้อมได้ +'+refund+' ทอง');
  G.selTowerInfo=null; hideTowerPopup();
}

function _twRemain(tw){
  if(tw.dmgLv===undefined){tw.dmgLv=tw.lv||1;tw.rngLv=tw.lv||1;tw.rateLv=tw.lv||1;}
  if(tw.star===undefined) tw.star=1;
  const tr=trackDefs(tw.type);
  return (tw.star||1)-((tw[tr[0].key]-1)+(tw[tr[1].key]-1));
}
function upgradeAllTowers(){
  if(!G||G.over||G.win) return;
  let total=0;
  G.towers.forEach(tw=>{
    if(tw.awakened) return;
    const tr=trackDefs(tw.type);
    const t0=tr[0].key,t1=tr[1].key;
    let rem=_twRemain(tw);
    if(rem<=0) return;
    while(rem>0){
      if((tw[t0]||1)<=(tw[t1]||1)) tw[t0]=(tw[t0]||1)+1; else tw[t1]=(tw[t1]||1)+1;
      rem--;total++;
    }
    tw.lv=(tw.rngLv-1)+(tw.rateLv-1)+1;
    const ux=tw.col*CS+CS/2,uy=tw.row*CS+CS/2;
    G.fxRings.push({x:ux,y:uy,r:0,maxR:CS*1.3,life:.7,col:'#ffe234',lw:2});
    for(let k=0;k<4;k++){const a=k/4*Math.PI*2;G.particles.push({x:ux,y:uy,txt:'⬆',col:'#ffe234',life:.7,vy:Math.sin(a)*1.4,vx:Math.cos(a)*1.4,decay:2});}
  });
  updateHUD();
  if(total>0) showToast('⬆ อัพสกิลป้อมทั้งหมด +'+total+' แต้ม!');
  else showToast('⚠️ ป้อมทุกตัวใช้แต้มเต็มแล้ว');
}
function updateUpgradeAllBtn(){
  const btn=document.getElementById('upgradeAllBtn');
  if(!btn||!G) return;
  const pending=G.towers.filter(tw=>!tw.awakened&&_twRemain(tw)>0).length;
  const badge=document.getElementById('upgradeAllBadge');
  if(badge){badge.textContent=pending;badge.style.display=pending>0?'inline':'none';}
  btn.disabled=pending===0;
}

