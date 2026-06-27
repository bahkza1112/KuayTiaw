/* ══ STAGE DEFINITIONS ══ */
const STAGES=[
  {id:0,name:'Grassland',icon:'🌿',
   desc:'ทุ่งหญ้าสงบสุข เรียนรู้พื้นฐานการป้องกันป้อมปราการ',
   waves:5,enemyTypes:[0,1],unlockedTowers:[0,1,4],unlocks:'Magic Tower ✨',enemyMult:1.5,
   story:'ประตูมืดได้เปิดขึ้น กองทัพมืดบุกรุกทุ่งหญ้า ถึงเวลาสร้างแนวป้องกัน!',
   path:[[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],
         [11,3],[11,4],[11,5],[10,5],[9,5],[8,5],[7,5],[6,5],[5,5],[4,5],[3,5],[2,5],
         [2,6],[2,7],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:6,r:3,t:0},{c:9,r:4,t:0},{c:4,r:6,t:0}],
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
   obstacles:[{c:5,r:3,t:0},{c:6,r:6,t:1},{c:10,r:5,t:0}],
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
   obstacles:[{c:4,r:4,t:0},{c:7,r:3,t:1},{c:5,r:7,t:0}],
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
   obstacles:[{c:6,r:1,t:1},{c:5,r:4,t:0},{c:6,r:7,t:1},{c:7,r:5,t:2}],
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
   obstacles:[{c:5,r:2,t:0},{c:8,r:3,t:2},{c:8,r:6,t:1},{c:5,r:6,t:0}],
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
   obstacles:[{c:6,r:2,t:1},{c:7,r:3,t:2},{c:9,r:5,t:0},{c:6,r:5,t:0}],
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
   obstacles:[{c:5,r:1,t:0},{c:8,r:2,t:1},{c:7,r:5,t:2},{c:5,r:6,t:1},{c:9,r:6,t:0}],
   bgColor:'#0a1a0a',pathColor:'#7a8f3a',
   grassColors:['#0d1f0d','#112211','#0a180a','#132513','#0c1c0c']},
  {id:7,name:'Dark Fortress',icon:'🏰',
   desc:'วิเวิร์นโฉบฟ้า ชิลด์ไนท์ถือโล่เหล็ก — ต้องทะลุโล่ก่อน ใช้ Sniper/Thunder ให้เป็น',
   waves:11,enemyTypes:[6,8,3,7,5,4],bossChance:0,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,story:'ป้อมปราการมืดตั้งตระหง่านขวางทาง Shield Knight สวมชุดเกราะเหล็กนำหน้ากองทัพ ต้องเจาะกำแพงป้องกันก่อนจะถึงหัวใจของศัตรู...',
   path:[[0,5],[1,5],[1,4],[1,3],[1,2],[1,1],[2,1],[3,1],[4,1],[5,1],[5,2],[5,3],
         [5,4],[5,5],[6,5],[7,5],[7,4],[7,3],[7,2],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[11,5],[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],
         [6,7],[6,8],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9]],
   obstacles:[{c:3,r:3,t:1},{c:9,r:3,t:2},{c:8,r:4,t:0},{c:10,r:3,t:0},{c:8,r:7,t:1}],
   bgColor:'#0f0f0f',pathColor:'#5a4258',
   grassColors:['#1a0a1a','#1e0e1e','#150815','#1c0c1c','#170a17']},
  {id:8,name:'Dark Throne',icon:'👿',
   desc:'หมอผีคอย Heal พวกพ้อง — ฆ่ามันก่อนไม่งั้นศัตรูข้างๆ ฟื้น HP ไม่หยุด',
   waves:12,enemyTypes:[10,6,2,3,5],bossChance:0,enemyMult:0.85,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,story:'บัลลังก์แห่งความมืด หมอผีโบราณปลุกเสกพลังฟื้นฟูให้กองทัพ ศัตรูข้างๆ ฟื้น HP ตลอดเวลา ต้องกำจัดหมอผีก่อนเป็นอันดับแรก...',
   path:[[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],
         [4,7],[4,6],[4,5],[4,4],[4,3],[4,2],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[10,4],[9,4],[8,4],[7,4],[6,4],[5,4],[5,5],
         [5,6],[5,7],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:2,r:2,t:0},{c:8,r:2,t:1},{c:7,r:5,t:2},{c:2,r:6,t:0},{c:9,r:6,t:1}],
   bgColor:'#1a0020',pathColor:'#7a1aa0',
   grassColors:['#1a0020','#200028','#150018','#1e0024','#17001e']},
  {id:9,name:'Dark Tower Summit',icon:'💀',
   desc:'ยอดหอคอยมืด — จอมมารผู้ยิ่งใหญ่รอคอยอยู่ ใช้ทุกพลังที่มีเพื่อยุติความมืด',
   waves:12,enemyTypes:[6,8,7,5,4,9],bossChance:.12,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,story:'ยอดหอคอยมืดที่สูงที่สุด จอมมารผู้ยิ่งใหญ่สถิตอยู่ที่นี่มาหลายยุคหลายสมัย กองทัพทั้งหมดรวมพลครั้งสุดท้าย — ผู้พิทักษ์ต้องใช้ทุกสิ่งที่มีเพื่อยุติความมืดตลอดกาล...',
   obstacles:[{c:5,r:1,t:2},{c:8,r:1,t:1},{c:4,r:3,t:0},{c:9,r:4,t:2},{c:6,r:6,t:1},{c:3,r:8,t:0}],
   path:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
         [11,1],[11,2],[10,2],[9,2],[8,2],[7,2],[6,2],[5,2],[4,2],[3,2],[2,2],[1,2],
         [1,3],[1,4],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],
         [11,6],[11,7],[10,7],[9,7],[8,7],[7,7],[6,7],[5,7],[4,7],[3,7],[2,7],[1,7],[0,7],
         [0,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9]],
   bgColor:'#050010',pathColor:'#3d2380',
   grassColors:['#080018','#0a001e','#060012','#0c0020','#07001a']},
  {id:10,name:'Shadow Remnant',icon:'🌑',
   desc:'เศษเสี้ยวสุดท้ายของจอมมารลุกขึ้นอีกครั้ง ศัตรูทุกชนิดรวมพลในศึกครั้งสุดท้ายที่แท้จริง',
   waves:13,enemyTypes:[0,2,1,5,8,10,6,7,3,4,9],bossChance:.13,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   isFinalStage:true,
   obstacles:[{c:3,r:6,t:2},{c:5,r:5,t:1},{c:8,r:2,t:0},{c:10,r:3,t:1},{c:2,r:6,t:0},{c:8,r:5,t:2}],
   maxTowers:6,story:'จอมมารพ่ายแพ้ไปแล้ว... แต่เงาของมันไม่ยอมสลายไปง่ายๆ เศษพลังมืดที่หลงเหลือรวมตัวกันเป็นกองทัพผีร้ายชุดสุดท้าย ทุกชนิดสัตว์ร้ายที่เคยพ่ายแพ้กลับมารวมพลังกันอีกครั้ง — นี่คือศึกแท้จริงที่จะยุติความมืดตลอดกาล!',
   path:[[0,5],[1,5],[1,6],[1,7],[1,8],[2,8],[3,8],[4,8],[4,7],[4,6],[4,5],[4,4],
         [5,4],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],[9,0],[9,1],[9,2],[9,3],[9,4],
         [10,4],[11,4],[11,5],[11,6],[11,7],[10,7],[9,7],[8,7],[7,7],
         [7,8],[7,9],[8,9],[9,9],[10,9],[11,9]],
   bgColor:'#03000a',pathColor:'#4a1a5e',
   grassColors:['#0a0014','#120020','#08000f','#150026','#0c0018']},
  /* ══ ACT 2 ═══════════════════════════════════════════════════════════════════════════ */
  {id:11,act:2,name:'ทะเลทรายเถ้าถ่าน',icon:'🔥',
   desc:'ร้อนระอุตลอดกาล ป้อมน้ำแข็งไร้ประโยชน์ที่นี่ นักรบเดือดยิ่งใกล้ตายยิ่งเร็ว',
   waves:9,enemyTypes:[0,11,3,1],bossChance:.06,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherMode:'fixed',weatherFixed:'heatwave',
   story:'ดินแดนแห่งเถ้าถ่านที่ไม่เคยมีฝนตกมานานนับร้อยปี ความร้อนเผาไหม้จิตใจนักรบจนกลายเป็นผู้บ้าคลั่ง ป้อมน้ำแข็งไม่อาจทำงานได้ในที่นี้',
   path:[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[10,3],[9,3],[8,3],[7,3],[6,3],[5,3],[4,3],[3,3],[2,3],[1,3],[0,3],
         [0,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],
         [11,6],[11,7],[11,8],[11,9]],
   obstacles:[{c:5,r:2,t:1},{c:8,r:4,t:0},{c:3,r:6,t:2},{c:7,r:6,t:0}],
   bgColor:'#2a0d00',pathColor:'#c47a2a',
   grassColors:['#4a1c00','#5c2400','#3a1400','#521e00','#421600']},
  {id:12,act:2,name:'ป่าแข็งนิรันดร์',icon:'❄️',
   desc:'หิมะปกคลุมตลอดกาล ศัตรูทุกตัวเร็วขึ้นและไม่โดนแช่แข็ง ระวังโกเลมที่แทบหยุดไม่ได้',
   waves:9,enemyTypes:[0,2,5,1,11,17],bossChance:.06,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherMode:'fixed',weatherFixed:'blizzard',
   story:'ป่าเก่าแก่ที่ถูกคำสาปให้เยือกแข็งชั่วนิรันดร์ พายุหิมะโหมกระหน่ำไม่หยุด ศัตรูทุกตัวปรับตัวกับความหนาวได้ — ไม่อาจชะลอได้อีกต่อไป',
   path:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
         [11,1],[11,2],[11,3],[11,4],[10,4],[9,4],[8,4],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,4],
         [1,5],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],
         [11,7],[11,8],[11,9]],
   obstacles:[{c:6,r:1,t:2},{c:3,r:2,t:0},{c:9,r:5,t:1},{c:5,r:7,t:0}],
   bgColor:'#010d1a',pathColor:'#5a8898',
   grassColors:['#051428','#081c35','#040e20','#09203d','#061830']},
  {id:13,act:2,name:'ทะเลสาบพิษ',icon:'🫧',
   desc:'หมอกพิษปกคลุม สลับกับฝนกรด และราตรีมืดมิด ผีดิบล่องลอยหายตัวเป็นระยะ',
   waves:10,enemyTypes:[0,12,2,3,14,17],bossChance:.07,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherChance:.8,
   story:'ทะเลสาบที่เต็มไปด้วยสารพิษจากดินแดนนรก ผีดิบเกิดขึ้นจากพลังงานมืดในน้ำ บางครั้งหายตัวไปในหมอกก่อนจะปรากฏตัวที่ประตูปราสาท',
   path:[[0,4],[1,4],[2,4],[2,3],[2,2],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[11,5],[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],[5,6],[4,6],[3,6],
         [3,7],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:5,r:3,t:0},{c:7,r:2,t:1},{c:9,r:4,t:2},{c:6,r:7,t:0}],
   bgColor:'#06100a',pathColor:'#3a6e4a',
   grassColors:['#061410','#0a1c16','#050e0b','#0b2018','#07160d']},
  {id:14,act:2,name:'หุบเขาสายฟ้า',icon:'⚡',
   desc:'ฟ้าผ่าตลอดเวลา ป้อม 50% สุ่มใช้งานไม่ได้ วิเวิร์นบินนำหน้า — ต้องการป้อมสายฟ้า',
   waves:10,enemyTypes:[6,7,18,11,17,1],bossChance:.07,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherMode:'fixed',weatherFixed:'lightning',
   story:'หุบเขาแห่งนี้เป็นสนามรบของเทพสายฟ้า — ฟ้าผ่าลงมาตลอดเวลาโดยไม่แบ่งแยก ป้อมต่างๆ ถูกทำลายสลับกัน ต้องสร้างป้อมสำรองไว้เสมอ',
   path:[[0,2],[1,2],[2,2],[2,1],[3,1],[4,1],[5,1],[6,1],[6,2],[6,3],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],
         [11,5],[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],[5,6],[4,6],[4,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:4,r:3,t:2},{c:8,r:3,t:0},{c:3,r:5,t:1},{c:9,r:7,t:0}],
   bgColor:'#060818',pathColor:'#4a5090',
   grassColors:['#080c22','#0c1030','#06091a','#0e1435','#090b1e']},
  {id:15,act:2,name:'ทุ่งพายุทราย',icon:'🌪️',
   desc:'พายุทอร์นาโดหมุนไม่หยุด สลับกับความร้อน ฝนกรด และหมอก ศัตรูหลากหลายชนิดรวมพล',
   waves:11,enemyTypes:[0,1,3,11,12,13,17,18],bossChance:.08,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherChance:.85,
   story:'ทุ่งโล่งกลางทะเลทรายที่พายุหมุนเกิดขึ้นไม่หยุด มอนสเตอร์จากทุกดินแดนรวมตัวกันที่นี่เพื่อเปิดประตูมิติ',
   path:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
         [11,1],[11,2],[10,2],[9,2],[8,2],[7,2],[6,2],[5,2],[4,2],[3,2],[2,2],[1,2],[0,2],
         [0,3],[0,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],
         [11,6],[11,7],[10,7],[9,7],[8,7],[7,7],[6,7],[5,7],[4,7],[3,7],[2,7],[1,7],[0,7],
         [0,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9]],
   obstacles:[{c:5,r:1,t:0},{c:9,r:3,t:1},{c:3,r:6,t:2},{c:7,r:8,t:0}],
   bgColor:'#1a1000',pathColor:'#aa7020',
   grassColors:['#2e1c00','#3c2400','#241400','#342000','#281800']},
  {id:16,act:2,name:'หนองน้ำมืด',icon:'🌑',
   desc:'ราตรีมืดมิดถาวร ศัตรู HP +50% เร็วขึ้น +40% ผีดิบและแม่ฝูงชุกชุม',
   waves:11,enemyTypes:[2,12,13,8,6,14,17,18],bossChance:.08,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherMode:'fixed',weatherFixed:'darknight',
   story:'หนองน้ำโบราณที่ไม่เคยมีแสงสว่างตั้งแต่ยุคสร้างโลก ความมืดทำให้ศัตรูเข้มแข็งกว่าปกติมาก — ต้องใช้ทุกพลังเพื่อรอดชีวิต',
   path:[[0,0],[0,1],[0,2],[1,2],[2,2],[3,2],[3,3],[3,4],[3,5],[4,5],[5,5],[6,5],[7,5],[7,4],[7,3],[7,2],[8,2],[9,2],[10,2],[11,2],
         [11,3],[11,4],[11,5],[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],[5,6],[5,7],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:2,r:1,t:0},{c:6,r:3,t:2},{c:9,r:3,t:1},{c:4,r:7,t:0}],
   bgColor:'#040408',pathColor:'#2a2850',
   grassColors:['#070710','#0a0a18','#050510','#0d0d20','#080812']},
  {id:17,act:2,name:'ยอดเขาน้ำแข็ง',icon:'🗻',
   desc:'หิมะถล่ม ฟ้าผ่า หมอกหนา — สภาพอากาศวิปริตสุดขีด โกเลมและนักรบเดือดยิ่งอันตราย',
   waves:12,enemyTypes:[5,1,11,13,3,14,15,17,18],bossChance:.09,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherChance:.85,
   story:'ยอดเขาสูงสุดของโลกที่สภาพอากาศผลัดเปลี่ยนอย่างไร้ความปรานี มอนสเตอร์ที่ปีนขึ้นมาถึงที่นี่ได้ล้วนแข็งแกร่งเกินธรรมดา',
   path:[[0,4],[1,4],[2,4],[2,3],[2,2],[2,1],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
         [11,1],[11,2],[11,3],[11,4],[11,5],[10,5],[9,5],[8,5],[7,5],[6,5],[5,5],[4,5],[3,5],[2,5],
         [2,6],[2,7],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:5,r:1,t:2},{c:8,r:1,t:0},{c:4,r:6,t:1},{c:9,r:6,t:2}],
   bgColor:'#03060e',pathColor:'#4a6280',
   grassColors:['#04081a','#060c24','#03050e','#080e28','#050a1c']},
  {id:18,act:2,name:'วิหารกาลเวลา',icon:'⏳',
   desc:'สภาพอากาศสุดโกลาหล 2 ชั้นพร้อมกัน ทุกศัตรูรวมพล ผีดิบและแม่ฝูงปะปนกัน',
   waves:12,enemyTypes:[12,13,8,9,11,2,14,15,16,17,18],bossChance:.10,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherChance:.90,
   story:'วิหารโบราณที่กาลเวลาบิดเบือน สภาพอากาศจากหลายมิติโถมใส่พร้อมกัน ศัตรูจากทุกยุคสมัยมาชุมนุมที่นี่',
   path:[[0,5],[1,5],[1,4],[1,3],[1,2],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[10,7],[9,7],[8,7],[7,7],[6,7],[5,7],[4,7],[3,7],[2,7],[1,7],
         [1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:3,r:2,t:2},{c:8,r:2,t:1},{c:5,r:6,t:0},{c:9,r:6,t:2}],
   bgColor:'#0a0515',pathColor:'#5e3880',
   grassColors:['#0e0820','#150c2e','#0a0618','#180e36','#0c0a1e']},
  {id:19,act:2,name:'ปราการโบราณ',icon:'🏛️',
   desc:'ศัตรูทุกชนิดในบทที่ 2 รวมพล สภาพอากาศสุ่มจาก pool ทั้ง 8 ทุกคลื่น',
   waves:13,enemyTypes:[0,2,3,5,8,11,12,13,6,14,15,16,17,18],bossChance:.10,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   maxTowers:6,weatherChance:.90,
   story:'ป้อมปราการโบราณที่เป็นจุดรวมพลสุดท้ายของกองทัพมืดบทที่ 2 ทุกอย่างที่ผ่านมาเป็นแค่การเตรียมตัวสำหรับที่นี่',
   path:[[0,5],[1,5],[2,5],[2,4],[2,3],[2,2],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[11,5],[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],[5,6],[4,6],[3,6],[3,7],[3,8],
         [4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[11,9]],
   obstacles:[{c:4,r:3,t:1},{c:8,r:3,t:2},{c:6,r:5,t:0},{c:5,r:7,t:1}],
   bgColor:'#0d0a18',pathColor:'#6050a0',
   grassColors:['#100c22','#160e2e','#0c0a1c','#1a1035','#100c24']},
  {id:20,act:2,name:'แกนโลก',icon:'🌍',
   desc:'ศึกสุดท้ายของบทที่ 2 — สภาพอากาศถาวรและเปลี่ยนทุกคลื่น ศัตรูทุกชนิดรวมพลครั้งใหญ่',
   waves:15,enemyTypes:[0,1,2,3,5,8,9,11,12,13,6,7,10,14,15,16,17,18],bossChance:.12,unlockedTowers:[0,1,2,3,4,5,6,7],unlocks:null,
   isFinalStage2:true,maxTowers:6,weatherMode:'permanent',weatherChance:.95,
   story:'แกนกลางของโลกกำลังแตกร้าว กองทัพมืดทุกชนิดหลั่งไหลออกมาจากรอยแยก สภาพอากาศบิดเบือนจนจำแนกไม่ได้ — นี่คือศึกสุดท้ายที่แท้จริงของบทที่ 2!',
   path:[[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[3,3],[4,3],[5,3],[5,2],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
         [11,2],[11,3],[11,4],[11,5],[10,5],[9,5],[8,5],[7,5],[6,5],[5,5],[4,5],[3,5],[2,5],[1,5],[0,5],
         [0,6],[0,7],[1,7],[2,7],[3,7],[4,7],[4,8],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9]],
   obstacles:[{c:6,r:2,t:2},{c:9,r:3,t:1},{c:2,r:6,t:0},{c:7,r:6,t:2},{c:9,r:8,t:0}],
   bgColor:'#030008',pathColor:'#3c2a7a',
   grassColors:['#060010','#0a0018','#050008','#0c001e','#080012']},
];

/* ══ BALANCE CONFIG ══ */
const DEFAULT_CFG={
  // Curve
  stageMult:.27,    // เดิม .22 → ด่านสูงหนักขึ้น (v3.18.4)
  waveMult:.13,     // เดิม .10 → wave ท้ายหนักขึ้น (v3.18.4)
  spdStageMult:.04, // ความเร็วเพิ่มช้าลง
  spdCap:2.0,       // เดิม 2.2
  enemyPerWaveBase:4,  // เดิม 5
  enemyPerWaveInc:2,   // เดิม 3 — ด่าน 9 wave 13 จะได้ 4+13×2=30 แทน 44
  bossChance:.10,   // เดิม .08 → boss ออกบ่อยขึ้นนิด (v3.18.4)
  // Monster base HP — ปรับ Golem และ Boss ให้สมดุล
  m_hp:[55,75,105,144,380,236,35,160,129,900,58,185,145,330,650,1500,700,110,220],  // +3 Act2 bosses +2 Act2 flyers
  m_spd:[1.4,1.0,1.15,.85,.5,.55,1.8,1.55,.65,.42,.72,1.15,1.3,0.65,0.44,0.36,0.42,1.65,0.80],
  m_rew:[10,10,15,20,60,30,5,20,30,100,10,18,22,45,85,170,90,18,35],
  // Tower — เพิ่ม DPS นิดหน่อยให้ผู้เล่นรู้สึกว่าป้อมมีพลัง
  t_dmg:[24,12,44,65,0,20,0,20,42,0],   // [cannon,ice,magic,sniper,support,archer,goldmine,thunder,void,time] — time dmg=0 ใช้ pulse slow แทน
  t_rng:[2.2,2.0,2.5,4.5,1.5,2.8,0,2.4,3.0,2.0], // time: รัศมีเริ่มต้น 2.0 ช่อง
  t_rate:[1.2,1.5,.8,.4,0,1.8,0,1.8,0.6,0], // time rate=0 (ใช้ pulse mechanic แทน)
  t_cost:[50,55,75,65,35,60,50,85,90,95], // time: 95 gold
  t_goldrate:5,t_goldamt:[2,4,6,8],
  // Game settings
  startGold:175,    // เดิม 200 → ลดเงินเริ่มต้น (v3.18.4)
  baseHP:20,
  spawnInterval:.7, // เดิม .65 — spawn ช้าลงเล็กน้อย ผู้เล่นมีเวลาตัดสินใจ
};
let CFG=JSON.parse(JSON.stringify(DEFAULT_CFG));
try{const s=localStorage.getItem('tq_cfg');if(s)CFG=Object.assign(JSON.parse(JSON.stringify(DEFAULT_CFG)),JSON.parse(s));}catch(e){}
/* ══ GRID / STATE ══ */
const COLS=12,ROWS=10,CS=80;
let currentStage=null,currentPath=null,currentPset=null;
let G=null,cv=null,ctx=null,rafId=null,speed=1,paused=false,toastTimer=null;
let _gpRectCache=null; // cache getBoundingClientRect('#gp') — invalidated on resize
// offscreen bg canvas — pre-renders static grid+terrain, invalidated when towers/digs change
let _bgCanvas=null,_bgCtx=null,_bgDirty=true;
function _invalidateBg(){_bgDirty=true;}
// BUG FIX: track devFromMenu at module scope so closeDev always knows origin
let devFromMenu=true;
let autoWave=false;
let isEndgame=false;
let egDiff=1; // 0=easy,1=normal,2=hard
let egRound=0;
const EG_WAVES_PER_ROUND=5; // Endgame: เลื่อน round ทุก 5 เวฟ → round = floor((wave-1)/5) (ดีไซน์ตั้งใจให้ไปถึง ~round 20)
const EG_DIFF_MULT=[0.7,1.0,1.8];
const EG_SCORE_MULT=[1.0,1.5,2.5]; // คะแนน Endgame คูณตามความยาก (ง่าย/ปกติ/ยาก) — ให้คนเล่นยากได้คะแนนคุ้มและขึ้น TOP 10 อย่างเป็นธรรม
const EG_DIFF_NAMES=['ง่าย','ปกติ','ยาก'];
const MAT_DROP_RATES=[
  [0.10,0.14,0.20], // 0: 🪨 เศษหินมืด
  [0.05,0.08,0.12], // 1: 🔘 แกนเวทอสูร
  [0.04,0.05,0.08], // 2: 🌟 ผงดาวตก (v3.5.5: ง่าย 2%→4%, ปกติ 4%→5%, ยาก 6%→8% — เดิมเป็น bottleneck เกินไป)
]; // [matIdx][egDiff] — % ตายตัว ไม่สเกลตามเวฟ สเกลตามความยาก Endgame เท่านั้น
function rollEndgameMaterialDrops(){
  const drops=[];
  for(let mi=0;mi<3;mi++){
    if(Math.random()<MAT_DROP_RATES[mi][egDiff]){ addMaterial(mi,1); drops.push(mi); }
  }
  return drops;
}
/* Endgame map — สุ่มใหม่ทุกครั้งที่เริ่ม/เล่นใหม่ (ดู _doStartEndgame). ค่าเริ่มต้น = path ด่าน 2 */
let EG_PATH=[
  [0,1],[1,1],[2,1],[3,1],[3,2],[3,3],[3,4],[3,5],[4,5],[5,5],[6,5],
  [7,5],[7,4],[7,3],[7,2],[8,2],[9,2],[10,2],[11,2],
  [11,3],[11,4],[10,4],[9,4],[8,4],[8,5],[8,6],[8,7],
  [9,7],[10,7],[11,7],[11,8],[10,8],[9,8],[8,8],[7,8],
  [6,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]
];
let _egLastMap=-1; // กันสุ่มได้แมพเดิมซ้ำติดกัน
let selectedTowersForStage=[];
let pendingStageIndex=-1;
let stageMaxTowers=6;
let towerSelMode='story'; // 'story' | 'endgame'

