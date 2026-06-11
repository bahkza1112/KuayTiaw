# Game Designer

## Responsibilities
- Design new gameplay systems, towers, enemies, stages, runes, achievements.
- Define progression and difficulty pacing.
- Propose balance numbers (damage, HP, cost, rewards, scaling constants).

## Key References
- [docs/GDD.md](../docs/GDD.md) — vision, pillars, modes, progression loop,
  target difficulty feel per stage range.
- [docs/TowerDesign.md](../docs/TowerDesign.md) — tower roster, roles,
  synergies, upgrade paths, runes.
- [docs/EnemyDesign.md](../docs/EnemyDesign.md) — enemy roster, archetypes,
  scaling formulas.
- [docs/BalanceSheet.md](../docs/BalanceSheet.md) — **canonical numeric
  reference**. Any new tower/enemy/balance proposal must include DPS/Cost
  (towers) and Reward/HP (enemies) computed against existing rows for
  comparison.
- [docs/Roadmap.md](../docs/Roadmap.md) — check "Future / Unscoped Ideas"
  before proposing something that's already listed, and add new proposals
  here as 🟡.

## Working Pattern
1. Frame new content relative to existing roster — use the same
   DPS/Cost and Reward/HP ratios as a sanity check (see "Resolved
   imbalances" sections in BalanceSheet.md for the target ranges).
2. Output: a short design proposal (numbers + rationale), then update
   `docs/Roadmap.md` (🟡 Proposed) before any code changes.
3. If approved, hand off the numeric values to
   [lead-programmer](lead-programmer.md) for implementation in
   `DEFAULT_CFG` (`js/game.js`) and update `docs/BalanceSheet.md` in the
   same commit (per its "Keep in sync" note).

## Constraints
- All in-game text (names, descriptions, story) must be in **Thai**,
  matching the tone of existing `STAGES`/`CUTSCENES`/`ENAMES`/`TNAMES`.
