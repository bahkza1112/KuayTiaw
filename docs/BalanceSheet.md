# Balance Sheet

Live numeric reference for tower and enemy stats, derived from
`DEFAULT_CFG` and the static arrays in `js/tower.js` / `js/enemy.js`.

> ⚠️ **Keep in sync**: whenever `DEFAULT_CFG`, `t_*`, `m_*`, `MSHIELD`, or
> `MTYPE` change in code, update this file in the same commit (per
> `CLAUDE.md` Documentation Agent role).

---

## 1. Tower Stats (Level 1, base — before synergy/buff/rune)

Source: `DEFAULT_CFG.t_dmg/t_rng/t_rate/t_cost`, `js/tower.js`
(`TSPLASH`, `TSLOW`, `TCHAIN`, `TPIERCE`, `TCANAIR`).

| # | Tower | DMG | Range | Rate (shots/s) | DPS | Cost | DPS/Cost | Splash | Slow | Chain | Pierce | Air |
|---|-------|----:|------:|---------------:|----:|-----:|---------:|:------:|:----:|:-----:|:------:|:---:|
| 0 | Cannon 💣 | 24 | 2.2 | 1.2 | 28.8 | 50 | 0.576 | 0.8 | – | – | – | – |
| 1 | Ice ❄️ | 12 | 2.0 | 1.5 | 18.0 | 55 | 0.327 | – | 45% | – | – | – |
| 2 | Magic ✨ | 44 | 2.5 | 0.8 | 35.2 | 75 | **0.469** | 1.2 | – | – | – | – |
| 3 | Sniper 🎯 | 65 | 4.5 | 0.4 | 26.0 | 65 | 0.400 | – | – | – | ✅ | ✅ |
| 4 | Support 💚 | 0 | 2.8 | – | – | 35 | – | – | – | – | – | – |
| 5 | Archer 🏹 | 20 | 2.8 | 2.0 | 40.0 | 60 | **0.667** | – | – | – | – | ✅ |
| 6 | Gold Mine 💰 | 0 | – | – | – | 75 | – | – | – | – | – | – |
| 7 | Thunder ⚡ | 20 | 2.4 | 1.8 | 36.0 | 85 | 0.424 | – | – | 2 | ✅ | ✅ |

**Per-level scaling** (applies multiplicatively, `lv` = level ≥1):
- `dmg(lv) = base_dmg * (1 + (lv-1) * 0.25)` — +25%/level
- `range(lv) = base_range * (1 + (lv-1) * 0.15)` — +15%/level
- `rate(lv) = base_rate * (1 + (lv-1) * 0.10)` — +10%/level
- Awaken: ×1.15 effective damage (flat, on top of level scaling)

**Gold Mine output**: `t_goldrate=5` (interval seconds), `t_goldamt=[2,4,6,8]`
(per level 1–4).

### Resolved imbalances (v1.6.2)
- **Cannon**: `t_dmg[0]` 28 → 24 (DPS/Cost 0.672 → 0.576) — splash remains
  its differentiator without also leading raw DPS/Cost.
- **Magic**: `t_dmg[2]` 38 → 44 (DPS/Cost 0.405 → 0.469) — now the clear
  premium AoE pick (largest splash + best AoE DPS/Cost).

---

## 2. Enemy Stats (Stage 0, Wave 0 baseline)

Source: `DEFAULT_CFG.m_hp/m_spd/m_rew`, `js/enemy.js` (`MSHIELD`, `MTYPE`,
`MISAIR`).

| # | Enemy | HP | Speed | Reward | Reward/HP | Shield HP | Type | Air |
|---|-------|---:|------:|-------:|----------:|----------:|:----:|:---:|
| 0 | โกบลิน Goblin 👺 | 55 | 1.40 | 10 | 0.182 | – | 0 | – |
| 1 | โครงกระดูก Skeleton 💀 | 75 | 1.00 | 10 | 0.133 | – | 0 | – |
| 2 | เงามืด Shadow 👻 | 105 | 1.15 | 15 | 0.143 | – | 0 | – |
| 3 | วิญญาณไฟ Fire Spirit 🔥 | 144 | 0.85 | 20 | 0.139 | – | 0 | ✅ |
| 4 | บอส Boss 👹 | 380 | 0.50 | 60 | 0.158 | – | 1 | – |
| 5 | โกเลม Golem 🪨 | 236 | 0.55 | 30 | 0.127 | – | 0 | – |
| 6 | ค้างคาว Bat 🦇 | 35 | 1.80 | 5 | 0.143 | – | 0 | ✅ |
| 7 | วิเวิร์น Wyvern 🐉 | 160 | 1.55 | 20 | 0.125 | – | 0 | ✅ |
| 8 | ชิลด์ไนท์ Shield Knight 🛡️ | 129 | 0.65 | 30 | 0.140* | 86 | 0 | – |
| 9 | จอมมาร Demon Lord 👁️ | 900 | 0.42 | 100 | 0.087* | 250 | 1 | – |
|10 | หมอผี Shaman 🧙 | 58 | 0.72 | 10 | 0.172 | – | 0 | – |