function setStage(si){
  currentStage=STAGES[si];
  currentPath=currentStage.path;
  currentPset=new Set(currentPath.map(p=>p[0]+','+p[1]));
  _invalidateBg();
}
function mkState(){
  return{towers:[],enemies:[],projs:[],particles:[],fxRings:[],fxTrails:[],fxFlash:[],
    dmgNums:[],  /* floating damage numbers */
    gold:CFG.startGold,hp:CFG.baseHP,maxHp:CFG.baseHP,
    wave:0,score:0,selTwr:-1,waveActive:false,
    over:false,win:false,queue:[],spawnT:0,mx:-1,my:-1,
    selTowerInfo:null,gmTimers:{},shakeT:0,hitStopT:0,waveBanner:null,bossWarning:null,mergeHintPulseT:0,
    kills:0,comboN:0,comboT:0,maxCombo:0,dmgBuff:1,goldWaveMult:1,eliteWave:false,towerStunT:0,
    dmgByType:{},battleT:0,egMilestones:{}, /* สถิติจบเกม + หมุดหมาย Endgame */
    skillId:null,skillCd:0,skillCdMax:0,skillAiming:false, /* ⭐ การ์ดสกิลกดเอง */
    skillDmgMult:1,skillRateMult:1,skillDmgT:0,skillGoldMult:0,skillGoldT:0,skillBlockT:0,
    weather:mkWeatherState(),
    obstacles:{},dugCells:new Set(),obstaclesCleared:0,selDig:false}; /* 🪨 ระบบ obstacle */
}
// ราคาขุด — เพิ่มขึ้นทุกครั้งที่ขุด เหมือน tower cost scaling
const OBS_BASE=[25,50,90]; // t0=พุ่มไม้, t1=หิน, t2=ต้นไม้
const OBS_NAMES=['พุ่มไม้','หิน','ต้นไม้'];
function getDigCost(type){
  if(!G) return OBS_BASE[type];
  return Math.round(OBS_BASE[type]*(1+G.obstaclesCleared*.3));
}
// คืนชนิดฉาก (0=พุ่มไม้,1=หิน,2=ต้นไม้) หรือ null ถ้าไม่มี/ขุดแล้ว
function getDecoType(c,r){
  if(!G||!currentStage) return null;
  if(G.dugCells.has(c+','+r)) return null;
  if(G.obstacles[c+','+r]!==undefined) return G.obstacles[c+','+r];
  const h=(c*17+r*13+currentStage.id*31)%100;
  if(h<22) return 2;
  if(h<38) return 1;
  if(h<48) return 0;
  return null;
}
function digCell(c,r){
  if(!G||G.over||G.win||paused) return false;
  if(currentPset.has(c+','+r)) return false;
  if(G.towers.find(t=>t.col===c&&t.row===r)) return false;
  const ot=getDecoType(c,r);
  if(ot===null){showToast('❌ ไม่มีฉากให้ขุดที่นี่');return false;}
  const cost=getDigCost(ot);
  if(G.gold<cost){showToast('💰 ต้องการ '+cost+' ทองขุด'+OBS_NAMES[ot]+'!');return false;}
  G.gold-=cost; G.obstaclesCleared++; G.dugCells.add(c+','+r);
  delete G.obstacles[c+','+r]; _invalidateBg();
  const bx=c*CS+CS/2,by=r*CS+CS/2;
  if(G.fxRings.length<40) G.fxRings.push({x:bx,y:by,r:0,maxR:CS*1.5,life:.5,lw:2,col:'#a5d6a7'});
  for(let k=0;k<8;k++){const a=k/8*Math.PI*2,sp=1.2+Math.random()*1.5;
    G.particles.push({x:bx,y:by,txt:'▪',col:['#8d6e63','#9e9e9e','#558b2f'][ot],life:.7,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2});}
  addParticle(bx,by-14,'⛏️','#ffe082');
  updateHUD(); return true;
}
function toggleDigTool(){
  if(!G||G.over||G.win||paused) return;
  G.selDig=!G.selDig;
  const db=document.getElementById('digBtn');
  if(G.selDig){
    G.selTwr=-1;
    for(let i=0;i<9;i++){const b=document.getElementById('tb'+i);if(b)b.classList.remove('sel');}
    if(db) db.classList.add('sel');
  } else {
    if(db) db.classList.remove('sel');
  }
}
/* ══ WEATHER SYSTEM ══ */
function mkWeatherState(){
  return {
    active:null,
    rangeMult:1, spdMult:1, hpMult:1,
    slowImmune:false, iceDisabled:false, iceRateMult:1,
    splashMult:1, dodgeChance:0, goldMineMult:1, stormDodge:false,
    struckTowers:new Set(), lightningTimer:0,
  };
}
const WEATHERS=[
  {id:'fog',icon:'🌫️',name:'หมอกหนา',desc:'ระยะป้อมลด 50%',color:'rgba(180,180,200,.18)',
   apply:(G)=>{if(G.weather)G.weather.rangeMult=0.5;},
   unapply:(G)=>{if(G.weather)G.weather.rangeMult=1;}},
  {id:'blizzard',icon:'🧊',name:'พายุหิมะ',desc:'ศัตรูเร็วขึ้น 50%, ไม่โดนแช่แข็ง/สโล',color:'rgba(100,200,255,.15)',
   apply:(G)=>{if(G.weather){G.weather.spdMult=1.5;G.weather.slowImmune=true;}},
   unapply:(G)=>{if(G.weather){G.weather.spdMult=1;G.weather.slowImmune=false;}}},
  {id:'lightning',icon:'⚡',name:'พายุฟ้าผ่า',desc:'ป้อม 50% ใช้งานไม่ได้ สุ่มใหม่ทุก 10 วินาที',color:'rgba(255,240,100,.1)',
   apply:(G)=>{if(G.weather)G.weather.lightningTimer=0;applyLightningStrike();},
   unapply:(G)=>{if(G.weather){G.weather.struckTowers=new Set();G.weather.lightningTimer=0;}}},
  {id:'darknight',icon:'🌑',name:'ราตรีมืดมิด',desc:'ศัตรู HP +50%, เร็วขึ้น +40%',color:'rgba(20,0,40,.55)',
   apply:(G)=>{if(G.weather){G.weather.hpMult=1.5;G.weather.spdMult=1.4;}},
   unapply:(G)=>{if(G.weather){G.weather.hpMult=1;G.weather.spdMult=1;}}},
  {id:'heatwave',icon:'🔥',name:'คลื่นความร้อน',desc:'ป้อมน้ำแข็งยิงไม่ทำงาน',color:'rgba(255,120,0,.12)',
   apply:(G)=>{if(G.weather)G.weather.iceDisabled=true;},
   unapply:(G)=>{if(G.weather)G.weather.iceDisabled=false;}},
  {id:'rain',icon:'🌧️',name:'ฝนตกหนัก',desc:'splash ปืนใหญ่ & เวทมนตร์ลด 70%',color:'rgba(50,100,200,.15)',
   apply:(G)=>{if(G.weather)G.weather.splashMult=0.3;},
   unapply:(G)=>{if(G.weather)G.weather.splashMult=1;}},
  {id:'tornado',icon:'🌪️',name:'พายุทอร์นาโด',desc:'ศัตรูหลบกระสุนได้ 50%',color:'rgba(150,150,150,.2)',
   apply:(G)=>{if(G.weather)G.weather.dodgeChance=0.5;},
   unapply:(G)=>{if(G.weather)G.weather.dodgeChance=0;}},
  {id:'storm',icon:'⛈️',name:'พายุฝนฟ้าคะนอง',desc:'ศัตรูเร็วขึ้น 30% + อากาศยานหลบ 25%',color:'rgba(80,80,180,.22)',
   apply:(G)=>{if(G.weather){G.weather.spdMult=1.3;G.weather.dodgeChance=0.25;}},
   unapply:(G)=>{if(G.weather){G.weather.spdMult=1;G.weather.dodgeChance=0;}}},
  {id:'sun',icon:'☀️',name:'แดดแผดเผา',desc:'เหมืองทองหยุดทำงาน',color:'rgba(255,220,0,.1)',
   apply:(G)=>{if(G.weather)G.weather.goldMineMult=0;},
   unapply:(G)=>{if(G.weather)G.weather.goldMineMult=1;}},
];
const STAGE_WEATHER=[
  ['fog','rain','sun'],                                          // Stage 1
  ['fog','darknight','rain'],                                    // Stage 2
  ['heatwave','tornado','storm','fog'],                         // Stage 3
  ['heatwave','sun','tornado','storm','rain'],                  // Stage 4
  ['sun','rain','blizzard'],                                    // Stage 5
  ['lightning','blizzard','tornado','storm'],                   // Stage 6
  ['fog','rain','tornado','storm','heatwave'],                  // Stage 7
  ['darknight','lightning','blizzard','tornado','storm'],       // Stage 8
  ['darknight','blizzard','lightning','tornado','storm','heatwave'], // Stage 9
  ['darknight','lightning','blizzard','tornado','storm','fog','rain'], // Stage 10: full chaos
  ['darknight','lightning','blizzard','tornado','storm','fog','rain','heatwave','sun'], // Stage 11: all 9
  // Act 2 pools (ids 11-20)
  ['heatwave','sun','tornado'],              // Stage 12 (id 11) — fixed heatwave, but pool for popup
  ['blizzard','fog','rain'],                 // Stage 13 (id 12) — fixed blizzard
  ['fog','rain','darknight','storm'],        // Stage 14 (id 13) — poison lake
  ['lightning','tornado','storm'],           // Stage 15 (id 14) — fixed lightning, bat stage
  ['tornado','storm','heatwave','rain','fog','sun'], // Stage 16 (id 15) — sandstorm chaos
  ['darknight','rain','fog'],                // Stage 17 (id 16) — fixed darknight
  ['blizzard','lightning','fog','darknight'], // Stage 18 (id 17) — ice peak
  ['darknight','lightning','blizzard','tornado','storm'], // Stage 19 (id 18) — time temple
  ['fog','blizzard','lightning','darknight','heatwave','rain','tornado','storm','sun'], // Stage 20 (id 19) — all 9
  ['fog','blizzard','lightning','darknight','heatwave','rain','tornado','storm','sun'], // Stage 21 (id 20) — all 9 permanent
];
function rollWeather(stageId){
  if(!G) return;
  // permanent-fixed weather: set once in initGame, never re-roll
  if(currentStage&&(currentStage.weatherMode==='fixed'||currentStage.weatherMode==='permanent')) return;
  if(!G.weather) G.weather=mkWeatherState();
  const chance=(currentStage&&currentStage.weatherChance)||0.65;
  if(Math.random()>chance){clearWeather();return;}
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
function toggleWeatherPopup(){
  if(!G) return;
  const popup=document.getElementById('weatherPopup');
  if(!popup) return;
  if(popup.style.display!=='none'){closeWeatherPopup();return;}
  // build pool for current stage/endgame
  let pool=[];
  if(typeof isEndgame!=='undefined'&&isEndgame){
    pool=['fog','blizzard','lightning','darknight','heatwave','rain','tornado','storm','sun'];
  } else if(currentStage){
    const ids=STAGE_WEATHER[Math.min(currentStage.id,STAGE_WEATHER.length-1)]||[];
    pool=ids;
  }
  const activeId=G.weather&&G.weather.active?G.weather.active:null;
  const activeW=activeId?WEATHERS.find(x=>x.id===activeId):null;
  // header
  let html='<div id="wpHeader">'+(activeW?activeW.icon+' สภาพอากาศปัจจุบัน':'🌤️ ไม่มีสภาพอากาศ')+'</div>';
  if(pool.length){
    html+='<div id="wpSubtitle">สภาพอากาศที่อาจเกิดในด่านนี้</div>';
    html+='<div id="wpList">';
    pool.forEach(wid=>{
      const w=WEATHERS.find(x=>x.id===wid);
      if(!w) return;
      const isActive=wid===activeId;
      const col=isActive?getWeatherColor(wid):'rgba(255,255,255,.08)';
      const border=isActive?getWeatherColor(wid)+'88':'rgba(255,255,255,.12)';
      html+=`<div class="wp-row${isActive?' wp-row-active':''}" style="border-color:${border};background:${col}${isActive?'22':''};">
        <span class="wp-row-icon">${w.icon}</span>
        <div class="wp-row-info">
          <div class="wp-row-name">${w.name}${isActive?' <span class="wp-active-badge">กำลังเกิด</span>':''}</div>
          <div class="wp-row-desc">${w.desc}</div>
        </div>
      </div>`;
    });
    html+='</div>';
  } else if(!activeW){
    html+='<div id="wpSubtitle" style="margin-top:6px;">ไม่มีสภาพอากาศพิเศษ</div>';
  }
  html+='<div id="wpClose" onclick="closeWeatherPopup()">✕ ปิด</div>';
  popup.innerHTML=html;
  popup.style.display='block';
  document.addEventListener('click',_wpOutsideClick,{once:true,capture:true});
}
function closeWeatherPopup(){
  const popup=document.getElementById('weatherPopup');
  if(popup) popup.style.display='none';
}
function _wpOutsideClick(e){
  const popup=document.getElementById('weatherPopup');
  const hud=document.getElementById('weatherHud');
  if(popup&&!popup.contains(e.target)&&!hud.contains(e.target)) closeWeatherPopup();
  else if(popup&&popup.style.display!=='none') document.addEventListener('click',_wpOutsideClick,{once:true,capture:true});
}
function getWeatherColor(id){
  const c={fog:'#b0bec5',blizzard:'#80d8ff',lightning:'#ffe082',
    darknight:'#ce93d8',heatwave:'#ff8a65',rain:'#64b5f6',tornado:'#e0e0e0',storm:'#9fa8da',sun:'#ffcc02'};
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
  const count=Math.max(1,Math.ceil(n*0.5));
  // store direct tower references (not indices) so selling/placing towers mid-storm can't desync the struck set
  const pool=G.towers.slice();
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  G.weather.struckTowers=new Set(pool.slice(0,count));
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
  if(typeof hideTowerPopup==='function') hideTowerPopup();
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
  const _smh=document.getElementById('egMilestoneHud');if(_smh){_smh.style.display='none';_smh.textContent='';}
  document.getElementById('stageBadge').textContent='S'+(s.id+1)+' '+s.icon;
  // BUG FIX: reset selTwr highlight on restart
  for(let i=0;i<9;i++){const b=document.getElementById('tb'+i);if(b)b.classList.remove('sel','locked-tower');}
  paused=false;speed=1;autoWave=false;_settingsPausedGame=false;
  document.getElementById('speedBtn').textContent='1×';
  document.getElementById('pauseBtn').textContent='⏸';
  document.getElementById('settingsScreen').style.display='none';
  const ab=document.getElementById('autoBtn');if(ab){ab.classList.remove('on');ab.textContent='🔁 อัตโนมัติ';}
  // โหลด predefined obstacles + reset dig state
  G.obstacles={};G.dugCells=new Set();G.obstaclesCleared=0;G.selDig=false;
  (currentStage.obstacles||[]).forEach(o=>{ G.obstacles[o.c+','+o.r]=o.t; });
  const _db=document.getElementById('digBtn');if(_db)_db.classList.remove('sel');
  // 🌦 apply fixed/permanent weather at game start
  if(currentStage.weatherMode==='fixed'&&currentStage.weatherFixed){
    const _fw=WEATHERS.find(x=>x.id===currentStage.weatherFixed);
    if(_fw) applyWeather(_fw);
  } else if(currentStage.weatherMode==='permanent'){
    rollWeather(currentStage.id);
  }
  if(currentStage.id===0&&!localStorage.getItem('tq_hint_dig')){
    localStorage.setItem('tq_hint_dig','1');
    setTimeout(()=>showToast('💡 กด ⛏️ เครื่องมือขุด เพื่อขุดฉากออกและสร้างป้อมในช่องนั้น'),2500);
  }
  updateTowerPanel();
  updateHUD();
  updateMenuStats();
  _initRunSkill(); // ⭐ ตั้งค่าการ์ดสกิลที่ใส่ไว้ (อ่าน tq_askill; ไม่ consume)
  startBgm();
  let last=performance.now(),_renderTick=0;
  function loop(ts){
    /* BUG FIX: guard against stale loops after goMenu/goStageSelect */
    if(!G){return;}
    if(paused){rafId=requestAnimationFrame(loop);return;}
    const rdt=(ts-last)/1000; last=ts;
    const dt=Math.min(rdt,.1)*speed;
    _renderTick++;
    const _doRender=speed<=1||(_renderTick%speed===0);
    if(G.hitStopT>0){ G.hitStopT-=rdt; render(); }
    else { update(dt); if(_doRender) render(); }
    if(!G.over&&!G.win) rafId=requestAnimationFrame(loop);
  }
  rafId=requestAnimationFrame(loop);
}

function restartGame(){
  document.getElementById('endOverlay').style.display='none';
  if(isEndgame) _doStartEndgame();
  else{ initGame(); if(typeof applyTalents==='function') applyTalents(); }
}
function goStageSelect(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  stopBgm();
  G=null;paused=false;
  document.getElementById('endOverlay').style.display='none';
  document.getElementById('pauseScreen').style.display='none';
  openStageSelect();
}
function goMenu(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  stopBgm();
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
  btn.textContent=autoWave?'🔁 อัตโนมัติ ON':'🔁 อัตโนมัติ';
  showToast(autoWave?'🔁 อัตโนมัติ ON — ส่งคลื่นอัตโนมัติ':'⏹ อัตโนมัติ OFF');
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
  const inGame=G&&!G.over&&!G.win;
  if(inGame&&document.getElementById('pauseScreen').style.display==='flex') return;
  if(inGame){
    if(!paused){paused=true;document.getElementById('pauseBtn').textContent='▶';_settingsPausedGame=true;}
    else _settingsPausedGame=false;
  }
  document.getElementById('settSfxBtn').textContent=_sfxOn?'🔊':'🔇';
  document.getElementById('settVolSlider').value=Math.round(_sfxVol*100);
  document.getElementById('settingsScreen').style.display='flex';
}
function closeSettings(){
  document.getElementById('settingsScreen').style.display='none';
  if(_settingsPausedGame){paused=false;document.getElementById('pauseBtn').textContent='⏸';_settingsPausedGame=false;}
}
function updateTowerPanel(){
  const active=selectedTowersForStage.length>0?selectedTowersForStage:(currentStage.unlockedTowers||[0,1,2,3,4,5,6,7]);
  for(let i=0;i<9;i++){
    const btn=document.getElementById('tb'+i);
    if(!btn) continue;
    const locked=!active.includes(i);
    btn.style.display=locked?'none':'flex';
    btn.classList.remove('locked-tower','sel');
    const tc=document.getElementById('tc'+i);
    if(tc) tc.textContent='💰'+getTowerCost(i);
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
      case 'void':{// 🌑 eerie detuned void warp
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sawtooth'; o.frequency.setValueAtTime(300,ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(90,ac.currentTime+.26);
        og.gain.setValueAtTime(.4,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.3);
        o.connect(og); og.connect(v);
        const o2=ac.createOscillator(),o2g=ac.createGain();
        o2.type='sine'; o2.frequency.setValueAtTime(307,ac.currentTime); // detune for dissonance
        o2.frequency.exponentialRampToValueAtTime(94,ac.currentTime+.26);
        o2g.gain.setValueAtTime(.25,ac.currentTime); o2g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.3);
        o2.connect(o2g); o2g.connect(v);
        o.start(); o.stop(ac.currentTime+.3); o2.start(); o2.stop(ac.currentTime+.3); break;}
      case 'gacha_big':{// 🎉 triumphant fanfare for legendary/epic reveals
        [523,659,784,1047,1319].forEach((freq,i)=>{
          const o=ac.createOscillator(),og=ac.createGain();
          o.type='triangle'; o.frequency.setValueAtTime(freq,ac.currentTime+i*.07);
          og.gain.setValueAtTime(.3,ac.currentTime+i*.07); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+i*.07+.4);
          o.connect(og); og.connect(v); o.start(ac.currentTime+i*.07); o.stop(ac.currentTime+i*.07+.4);
        });
        const sh=ac.createOscillator(),shg=ac.createGain(); // high shimmer tail
        sh.type='sine'; sh.frequency.setValueAtTime(1568,ac.currentTime+.32);
        shg.gain.setValueAtTime(.12,ac.currentTime+.32); shg.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.85);
        sh.connect(shg); shg.connect(v); sh.start(ac.currentTime+.32); sh.stop(ac.currentTime+.85); break;}
      case 'gacha_small':{// soft reveal chime for low rarities
        const o=ac.createOscillator(),og=ac.createGain();
        o.type='sine'; o.frequency.setValueAtTime(660,ac.currentTime);
        o.frequency.setValueAtTime(990,ac.currentTime+.06);
        og.gain.setValueAtTime(.22,ac.currentTime); og.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.25);
        o.connect(og); og.connect(v); o.start(); o.stop(ac.currentTime+.25); break;}
    }
  }catch(e){}
}
/* tower type → sound name */
const _TSND=['cannon','ice','magic','sniper',null,'archer',null,'thunder','void'];
// ambient particle cooldown per tower type (seconds, 0 = no ambient)
const _TAMB=[1.4,1.1,.75,0,0,0,0,.55,0,0,0];
let _sfxLastDie=0; /* throttle death sounds */
function toggleSfx(){
  _sfxOn=!_sfxOn;
  const btn=document.getElementById('sfxBtn');
  if(btn) btn.textContent=_sfxOn?'🔊':'🔇';
  if(_sfxOn){_resumeAC();_playSound('wave_clear');}
}

/* ══ BGM — synthesized looping background music (Web Audio) ══ */
let _bgmOn=true,_bgmTimer=null,_bgmStep=0,_bgmNext=0,_bgmGain=null;
/* dark/heroic minor loop — bass walk + soft arpeggio (Am feel), 16 steps */
const _BGM_BASS=[110,110,82,82,98,98,73,73,110,110,82,82,98,98,87,65];
const _BGM_ARP =[440,330,392,494,523,392,440,330,587,440,494,392,523,440,392,330];
const _BGM_TEMPO=0.3; // sec per step
function _bgmNote(freq,t,dur,type,vol){
  const ac=_getAC(); if(!ac||!_bgmGain) return;
  const o=ac.createOscillator(),g=ac.createGain();
  o.type=type; o.frequency.setValueAtTime(freq,t);
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+.03);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g); g.connect(_bgmGain); o.start(t); o.stop(t+dur+.03);
}
function _bgmSchedule(){
  const ac=_getAC(); if(!ac) return;
  while(_bgmNext<ac.currentTime+0.2){
    const s=_bgmStep%16;
    _bgmNote(_BGM_BASS[s],_bgmNext,_BGM_TEMPO*0.95,'triangle',0.55);   // bass
    _bgmNote(_BGM_ARP[s], _bgmNext,_BGM_TEMPO*0.6,'sine',0.16);        // melody
    if(s%4===0) _bgmNote(_BGM_ARP[s]*2,_bgmNext,_BGM_TEMPO*0.4,'sine',0.07); // sparkle on beat
    _bgmNext+=_BGM_TEMPO; _bgmStep++;
  }
}
function startBgm(){
  if(!_bgmOn) return;
  const ac=_getAC(); if(!ac) return; _resumeAC();
  if(!_bgmGain){_bgmGain=ac.createGain();_bgmGain.gain.value=0.05;_bgmGain.connect(ac.destination);}
  if(_bgmTimer) return; // already playing
  _bgmNext=ac.currentTime+0.1;
  _bgmSchedule();
  _bgmTimer=setInterval(_bgmSchedule,70);
}
function stopBgm(){ if(_bgmTimer){clearInterval(_bgmTimer);_bgmTimer=null;} }
function toggleBgm(){
  _bgmOn=!_bgmOn;
  if(_bgmOn) startBgm(); else stopBgm();
  const b=document.getElementById('settBgmBtn'); if(b) b.textContent=_bgmOn?'🎵':'🔇';
}

