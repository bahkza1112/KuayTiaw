/* ══ WHAT'S NEW (patch notes) ══ */
const GAME_VERSION='1.13.1';
const PATCH_NOTES=[
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
function hideAll(){['mm','stagesel','gp','codex','devpanel','egmenu','leaderboard','whatsnew','towersel','storyscr','workshop'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});const cs=document.getElementById('cutscene');if(cs)cs.style.display='none';}
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
function updateMenuStats(){
  const gd=document.getElementById('mmGemsDisplay');
  if(gd) gd.textContent=loadGems().toLocaleString();
  _updateAchBadge(); // อัปเดต badge ทุกครั้งที่ menu render
  _updateNewsBadge(); // อัปเดต badge ข่าวสารทุกครั้งที่ menu render
}

/* ══ WORKSHOP ══ */
const VOID_RECIPE={gems:800,mats:{0:30,1:15,2:8}};
const MAT_ICONS=['🪨','🔘','🌟'];
const MAT_NAMES=['เศษหินมืด','แกนเวทอสูร','ผงดาวตก'];
function openWorkshop(){ showScreen('workshop',true); renderWorkshop(); }
function isFinalStageCleared(){
  return (loadProgress()[STAGES.length-1]||0)>=1;
}
function renderWorkshop(){
  const gems=loadGems(), mats=loadMaterials();
  const unlocked=isVoidUnlocked();
  const finalCleared=isFinalStageCleared();
  document.getElementById('wsStageLockNote').style.display=(!unlocked&&!finalCleared)?'flex':'none';
  document.getElementById('wsCraftSection').style.display='';
  document.getElementById('wsAlreadyUnlocked').style.display=unlocked?'block':'none';
  document.getElementById('wsRecipeBox').style.display=unlocked?'none':'';
  const craftBtn=document.getElementById('wsCraftBtn');
  craftBtn.style.display=(unlocked||!finalCleared)?'none':'';
  if(unlocked){ document.getElementById('wsHeroReqs').innerHTML=''; return; }
  const reqs=[
    {icon:'💎',name:'มณีวิญญาณ',have:gems,need:VOID_RECIPE.gems},
    {icon:MAT_ICONS[0],name:MAT_NAMES[0],have:mats[0]||0,need:VOID_RECIPE.mats[0]},
    {icon:MAT_ICONS[1],name:MAT_NAMES[1],have:mats[1]||0,need:VOID_RECIPE.mats[1]},
    {icon:MAT_ICONS[2],name:MAT_NAMES[2],have:mats[2]||0,need:VOID_RECIPE.mats[2]},
  ];
  let html='',reqHtml='',allMet=true;
  reqs.forEach(r=>{
    const met=r.have>=r.need;
    if(!met) allMet=false;
    const pct=Math.min(100,Math.round(r.have/r.need*100));
    html+=`<div class="ws-recipe-item${met?' met':''}">
      <div class="ws-recipe-ico">${r.icon}</div>
      <div class="ws-recipe-info">
        <div class="ws-recipe-name">${r.name}</div>
        <div class="ach-progress-bar"><div class="ach-progress-fill" style="width:${pct}%;${met?'background:linear-gradient(90deg,#69f0ae,#4caf50);':''}"></div></div>
        <div class="ws-recipe-count">${r.have.toLocaleString()} / ${r.need.toLocaleString()}</div>
      </div>
      ${met?'<div class="ws-recipe-check">✔</div>':''}
    </div>`;
    reqHtml+=`<div class="ws-hero-req-item${met?' met':''}">${r.icon} ${r.need.toLocaleString()}</div>`;
  });
  document.getElementById('wsRecipeGrid').innerHTML=html;
  document.getElementById('wsHeroReqs').innerHTML=reqHtml;
  craftBtn.disabled=!allMet;
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
  showToast('🌑 ปลดล็อก ป้อมมนตราโมฆะ สำเร็จ!');
  renderWorkshop(); updateMenuStats(); checkAchievements();
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
    html+=`<div class="stage-card${unlocked?'':' locked'}${stars>0?' completed':''}" onclick="${unlocked?'startStage('+si+')':'void(0)'}">
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
  initGame();
  initTutorial();
}

/* ══ TUTORIAL SYSTEM ══ */
let _tutStep=-1,_tutIv=null,_tutResizeBound=false;
/* BUG FIX: tutorial used fixed px offsets that broke on scaled/responsive canvases
   (overlay would spill off its target area on narrow/tall viewports).
   Now positions are computed live from the actual DOM elements' bounding boxes,
   relative to #gp, so it always lines up regardless of screen size. */
const _TUT_STEPS=[
  {title:'ขั้นตอน 1 / 3',
   msg:'เลือกป้อมจากแถบด้านล่าง\nแตะ 💣 Cannon เพื่อเริ่ม',
   target:'#tb0', boxAnchor:'above', arrowIcon:'⬇️'},
  {title:'ขั้นตอน 2 / 3',
   msg:'แตะบนแผนที่\nเพื่อวางป้อม!',
   target:'#cv', boxAnchor:'top-right', arrowIcon:'👆'},
  {title:'ขั้นตอน 3 / 3',
   msg:'กด ▶ Send Wave\nเพื่อเริ่มการต่อสู้!',
   target:'#waveBtn', boxAnchor:'above', arrowIcon:'⬇️'},
  {title:'🎉 เยี่ยมมาก!',
   msg:'ปกป้องปราสาท\nอย่าให้ศัตรูผ่าน!',
   target:null, boxAnchor:'center', arrowIcon:''},
];
function initTutorial(){
  if(localStorage.getItem('tq_tut_done')) return;
  _tutStep=0; _renderTut();
  if(_tutIv) clearInterval(_tutIv);
  _tutIv=setInterval(()=>{
    if(!G||_tutStep<0) return;
    if(_tutStep===0&&G.selTwr>=0){_tutStep=1;_renderTut();}
    else if(_tutStep===1&&G.towers.length>0){_tutStep=2;_renderTut();}
    else if(_tutStep===2&&G.wave>=1){_tutStep=3;_renderTut();setTimeout(skipTutorial,2200);}
  },250);
  if(!_tutResizeBound){
    _tutResizeBound=true;
    window.addEventListener('resize',()=>{ if(_tutStep>=0) _renderTut(); });
  }
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
  const s=_TUT_STEPS[Math.min(_tutStep,3)];
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
        <div class="ico">${u?`<img src="${getTowerIconURL(i,36)}" width="36" height="36" style="image-rendering:pixelated;">`:'🔒'}</div>
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
      let rows='';
      for(let lv=1;lv<=5;lv++){
        rows+=`<tr><td><span class="lv-badge">Lv${lv}</span></td>
          <td>${CFG.t_dmg[cdxSel]===0?'—':Math.round(getTowerDmg(cdxSel,lv))}</td>
          <td>${getTowerRange(cdxSel,lv).toFixed(1)}</td>
          <td>${CFG.t_rate[cdxSel]===0?'—':getTowerRate(cdxSel,lv).toFixed(1)+'ครั้ง/วิ'}</td>
          <td>${lv<5?CFG.t_cost[cdxSel]*lv+'g':'สูงสุด'}</td></tr>`;
      }
      html+=`<div class="cdx-detail">
        <div class="cdx-detail-head">
          <div class="cdx-detail-ico"><img src="${getTowerIconURL(cdxSel,48)}" width="48" height="48" style="image-rendering:pixelated;border-radius:8px;"></div>
          <div>
            <div class="cdx-detail-name">${TNAMES[cdxSel]}</div>
            <div class="cdx-detail-sub">ป้อมปราการ</div>
            <div style="margin-top:3px;font-size:10px;background:rgba(255,255,255,.08);border-radius:6px;padding:2px 8px;display:inline-block;color:#80cbc4;">💰 ราคา: ${CFG.t_cost[cdxSel]} ทอง</div>
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
        <table class="lv-table"><tr><th>ระดับ</th><th>ดาเมจ</th><th>ระยะ</th><th>อัตรายิง</th><th>อัพเกรด</th></tr>${rows}</table>
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
  return `<div class="dev-section"><div class="dev-section-title">💰 Resources</div>
  <div class="dev-cheat-grid">
    <div class="dev-cheat-btn green" onclick="cheat('gold500')">+500 ทอง</div>
    <div class="dev-cheat-btn green" onclick="cheat('gold9999')">+9999 ทอง</div>
    <div class="dev-cheat-btn green" onclick="cheat('hp_full')">❤️ HP เต็ม</div>
    <div class="dev-cheat-btn" onclick="cheat('hp10')">ตั้ง HP=10</div>
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
document.getElementById('battleNavBtn').addEventListener('click',openStageSelect);
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
document.getElementById('devNavBtn').addEventListener('click',()=>openDev(true));
document.getElementById('devCloseBtn').addEventListener('click',closeDev);
document.getElementById('codexNavBtn').addEventListener('click',openCodex);
document.getElementById('codexBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('egNavBtn').addEventListener('click',openEgMenu);
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
document.getElementById('workshopBtn').addEventListener('click',openWorkshop);
document.getElementById('workshopBackBtn').addEventListener('click',()=>showScreen('mm',true));
document.getElementById('wsCraftBtn').addEventListener('click',craftVoidTower);
// update hideAll to include new screens
const _origHideAll=hideAll;
window.hideAll=function(){
  ['mm','stagesel','gp','codex','devpanel','egmenu','leaderboard','whatsnew','towersel','workshop'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.style.display='none';
  });
};
updateMenuStats();