\* Reward/HP for shielded enemies computed against `HP + Shield`.

### Skeleton Splitter (v1.7.0)

Skeleton (ti=1) splits on death (unless already a split child) into 2
children at 40% of its current max HP / reward each (`js/enemy.js`,
`_spawnSkeletonSplit`). At the stage-0/wave-0 baseline (HP 75, reward 10):

| | HP | Reward | Reward/HP |
|---|---:|---:|---:|
| Parent (1st kill) | 75 | 10 | 0.133 |
| Each child ×2 | 30 | 4 | 0.133 |
| **Total per spawn** | **135** | **18** | **0.133** |

Reward/HP ratio is preserved (~0.133), but total effective HP/reward per
Skeleton spawn rises to ~180% of baseline — an intentional difficulty/depth
addition, not a reward-economy change. Children render at 0.65× size
(`_sizeMult`) and never split further (`_isSplit`).

**Scaling formulas** (`si` = stage index 0–9, `wave` = wave # within stage):
- `HP(ti, si, wave) = m_hp[ti] * (1 + si * stageMult) * (1 + wave * waveMult)`
- `Speed(ti, si) = min(m_spd[ti] * (1 + si * spdStageMult), spdCap)`
- Weather may apply an extra `hpMult` on spawn (e.g. DARK NIGHT: HP +50%).

### Resolved imbalances (v1.6.2)
- **Shaman**: `m_rew[10]` 18 → 12 (reward/HP 0.257 → 0.171) — now in line
  with other units (~0.13–0.15) while still rewarding priority kills.

### Gold reward rounding (v1.7.2)

All `m_rew` values rounded to a multiple of 5 for cleaner on-screen numbers.
`m_hp` (and Shield Knight's `MSHIELD`) re-derived to preserve each enemy's
original reward/HP ratio — **except Goblin**, which keeps HP=55 (first enemy
players meet) and accepts a higher ratio (0.145 → 0.182) instead of raising
its HP by 25%.

| Enemy | Reward (old→new) | HP (old→new) | Shield (old→new) |
|---|---|---|---|
| Goblin 👺 | 8 → 10 | 55 → 55 (unchanged, ratio 0.145→0.182) | – |
| Skeleton 💀 | 10 → 10 | 75 → 75 | – |
| Shadow 👻 | 15 → 15 | 105 → 105 | – |
| Fire Spirit 🔥 | 18 → 20 | 130 → 144 | – |
| Boss 👹 | 60 → 60 | 380 → 380 | – |
| Golem 🪨 | 28 → 30 | 220 → 236 | – |
| Bat 🦇 | 5 → 5 | 35 → 35 | – |
| Wyvern 🐉 | 20 → 20 | 160 → 160 | – |
| Shield Knight 🛡️ | 28 → 30 | 120 → 129 | 80 → 86 |
| Demon Lord 👁️ | 100 → 100 | 900 → 900 | 250 → 250 |
| Shaman 🧙 | 12 → 10 | 70 → 58 | – |

Net effect: ~+2% total reward economy shift (304→320 across one of each
enemy), reward/HP ratios preserved at ~0.125–0.143 for all enemies except
Goblin (intentional exception).

---

## 3. Curve Constants (`DEFAULT_CFG`)

| Constant | Value | Meaning |
|---|---:|---|
| `stageMult` | 0.22 | Enemy HP +22% per stage index |
| `waveMult` | 0.10 | Enemy HP +10% per wave number |
| `spdStageMult` | 0.04 | Enemy speed +4% per stage index |
| `spdCap` | 2.0 | Max enemy speed multiplier |
| `enemyPerWaveBase` | 4 | Base enemies per wave |
| `enemyPerWaveInc` | 2 | Additional enemies per wave number |
| `bossChance` | 0.08 | Probability of a boss spawn per eligible wave |
| `startGold` | 200 | Starting gold per stage |
| `baseHP` | 20 | Fortress base HP |
| `spawnInterval` | 0.7s | Time between enemy spawns within a wave |

---

## 4. Endgame Difficulty Multipliers

`EG_DIFF_NAMES`: ง่าย (Easy ×0.7) / ปกติ (Normal ×1.0) / ยาก (Hard ×1.5)
— applied to enemy HP via `EG_DIFF_MULT` in `getEgStats()`.