/* ══ WAVE ══ */
function startWave(){
  if(!G||G.waveActive||G.over||G.win||paused) return;
  hideWavePreview();
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
  // wave cinematic: banner + screen flash + particle burst
  const _wqHasBoss=G.queue.includes(4)||G.queue.includes(9);
  G.waveBanner={text:_wqHasBoss?'💀  BOSS WAVE  '+G.wave:'⚔️  WAVE  '+G.wave,t:_wqHasBoss?2.0:1.5};
  const _wfc=_wqHasBoss?'rgba(255,80,30,.22)':'rgba(255,220,100,.15)';
  G.fxFlash.push({x:COLS*CS/2,y:ROWS*CS/2,r:Math.max(COLS,ROWS)*CS*.75,life:.35,maxLife:.35,col:_wfc});
  const _wpc=_wqHasBoss?'#ff6d00':'#ffe082';
  for(let k=0;k<10;k++){const wa=k/10*Math.PI*2;G.particles.push({x:COLS*CS/2+Math.cos(wa)*COLS*CS*.5,y:ROWS*CS/2+Math.sin(wa)*ROWS*CS*.45,txt:'·',col:_wpc,life:.45+Math.random()*.25,vx:Math.cos(wa+Math.PI)*(2+Math.random()*2.5),vy:Math.sin(wa+Math.PI)*(2+Math.random()*2.5),decay:3,scale:.55+Math.random()*.35});}
  if(_wqHasBoss) G.shakeT=Math.max(G.shakeT||0,.18);
}

/* 📊 สร้างบล็อกสถิติจบเกม: ฆ่า/คอมโบ/ดาเมจรวม + DPS แต่ละชนิดป้อม */
function _renderEndStats(){
  const el=document.getElementById('endStats');
  if(!el||!G){return;}
  const bt=Math.max(1,G.battleT||0), dbt=G.dmgByType||{};
  const types=Object.keys(dbt).map(k=>+k).filter(k=>dbt[k]>0).sort((a,b)=>dbt[b]-dbt[a]);
  const fmt=n=>n>=1000?(n/1000).toFixed(1)+'k':Math.round(n);
  let rows='';
  if(types.length){
    const maxD=dbt[types[0]];
    rows=types.map(t=>{
      const dps=Math.round(dbt[t]/bt), pct=Math.max(4,Math.round(dbt[t]/maxD*100));
      return `<div class="es-row"><span class="es-ico" style="border-color:${TACCENT[t]}">${TICONS[t]}</span>`+
        `<div class="es-bar-wrap"><div class="es-bar" style="width:${pct}%;background:${TACCENT[t]}"></div></div>`+
        `<span class="es-dps">${dps}/s</span></div>`;
    }).join('');
  }
  const totalD=types.reduce((s,t)=>s+dbt[t],0);
  el.innerHTML=
    `<div class="es-top"><span>💀 ${G.kills||0} ฆ่า</span><span>⚡ คอมโบสูงสุด ×${G.maxCombo||1}</span><span>🗡️ ${fmt(totalD)} ดาเมจ</span></div>`+
    (rows?`<div class="es-title">⚙️ DPS แต่ละป้อม</div>${rows}`:'');
  el.style.display='block';
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
  const gemGain=saveProgress(si, stars);
  // 🎒 drop ไอเทมใส่กระเป๋าหลังจบด่าน
  if(win){
    const _bids=['gold_pot','hp_pot','dmg_pot'];
    const _bchance=stars===3?.7:stars===2?.45:.2;
    if(Math.random()<_bchance){
      const _bid=_bids[Math.floor(Math.random()*_bids.length)];
      addBagItem(_bid,1);
      const _bdef=BAG_ITEM_DEFS.find(d=>d.id===_bid);
      setTimeout(()=>showToast('🎒 ได้รับ '+_bdef.icon+' '+_bdef.name+'!'),1300);
    }
    if(stars===3&&Math.random()<.2) addBagItem('shard_e',1);
    else if(stars>=2&&Math.random()<.4) addBagItem('shard_r',1);
    else addBagItem('shard_c',1);
  }
  updateMenuStats();
  document.getElementById('endTitle').textContent=win?'🏆 ชัยชนะ!':'💀 เกมจบ';
  /* 🌟 สร้างดาวเป็น span ทีละดวงเพื่อ stagger animation pop-in */
  const starRow=document.getElementById('starRow');
  starRow.innerHTML='';
  for(let i=0;i<3;i++){
    const sp=document.createElement('span');
    sp.className='star-ico'+(i<stars?' filled':'');
    sp.textContent=i<stars?'★':'☆';
    sp.style.animationDelay=(i*0.12)+'s';
    starRow.appendChild(sp);
  }
  document.getElementById('endScore').textContent=win?currentStage.name+' cleared!':'Try again!';
  /* 🎁 กรอบเรืองแสง + ไอคอนกล่องรางวัลตามระดับดาว (สไตล์ Clash Royale) */
  const obox=document.getElementById('endOverlay').querySelector('.obox');
  obox.classList.remove('tier-gold','tier-silver','tier-bronze','tier-lose');
  const chest=document.getElementById('endChestIcon');
  if(!win){ chest.textContent='💀'; obox.classList.add('tier-lose'); }
  else if(stars>=3){ chest.textContent='👑'; obox.classList.add('tier-gold'); }
  else if(stars===2){ chest.textContent='🎁'; obox.classList.add('tier-silver'); }
  else { chest.textContent='📦'; obox.classList.add('tier-bronze'); }
  /* 💎 แสดง Soul Gems ที่ได้รับ (เฉพาะตอนทำลายสถิติดาวใหม่) */
  const rewardRow=document.getElementById('endRewardRow');
  if(gemGain>0){
    document.getElementById('endGemGain').textContent='+'+gemGain;
    rewardRow.style.display='inline-flex';
  } else {
    rewardRow.style.display='none';
  }
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
  _renderEndStats(); // 📊 สถิติจบเกม
  /* ══ FINAL STAGE VICTORY ══ */
  if(win&&currentStage.isFinalStage){
    document.getElementById('endTitle').textContent='👑 ยุติความมืดแล้ว!';
    document.getElementById('endScore').textContent='🏆 คุณเอาชนะจอมมารและยุติความมืดตลอดกาล!';
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
  if(G.waveActive) G.battleT=(G.battleT||0)+dt; // เวลาสู้จริง (สำหรับ DPS จบเกม)
  if(G.towerStunT>0) G.towerStunT=Math.max(0,G.towerStunT-dt);
  _tickSkill(dt); // ⭐ cooldown + บัฟสกิล
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
    if(!e.alive){G.enemies[i]=G.enemies[G.enemies.length-1];G.enemies.pop();continue;}
    if(e.slowT>0){e.slowT-=dt;if(e.slowT<=0)e.slow=1;}
    // 🌀 Time Tower: _timeStopT = freeze, _timeSlowT = slow to _timeSlow multiplier
    if(e._timeStopT>0){e._timeStopT-=dt;if(e._timeStopT>0)e.slow=Math.min(e.slow,0);}
    if(e._timeSlowT>0){e._timeSlowT-=dt;if(e._timeSlowT>0)e.slow=Math.min(e.slow,e._timeSlow||.5);}
    if(e._enrageT>0) e._enrageT-=dt;
    if(e._dodgeFlash>0) e._dodgeFlash-=dt;
    // 🧱 Berserk Sprint
    if(e.ti===11&&!e._berserk&&e.hp<e.mhp*.35){e._berserk=true;e._bspdMult=1.8;
      G.particles.push({x:e.x,y:e.y-ESIZES[11]-8,txt:'💢 BERSERK!',col:'#ff1744',life:1.2,vy:-1.4,vx:0,decay:.9,scale:1.1});
      G.fxRings.push({x:e.x,y:e.y,r:2,maxR:ESIZES[11]*2,life:.4,lw:3,col:'#ff1744',delay:0});}
    // 💨 Phantom Phase
    if(e.ti===12){e._phaseTimer=(e._phaseTimer===undefined?8:e._phaseTimer)-dt;
      if(e._phaseTimer<=0){e._phaseT=1.5;e._phaseTimer=8;
        G.fxRings.push({x:e.x,y:e.y,r:2,maxR:ESIZES[12]*2,life:.5,lw:2,col:'#80deea',delay:0});}
      if(e._phaseT>0) e._phaseT-=dt;}
    // 👺 โกบลิน: Pack Rush — throttle O(n²) เป็นทุก 0.25s
    if(e.ti===0){
      e._packT=(e._packT||0)-dt;
      if(e._packT<=0){
        e._packT=0.25; e._packBoost=false;
        for(const o of G.enemies){
          if(o!==e&&o.alive&&o.ti===0&&Math.hypot(o.x-e.x,o.y-e.y)<CS*1.2){e._packBoost=true;break;}
        }
      }
    }
    // 🐍 นาคาราช: Regen + Venom Pulse + Serpent Spawn
    if(e.ti===14){
      if(e.hp<e.mhp) e.hp=Math.min(e.mhp,e.hp+e.mhp*.015*dt);
      e._venomPulseT=(e._venomPulseT===undefined?8:e._venomPulseT)-dt;
      if(e._venomPulseT<=0){
        e._venomPulseT=8;
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:2.5*CS,life:.65,lw:3,col:'#76ff03',delay:0});
        G.towers.forEach(tw=>{if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=2.5*CS) tw._venomSlowT=5;});
        G.particles.push({x:e.x,y:e.y-ESIZES[14]-10,txt:'☠️ Venom!',col:'#76ff03',life:1.2,vy:-1.3,vx:0,decay:1.2,scale:.95});
      }
      if(!e._serpentSpawned&&e.hp<e.mhp*.4){
        e._serpentSpawned=true;
        G.shakeT=Math.min(.4,G.shakeT+.15);
        G.bossWarning={text:'🐍 เรียกงูลูก!',t:2.0,col:'#76ff03'};
        const _si=currentStage.id,_wv=G.wave;
        for(let k=0;k<2;k++){
          const chp=Math.round(CFG.m_hp[13]*(1+_si*CFG.stageMult)*(1+_wv*CFG.waveMult)*.5);
          G.enemies.push({ti:13,pi:e.pi,prog:e.prog+(k?18:-18),x:e.x+(k?22:-22),y:e.y,
            hp:chp,mhp:chp,spd:getEnemySpd(13,_si)*1.2,reward:Math.round(CFG.m_rew[13]*.5),
            slow:1,slowT:0,alive:true,hitFlash:0,isAir:false,shieldHp:0,maxShieldHp:0,_bspdMult:1,_sizeMult:.75});
        }
        for(let k=0;k<10;k++){const a=k/10*Math.PI*2,sp=2+Math.random()*2;
          G.particles.push({x:e.x,y:e.y,txt:'●',col:'#76ff03',life:.65,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2,scale:.5+Math.random()*.5});}
      }
    }
    // ❄️ ราชาน้ำแข็ง: Frost Pulse
    if(e.ti===16){
      e._frostPulseT=(e._frostPulseT===undefined?10:e._frostPulseT)-dt;
      if(e._frostPulseT<=0){
        e._frostPulseT=10;
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:2.5*CS,life:.7,lw:4,col:'#b3e5fc',delay:0});
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:2.5*CS,life:.55,lw:2,col:'#ffffff',delay:.1});
        G.towers.forEach(tw=>{if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=2.5*CS) tw._frostStunT=2.5;});
        G.particles.push({x:e.x,y:e.y-ESIZES[16]-10,txt:'❄️ Frost Pulse!',col:'#b3e5fc',life:1.3,vy:-1.2,vx:0,decay:1.1,scale:1.0});
        G.shakeT=Math.min(.3,G.shakeT+.1);
      }
    }
    // 🦅 ฮาร์ปี: Shriek — ลด fire rate ป้อมในรัศมี 3 ช่อง 40% นาน 3 วิ ทุก 7 วิ
    if(e.ti===17){
      e._shriekT=(e._shriekT===undefined?7:e._shriekT)-dt;
      if(e._shriekT<=0){
        e._shriekT=7;
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:3*CS,life:.55,lw:3,col:'#ffd54f',delay:0});
        G.towers.forEach(tw=>{if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=3*CS) tw._shriekT=3;});
        G.particles.push({x:e.x,y:e.y-ESIZES[17]-8,txt:'📣 Shriek!',col:'#ffd54f',life:1.1,vy:-1.3,vx:0,decay:1.2,scale:.9});
      }
    }
    // 🐲 มังกรเงา: Shadow Veil — visible 4 วิ / invisible 2 วิ สลับ
    if(e.ti===18){
      if(e._veilTimer===undefined){e._veilTimer=4;e._veilInvis=false;}
      e._veilTimer-=dt;
      if(e._veilTimer<=0){
        e._veilInvis=!e._veilInvis;
        e._veilTimer=e._veilInvis?2:4;
        if(e._veilInvis) G.fxRings.push({x:e.x,y:e.y,r:3,maxR:ESIZES[18]*1.8,life:.4,lw:2,col:'#7c4dff',delay:0});
      }
    }
    // 🌍 เทพทำลาย: Phase transitions + Shockwave + Regen
    if(e.ti===15){
      if(!e._phase) e._phase=1;
      if(e._phase===1&&e.hp<=e.mhp*.6){
        e._phase=2; e.spd*=1.45;
        e.shieldHp=0; e.maxShieldHp=0;
        G.shakeT=Math.min(.65,G.shakeT+.35);
        G.bossWarning={text:'🌋 เทพทำลายตื่นขึ้น!',t:2.5,col:'#ff6d00'};
        G.fxFlash.push({x:e.x,y:e.y,r:320,life:.45,maxLife:.45,col:'rgba(255,100,0,.42)'});
        const _pool=currentStage.enemyTypes.filter(t=>MTYPE[t]!==1);
        for(let k=0;k<3;k++){const _t=_pool[Math.floor(Math.random()*_pool.length)];if(_t!==undefined)spawnEnemy(_t);}
        for(let k=0;k<18;k++){const a=k/18*Math.PI*2,sp=3+Math.random()*3;
          G.particles.push({x:e.x,y:e.y,txt:k%2?'●':'✦',col:k%2?'#ff6d00':'#ff8a65',life:.85,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.9,scale:.7+Math.random()*.8});}
      }
      if(e._phase===2&&e.hp<=e.mhp*.3){
        e._phase=3; e.spd*=(1.80/1.45);
        e._shockwaveT=6;
        G.shakeT=Math.min(.8,G.shakeT+.55);
        G.bossWarning={text:'💀 พลังทำลายล้างสูงสุด!',t:2.5,col:'#fff9c4'};
        G.fxFlash.push({x:e.x,y:e.y,r:400,life:.55,maxLife:.55,col:'rgba(255,255,180,.5)'});
        for(let k=0;k<26;k++){const a=k/26*Math.PI*2,sp=3.5+Math.random()*4;
          G.particles.push({x:e.x,y:e.y,txt:k%3===0?'★':k%3===1?'🌍':'●',col:k%2?'#64dd17':'#fff9c4',life:1.1,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.5,scale:.7+Math.random()*.9});}
      }
      if(e._phase===3){
        if(e.hp<e.mhp) e.hp=Math.min(e.mhp,e.hp+e.mhp*.01*dt);
        e._shockwaveT=(e._shockwaveT||6)-dt;
        if(e._shockwaveT<=0){
          e._shockwaveT=6;
          G.towerStunT=1.5;
          G.shakeT=Math.min(.55,G.shakeT+.28);
          G.fxRings.push({x:e.x,y:e.y,r:4,maxR:COLS*CS*1.5,life:.85,lw:6,col:'#ffffff',delay:0});
          G.fxRings.push({x:e.x,y:e.y,r:4,maxR:COLS*CS*1.5,life:.7,lw:4,col:'#64dd17',delay:.12});
          G.particles.push({x:e.x,y:e.y-ESIZES[15]-14,txt:'⚡ SHOCKWAVE!',col:'#fff9c4',life:1.6,vy:-1.4,vx:0,decay:1.0,scale:1.15});
          showToast('⚡ Shockwave! ป้อมทั้งหมดหยุดทำงาน 1.5 วิ');
        }
      }
    }
    e.prog+=e.spd*e.slow*((e._enrageT>0)?(e._enrageMult||1):1)*((e._diveT>0)?1.5:1)*(e._packBoost?1.2:1)*(e._bspdMult||1)*((G&&G.weather&&G.weather.spdMult)?G.weather.spdMult:1)*CS*dt;
    while(e.prog>=CS){
      e.prog-=CS; e.pi++;
      if(e.pi>=plen-1){
        // 💨 Phantom Phase: ผีดิบในสถานะ phase ไม่ดาเมจปราสาท — ผ่านเข้าไปแบบ harmless
        if(e._phaseT>0){e.alive=false;G.enemies.splice(i,1);break;}
        unlockMonster(e.ti);
        e.alive=false; G.enemies.splice(i,1);
        if(G.skillBlockT>0){ // 🛡️ กำแพงวิญญาณ: กันดาเมจเข้าปราสาท
          addParticle(e.x,e.y,'🛡️ กันไว้!','#b388ff');
        } else {
          G.hp=Math.max(0,G.hp-1); updateHUD(); G.shakeT=Math.min(.55,G.shakeT+.2);
          if(G.hp<=0){endGame(false);return;}
        }
        break;
      }
    }
    if(!e.alive) continue;
    const p0=currentPath[e.pi],p1=currentPath[Math.min(e.pi+1,plen-1)];
    const t=Math.min(e.prog/CS,1);
    e.x=p0[0]*CS+CS/2+(p1[0]-p0[0])*CS*t;
    e.y=p0[1]*CS+CS/2+(p1[1]-p0[1])*CS*t;
  }
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
  // 🌑 เงามืด (ti===2) ปล่อยคลื่นดูดพลัง — ระงับบัฟ/Awaken ของป้อมในระยะชั่วคราว
  G.enemies.forEach(shadow=>{
    if(!shadow.alive||shadow.ti!==2) return;
    shadow.drainCd=(shadow.drainCd||3+Math.random()*2)-dt;
    if(shadow.drainCd>0) return;
    shadow.drainCd=5.5+Math.random(); // jitter ป้องกัน Shadow หลายตัว drain พร้อมกัน
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
      // 💚 ออร่ากันหยุดป้อมจาก Support — มีโอกาสต้านสกิลหยุดป้อมของวิเวิร์น
      if(Math.random()<getSupportResist(tw.col,tw.row)){
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS,txt:'🛡️ ต้านสำเร็จ!',col:'#80cbc4',
          life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
      } else {
        tw._stunT=3.0; // หยุดทำงานป้อม 3 วินาที
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS,txt:'💫 หยุดทำงาน!',col:'#ff8a65',
          life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
      }
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
    if(tw._shootT>0) tw._shootT=Math.max(0,tw._shootT-dt*7);
    if(tw._stunT>0){tw._stunT-=dt;return;} // 🐉 ถูกวิเวิร์นโฉบหยุดทำงาน
    if(_TAMB[tw.type]&&G.enemies.length<=12){
      if(tw._ambT===undefined) tw._ambT=Math.random()*_TAMB[tw.type];
      if((tw._ambT-=dt)<=0){
        tw._ambT=_TAMB[tw.type];
        const ax=(tw.col+.5)*CS,ay=(tw.row+.5)*CS;
        if(tw.type===0) G.particles.push({x:ax+(Math.random()-.5)*CS*.25,y:ay-CS*.28,txt:'·',col:'#9e9e9e',life:.75,vx:(Math.random()-.5)*.4,vy:-1.1-Math.random()*.7,decay:1.4,scale:.7+Math.random()*.4});
        else if(tw.type===1) G.particles.push({x:ax+(Math.random()-.5)*CS*.35,y:ay-CS*.2,txt:'*',col:'#b3e5fc',life:.5,vx:(Math.random()-.5)*.6,vy:-.9-Math.random()*.5,decay:2,scale:.35+Math.random()*.3});
        else if(tw.type===2) G.particles.push({x:ax+(Math.random()-.5)*CS*.3,y:ay-CS*.1,txt:'✦',col:'#ce93d8',life:.65,vx:(Math.random()-.5)*.5,vy:-1.2-Math.random()*.5,decay:2,scale:.38+Math.random()*.3});
        else if(tw.type===7){const sa=Math.random()*Math.PI*2;G.particles.push({x:ax+(Math.random()-.5)*CS*.3,y:ay+(Math.random()-.5)*CS*.3,txt:'·',col:'#80d8ff',life:.22,vx:Math.cos(sa)*2.5,vy:Math.sin(sa)*2.5,decay:6,scale:.45});}
      }
    }
    if(tw._venomSlowT>0) tw._venomSlowT=Math.max(0,tw._venomSlowT-dt);
    if(tw._frostStunT>0) tw._frostStunT=Math.max(0,tw._frostStunT-dt);
    if(tw._shriekT>0) tw._shriekT=Math.max(0,tw._shriekT-dt);
    // 🌀 ป้อมกาลเวลา — pulse zone mechanic (charge → active cycle)
    if(tw.type===9&&G.waveActive){
      const _rngLv=tw.rngLv||1, _rateLv=tw.rateLv||1;
      const _radius=CFG.t_rng[9]+((_rngLv-1)*.5); // 2.0/2.5/3.0/3.5
      const _chargeTimes=[6,5,4,3],_pulseDurs=[1.5,2,3,5];
      const _chargeMax=_chargeTimes[Math.min(3,_rateLv-1)];
      const _pulseMax=_pulseDurs[Math.min(3,_rateLv-1)];
      if(tw._tpCharging===undefined){tw._tpCharging=true;tw._tpTimer=_chargeMax;tw._tpPulsing=false;}
      tw._tpTimer=Math.max(0,tw._tpTimer-dt);
      if(tw._tpCharging&&tw._tpTimer<=0){
        tw._tpCharging=false;tw._tpPulsing=true;tw._tpTimer=_pulseMax;
        G.fxRings.push({x:(tw.col+.5)*CS,y:(tw.row+.5)*CS,r:0,maxR:_radius*CS,life:.55,lw:3,col:'#b39ddb',delay:0});
        G.particles.push({x:(tw.col+.5)*CS,y:(tw.row+.5)*CS-8,txt:'🌀',col:'#b39ddb',life:1.0,vy:-1.2,vx:0,decay:1.2,scale:1.0});
        if(tw.awakened){ // Awaken: Time Stop 1.5s
          const _stopR=_radius*CS;
          G.enemies.forEach(e=>{
            if(!e.alive) return;
            if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=_stopR){
              if(e.isBoss){e._timeSlowT=1.5;e._timeSlow=.15;}
              else{e._timeStopT=1.5;}
            }
          });
          G.particles.push({x:(tw.col+.5)*CS,y:(tw.row+.5)*CS-20,txt:'⏱️ หยุดเวลา!',col:'#ede7f6',life:1.3,vy:-1.0,vx:0,decay:1.1,scale:.85});
        }
      }
      if(tw._tpPulsing){
        if(tw._tpTimer<=0){tw._tpPulsing=false;tw._tpCharging=true;tw._tpTimer=_chargeMax;}
        else{
          const _slowR=_radius*CS;
          G.enemies.forEach(e=>{
            if(!e.alive) return;
            if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=_slowR){
              if(e.isBoss){e._timeSlowT=.2;e._timeSlow=.15;}
              else{e._timeSlowT=.2;e._timeSlow=.5;}
            }
          });
        }
      }
    }
    if(CFG.t_dmg[tw.type]===0) return;
    if(G.weather&&G.weather.struckTowers&&G.weather.struckTowers.size&&G.weather.struckTowers.has(tw)) return; // ⚡ struck by lightning
    if(G.towerStunT>0) return; // 🌍 Shockwave stun
    if(tw._frostStunT>0) return; // ❄️ Frost Pulse stun
    if(G.waveActive) tw.cd=Math.max(0,tw.cd-dt*(tw._venomSlowT>0?.65:tw._shriekT>0?.6:1));
    const range=getTowerRange(tw.type,tw.rngLv||tw.lv)*((G&&G.weather&&G.weather.rangeMult)?G.weather.rangeMult:1);
    const cx=tw.col+.5,cy=tw.row+.5;
    let best=null,bestP=-1,shamanInRange=null;
    G.enemies.forEach(e=>{
      if(!e.alive) return;
      if(e.isAir&&!TCANAIR[tw.type]) return; /* ยิง air ไม่ได้ */
      if(Math.hypot(cx-e.x/CS,cy-e.y/CS)<=range){
        const prog=e.pi+e.prog/CS;
        if(e.ti===10&&(!shamanInRange||prog>(shamanInRange.pi+shamanInRange.prog/CS))) shamanInRange=e;
        if(prog>bestP){bestP=prog;best=e;}
      }
    });
    if(tw.type===3&&shamanInRange) best=shamanInRange;
    if(best) tw.angle=Math.atan2(best.y/CS-cy,best.x/CS-cx);
    if(best&&tw.cd<=0){
      if(tw.type===1&&G.weather&&G.weather.iceDisabled) return; // 🔥 heatwave: ice tower disabled
      tw.cd=1/Math.max(.01,getTowerRate(tw.type,tw.rateLv||tw.lv)*(G.skillRateMult||1));
      // ⚡ สายความเร็ว Lv.4+ ปลดล็อก "ยิงรัว" — มีโอกาสคูลดาวน์สั้นลงทันที
      if((tw.rateLv||tw.lv)>=4&&Math.random()<0.2){
        tw.cd*=0.45;
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS+CS/2-22,txt:'⚡รัว!',col:'#ffe234',life:.45,vy:-1.3,vx:0,decay:2.6,scale:.75});
      }
      const fx=tw.col*CS+CS/2, fy=tw.row*CS+CS/2;
      const _aw=tw.awakened&&!(tw._drainT>0); // ⚡ ป้อมตื่นแล้วและไม่ได้ถูกดูดพลัง
      let _rdmg=getTowerDmg(tw.type,tw.dmgLv||tw.lv,tw.star)*getBuffMult(tw.col,tw.row)*(G.dmgBuff||1)*(G.skillDmgMult||1);
      // 🎯 สไนเปอร์: โอกาสคริติคอล x2 ดาเมจ
      let _rIsCrit=false;
      if(tw.type===3){
        const _crit=getSniperCrit(tw.rngLv);
        if(Math.random()<_crit.chance){_rdmg*=_crit.mult;_rIsCrit=true;}
      }
      let _rSlow=(TSLOW[tw.type]||0);
      const _wSplashMult=((tw.type===0||tw.type===2)&&G.weather&&G.weather.splashMult)?G.weather.splashMult:1;
      // ⚡ Awaken เฉพาะป้อม: Cannon=splash ใหญ่ขึ้น, Thunder=chain เพิ่ม
      const _awSplashMult=(_aw&&tw.type===0)?1.5:1;
      const _awChainBonus=(_aw&&tw.type===7)?2:0;
      const _rp=G.projs[G.projs.push({
        x:fx,y:fy,tx:best.x,ty:best.y,target:best,ox:fx,oy:fy,
        spd:420+(tw.type===3?120:0)+(tw.type===7?80:0),
        type:tw.type,
        dmg:_rdmg,
        splash:TSPLASH[tw.type]*_wSplashMult*_awSplashMult,slow:_rSlow,alive:true,
        chain:(TCHAIN[tw.type]||0)+_awChainBonus,
        _rngPierce:tw.type===3?(tw.rngLv||tw.lv)>=3:(tw.rngLv||tw.lv)>=4,
        _maxR:range*CS,
        _supBoost:_aw?getSupportAwakenBoost(tw.col,tw.row):1
      })-1];
      if(_aw) _rp._awakened=true;
      // ✨ Magic Awaken: โอกาสยิงเพิ่ม 20% (ตื่นแล้ว 40%) สูงสุด 3 นัด
      if(tw.type===2&&Math.random()<(_aw?.4:.2)){
        const _extra=_aw?2:1;
        for(let _m=0;_m<_extra;_m++) G.projs.push(Object.assign({},_rp));
      }
      // muzzle flash ring per tower type (cap rings ไม่เกิน 40)
      const mCol=TPROJ[tw.type];
      if(G.fxRings.length<40) G.fxRings.push({x:fx,y:fy,r:2,maxR:tw.type===3?CS*.8:CS*.4,
        life:.5,lw:tw.type===3?2:1.5,col:mCol,delay:0});
      // sniper: laser line flash
      if(tw.type===3){
        if(G.fxRings.length<40) G.fxRings.push({x:fx,y:fy,r:1,maxR:CS*.3,life:.35,lw:3,col:'#fffde7',delay:0});
        if(_rIsCrit&&G.particles.length<120) G.particles.push({x:fx,y:fy-CS*.5,txt:'💥 CRIT!',col:'#ff5252',life:.6,vy:-1.4,vx:0,decay:2,scale:1});
      }
      // magic: extra sparkle burst
      if(tw.type===2&&G.particles.length<120){
        for(let k=0;k<3;k++){
          const ang=k/3*Math.PI*2;
          G.particles.push({x:fx,y:fy,txt:'·',col:'#ea80fc',
            life:.5,vy:Math.sin(ang)*.9,vx:Math.cos(ang)*.9,decay:3,scale:.8});
        }
      }
      // ice: freeze sparkle
      if(tw.type===1&&G.particles.length<120){
        for(let k=0;k<2;k++){
          const ang=k/2*Math.PI*2;
          G.particles.push({x:fx,y:fy,txt:'❄',col:'#80d8ff',
            life:.4,vy:Math.sin(ang)*.6,vx:Math.cos(ang)*.6,decay:3.5,scale:.7});
        }
      }
      // thunder: electric spark burst at muzzle
      if(tw.type===7){
        for(let k=0;k<4;k++){
          const ang=k/4*Math.PI*2;
          G.particles.push({x:fx,y:fy,txt:'·',col:'#ffe57f',
            life:.35,vy:Math.sin(ang)*1.4,vx:Math.cos(ang)*1.4,decay:4,scale:.9});
        }
        G.fxRings.push({x:fx,y:fy,r:2,maxR:CS*.5,life:.3,lw:1.5,col:'#ffe57f',delay:0});
      }
      // muzzle flash glow circle at barrel tip
      const _mfa=tw.angle||0;
      const _mfx=fx+Math.cos(_mfa)*CS*.32, _mfy=fy+Math.sin(_mfa)*CS*.32;
      G.fxFlash.push({x:_mfx,y:_mfy,r:tw.type===3?14:tw.type===0?16:10,life:.18,col:TPROJ[tw.type]||'#fff'});
      tw._shootT=1;
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
    if(G.gmTimers[key]>=getGoldMineInterval(tw.rateLv)){
      G.gmTimers[key]=0;
      // 💰 Gold Mine Awaken: ผลผลิตทอง x2
      const goldAmt=Math.round(getGoldMineAmt(tw.rngLv)*(G.weather&&G.weather.goldMineMult!=null?G.weather.goldMineMult:1)*(tw.awakened?2:1));
      G.gold+=goldAmt; updateHUD();
      addParticle(tw.col*CS+CS/2,tw.row*CS+CS/2,'+'+goldAmt+'💰','#ffd54f');
      // flying coin particles — skip when particle pool is busy
      if(G.particles.length<100){
        for(let _k=0;_k<2;_k++){
          G.particles.push({x:tw.col*CS+CS/2+(Math.random()-.5)*CS*.45,y:tw.row*CS+CS*.42,
            txt:'🪙',col:'#ffd54f',life:1.0+Math.random()*.3,
            vy:-1.5-Math.random()*.8,vx:(Math.random()-.5)*.8,decay:.9,scale:.8+Math.random()*.2});
        }
      }
    }
  });
  // projectiles — cap ไม่เกิน 250 ตัว (กันกระสุนล้น)
  if(G.projs.length>250) G.projs.length=250;
  for(let i=G.projs.length-1;i>=0;i--){
    const p=G.projs[i];
    if(!p.alive){G.projs[i]=G.projs[G.projs.length-1];G.projs.pop();continue;}
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
          // 🦇 ค้างคาว handle dodge ใน applyDmg เอง (cap 50%) — ข้าม weather dodge ซ้ำเพื่อป้องกัน stack
          if(_wDodge>0&&!(e.ti===6)&&Math.random()<_wDodge) return; // 🌪️ tornado/storm dodge
          applyDmg(e,p.dmg,p.type,p._rngPierce);
        });
      } else {
        if(p.target&&p.target.alive){
          const _skipWDodge=(_wDodge>0&&p.target.ti===6); // 🦇 bat handles own dodge (cap 50%) — ป้องกัน stack
          if(_wDodge>0&&!_skipWDodge&&Math.random()<_wDodge){
            G.particles.push({x:p.target.x,y:p.target.y-ESIZES[p.target.ti]-6,txt:'MISS',col:'#e0e0e0',life:.6,vy:-1,vx:0,decay:1.5,scale:.7});
          } else {
            applyDmg(p.target,p.dmg,p.type,p._rngPierce);
          }
        }
        // 🌑 Void Mark (story mode)
        if(p.type===8&&p.target&&p.target.alive){
          const procChance=p._awakened?0.5:0.3;
          const markBonus=p._awakened?0.40:0.25;
          if(Math.random()<procChance){
            const e=p.target;
            e._voidMarkT=4;e._voidMarkBonus=Math.max(e._voidMarkBonus||0,markBonus);
            G.fxRings.push({x:e.x,y:e.y,r:2,maxR:ESIZES[e.ti]*1.6,life:.5,lw:2,col:'#9575cd',delay:0});
          }
        }
      }
      if(p.slow>0&&p.target&&p.target.alive&&!(p.target.shieldHp>0&&!TPIERCE[p.type]&&!p._rngPierce)&&!(G.weather&&G.weather.slowImmune)){
        // ❄️ Ice Awaken: ติดแข็ง (หยุดสนิท) 3 วินาที — Support ตื่นใกล้เคียงเพิ่มเป็น 6 วินาที
        if(p.type===1&&p.target.ti===16){/* 🧊 ราชาน้ำแข็ง immune ice slow */}
        else if(p._awakened&&p.type===1){ p.target.slow=0; p.target.slowT=3*(p._supBoost||1); }
        else { p.target.slow=p.slow; p.target.slowT=2; }
      }
      // 🎯 Sniper Awaken: ยิงทะลุเป็นเส้นตรง — สร้างความเสียหายให้ศัตรูที่อยู่หลังเป้าหมายบนเส้นยิงด้วย
      if(p.type===3&&p._awakened){
        const _ddx=tx-p.ox,_ddy=ty-p.oy,_dlen=Math.hypot(_ddx,_ddy)||1;
        const _ux=_ddx/_dlen,_uy=_ddy/_dlen;
        G.enemies.forEach(e=>{
          if(!e.alive||e===p.target) return;
          if(e.isAir&&!TCANAIR[3]) return;
          if(e.shieldHp>0&&!p._rngPierce) return; // เจาะโล่เมื่อ Range≥3
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
      G.projs[i]=G.projs[G.projs.length-1];G.projs.pop();
    } else {
      // add trail point
      if(G.fxTrails.length<200)
        G.fxTrails.push({x:p.x,y:p.y,col:TPROJ[p.type],life:1,type:p.type});
      const s2=p.spd*dt/d; p.x+=dx*s2; p.y+=dy*s2;
    }
  }
  // hitFlash + knockback + voidMark decay (story)
  G.enemies.forEach(e=>{ if(e.hitFlash>0) e.hitFlash=Math.max(0,e.hitFlash-dt*4); if(e._knockT>0){e._knockT=Math.max(0,e._knockT-dt*8);} if(e._voidMarkT>0){e._voidMarkT-=dt;if(e._voidMarkT<=0){e._voidMarkT=0;e._voidMarkBonus=0;}} });
  // tower spawn bounce anim
  G.towers.forEach(tw=>{ if(tw.spawnAnim>0) tw.spawnAnim=Math.max(0,tw.spawnAnim-dt*2.2); });
  // FX rings
  for(let i=G.fxRings.length-1;i>=0;i--){
    const r=G.fxRings[i];
    if(r.delay>0){r.delay-=dt;continue;}
    r.r+=r.maxR*dt*3.5; r.life-=dt*2.8;
    if(r.life<=0){G.fxRings[i]=G.fxRings[G.fxRings.length-1];G.fxRings.pop();}
  }
  // FX trails
  for(let i=G.fxTrails.length-1;i>=0;i--){
    const t=G.fxTrails[i]; t.life-=dt*6;
    if(t.life<=0){G.fxTrails[i]=G.fxTrails[G.fxTrails.length-1];G.fxTrails.pop();}
  }
  // particles — trim hard when many enemies on screen
  if(G.enemies.length>12&&G.particles.length>30) G.particles.splice(0,G.particles.length-30);
  for(let i=G.particles.length-1;i>=0;i--){
    const p=G.particles[i];
    p.x+=p.vx||0; p.y+=p.vy; p.life-=dt*(p.decay||1.4);
    if(p.scale) p.scale=Math.max(.4,p.scale-dt*1.5);
    if(p.life<=0){G.particles[i]=G.particles[G.particles.length-1];G.particles.pop();}
  }
  // combo timer decay
  if(G.comboT>0){G.comboT-=dt;if(G.comboT<=0){G.comboN=0;G.comboT=0;}}
  // muzzle flashes decay
  for(let i=G.fxFlash.length-1;i>=0;i--){
    G.fxFlash[i].life-=dt; if(G.fxFlash[i].life<=0){G.fxFlash[i]=G.fxFlash[G.fxFlash.length-1];G.fxFlash.pop();}
  }
  // floating damage numbers
  if(G.dmgNums.length>60) G.dmgNums.splice(0,G.dmgNums.length-60);
  for(let i=G.dmgNums.length-1;i>=0;i--){
    const n=G.dmgNums[i];
    n.x+=n.vx||0; n.y+=n.vy; n.vy*=.92;
    n.life-=dt*(n.decay||1.0);
    if(n.life<=0){G.dmgNums[i]=G.dmgNums[G.dmgNums.length-1];G.dmgNums.pop();}
  }
  // boss warning decay
  if(G.bossWarning&&G.bossWarning.t>0) G.bossWarning.t-=dt;
  if(G.mergeHintPulseT>0) G.mergeHintPulseT=Math.max(0,G.mergeHintPulseT-dt);
  // V1: screen shake decay
  if(G.shakeT>0) G.shakeT=Math.max(0,G.shakeT-dt*3.8);
  // V5: wave banner decay
  if(G.waveBanner&&G.waveBanner.t>0) G.waveBanner.t-=dt;
  // wave clear
  if(G.waveActive&&G.queue.length===0&&G.enemies.length===0){
    // achievement: no-damage wave
    _onWaveEndForAch(G._waveHpAtStart||G.hp, G.hp);
    G.waveActive=false;
    if(!currentStage||!currentStage.weatherMode||currentStage.weatherMode==='random') clearWeather(); // 🌦 skip clear for fixed/permanent stages
    _playSound('wave_clear');
    const bonus=25+G.wave*6; G.gold+=bonus; updateHUD();
    // wave clear banner (green theme)
    const _isLastWave=G.wave>=currentStage.waves;
    G.waveBanner={text:_isLastWave?'🏆  ชนะแล้ว!':'✅  WAVE  '+G.wave+'  CLEAR!',t:2.0,dur:2.0,col:'#69f0ae'};
    // screen flash green
    G.fxFlash.push({x:COLS*CS/2,y:ROWS*CS/2,r:Math.max(COLS,ROWS)*CS*.8,life:.4,maxLife:.4,col:'rgba(105,240,174,.18)'});
    // firework rings — more spread
    const fwx=COLS*CS/2, fwy=ROWS*CS/2;
    const fwCols=['#ffe234','#ff5252','#40c4ff','#ea80fc','#69f0ae'];
    for(let k=0;k<10;k++){
      G.fxRings.push({x:fwx+(Math.random()-.5)*CS*8,y:fwy+(Math.random()-.5)*CS*5,
        r:4,maxR:CS*(1.2+Math.random()*1.4),life:.9,lw:2.5,col:fwCols[k%5],delay:k*.08});
    }
    for(let k=0;k<16;k++){
      const ang=k/16*Math.PI*2, spd=1.8+Math.random()*1.5;
      G.particles.push({x:fwx+(Math.random()-.5)*CS*4,y:fwy+(Math.random()-.5)*CS*3,
        txt:['★','✦','●','✿'][k%4],col:fwCols[k%5],
        life:1.4,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:1.0,scale:1.2});
    }
    addParticle(fwx,fwy-20,'🎉 +'+bonus+' ทอง','#ffe234');
    showToast('🎉 คลื่นที่ '+G.wave+' ผ่านแล้ว! +'+bonus+' ทอง');
    if(G.wave>=currentStage.waves){endGame(true);return;}
    document.getElementById('waveBtn').disabled=false;
    showWavePreview();
    if(autoWave) setTimeout(()=>{ if(autoWave&&G&&!G.over&&!G.win&&!G.waveActive) startWave(); },1200);
  }
}

