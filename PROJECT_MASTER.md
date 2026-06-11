# Tower Quest 🏰 — Project Master Reference

This document is a system-by-system map of the game as implemented in
[`Tower Quest 🏰 v1.6.0.html`](Tower%20Quest%20%F0%9F%8F%B0%20v1.6.0.html)
(the current development base, per `c068ef1`). Line numbers refer to that
file and may drift as the file changes — use them as a starting point for
searches, not as permanent anchors.

---

## 1. Game Overview

**Tower Quest** is a Thai-language, single-player, browser-based tower
defense (TD) game. It is delivered as one self-contained HTML file
(~5,900 lines / ~350 KB) with inline `<style>` and `<script>` blocks, plus
Three.js loaded via CDN for an optional 3D tower-rendering layer
(line 941).

Key high-level elements:

- **Story Mode**: 10 stages (`STAGES`, line 944), each with its own grid
  layout, enemy path, unlockable towers, and a story cutscene.
- **Endgame / Survival Mode**: an infinite, difficulty-scaled wave survival
  mode unlocked after finishing story content (functions starting around
  line 5278, `openEgMenu` onward).
- **Codex**: an in-game encyclopedia of monsters and towers with stats,
  strengths/weaknesses, and lore (`renderCodex`, line 4776).
- **Achievements**: a tracked set of unlockable achievements across story,
  combat, skill, endgame, and collection categories (`ACHIEVEMENTS`,
  line 1196).
- **Dev Panel**: an in-game tuning/debug panel for live-editing balance
  config, spawning monsters, and cheats (`renderDevPanel`, line 4910 onward).
- **Leaderboard**: local high-score tracking for endgame runs
  (`openLeaderboard`, line 5758).

The game targets desktop browsers with mouse/touch input on an HTML5
`<canvas>` (`#cv`, plus an overlay `#gl3d` canvas for the Three.js layer).

---

## 2. Core Systems

### Game State (`G`)
- `mkState()` (line 1428) creates the per-run game state object: gold, HP,
  wave number, arrays of `towers`, `enemies`, `projs` (projectiles),
  particles, damage numbers, FX rings/trails, combo counter, and weather
  state.
- `mkWeatherState()` (line 1439) initializes the weather sub-state.

### Main Loop
- `initGame()` (line 1670) sets up a stage run and starts a
  `requestAnimationFrame` loop (`loop()`, line 1696) that calls `update(dt)`
  and `render()` each frame, with delta-time clamped to 0.1s and scaled by
  the `speed` multiplier (1x/2x/etc., toggled via UI).
- `update(dt)` (line 2442) is the central simulation tick: moves enemies
  along the path, applies status effects (heal auras, drain auras, boss
  skills), runs tower targeting/firing, advances projectiles, resolves
  hits/kills, and updates particles/FX.
- `render()` (line 3727) draws the grid/terrain, path, towers, enemies,
  projectiles, and effects to the 2D canvas; `_render3D()` (line 3720)
  syncs the optional Three.js tower meshes.
- `togglePause()`, `pausedRestart()`, `restartGame()`, `toggleAutoWave()`
  control run-level flow.

### Balance Configuration (`CFG`)
- `DEFAULT_CFG` (line 1051) defines all tunable balance numbers: stage/wave
  scaling multipliers, monster base HP/speed/reward arrays, tower
  damage/range/rate/cost arrays, starting gold, base HP, spawn interval, etc.
- `CFG` is a deep copy of `DEFAULT_CFG`, optionally overridden from
  `localStorage['tq_cfg']` (set via the Dev Panel). `devReset()` restores
  defaults.

### Weather System
- `WEATHERS` (line 1448) and `STAGE_WEATHER` (line 1474) define per-stage
  weather pools (fog, blizzard, lightning, etc.) with gameplay modifiers
  (range, splash, gold, dodge, slow effects).
- `rollWeather()`, `applyWeather()`, `clearWeather()`, `getWeatherColor()`,
  `showWeatherWarning()` manage activation, visuals, and cleanup.
- `applyLightningStrike()` (line 1528) is a periodic hazard that strikes a
  portion of the player's towers during lightning weather.

### Audio
- A small WebAudio-based SFX engine (`_getAC`, `_resumeAC`, `_playSound`,
  starting line 1764) procedurally synthesizes sound effects (no audio
  files) for tower fire types, hits, deaths, UI actions, etc. Controlled by
  `_sfxVol`, `_sfxOn`, and `toggleSfx()`.

### Tutorial
- `_TUT_STEPS` (line 1867) and `initTutorial()` / `_renderTut()` /
  `skipTutorial()` drive a first-run guided tutorial overlay, gated by
  `localStorage['tq_tut_done']`.

---

## 3. Tower Systems

