/* ══ SLOT MACHINE ══ */
const SLOT_COST=100;
const SLOT_COST_GEMS=50;
let _slotCur='gold'; // 'gold' | 'gems'
function setSlotCur(cur){
  _slotCur=cur;
  document.getElementById('slotCurGold')?.classList.toggle('active',cur==='gold');
  document.getElementById('slotCurGems')?.classList.toggle('active',cur==='gems');
  _renderCasinoUI();
}
function _updateSlotCurBtns(){
  const bg=document.getElementById('slotCurGold');
  if(bg) bg.innerHTML='💰 '+loadPGold().toLocaleString();
  const bm=document.getElementById('slotCurGems');
  if(bm) bm.innerHTML='<span class="gico"></span> '+loadGems().toLocaleString();
}
const SLOT_SPIN_SYMS=['💎','⭐','🔮','💰','🔷','🌙','🎯','🌸'];
const SLOT_OUTCOMES=[
  {w:1,  s:['💎','💎','💎'], gold:5000,gems:3000,tickets:50, label:'<span class="gico"></span> JACKPOT! +🎫50 +💰5000 +<span class="gico"></span>3000'},
  {w:3,  s:['⭐','⭐','⭐'], gold:2500,gems:1500,tickets:25, label:'⭐ SUPER!  +🎫25 +💰2500 +<span class="gico"></span>1500'},
  {w:10, s:['🔮','🔮','🔮'],gold:1000,gems:0,   tickets:0,  label:'🔮 GREAT! +💰1000'},
  {w:30, s:['💰','💰','💰'],gold:500, gems:0,   tickets:0,  label:'💰 NICE!  +💰500'},
  {w:100,s:null,pair:true,  gold:30,  gems:0,   tickets:0,  label:'คู่! +💰30'},
  {w:856,s:null,miss:true,  gold:0,   gems:0,   tickets:0,  label:'ไม่ตรง — ไม่ได้อะไร'},
];
let _slotBusy=false;

