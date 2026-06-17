/* ══ WHAT'S NEW (patch notes) ══ */
const GAME_VERSION='3.8.3';
const PATCH_NOTES=[
  {ver:'3.8.3',date:'2026-06-17',title:'📋 หน้าเลือกป้อม: เพิ่มคำอธิบายสั้นในการ์ด',notes:[
    'การ์ดป้อมในหน้าเลือกตอนนี้แสดงจุดเด่นสั้นๆ ใต้ราคา เช่น "Splash กว้างที่สุด · ดาเมจสูง"',
    'ช่วยผู้เล่นใหม่เข้าใจบทบาทของป้อมแต่ละแบบก่อนตัดสินใจเลือก',
  ]},
  {ver:'3.8.2',date:'2026-06-17',title:'⚖️ ปรับความยาก ด่าน 8 Dark Throne',notes:[
    'ลบโอกาสบอสออกจากด่าน 8 — หมอผีคือภัยคุกคามหลัก ไม่ควรมีบอสขัดจังหวะ',
    'เพิ่มช่องวางป้อมจาก 5 → 6 ตัว ให้ผู้เล่นมีตัวเลือกมากขึ้นในการจัดการหมอผี',
  ]},
  {ver:'3.8.1',date:'2026-06-17',title:'🎯 สไนเปอร์ล็อกเป้าหมอผีก่อนเสมอ',notes:[
    'ป้อมสไนเปอร์ตอนนี้ล็อกเป้าหมอผี (🧙) ก่อนศัตรูอื่นทันทีที่อยู่ในระยะ',
    'ช่วยให้กำจัดหมอผีได้เร็วขึ้น ป้องกันการฟื้น HP ไม่หยุดในด่านที่มีหมอผี',
    'หากมีหมอผีหลายตัว จะล็อกเป้าตัวที่เดินมาไกลสุดก่อน',
  ]},
  {ver:'3.8.0',date:'2026-06-17',title:'🌳 ระบบต้นไม้ทาเลนต์',notes:[
    'เพิ่มต้นไม้ทาเลนต์ใน Workshop — 3 สาย (เศรษฐกิจ/โจมตี/ป้องกัน) สายละ 4 ขั้น ปลดด้วยทองถาวร',
    'โบนัสถาวร: ทองเริ่มต้น, ทองจากศัตรู +%, ดาเมจป้อม +%, HP ปราสาท, ลดราคา Awaken',
    'ใช้ได้ทั้งโหมดเนื้อเรื่องและเอนด์เกม — อัปเกรดเดิมที่ซื้อไว้ยังอยู่ครบ',
  ]},
  {ver:'3.7.2',date:'2026-06-17',title:'🛠️ ยกเครื่องหน้า Dev Console',notes:[
    'ปรับ Dev Panel เป็นธีมใหม่ทันสมัย — การ์ดกระจกเรืองแสง, สไลเดอร์/ปุ่มดีไซน์ใหม่',
    'แท็บแบบ segmented มีไฮไลต์เรืองแสง + แถบหัวข้อพร้อมไฟสถานะ',
  ]},
  {ver:'3.7.1',date:'2026-06-17',title:'🔢 กาชา: ขยายตัวเลขการ์ดเดี่ยว',notes:[
    'การ์ดสุ่ม ×1 ปรับตัวเลขรางวัลให้ใหญ่ขึ้นและเด่นชัดกว่าเดิม',
    'ขยายไอคอน ชื่อรางวัล และป้ายความหายากบนการ์ดเดี่ยวให้สมดุล',
  ]},
  {ver:'3.7.0',date:'2026-06-17',title:'💥 กาชา: เอฟเฟคระเบิดตามความหายาก',notes:[
    'พลิกการ์ดได้รางวัลแล้วมีเอฟเฟคระเบิด — อนุภาคกระจาย, คลื่นกระแทก, แฟลชการ์ด',
    'รางวัลหายากสูง (Epic/Legendary) มีแสงเรืองหมุนรอบการ์ด + การ์ดเรืองแสงเต้นต่อเนื่อง',
    'Legendary (001 ป้อมมนตราโมฆะ) จอกระพริบ + สั่นทั้งหน้าจอ สุดอลังการ',
    'เพิ่มเสียงตอนเปิดการ์ด: แฟนแฟร์สำหรับของหายาก, ระฆังนุ่มสำหรับของทั่วไป',
  ]},
  {ver:'3.6.3',date:'2026-06-17',title:'🔒 กาชา: ปรับ Pity เป็น 100 ครั้ง',notes:[
    'ค้ำประกัน 001 (ป้อมมนตราโมฆะ) ปรับจากทุก 90 ครั้ง → ทุก 100 ครั้ง (เลขกลม จำง่าย)',
    'ตัวนับ Pity และตารางอัตราอัปเดตเป็น /100 ให้ตรงกัน',
  ]},
  {ver:'3.6.2',date:'2026-06-17',title:'🧹 จัดระเบียบเมนูหลัก',notes:[
    'หน้าเมนูหลักเหลือ 2 ปุ่มโหมดเกม: ⚔️ เนื้อเรื่อง + 🔥 เอนด์เกม — โล่งขึ้น',
    'ย้าย เวิร์กชอป + ภารกิจประจำวัน ลงแถบล่าง (bottom nav) — ภารกิจมี badge แจ้งเตือนเหมือนเดิม',
    'แถบล่างใหม่: 📅 ภารกิจ · 🛠️ เวิร์กชอป · 🎁 กาชา · 🎒 กระเป๋า · 📖 สารานุกรม · 🏆 อันดับ',
    '(เวิร์กชอปยังกดเข้าจากเหรียญทองมุมบนได้เหมือนเดิม)',
  ]},
  {ver:'3.6.1',date:'2026-06-17',title:'🎰 กาชา: ส่วนลด ×10 + แก้ตารางอัตรา',notes:[
    'สุ่ม ×10 ลดราคาเหลือ 270💎 (เดิม 300💎) — เท่ากับสุ่มฟรี 1 ครั้ง!',
    'แก้ตารางอัตรา: เลข 011–999 ได้ 🔹 เศษสีน้ำเงิน ×1 เป็นรางวัลปลอบใจ (เดิมเขียนว่า "ไม่ได้รางวัล")',
    'เพิ่มข้อมูลค้ำประกัน 001 ทุก 90 ครั้ง ในตารางอัตรา',
  ]},
  {ver:'3.6.0',date:'2026-06-16',title:'📅 ภารกิจประจำวัน + ฟีลเกม + เพลงพื้นหลัง',notes:[
    'ใหม่! ภารกิจประจำวัน — รางวัลล็อกอินต่อเนื่อง 7 วัน (มณี/เศษ/ทองถาวร) + เควสต์รายวัน 3 ข้อ',
    'เควสต์รายวันสุ่มทุกวัน: กำจัดศัตรู / ผ่านด่าน / คอมโบ / สร้างป้อม / เก็บทอง / ไปถึงคลื่น',
    'ฟีลเกม: เพิ่ม "ตัวนับคอมโบ" ค้างบนจอ + เอฟเฟกต์ hit-stop ตอนบอสตาย (เกมหยุดเสี้ยววินาทีให้รู้สึกหนัก)',
    'เพลงพื้นหลัง (BGM) สังเคราะห์วนระหว่างเล่น — เปิด/ปิดได้ในเมนูตั้งค่า 🎵',
    'ป้อมมนตราโมฆะมีเสียงยิงเป็นของตัวเองแล้ว (เดิมเงียบ)',
  ]},
  {ver:'3.5.5',date:'2026-06-16',title:'⚖️ บาลานซ์กาชา + ระบบแลกเศษสะสม',notes:[
    'กาชา: pull ที่ไม่ได้รางวัลหลักจะได้ 🔹 เศษสีน้ำเงิน 1 ชิ้นทุกครั้ง (ไม่มือเปล่าอีกต่อไป)',
    'Workshop ใหม่: ส่วน "แลกเศษสะสม" — เศษจากกาชาแลกเป็นวัสดุคราฟได้ (🔹×10→🪨 / 💜×5→🔘 / 🌟×3→⭐)',
    'ปรับ drop rate ผงดาวตก (Endgame): ง่าย 2%→4%, ปกติ 4%→5%, ยาก 6%→8% (เดิมเป็น bottleneck ที่เกินไป)',
    'กาชา: การ์ด Void Tower (001) แสดงหมายเหตุ "🔥 ใช้ได้เฉพาะ Endgame" เพื่อไม่ให้ผู้เล่นสับสน',
  ]},
  {ver:'3.5.4',date:'2026-06-16',title:'🃏 กาชา: เปิดการ์ดไพ่ด้วยตัวเอง',notes:[
    'เปลี่ยนระบบเปิดผลเป็นการ์ดไพ่ — แตะการ์ดที่ต้องการเพื่อพลิกเปิดดูผล',
    'สุ่ม ×10 ได้การ์ด 10 ใบ เลือกเปิดใบไหนก่อนก็ได้ หรือกดข้ามเพื่อเปิดทั้งหมด',
    'การ์ดที่ได้รางวัลจะมีขอบเรืองแสงตามระดับหายาก (legendary/epic/rare…)',
  ]},
  {ver:'3.5.3',date:'2026-06-16',title:'🆕 ไฮไลต์ไอเทมใหม่ในกระเป๋า',notes:[
    'ไอเทมที่เพิ่งได้รับจะมีขอบแดงและป้าย "ใหม่" ในกระเป๋า',
    'เข้ากระเป๋าแล้วป้ายแดงจะหายออกไปเอง — ช่วยให้รู้ว่าได้อะไรมาใหม่',
    'ตัวเลขแจ้งเตือนบน icon กระเป๋า (bottom nav) นับเฉพาะไอเทมที่ยังไม่ได้ดู',
  ]},
  {ver:'3.5.2',date:'2026-06-16',title:'📋 กาชา: ตารางอัตราออก + Dev cheats',notes:[
    'เพิ่มตาราง "อัตราการออก" ในตู้กาชา — กดเพื่อดู % โอกาสของรางวัลแต่ละชิ้น',
    'Dev Panel: เพิ่ม 💎 มณีวิญญาณ (+100/+999/รีเซ็ต), เพิ่มวัสดุคราฟ, รีเซ็ต Pity',
  ]},
  {ver:'3.5.1',date:'2026-06-16',title:'🎰 กาชา: สล็อตแมชชีนลุ้นเลข',notes:[
    'ขยาย pool เป็น 001–999: เลข 011–999 ไม่ได้รางวัล (90%), 001–010 มีรางวัล (10%)',
    'ระบบเปิดเผยเลขแบบสล็อตแมชชีน — หลักร้อย → หลักสิบ → หลักหน่วย หยุดทีละตัวเพื่อสร้างความลุ้น',
    'เห็น "0" แล้ว "0" อีกตัว — ลุ้นว่าหลักสุดท้ายจะได้รางวัลหรือเปล่า!',
  ]},
  {ver:'3.5.0',date:'2026-06-16',title:'✨ ระบบกาชาตู้สุ่มรางวัล',notes:[
    'เพิ่มตู้สุ่มรางวัล 001–010 ใช้ 💎 มณีวิญญาณ 30 ดวงต่อครั้ง',
    'รางวัลมี 10 ระดับ: 001 ปลดล็อกป้อมมนตราโมฆะ, 002-006 วัสดุคราฟ, 007-010 ไอเทมบัฟและทองถาวร',
    'สุ่มทีละ 1 หรือ 10 ใบ (มีปุ่มข้ามแอนิเมชัน), ค้ำประกัน 001 ทุก 90 ครั้ง',
  ]},
  {ver:'3.4.1',date:'2026-06-16',title:'🧹 ปรับ UI เมนูหลัก',notes:[
    'ลบปุ่ม "เอนด์เกม" ออกจากหน้าเมนูหลักและ bottom nav — เข้าได้จากหน้าเนื้อเรื่องอยู่แล้ว',
  ]},
  {ver:'3.4.0',date:'2026-06-16',title:'🎒 ระบบกระเป๋าผู้เล่น',notes:[
    'เพิ่มแท็บ "กระเป๋า" ในแถบนำทางด้านล่าง — เก็บ วัสดุ, ไอเทมบัฟ, ชิ้นส่วนสะสม',
    'จบด่านมีโอกาสได้รับไอเทมบัฟ (ยาเพิ่มทอง/HP/ดาเมจ) — โอกาสสูงขึ้นตามดาวที่ได้',
    'เลือกบัฟ 1 ชิ้นก่อนเข้าด่าน บัฟจะถูกใช้อัตโนมัติตอนเริ่มด่านและหมดไป 1 ชิ้น',
    'ได้รับชิ้นส่วนสะสม (เศษสีน้ำเงิน/ม่วง/ทอง) จากการจบด่านทุกครั้ง',
  ]},
  {ver:'3.3.0',date:'2026-06-16',title:'🪙 ระบบทองถาวร + อัพเกรดใน Workshop',notes:[
    'จบด่านได้ทองถาวร 🪙 ตามดาว (1★=50, 2★=75, 3★=100) สะสมข้ามด่านได้',
    'เปิด Workshop เพื่อซื้ออัพเกรดถาวร 3 อย่าง: ทองเริ่มต้น +100, HP ปราสาท +5, Awaken ราคาลด 50',
    'ทองถาวรแสดงที่ topbar หน้าเมนูหลัก — แตะเพื่อเปิด Workshop ได้เลย',
  ]},
  {ver:'3.2.0',date:'2026-06-16',title:'🎁 หน้าจอจบด่านสไตล์กล่องรางวัล',notes:[
    'หน้าจอจบด่านปรับใหม่: ไอคอนกล่องรางวัล (👑/🎁/📦/💀) และกรอบเรืองแสงเปลี่ยนสีตามจำนวนดาวที่ได้',
    'ดาวที่ได้จะค่อย ๆ เด้งขึ้นทีละดวงพร้อมแสงเรืองสีทอง',
    'แสดงจำนวน 💎 Soul Gems ที่ได้รับทันทีในหน้าจอจบด่าน เมื่อทำลายสถิติดาวเดิมได้',
    'หน้า Codex แท็บป้อม: ไอคอนป้อมมีกรอบเรืองแสงสีตามชนิดป้อม ทั้งในกริดและหน้ารายละเอียด',
    'หน้าเลือกด่าน: การ์ดด่านที่เคลียร์แล้วมีกรอบเรืองแสง + ป้ายกล่องรางวัล (👑/🎁/📦) ตามจำนวนดาวที่ทำได้',
    'แจ้งเตือนปลดล็อกความสำเร็จ: เด้งเข้าแบบยุบ-ขยาย และกรอบเรืองแสงเปลี่ยนสีตามหมวดความสำเร็จ',
    'เมนูหลัก: แท็บเมนูด้านล่าง (เอนด์เกม/เนื้อเรื่อง/สารานุกรม/อันดับ/Dev) มีพื้นหลังและกรอบเรืองแสงตอนเลือก/โฮเวอร์',
    'เวิร์กชอป: คราฟป้อมมนตราโมฆะสำเร็จจะมีหน้าต่างฉลองแบบกล่องรางวัล พร้อมแก้สเปคดาเมจที่แสดงผิดจาก 38 เป็น 42'
  ]},
  {ver:'3.1.0',date:'2026-06-16',title:'🌟 กรอบ Rarity ป้อม + ปรับบาลานซ์เพิ่ม',notes:[
    'ป้อมที่รวมดาวแล้ว (★2 ขึ้นไป) จะมีกรอบเรืองแสงสีตามระดับ — ★2 น้ำเงิน (Rare), ★3 ม่วง (Epic), ★4 ส้มทอง (Legendary) ทั้งในสนามและหน้าต่างป้อม',
    'ธนู: ลดอัตรายิงจาก 2.0 เป็น 1.8 ครั้ง/วินาที (เคย DPS/Cost สูงสุดในเกมแบบโดดเด่นเกินไป)',
    'Endless Mode: ขยาย cap การสเกล HP/Shield/Reward ของศัตรู ทำให้ความยากเพิ่มต่อเนื่องจน Round ~20 (เดิมแบนราบที่ ~14)'
  ]},
  {ver:'3.0.1',date:'2026-06-15',title:'⚖️ ปรับบาลานซ์ป้อม',notes:[
    'สไนเปอร์: ลดดาเมจคริติคอลจาก x2 เป็น x1.75 (สไนเปอร์อัพดาวเต็มแรงเกินไปเมื่อเทียบป้อมอื่น)',
    'เหมืองทอง: สาย "คูลดาวน์" ลดเวลาผลิตจาก -10%/เลเวล เป็น -15%/เลเวล ให้คุ้มค่ากับการลงสายนี้มากขึ้น',
    'ป้อมมนตราโมฆะ: เพิ่มดาเมจพื้นฐานจาก 38 เป็น 42 ให้แข่งขันได้มากขึ้นนอกเหนือจาก Void Mark'
  ]},
  {ver:'3.0.0',date:'2026-06-15',title:'🔄 ปรับระบบสกิลป้อมใหม่ทั้งหมด!',notes:[
    'ทุกป้อมเหลือ 2 สายสกิลให้อัพ (จากเดิม 3 สาย) — ดาเมจพื้นฐานคงที่ ไม่ผูกกับแต้มสกิลแล้ว',
    'ปืนใหญ่/น้ำแข็ง/เวทมนตร์/ธนู/สายฟ้า/ป้อมมนตราโมฆะ: สาย "ระยะ" (เจาะโล่) + "ความเร็ว" (ยิงรัว)',
    'สไนเปอร์: ระยะยิงคงที่ 4.5 ช่อง — สายใหม่ "ความเร็ว" + "คริติคอล" (โอกาส +10%/เลเวล ดาเมจ x2)',
    'เหมืองทอง: สาย "คูลดาวน์" (ลดเวลาผลิต -10%/เลเวล) + "จำนวนทอง" (+2/เลเวล)',
    'ซัพพอร์ต: ลดระยะลงมาก (2.8→1.5 ช่อง) — สาย "ระยะ" + "กันหยุดป้อม" ใหม่',
    'ซัพพอร์ต: ออร่ากันป้อมหยุดทำงานจากสกิลมอนสเตอร์ ★1-4 = 20/40/60/80% (อเวค = 100%)',
    'แต้มสกิลเก่าจะถูกจัดสรรใหม่อัตโนมัติตามดาว — ดาเมจที่เคยลงไปจะกลายเป็นโบนัสคงที่'
  ]},
  {ver:'2.1.1',date:'2026-06-15',title:'⚔️ ปรับโบนัสดาเมจจากการรวมป้อม',notes:[
    'โบนัสดาเมจพื้นฐานจากการรวมป้อมปรับใหม่: ★2=+15%, ★3=+30%, ★4=+50% (เดิม +10% ต่อ★)',
    'ป้อม★4 ตอนนี้แรงขึ้นชัดเจน คุ้มค่ากับการลงทุนรวมป้อมจนสุด'
  ]},
  {ver:'2.1.0',date:'2026-06-15',title:'⚔️ รวมป้อมแล้วดาเมจพื้นฐานเพิ่มด้วย!',notes:[
    'ดาเมจพื้นฐานของป้อมจะเพิ่มขึ้นตาม★ที่ได้จากการรวมป้อม แยกจากแต้มสกิลที่จัดสรรเอง',
    'ทำให้การรวมป้อมให้★สูงขึ้นคุ้มค่ามากขึ้น แม้ยังไม่ได้ใช้แต้มสกิลเพิ่มดาเมจก็ตาม'
  ]},
  {ver:'2.0.3',date:'2026-06-15',title:'✨ ปรับ UI ระบบรวมป้อม',notes:[
    'ตอนลากป้อมไปทับป้อมอื่น จะมีไฮไลต์สีเขียวถ้ารวมได้ และสีแดงถ้ารวมไม่ได้ บนช่องที่ลากไปทับ',
    'ช่องแสดงข้อมูลป้อมบนกระดาน (ตอนเลือกป้อมจาก toolbar) แสดงราคารวมค่าธรรมเนียมที่เพิ่มขึ้น เช่น 💰80 (+15×2) ให้เห็นชัดว่าทำไมราคาขึ้น'
  ]},
  {ver:'2.0.2',date:'2026-06-15',title:'🔧 แก้ราคาป้อมขึ้นตามชนิดป้อม',notes:[
    'แก้บั๊ก: ก่อนหน้านี้การวางป้อมชนิดใดก็ตามจะดันราคาป้อม "ทุกชนิด" ให้แพงขึ้น +15 ทอง',
    'ตอนนี้ราคา +15 ทอง จะคิดเฉพาะป้อม "ชนิดเดียวกัน" ที่วางไปแล้วเท่านั้น เช่น วางปืนใหญ่ 1 ป้อม (50→65) จะไม่ทำให้ป้อมน้ำแข็งแพงขึ้นถ้ายังไม่ได้วาง'
  ]},
  {ver:'2.0.1',date:'2026-06-15',title:'🔧 ปรับระบบรวมป้อม — แต้มสกิลที่จัดสรรแล้วเป็นแบบถาวร',notes:[
    'เอาปุ่ม ↺ รีเซ็ตแต้มสกิลออก — เมื่อจัดสรรแต้มดาเมจ/ระยะ/อัตรายิงแล้ว จะไม่สามารถจัดสรรใหม่ได้ (ยกเว้นรวมป้อมเพื่อเลื่อนดาว ซึ่งจะรีเซ็ตแต้มของป้อมใหม่ให้)'
  ]},
  {ver:'2.0.0',date:'2026-06-15',title:'✨ ระบบรวมป้อม (Star Merge) — ปฏิวัติการอัพเกรด!',notes:[
    'เปลี่ยนระบบอัพเกรดป้อมทั้งหมด! ลากป้อมชนิด/★เดียวกันทับกันบนกระดานเพื่อ "รวม" เป็นป้อมเดียวที่★สูงขึ้น (1★→2★→3★→4★ สูงสุด)',
    'ทุกครั้งที่รวมดาวสำเร็จ จะได้ "แต้มสกิล" ฟรีตามจำนวนดาว (1★=1, 2★=2, 3★=3, 4★=4) ใช้อัพดาเมจ/ระยะ/อัตรายิงได้ฟรี ไม่เสียทอง',
    'Awaken ปลดล็อกตั้งแต่★3 (เดิมต้อง Lv.5) ยังคงราคา 💰350 เหมือนเดิม แต่เมื่อ Awaken แล้วป้อมจะ "ล็อกดาว" รวมต่อไม่ได้อีก — เลือกเอเวคทันทีที่★3 หรือดันไป★4 ก่อนเอเวคเพื่อพลังสูงสุด',
    'เอาระบบจ่ายทองเพื่ออัพเกรดดาเมจ/ระยะ/อัตรายิงแบบเดิม (CFG.t_cost×Lv) ออกทั้งหมด',
    'ค่าก่อสร้างป้อมใหม่ (escalating cost) และค่า Awaken ไม่เปลี่ยนแปลง'
  ]},
  {ver:'1.14.1',date:'2026-06-15',title:'📈 ราคาป้อมเพิ่มขึ้นตามจำนวนป้อม',notes:[
    'ราคาสร้างป้อมใหม่จะเพิ่มขึ้น +15 ทอง ต่อป้อมที่วางอยู่บนกระดานแล้ว (ทุกชนิดป้อม ทุกโหมด) เช่น ป้อมแรก 50 → ป้อมที่สอง 65 → ป้อมที่สาม 80',
    'ขายป้อมออกจะลดราคาป้อมถัดไปกลับลงตามจำนวนป้อมที่เหลือ',
    'ค่าอัปเกรดและค่า Awaken ของป้อมที่มีอยู่ไม่เปลี่ยนแปลง'
  ]},
  {ver:'1.14.0',date:'2026-06-15',title:'📖 ปรับทูทอเรียล + เอาระบบลิงค์ป้อมออก',notes:[
    'ทูทอเรียลใหม่! สอนระบบเกมแบบละเอียดต่อเนื่องไปถึงด่าน 1-3 (เลือก/วางป้อม, ดูข้อมูลป้อม, ระบบทอง, Awaken, สภาพอากาศ, วัสดุ/Workshop, Codex)',
    'เอาระบบ "ลิงค์ป้อม" (Tower Synergy) ออกทั้งหมด — ป้อมไม่ได้รับ/ให้โบนัสจากป้อมข้างเคียงอีกต่อไป ค่าดาเมจ/หน่วง/ทองจึงคงที่ตามค่าพื้นฐานของป้อมเอง',
    'เงามืด (Shadow) ยังคงระงับบัฟ/Awaken ของป้อมในระยะได้เหมือนเดิม (ปรับข้อความให้ตรงกับระบบใหม่)'
  ]},
  {ver:'1.13.2',date:'2026-06-15',title:'🌩️ ความสำเร็จใหม่: ผู้ฝ่าวิกฤต',notes:[
    'เพิ่มความสำเร็จ "ผู้ฝ่าวิกฤต" — ผ่าน Wave ในโหมดเอนด์เกมระดับยาก ขณะมีสภาพอากาศแปรปรวนเกิดขึ้น'
  ]},
  {ver:'1.13.1',date:'2026-06-15',title:'🔧 ลดขนาดป้อม',notes:[
    'ลดขนาดสไปรท์ป้อม 2.5D ลงเล็กน้อย ไม่ให้ล้นออกนอกช่องมากเกินไป มองเห็นแผนที่และศัตรูได้ชัดเจนขึ้น'
  ]},
  {ver:'1.13.0',date:'2026-06-15',title:'🎖️ รางวัลใหม่: Soul Gems &amp; ป้อมมนตราโมฆะ',notes:[
    'เพิ่ม Achievement ใหม่ 2 รายการ — 💎 "นักสะสมมณีวิญญาณ" (สะสม Soul Gems รวม 1,000) และ 🌑 "ผู้เชี่ยวชาญโมฆะ" (ปลดล็อกป้อมมนตราโมฆะที่เวิร์กชอป)',
    'แก้ไข Achievement "สถาปนิก" (ปลดล็อก Tower ทุกแบบ) ที่เคยปลดไม่ได้เนื่องจากนับป้อมมนตราโมฆะตกหล่น'
  ]},
  {ver:'1.12.12',date:'2026-06-15',title:'🎨 ปรับโฉมหน้าเอนด์เกม/เวิร์กชอป',notes:[
    'ปรับพื้นหลังหน้าโหมดเอนด์เกมและเวิร์กชอปให้มีบรรยากาศไล่เฉดสีพร้อมแสงเรืองและอนุภาคลอย (ประกายไฟในเอนด์เกม, ละอองมนตราโมฆะในเวิร์กชอป) ให้สวยงามกลมกลืนกับหน้าเมนูหลัก'
  ]},
  {ver:'1.12.11',date:'2026-06-14',title:'✨ ปรับเอฟเฟกต์กระสุนและการโจมตี',notes:[
    'เพิ่มแสงเรืองรอบกระสุนทุกชนิด และเพิ่มแสงเรืองให้วงแหวนเอฟเฟกต์ตอนโจมตี/แสงปะทะปลายกระบอกปืน ให้ภาพการต่อสู้ดูมีพลังและกลมกลืนกับการปรับภาพป้อม/ศัตรูใน v1.12.8-1.12.9'
  ]},
  {ver:'1.12.10',date:'2026-06-14',title:'🧹 ปรับปรุงประสิทธิภาพการแสดงผล',notes:[
    'ลบโค้ดระบบแสดงผลป้อม 3D ที่เลิกใช้แล้ว (แทนที่ด้วยสไปรท์ 2.5D ตั้งแต่ v1.12.8) ทำให้เกมโหลดเร็วขึ้นและไม่ต้องพึ่งไลบรารีภายนอกอีกต่อไป'
  ]},
  {ver:'1.12.9',date:'2026-06-14',title:'🎨 ปรับภาพศัตรูให้มีมิติขึ้น',notes:[
    'เพิ่มเงาตกใต้ตัวศัตรูทุกชนิด ให้ดูมีมิติและแยกจากพื้นด้านหลังชัดเจนขึ้น สอดคล้องกับการปรับภาพป้อมใน v1.12.8'
  ]},
  {ver:'1.12.8',date:'2026-06-14',title:'🎨 ปรับภาพป้อมใหม่ทั้งหมด',notes:[
    'ปิดโหมดแสดงผลป้อม 3D แล้วใช้สไปรท์ 2.5D ที่ปรับปรุงใหม่แทน — แสงเงาคมชัดขึ้น มีออร่าเรืองแสงใต้ฐานตามธาตุของป้อม',
    'เพิ่มวงแหวนเรืองแสงรอบฐานป้อมเมื่ออัปเกรดถึง Lv.2/Lv.3 ให้เห็นความก้าวหน้าชัดเจนขึ้น'
  ]},
  {ver:'1.12.7',date:'2026-06-14',title:'🌦️ Endgame: แก้สภาพอากาศ + ปรับโหมดยาก',notes:[
    'แก้บั๊กระบบสภาพอากาศ (ฝน/หมอก/พายุ ฯลฯ) ที่ไม่เคยทำงานในโหมดเอนด์เกมเลย — ตอนนี้สุ่มสภาพอากาศได้ทุกเวฟเหมือนโหมดเนื้อเรื่อง',
    'เพิ่มความท้าทายของโหมดยาก (Hard) ในเอนด์เกม — ศัตรู HP/ความเร็วสูงขึ้นจากเดิม'
  ]},
  {ver:'1.12.6',date:'2026-06-14',title:'🌑 เวิร์กชอป: แสดงของที่ต้องใช้บนการ์ดป้อม',notes:[
    'เพิ่มรายการวัตถุดิบที่ต้องใช้คราฟ (มณีวิญญาณและวัสดุ) ไว้มุมขวาของการ์ดป้อมมนตราโมฆะ พร้อมไฮไลต์สีเขียวเมื่อมีครบ'
  ]},
  {ver:'1.12.5',date:'2026-06-14',title:'🛠️ เวิร์กชอป: โชว์สูตรแม้ยังไม่ปลดล็อก',notes:[
    'หน้าเวิร์กชอปจะแสดงสูตรปลดล็อก (มณีวิญญาณและวัสดุที่ต้องใช้) ให้เห็นเสมอ แม้ยังไม่ผ่านด่านสุดท้าย จะได้รู้ว่าต้องเก็บอะไรไว้รอ'
  ]},
  {ver:'1.12.4',date:'2026-06-14',title:'⚔️ ตัดระบบคะแนนในโหมดเนื้อเรื่อง',notes:[
    'หน้าจบด่านในโหมดเนื้อเรื่องไม่แสดงคะแนนอีกต่อไป — เน้นแค่ผ่าน/ไม่ผ่านและดาวที่ได้',
    'เมื่อแพ้ในโหมดเนื้อเรื่อง จะไม่มีหน้าต่างให้บันทึกคะแนนอีกต่อไป (เหลือเฉพาะโหมดเอนด์เกม)',
    'หน้าอันดับ: นำแท็บ "⚔️ เนื้อเรื่อง" และสถิติ "คะแนนเนื้อเรื่องสูงสุด" ออก เพราะโหมดเนื้อเรื่องไม่ใช้คะแนนแล้ว'
  ]},
  {ver:'1.12.3',date:'2026-06-14',title:'🧹 จัดหน้าเมนูหลักให้สะอาดขึ้น',notes:[
    'นำแถบสถิติ (ด่านล่าสุด/ดาวรวม/ผ่านแล้ว) ที่ทับกับเมนูล่างออกจากหน้าเมนูหลัก — ดูข้อมูลเดียวกันได้ในหน้า อันดับ/สถิติ'
  ]},
  {ver:'1.12.2',date:'2026-06-14',title:'🌑 ปรับหน้าเวิร์กชอปใหม่',notes:[
    'ออกแบบหน้า 🛠️ เวิร์กชอปใหม่ทั้งหมด — เพิ่มการ์ดแนะนำป้อมมนตราโมฆะพร้อมไอคอนและสเปก, กล่องอธิบายพลัง Void Mark',
    'สูตรปลดล็อกแสดงเป็นแถบความคืบหน้าต่อวัสดุ พร้อมเครื่องหมายถูกเมื่อครบ',
    'ป้อมมนตราโมฆะจะปลดล็อกให้คราฟได้ก็ต่อเมื่อผ่านด่านสุดท้ายของโหมดเนื้อเรื่องแล้วเท่านั้น'
  ]},
  {ver:'1.12.1',date:'2026-06-14',title:'🇹🇭 ปรับ UI เป็นภาษาไทยทั้งหมด + ปุ่มกดง่ายขึ้น',notes:[
    'แปลข้อความ UI ที่เหลือเป็นภาษาไทยทั้งหมด (เมนู, ปุ่มต่างๆ, Codex, Endgame, Workshop, อันดับ, สภาพอากาศ ฯลฯ) ให้สอดคล้องกับเนื้อเรื่องที่เป็นไทยอยู่แล้ว',
    'ขยายขนาดปุ่มไอคอนใน HUD (หยุดชั่วคราว, ความเร็ว, ตั้งค่า, Dev) ให้กดง่ายขึ้นบนมือถือ (ขั้นต่ำ ~38x38px)',
    'ย้ายปุ่มความเร็ว (1×/2×/3×) จาก HUD บนไปอยู่แถวเดียวกับปุ่มส่งคลื่น/อัตโนมัติ ให้กดง่ายขึ้นระหว่างเล่น'
  ]},
  {ver:'1.12.0',date:'2026-06-14',title:'💎 Soul Gems, Workshop และป้อมมนตราโมฆะ!',notes:[
    'เพิ่มสกุลเงินใหม่ 💎 มณีวิญญาณ (Soul Gems) — ได้รับเมื่อทำดาวในด่านเนื้อเรื่องเพิ่มขึ้นเป็นครั้งแรก และเมื่อจบเกม Endgame',
    'Endgame: เคลียร์เวฟจะมีโอกาสดรอปวัสดุพิเศษ 🪨 เศษหินมืด, 🔘 แกนเวทอสูร, 🌟 ผงดาวตก (โอกาสคงที่ตามความยาก)',
    'เพิ่มหน้า 🛠️ Workshop ในเมนูหลัก — ใช้ 💎 และวัสดุปลดล็อกป้อมใหม่ถาวร',
    'เพิ่มป้อมที่ 9: 🌑 ป้อมมนตราโมฆะ — มีโอกาสติด "Void Mark" ให้ศัตรู เพิ่มดาเมจที่รับจากป้อมทุกชนิด ใช้ได้เฉพาะ Endgame',
    'Endgame ตอนนี้ต้องเลือกป้อมก่อนเริ่มเกม จำนวนป้อมที่เลือกได้ขึ้นกับความยาก (ง่าย 7 / ปกติ 6 / ยาก 5)'
  ]},
  {ver:'1.11.0',date:'2026-06-13',title:'🔮 เอาระบบรูนออก + ปรับ Awaken',notes:[
    'เอาระบบรูน (Rune) ออกทั้งหมด — ไม่มีการดรอปรูนจาก Boss และไม่มีช่องใส่รูนในป้อมที่ตื่นแล้ว',
    'Awaken ไม่ให้โบนัสดาเมจ +15% แบบรวมอีกต่อไป แต่ยังคงพลังพิเศษเฉพาะป้อมไว้ครบ (เช่น Cannon สาดกว้างขึ้น, Ice แช่แข็งสนิท, Sniper ยิงทะลุเป็นเส้น, Magic ยิงซ้ำ, Thunder chain เพิ่ม, Support เพิ่มโบนัสซินเนอร์จี้, Gold Mine ผลิตทอง x2)'
  ]},
  {ver:'1.10.1',date:'2026-06-13',title:'🗑 ปรับระบบขายป้อม',notes:[
    'เอาระบบ "กดค้างเพื่อขายป้อม" บนกริดออก เพื่อลดการขายป้อมโดยไม่ตั้งใจ',
    'ขายป้อมได้จากปุ่ม 🗑 Sell ในหน้าต่างข้อมูลป้อม (กดที่ป้อมเพื่อเปิด) เหมือนเดิม'
  ]},
  {ver:'1.10.0',date:'2026-06-13',title:'🎮 ปรับปรุง UX การวางป้อม + เมนูตั้งค่า',notes:[
    'ตอนเลือกป้อมเพื่อวาง จะเห็นวงแหวนระยะยิงชัดเจนขึ้น พร้อมป้ายแสดงระยะ/ดาเมจ/ราคา',
    'ลากไอคอนป้อมจากแถบด้านล่างไปวางบนกริดได้โดยตรง (drag-to-place)',
    'เส้นทางเดินของศัตรูมีลูกศรเรืองแสงไหลเป็นจังหวะ มองเห็นทิศทางง่ายขึ้น',
    'เพิ่มเมนู ⚙ ตั้งค่า รวมปุ่มความเร็วเกม / เปิด-ปิดเสียง / ระดับเสียง / Auto Wave ไว้ที่เดียว'
  ]},
  {ver:'1.9.20',date:'2026-06-13',title:'⚖️ แก้ชิลด์จอมมารใน Endless Mode',notes:[
    'จอมมาร (Demon Lord) ในรอบหลังๆของ Endless Mode มีชิลด์ที่คุ้มทองมากขึ้น ไม่ลดต่อเนื่องเหมือนเดิม'
  ]},
  {ver:'1.9.19',date:'2026-06-13',title:'✨ หน้า Save/Weather/ป้อม/Achievement เรืองแสงขึ้น',notes:[
    'หน้าต่างบันทึกเกมมีแสงเรืองรอบกรอบและอนิเมชันป็อปอินตอนเปิด',
    'แถบเตือนสภาพอากาศและไอคอนสภาพอากาศมีแสงเรืองตามธีมสีของอันตราย',
    'ป๊อปอัพป้อมปราการมีแสงเรืองเขียวรอบกรอบ ปุ่มอัพเกรด/ขายมีแสงตอน hover',
    'การ์ดแจ้งเตือน Achievement มีแสงเรืองทองและไอคอนเด้งเข้าตอนแสดงผล'
  ]},
  {ver:'1.9.18',date:'2026-06-13',title:'⚖️ ปรับรางวัล Endless Mode รอบหลังๆ',notes:[
    'รางวัลทองจากศัตรูใน Endless Mode รอบหลังๆ (Round 15+) เพิ่มขึ้นตามความยากที่สูงขึ้น แทนที่จะเพิ่มแบบคงที่',
    'ศัตรูบอส/จอมมารในรอบหลังให้ทองคุ้มค่ากับ HP ที่สูงขึ้นมากกว่าเดิม'
  ]},
  {ver:'1.9.17',date:'2026-06-13',title:'📜 หน้าคัตซีนเรืองแสงขึ้น',notes:[
    'ไอคอนหัวเรื่องคัตซีนมีแสงเรืองนวลๆ เป็นจังหวะ',
    'กล่องบทพูดมีแสงเรืองอุ่นๆรอบกรอบ',
    'กรอบไอเทมปลดล็อกมีแสงเรืองทองและแสงไหลผ่านเป็นจังหวะ',
    'ปุ่ม Next เรืองแสงเป็นจังหวะเพื่อดึงความสนใจ'
  ]},
  {ver:'1.9.16',date:'2026-06-13',title:'🎮 ปรับ glow ให้ครบทุกหน้าเมนู',notes:[
    'หัวข้อหน้า Select Stage, Select Towers และ Endgame Mode มีแสงเรืองรอบแถบหัวและตัวอักษร เข้าธีมเดียวกับหน้าอื่น',
    'การ์ดเลือกหอคอย (Tower Select) มี hover ยกตัว+เรืองแสง และการ์ดที่เลือกเรืองแสงเหลืองเด่นขึ้น',
    'ปุ่ม Deploy! มีแสงเรืองตอน hover',
    'ตัวเลือกความยาก (Easy/Normal/Hard) ใน Endgame มี hover ยกตัว และตัวที่เลือกเรืองแสงแดงเด่นขึ้น',
    'การ์ดสถิติ Endgame (Best Wave/Score) มีแสงเรืองแดงนวลๆ',
    'รายการล่าสุดในหน้า What\'s New มีกรอบเรืองทองเด่นกว่ารายการเก่า'
  ]},
  {ver:'1.9.15',date:'2026-06-13',title:'🏆 หน้า Codex และ Rankings ดูพรีเมียมขึ้น',notes:[
    'หัวข้อหน้า Codex และ Rankings มีแสงเรืองรอบแถบหัวและตัวอักษร',
    'แท็บที่กำลังเลือกอยู่มีแสงเรืองใต้เส้นขีดและตัวอักษร',
    'การ์ดมอนสเตอร์/หอคอยใน Codex มี hover ยกตัว+เรืองแสง และการ์ดที่เลือกอยู่เรืองแสงเขียว',
    'รายการ Ranking มี hover ยกตัวเล็กน้อย, อันดับ 1-3 (เหรียญทอง/เงิน/ทองแดง) เรืองแสงตามสี, แถวของตัวเองเรืองแสงทอง',
    'การ์ดสถิติส่วนตัว (My Stats) มีแสงเรืองนวลตามธีมสี'
  ]},
  {ver:'1.9.14',date:'2026-06-13',title:'✨ UX โดยรวมตอบสนองและดูพรีเมียมขึ้น',notes:[
    'ปุ่มต่างๆ (ปุ่ม overlay, ปุ่มหอคอย, Send Wave, Auto) มีอนิเมชันยุบเล็กลงเวลากด ให้รู้สึกตอบสนองมากขึ้น',
    'ข้อความแจ้งเตือน (Toast) มีอนิเมชันเด้งและเงา ดูเด่นขึ้น',
    'การ์ดเลือกด่านมีเงาเรืองและยกตัวเล็กน้อยตอน hover, ด่านที่ผ่านแล้วมีแสงทองเรืองรอบการ์ด',
    'หน้าจอ Pause/Victory/Defeat มีพื้นหลังไล่เฉดสี, เบลอด้านหลัง (backdrop blur), และเงาเรืองรอบกล่อง',
    'Tooltip ต่างๆ ระหว่างเล่น (ขายหอคอย, แสดงระยะ, ตัวอย่างเวฟ) มีอนิเมชัน fade-in และเงาให้ดูพรีเมียมขึ้น'
  ]},
  {ver:'1.9.13',date:'2026-06-13',title:'⚔️ HUD ระหว่างเล่นดูมีมิติขึ้น',notes:[
    'แถบ HUD บนสุด (HP/Gold/Wave/Stage) เปลี่ยนเป็นกล่องพื้นหลังแยกแต่ละช่อง อ่านง่ายขึ้น พร้อม glow รอบแถบ',
    'หลอดเลือด (HP bar) มีแสงเรืองตามสี',
    'แผงเลือกหอคอย (tower panel) มีเงาเรืองเขียวด้านบน, ปุ่มหอคอยที่เลือกอยู่เรืองแสงเด่นขึ้น และมี hover ยกตัวเล็กน้อย',
    'ปุ่ม Send Wave มีจังหวะเรืองแสง (pulse) เพื่อดึงความสนใจ'
  ]},
  {ver:'1.9.12',date:'2026-06-13',title:'🎆 หน้าเมนูหลักมีชีวิตชีวาขึ้น',notes:[
    'ปุ่ม Story Mode มีแสงไหลผ่าน (shine sweep) วาบเป็นระยะ',
    'ไอคอนพลังงาน (⚡) บนแถบบนเปลี่ยนเป็นไอคอนสายฟ้าวาดเอง',
    'องค์ประกอบในเมนูหลักจะปรากฏแบบไล่ลำดับ (staggered) ตอนเข้าเมนู',
    'เพิ่มประกายไฟลอยเบาๆ ในพื้นหลังเมนูหลัก'
  ]},
  {ver:'1.9.11',date:'2026-06-13',title:'🎨 เปลี่ยนไอคอนเมนูล่างเป็นไอคอนวาดเอง',notes:[
    'เมนูด้านล่าง (Endgame, Story, Codex, Rankings, Dev) เปลี่ยนจาก emoji เป็นไอคอนเส้น (line icon) ที่วาดเอง ให้ดูเป็นมาตรฐานเดียวกันมากขึ้น',
    'ไอคอนแท็บที่กำลังเลือกจะมีแสงเรืองนวลรอบไอคอน'
  ]},
  {ver:'1.9.10',date:'2026-06-13',title:'✨ หน้าเมนูหลักดูพรีเมียมขึ้น',notes:[
    'โลโก้ TOWER QUEST มีแอนิเมชันแสงเรืองรองเบาๆ และตัวอักษรใหญ่/หนาขึ้น',
    'ปุ่ม Story Mode และ ENDGAME มีเอฟเฟกต์เรืองแสง (glow) และขนาดใหญ่ขึ้นให้ดูโดดเด่น',
    'พื้นหลังหน้าเมนูมีมิติมากขึ้น — เพิ่มฉากเมฆและภูเขาลอยเบาๆ แบบ parallax, vignette, แสงไล่สีรอบโลโก้ และดาวพื้นหลังเพิ่ม',
    'แถบด้านบน เมนูด้านล่าง และกล่องสถิติด้านล่างมีเอฟเฟกต์กระจกฝ้า (frosted glass)'
  ]},
  {ver:'1.9.9',date:'2026-06-13',title:'🏆 ปรับปรุงหน้า Rankings & Stats',notes:[
    'เพิ่มแท็บ "⚔️ Story" — อันดับคะแนนเฉพาะโหมดเนื้อเรื่อง เรียงตามคะแนนสูงสุด',
    'แท็บ "🌍 All" เพิ่มคำอธิบายว่า Endgame กับ Story ใช้สเกลคะแนนต่างกัน เพื่อไม่ให้สับสน',
    'แท็บ "📊 My Stats" เพิ่มสถิติ "Best Story Score" และ "Achievements" (ปลดล็อกแล้ว/ทั้งหมด)'
  ]},
  {ver:'1.9.8',date:'2026-06-13',title:'✨ Boss/Dark Lord/Shaman/Fire Spirit ขยับตัวธรรมชาติขึ้น',notes:[
    'เพิ่มแอนิเมชัน idle (โยกตัวขึ้น-ลงเบาๆ) ให้ Fire Spirit, Boss, Dark Lord และ Shaman — ครบทั้ง 11 ชนิดมอนสเตอร์แล้ว',
    'ความเร็วการโยกตัวจะปรับตามความเร็วการเคลื่อนที่จริงของมอน เหมือนมอนชนิดอื่นๆ'
  ]},
  {ver:'1.9.7',date:'2026-06-13',title:'✨ มอนสเตอร์เดิน/บินสมจริงตามความเร็ว',notes:[
    'มอนสเตอร์ที่เดิน (โกบลิน, สเกเลตัน, เงามืด, โกเลม, ชิลด์ไนท์ และอื่นๆ) จะเอียงตัวส่ายไปตามทิศทางการเดิน โดยความเร็วในการส่ายจะเร็วขึ้นตามความเร็วของมอนนั้นๆ',
    'ค้างคาวและไวเวิร์น: ความเร็วการกระพือปีกจะเร็วขึ้น/ช้าลงตามความเร็วการเคลื่อนที่จริง (เช่น ตอนเร่งโจมตี/โดนสโลว์)',
    'ทำให้การเคลื่อนไหวของมอนดูสมจริงและมีชีวิตชีวามากขึ้น'
  ]},
  {ver:'1.9.6',date:'2026-06-12',title:'✨ ป้อม 3D มี idle animation',notes:[
    'ป้อมในมุมมอง 3D ตอนนี้โยกตัวขึ้น-ลงเบาๆ ตลอดเวลา (ไม่ซิงค์กันระหว่างป้อม) ดูมีชีวิตชีวาขึ้น',
    'ส่วนประดับของป้อมหมุนตลอดเวลา: ผลึกน้ำแข็ง, วงแหวนเวทมนตร์, ออร่า Support, กองทอง, วงแหวนสายฟ้า',
    'ไม่กระทบการเล็ง/หมุนป้อมเข้าหาศัตรูตามปกติ'
  ]},
  {ver:'1.9.5',date:'2026-06-12',title:'✨ มอนสเตอร์ขยับตัวธรรมชาติขึ้น',notes:[
    'เพิ่มแอนิเมชัน idle ให้ โกบลิน, สเกเลตัน, เงามืด, โกเลม และชิลด์ไนท์ — ตอนนี้ขยับตัว/เรืองแสงตลอดเวลาเหมือนมอนชนิดอื่นแล้ว',
    'โกบลิน/สเกเลตัน/ชิลด์ไนท์/โกเลม: โยกตัวเบาๆ พร้อมตาเรืองแสงกระพริบ',
    'เงามืด: ลำตัวบีบ-ยืดแบบเจลลี่ให้ดูเหมือนวิญญาณลอยตัว'
  ]},
  {ver:'1.9.4',date:'2026-06-12',title:'🐛 แก้บัค Gold Mine ผลิตทองตอนรอเวฟ',notes:[
    'Gold Mine ผลิตทองได้เฉพาะตอนเวฟกำลังดำเนินอยู่เท่านั้น ไม่ผลิตทองตอนรอเริ่มเวฟถัดไปแล้ว',
    'ป้องกันการฟาร์มทองฟรีด้วยการยืนรอเวฟนานๆ'
  ]},
  {ver:'1.9.3',date:'2026-06-12',title:'⚖️ เรียงลำดับศัตรูตาม HP',notes:[
    'เรียงลำดับศัตรูในแต่ละด่าน (1-10) ใหม่ตาม HP จากน้อยไปมาก — เวฟ 1 ของทุกด่านจะเจอมอน HP ต่ำสุดก่อน',
    'แก้ปัญหาเวฟแรกๆ เจอมอน HP สูง (เช่น โกเลม) ที่ป้อมเริ่มต้นรับมือไม่ทัน',
    'มอนซิกเนเจอร์ของแต่ละด่าน (Shield Knight, หมอผี, วิเวิร์น ฯลฯ) ยังปรากฏในเวฟกลาง-ท้ายตามเดิม'
  ]},
  {ver:'1.9.2',date:'2026-06-12',title:'⚖️ ปรับศัตรูแต่ละด่านใหม่ทั้งหมด',notes:[
    'แต่ละด่าน (1-10) มีศัตรูไม่เกิน 7 ชนิด และทุกชนิดที่ระบุปรากฏได้จริงในด่านนั้น',
    'ด่านยาก (Dark Fortress, Dark Throne, Dark Tower Summit) ตัดมอนระดับต้น (โกบลิน/โครงกระดูก) ออก เน้นมอนระดับสูงให้เหมาะกับความยาก',
    'Stage 11 (Shadow Remnant) ยังคงมีศัตรูครบ 11 ชนิดตามธีม "ทุกชนิดรวมพล"'
  ]},
  {ver:'1.9.1',date:'2026-06-12',title:'⚖️ ปรับสมดุล Shadow Remnant',notes:[
    'ปรับลำดับศัตรูใน Stage 11 ให้ Wyvern, Shield Knight และหมอผีปรากฏได้จริงในด่าน',
    'ด่านสุดท้ายจึงมีศัตรูครบทุกชนิดตามธีม "ทุกชนิดสัตว์ร้ายรวมพล"'
  ]},
  {ver:'1.9.0',date:'2026-06-12',title:'🌑 ด่านใหม่! Shadow Remnant',notes:[
    'เพิ่ม Stage 11: Shadow Remnant — ด่านสุดท้ายที่แท้จริง หลังจากเอาชนะจอมมาร',
    'ศัตรูทุกชนิด (รวมจอมมาร) รวมพลในด่านเดียว 13 เวฟ',
    'สภาพอากาศโหดที่สุด — มืด/ฟ้าผ่า/พายุหิมะ/ทอร์นาโด/หมอกอาจเกิดร่วมกัน',
    'เพิ่ม Achievement ใหม่: ผู้ยุติเงามืด'
  ]},
  {ver:'1.8.0',date:'2026-06-12',title:'👾 รีเวิคมอนสเตอร์ทุกตัว!',notes:[
    'โกบลิน: รวมฝูงแล้วเร็วขึ้น 20% (Pack Rush)',
    'วิญญาณไฟ: พ่นไฟป้องกันเป็นช่วงๆ ลดดาเมจ 30%',
    'โกเลม: เกราะหินลดดาเมจ ค่อยๆ ร้าวเมื่อ HP ลด',
    'ค้างคาว: มีโอกาสหลบการโจมตี 25% (Erratic Dodge)',
    'ชิลด์ไนท์: โล่ฟื้นเองถ้าไม่โดนตี 4 วินาที'
  ]},
  {ver:'1.7.4',date:'2026-06-12',title:'🐉 วิเวิร์นโฉบหยุดป้อม!',notes:[
    'วิเวิร์นจะโฉบเร่งความเร็วเป็นช่วงๆ พร้อมหยุดทำงานป้อม 1 ป้อมแบบสุ่ม 3 วินาที',
    'ระวัง! ตอนวิเวิร์นโฉบ ป้อมที่ถูกหยุดจะมีไอคอน 💫 ขึ้นเตือน'
  ]},
  {ver:'1.7.3',date:'2026-06-12',title:'⚡ ปรับราคา Awaken!',notes:[
    'ราคาอเวคป้อม (Awaken) ปรับจาก 300 → 350 ทอง'
  ]},
  {ver:'1.7.2',date:'2026-06-12',title:'💰 ปรับค่ารางวัลทอง!',notes:[
    'ปรับเงินรางวัลจากการกำจัดศัตรูให้เป็นเลขกลมๆ (ลงท้าย 0/5) อ่านง่ายขึ้น',
    'ปรับเลือดศัตรูบางตัวเล็กน้อยให้สมดุลกับรางวัลใหม่'
  ]},
  {ver:'1.7.1',date:'2026-06-12',title:'📰 ช่องข่าวสารอัปเดต!',notes:[
    'เพิ่มหน้า "What\'s New" กดที่เลขเวอร์ชันมุมเมนูหลักเพื่อดูสิ่งที่เปลี่ยนแปลงล่าสุด',
    'มีจุดแดงแจ้งเตือนเมื่อมีอัปเดตใหม่ที่ยังไม่ได้อ่าน'
  ]},
  {ver:'1.7.0',date:'2026-06-12',title:'💀 โครงกระดูกแยกตัว!',notes:[
    'โครงกระดูกที่ตายแล้วจะแตกเป็นลูก 2 ตัว ขนาดเล็กลง',
    'ป้อมที่มีพื้นที่โจมตี (ปืนใหญ่ / เวทมนตร์ / สายฟ้า) จะเก็บลูกพวกนี้ได้ง่ายขึ้น'
  ]},
  {ver:'1.6.9',date:'2026-06-12',title:'✨ พลังตื่น (Awaken) แบบใหม่ต่อป้อม!',notes:[
    '💣 ปืนใหญ่: รัศมีระเบิดเพิ่มขึ้น 50%',
    '❄️ น้ำแข็ง: แช่แข็งศัตรูสนิท 3 วินาที (สูงสุด 6 วินาทีถ้ามีซัพพอร์ตตื่นอยู่ใกล้)',
    '✨ เวทมนตร์: โอกาสยิงเพิ่มสูงสุด 40% (สูงสุด 3 นัด)',
    '🎯 สไนเปอร์: กระสุนทะลุเป็นเส้นตรง โดนศัตรูที่อยู่ด้านหลังด้วย',
    '💚 ซัพพอร์ต: เพิ่มพลัง Awaken ของป้อมข้างเคียงเป็น 2 เท่า',
    '💰 เหมืองทอง: ผลผลิตทองเพิ่มเป็น 2 เท่า',
    '⚡ สายฟ้า: โจมตีต่อเนื่องสูงสุด 4 เป้าหมาย'
  ]},
  {ver:'1.6.8',date:'2026-06-11',title:'🎨 ป้อมมีชีวิตชีวาขึ้น!',notes:[
    'ป้อมที่ตื่นแล้วมีออร่าสีตามธาตุของตัวเอง',
    'ป้อมทุกตัวมีแอนิเมชันขยับเล็กๆ ระหว่างรอยิง'
  ]}
];
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
  const total=ACHIEVEMENTS.length;
  const done=[...unlocked].filter(id=>ACHIEVEMENTS.find(a=>a.id===id)).length;
  let html=`<div class="ach-count">🎖️ ปลดล็อกแล้ว ${done} / ${total}</div>
  <div class="ach-progress-bar" style="margin-bottom:14px;">
    <div class="ach-progress-fill" style="width:${Math.round(done/total*100)}%"></div>
  </div>`;
  const cats=['story','combat','skill','endgame','collect'];
  cats.forEach(cat=>{
    const items=ACHIEVEMENTS.filter(a=>a.cat===cat);
    html+=`<div class="ach-cat-label">${ACH_CATS[cat]}</div><div class="ach-grid">`;
    items.forEach(a=>{
      const isUnlocked=unlocked.has(a.id);
      html+=`<div class="ach-card ${isUnlocked?'unlocked':'locked'}">
        ${isUnlocked?'<div class="ach-done">✓</div>':''}
        <div class="ach-ico">${a.icon}</div>
        <div class="ach-name">${a.name}</div>
        <div class="ach-desc">${a.desc}</div>
      </div>`;
    });
    html+=`</div>`;
  });
  document.getElementById('cdxBody').innerHTML=html;
}

