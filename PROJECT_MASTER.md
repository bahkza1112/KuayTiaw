# Tower Quest 🏰 — Project Master Reference

This document is a system-by-system map of the game as implemented in
[`Tower Quest 🏰.html`](Tower%20Quest%20%F0%9F%8F%B0.html) plus its
`css/main.css` and `js/{save,enemy,tower,game,ui}.js` modules (current
version **v1.12.0**). Line numbers refer to these files and
may drift as they change — use them as a starting point for searches, not as
permanent anchors.

For game design rationale, see [docs/GDD.md](docs/GDD.md),
[docs/TowerDesign.md](docs/TowerDesign.md), and
[docs/EnemyDesign.md](docs/EnemyDesign.md). For tunable numbers, see
[docs/BalanceSheet.md](docs/BalanceSheet.md). For pending work, see
[docs/Roadmap.md](docs/Roadmap.md).

---

## 1. Game Overview

**Tower Quest** is a Thai-language, single-player, browser-based tower
defense (TD) game. Since the v1.6.1 refactor it is delivered as
`Tower Quest 🏰.html` (~500 lines: head/body markup + `<link>`/`<script src>`
refs only) plus `css/main.css` (~590 lines) and five JS modules totaling
~6,700 lines (`js/save.js`, `js/enemy.js`, `js/tower.js`, `js/game.js`,
`js/ui.js`). `index.html` is a redirect entry point for GitHub Pages.

Key high-level elements:

- **Story Mode**: 11 stages (`STAGES`, `js/game.js` line 2), each with its own
  grid layout, enemy path, unlockable towers, and a story cutscene. Stage 11
  (🌑 Shadow Remnant, v1.9.0) is the true final stage (`isFinalStage`), 33
  total story stars.
- **Endgame / Survival Mode**: an infinite, difficulty-scaled wave survival
  mode unlocked after finishing story content (`openEgMenu` onward,
  `js/game.js` line 1945).
- **Codex**: an in-game encyclopedia of monsters and towers with stats,
  strengths/weaknesses, and lore (`renderCodex`, `js/ui.js` line 725).
- **Achievements**: a tracked set of unlockable achievements across story,
  combat, skill, endgame, and collection categories (`ACHIEVEMENTS`,
  `js/save.js`).
- **What's New**: an in-game patch-notes screen (`PATCH_NOTES`/
  `GAME_VERSION`, `js/ui.js` lines 2-3) showing recent updates, with an
  unread badge on the main-menu version label (v1.7.1).
- **Dev Panel**: an in-game tuning/debug panel for live-editing balance
  config, spawning monsters, and cheats (`renderDevPanel`, `js/ui.js`
  line 859).
- **Leaderboard**: local high-score tracking for story and endgame runs,
  including a dedicated Story tab (`openLeaderboard`, `js/ui.js` line 1239).

The game targets desktop browsers with mouse/touch input on an HTML5
`<canvas>` (`#cv`).

---

## 2. Core Systems

### Game State (`G`)
- `mkState()` (`js/game.js` line 175) creates the per-run game state object:
  gold, HP, wave number, arrays of `towers`, `enemies`, `projs`
  (projectiles), particles, damage numbers, FX rings/trails, combo counter,
  and weather state.
- `mkWeatherState()` (line 186) initializes the weather sub-state.

### Main Loop
- `initGame()` (line 292) sets up a stage run and starts a
  `requestAnimationFrame` loop (`loop()`, line 319) that calls `update(dt)`
  and `render()` each frame, with delta-time clamped to 0.1s and scaled by
  the `speed` multiplier (1x/2x/etc., toggled via UI). The endgame mode has
  its own parallel `loop()` (line 2026).
- `update(dt)` (line 577) is the central simulation tick: moves enemies
  along the path, applies status effects (heal auras, drain auras, boss
  skills, monster mechanics), runs tower targeting/firing, advances
  projectiles, resolves hits/kills, and updates particles/FX.
- `render()` (line 1112) draws the grid/terrain, path, towers, enemies,
  projectiles, and effects to the 2D canvas.
- `togglePause()`, `pausedRestart()`, `restartGame()`, `toggleAutoWave()`
  control run-level flow.

### Balance Configuration (`CFG`)
- `DEFAULT_CFG` (`js/game.js` line 119) defines all tunable balance numbers:
  stage/wave scaling multipliers, monster base HP/speed/reward arrays, tower
  damage/range/rate/cost arrays, starting gold, base HP, spawn interval, etc.
- `CFG` is a deep copy of `DEFAULT_CFG`, optionally overridden from
  `localStorage['tq_cfg']` (set via the Dev Panel). `devReset()`
  (`js/ui.js` line 1010) restores defaults.

### Weather System
- `WEATHERS` (`js/game.js` line 195) and `STAGE_WEATHER` (line 221) define
  per-stage weather pools (fog, blizzard, lightning, etc.) with gameplay
  modifiers (range, splash, gold, dodge, slow effects).
- `rollWeather()`, `applyWeather()`, `clearWeather()`, `getWeatherColor()`,
  `showWeatherWarning()` manage activation, visuals, and cleanup.