### Tower Roster (8 types, indices 0–7)
Defined via parallel arrays starting at line 1082:

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

Per-type properties are defined via arrays: `TCOLORS`, `TPROJ` (projectile
colors), `TACCENT`, `TSPLASH` (splash radius), `TSLOW` (slow %), `TBUFF`
(support flag), `TCANAIR` (can hit flying enemies), `TGOLDMINE` (gold
generation), `TCHAIN` (chain-lightning target count), `TPIERCE` (shield
pierce). Flavor text, tags, and strengths/weaknesses for the Codex are in
`TFLAVOR`, `TTAGS`, `TSTRENGTH`, `TWEAKNESS` (lines 1139–1177).

### Stats & Scaling
- `getTowerDmg(t, lv)`, `getTowerRange(t, lv)`, `getTowerRate(t, lv)`
  (lines 1543–1545) compute per-level stats from `CFG.t_dmg/t_rng/t_rate`
  with linear growth per level (+25% dmg, +15% range, +10% rate per level
  above 1).
- Each placed tower (`G.towers[i]`) tracks independent `dmgLv`, `rngLv`,
  `rateLv` (path-based upgrades — see Progression) plus `lv` for legacy/base
  level, position (`col`, `row`), turret `angle`, and optional equipped
  rune.

### Targeting, Firing & Projectiles
- During `update(dt)`, each tower scans `G.enemies` within
  `getTowerRange()` (adjusted by weather `rangeMult`), selects the
  furthest-along-path valid target (respecting air/shield rules via
  `TCANAIR`/`TPIERCE`), and fires on a cooldown derived from
  `getTowerRate()`.
- Projectiles are pushed into `G.projs` with damage, splash radius, slow,
  crit chance, pierce, and chain-lightning data computed per shot
  (`getBuffMult`, `getSynergyMult`, `getSynergySlowBonus`, etc.).
- `applyDmg(e, dmg, towerType, forcePierce)` (line 2217) applies damage to
  an enemy, handling shields (`MSHIELD`) and pierce-through logic.