function shadeColor(hex,amt){const n=parseInt(hex.replace('#',''),16);const r=Math.max(0,Math.min(255,((n>>16)&0xff)+amt));const g=Math.max(0,Math.min(255,((n>>8)&0xff)+amt));const b=Math.max(0,Math.min(255,(n&0xff)+amt));return`rgb(${r},${g},${b})`;}

/* ══ BACKGROUND CANVAS (pre-render static grid+terrain, 1 drawImage per frame) ══ */
function _renderBg(){
  const s=currentStage;
  if(!_bgCanvas){
    _bgCanvas=document.createElement('canvas');
    _bgCanvas.width=COLS*CS; _bgCanvas.height=ROWS*CS;
    _bgCtx=_bgCanvas.getContext('2d');
  }
  _bgDirty=false;
  const bc=_bgCtx;
  bc.clearRect(0,0,COLS*CS,ROWS*CS);
  // grid — 2.5D tiles
  const _TH=8;
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++){
    const isPath=currentPset.has(c+','+r);
    const tx=c*CS,ty=r*CS;
    const baseCol=isPath?s.pathColor:s.grassColors[(c*3+r*7)%s.grassColors.length];
    if(isPath){
      bc.fillStyle=baseCol; bc.fillRect(tx,ty,CS,CS);
      const _pv=(c*7+r*13+currentStage.id*3)%5;
      if(_pv<2){bc.fillStyle='rgba(0,0,0,.06)';bc.fillRect(tx+CS*.2,ty+CS*.2,CS*.6,CS*.55);}
      bc.fillStyle='rgba(0,0,0,.14)'; bc.fillRect(tx,ty,CS,2); bc.fillRect(tx,ty,2,CS);
    } else {
      bc.fillStyle=baseCol; bc.fillRect(tx,ty,CS,CS-_TH);
      bc.fillStyle=shadeColor(baseCol,-38); bc.fillRect(tx,ty+CS-_TH,CS,_TH);
      bc.fillStyle='rgba(255,255,255,.11)'; bc.fillRect(tx,ty,CS,2); bc.fillRect(tx,ty,2,CS-_TH);
      bc.fillStyle='rgba(0,0,0,.18)'; bc.fillRect(tx,ty+CS-_TH-1,CS,1);
    }
    bc.strokeStyle='rgba(0,0,0,.05)'; bc.lineWidth=.5; bc.strokeRect(tx,ty,CS,CS);
  }
  // ── TERRAIN DECORATIONS ──
  const _sid=currentStage.id;
  const _towerCellSet=new Set(G.towers.map(t=>t.col+','+t.row));
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++){
    if(currentPset.has(c+','+r)) continue;
    if(_towerCellSet.has(c+','+r)) continue;
    if(G.dugCells&&G.dugCells.has(c+','+r)) continue;
    const _obsT=G.obstacles&&G.obstacles[c+','+r];
    const h=_obsT!==undefined?[40,25,10][_obsT]:(c*17+r*13+_sid*31)%100;
    const tx=c*CS, ty=r*CS;
    const ox=((c*11+r*7)%24)-12, oy=((c*7+r*9)%18)-9;
    const cx2=tx+CS*.5+ox, cy2=ty+CS*.5+oy;
    if(h<22){// pine tree — 2.5D
      const ts=CS*.48+((c*5+r*3)%8)*CS*.03;
      const gc=s.grassColors[0];
      bc.globalAlpha=.25;bc.fillStyle='#000';
      bc.beginPath();bc.ellipse(cx2+ts*.22,cy2+ts*.62,ts*.62,ts*.2,0,0,Math.PI*2);bc.fill();
      bc.globalAlpha=1;
      bc.fillStyle='#3e2723';bc.fillRect(cx2+ts*.1,cy2+ts*.18,ts*.09,ts*.37);
      bc.fillStyle='#6d4c41';bc.fillRect(cx2-ts*.1,cy2+ts*.15,ts*.2,ts*.38);
      [[ts*.72,ts*.32,-.5],[ts*.56,ts*.16,-.34],[ts*.38,0,-.18]].forEach(([w,yo,tipOY],ki)=>{
        const fc=ki===0?shadeColor(gc,-22):ki===1?gc:shadeColor(gc,18);
        bc.fillStyle=shadeColor(fc,-35);
        bc.beginPath();bc.moveTo(cx2+w,cy2+yo);bc.lineTo(cx2+w+ts*.12,cy2+yo+ts*.13);bc.lineTo(cx2+ts*.06,cy2-ts*.5+yo+ts*.13+(ki===2?ts*.06:0));bc.closePath();bc.fill();
        bc.fillStyle=fc;
        bc.beginPath();bc.moveTo(cx2,cy2-ts*.5+yo);bc.lineTo(cx2+w,cy2+yo);bc.lineTo(cx2-w,cy2+yo);bc.closePath();bc.fill();
        bc.strokeStyle='rgba(255,255,255,.18)';bc.lineWidth=ts*.05;
        bc.beginPath();bc.moveTo(cx2,cy2-ts*.5+yo);bc.lineTo(cx2-w,cy2+yo);bc.stroke();
        bc.strokeStyle='rgba(0,0,0,.28)';bc.lineWidth=ts*.07;
        bc.beginPath();bc.moveTo(cx2,cy2-ts*.5+yo);bc.lineTo(cx2+w,cy2+yo);bc.lineTo(cx2-w,cy2+yo);bc.closePath();bc.stroke();
      });
    } else if(h<36){// rocks — 2.5D
      const rs=CS*.14+((c*3+r*7)%8)*CS*.014;
      bc.globalAlpha=.28;bc.fillStyle='#000';
      bc.beginPath();bc.ellipse(cx2+rs*.3,cy2+rs*.55,rs*1.7,rs*.45,0,0,Math.PI*2);bc.fill();
      bc.globalAlpha=1;
      bc.fillStyle='#424242';bc.beginPath();bc.ellipse(cx2+rs*.1,cy2+rs*.45,rs*1.35,rs*.82,0,0,Math.PI*2);bc.fill();
      bc.fillStyle='#757575';bc.beginPath();bc.ellipse(cx2,cy2,rs*1.35,rs*.82,0,0,Math.PI*2);bc.fill();
      bc.fillStyle='#4a4a4a';bc.beginPath();bc.ellipse(cx2+rs*1.05,cy2+rs*.25,rs*.95,rs*.6,.3,0,Math.PI*2);bc.fill();
      bc.fillStyle='#868686';bc.beginPath();bc.ellipse(cx2+rs*.9,cy2+rs*.05,rs*.95,rs*.6,.3,0,Math.PI*2);bc.fill();
      bc.fillStyle='rgba(255,255,255,.38)';bc.beginPath();bc.ellipse(cx2-rs*.25,cy2-rs*.32,rs*.45,rs*.28,-.3,0,Math.PI*2);bc.fill();
      bc.fillStyle='rgba(255,255,255,.22)';bc.beginPath();bc.ellipse(cx2+rs*.65,cy2-rs*.18,rs*.3,rs*.18,-.2,0,Math.PI*2);bc.fill();
      bc.strokeStyle='rgba(0,0,0,.35)';bc.lineWidth=rs*.14;
      bc.beginPath();bc.ellipse(cx2,cy2,rs*1.35,rs*.82,0,0,Math.PI*2);bc.stroke();
    } else if(h<48){// bush cluster — 2.5D
      const bs=CS*.13;
      bc.globalAlpha=.2;bc.fillStyle='#000';
      bc.beginPath();bc.ellipse(cx2+bs*.2,cy2+bs*.9,bs*2.1,bs*.38,0,0,Math.PI*2);bc.fill();
      bc.globalAlpha=1;
      [-1,0,1].forEach(k=>{
        const bx=cx2+k*bs*1.1, by=cy2+(k===0?-bs*.2:0);
        const col=k===0?shadeColor(s.grassColors[0],8):s.grassColors[0];
        bc.fillStyle=shadeColor(col,-32);bc.beginPath();bc.arc(bx+bs*.12,by+bs*.28,bs*.92,0,Math.PI*2);bc.fill();
        bc.fillStyle=col;bc.beginPath();bc.arc(bx,by,bs*.92,0,Math.PI*2);bc.fill();
        bc.fillStyle='rgba(255,255,255,.22)';bc.beginPath();bc.arc(bx-bs*.28,by-bs*.28,bs*.38,0,Math.PI*2);bc.fill();
        bc.strokeStyle='rgba(0,0,0,.22)';bc.lineWidth=bs*.1;bc.beginPath();bc.arc(bx,by,bs*.92,0,Math.PI*2);bc.stroke();
      });
    }
  }
}
/* ══ RENDER ══ */
function render(){
  if(!ctx||!G||!currentStage) return;
  const s=currentStage;
  const perfMode=G.enemies.length>12; // skip expensive shadow passes when many enemies
  ctx.clearRect(0,0,cv.width,cv.height);
  // V1: screen shake
  let _shook=false;
  if(G.shakeT>0){_shook=true;ctx.save();ctx.translate((Math.random()-.5)*G.shakeT*7,(Math.random()-.5)*G.shakeT*5);}
  // draw pre-rendered background (grid + terrain) in 1 call
  if(_bgDirty) _renderBg();
  ctx.drawImage(_bgCanvas,0,0);
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
  // ── DIG TOOL HOVER HIGHLIGHT ──
  if(G.selDig&&G.mx>=0&&G.my>=0){
    const _dt=getDecoType(G.mx,G.my);
    if(_dt!==null){
      const tx=G.mx*CS,ty=G.my*CS;
      ctx.globalAlpha=.28;ctx.fillStyle='#ffe082';ctx.fillRect(tx,ty,CS,CS);ctx.globalAlpha=1;
      ctx.strokeStyle='#ffe082';ctx.lineWidth=2;ctx.strokeRect(tx+1,ty+1,CS-2,CS-2);
    }
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
  // selected tower range ring + synergy lines
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
    // 💚 วาดเส้นเชื่อม synergy
    if(TBUFF[st.type]){
      // เลือก Support → แสดงเส้นไปหาป้อมทุกตัวที่ได้รับบัฟ
      G.towers.forEach(t=>{
        if(t===st||TBUFF[t.type]) return;
        if(Math.hypot(t.col-st.col,t.row-st.row)>getTowerRange(st.type,st.rngLv||1)) return;
        const tx2=t.col*CS+CS/2,ty2=t.row*CS+CS/2;
        const pulse=.5+.3*Math.sin(Date.now()*.004);
        ctx.save();ctx.globalAlpha=pulse;
        ctx.strokeStyle='#69f0ae';ctx.lineWidth=1.5;ctx.setLineDash([5,4]);
        ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(tx2,ty2);ctx.stroke();
        ctx.setLineDash([]);ctx.restore();
      });
    } else {
      // เลือกป้อมอื่น → แสดงเส้นจาก Support ที่กำลัง buff ป้อมนี้
      G.towers.forEach(t=>{
        if(!TBUFF[t.type]) return;
        if(Math.hypot(t.col-st.col,t.row-st.row)>getTowerRange(t.type,t.rngLv||1)) return;
        const tx2=t.col*CS+CS/2,ty2=t.row*CS+CS/2;
        const pulse=.5+.3*Math.sin(Date.now()*.004);
        ctx.save();ctx.globalAlpha=pulse;
        ctx.strokeStyle='#69f0ae';ctx.lineWidth=1.5;ctx.setLineDash([5,4]);
        ctx.beginPath();ctx.moveTo(tx2,ty2);ctx.lineTo(sx,sy);ctx.stroke();
        ctx.setLineDash([]);
        // วงกลมเล็กที่ Support
        ctx.globalAlpha=pulse*.8;ctx.strokeStyle='#69f0ae';ctx.lineWidth=1.5;
        ctx.beginPath();ctx.arc(tx2,ty2,CS*.38,0,Math.PI*2);ctx.stroke();
        ctx.restore();
      });
    }
  }
  // ไฮไลต์ช่องที่ลากป้อมไปทับ — เขียว=รวมได้ แดง=รวมไม่ได้
  if(_twrDragging&&_twrDragHoverCol>=0&&_twrDragHoverRow>=0&&_twrDragHoverCol<COLS&&_twrDragHoverRow<ROWS){
    const hc=_twrDragHoverCol,hr=_twrDragHoverRow;
    const hoverTw=G.towers.find(t=>t.col===hc&&t.row===hr);
    if(hoverTw){
      const ok=canMergeTowers(_twrDragTw,hoverTw);
      ctx.globalAlpha=.35;ctx.fillStyle=ok?'#4caf50':'#f44336';
      ctx.fillRect(hc*CS,hr*CS,CS,CS);
      ctx.globalAlpha=.8;ctx.strokeStyle=ok?'#81c784':'#ef9a9a';ctx.lineWidth=2;
      ctx.strokeRect(hc*CS+1,hr*CS+1,CS-2,CS-2);
      ctx.globalAlpha=1;
    }else if(!(hc===_twrDragTw.col&&hr===_twrDragTw.row)){
      // ช่องว่าง: ฟ้า=ย้ายได้ (รอเวฟ+ไม่ใช่เส้นทาง) / แดง=ย้ายไม่ได้
      const mok=!G.waveActive&&!currentPset.has(hc+','+hr);
      ctx.globalAlpha=.3;ctx.fillStyle=mok?'#2196f3':'#f44336';
      ctx.fillRect(hc*CS,hr*CS,CS,CS);
      ctx.globalAlpha=.8;ctx.strokeStyle=mok?'#64b5f6':'#ef9a9a';ctx.lineWidth=2;
      ctx.strokeRect(hc*CS+1,hr*CS+1,CS-2,CS-2);
      ctx.globalAlpha=1;
    }
  }
  // tower ghost
  if(G.selTwr>=0&&G.mx>=0&&G.my>=0&&G.mx<COLS&&G.my<ROWS){
    const mc=G.mx,mr=G.my;
    const _hasDeco=getDecoType(mc,mr)!==null;
    const ok=!currentPset.has(mc+','+mr)&&!G.towers.find(t=>t.col===mc&&t.row===mr)
              &&(!_hasDeco||G.selTwr===6);
    const _hCol=ok?'#69f0ae':'#f44336';
    ctx.globalAlpha=.28;ctx.fillStyle=ok?TCOLORS[G.selTwr]:'#f44336';
    ctx.fillRect(mc*CS,mr*CS,CS,CS);
    ctx.globalAlpha=.9;ctx.strokeStyle=_hCol;ctx.lineWidth=2.5;
    ctx.strokeRect(mc*CS+1,mr*CS+1,CS-2,CS-2);
    ctx.globalAlpha=1;
    if(ok){
      const gx=mc*CS+CS/2, gy=mr*CS+CS/2, grang=getTowerRange(G.selTwr,1)*CS;
      ctx.globalAlpha=.12;ctx.fillStyle=TACCENT[G.selTwr];
      ctx.beginPath();ctx.arc(gx,gy,grang,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=.6;ctx.strokeStyle=TACCENT[G.selTwr];ctx.lineWidth=1.5;
      ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.arc(gx,gy,grang,0,Math.PI*2);ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.globalAlpha=1;
  }
  // muzzle flashes — skip expensive radial gradient + shadowBlur in perfMode
  if(!perfMode) G.fxFlash.forEach(f=>{
    const fa=Math.max(0,f.life/(f.maxLife||.18));
    ctx.save();
    ctx.globalAlpha=fa*.7;
    ctx.shadowColor=f.col;ctx.shadowBlur=Math.min(f.r*.9,40);
    const fg=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.r);
    fg.addColorStop(0,'rgba(255,255,255,.95)');fg.addColorStop(.4,f.col);fg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=fg; ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2); ctx.fill();
    ctx.restore();
  });
  // FX rings — soft glow matching ring color for extra impact punch
  if(!perfMode) G.fxRings.forEach(r=>{
    if(r.delay>0) return;
    ctx.save();
    ctx.shadowColor=r.col;ctx.shadowBlur=r.lw*2.2;
    ctx.globalAlpha=Math.max(0,r.life)*.7;
    ctx.strokeStyle=r.col; ctx.lineWidth=r.lw;
    ctx.beginPath(); ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke();
    ctx.restore();
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
  // pre-compute mergeable set once (O(n²) → O(n) per tower during merge hint)
  const _mergeableTowers=G.mergeHintPulseT>0?new Set(G.towers.filter(a=>G.towers.some(b=>b!==a&&b.type===a.type&&b.star===a.star))):null;
  G.towers.forEach(tw=>{
    const bounce=tw.spawnAnim>0?1+Math.sin(tw.spawnAnim*Math.PI*1.5)*.32*tw.spawnAnim:1;
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
    // 🌑 ถูกเงามืดดูดพลัง — overlay มืดสั่นไหวแสดงว่าบัฟ/Awaken ใช้งานไม่ได้ชั่วคราว
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
    // ❄️ ถูก Frost Pulse แช่แข็ง — overlay ฟ้าขาว + ไอคอน❄️
    if(tw._frostStunT>0){
      const _ft=Date.now()*.004;
      ctx.save();
      ctx.globalAlpha=.30+.12*Math.sin(_ft*2);
      ctx.fillStyle='#b3e5fc';
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.fill();
      ctx.globalAlpha=.7;
      ctx.strokeStyle='#ffffff'; ctx.lineWidth=2; ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      ctx.save();
      ctx.font=(CS*.34)+'px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.globalAlpha=.9;
      ctx.fillText('❄️',cx2,y+CS*.16);
      ctx.restore();
    }
    // 🦅 ถูก Shriek — overlay เหลืองอ่อน + ไอคอน📣 (rate ช้าลง 40%)
    if(tw._shriekT>0){
      const _sht=Date.now()*.005;
      ctx.save();
      ctx.globalAlpha=.22+.10*Math.sin(_sht*2);
      ctx.fillStyle='#ffd54f';
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.fill();
      ctx.globalAlpha=.65;
      ctx.strokeStyle='#ffca28'; ctx.lineWidth=2; ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      ctx.save();
      ctx.font=(CS*.34)+'px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.globalAlpha=.85;
      ctx.fillText('📣',cx2,y+CS*.16);
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
    // 2.5D sprite (Cannon..Void)
    const _tws=1.15;
    ctx.save();
    ctx.translate(cx2, cy2-CS*.18);
    ctx.scale(_tws,_tws);
    if(!perfMode){ctx.shadowColor='rgba(0,0,0,.95)';ctx.shadowBlur=7;ctx.shadowOffsetX=0;ctx.shadowOffsetY=3;}
    drawTowerIcon(ctx,tw.type,CS-2,tw.angle,tw.lv,tw._shootT||0);
    if(!perfMode){ctx.shadowBlur=0;ctx.shadowOffsetY=0;drawTowerIcon(ctx,tw.type,CS-2,tw.angle,tw.lv,tw._shootT||0);}
    ctx.restore();
    // level badge
    if(tw.lv>1){
      ctx.fillStyle='rgba(0,0,0,.75)';
      ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x+CS-24,y+2,22,13,3);else ctx.rect(x+CS-24,y+2,22,13);
      ctx.fill();
      ctx.fillStyle='#ffe234';ctx.font='bold 9px Arial';
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('Lv'+tw.lv,x+CS-13,y+9);
    }
    // 🌟 Rarity frame — กรอบสีรอบป้อมตามดาว (ไม่แสดงถ้า Awakened เพราะมีออร่าทองของตัวเองแล้ว)
    if(_twrDragging&&_twrDragTw&&canMergeTowers(_twrDragTw,tw)){
      const _rc=RARITY_COLORS[tw.star];
      ctx.save();
      ctx.shadowBlur=8;ctx.shadowColor=_rc;
      ctx.strokeStyle=_rc;ctx.lineWidth=2;
      ctx.beginPath();ctx.roundRect?ctx.roundRect(x+2,y+2,CS-4,CS-4,8):ctx.rect(x+2,y+2,CS-4,CS-4);
      ctx.stroke();
      ctx.shadowBlur=0;
      ctx.restore();
    }
    // merge hint pulse — กะพริบบนป้อมที่ merge ได้ตอนแสดง hint ครั้งแรก
    if(G.mergeHintPulseT>0){
      const _pair=_mergeableTowers&&_mergeableTowers.has(tw);
      if(_pair){
        const _pa=Math.abs(Math.sin(G.mergeHintPulseT*6))*.9;
        ctx.save();
        ctx.globalAlpha=_pa;
        ctx.shadowBlur=14;ctx.shadowColor='#ffe082';
        ctx.strokeStyle='#ffe082';ctx.lineWidth=3;
        ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x+1,y+1,CS-2,CS-2,8);else ctx.rect(x+1,y+1,CS-2,CS-2);
        ctx.stroke();
        ctx.restore();
      }
    }
    // star float — ดาวลอยเหนือป้อม ไม่มีกรอบ
    {
      const _st=tw.star||1;
      ctx.save();
      ctx.font='bold 18px Arial';ctx.textAlign='center';ctx.textBaseline='bottom';
      ctx.shadowColor='rgba(0,0,0,.9)';ctx.shadowBlur=4;ctx.shadowOffsetY=1;
      ctx.fillStyle=RARITY_COLORS[_st]||'#ffe234';
      ctx.fillText('★'.repeat(Math.min(_st,4)),cx2,y+2);
      ctx.restore();
    }
    // gold mine timer bar
    if(TGOLDMINE[tw.type]&&G.gmTimers){
      const key=tw.col+'_'+tw.row;const t2=G.gmTimers[key]||0;const pct=t2/getGoldMineInterval(tw.rateLv);
      ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(x+4,y+CS-7,CS-8,4);
      ctx.fillStyle='#ffd54f';ctx.fillRect(x+4,y+CS-7,(CS-8)*pct,4);
    }
    // support aura ring
    if(TBUFF[tw.type]){
      ctx.globalAlpha=.08;ctx.strokeStyle='#64ffda';ctx.lineWidth=1;
      ctx.beginPath();ctx.arc(cx2,cy2,getTowerRange(tw.type,tw.rngLv||tw.lv)*CS,0,Math.PI*2);
      ctx.stroke();ctx.globalAlpha=1;
    }
    // 💚 synergy buff badge — แสดงเหนือป้อมที่ได้รับบัฟจากซัพพอร์ต
    if(!TBUFF[tw.type]&&CFG.t_dmg[tw.type]>0){
      const bm=getBuffMult(tw.col,tw.row);
      if(bm>1.001){
        const pct=Math.round((bm-1)*100);
        const pulse=.75+.25*Math.sin(Date.now()*.004);
        ctx.save();
        ctx.globalAlpha=pulse;
        ctx.font=`bold ${Math.round(CS*.22)}px Arial`;
        ctx.textAlign='center';ctx.textBaseline='bottom';
        ctx.fillStyle='#69f0ae';
        ctx.shadowColor='rgba(0,0,0,.7)';ctx.shadowBlur=3;
        ctx.fillText('💚+'+pct+'%',cx2,y+2);
        ctx.shadowBlur=0;
        ctx.restore();
      }
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
    // 🧱 Berserk aura — pulsing red ring
    if(e._berserk){
      ctx.globalAlpha=.2+.15*Math.abs(Math.sin(Date.now()*.018));
      ctx.strokeStyle='#ff1744';ctx.lineWidth=3;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+5,0,Math.PI*2);ctx.stroke();
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
    // 🐍 นาคาราช — aura พิษเขียวสั่นพร้อม regen glow
    if(e.ti===14){
      ctx.globalAlpha=.18+.13*Math.abs(Math.sin(Date.now()*.014));
      ctx.strokeStyle='#76ff03';ctx.lineWidth=4;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+6,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
      if(e.hp<e.mhp){
        ctx.globalAlpha=.28+.18*Math.abs(Math.sin(Date.now()*.022));
        ctx.strokeStyle='#ccff90';ctx.lineWidth=2;
        ctx.beginPath();ctx.arc(e.x,e.y,sz+11,0,Math.PI*2);ctx.stroke();
        ctx.globalAlpha=1;
      }
    }
    // ❄️ ราชาน้ำแข็ง — aura น้ำแข็งฟ้าขาวระยิบระยับ
    if(e.ti===16){
      ctx.globalAlpha=.20+.14*Math.abs(Math.sin(Date.now()*.013));
      ctx.strokeStyle='#b3e5fc';ctx.lineWidth=5;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+7,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=.12+.10*Math.abs(Math.sin(Date.now()*.019));
      ctx.strokeStyle='#ffffff';ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+13,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
    }
    // 🌍 เทพทำลาย — phase aura เปลี่ยนสีตาม phase
    if(e.ti===15&&e._phase){
      const _pc=e._phase===3?'#fff9c4':e._phase===2?'#ff6d00':'#9e9e9e';
      ctx.globalAlpha=.22+.15*Math.abs(Math.sin(Date.now()*.016));
      ctx.strokeStyle=_pc;ctx.lineWidth=5;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+8,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
      if(e._phase===3){
        ctx.globalAlpha=.12+.10*Math.abs(Math.sin(Date.now()*.025));
        ctx.strokeStyle='#64dd17';ctx.lineWidth=2;
        ctx.beginPath();ctx.arc(e.x,e.y,sz+15,0,Math.PI*2);ctx.stroke();
        ctx.globalAlpha=1;
      }
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
      ctx.globalAlpha=perfMode?(.18+.22*_sp):(.18+.22*_sp+.15*Math.sin(Date.now()*.006));
      ctx.strokeStyle='#90caf9';ctx.lineWidth=sz*.55;
      ctx.beginPath();ctx.arc(e.x,e.y,sz+5,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
    }
    {
      const _p0=currentPath[Math.min(e.pi,currentPath.length-1)],_p1=currentPath[Math.min(e.pi+1,currentPath.length-1)];
      const _dir=Math.atan2(_p1[1]-_p0[1],_p1[0]-_p0[0]);
      const _moveSpd=e.spd*e.slow*((e._enrageT>0)?(e._enrageMult||1):1)*((e._diveT>0)?1.5:1);
      const _mv={dir:_dir,spd:_moveSpd};
      // knockback visual — ดีดกลับ 3px ทวนทิศทางเดิน ช่วงแรกโดนตี
      const _kn=e._knockT||0;
      const _kx=_kn>0?Math.cos(_dir+Math.PI)*_kn*3:0;
      const _ky=_kn>0?Math.sin(_dir+Math.PI)*_kn*3:0;
      // 💨 ผีดิบ Phantom Phase — fade out + cyan glow
      // 🐲 Shadow Veil — fade to near-invisible
      const _phAlpha=e.ti===12&&e._phaseT>0?(.2+.15*Math.sin(Date.now()*.02)):e.ti===18&&e._veilInvis?(.15+.08*Math.sin(Date.now()*.02)):1;
      if(_phAlpha<1) ctx.globalAlpha=_phAlpha;
      if(!perfMode){ctx.shadowColor='rgba(0,0,0,.55)';ctx.shadowBlur=sz*.18;ctx.shadowOffsetY=sz*.1;}
      drawEnemySprite(ctx,e.ti,e.x+_kx,e.y+_ky,sz,Object.assign({},_mv,{_berserk:e._berserk}));
      if(!perfMode){ctx.shadowBlur=0;ctx.shadowOffsetY=0;drawEnemySprite(ctx,e.ti,e.x+_kx,e.y+_ky,sz,Object.assign({},_mv,{_berserk:e._berserk}));}
      ctx.globalAlpha=1;
      // 💨 phase shimmer ring
      if(e.ti===12&&e._phaseT>0){ctx.globalAlpha=.35*Math.abs(Math.sin(Date.now()*.015));ctx.strokeStyle='#80deea';ctx.lineWidth=2;ctx.beginPath();ctx.arc(e.x,e.y,sz+5,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;}
      // 🐲 Shadow Veil — ม่วงเข้มขณะ invisible
      if(e.ti===18&&e._veilInvis){ctx.globalAlpha=.22+.08*Math.sin(Date.now()*.018);ctx.strokeStyle='#7c4dff';ctx.lineWidth=3;ctx.beginPath();ctx.arc(e.x,e.y,sz+6,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;}
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
    // outer glow halo — soft radial gradient + ambient shadow bloom
    ctx.save();
    ctx.shadowColor=pc;ctx.shadowBlur=8;
    ctx.globalAlpha=.35;
    const _pg=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,8);
    _pg.addColorStop(0,pc);_pg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=_pg;
    ctx.beginPath();ctx.arc(p.x,p.y,8,0,Math.PI*2);ctx.fill();
    ctx.restore();
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
    if(!perfMode){ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=3;}
    ctx.fillText(p.txt,p.x,p.y);
    if(!perfMode) ctx.shadowBlur=0;
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
      if(G.weather.struckTowers&&G.weather.struckTowers.size){
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
    } else if(wid==='storm'){
      // ⛈️ storm: ฝนหนัก + overlay + สุ่ม lightning bolt
      ctx.save();ctx.fillStyle='rgba(40,30,80,.13)';ctx.fillRect(0,0,W,H);ctx.restore();
      // rain drops — หนักกว่า rain ปกติ, เอียงมากขึ้น
      ctx.save();ctx.strokeStyle='rgba(120,160,255,.35)';ctx.lineWidth=1.2;
      for(let i=0;i<65;i++){
        const rx=(i*47+_wNow*680)%(W+80)-40, ry=(i*89+_wNow*900)%(H+80)-40;
        ctx.beginPath();ctx.moveTo(rx,ry);ctx.lineTo(rx-14,ry+28);ctx.stroke();
      }
      ctx.restore();
      // lightning bolt แฟลช + zigzag
      if(Math.random()<0.012){
        ctx.save();ctx.fillStyle='rgba(180,160,255,.2)';ctx.fillRect(0,0,W,H);ctx.restore();
      }
      if(!G.weather._boltT) G.weather._boltT=0;
      G.weather._boltT-=(1/60);
      if(G.weather._boltT<=0){
        G.weather._boltT=2.5+Math.random()*4;
        // เก็บตำแหน่ง bolt ใหม่
        G.weather._bolt={x:Math.random()*W,dur:.18,t:.18};
      }
      if(G.weather._bolt&&G.weather._bolt.t>0){
        const b=G.weather._bolt; b.t-=(1/60);
        const alpha=Math.max(0,b.t/b.dur);
        ctx.save();ctx.globalAlpha=alpha*.85;ctx.strokeStyle='#e8eaff';ctx.lineWidth=2;ctx.shadowColor='#c5cae9';ctx.shadowBlur=8;
        ctx.beginPath();
        let bx=b.x,by=0,seg=7,segH=H/seg;
        ctx.moveTo(bx,by);
        for(let s=0;s<seg;s++){by+=segH;bx+=(Math.random()-.5)*30;ctx.lineTo(bx,by);}
        ctx.stroke();ctx.restore();
      }
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
  // V5: wave incoming banner
  if(G.waveBanner&&G.waveBanner.t>0){
    const bmax=G.waveBanner.dur||1.5,bt=G.waveBanner.t,prog=1-bt/bmax;
    const alpha=prog<.1?prog/.1:prog>.8?(1-prog)/.2:1;
    const slideX=prog<.1?(prog/.1-1)*cv.width*.28:prog>.8?((prog-.8)/.2)*cv.width*.22:0;
    const bCol=G.waveBanner.col||'#ffe082';
    ctx.save();ctx.globalAlpha=Math.max(0,Math.min(.94,alpha));
    const bw2=Math.min(310,cv.width*.75),bh2=50,bx2=cv.width/2-bw2/2+slideX,by2=cv.height*.34;
    ctx.fillStyle='rgba(0,0,0,.8)';
    ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx2,by2,bw2,bh2,13);else ctx.rect(bx2,by2,bw2,bh2);ctx.fill();
    ctx.strokeStyle=bCol;ctx.lineWidth=2;
    ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx2,by2,bw2,bh2,13);else ctx.rect(bx2,by2,bw2,bh2);ctx.stroke();
    ctx.fillStyle='#fff';ctx.font='bold 21px Arial';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.shadowColor=bCol;ctx.shadowBlur=12;
    ctx.fillText(G.waveBanner.text,cv.width/2+slideX,by2+bh2/2);
    ctx.shadowBlur=0;ctx.restore();
  }
  // ⚡ combo meter — persistent on-screen while a streak is active
  if(G.comboN>=2&&G.comboT>0){
    const mult=G.comboN>=10?3:G.comboN>=5?2:G.comboN>=3?1.5:1;
    const col=mult>=3?'#ff1744':mult>=2?'#ff9100':mult>=1.5?'#ffe234':'#80d8ff';
    const alpha=Math.min(1,G.comboT/0.5); // fade out in last 0.5s
    const pop=G.comboT>2.0?1+(G.comboT-2.0)*0.6:1; // brief pop on increment (comboT resets to 2.2)
    const cx=cv.width/2, cy=46;
    ctx.save(); ctx.globalAlpha=alpha;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.font='bold '+Math.round(26*pop)+'px Arial';
    ctx.fillStyle=col; ctx.shadowColor=col; ctx.shadowBlur=12;
    ctx.fillText('⚡ COMBO ×'+G.comboN,cx,cy);
    ctx.shadowBlur=0;
    if(mult>1){
      ctx.font='bold 13px Arial'; ctx.fillStyle='#fff';
      ctx.fillText('คะแนน ×'+mult,cx,cy+20);
    }
    // timer bar
    const bw=110,bh=4,bx=cx-bw/2,byb=cy+30;
    ctx.fillStyle='rgba(255,255,255,.18)';
    ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx,byb,bw,bh,2);else ctx.rect(bx,byb,bw,bh);ctx.fill();
    ctx.fillStyle=col;
    const tw=bw*Math.min(1,G.comboT/2.2);
    ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx,byb,tw,bh,2);else ctx.rect(bx,byb,tw,bh);ctx.fill();
    ctx.restore();
  }
}

/* ══ CANVAS EVENTS ══ */
/* ══ WAVE PREVIEW ══ */
function showWavePreview(){
  if(!G||G.waveActive||G.over||G.win) return;
  const nextWave=G.wave+1;
  let avail,bChance,specialLabel='';
  if(typeof isEndgame!=='undefined'&&isEndgame){
    // ใช้ egRound ของ wave ถัดไป ไม่ใช่ round ปัจจุบัน (round เปลี่ยนตอน startEgWave)
    const _previewRound=Math.floor((nextWave-1)/EG_WAVES_PER_ROUND);
    const _savedRound=egRound; egRound=_previewRound;
    avail=_getEgEnemyPool();
    egRound=_savedRound;
    bChance=0.08+_previewRound*.015;
    // เวฟพิเศษ Endgame: boss=×10, gold=×7, swarm=×4 (เริ่ม wave 6+ เหมือน startEgWave)
    if(nextWave>=6){const mod=nextWave%10;
    if(mod===0) specialLabel='<div style="color:#ff6b6b;font-weight:700;font-size:11px;margin-bottom:4px;">👹 บอสรัช! ศัตรู boss ออกถี่มาก</div>';
    else if(mod===7) specialLabel='<div style="color:#ffd54f;font-weight:700;font-size:11px;margin-bottom:4px;">💰 เวฟทอง — ทองรับ ×2</div>';
    else if(mod===4) specialLabel='<div style="color:#aed581;font-weight:700;font-size:11px;margin-bottom:4px;">🐝 เวฟฝูง — ศัตรูออกมาก +60%</div>';}
  } else {
    avail=currentStage.enemyTypes;
    bChance=currentStage.bossChance!==undefined?currentStage.bossChance:CFG.bossChance;
    if(bChance>0) specialLabel=`<div style="color:#ff8a65;font-size:10px;margin-bottom:4px;">⚠️ อาจมีบอส (${Math.round(bChance*100)}%)</div>`;
  }
  // simulate what enemies will spawn
  const count=CFG.enemyPerWaveBase+nextWave*CFG.enemyPerWaveInc;
  const tally={};
  for(let i=0;i<count;i++){
    const maxIdx=Math.min(avail.length-1,Math.ceil(nextWave/2)-1);
    let ei=avail[Math.floor(Math.random()*(maxIdx+1))];
    if(avail.includes(4)&&nextWave>=4&&Math.random()<bChance) ei=4;
    if(avail.includes(9)&&nextWave>=9&&Math.random()<bChance*.8) ei=9;
    tally[ei]=(tally[ei]||0)+1;
  }
  // title — wave number + boss flag
  const _hasBossInPool=(avail.includes(4)||avail.includes(9))&&bChance>0;
  const _titleEl=document.getElementById('wavePreviewTitle');
  if(_titleEl) _titleEl.innerHTML=`⚔️ คลื่นที่ <span style="color:#ffe082;font-size:13px;">${nextWave}</span>${_hasBossInPool?'  <span style="color:#ff6b6b;">💀 อาจมีบอส</span>':''}`;
  // weather hint
  let weatherHtml='';
  if(!isEndgame&&currentStage){
    const _pool=STAGE_WEATHER[Math.min(currentStage.id,STAGE_WEATHER.length-1)]||[];
    if(currentStage.weatherMode==='fixed'&&currentStage.weatherFixed){
      const _fw=WEATHERS.find(w=>w.id===currentStage.weatherFixed);
      if(_fw) weatherHtml=`<div style="font-size:10px;color:#b0bec5;margin-bottom:5px;">${_fw.icon} ${_fw.name} — ${_fw.desc}</div>`;
    } else if(_pool.length>0&&currentStage.weatherChance>0){
      const _wnames=_pool.map(id=>{const w=WEATHERS.find(x=>x.id===id);return w?w.icon+w.name:'';}).filter(Boolean).join(', ');
      weatherHtml=`<div style="font-size:10px;color:#b0bec5;margin-bottom:5px;">🌦️ อาจเกิด: ${_wnames}</div>`;
    }
  }
  let html=weatherHtml+specialLabel;
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
  // decoration check — เหมืองทองขุดฟรี, อื่นๆ บล็อก
  const _dt=getDecoType(col,row);
  if(_dt!==null){
    if(type!==6){showToast('⛏️ เลือกเครื่องมือขุดก่อน ('+getDigCost(_dt)+' ทอง)');return false;}
  }
  const cost=getTowerCost(type);
  if(G.gold<cost){showToast('💰 ต้องการ '+cost+' ทอง!');return false;}
  G.gold-=cost;
  if(_dt!==null&&type===6){G.dugCells.add(col+','+row);delete G.obstacles[col+','+row];G.obstaclesCleared++;}
  G.towers.push({col,row,type,lv:1,dmgLv:1,rngLv:1,rateLv:1,star:1,cd:0,angle:0,spawnAnim:1.0,awakened:false});
  _invalidateBg();
  // FX: ring pulse + burst particles + flash stamp
  const bx=col*CS+CS/2, by=row*CS+CS/2;
  G.fxFlash.push({x:bx,y:by,r:CS*.6,life:.22,maxLife:.22,col:'rgba(255,255,255,.55)'});
  G.fxRings.push({x:bx,y:by,r:0,maxR:CS*1.8,life:1,col:TACCENT[type],lw:3});
  G.fxRings.push({x:bx,y:by,r:0,maxR:CS*1.1,life:.7,col:'#fff',lw:1.5,delay:.07});
  for(let k=0;k<12;k++){
    const ang=k/12*Math.PI*2, spd=1.5+Math.random()*1.8;
    G.particles.push({x:bx,y:by,txt:k%3===0?TICONS[type]:'●',col:k%3===0?'#ffe234':TACCENT[type],
      life:.9,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:2.0,scale:k%3===0?1.3:1});
  }
  addParticle(col*CS+CS/2,row*CS+CS/2,'✅ สร้างแล้ว!','#ffe234');
  if(typeof questProgress==='function') questProgress('build',1); // 📅 daily quest
  updateHUD();
  if(!localStorage.getItem('tq_hint_place')){
    localStorage.setItem('tq_hint_place','1');
    setTimeout(()=>showToast('💡 แตะป้อมที่วางแล้วเพื่อ upgrade / ขาย'),1200);
  }
  const sameType=G.towers.filter(t=>t.type===type).length;
  if(sameType>=2&&!localStorage.getItem('tq_hint_merge')){
    localStorage.setItem('tq_hint_merge','1');
    setTimeout(()=>{
      showToast('💡 ลาก 2 ป้อมชนิดเดียวกัน ★ เท่ากัน ทับกันเพื่อรวม → ★ สูงขึ้น!');
      if(G) G.mergeHintPulseT=4.0; // pulse highlight บนป้อมที่ merge ได้ 4 วินาที
    },2400);
  }
  return true;
}
function onCanvasClick(e){
  if(_suppressNextClick){_suppressNextClick=false;return;}
  if(!G||G.over||G.win||paused) return;
  const rect=cv.getBoundingClientRect();
  const col=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
  const row=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
  if(col<0||col>=COLS||row<0||row>=ROWS) return;
  if(G.skillAiming){_castMeteorAt(col,row);return;} // ☄️ เล็งอุกกาบาต → ทิ้งตรงจุด
  G.selTowerInfo=null; hideTowerPopup(); // deselect range on any click
  if(G.selDig){ digCell(col,row); return; }
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
    const _rect=cv.getBoundingClientRect();
    const _hc=Math.floor((e.clientX-_rect.left)*cv.width/_rect.width/CS);
    const _hr=Math.floor((e.clientY-_rect.top)*cv.height/_rect.height/CS);
    const _dt=(_hc>=0&&_hc<COLS&&_hr>=0&&_hr<ROWS)?getDecoType(_hc,_hr):null;
    const gpRect=_gpRectCache||(()=>{_gpRectCache=document.getElementById('gp').getBoundingClientRect();return _gpRectCache;})();
    // helper — แสดง tooltip ของป้อมที่วางแล้ว คืน true ถ้าแสดงได้
    const _tryShowTowerTip=(tw)=>{
      if(!tw||G.over||G.win) return false;
      const _lv=tw.lv||1;
      const _upCost=Math.round(CFG.t_cost[tw.type]*(_lv+1)*.85);
      const _dmg=Math.round(getTowerDmg(tw.type,_lv));
      const _rng=getTowerRange(tw.type,tw.rngLv||_lv).toFixed(1);
      const _starStr='★'.repeat(tw.star||1)+'☆'.repeat(Math.max(0,4-(tw.star||1)));
      info.innerHTML=TICONS[tw.type]+' <b>'+TNAMES[tw.type]+'</b> Lv'+_lv+' '+_starStr
        +'<br>🎯 ระยะ '+_rng+' | ⚔️ '+_dmg
        +(_lv<5?'<br>💰 อัพเกรด: <b>'+_upCost+'</b> ทอง':'<br><span style="color:#ffe082">⭐ อัพเกรดสูงสุดแล้ว</span>');
      info.style.left=(e.clientX-gpRect.left+14)+'px';
      info.style.top=(e.clientY-gpRect.top-10)+'px';
      info.style.display='block';
      return true;
    };
    const _hovTw=G.towers.find(t=>t.col===_hc&&t.row===_hr);
    if(G.selDig&&!G.over&&!G.win&&!paused){
      if(_dt!==null){
        const _dnames=['🌿 พุ่มไม้','🪨 หิน','🌳 ต้นไม้'];
        info.innerHTML=_dnames[_dt]+'<br>⛏️ คลิกขุดออก: <b>'+getDigCost(_dt)+'</b> ทอง';
        info.style.left=(e.clientX-gpRect.left+14)+'px';
        info.style.top=(e.clientY-gpRect.top-10)+'px';
        info.style.display='block';
      } else if(!_tryShowTowerTip(_hovTw)) { info.style.display='none'; }
    } else if(G.selTwr>=0&&!G.over&&!G.win&&!paused){
      const t=G.selTwr;
      const placedN=G.towers.filter(tw=>tw.type===t).length;
      const costStr='💰 '+getTowerCost(t)+(placedN>0?` <span style="opacity:.6;">(+15×${placedN})</span>`:'');
      let extra='';
      if(_dt!==null) extra=t===6?` <span style="color:#a5d6a7">(เหมืองขุดได้ฟรี!)</span>`
        :`<br><span style="color:#ff8a65">⛏️ มีฉากกีดขวาง ${getDigCost(_dt)} ทอง</span>`;
      info.innerHTML=TICONS[t]+' '+TNAMES[t]+'<br>🎯 ระยะ '+getTowerRange(t,1).toFixed(1)+' | ⚔️ '+Math.round(getTowerDmg(t,1))+' | '+costStr+extra;
      info.style.left=(e.clientX-gpRect.left+14)+'px';
      info.style.top=(e.clientY-gpRect.top-10)+'px';
      info.style.display='block';
    } else if(_dt!==null&&!G.over&&!G.win) {
      // ชี้บน obstacle ในโหมดปกติ — แสดงราคาขุดได้เลย
      const _dnames=['🌿 พุ่มไม้','🪨 หิน','🌳 ต้นไม้'];
      info.innerHTML=_dnames[_dt]+'<br>⛏️ ขุดออก: <b>'+getDigCost(_dt)+'</b> ทอง';
      info.style.left=(e.clientX-gpRect.left+14)+'px';
      info.style.top=(e.clientY-gpRect.top-10)+'px';
      info.style.display='block';
    } else if(!_tryShowTowerTip(_hovTw)) {
      info.style.display='none';
    }
  }
}
function onCanvasLeave(e){
  const info=document.getElementById('rangeInfo');if(info)info.style.display='none';
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
    for(let j=0;j<9;j++){const b=document.getElementById('tb'+j);if(b)b.classList.toggle('sel',j===_dragTwr);}
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
    for(let j=0;j<9;j++){const b=document.getElementById('tb'+j);if(b)b.classList.remove('sel');}
  }
  _dragTwr=-1; _dragging=false;
}

/* ══ DRAG-TO-MERGE — ลากป้อมบนกระดานทับป้อมชนิด/ดาวเดียวกันเพื่อรวมดาว ══ */
let _twrDragTw=null,_twrDragging=false,_twrDragSX=0,_twrDragSY=0,_suppressNextClick=false;
let _twrDragHoverCol=-1,_twrDragHoverRow=-1;
function onCanvasPointerDown(e){
  if(!G||G.over||G.win||paused) return;
  if(G.skillAiming) return; // ☄️ กำลังเล็งอุกกาบาต — ปล่อยให้ click จัดการ
  if(G.selTwr>=0) return; // กำลังวางป้อมใหม่จาก toolbar อยู่ — ไม่เกี่ยวกับการลากรวม
  const rect=cv.getBoundingClientRect();
  const col=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
  const row=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
  const tw=G.towers.find(t=>t.col===col&&t.row===row);
  if(!tw) return; // ลากเพื่อรวม (ทุกช่วง) หรือย้าย (เฉพาะตอนรอเวฟ) — Awaken/4★ ลากเพื่อย้ายได้
  _twrDragTw=tw; _twrDragging=false;
  _twrDragSX=e.clientX; _twrDragSY=e.clientY;
  document.addEventListener('pointermove',_onTwrDragMove);
  document.addEventListener('pointerup',_onTwrDragUp);
}
function canMergeTowers(src,target){
  return !!target&&target!==src&&target.type===src.type&&(target.star||1)===(src.star||1)
    &&!src.awakened&&!target.awakened&&(src.star||1)<4;
}
function _onTwrDragMove(e){
  if(!_twrDragTw) return;
  if(!_twrDragging&&Math.hypot(e.clientX-_twrDragSX,e.clientY-_twrDragSY)>10){
    _twrDragging=true;
    hideTowerPopup(); if(G) G.selTowerInfo=null;
    const ghost=document.getElementById('dragGhost');
    ghost.textContent=TICONS[_twrDragTw.type]; ghost.style.display='flex';
  }
  if(!_twrDragging) return;
  e.preventDefault();
  const ghost=document.getElementById('dragGhost');
  ghost.style.left=e.clientX+'px'; ghost.style.top=e.clientY+'px';
  // อัพเดทช่องที่ชี้อยู่ เพื่อไฮไลต์ว่ารวมได้หรือไม่บนกระดาน
  if(cv&&G){
    const rect=cv.getBoundingClientRect();
    if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
      _twrDragHoverCol=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
      _twrDragHoverRow=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
    }else{
      _twrDragHoverCol=-1; _twrDragHoverRow=-1;
    }
  }
}
function _onTwrDragUp(e){
  document.removeEventListener('pointermove',_onTwrDragMove);
  document.removeEventListener('pointerup',_onTwrDragUp);
  if(_twrDragging){
    _suppressNextClick=true;
    if(cv&&G){
      const rect=cv.getBoundingClientRect();
      if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
        const col=Math.floor((e.clientX-rect.left)*cv.width/rect.width/CS);
        const row=Math.floor((e.clientY-rect.top)*cv.height/rect.height/CS);
        const target=G.towers.find(t=>t.col===col&&t.row===row&&t!==_twrDragTw);
        if(target) tryMergeTowers(_twrDragTw,target);
        else tryMoveTower(_twrDragTw,col,row);
      }
    }
    document.getElementById('dragGhost').style.display='none';
  }
  _twrDragTw=null; _twrDragging=false; _twrDragHoverCol=-1; _twrDragHoverRow=-1;
}
/* รวมป้อมชนิด/ดาวเดียวกัน 2 ตัว → ป้อมเดียว ดาว+1 รีเซ็ตแต้มสกิลเป็นของดาวใหม่ */
function tryMergeTowers(src,target){
  if(!G) return false;
  if(src.type!==target.type){showToast('❌ รวมได้แค่ป้อมชนิดเดียวกัน!');return false;}
  if((src.star||1)!==(target.star||1)){showToast('❌ รวมได้แค่ป้อม★เท่ากัน!');return false;}
  if(src.awakened||target.awakened){showToast('⚡ ป้อม Awaken แล้วรวมต่อไม่ได้!');return false;}
  const curStar=target.star||1;
  if(curStar>=4){showToast('🔝 ป้อม 4★ คือขั้นสูงสุดแล้ว!');return false;}
  const newStar=curStar+1;
  if(newStar===4){_showMerge4Confirm(src,target);return false;}
  G.towers=G.towers.filter(t=>t!==src&&t!==target);
  G.selTowerInfo=null;
  const merged={col:target.col,row:target.row,type:target.type,star:newStar,lv:1,dmgLv:1,rngLv:1,rateLv:1,cd:0,angle:0,spawnAnim:1.0,awakened:false};
  if(G.gmTimers){delete G.gmTimers[src.col+'_'+src.row];delete G.gmTimers[target.col+'_'+target.row];}
  G.towers.push(merged); _invalidateBg();
  const mx=target.col*CS+CS/2,my=target.row*CS+CS/2;
  // ── Merge VFX (1-3★ only; 4★ is handled by _showMerge4Confirm) ──
  G.hitStopT=0.12;
  G.shakeT=Math.min(G.shakeT+0.08,0.25);
  G.fxFlash.push({x:mx,y:my,r:CS*3.5,life:0.32,maxLife:0.32,col:'#ffd54f'});
  G.fxRings.push({x:mx,y:my,r:0,maxR:CS*2.8,life:1.2,lw:4,col:'#ffd54f',delay:0});
  G.fxRings.push({x:mx,y:my,r:0,maxR:CS*1.6,life:.9,lw:6,col:'#fff9c4',delay:.05});
  G.fxRings.push({x:mx,y:my,r:0,maxR:CS*2,life:.7,lw:2,col:'#ffecb3',delay:.12});
  const _cnt=16;
  for(let k=0;k<_cnt;k++){
    const ang=k/_cnt*Math.PI*2,spd=1.8+Math.random()*2;
    G.particles.push({x:mx,y:my,txt:'★',col:k%2===0?'#ffd54f':'#fff9c4',life:1.3,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:1.3,scale:0.8+Math.random()*0.5});
  }
  G.dmgNums.push({x:mx,y:my-CS*.5,txt:'★'.repeat(newStar)+' UP!',col:'#ffd54f',life:1.4,vy:-2,vx:0,decay:0.6,scale:2.2});
  showToast(`✨ ${TNAMES[target.type]} รวมสำเร็จ! → ${'★'.repeat(newStar)} (รับแต้มสกิลใหม่ ${newStar} แต้ม)`);
  updateHUD();
  return true;
}

