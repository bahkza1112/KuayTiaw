# Changelog

All notable changes to Tower Quest 🏰 will be documented in this file.

## v3.13.4 — Bug Fix: VFX alpha, dmgNums cap, badge รางวัล

### Fixed
- `js/game.js` render fxFlash: alpha formula `f.life/.18` hardcoded → เปลี่ยนเป็น `f.life/(f.maxLife||.18)` ทำให้ flash 4★/Awaken (life 0.28–0.45) fade ถูกต้อง ไม่ติด clamp ที่ 1
- `js/game.js` `js/tower.js`: เพิ่ม `maxLife` ให้กับ fxFlash push ทุกจุดที่ใช้ life ≠ 0.18
- `js/game.js` dmgNums cap: `G.dmgNums.length=60` ตัด entry ใหม่ทิ้ง → เปลี่ยนเป็น `splice(0,...)` ตัด entry เก่าออกแทน ทำให้ "★★★★ MAX!" / "⚡ AWAKENED!" ไม่โดน drop ระหว่าง wave ใหญ่
- `js/cloud-save.js` `_checkLbRewards()`: badge แดงแสดงอยู่ระหว่าง popup เปิด ซ่อนหลังผู้เล่นกด "รับรางวัล ✓" (เดิมซ่อนทันทีหลัง POST สำเร็จ ผู้เล่นแทบไม่เห็น)
- `js/cloud-save.js`: badge ซ่อนเสมอเมื่อ claim สำเร็จ แม้ claimed array จะว่างเปล่า (เดิมค้างถาวร)
- `js/ui.js` `_showLbRewardPopup()`: รับ callback `onClose` สำหรับซ่อน badge หลัง popup ปิด

## v3.13.3 — 4★ และ Awaken Effect พิเศษ

### Changed
- `js/game.js` `tryMergeTowers()`: 4★ มี effect แยกจาก ★2/★3
  - hit-stop 0.22s (เดิม 0.12s), shake 0.2 (เดิม 0.08)
  - fxFlash ขาวขนาด CS×5 + inner orange flash
  - ring ออก 4 วง ใหญ่สุด CS×7 (ครอบคลุมทั้งจอ)
  - particles 24 ดวง (เดิม 16), ข้อความ "★★★★ MAX!" scale 2.8
- `js/tower.js` `doAwakenTower()`: effect ใหม่ทั้งหมด
  - hit-stop 0.20s, shake 0.18
  - fxFlash เหลือง CS×4.5 + white inner
  - ring 3 วง + วงจาง CS×5.5
  - particles 20 ดวง (⚡ + ✦ สลับกัน)
  - dmgNums "⚡ AWAKENED!" scale 2.5

## v3.13.2 — Merge Tower Animation

### Changed
- `js/game.js` `tryMergeTowers()`: เพิ่ม VFX ชัดเจนขึ้น
  - `G.hitStopT=0.12` — หยุด simulation 0.12s ให้ผู้เล่นเห็น effect
  - `G.fxFlash` วงแสงทองขนาด `CS×3.5` — flash ชัดมาก
  - เพิ่มวง ring จาก 2 → 3 วง ใหญ่ขึ้น
  - ดาว★ particle จาก 10 → 16 ดวง
  - `G.dmgNums` ข้อความ "★★★ UP!" font size ~29px ลอยขึ้น
  - สั่นจอเล็กน้อย `shakeT+0.08`

## v3.13.1 — Badge แจ้งเตือนรางวัล Season

### Added
- `Tower Quest 🏰.html`: `#lbRewardBadge` — dot แดงบนปุ่ม "อันดับ" ใน bottom nav
- `js/cloud-save.js`: `_checkLbRewards()` แสดง badge ทันทีที่พบ pending rewards, ซ่อนหลัง claim สำเร็จ

## v3.13.0 — Leaderboard แสดง rank ตัวเองนอก TOP 10

### Added
- `server.js`: `GET /api/leaderboard?uid=xxx` — หา rank ของ uid ในตาราง full sorted, ส่ง `myEntry:{rank,...}` กลับถ้าอยู่อันดับ 11+
- `js/ui.js`: หลัง render TOP 10 ถ้า `d.myEntry` มีค่า → แสดง `···` separator + แถวของตัวเองพร้อม border ทอง
- ใช้ `uid` แทน `name` ในการ match แถว "ตัวเอง" ใน TOP 10 (กันกรณีชื่อซ้ำ)

## v3.12.8 — Weather Pool Expansion

### Changed
- `js/game.js` STAGE_WEATHER: เพิ่ม weather pool ต่อ stage ให้มีตัวเลือกมากขึ้น
  - Stage 1-5: เพิ่ม 1 ประเภทต่อ stage
  - Stage 6-9: เพิ่ม 1-2 ประเภทต่อ stage
  - Stage 10: ครบ 6 ประเภท
  - Stage 11: ครบทั้ง 8 ประเภท

## v3.12.7 — Weather Rebalance

### Changed
- `js/game.js` WEATHERS: อัปเดตทุก effect ให้รุนแรงขึ้น
  - 🧊 blizzard: `iceImmune` → `slowImmune` (บล็อกสโลจากทุกป้อม)
  - ⚡ lightning: ป้อมถูกฟ้าผ่า 40%→50%
  - 🔥 heatwave: `iceRateMult=0.3` → `iceDisabled=true` (หยุดยิงสนิท)
  - 🌧️ rain: `splashMult=0.6` → `0.3` (ลด 70%)
  - 🌪️ tornado: `dodgeChance=0.25` → `0.5`
  - ☀️ sun: `goldMineMult=0.5` → `0` (หยุดผลิตสนิท)
- `js/game.js` slow apply (story+endgame): เปลี่ยน check `iceImmune&&type===1` → `slowImmune`
- `js/game.js` heatwave ice disable: เพิ่ม check `iceDisabled` ก่อนยิงทั้ง story+endgame

## v3.12.6 — Milestone เฉพาะโหมดยาก

### Changed
- `js/game.js`: milestone (💎 gems ทุก 10 wave, 🎫 tickets ทุก wave x5) ย้ายไปเป็นของโหมดยาก (`egDiff===2`) แทนที่จะเป็นของ ง่าย+ปกติ
- `js/game.js`: heal ❤️+1 ยังคงอยู่ใน `egDiff!==2` (ง่าย+ปกติ) แยกออกจาก milestone block
- `Tower Quest 🏰.html`: diff cards milestone row อัปเดต ❌→✅ ตรงโหมดยาก, ✅→❌ ตรงง่าย/ปกติ

## v3.12.5 — Endgame Diff UI — Perk Cards

### Added
- `Tower Quest 🏰.html`: diff cards บนหน้า Endgame menu แสดง perks ของแต่ละระดับความยาก (✅/❌)
- `css/main.css`: `.eg-diff-perks`, `.eg-perk-y` (สีเขียว), `.eg-perk-n` (สีเทา ขีดฆ่า)

### Fixed
- `Tower Quest 🏰.html`: ศัตรูยาก ×1.5 → ×1.8 ให้ตรงกับ `EG_DIFF_MULT[2]=1.8` จริงในโค้ด

## v3.12.4 — UI Hints + Balance Endgame/Casino

### Added
- `Tower Quest 🏰.html` / `css/main.css`: `[data-tip]::after` tooltip CSS — ลอยเหนือปุ่มเมื่อ hover
- Tooltip บนปุ่ม: waveBtn, autoBtn, speedBtn, #tb4 ซัพพอร์ต, #tb6 เหมืองทอง, #skillBtn, .mm-resource-bar (PG Gold), #weatherHud
- `js/game.js`: one-shot hint `tq_hint_place` — วางป้อมครั้งแรก แนะนำ tap upgrade/ขาย
- `js/game.js`: one-shot hint `tq_hint_merge` — ป้อมชนิดเดียวกัน 2+ แนะนำ merge ★
- `js/tower.js`: one-shot hint `tq_hint_awaken` — popup ป้อม 3★ ครั้งแรก แนะนำ Awaken

### Fixed
- `js/tower.js`: support tower popup คำนวณ resist จากตัวเองโดยตรง (ไม่ใช้ getSupportResist ที่สแกนรอบข้าง) → ป้อม 1★ ไม่แสดง resist ของ 2★ อีกต่อไป
- `css/main.css`: แก้ `[data-tip]{position:relative}` ที่ทับ `position:absolute` ของ .mm-resource-bar
- `Tower Quest 🏰.html`: แก้ข้อความกฎแบล็คแจ็ค ×2.5 → ×1.9 ให้ตรงกับ payout จริง

### Changed
- `js/ui.js`: avatar unlock toast ระบุชื่อ emoji ที่ปลดล็อก
- `js/game.js`: Endgame ยาก — ตัด heal/wave, wave bonus gold, round bonus gold, milestone ออกทั้งหมด
- `js/game.js`: Endgame ปกติ — ตัด wave bonus gold, round bonus gold ออก (heal + milestone ยังได้)
- `js/ui.js`: slot GREAT 2000→1000, NICE 1000→500

## v3.12.3 — Performance: ลดกระตุกตอนเร่งความเร็ว

### Changed
- `js/game.js`: render loop ที่ speed 2× ข้าม 1 frame (30fps render), speed 3× ข้าม 2 frame (20fps render) — ลด CPU render load 50-66%
- `js/game.js`: เปลี่ยน `splice(i,1)` → swap-and-pop (`arr[i]=arr[last];arr.pop()`) ในทุก array ที่ loop backward: `G.enemies`, `G.projs`, `G.particles`, `G.fxRings`, `G.fxTrails`, `G.fxFlash`, `G.dmgNums`
- `js/game.js`: จำกัด `G.projs` ≤ 250 และ `G.dmgNums` ≤ 60 ก่อนเข้า loop

## v3.12.2 — แก้บัค verBtn + เรียงอันดับรางวัล

### Fixed
- `js/ui.js`: ลบ dead code ใน dev panel IIFE ที่อ้าง `_clicks`/`_timer`/`_reset`/`_showPwdPrompt` ซึ่งไม่ได้นิยามไว้ → ไม่ throw ReferenceError อีก
- `js/ui.js`: `_showDevPwdPrompt` และ `_devPwdSubmit` เป็น global function แทน — verBtn listener เรียกได้ถูกต้อง
- `server.js`: `checkSeasonReset()` เรียง lb ก่อน slice เพื่อแจกรางวัลถูกอันดับ (เดิมไม่ sort ก่อน slice)

## v3.12.1 — Leaderboard รายสัปดาห์ + รางวัลอันดับ

### Added
- `server.js`: `SEASON_FILE`, `REWARDS_FILE`, `LB_PRIZE[]`, `checkSeasonReset()` — reset ทุก 7 วัน, snapshot rewards ก่อน reset
- `server.js`: `GET /api/leaderboard/claim` + `POST /api/leaderboard/claim` (auth required)
- `server.js`: `GET /api/leaderboard` ส่ง `season` + `resetAt` กลับมาด้วย
- `js/cloud-save.js`: `_checkLbRewards()` — เรียกหลัง login, claim + apply rewards อัตโนมัติ
- `js/ui.js`: `_showLbRewardPopup(claimed)` — popup แจ้งรางวัลที่ได้รับ
- `css/main.css`: `.lb-prize-box`, `.lb-prize-row`, `.lb-prize-note`, `.lb-rew-line`

### Changed
- หน้า TOP 10: แสดง countdown รีเซ็ต + คอลัมน์รางวัล + ตารางรางวัลด้านล่าง

## v3.12.0 — สล็อต: รองรับมณีวิญญาณ ◇50 ต่อสปิน

### Added
- `Tower Quest 🏰.html`: ปุ่ม toggle `slotCurGold` / `slotCurGems` เหนือ cost info
- `js/ui.js`: `SLOT_COST_GEMS=50`, `_slotCur` state, `setSlotCur(cur)` function
- `css/main.css`: `.slot-cur-btn`, `.slot-cur-btn.active` styles

### Changed
- `_renderCasinoUI()`: แสดงยอด/ราคาตามสกุลที่เลือก
- `spinSlot()`: หัก gems หรือ gold ตาม `_slotCur`

## v3.11.99 — ปรับ Blackjack payout + แก้ result text

### Fixed
- `js/ui.js`: `_bjSetResult` เปลี่ยน `textContent` → `innerHTML` — ◇ ไอคอนในข้อความผลแสดงถูกต้อง

### Changed
- `js/ui.js`: Blackjack win = `_bjBet*0.9` (รวม ×1.9 จากเดิม ×2.5) — สมดุลกว่า

## v3.11.98 — ล็อค Avatar — ปลดด้วยมณีหรือทอง

### Added
- `js/ui.js`: `AV_FREE_IDX=19` (🏰), `AV_UNLOCK_GEMS=300`, `AV_UNLOCK_GOLD=1000`
- `_avUnlocked()`, `_isAvUnlocked(i)` — อ่าน `tq_av_unlocked` (localStorage array of indices)
- `_showAvUnlockPopup(i)` — popup เลือกชำระ ◇300 หรือ 💰1000
- `_avPay(i, cur)` — หักค่า, บันทึกใน `tq_av_unlocked`, refresh grid
- `css/main.css`: `.profile-avatar-btn.locked`, `.av-unlock-popup/box/opts` styles

### Changed
- Grid rendering ใน `openProfile()` — locked avatars แสดง 🔒 overlay + onclick เปิด popup
- `openProfile()` — reset avatar เป็น 🏰 ถ้า current avatar เป็น emoji ที่ล็อค

## v3.11.97 — แก้ Avatar วาดเองโผล่เป็น text ในหน้าโปรไฟล์

### Fixed
- `js/ui.js`: `profileAvatarGrid` — ใช้ index แทน data URI ใน onclick/data-avi; render `<img>` สำหรับ data URI
- `selectAvatar()` — เปรียบเทียบด้วย index, แสดง avatar วาดเองใน preview ด้านบนด้วย backgroundImage

## v3.11.96 — แก้ไอคอนมณีวิญญาณโผล่เป็น HTML text

### Fixed
- `js/ui.js`: เปลี่ยน `textContent` → `innerHTML` ในจุดที่มี `<span class="gico">` — ตารางรางวัลสล็อต, win overlay, BJ balance, BJ เดิมพัน, ปุ่มแลกตั๋ว
- `js/save.js`: `achNotifDesc` แสดงไอคอน ◇ ในแจ้งเตือน Achievement ถูกต้อง
- ตารางรางวัลสล็อต: สร้าง reward string โดยตรงแทนการตัด label string ด้วย regex

## v3.11.95 — อันดับ Leaderboard ไม่ซ้ำต่อผู้เล่น

### Added
- `js/save.js`: `getPlayerId()` — คืน Google UID (ถ้า login) หรือ `tq_device_id` (random สร้างครั้งแรก)
- ส่ง `uid` ไปพร้อมทุก POST `/api/leaderboard` และ `/api/story-leaderboard`

### Changed
- `server.js`: `/api/leaderboard` POST — dedup by `uid` (เมื่อมี) หรือ `name` (fallback); อัพเดตเฉพาะเมื่อ score สูงกว่าเดิม
- `server.js`: `/api/story-leaderboard` POST — dedup by `uid` หรือ `name` เช่นกัน

## v3.11.94 — มินิเกมใหม่: แบล็คแจ็ค

### Added
- `Tower Quest 🏰.html`: แท็บ casino-tabs (สล็อต / แบล็คแจ็ค), `#casinoBJPanel` พร้อม UI ครบ
- `css/main.css`: `.casino-tab`, `.bj-*` card styles + animations (bjDealIn, bjFlipX, bjBust, bjWinGlow)
- `js/ui.js`: `openCasinoTab()`, `bjDeal()`, `bjHit()`, `bjStand()`, `bjDouble()`, `bjSwitchCur()`, `_bjRunDealer()`, `_bjFlipHidden()` ฯลฯ

### Changed
- `Tower Quest 🏰.html`: ข้อความปุ่ม slot "50" → "100" (sync กับ SLOT_COST)

## v3.11.93 — ปรับรางวัลสล็อต GREAT/NICE เพิ่มขึ้น

### Changed
- `js/ui.js` GREAT: `gold:1000` → `gold:2000`; NICE: `gold:500` → `gold:1000`

## v3.11.92 — ลบเพชรออกจากรางวัล GREAT/NICE สล็อต

### Changed
- `js/ui.js` outcomes GREAT/NICE: `gems:500/250` → `gems:0`; label ลบ `+💎500`/`+💎250` ออก

## v3.11.91 — ปรับราคาสล็อต: 50→100 ทอง/สปิน

### Changed
- `js/ui.js` `SLOT_COST`: 50 → 100 ทองถาวร
- `Tower Quest 🏰.html` line 770: อัปเดตข้อความแสดงราคา "50 ทองถาวร / สปิน" → "100 ทองถาวร / สปิน"

## v3.11.90 — คาสิโน: ประวัติผลสล็อตล่าสุด

### Added
- `Tower Quest 🏰.html` `#slotHistoryBox` / `#slotHistory`: กล่องแสดงผล 8 ครั้งล่าสุด ใต้ตารางอัตรา
- `css/main.css` `.sh-item` / `.sh-jp` / `.sh-sp` / `.sh-gr` / `.sh-ni`: card แต่ละผล มี border highlight ตามระดับ
- `js/ui.js` `_renderSlotHistory()`: อ่านจาก `tq_slot_hist` แล้ว render; เรียกตอน `openCasino()` และหลังสปินแต่ละครั้ง
- `js/ui.js` `spinSlot()`: บันทึก `{syms, label, w}` ลง `tq_slot_hist` (เก็บสูงสุด 8 รายการ)

## v3.11.89 — ตัวเลขทองในคาสิโนเห็นชัดขึ้น

### Changed
- `Tower Quest 🏰.html` `#slotGoldDisplay`: font ใหญ่ขึ้น (15px), ตัวหนา, สีเหลืองทอง `#ffd54f` พร้อม glow

## v3.11.88 — แก้บัค: หมวดคาสิโนหายจากหน้ารางวัล

### Fixed
- `js/ui.js` `renderAchievTab()`: เพิ่ม `'casino'` เข้า `cats[]` — หมวด 🎰 คาสิโน (8 รางวัล) หายไปเพราะลืมใส่ไว้ในรายการ

## v3.11.87 — Leaderboard แสดงรูปวาดของผู้เล่นทุกคน

### Added
- `js/save.js` `_compressAvatar(src, cb)`: resize data URL รูปวาดลง 32×32px (PNG quality 0.7) ก่อน submit — ได้ ~1-2KB แทน data URL ขนาดเต็ม

### Changed
- `js/save.js` `skipSave()` / `confirmSave()` / `_submitStoryLb()`: ใช้ `_compressAvatar()` แทน fallback `'👤'` — ส่งรูปจริงขึ้น leaderboard
- `js/ui.js` endgame + story leaderboard render: แสดง `<img>` สำหรับ data URL ของทุกผู้เล่น ไม่ใช่แค่ตัวเอง
- `server.js`: เพิ่ม avatar slice limit จาก 10 → 3000 chars รองรับ base64 32×32

## v3.11.86 — แก้ช่องโหว่: ขายป้อมตอนเริ่มเกมใหม่

### Fixed
- `js/game.js` `initGame()` / `_doStartEndgame()`: เรียก `hideTowerPopup()` ทุกครั้งที่เริ่มเกมใหม่ — ป้องกันผู้เล่นค้าง popup ไว้แล้วกดขายตอนเริ่มเพื่อได้ทองพิเศษ
- `js/tower.js` `sellTowerFromPopup()`: เพิ่มเงื่อนไข guard `G.over||G.win` ป้องกันขายในสถานะเกมจบ

## v3.11.85 — Popup สภาพอากาศแสดงทุกสภาพที่เป็นไปได้ในด่าน

