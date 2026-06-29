function openWhatsNew(){
  showScreen('whatsnew',true);
  renderWhatsNew();
  localStorage.setItem('tq_lastSeenVer',GAME_VERSION);
  _updateNewsBadge();
}
function renderWhatsNew(){
  const body=document.getElementById('whatsnewBody');
  if(!body) return;
  body.innerHTML=PATCH_NOTES.map(p=>`
    <div class="news-item">
      <div class="news-item-hd"><span class="news-ver">v${p.ver}</span><span class="news-date">${p.date}</span></div>
      <div class="news-title">${p.title}</div>
      <ul class="news-list">${p.notes.map(n=>`<li>${n}</li>`).join('')}</ul>
    </div>`).join('');
}
function _updateNewsBadge(){
  const badge=document.getElementById('newsBadge');
  if(!badge) return;
  badge.style.display=(localStorage.getItem('tq_lastSeenVer')!==GAME_VERSION)?'inline-block':'none';
}

function renderAchievTab(){
  const unlocked=loadAchievements();
  const seen=new Set(JSON.parse(localStorage.getItem('tq_ach_seen')||'[]'));
  const total=ACHIEVEMENTS.length;
  const done=[...unlocked].filter(id=>ACHIEVEMENTS.find(a=>a.id===id)).length;
  let html=`<div class="ach-count">🎖️ ปลดล็อกแล้ว ${done} / ${total}</div>
  <div class="ach-progress-bar" style="margin-bottom:14px;">
    <div class="ach-progress-fill" style="width:${Math.round(done/total*100)}%"></div>
  </div>`;
  const cats=['story','combat','skill','endgame','casino','collect'];
  cats.forEach(cat=>{
    const items=ACHIEVEMENTS.filter(a=>a.cat===cat);
    html+=`<div class="ach-cat-label">${ACH_CATS[cat]}</div><div class="ach-grid">`;
    items.forEach(a=>{
      const isUnlocked=unlocked.has(a.id);
      const isNew=isUnlocked&&!seen.has(a.id);
      html+=`<div class="ach-card ${isUnlocked?'unlocked':'locked'}">
        ${isUnlocked?'<div class="ach-done">✓</div>':''}
        ${isNew?'<div class="ach-new-badge">N</div>':''}
        <div class="ach-ico">${a.icon}</div>
        <div class="ach-name">${a.name}</div>
        <div class="ach-desc">${a.desc}</div>
        ${a.reward?`<div class="ach-reward"><span class="gico"></span> +${a.reward}</div>`:''}
      </div>`;
    });
    html+=`</div>`;
  });
  document.getElementById('cdxBody').innerHTML=html;
}

/* ══ SCREEN MANAGEMENT ══ */
function hideAll(){['mm','stagesel','gp','codex','devpanel','egmenu','leaderboard','whatsnew','towersel','storyscr','workshop','bag','gacha','skillgacha','daily','casino','profile'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});const cs=document.getElementById('cutscene');if(cs)cs.style.display='none';}
function showScreen(id,flex){
  if(id!=='leaderboard'&&_lbCountdownTimer){clearInterval(_lbCountdownTimer);_lbCountdownTimer=0;}
  hideAll();
  const _grEl=document.getElementById('gr');if(_grEl)_grEl.scrollTop=0;
  const el=document.getElementById(id);
  el.style.display=flex?'flex':'block';
  if(flex)el.style.flexDirection='column';
  el.classList.remove('screen-enter');
  void el.offsetWidth;
  el.classList.add('screen-enter');
  // auto-start menu tour ครั้งแรกหลัง tutorial จบ
  if(id==='mm'&&!localStorage.getItem('tq_menutour_done')&&localStorage.getItem('tq_tut_done')){
    setTimeout(startMenuTour,600);
  }
}

/* ══ MENU STATS ══ */
function updateMenuGold(){
  const el=document.getElementById('mmGoldDisplay');
  if(el) el.textContent=(loadPGold()||0).toLocaleString();
}
function updateMenuStats(){
  const gd=document.getElementById('mmGemsDisplay');
  if(gd) gd.textContent=loadGems().toLocaleString();
  updateMenuGold();
  _updateAchBadge();
  _updateNewsBadge();
  _updateBagBadge();
  _updateDailyBadge();
  _updateActProgress();
}
function _updateActProgress(){
  const p=loadProgress();
  const act1=STAGES.filter(s=>s.id<=10&&s.id>=0);
  const act2=STAGES.filter(s=>s.id>=11&&s.id<=20);
  const d1=act1.filter(s=>p[s.id]>0).length;
  const d2=act2.filter(s=>p[s.id]>0).length;
  const e1=document.getElementById('mmAct1Progress');
  const e2=document.getElementById('mmAct2Progress');
  if(e1) e1.textContent=`Act 1: ${d1}/${act1.length}`;
  if(e2) e2.textContent=`Act 2: ${d2}/${act2.length}`;
}

/* ══ WORKSHOP ══ */
const VOID_RECIPE={gems:800,mats:{0:50,1:30,2:10}};
const TIME_RECIPE={gems:1500,mats:{0:70,1:40,2:15}};
const MAT_ICONS=['🪨','🔘','🌟'];
const MAT_NAMES=['หินมืด','แกนเวทย์','ดาวตก'];
/* ══ BAG SCREEN ══ */
let _bagTab=0;
function openBag(){showScreen('bag',true);clearBagNew();_updateBagBadge();renderBag();}