/* ย้ายป้อมไปช่องว่าง — เฉพาะช่วงรอเวฟ (ไม่ใช่ระหว่างเวฟ) */
function tryMoveTower(tw,col,row){
  if(!G) return false;
  if(col===tw.col&&row===tw.row) return false;
  if(G.waveActive){showToast('❌ ย้ายป้อมได้เฉพาะช่วงรอเวฟ!');return false;}
  if(col<0||col>=COLS||row<0||row>=ROWS) return false;
  if(currentPset.has(col+','+row)){showToast('❌ วางบนเส้นทางไม่ได้!');return false;}
  if(G.towers.find(t=>t.col===col&&t.row===row)){showToast('❌ ช่องนี้มีป้อมอยู่แล้ว!');return false;}
  // ย้าย timer เหมืองทองตามตำแหน่งใหม่ (key ผูกกับ col_row)
  if(G.gmTimers){const ok2=tw.col+'_'+tw.row;if(G.gmTimers[ok2]!==undefined){G.gmTimers[col+'_'+row]=G.gmTimers[ok2];delete G.gmTimers[ok2];}}
  tw.col=col; tw.row=row;
  const nx=col*CS+CS/2, ny=row*CS+CS/2;
  G.fxRings.push({x:nx,y:ny,r:0,maxR:CS*1.4,life:.8,col:TACCENT[tw.type],lw:2.5});
  addParticle(nx,ny-CS*.35,'↪️ ย้ายแล้ว','#64b5f6');
  updateHUD();
  return true;
}

