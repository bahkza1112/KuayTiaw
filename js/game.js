/* ══ STAGE DEFINITIONS ══ */
const STAGES=[
  {id:0,name:'Grassland',icon:'🌿',
   desc:'ทุ่งหญ้าสงบสุข เรียนรู้พื้นฐานการป้องกันป้อมปราการ',
   waves:5,enemyTypes:[0,1],unlockedTowers:[0,1,4],unlocks:'Magic Tower ✨',enemyMult:1.5,
   story:'ประตูมืดได้เปิดขึ้น กองทัพมืดบุกรุกทุ่งหญ้า ถึงเวลาสร้างแนวป้องกัน!',
   path:[[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],
         [11,3],[11,4],[11,5],[10,5],[9,5],[8,5],[7,5],[6,5],[5,5],[4,5],[3,5],[2,5],
         [2,6],[2,7],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   bgColor:'#1a3a1a',pathColor:'#9e7446',
   grassColors:['#2e7d32','#388e3c','#43a047','#33691e','#1b5e20']},
  {id:1,name:'Dark Forest',icon:'🌲',
   desc:'เงามืดซ่อนตัวอยู่ระหว่างต้นไม้ ศัตรูที่เร็วและแข็งแกร่งกว่ารอคอยอยู่',
   waves:7,enemyTypes:[0,1,2],unlockedTowers:[0,1,2,4],unlocks:'Sniper Tower 🎯',enemyMult:1.35,
   story:'เงามืดหลบซ่อนอยู่ในป่าทึบ ต้องค้นพบพลังเวทมนตร์โบราณเพื่อสยบพวกมัน',
   path:[[0,1],[1,1],[2,1],[3,1],[3,2],[3,3],[3,4],[3,5],[4,5],[5,5],[6,5],
         [7,5],[7,4],[7,3],[7,2],[8,2],[9,2],[10,2],[11,2],
         [11,3],[11,4],[10,4],[9,4],[8,4],[8,5],[8,6],[8,7],
         [9,7],[10,7],[11,7],[11,8],[10,8],[9,8],[8,8],[7,8],
         [6,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]],
   bgColor:'#0d1f0d',pathColor:'#7a5c38',
   grassColors:['#1b5e20','#2e7d32','#1a3a1a','#0d2b0d','#2a5a2a']},
  {id:2,name:'Volcanic Pass',icon:'🌋',
   desc:'วิญญาณไฟระรานในทุ่งลาวา ต้องใช้ป้อมทุกแบบเพื่อเอาชนะ',
   waves:7,enemyTypes:[0,1,2,3,4],bossChance:.06,unlockedTowers:[0,1,2,3,4],unlocks:'Archer Tower 🏹',enemyMult:1.2,
   maxTowers:99,story:'ไฟนรกปะทุขึ้นจากใต้ดิน กองทัพวิญญาณไฟหลั่งไหลออกมาไม่หยุดหย่อน ผู้พิทักษ์ต้องใช้ทุกสิ่งที่มีเพื่อสกัดกั้น...',
   path:[[0,5],[1,5],[2,5],[2,4],[2,3],[2,2],[3,2],[4,2],[5,2],[6,2],[6,3],[6,4],[6,5],
         [7,5],[8,5],[9,5],[9,4],[9,3],[9,2],[10,2],[11,2],
         [11,3],[11,4],[11,5],[11,6],[11,7],[10,7],[9,7],[8,7],
         [8,8],[8,9],[7,9],[6,9],[5,9],[4,9],[3,9],[2,9],[1,9],[0,9]],
   bgColor:'#1f0d00',pathColor:'#8b4513',
   grassColors:['#3e1a00','#4a2000','#5c2a00','#3a1800','#461e00']},
  {id:3,name:'Desert Crossing',icon:'🏜️',
   desc:'กองทัพบุกข้ามทะเลทรายแห้งแล้ง ระวังฝูงค้างคาวที่ลอยอยู่บนฟ้า',
   waves:7,enemyTypes:[6,0,1,5],bossChance:0,unlockedTowers:[0,1,2,3,4,5],unlocks:'Gold Mine 💰',
   maxTowers:6,story:'กองทัพมืดข้ามทะเลทรายที่ร้อนระอุ ฝูงค้างคาวบินนำหน้า โกเลมขนาดยักษ์ตามมาข้างหลัง ป้อมธนูจะเป็นกุญแจสำคัญ...',
   path:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
         [11,1],[11,2],[11,3],[10,3],[9,3],[8,3],[7,3],[6,3],[5,3],[4,3],[3,3],
         [3,4],[3,5],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],
         [9,7],[9,8],[9,9],[8,9],[7,9],[6,9],[5,9],[4,9],[3,9],[2,9],[1,9],[0,9]],
   bgColor:'#1a1400',pathColor:'#c49a3c',
   grassColors:['#3d2b00','#4a3500','#5c4200','#3a2900','#463200']},
  {id:4,name:'Treasure Valley',icon:'💰',
   desc:'พวกมันมุ่งหน้าสู่คลังสมบัติ ป้อมผลิตทองจะช่วยให้สร้างป้อมได้มากขึ้น',
   waves:8,enemyTypes:[6,0,1,3],bossChance:.07,unlockedTowers:[0,1,2,3,4,5,6],unlocks:null,
   maxTowers:6,story:'คลังสมบัติของอาณาจักรตกอยู่ในอันตราย ฝูง Bat Swarm บินเข้ามาเป็นระลอก วางป้อมผลิตทองเพื่อระดมทุนสร้างกองกำลัง...',
   path:[[0,1],[1,1],[2,1],[2,2],[2,3],[2,4],[3,4],[4,4],[5,4],[6,4],[6,3],[6,2],[6,1],
         [7,1],[8,1],[9,1],[10,1],[11,1],[11,2],[11,3],[11,4],[11,5],
         [10,5],[9,5],[8,5],[7,5],[6,5],[5,5],[4,5],[3,5],
         [3,6],[3,7],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   bgColor:'#1a1200',pathColor:'#b8860b',
   grassColors:['#2d2000','#3a2800','#4a3300','#261c00','#332400']},
  /* ด่าน 5-9 (id 5-9) */
  {id:5,name:'Thunder Cave',icon:'⚡',
   desc:'สายฟ้าฟาดลงในถ้ำลึก ศัตรูเร็วขึ้นและหนาแน่นขึ้น ป้อมสายฟ้าจะช่วยได้มาก',
   waves:9,enemyTypes:[6,0,2,3,5],bossChance:.08,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:[{type:'tower',id:7}],
   maxTowers:6,story:'ลึกลงไปในถ้ำใต้ดิน สายฟ้าฟาดอย่างไม่หยุดหย่อน กองทัพมืดใช้พลังฟ้าผ่าเพิ่มความเร็วให้ตนเอง ผู้พิทักษ์ต้องปรับกลยุทธ์ใหม่...',
   path:[[0,4],[1,4],[2,4],[2,3],[2,2],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],
         [8,2],[8,3],[8,4],[7,4],[6,4],[5,4],[4,4],[4,5],[4,6],[4,7],
         [5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[11,8],[11,9],
         [10,9],[9,9],[8,9],[7,9],[6,9],[5,9],[4,9],[3,9],[2,9],[1,9],[0,9]],
   bgColor:'#0a0a1f',pathColor:'#52568f',
   grassColors:['#0d0d2a','#111133','#0a0a22','#131340','#0c0c28']},
  {id:6,name:'Cursed Swamp',icon:'🌿',
   desc:'หนองน้ำมีพิษซ่อนอันตราย ศัตรูมาจากหลายทิศทาง ต้องวางกับดักให้ดี',
   waves:10,enemyTypes:[6,2,3,5,4],bossChance:.09,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,story:'หนองน้ำโบราณที่ซ่อนคำสาปไว้ภายใน ศัตรูแทรกซึมมาจากทุกทิศ กลิ่นพิษปกคลุมทุกอณู ผู้พิทักษ์ต้องระวังทุกซอกทุกมุม...',
   path:[[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[3,3],[4,3],[5,3],[6,3],[6,2],[6,1],[6,0],
         [7,0],[8,0],[9,0],[10,0],[11,0],[11,1],[11,2],[11,3],[11,4],
         [10,4],[9,4],[8,4],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],
         [2,5],[2,6],[2,7],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   bgColor:'#0a1a0a',pathColor:'#7a8f3a',
   grassColors:['#0d1f0d','#112211','#0a180a','#132513','#0c1c0c']},
  {id:7,name:'Dark Fortress',icon:'🏰',
   desc:'วิเวิร์นโฉบฟ้า ชิลด์ไนท์ถือโล่เหล็ก — ต้องทะลุโล่ก่อน ใช้ Sniper/Thunder ให้เป็น',
   waves:11,enemyTypes:[6,8,3,7,5,4],bossChance:.10,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,story:'ป้อมปราการมืดตั้งตระหง่านขวางทาง Shield Knight สวมชุดเกราะเหล็กนำหน้ากองทัพ ต้องเจาะกำแพงป้องกันก่อนจะถึงหัวใจของศัตรู...',
   path:[[0,5],[1,5],[1,4],[1,3],[1,2],[1,1],[2,1],[3,1],[4,1],[5,1],[5,2],[5,3],
         [5,4],[5,5],[6,5],[7,5],[7,4],[7,3],[7,2],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[11,5],[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],
         [6,7],[6,8],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9]],
   bgColor:'#0f0f0f',pathColor:'#5a4258',
   grassColors:['#1a0a1a','#1e0e1e','#150815','#1c0c1c','#170a17']},
  {id:8,name:'Dark Throne',icon:'👿',
   desc:'หมอผีคอย Heal พวกพ้อง — ฆ่ามันก่อนไม่งั้นศัตรูข้างๆ ฟื้น HP ไม่หยุด',
   waves:12,enemyTypes:[6,10,2,3,5,4],bossChance:.10,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:5,story:'บัลลังก์แห่งความมืด หมอผีโบราณปลุกเสกพลังฟื้นฟูให้กองทัพ ศัตรูข้างๆ ฟื้น HP ตลอดเวลา ต้องกำจัดหมอผีก่อนเป็นอันดับแรก...',
   path:[[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],
         [4,7],[4,6],[4,5],[4,4],[4,3],[4,2],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[10,4],[9,4],[8,4],[7,4],[6,4],[5,4],[5,5],
         [5,6],[5,7],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   bgColor:'#1a0020',pathColor:'#7a1aa0',
   grassColors:['#1a0020','#200028','#150018','#1e0024','#17001e']},
  {id:9,name:'Dark Tower Summit',icon:'💀',
   desc:'ยอดหอคอยมืด — จอมมารผู้ยิ่งใหญ่รอคอยอยู่ ใช้ทุกพลังที่มีเพื่อยุติความมืด',
   waves:12,enemyTypes:[6,8,7,5,4,9],bossChance:.12,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,story:'ยอดหอคอยมืดที่สูงที่สุด จอมมารผู้ยิ่งใหญ่สถิตอยู่ที่นี่มาหลายยุคหลายสมัย กองทัพทั้งหมดรวมพลครั้งสุดท้าย — ผู้พิทักษ์ต้องใช้ทุกสิ่งที่มีเพื่อยุติความมืดตลอดกาล...',
   path:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
         [11,1],[11,2],[10,2],[9,2],[8,2],[7,2],[6,2],[5,2],[4,2],[3,2],[2,2],[1,2],
         [1,3],[1,4],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],
         [11,6],[11,7],[10,7],[9,7],[8,7],[7,7],[6,7],[5,7],[4,7],[3,7],[2,7],[1,7],[0,7],
         [0,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9]],
   bgColor:'#050010',pathColor:'#3d2380',
   grassColors:['#080018','#0a001e','#060012','#0c0020','#07001a']},
  {id:10,name:'Shadow Remnant',icon:'🌑',
   desc:'เศษเสี้ยวสุดท้ายของจอมมารลุกขึ้นอีกครั้ง ศัตรูทุกชนิดรวมพลในศึกครั้งสุดท้ายที่แท้จริง',
   waves:13,enemyTypes:[7,8,10,0,2,5,6,1,3,4,9],bossChance:.13,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   isFinalStage:true,
   maxTowers:6,story:'จอมมารพ่ายแพ้ไปแล้ว... แต่เงาของมันไม่ยอมสลายไปง่ายๆ เศษพลังมืดที่หลงเหลือรวมตัวกันเป็นกองทัพผีร้ายชุดสุดท้าย ทุกชนิดสัตว์ร้ายที่เคยพ่ายแพ้กลับมารวมพลังกันอีกครั้ง — นี่คือศึกแท้จริงที่จะยุติความมืดตลอดกาล!',
   path:[[0,5],[1,5],[1,6],[1,7],[1,8],[2,8],[3,8],[4,8],[4,7],[4,6],[4,5],[4,4],
         [5,4],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],[9,0],[9,1],[9,2],[9,3],[9,4],
         [10,4],[11,4],[11,5],[11,6],[11,7],[10,7],[9,7],[8,7],[7,7],
         [7,8],[7,9],[8,9],[9,9],[10,9],[11,9]],
   bgColor:'#03000a',pathColor:'#4a1a5e',
   grassColors:['#0a0014','#120020','#08000f','#150026','#0c0018']},
];

/* ══ BALANCE CONFIG ══ */
const DEFAULT_CFG={
  // Curve — ลด stageMult และ waveMult ให้เบาลง
  stageMult:.22,    // เดิม .40 → ด่าน 9 จะ ×2.9 แทน ×4.6
  waveMult:.10,     // เดิม .18 → wave สุดท้ายไม่หนักเกิน
  spdStageMult:.04, // ความเร็วเพิ่มช้าลง
  spdCap:2.0,       // เดิม 2.2
  enemyPerWaveBase:4,  // เดิม 5
  enemyPerWaveInc:2,   // เดิม 3 — ด่าน 9 wave 13 จะได้ 4+13×2=30 แทน 44
  bossChance:.08,   // เดิม .12 — boss ออกน้อยลงหน่อย
  // Monster base HP — ปรับ Golem และ Boss ให้สมดุล
  m_hp:[55,75,105,144,380,236,35,160,129,900,58],  // v1.7.2: รีดีไรฟ์ HP ให้สอดคล้องกับ m_rew ที่ปัดเศษ
  m_spd:[1.4,1.0,1.15,.85,.5,.55,1.8,1.55,.65,.42,.72],
  m_rew:[10,10,15,20,60,30,5,20,30,100,10], // v1.7.2: ปัดเศษ reward เป็นเลขลงท้าย 0/5 เพื่อความชัดเจนในเกม
  // Tower — เพิ่ม DPS นิดหน่อยให้ผู้เล่นรู้สึกว่าป้อมมีพลัง
  t_dmg:[24,12,44,65,0,20,0,20],   // [cannon,ice,magic,sniper,support,archer,goldmine,thunder] — cannon 28→24, magic 38→44
  t_rng:[2.2,2.0,2.5,4.5,2.8,2.8,0,2.4],
  t_rate:[1.2,1.5,.8,.4,0,2.0,0,1.8],
  t_cost:[50,55,75,65,35,60,75,85], // thunder: 85 gold
  t_goldrate:5,t_goldamt:[2,4,6,8],
  // Game settings
  startGold:200,    // เดิม 150 — ให้ซื้อป้อมได้ 4-5 ตัวก่อน wave 1
  baseHP:20,
  spawnInterval:.7, // เดิม .65 — spawn ช้าลงเล็กน้อย ผู้เล่นมีเวลาตัดสินใจ
};
let CFG=JSON.parse(JSON.stringify(DEFAULT_CFG));
try{const s=localStorage.getItem('tq_cfg');if(s)CFG=Object.assign(JSON.parse(JSON.stringify(DEFAULT_CFG)),JSON.parse(s));}catch(e){}
/* ══ GRID / STATE ══ */
const COLS=12,ROWS=10,CS=80;
let currentStage=null,currentPath=null,currentPset=null;
let G=null,cv=null,ctx=null,rafId=null,speed=1,paused=false,toastTimer=null;
// BUG FIX: track devFromMenu at module scope so closeDev always knows origin
let devFromMenu=true;
let autoWave=false;
let isEndgame=false;
let egDiff=1; // 0=easy,1=normal,2=hard
let egRound=0;
const EG_DIFF_MULT=[0.7,1.0,1.5];
const EG_DIFF_NAMES=['ง่าย','ปกติ','ยาก'];
const EG_PATH=[ /* ใช้ path ด่าน 2 */
  [0,1],[1,1],[2,1],[3,1],[3,2],[3,3],[3,4],[3,5],[4,5],[5,5],[6,5],
  [7,5],[7,4],[7,3],[7,2],[8,2],[9,2],[10,2],[11,2],
  [11,3],[11,4],[10,4],[9,4],[8,4],[8,5],[8,6],[8,7],
  [9,7],[10,7],[11,7],[11,8],[10,8],[9,8],[8,8],[7,8],
  [6,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]
];
let holdTimer=null;
let holdTower=null;
let selectedTowersForStage=[];
let pendingStageIndex=-1;
let stageMaxTowers=6;

