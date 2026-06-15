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

✅ **Stage enemy roster rebalance** (v1.9.2) — reworked `enemyTypes` for
Stages 1-10 so every listed type is actually reachable by `startWave()`'s
spawn formula, capped at ≤7 types per stage (mostly 4-6). High-difficulty
stages (Dark Fortress, Dark Throne, Dark Tower Summit) drop low-tier
Goblin/Skeleton in favor of their signature higher-tier enemies (Wyvern,
Shield Knight, Shaman, Demon Lord). Stage 11 keeps its full 11-type roster
as the intentional "every monster returns" exception. File: `js/game.js`
(`STAGES[1..9].enemyTypes`).

✅ **Enemy order by HP** (v1.9.3) — follow-up to v1.9.2: reordered
Stages 3-9's `enemyTypes` by ascending HP (Bat 35 → Goblin 55 → Shaman 58 →
Skeleton 75 → Shadow 105 → Shield Knight 129 → Fire Spirit 144 → Wyvern 160
→ Golem 236, Boss/Demon Lord last since they spawn via separate overrides).
Wave 1 of every stage now starts with its lowest-HP type instead of
occasionally a tanky one like Golem. Also fixed Stage 10's intro cutscene
mentioning Goblin (no longer in its roster) → Bat. File: `js/game.js`
(`STAGES[3..9].enemyTypes`), `js/ui.js` (`CUTSCENES[9]`).

> See [BalanceSheet.md](BalanceSheet.md) for full current numbers and
> derivations.

✅ **Endless Mode reward/HP decay fix** (v1.9.18) — `spawnEgEnemy()`'s
reward now scales via `getEgRewardBonus()`, a capped multiplier
(`min(1+egRound*0.15, 3.0)`) instead of the old flat `+egRound*2`. At
`egRound≈14` (where the HP `roundBonus` caps), reward/HP recovers from
0.065 → 0.109 for normal enemies (e.g. Goblin, baseline 0.182) and from
0.017 → 0.075 for Demon Lord (baseline 0.087, incl. shield). Late-Endless
enemies are still tankier per gold than early rounds (by design), but the
gap is now ~40% instead of ~65-80%. File: `js/game.js` (`spawnEgEnemy`,
new `getEgRewardBonus`).

---

## UI/UX Improvements (PATCH/MINOR-level)

✅ **HUD tower-stat clarity** (v1.6.4) — tower popup now shows an effective
DPS stat (damage × fire rate) and an inline `(+X% synergy)` badge on the
damage stat when a synergy bonus is active.

✅ **Mobile responsiveness pass** (v1.6.3) — verified HUD, popups, dev panel,
and codex at 375px. Fixed `body`/`#gr` vertical-centering so the gameplay
screen is top-aligned, consolidating unused space below instead of
splitting it above/below. Canvas remains width-constrained (1.2:1 aspect)
— a full fix would require changing canvas internal resolution/grid
(tracked under Future/Unscoped Ideas if revisited).

---

## Visual / Animation Polish (MINOR-level)

✅ **Boss-specific VFX** (v1.6.5) — bosses now show a ~1s telegraph aura
(pulsing ring + icon, color-coded per `skillType = stage.id % 3`) before
Enrage/Summon/Self-heal triggers, giving players advance warning.

✅ **Screen-transition polish** (v1.6.4) — `showScreen()` now applies a
fade/slide-in animation (`.screen-enter`) to all screen switches, and
end-of-stage/pause overlays (`.obox`) pop in with a scale-fade instead of
appearing instantly.

---

✅ **"What's New" patch notes screen** (v1.7.1) — clicking the version label
on the main menu opens a player-facing patch-notes screen (`PATCH_NOTES` in
`js/ui.js`), with an unread red-dot badge tracked via
`localStorage.tq_lastSeenVer`. Every future update must add a `PATCH_NOTES`
entry alongside the `CHANGELOG.md` entry.

---

## QA / Regression

✅ **Post-refactor verification (v1.6.1)** — confirmed via live browser test
that `css/main.css` + `js/{save,enemy,tower,game,ui}.js` reconstruct the
original monolith's behavior with no console errors across menu, story
mode, combat, weather, codex, dev panel, and endgame screens.

✅ **`agents/` folder** (v1.6.6) — added per-role guides
([agents/README.md](../agents/README.md)) expanding `CLAUDE.md`'s AI Team
section with project-specific file pointers for each role.

✅ **Full playtest pass + bugfixes** (v1.6.7) — played through menu → story
→ combat → game over → retry → codex → leaderboard → endgame on desktop and
375px mobile. Fixed stale wave counter on Retry and a garbled leaderboard
empty-state string. No other console errors or regressions found.

✅ **Tower visual diversity pass** (v1.6.8) — Awaken aura now uses each
tower's `TACCENT` element color instead of generic gold, and the 5 previously
static weapon sprites (Cannon, Ice, Sniper, Archer, Gold Mine) now have subtle
idle animations matching Magic/Support/Thunder. Purely visual, no balance or
save changes.

---

## Tower Awaken System (MINOR-level)