function _showMerge4Confirm(src,target){
  const tname=(typeof TNAMES!=='undefined'&&TNAMES[target.type])||target.type;
  let ov=document.getElementById('merge4ConfirmOv');
  if(!ov){ov=document.createElement('div');ov.id='merge4ConfirmOv';ov.style.cssText='position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;';document.body.appendChild(ov);}
  ov.innerHTML=`<div style="background:linear-gradient(160deg,#1a1200,#2a1a00);border:2px solid #ffd54f;border-radius:18px;padding:24px 22px;max-width:280px;text-align:center;box-shadow:0 0 40px rgba(255,200,50,.3);">
    <div style="font-size:36px;margin-bottom:8px;">⭐⭐⭐⭐</div>
    <div style="color:#ffe082;font-size:16px;font-weight:900;margin-bottom:6px;">รวมเป็น 4★?</div>
    <div style="color:rgba(255,255,255,.65);font-size:12px;line-height:1.6;margin-bottom:20px;">ป้อม <b style="color:#fff;">${tname}</b> จะถูกรวม<br>เป็น <b style="color:#ffe082;">4★ ขั้นสูงสุด</b> — ย้อนกลับไม่ได้</div>
    <div style="display:flex;gap:10px;justify-content:center;">
      <button id="merge4No" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:12px;color:rgba(255,255,255,.7);font-size:14px;font-weight:700;padding:11px 28px;cursor:pointer;">✕ ยกเลิก</button>
      <button id="merge4Yes" style="background:linear-gradient(135deg,#ffd54f,#ff9800);border:none;border-radius:12px;color:#1a0800;font-size:14px;font-weight:900;padding:11px 28px;cursor:pointer;">✔ ยืนยัน</button>
    </div>
  </div>`;
  ov.style.display='flex';
  ov.querySelector('#merge4No').onclick=()=>{ov.style.display='none';};
  ov.querySelector('#merge4Yes').onclick=()=>{
    ov.style.display='none';
    if(!G) return;
    G.towers=G.towers.filter(t=>t!==src&&t!==target);
    const merged={col:target.col,row:target.row,type:target.type,star:4,lv:1,dmgLv:1,rngLv:1,rateLv:1,cd:0,angle:0,spawnAnim:1.0,awakened:false};
    if(G.gmTimers){delete G.gmTimers[src.col+'_'+src.row];delete G.gmTimers[target.col+'_'+target.row];}
    G.towers.push(merged); _invalidateBg();
    const mx=target.col*CS+CS/2,my=target.row*CS+CS/2;
    G.hitStopT=0.22;G.shakeT=Math.min(G.shakeT+0.2,0.5);
    G.fxFlash.push({x:mx,y:my,r:CS*5,life:0.45,maxLife:0.45,col:'#fff9c4'});
    G.fxFlash.push({x:mx,y:my,r:CS*2.5,life:0.28,maxLife:0.28,col:'#ff6f00'});
    G.fxRings.push({x:mx,y:my,r:0,maxR:CS*4.5,life:1.2,lw:6,col:'#ffd54f',delay:0});
    G.fxRings.push({x:mx,y:my,r:0,maxR:CS*3,life:.9,lw:8,col:'#fff9c4',delay:.05});
    G.fxRings.push({x:mx,y:my,r:0,maxR:CS*5.5,life:.7,lw:2,col:'#ffecb3',delay:.12});
    G.fxRings.push({x:mx,y:my,r:0,maxR:CS*7,life:.5,lw:2,col:'rgba(255,200,50,.4)',delay:.2});
    for(let k=0;k<24;k++){const ang=k/24*Math.PI*2,spd=2.5+Math.random()*2;G.particles.push({x:mx,y:my,txt:k%2===0?'✦':'★',col:k%2===0?'#ffd54f':'#fff9c4',life:1.6,vy:Math.sin(ang)*spd,vx:Math.cos(ang)*spd,decay:1.1,scale:1+Math.random()*0.5});}
    G.dmgNums.push({x:mx,y:my-CS*.5,txt:'★★★★ MAX!',col:'#ffeb3b',life:1.8,vy:-2,vx:0,decay:0.6,scale:2.8});
    if(G.dmgNums.length>60) G.dmgNums.splice(0,G.dmgNums.length-60);
    showToast(`✨ ${TNAMES[target.type]} รวมสำเร็จ! → ★★★★ (รับแต้มสกิลใหม่ 4 แต้ม)`);
    updateHUD();
  };
}

/* ══ ⭐ ACTIVE SKILL RUNTIME (v4.0.0 — Phase 3) ══
   อ่านการ์ดที่ใส่ (tq_askill) ตอนเข้าด่าน → ปุ่ม HUD + cooldown + เอฟเฟกต์.
   ใช้ได้ทั้ง story (update) และ endgame (updateEg). เริ่มรันด้วย cooldown เต็ม. */