function setStage(si){
  currentStage=STAGES[si];
  currentPath=currentStage.path;
  currentPset=new Set(currentPath.map(p=>p[0]+','+p[1]));
}
function mkState(){
  return{towers:[],enemies:[],projs:[],particles:[],fxRings:[],fxTrails:[],fxFlash:[],
    dmgNums:[],  /* floating damage numbers */
    gold:CFG.startGold,hp:CFG.baseHP,maxHp:CFG.baseHP,
    wave:0,score:0,selTwr:-1,waveActive:false,
    over:false,win:false,queue:[],spawnT:0,mx:-1,my:-1,
    selTowerInfo:null,gmTimers:{},shakeT:0,waveBanner:null,bossWarning:null,
    kills:0,comboN:0,comboT:0,maxCombo:0,runeInv:[],
    weather:mkWeatherState()};
}
/* ══ WEATHER SYSTEM ══ */
function mkWeatherState(){
  return {
    active:null,
    rangeMult:1, spdMult:1, hpMult:1,
    iceImmune:false, iceRateMult:1,
    splashMult:1, dodgeChance:0, goldMineMult:1,
    struckTowers:[], lightningTimer:0,
  };
}
const WEATHERS=[
  {id:'fog',icon:'🌫️',name:'FOG',desc:'Tower range -50%',color:'rgba(180,180,200,.18)',
   apply:(G)=>{if(G.weather)G.weather.rangeMult=0.5;},
   unapply:(G)=>{if(G.weather)G.weather.rangeMult=1;}},
  {id:'blizzard',icon:'🧊',name:'BLIZZARD',desc:'Enemy speed +50%, Ice immune',color:'rgba(100,200,255,.15)',
   apply:(G)=>{if(G.weather){G.weather.spdMult=1.5;G.weather.iceImmune=true;}},
   unapply:(G)=>{if(G.weather){G.weather.spdMult=1;G.weather.iceImmune=false;}}},
  {id:'lightning',icon:'⚡',name:'LIGHTNING',desc:'40% towers disabled, reshuffles every 10s',color:'rgba(255,240,100,.1)',
   apply:(G)=>{if(G.weather)G.weather.lightningTimer=0;applyLightningStrike();},
   unapply:(G)=>{if(G.weather){G.weather.struckTowers=[];G.weather.lightningTimer=0;}}},
  {id:'darknight',icon:'🌑',name:'DARK NIGHT',desc:'Enemy HP +50%, speed +40%',color:'rgba(20,0,40,.55)',
   apply:(G)=>{if(G.weather){G.weather.hpMult=1.5;G.weather.spdMult=1.4;}},
   unapply:(G)=>{if(G.weather){G.weather.hpMult=1;G.weather.spdMult=1;}}},
  {id:'heatwave',icon:'🔥',name:'HEAT WAVE',desc:'Ice tower rate -70%',color:'rgba(255,120,0,.12)',
   apply:(G)=>{if(G.weather)G.weather.iceRateMult=0.3;},
   unapply:(G)=>{if(G.weather)G.weather.iceRateMult=1;}},
  {id:'rain',icon:'🌧️',name:'HEAVY RAIN',desc:'Cannon & Magic splash -40%',color:'rgba(50,100,200,.15)',
   apply:(G)=>{if(G.weather)G.weather.splashMult=0.6;},
   unapply:(G)=>{if(G.weather)G.weather.splashMult=1;}},
  {id:'tornado',icon:'🌪️',name:'TORNADO',desc:'Enemies dodge 25% of projectiles',color:'rgba(150,150,150,.2)',
   apply:(G)=>{if(G.weather)G.weather.dodgeChance=0.25;},
   unapply:(G)=>{if(G.weather)G.weather.dodgeChance=0;}},
  {id:'sun',icon:'☀️',name:'SCORCHING SUN',desc:'Gold Mine 50% less gold',color:'rgba(255,220,0,.1)',
   apply:(G)=>{if(G.weather)G.weather.goldMineMult=0.5;},
   unapply:(G)=>{if(G.weather)G.weather.goldMineMult=1;}},
];
const STAGE_WEATHER=[
  ['fog','rain'],['fog','darknight'],['heatwave','tornado'],
  ['heatwave','sun','tornado'],['sun','rain'],['lightning','blizzard'],
  ['fog','rain','tornado'],['darknight','lightning'],['darknight','blizzard','lightning'],
  ['darknight','lightning','blizzard','tornado'], // Stage 10: Dark Tower Summit — final showdown, full chaos
  ['darknight','lightning','blizzard','tornado','fog'], // Stage 11: Shadow Remnant — true final, all chaos + fog
];
function rollWeather(stageId){
  if(!G) return;
  if(!G.weather) G.weather=mkWeatherState();
  if(Math.random()>0.35){clearWeather();return;}
  const pool=STAGE_WEATHER[Math.min(stageId,STAGE_WEATHER.length-1)]||[];
  if(!pool.length){clearWeather();return;}
  const wid=pool[Math.floor(Math.random()*pool.length)];
  const w=WEATHERS.find(x=>x.id===wid);
  if(w) applyWeather(w);
}
function applyWeather(w){
  if(!G) return;
  if(!G.weather) G.weather=mkWeatherState();
  clearWeather(true);
  G.weather.active=w.id;
  w.apply(G);
  const ov=document.getElementById('weatherOverlay');
  if(ov) ov.style.background=w.color;
  const hud=document.getElementById('weatherHud');
  if(hud){hud.style.display='flex';hud.classList.add('active');hud.innerHTML=w.icon+' '+w.name;hud.style.color=getWeatherColor(w.id);}
  showWeatherWarning(w);
}
function clearWeather(silent){
  if(!G||!G.weather) return;
  if(G.weather.active){
    const w=WEATHERS.find(x=>x.id===G.weather.active);
    if(w) w.unapply(G);
  }
  G.weather=mkWeatherState();
  const ov=document.getElementById('weatherOverlay');
  if(ov) ov.style.background='transparent';
  const hud=document.getElementById('weatherHud');
  if(hud){hud.style.display='none';hud.classList.remove('active');}
}
function getWeatherColor(id){
  const c={fog:'#b0bec5',blizzard:'#80d8ff',lightning:'#ffe082',
    darknight:'#ce93d8',heatwave:'#ff8a65',rain:'#64b5f6',tornado:'#e0e0e0',sun:'#ffcc02'};
  return c[id]||'#fff';
}
function showWeatherWarning(w){
  const b=document.getElementById('weatherBanner');
  if(!b) return;
  document.getElementById('wbIcon').textContent=w.icon;
  document.getElementById('wbName').textContent=w.name;
  document.getElementById('wbDesc').textContent=w.desc;
  b.style.display='flex';
  setTimeout(()=>{b.style.display='none';},3000);
}
function applyLightningStrike(){
  if(!G||!G.weather||G.weather.active!=='lightning') return;
  const n=G.towers.length;
  if(!n) return;
  const count=Math.max(1,Math.ceil(n*0.4));
  // store direct tower references (not indices) so selling/placing towers mid-storm can't desync the struck set
  const pool=G.towers.slice();
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  G.weather.struckTowers=pool.slice(0,count);
  G.weather.struckTowers.forEach(tw=>{
    if(!tw) return;
    G.fxRings.push({x:tw.col*CS+CS/2,y:tw.row*CS+CS/2,r:2,maxR:CS*1.5,life:.8,lw:3,col:'#ffe082',delay:0});
  });
  showToast('⚡ Lightning struck '+count+' tower'+(count>1?'s':'')+'!');
}
/* ══ GAME LIFECYCLE ══ */
function initGame(){
  // BUG FIX: cancel any lingering RAF before starting new loop
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  G=mkState();
  const s=currentStage;
  // ใช้ startGold per-stage ถ้ามี (balance override)
  if(s.startGold!=null) G.gold=s.startGold;
  document.getElementById('endOverlay').style.display='none';
  document.getElementById('pauseScreen').style.display='none';
  // 🌦 reset weather UI
  (function(){const ov=document.getElementById('weatherOverlay');if(ov)ov.style.background='transparent';
    const hud=document.getElementById('weatherHud');if(hud)hud.style.display='none';
    const wb=document.getElementById('weatherBanner');if(wb)wb.style.display='none';})();
  document.getElementById('waveBtn').disabled=false;
  document.getElementById('waveTxt').textContent='0';
  document.getElementById('maxWaveTxt').textContent=s.waves;
  document.getElementById('stageBadge').textContent='S'+(s.id+1)+' '+s.icon;
  // BUG FIX: reset selTwr highlight on restart
  for(let i=0;i<8;i++){const b=document.getElementById('tb'+i);if(b)b.classList.remove('sel','locked-tower');}
  paused=false;speed=1;autoWave=false;_settingsPausedGame=false;
  document.getElementById('speedBtn').textContent='1×';
  document.getElementById('pauseBtn').textContent='⏸';
  document.getElementById('settingsScreen').style.display='none';
  const ab=document.getElementById('autoBtn');if(ab){ab.classList.remove('on');ab.textContent='🔁 Auto';}
  updateTowerPanel();
  updateHUD();
  updateMenuStats();
  let last=performance.now();
  function loop(ts){
    /* BUG FIX: guard against stale loops after goMenu/goStageSelect */
    if(!G){return;}
    if(paused){rafId=requestAnimationFrame(loop);return;}
    const dt=Math.min((ts-last)/1000,.1)*speed; last=ts;
    update(dt); render();
    if(!G.over&&!G.win) rafId=requestAnimationFrame(loop);
    // else loop stops naturally
  }
  rafId=requestAnimationFrame(loop);
}

function restartGame(){
  document.getElementById('endOverlay').style.display='none';
  initGame();
}
function goStageSelect(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  G=null;paused=false;
  document.getElementById('endOverlay').style.display='none';
  document.getElementById('pauseScreen').style.display='none';
  openStageSelect();
}
function goMenu(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  G=null;paused=false;
  showScreen('mm',true);
  updateMenuStats();
}
function goNextStage(){
  const nextSi=currentStage.id+1;
  if(nextSi<STAGES.length&&!STAGES[nextSi].comingSoon&&isStageUnlocked(nextSi)) startStage(nextSi);
  else goStageSelect();
}
function toggleAutoWave(){
  autoWave=!autoWave;
  const btn=document.getElementById('autoBtn');
  btn.classList.toggle('on',autoWave);
  btn.textContent=autoWave?'🔁 Auto ON':'🔁 Auto';
  showToast(autoWave?'🔁 Auto ON — ส่งคลื่นอัตโนมัติ':'⏹ ออโต้ OFF');
}

function togglePause(){
  paused=!paused;
  document.getElementById('pauseBtn').textContent=paused?'▶':'⏸';
  document.getElementById('pauseScreen').style.display=paused?'flex':'none';
}
function pausedRestart(){
  paused=false;
  document.getElementById('pauseScreen').style.display='none';
  restartGame();
}
let _settingsPausedGame=false;
function openSettings(){
  if(!G||G.over||G.win||document.getElementById('pauseScreen').style.display==='flex') return;
  if(!paused){paused=true;document.getElementById('pauseBtn').textContent='▶';_settingsPausedGame=true;}
  else _settingsPausedGame=false;
  document.getElementById('settSpeedBtn').textContent=speed+'×';
  document.getElementById('settSfxBtn').textContent=_sfxOn?'🔊':'🔇';
  document.getElementById('settVolSlider').value=Math.round(_sfxVol*100);
  document.getElementById('settAutoBtn').classList.toggle('on',autoWave);
  document.getElementById('settAutoBtn').textContent=autoWave?'🔁 Auto ON':'🔁 Auto';
  document.getElementById('settingsScreen').style.display='flex';
}
function closeSettings(){
  document.getElementById('settingsScreen').style.display='none';
  if(_settingsPausedGame){paused=false;document.getElementById('pauseBtn').textContent='⏸';_settingsPausedGame=false;}
}
function updateTowerPanel(){
  const active=selectedTowersForStage.length>0?selectedTowersForStage:(currentStage.unlockedTowers||[0,1,2,3,4,5,6,7]);
  for(let i=0;i<8;i++){
    const btn=document.getElementById('tb'+i);
    if(!btn) continue;
    const locked=!active.includes(i);
    btn.style.display=locked?'none':'flex';
    btn.classList.remove('locked-tower','sel');
    const tc=document.getElementById('tc'+i);
    if(tc) tc.textContent='💰'+CFG.t_cost[i];
  }
}


/* ══ SOUND SYSTEM (Web Audio API — no external files) ══ */
let _AC=null,_sfxVol=0.35,_sfxOn=true;
function _getAC(){if(!_AC){try{_AC=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return _AC;}
function _resumeAC(){const ac=_getAC();if(ac&&ac.state==='suspended')ac.resume();}
function _playSound(type){
  if(!_sfxOn) return;
  const ac=_getAC(); if(!ac) return;
  _resumeAC();
  const v=ac.createGain(); v.gain.setValueAtTime(_sfxVol,ac.currentTime); v.connect(ac.destination);
  try{
    switch(type){
      case 'cannon':{// deep thump + noise burst
        const b=ac.createOscillator(),bg=ac.createGain();
        b.type='sine'; b.frequency.setValueAtTime(110,ac.currentTime);
        b.frequency.exponentialRampToValueAtTime(35,ac.currentTime+.18);
        bg.gain.setValueAtTime(.9,ac.currentTime); bg.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.22);
        b.connect(bg); bg.connect(v); b.start(); b.stop(ac.currentTime+.22);
        // noise burst
        const buf=ac.createBuffer(1,ac.sampleRate*.1,ac.sampleRate);
        const d=buf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*.5;
        const ns=ac.createBufferSource(),ng=ac.createGain();
        ng.gain.setValueAtTime(.4,ac.currentTime); ng.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.1);
        ns.buffer=buf; ns.connect(ng); ng.connect(v); ns.start(); break;}
      case 'ice':{// descending crystal tone
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='triangle'; o.frequency.setValueAtTime(880,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(320,ac.currentTime+.25);
        og.gain.setValueAtTime(.5,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.28);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.28); break;}
      case 'magic':{// sweeping whoosh
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sawtooth'; o.frequency.setValueAtTime(280,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(620,ac.currentTime+.12);
        o.frequency.exponentialRampToValueAtTime(200,ac.currentTime+.3);
        og.gain.setValueAtTime(.35,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.32);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.32); break;}
      case 'sniper':{// sharp crack
        const buf=ac.createBuffer(1,ac.sampleRate*.08,ac.sampleRate);
        const d=buf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*(1-i/d.length);
        const ns=ac.createBufferSource(),ng=ac.createGain();
        ng.gain.setValueAtTime(.9,ac.currentTime); ng.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.08);
        ns.buffer=buf; ns.connect(ng); ng.connect(v); ns.start(); break;}
      case 'archer':{// light twang
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='triangle'; o.frequency.setValueAtTime(520,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(260,ac.currentTime+.18);
        og.gain.setValueAtTime(.4,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.2);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.2); break;}
      case 'thunder':{// electric buzz
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sawtooth'; o.frequency.setValueAtTime(160,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(60,ac.currentTime+.15);
        og.gain.setValueAtTime(.7,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.18);
        o.connect(og); og.connect(v);
        const o2=ac.createOscillator(),o2g=ac.createGain();
        o2.type='square'; o2.frequency.setValueAtTime(440,ac.currentTime);
        o2.frequency.exponentialRampToValueAtTime(80,ac.currentTime+.12);
        o2g.gain.setValueAtTime(.3,ac.currentTime); o2g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.12);
        o2.connect(o2g); o2g.connect(v);
        o.start(); o.stop(ac.currentTime+.18); o2.start(); o2.stop(ac.currentTime+.12); break;}
      case 'die':{// short pop
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sine'; o.frequency.setValueAtTime(300+Math.random()*200,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(60,ac.currentTime+.12);
        og.gain.setValueAtTime(.3,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.13);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.13); break;}
      case 'boss_spawn':{// deep roar
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sawtooth'; o.frequency.setValueAtTime(55,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(30,ac.currentTime+.8);
        og.gain.setValueAtTime(1.0,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.85);
        o.connect(og); og.connect(v);
        const o2=ac.createOscillator(),o2g=ac.createGain();
        o2.type='square'; o2.frequency.setValueAtTime(220,ac.currentTime);
        o2.frequency.exponentialRampToValueAtTime(40,ac.currentTime+.5);
        o2g.gain.setValueAtTime(.5,ac.currentTime); o2g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.5);
        o2.connect(o2g); o2g.connect(v); o.start(); o.stop(ac.currentTime+.85); o2.start(); o2.stop(ac.currentTime+.5); break;}
      case 'heal':{// bright ding
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sine'; o.frequency.setValueAtTime(660,ac.currentTime);
        o.frequency.setValueAtTime(880,ac.currentTime+.05);
        og.gain.setValueAtTime(.35,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.35);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.35); break;}
      case 'shield_break':{// clang
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='square'; o.frequency.setValueAtTime(800,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(200,ac.currentTime+.3);
        og.gain.setValueAtTime(.6,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.32);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.32); break;}
      case 'wave_clear':{// triumphant arpeggio
        [523,659,784,1047].forEach((freq,i)=>{
          const o=ac.createOscillator(),og=ac.createGain();
          o.type='sine'; o.frequency.setValueAtTime(freq,ac.currentTime+i*.08);
          og.gain.setValueAtTime(.28,ac.currentTime+i*.08); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+i*.08+.35);
          o.connect(og); og.connect(v); o.start(ac.currentTime+i*.08); o.stop(ac.currentTime+i*.08+.35);
        }); break;}
    }
  }catch(e){}
}
/* tower type → sound name */
const _TSND=['cannon','ice','magic','sniper',null,'archer',null,'thunder'];
let _sfxLastDie=0; /* throttle death sounds */
function toggleSfx(){
  _sfxOn=!_sfxOn;
  const btn=document.getElementById('sfxBtn');
  if(btn) btn.textContent=_sfxOn?'🔊':'🔇';
  if(_sfxOn){_resumeAC();_playSound('wave_clear');}
}

/* ══ WAVE ══ */
function startWave(){
  if(!G||G.waveActive||G.over||G.win||paused) return;
  G.wave++;
  document.getElementById('waveTxt').textContent=G.wave;
  document.getElementById('waveBtn').disabled=true;
  G.waveActive=true; G.queue=[]; G.spawnT=0;
  G._waveHpAtStart=G.hp; // track HP at wave start for no-damage achievement
  rollWeather(currentStage.id); // 🌦 roll random weather for this wave
  const _stageMul=currentStage.enemyMult||1;
  const n=Math.round((CFG.enemyPerWaveBase+G.wave*CFG.enemyPerWaveInc)*_stageMul);
  const avail=currentStage.enemyTypes;
  for(let i=0;i<n;i++){
    // BUG FIX: clamp index properly, avoid out-of-bounds on avail array
    const maxIdx=Math.min(avail.length-1, Math.ceil(G.wave/2)-1);
    let ei=avail[Math.floor(Math.random()*(maxIdx+1))];
    const bChance=currentStage.bossChance!==undefined?currentStage.bossChance:CFG.bossChance;
    if(avail.includes(4)&&G.wave>=4&&Math.random()<bChance) ei=4;
    /* Final Boss จอมมาร: ปรากฏตั้งแต่คลื่น 9 เป็นต้นไป */
    if(avail.includes(9)&&G.wave>=9&&Math.random()<bChance*.8) ei=9;
    G.queue.push(ei);
  }
  // V5: wave incoming banner
  G.waveBanner={text:'⚔️  WAVE  '+G.wave,t:1.5};
}

function endGame(win){
  if(!G) return;
  clearWeather(); // 🌦 stop weather when game ends
  G.over=!win; G.win=win;
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  const si=currentStage.id;
  let stars=0;
  if(win){
    /* ดาว 3: HP เหลือ >= 75%, ดาว 2: >= 40%, ดาว 1: ผ่านได้ */
    stars=G.hp>=Math.ceil(G.maxHp*.75)?3:G.hp>=Math.ceil(G.maxHp*.4)?2:1;
  }
  /* บันทึกเสมอทั้ง win และ lose (lose = 0 ดาว แต่ยังบันทึก attempt ไว้) */
  saveProgress(si, stars);
  updateMenuStats();
  document.getElementById('endTitle').textContent=win?'🏆 ชัยชนะ!':'💀 เกมจบ';
  document.getElementById('starRow').textContent=win?'★'.repeat(stars)+'☆'.repeat(3-stars):'☆☆☆';
  document.getElementById('endScore').textContent='Score: '+G.score+(win?' — '+currentStage.name+' cleared!':' — Try again!');
  const banner=document.getElementById('unlockBanner');
  if(win&&currentStage.unlocks){
    banner.style.display='block';
    let _unlockTxt='';
    if(Array.isArray(currentStage.unlocks)){
      currentStage.unlocks.forEach(u=>{
        if(u.type==='tower') _unlockTxt+=`⚡ ${TNAMES[u.id]} Tower`;
      });
    } else { _unlockTxt=currentStage.unlocks; }
    banner.innerHTML=`<strong>🔓 Unlocked!</strong> ${_unlockTxt} is now available in Stage ${si+2}!`;
  } else { banner.style.display='none'; }
  const hasNext=win&&(si+1<STAGES.length)&&!STAGES[si+1].comingSoon&&isStageUnlocked(si+1);
  document.getElementById('nextStageBtn').style.display=hasNext?'inline-block':'none';
  /* ══ FINAL STAGE VICTORY ══ */
  if(win&&currentStage.isFinalStage){
    document.getElementById('endTitle').textContent='👑 ยุติความมืดแล้ว!';
    document.getElementById('endScore').textContent='🏆 คุณเอาชนะจอมมารและยุติความมืดตลอดกาล! Score: '+G.score;
    banner.style.display='block';
    banner.innerHTML=`<strong>🎉 YOU WIN!</strong> ยินดีด้วย — คุณผ่านทุกด่านแล้ว! จอมมารพ่ายแพ้ไปตลอดกาล 👁️💥`;
    banner.style.background='linear-gradient(135deg,rgba(100,0,180,.4),rgba(200,0,100,.3))';
    banner.style.borderColor='#ce93d8';
    _launchFinalVictoryFX();
  }
  document.getElementById('endOverlay').style.display='flex';
}
function _launchFinalVictoryFX(){
  if(!G) return;
  const cx=cv.width/2, cy=cv.height/2;
  const cols=['#ffe082','#ce93d8','#80cbc4','#f48fb1','#fff176','#a5d6a7','#90caf9'];
  for(let i=0;i<60;i++){
    const a=Math.random()*Math.PI*2, sp=2+Math.random()*4;
    const col=cols[i%cols.length];
    G.particles.push({x:cx+Math.random()*120-60,y:cy+Math.random()*80-40,
      txt:i%5===0?'⭐':i%7===0?'👑':'★',col,life:2+Math.random()*2,
      vy:Math.sin(a)*sp-1,vx:Math.cos(a)*sp,decay:.6,scale:.8+Math.random()*.8});
  }
  G.shakeT=Math.min(.6,G.shakeT+.3);
}