✅ **Per-type Awaken effects** (v1.6.9) — the generic Awaken bonus (+15%
effective dmg, +13% rune bonus, per-type aura color) is now joined by a
unique effect per tower type: Cannon splash ×1.5, Ice freezes target (slow=0)
for 3s (6s if an awakened Support is in range), Magic's extra-shot chance
20%→40% (up to 3 total shots), Sniper pierces in a straight line damaging
enemies behind the target, Support doubles nearby awakened towers' bonuses
(Ice freeze duration, Gold Mine synergy bonus), Gold Mine output ×2, Thunder
chain targets 2→4. Archer unchanged per design. See
[TowerDesign.md → Built-in Skills & Awaken
Effects](TowerDesign.md#built-in-skills--awaken-effects-design-target) for
details.

## Monster Mechanics (MINOR-level)

✅ **Skeleton Splitter** (v1.7.0) — Skeleton (💀) now splits on death into 2
smaller skeletons at 40% HP/reward each (combined 80%, reward/HP ratio
unchanged at ~0.133), rendered at 0.65× size and unable to split again. Gives
the previously "baseline/no special" Skeleton a distinct identity and rewards
AoE towers (Cannon/Magic/Thunder) for cleaning up the spawned children. See
[EnemyDesign.md](EnemyDesign.md) and [BalanceSheet.md](BalanceSheet.md#skeleton-splitter-v170)
for details.

✅ **Wyvern Dive Bomb** (v1.7.4) — Wyvern (🐉) now periodically (~every 5s,
randomized first trigger) dives: moves at 1.5× speed for 1.2s and stuns 1
random placed tower for 3s (stunned tower cannot acquire targets or fire,
shown with a pulsing orange overlay + 💫 icon). Gives the previously
"flying tank, no special" Wyvern a distinct Disruptor identity and rewards
spreading tower coverage so no single stunned tower opens a path gap.
Implemented in both story and endgame combat loops. See
[EnemyDesign.md](EnemyDesign.md#design-intent-per-archetype) for details.

✅ **Monster Mechanic Pass — Goblin/Fire Spirit/Golem/Bat/Shield Knight**
(v1.8.0) — completes the monster revamp by giving the remaining "plain"
monsters distinct mechanics:
- 👺 **Goblin Pack Rush**: +20% speed when another Goblin is within 1.2 cells.
- 🔥 **Fire Spirit Scorch Flare**: periodically takes 30% less damage for 1.5s.
- 🪨 **Golem Armor Crack**: 24% damage reduction that cracks to 16%→8%→0% as
  HP drops below 75%/50%/25%.
- 🦇 **Bat Erratic Dodge**: 25% chance to dodge any hit entirely.
- 🛡️ **Shield Knight Shield Regen**: regenerates 15% of max shield/sec after
  4s without taking damage.

Every monster type now has a distinct mechanical identity beyond raw
HP/speed/reward numbers. See
[EnemyDesign.md](EnemyDesign.md#design-intent-per-archetype) for details.

## Economy (PATCH-level)

✅ **Awaken cost re-tuning** (v1.7.3) — flat Awaken cost 300 → 350 gold for
all tower types, re-tuned given the per-type Awaken effects added in v1.6.9
(e.g. Thunder chain 2→4, Support's double-boost). (`js/tower.js`)

✅ **Gold reward rounding** (v1.7.2) — `m_rew` rounded to nearest 5 (Goblin
8→10, Fire Spirit 18→20, Golem 28→30, Shield Knight 28→30, Shaman 12→10).
`m_hp`/`MSHIELD` re-derived to preserve reward/HP ratios (Fire Spirit
130→144, Golem 220→236, Shield Knight 120→129/shield 80→86, Shaman 70→58),
except Goblin keeps HP=55 (intentional ratio exception for the first enemy
players meet). Net ~+2% economy shift. See
[BalanceSheet.md](BalanceSheet.md#gold-reward-rounding-v172).

## New Content (MINOR-level)

✅ **Stage 11 — Shadow Remnant** (v1.9.0) — new true-final story stage
(`id:10`), unlocked after Dark Tower Summit. 13 waves, full enemy roster
(every monster type 0–10 incl. Demon Lord/Shaman), `bossChance:.13`, new
40-waypoint path + violet/black "abyss" palette, heaviest weather pool
(darknight/lightning/blizzard/tornado/fog), 3-slide intro cutscene, and a new
"ผู้ยุติเงามืด" achievement. Dark Tower Summit (Stage 10) is no longer the
final stage — it now leads into Shadow Remnant for the true ending. No new
tower/monster mechanics, so Codex is unchanged.

✅ **Storm Survivor achievement** (v1.13.2) — new `eghw` 🌩️ achievement,
unlocked by clearing an Endgame wave on Hard difficulty while a weather
effect is active. Builds on the v1.12.7 Endgame-weather fix. File:
`js/save.js` (`ACHIEVEMENTS`), `js/game.js` (`updateEg`).

## Future / Unscoped Ideas

These are larger and need a dedicated design pass before scoping:

- New tower type(s) / monster type(s) (MINOR)
- More achievement ideas (beyond Shadow Remnant v1.9.0 and Storm Survivor v1.13.2)

✅ **Demon Lord shield cap fix in Endless** (v1.9.20) — `MSHIELD[9]*(1+
egRound*0.3)` is now capped at the same ×3.5 `roundBonus` cap used for HP
(boss-type enemies), so Demon Lord's reward/HP flattens at ~-14% from
egRound≈12 onward instead of declining to -30% by egRound=20. File:
`js/game.js` (`spawnEgEnemy`). See
[BalanceSheet.md](BalanceSheet.md#demon-lord-shield-cap-fix-v1920).