- `applyLightningStrike()` (line 276) is a periodic hazard that strikes a
  portion of the player's towers during lightning weather.

### Audio
- A small WebAudio-based SFX engine (`_getAC` line 387, `_resumeAC`,
  `_playSound`) procedurally synthesizes sound effects (no audio files) for
  tower fire types, hits, deaths, UI actions, etc. Controlled by `_sfxVol`,
  `_sfxOn`, and `toggleSfx()`. (`js/game.js`)

### Tutorial
- `_TUT_STEPS` (`js/ui.js` line 333) and `initTutorial()` / `_renderTut()` /
  `skipTutorial()` drive a first-run guided tutorial overlay, gated by
  `localStorage['tq_tut_done']`.

---

## 3. Tower Systems

### Tower Roster (9 types, indices 0–8)
Defined via parallel arrays in `js/tower.js`:

| # | Name (TH) | Icon | Role |
|---|-----------|------|------|
| 0 | ปืนใหญ่ (Cannon) | 💣 | Splash/AoE damage |
| 1 | น้ำแข็ง (Ice) | ❄️ | Slow/crowd control |
| 2 | เวทมนตร์ (Magic) | ✨ | Splash + magic damage |
| 3 | สไนเปอร์ (Sniper) | 🎯 | High single-target damage, hits air, pierces shields |
| 4 | ซัพพอร์ต (Support) | 💚 | Buffs nearby towers (no direct damage) |
| 5 | ธนู (Archer) | 🏹 | Hits air targets |
| 6 | เหมืองทอง (Gold Mine) | 💰 | Generates gold over time, no combat |
| 7 | สายฟ้า (Thunder) | ⚡ | Chain lightning (2 targets), pierces shields |
| 8 | ป้อมมนตราโมฆะ (Void Tower) | 🌑 | Single-target, ground-only; projectiles apply **Void Mark** (v1.12.0) |

Per-type properties are defined via arrays: `TCOLORS`, `TPROJ` (projectile
colors), `TACCENT`, `TSPLASH` (splash radius), `TSLOW` (slow %), `TBUFF`
(support flag), `TCANAIR` (can hit flying enemies), `TGOLDMINE` (gold
generation), `TCHAIN` (chain-lightning target count), `TPIERCE` (shield
pierce). Flavor text, tags, and strengths/weaknesses for the Codex are in
`TFLAVOR` (`js/tower.js` line 13), `TTAGS`, `TSTRENGTH`, `TWEAKNESS`.

### Void Tower (v1.12.0)
- 🌑 **ป้อมมนตราโมฆะ** (index 8): dmg 38, range 3.0, rate 0.6, cost 90,
  single-target, ground-only (not in `TCANAIR`). Stats live in
  `CFG.t_dmg`/`t_rng`/`t_rate`/`t_cost` (`js/game.js`) and the per-tower
  parallel arrays in `js/tower.js` alongside the other 8 types.
- **Void Mark**: its projectiles have a 30% chance (50% if Awakened) to mark
  the target, increasing damage taken from ALL towers by 25% (40% if
  Awakened) for 4s. Marks refresh on re-proc but do not stack (capped via
  `Math.max`). Implemented via `_voidMarkT`/`_voidMarkBonus` per-enemy fields
  — proc/refresh in the projectile hit-handling block, per-frame decay in the
  enemy update loop, and the multiplier applied in `applyDmg()`
  (`js/enemy.js`).
- **Unlock**: gated behind `tq_voidUnlocked` (see Workshop, §7).

### Stats & Scaling
- `getTowerDmg(t, lv, star)`, `getTowerRange(t, lv)`, `getTowerRate(t, lv)`
  (`js/tower.js` lines 60-62) compute per-level stats from
  `CFG.t_dmg/t_rng/t_rate` with linear growth per level (+25% dmg, +15%
  range, +10% rate per level above 1). `getTowerDmg` also applies a
  **base-damage bonus per ★** gained via Star Merge, via the
  `STAR_DMG_BONUS=[0,.15,.3,.5]` lookup table (v2.1.1): ★1=+0%, ★2=+15%,
  ★3=+30%, ★4=+50%, independent of `dmgLv` — e.g. a ★4 tower's base damage
  is +50% before any skill points are spent on the damage track.
- Each placed tower (`G.towers[i]`) tracks independent `dmgLv`, `rngLv`,
  `rateLv` (free skill points spent via Star Merge — see Progression) plus
  `lv` (derived: `(dmgLv-1)+(rngLv-1)+(rateLv-1)+1`, max `star+1`, capped at
  5), `star` (1-4, see Progression), position (`col`, `row`), and turret
  `angle`.

### Targeting, Firing & Projectiles
- During `update(dt)`, each tower scans `G.enemies` within
  `getTowerRange()` (adjusted by weather `rangeMult`), selects the
  furthest-along-path valid target (respecting air/shield rules via
  `TCANAIR`/`TPIERCE`), and fires on a cooldown derived from
  `getTowerRate()`.
- Projectiles are pushed into `G.projs` with damage, splash radius, slow,
  crit chance, pierce, and chain-lightning data computed per shot
  (`getBuffMult`, etc., `js/game.js` story ~line 790 / endgame ~line 2231).