function _initRunSkill(){
  if(!G) return;
  const id=(typeof loadActiveSkill==='function')?loadActiveSkill():null;
  const star=id?getSkillStar(id):0;
  G.skillId=(id&&star>0)?id:null;
  if(G.skillId){
    const st=getSkillStat(G.skillId,star);
    const red=(typeof loadTalentLv==='function')?(loadTalentLv('skcool')*0.005):0;
    G.skillCdMax=st.cd*(1-red); G.skillCd=0; // พร้อมใช้ตั้งแต่ต้น
  } else{G.skillCdMax=0;G.skillCd=0;}
  G.skillDmgMult=1;G.skillRateMult=1;G.skillDmgT=0;G.skillGoldMult=0;G.skillGoldT=0;G.skillBlockT=0;G.skillAiming=false;
  _setupSkillBtn();
}
function _setupSkillBtn(){
  const btn=document.getElementById('skillBtn');if(!btn)return;
  if(!G||!G.skillId){btn.style.display='none';return;}
  const d=getSkillDef(G.skillId), star=getSkillStar(G.skillId);
  btn.style.display='flex';
  document.getElementById('skillFabIco').textContent=d.icon;
  document.getElementById('skillFabStar').textContent='★'+star;
  btn.style.setProperty('--skc',d.color);
  // restore saved drag position
  try{
    const p=JSON.parse(localStorage.getItem('tq_fabpos')||'null');
    if(p){btn.style.left=p.l+'%';btn.style.top=p.t+'%';btn.style.transform='translate(-50%,-50%)';}
    else{btn.style.left='';btn.style.top='';btn.style.transform='';}
  }catch(e){}
  _initFabDrag();
  _renderSkillBtn();
}
function _initFabDrag(){
  const btn=document.getElementById('skillBtn');
  if(!btn||btn._dragInit) return;
  btn._dragInit=true;
  btn.addEventListener('click',()=>activateSkill());
}
function _renderSkillBtn(){
  const btn=document.getElementById('skillBtn');if(!btn||!G||!G.skillId)return;
  const cd=Math.max(0,G.skillCd), ready=cd<=0;
  const ov=document.getElementById('skillFabCd');
  if(ov) ov.style.height=(G.skillCdMax>0?(cd/G.skillCdMax*100):0)+'%';
  const sec=document.getElementById('skillFabSec');
  if(sec) sec.textContent=ready?'':Math.ceil(cd);
  btn.classList.toggle('ready',ready);
  btn.classList.toggle('aiming',!!G.skillAiming);
}
function _tickSkill(dt){
  if(!G||!G.skillId) return;
  if(G.skillCd>0&&G.waveActive) G.skillCd=Math.max(0,G.skillCd-dt);
  if(G.skillDmgT>0){G.skillDmgT-=dt;if(G.skillDmgT<=0){G.skillDmgT=0;G.skillDmgMult=1;G.skillRateMult=1;}}
  if(G.skillGoldT>0){G.skillGoldT-=dt;if(G.skillGoldT<=0){G.skillGoldT=0;G.skillGoldMult=0;}}
  if(G.skillBlockT>0) G.skillBlockT=Math.max(0,G.skillBlockT-dt);
  _renderSkillBtn();
}
function activateSkill(){
  if(!G||!G.skillId||G.over||G.win) return;
  if(G.skillAiming){G.skillAiming=false;_renderSkillBtn();return;} // กดซ้ำตอนเล็ง=ยกเลิก
  if(G.skillCd>0){showToast('⏳ สกิลยังไม่พร้อม ('+Math.ceil(G.skillCd)+'s)');return;}
  if(G.skillId==='meteor'){G.skillAiming=true;showToast('🎯 แตะตำแหน่งที่จะทิ้งอุกกาบาต');_renderSkillBtn();return;}
  const st=getSkillStat(G.skillId,getSkillStar(G.skillId));
  if(G.skillId==='freeze') _castFreeze(st);
  else if(G.skillId==='goldrush') _castGoldrush(st);
  else if(G.skillId==='overdrive') _castOverdrive(st);
  else if(G.skillId==='barrier') _castBarrier(st);
  _startSkillCd();
}
function _startSkillCd(){if(G){G.skillCd=G.skillCdMax;_renderSkillBtn();}}
function _castMeteorAt(col,row){
  const st=getSkillStat('meteor',getSkillStar('meteor'));
  const cx=col*CS+CS/2, cy=row*CS+CS/2, rad=st.radius*CS;
  G.enemies.forEach(e=>{if(e.alive&&Math.hypot(e.x-cx,e.y-cy)<=rad) applyDmg(e,st.dmg,null,true);});
  // FX: วงระเบิด + เขย่าจอ + สะเก็ดไฟ
  G.fxRings.push({x:cx,y:cy,r:4,maxR:rad*1.1,life:.8,lw:4,col:'#ff7043',delay:0});
  G.fxRings.push({x:cx,y:cy,r:2,maxR:rad*.7,life:.6,lw:6,col:'#ffd54f',delay:.05});
  for(let k=0;k<22;k++){const a=k/22*Math.PI*2,sp=2.5+Math.random()*3.5;
    G.particles.push({x:cx,y:cy,txt:'●',col:k%2?'#ff7043':'#ffd54f',life:.7+Math.random()*.4,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2.2,scale:.7+Math.random()*.5});}
  G.particles.push({x:cx,y:cy-CS*.5,txt:'☄️ BOOM!',col:'#ff7043',life:1.1,vy:-1.4,vx:0,decay:1.1,scale:1.3});
  G.shakeT=Math.min(.7,G.shakeT+.45);
  if(typeof _playSound==='function') _playSound('boss_spawn');
  G.skillAiming=false; _startSkillCd();
}
function _castFreeze(st){
  const _freezeBlocked=G.weather&&G.weather.slowImmune;
  let n=0;G.enemies.forEach(e=>{if(e.alive&&!_freezeBlocked){e.slow=0;e.slowT=Math.max(e.slowT||0,st.dur);n++;
    G.particles.push({x:e.x,y:e.y-ESIZES[e.ti]-6,txt:'❄',col:'#80d8ff',life:.9,vy:-1,vx:0,decay:1.4,scale:.9});}});
  G.fxFlash.push({x:COLS*CS/2,y:ROWS*CS/2,r:Math.max(COLS,ROWS)*CS,life:.4,col:'rgba(128,216,255,.25)'});
  addParticle(COLS*CS/2,ROWS*CS/2,'❄️ แช่แข็งสนาม '+st.dur+'s','#80d8ff');
  if(typeof _playSound==='function') _playSound('ice');
}
function _castGoldrush(st){
  G.gold+=st.gold; G.skillGoldMult=st.bonus; G.skillGoldT=st.dur; updateHUD();
  addParticle(COLS*CS/2,ROWS*CS/2,'💰 +'+st.gold+' · ทอง/ฆ่า +'+Math.round(st.bonus*100)+'%','#ffd54f');
  for(let k=0;k<10;k++) G.particles.push({x:COLS*CS/2+(Math.random()-.5)*CS*2,y:ROWS*CS*.5,txt:'🪙',col:'#ffd54f',life:1.2,vy:-1.6-Math.random(),vx:(Math.random()-.5),decay:.9,scale:.9});
  if(typeof _playSound==='function') _playSound('gacha_small');
}
function _castOverdrive(st){
  G.skillDmgMult=1+st.dmg; G.skillRateMult=1+st.rate; G.skillDmgT=st.dur;
  addParticle(COLS*CS/2,ROWS*CS/2,'⚡ พลังโจมตี +'+Math.round(st.dmg*100)+'% / ยิงเร็ว +'+Math.round(st.rate*100)+'%','#ffca28');
  G.towers.forEach(tw=>{G.fxRings.push({x:tw.col*CS+CS/2,y:tw.row*CS+CS/2,r:2,maxR:CS*.8,life:.6,lw:2,col:'#ffca28',delay:Math.random()*.2});});
  if(typeof _playSound==='function') _playSound('gacha_small');
}
function _castBarrier(st){
  G.hp=Math.min(G.maxHp,G.hp+st.heal); G.skillBlockT=st.block; updateHUD();
  addParticle(COLS*CS/2,ROWS*CS/2,'🛡️ +'+st.heal+' HP · กันดาเมจ '+st.block+'s','#b388ff');
  G.fxRings.push({x:COLS*CS/2,y:ROWS*CS/2,r:4,maxR:Math.max(COLS,ROWS)*CS*.6,life:.9,lw:4,col:'#b388ff',delay:0});
  if(typeof _playSound==='function') _playSound('shield_break');
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
  if(egRound===5) return [0,1,2,3,4,5,6,7,8,10];     // Round 6: +Shaman
  if(egRound===6) return [0,1,2,3,4,5,6,7,8,9,10];  // Round 7: +Final Boss
  if(egRound===7) return [0,1,2,3,4,5,6,7,8,9,10,11]; // Round 8: +Berserker
  if(egRound===8) return [0,1,2,3,4,5,6,7,8,9,10,11,12]; // Round 9: +Phantom
  return [0,1,2,3,4,5,6,7,8,9,10,11,12,13];           // Round 10+: ทุกตัวรวม Act 2
}
function startEndgame(){
  openEgTowerSelection();
}
function _doStartEndgame(){
  isEndgame=true; egRound=0;
  if(typeof hideTowerPopup==='function') hideTowerPopup();
  G=null; // reset ทุกสถิติ เวฟ kills score ให้เป็น 0 สำหรับ run ใหม่
  // 🎲 สุ่มแมพใหม่ทุกครั้ง — หยิบ path + ธีมสีจากด่านเนื้อเรื่อง (กันซ้ำแมพเดิมติดกัน)
  let _mi=Math.floor(Math.random()*STAGES.length);
  if(STAGES.length>1&&_mi===_egLastMap) _mi=(_mi+1)%STAGES.length;
  _egLastMap=_mi;
  const _m=STAGES[_mi];
  EG_PATH=_m.path;
  currentStage={id:99,name:'Endgame',icon:'🔥',waves:999,
    enemyTypes:_getEgEnemyPool(),unlockedTowers:[...selectedTowersForStage],unlocks:null,
    bossChance:.10,
    path:EG_PATH,bgColor:_m.bgColor,pathColor:_m.pathColor,
    grassColors:_m.grassColors};
  currentPath=EG_PATH;
  currentPset=new Set(EG_PATH.map(p=>p[0]+','+p[1]));
  _invalidateBg();
  showScreen('gp',true);
  cv=document.getElementById('cv'); ctx=cv.getContext('2d');
  cv.width=COLS*CS; cv.height=ROWS*CS;
  cv.removeEventListener('click',onCanvasClick); cv.addEventListener('click',onCanvasClick);
  cv.removeEventListener('mousemove',onCanvasMove); cv.addEventListener('mousemove',onCanvasMove);
  cv.removeEventListener('pointerleave',onCanvasLeave); cv.addEventListener('pointerleave',onCanvasLeave);
  cv.removeEventListener('touchstart',_onCvTouchStart); cv.addEventListener('touchstart',_onCvTouchStart,{passive:false});
  cv.removeEventListener('pointerdown',onCanvasPointerDown); cv.addEventListener('pointerdown',onCanvasPointerDown);
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
  G.gold=CFG.startGold+(egDiff===0?egRound*35:0); // bonus gold per round (เฉพาะโหมดง่าย)
  G.hp=CFG.baseHP; G.maxHp=CFG.baseHP;
  if(typeof applyTalents==='function') applyTalents(); // 🌳 talent tree (gold/HP/dmg/goldMult)
  _initRunSkill(); // ⭐ ตั้งค่าการ์ดสกิลที่ใส่ไว้
  document.getElementById('endOverlay').style.display='none';
  document.getElementById('pauseScreen').style.display='none';
  document.getElementById('waveBtn').disabled=false;
  document.getElementById('maxWaveTxt').textContent='∞';
  const _egMh=document.getElementById('egMilestoneHud');if(_egMh)_egMh.style.display='inline';
  document.getElementById('stageBadge').textContent='🔥 Round '+(egRound+1);
  document.getElementById('stageBadge').className='eg-round-badge';
  for(let i=0;i<9;i++){const b=document.getElementById('tb'+i);if(b){b.classList.remove('sel','locked-tower');const c=document.getElementById('tc'+i);if(c)c.textContent='💰'+getTowerCost(i);}}
  paused=false; speed=1; autoWave=false; _settingsPausedGame=false;
  document.getElementById('speedBtn').textContent='1×';
  document.getElementById('pauseBtn').textContent='⏸';
  document.getElementById('settingsScreen').style.display='none';
  const ab=document.getElementById('autoBtn');if(ab){ab.classList.remove('on');ab.textContent='🔁 อัตโนมัติ';}
  updateTowerPanel();
  updateHUD();
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  startBgm();
  let last=performance.now(),_renderTick=0;
  function loop(ts){
    if(!G) return;
    if(paused){rafId=requestAnimationFrame(loop);return;}
    const rdt=(ts-last)/1000; last=ts;
    const dt=Math.min(rdt,.1)*speed;
    _renderTick++;
    const _doRender=speed<=1||(_renderTick%speed===0);
    if(G.hitStopT>0){ G.hitStopT-=rdt; render(); }
    else { updateEg(dt); if(_doRender) render(); }
    if(!G.over&&!G.win) rafId=requestAnimationFrame(loop);
  }
  rafId=requestAnimationFrame(loop);
}

function getEgEnemyHP(ti,wave){
  // boss types (4=บอส, 9=จอมมาร) scale ช้ากว่า เพื่อไม่ให้ unkillable เร็วเกิน
  const isBossType=MTYPE[ti]===1;
  const roundScale=isBossType?0.15:0.22;
  const roundBonus=1+egRound*roundScale; // ไม่มี cap → สเกลต่อไปเรื่อยๆ
  return CFG.m_hp[ti]*(1+wave*CFG.waveMult)*roundBonus*EG_DIFF_MULT[egDiff];
}
function getEgEnemySpd(ti){
  const roundBonus=1+egRound*0.04;
  return Math.min(CFG.m_spd[ti]*roundBonus*EG_DIFF_MULT[egDiff],CFG.spdCap);
}
function getEgRewardBonus(){
  // reward สเกลตาม HP — 0.20/round (เดิม 0.10 ทำให้ gold lag หลัง round 5)
  return 1+egRound*0.20;
}

function spawnEgEnemy(ti){
  const _elite=G.eliteWave||false;
  const hp=getEgEnemyHP(ti,G.wave)*(_elite?1.8:1);
  const shBase=MSHIELD[ti]||0;
  const sh=shBase>0?Math.round(shBase*(1+egRound*.25)):0;
  const reward=Math.round(CFG.m_rew[ti]*getEgRewardBonus()*(_elite?2.5:1));
  G.enemies.push({
    ti,pi:0,prog:0,
    x:EG_PATH[0][0]*CS+CS/2,y:EG_PATH[0][1]*CS+CS/2,
    hp,mhp:hp,spd:getEgEnemySpd(ti),reward,
    slow:1,slowT:0,alive:true,hitFlash:0,
    isAir:MISAIR[ti]||false,
    shieldHp:sh,maxShieldHp:sh,
    _elite,
  });
}

function startEgWave(){
  if(!G||G.waveActive||G.over||paused) return;
  hideWavePreview();
  G.wave++;
  document.getElementById('waveTxt').textContent=G.wave;
  // 🔥 เลื่อน Endgame round ตามเวฟ — ปลดล็อกศัตรู + เปิดสเกล HP/reward/ทอง
  const _prevEgRound=egRound;
  egRound=Math.floor((G.wave-1)/EG_WAVES_PER_ROUND);
  // 🏆 round milestone: ทอง bonus + banner ทุกรอบใหม่
  if(egRound>_prevEgRound&&egRound>0){
    const _mBonus=60+egRound*25;
    G.gold+=_mBonus; updateHUD();
    G.particles.push({x:COLS*CS/2,y:ROWS*CS/2-60,txt:'🏆 Round '+(egRound+1)+'! +'+_mBonus+'💰',col:'#ffe234',life:2.2,vy:-0.6,vx:0,decay:0.8,scale:1.3});
    showToast('🏆 Round '+(egRound+1)+' เริ่มแล้ว! +'+_mBonus+' ทองโบนัส');
  }
  currentStage.enemyTypes=_getEgEnemyPool();
  document.getElementById('stageBadge').textContent='🔥 Round '+(egRound+1);
  // milestone HUD — บอกเวฟพิเศษถัดไป
  (()=>{
    const el=document.getElementById('egMilestoneHud');
    if(!el) return;
    const w=G.wave;
    const _mod=w%10;
    const nextBoss=_mod===0?10:10-_mod;
    const nextGold=_mod>=7?10-_mod+7:7-_mod;
    const nextSwarm=_mod<4?4-_mod:_mod===4?10:14-_mod;
    const nextElite=egRound>=6?(_mod<8?8-_mod:_mod===8?10:18-_mod):99;
    // หา milestone ที่ใกล้ที่สุด
    const cands=[];
    if(nextBoss<=10) cands.push({n:nextBoss,label:'👹-'+nextBoss});
    if(nextGold>0&&nextGold<=10) cands.push({n:nextGold,label:'💰-'+nextGold});
    if(nextSwarm>0&&nextSwarm<=10) cands.push({n:nextSwarm,label:'🐝-'+nextSwarm});
    if(nextElite>0&&nextElite<=10) cands.push({n:nextElite,label:'⚡-'+nextElite});
    cands.sort((a,b)=>a.n-b.n);
    el.textContent=cands.length?cands[0].label:'';
    el.style.display=cands.length?'':'none';
  })();
  document.getElementById('waveBtn').disabled=true;
  G.waveActive=true; G.queue=[]; G.spawnT=0;
  rollWeather(currentStage.id); // 🌦 roll random weather for this Endgame wave
  // 🌟 เวฟพิเศษ (Endgame) — หมุนเวียนทุก 10 เวฟ ให้จังหวะเกมไม่จำเจ
  let special=null;
  if(G.wave>=6){
    if(G.wave%10===0) special='boss';        // 👹 บอสรัช
    else if(G.wave%10===7) special='gold';   // 💰 เวฟทอง ×2
    else if(G.wave%10===4) special='swarm';  // 🐝 เวฟฝูง (ศัตรูเยอะ)
    else if(G.wave%10===8&&egRound>=6) special='elite'; // ⚡ เวฟ Elite: HP×1.8, Gold×2.5
  }
  G.goldWaveMult=special==='gold'?2:1;
  G.eliteWave=special==='elite';
  // count สเกลเชิงเส้นตามเวฟเท่านั้น — เดิมคูณ (1+egRound*.2) ด้วย แต่ egRound ค้าง 0 เลยไม่เคยมีผล; พอ egRound โตจริงจะระเบิดเป็น quadratic (เวฟ100 = ~960 ตัว) จึงตัด term นี้ออก
  let n=Math.floor(CFG.enemyPerWaveBase+G.wave*CFG.enemyPerWaveInc);
  if(special==='swarm') n=Math.round(n*1.6);
  const avail=_getEgEnemyPool();
  let bChance=0.08+egRound*.015;
  if(special==='boss') bChance=Math.max(bChance,0.30); // บอสรัช: บอสออกถี่ขึ้น
  for(let i=0;i<n;i++){
    const maxIdx=Math.min(avail.length-1,Math.ceil((G.wave+egRound*2)/3));
    let ei=avail[Math.floor(Math.random()*(maxIdx+1))];
    if(avail.includes(4)&&G.wave>=3&&Math.random()<bChance) ei=4;
    if(avail.includes(9)&&G.wave>=5&&Math.random()<bChance*.7) ei=9;
    if(avail.includes(10)&&G.wave>=2&&Math.random()<.15) ei=10;
    G.queue.push(ei);
  }
  const _banner=special==='boss'?'👹  บอสรัช!':special==='gold'?'💰  เวฟทอง ×2!':special==='swarm'?'🐝  เวฟฝูง!':special==='elite'?'⚡  เวฟ Elite!  HP↑ Gold↑':'🔥  WAVE  '+G.wave;
  G.waveBanner={text:_banner,t:special?2.2:1.5};
  const _egfc=special==='boss'?'rgba(255,80,30,.22)':special==='elite'?'rgba(180,80,255,.22)':special?'rgba(255,180,30,.18)':'rgba(255,120,50,.14)';
  const _egpc=special==='boss'?'#ff6d00':special==='elite'?'#ce93d8':special?'#ffe082':'#ff8a65';
  G.fxFlash.push({x:COLS*CS/2,y:ROWS*CS/2,r:Math.max(COLS,ROWS)*CS*.75,life:.35,maxLife:.35,col:_egfc});
  for(let k=0;k<10;k++){const wa=k/10*Math.PI*2;G.particles.push({x:COLS*CS/2+Math.cos(wa)*COLS*CS*.5,y:ROWS*CS/2+Math.sin(wa)*ROWS*CS*.45,txt:'·',col:_egpc,life:.45+Math.random()*.25,vx:Math.cos(wa+Math.PI)*(2+Math.random()*2.5),vy:Math.sin(wa+Math.PI)*(2+Math.random()*2.5),decay:3,scale:.55+Math.random()*.35});}
  if(special==='boss') G.shakeT=Math.max(G.shakeT||0,.18);
}