### Synergies & Buffs
- `SYNERGY` (line 2309) defines cross-tower-type bonuses (e.g., one tower
  type boosts another's damage/slow/gold output when in range).
- `getActiveSynergies`, `getSynergyMult`, `getSynergyGoldMult`,
  `getSynergySlowBonus` (lines 2317–2344) compute these bonuses live.
- `getBuffMult(col, row)` (line 2297) applies Support tower buff auras.

### Tower Selection, Placement & Popup UI
- `selectedTowersForStage` limits which tower types are usable per stage
  (`renderTowerSelection`, `toggleTowerSelection`, `confirmTowerSelection`,
  lines 2108–2168), constrained by `stageMaxTowers` and
  `STAGES[i].unlockedTowers`.
- `onCanvasClick`, `onCanvasHoldStart/End` (lines 4391–4478) handle
  placement and long-press interactions on the grid.
- `showTowerPopup` / `hideTowerPopup` / `updateTpRune` (lines 4479–4604)
  render the per-tower action popup: upgrade (dmg/range/rate paths via
  `upgradeTowerFromPopup`), sell (`sellTowerFromPopup`, with partial gold
  refund), rune equip (`equipRuneToTower`), and "Awaken"
  (`awakenTowerFromPopup`) — a late-game power-up with a 3D gold aura
  effect (`_buildAwakenAura3D`).

### Visual Rendering
- 2D: `drawTowerIcon`, `_twStatic`, `_twDecal`, `_twWeapon` (lines
  2900–3059) procedurally draw each tower type's canvas sprite, including
  animated weapon parts.
- 3D (optional): `_init3D`, `_buildTowerMesh3D`, `_sync3DTowerMesh`,
  `_render3D` (lines 3417–3726) build and animate Three.js meshes per tower
  type on an orthographic camera overlay.

---

## 4. Enemy Systems

### Monster Roster (11 types, indices 0–10)
Defined via parallel arrays starting at line 1079:

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

Supporting arrays: `ESIZES` (sprite sizes), `MFLAVOR`/`MTRIBE`/`MSTRENGTH`/
`MWEAKNESS` (Codex text, lines 1094–1135), `MTYPE` (0=normal, 1=resistant —
bosses & golem), `MISAIR` (flying flag), `MSHIELD` (starting shield HP).

### Stats & Scaling
- `getEnemyHP(ti, si, wave)` and `getEnemySpd(ti, si)` (lines 1546–1547)
  scale base HP/speed by stage index (`CFG.stageMult`, `CFG.spdStageMult`)
  and wave number (`CFG.waveMult`), capped by `CFG.spdCap`. Shield HP scales
  similarly with stage in `spawnEnemy`.
- Weather can modify spawned HP via `G.weather.hpMult`.

### Spawning & Waves
- `startWave()` (line 2177) computes the number of enemies for the wave
  (`CFG.enemyPerWaveBase + wave * CFG.enemyPerWaveInc`, scaled by
  `currentStage.enemyMult`), picks enemy types from `currentStage.enemyTypes`
  (capped by wave progression), and rolls boss spawns via `bossChance`.
- `spawnEnemy(ti)` (line 2243) instantiates an enemy object with HP, shield,
  position (start of `currentPath`), and spawn FX/sound; type 9 (Demon Lord)
  has special "final boss" entrance effects.

### Movement, Special Behaviors & Death
- Enemies move along `currentPath` (per-stage waypoint list) in `update(dt)`,
  interpolating between waypoints based on speed.
- **Shaman (10)**: periodically heals nearby allies for 18% of its base HP
  within a 2.5-cell radius (line ~2497).
- **Shadow-type drain**: a drain-aura mechanic affecting nearby
  towers/players within 2.2 cells (line ~2524).
- **Boss skills**: bosses execute stage-dependent skills
  (`skillType = stage.id % 3`) — e.g., spawning adds, healing, or AoE attacks
  (line ~2544).
- `killEnemy(e)` (line 2345) awards gold/score (with combo multiplier via
  `G.comboN`), triggers death FX/particles, achievement hooks
  (`_onKillForAch`), and removes the enemy.
- Reaching the end of the path damages `G.hp` (base fortress HP,
  `CFG.baseHP`).

### Visual Rendering
- `drawEnemySprite(ctx, ti, x, y, sz)` (line 3060) procedurally draws each
  monster's canvas sprite with type-specific shapes, gradients, eyes, and
  idle animations (e.g., flame flicker, wing flap, pulsing shields/auras for
  Demon Lord at line ~3315).

---

## 5. Save Systems

All persistence is via browser `localStorage`, namespaced with `tq_` keys.
There is no server/backend or file-based save.

| Key | Purpose | Managed by |
|-----|---------|------------|
| `tq_progress` | Per-stage star ratings / clear status (drives stage unlocks) | `loadProgress()`, `saveProgress()` (lines 1178–1186) |
| `tq_seen` | Set of monster IDs encountered (Codex unlock tracking) | `seenMonsters` (line 1193), `unlockMonster()` (1389) |
| `tq_ach` | Set of unlocked achievement IDs | `loadAchievements()`, `_saveAch()` (1235–1241) |
| `tq_ach_seen` | Achievement IDs already shown to the player (badge logic) | `_updateAchBadge()` (1274) |
| `tq_achstats` | Running stats used to evaluate achievement conditions (kills, combos, scores, no-damage waves, etc.) | `loadAchStats()`, `saveAchStats()` (1242–1246) |
| `tq_cfg` | Dev-panel overrides to `DEFAULT_CFG` (balance tuning persistence) | loaded at line 1076; written by `devSave()` (5147), cleared by `devReset()` |
| `tq_runs` | History of endgame survival runs (for leaderboard / best-wave stats) | written around endgame end, read in `checkAchievements()` and `renderLb()` |
| `tq_sel_*` | Per-stage saved tower-selection loadouts (key suffix likely stage id) | read/written around tower selection flow |
| `tq_last_name` | Last-used player name (for leaderboard entries) | `showSavePrompt`/`confirmSave` (5673–5741) |
| `tq_tut_done` | Whether the first-run tutorial has been completed/skipped | `initTutorial()`, `skipTutorial()` |

Notes:
- `isStageUnlocked(si)` (line 1187) gates story progression based on
  `tq_progress`.
- `getUnlockedTowers()` (line 1377) derives the set of usable tower types
  from progress (towers unlock as stages are cleared, per `STAGES[i].unlocks`).
- Endgame results flow through `showSavePrompt` → `confirmSave`/`skipSave`
  → leaderboard/run history persistence.

---

## 6. UI Systems

### Screen/Overlay Management
- `hideAll()` (line 1550) and `showScreen(id, flex)` (1551) toggle visibility
  of top-level screen containers by element ID: `#mm` (main menu),
  `#stagesel` (stage select), `#gp` (game play / HUD + canvas), `#codex`,
  `#devpanel`, `#egmenu` (endgame menu), `#leaderboard`, `#towersel`
  (tower-selection screen), `#storyscr` (story screen), and `#cutscene`.

### Main Menu & Stage Select
- `updateMenuStats()` (1559) populates best-stage, total stars, and stage
  icon summary on the main menu.
- `openStageSelect()` / `renderStageSelect()` (1579–1631) render the stage
  grid with lock state, star ratings, and enemy-type previews per
  `STAGES`.
- `startStage()` / `_doStartStage()` (1632–1669) handle stage entry,
  including story/cutscene gating.

### Cutscenes & Story
- `CUTSCENES` data (referenced near line 1952) plus `showCutscene`,
  `renderCsSlide`, `typeText` (typewriter effect), `csAdvance`,
  `showStoryScreen` (1952–2107) drive the per-stage narrative slides shown
  before/after stages.

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
  `surrender()`, `showEgResult()` (5278–5757) implement the endgame
  menu/run loop, separate from the story-mode loop but reusing core
  rendering/combat functions.
- `openLeaderboard()`, `switchLbTab()`, `renderLb()` (5758–end) display
  saved run history per difficulty.

---

## 7. Progression Systems

### Stage Progression
- 10 stages (`STAGES`, line 944), each defining: grid path, available enemy
  types, `unlockedTowers`, `maxTowers`/`stageMaxTowers`, `bossChance`,
  `enemyMult` (difficulty scaling), `unlocks` (tower or item unlocked on
  clear), background/path/grass colors, and Thai story text.
- Clearing a stage with ≥1 star unlocks the next stage
  (`isStageUnlocked`) and any associated tower unlock
  (`getUnlockedTowers`).
- Star rating (0–3) per stage is computed in `endGame()` (2385) based on
  performance (e.g., remaining HP) and saved via `saveProgress()`.

### Tower Upgrade Paths
- Each placed tower can be leveled along three independent stat tracks —
  damage (`dmgLv`), range (`rngLv`), rate (`rateLv`) — via
  `upgradeTowerFromPopup(stat)` (4658), each with escalating gold cost.
- Path-exclusive perks (e.g., pierce shield, rapid fire) are unlocked at
  certain levels along the range/rate trees (per recent commit history).
- "Awaken" (`awakenTowerFromPopup`, 4617) is an end-tier upgrade granting a
  significant power boost and a distinct 3D visual aura.

### Runes
- `RUNES` (line 1226) defines equippable runes that can be attached to
  towers via `equipRuneToTower()` (4605) and visualized via
  `updateTpRune()` (4569) and `_dropRune()` (4646), modifying tower
  behavior/stats.

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

---

## 8. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│  Tower Quest 🏰 v1.6.0.html  (single file, ~5,900 lines)      │
│                                                                │
│  <style>  ── all CSS for menus, HUD, overlays, animations     │
│                                                                │
│  <script src="three.min.js">  ── CDN dependency for 3D layer  │
│                                                                │
│  <script>                                                     │
│   ├─ Static Data                                              │
│   │   STAGES, ENAMES/TNAMES + per-type stat arrays,           │
│   │   ACHIEVEMENTS, RUNES, WEATHERS, CUTSCENES, DEFAULT_CFG    │
│   │                                                            │
│   ├─ Persistence Layer                                        │
│   │   loadProgress/saveProgress, achievements, achstats,      │
│   │   seenMonsters, runs, config overrides (all localStorage) │
│   │                                                            │
│   ├─ Game State & Loop                                        │
│   │   mkState/mkWeatherState, initGame/loop, update(dt),      │
│   │   render() [2D canvas] + _render3D() [Three.js overlay]   │
│   │                                                            │
│   ├─ Gameplay Systems                                         │
│   │   Tower placement/targeting/firing/upgrades/synergies,    │
│   │   Enemy spawning/movement/special abilities/death,        │
│   │   Weather, combos, scoring, endgame survival mode         │
│   │                                                            │
│   ├─ Rendering Helpers                                        │
│   │   drawTowerIcon/_tw*, drawEnemySprite, FX (particles,      │
│   │   rings, trails, damage numbers), 3D mesh builders         │
│   │                                                            │
│   └─ UI Layer                                                  │
│       Screen management (showScreen/hideAll), menus,          │
│       stage select, cutscenes/story, HUD, codex, dev panel,    │
│       tower popup, leaderboard, achievement notifications      │
│                                                                │
│  <body>  ── DOM containers for every screen/overlay listed     │
│             above, referenced by ID from the script           │
└─────────────────────────────────────────────────────────────┘
```

**Design characteristics:**
- **No build tooling**: pure HTML/CSS/JS, runs by opening the file in a
  browser. Three.js is the only external dependency (CDN `<script>` tag).
- **No framework**: direct DOM manipulation (`document.getElementById`,
  `innerHTML`) and a hand-rolled `requestAnimationFrame` game loop.
- **Procedural art**: tower and enemy sprites are drawn programmatically on
  `<canvas>` (no image assets currently used) — hence `assets/images`,
  `assets/sounds`, and `assets/effects` are currently empty/reserved.
- **All state in memory + localStorage**: no network calls, no backend.
- **Two parallel game loops**: story-mode (`initGame`/`loop`) and endgame
  (`initEgGame`/its own `loop`), sharing core rendering and combat helper
  functions but with separate state setup and wave logic.