- `applyDmg(e, dmg, towerType, forcePierce)` (`js/enemy.js` line 81) applies
  damage to an enemy, handling shields (`MSHIELD`) and per-monster special
  mechanics (dodge, flare resist, armor crack) before pierce-through logic.

### Buffs
- `getBuffMult(col, row)` (line 63) applies Support tower buff auras.

### Tower Selection, Placement & Popup UI
- `selectedTowersForStage` limits which tower types are usable per stage
  (`renderTowerSelection`, `toggleTowerSelection`, `confirmTowerSelection`),
  constrained by `stageMaxTowers` and `STAGES[i].unlockedTowers`.
- `onCanvasClick`, `onCanvasHoldStart/End` handle placement and long-press
  interactions on the grid.
- `showTowerPopup` / `hideTowerPopup` render the per-tower action popup:
  free, permanent skill-point allocation across dmg/range/rate
  (`upgradeTowerFromPopup`, see Progression → Star Merge), sell
  (`sellTowerFromPopup`, with partial gold refund), and "Awaken"
  (`awakenTowerFromPopup`, `js/tower.js`) — a late-game power-up (350 gold
  flat, raised from 300 in v1.7.3). The popup also shows an effective
  **DPS** stat (v1.6.4).

### Awaken System (v1.6.8 / v1.6.9, generic bonus removed v1.11.0, gated on ★3+ v2.0.0)
- Awaken no longer grants a generic damage bonus (the +15% effective
  damage bonus was removed in v1.11.0 alongside the Rune system). Awakened
  towers are visually highlighted via the 2.5D sprite's aura glow
  (`_twAura`, tinted with the tower's own `TACCENT` color, v1.12.8).
- Since v2.0.0, Awaken requires the tower to be at least 3★ (merged twice)
  and permanently locks its `star`/skill points — see Progression → Star
  Merge.
- **Per-type unique effects**:
  - 💣 **Cannon**: splash radius ×1.5.
  - ❄️ **Ice**: on-hit freeze (full stop) for 3s instead of 45% slow for 2s
    — extended to 6s if an awakened 💚 Support is in range.
  - ✨ **Magic**: extra-shot chance 20%→40%, up to 3 total shots per target.
  - 🎯 **Sniper**: shots pierce in a straight line, damaging enemies behind
    the target (narrow corridor, respects flying/shield rules).
  - 💚 **Support**: doubles nearby awakened towers' Awaken bonuses (Ice
    freeze 3s→6s) via `getSupportAwakenBoost()` (line 112).
  - 💰 **Gold Mine**: gold production ×2.
  - ⚡ **Thunder**: chain target count 2→4.
  - 🏹 **Archer**: no Awaken-specific effect.
- Story-mode and endgame combat loops apply these per-type effects
  consistently (mirrored code paths).

### Visual Rendering
- 2.5D sprites (`js/tower.js`): `drawTowerIcon` composites a per-type aura
  glow (`_twAura`), the cached static body sprite (`_bldSC`/`_twStatic`,
  with AO contact shadow and shaded body gradient), a level-progress ring
  (`_twLevelRing`, shown at Lv.2/Lv.3), and the rotating weapon/decal layer
  (`_twDecal`, `_twWeapon`) with drop shadows for depth. Every tower type has
  an idle animation (v1.6.8 added the last 5 — Cannon muzzle heat-glow, Ice
  crystal sparkles, Sniper scope-lens glow, Archer bowstring vibration, Gold
  Mine ore glow; Magic/Support/Thunder already pulsed).
- The optional Three.js 3D tower overlay (`#gl3d`, `_init3D`/
  `_buildTowerMesh3D`/`_sync3DTowerMesh`/`_render3D`) was removed in
  v1.12.10 — gameplay now renders exclusively via the 2.5D sprite system
  above (disabled in v1.12.8, code removed in v1.12.10).

---

## 4. Enemy Systems

### Monster Roster (11 types, indices 0–10)
Defined via parallel arrays in `js/enemy.js`:

| # | Name (TH) | Icon | Notes |
|---|-----------|------|-------|
| 0 | โกบลิน (Goblin) | 👺 | Fast, swarms |
| 1 | โครงกระดูก (Skeleton) | 💀 | Balanced |
| 2 | เงามืด (Shadow) | 👻 | — |
| 3 | วิญญาณไฟ (Fire Spirit) | 🔥 | Flying (`MISAIR`) |
| 4 | บอส (Boss) | 👹 | High HP, large sprite, boss skills |
| 5 | โกเลม (Golem) | 🪨 | Tanky, type 1 (resistant to certain dmg) |
| 6 | ค้างคาว (Bat) | 🦇 | Flying |
| 7 | วิเวิร์น (Wyvern) | 🐉 | Flying |
| 8 | ชิลด์ไนท์ (Shield Knight) | 🛡️ | Has shield HP (80), needs pierce |
| 9 | จอมมาร (Demon Lord) | 👁️ | Final boss, shield HP 250, type 1 |
| 10 | หมอผี (Shaman) | 🧙 | Heals/buffs nearby allies |

