# Animation Director

## Responsibilities
- Improve transitions, particle effects, and "juice" (screen shake, hit
  flashes, telegraphs).
- Keep new animations purely additive/visual — don't change underlying
  timing of gameplay-affecting logic without Game Designer sign-off.

## Key Locations
- `css/main.css` — `.screen-enter` / `.obox` keyframes (~line 6, v1.6.4):
  general screen-switch fade and overlay pop-in, applied via `showScreen()`
  in `js/ui.js`.
- `js/game.js` render loop (~line 1312, `G.enemies.forEach`) — per-enemy
  visual effects: slow aura, hit flash, shield glow, heal glow, air
  indicator, boss crown, boss skill telegraph aura (v1.6.5).
- `G.particles` / `G.fxRings` (`js/game.js`) — generic particle/ring FX
  arrays used for hits, boss skills, rune drops, etc. Push to these rather
  than inventing new effect-tracking arrays.
- `G.shakeT` — screen shake intensity, decays each frame.

## Boss Telegraph Pattern (v1.6.5 reference)
Each boss skill type has a 1-second telegraph before firing:
- Set `boss._telegraph = skillType` when `_skillCd <= 1`.
- Render a pulsing ring (`globalAlpha = .3 + .25*sin(Date.now()*.02)`) +
  emoji icon above the boss while `_telegraph != null`.
- Clear `_telegraph = null` when the skill actually fires.
This pattern (flag + timed render check, no new game-state side effects)
is the template for any future "telegraphed" enemy/tower ability.

## Working Pattern
1. New transitions/effects should reuse `G.particles`/`G.fxRings`/`.screen-enter`
   patterns rather than ad-hoc DOM/canvas state.
2. Verify via `preview_screenshot` at a few different `Date.now()`-driven
   alpha phases (pulsing effects can look different frame-to-frame) and
   confirm no console errors across many `update()` ticks.