/* ══ UPDATE ══ */
function update(dt){
  if(!G||G.over||G.win) return;
  // weather: lightning re-shuffle timer
  if(G.weather&&G.weather.active==='lightning'){
    G.weather.lightningTimer=(G.weather.lightningTimer||0)+dt;
    if(G.weather.lightningTimer>=10){G.weather.lightningTimer=0;applyLightningStrike();}
  }
  // spawn
  if(G.waveActive&&G.queue.length>0){
    G.spawnT-=dt;
    if(G.spawnT<=0){spawnEnemy(G.queue.shift());G.spawnT=CFG.spawnInterval;}
  }
  // enemies
  const plen=currentPath.length;
  for(let i=G.enemies.length-1;i>=0;i--){
    const e=G.enemies[i];
    if(!e.alive){G.enemies.splice(i,1);continue;}
    if(e.slowT>0){e.slowT-=dt;if(e.slowT<=0)e.slow=1;}
    if(e._enrageT>0) e._enrageT-=dt;
    if(e._dodgeFlash>0) e._dodgeFlash-=dt;
    // 👺 โกบลิน: Pack Rush — โกบลินที่อยู่ใกล้กัน (<1.2 ช่อง) ได้บัฟความเร็ว +20%
    e._packBoost=false;
    if(e.ti===0){
      for(const o of G.enemies){
        if(o!==e&&o.alive&&o.ti===0&&Math.hypot(o.x-e.x,o.y-e.y)<CS*1.2){e._packBoost=true;break;}
      }
    }
    e.prog+=e.spd*e.slow*((e._enrageT>0)?(e._enrageMult||1):1)*((e._diveT>0)?1.5:1)*(e._packBoost?1.2:1)*((G&&G.weather&&G.weather.spdMult)?G.weather.spdMult:1)*CS*dt;
    while(e.prog>=CS){
      e.prog-=CS; e.pi++;
      if(e.pi>=plen-1){
        unlockMonster(e.ti);
        e.alive=false; G.enemies.splice(i,1);
        G.hp=Math.max(0,G.hp-1); updateHUD(); G.shakeT=Math.min(.55,G.shakeT+.2);
        if(G.hp<=0){endGame(false);return;}
        break;
      }
    }
    if(!e.alive) continue;
    const p0=currentPath[e.pi],p1=currentPath[Math.min(e.pi+1,plen-1)];
    const t=Math.min(e.prog/CS,1);
    e.x=p0[0]*CS+CS/2+(p1[0]-p0[0])*CS*t;
    e.y=p0[1]*CS+CS/2+(p1[1]-p0[1])*CS*t;
  }
  // burn DoT (Inferno rune)
  G.enemies.forEach(e=>{
    if(!e.alive||!e.burnT) return;
    e.burnT-=dt;
    e._burnTick=(e._burnTick||0)-dt;
    if(e._burnTick<=0){
      e._burnTick=0.5;
      applyDmg(e,e.burnDmg,0);
      G.particles.push({x:e.x+(Math.random()-.5)*8,y:e.y-ESIZES[e.ti]-4,
        txt:'🔥',col:'#ff5722',life:.5,vy:-.8,vx:(Math.random()-.5)*.5,decay:2,scale:.7});
    }
    if(e.burnT<=0){e.burnT=0;e.burnDmg=0;}
  });
  // healer monsters (ti===10) heal nearby allies every 2s
  G.enemies.forEach(healer=>{
    if(!healer.alive||healer.ti!==10) return;
    healer.healCd=(healer.healCd||0)-dt;
    if(healer.healCd>0) return;
    healer.healCd=2.0; // heal every 2 seconds
    const healAmt=Math.round(CFG.m_hp[10]*0.18); // heal 18% of shaman base HP
    const healRange=2.5*CS; // 2.5 grid cells radius
    let healed=false;
    G.enemies.forEach(target=>{
      if(!target.alive||target===healer) return;
      if(Math.hypot(target.x-healer.x,target.y-healer.y)>healRange) return;
      if(target.hp>=target.mhp) return;
      target.hp=Math.min(target.mhp,target.hp+healAmt);
      healed=true;
      // green heal particles on target
      G.particles.push({x:target.x,y:target.y-ESIZES[target.ti]-8,txt:'💚',col:'#69f0ae',
        life:1.0,vy:-1.2,vx:(Math.random()-.5)*.8,decay:1.2,scale:.85});
    });
    // pulse ring on healer when casting
    G.fxRings.push({x:healer.x,y:healer.y,r:5,maxR:healRange,life:.55,lw:2,col:'#69f0ae',delay:0});
    if(healed){
      G.particles.push({x:healer.x,y:healer.y-ESIZES[10]-10,txt:'✨ Heal!',col:'#b2ff59',
        life:1.1,vy:-1.0,vx:0,decay:1.1,scale:.9});
      _playSound('heal');
    }
  });
  // 🌑 เงามืด (ti===2) ปล่อยคลื่นดูดพลัง — ระงับบัฟ/synergy/awaken ของป้อมในระยะชั่วคราว
  G.enemies.forEach(shadow=>{
    if(!shadow.alive||shadow.ti!==2) return;
    shadow.drainCd=(shadow.drainCd||3+Math.random()*2)-dt;
    if(shadow.drainCd>0) return;
    shadow.drainCd=6.0; // ปล่อยคลื่นดูดพลังทุก 6 วิ
    const drainRange=2.2*CS;
    let drained=false;
    G.towers.forEach(t=>{
      if(Math.hypot(t.col*CS+CS/2-shadow.x,t.row*CS+CS/2-shadow.y)>drainRange) return;
      t._drainT=3.0; // ระงับบัฟ 3 วินาที
      drained=true;
      G.particles.push({x:t.col*CS+CS/2,y:t.row*CS+CS/2-CS*.6,txt:'🌑',col:'#7e57c2',
        life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
    });
    G.fxRings.push({x:shadow.x,y:shadow.y,r:5,maxR:drainRange,life:.6,lw:2,col:'#7e57c2',delay:0});
    if(drained){
      G.particles.push({x:shadow.x,y:shadow.y-ESIZES[2]-10,txt:'🌑 ดูดพลัง!',col:'#b39ddb',
        life:1.1,vy:-1.0,vx:0,decay:1.1,scale:.9});
    }
  });
  // 🐉 วิเวิร์น (ti===7) โฉบ: เร่งความเร็ว 1.5x ชั่วครู่ + หยุดป้อมสุ่ม 1 ตัว 3 วิ
  G.enemies.forEach(wv=>{
    if(!wv.alive||wv.ti!==7) return;
    if(wv._diveT>0) wv._diveT-=dt;
    wv.diveCd=(wv.diveCd||3+Math.random()*2)-dt;
    if(wv.diveCd>0) return;
    wv.diveCd=5.0; // โฉบทุก 5 วิ
    wv._diveT=1.2;
    if(G.towers.length){
      const tw=G.towers[Math.floor(Math.random()*G.towers.length)];
      tw._stunT=3.0; // หยุดทำงานป้อม 3 วินาที
      G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS,txt:'💫 หยุดทำงาน!',col:'#ff8a65',
        life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
    }
    G.particles.push({x:wv.x,y:wv.y-ESIZES[7]-14,txt:'🐉 โฉบ!',col:'#ff8a65',
      life:1.0,vy:-1.4,vx:0,decay:1.2,scale:1});
  });
  // 🔥 วิญญาณไฟ (ti===3) พ่นไฟป้องกันตัวเองเป็นช่วงๆ ลดดาเมจที่ได้รับ 30%
  G.enemies.forEach(fs=>{
    if(!fs.alive||fs.ti!==3) return;
    if(fs._flareT>0) fs._flareT-=dt;
    fs.flareCd=(fs.flareCd||2+Math.random()*3)-dt;
    if(fs.flareCd>0) return;
    fs.flareCd=6.0; // พ่นไฟป้องกันทุก 6 วิ
    fs._flareT=1.5;
    G.particles.push({x:fs.x,y:fs.y-ESIZES[3]-12,txt:'🔥 ป้องกัน!',col:'#ff8a65',
      life:1.0,vy:-1.2,vx:0,decay:1.2,scale:.9});
  });
  // 🛡️ ชิลด์ไนท์ (ti===8) ฟื้นโล่เองถ้าไม่โดนตี 4 วิ — ฟื้น 15% ของโล่สูงสุด/วิ
  G.enemies.forEach(sk=>{
    if(!sk.alive||sk.ti!==8||sk.maxShieldHp<=0) return;
    sk._noDmgT=(sk._noDmgT||0)+dt;
    if(sk._noDmgT>=4&&sk.shieldHp<sk.maxShieldHp){
      sk.shieldHp=Math.min(sk.maxShieldHp,sk.shieldHp+sk.maxShieldHp*.15*dt);
    }
  });
  // 👹 ทักษะพิเศษบอส (ขึ้นกับด่าน): ด่าน%3===0=คลั่งเร่งความเร็ว, ===1=เรียกร่างเสริม, ===2=ฟื้นพลังตัวเอง
  G.enemies.forEach(boss=>{
    if(!boss.alive||MTYPE[boss.ti]!==1) return;
    boss._skillCd=(boss._skillCd||4+Math.random()*2)-dt;
    const skillType=(currentStage.id||0)%3;
    // Telegraph: เตือนล่วงหน้า ~1 วิ ก่อนปล่อยสกิล ด้วย aura เฉพาะประเภท
    if(boss._skillCd<=1&&boss._skillCd>0&&boss._telegraph!==skillType){
      boss._telegraph=skillType;
    }
    if(boss._skillCd>0) return;
    boss._telegraph=null;
    if(skillType===0){ // Enrage: เร่งความเร็วชั่วคราว
      boss._skillCd=8;
      boss._enrageT=3; boss._enrageMult=1.6;
      G.bossWarning={text:'💢 '+ENAMES[boss.ti]+' คลั่ง! เร่งความเร็ว!',t:1.6,col:'#ff5252'};
      G.shakeT=Math.min(.6,G.shakeT+.25);
      for(let k=0;k<14;k++){
        const a=k/14*Math.PI*2;
        G.particles.push({x:boss.x,y:boss.y,txt:'💢',col:'#ff5252',life:.6,vy:Math.sin(a)*2,vx:Math.cos(a)*2,decay:2,scale:.7});
      }
    } else if(skillType===1){ // Summon: เรียกร่างเสริม
      boss._skillCd=10;
      for(let k=0;k<2;k++){
        const mhp=Math.round(CFG.m_hp[0]*.6*(1+G.wave*.08));
        G.enemies.push({ti:0,pi:boss.pi,prog:boss.prog,x:boss.x+(Math.random()-.5)*20,y:boss.y+(Math.random()-.5)*20,
          hp:mhp,mhp:mhp,spd:getEnemySpd(0,currentStage.id)*1.1,reward:Math.round(CFG.m_rew[0]*.7),
          slow:1,slowT:0,alive:true,hitFlash:0,isAir:false,shieldHp:0,maxShieldHp:0});
      }
      G.bossWarning={text:'🌀 '+ENAMES[boss.ti]+' เรียกร่างเสริม!',t:1.6,col:'#ab47bc'};
      for(let k=0;k<10;k++){
        G.particles.push({x:boss.x,y:boss.y,txt:'🌀',col:'#ab47bc',life:.7,vy:-1-Math.random(),vx:(Math.random()-.5)*2,decay:1.8,scale:.6});
      }
    } else { // Self-heal: ฟื้นพลังตัวเอง
      boss._skillCd=9;
      if(boss.hp<boss.mhp){
        const healAmt=Math.round(boss.mhp*.12);
        boss.hp=Math.min(boss.mhp,boss.hp+healAmt);
        G.bossWarning={text:'💚 '+ENAMES[boss.ti]+' ฟื้นพลัง +'+healAmt,t:1.4,col:'#69f0ae'};
        G.particles.push({x:boss.x,y:boss.y-ESIZES[boss.ti]-10,txt:'💚 +'+healAmt,col:'#69f0ae',
          life:1.1,vy:-1.4,vx:0,decay:1.2,scale:1});
      }
    }
  });
  // towers shoot
  G.towers.forEach(tw=>{
    if(tw._drainT>0) tw._drainT-=dt;
    if(tw._stunT>0){tw._stunT-=dt;return;} // 🐉 ถูกวิเวิร์นโฉบหยุดทำงาน
    if(CFG.t_dmg[tw.type]===0) return;
    if(G.weather&&G.weather.struckTowers&&G.weather.struckTowers.length&&G.weather.struckTowers.includes(tw)) return; // ⚡ struck by lightning
    tw.cd=Math.max(0,tw.cd-dt);
    const range=getTowerRange(tw.type,tw.rngLv||tw.lv)*((G&&G.weather&&G.weather.rangeMult)?G.weather.rangeMult:1);
    const cx=tw.col+.5,cy=tw.row+.5;
    let best=null,bestP=-1;
    G.enemies.forEach(e=>{
      if(!e.alive) return;
      if(e.isAir&&!TCANAIR[tw.type]) return; /* ยิง air ไม่ได้ */
      if(Math.hypot(cx-e.x/CS,cy-e.y/CS)<=range){
        const prog=e.pi+e.prog/CS;
        if(prog>bestP){bestP=prog;best=e;}
      }
    });
    if(best) tw.angle=Math.atan2(best.y/CS-cy,best.x/CS-cx);
    if(best&&tw.cd<=0){
      const _rateMultW=(tw.type===1&&G.weather&&G.weather.iceRateMult)?G.weather.iceRateMult:1;
      tw.cd=1/Math.max(.01,getTowerRate(tw.type,tw.rateLv||tw.lv)*_rateMultW);
      // ⚡ สายความเร็ว Lv.4+ ปลดล็อก "ยิงรัว" — มีโอกาสคูลดาวน์สั้นลงทันที
      if((tw.rateLv||tw.lv)>=4&&Math.random()<0.2){
        tw.cd*=0.45;
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS+CS/2-22,txt:'⚡รัว!',col:'#ffe234',life:.45,vy:-1.3,vx:0,decay:2.6,scale:.75});
      }
      const fx=tw.col*CS+CS/2, fy=tw.row*CS+CS/2;
      const _aw=tw.awakened&&!(tw._drainT>0); // ⚡ ป้อมตื่นแล้วและไม่ได้ถูกดูดพลัง
      let _rdmg=getTowerDmg(tw.type,tw.dmgLv||tw.lv)*getBuffMult(tw.col,tw.row)*getSynergyMult(tw.type,tw.col,tw.row);
      if(_aw) _rdmg*=1.15; // Awaken bonus +15% (ใช้ไม่ได้ถ้าโดนดูดพลัง)
      let _risCrit=false;
      let _rSlow=(TSLOW[tw.type]||0)+getSynergySlowBonus(tw.type,tw.col,tw.row);
      if(tw.rune===5) _rdmg*=1.25; // Power rune
      if(tw.rune===3&&Math.random()<(_aw?.28:.2)){_rdmg*=2.5;_risCrit=true;} // Precision rune (awakened: 28% crit)
      if(tw.rune===1) _rSlow=Math.min((_rSlow||0)+(_aw?.35:.25),0.85); // Frost rune (awakened: +35%)
      const _wSplashMult=((tw.type===0||tw.type===2)&&G.weather&&G.weather.splashMult)?G.weather.splashMult:1;
      // ⚡ Awaken เฉพาะป้อม: Cannon=splash ใหญ่ขึ้น, Thunder=chain เพิ่ม
      const _awSplashMult=(_aw&&tw.type===0)?1.5:1;
      const _awChainBonus=(_aw&&tw.type===7)?2:0;
      const _rp=G.projs[G.projs.push({
        x:fx,y:fy,tx:best.x,ty:best.y,target:best,ox:fx,oy:fy,
        spd:280+(tw.type===3?120:0)+(tw.type===7?80:0),
        type:tw.type,
        dmg:_rdmg,
        splash:TSPLASH[tw.type]*_wSplashMult*_awSplashMult,slow:_rSlow,alive:true,
        chain:(TCHAIN[tw.type]||0)+_awChainBonus,
        _rngPierce:(tw.rngLv||tw.lv)>=4,
        _maxR:range*CS,
        _supBoost:_aw?getSupportAwakenBoost(tw.col,tw.row):1
      })-1];
      if(_risCrit) _rp._crit=true;
      if(tw.rune===1) _rp._frostRune=true;
      if(tw.rune===0) _rp._burnRune=true;
      if(tw.rune===2) _rp._stormRune=true;
      if(tw.rune===4) _rp._avaRune=true;
      if(_aw) _rp._awakenedRune=true;
      // ✨ Magic Awaken: โอกาสยิงเพิ่ม 20% (ตื่นแล้ว 40%) สูงสุด 3 นัด
      if(tw.type===2&&Math.random()<(_aw?.4:.2)){
        const _extra=_aw?2:1;
        for(let _m=0;_m<_extra;_m++) G.projs.push(Object.assign({},_rp));
      }
      // muzzle flash ring per tower type
      const mCol=TPROJ[tw.type];
      G.fxRings.push({x:fx,y:fy,r:2,maxR:tw.type===3?CS*.8:CS*.4,
        life:.5,lw:tw.type===3?2:1.5,col:mCol,delay:0});
      // sniper: laser line flash
      if(tw.type===3){
        G.fxRings.push({x:fx,y:fy,r:1,maxR:CS*.3,life:.35,lw:3,col:'#fffde7',delay:0});
      }
      // magic: extra sparkle burst
      if(tw.type===2){
        for(let k=0;k<5;k++){
          const ang=k/5*Math.PI*2;
          G.particles.push({x:fx,y:fy,txt:'·',col:'#ea80fc',
            life:.5,vy:Math.sin(ang)*.9,vx:Math.cos(ang)*.9,decay:3,scale:.8});
        }
      }
      // ice: freeze sparkle
      if(tw.type===1){
        for(let k=0;k<4;k++){
          const ang=k/4*Math.PI*2;
          G.particles.push({x:fx,y:fy,txt:'❄',col:'#80d8ff',
            life:.4,vy:Math.sin(ang)*.6,vx:Math.cos(ang)*.6,decay:3.5,scale:.7});
        }
      }
      // thunder: electric spark burst at muzzle
      if(tw.type===7){
        for(let k=0;k<6;k++){
          const ang=k/6*Math.PI*2;
          G.particles.push({x:fx,y:fy,txt:'·',col:'#ffe57f',
            life:.35,vy:Math.sin(ang)*1.4,vx:Math.cos(ang)*1.4,decay:4,scale:.9});
        }
        G.fxRings.push({x:fx,y:fy,r:2,maxR:CS*.5,life:.3,lw:1.5,col:'#ffe57f',delay:0});
      }
      // muzzle flash glow circle at barrel tip
      const _mfa=tw.angle||0;
      const _mfx=fx+Math.cos(_mfa)*CS*.32, _mfy=fy+Math.sin(_mfa)*CS*.32;
      G.fxFlash.push({x:_mfx,y:_mfy,r:tw.type===3?14:tw.type===0?16:10,life:.18,col:TPROJ[tw.type]||'#fff'});
      // shoot sound
      const _snd=_TSND[tw.type]; if(_snd) _playSound(_snd);
    }
  });
  // Enemy self-heal (stage 8 mechanic)
  if(currentStage&&currentStage.healTypes&&currentStage.healRate){
    G.enemies.forEach(e=>{
      if(!e.alive) return;
      if(currentStage.healTypes.includes(e.ti)&&e.hp<e.mhp){
        e.hp=Math.min(e.mhp, e.hp+e.mhp*currentStage.healRate*dt);
      }
    });
  }
  // Gold Mine production (only while a wave is active)
  if(G.waveActive) G.towers.forEach(tw=>{
    if(!TGOLDMINE[tw.type]) return;
    if(!G.gmTimers) G.gmTimers={};
    const key=tw.col+'_'+tw.row;
    G.gmTimers[key]=(G.gmTimers[key]||0)+dt;
    if(G.gmTimers[key]>=CFG.t_goldrate){
      G.gmTimers[key]=0;
      // 💚 Support Awaken: ดับเบิลโบนัส synergy ทองที่ได้รับ (+25% → +50%)
      let _gmSynMult=getSynergyGoldMult(tw.col,tw.row);
      if(_gmSynMult>1) _gmSynMult=1+(_gmSynMult-1)*getSupportAwakenBoost(tw.col,tw.row);
      // 💰 Gold Mine Awaken: ผลผลิตทอง x2
      const goldAmt=Math.round(CFG.t_goldamt[Math.min(tw.lv-1,3)]*((G.weather&&G.weather.goldMineMult)?G.weather.goldMineMult:1)*_gmSynMult*(tw.awakened?2:1));
      G.gold+=goldAmt; updateHUD();
      addParticle(tw.col*CS+CS/2,tw.row*CS+CS/2,'+'+goldAmt+'💰','#ffd54f');
      // V6: flying coin particles
      for(let _k=0;_k<3;_k++){
        G.particles.push({x:tw.col*CS+CS/2+(Math.random()-.5)*CS*.45,y:tw.row*CS+CS*.42,
          txt:'🪙',col:'#ffd54f',life:1.1+Math.random()*.4,
          vy:-1.7-Math.random()*1.1,vx:(Math.random()-.5)*.9,decay:.85,scale:.85+Math.random()*.25});
      }
    }
  });
  // projectiles
  for(let i=G.projs.length-1;i>=0;i--){
    const p=G.projs[i];
    if(!p.alive){G.projs.splice(i,1);continue;}
    const tx=p.target&&p.target.alive?p.target.x:p.tx;
    const ty=p.target&&p.target.alive?p.target.y:p.ty;
    const dx=tx-p.x,dy=ty-p.y,d=Math.hypot(dx,dy);
    if(d<10){
      p.alive=false;
      const _wDodge=(G.weather&&G.weather.dodgeChance)?G.weather.dodgeChance:0;
      if(p.splash>0){
        G.enemies.forEach(e=>{
          if(!e.alive||Math.hypot(e.x-tx,e.y-ty)>p.splash*CS) return;
          if(e.isAir&&!TCANAIR[p.type]) return; // splash ไม่โดน air ถ้าป้อมยิง air ไม่ได้
          if(_wDodge>0&&Math.random()<_wDodge) return; // 🌪️ tornado dodge
          applyDmg(e,p.dmg,p.type,p._rngPierce);
          if(p._burnRune&&Math.random()<0.25){e.burnT=p._awakenedRune?3.5:2.5;e.burnDmg=p._awakenedRune?12:8;}
          if(p._avaRune) e._avaRune=true;
        });
      } else {
        if(p.target&&p.target.alive){
          if(_wDodge>0&&Math.random()<_wDodge){
            G.particles.push({x:p.target.x,y:p.target.y-ESIZES[p.target.ti]-6,txt:'MISS',col:'#e0e0e0',life:.6,vy:-1,vx:0,decay:1.5,scale:.7});
          } else {
            applyDmg(p.target,p.dmg,p.type,p._rngPierce);
            if(p._burnRune&&Math.random()<0.25){p.target.burnT=p._awakenedRune?3.5:2.5;p.target.burnDmg=p._awakenedRune?12:8;}
            if(p._avaRune) p.target._avaRune=true;
          }
        }
      }
      // Storm rune chain
      if(p._stormRune&&Math.random()<0.35&&p.target){
        let nearest=null,nDist=Infinity;
        G.enemies.forEach(e=>{
          if(!e.alive||e===p.target) return;
          const cd=Math.hypot(e.x-p.target.x,e.y-p.target.y);
          if(cd<CS*3&&cd<nDist){nDist=cd;nearest=e;}
        });
        if(nearest){
          G.fxTrails.push({x:p.target.x,y:p.target.y,tx:nearest.x,ty:nearest.y,col:'#ffe57f',life:.5,type:99,lw:2});
          applyDmg(nearest,p.dmg*0.4,p.type,p._rngPierce);
        }
      }
      // Frost rune: extend slow duration
      if(p._frostRune&&p.slow>0&&p.target&&p.target.alive&&!(p.target.shieldHp>0&&!TPIERCE[p.type]&&!p._rngPierce)&&!(G.weather&&G.weather.iceImmune&&p.type===1)){
        p.target.slow=p.slow; p.target.slowT=3; // +1s over base 2
      }
      if(p.slow>0&&!p._frostRune&&p.target&&p.target.alive&&!(p.target.shieldHp>0&&!TPIERCE[p.type]&&!p._rngPierce)&&!(G.weather&&G.weather.iceImmune&&p.type===1)){
        // ❄️ Ice Awaken: ติดแข็ง (หยุดสนิท) 3 วินาที — Support ตื่นใกล้เคียงเพิ่มเป็น 6 วินาที
        if(p._awakenedRune&&p.type===1){ p.target.slow=0; p.target.slowT=3*(p._supBoost||1); }
        else { p.target.slow=p.slow; p.target.slowT=2; }
      }
      // 🎯 Sniper Awaken: ยิงทะลุเป็นเส้นตรง — สร้างความเสียหายให้ศัตรูที่อยู่หลังเป้าหมายบนเส้นยิงด้วย
      if(p.type===3&&p._awakenedRune){
        const _ddx=tx-p.ox,_ddy=ty-p.oy,_dlen=Math.hypot(_ddx,_ddy)||1;
        const _ux=_ddx/_dlen,_uy=_ddy/_dlen;
        G.enemies.forEach(e=>{
          if(!e.alive||e===p.target) return;
          if(e.isAir&&!TCANAIR[3]) return;
          if(e.shieldHp>0&&!TPIERCE[3]) return;
          const _ex=e.x-p.ox,_ey=e.y-p.oy;
          const _proj=_ex*_ux+_ey*_uy;
          if(_proj<=_dlen+1||_proj>(p._maxR||_dlen)) return;
          const _perp=Math.abs(_ex*_uy-_ey*_ux);
          if(_perp<CS*.35){
            applyDmg(e,p.dmg,p.type,true);
            e.hitFlash=.6;
            G.fxTrails.push({x:tx,y:ty,tx:e.x,ty:e.y,col:'#fff9c4',life:.35,type:99,lw:2});
            G.particles.push({x:e.x+(Math.random()-.5)*10,y:e.y-8,txt:'-'+Math.round(p.dmg),col:'#ff5252',
              life:1,vy:-1.5,vx:(Math.random()-.5)*.6,scale:1,decay:1.6});
          }
        });
      }
      // impact ring per type
      if(p.type===0){// Cannon: explosion ring
        G.fxRings.push({x:tx,y:ty,r:4,maxR:p.splash>0?p.splash*CS*1.2:CS*.5,life:.7,lw:3,col:'#ff7043',delay:0});
        G.fxRings.push({x:tx,y:ty,r:2,maxR:p.splash>0?p.splash*CS*.8:CS*.3,life:.4,lw:6,col:'#ffcc80',delay:0});
      } else if(p.type===1){// Ice: frost ring
        G.fxRings.push({x:tx,y:ty,r:2,maxR:CS*.45,life:.6,lw:2,col:'#80d8ff',delay:0});
      } else if(p.type===2){// Magic: arcane burst
        G.fxRings.push({x:tx,y:ty,r:3,maxR:p.splash*CS*1.1,life:.65,lw:3,col:'#ea80fc',delay:0});
        G.fxRings.push({x:tx,y:ty,r:5,maxR:p.splash*CS*.7,life:.4,lw:5,col:'#ce93d8',delay:.04});
      } else if(p.type===3){// Sniper: thin sharp ring
        G.fxRings.push({x:tx,y:ty,r:1,maxR:CS*.6,life:.4,lw:2,col:'#fff9c4',delay:0});
      } else if(p.type===7){// Thunder: electric burst + chain
        G.fxRings.push({x:tx,y:ty,r:2,maxR:CS*.55,life:.45,lw:2.5,col:'#ffe57f',delay:0});
        G.fxRings.push({x:tx,y:ty,r:1,maxR:CS*.3,life:.25,lw:4,col:'#fff9c4',delay:.02});
        // chain lightning
        if(p.chain>0&&p.target){
          const chainDmg=p.dmg*.6;
          const chainR=CS*2.2;
          const used=[p.target];
          let prev=p.target;
          for(let _c=0;_c<p.chain;_c++){
            let nearest=null,nDist=Infinity;
            G.enemies.forEach(e=>{
              if(!e.alive||used.includes(e)) return;
              const cd=Math.hypot(e.x-prev.x,e.y-prev.y);
              if(cd<chainR&&cd<nDist){nDist=cd;nearest=e;}
            });
            if(!nearest) break;
            used.push(nearest);
            // lightning bolt visual
            G.fxTrails.push({x:prev.x,y:prev.y,tx:nearest.x,ty:nearest.y,col:'#ffe57f',life:.5,type:99,lw:2.5});
            G.fxRings.push({x:nearest.x,y:nearest.y,r:1,maxR:CS*.35,life:.35,lw:2,col:'#ffe57f',delay:_c*.04});
            applyDmg(nearest,chainDmg,7); // Thunder always pierces on chain
            nearest.hitFlash=.7;
            G.particles.push({x:nearest.x,y:nearest.y-6,txt:'-'+Math.round(chainDmg),col:'#ffe57f',
              life:.8,vy:-1.2,vx:(Math.random()-.5)*.6,scale:.9,decay:1.8});
            prev=nearest;
          }
        }
      }
      // damage number
      const isCrit=Math.random()<.18;
      const dmgNum=Math.round(p.dmg);
      const numCol=isCrit?'#ffe234':'#ff5252';
      const numTxt=isCrit?'💥'+dmgNum+'!':'-'+dmgNum;
      G.particles.push({x:tx+(Math.random()-.5)*14,y:ty-8,txt:numTxt,col:numCol,
        life:1,vy:isCrit?-2.2:-1.5,vx:(Math.random()-.5)*.8,
        scale:isCrit?1.4:1,decay:isCrit?1.2:1.6});
      // hit flash on target
      const hitTarget=p.splash>0?null:p.target;
      if(hitTarget&&hitTarget.alive) hitTarget.hitFlash=1;
      // splash shockwave particles
      if(p.splash>0){
        for(let k=0;k<5;k++){
          const ang=k/5*Math.PI*2;
          G.particles.push({x:tx,y:ty,txt:'●',col:TPROJ[p.type],
            life:.6,vy:Math.sin(ang)*1.8,vx:Math.cos(ang)*1.8,decay:2.5});
        }
        G.enemies.forEach(e=>{if(e.alive&&(!e.isAir||TCANAIR[p.type])&&Math.hypot(e.x-tx,e.y-ty)<=p.splash*CS) e.hitFlash=.8;});
      }
      G.projs.splice(i,1);
    } else {
      // add trail point
      if(G.fxTrails.length<200)
        G.fxTrails.push({x:p.x,y:p.y,col:TPROJ[p.type],life:1,type:p.type});
      const s2=p.spd*dt/d; p.x+=dx*s2; p.y+=dy*s2;
    }
  }
  // hitFlash decay
  G.enemies.forEach(e=>{ if(e.hitFlash>0) e.hitFlash=Math.max(0,e.hitFlash-dt*4); });
  // tower spawn bounce anim
  G.towers.forEach(tw=>{ if(tw.spawnAnim>0) tw.spawnAnim=Math.max(0,tw.spawnAnim-dt*3); });
  // FX rings
  for(let i=G.fxRings.length-1;i>=0;i--){
    const r=G.fxRings[i];
    if(r.delay>0){r.delay-=dt;continue;}
    r.r+=r.maxR*dt*3.5; r.life-=dt*2.8;
    if(r.life<=0) G.fxRings.splice(i,1);
  }
  // FX trails
  for(let i=G.fxTrails.length-1;i>=0;i--){
    const t=G.fxTrails[i]; t.life-=dt*6;
    if(t.life<=0) G.fxTrails.splice(i,1);
  }
  // particles
  for(let i=G.particles.length-1;i>=0;i--){
    const p=G.particles[i];
    p.x+=p.vx||0; p.y+=p.vy; p.life-=dt*(p.decay||1.4);
    if(p.scale) p.scale=Math.max(.4,p.scale-dt*1.5);
    if(p.life<=0) G.particles.splice(i,1);
  }
  // combo timer decay
  if(G.comboT>0){G.comboT-=dt;if(G.comboT<=0){G.comboN=0;G.comboT=0;}}
  // muzzle flashes decay
  for(let i=G.fxFlash.length-1;i>=0;i--){
    G.fxFlash[i].life-=dt; if(G.fxFlash[i].life<=0) G.fxFlash.splice(i,1);
  }
  // floating damage numbers
  for(let i=G.dmgNums.length-1;i>=0;i--){
    const n=G.dmgNums[i];
    n.x+=n.vx||0; n.y+=n.vy; n.vy*=.92;
    n.life-=dt*(n.decay||1.0);
    if(n.life<=0) G.dmgNums.splice(i,1);
  }
  // boss warning decay
  if(G.bossWarning&&G.bossWarning.t>0) G.bossWarning.t-=dt;
  // V1: screen shake decay
  if(G.shakeT>0) G.shakeT=Math.max(0,G.shakeT-dt*3.8);
  // V5: wave banner decay
  if(G.waveBanner&&G.waveBanner.t>0) G.waveBanner.t-=dt;
  // wave clear
  if(G.waveActive&&G.queue.length===0&&G.enemies.length===0){
    // achievement: no-damage wave
    _onWaveEndForAch(G._waveHpAtStart||G.hp, G.hp);
    // 50% chance to drop rune if no damage taken this wave
    if(G.hp>=(G._waveHpAtStart||G.hp)&&Math.random()<0.5) _dropRune(COLS*CS*.5,ROWS*CS*.35);
    G.waveActive=false;
    clearWeather(); // 🌦 clear weather when wave ends
    _playSound('wave_clear');
    const bonus=25+G.wave*6; G.gold+=bonus; updateHUD();
    // firework rings
    const fwx=COLS*CS/2, fwy=ROWS*CS/2;
    const fwCols=['#ffe234','#ff5252','#40c4ff','#ea80fc','#69f0ae'];
    for(let k=0;k<5;k++){
      G.fxRings.push({x:fwx+(Math.random()-.5)*CS*3,y:fwy+(Math.random()-.5)*CS*2,
        r:4,maxR:CS*(1.5+Math.random()),life:.8,lw:2.5,col:fwCols[k],delay:k*.1});
    }
    for(let k=0;k<12;k++){
      const ang=k/12*Math.PI*2, spd=1.8+Math.random()*1.2;
      G.particles.push({x:fwx,y:fwy,txt:['★','✦','●'][k%3],col:fwCols[k%5],
        life:1.2,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:1.2,scale:1.2});
    }
    addParticle(fwx,fwy-20,'🎉 +'+bonus+' ทอง','#ffe234');
    showToast('🎉 คลื่นที่ '+G.wave+' ผ่านแล้ว! +'+bonus+' ทอง');
    if(G.wave>=currentStage.waves){endGame(true);return;}
    document.getElementById('waveBtn').disabled=false;
    if(autoWave) setTimeout(()=>{ if(G&&!G.over&&!G.win&&!G.waveActive) startWave(); },1200);
  }
}

