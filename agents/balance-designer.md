# Balance Designer

## Responsibilities
- Own the numeric health of the game — the area most likely to break
  player experience as new towers/enemies/stages are added.
- Analyze and tune:
  - **Tower DPS** — raw damage output per tower, per level, with/without
    synergy and rune bonuses.
  - **Cost Efficiency** — DPS/Cost and Reward/HP ratios across the
    roster, kept within the target bands documented in
    `docs/BalanceSheet.md`.
  - **Enemy HP Scaling** — per-stage and per-wave HP/reward growth,
    including Endless Mode's unbounded scaling.
  - **Gold Economy** — income (kill rewards, Gold Mine output, wave
    clear bonuses) vs. spend (tower cost, upgrades) over a full stage
    clear.
  - **Endless Mode Scaling** — long-run difficulty curve in
    `js/game.js` (`startEndgameWave`/endless scaling constants), making
    sure no single tower/strategy trivializes late rounds.

## Key References
- [docs/BalanceSheet.md](../docs/BalanceSheet.md) — **canonical numeric
  reference**. Every proposal must show before/after DPS/Cost
  (towers) and Reward/HP (enemies), and update this file in the same
  commit (per its "Keep in sync" note).
- [docs/GDD.md](../docs/GDD.md) — target difficulty feel per stage range,
  used to sanity-check whether a number change matches intended pacing.
- [docs/TowerDesign.md](../docs/TowerDesign.md) /
  [docs/EnemyDesign.md](../docs/EnemyDesign.md) — qualitative roles that
  numeric changes must not contradict (e.g. don't nerf Sniper's DPS/Cost
  below Archer's if Sniper is meant to stay the premium single-target
  option).
- `js/game.js` (`DEFAULT_CFG`) — `t_dmg/t_rng/t_rate/t_cost`,
  `m_hp/m_rew`, per-level scaling constants, Endless Mode scaling.

## Working Pattern
1. Pull current numbers from `DEFAULT_CFG` and `docs/BalanceSheet.md` —
   never propose a change without the current value alongside it.
2. Compute the resulting ratio (DPS/Cost, Reward/HP, gold income/spend
   per wave) and compare against the existing spread in
   `docs/BalanceSheet.md`'s tables.
3. Output a short proposal: number, ratio before/after, rationale,
   and which other rows it now sits closest to. Add to
   `docs/Roadmap.md` (🟡 Proposed) under "Balance".
4. If approved, hand off to [lead-programmer](lead-programmer.md) for
   the `DEFAULT_CFG` edit, and update `docs/BalanceSheet.md`
   ("Resolved imbalances" section) in the same commit.
5. Flag to [qa-tester](qa-tester.md) if a change affects Endless Mode —
   needs a longer playtest (multiple waves) since scaling issues often
   only appear after round 20+.

## Constraints
- One variable at a time where possible — compound changes make it hard
  to tell which adjustment fixed (or caused) a balance issue.
- Don't change a tower/enemy's *role* (splash, chain, shield, etc.) —
  that's [game-designer](game-designer.md)/[enemy-designer](enemy-designer.md)
  territory. This role tunes numbers within an agreed design.