function openCasino(){
  showScreen('casino',true);
  _renderCasinoUI();
  _renderSlotHistory();
}
function _renderSlotHistory(){
  const hist=JSON.parse(localStorage.getItem('tq_slot_hist')||'[]');
  const box=document.getElementById('slotHistoryBox');
  const el=document.getElementById('slotHistory');
  if(!el||!box) return;
  if(!hist.length){box.style.display='none';return;}
  box.style.display='';
  const _cls=w=>w<=1?'sh-jp':w<=3?'sh-sp':w<=10?'sh-gr':w<=100?'sh-ni':'';
  const _lbl=w=>w<=1?'JACKPOT':w<=3?'SUPER':w<=10?'GREAT':w<=30?'NICE':w<=100?'คู่':'ไม่ตรง';
  el.innerHTML=hist.map(h=>`
    <div class="sh-item ${_cls(h.w)}">
      <div class="sh-syms">${h.syms.join('')}</div>
      <div class="sh-label" style="color:${h.w<=1?'#FFD700':h.w<=3?'#87CEEB':h.w<=10?'#CE93D8':h.w<=100?'#FFB300':'#666'};">${_lbl(h.w)}</div>
    </div>`).join('');
}
function _renderCasinoUI(){
  _updateSlotCurBtns();
  const isGems=_slotCur==='gems';
  const bal=isGems?loadGems():loadPGold();
  const cost=isGems?SLOT_COST_GEMS:SLOT_COST;
  const el=document.getElementById('slotGoldDisplay');
  if(el){el.innerHTML=(isGems?'<span class="gico"></span> ':'💰 ')+bal.toLocaleString();}
  const info=document.getElementById('slotCostInfo');
  if(info){info.innerHTML=(isGems?`<span class="gico"></span> ${cost} มณีวิญญาณ / สปิน &nbsp;|&nbsp; มี: <span style="font-size:15px;font-weight:900;color:#b388ff;">${bal.toLocaleString()}</span>`:`💰 ${cost} ทองถาวร / สปิน &nbsp;|&nbsp; มี: <span style="font-size:15px;font-weight:900;color:#ffd54f;">${bal.toLocaleString()}</span>`);}
  const btn=document.getElementById('slotSpinBtn');if(btn){btn.disabled=_slotBusy||bal<cost;btn.innerHTML='🎰 หมุน! ('+(isGems?`<span class="gico"></span> ${cost}`:`💰 ${cost}`)+')'}
  const ot=document.getElementById('slotOddsTable');
  if(ot&&!ot.innerHTML){
    const names={1:'<span class="gico"></span><span class="gico"></span><span class="gico"></span>',3:'⭐⭐⭐',10:'🔮🔮🔮',30:'💰💰💰',100:'คู่ใดก็ได้',856:'ไม่ตรง'};
    const _g=n=>`+<span class="gico"></span>${n.toLocaleString()}`;
    const _rwds=o=>{const p=[];if(o.tickets)p.push(`+🎫${o.tickets}`);if(o.gold)p.push(`+💰${o.gold.toLocaleString()}`);if(o.gems)p.push(_g(o.gems));return p.join(' ')||'—';};
    ot.innerHTML=SLOT_OUTCOMES.map(o=>`
      <div class="gacha-odds-row">
        <span style="font-family:monospace;color:rgba(179,136,255,.6);">${String(o.w/10).padStart(4,' ')}%</span>
        <span style="color:#ffd54f;">${names[o.w]}</span>
        <span style="color:#aaa;font-size:10px;">${_rwds(o)}</span>
      </div>`).join('');
  }
}
function _slotWinFx(outcome,reels){
  const w=outcome.w;
  const isJP=w<=1,isSP=w<=3,isGR=w<=10;
  const machine=document.querySelector('.slot-machine');
  if(!machine) return;
  // reel glow
  const rc=isJP?'win-jp':isSP?'win-sp':isGR?'win-gr':'win-ni';
  reels.forEach(r=>{if(r){r.classList.remove('win');r.classList.add(rc);}});
  const clearT=isJP?3200:isSP?2600:isGR?2100:1600;
  setTimeout(()=>reels.forEach(r=>{if(r){r.className='slot-reel';}}),clearT);
  // screen shake for JACKPOT
  if(isJP){machine.style.animation='slotShake .75s ease';setTimeout(()=>{machine.style.animation='';},800);}
  // overlay
  machine.querySelectorAll('.slot-win-overlay').forEach(e=>e.remove());
  const ov=document.createElement('div'); ov.className='slot-win-overlay';
  // background flash
  const bg=document.createElement('div'); bg.className='slot-win-bg';
  bg.style.background=isJP?'rgba(255,215,0,.24)':isSP?'rgba(100,200,255,.18)':isGR?'rgba(200,100,255,.16)':'rgba(255,160,0,.13)';
  ov.appendChild(bg);
  // confetti for JP + SUPER
  if(isSP){
    const cols=['#FFD700','#FF6B6B','#4ECDC4','#A78BFA','#F472B6','#34D399','#FB923C','#60A5FA'];
    const n=isJP?55:28;
    for(let i=0;i<n;i++){
      const c=document.createElement('div'); c.className='slot-confetti';
      const sz=5+Math.random()*9;
      c.style.cssText=`left:${Math.random()*100}%;top:${-5+Math.random()*35}%;background:${cols[i%cols.length]};width:${sz}px;height:${sz}px;animation-delay:${Math.random()*.65}s;animation-duration:${1.1+Math.random()*.8}s;transform:rotate(${Math.random()*360}deg);`;
      ov.appendChild(c);
    }
  }
  // win text
  const wt=document.createElement('div'); wt.className='slot-win-text';
  const [col,txt]=isJP?['#FFD700','<span class="gico"></span> JACKPOT!']:isSP?['#87CEEB','⭐ SUPER!']:isGR?['#CE93D8','🔮 GREAT!']:['#FFB300','💰 NICE!'];
  wt.innerHTML=txt;
  wt.style.cssText=`color:${col};text-shadow:0 0 40px ${col},0 0 80px ${col}99,0 4px 20px rgba(0,0,0,.95);`;
  ov.appendChild(wt);
  // reward sub-text
  const ws=document.createElement('div'); ws.className='slot-win-sub';
  const _rp=o=>{const p=[];if(o.tickets)p.push(`+🎫${o.tickets}`);if(o.gold)p.push(`+💰${o.gold.toLocaleString()}`);if(o.gems)p.push(`+<span class="gico"></span>${o.gems.toLocaleString()}`);return p.join(' ')||'';};
  ws.innerHTML=_rp(outcome);
  ov.appendChild(ws);
  machine.appendChild(ov);
  // fade out
  const dur=isJP?2900:isSP?2400:isGR?1900:1500;
  setTimeout(()=>{ov.style.cssText='opacity:0;transition:opacity .4s;pointer-events:none;';setTimeout(()=>ov.remove(),450);},dur);
}