### Changed
- `js/game.js` `toggleWeatherPopup()`: แสดงรายการสภาพอากาศทั้งหมดที่อาจเกิดในด่านนั้น (จาก `STAGE_WEATHER`) พร้อม highlight + badge "กำลังเกิด" ให้อันที่ active; Endgame แสดงสภาพอากาศทุกชนิด
- `css/main.css`: เพิ่ม style `.wp-row`, `.wp-row-active`, `.wp-row-icon`, `.wp-row-name`, `.wp-row-desc`, `.wp-active-badge`, `#wpHeader`, `#wpSubtitle`, `#wpList`
- `Tower Quest 🏰.html` `#weatherPopup`: เหลือแค่ container เปล่า (innerHTML render จาก JS)

## v3.11.84 — กดดูรายละเอียดสภาพอากาศ

### Added
- `Tower Quest 🏰.html` `#weatherHud`: เพิ่ม `onclick="toggleWeatherPopup()"` และ `cursor:pointer`
- `Tower Quest 🏰.html` `#weatherPopup`: popup ใหม่แสดงไอคอน ชื่อ และคำอธิบายผลกระทบของสภาพอากาศ
- `css/main.css` `#weatherPopup`: style พร้อม animation เข้าและปุ่ม ✕ ปิด
- `js/game.js` `toggleWeatherPopup()` / `closeWeatherPopup()` / `_wpOutsideClick()`: เปิด/ปิด popup พร้อม click-outside-to-close

## v3.11.83 — แก้บัค: แสงสีแดงจาก Combo Meter

### Fixed
- `js/game.js` Combo meter timer bar + Wave Banner: เพิ่ม `ctx.beginPath()` ก่อนทุก `roundRect`/`rect` call — ขาด `beginPath()` ทำให้ path สะสมข้ามเฟรม และ `ctx.fill()` fill ทับพื้นที่ใหญ่เป็นสีแดง (เห็นเป็น ellipse สีแดงบนแผนที่)

## v3.11.82 — Leaderboard แสดง Avatar ผู้เล่น

### Changed
- `js/save.js` `skipSave()` / `confirmSave()`: เพิ่ม field `avatar` (emoji only, ไม่ส่ง data URL) ใน POST `/api/leaderboard`
- `js/save.js` `_submitStoryLb()`: เพิ่ม field `avatar` ใน POST `/api/story-leaderboard`
- `server.js` `/api/leaderboard` POST: รับและเก็บ `avatar` field (slice 10 chars, default `🎮`)
- `server.js` `/api/story-leaderboard` POST: รับและเก็บ `avatar` field
- `js/ui.js` `_renderCombined()`: แสดง `r.avatar` ของผู้เล่นแต่ละคนแทน hardcode `🎮`; ผู้เล่นตัวเองใช้ avatar จาก localStorage (รองรับ data URL)
- `js/ui.js` story leaderboard render: เพิ่มคอลัมน์ avatar; แสดง `r.avatar` เช่นเดียวกับ endgame leaderboard

## v3.11.79 — Menu Tour: แนะนำเมนูเกม 13 ขั้น

### Added
- `js/ui.js` `MENU_TOUR_STEPS` (13 steps) + `startMenuTour/endMenuTour/_tourNext/_renderTour`: ทัวร์แนะนำทุกหน้าเมนู พร้อมไฮไลต์ปุ่มและคำอธิบาย (`position:fixed` overlay ทำงานได้ทุกหน้าจอ)
- `Tower Quest 🏰.html` `#tourOverlay` + `#tourStartBtn` "❓ แนะนำเมนูเกม" ในโปรไฟล์
- `showScreen()` auto-trigger ทัวร์เมื่อ `tq_tut_done=1` และยังไม่เคยทำ (`tq_menutour_done`)

### New localStorage key
- `tq_menutour_done`: ป้องกัน auto-trigger ซ้ำ

## v3.11.78 — Casino achievement category (8 new achievements)

### Added
- **Casino achievement category** (`js/save.js` `ACHIEVEMENTS`, `ACH_CATS`; `js/ui.js` `spinSlot`):
  - `sl_first` 🎰 มือใหม่นักพนัน — first spin ever (+20💎)
  - `sl_pair`  💰 คู่แรกในชีวิต  — first pair result (+30💎)
  - `sl_great` 🔮 โชคดีเข้าช่วย  — first GREAT (+50💎)
  - `sl_super` ⭐ ดาวตกสามดวง   — first SUPER (+150💎)
  - `sl_jp`    💎 ราชันแจ็กพอต   — first JACKPOT (+999💎)
  - `sl_100`   🎲 นักพนันตัวจริง — 100 total spins (+10💎)
  - `sl_dry50` 😤 ขาดทุนแต่ไม่แคร์ — 50 consecutive non-GREAT spins (+2💎)
  - `sl_dry100` ⛏️ ราชานักขุดเกลือ — 100 consecutive non-GREAT spins (+1💎)
- Spin stats tracked in `tq_slot_stats` (`{total, dryStreak}`); triggers fire inside `spinSlot()` after reel 2 stops.
## v3.11.76 — Endgame Wave achievement milestones (Wave 25 / 50 / 100)

### Added
- **3 new Endgame achievements** (`js/save.js` `ACHIEVEMENTS`, `checkAchievements`):
  - `egw25` 🌊 ผู้พิทักษ์นิรันดร์ — survive to Wave 25 (💎 +80)
  - `egw50` 🔱 ราชันแห่งความวุ่นวาย — survive to Wave 50 (💎 +200)
  - `egw100` 💀 ตำนานไม่มีวันสิ้น — survive to Wave 100 (💎 +500)
- `checkAchievements()` now tracks `bestWave` from endgame runs and triggers milestones on save.

## v3.11.75 — Fix stats disappearing on rename

### Fixed
- **Stats lost on rename** (`js/ui.js` `renderLb`, `saveProfile`): "My Stats" tab now shows
  all local runs unconditionally (local runs always belong to the local player).
  `saveProfile()` also migrates existing run entries from old name to new name on save.

## v3.11.74 — Endgame infinite scaling (no HP/Shield cap)

### Changed
- **Removed Endgame HP cap** (`js/game.js` `getEgEnemyHP`): previously `roundBonus` was
  capped at `7.0×` (normal) / `4.6×` (boss) causing difficulty to plateau at round ~20.
  Now uses uncapped linear scaling `1 + egRound * roundScale` (Normal: 0.22/round, Boss: 0.15/round).
  Endgame now gets harder indefinitely — no wall for maxed players.
- **Removed Endgame reward cap** (`getEgRewardBonus`): was capped at `2.0×`, now
  `1 + egRound * 0.10` with no cap. Gold earned scales with enemy HP so late-game
  killing feels more rewarding.
- **Removed Endgame shield cap** (`spawnEgEnemy`): shield now scales as
  `shBase * (1 + egRound * 0.25)` with no cap, matching HP curve.
- **Speed scaling reduced slightly** (`getEgEnemySpd`): `0.05 → 0.04` per round
  to avoid enemies becoming untrackable too quickly.

## v3.11.73 — Difficulty-scaled score + special waves + stage-11 opening

### Changed
- **Endgame score scales with difficulty** (`js/game.js` `EG_SCORE_MULT=[1.0,1.5,2.5]`,
  applied in `js/enemy.js` kill handler): final score is now `reward*10*combo*diffMult`
  in endgame, so Hard runs (×2.5) outscore Easy (×1.0) instead of Easy ranking higher just
  by surviving longer at 0.7× HP. Story mode unaffected (`isEndgame` gate).
- **Special endgame waves** (`js/game.js` `startEgWave`): every 10 waves (from wave 6) a
  themed wave fires — 👹 boss rush (boss chance ≥0.30), 💰 gold wave (kills pay ×2 via
  `G.goldWaveMult`, reset on wave clear), 🐝 swarm (count ×1.6) — each with its own banner.
- **Stage 11 opening softened** (`js/game.js` `STAGES[10].enemyTypes`): reordered
  `[7,8,10,…]` → `[0,2,1,5,8,10,6,7,3,4,9]` so the early waves lead with ground basics
  (goblin/shadow) instead of an air rush (Wyvern). Same enemy set, gentler ramp-in; later
  waves still see the full pool.

## v3.11.72 — Endgame randomizes its map each run

### Changed
- **Random endgame map** (`js/game.js`): `EG_PATH` is now a `let` reassigned on every
  `_doStartEndgame()` (start *and* restart, since restart routes through it) — it picks a
  random `STAGES` entry and uses that stage's `path` + visual theme (`bgColor`/`pathColor`/
  `grassColors`), so each endgame run plays on a different map instead of the fixed
  stage-2 path. `_egLastMap` prevents picking the same map twice in a row.

## v3.11.71 — TOP 10 leaderboard shows difficulty

### Added
- **Difficulty column in TOP 10 server table** (`js/ui.js` `renderLb` → `_renderCombined`):
  each entry now shows its endgame difficulty with a colour emoji + label
  (🟢 ง่าย / 🟡 ปกติ / 🔴 ยาก) in a new column placed before the score column. Uses the
  `diff` field already stored on each leaderboard entry (server + local fallback); old
  entries without `diff` show ⚪ —. Grid widened to `40px 38px 1fr 52px 80px 56px`.

## v3.11.70 — แก้บัค Endgame restart ไม่รีเซ็ตสถิติ/เวฟ

### Fixed
- `js/game.js` `restartGame()`: branch บน `isEndgame` → เรียก `_doStartEndgame()`
  แทน `initGame()` (story mode) เมื่ออยู่ใน Endgame ทำให้การกด "เล่นใหม่"
  จาก end overlay และ "เริ่มใหม่" จากหน้าหยุดเกม (`pausedRestart()`) ทำงานถูกโหมด
- `js/game.js` `_doStartEndgame()`: set `G=null` ก่อน `initEgGame()` →
  `initEgGame()`'s carry-over (`prevKills`/`prevScore`/`prevMaxCombo`) อ่านได้ 0
  ทำให้ wave/score/kills/combo รีเซ็ตเป็น 0 สำหรับ run ใหม่

## v3.11.69 — โปรไฟล์แสดง in-game avatar+ชื่อแทน Google pic

### Changed
- `js/ui.js` `openProfile()`: แสดง avatar ในเกม + ชื่อผู้เล่นเสมอ
  (ไม่แสดงรูป/อีเมล Google); ชื่อ fallback เป็นชื่อ Google เฉพาะตอนยังไม่ตั้งชื่อ

## v3.11.68 — แก้ OAuth redirect รักษา hash #tqauth=

### Fixed
- `server.js` OAuth callback: redirect ตรงไป `/Tower%20Quest%20%F0%9F%8F%B0.html#tqauth=...`
  ข้าม `index.html` ที่ใช้ `location.replace()` แล้วทำให้ hash fragment หาย

## v3.11.67 — แก้ decode base64url (เพิ่ม padding)

### Fixed
- `js/cloud-save.js`: เติม `=` padding ให้ base64url ก่อน `atob()` —
  เดิม `atob()` throw แล้วถูก `try/catch` กลืน ทำให้ `tq_cloud_user` ไม่ถูกบันทึก

## v3.11.66 — แก้สถานะ login บนหน้าโปรไฟล์

### Fixed
- `js/cloud-save.js`: set `window.cloudUser` หลังโหลดจาก localStorage และ
  เคลียร์เป็น `null` ตอน logout — `openProfile()` เช็ค `window.cloudUser`
  ซึ่งเดิมเป็น `undefined` เสมอ (เพราะ `let` ไม่ผูกกับ `window`)

## v3.11.65 — Cross-device sync สมบูรณ์ (HMAC token auth)

### Added
- `server.js` `makeToken(uid)` / `verifyToken()` / `authMiddleware`: stateless HMAC-SHA256 token auth แทน session
- `js/cloud-save.js` `authHeaders()`: ส่ง `X-Auth-Token: uid:hmac` header กับ `/api/save` requests

### Changed
- `server.js` OAuth callback: encode `_token = makeToken(uid)` ใน hash redirect พร้อมกับ user data
- `server.js` `/api/me`: เปลี่ยนเป็น health-check (ไม่ต้องการ auth)
- `server.js` `/api/save` GET+POST: ใช้ `authMiddleware` แทน `req.session.user`
- `server.js` `/auth/logout`: ลบ `req.session.destroy()` (ไม่มี session แล้ว)
- `js/cloud-save.js` hash parse: แยก `_token` ออก เก็บใน `tq_cloud_token` localStorage
- `js/cloud-save.js` `cloudSave()`: ส่ง auth header
- `js/cloud-save.js` `cloudInit()`: ส่ง auth header ตอนโหลด save; check `sr.ok` ก่อน parse
- `js/cloud-save.js` `cloudLogout()`: ลบ `tq_cloud_token` ด้วย

### New localStorage key
- `tq_cloud_token`: `uid:hmac` string สำหรับ API auth

## v3.11.56 — แก้ไข: กด "ข้าม" ก็ส่งคะแนนขึ้น TOP 10 เซิฟ

### Fixed
- `js/save.js` `skipSave()`: ส่งคะแนนไป `/api/leaderboard` ด้วย แม้ผู้เล่นกดข้ามหน้าบันทึก
  (ก่อนหน้านี้ `skipSave()` ไม่ POST ไปเซิฟเลย ทำให้คะแนนไม่ขึ้น TOP 10)

### Note
- Railway ใช้ ephemeral filesystem — ข้อมูล leaderboard หายทุกครั้งที่ redeploy
  แก้ถาวรต้องตั้ง **Railway Volume** ที่ `/app/data` ใน Railway dashboard

## v3.11.48 — Auto Spin + แก้บัคโปรไฟล์ + ปุ่มกลับคาสิโน

### Added
- `js/ui.js` `toggleAutoSpin()`: หมุนสล็อตต่อเนื่องอัตโนมัติ, หยุดเองเมื่อทองไม่พอ
- `css/main.css` `.slot-auto-btn`, `.slot-auto-active`: สไตล์ปุ่ม Auto

### Fixed
- `js/ui.js` `openProfile()`: avatar dataURL แสดงเป็น backgroundImage แทน textContent
- `Tower Quest 🏰.html`: casino back button เปลี่ยนจาก `eg-back` → `bback` ให้มองเห็นชัด

## v3.11.47 — TOP 10 เซิฟ: ตารางเดียว รวม avatar+คะแนน+เวฟ

### Changed
- `js/ui.js` `renderLb()` lbTab===1: แทนที่ 2 ตารางแยก (คะแนน/เวฟ) ด้วยตารางเดียว
  - คอลัมน์: # / avatar / ชื่อ / ⭐ คะแนน / 🌊 เวฟ
  - เรียงตามคะแนนสูงสุด; เวฟแสดงสีเขียวในแถวเดียวกัน
  - avatar ของตัวเองแสดง emoji/dataURL ที่บันทึกไว้; คนอื่นแสดง 🎮


## v3.11.23 — Talent branches consolidated to leveled (100-level) talents

### Changed
- `js/ui.js` `TALENT_TREE`: branches atk/def/skl now each have a single `leveled` node instead of 2–4 fixed-cost nodes
  - `atk` → `tdmg` leveled: +0.5%/lv, max +50% tower damage
  - `def` → `hpmax` leveled: +0.5/lv, max +50 castle HP
  - `skl` → `skcool` leveled: −0.5%/lv, max −50% skill cooldown
- `js/save.js` `LEVELED_TALENTS`: added `tdmg`, `hpmax`, `skcool` entries with `migrate()` functions for backward compat
- `js/save.js` `applyTalents()`: uses `loadTalentLv('tdmg'/'hpmax')` instead of `hasPUpgrade(8–11)`
- `js/game.js` skill cooldown: uses `loadTalentLv('skcool')*0.005` instead of `hasPUpgrade(12/13)`
- `css/main.css` `.talent-lock`: improved visibility (orange, bold, 85% opacity)

## v3.11.15 — Gold mine base cost reduced

### Changed
- `js/game.js` `t_cost[6]`: 75 → 50 gold

## v3.11.14 — Remove boss HP bar

### Changed
- `js/game.js`: removed boss health bar rendering block (was drawn at bottom of canvas) — reduces screen clutter

## v3.11.13 — Awaken-discount moved to Economy, now a 100-level talent

### Changed
- **Awaken discount → leveled, in Economy** (`js/save.js`, `js/ui.js`): the binary
  `Awaken ลดราคา 50` node (id2) in the Attack branch is replaced by a leveled `awaken`
  talent in the **Economy** branch: `−2.5` gold per level, dropping awaken cost from
  `350` to a floor of `100` at Lv100 (`AWAKEN_BASE_COST`/`AWAKEN_MIN_COST`). Migration
  seeds Lv20 (the old `−50`) for players who owned id2. Stored in `tq_awakenlv`.
- **Awaken cost source** (`js/tower.js`): both awaken-cost reads (`hasPUpgrade(2)?300:350`)
  now call `awakenCost()` = `max(100, 350 - round(Lv*2.5))`.
- The Attack branch now starts at the damage nodes (id8/9/10); the Economy branch holds
  three leveled talents (starting gold / gold-from-kills / awaken discount).

## v3.11.12 — Gold-from-kills merged into one 100-level talent

### Changed
- **Generic leveled-talent system** (`js/save.js`): refactored the bespoke starting-gold
  functions into a `LEVELED_TALENTS` registry + generic `loadTalentLv` / `buyTalentLv` /
  `talentLvCost`, so any talent can be a 1–100 leveled node. Kept `loadSGoldLv` /
  `buySGoldLevel` / `sgoldLevelCost` as thin wrappers.
- **Gold-from-kills → one leveled node** (`js/save.js`, `js/ui.js`): the two binary
  `ทองจากศัตรู +5%` nodes (id4/id5) are replaced by a single leveled talent `gkill`:
  `+0.2%` per level (max **+20%** at Lv100), same `10 + lv*2` cost curve (~10,900 total).
  Migration preserves value — old `+5%` → Lv25, `+10%` → Lv50. Stored in `tq_gkilllv`.
  `applyTalents` now computes `gm = 1 + gkLv*0.002 + (sgold Lv100 ? 0.10 : 0)`
  (kill-gold cap +30% with both maxed).
- **Talent render generalized** (`js/ui.js` `_renderTalentTree`): the leveled-node path is
  no longer hardcoded to starting-gold — it reads level/cost/effect text from
  `LEVELED_TALENTS[nd.leveled]`, so both eco nodes share the Lv.X/100 + ×1/×10 UI.

## v3.11.11 — Starting-gold talent extended to 100 levels (max +300)

### Changed
- **Starting-gold scale → 1–100** (`js/save.js`): `SGOLD_PER_LV` 25→3, `SGOLD_MAX_LV`
  10→100 (max bonus +250 → **+300**). The Lv-max `+10% gold-from-kills` perk now lands at
  **Lv100** (still capping total kill-gold at +20% with the two eco nodes). Cost curve
  retuned for 100 levels: `10 + lv*2` (L1=10 … L100=208, total ≈10,900 permanent gold) —
  the old `80+lv*40` would have totalled ~206k.
- **New storage key** `tq_sgoldlv` (was `tq_sgold_lv`); `loadSGoldLv` migrates by
  preserving prior starting-gold *value* — old 0–10 level (×25) or legacy binary nodes
  (id0 +100 / id3 +150) are converted to the nearest new level (`round(oldGold/3)`), so no
  permanent-gold investment is lost across the rescale.
- **Bulk buy** (`js/save.js` `buySGoldLevel(n)`, `js/ui.js`): the upgrade now accepts a
  count and the talent card offers a ×10 button alongside ×1, since clicking 100 single
  levels would be tedious.

## v3.11.10 — Starting-gold Lv10 bonus (+10% gold from kills)

### Changed
- **Starting-gold Lv10 perk** (`js/save.js` `applyTalents`): maxing the leveled
  starting-gold talent now also grants `+10%` gold-from-kills. Combined with the two
  `ทองจากศัตรู +5%` nodes this caps gold-from-kills at `+20%`
  (`gm = 1 + h(4)*.05 + h(5)*.05 + (sgLv>=10 ? .10 : 0)`).
- **Talent desc** (`js/ui.js`): the starting-gold node now advertises the Lv10 bonus,
  and its live line shows `🎁 +10% ทองจากฆ่า` once maxed.

