import time, os
from gen_enemies import fetch, key_white, trim_center, OUT

STYLE = "chunky cartoon 3D game asset, 3/4 isometric view, stone tower defense game tower, vibrant colors, dark fantasy theme, clean design, plain solid white background, die-cut sticker, no text"

# base subject per tower type (matches _TWSPRITE order in js/tower.js)
TOWERS = [
    ("tower_cannon",  "medieval stone cannon tower, bronze cannon barrel, red flag"),
    ("tower_ice",     "ice crystal tower, blue frozen stone walls, icicles, glowing blue gem on top"),
    ("tower_magic",   "arcane wizard tower, purple stone walls, glowing arcane runes, floating magical orb on top"),
    ("tower_sniper",  "tall narrow stone watchtower, crossbow mounted on top, dark green flag"),
    ("tower_support", "healing shrine tower, green glowing crystal on pillar, vines and leaves"),
    ("tower_minigun", "wooden and steel gatling tower, rotating multi-barrel gun mounted on top"),
    ("tower_gold",    "gold mine tower, stone building with golden roof, coins spilling from window"),
    ("tower_thunder", "lightning rod tower, tall metal spire, electric coils, sparks crackling around top"),
    ("tower_void",    "void sorcery tower, dark obsidian stone, purple void energy swirling around top"),
    ("tower_time",    "clockwork time tower, ornate clock face, cyan glowing gears, purple aura"),
]

# tier modifier appended to subject — describes the evolution stage
TIER_MOD = {
    2: "reinforced with extra metal plating and gemstones, brighter glow, slightly bigger and sturdier",
    3: "heavily upgraded with ornate carvings and crystal growths, strong magical glow, more imposing",
    4: "legendary max evolution, radiant golden trim and glowing runes, grand ornate design, powerful aura, most impressive and majestic form",
}

if __name__ == "__main__":
    import sys
    only = sys.argv[1:] or None
    done, failed = 0, []
    jobs = [(f"{name}_s{tier}", f"{subj}, {TIER_MOD[tier]}") for name, subj in TOWERS for tier in (2, 3, 4)]
    for i, (name, subj) in enumerate(jobs):
        if only and name not in only:
            continue
        print(f"[{i+1}/{len(jobs)}] {name}")
        raw = fetch(f"{subj}, {STYLE}", seed=5000 + i)
        if raw is None:
            print("  FAILED"); failed.append(name); continue
        final = trim_center(key_white(raw))
        final.save(os.path.join(OUT, name + ".png"))
        print(f"  saved {name}.png")
        done += 1
        time.sleep(1)
    print(f"\nDone {done}, failed: {failed}")
