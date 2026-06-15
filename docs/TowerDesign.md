# Tower Design

Design rationale and roles for the 8 tower types. For raw numbers, see
[`BalanceSheet.md`](BalanceSheet.md). For implementation, see
`js/tower.js` and `PROJECT_MASTER.md` §3.

## Roster & Roles

| # | Name (TH) | Icon | Role | Niche |
|---|-----------|------|------|-------|
| 0 | ปืนใหญ่ (Cannon) | 💣 | Splash/AoE | Cheap general-purpose AoE |
| 1 | น้ำแข็ง (Ice) | ❄️ | Crowd control | Slows groups, low DPS |
| 2 | เวทมนตร์ (Magic) | ✨ | Splash/AoE | Premium AoE specialist |
| 3 | สไนเปอร์ (Sniper) | 🎯 | Single-target | Longest range, pierces shields, hits air |
| 4 | ซัพพอร์ต (Support) | 💚 | Buff aura | No direct damage, boosts nearby towers |
| 5 | ธนู (Archer) | 🏹 | Single-target | Cheap anti-air DPS |
| 6 | เหมืองทอง (Gold Mine) | 💰 | Economy | No combat, generates gold over time |
| 7 | สายฟ้า (Thunder) | ⚡ | Chain/AoE | Hits 2 targets, pierces shields |

## Design Intent per Role

- **AoE towers (Cannon, Magic)**: should trade single-target DPS efficiency
  for splash damage. Cannon = budget AoE; Magic = premium AoE with the
  largest splash radius. These two should NOT have similar DPS/cost — Magic
  must clearly out-value Cannon in multi-enemy scenarios to justify its
  higher cost.
- **Single-target specialists (Sniper, Archer)**: Archer is the cheap,
  high-rate anti-air option. Sniper trades fire rate for huge range, pierce,
  and per-hit damage — its value is positional flexibility and shield
  penetration, not raw DPS/cost.
- **Crowd control (Ice)**: intentionally the lowest DPS/cost — its value is
  entirely in the 45% slow effect, which multiplies the effectiveness of
  every other tower in range.
- **Utility (Support, Gold Mine)**: zero direct damage by design. Support
  buffs nearby tower levels; Gold Mine trades a board slot for economy.
- **Chain (Thunder)**: highest base cost, justified by hitting 2 targets
  simultaneously and shield pierce — effective DPS/cost should be evaluated
  per-target-hit, not single-target.

## Upgrade Paths

Each placed tower levels independently along 3 tracks: `dmgLv` (+25%
dmg/level), `rngLv` (+15% range/level), `rateLv` (+10% rate/level).
Path-exclusive perks (pierce shield, rapid fire) unlock at certain
range/rate levels. "Awaken" is an end-tier upgrade currently granting a
flat power boost (+15% effective damage, +13% rune effect) plus a
distinct visual aura glow (per-type colored as of v1.6.8).

## Built-in Skills & Awaken Effects (Design Target)

Each tower's targeting style, passive built-in skill, and intended
per-type Awaken effect:

| Tower | Targeting | Built-in Skill | Awaken Effect (target design) |
|---|---|---|---|
| 💣 Cannon | Single (splash centered on target) | — | Splash becomes full-area AoE |
| ❄️ Ice | Single | 45% slow, can hit flying enemies | Freezes (stuns) target for 3s |
| ✨ Magic | AoE | 20% chance to fire 2 shots | 2→3 shots, chance 20%→40% |
| 🎯 Sniper | Single | Can hit flying enemies | Shot pierces in a straight line |
| 💚 Support | Cannot attack | Cleanses monster debuffs/weather effects from towers in range | Doubles the Awaken bonus of nearby awakened towers (e.g. Ice freeze 3s→6s) |
| 🏹 Archer | Single, anti-air | Fast fire rate | — |
| 💰 Gold Mine | Cannot attack | Produces 5 gold per tick; upgrades reduce cooldown | Gold output ×2 |
| ⚡ Thunder | Single + chain | Chains to 1–2 nearby enemies | Chains to 2–4 nearby enemies |

> **Implementation status**: as of v1.6.9, the Awaken upgrade grants both the
> generic bonus (flat +15% effective damage, +13% rune bonus, per-type-colored
> aura glow — see [`_twAura`](../js/tower.js)) **and** the per-type
> effects in the table above (Cannon splash ×1.5, Ice freeze 3s/6s, Magic
> 20%→40% extra-shot chance, Sniper pierce-line, Support doubles nearby
> Awaken bonuses, Gold Mine output ×2, Thunder chain 2→4). See
> [Roadmap.md](Roadmap.md) for status.

## Runes

Equippable modifiers (`RUNES`, `js/tower.js`) — one per tower:

| Icon | Name | Effect |
|---|---|---|
| 🔥 | อัคนีรูน | 25% chance to ignite — DoT 8 dmg ×5 over 2.5s |
| ❄️ | หิมะรูน | Slow effect +25%, duration +1s |
| ⚡ | พายุรูน | On hit: 35% chance to chain to 1 nearby enemy (40% dmg) |
| 🎯 | แม่นยำรูน | 20% crit chance → ×2.5 damage |
| 💰 | ทองรูน | +60% gold from kills |
| 💥 | พลังรูน | +25% damage, all sources |

## Design Backlog

See [Roadmap.md](Roadmap.md) for proposed tower-balance changes pending
approval.
