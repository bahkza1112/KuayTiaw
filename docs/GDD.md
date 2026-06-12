# Tower Quest 🏰 — Game Design Document (GDD)

High-level design reference. For implementation details see
[`../PROJECT_MASTER.md`](../PROJECT_MASTER.md). For numeric tuning see
[`BalanceSheet.md`](BalanceSheet.md).

## 1. Vision

A Thai-language, single-player, browser-based tower defense game with a
light story campaign, an endless endgame mode, and long-term progression
(towers, runes, achievements, codex). No backend — fully client-side,
`localStorage`-based saves.

## 2. Core Pillars

- **Accessible TD fundamentals** — classic grid placement, path-following
  enemies, range/rate/damage upgrades.
- **Build variety** — 8 tower types with distinct roles (splash, slow,
  single-target, support, utility, chain) plus a synergy system that
  rewards mixed compositions.
- **Readable difficulty curve** — story mode ramps gently across 11 stages;
  endgame provides infinite scaling for players who want a harder challenge.
- **Replayability hooks** — Codex collection, achievements, runes, local
  leaderboard.

## 3. Game Modes

### Story Mode
11 hand-designed stages (`STAGES`), each with a fixed grid/path, enemy
roster, tower unlock pool, and Thai story cutscenes. Stars (0–3) are
awarded per stage based on performance and gate progression.

### Endgame / Survival Mode
Infinite waves on a fixed path (`EG_PATH`, based on Stage 2's layout), 3
difficulties (Easy ×0.7, Normal ×1, Hard ×1.5). Tracks best wave/score per
difficulty on a local leaderboard. Unlocked after clearing ≥1 story stage.

## 4. Player Progression Loop

1. Play a stage → earn stars → unlock next stage + new tower type.
2. Encounter new monsters → unlock Codex entries.
3. Hit achievement milestones (combat, skill, collection, endgame) →
   unlock badges/notifications.
4. Equip runes (see [TowerDesign.md](TowerDesign.md#runes)) and use the
   "Awaken" upgrade for late-game power spikes.
5. Once story is cleared, push endgame waves for leaderboard rank.

## 5. Systems Summary

| System | Summary | Reference |
|---|---|---|
| Towers | 8 types, 3 independent upgrade paths (dmg/range/rate) + Awaken | [TowerDesign.md](TowerDesign.md) |
| Enemies | 11 types incl. flying, shielded, healer, bosses | [EnemyDesign.md](EnemyDesign.md) |
| Synergies | Cross-tower bonuses (dmg/slow/gold) | [TowerDesign.md](TowerDesign.md#synergies) |
| Weather | Per-stage hazards/modifiers (8 types) | PROJECT_MASTER.md §2 |
| Runes | 6 equippable modifiers | [TowerDesign.md](TowerDesign.md#runes) |
| Balance config | `DEFAULT_CFG`, dev-panel overridable | [BalanceSheet.md](BalanceSheet.md) |

## 6. Target Difficulty Feel

- **Stages 1–3**: tutorial-level, teach core tower roles.
- **Stages 4–6**: introduce flying enemies, gold economy, chain lightning.
- **Stages 7–9**: multi-directional paths, shielded enemies, healer priority
  targeting.
- **Stage 10**: capstone — Demon Lord (final boss), requires full roster
  mastery.
- **Stage 11**: true final — Shadow Remnant, full enemy roster including
  the Demon Lord again, heaviest weather chaos pool.
- **Endgame**: designed to eventually outscale any fixed strategy — the
  long-term test of build optimization.

## 7. Open Design Questions

Tracked in [Roadmap.md](Roadmap.md). Major changes to save format,
architecture, or core gameplay loops require explicit user approval per
[`../CLAUDE.md`](../CLAUDE.md).
