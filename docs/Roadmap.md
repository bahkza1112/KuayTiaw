# Roadmap / Backlog

Living list of proposed work. Per `CLAUDE.md`, anything here requires
analysis → file identification → risk explanation → plan → user approval
before implementation. Update this file as items are proposed, approved,
completed, or dropped.

## Status Legend
- 🟡 Proposed — not yet approved
- 🟢 Approved — ready to implement
- 🔵 In Progress
- ✅ Done
- ⚪ Dropped

---

## Balance (PATCH-level)

✅ **Cannon DPS nerf** (v1.6.2) — `t_dmg[0]` 28 → 24. Reduced DPS/Cost from
0.672 to 0.576, bringing it closer to other combat towers while keeping its
splash as the differentiator. File: `js/game.js` (`DEFAULT_CFG.t_dmg`).

✅ **Magic DPS buff** (v1.6.2) — `t_dmg[2]` 38 → 44. Raised DPS/Cost from
0.405 to 0.469, justifying its premium cost as the largest-splash AoE
tower. File: `js/game.js` (`DEFAULT_CFG.t_dmg`).

✅ **Shaman reward nerf** (v1.6.2) — `m_rew[10]` 18 → 12. Lowered reward/HP
from 0.257 to 0.171, in line with other units (~0.13–0.15) while still
rewarding priority kills. File: `js/game.js` (`DEFAULT_CFG.m_rew`).

> See [BalanceSheet.md](BalanceSheet.md) for full current numbers and
> derivations.

---

## UI/UX Improvements (PATCH/MINOR-level)

🟡 **HUD tower-stat clarity** — surface effective DPS/range/synergy bonuses
more clearly in the tower popup so players can compare builds without
checking the Codex.

🟡 **Mobile responsiveness pass** — verify HUD, popups, and dev panel at
narrow viewports (≤375px).

---

## Visual / Animation Polish (MINOR-level)

🟡 **Boss-specific VFX** — distinct telegraphed animations for each boss
skill type (`skillType = stage.id % 3`).

🟡 **Additional screen-transition polish** — smoother cutscene → gameplay
and stage-clear → results transitions.

---

## QA / Regression

✅ **Post-refactor verification (v1.6.1)** — confirmed via live browser test
that `css/main.css` + `js/{save,enemy,tower,game,ui}.js` reconstruct the
original monolith's behavior with no console errors across menu, story
mode, combat, weather, codex, dev panel, and endgame screens.

---

## Future / Unscoped Ideas

These are larger and need a dedicated design pass before scoping:

- New tower type(s) / monster type(s) / stage(s) (MINOR)
- Additional rune types
- New achievements
- `agents/` folder for per-role AI agent instructions (deferred — see
  `CLAUDE.md` "AI Team" section for current role definitions)
