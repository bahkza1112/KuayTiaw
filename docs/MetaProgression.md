# Meta Progression (Proposal)

> **Status: 🟡 Proposed.** None of the systems described here exist in
> the game yet (v1.9.16). This document is a design proposal for
> persistent, cross-run/cross-stage progression. Nothing here should be
> implemented without an explicit approved entry in
> [Roadmap.md](Roadmap.md) per `CLAUDE.md`'s Development Rules.

For current (already-implemented) progression — stars, tower
unlocks, Codex, achievements, runes — see
[GDD.md](GDD.md) §4 "Player Progression Loop" and
[`../PROJECT_MASTER.md`](../PROJECT_MASTER.md).

## Why a separate doc

The systems below are account-level / cross-stage, persist across
story and endgame runs, and would touch the save schema
(`js/save.js`, `tq_*` keys) in ways that are riskier than per-stage
content. They're grouped here so they can be designed, sequenced, and
balanced together rather than bolted on individually.

## 1. Player Level

- A persistent account-level XP/level, separate from stage stars.
- XP sources: stage clears, endgame waves, achievements, daily quests
  (see [agents/liveops-manager.md](../agents/liveops-manager.md)).
- Player Level gates access to Talent Tree points and (later) Prestige.
- Open question: does Player Level cap, or scale indefinitely like
  Endless Mode? Recommend a soft cap with diminishing XP curve to keep
  early levels meaningful.

## 2. Talent Tree

- Permanent, account-wide passive bonuses purchased with Talent Points
  earned from Player Level-ups.
- Should be **small, additive %% bonuses** (e.g. +2% global tower DPS
  per node), not new mechanics — keeps it compatible with
  [docs/BalanceSheet.md](BalanceSheet.md) ratios without rewriting them
  per node. Each node's effect must be expressible as a multiplier
  applied in `DEFAULT_CFG`-derived calculations.
- Coordinate node strength with [balance-designer](../agents/balance-designer.md)
  — a maxed talent tree effectively shifts every DPS/Cost and Reward/HP
  ratio in the game, so the *ceiling* of total talent bonus must be
  bounded and accounted for in balance reviews.

## 3. Prestige

- An optional "soft reset" players can opt into after reaching some
  end-state (e.g. clearing all stages, or reaching a high Endless wave),
  granting a permanent multiplier or unlock in exchange for resetting
  some subset of progress.
- High risk to save compatibility — must define precisely *what* resets
  (gold? tower unlocks? stars?) vs. *what persists* (Player Level,
  Talent Tree, Relics, Codex). Recommend: Prestige resets in-stage
  currency/upgrades only, never Codex/achievements/stars.
- This is the most architecturally invasive item here — should be the
  last of the five implemented, after Player Level/Talents/Relics/Daily
  Quests are stable, so the reset boundary is well understood.

## 4. Relics

- Account-level collectible passive items (separate from per-stage
  Runes — see [GDD.md](GDD.md)/PROJECT_MASTER.md for the existing Rune
  system) that apply small global modifiers once unlocked.
- Sourced from: Prestige rewards, special events
  ([agents/liveops-manager.md](../agents/liveops-manager.md)), or
  high-difficulty Endless milestones.
- Like Talents, each Relic's effect must be a bounded multiplier/additive
  value reviewable against [BalanceSheet.md](BalanceSheet.md).

## 5. Daily Quest

- See [agents/liveops-manager.md](../agents/liveops-manager.md) for the
  full LiveOps spec (rotation, reset cadence, save keys).
- The link to Meta Progression: Daily Quest rewards should be one of the
  primary XP/material sources feeding Player Level and Talent
  Points/Relic materials, so the two systems should be designed in the
  same pass.

## Suggested Implementation Order

1. **Player Level** — foundation; lowest save-schema risk (one new XP
   counter + level derived from it).
2. **Daily Quest** — primary XP feed; design with
   [liveops-manager](../agents/liveops-manager.md).
3. **Talent Tree** — consumes Player Level XP/points; bounded % bonuses.
4. **Relics** — secondary collectibles, can ship incrementally.
5. **Prestige** — last; depends on all of the above being stable so the
   reset/persist boundary is well-defined.

## Ownership

- Overall design: [game-designer](../agents/game-designer.md), in
  coordination with [liveops-manager](../agents/liveops-manager.md)
  (Daily Quest) and [balance-designer](../agents/balance-designer.md)
  (Talent/Relic bonus sizing, Prestige multiplier sizing).
- Save schema: [lead-programmer](../agents/lead-programmer.md) +
  [qa-tester](../agents/qa-tester.md) for save-compatibility testing
  (old saves must load cleanly without these new `tq_*` keys present).
