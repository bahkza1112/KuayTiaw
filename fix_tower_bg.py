import os
from gen_enemies import fetch, key_tolerant, trim_center, OUT
from gen_tower_evolution import STYLE, TOWERS, TIER_MOD

# name -> (towerIdx, tierIdx) computed the same way gen_tower_evolution.py assigns seeds
NAME_TO_IDX = {}
for ti, (name, _subj) in enumerate(TOWERS):
    for k, tier in enumerate((2, 3, 4)):
        NAME_TO_IDX[f"{name}_s{tier}"] = (ti, k, tier)

FAILED = [
    "tower_magic_s2", "tower_magic_s3", "tower_sniper_s2", "tower_gold_s2",
    "tower_thunder_s3", "tower_thunder_s4", "tower_cannon_s4", "tower_gold_s4",
    "tower_ice_s3", "tower_time_s3", "tower_void_s3",
]

if __name__ == "__main__":
    for name in FAILED:
        ti, k, tier = NAME_TO_IDX[name]
        tower_name, subj = TOWERS[ti]
        seed = 5000 + 3 * ti + k
        prompt = f"{subj}, {TIER_MOD[tier]}, {STYLE}"
        print(f"{name} (seed={seed})")
        raw = fetch(prompt, seed=seed)
        if raw is None:
            print("  FETCH FAILED"); continue
        final = trim_center(key_tolerant(raw))
        final.save(os.path.join(OUT, name + ".png"))
        print(f"  saved {name}.png")
    print("done")