function updateEg(dt){
  if(!G||G.over) return;
  if(G.waveActive) G.battleT=(G.battleT||0)+dt; // เวลาสู้จริง (สำหรับ DPS จบเกม)
  if(G.towerStunT>0) G.towerStunT=Math.max(0,G.towerStunT-dt);
  _tickSkill(dt); // ⭐ cooldown + บัฟสกิล
  if(G.waveActive&&G.queue.length>0){
    G.spawnT-=dt;
    if(G.spawnT<=0){spawnEgEnemy(G.queue.shift());G.spawnT=CFG.spawnInterval*.8;}
  }
  // copy of update logic but for EG
  const plen=EG_PATH.length;
  for(let i=G.enemies.length-1;i>=0;i--){
    const e=G.enemies[i];
    if(!e.alive){G.enemies[i]=G.enemies[G.enemies.length-1];G.enemies.pop();continue;}
    if(e.slowT>0){e.slowT-=dt;if(e.slowT<=0)e.slow=1;}
    // 🌀 Time Tower (EG)
    if(e._timeStopT>0){e._timeStopT-=dt;if(e._timeStopT>0)e.slow=Math.min(e.slow,0);}
    if(e._timeSlowT>0){e._timeSlowT-=dt;if(e._timeSlowT>0)e.slow=Math.min(e.slow,e._timeSlow||.5);}
    if(e._enrageT>0) e._enrageT-=dt;
    if(e._dodgeFlash>0) e._dodgeFlash-=dt;
    // 🧱 Berserk Sprint (EG)
    if(e.ti===11&&!e._berserk&&e.hp<e.mhp*.35){e._berserk=true;e._bspdMult=1.8;
      G.particles.push({x:e.x,y:e.y-ESIZES[11]-8,txt:'💢 BERSERK!',col:'#ff1744',life:1.2,vy:-1.4,vx:0,decay:.9,scale:1.1});
      G.fxRings.push({x:e.x,y:e.y,r:2,maxR:ESIZES[11]*2,life:.4,lw:3,col:'#ff1744',delay:0});}
    // 💨 Phantom Phase (EG)
    if(e.ti===12){e._phaseTimer=(e._phaseTimer===undefined?8:e._phaseTimer)-dt;
      if(e._phaseTimer<=0){e._phaseT=1.5;e._phaseTimer=8;
        G.fxRings.push({x:e.x,y:e.y,r:2,maxR:ESIZES[12]*2,life:.5,lw:2,col:'#80deea',delay:0});}
      if(e._phaseT>0) e._phaseT-=dt;}
    // 👺 โกบลิน: Pack Rush — throttle O(n²) เป็นทุก 0.25s
    if(e.ti===0){
      e._packT=(e._packT||0)-dt;
      if(e._packT<=0){
        e._packT=0.25; e._packBoost=false;
        for(const o of G.enemies){
          if(o!==e&&o.alive&&o.ti===0&&Math.hypot(o.x-e.x,o.y-e.y)<CS*1.2){e._packBoost=true;break;}
        }
      }
    }
    // 🐍 นาคาราช (EG)
    if(e.ti===14){
      if(e.hp<e.mhp) e.hp=Math.min(e.mhp,e.hp+e.mhp*.015*dt);
      e._venomPulseT=(e._venomPulseT===undefined?8:e._venomPulseT)-dt;
      if(e._venomPulseT<=0){
        e._venomPulseT=8;
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:2.5*CS,life:.65,lw:3,col:'#76ff03',delay:0});
        G.towers.forEach(tw=>{if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=2.5*CS) tw._venomSlowT=5;});
        G.particles.push({x:e.x,y:e.y-ESIZES[14]-10,txt:'☠️ Venom!',col:'#76ff03',life:1.2,vy:-1.3,vx:0,decay:1.2,scale:.95});
      }
      if(!e._serpentSpawned&&e.hp<e.mhp*.4){
        e._serpentSpawned=true;
        G.shakeT=Math.min(.4,G.shakeT+.15);
        G.bossWarning={text:'🐍 เรียกงูลูก!',t:2.0,col:'#76ff03'};
        for(let k=0;k<2;k++){
          const chp=Math.round(CFG.m_hp[13]*getEgRewardBonus()*.5);
          G.enemies.push({ti:13,pi:e.pi,prog:e.prog+(k?18:-18),x:e.x+(k?22:-22),y:e.y,
            hp:chp,mhp:chp,spd:Math.min(CFG.m_spd[13]*1.2,CFG.spdCap),reward:Math.round(CFG.m_rew[13]*.5),
            slow:1,slowT:0,alive:true,hitFlash:0,isAir:false,shieldHp:0,maxShieldHp:0,_bspdMult:1,_sizeMult:.75});
        }
        for(let k=0;k<10;k++){const a=k/10*Math.PI*2,sp=2+Math.random()*2;
          G.particles.push({x:e.x,y:e.y,txt:'●',col:'#76ff03',life:.65,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:2,scale:.5+Math.random()*.5});}
      }
    }
    // ❄️ ราชาน้ำแข็ง (EG)
    if(e.ti===16){
      e._frostPulseT=(e._frostPulseT===undefined?10:e._frostPulseT)-dt;
      if(e._frostPulseT<=0){
        e._frostPulseT=10;
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:2.5*CS,life:.7,lw:4,col:'#b3e5fc',delay:0});
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:2.5*CS,life:.55,lw:2,col:'#ffffff',delay:.1});
        G.towers.forEach(tw=>{if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=2.5*CS) tw._frostStunT=2.5;});
        G.particles.push({x:e.x,y:e.y-ESIZES[16]-10,txt:'❄️ Frost Pulse!',col:'#b3e5fc',life:1.3,vy:-1.2,vx:0,decay:1.1,scale:1.0});
        G.shakeT=Math.min(.3,G.shakeT+.1);
      }
    }
    // 🦅 ฮาร์ปี (EG): Shriek
    if(e.ti===17){
      e._shriekT=(e._shriekT===undefined?7:e._shriekT)-dt;
      if(e._shriekT<=0){
        e._shriekT=7;
        G.fxRings.push({x:e.x,y:e.y,r:4,maxR:3*CS,life:.55,lw:3,col:'#ffd54f',delay:0});
        G.towers.forEach(tw=>{if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=3*CS) tw._shriekT=3;});
        G.particles.push({x:e.x,y:e.y-ESIZES[17]-8,txt:'📣 Shriek!',col:'#ffd54f',life:1.1,vy:-1.3,vx:0,decay:1.2,scale:.9});
      }
    }
    // 🐲 มังกรเงา (EG): Shadow Veil
    if(e.ti===18){
      if(e._veilTimer===undefined){e._veilTimer=4;e._veilInvis=false;}
      e._veilTimer-=dt;
      if(e._veilTimer<=0){
        e._veilInvis=!e._veilInvis;
        e._veilTimer=e._veilInvis?2:4;
        if(e._veilInvis) G.fxRings.push({x:e.x,y:e.y,r:3,maxR:ESIZES[18]*1.8,life:.4,lw:2,col:'#7c4dff',delay:0});
      }
    }
    // 🌍 เทพทำลาย (EG)
    if(e.ti===15){
      if(!e._phase) e._phase=1;
      if(e._phase===1&&e.hp<=e.mhp*.6){
        e._phase=2; e.spd*=1.45;
        e.shieldHp=0; e.maxShieldHp=0;
        G.shakeT=Math.min(.65,G.shakeT+.35);
        G.bossWarning={text:'🌋 เทพทำลายตื่นขึ้น!',t:2.5,col:'#ff6d00'};
        G.fxFlash.push({x:e.x,y:e.y,r:320,life:.45,maxLife:.45,col:'rgba(255,100,0,.42)'});
        const _egpool=currentStage.enemyTypes.filter(t=>MTYPE[t]!==1);
        for(let k=0;k<3;k++){const _t=_egpool[Math.floor(Math.random()*_egpool.length)];if(_t!==undefined)spawnEgEnemy(_t);}
        for(let k=0;k<18;k++){const a=k/18*Math.PI*2,sp=3+Math.random()*3;
          G.particles.push({x:e.x,y:e.y,txt:k%2?'●':'✦',col:k%2?'#ff6d00':'#ff8a65',life:.85,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.9,scale:.7+Math.random()*.8});}
      }
      if(e._phase===2&&e.hp<=e.mhp*.3){
        e._phase=3; e.spd*=(1.80/1.45);
        e._shockwaveT=6;
        G.shakeT=Math.min(.8,G.shakeT+.55);
        G.bossWarning={text:'💀 พลังทำลายล้างสูงสุด!',t:2.5,col:'#fff9c4'};
        G.fxFlash.push({x:e.x,y:e.y,r:400,life:.55,maxLife:.55,col:'rgba(255,255,180,.5)'});
        for(let k=0;k<26;k++){const a=k/26*Math.PI*2,sp=3.5+Math.random()*4;
          G.particles.push({x:e.x,y:e.y,txt:k%3===0?'★':k%3===1?'🌍':'●',col:k%2?'#64dd17':'#fff9c4',life:1.1,vy:Math.sin(a)*sp,vx:Math.cos(a)*sp,decay:1.5,scale:.7+Math.random()*.9});}
      }
      if(e._phase===3){
        if(e.hp<e.mhp) e.hp=Math.min(e.mhp,e.hp+e.mhp*.01*dt);
        e._shockwaveT=(e._shockwaveT||6)-dt;
        if(e._shockwaveT<=0){
          e._shockwaveT=6;
          G.towerStunT=1.5;
          G.shakeT=Math.min(.55,G.shakeT+.28);
          G.fxRings.push({x:e.x,y:e.y,r:4,maxR:COLS*CS*1.5,life:.85,lw:6,col:'#ffffff',delay:0});
          G.fxRings.push({x:e.x,y:e.y,r:4,maxR:COLS*CS*1.5,life:.7,lw:4,col:'#64dd17',delay:.12});
          G.particles.push({x:e.x,y:e.y-ESIZES[15]-14,txt:'⚡ SHOCKWAVE!',col:'#fff9c4',life:1.6,vy:-1.4,vx:0,decay:1.0,scale:1.15});
          showToast('⚡ Shockwave! ป้อมทั้งหมดหยุดทำงาน 1.5 วิ');
        }
      }
    }
    e.prog+=e.spd*e.slow*((e._enrageT>0)?(e._enrageMult||1):1)*((e._diveT>0)?1.5:1)*(e._packBoost?1.2:1)*(e._bspdMult||1)*((G&&G.weather&&G.weather.spdMult)?G.weather.spdMult:1)*CS*dt;
    while(e.prog>=CS){
      e.prog-=CS; e.pi++;
      if(e.pi>=plen-1){
        if(e._phaseT>0){e.alive=false;G.enemies.splice(i,1);break;}
        unlockMonster(e.ti); e.alive=false; G.enemies.splice(i,1);
        if(G.skillBlockT>0){ // 🛡️ กำแพงวิญญาณ: กันดาเมจเข้าปราสาท
          addParticle(e.x,e.y,'🛡️ กันไว้!','#b388ff');
        } else {
          G.hp=Math.max(0,G.hp-1); updateHUD(); G.shakeT=Math.min(.55,G.shakeT+.2);
          if(G.hp<=0){endEgGame();return;}
        }
        break;
      }
    }
    if(!e.alive) continue;
    const p0=EG_PATH[e.pi],p1=EG_PATH[Math.min(e.pi+1,plen-1)];
    const t2=Math.min(e.prog/CS,1);
    e.x=p0[0]*CS+CS/2+(p1[0]-p0[0])*CS*t2;
    e.y=p0[1]*CS+CS/2+(p1[1]-p0[1])*CS*t2;
  }
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
      // 💚 ออร่ากันหยุดป้อมจาก Support — มีโอกาสต้านสกิลหยุดป้อมของวิเวิร์น
      if(Math.random()<getSupportResist(tw.col,tw.row)){
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS,txt:'🛡️ ต้านสำเร็จ!',col:'#80cbc4',life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
      } else {
        tw._stunT=3.0;
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS,txt:'💫 หยุดทำงาน!',col:'#ff8a65',life:1.1,vy:-1.0,vx:0,decay:1.2,scale:.9});
      }
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
    if(G.gmTimers[key]>=getGoldMineInterval(tw.rateLv)){
      G.gmTimers[key]=0;
      // 💰 Gold Mine Awaken: ผลผลิตทอง x2
      const goldAmt=Math.round(getGoldMineAmt(tw.rngLv)*(G.weather&&G.weather.goldMineMult!=null?G.weather.goldMineMult:1)*(tw.awakened?2:1));
      G.gold+=goldAmt; updateHUD();
      addParticle(tw.col*CS+CS/2,tw.row*CS+CS/2,'+'+goldAmt+'💰','#ffd54f');
    }
  });
  G.towers.forEach(tw=>{
    if(tw._shootT>0) tw._shootT=Math.max(0,tw._shootT-dt*7);
    if(tw._stunT>0){tw._stunT-=dt;return;} // 🐉 ถูกวิเวิร์นโฉบหยุดทำงาน
    if(_TAMB[tw.type]&&G.enemies.length<=12){
      if(tw._ambT===undefined) tw._ambT=Math.random()*_TAMB[tw.type];
      if((tw._ambT-=dt)<=0){
        tw._ambT=_TAMB[tw.type];
        const ax=(tw.col+.5)*CS,ay=(tw.row+.5)*CS;
        if(tw.type===0) G.particles.push({x:ax+(Math.random()-.5)*CS*.25,y:ay-CS*.28,txt:'·',col:'#9e9e9e',life:.75,vx:(Math.random()-.5)*.4,vy:-1.1-Math.random()*.7,decay:1.4,scale:.7+Math.random()*.4});
        else if(tw.type===1) G.particles.push({x:ax+(Math.random()-.5)*CS*.35,y:ay-CS*.2,txt:'*',col:'#b3e5fc',life:.5,vx:(Math.random()-.5)*.6,vy:-.9-Math.random()*.5,decay:2,scale:.35+Math.random()*.3});
        else if(tw.type===2) G.particles.push({x:ax+(Math.random()-.5)*CS*.3,y:ay-CS*.1,txt:'✦',col:'#ce93d8',life:.65,vx:(Math.random()-.5)*.5,vy:-1.2-Math.random()*.5,decay:2,scale:.38+Math.random()*.3});
        else if(tw.type===7){const sa=Math.random()*Math.PI*2;G.particles.push({x:ax+(Math.random()-.5)*CS*.3,y:ay+(Math.random()-.5)*CS*.3,txt:'·',col:'#80d8ff',life:.22,vx:Math.cos(sa)*2.5,vy:Math.sin(sa)*2.5,decay:6,scale:.45});}
      }
    }
    if(tw._venomSlowT>0) tw._venomSlowT=Math.max(0,tw._venomSlowT-dt);
    if(tw._frostStunT>0) tw._frostStunT=Math.max(0,tw._frostStunT-dt);
    if(tw._shriekT>0) tw._shriekT=Math.max(0,tw._shriekT-dt);
    // 🌀 ป้อมกาลเวลา — pulse zone mechanic (endgame loop)
    if(tw.type===9&&G.waveActive){
      const _rngLv=tw.rngLv||1, _rateLv=tw.rateLv||1;
      const _radius=CFG.t_rng[9]+((_rngLv-1)*.5);
      const _chargeTimes=[6,5,4,3],_pulseDurs=[1.5,2,3,5];
      const _chargeMax=_chargeTimes[Math.min(3,_rateLv-1)];
      const _pulseMax=_pulseDurs[Math.min(3,_rateLv-1)];
      if(tw._tpCharging===undefined){tw._tpCharging=true;tw._tpTimer=_chargeMax;tw._tpPulsing=false;}
      tw._tpTimer=Math.max(0,tw._tpTimer-dt);
      if(tw._tpCharging&&tw._tpTimer<=0){
        tw._tpCharging=false;tw._tpPulsing=true;tw._tpTimer=_pulseMax;
        G.fxRings.push({x:(tw.col+.5)*CS,y:(tw.row+.5)*CS,r:0,maxR:_radius*CS,life:.55,lw:3,col:'#b39ddb',delay:0});
        G.particles.push({x:(tw.col+.5)*CS,y:(tw.row+.5)*CS-8,txt:'🌀',col:'#b39ddb',life:1.0,vy:-1.2,vx:0,decay:1.2,scale:1.0});
        if(tw.awakened){
          const _stopR=_radius*CS;
          G.enemies.forEach(e=>{
            if(!e.alive) return;
            if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=_stopR){
              if(e.isBoss){e._timeSlowT=1.5;e._timeSlow=.15;}
              else{e._timeStopT=1.5;}
            }
          });
          G.particles.push({x:(tw.col+.5)*CS,y:(tw.row+.5)*CS-20,txt:'⏱️ หยุดเวลา!',col:'#ede7f6',life:1.3,vy:-1.0,vx:0,decay:1.1,scale:.85});
        }
      }
      if(tw._tpPulsing){
        if(tw._tpTimer<=0){tw._tpPulsing=false;tw._tpCharging=true;tw._tpTimer=_chargeMax;}
        else{
          const _slowR=_radius*CS;
          G.enemies.forEach(e=>{
            if(!e.alive) return;
            if(Math.hypot((tw.col+.5)*CS-e.x,(tw.row+.5)*CS-e.y)<=_slowR){
              if(e.isBoss){e._timeSlowT=.2;e._timeSlow=.15;}
              else{e._timeSlowT=.2;e._timeSlow=.5;}
            }
          });
        }
      }
    }
    if(CFG.t_dmg[tw.type]===0) return;
    if(G.weather&&G.weather.struckTowers&&G.weather.struckTowers.size&&G.weather.struckTowers.has(tw)) return;
    if(G.towerStunT>0) return; // 🌍 Shockwave stun
    if(tw._frostStunT>0) return; // ❄️ Frost Pulse stun
    if(G.waveActive) tw.cd=Math.max(0,tw.cd-dt*(tw._venomSlowT>0?.65:tw._shriekT>0?.6:1));
    const range=getTowerRange(tw.type,tw.rngLv||tw.lv)*((G&&G.weather&&G.weather.rangeMult)?G.weather.rangeMult:1);
    const cx=tw.col+.5,cy=tw.row+.5;
    let best=null,bestP=-1,shamanInRange=null;
    G.enemies.forEach(e=>{
      if(!e.alive) return;
      if(e.isAir&&!TCANAIR[tw.type]) return; /* ✅ fix: air check */
      if(Math.hypot(cx-e.x/CS,cy-e.y/CS)<=range){
        const p=e.pi+e.prog/CS;
        if(e.ti===10&&(!shamanInRange||p>(shamanInRange.pi+shamanInRange.prog/CS))) shamanInRange=e;
        if(p>bestP){bestP=p;best=e;}
      }
    });
    if(tw.type===3&&shamanInRange) best=shamanInRange;
    if(best) tw.angle=Math.atan2(best.y/CS-cy,best.x/CS-cx);
    if(best&&tw.cd<=0){
      if(tw.type===1&&G.weather&&G.weather.iceDisabled) return; // 🔥 heatwave: ice tower disabled
      tw.cd=1/Math.max(.01,getTowerRate(tw.type,tw.rateLv||tw.lv)*(G.skillRateMult||1));
      // ⚡ สายความเร็ว Lv.4+ ปลดล็อก "ยิงรัว" — มีโอกาสคูลดาวน์สั้นลงทันที
      if((tw.rateLv||tw.lv)>=4&&Math.random()<0.2){
        tw.cd*=0.45;
        G.particles.push({x:tw.col*CS+CS/2,y:tw.row*CS+CS/2-22,txt:'⚡รัว!',col:'#ffe234',life:.45,vy:-1.3,vx:0,decay:2.6,scale:.75});
      }
      const fx=tw.col*CS+CS/2,fy=tw.row*CS+CS/2;
      const _aw2=tw.awakened&&!(tw._drainT>0);
      let _rdmg2=getTowerDmg(tw.type,tw.dmgLv||tw.lv,tw.star)*getBuffMult(tw.col,tw.row)*(G.dmgBuff||1)*(G.skillDmgMult||1);
      // 🎯 สไนเปอร์: โอกาสคริติคอล x2 ดาเมจ
      let _rIsCrit2=false;
      if(tw.type===3){
        const _crit2=getSniperCrit(tw.rngLv);
        if(Math.random()<_crit2.chance){_rdmg2*=_crit2.mult;_rIsCrit2=true;}
      }
      let _rSlow2=(TSLOW[tw.type]||0);
      const _wSplashMult2=((tw.type===0||tw.type===2)&&G.weather&&G.weather.splashMult)?G.weather.splashMult:1;
      // ⚡ Awaken เฉพาะป้อม: Cannon=splash ใหญ่ขึ้น, Thunder=chain เพิ่ม
      const _awSplashMult2=(_aw2&&tw.type===0)?1.5:1;
      const _awChainBonus2=(_aw2&&tw.type===7)?2:0;
      const _rp2=G.projs[G.projs.push({
        x:fx,y:fy,tx:best.x,ty:best.y,target:best,ox:fx,oy:fy,
        spd:420+(tw.type===3?120:0)+(tw.type===7?80:0),type:tw.type,
        dmg:_rdmg2,
        splash:TSPLASH[tw.type]*_wSplashMult2*_awSplashMult2,slow:_rSlow2,alive:true,
        chain:(TCHAIN[tw.type]||0)+_awChainBonus2,
        _rngPierce:tw.type===3?(tw.rngLv||tw.lv)>=3:(tw.rngLv||tw.lv)>=4,
        _maxR:range*CS,
        _supBoost:_aw2?getSupportAwakenBoost(tw.col,tw.row):1
      })-1];
      if(_aw2) _rp2._awakened=true;
      // ✨ Magic Awaken: โอกาสยิงเพิ่ม 20% (ตื่นแล้ว 40%) สูงสุด 3 นัด
      if(tw.type===2&&Math.random()<(_aw2?.4:.2)){
        const _extra2=_aw2?2:1;
        for(let _m=0;_m<_extra2;_m++) G.projs.push(Object.assign({},_rp2));
      }
      G.fxRings.push({x:fx,y:fy,r:2,maxR:tw.type===3?CS*.8:CS*.4,life:.5,lw:1.5,col:TPROJ[tw.type],delay:0});
      if(tw.type===3&&_rIsCrit2) G.particles.push({x:fx,y:fy-CS*.5,txt:'💥 CRIT!',col:'#ff5252',life:.6,vy:-1.4,vx:0,decay:2,scale:1});
      if(tw.type===7){
        for(let k=0;k<6;k++){const ang=k/6*Math.PI*2;G.particles.push({x:fx,y:fy,txt:'·',col:'#ffe57f',life:.35,vy:Math.sin(ang)*1.4,vx:Math.cos(ang)*1.4,decay:4,scale:.9});}
        G.fxRings.push({x:fx,y:fy,r:2,maxR:CS*.5,life:.3,lw:1.5,col:'#ffe57f',delay:0});
      }
      // muzzle flash + sound
      const _mfa=tw.angle||0;
      G.fxFlash.push({x:fx+Math.cos(_mfa)*CS*.32,y:fy+Math.sin(_mfa)*CS*.32,r:tw.type===3?14:tw.type===0?16:10,life:.18,col:TPROJ[tw.type]||'#fff'});
      tw._shootT=1;
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
          G.fxRings.push({x:tx,y:ty,r:4,maxR:p.splash*CS*1.2,life:.7,lw:3,col:TPROJ[p.type],delay:0});
        });
      } else {
        if(p.target&&p.target.alive){
          applyDmg(p.target,p.dmg,p.type,p._rngPierce);
        }
      }
      // 🌑 Void Mark: มีโอกาสติดมาร์ก เพิ่มดาเมจที่ศัตรูรับจากป้อมทุกชนิด รีเฟรชเวลาแต่ไม่บวกซ้ำ
      if(p.type===8&&p.target&&p.target.alive){
        const procChance=p._awakened?0.5:0.3;
        const markBonus=p._awakened?0.40:0.25;
        if(Math.random()<procChance){
          const e=p.target;
          e._voidMarkT=4;
          e._voidMarkBonus=Math.max(e._voidMarkBonus||0,markBonus);
          G.fxRings.push({x:e.x,y:e.y,r:2,maxR:ESIZES[e.ti]*1.6,life:.5,lw:2,col:'#9575cd',delay:0});
        }
      }
      if(p.slow>0&&p.target&&p.target.alive&&!(p.target.shieldHp>0&&!TPIERCE[p.type]&&!p._rngPierce)&&!(G.weather&&G.weather.slowImmune)){
        // ❄️ Ice Awaken: ติดแข็ง (หยุดสนิท) 3 วินาที — Support ตื่นใกล้เคียงเพิ่มเป็น 6 วินาที
        if(p.type===1&&p.target.ti===16){/* 🧊 ราชาน้ำแข็ง immune ice slow */}
        else if(p._awakened&&p.type===1){ p.target.slow=0; p.target.slowT=3*(p._supBoost||1); }
        else { p.target.slow=p.slow; p.target.slowT=2; }
      }
      // 🎯 Sniper Awaken: ยิงทะลุเป็นเส้นตรง — สร้างความเสียหายให้ศัตรูที่อยู่หลังเป้าหมายบนเส้นยิงด้วย
      if(p.type===3&&p._awakened){
        const _ddx2=tx-p.ox,_ddy2=ty-p.oy,_dlen2=Math.hypot(_ddx2,_ddy2)||1;
        const _ux2=_ddx2/_dlen2,_uy2=_ddy2/_dlen2;
        G.enemies.forEach(e=>{
          if(!e.alive||e===p.target) return;
          if(e.isAir&&!TCANAIR[3]) return;
          if(e.shieldHp>0&&!p._rngPierce) return; // เจาะโล่เมื่อ Range≥3
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
  G.enemies.forEach(e=>{
    if(e.hitFlash>0) e.hitFlash=Math.max(0,e.hitFlash-dt*4);
    if(e._knockT>0) e._knockT=Math.max(0,e._knockT-dt*8);
    if(e._voidMarkT>0){ e._voidMarkT-=dt; if(e._voidMarkT<=0){ e._voidMarkT=0; e._voidMarkBonus=0; } }
  });
  G.towers.forEach(tw=>{if(tw.spawnAnim>0) tw.spawnAnim=Math.max(0,tw.spawnAnim-dt*2.2);});
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
  if(G.enemies.length>12&&G.particles.length>30) G.particles.splice(0,G.particles.length-30);
  for(let i=G.particles.length-1;i>=0;i--){
    const p=G.particles[i];
    p.x+=p.vx||0; p.y+=p.vy; p.life-=dt*(p.decay||1.4);
    if(p.scale) p.scale=Math.max(.4,p.scale-dt*1.5);
    if(p.life<=0){G.particles[i]=G.particles[G.particles.length-1];G.particles.pop();}
  }
  // wave clear → next wave (no limit)
  if(G.waveActive&&G.queue.length===0&&G.enemies.length===0){
    G.waveActive=false;
    G.goldWaveMult=1; // 💰 จบเวฟทอง — รีเซ็ตตัวคูณทอง
    if(egDiff===2&&G.weather&&G.weather.active) unlockAchievement('eghw'); // 🌩️ Hard + weather wave clear
    clearWeather(); // 🌦 clear weather when Endgame wave ends
    const bonus=egDiff===0?20+G.wave*3+egRound*6:0; if(bonus>0){G.gold+=bonus; updateHUD();}
    if(typeof questProgress==='function') questProgress('wave',G.wave); // 📅 daily quest: reach wave
    if(egDiff===2){
      // 💎 หมุดหมาย Endgame: ทุก 10 เวฟ ได้มณีวิญญาณก้อนใหญ่ (รับครั้งเดียวต่อรัน) — เฉพาะยากเท่านั้น
      if(G.wave>0&&G.wave%10===0){
        if(!G.egMilestones)G.egMilestones={};
        if(!G.egMilestones[G.wave]){
          G.egMilestones[G.wave]=1;
          const mg=Math.floor(20*(G.wave/10)*(1+egDiff*0.5));
          addGems(mg);
          showToast('💎 หมุดหมาย Wave '+G.wave+'! +'+mg+' Soul Gems');
          addParticle(COLS*CS/2,ROWS*CS/2-30,'💎 +'+mg,'#b388ff');
        }
      }
      // 🎫 หมุดหมายตั๋วสกิล: เวฟ 15/25/35… (สลับกับหมุดหมายมณี)
      if(G.wave>=15&&G.wave%10===5){
        if(!G.egMilestones)G.egMilestones={};
        const tkey='t'+G.wave;
        if(!G.egMilestones[tkey]){
          G.egMilestones[tkey]=1;
          if(typeof addTickets==='function') addTickets(1);
          showToast('🎫 หมุดหมาย Wave '+G.wave+'! +1 ตั๋วสกิล');
          addParticle(COLS*CS/2,ROWS*CS/2-30,'🎫 +1','#b388ff');
        }
      }
    }
    // heal 1 HP per wave clear — ง่าย + ปกติ เท่านั้น
    if(egDiff!==2&&G.hp<G.maxHp){G.hp=Math.min(G.maxHp,G.hp+1);updateHUD();}
    const drops=rollEndgameMaterialDrops();
    const matIcons=['🪨','🔘','🌟'];
    let msg='🌊 Wave '+G.wave+' ผ่าน!'+(bonus>0?' +'+bonus+' ทอง':'')+( egDiff!==2?' ❤️+1':'');
    if(drops.length) msg+=' '+drops.map(d=>matIcons[d]).join('');
    addParticle(COLS*CS/2,ROWS*CS/2,'🎉 +'+bonus+' ทอง','#ffe234');
    showToast(msg);
    document.getElementById('waveBtn').disabled=false;
    showWavePreview();
    if(autoWave) setTimeout(()=>{if(G&&!G.over&&!G.waveActive)startEgWave();},1200);
  }
}

function endEgGame(){
  if(!G) return;
  clearWeather(); // 🌦 stop weather when Endgame run ends
  G.over=true;
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  awardEndgameGems(G.wave,egDiff);
  showSavePrompt();
}

function surrender(){
  if(!G||G.over) return;
  if(isEndgame){
    clearWeather(); // 🌦 stop weather when Endgame run ends
    if(rafId){cancelAnimationFrame(rafId);rafId=null;}
    G.over=true;
    awardEndgameGems(G.wave,egDiff);
    showSavePrompt();
  } else {
    // story mode surrender = go to stage select
    goStageSelect();
  }
}