Supporting arrays: `ESIZES` (sprite sizes, `js/enemy.js` line 5), `MFLAVOR`
(line 6)/`MTRIBE`/`MSTRENGTH`/`MWEAKNESS`/`MSPECIAL` (Codex text), `MTYPE`
(0=normal, 1=resistant — bosses & golem), `MISAIR` (flying flag), `MSHIELD`
(starting shield HP).

### Stats & Scaling
- `getEnemyHP(ti, si, wave)` (`js/enemy.js` line 63) and `getEnemySpd(ti, si)`
  scale base HP/speed by stage index (`CFG.stageMult`, `CFG.spdStageMult`)
  and wave number (`CFG.waveMult`), capped by `CFG.spdCap`. Shield HP scales
  similarly with stage in `spawnEnemy`.
- Weather can modify spawned HP via `G.weather.hpMult`.

### Spawning & Waves
- `startWave()` (`js/game.js` line 495) computes the number of enemies for
  the wave (`CFG.enemyPerWaveBase + wave * CFG.enemyPerWaveInc`, scaled by
  `currentStage.enemyMult`), picks enemy types from `currentStage.enemyTypes`
  (capped by wave progression, reordered for stages 1-11 in v1.9.1-v1.9.3 to
  ensure smooth ascending-HP rotation), and rolls boss spawns via
  `bossChance`.
- `spawnEnemy(ti)` (`js/enemy.js` line 129) instantiates an enemy object with
  HP, shield, position (start of `currentPath`), and spawn FX/sound; type 9
  (Demon Lord) has special "final boss" entrance effects.

### Movement, Special Behaviors & Death
- Enemies move along `currentPath` (per-stage waypoint list) in `update(dt)`,
  interpolating between waypoints based on speed.
- **Shaman (10)**: periodically heals nearby allies for 18% of its base HP
  within a 2.5-cell radius.
- **Shadow-type drain**: a drain-aura mechanic affecting nearby
  towers/players within 2.2 cells.
- **Boss skills**: bosses execute stage-dependent skills
  (`skillType = stage.id % 3`) — Enrage / Summon / Self-heal — telegraphed
  ~1s in advance via a pulsing aura + icon (💢/🌀/💚, v1.6.5).
- `killEnemy(e)` (`js/enemy.js` line 179) awards gold/score (with combo
  multiplier via `G.comboN`), triggers death FX/particles, achievement hooks
  (`_onKillForAch`), and removes the enemy.
- Reaching the end of the path damages `G.hp` (base fortress HP,
  `CFG.baseHP`).

### Per-Monster Special Mechanics (v1.7.0 / v1.7.4 / v1.8.0)
Every monster type (0-10) has a distinct mechanical identity beyond raw
HP/speed/reward, described to players via `MSPECIAL[i]` (`js/enemy.js`
line 18, shown in the Codex monster detail panel):
- **👺 Goblin (0) — Pack Rush**: +20% movement speed while another Goblin is
  within 1.2 cells (`_packBoost` flag, green dust trail). `js/game.js`
  ~line 598/2103.
- **💀 Skeleton (1) — Splitter**: on death (if not itself a split child),
  spawns 2 children at 40% HP/reward each (0.65× size, `_isSplit`/
  `_sizeMult`), via `_spawnSkeletonSplit()` (`js/enemy.js` line 166).
- **👻 Shadow (2)**: drain aura (see above).
- **🔥 Fire Spirit (3) — Scorch Flare**: every ~6s, flares for 1.5s taking
  30% less damage (`_flareT`, `js/enemy.js` line 92; pulsing orange ring +
  popup in `js/game.js`).
- **👹 Boss (4) / 👁️ Demon Lord (9)**: stage-based telegraphed skills (see
  above).
- **🪨 Golem (5) — Armor Crack**: starts with 24% damage reduction
  (`_armorPct`) that cracks to 16%/8%/0% as HP drops below 75%/50%/25%
  (`js/enemy.js` lines 93-125, extra crack lines on sprite).
- **🦇 Bat (6) — Erratic Dodge**: 25% chance to dodge any hit entirely
  ("MISS!" popup + white flicker ring, no damage applied; `js/enemy.js`
  lines 83-88).
- **🐉 Wyvern (7) — Dive Bomb**: every ~5s, dives at 1.5× speed for 1.2s and
  stuns 1 random placed tower for 3s (`_diveT`/`diveCd` on the enemy,
  `_stunT` on the tower; `js/game.js` ~line 685-693/2158-2166). Stunned
  towers cannot acquire targets or fire and show a pulsing 💫 overlay.
- **🛡️ Shield Knight (8) — Shield Regen**: regenerates 15% of max shield/sec
  after 4s without taking damage (`_noDmgT`, `js/game.js` ~line 713/1493,
  pulsing blue ring while regenerating).
- **🧙 Shaman (10)**: heal aura (see above).

All 5 v1.8.0 mechanics implemented in `js/enemy.js` (`applyDmg`) and
`js/game.js` (story + endgame update/draw loops, kept in parallel).