let _slotAutoOn=false;
function toggleAutoSpin(){
  _slotAutoOn=!_slotAutoOn;
  const btn=document.getElementById('slotAutoBtn');
  if(btn){
    btn.textContent=_slotAutoOn?'⏹ Stop Auto':'▶ Auto';
    btn.classList.toggle('slot-auto-active',_slotAutoOn);
  }
  if(_slotAutoOn&&!_slotBusy) spinSlot();
}
function spinSlot(){
  if(_slotBusy) return;
  const isGems=_slotCur==='gems';
  const cost=isGems?SLOT_COST_GEMS:SLOT_COST;
  const bal=isGems?loadGems():loadPGold();
  if(bal<cost){
    if(_slotAutoOn){ _slotAutoOn=false; const b=document.getElementById('slotAutoBtn'); if(b){b.textContent='▶ Auto';b.classList.remove('slot-auto-active');} }
    showToast(isGems?'มณีไม่พอ (ต้องการ '+cost+')':'💰 ทองถาวรไม่พอ (ต้องการ '+cost+')');return;
  }
  if(isGems) saveGems(bal-cost); else savePGold(bal-cost);
  _slotBusy=true;
  const btn=document.getElementById('slotSpinBtn');if(btn)btn.disabled=true;
  const res=document.getElementById('slotResult');if(res)res.textContent='🎰 กำลังหมุน...';
  const syms=[0,1,2].map(i=>document.getElementById('slotSym'+i));
  const reels=[0,1,2].map(i=>document.getElementById('slotReel'+i));
  reels.forEach(r=>{if(r){r.classList.remove('win');r.classList.add('spinning');}});
  // pick outcome
  const roll=Math.random()*1000;
  let cum=0,outcome=SLOT_OUTCOMES[SLOT_OUTCOMES.length-1];
  for(const o of SLOT_OUTCOMES){cum+=o.w;if(roll<cum){outcome=o;break;}}
  // build display
  let display;
  if(outcome.s){display=[...outcome.s];}
  else if(outcome.pair){
    const base=SLOT_SPIN_SYMS[Math.floor(Math.random()*4)];
    const other=SLOT_SPIN_SYMS.filter(s=>s!==base)[Math.floor(Math.random()*3)];
    display=[base,base,other];display.sort(()=>Math.random()-.5);
  } else {
    display=[...SLOT_SPIN_SYMS].sort(()=>Math.random()-.5).slice(0,3);
    while(display[0]===display[1]||display[1]===display[2]||display[0]===display[2])
      display=[...SLOT_SPIN_SYMS].sort(()=>Math.random()-.5).slice(0,3);
  }
  // animate cycle — stopped set tracks which reels have locked in
  let f=0;
  const stopped=new Set();
  const iv=setInterval(()=>{let changed=false;syms.forEach((s,i)=>{if(s&&!stopped.has(i)){s.textContent=SLOT_SPIN_SYMS[f%SLOT_SPIN_SYMS.length];changed=true;}});if(changed)f++;},80);
  // stop one by one
  const stopReel=(idx,delay)=>setTimeout(()=>{
    stopped.add(idx);
    if(syms[idx])syms[idx].textContent=display[idx];
    if(reels[idx]){reels[idx].classList.remove('spinning');}
    if(idx===2){
      clearInterval(iv);
      const won=outcome.w<=100;
      if(outcome.gold)addPGold(outcome.gold);
      if(outcome.gems)addGems(outcome.gems);
      if(outcome.tickets)addTickets(outcome.tickets);
      if(outcome.shardC)addBagItem('shard_c',outcome.shardC);
      if(res)res.innerHTML=`<span style="color:${won?'#ffd54f':'#888'};">${outcome.label}</span>`;
      if(won){ _slotWinFx(outcome,reels); showToast('🎉 '+outcome.label); }
      // 🎰 Casino achievements
      try{
        let ss=JSON.parse(localStorage.getItem('tq_slot_stats')||'{}');
        ss.total=(ss.total||0)+1;
        const isGreatPlus=outcome.w<=10&&!outcome.pair&&!outcome.miss;
        if(isGreatPlus) ss.dryStreak=0; else ss.dryStreak=(ss.dryStreak||0)+1;
        localStorage.setItem('tq_slot_stats',JSON.stringify(ss));
        unlockAchievement('sl_first');
        if(outcome.pair)  unlockAchievement('sl_pair');
        if(outcome.w<=10&&!outcome.pair) unlockAchievement('sl_great');
        if(outcome.w<=3)  unlockAchievement('sl_super');
        if(outcome.w<=1)  unlockAchievement('sl_jp');
        if(ss.total>=100) unlockAchievement('sl_100');
        if(ss.dryStreak>=50)  unlockAchievement('sl_dry50');
        if(ss.dryStreak>=100) unlockAchievement('sl_dry100');
      }catch(e){}
      // บันทึกประวัติ
      try{
        const hist=JSON.parse(localStorage.getItem('tq_slot_hist')||'[]');
        hist.unshift({syms:display,label:outcome.label,w:outcome.w});
        if(hist.length>8) hist.length=8;
        localStorage.setItem('tq_slot_hist',JSON.stringify(hist));
      }catch(e){}
      _slotBusy=false;
      _renderCasinoUI();
      _renderSlotHistory();
      if(_slotAutoOn) setTimeout(()=>{ if(_slotAutoOn&&!_slotBusy) spinSlot(); },600);
    }
  },delay);
  stopReel(0,1200);
  stopReel(1,1600);
  stopReel(2,2000);
}