/* ══ GACHA ══ */
let _gachaResults=[],_gachaFlipped=[],_gachaBusy=false;
function openGacha(){
  showScreen('gacha',true);
  _renderGachaUI();
}
function _renderGachaUI(){
  document.getElementById('gachaGemCount').textContent=loadGems().toLocaleString();
  document.getElementById('gachaPityInfo').textContent=`สะสม ${loadGachaPity()}/100 ครั้ง`;
  const sbl=document.getElementById('gachaTabSkill');
  if(sbl) sbl.textContent=`⭐ ตู้การ์ดสกิล (🎫${loadTickets()})`;
  const canAfford1=loadGems()>=GACHA_COST;
  const canAfford10=loadGems()>=gachaCost(10);
  document.getElementById('gachaPull1').disabled=!canAfford1;
  document.getElementById('gachaPull10').disabled=!canAfford10;
  if(!_gachaBusy){
    document.getElementById('gachaGrid').innerHTML='<div style="grid-column:1/-1;text-align:center;color:#444;padding:40px 0;font-size:13px;">กดสุ่มเพื่อเริ่ม ✨</div>';
    document.getElementById('gachaSkipRow').style.display='none';
    document.getElementById('gachaBtns').style.display='flex';
  }
}
function _cardBackHTML(result){
  const p=result.prize;
  const num=String(result.num).padStart(3,'0');
  if(p){
    return `<div class="gc-num rarity-num-${p.rarity}">${num}</div>
      <div class="gc-ico">${p.icon}</div>
      <div class="gc-name" style="color:${p.color};">${p.name}</div>
      <div class="gacha-rarity-tag rarity-${p.rarity}">${p.rarity}</div>
      ${p.code==='001'?'<div style="font-size:9px;color:#9575cd;margin-top:3px;">🔥 ใช้ได้เฉพาะ Endgame</div>':''}`;
  }
  const sd=BAG_ITEM_DEFS.find(d=>d.id===(result.shardId||'shard_c'));
  return `<div class="gc-num gc-num-dud">${num}</div>
    <div class="gc-ico">${sd.icon}</div>
    <div class="gc-name" style="color:${sd.color};">${sd.name}</div>
    <div class="gacha-rarity-tag rarity-common">ปลอบใจ</div>`;
}
function startGacha(n){
  if(_gachaBusy) return;
  const results=doGachaPulls(n);
  if(!results){showToast('<span class="gico"></span> มณีวิญญาณไม่พอ!');return;}
  _gachaResults=results;
  _gachaFlipped=new Array(n).fill(false);
  _gachaBusy=true;
  document.getElementById('gachaBtns').style.display='none';
  document.getElementById('gachaGemCount').textContent=loadGems().toLocaleString();
  const grid=document.getElementById('gachaGrid');
  const single=n===1;
  grid.style.gridTemplateColumns=single?'1fr':'repeat(5,1fr)';
  grid.innerHTML=results.map((_,i)=>{
    const big=single?' gc-single':'';
    return `<div class="gc-wrap${big}">
      <div class="gc-card" id="gcc${i}" onclick="flipCard(${i})">
        <div class="gc-inner">
          <div class="gc-front"><span class="gc-qmark">?</span></div>
          <div class="gc-back" id="gcb${i}"></div>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('gachaSkipRow').style.display='block';
}
// reveal FX tuned per rarity tier
const RARITY_FX={
  legendary:{n:34,ring:2,flash:1,rays:1,shake:1,scr:1,big:1,cols:['#b388ff','#ffd54f','#ffffff','#e1bee7']},
  epic:     {n:22,ring:1,flash:1,rays:1,shake:0,scr:0,big:1,cols:['#ff8f00','#ffd54f','#fff3e0']},
  rare:     {n:15,ring:1,flash:1,rays:0,shake:0,scr:0,big:0,cols:['#ce93d8','#e1bee7','#f3e5f5']},
  uncommon: {n:10,ring:0,flash:0,rays:0,shake:0,scr:0,big:0,cols:['#90caf9','#bbdefb']},
  common:   {n:6, ring:0,flash:0,rays:0,shake:0,scr:0,big:0,cols:['#90a4ae','#cfd8dc']},
};
function _gachaFx(card,rarity,screenId){
  const fx=RARITY_FX[rarity]||RARITY_FX.common, cols=fx.cols;
  const kill=(el,ms)=>setTimeout(()=>el.remove(),ms);
  // rotating light rays behind the card (epic/legendary)
  if(fx.rays){
    const wrap=card.parentElement;
    const rays=document.createElement('div'); rays.className='gc-rays';
    rays.style.setProperty('--rayc',rarity==='legendary'?'rgba(255,213,79,.4)':'rgba(255,143,0,.32)');
    wrap.appendChild(rays); kill(rays,1300);
  }
  // radial flash burst on the card face
  if(fx.flash){
    const fl=document.createElement('div'); fl.className='gc-flash';
    fl.style.setProperty('--flashc',cols[0]);
    card.appendChild(fl); kill(fl,650);
  }
  // expanding shockwave rings
  for(let r=0;r<fx.ring;r++){
    const ring=document.createElement('div'); ring.className='gc-ring';
    ring.style.setProperty('--ringc',cols[r%cols.length]);
    ring.style.animationDelay=(r*120)+'ms';
    card.appendChild(ring); kill(ring,900+r*120);
  }
  // particle explosion radiating outward
  const burst=document.createElement('div'); burst.className='gc-burst';
  for(let k=0;k<fx.n;k++){
    const p=document.createElement('div'); p.className='gc-particle';
    const ang=Math.random()*Math.PI*2, dist=40+Math.random()*75, col=cols[k%cols.length], sz=4+Math.random()*7;
    p.style.width=p.style.height=sz.toFixed(1)+'px';
    p.style.background=col; p.style.boxShadow='0 0 6px '+col;
    p.style.setProperty('--tx',(Math.cos(ang)*dist).toFixed(1)+'px');
    p.style.setProperty('--ty',(Math.sin(ang)*dist).toFixed(1)+'px');
    p.style.animationDelay=(Math.random()*60).toFixed(0)+'ms';
    burst.appendChild(p);
  }
  card.appendChild(burst); kill(burst,1000);
  // full-screen flash + shake for the top tier
  const scr=document.getElementById(screenId||'gacha');
  if(fx.scr&&scr){const sf=document.createElement('div'); sf.className='gacha-screen-flash'; scr.appendChild(sf); kill(sf,550);}
  if(fx.shake&&scr){scr.classList.add('gc-shake'); setTimeout(()=>scr.classList.remove('gc-shake'),450);}
  if(typeof _playSound==='function') _playSound(fx.big?'gacha_big':'gacha_small');
}
function flipCard(i){
  if(_gachaFlipped[i]) return;
  _gachaFlipped[i]=true;
  const result=_gachaResults[i];
  const back=document.getElementById('gcb'+i);
  const card=document.getElementById('gcc'+i);
  if(!back||!card) return;
  back.innerHTML=_cardBackHTML(result);
  const rarity=result.prize?result.prize.rarity:'common';
  if(result.prize) back.className=`gc-back rarity-back-${result.prize.rarity}`;
  card.classList.add('flipped');
  setTimeout(()=>_gachaFx(card,rarity),300); // fire as the back face appears
  if(_gachaFlipped.every(Boolean)) setTimeout(_gachaDone,900);
}
function skipGachaReveal(){
  _gachaResults.forEach((_,i)=>{if(!_gachaFlipped[i]) flipCard(i);});
}
function _gachaDone(){
  _gachaBusy=false;
  _gachaResults=[];
  _gachaFlipped=[];
  document.getElementById('gachaSkipRow').style.display='none';
  document.getElementById('gachaBtns').style.display='flex';
  const canAfford1=loadGems()>=GACHA_COST;
  const canAfford10=loadGems()>=gachaCost(10);
  document.getElementById('gachaPull1').disabled=!canAfford1;
  document.getElementById('gachaPull10').disabled=!canAfford10;
  document.getElementById('gachaGemCount').textContent=loadGems().toLocaleString();
  document.getElementById('gachaPityInfo').textContent=`สะสม ${loadGachaPity()}/100 ครั้ง`;
  updateMenuStats();
}
function toggleGachaOdds(){
  const body=document.getElementById('gachaOddsBody');
  const arrow=document.getElementById('gachaOddsArrow');
  if(!body||!arrow) return;
  const show=body.style.display==='none';
  body.style.display=show?'':'none';
  arrow.textContent=show?'▲ ซ่อน':'▼ ดูรายละเอียด';
  if(show){
    document.getElementById('gachaOddsPool').innerHTML=[...GACHA_POOL].sort((a,b)=>a.w-b.w).map((p,i)=>{const num=String(i+1).padStart(3,'0');return`
      <div class="gacha-odds-row">
        <span style="font-family:monospace;color:rgba(179,136,255,.6);">${num}</span>
        <span style="color:${p.color};">${p.icon} ${p.name}</span>
        <span class="gacha-rarity-tag rarity-${p.rarity}" style="font-size:7px;">${p.rarity}</span>
        <span style="color:#aaa;">${p.w/10}%</span>
      </div>`;}).join('')+`
      <div class="gacha-odds-row">
        <span style="font-family:monospace;color:rgba(179,136,255,.6);">dud</span>
        <span style="color:#888;">เศษ ×1 (🔹70% · 💜22% · 🌟8%)</span>
        <span class="gacha-rarity-tag" style="font-size:7px;background:rgba(255,255,255,.08);color:#888;">ปลอบใจ</span>
        <span style="color:#aaa;">74.9%</span>
      </div>`;
  }
}
/* ══ SKILL GACHA (v4.0.0 — Phase 2 UI) ══ */
let _skResults=[],_skFlipped=[],_skBusy=false;
function openSkillGacha(){showScreen('skillgacha',true);_renderSkillGachaUI();}
function _doExchangeTicket(n){if(exchangeGemForTicket(n||1))_renderSkillGachaUI();}
function _renderSkillGachaUI(){
  document.getElementById('skillTicketCount').textContent=loadTickets().toLocaleString();
  document.getElementById('skillGachaPityInfo').textContent=`สะสม ${loadSkillPity()}/${SKILL_PITY} ครั้ง`;
  document.getElementById('skillPull1').disabled=loadTickets()<skillPullCost(1);
  document.getElementById('skillPull10').disabled=loadTickets()<skillPullCost(10);
  // ปุ่มแลกตั๋ว: โชว์มณีปัจจุบัน + dim เมื่อมณีไม่พอ (ต้องการ GEM_PER_TICKET)
  const g=loadGems();
  const exb=document.getElementById('skillExchangeBtn');
  if(exb){const ok=g>=GEM_PER_TICKET;exb.innerHTML=`🔁 แลก <span class="gico"></span>${GEM_PER_TICKET} → 🎫1  (มี <span class="gico"></span>${g})`;exb.style.opacity=ok?'1':'.45';exb.style.cursor=ok?'pointer':'not-allowed';}
  const exb10=document.getElementById('skillExchangeBtn10');
  if(exb10){const ok10=g>=GEM_PER_TICKET*10;exb10.innerHTML=`🔁 แลก <span class="gico"></span>${GEM_PER_TICKET*10} → 🎫10`;exb10.style.opacity=ok10?'1':'.45';exb10.style.cursor=ok10?'pointer':'not-allowed';}
  if(!_skBusy){
    document.getElementById('skillGachaGrid').innerHTML='<div style="grid-column:1/-1;text-align:center;color:#444;padding:40px 0;font-size:13px;">กดสุ่มเพื่อเริ่ม ⭐</div>';
    document.getElementById('skillGachaSkipRow').style.display='none';
    document.getElementById('skillGachaBtns').style.display='flex';
  }
}
const _SKILL_STAR_LABEL={true:'✨ ปลดล็อกใหม่!'};
function _skillCardBackHTML(result,ci){
  const d=result.def, res=result.res;
  const rarity=d?d.rarity:'common';
  const rfCls='rf-'+rarity;
  const RL={legendary:'LEGENDARY',epic:'EPIC',rare:'RARE',uncommon:'UNCOMMON',common:'COMMON'};
  const GEM={legendary:'◆',epic:'◆',rare:'◈',uncommon:'◇',common:'·'};
  const g=GEM[rarity]||'·';
  if(!d){
    const sd=BAG_ITEM_DEFS.find(b=>b.id===(result.shardId||'shard_c'));
    return `<div class="ro-frame rf-common">
      <div class="ro-hdr"><span class="ro-hdr-type">${sd.name}</span><span class="ro-hdr-gem"></span></div>
      <div class="ro-art"><canvas id="skart${ci}" width="160" height="110"></canvas></div>
      <div class="ro-footer"><span class="ro-name">ปลอบใจ</span><span class="ro-status">${sd.icon}×1</span></div>
    </div>`;
  }
  const stars='★'.repeat(res.star)+'<span style="opacity:.2">'+'★'.repeat(SKILL_MAX_STAR-res.star)+'</span>';
  let status;
  if(res.isNew) status='<span style="color:#1a8a1a">✨NEW</span>';
  else if(res.maxed) status='<span style="color:#c08000">MAX</span>';
  else if(res.upgraded) status=`<span style="color:#1a8a1a">★UP!</span>`;
  else status=`<span style="color:#555">${res.shards}/${res.shardsNeeded}</span>`;
  return `<div class="ro-frame ${rfCls}">
    <div class="ro-hdr"><span class="ro-hdr-type">${d.name}</span><span class="ro-hdr-gem"></span></div>
    <div class="ro-art"><canvas id="skart${ci}" width="160" height="110"></canvas></div>
    <div class="ro-footer"><span class="ro-stars">${stars}</span><span class="ro-status">${status}</span></div>
  </div>`;
}
function _drawSkillArt(ctx,id,W,H){
  const _lg=(x0,y0,x1,y1,s)=>{const g=ctx.createLinearGradient(x0,y0,x1,y1);s.forEach(([t,c])=>g.addColorStop(t,c));return g;};
  const _rg=(x,y,r0,r1,s)=>{const g=ctx.createRadialGradient(x,y,r0,x,y,r1);s.forEach(([t,c])=>g.addColorStop(t,c));return g;};
  // sky + ground scene helper
  const _scene=(s1,s2,gc)=>{ctx.fillStyle=_lg(0,0,0,H,[[0,s1],[.6,s2]]);ctx.fillRect(0,0,W,H);ctx.fillStyle=gc;ctx.fillRect(0,H*.62,W,H*.38);};
  // rounded rect
  const _rr=(x,y,w,h,r,c)=>{ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):(()=>{ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();})();ctx.fillStyle=c;ctx.fill();};
  // cute eye helper
  const _eye=(x,y,r,col='#333')=>{ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();ctx.beginPath();ctx.arc(x-r*.3,y-r*.3,r*.3,0,Math.PI*2);ctx.fillStyle='white';ctx.fill();};
  ctx.clearRect(0,0,W,H);
  if(id==='goldrush'){
    // === ทะเลทรายทองคำ ===
    _scene('#f9e0a0','#f0c860','#c8a040');
    // ground texture
    ctx.fillStyle='rgba(200,160,50,.25)';ctx.fillRect(0,H*.66,W,H*.06);
    // cactus right
    ctx.fillStyle='#5a8a30';
    ctx.fillRect(W*.73,H*.25,W*.07,H*.4);           // stem
    ctx.fillRect(W*.57,H*.36,W*.24,H*.07);           // arm
    ctx.fillRect(W*.57,H*.22,W*.07,H*.21);           // arm tip up
    // cactus spines
    ctx.strokeStyle='rgba(180,150,60,.6)';ctx.lineWidth=H*.007;
    [[W*.69,H*.32],[W*.83,H*.32],[W*.54,H*.27],[W*.57,H*.42]].forEach(([x,y])=>{
      ctx.beginPath();ctx.moveTo(x-H*.018,y);ctx.lineTo(x+H*.018,y);ctx.stroke();});
    // ground pebbles
    [[W*.1,H*.76],[W*.38,H*.8],[W*.62,H*.78],[W*.85,H*.75]].forEach(([x,y])=>{
      ctx.beginPath();ctx.ellipse(x,y,H*.025,H*.016,0,0,Math.PI*2);ctx.fillStyle='rgba(160,120,40,.4)';ctx.fill();});
    // golden coins on ground
    [[W*.2,H*.72],[W*.5,H*.74],[W*.65,H*.71]].forEach(([x,y])=>{
      ctx.beginPath();ctx.arc(x,y,H*.042,0,Math.PI*2);
      ctx.fillStyle=_lg(x-H*.04,y-H*.04,x+H*.04,y+H*.04,[[0,'#ffe57f'],[1,'#ffb300']]);ctx.fill();
      ctx.strokeStyle='rgba(160,100,0,.5)';ctx.lineWidth=H*.007;ctx.stroke();});
    // MAIN COIN CHARACTER
    const cx=W*.38,cy=H*.48,cr=H*.22;
    // shadow
    ctx.beginPath();ctx.ellipse(cx,H*.72,cr*.85,H*.05,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.18)';ctx.fill();
    // coin body
    ctx.beginPath();ctx.arc(cx,cy,cr,0,Math.PI*2);
    ctx.fillStyle=_lg(cx-cr,cy-cr,cx+cr,cy+cr,[[0,'#fff3b0'],[.3,'#ffe040'],[.7,'#ffa000'],[1,'#e65000']]);ctx.fill();
    ctx.strokeStyle='rgba(180,100,0,.55)';ctx.lineWidth=H*.018;ctx.stroke();
    // coin rim highlight
    ctx.save();ctx.globalAlpha=.5;ctx.beginPath();ctx.arc(cx,cy,cr*.88,0,Math.PI*2);
    ctx.strokeStyle='rgba(255,250,200,.6)';ctx.lineWidth=H*.01;ctx.stroke();ctx.restore();
    // shine blob
    ctx.save();ctx.globalAlpha=.5;ctx.beginPath();ctx.ellipse(cx-cr*.22,cy-cr*.28,cr*.28,cr*.12,-Math.PI*.3,0,Math.PI*2);
    ctx.fillStyle='white';ctx.fill();ctx.restore();
    // face — big cute eyes
    const er=cr*.12;
    _eye(cx-cr*.3,cy-cr*.06,er);_eye(cx+cr*.3,cy-cr*.06,er);
    // blush
    ctx.save();ctx.globalAlpha=.35;
    ctx.beginPath();ctx.ellipse(cx-cr*.48,cy+cr*.05,cr*.15,cr*.1,0,0,Math.PI*2);ctx.fillStyle='#ff8080';ctx.fill();
    ctx.beginPath();ctx.ellipse(cx+cr*.48,cy+cr*.05,cr*.15,cr*.1,0,0,Math.PI*2);ctx.fill();ctx.restore();
    // smile
    ctx.beginPath();ctx.arc(cx,cy+cr*.12,cr*.22,Math.PI*.08,Math.PI*.92);ctx.strokeStyle='#8b4500';ctx.lineWidth=H*.016;ctx.lineCap='round';ctx.stroke();
    // tiny arms holding coin stack
    ctx.strokeStyle='#c87020';ctx.lineWidth=H*.025;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(cx-cr,cy+cr*.15);ctx.quadraticCurveTo(cx-cr*1.2,cy+cr*.5,cx-cr*.7,cy+cr*.75);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx+cr,cy+cr*.15);ctx.quadraticCurveTo(cx+cr*1.2,cy+cr*.5,cx+cr*.7,cy+cr*.75);ctx.stroke();
    // sparkles
    ctx.fillStyle='rgba(255,230,50,.9)';ctx.font=`${H*.1}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';
    [[W*.12,H*.18],[W*.62,H*.14],[W*.88,H*.5]].forEach(([x,y])=>ctx.fillText('✦',x,y));

  } else if(id==='freeze'){
    // === ทุ่งหิมะ ===
    _scene('#cce8ff','#e8f4ff','#ddeeff');
    // snow ground texture
    ctx.fillStyle='rgba(200,230,255,.5)';ctx.beginPath();ctx.ellipse(W*.35,H*.63,W*.4,H*.07,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(210,235,255,.45)';ctx.beginPath();ctx.ellipse(W*.72,H*.65,W*.32,H*.05,0,0,Math.PI*2);ctx.fill();
    // pine tree left
    const pine=(x,y,w,h)=>{
      [[0,0,w,h*.45],[0,h*.25,w*1.18,h*.42],[0,h*.45,w*1.35,h*.38]].forEach(([dy,dya,pw,ph])=>{
        ctx.beginPath();ctx.moveTo(x,y+dy);ctx.lineTo(x+pw/2,y+dy+ph);ctx.lineTo(x-pw/2,y+dy+ph);ctx.closePath();
        ctx.fillStyle='#4a8050';ctx.fill();
        ctx.save();ctx.globalAlpha=.55;ctx.beginPath();ctx.ellipse(x,y+dy+ph*.2,pw*.45,H*.028,0,0,Math.PI*2);
        ctx.fillStyle='#d8efff';ctx.fill();ctx.restore();});};
    pine(W*.1,H*.2,W*.18,H*.45);
    pine(W*.88,H*.3,W*.14,H*.35);
    // SNOW BUNNY CHARACTER
    const bx=W*.47,by=H*.5;
    // shadow
    ctx.beginPath();ctx.ellipse(bx,H*.73,H*.2,H*.04,0,0,Math.PI*2);ctx.fillStyle='rgba(100,150,200,.2)';ctx.fill();
    // body
    ctx.beginPath();ctx.ellipse(bx,by+H*.06,H*.18,H*.2,0,0,Math.PI*2);
    ctx.fillStyle='#f5f7ff';ctx.fill();ctx.strokeStyle='rgba(160,200,240,.4)';ctx.lineWidth=H*.012;ctx.stroke();
    // head
    ctx.beginPath();ctx.arc(bx,by-H*.09,H*.15,0,Math.PI*2);
    ctx.fillStyle='#f8faff';ctx.fill();ctx.strokeStyle='rgba(160,200,240,.4)';ctx.lineWidth=H*.012;ctx.stroke();
    // long fluffy ears
    [-1,1].forEach(s=>{
      ctx.save();ctx.translate(bx+s*H*.08,by-H*.18);ctx.rotate(s*Math.PI*.06);
      ctx.beginPath();ctx.ellipse(0,-H*.12,H*.045,H*.14,0,0,Math.PI*2);
      ctx.fillStyle='#f0f2ff';ctx.fill();ctx.strokeStyle='rgba(160,200,240,.35)';ctx.lineWidth=H*.01;ctx.stroke();
      ctx.beginPath();ctx.ellipse(0,-H*.12,H*.022,H*.09,0,0,Math.PI*2);
      ctx.fillStyle='#ffb8c8';ctx.fill();ctx.restore();});
    // face
    _eye(bx-H*.05,by-H*.1,H*.03);_eye(bx+H*.05,by-H*.1,H*.03);
    // blush
    ctx.save();ctx.globalAlpha=.35;
    ctx.beginPath();ctx.ellipse(bx-H*.1,by-H*.07,H*.06,H*.04,0,0,Math.PI*2);ctx.fillStyle='#ff9999';ctx.fill();
    ctx.beginPath();ctx.ellipse(bx+H*.1,by-H*.07,H*.06,H*.04,0,0,Math.PI*2);ctx.fill();ctx.restore();
    // nose + mouth
    ctx.beginPath();ctx.arc(bx,by-H*.065,H*.02,0,Math.PI*2);ctx.fillStyle='#ffb8c8';ctx.fill();
    ctx.beginPath();ctx.arc(bx-H*.022,by-H*.035,H*.025,Math.PI*.1,Math.PI*.85);
    ctx.strokeStyle='#aaa';ctx.lineWidth=H*.01;ctx.stroke();
    ctx.beginPath();ctx.arc(bx+H*.022,by-H*.035,H*.025,Math.PI*.15,Math.PI*.9);ctx.stroke();
    // tiny arms
    ctx.strokeStyle='rgba(180,210,240,.8)';ctx.lineWidth=H*.018;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(bx-H*.18,by+H*.04);ctx.lineTo(bx-H*.1,by+H*.02);ctx.stroke();
    ctx.beginPath();ctx.moveTo(bx+H*.1,by+H*.02);ctx.lineTo(bx+H*.18,by+H*.04);ctx.stroke();
    // floating snowflakes
    ctx.font=`${H*.09}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';
    [[W*.72,H*.22],[W*.2,H*.38],[W*.82,H*.52],[W*.3,H*.15]].forEach(([x,y])=>{ctx.fillStyle='rgba(140,190,240,.8)';ctx.fillText('❄',x,y);});

  } else if(id==='meteor'){
    // === คืนอุกกาบาต ===
    _scene('#08102a','#1a2050','#2a1800');
    // rocky ground
    ctx.fillStyle='#3a2400';ctx.fillRect(0,H*.66,W,H*.34);
    ctx.fillStyle='#4a3010';ctx.beginPath();ctx.ellipse(W*.18,H*.67,W*.2,H*.055,0,0,Math.PI);ctx.fill();
    ctx.fillStyle='#3e2808';ctx.beginPath();ctx.ellipse(W*.75,H*.68,W*.25,H*.05,0,0,Math.PI);ctx.fill();
    // stars
    for(let i=0;i<22;i++){const sx=(Math.sin(i*17.3)*.5+.5)*W,sy=(Math.sin(i*29.7)*.5+.5)*H*.55;
      ctx.beginPath();ctx.arc(sx,sy,H*.006+Math.sin(i)*.004,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${.35+Math.sin(i*.7)*.22})`;ctx.fill();}
    // impact glow on ground
    ctx.fillStyle=_rg(W/2,H*.66,0,W*.45,[[0,'rgba(255,120,0,.3)'],[1,'transparent']]);ctx.fillRect(0,H*.5,W,H*.35);
    // METEOR CHARACTER (cute fireball with face)
    const mx=W*.5,my=H*.42;
    // trail
    const tg=_lg(W*.15,H*.08,mx,my,[[0,'rgba(255,100,0,0)'],[.5,'rgba(255,140,0,.3)'],[1,'rgba(255,220,80,.55)']]);
    ctx.beginPath();ctx.moveTo(W*.15,H*.08);ctx.lineTo(mx+H*.07,my-H*.03);ctx.lineTo(mx,my+H*.03);ctx.lineTo(mx-H*.07,my-H*.03);ctx.closePath();
    ctx.fillStyle=tg;ctx.fill();
    // corona glow
    ctx.beginPath();ctx.arc(mx,my,H*.25,0,Math.PI*2);
    ctx.fillStyle=_rg(mx,my,0,H*.25,[[0,'rgba(255,230,80,.45)'],[.5,'rgba(255,80,0,.2)'],[1,'transparent']]);ctx.fill();
    // body
    ctx.beginPath();ctx.arc(mx,my,H*.17,0,Math.PI*2);
    ctx.fillStyle=_lg(mx-H*.17,my-H*.17,mx+H*.17,my+H*.17,[[0,'#fff9c4'],[.35,'#ffcc00'],[.7,'#ff5500'],[1,'#8b1000']]);ctx.fill();
    // fire spikes around
    for(let i=0;i<6;i++){const a=i/6*Math.PI*2,r1=H*.17,r2=H*.24;
      ctx.beginPath();ctx.moveTo(mx+Math.cos(a-Math.PI*.07)*r1,my+Math.sin(a-Math.PI*.07)*r1);
      ctx.lineTo(mx+Math.cos(a)*r2,my+Math.sin(a)*r2);
      ctx.lineTo(mx+Math.cos(a+Math.PI*.07)*r1,my+Math.sin(a+Math.PI*.07)*r1);
      ctx.fillStyle=i%2?'#ff6600':'#ff9900';ctx.fill();}
    // face (fierce cute!)
    _eye(mx-H*.065,my-H*.04,H*.04,'#3a0a00');_eye(mx+H*.065,my-H*.04,H*.04,'#3a0a00');
    ctx.fillStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.arc(mx-H*.055,my-H*.055,H*.018,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(mx+H*.075,my-H*.055,H*.018,0,Math.PI*2);ctx.fill();
    // eyebrows (fierce)
    ctx.strokeStyle='#3a0a00';ctx.lineWidth=H*.018;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(mx-H*.1,my-H*.1);ctx.lineTo(mx-H*.02,my-H*.07);ctx.stroke();
    ctx.beginPath();ctx.moveTo(mx+H*.1,my-H*.1);ctx.lineTo(mx+H*.02,my-H*.07);ctx.stroke();
    // open excited mouth
    ctx.beginPath();ctx.arc(mx,my+H*.06,H*.07,0,Math.PI);ctx.fillStyle='#3a0a00';ctx.fill();
    ctx.beginPath();ctx.arc(mx,my+H*.06,H*.05,0,Math.PI);ctx.fillStyle='#ff4444';ctx.fill();
    // embers
    for(let i=0;i<8;i++){const fi=i*45.5,r=H*.22+Math.sin(fi)*.06*H;
      ctx.beginPath();ctx.arc(mx+Math.cos(fi)*r,my+Math.sin(fi)*r,H*.01,0,Math.PI*2);ctx.fillStyle='rgba(255,160,0,.7)';ctx.fill();}
    // impact rings on ground
    [.91,.84].forEach((ry,i)=>{
      ctx.beginPath();ctx.ellipse(W/2,H*ry,W*(.35-i*.08),H*.03,0,0,Math.PI*2);
      ctx.strokeStyle=`rgba(255,${120+i*60},0,${.45-i*.15})`;ctx.lineWidth=H*.012;ctx.stroke();});

  } else if(id==='overdrive'){
    // === สนามไฟฟ้า ===
    _scene('#f5e000','#ffe840','#a07800');
    // electric clouds top
    [[W*.15,H*.12,W*.25],[W*.5,H*.08,W*.3],[W*.82,H*.14,W*.22]].forEach(([x,y,w])=>{
      ctx.beginPath();ctx.arc(x,y,w*.38,0,Math.PI*2);ctx.fillStyle='rgba(255,240,80,.5)';ctx.fill();
      ctx.beginPath();ctx.arc(x+w*.2,y+H*.02,w*.28,0,Math.PI*2);ctx.fillStyle='rgba(255,240,80,.5)';ctx.fill();});
    // ground dust
    ctx.fillStyle='rgba(120,80,0,.35)';ctx.fillRect(0,H*.66,W,H*.07);
    // LIGHTNING BOLT CHARACTER
    const lx=W*.5,ly=H*.5;
    // glow behind bolt
    ctx.save();ctx.shadowBlur=H*.15;ctx.shadowColor='rgba(255,240,50,.8)';
    ctx.beginPath();ctx.moveTo(lx+W*.1,ly-H*.42);ctx.lineTo(lx-W*.09,ly+H*.02);ctx.lineTo(lx+W*.05,ly+H*.02);
    ctx.lineTo(lx-W*.1,ly+H*.4);ctx.lineTo(lx+W*.12,ly-H*.02);ctx.lineTo(lx-W*.01,ly-H*.02);ctx.closePath();
    ctx.fillStyle='rgba(255,255,150,.6)';ctx.fill();ctx.restore();
    // bolt fill
    ctx.beginPath();ctx.moveTo(lx+W*.1,ly-H*.42);ctx.lineTo(lx-W*.09,ly+H*.02);ctx.lineTo(lx+W*.05,ly+H*.02);
    ctx.lineTo(lx-W*.1,ly+H*.4);ctx.lineTo(lx+W*.12,ly-H*.02);ctx.lineTo(lx-W*.01,ly-H*.02);ctx.closePath();
    ctx.fillStyle=_lg(lx,ly-H*.42,lx,ly+H*.4,[[0,'#fffde0'],[.3,'#ffee40'],[.7,'#ffa800'],[1,'#e06000']]);ctx.fill();
    ctx.strokeStyle='rgba(255,255,200,.55)';ctx.lineWidth=H*.018;ctx.lineJoin='round';ctx.stroke();
    // cute face on upper bolt portion
    const fx=lx+W*.04,fy=ly-H*.25;
    _eye(fx-H*.06,fy,H*.038,'#6b4000');_eye(fx+H*.06,fy,H*.038,'#6b4000');
    // blush
    ctx.save();ctx.globalAlpha=.35;
    ctx.beginPath();ctx.ellipse(fx-H*.12,fy+H*.04,H*.06,H*.04,0,0,Math.PI*2);ctx.fillStyle='#ff8060';ctx.fill();
    ctx.beginPath();ctx.ellipse(fx+H*.12,fy+H*.04,H*.06,H*.04,0,0,Math.PI*2);ctx.fill();ctx.restore();
    // excited open mouth
    ctx.beginPath();ctx.arc(fx,fy+H*.07,H*.055,0,Math.PI);ctx.fillStyle='#6b4000';ctx.fill();
    ctx.beginPath();ctx.arc(fx,fy+H*.07,H*.04,0,Math.PI);ctx.fillStyle='#fff0c0';ctx.fill();
    // sparks shooting out
    ctx.strokeStyle='rgba(255,255,100,.75)';ctx.lineWidth=H*.01;ctx.lineCap='round';
    [[W*.12,H*.28],[W*.85,H*.25],[W*.05,H*.5],[W*.92,H*.48],[W*.18,H*.72],[W*.8,H*.7]].forEach(([x,y])=>{
      for(let s=0;s<4;s++){const a=s*Math.PI/2;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(a)*H*.04,y+Math.sin(a)*H*.04);ctx.stroke();}});

  } else if(id==='barrier'){
    // === ทุ่งหน้าปราสาท ===
    _scene('#90c8f0','#bce0f8','#4a9030');
    // rolling hills
    ctx.fillStyle='#5aaa3a';ctx.beginPath();ctx.ellipse(W*.25,H*.65,W*.38,H*.1,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#4a9028';ctx.beginPath();ctx.ellipse(W*.78,H*.67,W*.32,H*.09,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#55a035';ctx.fillRect(0,H*.64,W,H*.36);
    // castle wall background
    ctx.fillStyle='rgba(200,195,220,.7)';
    ctx.fillRect(W*.52,H*.22,W*.44,H*.44);
    for(let b=0;b<5;b++)ctx.fillRect(W*.53+b*(W*.085),H*.16,W*.06,H*.09);
    ctx.fillStyle='rgba(160,155,185,.5)';
    ctx.fillRect(W*.64,H*.3,W*.1,H*.36); // gate
    ctx.fillStyle='rgba(100,90,130,.45)';
    ctx.beginPath();ctx.arc(W*.69,H*.3,W*.05,Math.PI,0);ctx.fill();
    // bushes/leaves foreground
    [[W*.04,H*.6],[W*.92,H*.58],[W*.14,H*.72],[W*.84,H*.7]].forEach(([x,y])=>{
      ctx.beginPath();ctx.arc(x,y,H*.06,0,Math.PI*2);ctx.fillStyle='#4a9040';ctx.fill();
      ctx.beginPath();ctx.arc(x+H*.04,y-H*.02,H*.045,0,Math.PI*2);ctx.fillStyle='#5aaa4a';ctx.fill();});
    // SHIELD CHARACTER
    const sx=W*.32,sy=H*.5;
    // shadow
    ctx.beginPath();ctx.ellipse(sx,H*.74,H*.2,H*.04,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.18)';ctx.fill();
    // shield shape
    ctx.beginPath();ctx.moveTo(sx,sy-H*.24);
    ctx.bezierCurveTo(sx+H*.22,sy-H*.24,sx+H*.22,sy+H*.02,sx,sy+H*.24);
    ctx.bezierCurveTo(sx-H*.22,sy+H*.02,sx-H*.22,sy-H*.24,sx,sy-H*.24);
    ctx.closePath();
    ctx.fillStyle=_lg(sx-H*.22,sy-H*.24,sx+H*.22,sy+H*.24,[[0,'#d8e8ff'],[.45,'#a8c0f0'],[1,'#6880d0']]);ctx.fill();
    ctx.strokeStyle='rgba(60,80,200,.45)';ctx.lineWidth=H*.022;ctx.stroke();
    // shield cross divider
    ctx.strokeStyle='rgba(80,100,220,.3)';ctx.lineWidth=H*.012;
    ctx.beginPath();ctx.moveTo(sx,sy-H*.24);ctx.lineTo(sx,sy+H*.24);ctx.stroke();
    ctx.beginPath();ctx.moveTo(sx-H*.2,sy);ctx.lineTo(sx+H*.2,sy);ctx.stroke();
    // shield shine
    ctx.save();ctx.globalAlpha=.45;ctx.beginPath();ctx.ellipse(sx-H*.08,sy-H*.14,H*.1,H*.06,-Math.PI*.3,0,Math.PI*2);ctx.fillStyle='white';ctx.fill();ctx.restore();
    // cute face on shield
    _eye(sx-H*.055,sy-H*.06,H*.036,'#283898');_eye(sx+H*.055,sy-H*.06,H*.036,'#283898');
    ctx.save();ctx.globalAlpha=.35;
    ctx.beginPath();ctx.ellipse(sx-H*.11,sy,H*.065,H*.04,0,0,Math.PI*2);ctx.fillStyle='#ff8080';ctx.fill();
    ctx.beginPath();ctx.ellipse(sx+H*.11,sy,H*.065,H*.04,0,0,Math.PI*2);ctx.fill();ctx.restore();
    // happy smile
    ctx.beginPath();ctx.arc(sx,sy+H*.05,H*.08,Math.PI*.06,Math.PI*.94);ctx.strokeStyle='#283898';ctx.lineWidth=H*.018;ctx.lineCap='round';ctx.stroke();
    // sparkle gems at shield corners
    [[sx-H*.2,sy-H*.04,'#80c0ff'],[sx+H*.2,sy-H*.04,'#b090ff'],[sx,sy+H*.23,'#90d090']].forEach(([x,y,c])=>{
      ctx.beginPath();ctx.arc(x,y,H*.025,0,Math.PI*2);ctx.fillStyle=c;ctx.fill();
      ctx.strokeStyle='white';ctx.lineWidth=H*.008;ctx.stroke();});
    // magic sparkles
    ctx.fillStyle='rgba(160,200,255,.8)';ctx.font=`${H*.1}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';
    [[W*.06,H*.3],[W*.96,H*.35]].forEach(([x,y])=>ctx.fillText('✦',x,y));

  } else {
    // === เศษชิ้นส่วน (shard) ===
    const _sc={
      shard_e:['#1a0800','#2a1200','#e07000','#ffd54f','#ffe082'],   // ⭐ เศษดวงดาว — ทอง
      shard_r:['#1a0030','#2a0050','#7b1fa2','#ce93d8','#f3e5f5'],   // 💜 เศษแกนเวทย์ — ม่วง
    }[id]||['#0a0a18','#121230','#283060','#90caf9','#e3f2fd'];       // shard_c default — น้ำเงิน
    const[bg1,bg2,gc1,gc2,gc3]=_sc;
    // night/depth background
    _scene(bg1,bg2,gc1);
    // light beam from above
    const bx=W/2,by=-5;
    const bg=_lg(bx-W*.3,by,bx,H*.8,[[0,gc2+'44'],[1,'transparent']]);
    ctx.beginPath();ctx.moveTo(bx-W*.3,by);ctx.lineTo(bx+W*.3,by);ctx.lineTo(bx+W*.08,H*.75);ctx.lineTo(bx-W*.08,H*.75);ctx.closePath();ctx.fillStyle=bg;ctx.fill();
    // floating stars
    for(let i=0;i<10;i++){const sx=(Math.sin(i*23.1)*.5+.5)*W,sy=(Math.sin(i*37.7)*.5+.5)*H*.55;
      ctx.beginPath();ctx.arc(sx,sy,H*.008+Math.sin(i)*.004,0,Math.PI*2);ctx.fillStyle=`rgba(${gc3==='#fff'?'255,255,255':'200,230,255'},.${3+Math.floor(Math.sin(i*.9)*2)})`;ctx.fill();}
    // gem shadow
    ctx.beginPath();ctx.ellipse(W/2,H*.74,H*.14,H*.04,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.3)';ctx.fill();
    // gem body — diamond shape
    const gx=W/2,gy=H*.46,gw=H*.2,gh=H*.28;
    const gemFill=_lg(gx-gw,gy-gh*.5,gx+gw,gy+gh*.5,[[0,gc3],[.4,gc2],[.8,gc1+'cc'],[1,gc1]]);
    // top facets
    ctx.beginPath();ctx.moveTo(gx,gy-gh*.65);ctx.lineTo(gx+gw,gy-gh*.05);ctx.lineTo(gx,gy+gh*.55);ctx.lineTo(gx-gw,gy-gh*.05);ctx.closePath();
    ctx.fillStyle=gemFill;ctx.fill();
    // inner shine facet left
    ctx.beginPath();ctx.moveTo(gx,gy-gh*.65);ctx.lineTo(gx+gw*.45,gy-gh*.08);ctx.lineTo(gx,gy-gh*.05);ctx.closePath();
    ctx.fillStyle='rgba(255,255,255,.35)';ctx.fill();
    // inner shine facet top-right
    ctx.beginPath();ctx.moveTo(gx+gw*.1,gy-gh*.62);ctx.lineTo(gx+gw*.85,gy-gh*.08);ctx.lineTo(gx+gw*.45,gy-gh*.18);ctx.closePath();
    ctx.fillStyle='rgba(255,255,255,.15)';ctx.fill();
    // outline
    ctx.beginPath();ctx.moveTo(gx,gy-gh*.65);ctx.lineTo(gx+gw,gy-gh*.05);ctx.lineTo(gx,gy+gh*.55);ctx.lineTo(gx-gw,gy-gh*.05);ctx.closePath();
    ctx.strokeStyle=gc2+'bb';ctx.lineWidth=H*.016;ctx.lineJoin='round';ctx.stroke();
    // sparkles around gem
    ctx.fillStyle=gc2;ctx.font=`${H*.1}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';
    [[W*.12,H*.22],[W*.88,H*.28],[W*.18,H*.68],[W*.84,H*.62]].forEach(([x,y],i)=>{
      ctx.save();ctx.globalAlpha=.7;ctx.font=`${H*(i%2?.07:.1)}px serif`;ctx.fillText('✦',x,y);ctx.restore();});
  }
}
function startSkillGacha(n){
  if(_skBusy) return;
  const results=doSkillPulls(n);
  if(!results){showToast('🎫 ตั๋วสกิลไม่พอ!');return;}
  _skResults=results;
  _skFlipped=new Array(n).fill(false);
  _skBusy=true;
  document.getElementById('skillGachaBtns').style.display='none';
  document.getElementById('skillTicketCount').textContent=loadTickets().toLocaleString();
  const grid=document.getElementById('skillGachaGrid');
  const single=n===1;
  grid.style.gridTemplateColumns=single?'1fr':'repeat(5,1fr)';
  grid.innerHTML=results.map((_,i)=>{
    const big=single?' gc-single':'';
    return `<div class="gc-wrap${big}">
      <div class="gc-card" id="skc${i}" onclick="flipSkillCard(${i})">
        <div class="gc-inner">
          <div class="gc-front"><span class="gc-qmark">⭐</span></div>
          <div class="gc-back" id="skb${i}"></div>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('skillGachaSkipRow').style.display='block';
}
function flipSkillCard(i){
  if(_skFlipped[i]) return;
  _skFlipped[i]=true;
  const result=_skResults[i];
  const back=document.getElementById('skb'+i);
  const card=document.getElementById('skc'+i);
  if(!back||!card) return;
  back.innerHTML=_skillCardBackHTML(result,i);
  back.className='gc-back';
  card.classList.add('flipped');
  const cv=document.getElementById('skart'+i);
  if(cv){const c=cv.getContext('2d');_drawSkillArt(c,result.def?result.def.id:(result.shardId||'shard_c'),cv.width,cv.height);}
  const rarity=result.def?result.def.rarity:'common';
  setTimeout(()=>_gachaFx(card,rarity,'skillgacha'),300);
  if(_skFlipped.every(Boolean)) setTimeout(_skillGachaDone,900);
}
function skipSkillReveal(){_skResults.forEach((_,i)=>{if(!_skFlipped[i]) flipSkillCard(i);});}
function _skillGachaDone(){
  _skBusy=false;_skResults=[];_skFlipped=[];
  document.getElementById('skillGachaSkipRow').style.display='none';
  document.getElementById('skillGachaBtns').style.display='flex';
  document.getElementById('skillPull1').disabled=loadTickets()<skillPullCost(1);
  document.getElementById('skillPull10').disabled=loadTickets()<skillPullCost(10);
  document.getElementById('skillTicketCount').textContent=loadTickets().toLocaleString();
  document.getElementById('skillGachaPityInfo').textContent=`สะสม ${loadSkillPity()}/${SKILL_PITY} ครั้ง`;
  updateMenuStats();
}
function toggleSkillOdds(){
  const body=document.getElementById('skillOddsBody');
  const arrow=document.getElementById('skillOddsArrow');
  if(!body||!arrow) return;
  const show=body.style.display==='none';
  body.style.display=show?'':'none';
  arrow.textContent=show?'▲ ซ่อน':'▼ ดูรายละเอียด';
  if(show){
    document.getElementById('skillOddsPool').innerHTML=[...SKILL_DEFS].sort((a,b)=>skillCardRate(a)-skillCardRate(b)).map((d,i)=>`
      <div class="gacha-odds-row" onclick="_showSkillInfo('${d.id}')" style="cursor:pointer;">
        <span style="font-family:monospace;color:rgba(179,136,255,.6);">${String(i+1).padStart(3,'0')}</span>
        <span style="color:${d.color};">${d.icon} ${d.name}</span>
        <span class="gacha-rarity-tag rarity-${d.rarity}" style="font-size:7px;">${d.rarity}</span>
        <span style="color:#aaa;">${skillCardRatePct(d)}%</span>
      </div>`).join('')+`
      <div class="gacha-odds-row">
        <span style="font-family:monospace;color:rgba(179,136,255,.6);">dud</span>
        <span style="color:#888;">เศษ ×1 (🔹70% · 💜22% · 🌟8%)</span>
        <span class="gacha-rarity-tag" style="font-size:7px;background:rgba(255,255,255,.08);color:#888;">ปลอบใจ</span>
        <span style="color:#aaa;">99.9%</span>
      </div>`;
  }
}
function switchBagTab(t){
  _bagTab=t;
  [0,1,2].forEach(i=>{const b=document.getElementById('bagTab'+i);if(b)b.classList.toggle('active',i===t);});
  renderBag();
}
function renderBag(){
  const body=document.getElementById('bagBody');
  if(!body) return;
  const mats=loadMaterials(),bag=loadBag(),abuff=loadActiveBuff(),newSet=loadBagNew();
  if(_bagTab===0){
    // วัสดุ + เศษสะสม
    const gems=loadGems();
    const matDefs=[
      {icon:'<span class="gico"></span>',name:'มณีวิญญาณ',col:'#80d8ff',qty:gems,desc:'ใช้คราฟป้อมมนตราโมฆะใน Workshop'},
      {icon:MAT_ICONS[0],name:MAT_NAMES[0],col:'#90caf9',qty:mats[0]||0,desc:'วัสดุสามัญจากการเล่น'},
      {icon:MAT_ICONS[1],name:MAT_NAMES[1],col:'#ce93d8',qty:mats[1]||0,desc:'วัสดุหายากจากการเล่น'},
      {icon:MAT_ICONS[2],name:MAT_NAMES[2],col:'#ffe082',qty:mats[2]||0,desc:'วัสดุพิเศษจากการเล่น'},
    ];
    const shardDefs=[
      {id:'shard_c',icon:SHARD_C_SVG,name:'เศษหินมืด',col:'#64b5f6',desc:'เศษสะสมสามัญ · แลกได้ที่ Workshop'},
      {id:'shard_r',icon:'💜',name:'เศษแกนเวทย์',   col:'#ce93d8',desc:'เศษสะสมหายาก · แลกได้ที่ Workshop'},
      {id:'shard_e',icon:'🌟',name:'เศษดวงดาว',   col:'#ffe082',desc:'เศษสะสมพิเศษ · แลกได้ที่ Workshop'},
    ];
    const rowHtml=m=>`<div class="bag-item">
        <div class="bag-ico" style="font-size:24px;">${m.icon}</div>
        <div class="bag-info">
          <div class="bag-name" style="color:${m.col};">${m.name}</div>
          <div class="bag-desc">${m.desc}</div>
        </div>
        <div class="bag-qty">${m.qty}</div>
      </div>`;
    body.innerHTML=matDefs.map(rowHtml).join('')
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.3);margin:10px 0 4px;padding-left:2px;letter-spacing:.5px;">เศษสะสม</div>'
      +shardDefs.map(s=>rowHtml({...s,qty:bag[s.id]||0})).join('');
  } else if(_bagTab===1){
    // บัฟ
    const buffs=BAG_ITEM_DEFS.filter(d=>d.type==='buff'&&(bag[d.id]||0)>0);
    if(!buffs.length){body.innerHTML='<div class="bag-empty">ยังไม่มีไอเทมบัฟ<br>ได้รับจากการจบด่าน</div>';return;}
    body.innerHTML='<div class="bag-hint">เลือก 1 ชิ้นเพื่อใช้ในด่านถัดไป (บัฟจะถูกใช้อัตโนมัติตอนเริ่มด่าน)</div>'
      +buffs.map(d=>{
        const isActive=abuff===d.id;
        const isNew=newSet.has(d.id);
        return `<div class="bag-item${isActive?' bag-active':''}${isNew?' bag-item-new':''}" style="border-color:${isActive?d.color:isNew?'rgba(239,83,80,.55)':'rgba(255,255,255,.1)'};">
          ${isNew?'<div class="bag-new-dot">ใหม่</div>':''}
          <div class="bag-ico" style="background:${isActive?d.color+'33':'rgba(255,255,255,.06)'};" onclick="useBuffItem('${d.id}')"><img src="${_skillIconURL(d.id)}" style="width:100%;height:100%;object-fit:contain;"></div>
          <div class="bag-info">
            <div class="bag-name" style="color:${d.color};">${d.name}</div>
            <div class="bag-desc">${d.desc}</div>
            <div class="bag-qty">มี ${bag[d.id]} ชิ้น${isActive?' <span style="color:'+d.color+';font-weight:700;">● จะใช้ในด่านถัดไป</span>':''}</div>
          </div>
          <button class="bag-use-btn" onclick="useBuffItem('${d.id}')"
            style="border-color:${d.color};color:${isActive?'#111':d.color};background:${isActive?d.color:'transparent'};">
            ${isActive?'✓ เลือกแล้ว':'เลือกใช้'}
          </button>
        </div>`;
      }).join('');
  } else if(_bagTab===2){
    // ⭐ สกิล — การ์ดกดเอง (เลือกใส่ 1 ใบ/รัน)
    body.innerHTML='<div class="bag-hint">คอลเลกชันการ์ดสกิล · เลือกการ์ดที่จะใช้ในหน้าเลือกป้อม · ได้การ์ดจากตู้สุ่มสกิล</div>'
      +SKILL_DEFS.map(d=>{
        const star=getSkillStar(d.id), owned=star>0;
        const shards=owned?getSkillShards(d.id):0;
        const needed=owned&&star<SKILL_MAX_STAR?SKILL_SHARD_COST[star-1]:0;
        const cur=owned?getSkillStat(d.id,star):null;
        const nextS=owned&&star<SKILL_MAX_STAR?getSkillStat(d.id,star+1):null;
        const starStr=owned?('★'.repeat(star)+'☆'.repeat(SKILL_MAX_STAR-star)):'🔒 ยังไม่ปลดล็อก';
        const cdLine=owned?`Cooldown ${cur.cd}s`+(nextS?` <span style="opacity:.6;">→ ★${star+1}: ${nextS.cd}s</span>`:' (★MAX)'):'';
        const shardLine=owned&&star<SKILL_MAX_STAR?`<span style="color:#90caf9;font-size:9px;">ซ้ำ ${shards}/${needed} → ★${star+1}</span>`:
          owned?'<span style="color:#ffd54f;font-size:9px;">★ MAX</span>':'';
        return `<div class="bag-item${owned?' rarity-back-'+d.rarity:' sk-locked'}">
          <div class="bag-ico" style="background:${owned?d.color+'33':'rgba(255,255,255,.04)'};cursor:pointer;" onclick="_showSkillInfo('${d.id}')"><img src="${_skillIconURL(d.id)}" style="width:36px;height:36px;object-fit:contain;${owned?'filter:brightness(1.3);':'filter:grayscale(1) brightness(.4);'}"></div>
          <div class="bag-info" style="cursor:pointer;" onclick="_showSkillInfo('${d.id}')">
            <div class="bag-name" style="color:${owned?d.color:'#777'};">${d.name} <span class="gacha-rarity-tag rarity-${d.rarity}">${d.rarity}</span> <span style="font-size:9px;color:#9fa8da;">ℹ️ ข้อมูล</span></div>
            <div class="bag-desc">${d.desc}</div>
            <div class="sk-stars" style="color:${owned?'#ffd54f':'#666'};">${starStr} ${shardLine}</div>
            ${cdLine?`<div class="bag-qty">${cdLine}</div>`:''}
          </div>
        </div>`;
      }).join('');
  }
}
function useSkillCard(id){
  setActiveSkill(loadActiveSkill()===id?null:id); // toggle
  renderBag();
}
function useBuffItem(id){
  setActiveBuff(loadActiveBuff()===id?'':id); // toggle
  renderBag();
  _renderTsBuff();
}
function _renderTsBuff(){
  const p=document.getElementById('tsBuff');
  if(!p) return;
  const bag=loadBag(),abuff=loadActiveBuff();
  const buffs=BAG_ITEM_DEFS.filter(d=>d.type==='buff'&&(bag[d.id]||0)>0);
  if(!buffs.length){
    p.innerHTML='<div class="ts-buff-title">ไอเท็มใช้บัพ</div><div class="ts-buff-empty">ไม่มีไอเท็ม</div>';
    return;
  }
  p.innerHTML='<div class="ts-buff-title">ไอเท็มใช้บัพ</div>'
    +buffs.map(d=>{
      const isActive=abuff===d.id;
      return `<div class="ts-buff-item${isActive?' ts-buff-active':''}" onclick="useBuffItem('${d.id}')" style="--bc:${d.color};--bc-bg:${d.color}22;">
        <div class="ts-buff-ico"><img src="${_skillIconURL(d.id)}"></div>
        <div><div class="ts-buff-name" style="color:${d.color};">${d.name}</div>
        <div class="ts-buff-qty">มี ${bag[d.id]} ชิ้น${isActive?` <span style="color:${d.color};font-weight:700">● จะใช้</span>`:''}</div></div>
      </div>`;
    }).join('');
}
function _updateBagBadge(){
  const b=document.getElementById('bagBadge');
  if(!b) return;
  const newCount=loadBagNew().size;
  b.style.display=newCount>0?'inline-block':'none';
  b.textContent=newCount>9?'9+':String(newCount);
}

/* 🌳 Talent Tree — 3 branches × 4 tiers, linear unlock. Node ids map to tq_pups
   (legacy ids 0/1/2 kept as tier-1 nodes so old purchases carry over). */
const TALENT_TREE=[
  {key:'eco',icon:'💰',name:'เศรษฐกิจ',color:'#ffd54f',nodes:[
    {leveled:'sgold',  name:'ทองเริ่มต้น', desc:'เริ่มด่านมีทอง +3 ต่อเลเวล (สูงสุด +300) · 🎁 Lv.100 แถมทองจากฆ่า +10%'},
    {leveled:'gkill',  name:'ทองจากศัตรู', desc:'ฆ่าศัตรูได้ทอง +0.2% ต่อเลเวล (สูงสุด +20%)'},
    {leveled:'awaken', name:'ลดราคาอเวค',  desc:'อเวคป้อมถูกลง −2.5 ต่อเลเวล (350 → เหลือ 100 ที่ Lv.100)'},
  ]},
  {key:'atk',icon:'⚔️',name:'โจมตี',color:'#ff8a65',nodes:[
    {leveled:'tdmg', name:'ดาเมจป้อม', desc:'+0.5% ต่อเลเวล (สูงสุด +50%) · ดาเมจป้อมทุกหลัง'},
  ]},
  {key:'def',icon:'🛡️',name:'ป้องกัน',color:'#64b5f6',nodes:[
    {leveled:'hpmax', name:'HP ปราสาท', desc:'+0.5 ต่อเลเวล (สูงสุด +50 HP) · HP ปราสาทสูงสุด'},
  ]},
  {key:'skl',icon:'⭐',name:'สกิล',color:'#b388ff',nodes:[
    {leveled:'skcool', name:'คูลดาวน์สกิล', desc:'−0.5% ต่อเลเวล (สูงสุด −50%) · การ์ดสกิลที่ใส่'},
  ]},
];
function buyTalent(id,cost,prereqId){
  if(prereqId!=null && !hasPUpgrade(prereqId)){ showToast('🔒 ปลดทาเลนต์ขั้นก่อนหน้าก่อน!'); return; }
  buyPUpgrade(id,cost);
}
const _talentOpen={};
function _toggleTalentBranch(key){
  _talentOpen[key]=!_talentOpen[key];
  const el=document.getElementById('tb-nodes-'+key);
  const arr=document.getElementById('tb-arr-'+key);
  if(el) el.style.display=_talentOpen[key]?'':'none';
  if(arr) arr.style.transform=_talentOpen[key]?'rotate(90deg)':'rotate(0deg)';
}
function _renderTalentTree(){
  const pg=loadPGold();
  /* node "เสร็จ" สำหรับ unlock ขั้นถัดไป: leveled = มี ≥1 เลเวล, ปกติ = ซื้อแล้ว */
  const PREREQ_LVS=[0,20,40]; // ชั้นที่ t ต้องการชั้นก่อนถึง Lv นี้ก่อนปลดล็อก
  const _ndDone=(nd,reqLv=1)=>nd.leveled?(loadTalentLv(nd.leveled)>=reqLv):hasPUpgrade(nd.id);
  return TALENT_TREE.map(br=>{
    const ownedCount=br.nodes.filter(nd=>nd.leveled?(loadTalentLv(nd.leveled)>=LEVELED_TALENTS[nd.leveled].maxLv):hasPUpgrade(nd.id)).length;
    const total=br.nodes.length;
    const allDone=ownedCount===total;
    const open=_talentOpen[br.key]!==false;// default open
    _talentOpen[br.key]=open;
    const nodes=br.nodes.map((nd,t)=>{
      const prereqOk=t===0||_ndDone(br.nodes[t-1],PREREQ_LVS[t]||1);
      if(nd.leveled){ // node แบบเลเวล 0–100 (sgold / gkill)
        const tdef=LEVELED_TALENTS[nd.leveled], maxLv=tdef.maxLv;
        const lv=loadTalentLv(nd.leveled), maxed=lv>=maxLv;
        const cost=maxed?0:talentLvCost(lv);
        let cost10=0,cnt10=0; for(let i=lv;i<Math.min(lv+10,maxLv);i++){cost10+=talentLvCost(i);cnt10++;}
        const can1=!maxed&&prereqOk&&pg>=cost, can10=!maxed&&prereqOk&&cnt10>0&&pg>=cost10;
        const buyable=can1;
        const state=maxed?'owned':(!prereqOk?'locked':buyable?'buyable':'tooexp');
        const act=maxed
          ?`<div class="talent-owned">✓ MAX</div>`
          :(!prereqOk
            ?`<div class="talent-lock">🔒 ต้อง Lv.${PREREQ_LVS[t]} ก่อน</div>`
            :`<div style="display:flex;flex-direction:column;gap:3px;align-items:stretch;">
                <button class="talent-buy${can1?'':' dim'}" ${can1?`onclick="buyTalentLv('${nd.leveled}',1)"`:'disabled'}><span class="tb-gold">${cost}</span><span class="tb-label">ทองถาวร</span></button>
                <button class="talent-buy${can10?'':' dim'}" ${can10?`onclick="buyTalentLv('${nd.leveled}',10)"`:'disabled'} style="padding:2px 8px;"><span class="tb-gold" style="font-size:11px;">${cost10}</span><span class="tb-label">×${cnt10}</span></button>
              </div>`);
        return `<div class="talent-node ${state}">
          <div class="talent-tier">${maxed?'✓':'Lv'}</div>
          <div class="talent-info"><div class="talent-name">${nd.name} <span style="color:var(--bc);font-weight:800;">Lv.${lv}/${maxLv}</span></div><div class="talent-desc">${nd.desc} · ตอนนี้ ${tdef.fmtEff(lv)}</div></div>
          <div class="talent-act">${act}</div>
        </div>`;
      }
      const owned=hasPUpgrade(nd.id);
      const prereqId=t>0?(br.nodes[t-1].id):null;
      const buyable=!owned&&prereqOk&&pg>=nd.cost;
      const state=owned?'owned':(!prereqOk?'locked':buyable?'buyable':'tooexp');
      const act=owned
        ?`<div class="talent-owned">✓ ปลดแล้ว</div>`
        :(!prereqOk
          ?`<div class="talent-lock">🔒 ต้อง Lv.${PREREQ_LVS[t]} ก่อน</div>`
          :`<button class="talent-buy${buyable?'':' dim'}" ${buyable?`onclick="buyTalent(${nd.id},${nd.cost},${prereqId})"`:'disabled'}><span class="tb-gold">${nd.cost}</span><span class="tb-label">ทองถาวร</span></button>`);
      return `<div class="talent-node ${state}">
        <div class="talent-tier">${owned?'✓':(t+1)}</div>
        <div class="talent-info"><div class="talent-name">${nd.name}</div><div class="talent-desc">${nd.desc}</div></div>
        <div class="talent-act">${act}</div>
      </div>`;
    }).join('');
    const prog=allDone
      ?`<span class="tb-prog tb-prog-done">✓ ครบ</span>`
      :`<span class="tb-prog">${ownedCount}/${total}</span>`;
    return `<div class="talent-branch" style="--bc:${br.color};">
      <div class="talent-head" onclick="_toggleTalentBranch('${br.key}')">
        <span class="tb-icon">${br.icon}</span>
        <span class="tb-name">${br.name}</span>
        ${prog}
        <span class="tb-arr" id="tb-arr-${br.key}" style="transform:rotate(${open?90:0}deg)">›</span>
      </div>
      <div class="talent-nodes" id="tb-nodes-${br.key}" style="display:${open?'':'none'};">${nodes}</div>
    </div>`;
  }).join('');
}
function wsTab(t){
  document.getElementById('wsTabCraft').style.display=t==='craft'?'':'none';
  document.getElementById('wsTabTalent').style.display=t==='talent'?'':'none';
  document.getElementById('wsTabBtnCraft').className='ws-tab-btn'+(t==='craft'?' ws-tab-active':'');
  document.getElementById('wsTabBtnTalent').className='ws-tab-btn'+(t==='talent'?' ws-tab-active':'');
}
function openWorkshop(){ showScreen('workshop',true); wsTab('craft'); renderWorkshop(); }
function isFinalStageCleared(){
  return (loadProgress()[0]||0)>=1;
}
function _renderCraftCard(unlocked,finalCleared,gems,mats,recipe,ids){
  const {lockId,unlockedId,reqNoteId,craftBtnId}=ids;
  const lockEl=document.getElementById(lockId);
  const unlockedEl=document.getElementById(unlockedId);
  const reqNote=document.getElementById(reqNoteId);
  const craftBtn=document.getElementById(craftBtnId);
  if(!lockEl||!unlockedEl||!craftBtn) return;
  if(unlocked){
    lockEl.style.display='none';unlockedEl.style.display='block';
    craftBtn.style.display='none';if(reqNote)reqNote.style.display='none';
  } else if(finalCleared){
    lockEl.style.display='none';unlockedEl.style.display='none';
    const reqs=[
      {icon:'<span class="gico"></span>',name:'มณีวิญญาณ',have:gems,need:recipe.gems},
      {icon:MAT_ICONS[0],name:MAT_NAMES[0],have:mats[0]||0,need:recipe.mats[0]||0},
      {icon:MAT_ICONS[1],name:MAT_NAMES[1],have:mats[1]||0,need:recipe.mats[1]||0},
      {icon:MAT_ICONS[2],name:MAT_NAMES[2],have:mats[2]||0,need:recipe.mats[2]||0},
    ];
    const allMet=reqs.every(r=>r.have>=r.need);
    craftBtn.style.display='';craftBtn.disabled=!allMet;
    if(reqNote){
      reqNote.style.display='block';
      reqNote.innerHTML=reqs.map(r=>{const met=r.have>=r.need;return `<span style="color:${met?'#69f0ae':'#ef5350'};">${r.icon} ${r.need.toLocaleString()} ${r.name}</span>`;}).join('&ensp;·&ensp;');
    }
  } else {
    lockEl.style.display='block';unlockedEl.style.display='none';
    craftBtn.style.display='none';if(reqNote)reqNote.style.display='none';
  }
}
function renderWorkshop(){
  const gems=loadGems(), mats=loadMaterials();
  const finalCleared=isFinalStageCleared();
  // Void Tower card
  _renderCraftCard(isVoidUnlocked(),finalCleared,gems,mats,VOID_RECIPE,
    {lockId:'wsLockBadge',unlockedId:'wsAlreadyUnlocked',reqNoteId:'wsCraftReqNote',craftBtnId:'wsCraftBtn'});
  document.getElementById('wsRecipeBox').style.display='none';
  // Time Tower card
  _renderCraftCard(isTimeUnlocked(),finalCleared,gems,mats,TIME_RECIPE,
    {lockId:'wsTimeLockBadge',unlockedId:'wsTimeAlreadyUnlocked',reqNoteId:'wsTimeCraftReqNote',craftBtnId:'wsTimeCraftBtn'});
  // render shard exchange
  const exSection=document.getElementById('wsShardExchange');
  if(exSection) exSection.innerHTML=_renderShardExchange();
  // render persistent upgrades
  const pg=loadPGold();
  const badge=document.getElementById('wsPGoldBadge');
  if(badge) badge.innerHTML=`<span style="background:rgba(255,213,79,.15);border:1px solid rgba(255,213,79,.35);border-radius:20px;padding:2px 10px;font-size:11px;color:#ffd54f;font-weight:700;">มี ${pg.toLocaleString()} ทองถาวร</span>`;
  const grid=document.getElementById('wsPUpGrid');
  if(grid) grid.innerHTML=_renderTalentTree();
}
/* ── Shard Exchange (v3.5.5) ── */
const SHARD_C_SVG='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10,1 18,7 16,17 9,19 2,14 3,5" fill="#37474f" stroke="#1a2327" stroke-width="1" stroke-linejoin="round"/><polygon points="10,1 18,7 13,4 7,2" fill="#546e7a"/><polygon points="10,1 7,2 2,14 3,5" fill="#263238"/><polyline points="11,8 9,12 13,15" fill="none" stroke="#1a2327" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="1" x2="18" y2="7" stroke="#78909c" stroke-width="1.2" stroke-linecap="round"/></svg>';
const SHARD_EXCHANGE=[
  {shardId:'shard_c',shardIcon:SHARD_C_SVG,shardName:'เศษหินมืด',cost:10,matIdx:0},
  {shardId:'shard_r',shardIcon:'💜',shardName:'เศษแกนเวทย์',   cost:5,  matIdx:1},
  {shardId:'shard_e',shardIcon:'🌟',shardName:'เศษดวงดาว',    cost:3,  matIdx:2},
];
function exchangeShards(shardId){
  const ex=SHARD_EXCHANGE.find(e=>e.shardId===shardId);
  if(!ex) return;
  const bag=loadBag();
  const have=bag[shardId]||0;
  if(have<ex.cost){showToast('❌ '+ex.shardIcon+' ไม่พอ (ต้องการ '+ex.cost+' ชิ้น)');return;}
  bag[shardId]=have-ex.cost;
  if(!bag[shardId]) delete bag[shardId];
  saveBag(bag);
  addMaterial(ex.matIdx,1);
  const matName=MAT_NAMES[ex.matIdx];
  showToast('✅ แลก '+ex.shardIcon+' ×'+ex.cost+' → '+MAT_ICONS[ex.matIdx]+' '+matName+' ×1 สำเร็จ!');
  renderWorkshop();
}
function _renderShardExchange(){
  const bag=loadBag();
  return SHARD_EXCHANGE.map(ex=>{
    const have=bag[ex.shardId]||0;
    const canDo=have>=ex.cost;
    return `<div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,${canDo?'.15':'.06'});border-radius:10px;padding:8px 10px;">
      <div style="font-size:20px;flex-shrink:0;">${ex.shardIcon}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:11px;font-weight:700;color:${canDo?'#fff':'rgba(255,255,255,.4)'};">${ex.shardIcon} ${ex.shardName} ×${ex.cost} → ${MAT_ICONS[ex.matIdx]} ${MAT_NAMES[ex.matIdx]} ×1</div>
        <div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px;">มี ${have} ชิ้น</div>
      </div>
      <button onclick="exchangeShards('${ex.shardId}')" ${canDo?'':'disabled'} style="background:${canDo?'linear-gradient(180deg,#7e57c2,#311b92)':'rgba(255,255,255,.06)'};color:${canDo?'#fff':'rgba(255,255,255,.3)'};border:none;border-radius:8px;padding:6px 12px;font-size:11px;font-weight:700;cursor:${canDo?'pointer':'not-allowed'};">แลก</button>
    </div>`;
  }).join('');
}
function craftVoidTower(){
  if(isVoidUnlocked()||!isFinalStageCleared())return;
  const gems=loadGems(), mats=loadMaterials();
  const ok=gems>=VOID_RECIPE.gems&&(mats[0]||0)>=VOID_RECIPE.mats[0]
    &&(mats[1]||0)>=VOID_RECIPE.mats[1]&&(mats[2]||0)>=VOID_RECIPE.mats[2];
  if(!ok){ showToast('❌ ทรัพยากรไม่พอ!'); return; }
  saveGems(gems-VOID_RECIPE.gems);
  mats[0]-=VOID_RECIPE.mats[0]; mats[1]-=VOID_RECIPE.mats[1]; mats[2]-=VOID_RECIPE.mats[2];
  saveMaterials(mats); setVoidUnlocked();
  renderWorkshop(); updateMenuStats(); checkAchievements();
  // 🌑 popup ฉลองคราฟสำเร็จ (สไตล์เดียวกับหน้าจอจบด่าน)
  document.getElementById('voidCraftOverlay').style.display='flex';
}
function craftTimeTower(){
  if(isTimeUnlocked()||!isFinalStageCleared())return;
  const gems=loadGems(), mats=loadMaterials();
  const ok=gems>=TIME_RECIPE.gems&&(mats[0]||0)>=TIME_RECIPE.mats[0]
    &&(mats[1]||0)>=TIME_RECIPE.mats[1]&&(mats[2]||0)>=TIME_RECIPE.mats[2];
  if(!ok){ showToast('❌ ทรัพยากรไม่พอ!'); return; }
  saveGems(gems-TIME_RECIPE.gems);
  mats[0]-=TIME_RECIPE.mats[0]; mats[1]-=TIME_RECIPE.mats[1]; mats[2]-=TIME_RECIPE.mats[2];
  saveMaterials(mats); setTimeUnlocked();
  renderWorkshop(); updateMenuStats(); checkAchievements();
  document.getElementById('timeCraftOverlay').style.display='flex';
}
function toggleWsSkill(){
  const d=document.getElementById('wsSkillDetail');
  const a=document.getElementById('wsSkillArrow');
  if(!d||!a) return;
  const open=d.style.display!=='none';
  d.style.display=open?'none':'block';
  a.textContent=open?'▼ รายละเอียด':'▲ ซ่อน';
}
function toggleWsTimeSkill(){
  const d=document.getElementById('wsTimeSkillDetail');
  const a=document.getElementById('wsTimeSkillArrow');
  if(!d||!a) return;
  const open=d.style.display!=='none';
  d.style.display=open?'none':'block';
  a.textContent=open?'▼ รายละเอียด':'▲ ซ่อน';
}

/* ══ STORY MISSIONS ══ */
const STORY_MISSIONS=[
  // per-stage
  {id:'s0', type:'stage',si:0,  label:'ผ่านด่าน 1: Grassland 🌿',          gold:300,  gems:50,  tickets:10},
  {id:'s1', type:'stage',si:1,  label:'ผ่านด่าน 2: Dark Forest 🌲',         gold:500,  gems:80,  tickets:10},
  {id:'s2', type:'stage',si:2,  label:'ผ่านด่าน 3: Volcanic Pass 🌋',       gold:700,  gems:120, tickets:10},
  {id:'s3', type:'stage',si:3,  label:'ผ่านด่าน 4: Desert Crossing 🏜️',    gold:1000, gems:150, tickets:10},
  {id:'s4', type:'stage',si:4,  label:'ผ่านด่าน 5: Treasure Valley 💰',     gold:1200, gems:200, tickets:10},
  {id:'s5', type:'stage',si:5,  label:'ผ่านด่าน 6: Thunder Cave ⚡',        gold:1500, gems:250, tickets:10},
  {id:'s6', type:'stage',si:6,  label:'ผ่านด่าน 7: Cursed Swamp 🌿',       gold:2000, gems:300, tickets:10},
  {id:'s7', type:'stage',si:7,  label:'ผ่านด่าน 8: Dark Fortress 🏰',      gold:2500, gems:400, tickets:10},
  {id:'s8', type:'stage',si:8,  label:'ผ่านด่าน 9: Dark Throne 👿',        gold:3000, gems:500, tickets:20},
  {id:'s9', type:'stage',si:9,  label:'ผ่านด่าน 10: Dark Tower Summit 💀', gold:4000, gems:600, tickets:30},
  {id:'s10',type:'stage',si:10, label:'ผ่านด่าน 11: Shadow Remnant 🌑',   gold:5000, gems:800, tickets:50},
  // milestones
  {id:'m3',    type:'milestone',need:3,   label:'🏅 ผ่านด่าน 3 ด่าน',                  gold:1000, gems:200,  tickets:10},
  {id:'m6',    type:'milestone',need:6,   label:'🏅 ผ่านด่าน 6 ด่าน',                  gold:2000, gems:400,  tickets:10},
  {id:'mall',  type:'milestone',need:11,  label:'🏆 ผ่านครบทุกด่าน!',                  gold:5000, gems:1000, tickets:50},
  {id:'mall3s',type:'milestone3s',need:11,label:'🌟 ผ่านทุกด่าน 3 ดาว!',              gold:5000, gems:1500, tickets:50},
];
function loadStoryClaimed(){try{return new Set(JSON.parse(localStorage.getItem('tq_storyclaimed')||'[]'));}catch{return new Set();}}
function saveStoryClaimed(s){localStorage.setItem('tq_storyclaimed',JSON.stringify([...s]));}

function claimStoryMission(id){
  const m=STORY_MISSIONS.find(x=>x.id===id); if(!m) return;
  const claimed=loadStoryClaimed(); if(claimed.has(id)) return;
  // verify unlock
  const p=loadProgress();
  const cleared=Object.keys(p).filter(k=>(p[k]||0)>=1).length;
  const all3s=Object.keys(p).filter(k=>(p[k]||0)>=3).length;
  if(m.type==='stage'&&!(p[m.si]>=1)) return;
  if(m.type==='milestone'&&cleared<m.need) return;
  if(m.type==='milestone3s'&&all3s<m.need) return;
  // give rewards
  if(m.gold){const g=Number(localStorage.getItem('tq_pgold')||0);localStorage.setItem('tq_pgold',g+m.gold);}
  if(m.gems){const g=Number(localStorage.getItem('tq_gems')||0);localStorage.setItem('tq_gems',g+m.gems);}
  if(m.tickets){const t=Number(localStorage.getItem('tq_tickets')||0);localStorage.setItem('tq_tickets',t+m.tickets);}
  claimed.add(id); saveStoryClaimed(claimed);
  if(window.cloudSave) cloudSave();
  showToast(`🎁 รับแล้ว! +💰${m.gold||0} +<span class="gico"></span>${m.gems||0} +🎫${m.tickets||0}`);
  renderStoryMissions(); updateMenuStats();
}

function renderStoryMissions(){
  const list=document.getElementById('storyMissionList'); if(!list) return;
  const p=loadProgress();
  const cleared=Object.keys(p).filter(k=>(p[k]||0)>=1).length;
  const all3s=Object.keys(p).filter(k=>(p[k]||0)>=3).length;
  const claimed=loadStoryClaimed();
  // split into groups
  const stageMissions=STORY_MISSIONS.filter(m=>m.type==='stage');
  const milestones=STORY_MISSIONS.filter(m=>m.type!=='stage');
  function _renderGroup(missions,groupTitle,groupIcon){
    const rows=missions.map(m=>{
      const done=m.type==='stage'?(p[m.si]>=1):m.type==='milestone3s'?(all3s>=m.need):(cleared>=m.need);
      const isClaimed=claimed.has(m.id);
      const canClaim=done&&!isClaimed;
      // progress
      let pct=0,prog='',goal='';
      if(m.type==='stage'){pct=done?100:0;prog=done?'1':'0';goal='1';}
      else if(m.type==='milestone'){pct=Math.min(100,Math.round(cleared/m.need*100));prog=Math.min(cleared,m.need);goal=m.need;}
      else{pct=Math.min(100,Math.round(all3s/m.need*100));prog=Math.min(all3s,m.need);goal=m.need;}
      const barCol=isClaimed?'#616161':done?'#69f0ae':'#42a5f5';
      const icon=m.type==='stage'?(STAGES[m.si]?.icon||'📋'):m.type==='milestone3s'?'🌟':'🏅';
      const btn=isClaimed
        ?`<button disabled style="background:rgba(255,255,255,.06);color:rgba(255,255,255,.3);border:none;border-radius:8px;padding:7px 12px;font-size:11px;font-weight:700;flex-shrink:0;">✅ รับแล้ว</button>`
        :canClaim
          ?`<button onclick="claimStoryMission('${m.id}')" style="background:linear-gradient(180deg,#ffd24d,#ff9800);color:#1a0a00;border:none;border-radius:8px;padding:7px 14px;font-size:11px;font-weight:900;cursor:pointer;flex-shrink:0;box-shadow:0 0 10px rgba(255,152,0,.5);">🎁 รับ!</button>`
          :`<button disabled style="background:rgba(255,255,255,.06);color:rgba(255,255,255,.25);border:none;border-radius:8px;padding:7px 12px;font-size:11px;font-weight:700;flex-shrink:0;">🔒</button>`;
      const rwChips=`<span style="font-size:9px;background:rgba(255,200,0,.1);border:1px solid rgba(255,200,0,.2);border-radius:6px;padding:1px 5px;color:#ffd24d;">💰${m.gold}</span> <span style="font-size:9px;background:rgba(100,181,246,.1);border:1px solid rgba(100,181,246,.2);border-radius:6px;padding:1px 5px;color:#90caf9;"><span class="gico"></span>${m.gems}</span> <span style="font-size:9px;background:rgba(129,212,250,.1);border:1px solid rgba(129,212,250,.2);border-radius:6px;padding:1px 5px;color:#80deea;">🎫${m.tickets}</span>`;
      return `<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,${canClaim?'.18':isClaimed?'.05':'.07'});border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;${isClaimed?'opacity:.55':''}">
        <div style="font-size:22px;flex-shrink:0;width:32px;text-align:center;">${icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:11px;font-weight:700;color:${isClaimed?'rgba(255,255,255,.4)':'#e8f5e9'};margin-bottom:4px;">${m.label}</div>
          <div style="height:4px;background:rgba(255,255,255,.1);border-radius:3px;margin-bottom:4px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${barCol};border-radius:3px;transition:width .4s;"></div></div>
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">${rwChips}<span style="font-size:9px;color:rgba(255,255,255,.3);margin-left:2px;">${prog}/${goal}</span></div>
        </div>
        ${btn}
      </div>`;
    }).join('');
    return `<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.35);letter-spacing:.5px;text-transform:uppercase;margin:8px 0 4px 2px;">${groupIcon} ${groupTitle}</div>${rows}`;
  }
  list.innerHTML=_renderGroup(stageMissions,'ภารกิจด่าน','🗺️')+_renderGroup(milestones,'ไมล์สโตน','🏆');
}

let _dailyTab=0;
function switchDailyTab(i){
  _dailyTab=i;
  document.getElementById('dqt0').classList.toggle('active',i===0);
  document.getElementById('dqt1').classList.toggle('active',i===1);
  document.getElementById('dailyTabDaily').style.display=i===0?'':'none';
  document.getElementById('dailyTabStory').style.display=i===1?'':'none';
  if(i===1) renderStoryMissions();
}

/* ══ DAILY (LOGIN + QUESTS) — v3.6.0 ══ */
function openDaily(){showScreen('daily',true);_dailyTab=0;switchDailyTab(0);renderDaily();}
function renderDaily(){
  const st=getLoginState();
  // 7-day login strip
  const strip=document.getElementById('dailyLoginStrip');
  if(strip){
    strip.innerHTML=LOGIN_REWARDS.map((rw,i)=>{
      // determine cell state relative to today's claimable day (st.dayIndex)
      let state; // 'claimed' | 'today' | 'locked'
      if(st.claimedToday) state=i<=st.dayIndex?'claimed':'locked';
      else state=i<st.dayIndex?'claimed':(i===st.dayIndex?'today':'locked');
      const border=state==='today'?'#69f0ae':state==='claimed'?'rgba(105,240,174,.35)':'rgba(255,255,255,.08)';
      const bg=state==='today'?'rgba(105,240,174,.14)':state==='claimed'?'rgba(105,240,174,.05)':'rgba(255,255,255,.03)';
      const opa=state==='locked'?'.5':'1';
      const tick=state==='claimed'?'<div style="position:absolute;top:2px;right:4px;font-size:10px;color:#69f0ae;">✓</div>':'';
      return `<div style="position:relative;background:${bg};border:1.5px solid ${border};border-radius:10px;padding:8px 4px;text-align:center;opacity:${opa};${state==='today'?'box-shadow:0 0 12px rgba(105,240,174,.4);':''}">
        ${tick}
        <div style="font-size:9px;color:rgba(255,255,255,.5);">วันที่ ${i+1}</div>
        <div style="font-size:22px;margin:2px 0;">${rw.icon}</div>
        <div style="font-size:8px;color:${state==='today'?'#a5d6a7':'rgba(255,255,255,.45)'};line-height:1.25;min-height:20px;">${rw.label}</div>
      </div>`;
    }).join('');
  }
  // claim button
  const cb=document.getElementById('dailyClaimBtn');
  if(cb){
    if(st.claimedToday){
      cb.disabled=true; cb.textContent='✅ รับแล้ววันนี้ (สตรีค '+st.streak+' วัน)';
      cb.style.opacity='.55';
    } else {
      cb.disabled=false; cb.style.opacity='1';
      cb.textContent='🎁 รับรางวัลวันนี้ ('+LOGIN_REWARDS[st.dayIndex].label+')';
    }
  }
  // quests
  const ql=document.getElementById('dailyQuestList');
  if(ql){
    const quests=getDailyQuests();
    ql.innerHTML=quests.map(q=>{
      const pct=Math.min(100,Math.round(q.prog/q.goal*100));
      const ready=q.done&&!q.claimed;
      const barCol=q.claimed?'#9e9e9e':q.done?'#69f0ae':'#42a5f5';
      const btn=q.claimed
        ?`<button disabled style="background:rgba(255,255,255,.06);color:rgba(255,255,255,.3);border:none;border-radius:8px;padding:7px 12px;font-size:11px;font-weight:700;flex-shrink:0;">✅ รับแล้ว</button>`
        :`<button onclick="_claimQuestUI('${q.id}')" ${ready?'':'disabled'} style="background:${ready?'linear-gradient(180deg,#43a047,#1b5e20)':'rgba(255,255,255,.06)'};color:${ready?'#fff':'rgba(255,255,255,.3)'};border:none;border-radius:8px;padding:7px 12px;font-size:11px;font-weight:700;cursor:${ready?'pointer':'not-allowed'};flex-shrink:0;${ready?'box-shadow:0 0 10px rgba(67,160,71,.6);':''}">${q.rwTxt} · 🎫1</button>`;
      return `<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,${ready?'.18':'.07'});border-radius:10px;padding:9px 11px;display:flex;align-items:center;gap:10px;">
        <div style="font-size:20px;flex-shrink:0;">${q.icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:11px;font-weight:700;color:${q.claimed?'rgba(255,255,255,.4)':'#fff'};">${q.desc}</div>
          <div style="height:5px;background:rgba(255,255,255,.1);border-radius:3px;margin-top:5px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:${barCol};border-radius:3px;transition:width .3s;"></div>
          </div>
          <div style="font-size:9px;color:rgba(255,255,255,.45);margin-top:3px;">${q.prog} / ${q.goal}</div>
        </div>
        ${btn}
      </div>`;
    }).join('');
  }
}
function _claimDailyLoginUI(){
  const res=claimDailyLogin();
  if(!res){showToast('✅ รับรางวัลวันนี้แล้ว');return;}
  showToast('🎁 รับ '+res.reward.icon+' '+res.reward.label+'! (สตรีค '+res.streak+' วัน)');
  renderDaily(); updateMenuStats();
}
function _claimQuestUI(id){
  const q=claimDailyQuest(id);
  if(!q){showToast('❌ ยังทำเควสต์ไม่สำเร็จ');return;}
  showToast('✅ '+q.icon+' '+q.desc+' สำเร็จ! รับ '+q.rwTxt+' · 🎫1');
  renderDaily(); updateMenuStats();
}
function _updateDailyBadge(){
  const b=document.getElementById('dailyBadge');
  if(b) b.style.display=(typeof dailyHasClaimable==='function'&&dailyHasClaimable())?'block':'none';
}

/* ══ STAGE SELECT ══ */
let currentAct=1; // 1 or 2
function openStageSelect(act){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  G=null;paused=false;
  if(act) currentAct=act;
  showScreen('stagesel',true);
  renderStageSelect();
}
function _act2Unlocked(){
  return (loadProgress()[10]||0)>=1;
}
function renderStageSelect(){
  const p=loadProgress();
  const act2ok=_act2Unlocked();
  // act toggle header — build with string concat to avoid deep nesting in template literal
  const _a1sel=currentAct===1;const _a2sel=currentAct===2;
  const _a1bc=_a1sel?'#69f0ae':'#333';const _a1bg=_a1sel?'rgba(105,240,174,.15)':'rgba(255,255,255,.04)';const _a1col=_a1sel?'#69f0ae':'#666';
  const _a2bc=_a2sel?'#ff6e40':'#333';const _a2bg=_a2sel?'rgba(255,110,64,.15)':'rgba(255,255,255,.04)';const _a2col=act2ok?(_a2sel?'#ff6e40':'#777'):'#444';
  const _a2click=act2ok?'openStageSelect(2)':'void(0)';const _a2cursor=act2ok?'pointer':'not-allowed';
  const _a2label=act2ok?'ด่าน 12-21':'ล็อก: ผ่านด่าน 11 ก่อน';
  const toggleHtml='<div style="display:flex;gap:8px;padding:12px 16px 4px;align-items:center;">'
    +'<button onclick="openStageSelect(1)" style="flex:1;padding:10px 0;border-radius:10px;border:2px solid '+_a1bc+';background:'+_a1bg+';color:'+_a1col+';font-weight:900;font-size:13px;cursor:pointer;">'
    +'⚔️ บทที่ 1<br><span style="font-size:10px;font-weight:400">ด่าน 1-11</span></button>'
    +'<button onclick="'+_a2click+'" style="flex:1;padding:10px 0;border-radius:10px;border:2px solid '+_a2bc+';background:'+_a2bg+';color:'+_a2col+';font-weight:900;font-size:13px;cursor:'+_a2cursor+';">'
    +'🌍 บทที่ 2<br><span style="font-size:10px;font-weight:400">'+_a2label+'</span></button>'
    +'</div>';
  let html='';
  const actStages=STAGES.filter(s=>(currentAct===1?(s.act||1)===1:(s.act||1)===2));
  actStages.forEach((s,_idx)=>{
    const si=STAGES.indexOf(s);
    if(s.comingSoon){
      html+=`<div style="background:rgba(255,255,255,.03);border:2px dashed #2a3a2a;border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:14px;opacity:.4;">
        <div style="font-size:36px;">${s.icon}</div>
        <div><div style="font-size:15px;font-weight:900;color:#555;">Stage ${s.id+1}: ${s.name}</div>
        <div style="font-size:11px;color:#444;margin-top:4px;">🔒 Coming Soon...</div></div>
      </div>`;
      return;
    }
    const unlocked=isStageUnlocked(si);
    const stars=p[si]||0;
    const played=p[si]!==undefined;
    const cleared=stars>=1; /* ผ่านด่านแล้วอย่างน้อย 1 ดาว */
    /* enemy icons: แสดงจริงถ้าผ่านแล้ว ไม่งั้นเป็น ? เงาดำ */
    const enemyIcons=s.enemyTypes.map(e=>
      cleared
        ? `<span>${EICONS[e]}</span>`
        : `<span style="filter:brightness(0);opacity:.55">👾</span>`
    ).join('');
    const starStr=stars>0?'★'.repeat(stars)+'☆'.repeat(3-stars):(played?'☆☆☆':'');
    const starColor=stars>0?'#ffe234':'#555';
    /* 🎁 ป้ายกล่องรางวัล + กรอบเรืองแสงตามระดับดาว (สไตล์เดียวกับหน้าจอจบด่าน) */
    const tierClass=stars>=3?' tier-gold':stars===2?' tier-silver':stars===1?' tier-bronze':'';
    const chestIcon=stars>=3?'👑':stars===2?'🎁':stars===1?'📦':'';
    const starPct=Math.round(stars/3*100);
    const starPips=[1,2,3].map(n=>`<span class="stage-star-pip${stars>=n?'':' empty'}">⭐</span>`).join('');
    const rewardRows=unlocked?[10,20,30].map((g,i)=>{const got=stars>i;return`<span class="srw${got?' srw-got':''}">${'★'.repeat(i+1)} <span class="srw-gem"><span class="gico"></span>${g}</span>${got?' ✓':''}</span>`;}).join(''):'';
    // 🌦️ weather pill
    let _wPill='';
    if(unlocked){
      if(s.weatherMode==='fixed'){
        const _fw=WEATHERS.find(w=>w.id===s.weatherFixed);
        if(_fw) _wPill=`<span class="stage-pill pill-weather pill-weather-fixed" data-tip="${_fw.icon} ${_fw.name} (ถาวรตลอด stage)\n${_fw.desc}">${_fw.icon} ${_fw.name} 🔒</span>`;
      } else if(s.weatherMode==='permanent'){
        const _fw=WEATHERS.find(w=>w.id===s.weatherFixed);
        if(_fw){
          _wPill=`<span class="stage-pill pill-weather pill-weather-fixed" data-tip="${_fw.icon} ${_fw.name} (ถาวร เปลี่ยนทุกคลื่น)\n${_fw.desc}">${_fw.icon} ${_fw.name} 🔄</span>`;
        } else {
          const _pool=(STAGE_WEATHER[Math.min(s.id,STAGE_WEATHER.length-1)]||[]);
          const _wObjs=_pool.map(id=>WEATHERS.find(x=>x.id===id)).filter(Boolean);
          const _icons=_wObjs.slice(0,5).map(w=>w.icon).join('');
          const _tip='สภาพอากาศถาวร เปลี่ยนสุ่มทุกคลื่น\n'+_wObjs.map(w=>`${w.icon} ${w.name}: ${w.desc}`).join('\n');
          _wPill=`<span class="stage-pill pill-weather pill-weather-fixed" data-tip="${_tip}">🌪️ ${_icons} 🔄</span>`;
        }
      } else if(s.weatherChance>0||s.weatherChance===undefined){
        const _pool=(STAGE_WEATHER[Math.min(s.id,STAGE_WEATHER.length-1)]||[]);
        if(_pool.length>0){
          const _wObjs=_pool.map(id=>WEATHERS.find(x=>x.id===id)).filter(Boolean);
          const _icons=_wObjs.map(w=>w.icon).join('');
          const _chance=s.weatherChance!=null?Math.round(s.weatherChance*100):65;
          const _tip=`โอกาสอากาศแปรปรวน ${_chance}%\n`+_wObjs.map(w=>`${w.icon} ${w.name}: ${w.desc}`).join('\n');
          _wPill=`<span class="stage-pill pill-weather" data-tip="${_tip}">🌦️ ${_icons} <span style="opacity:.7;font-size:9px;">${_chance}%</span></span>`;
        }
      }
    }
    html+=`<div class="stage-card${unlocked?'':' locked'}${tierClass}" onclick="${unlocked?'startStage('+si+')':'void(0)'}">
      <div class="stage-icon">${s.icon}</div>
      <div class="stage-info">
        <div class="stage-name">ด่าน ${s.id+1}: ${s.name}</div>
        <div class="stage-star-bar">
          ${starPips}
          <div class="stage-star-bar-track"><div class="stage-star-bar-fill${stars>=3?' full':''}" style="width:${starPct}%"></div></div>
        </div>
        <div class="stage-meta">
          <span class="stage-pill pill-wave">🌊 ${s.waves} คลื่น</span>
          <span class="stage-pill pill-enemy">${enemyIcons} ${cleared?'ศัตรู':'???'}</span>
          <span class="stage-pill pill-unlock">🏰 ${s.unlockedTowers.length} ป้อม</span>
          ${_wPill}
        </div>
      </div>
      <div class="stage-right">
        ${unlocked?`<div class="stage-rewards">${rewardRows}</div>`:''}
        ${unlocked?'<div class="stage-arrow">›</div>':'<div class="stage-lock-icon">🔒</div>'}
      </div>
    </div>`;
  });
  document.getElementById('ssBody').innerHTML=toggleHtml+html;
}

function startStage(si){
  // show story screen first if stage has story text
  const s=STAGES[si];
  pendingStageIndex=si;
  stageMaxTowers=s.maxTowers||99;
  if(s.story){
    showStoryScreen(si);
  } else {
    showTowerSelection(si);
  }
}
function _doStartStage(si){
  setStage(si);
  showScreen('gp',true);
  _gpRectCache=null; // invalidate on new game start
  // BUG FIX: get fresh canvas reference each time
  cv=document.getElementById('cv');
  ctx=cv.getContext('2d');
  cv.width=COLS*CS; cv.height=ROWS*CS;
  // BUG FIX: remove before adding to prevent duplicate listeners
  cv.removeEventListener('click',onCanvasClick);
  cv.addEventListener('click',onCanvasClick);
  cv.removeEventListener('mousemove',onCanvasMove);
  cv.addEventListener('mousemove',onCanvasMove);
  cv.removeEventListener('pointerleave',onCanvasLeave);
  cv.addEventListener('pointerleave',onCanvasLeave);
  // Mobile: ป้องกัน scroll เมื่อ touch บน canvas
  cv.removeEventListener('touchstart',_onCvTouchStart);
  cv.addEventListener('touchstart',_onCvTouchStart,{passive:false});
  cv.removeEventListener('pointerdown',onCanvasPointerDown);
  cv.addEventListener('pointerdown',onCanvasPointerDown);
  initGame();
  // 🌳 apply talent tree (gold/HP/dmg/goldMult) — sets G.dmgBuff & G.goldMult
  applyTalents();
  // 🎒 consume active buff from bag (stacks on top of talents)
  const _abid=consumeActiveBuff();
  if(_abid==='gold_pot'){G.gold+=100;}
  else if(_abid==='hp_pot'){G.maxHp+=3;G.hp+=3;}
  else if(_abid==='dmg_pot'){G.dmgBuff*=1.1;}
  updateHUD();
  initTutorial();
}

/* ══ TUTORIAL SYSTEM ══ */
let _tutStep=-1,_tutIv=null,_tutResizeBound=false;
/* BUG FIX: tutorial used fixed px offsets that broke on scaled/responsive canvases
   (overlay would spill off its target area on narrow/tall viewports).
   Now positions are computed live from the actual DOM elements' bounding boxes,
   relative to #gp, so it always lines up regardless of screen size. */
const _TUT_STEPS=[
  // === ด่าน 1: Grassland ===
  {stage:0, title:'ยินดีต้อนรับ! 🏰',
   msg:'ปกป้องปราสาทจากศัตรู\nที่เดินตามเส้นทางมาเรื่อยๆ\nโดยวางป้อมปราการสกัดไว้',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:0, title:'เลือกป้อม',
   msg:'เลือกป้อมจากแถบด้านล่าง\nแตะ 💣 Cannon เพื่อเริ่ม',
   target:'#tb0', boxAnchor:'above', arrowIcon:'⬇️', cond:G=>G.selTwr>=0},
  {stage:0, title:'วางป้อม',
   msg:'แตะบนแผนที่\nเพื่อวางป้อม!',
   target:'#cv', boxAnchor:'top-right', arrowIcon:'👆', cond:G=>G.towers.length>0},
  {stage:0, title:'ดูข้อมูลป้อม',
   msg:'แตะที่ป้อมที่วางไว้\nเพื่อดูสถานะและอัปเกรด\nดาเมจ/ระยะ/ความเร็วยิง',
   target:'#cv', boxAnchor:'top-right', arrowIcon:'👆', cond:()=>!!_popupTw},
  {stage:0, title:'เหรียญทอง 💰',
   msg:'กำจัดศัตรูเพื่อรับทอง\nใช้ซื้อป้อมใหม่\nหรืออัปเกรดป้อมที่มี',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:0, title:'ส่งศัตรูมา!',
   msg:'กด ▶ Send Wave\nเพื่อเริ่มการต่อสู้!',
   target:'#waveBtn', boxAnchor:'above', arrowIcon:'⬇️', cond:G=>G.wave>=1},
  {stage:0, title:'🎉 เยี่ยมมาก!',
   msg:'ปกป้องปราสาท\nอย่าให้ศัตรูผ่าน!\nไปกันต่อในด่านถัดไป',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  // === ด่าน 2: Dark Forest ===
  {stage:1, title:'ผสมป้อมหลายชนิด',
   msg:'แต่ละป้อมมีบทบาทต่างกัน\n(สาด/หน่วง/เป้าเดี่ยว/บัฟ)\nลองผสมกันให้เหมาะกับศัตรู',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:1, title:'✨ รวมป้อม (Star Merge)',
   msg:'ลากป้อมชนิด/★เดียวกันทับกัน\nเพื่อรวมเป็น★สูงขึ้น (สูงสุด★4)\nจะได้แต้มสกิลฟรีจัดสรรใหม่ตามดาว',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:1, title:'ระบบ Awaken ⚡',
   msg:'รวมป้อมให้ถึง★3\nแล้วจ่ายทองเพื่อ "ปลุกพลัง"\nรับพลังพิเศษ แต่ป้อมจะล็อกดาวตลอดไป',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:1, title:'สภาพอากาศ 🌦️',
   msg:'สภาพอากาศจะเปลี่ยนเป็นระยะ\nและส่งผลต่อป้อม/ศัตรู\nคอยสังเกตไอคอนด้านบนจอ',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:1, title:'🎁 ตู้กาชา',
   msg:'ใช้เจม💎 หมุนตู้กาชาจากเมนูหลัก\nรับโปชั่น เจม และการ์ดสกิล\nการ์ดสกิลเพิ่มพลังพิเศษให้ป้อม',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:1, title:'🃏 การ์ดสกิล',
   msg:'เลือกการ์ดสกิลก่อนเริ่มแต่ละด่าน\nจากหน้าเลือกป้อม → แถบ "สกิล"\nเช่น ☄️ Meteor ทำ AoE ใหญ่ ❄️ Freeze หน่วงศัตรู',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  // === ด่าน 3: Volcanic Pass ===
  {stage:2, title:'วัสดุพิเศษ 🪨',
   msg:'เคลียร์เวฟมีโอกาสได้วัสดุพิเศษ\nนำไปใช้ใน 🛠️ Workshop\nเพื่อปลดล็อกป้อมใหม่ถาวร',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:2, title:'Codex & ความสำเร็จ 📖',
   msg:'เปิดเมนูหลักเพื่อดู Codex\nข้อมูลป้อม/ศัตรู\nและภารกิจความสำเร็จต่างๆ',
   target:null, boxAnchor:'center', arrowIcon:'', click:true},
  {stage:2, title:'พร้อมลุยแล้ว! 🔥',
   msg:'เมื่อผ่านด่านเนื้อเรื่องครบ\nลองโหมด Endgame\nเพื่อความท้าทายไม่จำกัด!',
   target:null, boxAnchor:'center', arrowIcon:'', click:true, final:true},
];
function initTutorial(){
  if(localStorage.getItem('tq_tut_done')) return;
  let idx=parseInt(localStorage.getItem('tq_tut_idx')||'0',10);
  while(idx<_TUT_STEPS.length&&_TUT_STEPS[idx].stage!==currentStage.id) idx++;
  if(idx>=_TUT_STEPS.length){ localStorage.setItem('tq_tut_done','1'); _tutStep=-1; return; }
  _tutStep=idx; _renderTut();
  if(_tutIv) clearInterval(_tutIv);
  _tutIv=setInterval(()=>{
    if(!G||_tutStep<0) return;
    const s=_TUT_STEPS[_tutStep];
    if(s.cond&&s.cond(G)) _tutAdvanceStep();
  },250);
  if(!_tutResizeBound){
    _tutResizeBound=true;
    window.addEventListener('resize',()=>{ if(_tutStep>=0) _renderTut(); });
  }
}
function _tutAdvanceStep(){
  if(_tutStep<0) return;
  const s=_TUT_STEPS[_tutStep];
  if(s.final){ skipTutorial(); return; }
  const next=_tutStep+1;
  localStorage.setItem('tq_tut_idx',String(next));
  if(next>=_TUT_STEPS.length){ localStorage.setItem('tq_tut_done','1'); skipTutorial(); return; }
  if(_TUT_STEPS[next].stage!==currentStage.id){
    _tutStep=-1;
    if(_tutIv){clearInterval(_tutIv);_tutIv=null;}
    const el=document.getElementById('tutOverlay');
    if(el) el.style.display='none';
    return;
  }
  _tutStep=next; _renderTut();
}
/* get an element's box relative to #gp (the positioned ancestor of #tutOverlay) */
function _tutRectRel(sel){
  const gp=document.getElementById('gp');
  const el=typeof sel==='string'?document.querySelector(sel):sel;
  if(!gp||!el) return null;
  const g=gp.getBoundingClientRect(), r=el.getBoundingClientRect();
  return {top:r.top-g.top, left:r.left-g.left, right:g.right-r.right, bottom:g.bottom-r.bottom, width:r.width, height:r.height};
}
function _renderTut(){
  const el=document.getElementById('tutOverlay'); if(!el) return;
  if(_tutStep<0){el.style.display='none';return;}
  el.style.display='block';
  const s=_TUT_STEPS[_tutStep];
  let hl='display:none;', arrow='display:none;', box='top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;';
  const rect=s.target?_tutRectRel(s.target):null;
  if(rect){
    const pad=6;
    hl=`top:${rect.top-pad}px;left:${rect.left-pad}px;width:${rect.width+pad*2}px;height:${rect.height+pad*2}px;`;
    if(s.boxAnchor==='above'){
      arrow=`top:${rect.top-40}px;left:${rect.left+rect.width/2}px;transform:translateX(-50%);`;
      box=`top:${Math.max(8,rect.top-118)}px;left:${Math.min(Math.max(8,rect.left+rect.width/2-95),document.getElementById('gp').clientWidth-198)}px;`;
    } else if(s.boxAnchor==='top-right'){
      arrow=`top:${rect.top+rect.height*0.4}px;left:${rect.left+rect.width*0.46}px;`;
      box=`top:${rect.top+10}px;right:10px;`;
    }
  }
  el.innerHTML=`
    <div class="tut-highlight" style="${hl}"></div>
    <div class="tut-arrow" style="${arrow}">${s.arrowIcon}</div>
    <div class="tut-box" style="${box}">
      <div class="tut-title">${s.title}</div>
      ${s.msg.replace(/\n/g,'<br>')}
      ${s.click?`<div class="tut-next" onclick="_tutAdvanceStep()">${s.final?'🎮 เริ่มเล่น':'ต่อไป ▶'}</div>`:''}
    </div>
    <div class="tut-skip" onclick="skipTutorial()">ข้าม ✕</div>`;
}
function skipTutorial(){
  _tutStep=-1;
  if(_tutIv){clearInterval(_tutIv);_tutIv=null;}
  localStorage.setItem('tq_tut_done','1');
  const el=document.getElementById('tutOverlay');
  if(el) el.style.display='none';
}

/* ══ MENU TOUR ══ */
let _tourStep=-1;
const MENU_TOUR_STEPS=[
  {screen:'mm',target:null,anchor:'center',
   title:'🏰 ยินดีต้อนรับสู่ Tower Quest!',
   msg:'ขอแนะนำเมนูและระบบต่างๆ ในเกม\nกด "ต่อไป" เพื่อเดินทัวร์'},
  {screen:'mm',target:'#startBtn',anchor:'above',
   title:'⚔️ โหมดเนื้อเรื่อง',
   msg:'เล่นผ่าน 21 ด่าน (2 Act) พร้อมเนื้อเรื่อง\nปลดล็อกป้อมใหม่และ Awaken\nแนะนำให้เริ่มที่นี่!'},
  {screen:'mm',target:'#egMenuBtn',anchor:'above',
   title:'🔥 เอนด์เกม',
   msg:'โหมดเอาตัวรอดไม่จำกัดเวฟ\nผ่านเวฟรับวัสดุ + Soul Gems\nนำไป Craft ป้อมใหม่ใน Workshop!'},
  {screen:'mm',target:'.mm-resource-bar',anchor:'below',
   title:'💰 ทรัพยากร (ทอง + เจม)',
   msg:'ทอง💰 ซื้อ/อัปเกรดป้อมในเกม\nเจม<span class="gico"></span> ใช้ใน Workshop และกาชา\nกดแถบนี้เพื่อเปิด Workshop'},
  {screen:'workshop',open:'openWorkshop',target:'#workshopNavBtn',anchor:'above',
   title:'🛠️ เวิร์กชอป',
   msg:'สะสมวัสดุจาก Endgame\nนำมา Craft ปลดล็อกป้อมใหม่\nและอัปเกรด Awaken ป้อม'},
  {screen:'gacha',open:'openGacha',target:'#gachaNavBtn',anchor:'above',
   title:'🎁 กาชา',
   msg:'ใช้เจม<span class="gico"></span> หมุนตู้รางวัล\nรับโปชั่น เจม การ์ดสกิล\nมีตู้ปกติ + ตู้การ์ดสกิลพิเศษ'},
  {screen:'bag',open:'openBag',target:'#bagNavBtn',anchor:'above',
   title:'🎒 กระเป๋า',
   msg:'เก็บไอเทมและการ์ดสกิล\nการ์ดสกิลใช้ระหว่างเล่น\nเพิ่มพลังพิเศษให้ป้อม'},
  {screen:'casino',open:'openCasino',target:'#casinoNavBtn',anchor:'above',
   title:'🎰 คาสิโน',
   msg:'ใช้ทองพิเศษ (PG) หมุนสล็อต\nโอกาสรับเจม ตั๋ว ทอง\nPG หาได้จากการเล่น Endgame'},
  {screen:'leaderboard',open:'openLeaderboard',target:'#lbNavBtn',anchor:'above',
   title:'🏆 อันดับ',
   msg:'อันดับ Endgame แบบ Real-time\nทั้งของตัวเองและผู้เล่นอื่น\nอันดับเซิร์ฟ + สถิติส่วนตัว'},
  {screen:'daily',open:'openDaily',target:'#dailyNavBtn',anchor:'below',
   title:'📅 ภารกิจ',
   msg:'รับรางวัล Login ประจำวัน\nทำภารกิจรับเจม/ไอเทม\nอย่าลืมเช็คอินทุกวัน!'},
  {screen:'codex',open:'openCodex',target:'#codexNavBtn',anchor:'below',
   title:'📖 สารานุกรม',
   msg:'ข้อมูลป้อม + ศัตรูทุกชนิด\nรวมถึงภารกิจความสำเร็จ\nสะสมครบรับรางวัลพิเศษ'},
  {screen:'profile',open:'openProfile',target:'#tourStartBtn',anchor:'above',
   title:'👤 โปรไฟล์',
   msg:'ตั้งชื่อ + เลือก Avatar ในเกม\nLogin Google เพื่อ sync ข้ามเครื่อง\nข้อมูลไม่หายแม้เปลี่ยนอุปกรณ์'},
  {screen:'mm',target:null,anchor:'center',
   title:'🎮 พร้อมออกรบแล้ว!',
   msg:'รู้จักเมนูทั้งหมดแล้ว\nกด ⚔️ โหมดเนื้อเรื่อง เพื่อเริ่ม\nขอให้สนุกกับการเล่น!', final:true},
];
function startMenuTour(){
  showScreen('mm',true);
  localStorage.setItem('tq_menutour_done','1');
  _tourStep=0;
  _renderTour();
}
function _tourNext(){
  if(_tourStep<0) return;
  if(MENU_TOUR_STEPS[_tourStep].final){ endMenuTour(); return; }
  _tourStep++;
  if(_tourStep>=MENU_TOUR_STEPS.length){ endMenuTour(); return; }
  const ns=MENU_TOUR_STEPS[_tourStep];
  if(ns.open&&typeof window[ns.open]==='function') window[ns.open]();
  else if(ns.screen==='mm') showScreen('mm',true);
  setTimeout(_renderTour,100);
}
function endMenuTour(){
  _tourStep=-1;
  const el=document.getElementById('tourOverlay');
  if(el){el.style.display='none';el.innerHTML='';}
  showScreen('mm',true);
}
function _renderTour(){
  const el=document.getElementById('tourOverlay'); if(!el) return;
  if(_tourStep<0){el.style.display='none';return;}
  el.style.display='block';
  const s=MENU_TOUR_STEPS[_tourStep];
  const total=MENU_TOUR_STEPS.length;
  const tEl=s.target?document.querySelector(s.target):null;
  let hlStyle='display:none;', boxStyle='top:50%;left:50%;transform:translate(-50%,-50%);width:240px;', arrowStyle='display:none;', arrowTxt='';
  if(tEl){
    const r=tEl.getBoundingClientRect(), pad=6, bw=230, bh=190;
    hlStyle=`top:${r.top-pad}px;left:${r.left-pad}px;width:${r.width+pad*2}px;height:${r.height+pad*2}px;`;
    const bx=Math.min(Math.max(8,r.left+r.width/2-bw/2),window.innerWidth-bw-8);
    const spaceAbove=r.top-pad-12;
    const spaceBelow=window.innerHeight-(r.bottom+pad+12);
    // ถ้าที่ว่างด้านบนพอ → แสดงบน; ไม่พอ → แสดงล่าง; ไม่พอทั้งคู่ → กลางจอ
    if(spaceAbove>=bh){
      const by=r.top-pad-12-bh;
      boxStyle=`top:${by}px;left:${bx}px;width:${bw}px;`;
      arrowTxt='⬇️'; arrowStyle=`top:${r.top-pad-26}px;left:${r.left+r.width/2}px;transform:translateX(-50%);`;
    } else if(spaceBelow>=bh){
      const by=r.bottom+pad+12;
      boxStyle=`top:${by}px;left:${bx}px;width:${bw}px;`;
      arrowTxt='⬆️'; arrowStyle=`top:${r.bottom+pad+2}px;left:${r.left+r.width/2}px;transform:translateX(-50%);`;
    } else {
      boxStyle=`top:50%;left:50%;transform:translate(-50%,-50%);width:${bw}px;`;
    }
  }
  el.innerHTML=`
    <div style="position:fixed;inset:0;background:rgba(0,0,0,.5);pointer-events:auto;" onclick=""></div>
    <div class="tut-highlight" style="position:fixed;border-radius:10px;${hlStyle}"></div>
    <div style="position:fixed;font-size:18px;pointer-events:none;${arrowStyle}">${arrowTxt}</div>
    <div class="tut-box" style="position:fixed;${boxStyle}pointer-events:auto;">
      <div class="tut-title">${s.title}</div>
      <div style="font-size:12px;line-height:1.65;margin-bottom:10px;color:rgba(255,255,255,.85);">${s.msg.replace(/\n/g,'<br>')}</div>
      <div style="font-size:10px;color:rgba(255,255,255,.3);margin-bottom:8px;">${_tourStep+1} / ${total}</div>
      <div class="tut-next" onclick="_tourNext()">${s.final?'🎮 เริ่มเล่น!':'ต่อไป ▶'}</div>
    </div>
    <div class="tut-skip" style="position:fixed;bottom:16px;right:16px;pointer-events:auto;" onclick="endMenuTour()">ข้าม ✕</div>`;
}

/* ══ CUTSCENE ENGINE ══ */
let csState={stageIdx:0,slideIdx:0,typing:false,typeTimer:null,onDone:null};

function showCutscene(stageIdx, onDone){
  const data=CUTSCENES[stageIdx];
  if(!data){onDone&&onDone();return;}
  csState={stageIdx,slideIdx:0,typing:false,typeTimer:null,onDone};
  document.getElementById('cutscene').style.display='flex';
  renderCsSlide();
}

function renderCsSlide(){
  const data=CUTSCENES[csState.stageIdx];
  const slide=data.slides[csState.slideIdx];
  const total=data.slides.length;
  const isLast=csState.slideIdx===total-1;

  // bg
  document.getElementById('csBg').style.background=data.bg;

  // dots
  let dots='';
  for(let i=0;i<total;i++) dots+=`<div class="cs-dot${i===csState.slideIdx?' active':''}"></div>`;
  document.getElementById('csDots').innerHTML=dots;

  // stage label
  const lbl=document.getElementById('csStageLabel');
  lbl.textContent='บทที่ 1  —  ด่าน '+(csState.stageIdx+1);
  setTimeout(()=>lbl.classList.add('show'),50);

  // icon
  const ico=document.getElementById('csIcon');
  ico.classList.remove('show');
  ico.textContent=slide.icon||'';
  setTimeout(()=>ico.classList.add('show'),100);

  // title
  const ttl=document.getElementById('csTitle');
  ttl.classList.remove('show');
  ttl.textContent=slide.title||'';
  setTimeout(()=>ttl.classList.add('show'),200);

  // dialogue
  const dlg=document.getElementById('csDialogue');
  dlg.classList.remove('show');
  document.getElementById('csSpeaker').textContent=slide.speaker||'';
  document.getElementById('csText').textContent='';
  setTimeout(()=>{dlg.classList.add('show');typeText(slide.text||'');},300);

  // unlock panel
  const unlockEl=document.getElementById('csUnlock');
  unlockEl.classList.remove('show');
  unlockEl.style.display='none';
  if(slide.unlock&&slide.unlock.towers&&slide.unlock.towers.length>0){
    let items='';
    slide.unlock.towers.forEach(ti=>{
      items+=`<div class="cs-unlock-item">
        <div class="ui-icon">${TICONS[ti]}</div>
        <div class="ui-info"><div class="ui-name">${TNAMES[ti]}</div><div class="ui-type">ป้อมป้องกัน</div></div>
      </div>`;
    });
    document.getElementById('csUnlockItems').innerHTML=items;
    unlockEl.style.display='block';
    setTimeout(()=>unlockEl.classList.add('show'),1800);
  }

  // next button
  const nxt=document.getElementById('csNext');
  nxt.classList.remove('show');
  nxt.textContent=isLast?'⚔️ เริ่มด่าน':'▶ ต่อไป';
  setTimeout(()=>nxt.classList.add('show'),400);
}

function typeText(text){
  if(csState.typeTimer) clearInterval(csState.typeTimer);
  const el=document.getElementById('csText');
  el.innerHTML='';
  csState.typing=true;
  let i=0;
  const chars=text.split('');
  csState.typeTimer=setInterval(()=>{
    if(i<chars.length){
      el.innerHTML=text.slice(0,i+1).replace(/\n/g,'<br>')+'<span class="cs-cursor"></span>';
      i++;
    } else {
      clearInterval(csState.typeTimer);
      csState.typing=false;
      el.innerHTML=text.replace(/\n/g,'<br>');
    }
  },22);
}

function csAdvance(){
  const data=CUTSCENES[csState.stageIdx];
  /* ถ้ากำลัง type อยู่ให้แสดงข้อความทั้งหมดก่อน */
  if(csState.typing){
    clearInterval(csState.typeTimer);
    csState.typing=false;
    const slide=data.slides[csState.slideIdx];
    document.getElementById('csText').innerHTML=(slide.text||'').replace(/\n/g,'<br>');
    return;
  }
  const isLast=csState.slideIdx===data.slides.length-1;
  if(isLast){
    /* จบ cutscene */
    document.getElementById('cutscene').style.display='none';
    // reset transitions
    ['csStageLabel','csIcon','csTitle','csDialogue','csNext'].forEach(id=>{
      document.getElementById(id).classList.remove('show');
    });
    csState.onDone&&csState.onDone();
  } else {
    csState.slideIdx++;
    // reset show classes
    ['csStageLabel','csIcon','csTitle','csDialogue','csNext'].forEach(id=>{
      document.getElementById(id).classList.remove('show');
    });
    renderCsSlide();
  }
}

document.getElementById('csNext').addEventListener('click',csAdvance);
document.getElementById('csSkip').addEventListener('click',()=>{
  if(csState.typeTimer) clearInterval(csState.typeTimer);
  document.getElementById('cutscene').style.display='none';
  ['csStageLabel','csIcon','csTitle','csDialogue','csNext'].forEach(id=>{
    document.getElementById(id).classList.remove('show');
  });
  csState.onDone&&csState.onDone();
});
// tap anywhere on dialogue to advance
document.getElementById('csDialogue').addEventListener('click',csAdvance);


/* ══ STORY SCREEN ══ */
function showStoryScreen(si){
  hideAll();
  showCutscene(si,()=>showTowerSelection(pendingStageIndex));
}

/* ══ TOWER SELECTION ══ */
function showTowerSelection(si){
  towerSelMode='story';
  const s=STAGES[si];
  const available=(s.unlockedTowers||[0,1,2,3,4,5,6]).concat(isVoidUnlocked()&&!(s.unlockedTowers||[]).includes(8)?[8]:[]).concat(isTimeUnlocked()&&!(s.unlockedTowers||[]).includes(9)?[9]:[]);
  stageMaxTowers=s.maxTowers||99;
  const hasSkills=Object.keys(loadSkills()).length>0;
  setActiveSkill(null); // รีเซ็ต — เลือกใหม่ทุกด่าน
  /* ถ้าไม่มี limit และไม่มีสกิล → ข้ามหน้าเลือกป้อมไปเลย */
  if((stageMaxTowers>=99||available.length<=stageMaxTowers)&&!hasSkills){
    selectedTowersForStage=[...available];
    _doStartStage(si);
    return;
  }
  showScreen('towersel',true);
  const noLimit=stageMaxTowers>=99||available.length<=stageMaxTowers;
  if(noLimit){
    selectedTowersForStage=[...available];
  } else {
    const saved=JSON.parse(localStorage.getItem('tq_sel_'+si)||'[]');
    selectedTowersForStage=saved.filter(t=>available.includes(t)).slice(0,stageMaxTowers);
  }
  const info=document.getElementById('tsInfo');
  info.innerHTML=noLimit
    ?`ป้อมทั้งหมด ${available.length} แบบถูกเลือกอัตโนมัติ · <strong>เลือกสกิลได้ด้านล่าง</strong>`
    :`เลือก <strong>ป้อมสูงสุด ${stageMaxTowers} แบบ</strong> สำหรับด่านนี้ — มีป้อมทั้งหมด ${available.length} แบบให้เลือก`;
  renderTowerSelection(available);
}
function openEgTowerSelection(){
  towerSelMode='endgame';
  stageMaxTowers=[7,6,5][egDiff];
  const available=[0,1,2,3,4,5,6,7].concat(isVoidUnlocked()?[8]:[]).concat(isTimeUnlocked()?[9]:[]);
  setActiveSkill(null); // รีเซ็ต
  showScreen('towersel',true);
  const saved=JSON.parse(localStorage.getItem('tq_sel_endgame_'+egDiff)||'[]');
  selectedTowersForStage=saved.filter(t=>available.includes(t)).slice(0,stageMaxTowers);
  const info=document.getElementById('tsInfo');
  info.innerHTML=`เลือก <strong>ป้อมสูงสุด ${stageMaxTowers} แบบ</strong> สำหรับ Endgame (${EG_DIFF_NAMES[egDiff]}) — มีป้อมทั้งหมด ${available.length} แบบให้เลือก`;
  renderTowerSelection(available);
}
const _skIconCache={};
const _SKILL_IDS=new Set(['goldrush','freeze','meteor','overdrive','barrier','shard_c','shard_r','shard_e','shard']);
function _skillIconURL(id){
  if(_skIconCache[id]) return _skIconCache[id];
  try{
    const sz=120,c=document.createElement('canvas');
    c.width=sz;c.height=sz;
    const ctx=c.getContext('2d');
    if(_SKILL_IDS.has(id)){
      _drawSkillArt(ctx,id,sz,sz);
      return (_skIconCache[id]=c.toDataURL());
    }
    const h=sz/2;
    ctx.translate(h,h);
    if(id==='goldrush'){
      // shadow coin back
      [[10,8,'#996600'],[0,0,'#b8860b'],[-8,-10,'#b8860b']].forEach(([x,y,col])=>{
        ctx.beginPath();ctx.ellipse(x,y,22,22,0,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();
      });
      // coin face gradient
      [[-8,-10],[0,0],[10,8]].forEach(([x,y])=>{
        const g=ctx.createRadialGradient(x-4,y-4,2,x,y,22);
        g.addColorStop(0,'#fff9c4');g.addColorStop(0.4,'#ffd700');g.addColorStop(1,'#c8a000');
        ctx.beginPath();ctx.ellipse(x,y,20,20,0,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
        // rim
        ctx.beginPath();ctx.ellipse(x,y,20,20,0,0,Math.PI*2);ctx.strokeStyle='#b8860b';ctx.lineWidth=1.5;ctx.stroke();
        // shine
        ctx.beginPath();ctx.ellipse(x-6,y-6,5,3,-.5,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,.5)';ctx.fill();
      });
    } else if(id==='freeze'){
      const col='#4fc3f7';
      ctx.shadowColor='#b3e5fc';ctx.shadowBlur=8;
      for(let i=0;i<6;i++){
        ctx.save();ctx.rotate(i*Math.PI/3);
        ctx.strokeStyle=col;ctx.lineWidth=3;ctx.lineCap='round';
        // main arm
        ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-h*.82);ctx.stroke();
        // branches at 1/3 and 2/3
        [-1,1].forEach(s=>{
          [.35,.62].forEach(t=>{
            const yy=-h*.82*t;
            ctx.beginPath();ctx.moveTo(0,yy);ctx.lineTo(s*10,yy-9);ctx.stroke();
          });
        });
        ctx.restore();
      }
      // center crystal
      const cg=ctx.createRadialGradient(0,0,0,0,0,10);
      cg.addColorStop(0,'#fff');cg.addColorStop(1,'#4fc3f7');
      ctx.beginPath();ctx.arc(0,0,9,0,Math.PI*2);ctx.fillStyle=cg;ctx.fill();
      ctx.shadowBlur=0;
    } else if(id==='meteor'){
      // trail
      const tg=ctx.createLinearGradient(28,-32,-30,32);
      tg.addColorStop(0,'rgba(255,200,0,0)');tg.addColorStop(1,'rgba(255,80,0,.55)');
      ctx.beginPath();ctx.moveTo(32,-36);ctx.lineTo(-36,32);ctx.lineTo(-18,44);ctx.lineTo(44,-16);ctx.closePath();
      ctx.fillStyle=tg;ctx.fill();
      // outer glow
      ctx.shadowColor='#ff6d00';ctx.shadowBlur=18;
      const og=ctx.createRadialGradient(8,-10,3,8,-10,26);
      og.addColorStop(0,'rgba(255,255,200,.9)');og.addColorStop(0.5,'rgba(255,120,0,.6)');og.addColorStop(1,'rgba(200,0,0,0)');
      ctx.beginPath();ctx.arc(8,-10,26,0,Math.PI*2);ctx.fillStyle=og;ctx.fill();
      // core
      const cg=ctx.createRadialGradient(4,-14,1,8,-10,13);
      cg.addColorStop(0,'#fff');cg.addColorStop(0.4,'#ff8a00');cg.addColorStop(1,'#b71c1c');
      ctx.beginPath();ctx.arc(8,-10,13,0,Math.PI*2);ctx.fillStyle=cg;ctx.fill();
      ctx.shadowBlur=0;
      // craters
      ctx.fillStyle='rgba(0,0,0,.2)';
      [[4,-6,3],[12,-14,2]].forEach(([x,y,r])=>{ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();});
    } else if(id==='overdrive'){
      // glow behind
      ctx.shadowColor='#ffca28';ctx.shadowBlur=20;
      const bg=ctx.createRadialGradient(0,0,5,0,0,h*.7);
      bg.addColorStop(0,'rgba(255,220,50,.35)');bg.addColorStop(1,'rgba(255,150,0,0)');
      ctx.beginPath();ctx.arc(0,0,h*.7,0,Math.PI*2);ctx.fillStyle=bg;ctx.fill();
      // bolt shape
      ctx.beginPath();
      ctx.moveTo(10,-h*.88);ctx.lineTo(-12,4);ctx.lineTo(0,4);
      ctx.lineTo(-10,h*.88);ctx.lineTo(16,-6);ctx.lineTo(4,-6);
      ctx.closePath();
      const lg=ctx.createLinearGradient(0,-h*.88,0,h*.88);
      lg.addColorStop(0,'#fff9c4');lg.addColorStop(0.4,'#ffd740');lg.addColorStop(1,'#ff6d00');
      ctx.fillStyle=lg;ctx.fill();
      ctx.shadowBlur=0;
      // shine streak
      ctx.beginPath();ctx.moveTo(6,-h*.7);ctx.lineTo(-4,-5);ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=2;ctx.lineCap='round';ctx.stroke();
    } else if(id==='barrier'){
      // shield outline glow
      ctx.shadowColor='#b388ff';ctx.shadowBlur=22;
      // shield path
      function shieldPath(s){
        ctx.beginPath();
        ctx.moveTo(0,-h*s*.88);
        ctx.bezierCurveTo( h*s*.82,-h*s*.88,  h*s*.82, h*s*.18, 0, h*s*.92);
        ctx.bezierCurveTo(-h*s*.82, h*s*.18, -h*s*.82,-h*s*.88, 0,-h*s*.88);
        ctx.closePath();
      }
      // outer glow ring
      shieldPath(1.05);
      ctx.strokeStyle='rgba(179,136,255,.4)';ctx.lineWidth=6;ctx.stroke();
      // fill
      shieldPath(1);
      const sg=ctx.createLinearGradient(0,-h*.88,0,h*.92);
      sg.addColorStop(0,'#e1bee7');sg.addColorStop(0.45,'#7b1fa2');sg.addColorStop(1,'#1a0030');
      ctx.fillStyle=sg;ctx.fill();
      // border
      shieldPath(1);
      ctx.strokeStyle='#ce93d8';ctx.lineWidth=2.5;ctx.stroke();
      ctx.shadowBlur=0;
      // cross rune
      ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2.5;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(0,-h*.3);ctx.lineTo(0,h*.35);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-h*.32,0);ctx.lineTo(h*.32,0);ctx.stroke();
      // top shine
      ctx.beginPath();ctx.ellipse(0,-h*.55,14,5,0,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,.18)';ctx.fill();
    } else if(id==='gold_pot'){
      // === ยาเพิ่มทอง — ขวดแก้วบรรจุของเหลวทอง ===
      // shadow
      ctx.beginPath();ctx.ellipse(2,44,14,5,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.25)';ctx.fill();
      // stopper cork
      const corkG=ctx.createLinearGradient(-8,-52,8,-38);
      corkG.addColorStop(0,'#d7aa5a');corkG.addColorStop(1,'#8b6914');
      ctx.beginPath();ctx.roundRect(-7,-52,14,16,3);ctx.fillStyle=corkG;ctx.fill();
      ctx.strokeStyle='#6b4f0e';ctx.lineWidth=1.2;ctx.stroke();
      // neck
      const neckG=ctx.createLinearGradient(-6,-36,6,-24);
      neckG.addColorStop(0,'#d4edda');neckG.addColorStop(1,'#9dc6a8');
      ctx.beginPath();ctx.roundRect(-6,-36,12,14,2);ctx.fillStyle=neckG;ctx.fill();
      // bottle body gradient (glass)
      const bottleG=ctx.createLinearGradient(-22,-22,22,44);
      bottleG.addColorStop(0,'#e8f5e9');bottleG.addColorStop(0.3,'#c8e6c9');bottleG.addColorStop(1,'#81c784');
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.fillStyle=bottleG;ctx.fill();
      // liquid fill (gold)
      ctx.save();
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.clip();
      const liqG=ctx.createLinearGradient(0,4,0,44);
      liqG.addColorStop(0,'#fff176');liqG.addColorStop(0.4,'#ffd600');liqG.addColorStop(1,'#f9a825');
      ctx.beginPath();ctx.rect(-22,4,44,40);ctx.fillStyle=liqG;ctx.fill();
      // liquid surface shimmer
      ctx.beginPath();ctx.ellipse(0,4,20,5,0,0,Math.PI*2);ctx.fillStyle='rgba(255,255,200,.6)';ctx.fill();
      // bubble 1
      ctx.beginPath();ctx.arc(-8,18,4,0,Math.PI*2);ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=1.5;ctx.stroke();
      // bubble 2
      ctx.beginPath();ctx.arc(7,30,2.5,0,Math.PI*2);ctx.stroke();
      ctx.restore();
      // coin symbol center
      ctx.shadowColor='#ffd700';ctx.shadowBlur=10;
      ctx.beginPath();ctx.arc(0,24,12,0,Math.PI*2);
      const coinG=ctx.createRadialGradient(-3,-3+24,1,0,24,12);
      coinG.addColorStop(0,'#fffde7');coinG.addColorStop(0.5,'#ffd700');coinG.addColorStop(1,'#c8a000');
      ctx.fillStyle=coinG;ctx.fill();
      ctx.strokeStyle='#9e7c00';ctx.lineWidth=1.5;ctx.stroke();
      ctx.shadowBlur=0;
      ctx.fillStyle='#7a5900';ctx.font='bold 13px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('฿',0,24);
      // bottle outline
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.strokeStyle='rgba(100,160,100,.6)';ctx.lineWidth=2;ctx.stroke();
      // glass shine streak
      ctx.beginPath();ctx.moveTo(-14,-18);ctx.lineTo(-10,10);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.lineCap='round';ctx.stroke();
    } else if(id==='hp_pot'){
      // === ยาเพิ่ม HP — ขวดสีแดงใสมีหัวใจ ===
      ctx.beginPath();ctx.ellipse(2,44,14,5,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.25)';ctx.fill();
      // cork
      const hCork=ctx.createLinearGradient(-8,-52,8,-38);
      hCork.addColorStop(0,'#bcaaa4');hCork.addColorStop(1,'#6d4c41');
      ctx.beginPath();ctx.roundRect(-7,-52,14,16,3);ctx.fillStyle=hCork;ctx.fill();
      ctx.strokeStyle='#4e342e';ctx.lineWidth=1.2;ctx.stroke();
      // neck
      const hNeck=ctx.createLinearGradient(-6,-36,6,-24);
      hNeck.addColorStop(0,'#ffcdd2');hNeck.addColorStop(1,'#ef9a9a');
      ctx.beginPath();ctx.roundRect(-6,-36,12,14,2);ctx.fillStyle=hNeck;ctx.fill();
      // bottle glass
      const hBottle=ctx.createLinearGradient(-22,-22,22,44);
      hBottle.addColorStop(0,'#fce4ec');hBottle.addColorStop(0.3,'#f48fb1');hBottle.addColorStop(1,'#e91e63');
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.fillStyle=hBottle;ctx.fill();
      // liquid
      ctx.save();
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.clip();
      const hLiq=ctx.createLinearGradient(0,0,0,44);
      hLiq.addColorStop(0,'#ff8a80');hLiq.addColorStop(0.5,'#f44336');hLiq.addColorStop(1,'#b71c1c');
      ctx.beginPath();ctx.rect(-22,0,44,44);ctx.fillStyle=hLiq;ctx.fill();
      ctx.beginPath();ctx.ellipse(0,0,20,5,0,0,Math.PI*2);ctx.fillStyle='rgba(255,180,180,.5)';ctx.fill();
      ctx.restore();
      // heart
      ctx.shadowColor='#ff1744';ctx.shadowBlur=12;
      ctx.fillStyle='#fff';
      ctx.beginPath();
      const hx=0,hy=22,hs=13;
      ctx.moveTo(hx,hy+hs*.6);
      ctx.bezierCurveTo(hx-hs*1.6,hy-hs*.5, hx-hs*1.6,hy-hs*1.6, hx,hy-hs*.5);
      ctx.bezierCurveTo(hx+hs*1.6,hy-hs*1.6, hx+hs*1.6,hy-hs*.5, hx,hy+hs*.6);
      ctx.fill();
      // inner heart tint
      const htG=ctx.createRadialGradient(0,hy-4,1,0,hy,hs);
      htG.addColorStop(0,'#ffcdd2');htG.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle=htG;ctx.fill();
      ctx.shadowBlur=0;
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.strokeStyle='rgba(194,24,91,.5)';ctx.lineWidth=2;ctx.stroke();
      ctx.beginPath();ctx.moveTo(-14,-18);ctx.lineTo(-10,10);ctx.strokeStyle='rgba(255,255,255,.45)';ctx.lineWidth=3;ctx.lineCap='round';ctx.stroke();
    } else if(id==='dmg_pot'){
      // === ยาเข้มแข็ง — ขวดส้มแดงมีดาบ ===
      ctx.beginPath();ctx.ellipse(2,44,14,5,0,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,.25)';ctx.fill();
      // cork
      const dCork=ctx.createLinearGradient(-8,-52,8,-38);
      dCork.addColorStop(0,'#ff8f00');dCork.addColorStop(1,'#bf360c');
      ctx.beginPath();ctx.roundRect(-7,-52,14,16,3);ctx.fillStyle=dCork;ctx.fill();
      ctx.strokeStyle='#6d1f00';ctx.lineWidth=1.2;ctx.stroke();
      // neck
      ctx.beginPath();ctx.roundRect(-6,-36,12,14,2);ctx.fillStyle='#ffcc80';ctx.fill();
      // bottle
      const dBottle=ctx.createLinearGradient(-22,-22,22,44);
      dBottle.addColorStop(0,'#fff3e0');dBottle.addColorStop(0.3,'#ffab40');dBottle.addColorStop(1,'#e64a19');
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.fillStyle=dBottle;ctx.fill();
      // liquid
      ctx.save();
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.clip();
      const dLiq=ctx.createLinearGradient(0,-4,0,44);
      dLiq.addColorStop(0,'#ff8a50');dLiq.addColorStop(0.5,'#f4511e');dLiq.addColorStop(1,'#b71c1c');
      ctx.beginPath();ctx.rect(-22,-4,44,48);ctx.fillStyle=dLiq;ctx.fill();
      ctx.beginPath();ctx.ellipse(0,-4,20,5,0,0,Math.PI*2);ctx.fillStyle='rgba(255,200,120,.5)';ctx.fill();
      // embers
      ['rgba(255,255,100,.7)','rgba(255,160,0,.6)','rgba(255,80,0,.5)'].forEach((col,i)=>{
        ctx.beginPath();ctx.arc([-6,5,-2][i],[8,18,30][i],3-i*.5,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();
      });
      ctx.restore();
      // sword
      ctx.shadowColor='#ff6d00';ctx.shadowBlur=14;
      // blade
      const sbG=ctx.createLinearGradient(-3,30,3,-16);
      sbG.addColorStop(0,'#fff');sbG.addColorStop(0.5,'#ffe0b2');sbG.addColorStop(1,'#bdbdbd');
      ctx.beginPath();ctx.moveTo(0,-20);ctx.lineTo(3,26);ctx.lineTo(0,32);ctx.lineTo(-3,26);ctx.closePath();
      ctx.fillStyle=sbG;ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,.4)';ctx.lineWidth=1;ctx.stroke();
      // crossguard
      ctx.beginPath();ctx.roundRect(-14,22,28,5,2);
      const cgG=ctx.createLinearGradient(-14,22,14,27);
      cgG.addColorStop(0,'#ff8f00');cgG.addColorStop(0.5,'#ffd54f');cgG.addColorStop(1,'#ff8f00');
      ctx.fillStyle=cgG;ctx.fill();
      ctx.strokeStyle='#bf6000';ctx.lineWidth=1;ctx.stroke();
      // handle
      const hgG=ctx.createLinearGradient(-4,27,4,42);
      hgG.addColorStop(0,'#8d4600');hgG.addColorStop(1,'#4e2500');
      ctx.beginPath();ctx.roundRect(-4,27,8,16,2);ctx.fillStyle=hgG;ctx.fill();
      ctx.strokeStyle='#6d1f00';ctx.lineWidth=1;ctx.stroke();
      // pommel
      ctx.beginPath();ctx.arc(0,43,5,0,Math.PI*2);
      const pmG=ctx.createRadialGradient(-1,42,1,0,43,5);
      pmG.addColorStop(0,'#ffd54f');pmG.addColorStop(1,'#ff6f00');
      ctx.fillStyle=pmG;ctx.fill();
      ctx.strokeStyle='#bf6000';ctx.lineWidth=1;ctx.stroke();
      // blade shine
      ctx.beginPath();ctx.moveTo(-1,-14);ctx.lineTo(-1,20);ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=1.5;ctx.lineCap='round';ctx.stroke();
      ctx.shadowBlur=0;
      ctx.beginPath();ctx.roundRect(-22,-22,44,66,10);ctx.strokeStyle='rgba(230,74,25,.55)';ctx.lineWidth=2;ctx.stroke();
      ctx.beginPath();ctx.moveTo(-14,-18);ctx.lineTo(-10,10);ctx.strokeStyle='rgba(255,255,255,.4)';ctx.lineWidth=3;ctx.lineCap='round';ctx.stroke();
    }
    return (_skIconCache[id]=c.toDataURL());
  }catch(e){return '';}
}
const _TSPRITE=['tower_cannon','tower_ice','tower_magic','tower_sniper','tower_support','tower_archer','tower_gold','tower_thunder','tower_void',''];
function _tsFallback(img,ti){img.onerror=null;img.src=_towerIconURL(ti);img.style.mixBlendMode='normal';}
const _twIconCache={};
function _towerIconURL(type){
  if(_twIconCache[type]) return _twIconCache[type];
  try{
    const sz=240,c=document.createElement('canvas');
    c.width=sz;c.height=sz;
    const ctx=c.getContext('2d');
    ctx.translate(sz/2,sz/2);
    drawTowerIcon(ctx,type,sz*.50,0,0);
    return (_twIconCache[type]=c.toDataURL());
  }catch(e){return '';}
}
function renderTowerSelection(available){
  const noLim=stageMaxTowers>=99||available.length<=stageMaxTowers;
  const max=noLim?available.length:stageMaxTowers;
  document.getElementById('tsSlotCount').textContent=noLim?`${available.length} (ทั้งหมด)`:selectedTowersForStage.length+'/'+max;
  // strip
  let strip='';
  for(let i=0;i<max;i++){
    const ti=selectedTowersForStage[i];
    if(ti!==undefined){
      strip+=`<div class="ts-slot filled" onclick="${noLim?'':('removeTowerFromSelection('+i+')')}" title="${noLim?'เลือกอัตโนมัติ':'กดเพื่อเอาออก'}"><img src="${_towerIconURL(ti)}" style="width:32px;height:32px;image-rendering:auto;"></div>`;
    } else {
      strip+=`<div class="ts-slot"></div>`;
    }
  }
  document.getElementById('tsStrip').innerHTML=strip;
  // grid
  let grid='';
  available.forEach(ti=>{
    const isSel=selectedTowersForStage.includes(ti);
    const badges=[];
    if(TCANAIR[ti]) badges.push('<span class="ts-card-badge badge-air">✈ Air</span>');
    if(TGOLDMINE[ti]) badges.push('<span class="ts-card-badge badge-gold">💰 Gold</span>');
    if(TCHAIN[ti]) badges.push('<span class="ts-card-badge badge-air">⚡ Chain</span>');
    const _sp=_TSPRITE[ti]||'';
    grid+=`<div class="ts-card${isSel?' selected':''}" onclick="toggleTowerSelection(${ti})">
      ${badges.length?`<div class="ts-card-badges">${badges.join('')}</div>`:''}
      <div class="ts-card-check">✓</div>
      <div class="ts-card-art"><img src="assets/images/${_sp}.png" onerror="_tsFallback(this,${ti})"></div>
      <div class="ts-card-info">
        <div class="ts-card-name">${TNAMES[ti]}</div>
        <div class="ts-card-stats">
          ${CFG.t_dmg[ti]?`<span class="ts-card-stat">⚔️${CFG.t_dmg[ti]}</span>`:''}
          <span class="ts-card-stat">🎯${CFG.t_rng[ti]}</span>
          <span class="ts-card-cost">💰${CFG.t_cost[ti]}</span>
        </div>
        <div class="ts-card-desc">${(TSTRENGTH[ti]||[]).slice(0,2).join(' · ')}</div>
      </div>
    </div>`;
  });
  document.getElementById('tsGrid').innerHTML=grid;
  document.getElementById('tsStartBtn').disabled=selectedTowersForStage.length===0;
  // ⭐ Skill picker
  const skills=loadSkills();
  const skillPicker=document.getElementById('tsSkillPicker');
  if(skillPicker){
    const ownedDefs=SKILL_DEFS.filter(d=>skills[d.id]);
    if(ownedDefs.length>0){
      const askill=loadActiveSkill();
      const noSkillSel=!askill||!skills[askill];
      let cards=`<div class="ts-sk-card ts-sk-none${noSkillSel?' sel':''}" onclick="tsSelectSkill(null)">
        <div class="ts-sk-ico">✕</div>
        <div class="ts-sk-name">ไม่ใช้</div>
      </div>`;
      ownedDefs.forEach(d=>{
        const star=skills[d.id].star;
        const isSel=askill===d.id;
        const stars='★'.repeat(star)+'☆'.repeat(SKILL_MAX_STAR-star);
        cards+=`<div class="ts-sk-card${isSel?' sel':''}" onclick="tsSelectSkill('${d.id}')" style="${isSel?'--sk-col:'+d.color+';border-color:'+d.color+';':'--sk-col:rgba(255,255,255,.25);'}">
          <div class="ts-sk-ico"><img src="${_skillIconURL(d.id)}" style="width:28px;height:28px;object-fit:contain;${isSel?'':'filter:saturate(.4) brightness(.7);'}"></div>
          <div class="ts-sk-stars" style="color:${isSel?d.color:'#888'};">${stars}</div>
          <div class="ts-sk-name" style="color:${isSel?d.color:'#bbb'};">${d.name}</div>
        </div>`;
      });
      skillPicker.innerHTML=`<div class="ts-skill-section"><div class="ts-skill-title">⭐ การ์ดสกิล — เลือก 1 ใบ (หรือไม่ใช้)</div><div class="ts-sk-row">${cards}</div></div>`;
    } else {
      skillPicker.innerHTML='';
    }
  }
  _renderTsBuff();
  // long-press to show tower info
  document.querySelectorAll('#tsGrid .ts-card').forEach((card,idx)=>{
    const ti=available[idx];
    let _pt=null;
    const _cancel=()=>{clearTimeout(_pt);_pt=null;};
    card.addEventListener('touchstart',()=>{_pt=setTimeout(()=>{_showTsInfo(ti);_pt=null;},500);},{passive:true});
    card.addEventListener('touchend',_cancel);
    card.addEventListener('touchmove',_cancel);
    card.addEventListener('mousedown',()=>{_pt=setTimeout(()=>{_showTsInfo(ti);_pt=null;},500);});
    card.addEventListener('mouseup',_cancel);
    card.addEventListener('mouseleave',_cancel);
  });
}
function _showTsInfo(ti){
  const ex=document.getElementById('tsInfoModal'); if(ex) ex.remove();
  const dmg=CFG.t_dmg[ti];
  const statsHtml=dmg>0
    ?`<div class="tsim-stat">⚔️ ดาเมจ <span>${dmg}</span></div><div class="tsim-stat">🎯 ระยะ <span>${CFG.t_rng[ti]} ช่อง</span></div><div class="tsim-stat">⏱️ อัตรา <span>${CFG.t_rate[ti]}/วิ</span></div>`
    :`<div class="tsim-stat" style="color:#aaa">ไม่โจมตีโดยตรง</div>`;
  const el=document.createElement('div');
  el.id='tsInfoModal';
  el.innerHTML=`<div class="tsim-backdrop" onclick="_closeTsInfo()"></div>
    <div class="tsim-card">
      <div class="tsim-header"><span class="tsim-ico">${TICONS[ti]}</span><span class="tsim-name">${TNAMES[ti]}</span><button class="tsim-close" onclick="_closeTsInfo()">✕</button></div>
      <div class="tsim-stats">${statsHtml}<div class="tsim-stat">💰 ราคา <span>${CFG.t_cost[ti]}</span></div></div>
      <div class="tsim-section"><div class="tsim-label">💡 ความสามารถพิเศษ</div><div class="tsim-body">${TSPECIAL[ti]}</div></div>
      <div class="tsim-section"><div class="tsim-label">⚡ เมื่อ Awaken</div><div class="tsim-body tsim-awaken">${TAWAKEN_DESC[ti]}</div></div>
      <div class="tsim-row"><div class="tsim-section half"><div class="tsim-label">✅ จุดแข็ง</div><div class="tsim-body">${TSTRENGTH[ti].join('<br>')}</div></div><div class="tsim-section half"><div class="tsim-label">⚠️ จุดอ่อน</div><div class="tsim-body tsim-weak">${TWEAKNESS[ti].join('<br>')}</div></div></div>
    </div>`;
  document.body.appendChild(el);
}
function _closeTsInfo(){const el=document.getElementById('tsInfoModal');if(el)el.remove();}
/* ⭐ หน้าข้อมูลการ์ดสกิล — ตารางสเกลต่อดาว ★1–★5 (reuse .tsim-* + .sktbl-*) */
const _SKILL_INFO={
  meteor:{head:['ดาว','ดาเมจ','รัศมี','CD'], row:t=>[t.dmg,t.radius+' ช่อง',t.cd+'s']},
  freeze:{head:['ดาว','หยุด','CD'],          row:t=>[t.dur+'s',t.cd+'s']},
  goldrush:{head:['ดาว','ทอง','+ทอง/ฆ่า','นาน','CD'], row:t=>['+'+t.gold,'+'+Math.round(t.bonus*100)+'%',t.dur+'s',t.cd+'s']},
  overdrive:{head:['ดาว','+ดาเมจ','+ยิง','นาน','CD'], row:t=>['+'+Math.round(t.dmg*100)+'%','+'+Math.round(t.rate*100)+'%',t.dur+'s',t.cd+'s']},
  barrier:{head:['ดาว','ฟื้น HP','กัน','CD'], row:t=>['+'+t.heal,t.block+'s',t.cd+'s']},
};
function _showSkillInfo(id){
  const ex=document.getElementById('skInfoModal'); if(ex) ex.remove();
  const d=getSkillDef(id), info=_SKILL_INFO[id]; if(!d||!info) return;
  const star=getSkillStar(id), cols=info.head.length;
  const head=info.head.map(h=>`<span>${h}</span>`).join('');
  const rows=d.tiers.map((t,i)=>{
    const cur=(i+1)===star;
    return `<div class="sktbl-row${cur?' cur':''}"><span class="sktbl-star">★${i+1}</span>${info.row(t).map(v=>`<span>${v}</span>`).join('')}</div>`;
  }).join('');
  const el=document.createElement('div');
  el.id='skInfoModal';
  el.innerHTML=`<div class="tsim-backdrop" onclick="_closeSkillInfo()"></div>
    <div class="tsim-card">
      <div class="tsim-header"><span class="tsim-ico"><img src="${_skillIconURL(d.id)}" style="width:100%;height:100%;object-fit:contain;"></span><span class="tsim-name" style="color:${d.color};">${d.name}</span><button class="tsim-close" onclick="_closeSkillInfo()">✕</button></div>
      <div class="tsim-section"><div class="tsim-label"><span class="gacha-rarity-tag rarity-${d.rarity}" style="font-size:8px;">${d.rarity}</span> ${star>0?'มีอยู่ ★'+star:'🔒 ยังไม่ปลดล็อก'}</div><div class="tsim-body">${d.desc}</div></div>
      <div class="tsim-section"><div class="tsim-label">📊 สเกลตามดาว</div>
        <div class="sktbl" style="--cols:${cols};"><div class="sktbl-row sktbl-head">${head}</div>${rows}</div>
      </div>
      <div class="tsim-body" style="font-size:10px;color:#888;margin-top:4px;">ได้ใบซ้ำจากตู้สุ่มสกิล = อัพดาว · ทาเลนต์สาย ⭐ ลด cooldown เพิ่มได้</div>
    </div>`;
  document.body.appendChild(el);
}
function _closeSkillInfo(){const el=document.getElementById('skInfoModal');if(el)el.remove();}
function _tsAvailable(){
  return towerSelMode==='endgame'
    ? [0,1,2,3,4,5,6,7].concat(isVoidUnlocked()?[8]:[]).concat(isTimeUnlocked()?[9]:[])
    : (STAGES[pendingStageIndex].unlockedTowers||[0,1,2,3,4]).concat(isVoidUnlocked()&&!(STAGES[pendingStageIndex].unlockedTowers||[]).includes(8)?[8]:[]).concat(isTimeUnlocked()&&!(STAGES[pendingStageIndex].unlockedTowers||[]).includes(9)?[9]:[]);
}
function _tsSaveKey(){
  return towerSelMode==='endgame' ? 'tq_sel_endgame_'+egDiff : 'tq_sel_'+pendingStageIndex;
}
function toggleTowerSelection(ti){
  const idx=selectedTowersForStage.indexOf(ti);
  const available=_tsAvailable();
  if(idx>=0){
    selectedTowersForStage.splice(idx,1);
  } else {
    if(selectedTowersForStage.length>=stageMaxTowers){
      showToast('เลือกได้สูงสุด '+stageMaxTowers+' ป้อมเท่านั้น!');
      return;
    }
    selectedTowersForStage.push(ti);
  }
  localStorage.setItem(_tsSaveKey(),JSON.stringify(selectedTowersForStage));
  renderTowerSelection(available);
}
function removeTowerFromSelection(slotIdx){
  selectedTowersForStage.splice(slotIdx,1);
  const available=_tsAvailable();
  localStorage.setItem(_tsSaveKey(),JSON.stringify(selectedTowersForStage));
  renderTowerSelection(available);
}
function tsSelectSkill(id){
  setActiveSkill(id);
  renderTowerSelection(_tsAvailable());
}
function confirmTowerSelection(){
  if(selectedTowersForStage.length===0) return;
  if(towerSelMode==='endgame') _doStartEndgame();
  else _doStartStage(pendingStageIndex);
}

/* ══ TOWER SELECT ══ */
function selTower(i){
  if(!G||G.over||G.win||paused) return;
  const _selActive=selectedTowersForStage.length>0?selectedTowersForStage:(currentStage.unlockedTowers||[0,1,2,3,4,5,6,7]);
  if(!_selActive.includes(i)){showToast('🔒 ยังไม่ได้ปลดล็อค!');return;}
  // deselect dig tool เมื่อเลือกป้อม
  if(G.selDig){G.selDig=false;const db=document.getElementById('digBtn');if(db)db.classList.remove('sel');}
  G.selTwr=(G.selTwr===i)?-1:i;
  for(let j=0;j<9;j++){const b=document.getElementById('tb'+j);if(b)b.classList.toggle('sel',j===G.selTwr);}
  if(G.selTwr<0){const info=document.getElementById('rangeInfo');if(info)info.style.display='none';}
}

/* ══ HUD / UTILS ══ */
function updateHUD(){
  if(!G) return;
  document.getElementById('goldTxt').textContent=G.gold;
  document.getElementById('hpTxt').textContent=G.hp;
  document.getElementById('hpBar').style.width=Math.max(0,G.hp/G.maxHp*100)+'%';
  // 📈 ราคาป้อมเปลี่ยนตามจำนวนป้อมบนกระดาน — รีเฟรชแถบราคาทุกครั้งที่ HUD อัปเดต
  for(let i=0;i<9;i++){const c=document.getElementById('tc'+i);if(c)c.textContent='💰'+getTowerCost(i);}
  if(typeof updateUpgradeAllBtn==='function') updateUpgradeAllBtn();
}
function addParticle(x,y,txt,col){
  if(!G) return;
  G.particles.push({x,y,txt,col,life:1,vy:-1.5-Math.random()*.5});
}
function _showLbRewardPopup(claimed,onClose){
  const lines=claimed.map(rew=>{
    const parts=[];
    if(rew.gems)    parts.push(`<span class="gico"></span> ${rew.gems.toLocaleString()}`);
    if(rew.tickets) parts.push(`🎫 ${rew.tickets}`);
    if(rew.pgold)   parts.push(`💰 ${rew.pgold.toLocaleString()}`);
    return `<div class="lb-rew-line">🏆 อันดับ ${rew.rank} SS${rew.season}: ${parts.join(' + ')}</div>`;
  }).join('');
  const pop=document.createElement('div');pop.className='av-unlock-popup';
  pop.innerHTML=`<div class="av-unlock-box" style="max-width:340px;">
    <div style="font-size:48px;margin-bottom:8px;">🎁</div>
    <h3 style="color:#ffd24d;margin:0 0 8px;">รางวัลอันดับมาแล้ว!</h3>
    <div style="color:#e0e0e0;font-size:13px;margin-bottom:18px;line-height:1.7;">${lines}</div>
    <button class="slot-spin-btn" style="padding:10px 32px;font-size:14px;" id="_lbRewOkBtn">รับรางวัล ✓</button>
  </div>`;
  document.body.appendChild(pop);
  pop.querySelector('#_lbRewOkBtn').addEventListener('click',()=>{pop.remove();if(typeof onClose==='function')onClose();});
}
function showToast(msg){
  const el=document.getElementById('toast');
  if(!el) return;
  el.textContent=msg; el.classList.add('show');
  if(toastTimer) clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'),1800);
}
/* ══ SPRITE ICON HELPERS (B2, B3) ══ */
let _iconCache={};
function getEnemyIconURL(ti,sz){
  sz=sz||32; const k='e'+ti+'_'+sz;
  if(!_iconCache[k]){
    const oc=document.createElement('canvas');oc.width=sz;oc.height=sz;
    drawEnemySprite(oc.getContext('2d'),ti,sz/2,sz/2,sz*.72);
    _iconCache[k]=oc.toDataURL();
  }
  return _iconCache[k];
}
function getTowerIconURL(type,sz){
  sz=sz||32; const k='t'+type+'_'+sz;
  if(!_iconCache[k]){
    const oc=document.createElement('canvas');oc.width=sz;oc.height=sz;
    const ox=oc.getContext('2d');ox.translate(sz/2,sz/2+sz*.05);
    drawTowerIcon(ox,type,sz-4,0);
    _iconCache[k]=oc.toDataURL();
  }
  return _iconCache[k];
}

/* ══ CODEX ══ */
let cdxTab='monster',cdxSel=-1;
function switchCdxTab(tab){
  cdxTab=tab; cdxSel=-1;
  ['monster','boss','tower','achiev','weather'].forEach(t=>{
    const key=t==='achiev'?'Achiev':t.charAt(0).toUpperCase()+t.slice(1);
    const el=document.getElementById('tab'+key);
    if(el) el.classList.toggle('active',t===tab);
  });
  if(tab==='achiev'){
    const unlocked=loadAchievements();
    localStorage.setItem('tq_ach_seen',JSON.stringify([...unlocked]));
    _updateAchBadge();
    renderAchievTab();
  } else if(tab==='weather'){
    renderWeatherTab();
  } else renderCodex();
}

function renderWeatherTab(){
  const body=document.getElementById('cdxBody');
  if(!body) return;
  document.getElementById('cdxProg').textContent='สภาพอากาศ '+WEATHERS.length+' ชนิด';
  const rows=WEATHERS.map(w=>{
    const tipsMap={
      fog:'วางป้อม Sniper ใกล้ทางมากขึ้น หรือใช้ Thunder ระยะกลาง',
      blizzard:'ลืม Ice Tower ไปก่อน — ใช้ Cannon/Magic/Sniper/Thunder แทน',
      lightning:'สร้างป้อมสำรองไว้เสมอ อย่าพึ่งพาป้อมเดียว',
      darknight:'เน้น DPS สูงๆ จัดการก่อนมอนถึงปราสาท',
      heatwave:'Ice Tower ไม่ทำงาน — ใช้ Magic หรือ Cannon Splash แทน',
      rain:'Cannon และ Magic Splash ลดลง 70% — ใช้ Sniper/Minigun/Thunder แทน',
      tornado:'กระสุนทุกนัดพลาดได้ 50% ไม่ว่าจะยิงมอนอะไร — เน้นป้อมหลายตัว rate สูง อย่าพึ่งป้อมเดียว',
      storm:'ศัตรูเร็วขึ้น 30% + ค้างคาว/วิเวิร์นหลบ 25% — Thunder/Minigun จัดการ air unit, เน้น DPS รับมือความเร็ว',
      sun:'เหมืองทองหยุดทำงาน — อย่าพึ่งรายได้จาก Gold Mine',
    };
    const tip=tipsMap[w.id]||'';
    return `<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:12px 14px;margin-bottom:10px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
        <span style="font-size:22px;">${w.icon}</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:#fff;">${w.name}</div>
          <div style="font-size:11px;color:#ef9a9a;margin-top:2px;">⚠️ ${w.desc}</div>
        </div>
      </div>
      ${tip?`<div style="font-size:11px;color:#a5d6a7;background:rgba(76,175,80,.08);border-left:3px solid #4caf50;padding:5px 9px;border-radius:0 6px 6px 0;">💡 ${tip}</div>`:''}
    </div>`;
  }).join('');
  body.innerHTML=`<div style="padding:4px 2px;">${rows}</div>`;
}
function selectCodex(i){cdxSel=(cdxSel===i)?-1:i;renderCodex();}

function renderMonsterDetail(i){
  const bHP=CFG.m_hp[i],spd=CFG.m_spd[i],rew=CFG.m_rew[i];
  const isBoss=MTYPE[i]===1;
  const subLabel=isBoss?'⚠️ Boss — Special Unit':'Common Enemy';
  const _actStages=typeof STAGES!=='undefined'?STAGES.filter(s=>s.enemyTypes&&s.enemyTypes.includes(i)):[];
  const _inAct1=_actStages.some(s=>(s.act||1)===1);
  const _inAct2=_actStages.some(s=>s.act===2);
  const _actBadge=(_inAct1&&_inAct2)?'<span style="font-size:10px;background:rgba(105,240,174,.15);border:1px solid rgba(105,240,174,.3);border-radius:5px;padding:2px 7px;color:#69f0ae;margin-right:4px;">⚔️ บทที่ 1</span><span style="font-size:10px;background:rgba(255,110,64,.15);border:1px solid rgba(255,110,64,.3);border-radius:5px;padding:2px 7px;color:#ff6e40;">🌍 บทที่ 2</span>':_inAct2?'<span style="font-size:10px;background:rgba(255,110,64,.15);border:1px solid rgba(255,110,64,.3);border-radius:5px;padding:2px 7px;color:#ff6e40;">🌍 บทที่ 2 (ใหม่)</span>':'<span style="font-size:10px;background:rgba(105,240,174,.15);border:1px solid rgba(105,240,174,.3);border-radius:5px;padding:2px 7px;color:#69f0ae;">⚔️ บทที่ 1</span>';
  return `<div class="cdx-detail">
    <div class="cdx-detail-head">
      <div class="cdx-detail-ico"><img src="${getEnemyIconURL(i,56)}" width="56" height="56" style="image-rendering:pixelated;"></div>
      <div>
        <div class="cdx-detail-name">${ENAMES[i]}</div>
        <div class="cdx-detail-sub">${subLabel}</div>
        <div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;">
          ${_actBadge}
          <span style="font-size:10px;background:rgba(255,255,255,.08);border-radius:5px;padding:2px 7px;color:#ce93d8;">⚔️ เผ่า: ${MTRIBE[i]}</span>
        </div>
      </div>
    </div>
    <div class="cdx-flavor">${MFLAVOR[i]}</div>
    ${sRow('❤️ HP พื้นฐาน',bHP/450,bHP,'')}
    ${sRow('💨 ความเร็ว',spd/2.2,spd.toFixed(1),'ช่อง/วิ')}
    ${sRow('💰 รางวัล',rew/60,rew,'ทอง')}
    <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <div style="background:rgba(244,67,54,.07);border:1px solid rgba(244,67,54,.2);border-radius:8px;padding:8px;">
        <div style="font-size:9px;color:#ef5350;font-weight:700;margin-bottom:5px;letter-spacing:.5px;">💪 จุดแข็ง</div>
        <div style="display:flex;flex-direction:column;gap:4px;">${MSTRENGTH[i].map(s=>`<span style="font-size:10px;color:#ef9a9a;">• ${s}</span>`).join('')}</div>
      </div>
      <div style="background:rgba(76,175,80,.07);border:1px solid rgba(76,175,80,.2);border-radius:8px;padding:8px;">
        <div style="font-size:9px;color:#4caf50;font-weight:700;margin-bottom:5px;letter-spacing:.5px;">🎯 จุดอ่อน</div>
        <div style="display:flex;flex-direction:column;gap:4px;">${MWEAKNESS[i].map(w=>`<span style="font-size:10px;color:#a5d6a7;">• ${w}</span>`).join('')}</div>
      </div>
    </div>
    ${MSPECIAL[i]?`<div style="margin-top:8px;font-size:11px;color:#ce93d8;background:rgba(156,39,176,.1);border-left:3px solid #ab47bc;padding:7px 10px;border-radius:0 8px 8px 0;">${MSPECIAL[i]}</div>`:''}
    <div style="margin-top:8px;font-size:10px;color:#444;">HP ×${(1+CFG.stageMult).toFixed(2)}/ด่าน · ×${(1+CFG.waveMult).toFixed(2)}/คลื่น</div>
  </div>`;
}

function renderCodex(){
  const isBoss=cdxTab==='boss';
  const isM=cdxTab==='monster'||isBoss;
  // filter indices by tab
  let indices=[];
  if(cdxTab==='monster') indices=ENAMES.map((_,i)=>i).filter(i=>MTYPE[i]===0);
  else if(cdxTab==='boss') indices=ENAMES.map((_,i)=>i).filter(i=>MTYPE[i]===1);
  else indices=TNAMES.map((_,i)=>i);  /* tower ทั้งหมด */

  const seen=isM?seenMonsters:new Set(['0','1','2','3','4']);
  // dynamic counts now computed below

  const totalMonster=ENAMES.filter((_,i)=>MTYPE[i]===0).length;
  const totalBoss=ENAMES.filter((_,i)=>MTYPE[i]===1).length;
  const normalSeen2=ENAMES.map((_,i)=>i).filter(i=>MTYPE[i]===0&&seenMonsters.has(String(i))).length;
  const bossSeen2=ENAMES.map((_,i)=>i).filter(i=>MTYPE[i]===1&&seenMonsters.has(String(i))).length;
  if(cdxTab==='monster')
    document.getElementById('cdxProg').textContent=normalSeen2+'/'+totalMonster+' ปลดล็อก';
  else if(cdxTab==='boss')
    document.getElementById('cdxProg').textContent=bossSeen2+'/'+totalBoss+' ปลดล็อก';
  else {
    const unlockedTCount=getUnlockedTowers().size;
    document.getElementById('cdxProg').textContent=unlockedTCount+'/'+TNAMES.length+' ปลดล็อก';
  }

  let html='<div class="cdx-grid">';
  const comingSoon=`<div class="cdx-card locked" style="border-style:dashed;opacity:.22;cursor:default;">
    <div class="ico">🔒</div><div class="cname" style="color:#555;">เร็วๆ นี้</div></div>`;
  if(isM){
    indices.forEach(i=>{
      const u=seen.has(String(i));
      html+=`<div class="cdx-card${u?'':' locked'}${cdxSel===i?' active':''}" onclick="${u?'selectCodex('+i+')':''}">
        <div class="ico">${u?`<img src="${getEnemyIconURL(i,44)}" width="44" height="44" style="image-rendering:pixelated;">`:'❓'}</div>
        <div class="cname">${u?ENAMES[i]:'???'}</div>
      </div>`;
    });
    /* placeholder สำหรับตัวใหม่ในอนาคต */
    html+=comingSoon;
  } else {
    const unlockedT=getUnlockedTowers();
    TNAMES.forEach((_,i)=>{
      const u=unlockedT.has(i);
      html+=`<div class="cdx-card${u?'':' locked'}${cdxSel===i&&u?' active':''}" onclick="${u?'selectCodex('+i+')':''}">
        <div class="ico">${u?`<img src="${getTowerIconURL(i,36)}" width="36" height="36" class="cdx-tico" style="image-rendering:pixelated;border-color:${TACCENT[i]};box-shadow:0 0 8px ${TACCENT[i]}66,inset 0 0 8px ${TACCENT[i]}22;">`:'🔒'}</div>
        <div class="cname">${u?TNAMES[i]:'???'}</div>
      </div>`;
    });
    /* placeholder สำหรับป้อมใหม่ในอนาคต */
    html+=comingSoon;
  }
  html+='</div>';

  const towerUnlocked=!isM?getUnlockedTowers().has(cdxSel):true;
  if(cdxSel>=0&&(isM?seen.has(String(cdxSel)):towerUnlocked)){
    if(isM){
      html+=renderMonsterDetail(cdxSel);
    } else {
      let rows='',lvHead;
      if(cdxSel===3){ // 🎯 สไนเปอร์: อัตรายิง / คริติคอล
        lvHead='<th>ระดับ</th><th>อัตรายิง</th><th>คริติคอล</th><th>ต้องการ</th>';
        for(let lv=1;lv<=5;lv++){
          const crit=getSniperCrit(lv);
          rows+=`<tr><td><span class="lv-badge">Lv${lv}</span></td>
            <td>${getTowerRate(3,lv).toFixed(1)}ครั้ง/วิ</td>
            <td>${Math.round(crit.chance*100)}% x${crit.mult}</td>
            <td>${lv===1?'พื้นฐาน':'★'+(lv-1)+' ขึ้นไป'}</td></tr>`;
        }
      } else if(cdxSel===6){ // 💰 เหมืองทอง: ผลิตทุก / ทองต่อครั้ง
        lvHead='<th>ระดับ</th><th>ผลิตทุก</th><th>ทองต่อครั้ง</th><th>ต้องการ</th>';
        for(let lv=1;lv<=5;lv++){
          rows+=`<tr><td><span class="lv-badge">Lv${lv}</span></td>
            <td>${getGoldMineInterval(lv).toFixed(1)}วิ</td>
            <td>${getGoldMineAmt(lv)} ทอง</td>
            <td>${lv===1?'พื้นฐาน':'★'+(lv-1)+' ขึ้นไป'}</td></tr>`;
        }
      } else if(cdxSel===4){ // 💚 ซัพพอร์ต: ระยะ / กันหยุดป้อม (สาย)
        lvHead='<th>ระดับ</th><th>ระยะ</th><th>กันหยุดป้อม(สาย)</th><th>ต้องการ</th>';
        for(let lv=1;lv<=5;lv++){
          const bonus=Math.min(1,(lv-1)*.05);
          rows+=`<tr><td><span class="lv-badge">Lv${lv}</span></td>
            <td>${getTowerRange(4,lv).toFixed(1)}</td>
            <td>+${Math.round(bonus*100)}%</td>
            <td>${lv===1?'พื้นฐาน':'★'+(lv-1)+' ขึ้นไป'}</td></tr>`;
        }
      } else {
        lvHead='<th>ระดับ</th><th>ดาเมจ</th><th>ระยะ</th><th>อัตรายิง</th><th>ต้องการ</th>';
        for(let lv=1;lv<=5;lv++){
          rows+=`<tr><td><span class="lv-badge">Lv${lv}</span></td>
            <td>${CFG.t_dmg[cdxSel]===0?'—':Math.round(getTowerDmg(cdxSel,lv))}</td>
            <td>${getTowerRange(cdxSel,lv).toFixed(1)}</td>
            <td>${CFG.t_rate[cdxSel]===0?'—':getTowerRate(cdxSel,lv).toFixed(1)+'ครั้ง/วิ'}</td>
            <td>${lv===1?'พื้นฐาน':'★'+(lv-1)+' ขึ้นไป'}</td></tr>`;
        }
      }
      html+=`<div class="cdx-detail">
        <div class="cdx-detail-head">
          <div class="cdx-detail-ico"><img src="${getTowerIconURL(cdxSel,48)}" width="48" height="48" class="cdx-tico cdx-tico-lg" style="image-rendering:pixelated;border-color:${TACCENT[cdxSel]};box-shadow:0 0 14px ${TACCENT[cdxSel]}77,inset 0 0 14px ${TACCENT[cdxSel]}22;"></div>
          <div>
            <div class="cdx-detail-name">${TNAMES[cdxSel]}</div>
            <div class="cdx-detail-sub">ป้อมปราการ</div>
            <div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;">
              <span style="font-size:10px;background:rgba(255,255,255,.08);border-radius:5px;padding:2px 7px;color:#80cbc4;">💰 ราคา: ${CFG.t_cost[cdxSel]} ทอง</span>
              ${cdxSel===8?'<span style="font-size:10px;background:rgba(179,136,255,.15);border:1px solid rgba(179,136,255,.35);border-radius:5px;padding:2px 7px;color:#b388ff;">🛠️ ปลดล็อกจาก Workshop</span>':''}
            </div>
          </div>
        </div>
        <div class="cdx-flavor">${TFLAVOR[cdxSel]}</div>
        ${sRow('⚔️ ความเสียหาย',CFG.t_dmg[cdxSel]/80,CFG.t_dmg[cdxSel]===0?'—':CFG.t_dmg[cdxSel],'')}
        ${sRow('📡 ระยะยิง',CFG.t_rng[cdxSel]/5,CFG.t_rng[cdxSel].toFixed(1),'ช่อง')}
        ${sRow('⚡ อัตราการยิง',CFG.t_rate[cdxSel]/2,CFG.t_rate[cdxSel]===0?'—':CFG.t_rate[cdxSel].toFixed(1),'ครั้ง/วิ')}
        <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <div style="background:rgba(244,67,54,.07);border:1px solid rgba(244,67,54,.2);border-radius:8px;padding:8px;">
            <div style="font-size:9px;color:#ef5350;font-weight:700;margin-bottom:5px;letter-spacing:.5px;">💪 จุดแข็ง</div>
            <div style="display:flex;flex-direction:column;gap:4px;">${TSTRENGTH[cdxSel].map(s=>`<span style="font-size:10px;color:#ef9a9a;">• ${s}</span>`).join('')}</div>
          </div>
          <div style="background:rgba(76,175,80,.07);border:1px solid rgba(76,175,80,.2);border-radius:8px;padding:8px;">
            <div style="font-size:9px;color:#4caf50;font-weight:700;margin-bottom:5px;letter-spacing:.5px;">🎯 จุดอ่อน</div>
            <div style="display:flex;flex-direction:column;gap:4px;">${TWEAKNESS[cdxSel].map(w=>`<span style="font-size:10px;color:#a5d6a7;">• ${w}</span>`).join('')}</div>
          </div>
        </div>
        <div style="margin-top:8px;font-size:11px;color:#80cbc4;background:rgba(0,150,136,.1);border-left:3px solid #26a69a;padding:7px 10px;border-radius:0 8px 8px 0;">${TSPECIAL[cdxSel]}</div>
        ${typeof TAWAKEN_DESC!=='undefined'&&TAWAKEN_DESC[cdxSel]?`<div style="margin-top:6px;font-size:11px;color:#ffe082;background:rgba(255,193,7,.08);border-left:3px solid #ffc107;padding:7px 10px;border-radius:0 8px 8px 0;">✨ <b>Awaken:</b> ${TAWAKEN_DESC[cdxSel]}</div>`:''}
        <table class="lv-table"><tr>${lvHead}</tr>${rows}</table>
        <div style="margin-top:6px;font-size:10px;color:#90caf9;background:rgba(144,202,249,.08);border-left:3px solid #42a5f5;padding:6px 10px;border-radius:0 8px 8px 0;">
          ✨ <b>ระบบรวมป้อม (Star Merge):</b> ลากป้อมชนิด/★เดียวกันทับกันเพื่อรวมเป็นป้อมเดียว ★สูงขึ้น (สูงสุด ★4) แต้มสกิลที่ได้ฟรีจะรีเซ็ตและจัดสรรใหม่ตามดาว — ★3 ขึ้นไปจะ Awaken ได้ (💰350) แต่ป้อมจะ "ล็อกดาว" รวมต่อไม่ได้อีก
          <br>⚔️ <b>ดาเมจพื้นฐาน</b> ของป้อมยังเพิ่มขึ้นตาม★ที่ได้จากการรวม (★2=+15%, ★3=+30%, ★4=+50%) แยกจากแต้มสกิลที่จัดสรรเอง
          ${cdxSel===4?'<br>🛡️ <b>ออร่ากันหยุดป้อม:</b> ป้อม Support ทุกตัวในระยะมีโอกาสต้านสกิลหยุดป้อมของมอนสเตอร์ — ★1-4 = 20/40/60/80% (Awaken = 100%) บวกเพิ่มจากสาย "กันหยุดป้อม" ของป้อม Support ตัวนั้น':''}
        </div>
      </div>`;
    }
  }
  document.getElementById('cdxBody').innerHTML=html;
}
function sRow(label,pct,val,unit){
  const cols=['#ef5350','#42a5f5','#ffd54f','#66bb6a','#ff7043'];
  return `<div class="stat-row"><div class="stat-label">${label}</div>
    <div class="stat-bar-wrap"><div class="stat-bar" style="width:${Math.min(100,Math.max(0,pct*100)).toFixed(0)}%;background:${cols[label.charCodeAt(0)%5]};"></div></div>
    <div class="stat-val">${val}${unit}</div></div>`;
}
function openCodex(){
  showScreen('codex',true);
  cdxSel=-1; cdxTab='monster';
  ['tabMonster','tabBoss','tabTower'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.classList.toggle('active',id==='tabMonster');
  });
  renderCodex();
}

/* ══ DEV PANEL ══ */
let devTab=0;
function openDev(fromMenu){
  devFromMenu=fromMenu;
  if(!fromMenu&&G&&!G.over&&!G.win) paused=true;
  showScreen('devpanel',true);
  switchDevTab(0);
}
function closeDev(){
  document.getElementById('devpanel').style.display='none';
  if(G&&!G.over&&!G.win){ // กลับเกมถ้ายังเล่นอยู่ ไม่ว่าจะเปิด dev จากทางไหน
    showScreen('gp',true);
    paused=false;
    document.getElementById('pauseBtn').textContent='⏸';
  } else {
    showScreen('mm',true);
  }
}
function switchDevTab(i){
  devTab=i;
  for(let j=0;j<6;j++){const el=document.getElementById('dtab'+j);if(el)el.classList.toggle('active',j===i);}
  renderDevPanel();
}
function renderDevPanel(){
  const body=document.getElementById('devBody');
  if(devTab===0)body.innerHTML=renderDevCurve();
  else if(devTab===1)body.innerHTML=renderDevMonster();
  else if(devTab===2)body.innerHTML=renderDevTower();
  else if(devTab===3)body.innerHTML=renderDevCheat();
  else if(devTab===4)body.innerHTML=renderDevDebug();
  else renderDevLbAdmin(body);
  if(devTab===0) setTimeout(drawCurveGraph,60);
}
function renderDevCurve(){
  return `<div class="dev-info-box">HP = พื้นฐาน × (1 + ด่าน × <strong>ตัวคูณด่าน</strong>) × (1 + Wave × <strong>ตัวคูณคลื่น</strong>)</div>
  <div class="dev-section"><div class="dev-section-title">🗺️ การสเกลตามด่าน</div>
    ${dSlide('stageMult','HP +% ต่อด่าน','',CFG.stageMult,0,1.5,.05)}
    ${dSlide('spdStageMult','ความเร็ว +% ต่อด่าน','',CFG.spdStageMult,0,.3,.01)}
    ${dSlide('spdCap','ความเร็วสูงสุด','',CFG.spdCap,.5,4.0,.05)}</div>
  <div class="dev-section"><div class="dev-section-title">🌊 การสเกลตามคลื่น</div>
    ${dSlide('waveMult','HP +% ต่อคลื่น','',CFG.waveMult,0,.5,.01)}
    ${dSlide('enemyPerWaveBase','ศัตรูเริ่มต้น','',CFG.enemyPerWaveBase,1,15,1)}
    ${dSlide('enemyPerWaveInc','ศัตรูเพิ่ม/คลื่น','',CFG.enemyPerWaveInc,0,10,1)}
    ${dSlide('bossChance','โอกาสบอส','Wave 4+',CFG.bossChance,0,.5,.01)}</div>
  <div class="dev-section"><div class="dev-section-title">📊 กราฟ HP ตัวอย่าง</div>
    <div style="background:#0a0a0a;border:1px solid #333;border-radius:8px;padding:10px;">
      <div style="font-size:10px;color:#555;margin-bottom:6px;">HP โกบลินต่อWave — ด่าน1/2/3</div>
      <canvas id="curveCanvas" height="100" style="width:100%;display:block;"></canvas>
    </div></div>`;
}
function renderDevMonster(){
  return ENAMES.map((name,i)=>`<div class="dev-section"><div class="dev-section-title">${EICONS[i]} ${name}</div>
    ${dSlide('m_hp_'+i,'HP พื้นฐาน','',CFG.m_hp[i],10,1000,5,true)}
    ${dSlide('m_spd_'+i,'Speed','ช่อง/วิ',CFG.m_spd[i],.2,3.0,.05,true)}
    ${dSlide('m_rew_'+i,'Reward','ทอง',CFG.m_rew[i],1,100,1,true)}</div>`).join('');
}
function renderDevTower(){
  return TNAMES.map((name,i)=>`<div class="dev-section"><div class="dev-section-title">${TICONS[i]} ${name}</div>
    ${i!==4?dSlide('t_dmg_'+i,'ความเสียหาย','',CFG.t_dmg[i],0,200,1,true):''}
    ${dSlide('t_rng_'+i,'ระยะ','ช่อง',CFG.t_rng[i],.5,6,.1,true)}
    ${i!==4?dSlide('t_rate_'+i,'อัตราการยิง','ครั้ง/วิ',CFG.t_rate[i],.1,4,.1,true):''}
    ${dSlide('t_cost_'+i,'Cost','ทอง',CFG.t_cost[i],10,300,5,true)}</div>`).join('');
}
function renderDevCheat(){
  return `
  <div class="dev-section">
    <div class="dev-section-title">💰 ทรัพยากร</div>
    <div class="dev-cheat-sub">ทองในด่าน</div>
    <div class="dev-cheat-grid dev-cheat-3">
      <div class="dev-cheat-btn green" onclick="cheat('gold500')">+500 💰</div>
      <div class="dev-cheat-btn green" onclick="cheat('gold9999')">+9999 💰</div>
      <div class="dev-cheat-btn green" onclick="cheat('hp_full')">❤️ เต็ม</div>
    </div>
    <div class="dev-cheat-sub" style="margin-top:10px;">ทองถาวร 🪙</div>
    <div class="dev-cheat-grid dev-cheat-3">
      <div class="dev-cheat-btn green" onclick="cheat('pgold500')">+500 🪙</div>
      <div class="dev-cheat-btn green" onclick="cheat('pgold9999')">+9999 🪙</div>
      <div class="dev-cheat-btn" onclick="cheat('hp10')">HP=10</div>
    </div>
    <div class="dev-cheat-sub" style="margin-top:10px;">มณี <span class="gico"></span> & ตั๋ว 🎫</div>
    <div class="dev-cheat-grid dev-cheat-3">
      <div class="dev-cheat-btn green" onclick="cheat('gem100')">+100 <span class="gico"></span></div>
      <div class="dev-cheat-btn green" onclick="cheat('gem999')">+999 <span class="gico"></span></div>
      <div class="dev-cheat-btn" onclick="cheat('gem0')"><span class="gico"></span>=0</div>
    </div>
    <div class="dev-cheat-grid dev-cheat-3" style="margin-top:9px;">
      <div class="dev-cheat-btn green" onclick="cheat('ticket10')">+10 🎫</div>
      <div class="dev-cheat-btn" onclick="cheat('pity0')">รีเซ็ต Pity</div>
      <div></div>
    </div>
  </div>
  <div class="dev-section">
    <div class="dev-section-title">🧱 วัสดุ</div>
    <div class="dev-cheat-grid dev-cheat-3">
      <div class="dev-cheat-btn green" onclick="cheat('mat0_10')">+10 🪨</div>
      <div class="dev-cheat-btn green" onclick="cheat('mat1_10')">+10 🔘</div>
      <div class="dev-cheat-btn green" onclick="cheat('mat2_5')">+5 🌟</div>
    </div>
    <div class="dev-cheat-grid" style="margin-top:9px;">
      <div class="dev-cheat-btn red" onclick="cheat('mat_reset')">↺ รีเซ็ตวัสดุทั้งหมด</div>
    </div>
  </div>
  <div class="dev-section">
    <div class="dev-section-title">⚔️ Combat</div>
    <div class="dev-cheat-grid">
      <div class="dev-cheat-btn" onclick="cheat('skip_wave')">⏭ ข้ามคลื่น</div>
      <div class="dev-cheat-btn" onclick="cheat('kill_all')">💀 ฆ่าทั้งหมด</div>
    </div>
    <div class="dev-cheat-grid" style="margin-top:9px;">
      <div class="dev-cheat-btn red" onclick="cheat('wave_1')">↩ รีเซ็ตคลื่น</div>
      <div class="dev-cheat-btn red" onclick="cheat('clear_towers')">🗑 ลบป้อม</div>
    </div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,.06);">
      ${dSlide('startGold','ทองเริ่มต้น','ทอง',CFG.startGold,50,1000,25)}
      ${dSlide('baseHP','HP ปราสาท','hp',CFG.baseHP,1,50,1)}
      ${dSlide('spawnInterval','Spawn Interval','s',CFG.spawnInterval,.1,3,.05)}
    </div>
  </div>
  <div class="dev-section">
    <div class="dev-section-title">📁 Progress</div>
    <div class="dev-cheat-grid">
      <div class="dev-cheat-btn green" onclick="cheat('unlock_stages')">🔓 Unlock All</div>
      <div class="dev-cheat-btn red" onclick="cheat('reset_stages')">↺ Reset</div>
    </div>
    <div class="dev-cheat-grid" style="margin-top:9px;">
      <div class="dev-cheat-btn" onclick="cheat('unlock_codex')">📖 Codex ✓</div>
      <div class="dev-cheat-btn red" onclick="cheat('lock_codex')">🔒 Codex ✗</div>
    </div>
    <div class="dev-cheat-grid" style="margin-top:9px;">
      <div class="dev-cheat-btn green" onclick="cheat('unlock_ach')">🎖️ Ach ✓</div>
      <div class="dev-cheat-btn red" onclick="cheat('reset_ach')">↺ Ach ✗</div>
    </div>
  </div>`;
}
function dSlide(key,label,sub,val,min,max,step,isArr){
  const disp=step>=1?parseInt(val):parseFloat(val).toFixed(step<.1?2:1);
  return `<div class="dev-row">
    <div class="dev-lbl">${label}<span>${sub}</span></div>
    <input class="dev-slider" type="range" id="dsl_${key}" min="${min}" max="${max}" step="${step}" value="${val}" oninput="dsc('${key}',this.value,${!!isArr})">
    <div class="dev-val" id="dv_${key}">${disp}</div></div>`;
}
function dsc(key,val,isArr){
  const num=parseFloat(val);
  const step=parseFloat(document.getElementById('dsl_'+key).step);
  document.getElementById('dv_'+key).textContent=step>=1?parseInt(num):num.toFixed(step<.1?2:1);
  if(isArr){
    const parts=key.split('_');const idx=parseInt(parts.pop());
    CFG[parts.join('_')][idx]=num;
  } else { CFG[key]=num; }
  if(devTab===0) drawCurveGraph();
  // B1: rebuild sprite caches when tower params change
  if(key.startsWith('t_')){_SC=null;_iconCache={};}
}
function drawCurveGraph(){
  const canvas=document.getElementById('curveCanvas');
  if(!canvas) return;
  const W=canvas.offsetWidth||300,H=100;
  canvas.width=W; canvas.height=H;
  const c=canvas.getContext('2d');
  c.clearRect(0,0,W,H);
  const maxWaves=9,stageList=[0,1,2],cols=['#4caf50','#ff9800','#f44336'];
  let mx=0;
  stageList.forEach(s=>{for(let w=1;w<=maxWaves;w++) mx=Math.max(mx,getEnemyHP(0,s,w));});
  c.strokeStyle='rgba(255,255,255,.05)';c.lineWidth=1;
  for(let i=1;i<=4;i++){const y=H-(i/4)*H;c.beginPath();c.moveTo(0,y);c.lineTo(W,y);c.stroke();}
  stageList.forEach((s,si)=>{
    c.beginPath();c.strokeStyle=cols[si];c.lineWidth=2;
    for(let w=1;w<=maxWaves;w++){
      const hp=getEnemyHP(0,s,w),x=(w-1)/(maxWaves-1)*W,y=H-(hp/mx)*(H-12)-6;
      w===1?c.moveTo(x,y):c.lineTo(x,y);
    }
    c.stroke();
    const lHP=getEnemyHP(0,s,maxWaves);
    c.fillStyle=cols[si];c.font='9px Arial';c.textAlign='right';
    c.fillText('S'+(s+1)+' '+Math.round(lHP),W-2,H-(lHP/mx)*(H-12)-8);
  });
  c.fillStyle='#444';c.font='9px Arial';c.textAlign='center';
  for(let w=1;w<=maxWaves;w+=2) c.fillText('W'+w,(w-1)/(maxWaves-1)*W,H);
}
function cheat(cmd){
  const needGame=['gold500','gold9999','hp_full','hp10','skip_wave','kill_all','wave_1','clear_towers'];
  if(needGame.includes(cmd)&&!G){showToast('⚠️ เริ่มเกมก่อนนะครับ!');return;}
  switch(cmd){
    case 'gold500': G.gold+=500;updateHUD();showToast('💰 +500 ทอง!');break;
    case 'gold9999': G.gold+=9999;updateHUD();showToast('💰 +9999 ทอง!');break;
    case 'hp_full': G.hp=G.maxHp;updateHUD();showToast('❤️ HP เต็มแล้ว!');break;
    case 'hp10': G.hp=Math.min(10,G.maxHp);updateHUD();showToast('❤️ ตั้ง HP=10 แล้ว');break;
    case 'skip_wave':
      G.enemies.length=0;G.queue.length=0;G.projs.length=0;
      G.waveActive=false;document.getElementById('waveBtn').disabled=false;
      showToast('⏭ ข้ามคลื่นแล้ว!');break;
    case 'kill_all': [...G.enemies].forEach(e=>{if(e.alive)killEnemy(e);});showToast('💀 ฆ่าศัตรูทั้งหมดแล้ว!');break;
    case 'wave_1':
      G.wave=0;G.waveActive=false;
      G.enemies.length=0;G.queue.length=0;G.projs.length=0;
      document.getElementById('waveTxt').textContent='0';
      document.getElementById('waveBtn').disabled=false;
      showToast('↩ รีเซ็ตคลื่นแล้ว!');break;
    case 'clear_towers': G.towers=[];showToast('🗑 ลบป้อมทั้งหมดแล้ว!');break;
    case 'unlock_stages':{
      const p={};STAGES.forEach((_,i)=>p[i]=3);
      localStorage.setItem('tq_progress',JSON.stringify(p));
      showToast('🔓 ปลดล็อคทุกด่านแล้ว!');break;}
    case 'reset_stages':
      localStorage.removeItem('tq_progress');showToast('↺ Reset Progressแล้ว!');break;
    case 'unlock_codex':
      for(let i=0;i<ENAMES.length;i++) seenMonsters.add(String(i));
      localStorage.setItem('tq_seen',JSON.stringify([...seenMonsters]));showToast('📖 Codex unlocked!');break;
    case 'lock_codex':
      seenMonsters=new Set();localStorage.setItem('tq_seen','[]');showToast('🔒 Lock Codexแล้ว!');break;
    case 'unlock_ach':
      ACHIEVEMENTS.forEach(a=>_saveAch(a.id));_updateAchBadge();showToast('🎖️ ปลดล็อค Achievement ทั้งหมด!');break;
    case 'reset_ach':
      localStorage.removeItem('tq_ach');localStorage.removeItem('tq_achstats');localStorage.removeItem('tq_ach_seen');
      _updateAchBadge();showToast('↺ Reset Achievement แล้ว!');break;
    case 'gem100': saveGems(loadGems()+100);showToast('<span class="gico"></span> +100 มณีวิญญาณ!');break;
    case 'gem999': saveGems(loadGems()+999);showToast('<span class="gico"></span> +999 มณีวิญญาณ!');break;
    case 'gem0': saveGems(0);showToast('<span class="gico"></span> ตั้งมณีเป็น 0 แล้ว');break;
    case 'pity0': saveGachaPity(0);showToast('🔄 รีเซ็ต Pity แล้ว');break;
    case 'pgold500': addPGold(500);showToast('🪙 +500 ทองถาวร!');break;
    case 'pgold9999': addPGold(9999);showToast('🪙 +9999 ทองถาวร!');break;
    case 'ticket10': addTickets(10);showToast('🎫 +10 ตั๋วสกิล!');break;
    case 'mat0_10':{const m=loadMaterials();m[0]=(m[0]||0)+10;saveMaterials(m);showToast('🪨 +10 หินมืด!');break;}
    case 'mat1_10':{const m=loadMaterials();m[1]=(m[1]||0)+10;saveMaterials(m);showToast('🔘 +10 เศษแกนเวท!');break;}
    case 'mat2_5':{const m=loadMaterials();m[2]=(m[2]||0)+5;saveMaterials(m);showToast('🌟 +5 ดาวตก!');break;}
    case 'mat_reset': saveMaterials([0,0,0]);showToast('↺ รีเซ็ตวัสดุแล้ว!');break;
  }
}
function devReset(){CFG=JSON.parse(JSON.stringify(DEFAULT_CFG));localStorage.removeItem('tq_cfg');showToast('↺ รีเซ็ตค่าคอนฟิกแล้ว!');renderDevPanel();}

/* ══ DEBUG PANEL ══ */
function renderDevDebug(){
  const p=loadProgress();
  const maxHp=CFG.baseHP;
  // star thresholds
  const t3=Math.ceil(maxHp*.75), t2=Math.ceil(maxHp*.4);

  // current game state
  let gameSection='';
  if(G&&!G.over&&!G.win){
    const hp=G.hp, pct=Math.round(hp/maxHp*100);
    const predStars=hp>=t3?3:hp>=t2?2:hp>0?1:0;
    const starStr='★'.repeat(predStars)+'☆'.repeat(3-predStars);
    const col=predStars===3?'#4caf50':predStars===2?'#ff9800':predStars===1?'#ef5350':'#555';
    gameSection=`
    <div class="dev-section">
      <div class="dev-section-title">🎮 สถานะเกมปัจจุบัน</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
        <div style="background:#0a0a0a;border:1px solid #333;border-radius:8px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:#666;margin-bottom:4px;">HP ปัจจุบัน</div>
          <div style="font-size:22px;font-weight:900;color:#ffe082;">${hp} <span style="font-size:12px;color:#666;">/ ${maxHp}</span></div>
          <div style="font-size:11px;color:#aaa;">${pct}%</div>
        </div>
        <div style="background:#0a0a0a;border:1px solid #333;border-radius:8px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:#666;margin-bottom:4px;">ดาวที่จะได้ถ้าจบตอนนี้</div>
          <div style="font-size:22px;color:${col};">${starStr}</div>
          <div style="font-size:10px;color:#666;">${predStars} ดาว</div>
        </div>
      </div>
      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:10px;font-size:11px;line-height:1.8;color:#aaa;">
        <div>⭐⭐⭐ ต้องการ HP ≥ <strong style="color:#4caf50">${t3}</strong> (${Math.round(t3/maxHp*100)}%)</div>
        <div>⭐⭐ ต้องการ HP ≥ <strong style="color:#ff9800">${t2}</strong> (${Math.round(t2/maxHp*100)}%)</div>
        <div>⭐ ต้องการ HP ≥ <strong style="color:#ef5350">1</strong> (ผ่านก็ได้)</div>
      </div>
      <div style="margin-top:8px;font-size:10px;color:#555;">ด่าน: ${currentStage?currentStage.name:'—'} | Wave: ${G.wave}/${currentStage?currentStage.waves:'?'} | คะแนน: ${G.score}</div>
    </div>`;
  } else {
    gameSection=`<div class="dev-section"><div style="font-size:12px;color:#555;text-align:center;padding:8px;">⚠️ ไม่มีเกมที่กำลังเล่นอยู่<br><span style="font-size:10px;">เปิด Dev Panel ระหว่างเล่นเพื่อดูข้อมูล real-time</span></div>
      <div style="background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;padding:10px;font-size:11px;line-height:1.8;color:#aaa;margin-top:8px;">
        <div>HP พื้นฐาน: <strong style="color:#ffe082">${maxHp}</strong></div>
        <div>⭐⭐⭐ ต้องการ HP ≥ <strong style="color:#4caf50">${t3}</strong> (75%)</div>
        <div>⭐⭐ ต้องการ HP ≥ <strong style="color:#ff9800">${t2}</strong> (40%)</div>
        <div>⭐ ต้องการ HP ≥ <strong style="color:#ef5350">1</strong></div>
      </div>
    </div>`;
  }

  // localStorage progress
  let progressRows='';
  STAGES.forEach((s,i)=>{
    const stars=p[i];
    const played=stars!==undefined;
    const starStr=played?(stars>0?'★'.repeat(stars)+'☆'.repeat(3-stars):'☆☆☆ (แพ้)'):'ยังไม่เคยเล่น';
    const col=!played?'#444':stars===3?'#4caf50':stars>=1?'#ff9800':'#ef5350';
    progressRows+=`<tr>
      <td style="padding:5px 6px;">${s.icon} ${s.name}</td>
      <td style="padding:5px 6px;text-align:center;color:${col};font-weight:700;">${starStr}</td>
      <td style="padding:5px 6px;text-align:center;color:#666;">${played?'✅':'—'}</td>
    </tr>`;
  });

  // raw localStorage
  const rawProgress=JSON.stringify(p,null,2);
  const rawSeen=JSON.stringify([...seenMonsters]);

  return gameSection+`
  <div class="dev-section">
    <div class="dev-section-title">💾 ข้อมูล localStorage จริง</div>
    <table style="width:100%;border-collapse:collapse;font-size:11px;margin-bottom:10px;">
      <tr style="border-bottom:1px solid #2a2a2a;">
        <th style="padding:5px 6px;text-align:left;color:#ff9800;font-size:10px;">ด่าน</th>
        <th style="padding:5px 6px;text-align:center;color:#ff9800;font-size:10px;">ดาวที่บันทึก</th>
        <th style="padding:5px 6px;text-align:center;color:#ff9800;font-size:10px;">บันทึกแล้ว</th>
      </tr>
      ${progressRows}
    </table>
    <div style="font-size:10px;color:#555;margin-bottom:4px;">tq_progress (raw JSON):</div>
    <div style="background:#0a0a0a;border:1px solid #222;border-radius:6px;padding:8px;font-family:monospace;font-size:10px;color:#8bc34a;white-space:pre;overflow-x:auto;">${rawProgress}</div>
    <div style="font-size:10px;color:#555;margin:8px 0 4px;">tq_seen (monster codex):</div>
    <div style="background:#0a0a0a;border:1px solid #222;border-radius:6px;padding:8px;font-family:monospace;font-size:10px;color:#8bc34a;">${rawSeen||'[]'}</div>
    <button onclick="renderDevPanel()" style="margin-top:10px;background:rgba(255,152,0,.12);border:1px solid #ff9800;border-radius:8px;padding:7px 16px;color:#ff9800;font-size:11px;font-weight:700;cursor:pointer;width:100%;">🔄 รีเฟรชข้อมูล</button>
  </div>`;
}

let _lbAdminUnlocked=false;
let _lbCountdownTimer=0,_lbResetAt=0,_lbSeasonNum=0;
function _lbAdminCard(e,i,apiPath){
  const rank=i+1;
  const hasUid=e.uid?'🔑':'👤';
  const uidLabel=e.uid?`UID: ${e.uid.slice(0,16)}…`:'UID: ไม่มี (เล่นก่อน login)';
  const diff=e.diff==='ยาก'?'🔴 ยาก':e.diff==='ปกติ'?'🟡 ปกติ':e.diff==='ง่าย'?'🟢 ง่าย':e.diff||'—';
  const waveInfo=e.round>1?`Round ${e.round} · Wave ${e.wave}`:e.wave?`Wave ${e.wave}`:'';
  const starsInfo=e.totalStars!=null?`⭐ ${e.totalStars} ดาว · ${e.stagesCleared||0} ด่าน`:'';
  const scoreInfo=e.score!=null?`${(e.score||0).toLocaleString()} คะแนน`:'';
  const fnName=apiPath==='/api/leaderboard'?'devDeleteLbEntry':'devDeleteSlbEntry';
  return `<div style="background:#111;border:1px solid #2a2a2a;border-radius:12px;padding:12px 14px;margin-bottom:10px;box-shadow:0 2px 8px rgba(0,0,0,.4);">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <div style="background:#1a1a1a;border:1px solid #333;border-radius:8px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#888;flex-shrink:0;">#${rank}</div>
      <span style="font-size:18px;flex-shrink:0;">${hasUid}</span>
      <span style="font-size:16px;font-weight:800;color:#fff;flex:1;min-width:0;">${e.name}</span>
      <button onclick="${fnName}(${rank})" style="background:linear-gradient(135deg,rgba(239,83,80,.25),rgba(183,28,28,.2));border:1px solid #ef5350;border-radius:8px;color:#ef5350;font-size:12px;font-weight:700;padding:5px 14px;cursor:pointer;flex-shrink:0;transition:all .15s;">✕ ลบ</button>
    </div>
    <div style="background:#0a0a0a;border:1px solid #1e1e1e;border-radius:8px;padding:8px 10px;font-size:11px;line-height:1.9;color:#888;">
      ${scoreInfo?`<div>📊 <span style="color:#ffe082;font-weight:700;">${scoreInfo}</span></div>`:''}
      ${starsInfo?`<div>🌟 <span style="color:#ffd54f;">${starsInfo}</span></div>`:''}
      ${diff!=='—'?`<div>⚔️ ความยาก: ${diff}</div>`:''}
      ${waveInfo?`<div>🌊 ${waveInfo}</div>`:''}
      <div style="color:#444;font-size:10px;margin-top:4px;">${uidLabel}</div>
    </div>
  </div>`;
}
async function renderDevLbAdmin(body){
  if(!_lbAdminUnlocked){
    body.innerHTML=`<div style="padding:24px 16px;text-align:center;">
      <div style="font-size:32px;margin-bottom:12px;">🔒</div>
      <div style="color:#aaa;font-size:13px;margin-bottom:16px;">ป้อนรหัสเพื่อเข้า LB Admin</div>
      <input id="lbAdminPwd" type="password" placeholder="รหัสผ่าน" style="background:#111;border:1px solid #333;border-radius:8px;color:#fff;padding:10px 14px;font-size:14px;width:180px;text-align:center;outline:none;margin-bottom:12px;display:block;margin-left:auto;margin-right:auto;">
      <button onclick="_lbAdminLogin()" style="background:linear-gradient(135deg,#ff9800,#e65100);border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:700;padding:10px 28px;cursor:pointer;">🔓 เข้าสู่ระบบ</button>
    </div>`;
    const inp=body.querySelector('#lbAdminPwd');
    if(inp) inp.addEventListener('keydown',e=>{if(e.key==='Enter')_lbAdminLogin();});
    return;
  }
  body.innerHTML='<div style="padding:16px;color:#aaa;font-size:12px;">⏳ โหลด leaderboard...</div>';
  try{
    const [r1,r2]=await Promise.all([fetch('/api/leaderboard'),fetch('/api/story-leaderboard')]);
    const [d1,d2]=await Promise.all([r1.json(),r2.json()]);
    let html='';
    // Endgame LB
    html+=`<div class="dev-section"><div class="dev-section-title">🔥 Endgame Leaderboard (${d1.entries?.length||0} รายการ)</div>`;
    html+='<div style="font-size:10px;color:#666;margin-bottom:12px;">🔑 = login Google &nbsp;·&nbsp; 👤 = ไม่มี uid</div>';
    if(!(d1.entries?.length)){html+='<div style="color:#555;font-size:12px;padding:8px 0;">ไม่มีข้อมูล</div>';}
    (d1.entries||[]).forEach((e,i)=>{ html+=_lbAdminCard(e,i,'/api/leaderboard'); });
    html+='</div>';
    // Story LB
    html+=`<div class="dev-section" style="margin-top:8px;"><div class="dev-section-title">⭐ Story Leaderboard (${d2.entries?.length||0} รายการ)</div>`;
    if(!(d2.entries?.length)){html+='<div style="color:#555;font-size:12px;padding:8px 0;">ไม่มีข้อมูล</div>';}
    (d2.entries||[]).forEach((e,i)=>{ html+=_lbAdminCard(e,i,'/api/story-leaderboard'); });
    html+='</div>';
    body.innerHTML=html;
  }catch(e){body.innerHTML=`<div style="padding:16px;color:#ef5350;font-size:12px;">❌ โหลดไม่ได้: ${e.message}</div>`;}
}
function _lbAdminLogin(){
  const v=document.getElementById('lbAdminPwd')?.value;
  if(v==='bahk1600401210'){_lbAdminUnlocked=true;renderDevPanel();}
  else{showToast('❌ รหัสผิด');document.getElementById('lbAdminPwd').value='';}
}
async function devDeleteLbEntry(rank){
  if(!confirm(`ลบ Endgame rank #${rank} ?`)) return;
  try{
    const r=await fetch('/api/leaderboard/'+rank,{method:'DELETE',headers:{'x-admin-key':'kt1233'}});
    const d=await r.json();
    if(d.ok){showToast(`✅ ลบ "${d.removed?.name}" แล้ว`);renderDevPanel();}
    else showToast('❌ '+(d.error||'unknown'));
  }catch(e){showToast('❌ '+e.message);}
}
async function devDeleteSlbEntry(rank){
  if(!confirm(`ลบ Story rank #${rank} ?`)) return;
  try{
    const r=await fetch('/api/story-leaderboard/'+rank,{method:'DELETE',headers:{'x-admin-key':'kt1233'}});
    const d=await r.json();
    if(d.ok){showToast(`✅ ลบ "${d.removed?.name}" แล้ว`);renderDevPanel();}
    else showToast('❌ '+(d.error||'unknown'));
  }catch(e){showToast('❌ '+e.message);}
}
function devCopyConfig(){
  const json=JSON.stringify(CFG,null,2);
  const btn=document.getElementById('devCopyBtn');
  navigator.clipboard.writeText(json).then(()=>{
    if(btn){btn.textContent='✅ Copied!';setTimeout(()=>{btn.textContent='📋 Copy CFG JSON';},1800);}
    showToast('📋 Copy CFG JSON แล้ว — วางใน js/game.js ได้เลย!');
  }).catch(()=>{
    prompt('คัดลอก JSON ด้านล่าง:',json);
  });
}



/* ══ OVERRIDE startWave for EG ══ */
const _origStartWave=startWave;
window.startWave=function(){
  if(isEndgame){if(!G||G.waveActive||G.over||paused)return;startEgWave();return;}
  _origStartWave();
};

/* ══ OVERRIDE goStageSelect / goMenu to reset EG flag ══ */
const _origGoStageSelect=goStageSelect;
window.goStageSelect=function(){
  isEndgame=false;
  document.getElementById('surrenderBtn').style.display='none';
  document.getElementById('backBtn').style.display='';
  _origGoStageSelect();
};
const _origGoMenu=goMenu;
window.goMenu=function(){
  isEndgame=false;
  document.getElementById('surrenderBtn').style.display='none';
  document.getElementById('backBtn').style.display='';
  _origGoMenu();
};

/* ══ BUTTON WIRING ══ */
document.getElementById('startBtn').addEventListener('click',()=>openStageSelect());
document.getElementById('backBtn').addEventListener('click',goStageSelect);
document.getElementById('pauseBtn').addEventListener('click',()=>{if(!G||G.over||G.win)return;togglePause();});
document.getElementById('speedBtn').addEventListener('click',function(){
  if(!G||G.over||G.win)return;
  speed=speed===1?2:speed===2?3:1;
  this.textContent=speed+'×';
});
document.getElementById('settingsBtn').addEventListener('click',openSettings);
document.getElementById('settSfxBtn').addEventListener('click',function(){
  toggleSfx();
  this.textContent=_sfxOn?'🔊':'🔇';
});
document.getElementById('settBgmBtn').addEventListener('click',function(){
  toggleBgm();
  this.textContent=_bgmOn?'🎵':'🔇';
});
document.getElementById('settVolSlider').addEventListener('input',function(){
  _sfxVol=this.value/100;
});
for(let _i=0;_i<9;_i++){
  const _tb=document.getElementById('tb'+_i);
  if(_tb) _tb.addEventListener('pointerdown',(e)=>onTbtnPointerDown(e,_i));
}
document.getElementById('devIngameBtn').addEventListener('click',()=>{if(!G||G.over||G.win)return;openDev(false);});
document.getElementById('devCloseBtn').addEventListener('click',closeDev);
// 🔧 Dev password prompt — triggered by verBtn 5-click sequence above
const _DEV_PWD='kt1233';
function _showDevPwdPrompt(){
  const pop=document.createElement('div');pop.className='av-unlock-popup';pop.id='devPwdPop';
  pop.innerHTML=`<div class="av-unlock-box" style="max-width:280px;">
    <div style="font-size:32px;margin-bottom:8px;">🔧</div>
    <h3 style="color:#ffd24d;margin:0 0 12px;">Dev Access</h3>
    <input id="devPwdInput" type="password" placeholder="รหัสผ่าน" style="width:100%;box-sizing:border-box;padding:10px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:15px;margin-bottom:12px;">
    <div style="display:flex;gap:8px;">
      <button class="slot-spin-btn" style="flex:1;padding:10px;font-size:14px;" onclick="_devPwdSubmit()">เข้า</button>
      <button class="av-unlock-cancel" style="padding:10px 14px;" onclick="document.getElementById('devPwdPop')?.remove()">ยกเลิก</button>
    </div>
  </div>`;
  document.body.appendChild(pop);
  setTimeout(()=>document.getElementById('devPwdInput')?.focus(),100);
  document.getElementById('devPwdInput').addEventListener('keydown',e=>{if(e.key==='Enter')_devPwdSubmit();});
  pop.addEventListener('click',ev=>{if(ev.target===pop)pop.remove();});
}
function _devPwdSubmit(){
  const val=document.getElementById('devPwdInput')?.value||'';
  if(val===_DEV_PWD){document.getElementById('devPwdPop')?.remove();openDev(true);}
  else{const inp=document.getElementById('devPwdInput');if(inp){inp.style.borderColor='#f44';inp.value='';inp.placeholder='รหัสผิด ลองใหม่';}}
}
document.getElementById('codexNavBtn').addEventListener('click',openCodex);
document.getElementById('codexBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('egMenuBtn').addEventListener('click',openEgMenu);
document.getElementById('egBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('lbNavBtn').addEventListener('click',openLeaderboard);
document.getElementById('lbBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('profileBackBtn').addEventListener('click',()=>showScreen('mm',true));
(function(){
  // set verBtn + title from GAME_VERSION — never hardcode in HTML
  const _vb=document.getElementById('verBtn');
  if(_vb){const _nb=_vb.querySelector('#newsBadge');_vb.textContent='📰 v'+GAME_VERSION+' — มีอะไรใหม่';if(_nb)_vb.appendChild(_nb);}
  document.title='Tower Quest 🏰 v'+GAME_VERSION;
  let _vc=0,_vt=null;
  document.getElementById('verBtn').addEventListener('click',()=>{
    _vc++;
    if(_vt) clearTimeout(_vt);
    if(_vc>=5){_vc=0;_vt=null;_showDevPwdPrompt();return;}
    _vt=setTimeout(()=>{if(_vc>0)openWhatsNew();_vc=0;_vt=null;},400);
  });
})();
(function(){
  let _sc=0,_st=null;
  document.getElementById('stageBadge').addEventListener('click',()=>{
    _sc++;
    if(_st) clearTimeout(_st);
    if(_sc>=5){_sc=0;_st=null;_showDevPwdPrompt();return;}
    _st=setTimeout(()=>{_sc=0;_st=null;},2000);
  });
})();
document.getElementById('whatsnewBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('ssBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('tsBackBtn').addEventListener('click',()=>{
  if(towerSelMode==='endgame') showScreen('egmenu',true);
  else openStageSelect();
});
document.getElementById('workshopNavBtn').addEventListener('click',openWorkshop);
document.getElementById('workshopBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('dailyNavBtn').addEventListener('click',openDaily);
document.getElementById('dailyBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('dailyClaimBtn').addEventListener('click',_claimDailyLoginUI);
document.getElementById('wsCraftBtn').addEventListener('click',craftVoidTower);
document.getElementById('voidCraftCloseBtn').addEventListener('click',()=>{document.getElementById('voidCraftOverlay').style.display='none';});
document.getElementById('bagNavBtn').addEventListener('click',openBag);
document.getElementById('bagBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('gachaNavBtn').addEventListener('click',openGacha);
document.getElementById('gachaBackBtn').addEventListener('click',()=>{
  _gachaResults=[];_gachaFlipped=[];_gachaBusy=false;
  showScreen('mm',true);
});
document.getElementById('skillGachaBackBtn').addEventListener('click',()=>{
  _skResults=[];_skFlipped=[];_skBusy=false;
  openGacha();
});
document.getElementById('casinoNavBtn').addEventListener('click',openCasino);
document.getElementById('casinoBackBtn').addEventListener('click',()=>showScreen('mm',true));
updateMenuStats();