/* ══ SCREEN MANAGEMENT ══ */
function hideAll(){['mm','stagesel','gp','codex','devpanel','egmenu','leaderboard','whatsnew','towersel','storyscr','workshop','bag','gacha','daily'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});const cs=document.getElementById('cutscene');if(cs)cs.style.display='none';}
function showScreen(id,flex){
  hideAll();
  const el=document.getElementById(id);
  el.style.display=flex?'flex':'block';
  if(flex)el.style.flexDirection='column';
  el.classList.remove('screen-enter');
  void el.offsetWidth; // reflow เพื่อรีสตาร์ทแอนิเมชัน
  el.classList.add('screen-enter');
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
}

/* ══ WORKSHOP ══ */
const VOID_RECIPE={gems:800,mats:{0:30,1:15,2:8}};
const MAT_ICONS=['🪨','🔘','🌟'];
const MAT_NAMES=['เศษหินมืด','แกนเวทอสูร','ผงดาวตก'];
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
  return `<div class="gc-num gc-num-dud">${num}</div>
    <div class="gc-ico">🔹</div>
    <div class="gc-name" style="color:#64b5f6;">เศษสีน้ำเงิน</div>
    <div class="gacha-rarity-tag rarity-common">common</div>`;
}
function startGacha(n){
  if(_gachaBusy) return;
  const results=doGachaPulls(n);
  if(!results){showToast('💎 มณีวิญญาณไม่พอ!');return;}
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
function _gachaFx(card,rarity){
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
  const scr=document.getElementById('gacha');
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
  if(show&&!document.getElementById('gachaOddsPool').innerHTML){
    document.getElementById('gachaOddsPool').innerHTML=GACHA_POOL.map(p=>`
      <div class="gacha-odds-row">
        <span style="font-family:monospace;color:rgba(179,136,255,.6);">${p.code}</span>
        <span style="color:${p.color};">${p.icon} ${p.name}</span>
        <span class="gacha-rarity-tag rarity-${p.rarity}" style="font-size:7px;">${p.rarity}</span>
        <span style="color:#aaa;">1%</span>
      </div>`).join('');
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
    // วัสดุ
    const gems=loadGems();
    const matDefs=[
      {icon:'💎',name:'มณีวิญญาณ',col:'#80d8ff',qty:gems,desc:'ใช้คราฟป้อมมนตราโมฆะใน Workshop'},
      {icon:MAT_ICONS[0],name:MAT_NAMES[0],col:'#90caf9',qty:mats[0]||0,desc:'วัสดุสามัญจากการเล่น'},
      {icon:MAT_ICONS[1],name:MAT_NAMES[1],col:'#ce93d8',qty:mats[1]||0,desc:'วัสดุหายากจากการเล่น'},
      {icon:MAT_ICONS[2],name:MAT_NAMES[2],col:'#ffe082',qty:mats[2]||0,desc:'วัสดุพิเศษจากการเล่น'},
    ];
    body.innerHTML=matDefs.map(m=>`<div class="bag-item">
        <div class="bag-ico" style="font-size:24px;">${m.icon}</div>
        <div class="bag-info">
          <div class="bag-name" style="color:${m.col};">${m.name}</div>
          <div class="bag-desc">${m.desc}</div>
        </div>
        <div class="bag-qty">${m.qty}</div>
      </div>`).join('');
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
          <div class="bag-ico" style="background:${isActive?d.color+'33':'rgba(255,255,255,.06)'};">${d.icon}</div>
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
  } else {
    // สะสม
    const shards=BAG_ITEM_DEFS.filter(d=>d.type==='shard'&&(bag[d.id]||0)>0);
    if(!shards.length){body.innerHTML='<div class="bag-empty">ยังไม่มีชิ้นส่วนสะสม<br>ได้รับจากกล่องรางวัลหลังจบด่าน</div>';return;}
    body.innerHTML=shards.map(d=>{
      const isNew=newSet.has(d.id);
      return `<div class="bag-item${isNew?' bag-item-new':''}" style="border-color:${isNew?'rgba(239,83,80,.55)':'rgba(255,255,255,.1)'};">
        ${isNew?'<div class="bag-new-dot">ใหม่</div>':''}
        <div class="bag-ico" style="font-size:22px;">${d.icon}</div>
        <div class="bag-info">
          <div class="bag-name" style="color:${d.color};">${d.name}</div>
          <div class="bag-desc">${d.desc}</div>
          <div class="bag-qty">มี ${bag[d.id]} ชิ้น</div>
        </div>
      </div>`;
    }).join('');
  }
}
function useBuffItem(id){
  setActiveBuff(loadActiveBuff()===id?'':id); // toggle
  renderBag();
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
    {id:0, name:'ทองเริ่มต้น +100', desc:'เริ่มด่านมีทอง +100',            cost:200},
    {id:3, name:'ทองเริ่มต้น +150', desc:'เริ่มด่านมีทอง +150 (รวม +250)', cost:450},
    {id:4, name:'ทองจากศัตรู +5%',  desc:'ฆ่าศัตรูได้ทอง +5%',             cost:750},
    {id:5, name:'ทองจากศัตรู +5%',  desc:'ฆ่าศัตรูได้ทอง +5% (รวม +10%)',  cost:1150},
  ]},
  {key:'atk',icon:'⚔️',name:'โจมตี',color:'#ff8a65',nodes:[
    {id:2, name:'Awaken ลดราคา 50', desc:'อเวคป้อมราคา 300 (ปกติ 350)',    cost:500},
    {id:8, name:'ดาเมจป้อม +5%',    desc:'ดาเมจป้อมทุกหลัง +5%',           cost:550},
    {id:9, name:'ดาเมจป้อม +5%',    desc:'ดาเมจป้อมทุกหลัง +5% (รวม +10%)', cost:800},
    {id:10,name:'ดาเมจป้อม +5%',    desc:'ดาเมจป้อมทุกหลัง +5% (รวม +15%)', cost:1200},
  ]},
  {key:'def',icon:'🛡️',name:'ป้องกัน',color:'#64b5f6',nodes:[
    {id:1, name:'HP ปราสาท +5', desc:'HP ปราสาทสูงสุด +5',          cost:350},
    {id:6, name:'HP ปราสาท +3', desc:'HP ปราสาทสูงสุด +3 (รวม +8)',  cost:550},
    {id:7, name:'HP ปราสาท +2', desc:'HP ปราสาทสูงสุด +2 (รวม +10)', cost:850},
    {id:11,name:'HP ปราสาท +2', desc:'HP ปราสาทสูงสุด +2 (รวม +12)', cost:1250},
  ]},
];
function buyTalent(id,cost,prereqId){
  if(prereqId!=null && !hasPUpgrade(prereqId)){ showToast('🔒 ปลดทาเลนต์ขั้นก่อนหน้าก่อน!'); return; }
  buyPUpgrade(id,cost);
}
function _renderTalentTree(){
  const pg=loadPGold();
  return TALENT_TREE.map(br=>{
    const nodes=br.nodes.map((nd,t)=>{
      const owned=hasPUpgrade(nd.id);
      const prereqId=t>0?br.nodes[t-1].id:null;
      const prereqOk=t===0||hasPUpgrade(prereqId);
      const buyable=!owned&&prereqOk&&pg>=nd.cost;
      const state=owned?'owned':(!prereqOk?'locked':buyable?'buyable':'tooexp');
      const act=owned
        ?`<span class="talent-owned">ปลดแล้ว</span>`
        :(!prereqOk
          ?`<span class="talent-lock">🔒</span>`
          :`<button class="talent-buy${buyable?'':' dim'}" ${buyable?`onclick="buyTalent(${nd.id},${nd.cost},${prereqId})"`:'disabled'}>${nd.cost}<span>ทองถาวร</span></button>`);
      return `<div class="talent-node ${state}">
        <div class="talent-tier">${owned?'✓':(t+1)}</div>
        <div class="talent-info"><div class="talent-name">${nd.name}</div><div class="talent-desc">${nd.desc}</div></div>
        <div class="talent-act">${act}</div>
      </div>`;
    }).join('');
    return `<div class="talent-branch" style="--bc:${br.color};">
      <div class="talent-head">${br.icon} ${br.name}</div>
      <div class="talent-nodes">${nodes}</div>
    </div>`;
  }).join('');
}
function openWorkshop(){ showScreen('workshop',true); renderWorkshop(); }
function toggleWsSkill(){
  const d=document.getElementById('wsSkillDetail');
  const a=document.getElementById('wsSkillArrow');
  if(!d||!a) return;
  const show=d.style.display==='none';
  d.style.display=show?'':'none';
  a.textContent=show?'▲ ซ่อน':'▼ รายละเอียด';
}
function isFinalStageCleared(){
  return (loadProgress()[STAGES.length-1]||0)>=1;
}
function renderWorkshop(){
  const gems=loadGems(), mats=loadMaterials();
  const unlocked=isVoidUnlocked();
  const finalCleared=isFinalStageCleared();
  document.getElementById('wsLockBadge').style.display=(!unlocked&&!finalCleared)?'block':'none';
  document.getElementById('wsAlreadyUnlocked').style.display=unlocked?'block':'none';
  document.getElementById('wsRecipeBox').style.display='none';
  const craftBtn=document.getElementById('wsCraftBtn');
  const reqNote=document.getElementById('wsCraftReqNote');
  if(unlocked){craftBtn.style.display='none';if(reqNote)reqNote.style.display='none';return;}
  if(finalCleared){
    const reqs=[
      {icon:'💎',name:'มณีวิญญาณ',have:gems,need:VOID_RECIPE.gems},
      {icon:MAT_ICONS[0],name:MAT_NAMES[0],have:mats[0]||0,need:VOID_RECIPE.mats[0]},
      {icon:MAT_ICONS[1],name:MAT_NAMES[1],have:mats[1]||0,need:VOID_RECIPE.mats[1]},
      {icon:MAT_ICONS[2],name:MAT_NAMES[2],have:mats[2]||0,need:VOID_RECIPE.mats[2]},
    ];
    const allMet=reqs.every(r=>r.have>=r.need);
    craftBtn.style.display='';
    craftBtn.disabled=!allMet;
    if(reqNote){
      reqNote.style.display='block';
      reqNote.innerHTML=reqs.map(r=>{
        const met=r.have>=r.need;
        return `<span style="color:${met?'#69f0ae':'#ef5350'};">${r.icon} ${r.need.toLocaleString()} ${r.name}</span>`;
      }).join('&ensp;·&ensp;');
    }
  } else {
    craftBtn.style.display='none';
    if(reqNote)reqNote.style.display='none';
  }
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
const SHARD_EXCHANGE=[
  {shardId:'shard_c',shardIcon:'🔹',shardName:'เศษสีน้ำเงิน',cost:10,matIdx:0},
  {shardId:'shard_r',shardIcon:'💜',shardName:'เศษสีม่วง',   cost:5,  matIdx:1},
  {shardId:'shard_e',shardIcon:'🌟',shardName:'เศษสีทอง',    cost:3,  matIdx:2},
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
        <div style="font-size:11px;font-weight:700;color:${canDo?'#fff':'rgba(255,255,255,.4)'};">${ex.shardIcon}×${ex.cost} → ${MAT_ICONS[ex.matIdx]} ${MAT_NAMES[ex.matIdx]} ×1</div>
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

/* ══ DAILY (LOGIN + QUESTS) — v3.6.0 ══ */
function openDaily(){showScreen('daily',true);renderDaily();}
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
        :`<button onclick="_claimQuestUI('${q.id}')" ${ready?'':'disabled'} style="background:${ready?'linear-gradient(180deg,#43a047,#1b5e20)':'rgba(255,255,255,.06)'};color:${ready?'#fff':'rgba(255,255,255,.3)'};border:none;border-radius:8px;padding:7px 12px;font-size:11px;font-weight:700;cursor:${ready?'pointer':'not-allowed'};flex-shrink:0;${ready?'box-shadow:0 0 10px rgba(67,160,71,.6);':''}">${q.rwTxt}</button>`;
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
  showToast('✅ '+q.icon+' '+q.desc+' สำเร็จ! รับ '+q.rwTxt);
  renderDaily(); updateMenuStats();
}
function _updateDailyBadge(){
  const b=document.getElementById('dailyBadge');
  if(b) b.style.display=(typeof dailyHasClaimable==='function'&&dailyHasClaimable())?'block':'none';
}

/* ══ STAGE SELECT ══ */
function openStageSelect(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  G=null;paused=false;
  showScreen('stagesel',true);
  renderStageSelect();
}
function renderStageSelect(){
  const p=loadProgress();
  let html='';
  STAGES.forEach((s,si)=>{
    if(s.comingSoon){
      html+=`<div style="background:rgba(255,255,255,.03);border:2px dashed #2a3a2a;border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:14px;opacity:.4;">
        <div style="font-size:36px;">${s.icon}</div>
        <div><div style="font-size:15px;font-weight:900;color:#555;">Stage ${si+1}: ${s.name}</div>
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
    html+=`<div class="stage-card${unlocked?'':' locked'}${tierClass}" onclick="${unlocked?'startStage('+si+')':'void(0)'}">
      ${chestIcon?`<div class="stage-chest-badge">${chestIcon}</div>`:''}
      <div class="stage-icon">${s.icon}</div>
      <div class="stage-info">
        <div class="stage-name">ด่าน ${si+1}: ${s.name}</div>
        <div class="stage-desc">${s.desc}</div>
        <div class="stage-meta">
          <span class="stage-pill pill-wave">🌊 ${s.waves} คลื่น</span>
          <span class="stage-pill pill-enemy">${enemyIcons} ${cleared?'ศัตรู':'???'}</span>
          <span class="stage-pill pill-unlock">🏰 ${s.unlockedTowers.length} ป้อม</span>
        </div>
      </div>
      ${unlocked&&starStr?`<div class="stage-stars" style="color:${starColor}">${starStr}</div>`:''}
      ${!unlocked?'<div class="stage-lock-icon">🔒</div>':''}
    </div>`;
  });
  for(let si=1;si<STAGES.length;si++){
    if(!isStageUnlocked(si)){
      html+=`<div class="ss-unlock-note">🔒 ผ่านด่าน ${si} เพื่อปลดล็อก <strong>${STAGES[si].name}</strong></div>`;
    }
  }
  document.getElementById('ssBody').innerHTML=html;
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
  const available=s.unlockedTowers||[0,1,2,3,4,5,6];
  stageMaxTowers=s.maxTowers||99;
  /* ถ้าไม่มี limit หรือป้อมมีน้อยกว่า limit → ข้ามหน้านี้ไปเลย */
  if(stageMaxTowers>=99||available.length<=stageMaxTowers){
    selectedTowersForStage=[...available];
    _doStartStage(si);
    return;
  }
  /* มีป้อมมากกว่า limit → ต้องให้ผู้เล่นเลือก */
  showScreen('towersel',true);
  const saved=JSON.parse(localStorage.getItem('tq_sel_'+si)||'[]');
  selectedTowersForStage=saved.filter(t=>available.includes(t)).slice(0,stageMaxTowers);
  const info=document.getElementById('tsInfo');
  info.innerHTML=`เลือก <strong>ป้อมสูงสุด ${stageMaxTowers} แบบ</strong> สำหรับด่านนี้ — มีป้อมทั้งหมด ${available.length} แบบให้เลือก`;
  renderTowerSelection(available);
}
function openEgTowerSelection(){
  towerSelMode='endgame';
  stageMaxTowers=[7,6,5][egDiff];
  const available=[0,1,2,3,4,5,6,7].concat(isVoidUnlocked()?[8]:[]);
  showScreen('towersel',true);
  const saved=JSON.parse(localStorage.getItem('tq_sel_endgame_'+egDiff)||'[]');
  selectedTowersForStage=saved.filter(t=>available.includes(t)).slice(0,stageMaxTowers);
  const info=document.getElementById('tsInfo');
  info.innerHTML=`เลือก <strong>ป้อมสูงสุด ${stageMaxTowers} แบบ</strong> สำหรับ Endgame (${EG_DIFF_NAMES[egDiff]}) — มีป้อมทั้งหมด ${available.length} แบบให้เลือก`;
  renderTowerSelection(available);
}
function renderTowerSelection(available){
  const max=stageMaxTowers;
  document.getElementById('tsSlotCount').textContent=selectedTowersForStage.length+'/'+max;
  // strip
  let strip='';
  for(let i=0;i<max;i++){
    const ti=selectedTowersForStage[i];
    if(ti!==undefined){
      strip+=`<div class="ts-slot filled" onclick="removeTowerFromSelection(${i})" title="กดเพื่อเอาออก">${TICONS[ti]}</div>`;
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
    grid+=`<div class="ts-card${isSel?' selected':''}" onclick="toggleTowerSelection(${ti})">
      ${badges.join('')}
      <div class="ts-card-ico">${TICONS[ti]}</div>
      <div class="ts-card-name">${TNAMES[ti]}</div>
      <div class="ts-card-cost">💰${CFG.t_cost[ti]}</div>
      <div class="ts-card-desc">${TSTRENGTH[ti].join(' · ')}</div>
    </div>`;
  });
  document.getElementById('tsGrid').innerHTML=grid;
  document.getElementById('tsStartBtn').disabled=selectedTowersForStage.length===0;
}
function _tsAvailable(){
  return towerSelMode==='endgame'
    ? [0,1,2,3,4,5,6,7].concat(isVoidUnlocked()?[8]:[])
    : (STAGES[pendingStageIndex].unlockedTowers||[0,1,2,3,4]);
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
function confirmTowerSelection(){
  if(selectedTowersForStage.length===0) return;
  if(towerSelMode==='endgame') _doStartEndgame();
  else _doStartStage(pendingStageIndex);
}

/* ══ TOWER SELECT ══ */
function selTower(i){
  if(!G||G.over||G.win||paused) return;
  if(!currentStage.unlockedTowers.includes(i)){showToast('🔒 ยังไม่ได้ปลดล็อค!');return;}
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
}
function addParticle(x,y,txt,col){
  if(!G) return;
  G.particles.push({x,y,txt,col,life:1,vy:-1.5-Math.random()*.5});
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
  ['monster','boss','tower','achiev'].forEach(t=>{
    const key=t==='achiev'?'Achiev':t.charAt(0).toUpperCase()+t.slice(1);
    const el=document.getElementById('tab'+key);
    if(el) el.classList.toggle('active',t===tab);
  });
  if(tab==='achiev'){
    // mark all current achievements as seen
    const unlocked=loadAchievements();
    localStorage.setItem('tq_ach_seen',JSON.stringify([...unlocked]));
    _updateAchBadge();
    renderAchievTab();
  } else renderCodex();
}
function selectCodex(i){cdxSel=(cdxSel===i)?-1:i;renderCodex();}

function renderMonsterDetail(i){
  const bHP=CFG.m_hp[i],spd=CFG.m_spd[i],rew=CFG.m_rew[i];
  const isBoss=MTYPE[i]===1;
  const subLabel=isBoss?'⚠️ Boss — Special Unit':'Common Enemy';
  const strengthHtml=MSTRENGTH[i].map(s=>`<span class="cdx-tag tag-red">💪 ${s}</span>`).join('');
  const weakHtml=MWEAKNESS[i].map(w=>`<span class="cdx-tag tag-green">🎯 ${w}</span>`).join('');
  return `<div class="cdx-detail">
    <div class="cdx-detail-head">
      <div class="cdx-detail-ico">${EICONS[i]}</div>
      <div>
        <div class="cdx-detail-name">${ENAMES[i]}</div>
        <div class="cdx-detail-sub">${subLabel}</div>
        <div style="margin-top:3px;font-size:10px;background:rgba(255,255,255,.08);border-radius:6px;padding:2px 8px;display:inline-block;color:#ce93d8;">⚔️ เผ่า: ${MTRIBE[i]}</div>
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
        <div class="ico">${u?EICONS[i]:'❓'}</div>
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
            <div style="margin-top:3px;font-size:10px;background:rgba(255,255,255,.08);border-radius:6px;padding:2px 8px;display:inline-block;color:#80cbc4;">💰 ราคาเริ่มต้น: ${CFG.t_cost[cdxSel]} ทอง <span style="opacity:.7;">(+15 ทองต่อป้อมชนิดนี้ที่วางแล้ว)</span></div>
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
  if(!devFromMenu&&G&&!G.over&&!G.win){
    showScreen('gp',true);
    paused=false;
    document.getElementById('pauseBtn').textContent='⏸';
  } else {
    showScreen('mm',true);
  }
}
function switchDevTab(i){
  devTab=i;
  for(let j=0;j<5;j++){const el=document.getElementById('dtab'+j);if(el)el.classList.toggle('active',j===i);}
  renderDevPanel();
}
function renderDevPanel(){
  const body=document.getElementById('devBody');
  if(devTab===0)body.innerHTML=renderDevCurve();
  else if(devTab===1)body.innerHTML=renderDevMonster();
  else if(devTab===2)body.innerHTML=renderDevTower();
  else if(devTab===3)body.innerHTML=renderDevCheat();
  else body.innerHTML=renderDevDebug();
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
  return `<div class="dev-section"><div class="dev-section-title">💰 ทองในด่าน</div>
  <div class="dev-cheat-grid">
    <div class="dev-cheat-btn green" onclick="cheat('gold500')">+500 ทอง</div>
    <div class="dev-cheat-btn green" onclick="cheat('gold9999')">+9999 ทอง</div>
    <div class="dev-cheat-btn green" onclick="cheat('hp_full')">❤️ HP เต็ม</div>
    <div class="dev-cheat-btn" onclick="cheat('hp10')">ตั้ง HP=10</div>
  </div></div>
  <div class="dev-section"><div class="dev-section-title">💎 มณีวิญญาณ</div>
  <div class="dev-cheat-grid">
    <div class="dev-cheat-btn green" onclick="cheat('gem100')">+100 💎</div>
    <div class="dev-cheat-btn green" onclick="cheat('gem999')">+999 💎</div>
    <div class="dev-cheat-btn" onclick="cheat('gem0')">ตั้ง 0 💎</div>
    <div class="dev-cheat-btn" onclick="cheat('pity0')">รีเซ็ต Pity</div>
  </div></div>
  <div class="dev-section"><div class="dev-section-title">🪨 วัสดุคราฟ</div>
  <div class="dev-cheat-grid">
    <div class="dev-cheat-btn green" onclick="cheat('mat0_10')">+10 เศษหินมืด</div>
    <div class="dev-cheat-btn green" onclick="cheat('mat1_10')">+10 แกนเวทอสูร</div>
    <div class="dev-cheat-btn green" onclick="cheat('mat2_5')">+5 ผงดาวตก</div>
    <div class="dev-cheat-btn" onclick="cheat('mat_reset')">รีเซ็ตวัสดุ</div>
  </div></div>
  <div class="dev-section"><div class="dev-section-title">🌊 Wave Control</div>
  <div class="dev-cheat-grid">
    <div class="dev-cheat-btn" onclick="cheat('skip_wave')">⏭ ข้ามคลื่น</div>
    <div class="dev-cheat-btn" onclick="cheat('kill_all')">💀 ฆ่าทั้งหมด</div>
    <div class="dev-cheat-btn red" onclick="cheat('wave_1')">↩ รีเซ็ตคลื่น</div>
    <div class="dev-cheat-btn red" onclick="cheat('clear_towers')">🗑 ลบป้อมทั้งหมด</div>
  </div></div>
  <div class="dev-section"><div class="dev-section-title">🗺️ Stage Progress</div>
  <div class="dev-cheat-grid">
    <div class="dev-cheat-btn green" onclick="cheat('unlock_stages')">🔓 Unlock All</div>
    <div class="dev-cheat-btn red" onclick="cheat('reset_stages')">↺ Reset Progress</div>
    <div class="dev-cheat-btn" onclick="cheat('unlock_codex')">📖 Unlock Codex</div>
    <div class="dev-cheat-btn red" onclick="cheat('lock_codex')">🔒 Lock Codex</div>
    <div class="dev-cheat-btn green" onclick="cheat('unlock_ach')">🎖️ Unlock Ach</div>
    <div class="dev-cheat-btn red" onclick="cheat('reset_ach')">↺ Reset Ach</div>
  </div></div>
  <div class="dev-section"><div class="dev-section-title">⚙️ Game Settings</div>
    ${dSlide('startGold','ทองเริ่มต้น','ทอง',CFG.startGold,50,1000,25)}
    ${dSlide('baseHP','HP ปราสาท','',CFG.baseHP,1,50,1)}
    ${dSlide('spawnInterval','ช่วงเวลา Spawn','s',CFG.spawnInterval,.1,3,.05)}</div>`;
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
    case 'gem100': saveGems(loadGems()+100);showToast('💎 +100 มณีวิญญาณ!');break;
    case 'gem999': saveGems(loadGems()+999);showToast('💎 +999 มณีวิญญาณ!');break;
    case 'gem0': saveGems(0);showToast('💎 ตั้งมณีเป็น 0 แล้ว');break;
    case 'pity0': saveGachaPity(0);showToast('🔄 รีเซ็ต Pity แล้ว');break;
    case 'mat0_10':{const m=loadMaterials();m[0]=(m[0]||0)+10;saveMaterials(m);showToast('🪨 +10 เศษหินมืด!');break;}
    case 'mat1_10':{const m=loadMaterials();m[1]=(m[1]||0)+10;saveMaterials(m);showToast('🔘 +10 แกนเวทอสูร!');break;}
    case 'mat2_5':{const m=loadMaterials();m[2]=(m[2]||0)+5;saveMaterials(m);showToast('🌟 +5 ผงดาวตก!');break;}
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

function devSave(){
  localStorage.setItem('tq_cfg',JSON.stringify(CFG));
  const json=JSON.stringify(CFG,null,2);
  // show copy modal instead of file download (blocked in sandbox)
  const overlay=document.createElement('div');
  overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
  overlay.innerHTML=`<div style="background:#1a1a0a;border:2px solid #ff9800;border-radius:14px;padding:20px;width:100%;max-width:500px;max-height:80vh;display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span style="color:#ff9800;font-weight:700;font-size:14px;">💾 คอนฟิก — คัดลอกและบันทึก</span>
      <button onclick="this.closest('div[style]').remove()" style="background:rgba(255,255,255,.15);border:1px solid #555;border-radius:6px;color:#fff;padding:4px 10px;cursor:pointer;font-size:12px;">✕ ปิด</button>
    </div>
    <textarea readonly style="flex:1;min-height:260px;background:#0a0a0a;border:1px solid #333;border-radius:8px;color:#ffe082;font-family:monospace;font-size:11px;padding:10px;resize:none;line-height:1.5;">${json}</textarea>
    <button onclick="navigator.clipboard.writeText(this.previousElementSibling.value).then(()=>{this.textContent='✅ คัดลอกแล้ว!';setTimeout(()=>this.textContent='📋 คัดลอก',1500)})" style="background:rgba(255,152,0,.2);border:1px solid #ff9800;border-radius:8px;color:#ff9800;padding:9px;font-weight:700;font-size:13px;cursor:pointer;">📋 คัดลอก</button>
    <div style="font-size:10px;color:#555;text-align:center;">วาง JSON นี้ลงไฟล์ tq_config.json เพื่อเก็บ config ไว้ใช้ทีหลัง</div>
  </div>`;
  document.body.appendChild(overlay);
  showToast('💾 Saveค่าแล้ว!');
}


/* ══ CUTSCENE DATA ══ */
const CUTSCENES = [
  // Stage 0: Grassland
  { bg:'linear-gradient(160deg,#1a3a6e,#1a8a4a)',
    slides:[
      {speaker:'บันทึกประวัติศาสตร์',icon:'📜',title:'The Dark Awakening',
       text:'นานมาแล้ว อาณาจักรสีเขียวอยู่ในความสงบสุข...\n\nจนกระทั่งวันหนึ่ง ประตูมืดได้เปิดขึ้นที่ชายแดนทางเหนือ กองทัพแห่งความมืดหลั่งไหลออกมาไม่หยุดหย่อน'},
      {speaker:'ผู้พิทักษ์',icon:'🛡️',title:'ปกป้องทุ่งหญ้า!',
       text:'ทุ่งหญ้าชายขอบเมืองถูกรุกรานเป็นด่านแรก โกบลินเคลื่อนที่เร็วและมาเป็นฝูง โครงกระดูกทนทานกว่า — ต้องวางป้อมกีดขวางเส้นทางให้ดี!'},
      {speaker:'วิศวกร',icon:'⚙️',title:'ป้อมเริ่มต้น — พร้อมรบ!',
       text:'ปืนใหญ่ระเบิดฝูงศัตรู\nป้อมน้ำแข็งชะลอให้ยิงได้นานขึ้น\nซัพพอร์ตเพิ่มพลังให้ป้อมรอบข้าง\n\nวางให้ครบทั้ง 3 แบบเพื่อผลลัพธ์ที่ดีที่สุด!',
       unlock:{towers:[0,1,4],label:'Starting Towers'}},
    ]
  },
  // Stage 1: Dark Forest
  { bg:'linear-gradient(160deg,#0d1f0d,#1a3a1a)',
    slides:[
      {speaker:'ผู้พิทักษ์',icon:'🌲',title:'Dark Forest — เข้าป่าลึก',
       text:'ผ่านทุ่งหญ้ามาแล้ว แต่ป่าทึบเบื้องหน้ายิ่งอันตรายกว่า...\n\nเงามืด (Shadow) ซ่อนตัวระหว่างต้นไม้ มันเดินช้ากว่าโกบลิน แต่ต้านทานความเย็นได้บางส่วน ต้องใช้กลยุทธ์ใหม่'},
      {speaker:'นักมายากล',icon:'✨',title:'พบศิลามหัศจรรย์!',
       text:'ลึกในป่านี้มีศิลาโบราณที่สะสมพลังเวทมนตร์มานับพันปี\n\nเราสามารถดึงพลังนั้นมาสร้าง Magic Tower ได้! ยิง Splash กว้าง ทำลายล้างศัตรูที่รวมกลุ่มกันได้ในทีเดียว'},
      {speaker:'นักมายากล',icon:'✨',title:'Magic Tower — ปลดล็อคแล้ว!',
       text:'Magic Tower เหมาะที่สุดกับเส้นทางวกวน ยิ่งศัตรูรวมกันมาก ยิ่งได้ผลดี\n\nวางตรงทางเลี้ยวหักศอกเพื่อให้กระสุน Splash โดนหลายตัวในครั้งเดียว!',
       unlock:{towers:[2],label:'Magic Tower Unlocked'}},
    ]
  },
  // Stage 2: Volcanic Pass
  { bg:'linear-gradient(160deg,#3a0000,#1f0d00)',
    slides:[
      {speaker:'สายลับ',icon:'🔥',title:'Volcanic Pass — รายงาน!',
       text:'รายงานด่วน! กองทัพมืดบุกผ่านช่องเขาภูเขาไฟ\n\nวิญญาณไฟกำเนิดจากลาวาร้อน HP สูงและไม่หยุดนิ่ง และครั้งนี้... บอสตัวแรกก็ปรากฏตัวแล้ว'},
      {speaker:'ผู้พิทักษ์',icon:'👹',title:'⚠️ Boss Alert!',
       text:'บอสตัวแรก — จอมปีศาจขนาดใหญ่ HP มหาศาล ปรากฏตั้งแต่คลื่นที่ 4 เป็นต้นไป\n\nต้องใช้ป้อมทุกแบบช่วยกันยิง อย่าให้มันผ่านไปได้เด็ดขาด!'},
      {speaker:'นายทหาร',icon:'🎯',title:'Sniper Tower — ถึงแล้ว!',
       text:'มือปืนระยะไกลของเราเดินทางมาถึงแล้ว!\n\nSniper Tower มีระยะยิงไกลที่สุดในเกม — ยิงจากปลายสุดของแผนที่ได้ เหมาะมากกับการสกัดบอสตั้งแต่ยังอยู่ไกล',
       unlock:{towers:[3],label:'Sniper Tower Unlocked'}},
    ]
  },
  // Stage 3: Desert Crossing
  { bg:'linear-gradient(160deg,#3d2b00,#1a1400)',
    slides:[
      {speaker:'สายลับ',icon:'🏜️',title:'Desert Crossing — Stage 4',
       text:'ข่าวสืบมาว่ากองทัพมืดบุกข้ามทะเลทรายแล้ว ฝูงค้างคาวบินนำหน้า โกเลมยักษ์ตามมาข้างหลัง'},
      {speaker:'ผู้พิทักษ์',icon:'🦇',title:'Air Threat Detected!',
       text:'ค้างคาวบินอยู่บนฟ้า ป้อมส่วนใหญ่ยิงไม่ถึง! ต้องใช้ Sniper หรือ Archer เท่านั้น',
       unlock:{towers:[5],label:'Archer Tower Unlocked'}},
    ]
  },
  // Stage 4: Treasure Valley
  { bg:'linear-gradient(160deg,#2d2000,#1a1200)',
    slides:[
      {speaker:'พ่อค้า',icon:'💰',title:'Treasure Valley — Stage 5',
       text:'คลังสมบัติของอาณาจักรตกอยู่ในอันตราย ฝูง Bat Swarm บินเข้ามาเป็นระลอกใหญ่'},
      {speaker:'วิศวกร',icon:'⛏️',title:'Gold Mine Operational',
       text:'เราขุดพบสายแร่ทองใต้ดิน! Gold Mine สร้างรายได้ต่อเนื่อง ยิ่ง Upgrade ยิ่งได้มาก',
       unlock:{towers:[6],label:'Gold Mine Unlocked'}},
    ]
  },
  // Stage 5: Thunder Cave
  { bg:'linear-gradient(160deg,#0a0a1f,#0a0a2f)',
    slides:[
      {speaker:'นักวิทยาศาสตร์',icon:'⚡',title:'Thunder Cave — Stage 6',
       text:'ถ้ำสายฟ้าใต้ดิน — กระแสไฟฟ้าไหลตลอดเวลา ศัตรูได้รับพลังงานฟ้าผ่าทำให้เคลื่อนที่เร็วขึ้น'},
      {speaker:'นักวิทยาศาสตร์',icon:'⚡',title:'Lightning Strikes!',
       text:'เราสามารถนำพลังฟ้าผ่ามาใช้ได้! Thunder Tower ยิง chain ไปหาศัตรูข้างๆ อีก 2 ตัว และยิงโดนศัตรูบินได้ด้วย!',
       unlock:{towers:[7],label:'Thunder Tower Unlocked!'}},
    ]
  },
  // Stage 6: Cursed Swamp
  { bg:'linear-gradient(160deg,#0a1a0a,#0d250d)',
    slides:[
      {speaker:'นักเวทย์',icon:'🌿',title:'Cursed Swamp — Stage 7',
       text:'หนองน้ำโบราณที่ซ่อนคำสาปไว้ภายใน ศัตรูแทรกซึมมาจากทุกทิศ ทางเดินแคบและวกวน'},
      {speaker:'ผู้พิทักษ์',icon:'⚔️',title:'เตรียมพร้อมสำหรับด่านหน้า!',
       text:'ผ่านหนองน้ำนี้ไปแล้ว ป้อมปราการมืดรอคอยอยู่ข้างหน้า\n\nShield Knight ถือโล่เหล็กหนา — ต้องใช้ Sniper หรือ Thunder เจาะโล่ก่อน ถึงจะโดน HP จริง!'},
    ]
  },
  // Stage 7: Dark Fortress
  { bg:'linear-gradient(160deg,#0f0f0f,#1a0a1a)',
    slides:[
      {speaker:'ผู้พิทักษ์',icon:'🏰',title:'Dark Fortress — Stage 8',
       text:'ป้อมปราการมืดตั้งตระหง่านขวางทาง Shield Knight สวมเกราะเหล็กบุกนำหน้า'},
      {speaker:'นายทหาร',icon:'🛡️',title:'Shield Warning!',
       text:'Shield Knight มีโล่ 2 ชั้น ต้องทำลายโล่ก่อนถึงจะโดน HP จริง Sniper และ Lightning ทะลุโล่ได้!'},
    ]
  },
  // Stage 8: Dark Throne
  { bg:'linear-gradient(160deg,#1a0020,#0d0015)',
    slides:[
      {speaker:'สายลับ',icon:'👿',title:'Dark Throne — Stage 9',
       text:'บัลลังก์แห่งความมืด — ศัตรูที่นี่แข็งแกร่งกว่าที่เคย\n\nแต่อันตรายที่สุดไม่ใช่โกเลมหรือบอส... มันคือหมอผีเล็กๆ ที่เดินอยู่หลังแถว'},
      {speaker:'นักมายากล',icon:'🧙',title:'⚠️ หมอผี — Dark Shaman!',
       text:'หมอผีปลุกเสก Heal ศัตรูในระยะ 2.5 ช่อง ทุก 2 วินาที\n\nถ้าปล่อยไว้ โกเลมหรือบอสข้างๆ จะฟื้น HP ไม่มีวันตาย — ต้องฆ่าหมอผีก่อนเสมอ!'},
      {speaker:'ผู้พิทักษ์',icon:'⚔️',title:'กลยุทธ์: จัดลำดับเป้าหมาย',
       text:'ลำดับความสำคัญ:\n1. 🧙 หมอผี — ฆ่าก่อนเลย\n2. 👹 บอส — อันตรายสูง\n3. 🪨 โกเลม — HP สูงแต่ช้า\n\nป้อมปืนใหญ่ Splash โดนหมอผีและเพื่อนข้างๆ พร้อมกัน!'},
    ]
  },
  // Stage 9: Dark Tower Summit — Final
  { bg:'linear-gradient(160deg,#050010,#1a0035,#000)',
    slides:[
      {speaker:'ผู้พิทักษ์',icon:'⚔️',title:'Dark Tower Summit — Stage 10',
       text:'ยอดหอคอยมืดที่เราต่อสู้มาตลอด... กองทัพมืดทั้งหมดรวมพลที่นี่ ทั้งค้างคาว โกเลม วิเวิร์น และชิลด์ไนท์\n\nนี่คือศึกใหญ่ที่จะตัดสินชะตาของจอมมาร — แต่เงาของมันอาจซ่อนอะไรไว้มากกว่านี้...'},
      {speaker:'นักมายากล',icon:'🔮',title:'จอมมาร — Dark Overlord',
       text:'⚠️ จอมมาร ศัตรูสูงสุด!\n\nโล่พลังงานมืด 250 HP ปกป้องร่างกาย\nHP มหาศาล — ต้องใช้ Sniper และ Thunder ทะลุโล่\nจัดการกองทัพรอบข้างให้หมดก่อน แล้วรุมยิงจอมมาร!'},
      {speaker:'ผู้พิทักษ์',icon:'🏆',title:'ศึกชิงชะตา!',
       text:'นี่คือช่วงเวลาที่เราฝึกฝนมาตลอด\n\nวางป้อมให้ครบ ใช้ Thunder + Sniper + Magic ร่วมกัน\nอย่าให้จอมมารผ่านแนวป้องกัน — ชัยชนะอยู่ตรงหน้า!'},
    ]
  },
  // Stage 10: Shadow Remnant — True Final
  { bg:'linear-gradient(160deg,#03000a,#1a0035,#000)',
    slides:[
      {speaker:'นักมายากล',icon:'🌑',title:'Shadow Remnant — Stage 11',
       text:'จอมมารพ่ายแพ้ไปแล้ว... แต่เงาของมันไม่ยอมสลายไปง่ายๆ\n\nเศษพลังมืดที่หลงเหลือดูดกลืนทุกสิ่งที่เคยพ่ายแพ้ — โกบลิน โครงกระดูก เงามืด วิญญาณไฟ บอส โกเลม ค้างคาว วิเวิร์น ชิลด์ไนท์ หมอผี และจอมมารเองในรูปเงา — รวมพลครั้งสุดท้าย'},
      {speaker:'ผู้พิทักษ์',icon:'⚠️',title:'ศึกแท้จริงครั้งสุดท้าย',
       text:'นี่คือศัตรูทุกชนิดที่เราเคยเจอมา รวมอยู่ในด่านเดียว\n\nสภาพอากาศจะโหดร้ายที่สุด — มืด ฟ้าผ่า พายุหิมะ และพายุทอร์นาโดอาจเกิดขึ้นพร้อมกัน วางป้อมให้ครอบคลุมทุกจุดของเส้นทาง!'},
      {speaker:'ผู้พิทักษ์',icon:'👑',title:'ยุติความมืดตลอดกาล',
       text:'ถ้าเอาชนะที่นี่ได้... เงาของจอมมารจะสลายไปตลอดกาล ไม่มีทางหวนคืน\n\nรวมพลังทุกป้อม ทุกอัพเกรด ทุก Awaken ที่สร้างมา — นี่คือบทสุดท้ายของสงครามแห่งความมืด!'},
    ]
  },
];

/* ══ LEADERBOARD ══ */
let lbTab=0;
function openLeaderboard(){
  showScreen('leaderboard',true);
  switchLbTab(0);
}
function switchLbTab(i){
  lbTab=i;
  for(let j=0;j<3;j++) document.getElementById('lbt'+j).classList.toggle('active',j===i);
  renderLb();
}
function renderLb(){
  const body=document.getElementById('lbBody');
  const runs=JSON.parse(localStorage.getItem('tq_runs')||'[]');
  const lastName=localStorage.getItem('tq_last_name')||'';
  if(lbTab===0){
    // My Stats
    const myRuns=lastName?runs.filter(r=>r.name===lastName):runs.slice(0,10);
    const egRuns=myRuns.filter(r=>r.mode==='endgame');
    const p=loadProgress();
    const totalStars=Object.values(p).reduce((a,b)=>a+b,0);
    const bestWave=egRuns.length?Math.max(...egRuns.map(r=>r.wave)):0;
    const bestScore=egRuns.length?Math.max(...egRuns.map(r=>r.score)):0;
    const bestKills=egRuns.length?Math.max(...egRuns.map(r=>r.kills||0)):0;
    const bestCombo=egRuns.length?Math.max(...egRuns.map(r=>r.maxCombo||1)):1;
    const totalEgKills=egRuns.reduce((a,r)=>a+(r.kills||0),0);
    const achCount=loadAchievements().size;
    let html=`<div class="my-stat-grid">
      <div class="my-stat-card eg"><div class="my-stat-val">${bestWave||'—'}</div><div class="my-stat-lbl">🌊 เวฟสูงสุด</div></div>
      <div class="my-stat-card eg"><div class="my-stat-val">${bestScore?bestScore.toLocaleString():'—'}</div><div class="my-stat-lbl">⭐ คะแนนสูงสุด</div></div>
      <div class="my-stat-card eg"><div class="my-stat-val">${bestKills||'—'}</div><div class="my-stat-lbl">💀 ฆ่าสูงสุด/รอบ</div></div>
      <div class="my-stat-card eg"><div class="my-stat-val">×${bestCombo}</div><div class="my-stat-lbl">⚡ คอมโบสูงสุด</div></div>
      <div class="my-stat-card"><div class="my-stat-val">${Object.keys(p).filter(k=>(p[k]||0)>=1).length}/${STAGES.filter(s=>!s.comingSoon).length}</div><div class="my-stat-lbl">🗺️ ด่านที่ผ่าน</div></div>
      <div class="my-stat-card"><div class="my-stat-val">${totalStars}★</div><div class="my-stat-lbl">⭐ ดาวรวม</div></div>
      <div class="my-stat-card"><div class="my-stat-val">${totalEgKills.toLocaleString()}</div><div class="my-stat-lbl">💀 ฆ่ารวม (เอนด์เกม)</div></div>
      <div class="my-stat-card"><div class="my-stat-val">${egRuns.length}</div><div class="my-stat-lbl">🔥 รอบเอนด์เกม</div></div>
      <div class="my-stat-card"><div class="my-stat-val">${achCount}/${ACHIEVEMENTS.length}</div><div class="my-stat-lbl">🏅 รางวัล</div></div>
    </div>`;
    if(myRuns.length){
      html+='<div class="run-hdr">⏱ ประวัติล่าสุด</div>';
      myRuns.slice(0,8).forEach(r=>{
        html+=`<div class="run-row">
          <div class="run-mode-icon">${r.mode==='endgame'?'🔥':'⚔️'}</div>
          <div class="run-info"><div class="run-name">${r.name}</div>
          <div class="run-meta">${r.mode==='endgame'?'เอนด์เกม · '+r.diff:'เนื้อเรื่อง · '+r.stage} · ${r.date}</div></div>
          <div class="run-val"><div class="run-score">${r.mode==='endgame'?r.score:''}</div><div class="run-wave">${r.mode==='endgame'?'เวฟ '+r.wave:r.stage}</div></div>
        </div>`;
      });
    } else {
      html+='<div class="lb-empty">ยังไม่มีข้อมูล<br><span style="font-size:11px;color:#333;">เล่นเกมแล้วบันทึกชื่อ</span></div>';
    }
    body.innerHTML=html;
  } else if(lbTab===1){
    // All runs leaderboard (mixed modes — score scales differ, see tab icons)
    const allRuns=[...runs].sort((a,b)=>b.score-a.score);
    if(!allRuns.length){ body.innerHTML='<div class="lb-empty">ยังไม่มีข้อมูล<br><span style="font-size:11px;color:#333;">เล่นเกมแล้วบันทึกชื่อก่อน</span></div>'; return; }
    let myRank=-1;
    const myName=lastName;
    let html='<div class="lb-note">🔥 อันดับคะแนนนี้ใช้ได้เฉพาะโหมดเอนด์เกม — ดูแยกในแท็บ "เอนด์เกม"</div>';
    allRuns.slice(0,20).forEach((r,i)=>{
      const isMe=r.name===myName;
      if(isMe&&myRank<0) myRank=i+1;
      const rankClass=i===0?'g':i===1?'s':i===2?'b':'n';
      html+=`<div class="lb-item${isMe?' me':''}">
        <div class="lb-rank ${rankClass}">${i+1}</div>
        <div class="lb-avatar">${r.mode==='endgame'?'🔥':'⚔️'}</div>
        <div class="lb-info"><div class="lb-name">${r.name}${isMe?' (ฉัน)':''}</div>
        <div class="lb-detail">${r.mode==='endgame'?'เอนด์เกม · '+r.diff:'เนื้อเรื่อง · '+r.stage} · ${r.date}</div></div>
        <div class="lb-score-wrap"><div class="lb-score-val">${r.score}</div>
        <div class="lb-score-sub">${r.mode==='endgame'?'เวฟ '+r.wave:r.stage}</div></div>
      </div>`;
    });
    body.innerHTML=html;
  } else if(lbTab===2){
    // Endgame only
    const egOnly=[...runs].filter(r=>r.mode==='endgame').sort((a,b)=>b.wave-a.wave||b.score-a.score);
    if(!egOnly.length){ body.innerHTML='<div class="lb-empty">ยังไม่มีข้อมูลเอนด์เกม<br><span style="font-size:11px;color:#333;">เล่นเอนด์เกมแล้วบันทึกชื่อ</span></div>'; return; }
    const myName=lastName;
    let html='';
    egOnly.slice(0,20).forEach((r,i)=>{
      const isMe=r.name===myName;
      const rankClass=i===0?'g':i===1?'s':i===2?'b':'n';
      html+=`<div class="lb-item${isMe?' me':''}">
        <div class="lb-rank ${rankClass}">${i+1}</div>
        <div class="lb-avatar">${['💀','👹','🔥','⚔️','🌋'][i%5]}</div>
        <div class="lb-info"><div class="lb-name">${r.name}${isMe?' (ฉัน)':''}</div>
        <div class="lb-detail">เอนด์เกม · ${r.diff} · ${r.date}</div></div>
        <div class="lb-score-wrap"><div class="lb-score-val">${r.score.toLocaleString()}</div>
        <div class="lb-score-sub">🌊 เวฟ ${r.wave} · 💀 ฆ่า ${r.kills||0}</div></div>
      </div>`;
    });
    body.innerHTML=html;
  }
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
document.getElementById('startBtn').addEventListener('click',openStageSelect);
document.getElementById('backBtn').addEventListener('click',goStageSelect);
document.getElementById('pauseBtn').addEventListener('click',()=>{if(!G||G.over||G.win)return;togglePause();});
document.getElementById('speedBtn').addEventListener('click',function(){
  if(!G||G.over||G.win)return;
  speed=speed===1?2:speed===2?3:1;
  this.textContent=speed+'×';
});
document.getElementById('settingsBtn').addEventListener('click',openSettings);
document.getElementById('settSpeedBtn').addEventListener('click',function(){
  speed=speed===1?2:speed===2?3:1;
  this.textContent=speed+'×';
  document.getElementById('speedBtn').textContent=speed+'×';
});
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
document.getElementById('settAutoBtn').addEventListener('click',function(){
  toggleAutoWave();
  this.classList.toggle('on',autoWave);
  this.textContent=autoWave?'🔁 อัตโนมัติ ON':'🔁 อัตโนมัติ';
});
for(let _i=0;_i<9;_i++){
  const _tb=document.getElementById('tb'+_i);
  if(_tb) _tb.addEventListener('pointerdown',(e)=>onTbtnPointerDown(e,_i));
}
document.getElementById('devIngameBtn').addEventListener('click',()=>{if(!G||G.over||G.win)return;openDev(false);});
document.getElementById('devCloseBtn').addEventListener('click',closeDev);
// 🔧 hidden Dev access: press-and-hold the 🏰 logo ~800ms (Dev tab removed from bottom nav v3.6.2)
(function(){
  const logo=document.getElementById('logoIsland'); if(!logo) return;
  let _t=null;
  const start=()=>{_t=setTimeout(()=>{_t=null;openDev(true);},800);};
  const cancel=()=>{if(_t){clearTimeout(_t);_t=null;}};
  logo.addEventListener('pointerdown',start);
  logo.addEventListener('pointerup',cancel);
  logo.addEventListener('pointerleave',cancel);
})();
document.getElementById('codexNavBtn').addEventListener('click',openCodex);
document.getElementById('codexBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('egMenuBtn').addEventListener('click',openEgMenu);
document.getElementById('egBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('lbNavBtn').addEventListener('click',openLeaderboard);
document.getElementById('lbBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('verBtn').addEventListener('click',openWhatsNew);
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
updateMenuStats();