## v3.11.9 — Leveled "starting gold" talent (1–10)

### Changed
- **Starting-gold talent → leveled** (`js/save.js`, `js/ui.js`): the economy branch's two
  binary starting-gold nodes (`+100` / `+150`) are replaced by a single 10-level talent:
  `+25` gold per level (max `+250`, same ceiling as before). Cost ramps `80 + lv*40` per
  level (L1=80 … L10=440, total 2,600 permanent gold). New storage key `tq_sgold_lv`;
  `applyTalents` now reads `loadSGoldLv()*25` instead of `hasPUpgrade(0/3)`. Added
  `loadSGoldLv` / `buySGoldLevel` / `sgoldLevelCost` and `SGOLD_PER_LV` / `SGOLD_MAX_LV`.
- **Migration**: existing saves auto-convert on first read — owning the old `+100` node
  seeds Lv4, owning both (`+250`) seeds Lv10, so prior permanent-gold investment carries
  over without loss.
- **Talent tree render** (`js/ui.js` `_renderTalentTree`): handles a `leveled` node type —
  shows `Lv.X/10`, the current `+gold` value, and a per-level upgrade button; downstream
  eco nodes (gold-from-kills) unlock once the leveled node is at Lv1+.

## v3.11.8 — Rarity-weighted skill gacha odds

### Changed
- **Skill gacha pull rates** (`js/save.js`): every card was a flat `SKILL_CARD_RATE=1%`
  (5 cards = 5% total, 95% dud) regardless of rarity — an Uncommon had the same odds as
  a Legendary, and the latent per-skill weight (`gw` field) was never wired in. Replaced
  with `SKILL_RARITY_RATE` (uncommon 6 / rare 4 / epic 3 / legendary 1 %) and a weighted
  cumulative `_skillRoll`. Total card chance 5% → 17% (dud 95% → 83%); rarer cards stay
  rarer. Added `skillCardRate(d)` / `skillTotalRate()` helpers.
- **Odds display** (`js/ui.js`): the skill-gacha odds list now shows each card's
  rarity-specific rate and the recomputed dud %, instead of a flat 1% / 95%.

## v3.11.7 — Stages 8-11 early-wave ease (farm window)

### Changed
- **Early-wave HP ramp for late stages** (`js/enemy.js`): stages 8-11 (`si>=7`) carry a
  high stage HP multiplier (`1+si*0.22` ≈ ×2.5–3.2) that applied at full strength from
  wave 1, leaving no room to farm gold or build/merge before heavy enemies hit (an
  automated lower-bound playthrough lost at stage 8 despite reaching the final wave, and
  at stage 11 wave 3 against an opening air rush). Added `_earlyEase(si,wave)`: for
  `si>=7` and `wave<7`, enemy HP is scaled by `0.45 + 0.55*((wave-1)/6)` — wave 1 ≈ 45%,
  ramping linearly to 100% at wave 7. Later waves are unchanged, so the late-stage
  challenge wall is preserved; only the opening is softened to give a farm/build window.
  Story mode only (`getEgEnemyHP` for Endgame is untouched).

## v3.11.6 — Endgame round system fix (egRound never advanced)

### Fixed
- **`egRound` never incremented** (`js/game.js`): the Endgame "round" variable was
  initialised to `0` and never advanced anywhere in the codebase, leaving the entire
  round-progression system dead. Consequences (all confirmed live):
  - Enemy pool frozen at `[0,1,2,3,4]` — Golem/Bat/Wyvern/Shield Knight/Shaman/Demon
    Lord never appeared in Endless.
  - `getEgRewardBonus()` stuck at ×1 → reward never scaled while wave-based HP rose,
    collapsing the gold economy in late waves.
  - HP round-bonus, per-round bonus gold (`startGold+egRound*35`), and the
    `🔥 Round N` HUD/leaderboard label were all stuck at round 1.
  - Fix: `startEgWave()` now derives `egRound = Math.floor((G.wave-1)/EG_WAVES_PER_ROUND)`
    (new const, 5 waves/round), refreshes `currentStage.enemyTypes` from
    `_getEgEnemyPool()`, and updates the round badge each wave. Enemies unlock at
    waves 6/11/16/21/26/31; round ~20 reached around wave 100 (matching the cap-tuning
    comment in `getEgEnemyHP`).

### Changed
- **Endgame enemy count formula** (`js/game.js` `startEgWave`): was
  `enemyPerWaveBase + wave*enemyPerWaveInc*(1+egRound*0.2)`. The `(1+egRound*0.2)`
  factor was always `1` while `egRound` was stuck at 0; with the fix above it would
  turn the count quadratic (~960 enemies at wave 100, a guaranteed stall). Dropped the
  `egRound` factor so count stays linear in wave (6 → 204 across waves 1–100), matching
  the curve players effectively had before.

## v3.11.5 — Merge-hint rarity frame

### Changed
- `js/game.js`: precompute `_mergeableSet` before tower render loop — a tower is mergeable if another tower of the same type + same star (both not awakened, star < 4) exists on the board
- Rarity frame condition changed from `!tw.awakened&&tw.star>1` → `_mergeableSet.has(tw)` — frame now acts as a "Merge available" indicator instead of a static rarity display

## v3.11.1 — Collapsible talent tree

### Changed
- `_renderTalentTree()` (`js/ui.js`): branch headers are collapsible, show progress badge (owned/total)
- CSS: card layout with rounded corners, hover states, cleaner spacing

## v3.11.0 — Support tower fixed cost

### Changed
- `FIXED_COST_TYPES` (`js/tower.js`): type 4 (ชัพพอร์ด) exempt from +15/tower cost scaling — always costs 35 gold
- Other towers keep existing scaling behavior

## v3.10.9 — Buff item panel in tower selection

### Added
- `.ts-buff-panel` (`#tsBuff`) shown to the right of the selected-tower strip
- `_renderTsBuff()` (`js/ui.js`): renders owned buff items with canvas icons, click to toggle active buff
- Called automatically from `renderTowerSelection()` and after `useBuffItem()`

### Fixed
- Restored missing `return (_skIconCache[id]=c.toDataURL())` after potion canvas branches in `_skillIconURL`

### Changed
- `.ts-selected-strip` layout changed from block to flex row (tower slots left, buff panel right 200px)

## v3.10.8 — Canvas potion icons

### Changed
- `_skillIconURL()` (`js/ui.js`): added canvas drawing branches for `gold_pot`, `hp_pot`, `dmg_pot`
  - gold_pot: glass bottle with golden liquid and coin symbol
  - hp_pot: red potion with heart
  - dmg_pot: orange-red potion with sword

## v3.10.7 — Star damage rebalance + UI overhaul

### Changed
- **`STAR_DMG_BONUS`** (`js/tower.js`): ★2 +50% / ★3 +110% / ★4 +200% (was +15/30/50%) — star upgrades now feel impactful
- Skill FAB redesigned as square button (no drag), positioned bottom-left of tower panel
- Stage select cards now show gem rewards per star (💎10 / 💎20 / 💎30)
- Renamed materials: เศษแกนเวท→แกนเวทย์, เศษสีม่วง→เศษแกนเวทย์
- Terrain decorations (trees, rocks, bushes) redrawn with top face + side face for 2.5D look
- Tower selection grid: 4-column layout, smaller cards, tower art 25% larger with drop-shadow
- Cache-bust version bumped to `?v=3.10.7` on all `<script src>` and `<link>` tags

## v3.10.6 — Upgrade All card layout + CD freeze between waves

- Moved Upgrade All button to center slot between tower bar and control buttons
- Restyled as tall card with gold border (`.upall-card`) distinct from tower buttons
- Tower cooldown (`tw.cd`) now only ticks when `G.waveActive` — freezes between waves
- Added `?v=3.10.6` cache-busting suffix to all `<script src>` tags in HTML

## v3.10.5 — Upgrade All button

### Added
- **`upgradeAllTowers()`** (`js/tower.js`): iterates all non-awakened towers, distributes
  remaining free skill points by always giving the next point to whichever track (rngLv /
  rateLv) is currently lower — balanced split. Shows upgrade FX rings + ⬆ particles on
  each tower upgraded.
- **`updateUpgradeAllBtn()`** (`js/tower.js`): counts towers with pending points, updates
  red badge count and disables the button when all towers are maxed. Called from `updateHUD()`.
- **`_twRemain(tw)`** helper: returns remaining skill points for a tower.
- **`#upgradeAllBtn`** (`Tower Quest 🏰.html`): "⬆ All" button in the bottom tpanel row,
  next to speed button. Red badge (`#upgradeAllBadge`) shows pending-tower count.
- **`.upall-btn` / `.upall-badge`** (`css/main.css`): styles for the new button and badge.

---

## v3.10.4 — Floating star indicator (no badge box)

### Changed
- **Star badge** (`js/game.js` render loop): replaced the filled rounded-rect badge
  (top-left corner of tile) with a no-background text label centered above the tower
  sprite. Uses `textBaseline:'bottom'` at `y+2`, `shadowBlur:4` for readability.
  Star chars repeat by count (`'★'.repeat(star)`); color still maps to RARITY_COLORS
  (★2=blue, ★3=purple, ★4=gold).

---

## v3.10.3 — Stage 8 balance fix

### Fixed
- **Boss spawn bug** (`js/game.js`): type 4 (Boss) was still listed in Stage 8's `enemyTypes`
  array. The normal random-index path could select it at waves 11–12 (~17% per enemy),
  ignoring `bossChance:0`. Removed type 4 from the array entirely.

### Changed
- **Stage 8 enemy order**: `[6,10,2,3,5,4]` → `[10,6,2,3,5]`. Stage now opens with Shaman
  (waves 1–2) so players immediately learn the core mechanic, rather than Bat which punished
  players who didn't bring air-capable towers.
- **Stage 8 enemy count**: added `enemyMult:0.85` — reduces per-wave enemy count by 15%
  (wave 9: 22 → 19 enemies). Golem still introduced at wave 9.

## v3.10.2 — Canvas art UI overhaul (tower cards + skill icons)

### Added
- **Canvas-drawn tower art** (`js/ui.js` `_towerIconURL`): tower selection cards now render
  real tower art via offscreen canvas (`drawTowerIcon`) instead of emoji. 240 px offscreen
  canvas, displayed at `aspect-ratio:4/3` with smooth scaling.
- **Canvas-drawn skill icons** (`js/ui.js` `_skillIconURL` / `_drawSkillIcon`): all 5 skill
  cards (goldrush/freeze/meteor/overdrive/barrier) replaced emoji with bespoke canvas drawings
  matching each skill's theme. Icons appear in bag tab, gacha odds list, tower-select skill
  picker, and skill info popup.
- **Skill icon states**: owned skills render bright (`brightness(1.25)`); locked skills render
  dark grayscale (`grayscale(1) brightness(.4)`).

### Changed
- **Item renames** (`js/save.js`): ผงดาวตก→ดาวตก · เศษสีทอง→เศษดวงดาว · เศษหินมืด→หินมืด ·
  แกนเวทอสูร→เศษแกนเวท · gacha pool "เศษแกนเวท x3/x1"→"แกนเวท x3/x1"
- **Bag restructure** (`Tower Quest 🏰.html`, `js/ui.js`): removed ✨สะสม tab; shard counts
  now live in the วัสดุ tab. Remaining tabs: วัสดุ(0) / บัฟ(1) / สกิล(2).
- **Gacha dud** (`js/save.js` `_addDudShard`): consolation prize now randomly gives all 3
  shard types (🔹70% / 💜22% / 🌟8%) instead of always blue.
- **Shard exchange UI** (`js/ui.js` `_renderShardExchange`): shows shard name so players know
  what they are spending.
- **Skill card star size** (`css/main.css`): `.ts-sk-stars` font-size 7px → 11px.
- **Tower card art proportions** (`css/main.css`): `.ts-card-art` aspect-ratio 1/1 → 4/3.

### Fixed
- **Strip slot overflow** (`js/ui.js` `renderTowerSelection`): stages without `maxTowers` used
  default 99, creating 99 empty strip slots that overflowed and covered grid cards. Now capped
  to `available.length` for noLimit stages.
- **`_towerIconURL` crash guard** (`js/ui.js`): wrapped in try/catch so a `drawTowerIcon`
  failure returns `''` instead of breaking the entire card grid render.
- **`TSTRENGTH` null guard** (`js/ui.js`): `(TSTRENGTH[ti]||[]).join()` prevents crash for
  any tower type without a strength entry.

---

## v3.10.1 — Workshop tab split (craft vs talent)

### Changed
- **Workshop UI** (`Tower Quest 🏰.html`, `js/ui.js`, `css/main.css`): split into
  two tabs — 🛠️ **คราฟ** (Void Tower craft + shard exchange) and 🌳 **ทาเลนต์**
  (permanent talent tree). Added `wsTab(t)` function; `openWorkshop()` now resets
  to the craft tab on open.

---

## v3.10.0 — Skill shard upgrade system + pre-stage skill selection

### Changed
- **Skill card upgrade system** (`js/save.js`): duplicate cards no longer instantly
  upgrade the star. Instead they accumulate "shards" (`o[id].shards`). Thresholds
  (`SKILL_SHARD_COST = [2,4,6,10]`): ★1→★2 needs 2 shards, ★2→★3 needs 4,
  ★3→★4 needs 6, ★4→★5 needs 10. Added `getSkillShards(id)`. Old save data
  (missing `shards` field) treated as 0 — backward compatible.
- **Skill selection moved to tower-select screen** (`js/ui.js`): `showTowerSelection`
  and `openEgTowerSelection` now call `setActiveSkill(null)` at the start so the
  player must pick each run. `renderTowerSelection` appends a `#tsSkillPicker` chip
  row below the tower grid; `tsSelectSkill(id)` handles selection + re-render.
  `showTowerSelection` now always shows the screen when the player owns any skill
  card, even for stages with no tower limit (all towers pre-selected, prompt says
  "เลือกสกิลได้ด้านล่าง"). Added `_tsAvailable` module var to support re-render.
- **Bag ⭐ tab** (`js/ui.js`): removed equip button; now shows star level + shard
  progress (`M/N เศษ → ★(next)`) as a read-only collection viewer.
- Gacha flip result now shows shard progress on dups (`เศษ M/N → ★X`) and
  highlights star-upgrades separately (`★(old) → ★(new) ✨`).

### Added
- `css/main.css`: `.ts-skill-section`, `.ts-skill-row`, `.ts-skill-chip`, `.ts-skill-chip.sel`
- `Tower Quest 🏰.html`: `<div id="tsSkillPicker">` inside `#towersel` body

## v3.9.4 — Draggable skill FAB + skill achievements

### Added
- **Draggable skill FAB** (`js/game.js`, `css/main.css`): `_initFabDrag()` attaches
  `pointerdown/pointermove/pointerup` listeners to `#skillBtn`; drag >5 px moves
  it anywhere on the game canvas, saves position to `tq_fabpos` as % of container.
  On next session the button restores to the saved position. Removed inline
  `onclick` from HTML; `click` listener inside `_initFabDrag` suppresses activation
  when a drag occurred. `touch-action:none` added for mobile compatibility.
- **Achievement — 🃏 นักสะสมการ์ด** (`js/save.js`): unlocked when all 5 skill card
  IDs are in `tq_skills` (id `sk_all5`, reward 💎100, cat `collect`).
- **Achievement — ⭐ สกิลสูงสุด** (`js/save.js`): unlocked when any card reaches
  ★5 (id `sk_max`, reward 💎150, cat `collect`). Both checked in `addSkillCard()`
  and `checkAchievements()`.

### Changed
- `css/main.css`: `.skill-fab` cursor changed to `grab`; added `.skill-fab.dragging`
  rule (`cursor:grabbing`, elevated shadow); removed `transform` from `.skill-fab.ready:hover`
  to avoid conflict with drag-positioned transform.
- `GAME_VERSION` bumped to `3.9.4`.

## v3.9.3 — Skill gacha rate rework (1% cards + 95% dud)

### Changed
- **Skill gacha odds** (`js/save.js`): replaced the no-dud weighted pool with a
  flat per-card rate — each of the 5 cards = 1% (5% total), the remaining 95%
  is a dud ("เกลือ") that awards 🔹 `shard_c` ×1 (exchangeable in the Workshop).
  `_skillRoll` now returns a card def or `null`; `doSkillPulls` grants the shard
  on a dud. Legendary pity (30 pulls → 🛡️ barrier) retained as a mercy.
- Reveal handles duds: `_skillCardBackHTML` renders a 🔹 shard card, `flipSkillCard`
  null-safe rarity (FX tier `common`). Odds table lists each card at 1% plus a
  95% dud row; footer text updated.

### Notes
- Verified distribution over 2000 raw pulls: ~4.7% cards (even across the 5),
  ~95.3% duds → matching shard grants; 30-pull pity still yields a legendary.

## v3.9.2 — Gacha clarity + ticket icon fix

### Changed
- **Two clearly-separated gacha banners**: both `#gacha` and `#skillgacha` now
  have a segmented tab switcher at the top (💎 ตู้รางวัล / ⭐ ตู้การ์ดสกิล,
  `.gacha-tabs`/`.gacha-tab`), replacing the easy-to-miss inline banner link.
  The skill tab on the gem screen shows the live ticket count.
- **Ticket icon** swapped 🎟️ (U+1F39F, rendered as a tofu box on some Windows
  emoji fonts) → 🎫 (U+1F3AB) everywhere (`js/save.js`, `js/game.js`,
  `js/ui.js`, HTML).
- **Exchange button** (`#skillExchangeBtn`, `_renderSkillGachaUI`) now shows the
  current gem balance and dims (opacity .45, not-allowed cursor) when the player
  can't afford the 💎50 cost, instead of silently failing on click.

## v3.9.1 — Skill info page + barrier balance

### Added
- **Skill info modal** (`_showSkillInfo(id)`/`_closeSkillInfo()` in `js/ui.js`,
  `.sktbl-*` CSS): tapping a card in the "⭐ สกิล" Bag tab opens a per-star
  (★1–★5) stat table with type-specific columns, reusing the `.tsim-*` modal
  frame. Driven from `SKILL_DEFS`, so it always matches the live numbers.

### Changed
- **Balance — 🛡️ กำแพงวิญญาณ** (`SKILL_DEFS`, `js/save.js`): block duration
  trimmed ★4 8→7s, ★5 10→8s, lowering top-end auto-immunity uptime (~26%→21% at
  ★5 / cd 38s). Heal and cooldowns unchanged. Overdrive/freeze left as-is,
  flagged to monitor with live data (see `docs/Roadmap.md`).

### Docs
- `PROJECT_MASTER.md` (§5 save table + §7 Active Skill Cards section),
  `docs/GDD.md` (§5 systems table), `docs/Roadmap.md` (Meta Systems → Done)
  now document the skill-card system.

## v3.9.0 — Active Skill Cards (gacha-collected, player-activated)

A new meta-system: collectible skill cards the player activates mid-battle on a
cooldown, in both Story and Endgame. Built across `js/save.js` (data), `js/game.js`
(runtime), `js/ui.js` (gacha/collection UI), plus HTML/CSS.

### Added
- **5 skill cards** (`SKILL_DEFS`, `js/save.js`), each with ★1–★5 tier stats:
  - ☄️ **อุกกาบาต** (Epic) — tap-to-aim AoE nuke (250→950 dmg, radius 1.5→2.5).
  - ❄️ **แช่แข็งสนาม** (Rare) — full field freeze (2.0→4.5s).
  - 💰 **โกลด์รัช** (Uncommon) — instant gold + temporary kill-gold buff.
  - ⚡ **พลังโจมตี** (Epic) — temporary tower damage + fire-rate buff.
  - 🛡️ **กำแพงวิญญาณ** (Legendary) — heal castle + block leaked damage.
  - Cooldowns 20–60s, lowered per star.
- **Storage**: `tq_skills` (id→star, dup pulls raise star, ★5 overflow refunds a
  ticket), `tq_tickets` currency, `tq_askill` equipped slot. Helpers
  `addSkillCard`/`getSkillStar`/`getSkillStat`/`loadActiveSkill`/`setActiveSkill`.