/* ══ CASINO TABS ══ */
function openCasinoTab(tab){
  const isSlot=tab==='slot';
  document.getElementById('casinoSlotPanel').style.display=isSlot?'':'none';
  document.getElementById('casinoBJPanel').style.display=isSlot?'none':'';
  document.getElementById('casinoTabSlot').classList.toggle('active',isSlot);
  document.getElementById('casinoTabBJ').classList.toggle('active',!isSlot);
  if(!isSlot) _bjRefreshBalance();
}

/* ══ BLACKJACK ══ */
const _BJ_RANKS=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const _BJ_SUITS=['♠','♥','♦','♣'];
const _BJ_REDS=['♥','♦'];
let _bjDeck=[],_bjPlayer=[],_bjDealer=[],_bjBet=0,_bjCur='gold',_bjPhase='idle';

function _bjMkDeck(){
  const d=[];
  for(const s of _BJ_SUITS)for(const r of _BJ_RANKS)d.push({r,s});
  for(let i=d.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[d[i],d[j]]=[d[j],d[i]];}
  return d;
}
function _bjDraw(){return _bjDeck.pop();}
function _bjRv(r){if(r==='A')return 11;if(['J','Q','K'].includes(r))return 10;return+r;}
function _bjHv(h){let s=0,a=0;for(const c of h){s+=_bjRv(c.r);if(c.r==='A')a++;}while(s>21&&a-->0)s-=10;return s;}

function _bjCurBal(){return _bjCur==='gold'?loadPGold():loadGems();}
function _bjDeductBal(n){if(_bjCur==='gold')savePGold(Math.max(0,loadPGold()-n));else saveGems(Math.max(0,loadGems()-n));}
function _bjAddBal(n){if(_bjCur==='gold')addPGold(n);else addGems(n);}
function _bjIcon(){return _bjCur==='gold'?'💰':'<span class="gico"></span>';}

function _bjRefreshBalance(){
  const el=document.getElementById('bjBalDisplay');
  if(el) el.innerHTML=_bjIcon()+' '+_bjCurBal().toLocaleString();
  document.getElementById('bjBetDisplay').innerHTML=_bjIcon()+' '+_bjBet;
  const tg=document.getElementById('bjTabGold');
  if(tg) tg.innerHTML='💰 '+loadPGold().toLocaleString();
  const tgem=document.getElementById('bjTabGem');
  if(tgem) tgem.innerHTML='<span class="gico"></span> '+loadGems().toLocaleString();
}

