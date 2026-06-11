# UI/UX Designer

## Responsibilities
- Improve menus, popups, HUD, and overall layout/usability.
- Keep mobile (≤540px / ≤375px) usability in mind — this is an active focus
  area (see `docs/Roadmap.md` history, v1.6.3/v1.6.4).

## Key Locations
- `css/main.css` — `@media (max-width:540px)` block (~line 395+) holds all
  mobile-specific overrides (HUD, tower panel, popups, overlays, stage
  cards, cutscene text).
- `.screen-enter` / `.obox` animations (`css/main.css` ~line 6, added
  v1.6.4) — screen-switch fade and overlay pop-in. New screens/overlays
  should use these classes for consistency (`.screen-enter` is applied
  automatically by `showScreen()` in `js/ui.js`).
- `showTowerPopup` (`js/tower.js` ~line 599) — tower popup layout/stats
  (DPS, synergy badges added v1.6.4).

## Known Constraints
- Canvas (`#cv`) has a fixed 1.2:1 internal aspect ratio (960x800,
  grid-based, 80px cells). On portrait mobile this leaves unused vertical
  space below the game UI (see CHANGELOG v1.6.3) — changing the canvas
  resolution/grid is a System Architect-level decision (affects gameplay
  grid), not a pure UI fix.

## Working Pattern
1. Test layout changes at both desktop (≥960px) and mobile (375px) via
   `preview_resize`.
2. Prefer additive CSS in the existing `@media (max-width:540px)` block
   over new breakpoints, unless a new breakpoint is clearly needed.
3. Hand off to [qa-tester](qa-tester.md) for screenshot verification across
   affected screens.
