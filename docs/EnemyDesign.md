# Enemy Design

Design rationale for the 11 monster types. For raw numbers, see
[`BalanceSheet.md`](BalanceSheet.md). For implementation, see
`js/enemy.js` and `PROJECT_MASTER.md` §4.

## Roster & Roles

| # | Name (TH) | Icon | Archetype | Notes |
|---|-----------|------|-----------|-------|
| 0 | โกบลิน (Goblin) | 👺 | Fast swarm / Pack Rush | Early-game filler, low HP; gets +20% speed when another Goblin is within 1.2 cells |
| 1 | โครงกระดูก (Skeleton) | 💀 | Splitter | On death, splits into 2 smaller skeletons (40% HP/reward each) |
| 2 | เงามืด (Shadow) | 👻 | Drain | Drains nearby towers within 2.2 cells |
| 3 | วิญญาณไฟ (Fire Spirit) | 🔥 | Flying / Scorch Flare | Requires anti-air towers; periodically flares for 1.5s, taking 30% less damage |
| 4 | บอส (Boss) | 👹 | Boss | High HP, stage-dependent skills |
| 5 | โกเลม (Golem) | 🪨 | Tank / Armor Crack | High HP, slow; starts with 24% damage reduction that cracks away (24%→16%→8%→0%) as its HP drops below 75/50/25% |
| 6 | ค้างคาว (Bat) | 🦇 | Flying swarm / Erratic Dodge | Lowest HP/reward, fast flyer; 25% chance to dodge any incoming hit entirely |
| 7 | วิเวิร์น (Wyvern) | 🐉 | Flying tank / Disruptor | High HP flyer; periodically dive-bombs, gaining 1.5× speed for 1.2s and stunning 1 random tower for 3s |
| 8 | ชิลด์ไนท์ (Shield Knight) | 🛡️ | Shielded / Shield Regen | 86 shield HP — needs pierce; regenerates 15% of max shield/sec after 4s without taking damage |
| 9 | จอมมาร (Demon Lord) | 👁️ | Final boss | 250 shield HP, highest HP overall |
| 10 | หมอผี (Shaman) | 🧙 | Support/healer | Heals nearby allies 18% of base HP periodically |

## Design Intent per Archetype

- **Swarm units (Goblin, Bat)**: low individual HP/reward, high speed —
  pressure-test splash/AoE coverage and tower placement near path entry.
- **Pack Rush (Goblin)**: any Goblin within 1.2 cells of another Goblin gets
  +20% movement speed (shown with a green dust trail). Rewards killing
  Goblins quickly before they cluster and punishes leaving gaps where
  groups can bunch up. Implemented in both story and endgame loops
  (`js/game.js`, `_packBoost`).
- **Erratic Dodge (Bat)**: every incoming hit has a 25% chance to be dodged
  entirely (no damage, "MISS!" popup + white flicker ring). Combined with
  its already-low HP, this makes Bats feel slippery rather than just
  "low HP fast flyer" — rewards AoE/multi-shot towers that can land enough
  hits to overcome the dodge chance. Implemented in `applyDmg` (`js/enemy.js`).
- **Scorch Flare (Fire Spirit)**: every ~6s (with initial random offset),
  flares for 1.5s, taking 30% less damage (shown with a pulsing orange
  ring + "🔥 ป้องกัน!" popup). Rewards burst damage timed between flares and
  punishes relying on a single slow-firing tower. Implemented in both story
  and endgame loops (`js/game.js`, `_flareT`/`flareCd`) and `applyDmg`
  (`js/enemy.js`).
- **Armor Crack (Golem)**: starts with 24% damage reduction that cracks away
  in stages (24%→16%→8%→0%) as its HP drops below 75%/50%/25%, shown with
  additional crack lines on its sprite. Rewards sustained DPS that can push
  through the early high-armor phase, while finishing it off becomes
  progressively easier. Implemented in `applyDmg` (`js/enemy.js`) and the
  enemy draw loop (`js/game.js`, `_armorPct`).
- **Shield Regen (Shield Knight)**: if it goes 4s without taking damage, its
  shield regenerates at 15% of max shield/sec (shown with a pulsing blue
  ring) until full. Punishes "tag and ignore" play and rewards focused fire
  or kiting it within range continuously. Implemented in both story and
  endgame loops (`js/game.js`, `_noDmgT`) and `applyDmg` (`js/enemy.js`).
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
- **Disruptor (Wyvern)**: every ~5s (with initial random offset), dives —
  moves at 1.5× speed for 1.2s and stuns 1 random placed tower for 3s
  (stunned tower cannot acquire targets or fire, shown with an orange
  pulsing overlay + 💫 icon). Rewards spreading tower coverage so a single
  stunned tower doesn't open a gap, and punishes over-reliance on one
  high-value tower. Implemented in both story and endgame loops
  (`js/game.js`, `_diveT`/`_stunT`/`diveCd`).
- **Splitter (Skeleton)**: on death (if not already a split child), spawns 2
  smaller skeletons at 40% of its current max HP and reward each (combined
  80% — reward/HP ratio unchanged at ~0.133). Split children render at 0.65×
  size and do not split again. Raises Skeleton's total effective HP/reward
  per spawn to ~180%, rewarding AoE towers (Cannon/Magic/Thunder) that can
  clean up the smaller children efficiently.
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
