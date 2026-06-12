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

## Pending Discussion

🟡 **Awaken cost re-tuning** — the flat 300-gold Awaken cost (all tower
types) may be underpriced relative to the new per-type Awaken effects added
in v1.6.9 (e.g. Thunder chain 2→4, Support's double-boost). Decision: wait
for playtest feedback on v1.6.9/v1.7.0 before adjusting; if needed, move to
a per-type Awaken cost rather than a flat increase.

🟡 **Gold reward rounding** — rounding `m_rew` values to the nearest 5 for
UI/display clarity would shift the gold economy ~+5-10% on average (most
values round up). If pursued, re-derive `m_hp` alongside the rounded
rewards to preserve current reward/HP ratios (~0.13-0.15) rather than
applying a net economy buff.

## Future / Unscoped Ideas

These are larger and need a dedicated design pass before scoping:

- New tower type(s) / monster type(s) / stage(s) (MINOR)
- Additional rune types
- New achievements