function bjSwitchCur(c){
  if(_bjPhase!=='idle') return;
  _bjCur=c; _bjBet=0;
  document.getElementById('bjTabGold').classList.toggle('active',c==='gold');
  document.getElementById('bjTabGem').classList.toggle('active',c==='gem');
  _bjRefreshBalance();
}
function bjAddBet(n){
  if(_bjPhase!=='idle') return;
  _bjBet=Math.min(_bjBet+n,_bjCurBal());
  _bjRefreshBalance();
}
function bjSetBet(n){
  if(_bjPhase!=='idle') return;
  _bjBet=n; _bjRefreshBalance();
}

function _bjMkCard(c,hidden,delayMs){
  const el=document.createElement('div');
  const red=!hidden&&_BJ_REDS.includes(c.s);
  el.className='bj-card bj-dealing'+(hidden?' back':red?' red':'');
  el.style.animationDelay=delayMs+'ms';
  if(!hidden){
    el.innerHTML=
      '<div class="bj-ct"><span class="bj-rank">'+c.r+'</span><span class="bj-suit-sm">'+c.s+'</span></div>'+
      '<span class="bj-suit-lg">'+c.s+'</span>'+
      '<div class="bj-cb"><span class="bj-rank">'+c.r+'</span><span class="bj-suit-sm">'+c.s+'</span></div>';
  }
  return el;
}

function _bjSetScore(id,val,isBust){
  const el=document.getElementById(id);
  if(!el) return;
  el.textContent=val;
  el.className='bj-score'+(isBust?' bust':'');
  el.style.animation='none'; void el.offsetWidth;
  el.style.animation='bjScorePop .28s ease both';
}
function _bjUpdateScores(hideDealer){
  _bjSetScore('bjPlayerScore',_bjHv(_bjPlayer)||'—',_bjHv(_bjPlayer)>21);
  if(hideDealer){
    const el=document.getElementById('bjDealerScore');
    if(el){el.textContent=_bjDealer[0]?_bjRv(_bjDealer[0].r)+'…':'—';el.className='bj-score';}
  } else {
    _bjSetScore('bjDealerScore',_bjHv(_bjDealer)||'—',_bjHv(_bjDealer)>21);
  }
}

function _bjFlipHidden(cb){
  const backs=document.querySelectorAll('#bjDealerCards .back');
  if(!backs.length){cb&&cb();return;}
  const el=backs[0]; const c=_bjDealer[1];
  el.style.animation='bjFlipX .34s ease forwards';
  setTimeout(()=>{
    const red=_BJ_REDS.includes(c.s);
    el.className='bj-card'+(red?' red':'');
    el.innerHTML=
      '<div class="bj-ct"><span class="bj-rank">'+c.r+'</span><span class="bj-suit-sm">'+c.s+'</span></div>'+
      '<span class="bj-suit-lg">'+c.s+'</span>'+
      '<div class="bj-cb"><span class="bj-rank">'+c.r+'</span><span class="bj-suit-sm">'+c.s+'</span></div>';
    el.style.animation='bjFlipX .26s ease reverse forwards';
    setTimeout(()=>{el.style.animation='';cb&&cb();},180);
  },170);
}

function _bjAddCardAnim(c,containerId,cb){
  const el=_bjMkCard(c,false,0);
  document.getElementById(containerId).appendChild(el);
  setTimeout(()=>cb&&cb(),430);
}

function _bjSetResult(msg,type){
  const b=document.getElementById('bjResult');
  if(!b) return;
  b.style.display='block';
  b.style.animation='none'; void b.offsetWidth; b.style.animation='';
  b.innerHTML=msg; b.className='bj-result '+type;
  if(type==='win'){
    const t=document.getElementById('bjTable');
    if(t){t.style.animation='none';void t.offsetWidth;t.style.animation='bjWinGlow .7s ease';}
  }
}

function _bjSetBtns(playing){
  document.getElementById('bjBtnDeal').disabled=playing;
  document.getElementById('bjBtnHit').disabled=!playing;
  document.getElementById('bjBtnStand').disabled=!playing;
  document.getElementById('bjBtnDouble').disabled=!playing||_bjPlayer.length!==2;
}

