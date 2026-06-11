# Changelog

All notable changes to Tower Quest 🏰 will be documented in this file.

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