- **Skill gacha** (`#skillgacha` screen, `doSkillPulls`): ×1=🎟️1 / ×10=🎟️9, no
  dud, pity 30 guarantees the legendary. Card-flip reveal reuses `_gachaFx`
  (now screen-id-parameterized). Entry via a link on the gem gacha screen.
- **Collection tab** "⭐ สกิล" (4th Bag tab): shows owned star + current/next
  cooldown, locked cards greyed, equip toggles `tq_askill` (`useSkillCard`).
- **In-battle**: floating `#skillBtn` FAB with radial cooldown overlay + star
  badge. `_initRunSkill` (called from `initGame`/`initEgGame`) reads the equipped
  card and starts on full cooldown; `_tickSkill` ticks cd + buff timers in both
  update loops; `activateSkill` dispatches the 5 casts (meteor via
  `onCanvasClick` aim). Buff hooks: overdrive at the 4 tower fire sites, goldrush
  in `killEnemy`, barrier at the 2 reach-end damage sites.
- **Ticket sources**: daily quest claim (+1 each), login rewards (day 4 +2, day 7
  +3), first-time new-star story clears (+1, `saveProgress`), Endgame milestone
  waves 15/25/35 (+1, `updateEg`), and 💎50→🎟️1 exchange (`exchangeGemForTicket`).
- **Talent branch ⭐ สกิล** (`TALENT_TREE`, ids 12/13): −10%/−10% skill cooldown
  (max −20%), applied in `_initRunSkill` via `hasPUpgrade`.

### Notes
- New `mkState()` fields: `skillId`, `skillCd`, `skillCdMax`, `skillAiming`,
  `skillDmgMult`, `skillRateMult`, `skillDmgT`, `skillGoldMult`, `skillGoldT`,
  `skillBlockT`.

## v3.8.11 — End-of-game stats + Endgame milestone gems

### Added
- **End-of-game stats block** (`#endStats` in `Tower Quest 🏰.html`,
  `_renderEndStats()` in `js/game.js`, `.end-stats`/`.es-*` CSS): the end
  overlay now shows total kills, max combo, total damage, and a per-tower-type
  **DPS breakdown** (horizontal bars sorted by damage, tinted with each tower's
  `TACCENT`). Shown in both Story (`endGame`) and Endgame (`showEgResult`).
- Telemetry to drive it: `G.dmgByType` (damage accumulated per tower type in
  `applyDmg`, `js/enemy.js`) and `G.battleT` (combat time accumulated while
  `G.waveActive` in both `update`/`updateEg`). DPS = damage / battle time.
- **Endgame milestone gems**: clearing wave 10/20/30/… in Endgame now awards a
  lump of 💎 Soul Gems immediately (`G.egMilestones` guards one payout per
  wave per run), in addition to the run-end `awardEndgameGems`. Reward
  `floor(20*(wave/10)*(1+egDiff*0.5))` scales with wave and difficulty.

### Notes
- New `mkState()` fields: `dmgByType`, `battleT`, `egMilestones`.

## v3.8.10 — Move towers during the wait phase

