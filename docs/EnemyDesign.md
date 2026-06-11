# Enemy Design

Design rationale for the 11 monster types. For raw numbers, see
[`BalanceSheet.md`](BalanceSheet.md). For implementation, see
`js/enemy.js` and `PROJECT_MASTER.md` §4.

## Roster & Roles

| # | Name (TH) | Icon | Archetype | Notes |
|---|-----------|------|-----------|-------|
| 0 | โกบลิน (Goblin) | 👺 | Fast swarm | Early-game filler, low HP |
| 1 | โครงกระดูก (Skeleton) | 💀 | Balanced | Baseline reference unit |
| 2 | เงามืด (Shadow) | 👻 | Drain | Drains nearby towers within 2.2 cells |
| 3 | วิญญาณไฟ (Fire Spirit) | 🔥 | Flying | Requires anti-air towers |
| 4 | บอส (Boss) | 👹 | Boss | High HP, stage-dependent skills |
| 5 | โกเลม (Golem) | 🪨 | Tank | High HP, slow |
| 6 | ค้างคาว (Bat) | 🦇 | Flying swarm | Lowest HP/reward, fast flyer |
| 7 | วิเวิร์น (Wyvern) | 🐉 | Flying tank | High HP flyer |
| 8 | ชิลด์ไนท์ (Shield Knight) | 🛡️ | Shielded | 80 shield HP — needs pierce |
| 9 | จอมมาร (Demon Lord) | 👁️ | Final boss | 250 shield HP, highest HP overall |
| 10 | หมอผี (Shaman) | 🧙 | Support/healer | Heals nearby allies 18% of base HP periodically |

## Design Intent per Archetype

- **Swarm units (Goblin, Bat)**: low individual HP/reward, high speed —
  pressure-test splash/AoE coverage and tower placement near path entry.
- **Flying units (Fire Spirit, Bat, Wyvern)**: only hittable by towers with
  `TCANAIR` (Sniper, Archer, Thunder) — force build diversity in stages
  where they appear.
- **Shielded units (Shield Knight, Demon Lord)**: shield HP must be removed
  via `TPIERCE` towers (Sniper, Thunder) before normal damage applies —
  forces at least one pierce tower in late-game compositions.
- **Tank (Golem)**: high HP, low speed — rewards sustained DPS over burst.
- **Healer (Shaman)**: priority-kill target. Its heal aura (18% of base HP
  to allies within 2.5 cells) can stall a wave indefinitely if ignored.
  Reward should be tuned so it's *worth* prioritizing but not so high that
  farming it trivializes the gold economy (see Roadmap).
- **Drain (Shadow)**: disables synergies on nearby towers for a duration —
  a soft "tower denial" mechanic, distinct from raw HP/speed pressure.
- **Bosses (Boss, Demon Lord)**: execute `skillType = stage.id % 3`
  behaviors (spawn adds / heal / AoE attack). Demon Lord additionally has a
  large shield pool and the highest base HP in the game.

## Scaling Model

`getEnemyHP(ti, si, wave) = m_hp[ti] * (1 + si * stageMult) * (1 + wave * waveMult)`
`getEnemySpd(ti, si) = min(m_spd[ti] * (1 + si * spdStageMult), spdCap)`

- `si` = stage index (0-based), `wave` = wave number within the stage.
- Speed scaling is capped (`spdCap`) so late-stage enemies never become
  unreactable.
- Weather can apply an additional `hpMult` multiplier on spawn.

## Design Backlog

See [Roadmap.md](Roadmap.md) for proposed enemy-balance changes pending
approval (e.g. Shaman reward adjustment).
