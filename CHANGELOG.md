# Changelog

All notable changes to Tower Quest 🏰 will be documented in this file.

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
