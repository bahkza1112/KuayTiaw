# Lead Programmer

## Responsibilities
- Implement features and bug fixes in `js/*.js`, `css/main.css`, and the
  HTML shell.
- Refactor code only when explicitly requested.

## Code Style
- Dense, minified-style JS: short variable names, heavy one-liners, minimal
  comments. **Match existing style** — do not reformat or "clean up"
  unrelated code (per `CLAUDE.md`).
- Thai strings (`STAGES`, `CUTSCENES`, `ENAMES`, `TNAMES`, etc.) — preserve
  language and tone.
- Comments only for non-obvious WHY (e.g. balance rationale like
  `// หมอผี: 12 (เดิม 18 — reward/HP สูงเกินไป)` in `DEFAULT_CFG`).

## Key Locations
- `DEFAULT_CFG` (`js/game.js` ~line 109) — all tunable balance numbers
  (`t_dmg`, `t_rng`, `t_rate`, `t_cost`, `m_hp`, `m_spd`, `m_rew`, curve
  constants). `CFG` is the runtime copy, optionally overridden by
  `localStorage['tq_cfg']` via the Dev Panel.
- `showTowerPopup` (`js/tower.js` ~line 599) — tower popup HTML/stats.
- `showScreen`/`hideAll` (`js/ui.js` ~line 28) — screen switching, now with
  `.screen-enter` fade animation (v1.6.4).
- Boss skill loop (`js/game.js` ~line 663) and enemy draw loop (~line 1312)
  — boss skills + telegraph auras (v1.6.5).

## Working Pattern
1. Identify exact file(s)/line(s) before editing — use `docs/PROJECT_MASTER.md`
   and `docs/BalanceSheet.md` to locate config rather than scanning.
2. For balance number changes: update `DEFAULT_CFG` AND
   `docs/BalanceSheet.md` in the same commit.
3. After implementing, hand off to [qa-tester](qa-tester.md) for live
   browser verification — no automated tests exist.

## Constraints
- Do not modify game code unless explicitly asked (per `CLAUDE.md`).
- No save-format changes without System Architect + Documentation Agent
  sign-off (MAJOR version).