function shadeColor(hex,amt){const n=parseInt(hex.replace('#',''),16);const r=Math.max(0,Math.min(255,((n>>16)&0xff)+amt));const g=Math.max(0,Math.min(255,((n>>8)&0xff)+amt));const b=Math.max(0,Math.min(255,(n&0xff)+amt));return`rgb(${r},${g},${b})`;}

/* ══ RENDER ══ */
function render(){
  if(!ctx||!G||!currentStage) return;
  const s=currentStage;
  ctx.clearRect(0,0,cv.width,cv.height);
  // V1: screen shake
  let _shook=false;
  if(G.shakeT>0){_shook=true;ctx.save();ctx.translate((Math.random()-.5)*G.shakeT*7,(Math.random()-.5)*G.shakeT*5);}
  // grid — 2.5D tiles (Kingdom Rush style: minimal grid, rich terrain)
  const _TH=8;
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++){
    const isPath=currentPset.has(c+','+r);
    const tx=c*CS,ty=r*CS;
    const baseCol=isPath?s.pathColor:s.grassColors[(c*3+r*7)%s.grassColors.length];
    if(isPath){
      ctx.fillStyle=baseCol; ctx.fillRect(tx,ty,CS,CS);
      // subtle stone variation patches
      const _pv=(c*7+r*13+currentStage.id*3)%5;
      if(_pv<2){ctx.fillStyle='rgba(0,0,0,.06)';ctx.fillRect(tx+CS*.2,ty+CS*.2,CS*.6,CS*.55);}
      ctx.fillStyle='rgba(0,0,0,.14)'; ctx.fillRect(tx,ty,CS,2); ctx.fillRect(tx,ty,2,CS);
    } else {
      ctx.fillStyle=baseCol; ctx.fillRect(tx,ty,CS,CS-_TH);
      ctx.fillStyle=shadeColor(baseCol,-38); ctx.fillRect(tx,ty+CS-_TH,CS,_TH);
      ctx.fillStyle='rgba(255,255,255,.11)'; ctx.fillRect(tx,ty,CS,2); ctx.fillRect(tx,ty,2,CS-_TH);
      ctx.fillStyle='rgba(0,0,0,.18)'; ctx.fillRect(tx,ty+CS-_TH-1,CS,1);
    }
    // very subtle grid (only between tiles, not on top)
    ctx.strokeStyle='rgba(0,0,0,.05)'; ctx.lineWidth=.5; ctx.strokeRect(tx,ty,CS,CS);
  }
  // ── TERRAIN DECORATIONS (Kingdom Rush style) ──
  const _sid=currentStage.id;
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++){
    if(currentPset.has(c+','+r)) continue;
    if(G.towers.find(t=>t.col===c&&t.row===r)) continue;
    const h=(c*17+r*13+_sid*31)%100;
    const tx=c*CS, ty=r*CS;
    const ox=((c*11+r*7)%24)-12, oy=((c*7+r*9)%18)-9; // offset within tile
    const cx2=tx+CS*.5+ox, cy2=ty+CS*.5+oy;
    if(h<22){// pine tree
      const ts=CS*.48+((c*5+r*3)%8)*CS*.03;
      // shadow
      ctx.globalAlpha=.18;ctx.fillStyle='#000';
      ctx.beginPath();ctx.ellipse(cx2+2,cy2+ts*.55,ts*.55,ts*.16,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
      // trunk
      ctx.fillStyle='#6d4c41';ctx.fillRect(cx2-ts*.1,cy2+ts*.15,ts*.2,ts*.35);
      ctx.strokeStyle='rgba(0,0,0,.4)';ctx.lineWidth=ts*.06;ctx.strokeRect(cx2-ts*.1,cy2+ts*.15,ts*.2,ts*.35);
      // tree layers
      const gc=s.grassColors[0];
      [[ts*.7,ts*.32],[ts*.55,ts*.16],[ts*.38,0]].forEach(([w,yo],ki)=>{
        ctx.fillStyle=ki===0?shadeColor(gc,-15):ki===1?gc:shadeColor(gc,12);
        ctx.beginPath();ctx.moveTo(cx2,cy2-ts*.5+yo);ctx.lineTo(cx2+w,cy2+yo);ctx.lineTo(cx2-w,cy2+yo);ctx.closePath();ctx.fill();
        ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=ts*.07;ctx.stroke();
      });
    } else if(h<36){// rocks
      const rs=CS*.12+((c*3+r*7)%8)*CS*.012;
      ctx.fillStyle='#757575';ctx.beginPath();ctx.ellipse(cx2,cy2,rs*1.4,rs,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#9e9e9e';ctx.beginPath();ctx.ellipse(cx2+rs*.5,cy2-rs*.3,rs*.9,rs*.65,.3,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.3)';ctx.beginPath();ctx.ellipse(cx2+rs*.2,cy2-rs*.4,rs*.4,rs*.25,-.2,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=rs*.12;
      ctx.beginPath();ctx.ellipse(cx2,cy2,rs*1.4,rs,0,0,Math.PI*2);ctx.stroke();
    } else if(h<48){// bush cluster
      const bs=CS*.13;
      [-1,0,1].forEach(k=>{
        ctx.fillStyle=k===0?shadeColor(s.grassColors[0],8):s.grassColors[0];
        ctx.beginPath();ctx.arc(cx2+k*bs*1.1,cy2+(k===0?-bs*.2:0),bs,0,Math.PI*2);ctx.fill();
        ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=bs*.12;ctx.stroke();
      });
    }
  }
  // path arrows — animated flow pulse for readability
  const _flowT=Date.now()*.0015;
  for(let i=0;i<currentPath.length-1;i++){
    const a=currentPath[i],b=currentPath[i+1];
    const pulse=.55+.35*Math.sin(_flowT-i*.6);
    ctx.save();
    ctx.translate((a[0]+b[0])/2*CS+CS/2,(a[1]+b[1])/2*CS+CS/2);
    ctx.rotate(Math.atan2(b[1]-a[1],b[0]-a[0]));
    ctx.font='bold 13px Arial';ctx.fillStyle='rgba(255,255,255,'+pulse+')';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('▶',0,0);ctx.restore();
  }
  // base castle — glowing platform
  const L=currentPath[currentPath.length-1];
  const lx=L[0]*CS+CS/2,ly=L[1]*CS+CS/2;
  const cpulse=.55+.45*Math.sin(Date.now()*.002);
  ctx.globalAlpha=cpulse*.5;ctx.fillStyle='#4caf50';
  ctx.beginPath();ctx.arc(lx,ly,CS*.44,0,Math.PI*2);ctx.fill();
  ctx.globalAlpha=cpulse*.8;ctx.strokeStyle='#ffe082';ctx.lineWidth=2.5;
  ctx.beginPath();ctx.arc(lx,ly,CS*.44,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=1;
  ctx.font='28px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.shadowColor='rgba(255,224,130,.9)';ctx.shadowBlur=12;
  ctx.fillText('🏰',lx,ly);ctx.shadowBlur=0;
  // spawn portal — pulsing rings
  const F=currentPath[0];
  const fx=F[0]*CS+CS/2,fy=F[1]*CS+CS/2;
  const ppulse=.4+.5*Math.sin(Date.now()*.003);
  ctx.globalAlpha=ppulse*.5;ctx.fillStyle='#7c4dff';
  ctx.beginPath();ctx.arc(fx,fy,CS*.38,0,Math.PI*2);ctx.fill();
  ctx.globalAlpha=ppulse*.8;ctx.strokeStyle='#b388ff';ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(fx,fy,CS*.38,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=ppulse*.35;ctx.strokeStyle='#e040fb';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.arc(fx,fy,CS*.52+Math.sin(Date.now()*.004)*3,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=1;
  ctx.font='20px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.shadowColor='rgba(179,136,255,.9)';ctx.shadowBlur=10;
  ctx.fillText('🌀',fx,fy);ctx.shadowBlur=0;
  // selected tower range ring
  if(G.selTowerInfo){
    const st=G.selTowerInfo;
    const sx=st.col*CS+CS/2, sy=st.row*CS+CS/2;
    const rang=getTowerRange(st.type,st.rngLv||st.lv)*CS;
    ctx.globalAlpha=.12;ctx.fillStyle=TACCENT[st.type];
    ctx.beginPath();ctx.arc(sx,sy,rang,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.6;ctx.strokeStyle=TACCENT[st.type];ctx.lineWidth=1.5;
    ctx.setLineDash([4,3]);
    ctx.beginPath();ctx.arc(sx,sy,rang,0,Math.PI*2);ctx.stroke();
    ctx.setLineDash([]);ctx.globalAlpha=1;
  }
  // tower ghost
  if(G.selTwr>=0&&G.mx>=0&&G.my>=0&&G.mx<COLS&&G.my<ROWS){
    const mc=G.mx,mr=G.my;
    const ok=!currentPset.has(mc+','+mr)&&!G.towers.find(t=>t.col===mc&&t.row===mr);
    ctx.globalAlpha=.35;ctx.fillStyle=ok?TCOLORS[G.selTwr]:'#f44336';
    ctx.fillRect(mc*CS,mr*CS,CS,CS);
    const gx=mc*CS+CS/2, gy=mr*CS+CS/2, grang=getTowerRange(G.selTwr,1)*CS;
    ctx.globalAlpha=.12;ctx.fillStyle=TACCENT[G.selTwr];
    ctx.beginPath();ctx.arc(gx,gy,grang,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=.6;ctx.strokeStyle=TACCENT[G.selTwr];ctx.lineWidth=1.5;
    ctx.setLineDash([4,3]);
    ctx.beginPath();ctx.arc(gx,gy,grang,0,Math.PI*2);ctx.stroke();
    ctx.setLineDash([]);ctx.globalAlpha=1;
  }
  // muzzle flashes
  G.fxFlash.forEach(f=>{
    const fa=Math.max(0,f.life/.18);
    ctx.globalAlpha=fa*.7;
    const fg=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.r);
    fg.addColorStop(0,'rgba(255,255,255,.95)');fg.addColorStop(.4,f.col);fg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=fg; ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1;
  });
  // FX rings
  G.fxRings.forEach(r=>{
    if(r.delay>0) return;
    ctx.globalAlpha=Math.max(0,r.life)*.7;
    ctx.strokeStyle=r.col; ctx.lineWidth=r.lw;
    ctx.beginPath(); ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke();
    ctx.globalAlpha=1;
  });

  // FX trails — V3: styled per projectile type
  G.fxTrails.forEach(t=>{
    if(t.type===99){// chain lightning bolt — draw jagged line
      ctx.save();
      ctx.globalAlpha=t.life*0.85;
      ctx.strokeStyle=t.col;ctx.lineWidth=t.lw||2;ctx.lineCap='round';
      ctx.shadowColor='#ffe57f';ctx.shadowBlur=6;
      ctx.beginPath();
      const _sx=t.x,_sy=t.y,_ex=t.tx,_ey=t.ty;
      ctx.moveTo(_sx,_sy);
      // jagged lightning segments
      const _segs=4;
      for(let _k=1;_k<_segs;_k++){
        const _f=_k/_segs;
        const _jx=_sx+(_ex-_sx)*_f+(Math.random()-.5)*14;
        const _jy=_sy+(_ey-_sy)*_f+(Math.random()-.5)*14;
        ctx.lineTo(_jx,_jy);
      }
      ctx.lineTo(_ex,_ey);ctx.stroke();
      ctx.shadowBlur=0;
      ctx.restore();
      return;
    }
    const tsz=t.type===3?t.life*5:t.type===2?t.life*4.5:t.type===1?t.life*4:t.life*3.5;
    ctx.globalAlpha=t.life*(t.type===3?.65:t.type===2?.55:.42);
    ctx.fillStyle=t.col;
    ctx.beginPath();ctx.arc(t.x,t.y,Math.max(.5,tsz),0,Math.PI*2);ctx.fill();
    if(t.type===1&&t.life>.5){// ice: tiny cross sparkle
      ctx.strokeStyle='#e0f7fa';ctx.lineWidth=.9;
      ctx.beginPath();ctx.moveTo(t.x-2.5,t.y);ctx.lineTo(t.x+2.5,t.y);ctx.stroke();
      ctx.beginPath();ctx.moveTo(t.x,t.y-2.5);ctx.lineTo(t.x,t.y+2.5);ctx.stroke();
    }
    ctx.globalAlpha=1;
  });
  // Sniper laser trail — bright line from tower to last hit
  G.projs.forEach(p=>{
    if(p.type!==3||!p.alive) return;
    ctx.save();
    const grad=ctx.createLinearGradient(p.x,p.y,p.tx,p.ty);
    grad.addColorStop(0,'rgba(255,253,220,.7)');
    grad.addColorStop(1,'rgba(255,253,220,0)');
    ctx.strokeStyle=grad; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p.tx,p.ty); ctx.stroke();
    ctx.restore();
  });

  // towers — sprite style (stone base + body)
  G.towers.forEach(tw=>{
    const bounce=tw.spawnAnim>0?1+Math.sin(tw.spawnAnim*Math.PI)*.25:1;
    const x=tw.col*CS,y=tw.row*CS,cx2=x+CS/2,cy2=y+CS/2;
    if(bounce!==1){ctx.save();ctx.translate(cx2,cy2);ctx.scale(bounce,bounce);ctx.translate(-cx2,-cy2);}
    // ⚡ Awaken glow — radiant pulsing rings + rising sparkles (more dramatic than non-awakened)
    if(tw.awakened){
      const _t=Date.now()*.002;
      const _ga=.28+.18*Math.sin(_t);
      ctx.save();
      // outer pulsing halo rings (radiate outward)
      for(let ri=0;ri<2;ri++){
        const _rp=((_t*.6+ri*.5)%1);
        ctx.globalAlpha=(1-_rp)*.35;
        ctx.strokeStyle='#ffe082'; ctx.lineWidth=2;
        ctx.beginPath(); ctx.ellipse(cx2,cy2+CS*.12,CS*(.34+_rp*.30),CS*(.16+_rp*.14),0,0,Math.PI*2);
        ctx.stroke();
      }
      ctx.globalAlpha=1;
      // glowing rounded frame
      ctx.shadowBlur=22; ctx.shadowColor='#ffe082';
      ctx.strokeStyle=`rgba(255,224,130,${_ga})`;
      ctx.lineWidth=2.5;
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.stroke();
      ctx.shadowBlur=0;
      ctx.restore();
      // rising golden sparkle particles (spawned periodically per-tower)
      tw._awakenFxT=(tw._awakenFxT||0)-0.016;
      if(tw._awakenFxT<=0){
        tw._awakenFxT=0.22;
        const sang=Math.random()*Math.PI*2, srad=CS*(.18+Math.random()*.22);
        G.particles.push({x:cx2+Math.cos(sang)*srad,y:cy2+CS*.18+Math.sin(sang)*srad*.5,
          txt:'✦',col:'#ffe082',life:.9,vy:-1.3,vx:(Math.random()-.5)*.4,decay:1.4,scale:.55+Math.random()*.3});
      }
    }
    // 🌑 ถูกเงามืดดูดพลัง — overlay มืดสั่นไหวแสดงว่าบัฟ/synergy/awaken ใช้งานไม่ได้ชั่วคราว
    if(tw._drainT>0){
      const _dt2=Date.now()*.0035;
      ctx.save();
      ctx.globalAlpha=.30+.12*Math.sin(_dt2*2);
      ctx.fillStyle='#4a148c';
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.fill();
      ctx.globalAlpha=.6;
      ctx.strokeStyle='#7e57c2'; ctx.lineWidth=2; ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      ctx.save();
      ctx.font=(CS*.34)+'px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.globalAlpha=.85;
      ctx.fillText('🌑',cx2,y+CS*.16);
      ctx.restore();
    }
    // 🐉 ถูกวิเวิร์นโฉบหยุดทำงาน — overlay สีส้มกะพริบ + ไอคอนหยุด
    if(tw._stunT>0){
      const _st2=Date.now()*.006;
      ctx.save();
      ctx.globalAlpha=.25+.15*Math.sin(_st2*2);
      ctx.fillStyle='#bf360c';
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.fill();
      ctx.globalAlpha=.7;
      ctx.strokeStyle='#ff8a65'; ctx.lineWidth=2; ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      ctx.save();
      ctx.font=(CS*.34)+'px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.globalAlpha=.9;
      ctx.fillText('💫',cx2,y+CS*.16);
      ctx.restore();
    }
    // ground shadow (ellipse, not scaled)
    ctx.globalAlpha=.32; ctx.fillStyle='#000';
    ctx.beginPath(); ctx.ellipse(cx2,cy2+CS*.35,CS*.46,CS*.13,0,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1;
    // 3D tower mesh (replaces 2D sprite icon — Three.js overlay draws the tower body+turret)
    if(_gl3D){
      _sync3DTowerMesh(tw,cx2,cy2,bounce);
    }else{
      // fallback: 2D sprite if WebGL unavailable
      const _tws=1.4;
      ctx.save();
      ctx.translate(cx2, cy2-CS*.18);
      ctx.scale(_tws,_tws);
      ctx.shadowColor='rgba(0,0,0,.95)';ctx.shadowBlur=7;ctx.shadowOffsetX=0;ctx.shadowOffsetY=3;
      drawTowerIcon(ctx,tw.type,CS-2,tw.angle);
      ctx.shadowBlur=0;ctx.shadowOffsetY=0;
      drawTowerIcon(ctx,tw.type,CS-2,tw.angle);
      ctx.restore();
    }
    // rune icon floating above awakened tower
    if(tw.awakened&&tw.rune>=0){
      const _ri=RUNES[tw.rune];
      const _ry=y+4+Math.sin(Date.now()*.003)*3;
      ctx.font='13px serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(_ri.icon,cx2,_ry);
    }
    // level badge
    if(tw.lv>1){
      ctx.fillStyle='rgba(0,0,0,.75)';
      ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x+CS-24,y+2,22,13,3);else ctx.rect(x+CS-24,y+2,22,13);
      ctx.fill();
      ctx.fillStyle='#ffe234';ctx.font='bold 9px Arial';
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('Lv'+tw.lv,x+CS-13,y+9);
    }
    // gold mine timer bar
    if(TGOLDMINE[tw.type]&&G.gmTimers){
      const key=tw.col+'_'+tw.row;const t2=G.gmTimers[key]||0;const pct=t2/CFG.t_goldrate;
      ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(x+4,y+CS-7,CS-8,4);
      ctx.fillStyle='#ffd54f';ctx.fillRect(x+4,y+CS-7,(CS-8)*pct,4);
    }
    // rune icon on tower corner
    if(tw.rune>=0){
      ctx.font='11px Arial';ctx.textAlign='right';ctx.textBaseline='top';
      ctx.fillText(RUNES[tw.rune].icon,tw.col*CS+CS-2,tw.row*CS+2);
    }
    // support aura ring
    if(TBUFF[tw.type]){
      ctx.globalAlpha=.08;ctx.strokeStyle='#64ffda';ctx.lineWidth=1;
      ctx.beginPath();ctx.arc(cx2,cy2,getTowerRange(tw.type,tw.rngLv||tw.lv)*CS,0,Math.PI*2);
      ctx.stroke();ctx.globalAlpha=1;
    }
    if(bounce!==1) ctx.restore();
  });
  // enemies
  const now=Date.now();
  G.enemies.forEach(e=>{
    if(!e.alive) return;
    const sz=ESIZES[e.ti]*(e._sizeMult||1);
    // ice slow aura
    if(e.slow<1){
      ctx.globalAlpha=.28;ctx.fillStyle='#80d8ff';
      ctx.beginPath();ctx.arc(e.x,e.y,sz+6,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
    }
    // hit flash: white ring when recently damaged
    if(e.hitFlash>0){
      ctx.globalAlpha=e.hitFlash*.7;ctx.strokeStyle='#fff';ctx.lineWidth=3;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+3,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    }
    // shadow — deeper offset, softer spread
    ctx.globalAlpha=.38;ctx.fillStyle='#000';
    ctx.beginPath();ctx.ellipse(e.x+2,e.y+sz*.68,sz*.8,sz*.27,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
    ctx.globalAlpha=.10;ctx.strokeStyle='#000';ctx.lineWidth=sz*.4;
    ctx.beginPath();ctx.ellipse(e.x,e.y+sz*.58,sz*.62,sz*.18,0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    // 🐉 วิเวิร์นโฉบ — เงาขยายใหญ่ + เส้นแสงโฉบด้านหลัง
    if(e._diveT>0){
      ctx.globalAlpha=.30;ctx.fillStyle='#000';
      ctx.beginPath();ctx.ellipse(e.x+2,e.y+sz*.68,sz*1.3,sz*.4,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
      ctx.globalAlpha=.5*e._diveT;ctx.strokeStyle='#ff8a65';ctx.lineWidth=3;
      ctx.beginPath();ctx.moveTo(e.x-sz*1.4,e.y);ctx.lineTo(e.x-sz*.6,e.y);ctx.stroke();
      ctx.globalAlpha=1;
    }
    // 👺 โกบลิน Pack Rush — เส้นฝุ่นเร่งความเร็วด้านหลังเมื่อรวมฝูง
    if(e._packBoost){
      ctx.globalAlpha=.45;ctx.strokeStyle='#aed581';ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(e.x-sz*1.1,e.y+sz*.3);ctx.lineTo(e.x-sz*.5,e.y+sz*.3);ctx.stroke();
      ctx.beginPath();ctx.moveTo(e.x-sz*1.0,e.y+sz*.55);ctx.lineTo(e.x-sz*.5,e.y+sz*.55);ctx.stroke();
      ctx.globalAlpha=1;
    }
    // 🔥 วิญญาณไฟ Scorch Flare — วงแหวนป้องกันลุกโชนเมื่อกำลังลดดาเมจ
    if(e._flareT>0){
      ctx.globalAlpha=.4+.3*Math.sin(Date.now()*.02);
      ctx.strokeStyle='#ffab40';ctx.lineWidth=3;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+5,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
    }
    // 🪨 โกเลม Armor Crack — รอยร้าวเพิ่มตามเกราะที่เสียไป
    if(e.ti===5&&e._armorPct<.24){
      ctx.save();ctx.strokeStyle='#212121';ctx.lineWidth=sz*.06;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(e.x-sz*.3,e.y-sz*.5);ctx.lineTo(e.x-sz*.05,e.y+sz*.1);ctx.stroke();
      if(e._armorPct<=.08){
        ctx.beginPath();ctx.moveTo(e.x+sz*.15,e.y-sz*.55);ctx.lineTo(e.x+sz*.35,e.y-sz*.05);ctx.stroke();
      }
      if(e._armorPct<=0){
        ctx.beginPath();ctx.moveTo(e.x-sz*.4,e.y+sz*.15);ctx.lineTo(e.x-sz*.1,e.y+sz*.5);ctx.stroke();
      }
      ctx.restore();
    }
    // 🦇 ค้างคาว Erratic Dodge — กระพริบขาวตอนหลบ
    if(e._dodgeFlash>0){
      ctx.globalAlpha=e._dodgeFlash*2;ctx.strokeStyle='#fff';ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+8,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
    }
    // 🛡️ ชิลด์ไนท์ Shield Regen — วงแหวนฟ้าเมื่อกำลังฟื้นโล่
    if(e.ti===8&&e._noDmgT>=4&&e.shieldHp<e.maxShieldHp){
      ctx.globalAlpha=.35+.25*Math.sin(Date.now()*.01);
      ctx.strokeStyle='#64b5f6';ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+6,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
    }
    // emoji
    // heal glow indicator
    if(currentStage&&currentStage.healTypes&&currentStage.healTypes.includes(e.ti)&&e.hp<e.mhp){
      ctx.globalAlpha=.4+.3*Math.sin(Date.now()*.008);
      ctx.fillStyle='#69f0ae';
      ctx.beginPath();ctx.arc(e.x,e.y,sz+7,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;
      ctx.font='10px Arial';ctx.fillStyle='#69f0ae';
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('♥',e.x,e.y-sz-18);
    }
    // air indicator
    if(e.isAir){
      ctx.globalAlpha=.5+.3*Math.sin(Date.now()*.005);
      ctx.font='8px Arial';ctx.fillStyle='#90caf9';
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('✈',e.x,e.y-ESIZES[e.ti]-6);
      ctx.globalAlpha=1;
    }
    // shield glow
    if(e.shieldHp>0){
      const _sp=e.shieldHp/e.maxShieldHp;
      ctx.globalAlpha=.18+.22*_sp+.15*Math.sin(Date.now()*.006);
      ctx.strokeStyle='#90caf9';ctx.lineWidth=sz*.55;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+5,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
    }
    {
      const _p0=currentPath[Math.min(e.pi,currentPath.length-1)],_p1=currentPath[Math.min(e.pi+1,currentPath.length-1)];
      const _dir=Math.atan2(_p1[1]-_p0[1],_p1[0]-_p0[0]);
      const _moveSpd=e.spd*e.slow*((e._enrageT>0)?(e._enrageMult||1):1)*((e._diveT>0)?1.5:1);
      drawEnemySprite(ctx,e.ti,e.x,e.y,sz,{dir:_dir,spd:_moveSpd});
    }
    // HP bar (taller, more visible)
    const bw=sz*2+4, bh=6, bx=e.x-sz-2, by=e.y-sz-13;
    ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(bx,by,bw,bh);
    const hpPct=Math.max(0,e.hp/e.mhp);
    ctx.fillStyle=hpPct>.6?'#4caf50':hpPct>.3?'#ff9800':'#f44336';
    ctx.fillRect(bx,by,bw*hpPct,bh);
    ctx.strokeStyle='rgba(0,0,0,.4)';ctx.lineWidth=.5;ctx.strokeRect(bx,by,bw,bh);
    // shield bar (above HP bar)
    if(e.maxShieldHp>0){
      const sbw=bw, sbh=4, sbx=bx, sby=by-6;
      ctx.fillStyle='rgba(0,0,0,.5)';ctx.fillRect(sbx,sby,sbw,sbh);
      const shPct=Math.max(0,e.shieldHp/e.maxShieldHp);
      ctx.fillStyle=shPct>.5?'#90caf9':'#42a5f5';
      ctx.fillRect(sbx,sby,sbw*shPct,sbh);
      ctx.strokeStyle='rgba(100,180,255,.3)';ctx.lineWidth=.5;ctx.strokeRect(sbx,sby,sbw,sbh);
      if(e.shieldHp<=0){
        ctx.fillStyle='rgba(255,255,255,.15)';
        ctx.font='7px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.fillText('SHIELD BROKEN',e.x,sby+sbh/2);
      }
    }
    // boss crown
    if(e.ti===4){
      ctx.font='10px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('👑',e.x,e.y-sz-18);
    }
    // boss skill telegraph aura (เตือนล่วงหน้าก่อนปล่อยสกิล)
    if(MTYPE[e.ti]===1&&e._telegraph!=null){
      const tcol=e._telegraph===0?'#ff5252':e._telegraph===1?'#ab47bc':'#69f0ae';
      ctx.globalAlpha=.3+.25*Math.sin(Date.now()*.02);
      ctx.strokeStyle=tcol;ctx.lineWidth=3;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+10,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
      ctx.font='12px Arial';ctx.fillStyle=tcol;ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(e._telegraph===0?'💢':e._telegraph===1?'🌀':'💚',e.x,e.y-sz-28);
    }
  });
  // projectiles (styled per tower type)
  G.projs.forEach(p=>{
    const pc=TPROJ[p.type];
    // outer glow
    ctx.globalAlpha=.3;
    ctx.fillStyle=pc;
    ctx.beginPath();ctx.arc(p.x,p.y,8,0,Math.PI*2);ctx.fill();
    ctx.globalAlpha=1;
    const _pang=Math.atan2(p.ty-p.y,p.tx-p.x)||0;
    if(p.type===3){
      // Sniper: elongated laser dot with bright tracer line
      ctx.save();
      ctx.strokeStyle=pc; ctx.globalAlpha=.35; ctx.lineWidth=1.5;
      ctx.beginPath();ctx.moveTo(p.x-Math.cos(_pang)*22,p.y-Math.sin(_pang)*22);ctx.lineTo(p.x,p.y);ctx.stroke();
      ctx.globalAlpha=1;
      ctx.translate(p.x,p.y);ctx.rotate(_pang);
      ctx.fillStyle=pc;
      ctx.beginPath();ctx.ellipse(0,0,8,3,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fff'; ctx.beginPath();ctx.ellipse(2,0,2.4,1.2,0,0,Math.PI*2);ctx.fill();
      ctx.restore();
    } else if(p.type===1){
      // Ice: spinning snowflake shard
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(Date.now()*.006);
      ctx.strokeStyle=pc;ctx.lineWidth=2;
      for(let k=0;k<3;k++){
        ctx.save();ctx.rotate(k*Math.PI/3);
        ctx.beginPath();ctx.moveTo(-5,0);ctx.lineTo(5,0);
        ctx.moveTo(3,-2);ctx.lineTo(5,0);ctx.lineTo(3,2);
        ctx.moveTo(-3,-2);ctx.lineTo(-5,0);ctx.lineTo(-3,2);
        ctx.stroke();ctx.restore();
      }
      ctx.fillStyle='#e3f7ff';ctx.beginPath();ctx.arc(0,0,2,0,Math.PI*2);ctx.fill();
      ctx.restore();
    } else if(p.type===0){
      // Cannon: spinning cannonball with smoke trail puffs
      ctx.save();
      ctx.globalAlpha=.22;ctx.fillStyle='#5d4037';
      for(let k=1;k<=3;k++){
        ctx.beginPath();ctx.arc(p.x-Math.cos(_pang)*k*7,p.y-Math.sin(_pang)*k*7,4-k*0.7,0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1;
      const _spin=Date.now()*.012;
      ctx.translate(p.x,p.y);ctx.rotate(_spin);
      const _grad=ctx.createRadialGradient(-1.5,-1.5,0,0,0,5);
      _grad.addColorStop(0,'#9e9e9e');_grad.addColorStop(1,'#37474f');
      ctx.fillStyle=_grad;
      ctx.beginPath();ctx.arc(0,0,4.5,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='rgba(255,112,67,.7)';ctx.lineWidth=1;
      ctx.beginPath();ctx.arc(0,0,4.5,0,Math.PI*1.1);ctx.stroke();
      ctx.restore();
    } else if(p.type===2){
      // Magic: arcane orb with rotating rings
      ctx.save();ctx.translate(p.x,p.y);
      const _mt=Date.now()*.008;
      ctx.strokeStyle=pc;ctx.lineWidth=1.4;ctx.globalAlpha=.75;
      ctx.beginPath();ctx.ellipse(0,0,7,3,_mt,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.ellipse(0,0,7,3,-_mt+Math.PI/2,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
      const _og=ctx.createRadialGradient(0,0,0,0,0,5);
      _og.addColorStop(0,'#fff');_og.addColorStop(.5,pc);_og.addColorStop(1,'rgba(224,77,251,0)');
      ctx.fillStyle=_og;
      ctx.beginPath();ctx.arc(0,0,5,0,Math.PI*2);ctx.fill();
      ctx.restore();
    } else if(p.type===5){
      // Archer: feathered arrow
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(_pang);
      ctx.strokeStyle='#8d6e63';ctx.lineWidth=1.6;
      ctx.beginPath();ctx.moveTo(-9,0);ctx.lineTo(4,0);ctx.stroke();
      ctx.fillStyle=pc;
      ctx.beginPath();ctx.moveTo(8,0);ctx.lineTo(2,-2.6);ctx.lineTo(2,2.6);ctx.closePath();ctx.fill();
      ctx.fillStyle='#bdbdbd';
      ctx.beginPath();ctx.moveTo(-9,0);ctx.lineTo(-5,-2.4);ctx.lineTo(-5,2.4);ctx.closePath();ctx.fill();
      ctx.restore();
    } else if(p.type===7){
      // Lightning: jagged crackling bolt
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(_pang);
      ctx.strokeStyle=pc;ctx.lineWidth=2;ctx.globalAlpha=.9;
      ctx.beginPath();ctx.moveTo(-9,0);
      const _seg=4;
      for(let k=1;k<=_seg;k++){
        const xx=-9+ (18*k/_seg);
        const yy=(k%2===0?1:-1)*2.4*Math.sin(Date.now()*.02+k);
        ctx.lineTo(xx,yy);
      }
      ctx.stroke();
      ctx.globalAlpha=1;
      ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(8,0,2,0,Math.PI*2);ctx.fill();
      ctx.restore();
    } else {
      // Default: glowing orb
      const _dg=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,5);
      _dg.addColorStop(0,'#fff');_dg.addColorStop(.6,pc);_dg.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle=_dg;
      ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.fill();
    }
  });
  // particles
  ctx.textAlign='center';ctx.textBaseline='middle';
  G.particles.forEach(p=>{
    ctx.globalAlpha=Math.max(0,p.life);
    const fs=p.scale?Math.round(12*p.scale):12;
    ctx.font='bold '+fs+'px Arial';
    ctx.fillStyle=p.col;
    // shadow for readability
    ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=3;
    ctx.fillText(p.txt,p.x,p.y);
    ctx.shadowBlur=0;
  });
  ctx.globalAlpha=1;
  // floating damage numbers
  ctx.textAlign='center';ctx.textBaseline='middle';
  G.dmgNums.forEach(n=>{
    const a=Math.max(0,n.life); const fs=Math.round((n.scale||1)*13);
    ctx.globalAlpha=a;
    ctx.font=`bold ${fs}px Arial`;
    ctx.strokeStyle='rgba(0,0,0,.75)'; ctx.lineWidth=2.5;
    ctx.strokeText(n.txt,n.x,n.y);
    ctx.fillStyle=n.col; ctx.fillText(n.txt,n.x,n.y);
  });
  ctx.globalAlpha=1;
  // boss warning banner
  if(G.bossWarning&&G.bossWarning.t>0){
    const bwt=G.bossWarning.t, bwMax=2.2;
    const bwa=bwt>1.8?1:(bwt<.4?bwt/.4:1);
    ctx.globalAlpha=bwa;
    const bwW=cv.width*.72, bwH=36, bwX=cv.width/2-bwW/2, bwY=cv.height*.38;
    ctx.fillStyle='rgba(0,0,0,.78)';
    if(ctx.roundRect)ctx.roundRect(bwX,bwY,bwW,bwH,10);else ctx.rect(bwX,bwY,bwW,bwH);ctx.fill();
    ctx.strokeStyle=G.bossWarning.col; ctx.lineWidth=2;
    if(ctx.roundRect)ctx.roundRect(bwX,bwY,bwW,bwH,10);else ctx.rect(bwX,bwY,bwW,bwH);ctx.stroke();
    ctx.fillStyle=G.bossWarning.col; ctx.font='bold 15px Arial';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.shadowColor='rgba(0,0,0,.9)';ctx.shadowBlur=6;
    ctx.fillText(G.bossWarning.text,cv.width/2,bwY+bwH/2);
    ctx.shadowBlur=0; ctx.globalAlpha=1;
  }
  // V1: end screen shake
  if(_shook) ctx.restore();
  /* ══ weather canvas overlay effects ══ */
  if(G&&G.weather&&G.weather.active){
    const wid=G.weather.active;
    const W=cv.width,H=cv.height;
    const _wNow=performance.now()/1000;
    if(wid==='fog'){
      ctx.save();ctx.globalAlpha=.18;ctx.fillStyle='#c8d8e8';
      for(let i=0;i<6;i++){
        const fx=((_wNow*14+i*140)%(W+200))-100, fy=H*0.15+i*H*0.13;
        ctx.beginPath();ctx.ellipse(fx,fy,140,38,0,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    } else if(wid==='rain'){
      ctx.save();ctx.strokeStyle='rgba(100,150,255,.3)';ctx.lineWidth=1.5;
      for(let i=0;i<40;i++){
        const rx=(i*53+_wNow*420)%(W+60)-30, ry=(i*97+_wNow*620)%(H+60)-30;
        ctx.beginPath();ctx.moveTo(rx,ry);ctx.lineTo(rx-8,ry+22);ctx.stroke();
      }
      ctx.restore();
    } else if(wid==='darknight'){
      ctx.save();ctx.fillStyle='rgba(10,0,32,.45)';ctx.fillRect(0,0,W,H);ctx.restore();
    } else if(wid==='lightning'){
      if(Math.random()<0.025){ctx.save();ctx.fillStyle='rgba(255,255,255,.35)';ctx.fillRect(0,0,W,H);ctx.restore();}
      if(G.weather.struckTowers&&G.weather.struckTowers.length){
        ctx.save();ctx.font='18px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
        G.weather.struckTowers.forEach(tw=>{
          if(!tw||!G.towers.includes(tw)) return; // tower may have been sold mid-storm
          const tx=tw.col*CS+CS/2,ty=tw.row*CS+CS*.25;
          ctx.fillStyle='#ffe082';ctx.shadowColor='#ffe082';ctx.shadowBlur=8;
          ctx.fillText('⚡',tx,ty);
        });
        ctx.restore();
      }
    } else if(wid==='heatwave'){
      ctx.save();ctx.fillStyle='rgba(255,109,0,.1)';ctx.fillRect(0,0,W,H);ctx.restore();
    } else if(wid==='blizzard'){
      ctx.save();ctx.fillStyle='rgba(200,240,255,.5)';
      for(let i=0;i<35;i++){
        const sx=(i*61+_wNow*60)%(W+20)-10, sy=(i*83+_wNow*180)%(H+20)-10;
        ctx.beginPath();ctx.arc(sx,sy,2+((i*7)%3),0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    } else if(wid==='tornado'){
      ctx.save();ctx.fillStyle='rgba(136,136,136,.08)';ctx.fillRect(0,0,W,H);ctx.restore();
    } else if(wid==='sun'){
      ctx.save();ctx.fillStyle='rgba(255,238,88,.08)';ctx.fillRect(0,0,W,H);ctx.restore();
    }
  }
  // vignette overlay
  const vg=ctx.createRadialGradient(cv.width/2,cv.height/2,cv.height*.25,cv.width/2,cv.height/2,cv.height*.75);
  vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,0.30)');
  ctx.fillStyle=vg;ctx.fillRect(0,0,cv.width,cv.height);
  // G4: boss health bar (type 4 and type 9 Final Boss)
  const _boss=G.enemies.find(e=>e.alive&&(e.ti===4||e.ti===9));
  if(_boss){
    const isFinalBoss=_boss.ti===9;
    const bw=Math.min(cv.width*.68,400),bh=isFinalBoss?16:13,bx=cv.width/2-bw/2,by=cv.height-26;
    ctx.save();
    ctx.fillStyle=isFinalBoss?'rgba(20,0,40,.92)':'rgba(0,0,0,.82)';
    if(ctx.roundRect)ctx.roundRect(bx-6,by-22,bw+12,bh+32,8);else ctx.rect(bx-6,by-22,bw+12,bh+32);ctx.fill();
    if(isFinalBoss){
      ctx.strokeStyle='rgba(150,0,200,.6)';ctx.lineWidth=1.5;
      if(ctx.roundRect)ctx.roundRect(bx-6,by-22,bw+12,bh+32,8);else ctx.rect(bx-6,by-22,bw+12,bh+32);ctx.stroke();
    }
    ctx.fillStyle=isFinalBoss?'#0d0020':'#1a0000';
    if(ctx.roundRect)ctx.roundRect(bx,by,bw,bh,5);else ctx.rect(bx,by,bw,bh);ctx.fill();
    const _bpct=Math.max(0,_boss.hp/_boss.mhp);
    ctx.fillStyle=isFinalBoss?(_bpct>.5?'#9c27b0':_bpct>.25?'#e040fb':'#ff1744'):(_bpct>.5?'#f44336':_bpct>.25?'#ff9800':'#ff1744');
    if(ctx.roundRect)ctx.roundRect(bx,by,bw*_bpct,bh,5);else ctx.rect(bx,by,bw*_bpct,bh);ctx.fill();
    /* shield bar overlay for Final Boss */
    if(isFinalBoss&&_boss.maxShieldHp>0&&_boss.shieldHp>0){
      const _sp=_boss.shieldHp/_boss.maxShieldHp;
      ctx.fillStyle=`rgba(144,202,249,${.3+.2*Math.sin(Date.now()*.004)})`;
      if(ctx.roundRect)ctx.roundRect(bx,by,bw*_sp,bh,5);else ctx.rect(bx,by,bw*_sp,bh);ctx.fill();
    }
    ctx.strokeStyle=isFinalBoss?'rgba(150,0,200,.7)':'rgba(183,28,28,.7)';ctx.lineWidth=1.5;
    if(ctx.roundRect)ctx.roundRect(bx,by,bw,bh,5);else ctx.rect(bx,by,bw,bh);ctx.stroke();
    ctx.fillStyle=isFinalBoss?'#e040fb':'#ff8a80';ctx.font=`bold ${isFinalBoss?11:10}px Arial`;
    ctx.textAlign='center';ctx.textBaseline='bottom';
    const _bShieldTxt=isFinalBoss&&_boss.shieldHp>0?`  🛡️ ${Math.ceil(_boss.shieldHp)}`:'';
    ctx.fillText((isFinalBoss?'👁️ ':' 👹 ')+ENAMES[_boss.ti]+'  ❤️ '+Math.ceil(_boss.hp)+' / '+Math.ceil(_boss.mhp)+_bShieldTxt,cv.width/2,by-3);
    ctx.restore();
  }
  // Rune inventory overlay
  if(G.runeInv&&G.runeInv.length>0){
    const rcounts={};
    G.runeInv.forEach(r=>rcounts[r]=(rcounts[r]||0)+1);
    ctx.textAlign='center';ctx.textBaseline='middle';
    let rx=COLS*CS-8;
    Object.entries(rcounts).reverse().forEach(([rid,cnt])=>{
      const r=RUNES[+rid];
      ctx.fillStyle='rgba(0,0,0,.6)';
      ctx.fillRect(rx-22,3,24,17);
      ctx.font='12px Arial';ctx.fillStyle='#fff';ctx.fillText(r.icon,rx-14,12);
      ctx.font='bold 9px Arial';ctx.fillStyle='#ffe082';ctx.fillText('\xd7'+cnt,rx-3,13);
      rx-=28;
    });
    ctx.globalAlpha=1;
  }
  // V5: wave incoming banner
  if(G.waveBanner&&G.waveBanner.t>0){
    const bmax=1.5,bt=G.waveBanner.t,prog=1-bt/bmax;
    const alpha=prog<.1?prog/.1:prog>.8?(1-prog)/.2:1;
    const slideX=prog<.1?(prog/.1-1)*cv.width*.28:prog>.8?((prog-.8)/.2)*cv.width*.22:0;
    ctx.save();ctx.globalAlpha=Math.max(0,Math.min(.94,alpha));
    const bw2=Math.min(310,cv.width*.75),bh2=50,bx2=cv.width/2-bw2/2+slideX,by2=cv.height*.34;
    ctx.fillStyle='rgba(0,0,0,.8)';
    if(ctx.roundRect)ctx.roundRect(bx2,by2,bw2,bh2,13);else ctx.rect(bx2,by2,bw2,bh2);ctx.fill();
    ctx.strokeStyle='#ffe082';ctx.lineWidth=2;
    if(ctx.roundRect)ctx.roundRect(bx2,by2,bw2,bh2,13);else ctx.rect(bx2,by2,bw2,bh2);ctx.stroke();
    ctx.fillStyle='#fff';ctx.font='bold 21px Arial';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.shadowColor='rgba(255,224,130,.85)';ctx.shadowBlur=10;
    ctx.fillText(G.waveBanner.text,cv.width/2+slideX,by2+bh2/2);
    ctx.shadowBlur=0;ctx.restore();
  }
  _render3D();
}

/* ══ CANVAS EVENTS ══ */
/* ══ WAVE PREVIEW ══ */
function showWavePreview(){
  if(!G||G.waveActive||G.over||G.win) return;
  const nextWave=G.wave+1;
  const avail=currentStage.enemyTypes;
  // simulate what enemies will spawn
  const count=CFG.enemyPerWaveBase+nextWave*CFG.enemyPerWaveInc;
  const tally={};
  for(let i=0;i<count;i++){
    const maxIdx=Math.min(avail.length-1,Math.ceil(nextWave/2)-1);
    let ei=avail[Math.floor(Math.random()*(maxIdx+1))];
    if(avail.includes(4)&&nextWave>=4&&Math.random()<CFG.bossChance) ei=4;
    if(avail.includes(9)&&nextWave>=9&&Math.random()<CFG.bossChance*.8) ei=9;
    tally[ei]=(tally[ei]||0)+1;
  }
  let html='';
  Object.entries(tally).sort((a,b)=>a[0]-b[0]).forEach(([ti,cnt])=>{
    html+=`<div class="wave-preview-enemy"><img src="${getEnemyIconURL(parseInt(ti),30)}" width="30" height="30" style="display:block;margin:0 auto 2px;">${ENAMES[parseInt(ti)]}<br><span style="color:#ffe082;">×${cnt}</span></div>`;
  });
  document.getElementById('wavePreviewEnemies').innerHTML=html;
  document.getElementById('wavePreview').style.display='block';
}
function hideWavePreview(){
  document.getElementById('wavePreview').style.display='none';
}

/* ══ CANVAS EVENTS ══ */
function _onCvTouchStart(e){
  // ป้องกัน browser scroll / zoom เมื่อ touch บน canvas
  if(e.cancelable) e.preventDefault();
}
/* shared placement logic — used by click-to-place and drag-to-place */
function tryPlaceTower(type,col,row){
  if(!G||G.over||G.win||paused) return false;
  if(col<0||col>=COLS||row<0||row>=ROWS) return false;
  if(currentPset.has(col+','+row)){showToast('❌ สร้างบนเส้นทางไม่ได้!');return false;}
  if(G.towers.find(t=>t.col===col&&t.row===row)){showToast('❌ ช่องนี้มีป้อมอยู่แล้ว!');return false;}
  if(G.gold<CFG.t_cost[type]){showToast('💰 ต้องการ '+CFG.t_cost[type]+' ทอง!');return false;}
  G.gold-=CFG.t_cost[type];
  G.towers.push({col,row,type,lv:1,dmgLv:1,rngLv:1,rateLv:1,cd:0,angle:0,spawnAnim:1.0,rune:-1,awakened:false});
  // FX: ring pulse + burst particles
  const bx=col*CS+CS/2, by=row*CS+CS/2;
  G.fxRings.push({x:bx,y:by,r:0,maxR:CS*1.6,life:1,col:TACCENT[type],lw:3});
  G.fxRings.push({x:bx,y:by,r:0,maxR:CS*1.1,life:1,col:'#fff',lw:1.5,delay:.08});
  for(let k=0;k<10;k++){
    const ang=k/10*Math.PI*2, spd=1.5+Math.random()*1.5;
    G.particles.push({x:bx,y:by,txt:'●',col:TACCENT[type],
      life:.8,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:2.2});
  }
  addParticle(col*CS+CS/2,row*CS+CS/2,'✅ สร้างแล้ว!','#ffe234');
  updateHUD();
  return true;
}
function onCanvasClick(e){
  if(!G||G.over||G.win||paused) return;
  const rect=cv.getBoundingClientRect();
  const col=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
  const row=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
  if(col<0||col>=COLS||row<0||row>=ROWS) return;
  G.selTowerInfo=null; hideTowerPopup(); // deselect range on any click
  if(G.selTwr>=0){
    tryPlaceTower(G.selTwr,col,row);
  } else {
    const tw=G.towers.find(t=>t.col===col&&t.row===row);
    if(tw){
      // G1: show tower popup instead of immediate upgrade
      G.selTowerInfo=tw;
      const rect2=cv.getBoundingClientRect();
      const px=(col+.5)*CS*rect2.width/cv.width+rect2.left;
      const py=row*CS*rect2.height/cv.height+rect2.top;
      showTowerPopup(tw,px,py);
    }
  }
}
function onCanvasMove(e){
  if(!G) return;
  const rect=cv.getBoundingClientRect();
  G.mx=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
  G.my=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
  const info=document.getElementById('rangeInfo');
  if(info){
    if(G.selTwr>=0&&!G.over&&!G.win&&!paused){
      const t=G.selTwr;
      info.innerHTML=TICONS[t]+' '+TNAMES[t]+'<br>🎯 ระยะ '+getTowerRange(t,1).toFixed(1)+' | ⚔️ '+Math.round(getTowerDmg(t,1))+' | 💰 '+CFG.t_cost[t];
      const gpRect=document.getElementById('gp').getBoundingClientRect();
      info.style.left=(e.clientX-gpRect.left+14)+'px';
      info.style.top=(e.clientY-gpRect.top-10)+'px';
      info.style.display='block';
    } else {
      info.style.display='none';
    }
  }
}
function onCanvasHoldStart(e){
  if(!G||G.over||G.win||paused||G.selTwr>=0) return;
  const rect=cv.getBoundingClientRect();
  const col=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
  const row=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
  const tw=G.towers.find(t=>t.col===col&&t.row===row);
  if(!tw) return;
  holdTower=tw;
  // show sell tooltip
  const tooltip=document.getElementById('sellTooltip');
  const refund=Math.floor(CFG.t_cost[tw.type]*tw.lv*.6);
  document.getElementById('sellTowerInfo').textContent=TICONS[tw.type]+' '+TNAMES[tw.type]+' Lv'+tw.lv;
  document.getElementById('sellPrice').textContent=refund;
  tooltip.style.display='block';
  tooltip.style.left=(tw.col*CS+CS/2)+'px';
  tooltip.style.top=(tw.row*CS)+'px';
  // hold 600ms → sell
  holdTimer=setTimeout(()=>{
    if(!G||!holdTower) return;
    const refund2=Math.floor(CFG.t_cost[holdTower.type]*holdTower.lv*.6);
    const sellKey=holdTower.col+'_'+holdTower.row;
    if(G.gmTimers) delete G.gmTimers[sellKey];
    G.towers=G.towers.filter(t=>t!==holdTower);
    G.gold+=refund2; updateHUD();
    // sell FX
    const sx=holdTower.col*CS+CS/2, sy=holdTower.row*CS+CS/2;
    G.fxRings.push({x:sx,y:sy,r:4,maxR:CS*1.2,life:.8,lw:3,col:'#f44336',delay:0});
    for(let k=0;k<6;k++){
      const ang=k/6*Math.PI*2;
      G.particles.push({x:sx,y:sy,txt:'💰',col:'#ffe082',
        life:.9,vy:Math.sin(ang)*1.5,vx:Math.cos(ang)*1.5,decay:2});
    }
    addParticle(sx,sy-16,'+'+refund2+' ทอง','#4caf50');
    showToast('🗑 ขายป้อมได้ +'+refund2+' ทอง');
    tooltip.style.display='none';
    holdTower=null;
  },600);
}
function onCanvasHoldEnd(e){
  if(holdTimer){clearTimeout(holdTimer);holdTimer=null;}
  holdTower=null;
  document.getElementById('sellTooltip').style.display='none';
  if(e&&e.type==='pointerleave'){const info=document.getElementById('rangeInfo');if(info)info.style.display='none';}
}

/* ══ DRAG-TO-PLACE ══ */
let _dragTwr=-1,_dragging=false,_dragSX=0,_dragSY=0;
function onTbtnPointerDown(e,i){
  if(!G||G.over||G.win||paused) return;
  if(!currentStage.unlockedTowers.includes(i)) return;
  _dragTwr=i; _dragging=false;
  _dragSX=e.clientX; _dragSY=e.clientY;
  document.addEventListener('pointermove',_onDragMove);
  document.addEventListener('pointerup',_onDragUp);
}
function _onDragMove(e){
  if(_dragTwr<0) return;
  if(!_dragging&&Math.hypot(e.clientX-_dragSX,e.clientY-_dragSY)>10){
    _dragging=true;
    G.selTwr=_dragTwr;
    for(let j=0;j<8;j++){const b=document.getElementById('tb'+j);if(b)b.classList.toggle('sel',j===_dragTwr);}
    const ghost=document.getElementById('dragGhost');
    ghost.textContent=TICONS[_dragTwr]; ghost.style.display='flex';
  }
  if(!_dragging) return;
  e.preventDefault();
  const ghost=document.getElementById('dragGhost');
  ghost.style.left=e.clientX+'px'; ghost.style.top=e.clientY+'px';
  if(!cv) return;
  const rect=cv.getBoundingClientRect();
  if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
    G.mx=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
    G.my=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
    onCanvasMove(e);
  } else {
    G.mx=-1; G.my=-1;
    const info=document.getElementById('rangeInfo'); if(info) info.style.display='none';
  }
}
function _onDragUp(e){
  document.removeEventListener('pointermove',_onDragMove);
  document.removeEventListener('pointerup',_onDragUp);
  if(_dragging){
    if(cv&&G){
      const rect=cv.getBoundingClientRect();
      if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
        const col=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
        const row=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
        tryPlaceTower(_dragTwr,col,row);
      }
    }
    document.getElementById('dragGhost').style.display='none';
    const info=document.getElementById('rangeInfo'); if(info) info.style.display='none';
    if(G){G.selTwr=-1; G.mx=-1; G.my=-1;}
    for(let j=0;j<8;j++){const b=document.getElementById('tb'+j);if(b)b.classList.remove('sel');}
  }
  _dragTwr=-1; _dragging=false;
}

/* ══ ENDGAME MENU ══ */
function openEgMenu(){
  showScreen('egmenu',true);
  const unlocked=isStageUnlocked(1)||(loadProgress()[0]||0)>=1;
  const stats=getEgStats();
  document.getElementById('egBestWave').textContent=stats.bestWave||'—';
  document.getElementById('egBestScore').textContent=stats.bestScore||'—';
  document.getElementById('egLockedNote').style.display=unlocked?'none':'block';
  document.getElementById('egStartBtn').disabled=!unlocked;
  selectDiff(egDiff);
}
function selectDiff(d){
  egDiff=d;
  for(let i=0;i<3;i++) document.getElementById('diff'+i).classList.toggle('sel',i===d);
}
function getEgStats(){
  try{
    const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
    const egRuns=runs.filter(r=>r.mode==='endgame');
    if(!egRuns.length) return {};
    return{bestWave:Math.max(...egRuns.map(r=>r.wave)),bestScore:Math.max(...egRuns.map(r=>r.score))};
  }catch(e){return{};}
}

function _getEgEnemyPool(){
  /* ศัตรูเพิ่มขึ้นตาม egRound — ให้ผู้เล่นค่อยๆ เจอ */
  if(egRound===0) return [0,1,2,3,4];          // Round 1: basic
  if(egRound===1) return [0,1,2,3,4,5];        // Round 2: +Golem
  if(egRound===2) return [0,1,2,3,4,5,6];      // Round 3: +Bat
  if(egRound===3) return [0,1,2,3,4,5,6,7];    // Round 4: +Wyvern
  if(egRound===4) return [0,1,2,3,4,5,6,7,8];  // Round 5: +Shield Knight
  if(egRound===5) return [0,1,2,3,4,5,6,7,8,10]; // Round 6: +Shaman
  return [0,1,2,3,4,5,6,7,8,9,10];             // Round 7+: ทุกตัวรวม Final Boss
}
function startEndgame(){
  isEndgame=true; egRound=0;
  currentStage={id:99,name:'Endgame',icon:'🔥',waves:999,
    enemyTypes:_getEgEnemyPool(),unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
    bossChance:.10,
    path:EG_PATH,bgColor:'#0a0a1a',pathColor:'#3a2a1a',
    grassColors:['#1a0a0a','#1e0e0e','#120808','#1a0c0c','#160a0a']};
  currentPath=EG_PATH;
  currentPset=new Set(EG_PATH.map(p=>p[0]+','+p[1]));
  showScreen('gp',true);
  cv=document.getElementById('cv'); ctx=cv.getContext('2d');
  cv.width=COLS*CS; cv.height=ROWS*CS;
  _init3D(); _layoutGl3D();
  cv.removeEventListener('click',onCanvasClick); cv.addEventListener('click',onCanvasClick);
  cv.removeEventListener('mousemove',onCanvasMove); cv.addEventListener('mousemove',onCanvasMove);
  cv.removeEventListener('pointerdown',onCanvasHoldStart); cv.addEventListener('pointerdown',onCanvasHoldStart);
  cv.removeEventListener('pointerup',onCanvasHoldEnd); cv.addEventListener('pointerup',onCanvasHoldEnd);
  cv.removeEventListener('pointerleave',onCanvasHoldEnd); cv.addEventListener('pointerleave',onCanvasHoldEnd);
  cv.removeEventListener('touchstart',_onCvTouchStart); cv.addEventListener('touchstart',_onCvTouchStart,{passive:false});
  document.getElementById('surrenderBtn').style.display='inline-block';
  document.getElementById('backBtn').style.display='none';
  initEgGame();
}

function initEgGame(){
  const prevKills=(G&&G.kills)||0;
  const prevScore=(G&&G.score)||0;
  const prevMaxCombo=(G&&G.maxCombo)||0;
  G=mkState();
  // สะสม kills/score/combo ข้าม round
  G.kills=prevKills; G.score=prevScore; G.maxCombo=prevMaxCombo;
  currentStage.enemyTypes=_getEgEnemyPool(); // อัปเดต pool ตาม round ปัจจุบัน
  G.gold=CFG.startGold+egRound*35; // bonus gold per round
  G.hp=CFG.baseHP; G.maxHp=CFG.baseHP;
  document.getElementById('endOverlay').style.display='none';
  document.getElementById('pauseScreen').style.display='none';
  document.getElementById('waveBtn').disabled=false;
  document.getElementById('maxWaveTxt').textContent='∞';
  document.getElementById('stageBadge').textContent='🔥 Round '+(egRound+1);
  document.getElementById('stageBadge').className='eg-round-badge';
  for(let i=0;i<8;i++){const b=document.getElementById('tb'+i);if(b){b.classList.remove('sel','locked-tower');const c=document.getElementById('tc'+i);if(c)c.textContent='💰'+CFG.t_cost[i];}}
  paused=false; speed=1; autoWave=false; _settingsPausedGame=false;
  document.getElementById('speedBtn').textContent='1×';
  document.getElementById('pauseBtn').textContent='⏸';
  document.getElementById('settingsScreen').style.display='none';
  const ab=document.getElementById('autoBtn');if(ab){ab.classList.remove('on');ab.textContent='🔁 Auto';}
  updateHUD();
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  let last=performance.now();
  function loop(ts){
    if(!G) return;
    if(paused){rafId=requestAnimationFrame(loop);return;}
    const dt=Math.min((ts-last)/1000,.1)*speed; last=ts;
    updateEg(dt); render();
    if(!G.over&&!G.win) rafId=requestAnimationFrame(loop);
  }
  rafId=requestAnimationFrame(loop);
}

function getEgEnemyHP(ti,wave){
  // boss types (4=บอส, 9=จอมมาร) scale ช้ากว่า เพื่อไม่ให้ unkillable เร็วเกิน
  const isBossType=MTYPE[ti]===1;
  const roundScale=isBossType?0.18:0.30;
  const roundBonus=Math.min(1+egRound*roundScale, isBossType?3.5:5.0); // cap
  return CFG.m_hp[ti]*(1+wave*CFG.waveMult)*roundBonus*EG_DIFF_MULT[egDiff];
}
function getEgEnemySpd(ti){
  const roundBonus=1+egRound*0.05;
  return Math.min(CFG.m_spd[ti]*roundBonus*EG_DIFF_MULT[egDiff],CFG.spdCap);
}
function getEgRewardBonus(){
  // ก่อนหน้านี้ reward เพิ่มแบบ flat (+2/round) ทำให้ reward/HP ร่วงหนักในรอบหลังๆ
  // ตอนนี้สเกลแบบ capped multiplier ให้ตามทันการสเกล HP (×5/×3.5) ได้บางส่วน
  return Math.min(1+egRound*0.15, 3.0);
}

function spawnEgEnemy(ti){
  const hp=getEgEnemyHP(ti,G.wave);
  const shBase=MSHIELD[ti]||0;
  const shieldCap=MTYPE[ti]===1?3.5:5.0; // same cap as HP roundBonus, so reward/HP flattens too
  const sh=shBase>0?Math.round(shBase*Math.min(1+egRound*.3,shieldCap)):0;
  G.enemies.push({
    ti,pi:0,prog:0,
    x:EG_PATH[0][0]*CS+CS/2,y:EG_PATH[0][1]*CS+CS/2,
    hp,mhp:hp,spd:getEgEnemySpd(ti),reward:Math.round(CFG.m_rew[ti]*getEgRewardBonus()),
    slow:1,slowT:0,alive:true,hitFlash:0,
    isAir:MISAIR[ti]||false,
    shieldHp:sh,maxShieldHp:sh,
  });
}

function startEgWave(){
  if(!G||G.waveActive||G.over||paused) return;
  G.wave++;
  document.getElementById('waveTxt').textContent=G.wave;
  document.getElementById('waveBtn').disabled=true;
  G.waveActive=true; G.queue=[]; G.spawnT=0;
  const n=Math.floor(CFG.enemyPerWaveBase+G.wave*CFG.enemyPerWaveInc*(1+egRound*.2));
  const avail=_getEgEnemyPool();
  const bChance=0.08+egRound*.015;
  for(let i=0;i<n;i++){
    const maxIdx=Math.min(avail.length-1,Math.ceil((G.wave+egRound*2)/3));
    let ei=avail[Math.floor(Math.random()*(maxIdx+1))];
    if(avail.includes(4)&&G.wave>=3&&Math.random()<bChance) ei=4;
    if(avail.includes(9)&&G.wave>=5&&Math.random()<bChance*.7) ei=9;
    if(avail.includes(10)&&G.wave>=2&&Math.random()<.15) ei=10;
    G.queue.push(ei);
  }
  G.waveBanner={text:'🔥  WAVE  '+G.wave,t:1.5};
}

function updateEg(dt){
  if(!G||G.over) return;
  if(G.waveActive&&G.queue.length>0){
    G.spawnT-=dt;
    if(G.spawnT<=0){spawnEgEnemy(G.queue.shift());G.spawnT=CFG.spawnInterval*.8;}
  }
  // copy of update logic but for EG
  const plen=EG_PATH.length;
  for(let i=G.enemies.length-1;i>=0;i--){
    const e=G.enemies[i];
    if(!e.alive){G.enemies.splice(i,1);continue;}
    if(e.slowT>0){e.slowT-=dt;if(e.slowT<=0)e.slow=1;}
    if(e._enrageT>0) e._enrageT-=dt;
    if(e._dodgeFlash>0) e._dodgeFlash-=dt;
    // 👺 โกบลิน: Pack Rush — โกบลินที่อยู่ใกล้กัน (<1.2 ช่อง) ได้บัฟความเร็ว +20%
    e._packBoost=false;
    if(e.ti===0){
      for(const o of G.enemies){
        if(o!==e&&o.alive&&o.ti===0&&Math.hypot(o.x-e.x,o.y-e.y)<CS*1.2){e._packBoost=true;break;}
      }
    }
    e.prog+=e.spd*e.slow*((e._enrageT>0)?(e._enrageMult||1):1)*((e._diveT>0)?1.5:1)*(e._packBoost?1.2:1)*((G&&G.weather&&G.weather.spdMult)?G.weather.spdMult:1)*CS*dt;
    while(e.prog>=CS){
      e.prog-=CS; e.pi++;
      if(e.pi>=plen-1){
        unlockMonster(e.ti); e.alive=false; G.enemies.splice(i,1);
        G.hp=Math.max(0,G.hp-1); updateHUD(); G.shakeT=Math.min(.55,G.shakeT+.2);
        if(G.hp<=0){endEgGame();return;}
        break;
      }
    }
    if(!e.alive) continue;
    const p0=EG_PATH[e.pi],p1=EG_PATH[Math.min(e.pi+1,plen-1)];
    const t2=Math.min(e.prog/CS,1);
    e.x=p0[0]*CS+CS/2+(p1[0]-p0[0])*CS*t2;
    e.y=p0[1]*CS+CS/2+(p1[1]-p0[1])*CS*t2;
  }
  // burn DoT (endgame)
  G.enemies.forEach(e=>{
    if(!e.alive||!e.burnT) return;
    e.burnT-=dt;
    e._burnTick=(e._burnTick||0)-dt;
    if(e._burnTick<=0){
      e._burnTick=0.5;
      applyDmg(e,e.burnDmg,0);
      G.particles.push({x:e.x+(Math.random()-.5)*8,y:e.y-ESIZES[e.ti]-4,
        txt:'🔥',col:'#ff5722',life:.5,vy:-.8,vx:(Math.random()-.5)*.5,decay:2,scale:.7});
    }
    if(e.burnT<=0){e.burnT=0;e.burnDmg=0;}
  });
  // healer monsters in endgame
  G.enemies.forEach(healer=>{
    if(!healer.alive||healer.ti!==10) return;
    healer.healCd=(healer.healCd||0)-dt;
    if(healer.healCd>0) return;
    healer.healCd=2.0;
    const healAmt=Math.round(CFG.m_hp[10]*0.18*(1+egRound*.1));
    const healRange=2.5*CS;
    let healed=false;
    G.enemies.forEach(target=>{
      if(!target.alive||target===healer||Math.hypot(target.x-healer.x,target.y-healer.y)>healRange||target.hp>=target.mhp) return;
      target.hp=Math.min(target.mhp,target.hp+healAmt); healed=true;
      G.particles.push({x:target.x,y:target.y-ESIZES[target.ti]-8,txt:'💚',col:'#69f0ae',life:1.0,vy:-1.2,vx:(Math.random()-.5)*.8,decay:1.2,scale:.85});
    });
    G.fxRings.push({x:healer.x,y:healer.y,r:5,maxR:healRange,life:.55,lw:2,col:'#69f0ae',delay:0});
    if(healed){G.particles.push({x:healer.x,y:healer.y-ESIZES[10]-10,txt:'✨ Heal!',col:'#b2ff59',life:1.1,vy:-1.0,vx:0,decay:1.1,scale:.9});_playSound('heal');}
  });
  // 🐉 วิเวิร์น (ti===7) โฉบ ในโหมด endgame
  G.enemies.forEach(wv=>{
    if(!wv.alive||wv.ti!==7) return;
    if(wv._diveT>0) wv._diveT-=dt;
    wv.diveCd=(wv.diveCd||3+Math.random()*2)-dt;
    if(wv.diveCd>0) return;
    wv.diveCd=5.0;
    wv._diveT=1.2;
    if(G.towers.length){
      const tw=G.towers[Math.floor(Math.random()*G.towers.length)];
      tw._stunT=3.0;
      G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS,txt:'💫 หยุดทำงาน!',col:'#ff8a65',life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
    }
    G.particles.push({x:wv.x,y:wv.y-ESIZES[7]-14,txt:'🐉 โฉบ!',col:'#ff8a65',life:1.0,vy:-1.4,vx:0,decay:1.2,scale:1});
  });
  // 🔥 วิญญาณไฟ (ti===3) พ่นไฟป้องกันตัวเองเป็นช่วงๆ ลดดาเมจที่ได้รับ 30%
  G.enemies.forEach(fs=>{
    if(!fs.alive||fs.ti!==3) return;
    if(fs._flareT>0) fs._flareT-=dt;
    fs.flareCd=(fs.flareCd||2+Math.random()*3)-dt;
    if(fs.flareCd>0) return;
    fs.flareCd=6.0;
    fs._flareT=1.5;
    G.particles.push({x:fs.x,y:fs.y-ESIZES[3]-12,txt:'🔥 ป้องกัน!',col:'#ff8a65',life:1.0,vy:-1.2,vx:0,decay:1.2,scale:.9});
  });
  // 🛡️ ชิลด์ไนท์ (ti===8) ฟื้นโล่เองถ้าไม่โดนตี 4 วิ — ฟื้น 15% ของโล่สูงสุด/วิ
  G.enemies.forEach(sk=>{
    if(!sk.alive||sk.ti!==8||sk.maxShieldHp<=0) return;
    sk._noDmgT=(sk._noDmgT||0)+dt;
    if(sk._noDmgT>=4&&sk.shieldHp<sk.maxShieldHp){
      sk.shieldHp=Math.min(sk.maxShieldHp,sk.shieldHp+sk.maxShieldHp*.15*dt);
    }
  });
  // Gold Mine production (endgame, only while a wave is active)
  if(G.waveActive) G.towers.forEach(tw=>{
    if(!TGOLDMINE[tw.type]) return;
    if(!G.gmTimers) G.gmTimers={};
    const key=tw.col+'_'+tw.row;
    G.gmTimers[key]=(G.gmTimers[key]||0)+dt;
    if(G.gmTimers[key]>=CFG.t_goldrate){
      G.gmTimers[key]=0;
      // 💚 Support Awaken: ดับเบิลโบนัส synergy ทองที่ได้รับ (+25% → +50%)
      let _gmSynMult=getSynergyGoldMult(tw.col,tw.row);
      if(_gmSynMult>1) _gmSynMult=1+(_gmSynMult-1)*getSupportAwakenBoost(tw.col,tw.row);
      // 💰 Gold Mine Awaken: ผลผลิตทอง x2
      const goldAmt=Math.round(CFG.t_goldamt[Math.min(tw.lv-1,3)]*((G.weather&&G.weather.goldMineMult)?G.weather.goldMineMult:1)*_gmSynMult*(tw.awakened?2:1));
      G.gold+=goldAmt; updateHUD();
      addParticle(tw.col*CS+CS/2,tw.row*CS+CS/2,'+'+goldAmt+'💰','#ffd54f');
    }
  });
  G.towers.forEach(tw=>{
    if(tw._stunT>0){tw._stunT-=dt;return;} // 🐉 ถูกวิเวิร์นโฉบหยุดทำงาน
    if(CFG.t_dmg[tw.type]===0) return;
    if(G.weather&&G.weather.struckTowers&&G.weather.struckTowers.length&&G.weather.struckTowers.includes(tw)) return;
    tw.cd=Math.max(0,tw.cd-dt);
    const range=getTowerRange(tw.type,tw.rngLv||tw.lv)*((G&&G.weather&&G.weather.rangeMult)?G.weather.rangeMult:1);
    const cx=tw.col+.5,cy=tw.row+.5;
    let best=null,bestP=-1;
    G.enemies.forEach(e=>{
      if(!e.alive) return;
      if(e.isAir&&!TCANAIR[tw.type]) return; /* ✅ fix: air check */
      if(Math.hypot(cx-e.x/CS,cy-e.y/CS)<=range){
        const p=e.pi+e.prog/CS; if(p>bestP){bestP=p;best=e;}
      }
    });
    if(best) tw.angle=Math.atan2(best.y/CS-cy,best.x/CS-cx);
    if(best&&tw.cd<=0){
      const _rateMultW2=(tw.type===1&&G.weather&&G.weather.iceRateMult)?G.weather.iceRateMult:1;
      tw.cd=1/Math.max(.01,getTowerRate(tw.type,tw.rateLv||tw.lv)*_rateMultW2);
      // ⚡ สายความเร็ว Lv.4+ ปลดล็อก "ยิงรัว" — มีโอกาสคูลดาวน์สั้นลงทันที
      if((tw.rateLv||tw.lv)>=4&&Math.random()<0.2){
        tw.cd*=0.45;
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS+CS/2-22,txt:'⚡รัว!',col:'#ffe234',life:.45,vy:-1.3,vx:0,decay:2.6,scale:.75});
      }
      const fx=tw.col*CS+CS/2,fy=tw.row*CS+CS/2;
      const _aw2=tw.awakened&&!(tw._drainT>0);
      let _rdmg2=getTowerDmg(tw.type,tw.dmgLv||tw.lv)*getBuffMult(tw.col,tw.row)*getSynergyMult(tw.type,tw.col,tw.row);
      if(_aw2) _rdmg2*=1.15;
      let _risCrit2=false;
      let _rSlow2=(TSLOW[tw.type]||0)+getSynergySlowBonus(tw.type,tw.col,tw.row);
      if(tw.rune===5) _rdmg2*=1.25;
      if(tw.rune===3&&Math.random()<(_aw2?.28:.2)){_rdmg2*=2.5;_risCrit2=true;}
      if(tw.rune===1) _rSlow2=Math.min((_rSlow2||0)+(_aw2?.35:.25),0.85);
      const _wSplashMult2=((tw.type===0||tw.type===2)&&G.weather&&G.weather.splashMult)?G.weather.splashMult:1;
      // ⚡ Awaken เฉพาะป้อม: Cannon=splash ใหญ่ขึ้น, Thunder=chain เพิ่ม
      const _awSplashMult2=(_aw2&&tw.type===0)?1.5:1;
      const _awChainBonus2=(_aw2&&tw.type===7)?2:0;
      const _rp2=G.projs[G.projs.push({
        x:fx,y:fy,tx:best.x,ty:best.y,target:best,ox:fx,oy:fy,
        spd:280+(tw.type===3?120:0)+(tw.type===7?80:0),type:tw.type,
        dmg:_rdmg2,
        splash:TSPLASH[tw.type]*_wSplashMult2*_awSplashMult2,slow:_rSlow2,alive:true,
        chain:(TCHAIN[tw.type]||0)+_awChainBonus2,
        _rngPierce:(tw.rngLv||tw.lv)>=4,
        _maxR:range*CS,
        _supBoost:_aw2?getSupportAwakenBoost(tw.col,tw.row):1
      })-1];
      if(_risCrit2) _rp2._crit=true;
      if(tw.rune===1) _rp2._frostRune=true;
      if(tw.rune===0) _rp2._burnRune=true;
      if(tw.rune===2) _rp2._stormRune=true;
      if(tw.rune===4) _rp2._avaRune=true;
      if(_aw2) _rp2._awakenedRune=true;
      // ✨ Magic Awaken: โอกาสยิงเพิ่ม 20% (ตื่นแล้ว 40%) สูงสุด 3 นัด
      if(tw.type===2&&Math.random()<(_aw2?.4:.2)){
        const _extra2=_aw2?2:1;
        for(let _m=0;_m<_extra2;_m++) G.projs.push(Object.assign({},_rp2));
      }
      G.fxRings.push({x:fx,y:fy,r:2,maxR:tw.type===3?CS*.8:CS*.4,life:.5,lw:1.5,col:TPROJ[tw.type],delay:0});
      if(tw.type===7){
        for(let k=0;k<6;k++){const ang=k/6*Math.PI*2;G.particles.push({x:fx,y:fy,txt:'·',col:'#ffe57f',life:.35,vy:Math.sin(ang)*1.4,vx:Math.cos(ang)*1.4,decay:4,scale:.9});}
        G.fxRings.push({x:fx,y:fy,r:2,maxR:CS*.5,life:.3,lw:1.5,col:'#ffe57f',delay:0});
      }
      // muzzle flash + sound
      const _mfa=tw.angle||0;
      G.fxFlash.push({x:fx+Math.cos(_mfa)*CS*.32,y:fy+Math.sin(_mfa)*CS*.32,r:tw.type===3?14:tw.type===0?16:10,life:.18,col:TPROJ[tw.type]||'#fff'});
      const _snd=_TSND[tw.type]; if(_snd) _playSound(_snd);
    }
  });
  for(let i=G.projs.length-1;i>=0;i--){
    const p=G.projs[i];
    if(!p.alive){G.projs.splice(i,1);continue;}
    const tx=p.target&&p.target.alive?p.target.x:p.tx;
    const ty=p.target&&p.target.alive?p.target.y:p.ty;
    const dx=tx-p.x,dy=ty-p.y,d=Math.hypot(dx,dy);
    if(d<10){
      p.alive=false;
      if(p.splash>0){
        G.enemies.forEach(e=>{
          if(!e.alive||Math.hypot(e.x-tx,e.y-ty)>p.splash*CS) return;
          if(e.isAir&&!TCANAIR[p.type]) return;
          applyDmg(e,p.dmg,p.type,p._rngPierce);
          if(p._burnRune&&Math.random()<0.25){e.burnT=2.5;e.burnDmg=8;}
          if(p._avaRune) e._avaRune=true;
          G.fxRings.push({x:tx,y:ty,r:4,maxR:p.splash*CS*1.2,life:.7,lw:3,col:TPROJ[p.type],delay:0});
        });
      } else {
        if(p.target&&p.target.alive){
          applyDmg(p.target,p.dmg,p.type,p._rngPierce);
          if(p._burnRune&&Math.random()<0.25){p.target.burnT=2.5;p.target.burnDmg=8;}
          if(p._avaRune) p.target._avaRune=true;
        }
      }
      // Storm rune chain (endgame)
      if(p._stormRune&&Math.random()<0.35&&p.target){
        let nearest=null,nDist=Infinity;
        G.enemies.forEach(e=>{
          if(!e.alive||e===p.target) return;
          const cd=Math.hypot(e.x-p.target.x,e.y-p.target.y);
          if(cd<CS*3&&cd<nDist){nDist=cd;nearest=e;}
        });
        if(nearest){
          G.fxTrails.push({x:p.target.x,y:p.target.y,tx:nearest.x,ty:nearest.y,col:'#ffe57f',life:.5,type:99,lw:2});
          applyDmg(nearest,p.dmg*0.4,p.type);
        }
      }
      // Frost rune: extend slow
      if(p._frostRune&&p.slow>0&&p.target&&p.target.alive&&!(p.target.shieldHp>0&&!TPIERCE[p.type]&&!p._rngPierce)){
        p.target.slow=p.slow; p.target.slowT=3;
      }
      if(p.slow>0&&!p._frostRune&&p.target&&p.target.alive&&!(p.target.shieldHp>0&&!TPIERCE[p.type]&&!p._rngPierce)){
        // ❄️ Ice Awaken: ติดแข็ง (หยุดสนิท) 3 วินาที — Support ตื่นใกล้เคียงเพิ่มเป็น 6 วินาที
        if(p._awakenedRune&&p.type===1){ p.target.slow=0; p.target.slowT=3*(p._supBoost||1); }
        else { p.target.slow=p.slow; p.target.slowT=2; }
      }
      // 🎯 Sniper Awaken: ยิงทะลุเป็นเส้นตรง — สร้างความเสียหายให้ศัตรูที่อยู่หลังเป้าหมายบนเส้นยิงด้วย
      if(p.type===3&&p._awakenedRune){
        const _ddx2=tx-p.ox,_ddy2=ty-p.oy,_dlen2=Math.hypot(_ddx2,_ddy2)||1;
        const _ux2=_ddx2/_dlen2,_uy2=_ddy2/_dlen2;
        G.enemies.forEach(e=>{
          if(!e.alive||e===p.target) return;
          if(e.isAir&&!TCANAIR[3]) return;
          if(e.shieldHp>0&&!TPIERCE[3]) return;
          const _ex2=e.x-p.ox,_ey2=e.y-p.oy;
          const _proj2=_ex2*_ux2+_ey2*_uy2;
          if(_proj2<=_dlen2+1||_proj2>(p._maxR||_dlen2)) return;
          const _perp2=Math.abs(_ex2*_uy2-_ey2*_ux2);
          if(_perp2<CS*.35){
            applyDmg(e,p.dmg,p.type,true);
            e.hitFlash=.6;
            G.fxTrails.push({x:tx,y:ty,tx:e.x,ty:e.y,col:'#fff9c4',life:.35,type:99,lw:2});
            G.particles.push({x:e.x+(Math.random()-.5)*10,y:e.y-8,txt:'-'+Math.round(p.dmg),col:'#ff5252',
              life:1,vy:-1.5,vx:(Math.random()-.5)*.6,scale:1,decay:1.6});
          }
        });
      }
      if(p.type===7){
        G.fxRings.push({x:tx,y:ty,r:2,maxR:CS*.55,life:.45,lw:2.5,col:'#ffe57f',delay:0});
        if(p.chain>0&&p.target){
          const chainDmg=p.dmg*.6,chainR=CS*2.2;
          const used=[p.target]; let prev=p.target;
          for(let _c=0;_c<p.chain;_c++){
            let nearest=null,nDist=Infinity;
            G.enemies.forEach(e=>{if(!e.alive||used.includes(e)) return;const cd=Math.hypot(e.x-prev.x,e.y-prev.y);if(cd<chainR&&cd<nDist){nDist=cd;nearest=e;}});
            if(!nearest) break;
            used.push(nearest);
            G.fxTrails.push({x:prev.x,y:prev.y,tx:nearest.x,ty:nearest.y,col:'#ffe57f',life:.5,type:99,lw:2.5});
            G.fxRings.push({x:nearest.x,y:nearest.y,r:1,maxR:CS*.35,life:.35,lw:2,col:'#ffe57f',delay:_c*.04});
            applyDmg(nearest,chainDmg,7);
            nearest.hitFlash=.7;
            G.particles.push({x:nearest.x,y:nearest.y-6,txt:'-'+Math.round(chainDmg),col:'#ffe57f',life:.8,vy:-1.2,vx:(Math.random()-.5)*.6,scale:.9,decay:1.8});
            prev=nearest;
          }
        }
      }
      const isCrit=Math.random()<.18;
      G.particles.push({x:tx+(Math.random()-.5)*14,y:ty-8,
        txt:isCrit?'💥'+Math.round(p.dmg)+'!':'-'+Math.round(p.dmg),
        col:isCrit?'#ffe234':'#ff5252',
        life:1,vy:isCrit?-2.2:-1.5,vx:(Math.random()-.5)*.8,
        scale:isCrit?1.4:1,decay:isCrit?1.2:1.6});
      if(p.target&&p.target.alive) p.target.hitFlash=isCrit?.8:.4;
      G.projs.splice(i,1);
    } else {
      const s2=p.spd*dt/d; p.x+=dx*s2; p.y+=dy*s2;
      if(G.fxTrails.length<200) G.fxTrails.push({x:p.x,y:p.y,col:TPROJ[p.type],life:1,type:p.type});
    }
  }
  G.enemies.forEach(e=>{if(e.hitFlash>0) e.hitFlash=Math.max(0,e.hitFlash-dt*4);});
  G.towers.forEach(tw=>{if(tw.spawnAnim>0) tw.spawnAnim=Math.max(0,tw.spawnAnim-dt*3);});
  if(G.shakeT>0) G.shakeT=Math.max(0,G.shakeT-dt*3.8);
  if(G.waveBanner&&G.waveBanner.t>0) G.waveBanner.t-=dt;
  if(G.bossWarning&&G.bossWarning.t>0) G.bossWarning.t-=dt;
  if(G.comboT>0){G.comboT-=dt;if(G.comboT<=0){G.comboN=0;G.comboT=0;}}
  for(let i=G.fxFlash.length-1;i>=0;i--){G.fxFlash[i].life-=dt;if(G.fxFlash[i].life<=0)G.fxFlash.splice(i,1);}
  for(let i=G.dmgNums.length-1;i>=0;i--){const n=G.dmgNums[i];n.x+=n.vx||0;n.y+=n.vy;n.vy*=.92;n.life-=dt*(n.decay||1.0);if(n.life<=0)G.dmgNums.splice(i,1);}
  for(let i=G.fxRings.length-1;i>=0;i--){
    const r=G.fxRings[i];
    if(r.delay>0){r.delay-=dt;continue;}
    r.r+=r.maxR*dt*3.5; r.life-=dt*2.8;
    if(r.life<=0) G.fxRings.splice(i,1);
  }
  for(let i=G.fxTrails.length-1;i>=0;i--){
    const t=G.fxTrails[i]; t.life-=dt*6;
    if(t.life<=0) G.fxTrails.splice(i,1);
  }
  for(let i=G.particles.length-1;i>=0;i--){
    const p=G.particles[i];
    p.x+=p.vx||0; p.y+=p.vy; p.life-=dt*(p.decay||1.4);
    if(p.scale) p.scale=Math.max(.4,p.scale-dt*1.5);
    if(p.life<=0) G.particles.splice(i,1);
  }
  // wave clear → next wave (no limit)
  if(G.waveActive&&G.queue.length===0&&G.enemies.length===0){
    G.waveActive=false;
    const bonus=30+G.wave*8+egRound*15; G.gold+=bonus; updateHUD();
    // heal 1 HP per wave clear
    if(G.hp<G.maxHp){G.hp=Math.min(G.maxHp,G.hp+1);updateHUD();}
    addParticle(COLS*CS/2,ROWS*CS/2,'🎉 +'+bonus+' ทอง','#ffe234');
    showToast('🌊 Wave '+G.wave+' ผ่าน! +'+bonus+' ทอง ❤️+1');
    document.getElementById('waveBtn').disabled=false;
    if(autoWave) setTimeout(()=>{if(G&&!G.over&&!G.waveActive)startEgWave();},1200);
  }
}

function endEgGame(){
  if(!G) return;
  G.over=true;
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  showSavePrompt(false);
}

function surrender(){
  if(!G||G.over) return;
  if(isEndgame){
    if(rafId){cancelAnimationFrame(rafId);rafId=null;}
    G.over=true;
    showSavePrompt(false);
  } else {
    // story mode surrender = go to stage select
    goStageSelect();
  }
}

