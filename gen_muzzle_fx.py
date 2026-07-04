import time, os
from gen_enemies import fetch, key_white, trim_center, OUT

STYLE = "small game muzzle-flash effect icon, glossy, thick black outline, cel-shaded vibrant colors, dynamic explosive energy burst, centered single effect, plain solid white background, die-cut sticker, no text, top-down game asset"

# index matches tower type (skips 4=Support, 6=Gold Mine — they don't fire)
MUZZLE = [
    ("fx_muzzle_cannon",  "orange fireball explosion burst with grey smoke puffs and sparks"),
    ("fx_muzzle_ice",     "pale blue frost star burst, sharp icy crystal shards radiating outward"),
    ("fx_muzzle_magic",   "glowing purple arcane sparkle burst, magic diamond shards radiating outward"),
    ("fx_muzzle_sniper",  "bright white-yellow sharp energy crack flash, thin piercing light burst"),
    ("fx_muzzle_archer",  "small yellow spark burst, quick bright flash with tiny particles"),
    ("fx_muzzle_thunder", "bright yellow jagged lightning arc burst, electric spark explosion"),
    ("fx_muzzle_void",    "dark purple void implosion swirl, shadow energy collapsing inward"),
    ("fx_muzzle_time",    "cyan clock-tick energy pulse burst, glowing time-warp ripple"),
]

if __name__ == "__main__":
    import sys
    only = sys.argv[1:] or None
    done, failed = 0, []
    for i, (name, subj) in enumerate(MUZZLE):
        if only and name not in only:
            continue
        print(f"[{i+1}/{len(MUZZLE)}] {name}")
        raw = fetch(f"{subj}, {STYLE}", seed=4000 + i)
        if raw is None:
            print("  FAILED"); failed.append(name); continue
        final = trim_center(key_white(raw))
        final.save(os.path.join(OUT, name + ".png"))
        print(f"  saved {name}.png")
        done += 1
        time.sleep(1)
    print(f"\nDone {done}, failed: {failed}")