### Visual Rendering
- `drawEnemySprite(ctx, ti, x, y, sz, mv)` (`js/enemy.js`) procedurally draws
  each monster's canvas sprite with type-specific shapes, gradients, eyes,
  and idle animations (flame flicker, wing flap, pulsing shields/auras for
  Demon Lord, etc.). All 11 types now have idle motion (v1.9.5/v1.9.8 added
  the last 5: Goblin/Skeleton/Shadow/Golem/Shield Knight and Fire
  Spirit/Boss/Dark Lord/Shaman).
- **Speed-synced movement (v1.9.7)**: the optional `mv={dir,spd}` argument
  (`dir`=travel-direction angle from the current path segment, `spd`=
  effective speed multiplier incl. slow/enrage/dive) drives a universal
  "walk lean" toward travel direction plus per-type bob/wing-flap frequency
  scaling. Computed at the shared `render()` call site (`js/game.js`), used
  by story + endgame; the Codex preview (`js/ui.js`) omits `mv` and falls
  back to defaults.

---

## 5. Save Systems

All persistence is via browser `localStorage`, namespaced with `tq_` keys.
There is no server/backend or file-based save.

| Key | Purpose | Managed by |
|-----|---------|------------|
| `tq_progress` | Per-stage star ratings / clear status (drives stage unlocks) | `loadProgress()`, `saveProgress()` (`js/save.js` lines 3-4) |
| `tq_seen` | Set of monster IDs encountered (Codex unlock tracking) | `seenMonsters` (`js/save.js` line 18), `unlockMonster()` (line 180) |
| `tq_ach` | Set of unlocked achievement IDs | `loadAchievements()`, `_saveAch()` (`js/save.js`) |
| `tq_ach_seen` | Achievement IDs already shown to the player (badge logic) | `_updateAchBadge()` (`js/save.js`) |
| `tq_achstats` | Running stats used to evaluate achievement conditions (kills, combos, scores, no-damage waves, etc.) | `loadAchStats()`, `saveAchStats()` (`js/save.js`) |
| `tq_cfg` | Dev-panel overrides to `DEFAULT_CFG` (balance tuning persistence) | written by `devSave()` (`js/ui.js` line 1096), cleared by `devReset()` (line 1010) |
| `tq_runs` | History of endgame survival runs (for leaderboard / best-wave stats) | written around endgame end, read in `checkAchievements()` and `renderLb()` |
| `tq_sel_*` | Per-stage saved tower-selection loadouts (key suffix likely stage id) | read/written around tower selection flow |
| `tq_last_name` | Last-used player name (for leaderboard entries) | `showSavePrompt`/`confirmSave` (`js/ui.js`) |
| `tq_tut_done` | Whether the first-run tutorial has been completed/skipped | `initTutorial()`, `skipTutorial()` |
| `tq_lastSeenVer` | Last `GAME_VERSION` the player has seen in "What's New" (drives unread badge on `#verBtn`) | `openWhatsNew()`, `_updateNewsBadge()` (`js/ui.js`) |
| `tq_gems` | Soul Gems currency (v1.12.0) | `loadGems()`/`saveGems()`/`addGems()` (`js/save.js`) |
| `tq_materials` | Craftable materials `{0,1,2}` = 🪨 เศษหินมืด / 🔘 แกนเวทอสูร / 🌟 ผงดาวตก (v1.12.0) | `loadMaterials()`/`saveMaterials()`/`addMaterial()` (`js/save.js`) |
| `tq_voidUnlocked` | Whether the Void Tower (index 8) has been crafted/unlocked (v1.12.0) | `isVoidUnlocked()`/`setVoidUnlocked()` (`js/save.js`) |

Notes:
- `isStageUnlocked(si)` (`js/save.js` line 12) gates story progression based
  on `tq_progress`.
- `getUnlockedTowers()` (line 168) derives the set of usable tower types
  from progress (towers unlock as stages are cleared, per `STAGES[i].unlocks`).
- Endgame results flow through `showSavePrompt` → `confirmSave`/`skipSave`
  → leaderboard/run history persistence.

---

## 6. UI Systems