### Added
- **Drag-to-move**: dragging a placed tower onto an empty buildable cell now
  relocates it, but **only while `G.waveActive` is false** (between waves /
  before the first wave). Awakened and 4★ towers — previously not draggable at
  all — can now be dragged to *move* (still can't merge). New
  `tryMoveTower(tw,col,row)` in `js/game.js`, called from the empty-cell branch
  of `_onTwrDragUp`; rejects path cells, occupied cells, and mid-wave moves
  with a toast. Gold Mine production timers (`G.gmTimers`, keyed by
  `col_row`) are re-keyed to the new position so progress isn't lost.
- Drag highlight extended (`render()`): hovering an empty cell while dragging
  tints it blue (movable) or red (path / occupied / mid-wave), matching the
  existing green/red merge highlight.

### Changed
- `onCanvasPointerDown` no longer early-returns for Awakened/4★ towers, so they
  can start a drag (for moving); merge eligibility is still gated by
  `canMergeTowers`/`tryMergeTowers` as before.

## v3.8.9 — Fix duplicate gacha odds row

### Fixed
- Removed the stale static "ไม่ได้รางวัล 90%" dud row in the gacha odds table
  HTML. After the v3.8.7 rates overhaul the JS (`toggleGachaOdds`) already
  renders a correct dud row (74.9%) plus per-prize weights, so the static row
  was both duplicated and wrong. (`Tower Quest 🏰.html`)

## v3.8.8 — Achievement gem rewards + Wave Preview in Story mode

### Added
- **Achievement gem rewards**: every ACHIEVEMENTS entry now has a `reward` field (20–200 💎
  depending on difficulty). `unlockAchievement()` calls `addGems(ach.reward)` on first unlock.
  Achievement notification now shows the gem reward alongside the description.
- **Wave Preview — Story mode**: `showWavePreview()` is now called after each story wave ends
  (waveBtn re-enabled). Shows a rough simulation of next wave enemy composition.
- **Wave Preview — Endgame**: same `showWavePreview()` call wired after each Endgame wave end.
  Preview hides automatically when the player clicks Start Wave (both modes).

### Changed
- `showWavePreview()` updated to be mode-aware: uses `_getEgEnemyPool()` + Endgame boss chance
  when `isEndgame=true`, otherwise uses `currentStage.enemyTypes` + per-stage `bossChance`.
- `hideWavePreview()` now called at start of both `startWave()` and `startEgWave()` to ensure
  clean state.

## v3.8.4 — Stage 7 boss removal

### Changed
- **Stage 7 (Dark Fortress)**: `bossChance` 0.10 → 0. Shield Knight + Wyvern are the
  designed threats; random boss spawns dilute the mechanic and create unfair difficulty spikes.

## v3.8.7 — Gacha rates overhaul

### Changed
- Roll system changed from integer 1-100 to weighted pool /1000 (`_GACHA_W`) to support
  sub-1% rates. New rates: 001=0.1%, 002=1%, 003=2%, 004=2%, 005=3%, 006=3%, 007=3%,
  008=3%, 009=3%, 010=5%, dud=74.9%. Total=100%.
- 010 ทองถาวร: amount +25→+50, weight 15→50 (5%).
- dud rate: 90%→74.9% — meaningful prize rate up from 10% to 25.1%.
- Odds table in gacha UI now derives % from `p.w/10` and includes dud row.

## v3.8.6 — Tower long-press info modal

### Added
- Long-press (500ms hold) on any tower card in the selection screen opens a full-detail
  modal showing: base stats (dmg/range/rate/cost), special ability (`TSPECIAL`), Awaken
  effect (`TAWAKEN_DESC`), and strengths/weaknesses (`TSTRENGTH`/`TWEAKNESS`).
- New `TAWAKEN_DESC[9]` array in `js/tower.js` — one-line awaken description per tower.
- `_showTsInfo(ti)` + `_closeTsInfo()` functions in `js/ui.js`.
- `.tsim-*` CSS classes in `css/main.css` for the modal overlay.

## v3.8.3 — Tower selection card descriptions

### Changed
- Tower selection screen: each card now shows a short strength summary below the cost,
  sourced from `TSTRENGTH[ti].join(' · ')` (e.g. "Splash กว้างที่สุด · ดาเมจสูง").
  CSS: `.ts-card-desc` added to `css/main.css`.

## v3.8.2 — Stage 8 difficulty adjustment

### Changed
- **Stage 8 (Dark Throne)**: `bossChance` 0.10 → 0 — bosses removed; Shaman is the
  intended primary threat and boss spawns were causing early-wave difficulty spikes.
- **Stage 8 (Dark Throne)**: `maxTowers` 5 → 6 — one extra tower slot to give players
  more options for dealing with the Shaman heal loop.

## v3.8.1 — Sniper Shaman targeting priority

### Changed
- **Sniper (type 3)** now prioritizes targeting Shaman (enemy type 10) over all other
  enemies when one is in range. Magic Tower unchanged (normal furthest-along-path targeting).
  Design rationale: Sniper fits the "assassination" role; Magic is AoE and shouldn't
  abandon group targets for a single-unit priority.
- Implementation: `shamanInRange` variable added to targeting loop in both story and
  endgame `G.towers.forEach` blocks (`js/game.js`). Override: `if(tw.type===3&&shamanInRange) best=shamanInRange;`
- `TSPECIAL[3]` in `js/tower.js` updated to mention shaman lock-on.
- `MWEAKNESS[10]` in `js/enemy.js` updated: "เวทมนตร์+สไนเปอร์ล็อกเป้าก่อนเสมอ".

## v3.8.0 — Talent Tree (meta-progression)

### Added
- **Talent Tree** replacing the flat 3-item permanent-upgrade list in the
  Workshop. 3 branches × 4 tiers, linear unlock per branch, spent with
  persistent gold (`tq_pups`). `TALENT_TREE` + `_renderTalentTree()` +
  `buyTalent(id,cost,prereqId)` in `js/ui.js`; tree CSS (`.talent-*`) in
  `css/main.css`; `wsPUpSection` un-hidden and retitled in the HTML.
  - 💰 Economy: +100 / +150 starting gold, +5% / +5% gold-from-kills (max +10%)
  - ⚔️ Offense: Awaken −50, +5% / +5% / +5% tower damage (max +15%)
  - 🛡️ Defense: +5 / +3 / +2 / +2 castle HP (max +12)
- **`applyTalents()`** in `js/save.js` — applies talent effects to `G` at battle
  start; called from story `startGame` (replacing the old inline `hasPUpgrade`
  block) and endgame `initEgGame`, so talents work in **both** modes. Sets
  `G.dmgBuff` (damage) and `G.goldMult` (kills); the bag `dmg_pot` buff now
  multiplies on top of talent damage.
- **Gold-from-kills hook** in `js/enemy.js` `killEnemy`: reward scaled by
  `G.goldMult` (guarded `||1`).

### Notes
- Backward compatible: legacy upgrade ids 0/1/2 are the tier-1 nodes of their
  branches, so existing purchases carry over. Conservative power budget
  (max +15% dmg, +12 HP, +10% gold) to protect balance.

## v3.7.2 — Dev Console UI overhaul

### Changed
- Full visual redesign of the Dev panel (`#devpanel` + all `.dev-*` classes
  in `css/main.css`) — modern dark glass/neon-amber theme: gradient panel with
  subtle scanlines, glowing logo badge + pulsing cyan status dot in the header,
  segmented pill tabs with glowing active state, glass section cards, custom
  range-slider track/thumb, pill value chips, gradient cheat buttons with hover
  lift, cyan-accent info boxes, custom scrollbar.
- HTML header restructured (`Tower Quest 🏰.html`): logo badge + title/subtitle
  stack + `DEV ONLY` chip + icon close button. Tabs container `flex-wrap`
  removed (now horizontally scrollable). All ids/classes the JS relies on
  (`dtabN`, `devBody`, `devCloseBtn`, `.dev-*`) preserved — no JS logic changes.

## v3.7.1 — Bigger single-card number

### Changed
- Single (×1) gacha card enlarged (180×248) with prominent content:
  number `.gc-num` 11px → 28px, icon 28px → 50px, name 8px → 13px, rarity tag
  bumped. Multi-pull (×10) cards unchanged. CSS-only via `.gc-single` overrides.

## v3.7.0 — Gacha reveal FX (rarity-tiered)

### Added
- **`_gachaFx(card, rarity)`** in `js/ui.js` + `RARITY_FX` config table —
  fired ~300ms into each card flip. Effects scale by rarity tier:
  - particle explosion (6–34 DOM particles radiating outward, `.gc-burst`/`.gc-particle`)
  - expanding shockwave rings (`.gc-ring`, rare+ → 1, legendary → 2)
  - radial card flash (`.gc-flash`, rare+)
  - rotating light rays behind card (`.gc-rays`, epic/legendary)
  - full-screen flash (`.gacha-screen-flash`) + screen shake (`.gc-shake`) for legendary
  - persistent aura pulse on revealed legendary/epic cards
- **Two synthesized SFX** in `js/game.js` `_playSound()`: `gacha_big`
  (5-note triumphant fanfare + shimmer tail, for epic/legendary) and
  `gacha_small` (soft two-note chime, for rare/uncommon/common).

### Notes
- `.gc-wrap` made `position:relative` and `.gc-card` given `z-index:1` so the
  light rays render behind the card. All FX nodes self-remove via `setTimeout`.

## v3.6.3 — Gacha pity 90 → 100

### Changed
- `GACHA_PITY` 90 → 100 in `js/save.js` — guaranteed 001 (Void Tower) now
  every 100 pulls (rounder, easier to remember).
- Updated pity counter (`gachaPityInfo` → `/100`) in both `_renderGachaUI`
  and `_gachaDone`, and both pity notes in the gacha screen HTML (live counter
  row + odds-table footer). Odds-table footer also clarifies 001 = Void Tower.

## v3.6.2 — Main menu declutter

### Changed
- **Center buttons reduced to 2 game modes**: ⚔️ Story + 🔥 Endgame. Removed
  the Workshop and Daily buttons from the center stack.
- **Workshop + Daily moved to bottom nav**. New bottom-nav order (6 items):
  📅 ภารกิจ · 🛠️ เวิร์กชอป · 🎁 กาชา · 🎒 กระเป๋า · 📖 สารานุกรม · 🏆 อันดับ.
  Daily nav button keeps the claimable badge (`#dailyBadge`, repositioned).
- **Removed redundant nav items**: the duplicate "เนื้อเรื่อง" home tab
  (`battleNavBtn`, same action as the big Story button) and the player-facing
  "Dev" tab (`devNavBtn`).
- **Dev panel hidden access**: press-and-hold the 🏰 logo (`#logoIsland`) for
  ~800ms to open the Dev panel. Workshop is still reachable via the top-bar
  gold counter.

### Wiring
- `js/ui.js`: removed `battleNavBtn`/`devNavBtn` listeners; rebound
  `workshopBtn`→`workshopNavBtn`, `dailyBtn`→`dailyNavBtn`; added logo
  press-hold handler.

## v3.6.1 — Gacha x10 discount + odds table fix

### Changed
- **x10 pull discount**: `GACHA_COST10=270` (was 300) — 10% off, effectively
  one free pull. Added `gachaCost(n)` helper in `js/save.js`; `doGachaPulls()`
  and affordability checks in `js/ui.js` now use it. x10 button shows
  strikethrough 300 → 270 with "ลด 10%" tag.

### Fixed
- **Odds table accuracy**: dud rolls (011–999) award 🔹 เศษสีน้ำเงิน ×1 since
  v3.5.5, but the table still read "ไม่ได้รางวัล". Updated to show the
  consolation shard at 90%, with a common "ปลอบใจ" tag.
- Added pity guarantee note (001 every 90 pulls) to the odds table footer.

## v3.6.0 — Daily Quests + Game Feel + BGM

### Added
- **Daily system** (`js/save.js`): 7-day login reward cycle (`LOGIN_REWARDS`,
  `loadLogin`/`getLoginState`/`claimDailyLogin`, key `tq_login`) and 3 rotating
  daily quests (`QUEST_POOL`, `getDailyQuests`/`questProgress`/`claimDailyQuest`,
  key `tq_quests`). Quests seeded deterministically per date; types
  kill/clear/combo/build/gold/wave. `dailyHasClaimable()` drives the menu badge.
- New `#daily` screen + main-menu `#dailyBtn` (with `#dailyBadge`) in
  `Tower Quest 🏰.html`; `openDaily`/`renderDaily`/`_claimDailyLoginUI`/
  `_claimQuestUI`/`_updateDailyBadge` in `js/ui.js`. `'daily'` added to
  `hideAll()`; `_updateDailyBadge()` called from `updateMenuStats()`.
- Quest-progress hooks: `killEnemy` (kill/gold/combo, `js/enemy.js`),
  `tryPlaceTower` (build) + endgame wave-clear (wave, `js/game.js`),
  `saveProgress` (clear, `js/save.js`).
- **Game feel**: persistent on-screen combo meter drawn at end of `render()`
  (count + score multiplier + timer bar); hit-stop on boss death
  (`G.hitStopT`, gated in both game loops) plus extra screen shake in
  `killEnemy` for boss types (4/9).
- **Audio**: synthesized looping BGM (`startBgm`/`stopBgm`/`toggleBgm`,
  `_BGM_BASS`/`_BGM_ARP` scheduler) started in both game loops, stopped on
  `goMenu`/`goStageSelect`; `#settBgmBtn` toggle in Settings. Void Tower SFX
  added: `_TSND[8]='void'` + new `'void'` case in `_playSound`.

### Notes
- `G.hitStopT` added to `mkState()`. BGM uses a separate gain node (vol 0.05),
  independent of the SFX volume slider.

## v3.5.5 — Gacha balance + Shard Exchange

### Added
- `js/ui.js` `SHARD_EXCHANGE` / `exchangeShards()` / `_renderShardExchange()`:
  shard-to-material exchange in Workshop (🔹×10→🪨 / 💜×5→🔘 / 🌟×3→⭐).
  `wsShardExchange` div in `Tower Quest 🏰.html` renders the exchange UI.
- Gacha card (code `001` Void Tower) now shows "🔥 ใช้ได้เฉพาะ Endgame" note.

### Changed
- `js/save.js` `doGachaPulls()`: dud rolls (no prize) now award `shard_c ×1`;
  `_cardBackHTML()` updated to display 🔹 เศษสีน้ำเงิน + common tag for duds.
- `js/game.js` `MAT_DROP_RATES[2]` (ผงดาวตก): 0.02/0.04/0.06 → 0.04/0.05/0.08
  (ง่าย/ปกติ/ยาก) — was the binding bottleneck for Void Tower recipe.

## v3.5.4 — Gacha card flip (player-controlled)

### Changed
- Replaced slot machine digit reveal with a card-flip mechanic.
- Each pull result is a face-down card; player taps any card to flip it.
- x1: one large centered card. x10: 5×2 grid, flip in any order.
- "ข้าม" button flips all remaining cards at once.
- Prize cards glow with rarity border (legendary/epic/rare/uncommon/common).
- Dud cards (011–999) show the number dimmed with "ไม่ได้รางวัล".
- Removed slot machine CSS/JS; added `.gc-*` card classes.
- Fixed back button cleanup (removed stale `_gachaSlotTimers` refs).

## v3.5.3 — New-item highlight in bag

### Added
- **`tq_bagnew`** localStorage key (Set of item IDs) — written by `addBagItem()`
  whenever an item enters the bag; cleared by `clearBagNew()` when bag opens.
- **New-item highlight**: items in `tq_bagnew` render with red border
  (`bag-item-new`), a red "ใหม่" pill badge (`.bag-new-dot` top-right), and
  a subtle red glow background in the bag's บัฟ and สะสม tabs.
- **Badge count update**: bottom-nav bag badge now shows count of *unseen* items
  (from `loadBagNew().size`) instead of total item count — clears to hidden
  once the bag is opened.

## v3.5.2 — Gacha odds table + Dev gem/material cheats

### Added
- **Gacha odds table**: collapsible "📋 อัตราการออก" section in gacha screen.
  Lists all 10 prizes (001–010) with rarity tag and 1% chance each, plus the
  90% dud row (011–999). Populated from `GACHA_POOL` in `toggleGachaOdds()`.
- **Dev Panel — 💎 มณีวิญญาณ section**: +100, +999, set 0, reset Pity cheats
  (`gem100`, `gem999`, `gem0`, `pity0` in `cheat()`).
- **Dev Panel — 🪨 วัสดุคราฟ section**: +10 เศษหินมืด, +10 แกนเวทอสูร,
  +5 ผงดาวตก, reset all materials (`mat0_10`, `mat1_10`, `mat2_5`, `mat_reset`).

### Changed
- Renamed "💰 Resources" dev section to "💰 ทองในด่าน" for clarity.

## v3.5.1 — Gacha: slot machine digit reveal + 001-999 pool

### Changed
- **Gacha number pool expanded 001→999**: `_gachaRoll()` in `js/save.js` now
  rolls 1–100; values 1–10 map to prizes (001–010, each 1%), values 11–100
  give a dud (90%) with a random display number 011–999.
- **`doGachaPulls` return type changed**: each result is now
  `{num: int, prize: obj|null}` instead of bare prize object.
- **Slot machine reveal animation**: replaced card-flip mechanic with a
  3-digit slot machine in `js/ui.js`. Each digit spins rapidly then stops
  one-by-one (hundreds → tens → units) with a pop animation. Creates suspense
  when the first two digits settle on "0" and "0".
- **x1 pull**: single large ticket (`gacha-ticket-big`) — digits spin for
  ~700/1200/1700ms before stopping.
- **x10 pull**: 10 mini tickets (5×2 grid), staggered 200ms start per ticket,
  each spins ~500/850/1200ms per digit.
- **Skip button**: instantly fills all pending digits and shows prize labels.
- **CSS**: removed old card-flip classes; added `.gacha-ticket`,
  `.gacha-ticket-big`, `.gacha-digit`, `.gacha-digit-big`, `.gacha-slot-row`,
  `.gacha-ticket-prize`, `.gacha-prize-name`, `.gacha-rarity-tag`,
  `@keyframes gDigitPop`.

## v3.5.0 — Gacha prize pool system

### Added
- **Player bag (`tq_bag`)** — `localStorage` key storing item quantities as a
  JSON object. Managed via `loadBag`/`saveBag`/`addBagItem`/`getBagQty` in
  `js/save.js`.
- **6 item definitions (`BAG_ITEM_DEFS`)** in `js/save.js`:
  - Buff items: `gold_pot` (+100 gold), `hp_pot` (+3 HP), `dmg_pot` (+10% dmg)
  - Shard items: `shard_c` (common/blue), `shard_r` (rare/purple), `shard_e` (epic/gold)
- **Active buff slot (`tq_abuff`)** — single localStorage key for selected buff
  item. Managed via `loadActiveBuff`/`setActiveBuff`/`consumeActiveBuff`.
- **Item drops after stage clear** in `endGame()` (`js/game.js`): buff item
  drop chance 20%/45%/70% for 1★/2★/3★; shard always drops (rarity weighted
  by star count). Toast notification delayed 1.3s to avoid overlap.
- **`G.dmgBuff`** field in game state (`mkState`) — multiplier applied at
  damage calc sites (`_rdmg`/`_rdmg2` in both story and endgame loops).
- **Bag screen** (`#bag` div in HTML, `openBag`/`renderBag`/`switchBagTab`/
  `useBuffItem`/`_updateBagBadge` in `js/ui.js`) with 3 tabs:
  - 🧱 วัสดุ — shows crafting materials from `loadMaterials()`
  - 🧪 บัฟ — shows buff items; tap to select active buff for next stage
  - ✨ สะสม — shows shard collection items
- **Bag nav tab** in bottom nav bar with badge counter showing total item count.
- **Buff applied on stage start** in `_doStartStage` (`js/ui.js`): calls
  `consumeActiveBuff()` and applies effect to `G` before first render.
- **CSS** for all `.bag-*` classes in `css/main.css`.

## v3.3.0 — Persistent gold system + Workshop permanent upgrades

### Added
- **Persistent gold (`tq_pgold`)** — a cross-stage currency earned by clearing
  story stages. Awarded on star improvement only (delta from `PGOLD_STAR_TABLE
  =[0,50,75,100]`): 0→1★ gives 50, 1★→2★ gives 25, 2★→3★ gives 25 (max 100
  per stage first clear, 100 total for a perfect 3★ first run). Stored in
  `localStorage` via `loadPGold`/`savePGold`/`addPGold` (`js/save.js`).
- **3 permanent Workshop upgrades** (`P_UPGRADES` in `js/ui.js`, rendered in
  `renderWorkshop`): 
  - 💰 ทองเริ่มต้น +100 (200pg) — adds 100 to `G.gold` after `initGame()` in
    `_doStartStage` (`js/ui.js`) when `hasPUpgrade(0)`.
  - ❤️ HP ปราสาท +5 (350pg) — adds 5 to `G.maxHp`/`G.hp` after `initGame()`
    when `hasPUpgrade(1)`.
  - ⚡ Awaken ราคาลด 50 (500pg) — reduces awaken cost 350→300 (`js/tower.js`
    `showTowerPopup` and `awakenTowerFromPopup`) when `hasPUpgrade(2)`.
  - Purchases stored in `tq_pups` (JSON array of bought indices) via
    `loadPUpgrades`/`hasPUpgrade`/`buyPUpgrade` (`js/save.js`).
- **Persistent gold topbar display** (`#mmGoldDisplay`) in main menu, replaces
  the hardcoded "3,200". Updated by `updateMenuGold()` (called from
  `updateMenuStats`, `addPGold`, `buyPUpgrade`). Tapping opens Workshop.
- **Workshop persistent-gold section** (`#wsPUpSection`/`#wsPUpGrid`) rendered
  below the Void Tower recipe, showing owned status and buy buttons.

## v3.2.0 — Stage-clear reward popup polish

### Added
- `Tower Quest 🏰.html` `#endOverlay`: new `#endChestIcon` (chest/crown emoji
  above the title) and `#endRewardRow` (💎 Soul Gems gained display, hidden
  when 0).
- `css/main.css`: `.chest-icon` pop-in animation; `.obox.tier-gold/-silver/
  -bronze/-lose` border-color + glow variants selected by stage result;
  `.star-row .star-ico` staggered pop-in animation with gold glow on filled
  stars; `.reward-row` pill styling with pop-in animation.
- `js/game.js` `endGame()`: builds the star row as individual `<span>`
  elements with per-star animation delays, picks the chest icon/tier class
  from the result (👑 3★ / 🎁 2★ / 📦 1★ / 💀 loss), and shows
  `#endRewardRow` with the Soul Gems gained.
- `css/main.css` `.cdx-tico`/`.cdx-tico-lg`: glowing colored-border frame for
  tower icons in the Codex tower tab (grid cards and detail header), using
  each tower's `TACCENT` color from `js/tower.js`.
- `js/ui.js` `renderStageSelect()` / `css/main.css`: stage cards with
  stars>0 now get a chest-tier glow (`.tier-gold`/`.tier-silver`/
  `.tier-bronze` for 3★/2★/1★, replacing the flat `.completed` style) and a
  `.stage-chest-badge` (👑/🎁/📦) in the top-left corner, matching the
  v3.2.0 end-of-stage chest icons.
- `css/main.css` `#achNotif`: achievement notification now pops in with a
  scale+slide animation (was slide-only) and its border/glow color is set
  per achievement category (`cat-story`/`cat-combat`/`cat-skill`/
  `cat-endgame`/`cat-collect`) via a new class set in
  `js/save.js` `_showNextAchNotif()`.
- `css/main.css` `.bnav`/`.bnav.active`: bottom main-menu nav tabs now get a
  card-style background/border and glow on hover/active, matching the
  Codex/Stage Select polish.
- `Tower Quest 🏰.html` `#voidCraftOverlay` / `css/main.css` `.obox.tier-void`:
  new chest-style success popup shown by `craftVoidTower()`
  (`js/ui.js`) when the Void Tower recipe is completed, replacing the
  plain toast.

### Fixed
- `Tower Quest 🏰.html` Workshop hero stat block showed the Void Tower's
  pre-v3.0.1 base damage (38); updated to the current value (42).

### Changed
- `js/save.js` `saveProgress(si,stars)` now returns the Soul Gems gained
  (0 if no new star record), so `endGame()` can display it without
  duplicating the gain calculation.

## v3.1.0 — Tower rarity frames + Archer/Endless balance

### Added
- `js/tower.js` `RARITY_COLORS={2:'#42a5f5',3:'#ab47bc',4:'#ff8f00'}` — shared
  color map for ★2/★3/★4 ("Rare"/"Epic"/"Legendary"), used by both the
  in-game canvas and the tower popup. Awakened towers keep their existing
  gold pulsing aura (no rarity frame, to avoid double-glow).
- `js/game.js` `render()`: placed towers with `star>1` (and not Awakened)
  now draw a colored glowing rounded-rect frame, and the ★N badge
  background is tinted with the matching rarity color (was flat
  `rgba(0,0,0,.75)` with gold text for all stars).
- `js/tower.js` `showTowerPopup`: the `_tpIco` preview canvas (42x42) now
  draws a matching rarity-colored background/border behind the tower icon
  (gold `#ffb300` if Awakened) before `drawTowerIcon`.

### Changed
- `js/game.js` `DEFAULT_CFG.t_rate[5]` (Archer) 2.0 → 1.8 shots/s — Archer
  was the highest DPS/Cost tower at both ★1lv1 (0.667) and ★4lv5 (2.800),
  noticeably ahead of every other tower with no offsetting downside (cheap,
  fast, hits air, no special mechanic). New ★4lv5 DPS/Cost ≈ 2.52.
- `js/game.js` `getEgEnemyHP`/`spawnEgEnemy`/`getEgRewardBonus`: Endless
  Mode round-scaling caps raised (normal HP/shield ×5.0→×7.0, boss-type
  HP/shield ×3.5→×4.6, reward ×3.0→×4.0), all chosen so every curve now
  flattens at `egRound≈20` instead of `egRound≈14`. Reward/HP ratio
  behavior at the (now later) flattening point is unchanged from v1.9.20 —
  this just extends the ramp-up window by ~6 rounds before plateauing.

## v3.0.1 — Balance pass on v3.0.0 skill tracks

### Changed
- `js/tower.js` `SNIPER_CRIT_MULT` 2 → 1.75 — at max crit (40% chance via
  `getSniperCrit`), Sniper's overall ★4lv5 scaling drops from ×5.88 to
  ×5.46 relative to ★1lv1, bringing its endgame DPS/Cost down from ~2.35
  closer to (but still above) other towers, while keeping the crit track
  meaningfully rewarding.
- `js/tower.js` `getGoldMineInterval(rateLv)` cooldown reduction -10%/lv →
  -15%/lv. Max-cooldown build (rateLv5) now produces gold every 2.0s
  instead of 2.5s (0.4g/s → ~1.0g/s base amount), making the "cooldown"
  skill track a viable alternative to the "amount" track instead of a
  near-trap pick.
- `js/game.js` `DEFAULT_CFG.t_dmg[8]` (Void Tower) 38 → 42 — raises Void
  Tower's standalone DPS/Cost (★1lv1: 0.253→0.280, ★4lv5: 1.064→1.176),
  narrowing the gap with other towers while keeping its Void Mark debuff
  as the primary value proposition.
- Codex (`js/tower.js` `TSPECIAL[3]`, `TSPECIAL[6]`): updated text to
  reflect the new x1.75 Sniper crit multiplier and -15%/lvl Gold Mine
  cooldown reduction.

## v3.0.0 — Tower skill-point system redesign (2 tracks per tower)

### Changed
- **Skill points reduced from 3 tracks to 2 tracks per tower** (`js/tower.js`).
  `dmgLv` is frozen at its current value (kept as a permanent legacy bonus,
  no longer upgradeable). Only `rngLv`/`rateLv` remain spendable, capped at
  `used=(rngLv-1)+(rateLv-1) <= tw.star`, max per track = `star+1`. These two
  fields are **repurposed per tower type** via new `trackDefs(t)`:
  - Cannon/Ice/Magic/Archer/Lightning/Void: Range (shield pierce unlock) /
    Attack Speed (rapid-fire unlock) — unchanged from before.
  - **Sniper**: `rngLv` repurposed as **Crit** track (`getSniperCrit`:
    +10% crit chance/lvl, capped 40%, crit = x2 damage via
    `SNIPER_CRIT_MULT`). Range is now constant (`getTowerRange` special-cases
    `t===3`, no longer scales with level). `rateLv` = Attack Speed.
  - **Gold Mine**: `rateLv` = Cooldown reduction (`getGoldMineInterval`,
    -10%/lvl), `rngLv` = Gold quantity (`getGoldMineAmt`, +2/lvl, Awaken x2).
  - **Support**: `rngLv` = Range, `rateLv` = new anti-stun aura strength
    (`getSupportResist`, +5%/lvl on top of the ★-based base).
- **Support tower range reduced**: `CFG.t_rng[4]` 2.8 → 1.5 (`js/game.js`).
- **New Support anti-stun aura**: any `type===4` Support tower within range
  of a tower grants it a chance to resist the Wyvern's stun-on-dive
  ability. Base resist scales with ★ via `STAR_RESIST=[.2,.4,.6,.8]`
  (★1-4 = 20/40/60/80%, Awakened = 100%), plus `+5%/lvl` from the Support's
  "anti-stun" track. Rolled against `Math.random()` in both story and
  endgame Wyvern dive logic (`js/game.js`).
- Tower popup (`showTowerPopup`) and skill-point spend handler
  (`upgradeTowerFromPopup`) rewritten to render the 2 per-type tracks
  dynamically from `trackDefs(t)`, including type-specific stat rows
  (crit %, gold-mine interval/amount, support resist %).
- Codex tower detail (`js/ui.js`) level table and header are now per-type:
  Sniper shows attack-speed/crit columns, Gold Mine shows production
  interval/amount, Support shows range/anti-stun-bonus, others unchanged
  (damage/range/attack-speed). `TSPECIAL`/`TWEAKNESS` entries updated for
  Sniper, Gold Mine, and Support to describe the new mechanics. Star Merge
  explainer box gains a Support anti-stun aura note.
- `.tp-pick-row` CSS grid changed from 3 columns to 2 (`css/main.css`).

## v2.1.1 — Rebalance Star Merge damage bonus

### Changed
- `getTowerDmg(t, lv, star)` (`js/tower.js`) now uses a lookup table
  `STAR_DMG_BONUS=[0,.15,.3,.5]` for the per-★ base-damage bonus instead of
  a flat +10%/★: ★1=+0%, ★2=+15%, ★3=+30%, ★4=+50%. Codex explainer text
  updated to match.

## v2.1.0 — Star Merge grants base damage too

### Changed
- `getTowerDmg(t, lv, star)` (`js/tower.js`) gained a third `star` parameter:
  `CFG.t_dmg[t] * (1 + ((star||1)-1)*.1) * (1 + (lv-1)*.25)` — base damage
  now scales **+10% per ★** gained via Star Merge, independent of the
  `dmgLv` skill-point allocation. All callers (`tower.js` popup, `game.js`
  story/endgame damage calc) now pass `tw.star`. Toolbar tooltip and Codex
  level table intentionally still show ★1 reference values; the Codex
  explainer box now notes the +10%/★ base bonus.

## v2.0.3 — Star Merge drag UX polish

### Added
- Drag-to-merge cell highlight (`js/game.js`, `render()`): while dragging a
  tower over the board, the hovered cell is tinted green if
  `canMergeTowers(src, target)` is true (same type/★, neither Awakened,
  `src.star<4`) or red otherwise. New shared helper `canMergeTowers(src,
  target)` factors out the merge-eligibility check used by both the
  highlight and `tryMergeTowers`.
- Toolbar tower-info tooltip (`onCanvasMove`, `js/game.js`) now appends the
  escalating-cost breakdown, e.g. `💰80 (+15×2)`, when at least one tower of
  that type is already placed — surfaces the per-type cost mechanic
  (v2.0.2) outside the Codex.

## v2.0.2 — Per-type escalating tower cost

### Fixed
- `getTowerCost(t)` (`js/tower.js`) now scales `+15` gold per placed tower
  of **the same type `t` only**, instead of `G.towers.length` (every tower
  on the board regardless of type). Previously, placing one Cannon raised
  the cost of Ice/Support/etc. too even if none were placed. Codex tower
  detail (`js/ui.js`) and the inline comment in `js/tower.js` updated to
  match.

## v2.0.1 — Star Merge skill points are permanent

### Removed
- `resetTowerPointsFromPopup` (`js/tower.js`) and `.tp-resetbtn`
  (`css/main.css`), plus the reset button row in `showTowerPopup`. Once a
  tower's free skill points (`dmgLv/rngLv/rateLv`) are allocated, they can no
  longer be reallocated except via a Star Merge (which resets the new,
  higher-★ tower's points to a fresh pool).

## v2.0.0 — Star Merge system (replaces gold-based upgrades)

### Major change
This release replaces the old "pay gold per dmg/rng/rate level" upgrade
system with a **merge-based star/skill-point system**. The underlying
`getTowerDmg/Range/Rate(type, lv)` formulas and the `tw.lv` (1-5) cap are
unchanged — only how `tw.lv` (via `tw.dmgLv/rngLv/rateLv`) is earned and
spent has changed.

### Added
- `tw.star` (1-4, default 1) on every placed tower (`tryPlaceTower`,
  `js/game.js`). Total free skill points for a tower = `tw.star`
  (1★=1pt … 4★=4pt), spent across `dmgLv/rngLv/rateLv` (each point = +1
  level, same as before, max combined `tw.lv` = `star+1` ≤ 5).
- **Drag-to-merge** (`js/game.js`): new `onCanvasPointerDown` /
  `_onTwrDragMove` / `_onTwrDragUp` handlers let the player drag a placed
  tower onto another tower of the *same type and same ★* (neither
  Awakened, neither already 4★). `tryMergeTowers` removes both and spawns
  one tower at the target's position with `star+1`, resetting
  `dmgLv/rngLv/rateLv` to 1 (fresh point pool to allocate). Registered in
  `_doStartStage` (`js/ui.js`) and `_doStartEndgame` (`js/game.js`).
  `_suppressNextClick` prevents the trailing `click` event from reopening
  the tower popup right after a merge-drag.
- Star badge (★N) drawn top-left on towers with `star>1`, alongside the
  existing `LvN` badge top-right.

### Changed
- `upgradeTowerFromPopup` (`js/tower.js`) no longer charges gold — it just
  checks `used < tw.star` (used = sum of spent points) and increments the
  chosen stat for free.
- `awakenTowerFromPopup`: Awaken now unlocks at **★3+** (previously
  `lv>=5`), still costs 💰350. Once Awakened a tower is permanently
  "star-locked" — `tryMergeTowers` rejects merges involving an Awakened
  tower, so the player must choose between Awakening at ★3 (locking in a
  3-point build) or pushing to ★4 first for a stronger Awaken.
- `showTowerPopup` rebuilt: shows `★N`, "แต้มสกิล used/star", a
  free-allocation pick row (when points remain), and the Awaken button
  (when ★≥3 and not yet Awakened) instead of the old gold-cost upgrade
  panel / "🔝 MAX" state.
- Codex tower detail (`js/ui.js`): the per-level table's last column now
  shows the ★ requirement ("พื้นฐาน" / "★N ขึ้นไป") instead of a gold cost,
  plus a new explainer box describing the Star Merge system.
- Tutorial (stage 1): replaced the old "อัปเกรดป้อมถึง Lv.5 แล้วจ่ายทอง
  Awaken" step with a new Star Merge step, and updated the Awaken step text
  to reflect the ★3 requirement and star-lock.

### Removed
- The old pay-gold-per-level upgrade flow (`CFG.t_cost[type]*tw.lv` cost in
  `upgradeTowerFromPopup`) is gone entirely.

## v1.14.1 — Escalating tower placement cost

### Changed
- New `getTowerCost(type)` (`js/tower.js`) returns `CFG.t_cost[type] +
  G.towers.length*15` — each placed tower raises the cost of the *next*
  tower (any type, both story and Endgame) by 15 gold. Selling a tower
  lowers the next cost back down since it's based on the current board
  count.
- `tryPlaceTower` (`js/game.js`) now charges/validates against
  `getTowerCost`. Toolbar cost labels (`updateTowerPanel`, `updateHUD`,
  Endgame round-reset) and the canvas drag-preview tooltip
  (`onCanvasMove`) all refresh from `getTowerCost` so displayed prices stay
  in sync with the board.
- Upgrade cost (`upgradeTowerFromPopup`), sell refund
  (`sellTowerFromPopup`), and Awaken cost are unaffected — only the cost to
  place a *new* tower escalates.
- Codex tower detail (`js/ui.js`) now labels the cost row "ราคาเริ่มต้น"
  and notes the +15/tower scaling.

## v1.14.0 — Tutorial overhaul + remove Tower Synergy system

### Added
- `js/ui.js` tutorial system (`_TUT_STEPS`, `initTutorial`, `_tutAdvanceStep`,
  `_renderTut`) reworked into a 13-step, multi-stage flow spanning Stages 1-3
  (Grassland/Dark Forest/Volcanic Pass) instead of finishing within Stage 1.
  Steps are either condition-driven (auto-advance, e.g. select a tower, place
  a tower, send a wave) or click-to-advance ("ต่อไป ▶" / "🎮 เริ่มเล่น" via new
  `.tut-next` button, `css/main.css`). Progress persists across stage
  transitions via `localStorage.tq_tut_idx`, resuming at the first step
  matching `currentStage.id` and pausing the overlay between stages.
  New steps cover: viewing the tower popup, the gold economy, mixed builds,
  the Awaken system, weather, materials/Workshop, and Codex/Achievements.

### Removed
- Tower Synergy system (`SYNERGY`, `getActiveSynergies`, `getSynergyMult`,
  `getSynergyGoldMult`, `getSynergySlowBonus` in `js/tower.js`) removed
  entirely. Tower damage/slow/Gold Mine output no longer receive cross-tower
  bonuses from nearby towers (`js/game.js` projectile-spawn and Gold Mine
  production blocks, both story and Endgame loops).
- Tower popup (`showTowerPopup`, `js/tower.js`) no longer shows a "🔗 SYNERGY"
  section; only the Shadow drain "🌑 ถูกดูดพลัง!" status row remains.
  `.tp-syn-empty` (CSS) removed as dead code; the remaining `.tp-syn-*`
  classes are kept for the drain-status row.
- Updated flavor text for Shadow's Drain ability (`_drainT`, `js/game.js`)
  from "บัฟ/synergy/awaken" to "บัฟ/Awaken", since synergy no longer exists.
- Docs updated to remove synergy references: `docs/TowerDesign.md` (removed
  "## Synergies" section and trimmed the Support Awaken effect row),
  `docs/BalanceSheet.md`, `docs/EnemyDesign.md`, `docs/GDD.md`, and
  `PROJECT_MASTER.md`.

## v1.13.2 — New achievement: Storm Survivor (Endgame Hard + weather)

### Added
- New "endgame" category achievement `eghw` (🌩️ "ผู้ฝ่าวิกฤต") — clear a wave
  in Endgame Mode on Hard difficulty (`egDiff===2`) while a weather effect is
  active (`G.weather.active`). Checked in `updateEg()`'s wave-clear branch,
  right before `clearWeather()` runs — builds on the v1.12.7 fix that made
  weather actually roll in Endgame Mode.

## v1.13.1 — Reduce tower sprite size

### Changed
- `js/game.js` `render()`: the 2.5D tower sprite scale factor (`_tws`) was
  reduced from `1.4` to `1.15`, so placed towers no longer overflow heavily
  into neighboring grid cells.

## v1.13.0 — Soul Gems / Void Tower achievements

### Added
- `js/save.js` `ACHIEVEMENTS`: two new "collect" achievements —
  `gem1k` (💎 นักสะสมมณีวิญญาณ, accumulate 1,000 Soul Gems) and `void1`
  (🌑 ผู้เชี่ยวชาญโมฆะ, unlock the Void Tower at the Workshop).
- `checkAchievements()`: checks `loadGems()>=1000` and `isVoidUnlocked()`
  for the two new achievements.
- `addGems()` now also calls `checkAchievements()` so `gem1k` can unlock
  immediately when gems are awarded.

### Fixed
- `checkAchievements()`'s `cdx_t` ("สถาปนิก" — unlock every tower) was
  unreachable: it compared `getUnlockedTowers().length` (a `Set` has no
  `.length`, always `undefined`) against `TNAMES.length`, and the Void
  Tower (index 8, added in v1.12.0) was never included in
  `getUnlockedTowers()`'s result since it's unlocked via the Workshop, not
  story stages. Now uses `.size`, and adds index 8 to the set when
  `isVoidUnlocked()`.

## v1.12.12 — Endgame/Workshop background polish

### Changed
- `css/main.css`: `#egmenu` and `#workshop` now have themed layered gradient
  backgrounds plus radial glow overlays (`::before`/`::after`), matching the
  depth/atmosphere of the main menu (`#mm`) instead of a flat `#0a0a1a` panel.
  `#egmenu` uses a fiery red/black gradient, `#workshop` a void-purple/black
  gradient.
- Added ambient floating particles: reused `.ember` (fire embers) in
  `#egmenu`, and added a new `.void-mote` class + `voidDrift` keyframe
  (drifting purple motes) in `#workshop`.
- `.eg-hd`/`.eg-body` raised to `z-index:1` so content renders above the new
  background glow overlays.

## v1.12.11 — Projectile/impact FX glow polish

### Changed
- `js/game.js` `render()`: projectiles now draw with a soft radial-gradient
  glow halo plus `shadowColor`/`shadowBlur` bloom matching their
  `TPROJ` color, instead of a flat semi-transparent circle.
- Impact FX rings (`fxRings`) and muzzle flashes (`fxFlash`) now also use
  `shadowColor`/`shadowBlur` for a glowing punch, completing the visual
  consistency pass started with towers (v1.12.8) and enemies (v1.12.9).

## v1.12.10 — Remove dead 3D tower overlay code

### Removed
- Deleted the entire disabled Three.js 3D tower overlay system from
  `js/tower.js` (`_gl3D`, `_twMeshes`, `_BC3D`, `_gridToWorld3D`, `_init3D`,
  `_layoutGl3D`, `_buildTowerMesh3D`, `_buildAwakenAura3D`,
  `_sync3DTowerMesh`, `_cleanup3DTowers`, `_render3D` — ~325 lines), disabled
  since v1.12.8 in favor of the 2.5D sprite renderer.
- Removed `<canvas id="gl3d">` and the Three.js CDN `<script>` tag from
  `Tower Quest 🏰.html`, and the `#gl3d` rule from `css/main.css`. The game
  no longer has any external dependencies.
- Updated stale 3D references in `PROJECT_MASTER.md` and
  `docs/TowerDesign.md` to describe the current 2.5D aura/level-ring
  rendering (`_twAura`, `_twLevelRing`) instead.

## v1.12.9 — Enemy visual polish

### Changed
- `js/game.js` enemy-draw block: each enemy is now drawn twice per frame —
  once with `ctx.shadowColor/shadowBlur/shadowOffsetY` set (soft blurred
  silhouette shadow) and once normally on top — matching the drop-shadow
  technique introduced for towers in v1.12.8, giving enemies more depth and
  contrast against the ground tiles.

## v1.12.8 — Tower visual overhaul (2.5D)

### Changed
- Disabled the Three.js 3D tower overlay (`_init3D()` now no-ops, `_gl3D`
  stays `null`) — gameplay now always renders the 2D sprite path in
  `js/game.js`'s tower-draw block (`drawTowerIcon`).
- `js/tower.js` `_twStatic`: reworked the body-cylinder gradient to add a
  bright rim-light highlight stop and a darker shadow stop (via
  `shadeColor`), plus a soft contact-shadow (AO) ellipse where the body
  meets the stone base.
- `_twDecal` is now drawn with a soft drop shadow (`ctx.shadowColor/
  shadowBlur/shadowOffsetY`) for stronger contrast against the body.
- `drawTowerIcon(ctx,type,sz,angle,lv)` gained an `lv` parameter and now
  draws:
  - `_twAura(ctx,type,r)` — a pulsing radial glow under the base, tinted
    per tower via `TACCENT[type]`.
  - `_twLevelRing(ctx,type,r,lv)` — one extra glowing ring around the base
    per level above 1 (gold/orange/red for Lv.2/3/4).
  - `_twWeapon` now also gets a drop shadow for more depth.
- `js/game.js` tower-draw block passes `tw.lv` to both `drawTowerIcon` calls.

## v1.12.7 — Endgame weather fix + Hard difficulty buff

### Fixed
- Weather system (`rollWeather`/`clearWeather`, `WEATHERS`/`STAGE_WEATHER`)
  was never invoked in Endgame Mode — `startWave()` (Story Mode) called
  `rollWeather(currentStage.id)` but `startEgWave()` did not, so `G.weather`
  stayed at its neutral default for the entire Endgame run. Added
  `rollWeather(currentStage.id)` to `startEgWave()` (uses the last
  `STAGE_WEATHER` pool since `currentStage.id=99` clamps to
  `STAGE_WEATHER.length-1`), `clearWeather()` to the Endgame wave-clear
  branch in `updateEg()`, and `clearWeather()` to `endEgGame()` and the
  Endgame branch of `surrender()`.

### Changed
- `EG_DIFF_MULT` Hard raised from `×1.5` → `×1.8` (applied to enemy HP and
  speed via `getEgEnemyHP`/`getEgEnemySpd`). Reward scaling
  (`getEgRewardBonus`) does not vary by difficulty, so Hard was barely
  distinguishable from Normal once round-scaling caps flattened HP growth.

## v1.12.6 — Workshop hero card shows required materials

### Added
- New `#wsHeroReqs` column on the right side of the `.ws-hero` card lists
  the Void Tower's craft requirements (Soul Gems + 3 materials) as compact
  badges (`.ws-hero-req-item`), turning green (`.met`) when the player has
  enough of that resource — a quick at-a-glance summary alongside the
  detailed recipe grid below.

## v1.12.5 — Workshop recipe always visible

### Changed
- The Workshop's recipe progress grid (`#wsRecipeGrid`) is now shown even
  before the final story stage is cleared, alongside the lock note —
  players can see what to stockpile (Soul Gems + materials) ahead of time.
  Only the craft button (`#wsCraftBtn`) stays hidden until the final stage
  is cleared and the Void Tower isn't already unlocked.

## v1.12.4 — Removed score tracking from Story Mode

### Removed
- **Story Mode no longer tracks/displays score.** The end-of-stage overlay
  now shows only "Stage cleared!" / "Try again!" instead of "Score: N".
- **Story Mode loss no longer shows the Save Score overlay** — that prompt
  is now Endgame-only. `showSavePrompt()`/`confirmSave()`/`skipSave()` in
  `js/save.js` dropped their story-mode branches (`isStoryWin` param,
  ternaries for mode/diff/stage/etc — always Endgame now). Removed the
  no-op `endGame` override in `js/ui.js` that used to trigger this prompt.
- **Removed the "⚔️ เนื้อเรื่อง" (Story) leaderboard tab** and the
  "📜 คะแนนเนื้อเรื่องสูงสุด" (Best Story Score) stat card from
  "📊 สถิติของฉัน" — Story Mode progress is tracked via stars/stages, not
  score. The "🌍 ทั้งหมด" tab note was reworded to reflect that ranked
  scores are Endgame-only.

## v1.12.3 — Main menu cleanup

### Removed
- Removed the `#menuProgress` stats bar (best stage / total stars / cleared
  stages) from the main menu — it visually overlapped the bottom nav, and
  the same info is already available on the Rankings/stats screen. Dropped
  the now-unused `updateMenuStats()` computation for it and the
  `#menuProgress` CSS animation rule.

## v1.12.2 — Workshop UI redesign + Void Tower unlock gate

### Changed
- **Workshop screen redesign**: replaced the plain resource-counter layout
  with a `.ws-hero` showcase card for the Void Tower (icon, name, tag, and
  key stats — damage/range/fire rate/cost), an `.eg-info-box` describing
  the Void Mark mechanic, and a recipe section (`#wsRecipeGrid`) showing
  each required resource as a progress bar (reusing the
  `.ach-progress-bar`/`.ach-progress-fill` styles, turning green with a
  checkmark when the requirement is met).
- **Void Tower unlock gate**: crafting the Void Tower now requires clearing
  the final story stage (`STAGES[STAGES.length-1]`) at least once, checked
  via new `isFinalStageCleared()`. If not cleared, the Workshop shows
  `#wsStageLockNote` (a lock message) and hides the recipe/craft section
  entirely. `craftVoidTower()` now also guards against crafting before the
  final stage is cleared. Players who already unlocked the Void Tower are
  unaffected.
- New CSS in `css/main.css`: `.ws-hero`, `.ws-hero-icon` (with glow
  animations `wsIconGlow`/`wsHeroGlow`), `.ws-hero-name`, `.ws-hero-tag`,
  `.ws-hero-stats`/`.ws-stat`, `.ws-recipe-grid`/`.ws-recipe-item`/
  `.ws-recipe-ico`/`.ws-recipe-info`/`.ws-recipe-name`/`.ws-recipe-count`/
  `.ws-recipe-check`, `.ws-lock-icon`.

## v1.12.1 — Thai UI localization & touch target fixes

### Changed
- **Full Thai localization of the UI shell**: translated remaining
  English chrome to Thai across `Tower Quest 🏰.html`, `js/ui.js`,
  `js/game.js`, and `js/tower.js` for language consistency with the
  Thai-language game content (STAGES/CUTSCENES/ENAMES/TNAMES were already
  Thai). Covers: main menu buttons (Story Mode/Endgame/Workshop), bottom
  nav labels, HUD (Surrender, Send Wave, Auto, wave preview, back button,
  tower tray names), Save/Pause/Settings/End overlays, Codex header/tabs
  + unlock counters, Endgame Menu, Workshop header/craft button,
  Leaderboard header/tabs/stat labels/empty states, Cutscene
  skip/next/unlocked/chapter label, What's New header, Achievement
  notification, stage-select "Stage N"/"Waves"/"Towers" labels, and
  "Fire Rate" → "อัตรายิง" in tower flavor text and popups.
- **`WEATHERS` array** (`js/game.js`): translated all 8 weather event
  names and descriptions to Thai (FOG→หมอกหนา, BLIZZARD→พายุหิมะ, etc.),
  matching the weather banner UI.
- **Touch target sizes** (`css/main.css`): increased `.pausebtn`,
  `.speedbtn`, `.devbtn`, and `.bback` to ~34-38px min width/height
  (mobile media query bumped to 38px) for easier tapping on touch
  devices, per UI/UX audit.
- **Speed toggle relocated** (`Tower Quest 🏰.html`): `#speedBtn` moved
  from the crowded HUD top bar into the wave-control row next to
  `#autoBtn`/`#waveBtn`, so it's reachable alongside the controls players
  use most during a wave. `#settSpeedBtn` in the Settings overlay still
  syncs with it.

## v1.12.0 — Soul Gems, Workshop & Void Tower

### Added
- **Soul Gems currency** (`js/save.js`): new `tq_gems` localStorage key with
  `loadGems()`/`saveGems()`/`addGems()`. Awarded via:
  - `saveProgress(si,stars)` — first-time story stage star improvements
    award gems per `GEM_STAR_TABLE=[0,10,20,30]` (cumulative, 1★/2★/3★ →
    10/20/30 gems).
  - `awardEndgameGems(finalWave,diff)` — called from `endEgGame()` and the
    Endgame branch of `surrender()` (`js/game.js`), awards
    `floor(floor(finalWave/2)*(1+egDiff*0.5))` gems on run end.
- **Craftable materials** (`js/save.js`): new `tq_materials` localStorage key
  (`{0,1,2}` = 🪨 เศษหินมืด / 🔘 แกนเวทอสูร / 🌟 ผงดาวตก) with
  `loadMaterials()`/`saveMaterials()`/`addMaterial()`. Dropped only at
  end-of-wave in Endgame via `rollEndgameMaterialDrops()` (`js/game.js`),
  using fixed per-`egDiff` rates in `MAT_DROP_RATES` (not wave-scaled).
- **Workshop screen** (`Tower Quest 🏰.html`, `js/ui.js`): new `#workshop`
  screen + `#workshopBtn` on the main menu. `openWorkshop()`/
  `renderWorkshop()`/`craftVoidTower()` and `VOID_RECIPE` (💎800 + 🪨×30 +
  🔘×15 + 🌟×8) permanently set `tq_voidUnlocked` via
  `isVoidUnlocked()`/`setVoidUnlocked()`.
- **Void Tower (index 8)**: `🌑 ป้อมมนตราโมฆะ` — dmg 38, range 3.0, rate 0.6,
  cost 90, single-target, ground-only. Appended to all per-tower parallel
  arrays in `js/tower.js` (`TNAMES`/`TICONS`/`TCOLORS`/`TPROJ`/`TACCENT`/
  `TSPLASH`/`TSLOW`/`TBUFF`/`TCANAIR`/`TGOLDMINE`/`TCHAIN`/`TPIERCE`/
  `TFLAVOR`/`TTAGS`/`TSPECIAL`/`TSTRENGTH`/`TWEAKNESS`) and `CFG.t_dmg`/
  `t_rng`/`t_rate`/`t_cost` in `js/game.js`. Also fixed a pre-existing gap in
  `TCOLORS` (index 7/Thunder was missing). Added 2D icon decal/weapon
  (`_twDecal`/`_twWeapon` type 8) and `BC`/`_BC3D` purple palette entries in
  `js/tower.js`; 3D mesh falls back to `_buildTowerMesh3D`'s generic
  `default` case with the new palette.
- **Void Mark ability**: projectiles from Void Tower have a 30% (50% if
  awakened) chance to mark their target, increasing damage taken from ALL
  towers by 25% (40% if awakened) for 4s (refreshes, does not stack — capped
  via `Math.max`). Implemented via `_voidMarkT`/`_voidMarkBonus` per-enemy
  fields: proc/refresh in the Endgame projectile hit-handling block
  (`js/game.js`), decay in the per-frame enemy loop, and the damage
  multiplier in `applyDmg()` (`js/enemy.js`).
- **Endgame tower selection**: new `towerSelMode` global parameterizes the
  existing `#towersel` screen. `openEgTowerSelection()` (`js/ui.js`) caps
  selectable towers at 7/6/5 for ง่าย/ปกติ/ยาก (`egDiff` 0/1/2), pool is
  `[0-7]` plus `8` if `tq_voidUnlocked`. Selections persist per-difficulty
  via `tq_sel_endgame_<egDiff>`. `startEndgame()` is now a thin wrapper
  calling `openEgTowerSelection()`; `_doStartEndgame()` holds the original
  body and uses `selectedTowersForStage` for `currentStage.unlockedTowers`.
  Added `#tb8`/`#tc8` tower-bar button; all `<8` loop bounds over tower-bar
  buttons bumped to `<9`.
- **Gems display**: `#mmGemsDisplay` on the main menu (repurposed previously
  unused `.curr`/`.gemico` markup), updated live by `updateMenuStats()`.

## v1.11.0 — Remove Rune System

### Removed
- **Rune system** (`js/tower.js`, `js/game.js`, `js/enemy.js`, `css/main.css`):
  removed the `RUNES` array (Inferno/Frost/Storm/Precision/Gold-Avarice/Power),
  `G.runeInv`, `tw.rune`, `equipRuneToTower()`, `updateTpRune()`, `_dropRune()`,
  the boss-kill rune drop, the wave-clear "no damage taken → 50% rune drop"
  trigger, the rune inventory HUD overlay, the rune icon overlays on towers
  (floating above awakened towers and on tower corners), the `tp-rune-row`
  popup section, and all associated `.tp-rune-*` CSS classes. All
  rune-derived projectile flags (`_frostRune`, `_burnRune`, `_stormRune`,
  `_avaRune`, `_crit`/`_risCrit`) and the burn DoT tick (story + endless
  modes) were removed.
- **Awaken generic +15% damage bonus**: Awaken no longer multiplies tower
  damage by 1.15. All per-type Awaken special abilities are preserved
  (Cannon splash boost, Thunder chain boost, Magic extra shot, Ice freeze,
  Sniper pierce-line, Support double synergy gold/freeze boost, Gold Mine
  x2 production). The `_awakenedRune` projectile flag was renamed to
  `_awakened` since it's still needed for the Ice freeze and Sniper
  pierce-line mechanics.

## v1.10.1 — Remove Hold-to-Sell

### Removed
- **Hold-to-sell on the grid** (`js/game.js`, `js/ui.js`, `Tower Quest 🏰.html`,
  `css/main.css`): removed `onCanvasHoldStart`/`onCanvasHoldEnd`, the
  `holdTimer`/`holdTower` state, the `#sellTooltip` element, and its
  `.sell-tooltip` CSS. Holding a pointer down on a placed tower no longer
  sells it after 600ms — this was prone to accidental sells. Selling a
  tower is still available via the 🗑 Sell button in the tower info popup
  (click a tower to open it). `pointerleave` on the canvas now uses a
  minimal `onCanvasLeave` that only hides `#rangeInfo`.

## v1.10.0 — Tower Placement UX + Settings Menu

### Added
- **Drag-to-place towers** (`js/game.js`, `js/ui.js`, `Tower Quest 🏰.html`,
  `css/main.css`): pointer-based drag from a `.tbtn` tower button onto the
  canvas places the tower at drop, as an alternative to the existing
  click-select-then-click-place flow. A floating `#dragGhost` icon follows
  the cursor during the drag. New shared `tryPlaceTower(type,col,row)`
  helper extracted from `onCanvasClick` is used by both flows.
- **Consolidated Settings overlay** (`Tower Quest 🏰.html`, `css/main.css`,
  `js/game.js`, `js/ui.js`): new ⚙ button opens a `#settingsScreen` overlay
  combining game speed (1x/2x/3x), SFX on/off, SFX volume slider, and
  Auto Wave toggle. The old `#speedBtn`/`#sfxBtn` HUD buttons are now
  hidden (still updated for state-sync) in favor of this single menu.
  Opening Settings auto-pauses gameplay (`openSettings`/`closeSettings`,
  `_settingsPausedGame` flag) if not already paused.

### Changed
- **Tower placement range preview** (`js/game.js` `render()`): the
  placement-ghost range circle now uses the same dashed-ring style as the
  selected-tower range ring (previously a faint unbordered fill), for
  visual consistency.
- **`#rangeInfo` wired up** (`js/game.js` `onCanvasMove`): previously a
  dead HTML element, now shows the selected tower type's range/damage/cost
  near the cursor while placing.
- **Path direction arrows** (`js/game.js` `render()`): increased base
  opacity and added a subtle per-arrow pulse animation so the enemy path
  direction reads more clearly during gameplay.

## v1.9.20 — Endless Mode Demon Lord Shield Cap Fix

### Changed
- **Endless Mode Demon Lord shield scaling** (`js/game.js`):
  `spawnEgEnemy()`'s shield multiplier (`MSHIELD[9]*(1+egRound*0.3)`) is
  now capped at the same ×3.5 `roundBonus` cap used for boss-type HP,
  instead of being uncapped. Previously Demon Lord's reward/HP kept slowly
  declining past `egRound≈14` (down to -30% by `egRound=20`); it now
  flattens at ~-14% from `egRound≈12` onward, matching other enemies. See
  [docs/BalanceSheet.md](docs/BalanceSheet.md#demon-lord-shield-cap-fix-v1920)
  and [docs/Roadmap.md](docs/Roadmap.md).

## v1.9.19 — UI Glow Polish: Save / Weather / Tower Popup / Achievement

### Changed
- **Save overlay** (`.save-overlay`/`.save-box`): added backdrop blur, a
  green/red glow border (depending on Endless mode), and a `savePopIn`
  scale-fade entrance animation. Result grid items glow gold on hover,
  result values get a gold text-shadow, and inputs gain a focus glow.
- **Weather overlay** (`.wb-warning`/`.wb-icon`/`.weather-hud`): warning
  banner gained a red drop glow, the weather icon pulses via new
  `wbIconPulse` keyframes, and the weather name text gets a red glow.
  `.weather-hud.active` (toggled by `js/game.js`'s `setWeather()`/
  `clearWeather()`) adds a subtle white glow while a weather effect is
  active.
- **Tower popup** (`#towerPopup`): green glow border matching the overall
  theme, header gains an inset green glow, level text gets a gold
  text-shadow, and the upgrade/sell buttons glow + lift on hover.
- **Achievement notification** (`#achNotif`): gold glow border when shown,
  icon plays a new `achIcoPop` pop-in animation with a gold drop-shadow,
  and the label text gets a gold glow.

## v1.9.18 — Endless Mode Reward Rebalance

### Changed
- **Endless Mode reward scaling** (`js/game.js`): `spawnEgEnemy()` now
  computes reward via a new `getEgRewardBonus()` (capped multiplier,
  `min(1+egRound*0.15, 3.0)`) instead of the old flat `+egRound*2`. This
  fixes reward/HP dropping 64-80% by `egRound≈14`; it now drops only
  ~14-40%, matching the late-game difficulty curve more fairly. See
  [docs/BalanceSheet.md](docs/BalanceSheet.md#5-endless-mode-round-scaling)
  and [docs/Roadmap.md](docs/Roadmap.md) for the analysis and numbers.

## v1.9.17 — Cutscene Glow Pass

### Changed
- **Cutscene icon** (`.cs-icon-wrap.show`): gained a slow pulsing warm
  glow (`csIconGlow` keyframes) layered on its existing drop shadow.
- **Dialogue box** (`.cs-dialogue`): added a subtle warm glow around the
  box border for depth, matching the glow language used elsewhere.
- **Unlock reveal panel** (`.cs-unlock`): stronger gold glow border plus
  a periodic light sweep (reusing `btnShine`) to highlight newly
  unlocked towers/items.
- **Next button** (`.cs-next`): now pulses with a gold glow
  (`csNextPulse` keyframes) to draw attention; pulse pauses on hover in
  favor of a stronger static glow.

## v1.9.16 — Remaining Menu Pages Glow Pass

### Changed
- **Stage Select, Tower Select, Endgame Mode** (`.ss-header`,
  `.ts-header`, `.eg-hd`): headers now match the gradient + glow
  treatment used on Codex/Rankings/HUD (green for Stage/Tower Select,
  red for Endgame); titles gained a matching text glow.
- **Tower Select cards** (`.ts-card`): hover now lifts the card with
  a green glow; the selected card's glow is stronger; `Deploy!`
  button (`.ts-start-btn`) glows on hover.
- **Endgame difficulty buttons** (`.eg-diff-btn`): hover lift added;
  the selected difficulty's glow is stronger; stat cards
  (`.eg-stat-card`) get a subtle red glow.
- **What's New** (`.news-item`): the most recent entry gets a gold
  glow border to stand out from older entries.

### Skipped
- Dev Panel (`#devpanel`) intentionally left unstyled — internal
  developer tool, not part of the player-facing visual pass.

## v1.9.15 — Codex & Rankings Visual Polish

### Changed
- **Codex** (`.cdx-header`, `.cdx-tabs`, `.cdx-card`): header now has a
  gradient background and green glow matching the battle HUD; title
  has a soft text glow; active tab gets a glow underline and text
  glow; cards lift and glow on hover, with a stronger green glow for
  the active card.
- **Rankings** (`.lb-hd`, `.lb-tabs`, `.lb-item`, `.my-stat-card`,
  `.run-row`): same header/tab glow treatment as Codex; leaderboard
  rows lift slightly on hover; gold/silver/bronze ranks (`.lb-rank.g/
  .s/.b`) get a matching colored text glow; the player's own row
  (`.lb-item.me`) has a gold glow; "My Stats" cards get a subtle glow
  matching their accent color.

## v1.9.14 — UX Polish: Micro-interactions, Toasts, Overlays, Tooltips

### Added
- **Button press feedback**: `.obtn`, `.tbtn`, `.wavebtn`, `.autobtn`,
  and `.stage-card` now scale down slightly on `:active` for tactile
  click feedback.
- **Toast bounce**: `.toast` now slides in with a bounce
  (`toastBounce` keyframes) and a drop shadow instead of a plain
  opacity fade.
- **Stage card polish**: hover now lifts the card with a green glow
  shadow; completed stage cards (`.stage-card.completed`) get a
  permanent soft gold glow that intensifies on hover.
- **Overlay screens**: `.overlay` (pause/victory/defeat) now has a
  backdrop blur; `.obox` uses a dark green gradient with an outer
  glow matching its border color (green for victory/defeat, orange
  for pause).
- **In-game tooltips**: `.sell-tooltip`, `.wave-preview`, and
  `.range-info` gained drop shadows and a quick fade-in
  (`tipPopIn` keyframes) when they appear.

## v1.9.13 — Battle HUD Depth Pass

### Changed
- **HUD bar** (`.hud`): flat black background replaced with a subtle
  gradient + green glow under the border for more depth.
- **HUD items** (`.huditem`): HP/Gold/Wave/Stage indicators now sit in
  individual rounded pill backgrounds instead of plain text on black.
- **HP bar** (`.hpbar`): added a colored glow matching the bar's
  red→orange→green gradient.
- **Tower panel** (`.tpanel`): added an inner green glow along the top
  edge for depth.
- **Tower buttons** (`.tbtn`): hover now lifts the button slightly;
  the selected tower (`.sel`) has a stronger double-layer glow.
- **Send Wave button** (`.wavebtn`): added a slow pulsing glow
  (`wavePulse` keyframes) to draw attention when a wave can be sent;
  pulse disabled while the button is `:disabled`.

## v1.9.12 — Main Menu Liveliness Pass

### Added
- **Story Mode button shine sweep**: a diagonal light streak periodically
  sweeps across `.bbattle` (`btnShine` keyframes) for a premium "glint"
  effect.
- **Custom energy icons**: the topbar energy/lightning indicators are now
  inline SVG lightning bolts (`.energy-ico`, `currentColor`-based, with a
  `.dim` state for unfilled energy) instead of the ⚡ emoji.
- **Staggered entrance animation**: on entering the main menu, the logo,
  title, subtitle, version button, action buttons, stats card, and bottom
  nav fade/slide in with increasing delays (`menuFadeIn`/`menuFadeInUp`
  keyframes) for a more polished page-load feel.
- **Floating embers**: a handful of small glowing ember particles
  (`.ember`, `emberRise` keyframes) drift slowly upward in the main menu
  background for extra atmosphere.

## v1.9.11 — Custom Bottom-Nav Icons

### Changed
- Replaced the emoji icons in `#mm`'s `.bottom-nav` (Endgame/Story/Codex/
  Rankings/Dev) with hand-drawn inline SVG line icons (`.bnav-ico`,
  `css/main.css`) — flame, crossed swords, book, trophy, and wrench —
  using `stroke="currentColor"` so they follow the existing
  `.bnav`/`.bnav.active` color states.
- Active tab icons get a soft gold glow (`drop-shadow`) to match the
  rest of the menu's glow language.

## v1.9.10 — Main Menu Visual Polish

### Changed
- **Main menu "quick win" visual upgrade** (`#mm` in `Tower Quest 🏰.html`,
  styles in `css/main.css`), scoped to the main menu screen only:
  - `.gtitle` ("TOWER QUEST") now has a pulsing warm glow animation
    (`titleGlow` keyframes) layered on top of the existing hard-edge
    cartoon text-shadow.
  - `.gsub` subtitle gets a soft glow (`text-shadow`).
  - `.bbattle` (Story Mode) and `#egMenuBtn` (Endgame) buttons gained
    colored glow `box-shadow` (idle/hover/active states) on top of their
    existing 3D button shadows.
  - `#mm::before`/`#mm::after` add a vignette and a warm radial glow
    behind the logo for more depth.
  - `.island` (castle logo) gained a soft green glow.
  - Added 4 new smaller/blurred "far" parallax stars (`.star.far`) for
    background depth.
  - `.curr` (currency pills), `.topbar`, and `.bottom-nav` now use a
    frosted-glass `backdrop-filter: blur(...)` effect.
  - Added a CSS-only parallax backdrop: `.bg-clouds` (drifting cloud
    blobs near the top) and `.bg-mtn-far`/`.bg-mtn-near` (soft blurred
    hazy mountain/hill silhouettes behind the stats card), each with
    its own slow drift animation, plus three new `<div>`s in `#mm`.
  - `.gtitle` switched to a bolder display font (`'Arial Black'`
    fallback stack) at a larger size; `.bbattle`/`#egMenuBtn` enlarged
    and given matching font for a more premium look.
  - `#menuProgress` (stats card) restyled with frosted-glass background,
    a soft border/glow, and more padding.

## v1.9.9 — Rankings & Stats Improvements

### Added
- **New "⚔️ Story" leaderboard tab** in the Rankings screen — shows
  story-mode runs only, ranked by score (top 20), with the same
  gold/silver/bronze rank styling as the other tabs. File: `js/ui.js`
  (`renderLb`, new branch for `lbTab===3`), `Tower Quest 🏰.html` (new
  `#lbt3` tab button, `switchLbTab` loop bound updated to 4).
- **Clarifying note on the "🌍 All" tab** explaining that Endgame and
  Story runs use different score scales, so players check the
  dedicated per-mode tabs for real rankings (`.lb-note` class added to
  `css/main.css`).
- **Two new "📊 My Stats" cards**: "Best Story Score" (max score across
  the player's story runs) and "Achievements" (unlocked/total count via
  `loadAchievements()`/`ACHIEVEMENTS`).

## v1.9.8 — Remaining Monster Idle Animations

### Added
- **Idle bob animations for Fire Spirit, Boss, Dark Lord, and Shaman** —
  the last 4 of 11 enemy types without their own idle motion (they
  previously relied only on the shared v1.9.7 walk-lean). Each now gently
  floats/bobs up and down, with frequency scaled by the same `_sm`
  speed multiplier introduced in v1.9.7. File: `js/enemy.js`
  (`drawEnemySprite` cases 3, 4, 9, 10).

## v1.9.7 — Speed-Synced Movement Animations

### Added
- **Enemy idle animations now react to actual movement speed and direction.**
  `drawEnemySprite(ctx,ti,x,y,sz,mv)` (`js/enemy.js`) accepts a new optional
  `mv={dir,spd}` argument: `dir` is the travel-direction angle (from the
  current path segment) and `spd` is the effective speed multiplier
  (`e.spd*e.slow*enrage*dive`). A universal "walk lean" rotates each sprite
  slightly toward its travel direction, swaying faster at higher speed. Each
  ground-walker's existing bob frequency (Goblin, Skeleton, Shadow, Golem,
  Shield Knight) is also scaled by `spd`, and the wing-flap frequency for Bat
  and Wyvern now speeds up/slows down with their actual movement speed (e.g.
  during dive attacks or while slowed). Computed and passed at the shared
  `render()` call site (`js/game.js`), used by both story and endgame modes;
  the Codex preview call (`js/ui.js`) omits `mv` and falls back to defaults.

## v1.9.6 — 3D Tower Idle Animations

### Added
- **Towers in the 3D view now idle-animate continuously.** Each tower mesh
  gently bobs up/down (`Math.sin`-based, phase offset by `col`/`row` so
  towers don't move in sync), and decorative parts spin independently of the
  aiming turret: Ice's smaller crystal shards, Magic's orbiting ring,
  Support's halo, Gold Mine's gold pile, and Lightning's two coil rings.
  Previously only Awakened towers had any 3D motion (their aura). File:
  `js/tower.js` (`_buildTowerMesh3D` — new `spin` array per type stored in
  `grp.userData.spin`; `_sync3DTowerMesh` — applies bob via
  `mesh.position.y` and spin rotation, independent of the existing
  `turret.rotation.y` aim logic).

## v1.9.5 — Monster Idle Animations

### Added
- **Idle animations for Goblin, Skeleton, Shadow, Golem, and Shield Knight**
  — the only 5 of 11 enemy types that previously had no idle motion (every
  other type already bobbed/pulsed/glowed). Goblin, Skeleton, Golem, and
  Shield Knight now gently bob up and down with flickering/pulsing eye or
  visor glow; Shadow now squishes/stretches like a floating jelly. Purely
  visual, file: `js/enemy.js` (`drawEnemySprite` cases 0,1,2,5,8). Shared by
  story mode, endgame mode, and the Codex preview.

## v1.9.4 — Gold Mine Idle Production Fix

### Fixed
- **Gold Mine no longer produces gold while waiting between waves.** The
  production tick in `update(dt)` (story mode) and the endgame loop wasn't
  gated on `G.waveActive`, so a placed Gold Mine kept ticking income forever
  while the player sat on the "start next wave" screen — letting players
  farm unlimited free gold by idling. Both production blocks are now wrapped
  in `if(G.waveActive)`. Files: `js/game.js` (story Gold Mine production
  ~line 873, endgame Gold Mine production ~line 2177).

## v1.9.3 — Enemy Order by HP (Smooth Curve Fix)

### Fixed
- **Stages 3-9 `enemyTypes` reordered by ascending HP** (Bat 35 → Goblin 55
  → Shaman 58 → Skeleton 75 → Shadow 105 → Shield Knight 129 → Fire Spirit
  144 → Wyvern 160 → Golem 236, with Boss 380 / Demon Lord 900 last since
  they spawn via separate wave-gated overrides regardless of position).
  The v1.9.2 rework had ordered some stages by "theme" rather than HP,
  putting tanky enemies like Golem (236 HP) in wave 1 of stages where
  starting defenses can't handle them yet. Now wave 1 of every stage spawns
  only its lowest-HP type, and each stage's signature enemy (Shield
  Knight/Shaman/Wyvern/etc.) still appears mid-to-late as intended. File:
  `js/game.js` (`STAGES[3..9].enemyTypes`).
- Updated Stage 10 (Dark Tower Summit) intro cutscene — replaced a mention
  of "โกบลิน" (no longer in this stage's roster) with "ค้างคาว" (Bat, which
  is). File: `js/ui.js` (`CUTSCENES[9]`).

## v1.9.2 — Stage Enemy Roster Rebalance

### Changed
- **Reworked `enemyTypes` for Stages 1-10** so every listed type is actually
  reachable by `startWave()`'s spawn formula
  (`maxIdx=min(avail.length-1, ceil(wave/2)-1)`), and each stage uses at most
  7 types (most use 4-6):
  - **Desert Crossing** (s3): `[0,1,2,5,6]` → `[0,1,5,6]` — Bat (signature
    enemy) is now actually reachable.
  - **Treasure Valley** (s4): `[0,1,2,3,5,6]` → `[0,1,3,6]` — Bat Swarm
    (story focus) now reachable.
  - **Thunder Cave** (s5): `[0,1,2,3,5,6]` → `[0,2,3,5,6]`.
  - **Cursed Swamp** (s6): `[0,1,2,3,4,5,6]` → `[2,3,4,5,6]` — drops
    Goblin/Skeleton, adds Golem/Bat to reachable pool.
  - **Dark Fortress** (s7): `[0,1,2,3,4,5,6,7,8]` → `[3,5,6,4,7,8]` — Wyvern
    and Shield Knight (signature enemies) now reachable.
  - **Dark Throne** (s8): `[0,1,2,3,4,5,6,10]` → `[2,3,5,6,4,10]` — Shaman
    (signature healer) now reachable.
  - **Dark Tower Summit** (s9): `[0,1,2,3,4,5,6,7,8,9,10]` →
    `[5,6,7,8,4,9]` — drops Goblin/Skeleton/Shadow/Fire Spirit/Shaman,
    keeping a high-tier roster (Golem/Bat/Wyvern/Shield Knight/Boss/Demon
    Lord) fitting the "final army" stage.
  - Stages 0-2 unchanged (already within limits). Stage 11 (Shadow Remnant)
    intentionally keeps the full 11-type roster as its "every monster
    returns" theme.

## v1.9.1 — Shadow Remnant Balance Fix

### Fixed
- **Stage 11 enemy spawn pool**: `startWave()`'s spawn formula
  (`maxIdx=min(avail.length-1, ceil(wave/2)-1)`) only ever draws from the
  first 7 entries of `enemyTypes` over 13 waves, so Wyvern (7), Shield
  Knight (8), and Shaman (10) never spawned despite being listed. Reordered
  Stage 11's `enemyTypes` to `[7,8,10,0,2,5,6,1,3,4,9]` so all three now
  appear in normal rotation, fulfilling the stage's "every monster returns"
  premise. Boss (4) and Demon Lord (9) still spawn via their existing
  special-case overrides regardless of position. (`js/game.js`)

## v1.9.0 — New Stage: Shadow Remnant

### Added
- **🌑 Stage 11: Shadow Remnant** — new true-final story stage (`id:10`,
  `isFinalStage:true`, moved from Stage 10/Dark Tower Summit). Unlocked after
  clearing Stage 10.
- 13 waves, full enemy roster `[0..10]` (every monster type including the
  Demon Lord and Shaman), `bossChance:.13` — the toughest gauntlet in the
  game.
- New 40-waypoint path on a deep violet/black "abyss" palette
  (`bgColor:'#03000a'`, `pathColor:'#4a1a5e'`).
- New `STAGE_WEATHER[10]` pool: darknight, lightning, blizzard, tornado, fog
  — heaviest chaos pool in the game.
- New intro cutscene (3 slides) framing the stage as the Demon Lord's
  lingering shadow remnant making one final stand.
- New achievement **🌑 ผู้ยุติเงามืด** (`s10`) for clearing Shadow Remnant;
  **ราชันผู้พิทักษ์** (`sall`) now requires all 11 stages.

### Changed
- Stage 10 (Dark Tower Summit) is no longer `isFinalStage` — clearing it now
  shows a normal "Next Stage" prompt into Shadow Remnant. Its intro cutscene
  was lightly reworded to foreshadow that the Demon Lord's defeat isn't the
  true end.
- Total story stars goal is now 33 (11 stages × 3).

### Notes
- No new tower/monster mechanics — Codex (`MSPECIAL`/tower descriptions)
  unchanged. Verified via live preview: stage select shows "Stage 11: Shadow
  Remnant", tower selection/deploy/wave loop run with the full enemy roster
  and no console errors.

## v1.8.0 — Monster Mechanic Pass

### Added
- **👺 Goblin Pack Rush**: Goblins get +20% movement speed while another
  Goblin is within 1.2 cells (green dust trail visual).
- **🔥 Fire Spirit Scorch Flare**: every ~6s (randomized first trigger),
  flares for 1.5s, taking 30% less damage (pulsing orange ring + popup).
- **🪨 Golem Armor Crack**: starts with 24% damage reduction that cracks to
  16%/8%/0% as HP drops below 75%/50%/25% (extra crack lines on sprite).
- **🦇 Bat Erratic Dodge**: 25% chance to dodge any incoming hit entirely
  ("MISS!" popup + white flicker ring, no damage applied).
- **🛡️ Shield Knight Shield Regen**: regenerates 15% of max shield/sec after
  4s without taking damage (pulsing blue ring while regenerating).

### Notes
- Completes the monster revamp — every monster type (0-10) now has a
  distinct mechanical identity beyond raw HP/speed/reward. All 5 mechanics
  implemented in `js/enemy.js` (`applyDmg`) and `js/game.js` (story +
  endgame update/draw loops), verified in-browser via direct
  `spawnEnemy`/`applyDmg`/`update` simulation with no console errors.
  `docs/EnemyDesign.md` and `docs/Roadmap.md` updated.

## v1.7.4 — Wyvern Dive Bomb

### Added
- **🐉 Wyvern Dive Bomb mechanic**: Wyvern (ti=7) periodically (~every 5s,
  randomized first trigger) dives — moves at 1.5× speed for 1.2s and stuns
  1 random placed tower for 3s (stunned tower cannot acquire targets or
  fire). Implemented in both story and endgame combat loops (`js/game.js`:
  `_diveT`/`diveCd` on the enemy, `_stunT` on the tower).
- **Visuals**: diving Wyvern shows an enlarged shadow + speed-trail line;
  stunned towers show a pulsing orange overlay with a 💫 icon (mirrors the
  existing Shadow drain overlay pattern).

### Notes
- Gives Wyvern (previously "flying tank, no special") a distinct disruptor
  identity — rewards spreading tower coverage so no single stunned tower
  opens a path gap. Verified in-browser: spawning a Wyvern and running the
  update loop triggers `_diveT`/`_stunT` within ~5s, render pass produces no
  errors. `docs/EnemyDesign.md` updated.

## v1.7.3 — Awaken Cost Increase

### Changed
- **Awaken cost**: flat 300 → 350 gold for all tower types
  (`js/tower.js`: `canAwaken` threshold, popup button label, and
  `awakenTowerFromPopup` gold check/deduction).

### Notes
- Re-tunes the Awaken cost upward given the per-type Awaken effects added in
  v1.6.9 (e.g. Thunder chain 2→4, Support's double-boost). Verified
  in-browser: all three references (`canAwaken`, button label, deduction)
  consistently read 350, no console errors.

## v1.7.2 — Gold Reward Rounding

### Changed
- **Gold rewards rounded to nearest 5** for all enemy types
  (`js/game.js`, `DEFAULT_CFG.m_rew`): Goblin 8→10, Fire Spirit 18→20,
  Golem 28→30, Shield Knight 28→30, Shaman 12→10 (others already multiples
  of 5, unchanged).
- **Enemy HP re-derived to preserve reward/HP ratios** alongside the rounded
  rewards (`DEFAULT_CFG.m_hp`): Fire Spirit 130→144, Golem 220→236, Shield
  Knight 120→129 (shield `MSHIELD[8]` 80→86, `js/enemy.js`), Shaman 70→58.
  **Exception**: Goblin keeps HP=55 unchanged (first enemy players meet),
  accepting a higher reward/HP ratio (0.145→0.182) rather than raising its
  HP by 25%.

### Notes
- Net effect: ~+2% total reward economy shift, ratios preserved at
  ~0.125–0.143 for all enemies except Goblin (intentional). See
  `docs/BalanceSheet.md` → "Gold reward rounding (v1.7.2)" for the full
  before/after table. Verified in-browser: `DEFAULT_CFG.m_hp`/`m_rew` and
  `MSHIELD` load with the new values, no console errors.

## v1.7.1 — What's New Patch Notes Screen

### Added
- **📰 "What's New" screen**: clicking the version label on the main menu
  (`#verBtn`) opens a new player-facing patch-notes screen (styled like the
  leaderboard) listing recent updates in Thai, newest first. A small red
  unread-badge appears on the version label when there are notes the player
  hasn't seen yet (tracked via `localStorage.tq_lastSeenVer`), clearing once
  opened. (`js/ui.js`: `GAME_VERSION`, `PATCH_NOTES`, `openWhatsNew`,
  `renderWhatsNew`, `_updateNewsBadge`; `css/main.css`: `#whatsnew`,
  `.news-*`; `Tower Quest 🏰.html`: `#whatsnew` screen markup)
- Going forward, every future patch must add a corresponding entry to
  `PATCH_NOTES` (player-facing Thai summary) in addition to this changelog.

### Notes
- Purely additive UI feature — no gameplay, balance, or save-format changes
  (aside from the new `tq_lastSeenVer` localStorage key). Verified
  in-browser: badge shows when `tq_lastSeenVer` is unset/stale, opening the
  screen renders all 3 patch-note entries correctly and clears the badge, no
  console errors.

## v1.7.0 — Skeleton Splitter

### Added
- **💀 Skeleton Splitter mechanic**: when a Skeleton dies (and is not itself
  a split child), it spawns 2 smaller skeletons at 40% of its current max HP
  and reward each (combined 80% — reward/HP ratio unchanged at ~0.133).
  Children render at 0.65× size (`_sizeMult`) and carry an `_isSplit` flag so
  they cannot split again. (`js/enemy.js`, `_spawnSkeletonSplit`/`killEnemy`;
  `js/game.js` enemy draw loop applies `_sizeMult`)

### Notes
- Gives the previously "no special mechanic" Skeleton a distinct identity
  (Splitter), and rewards AoE towers (Cannon/Magic/Thunder) for cleaning up
  the spawned children. Total effective HP/reward per Skeleton spawn rises
  to ~180% of baseline — an intentional difficulty addition, not a reward
  economy change.
- Verified in-browser: killing a Skeleton spawns 2 children with hp=30,
  reward=4 (40% of 75/10), `_sizeMult=0.65`, `_isSplit=true`; killing a child
  spawns no further children. No console errors. `docs/EnemyDesign.md` and
  `docs/BalanceSheet.md` updated.

## v1.6.9 — Per-Type Awaken Effects

### Added
- **Unique Awaken effect per tower type**, on top of the existing generic
  bonus (+15% effective dmg, +13% rune bonus, per-type aura):
  - 💣 **Cannon**: splash radius ×1.5 when awakened.
  - ❄️ **Ice**: on-hit freeze (full stop) for 3s instead of the normal 45%
    slow for 2s — extended to 6s if an awakened 💚 Support is in range.
  - ✨ **Magic**: extra-shot chance 20%→40%, firing up to 3 total shots at
    the same target instead of 2.
  - 🎯 **Sniper**: shots now pierce in a straight line, damaging enemies
    behind the original target (within a narrow corridor, up to max range),
    respecting flying/shield rules.
  - 💚 **Support**: doubles the Awaken bonus of nearby awakened towers —
    Ice's freeze duration (3s→6s) and the Support→Gold Mine synergy gold
    bonus (+25%→+50%), via new `getSupportAwakenBoost()` (`js/tower.js`).
  - 💰 **Gold Mine**: gold production ×2.
  - ⚡ **Thunder**: chain target count 2→4.
  - 🏹 **Archer**: no Awaken-specific effect (per design table).

### Fixed
- Endgame (survival) mode's combat loop was missing the generic Awaken +15%
  damage bonus and the awakened-crit-chance bonus that story mode already
  had — both loops now apply Awaken bonuses consistently. (`js/game.js`)

### Notes
- `js/game.js` story-mode (~line 690) and endgame-mode (~line 1985) combat
  loops were updated in parallel to keep both modes consistent.
- Verified in-browser: spawned all 8 awakened tower types against test
  enemies — confirmed Cannon splash 0.8→1.2, Thunder chain 2→4, Ice
  freeze (slow=0, slowT≈6 with an awakened Support in range), Gold Mine
  production 2→6/tick (×2 base × doubled Support synergy), and Sniper
  pierce-line damaging an enemy behind the target while leaving off-line/
  out-of-range enemies untouched. No console errors. `docs/TowerDesign.md`
  and `docs/Roadmap.md` updated to reflect implementation status.

## v1.6.8 — Tower Visual Diversity Pass

### Changed
- **Awaken aura now per-element**: the 3D Awaken aura (halo rings, orbiting
  motes, energy beam) used a generic gold color for every tower type. It now
  uses each tower's own `TACCENT` accent color (e.g. red for Cannon, blue for
  Ice, purple for Magic, teal for Support, yellow for Gold Mine, etc.), so
  awakened towers visually match their element. (`js/tower.js`,
  `_buildAwakenAura3D`, `_sync3DTowerMesh`)
- **Idle animations for previously-static tower sprites**: Cannon, Ice,
  Sniper, Archer, and Gold Mine turrets were the only sprites with no idle
  motion (Magic/Support/Thunder already pulsed). Added subtle `Date.now()`-based
  idle effects to match: Cannon gets a pulsing muzzle heat-glow, Ice gets
  twinkling crystal-facet sparkles, Sniper gets a pulsing scope-lens glow,
  Archer's bowstring gently vibrates, and Gold Mine gets a pulsing golden ore
  glow. (`js/tower.js`, `_twWeapon`)

### Notes
- Purely visual — no changes to damage, range, fire rate, synergies, upgrade
  paths, or save format. Verified in-browser: Awaken aura color confirmed to
  match `TACCENT[type]` for all 8 tower types, and all 8 `_twWeapon` sprites
  render without console errors.

## v1.6.7 — Playtest Bugfixes

### Fixed
- **Stale wave counter on Retry**: after losing and pressing "Retry", the
  HUD wave counter (`#waveTxt`) used to keep showing the previous run's wave
  number (e.g. "4 / 5") even though the game state had correctly reset to
  wave 0. `initGame()` now resets `#waveTxt` to `0` alongside the existing
  `#maxWaveTxt` reset. (`js/game.js`, `initGame`)
- **Garbled leaderboard empty-state text**: the "All runs" leaderboard tab
  showed `"No records yetใดๆ"` (a stray Thai word concatenated onto the
  English string with no separator). Now reads `"No records yet"`, matching
  the "My Stats" tab. (`js/ui.js`, leaderboard render, `lbTab===1`)

### Notes
- Found via a full playtest pass (menu → story → combat → game over → retry
  → codex → leaderboard → endgame, desktop and 375px mobile). No save-format
  or balance changes. Verified in-browser with no console errors.

## v1.6.6 — AI Team Agent Guides

### Added
- New `agents/` folder with per-role guides
  ([agents/README.md](agents/README.md)) expanding the "AI Team" section of
  `CLAUDE.md` with project-specific file pointers, key locations, and
  working patterns for each role (Project Manager, Game Designer, System
  Architect, Lead Programmer, QA Tester, UI/UX Designer, Art Director,
  Animation Director, Prompt Engineer, Documentation Agent, Git Agent,
  Session Manager).
- `CLAUDE.md` now links to `agents/README.md`.

### Notes
- Documentation only — no game code, balance, or save changes.

## v1.6.5 — Boss Skill Telegraphs

### Added
- **Boss skill telegraph**: ~1 second before a boss (👹/👁️) uses its
  stage-based skill (Enrage / Summon / Self-heal), a pulsing aura ring +
  icon now appears around the boss (💢 red for Enrage, 🌀 purple for
  Summon, 💚 green for Self-heal), giving players advance warning.
  (`js/game.js`, boss skill loop ~line 663 and enemy draw loop ~line 1389)

### Notes
- Purely additive visual change — does not alter skill effects, damage,
  healing amounts, summon counts, or cooldown timings. No save/balance
  impact.
- Verified via simulated update loop: telegraph flag sets ~1s before skill
  fires and clears immediately when the skill triggers, with no console
  errors across repeated cycles.

## v1.6.4 — Tower Popup Clarity + Screen Transitions

### Changed
- **Tower popup (HUD clarity)**: now shows an effective **DPS** stat
  (damage × fire rate) for towers with both, and the damage stat displays
  an inline `(+X% synergy)` badge when an active synergy is boosting
  damage. (`js/tower.js`, `showTowerPopup`)
- **Screen transitions**: all `showScreen()` calls (stage select, gameplay,
  codex, dev panel, leaderboard, etc.) now fade/slide in via a
  `.screen-enter` CSS animation instead of an instant cut. End-of-stage/
  pause overlays (`.obox`) now pop in with a quick scale-fade.
  (`css/main.css`, `js/ui.js`)

### Notes
- No save-format or balance changes. Verified in-browser: tower popup shows
  correct DPS/synergy values (e.g. Magic tower with Ice synergy: 53 dmg
  "+20% synergy", DPS 42.4), codex screen fades in via `.screen-enter`, no
  console errors.

## v1.6.3 — Mobile Layout Fix

### Changed
- **Mobile layout (≤540px)**: gameplay screen (`#gp`) is now top-aligned
  instead of vertically centered, consolidating unused vertical space into
  a single block below the game UI instead of splitting it into bars above
  and below. (`css/main.css`, `@media (max-width:540px)`)

### Notes
- Canvas itself remains width-constrained (375×312.5 at 375px viewport) due
  to its 1.2:1 internal aspect ratio vs. portrait phone screens — full fix
  would require changing canvas internal resolution/grid (out of scope, see
  `docs/Roadmap.md`).
- Verified in-browser at 375×812: HUD, canvas, tower panel, dev panel, and
  codex all render correctly with no console errors.

## v1.6.2 — Tower/Monster Balance Tuning + Design Docs

### Changed
- **Cannon (💣)**: base damage 28 → 24 (DPS/Cost 0.672 → 0.576). Splash
  remains its differentiator without also leading raw single-target
  efficiency. (`js/game.js`, `DEFAULT_CFG.t_dmg`)
- **Magic (✨)**: base damage 38 → 44 (DPS/Cost 0.405 → 0.469). Now the
  clear premium AoE pick given its larger splash radius. (`js/game.js`,
  `DEFAULT_CFG.t_dmg`)
- **หมอผี Shaman (🧙)**: gold reward 18 → 12 (reward/HP 0.257 → 0.171),
  bringing it in line with other monsters (~0.13–0.15) while still
  rewarding priority kills. (`js/game.js`, `DEFAULT_CFG.m_rew`)

### Added
- New `docs/` folder with design references: `GDD.md`, `TowerDesign.md`,
  `EnemyDesign.md`, `BalanceSheet.md`, `Roadmap.md`. `BalanceSheet.md` is
  the canonical numeric reference for tower/enemy stats and must be kept
  in sync with `DEFAULT_CFG` changes.
- `CLAUDE.md` and `PROJECT_MASTER.md` now link to `docs/`.

### Notes
- No save-format or architecture changes. Verified in-browser: updated
  `CFG.t_dmg`/`CFG.m_rew` values load correctly with no console errors.

## v1.6.1 — CSS/JS Modularization

Structural-only refactor: split the monolithic `Tower Quest 🏰 v1.6.0.html`
into a shared stylesheet and five JS modules. No gameplay, save format, or
behavior changes — verified byte-for-byte that the new files reconstruct the
original `<style>`/`<script>` content exactly.

### Changed
- Extracted the inline `<style>` block into `css/main.css`, referenced via
  `<link rel="stylesheet">`.
- Extracted the inline `<script>` block into five files, loaded in order
  (load order is required — see PROJECT_MASTER.md → Architecture Overview):
  - `js/save.js` — persistence & achievements
  - `js/enemy.js` — enemy data, spawning, sprites
  - `js/tower.js` — tower data, synergies, sprites, 3D overlay, popup/upgrades
  - `js/game.js` — stages/config, game loop, weather, sound, endgame mode
  - `js/ui.js` — screens, cutscenes, codex, dev panel, leaderboard, button wiring
- `Tower Quest 🏰 v1.6.0.html` now contains only HTML head/body markup and
  the `<link>`/`<script src>` references (~430 lines, down from ~5,900).

### Notes
- `localStorage` keys (`tq_*`) and all gameplay logic are unchanged.

## v1.6.0 — Initial Project Snapshot

This entry marks the baseline snapshot of the project at the start of
documentation/refactor planning. v1.6.0 (`Tower Quest 🏰 v1.6.0.html`) is the
current development base.

### Snapshot Highlights
- 10-stage story campaign (Grassland → Dark Tower Summit) with per-stage
  paths, story cutscenes, and unlockable towers.
- 8 tower types (Cannon, Ice, Magic, Sniper, Support, Archer, Gold Mine,
  Thunder) with independent damage/range/rate upgrade paths, path-exclusive
  perks (e.g. pierce shield, rapid fire), runes, and an "Awaken" end-tier
  upgrade with 3D visual effects.
- 11 monster types (including flying enemies, shielded enemies, healer
  Shaman, and the Demon Lord final boss) with stage/wave-based scaling.
- Tower synergy system providing cross-type bonuses.
- Weather system affecting gameplay (fog, blizzard, lightning strikes,
  etc.) per stage.
- Endgame survival mode with 3 difficulties and a local leaderboard.
- Achievement system across story, combat, skill, endgame, and collection
  categories.
- In-game Codex (monster/tower encyclopedia) and Dev Panel (balance tuning,
  cheats, debug tools).
- Procedural canvas-based 2D art for towers/enemies plus an optional
  Three.js 3D tower-rendering overlay.
- All progress/save data persisted via `localStorage` (`tq_*` keys); no
  backend or build tooling.

### Documentation Added
- Added `CLAUDE.md` (assistant working guidelines).
- Added `PROJECT_MASTER.md` (full system reference: core, tower, enemy,
  save, UI, progression, and architecture overviews).
- Added scaffolding folders `css/`, `js/`, `assets/images/`,
  `assets/sounds/`, `assets/effects/` in preparation for a future refactor
  (no game code moved yet — pending approval).