function bjDeal(){
  if(!_bjBet||_bjBet>_bjCurBal()){showToast('ตั้งเดิมพันก่อน!');return;}
  _bjDeductBal(_bjBet);
  _bjDeck=_bjMkDeck();_bjPlayer=[];_bjDealer=[];_bjPhase='playing';
  document.getElementById('bjResult').style.display='none';
  document.getElementById('bjDealerCards').innerHTML='';
  document.getElementById('bjPlayerCards').innerHTML='';
  document.getElementById('bjPlayerScore').textContent='—';
  document.getElementById('bjDealerScore').textContent='—';
  const seq=[_bjDraw(),_bjDraw(),_bjDraw(),_bjDraw()];
  _bjPlayer=[seq[0],seq[2]]; _bjDealer=[seq[1],seq[3]];
  const dc=document.getElementById('bjDealerCards');
  const pc=document.getElementById('bjPlayerCards');
  dc.appendChild(_bjMkCard(_bjDealer[0],false,0));
  pc.appendChild(_bjMkCard(_bjPlayer[0],false,180));
  dc.appendChild(_bjMkCard(_bjDealer[1],true,360));
  pc.appendChild(_bjMkCard(_bjPlayer[1],false,540));
  setTimeout(()=>{
    _bjUpdateScores(true); _bjSetBtns(true); _bjRefreshBalance();
    if(_bjHv(_bjPlayer)===21){
      setTimeout(()=>{
        _bjFlipHidden(()=>{
          _bjUpdateScores(false);
          const win=Math.round(_bjBet*0.9);
          if(_bjHv(_bjDealer)===21){_bjAddBal(_bjBet);_bjEnd('เสมอ Blackjack — คืนเดิมพัน','draw');}
          else{_bjAddBal(_bjBet+win);_bjEnd('🎉 Blackjack! +'+_bjIcon()+win,'win');}
        });
      },200);
    }
  },760);
}

function bjHit(){
  const c=_bjDraw(); _bjPlayer.push(c);
  document.getElementById('bjBtnDouble').disabled=true;
  _bjAddCardAnim(c,'bjPlayerCards',()=>{
    _bjUpdateScores(true);
    if(_bjHv(_bjPlayer)>21){
      document.querySelectorAll('#bjPlayerCards .bj-card').forEach(e=>e.classList.add('bj-busting'));
      setTimeout(()=>_bjEnd('💥 บัสต์! เสีย '+_bjIcon()+_bjBet,'lose'),360);
    }
  });
}

function bjStand(){
  _bjSetBtns(false);
  _bjFlipHidden(()=>{_bjUpdateScores(false);_bjRunDealer();});
}

function _bjRunDealer(){
  if(_bjHv(_bjDealer)<17){
    const c=_bjDraw(); _bjDealer.push(c);
    _bjAddCardAnim(c,'bjDealerCards',()=>{_bjUpdateScores(false);setTimeout(_bjRunDealer,220);});
  } else {
    const pv=_bjHv(_bjPlayer),dv=_bjHv(_bjDealer);
    if(dv>21||pv>dv){_bjAddBal(_bjBet*2);_bjEnd('✨ ชนะ! +'+_bjIcon()+_bjBet,'win');}
    else if(pv===dv){_bjAddBal(_bjBet);_bjEnd('เสมอ — คืนเดิมพัน','draw');}
    else _bjEnd('แพ้ เสีย '+_bjIcon()+_bjBet,'lose');
  }
}

function bjDouble(){
  if(_bjBet>_bjCurBal()){showToast('ไม่พอ Double');return;}
  _bjDeductBal(_bjBet); _bjBet*=2;
  document.getElementById('bjBtnDouble').disabled=true;
  document.getElementById('bjBtnHit').disabled=true;
  _bjRefreshBalance();
  const c=_bjDraw(); _bjPlayer.push(c);
  _bjAddCardAnim(c,'bjPlayerCards',()=>{
    _bjUpdateScores(true);
    if(_bjHv(_bjPlayer)>21){
      document.querySelectorAll('#bjPlayerCards .bj-card').forEach(e=>e.classList.add('bj-busting'));
      setTimeout(()=>_bjEnd('💥 บัสต์! เสีย '+_bjIcon()+_bjBet,'lose'),360);
    } else setTimeout(bjStand,300);
  });
}

function _bjEnd(msg,type){
  _bjPhase='idle'; _bjSetBtns(false); _bjRefreshBalance();
  _bjSetResult(msg,type);
  showToast(msg);
}