### Screen/Overlay Management
- `hideAll()` (`js/ui.js` line 204) and `showScreen(id, flex)` (line 205)
  toggle visibility of top-level screen containers by element ID: `#mm`
  (main menu), `#stagesel` (stage select), `#gp` (game play / HUD + canvas),
  `#codex`, `#devpanel`, `#egmenu` (endgame menu), `#leaderboard`,
  `#whatsnew` (What's New), `#towersel` (tower-selection screen), `#storyscr`
  (story screen), and `#cutscene`.

### Main Menu & Stage Select
- `updateMenuStats()` (1559) populates best-stage, total stars, and stage
  icon summary on the main menu.
- `openStageSelect()` / `renderStageSelect()` (1579–1631) render the stage
  grid with lock state, star ratings, and enemy-type previews per
  `STAGES`.
- `startStage()` / `_doStartStage()` (1632–1669) handle stage entry,
  including story/cutscene gating.

### Cutscenes & Story
- `CUTSCENES` data (`js/ui.js` line 1117) plus `showCutscene`,
  `renderCsSlide`, `typeText` (typewriter effect), `csAdvance`,
  `showStoryScreen` drive the per-stage narrative slides shown before/after
  stages.

### HUD & In-Game UI
- `updateHUD()` (2280) refreshes gold, HP, wave, and score displays during
  play.
- `showWavePreview` / `hideWavePreview` (4361–4386) preview upcoming enemy
  composition.
- `showToast()` (2290) and `addParticle()` (2286) provide transient
  on-screen feedback.
- `_pushDmgNum()` (2205) spawns floating damage numbers.
- Weather banner/HUD elements (`#weatherBanner`, `#weatherHud`) reflect
  active weather.
- Achievement toast notifications via `_showNextAchNotif`/`unlockAchievement`
  (1250–1284), with a badge counter (`_updateAchBadge`).

### Codex
- `openCodex()`, `switchCdxTab()`, `selectCodex()`, `renderMonsterDetail()`,
  `renderCodex()`, `sRow()` (4725–4888) implement a tabbed monster/tower
  encyclopedia with stat bars, strengths/weaknesses, and unlock-gated entries
  (gated by `seenMonsters` / `getUnlockedTowers`).

### Dev Panel
- `openDev()`, `closeDev()`, `switchDevTab()`, `renderDevPanel()`,
  `renderDevCurve()`, `renderDevMonster()`, `renderDevTower()`,
  `renderDevCheat()`, `dSlide()`/`dsc()` (sliders), `drawCurveGraph()`,
  `cheat()`, `devReset()`, `renderDevDebug()`, `devSave()` (4889–5277) form a
  multi-tab debug/tuning UI: balance curve editor, monster/tower stat
  editors, cheat commands, and a debug log, persisting overrides to
  `tq_cfg`.

### Endgame & Leaderboard UI
- `openEgMenu()`, `selectDiff()`, `getEgStats()`, `startEndgame()`,
  `initEgGame()`, `startEgWave()`, `updateEg()`, `endEgGame()`,
  `surrender()`, `showEgResult()` (`js/game.js`) implement the endgame
  menu/run loop, separate from the story-mode loop but reusing core
  rendering/combat functions.
- `openLeaderboard()`, `switchLbTab()` (`js/ui.js` line 1243), `renderLb()`
  display saved run history. **4 tabs** (v1.9.9 added tab 3): My Stats, All
  (with a `.lb-note` clarifying Endgame/Story use different score scales),
  Endgame, and **⚔️ Story** (`lbTab===3`, top 20 story runs by score). "My
  Stats" also shows "Best Story Score" and "Achievements" (unlocked/total).

### Settings Overlay (v1.10.0)
- ⚙ button opens `#settingsScreen`, consolidating game speed (1x/2x/3x),
  SFX on/off + volume slider, and Auto Wave toggle into one menu
  (`openSettings`/`closeSettings`). Opening it auto-pauses gameplay
  (`_settingsPausedGame`) if not already paused. Replaces the old standalone
  `#speedBtn`/`#sfxBtn` HUD buttons (now hidden but still state-synced).

### Tower Placement (v1.10.0 / v1.10.1)
- **Drag-to-place**: dragging a `.tbtn` tower button onto the canvas places
  the tower at drop via the shared `tryPlaceTower(type,col,row)` helper
  (extracted from `onCanvasClick`), with a floating `#dragGhost` icon
  following the cursor. Click-select-then-click-place still works as an
  alternative flow.
- **Hold-to-sell removed** (v1.10.1): holding a pointer on a placed tower no
  longer auto-sells it after 600ms (`onCanvasHoldStart/End`, `holdTimer`,
  `#sellTooltip` all removed — too easy to trigger by accident). Selling is
  only via the 🗑 Sell button in the tower info popup.

### Workshop (v1.12.0)
- New `#workshop` screen + `#workshopBtn` on the main menu
  (`openWorkshop()`/`renderWorkshop()`). Shows current Soul Gems and
  materials, and a craft button for the Void Tower via `VOID_RECIPE`
  (`js/ui.js`: 💎800 + 🪨×30 + 🔘×15 + 🌟×8).
- `craftVoidTower()` deducts the recipe cost and calls `setVoidUnlocked()`
  (`tq_voidUnlocked=1`), permanently adding the Void Tower (index 8) to the
  endgame tower-selection pool.
- `#mmGemsDisplay` on the main menu shows the live Soul Gems balance
  (`updateMenuStats()`).

### What's New / Patch Notes (v1.7.1)
- `GAME_VERSION` and `PATCH_NOTES` (`js/ui.js` lines 2-3) — array of
  `{ver,date,title,notes}` entries, newest first, player-facing Thai text.
- `openWhatsNew()` / `renderWhatsNew()` (`js/ui.js` lines 155/161) render a
  leaderboard-styled screen (`#whatsnew`) listing all patch notes.
- `_updateNewsBadge()` (line 171) shows a red unread-badge on the main-menu
  version label (`#verBtn`) when `localStorage.tq_lastSeenVer` is older than
  `GAME_VERSION`; clears on opening the screen.
- **Mandatory going forward** (per `CLAUDE.md`): every gameplay
  patch/update must add a new first `PATCH_NOTES` entry, bump
  `GAME_VERSION`, update `<title>`/`#verBtn` in `Tower Quest 🏰.html`, add a
  `CHANGELOG.md` entry, and sync any changed monster/tower ability into the
  Codex (`MSPECIAL`/tower descriptions).

---

## 7. Progression Systems

### Stage Progression
- 11 stages (`STAGES`, `js/game.js` line 2), each defining: grid path,
  available enemy types, `unlockedTowers`, `maxTowers`/`stageMaxTowers`,
  `bossChance`, `enemyMult` (difficulty scaling), `unlocks` (tower or item
  unlocked on clear), background/path/grass colors, and Thai story text.
- Clearing a stage with ≥1 star unlocks the next stage
  (`isStageUnlocked`) and any associated tower unlock
  (`getUnlockedTowers`).
- Star rating (0–3) per stage is computed in `endGame()` (2385) based on
  performance (e.g., remaining HP) and saved via `saveProgress()`.

### Tower Upgrade Paths — Star Merge System (v2.0.0)
- Replaces the old gold-cost per-level upgrade system entirely. Each placed
  tower has a `star` rating (1-4, default 1 on placement). Dragging one
  tower onto another tower of the **same type and star** (neither
  Awakened, `star<4`) merges them: both are removed and a new tower of
  `star+1` spawns at the target's position with `dmgLv/rngLv/rateLv` reset
  to 1 (`tryMergeTowers`, `js/game.js`).
- Each tower gets a free skill-point pool equal to its `star` rating
  (1★=1pt ... 4★=4pt), spent across the three independent stat tracks —
  damage (`dmgLv`), range (`rngLv`), rate (`rateLv`) — via
  `upgradeTowerFromPopup(stat)` (`js/tower.js`), at **no gold cost**. Once
  allocated, points are **permanent** (no reset/reallocation) — the only
  way to get a fresh point pool is to Star Merge into a higher ★, which
  resets `dmgLv/rngLv/rateLv` to 1 (v2.0.1, removed the earlier
  `resetTowerPointsFromPopup`).
- Path-exclusive perks (e.g., pierce shield, rapid fire) are unlocked at
  certain `dmgLv/rngLv/rateLv` levels along the range/rate trees (per
  recent commit history) — unchanged, since the underlying level formulas
  and caps (`lv` max 5) are reused as-is.
- "Awaken" (`awakenTowerFromPopup`, `js/tower.js`) requires `star>=3` and is
  an end-tier upgrade granting a significant power boost, a distinct sprite
  aura glow, and **permanently locks the tower's star level** — Awakened
  towers can no longer be merged or have skill points reallocated.
- Drag-to-merge is implemented as a separate `pointerdown`/`pointermove`/
  `pointerup` layer on the canvas (`onCanvasPointerDown`, `_onTwrDragMove`,
  `_onTwrDragUp`, `js/game.js`), coexisting with the tower popup `click`
  handler and toolbar drag-to-place via a `_suppressNextClick` guard.

### Achievements
- `ACHIEVEMENTS` (1196) and `ACH_CATS` (1223) define ~category-grouped
  achievements (story, combat, skill, endgame, collect).
- `checkAchievements()` (1285) evaluates unlock conditions against
  `tq_progress`, `tq_achstats`, monster-collection (`tq_seen`), tower
  unlocks, and endgame run history (`tq_runs`).
- Per-event hooks `_onKillForAch`, `_onComboForAch`, `_onScoreForAch`,
  `_onWaveEndForAch` (1320–1349) update running stats during play.

### Codex / Collection
- Monsters are revealed in the Codex as they're encountered
  (`unlockMonster()`, `tq_seen`), and towers as they're unlocked through
  story progression.

### Endgame Progression
- Endgame mode (`startEndgame()`, 5311) offers 3 difficulties
  (`EG_DIFF_NAMES`: ง่าย/ปกติ/ยาก, multipliers `EG_DIFF_MULT`), uses a fixed
  path (`EG_PATH`, based on stage 2's layout), and tracks best
  wave/score per difficulty for the leaderboard (`tq_runs`,
  `getEgStats()`).
- **Endgame tower selection** (v1.12.0): `startEndgame()` is now a thin
  wrapper calling `openEgTowerSelection()` (`js/ui.js`), which sets the
  shared `towerSelMode='endgame'` and reuses the `#towersel` screen. Selects
  up to 7/6/5 towers for ง่าย/ปกติ/ยาก (`egDiff` 0/1/2) from the pool
  `[0-7]` plus `8` (Void Tower) if `tq_voidUnlocked`. Selections persist per
  difficulty via `tq_sel_endgame_<egDiff>`. After confirming, `_doStartEndgame()`
  (holding the original `startEndgame` body) runs using
  `selectedTowersForStage` for `currentStage.unlockedTowers`.

### Soul Gems & Materials (v1.12.0)
- **Soul Gems** (`tq_gems`): awarded on first-time story star improvements
  per `GEM_STAR_TABLE=[0,10,20,30]` (cumulative — 1★/2★/3★ → 10/20/30 gems,
  `saveProgress()`), and on endgame run end via
  `awardEndgameGems(finalWave,diff)` =
  `floor(floor(finalWave/2)*(1+egDiff*0.5))`, called from `endEgGame()` and
  the Endgame branch of `surrender()`.
- **Materials** (`tq_materials`, `{0,1,2}` = 🪨 เศษหินมืด / 🔘 แกนเวทอสูร /
  🌟 ผงดาวตก): dropped only at end-of-wave in Endgame via
  `rollEndgameMaterialDrops()`, using fixed per-`egDiff` rates in
  `MAT_DROP_RATES` (not wave-scaled).
- Both currencies feed the Workshop (see §6) and ultimately unlock the Void
  Tower.

---

## 8. Architecture Overview

Since the v1.6.1 refactor, the layout is split into a shared CSS file and
five JS modules, loaded via `<link>`/`<script src>` from
`Tower Quest 🏰.html`. All scripts still execute as classic (non-module)
scripts sharing one global scope, so **load order matters** and must not be
changed without re-checking dependencies. `index.html` is a thin redirect to
`Tower Quest 🏰.html` for GitHub Pages.

```
┌─────────────────────────────────────────────────────────────┐
│  Tower Quest 🏰.html      (~500 lines: head + body markup)   │
│  index.html               (GitHub Pages redirect)             │
│                                                                │
│  <link rel="stylesheet" href="css/main.css">  (~590 lines)    │
│                                                                │
│  <body> ... DOM containers for every screen/overlay,          │
│             referenced by ID from the scripts                 │
│                                                                │
│  <script src="js/save.js">    (~300 lines) ── load order ↓    │
│  <script src="js/enemy.js">   (~610 lines)                    │
│  <script src="js/tower.js">   (~810 lines)                    │
│  <script src="js/game.js">    (~2400 lines)                   │
│  <script src="js/ui.js">      (~1520 lines) ── must load last │
└─────────────────────────────────────────────────────────────┘
```

### Visual "Glow Pass" (v1.9.10–v1.9.19)
A series of purely-visual `css/main.css` passes added a consistent
gradient + glow language across nearly every screen: main menu (parallax
clouds/mountains, embers, custom SVG icons, staggered fade-in), battle HUD
(pill-style stat items, glowing HP bar, pulsing send-wave button), tower
panel/popup, stage/tower select, endgame menu, codex, rankings, cutscenes,
save/weather overlays, achievement notifications, and toasts/tooltips
(bounce/pop-in animations). Dev Panel (`#devpanel`) was intentionally left
unstyled (internal tool only). No gameplay/save changes from any of these.

**File responsibilities:**
- **`css/main.css`** — all CSS for menus, HUD, overlays, animations
  (verbatim former `<style>` block).
- **`js/save.js`** — persistence layer: `loadProgress`/`saveProgress`,
  achievements + achstats, `getUnlockedTowers`/`unlockMonster`,
  endgame save-prompt flow. Defines `ACHIEVEMENTS`/`ACH_CATS`.
- **`js/enemy.js`** — enemy static data (`ENAMES`, `EICONS`, `ESIZES`,
  `MFLAVOR`/`MTAGS`/etc.), `getEnemyHP`/`getEnemySpd`, damage-number FX,
  `applyDmg`, `spawnEnemy`, `killEnemy`, `drawEnemySprite` and helpers.
- **`js/tower.js`** — tower static data (`TNAMES`, `TICONS`, per-type stat
  arrays), `getTowerDmg/Range/Rate`, sprite drawing
  (`drawTowerIcon`/`_tw*`), and the tower popup/upgrade/awaken/sell
  functions.
- **`js/game.js`** — `STAGES`/`DEFAULT_CFG`/`CFG`, grid/state setup
  (`mkState`, `setStage`), weather system, game lifecycle (`initGame`/`loop`,
  `restartGame`, `goNextStage`, etc.), sound system, `startWave`, `endGame`,
  the core `update(dt)` and `render()` loops, canvas input handlers, and the
  endgame survival mode (`openEgMenu` ... `surrender`).
- **`js/ui.js`** — screen management (`showScreen`/`hideAll`), stage select,
  tutorial, cutscene engine + `CUTSCENES` data, story screen, tower
  selection, achievements tab, codex, dev panel, debug panel, leaderboard,
  and the final button-wiring/override block (`_origStartWave` etc., which
  patches functions defined in `game.js` — this is why `ui.js` loads last).

**Design characteristics:**
- **No build tooling**: pure HTML/CSS/JS with zero external dependencies,
  runs by opening the file in a browser.
- **No framework**: direct DOM manipulation (`document.getElementById`,
  `innerHTML`) and a hand-rolled `requestAnimationFrame` game loop.
- **Procedural art**: tower and enemy sprites are drawn programmatically on
  `<canvas>` (no image assets currently used) — hence `assets/images`,
  `assets/sounds`, and `assets/effects` are currently empty/reserved.
- **All state in memory + localStorage**: no network calls, no backend.
- **Two parallel game loops**: story-mode (`initGame`/`loop`) and endgame
  (`initEgGame`/its own `loop`), sharing core rendering and combat helper
  functions but with separate state setup and wave logic.
