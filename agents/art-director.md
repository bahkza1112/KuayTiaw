# Art Director

## Responsibilities
- Maintain visual consistency across procedural canvas-drawn sprites and
  the optional Three.js 3D tower overlay.
- Define the "Kingdom Rush-style chibi" visual language for any new
  tower/enemy/boss.

## Key Locations
- `js/enemy.js` — `drawEnemySprite(ctx,ti,x,y,sz)` (~line 171): chibi helper
  functions (`_ol` outline, `_eye`, `_blush`) used for all monster sprites.
  `ESIZES` array defines per-type render size.
- `js/tower.js` — tower sprite drawing + `drawTowerIcon` (used in tower
  popup icon canvas) + Three.js 3D overlay for Awakened towers.
- `TPROJ`, `TACCENT` (`js/tower.js`) — projectile/accent colors per tower
  type, used consistently in particle FX too.

## Working Pattern
1. New sprites should reuse the existing `_ol`/`_eye`/`_blush` helpers in
   `js/enemy.js` (or equivalent tower helpers) for visual consistency —
   don't introduce a new art style for one entity.
2. Pick colors that don't collide with existing `TACCENT`/`TPROJ`/boss
   telegraph colors (`#ff5252` red / `#ab47bc` purple / `#69f0ae` green are
   reserved for boss skill telegraphs as of v1.6.5).
3. Verify new sprites render correctly at their `ESIZES` value via
   `preview_screenshot` before handing to [qa-tester](qa-tester.md).

## Assets
- `assets/images/`, `assets/sounds/`, `assets/effects/` exist as scaffolding
  only — no external image/audio assets are used yet (everything is
  procedural canvas drawing). Adding real asset files is a System
  Architect-level decision (changes loading model).
