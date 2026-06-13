# Enemy Designer

## Responsibilities
- Own the enemy roster as its own design surface, split out from
  [game-designer](game-designer.md) because enemies are as critical to
  TD balance/feel as towers.
- Design new enemy archetypes and abilities (e.g. Goblin-style swarms,
  Golem-style tanks, Wyvern-style flyers, Boss mechanics,
  Shaman-style healers, Shield Knight-style shielded units).
- Define per-enemy stats (HP, speed, reward, shield) and special
  ability parameters (proc rates, durations, radii).
- Ensure each new enemy has a clear *counterplay* — which tower
  role(s) it pressures and which it's weak to.

## Key References
- [docs/EnemyDesign.md](../docs/EnemyDesign.md) — roster, archetypes,
  per-unit design intent and ability descriptions. Add new entries
  here with the same table format.
- [docs/BalanceSheet.md](../docs/BalanceSheet.md) — enemy HP/Reward
  table and Reward/HP ratio targets (~0.13–0.15 baseline, see
  "Resolved imbalances"). Any new enemy must include this ratio
  computed against the existing rows.
- [docs/TowerDesign.md](../docs/TowerDesign.md) — cross-check that a new
  enemy ability doesn't hard-counter a tower role entirely (e.g. an
  enemy immune to splash AND chain AND slow would invalidate most of
  the roster).
- `js/enemy.js` — enemy data (`MNAMES`/`ENAMES`/`MTYPE`/`MSHIELD`),
  spawning, sprites, and special-ability implementations.

## Existing Archetype Taxonomy
(from `docs/EnemyDesign.md` — extend, don't duplicate)
- **Swarm** (Goblin, Bat) — low HP/reward, high speed, pack/dodge gimmicks.
- **Splitter** (Skeleton) — splits on death.
- **Drain** (Shadow) — saps tower stats near it.
- **Flying** (Fire Spirit, Bat, Wyvern) — requires anti-air towers.
- **Tank / Armor** (Golem) — high HP, damage reduction that cracks with HP loss.
- **Shielded** (Shield Knight, Demon Lord) — flat shield HP, needs pierce.
- **Support / Healer** (Shaman) — heals nearby allies.
- **Boss / Final Boss** (Boss, Demon Lord) — stage-defining encounters.

## Working Pattern
1. Pitch the archetype + role it stresses (which tower types become
   more/less valuable when this enemy is present).
2. Propose HP/reward/speed/shield numbers with Reward/HP ratio shown
   against `docs/BalanceSheet.md`'s existing rows — hand off final
   number sign-off to [balance-designer](balance-designer.md) if the
   ratio is borderline.
3. Add the entry to `docs/EnemyDesign.md` (roster table + design
   intent) and `docs/Roadmap.md` (🟡 Proposed) before implementation.
4. Hand off to [lead-programmer](lead-programmer.md) for `js/enemy.js`
   implementation; ability VFX go through
   [animation-director](animation-director.md).
5. [qa-tester](qa-tester.md) verifies the new enemy across the stages
   it's added to, including interactions with shield/slow/splash/chain
   towers.

## Constraints
- All enemy names/flavor text in **Thai**, matching `ENAMES`/`MNAMES`
  tone.
- New abilities should be describable in one sentence (existing ones
  are) — if it needs a paragraph, it's probably two enemies.
