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

## Synergies

Cross-tower bonuses defined in `SYNERGY` (`js/tower.js`):

| From → To | Effect | Bonus | Flavor |
|---|---|---|---|
| Ice → Magic | +dmg | +20% | ความเย็นยะเยือก |
| Magic → Thunder | +dmg | +20% | ตัวนำเวทมนตร์ |
| Cannon → Sniper | +dmg | +15% | ชี้เป้าระดมยิง |
| Archer → Cannon | +dmg | +15% | สอดแนมตำแหน่ง |
| Ice → Sniper | +slow | +30% | กระสุนเยือกแข็ง |
| Support → Gold Mine | +gold | +25% | ขุมทองคุ้มกัน |

Synergies are designed to encourage mixed builds rather than mono-tower
spam — each high-value combo requires placing a "support" type tower
(Ice, Cannon, Archer, Support) near a "payoff" type (Magic, Thunder,
Sniper, Gold Mine).

## Upgrade Paths

Each placed tower levels independently along 3 tracks: `dmgLv` (+25%
dmg/level), `rngLv` (+15% range/level), `rateLv` (+10% rate/level).
Path-exclusive perks (pierce shield, rapid fire) unlock at certain
range/rate levels. "Awaken" is an end-tier upgrade granting a flat power
boost (+15% effective damage) plus a distinct 3D visual aura.

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
