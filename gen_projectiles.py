import time, os
from gen_enemies import fetch, key_white, trim_center, OUT

STYLE = "small game projectile icon, glossy, thick black outline, cel-shaded vibrant colors, centered single object, plain solid white background, die-cut sticker, no text, top-down game asset"

# index matches projectile p.type (= tower type that fired). directional ones point RIGHT (+x)
PROJ = [
    ("proj_cannon",  "dark iron cannonball sphere with glowing orange ember cracks and a little smoke"),
    ("proj_ice",     "pale icy blue crystal snowflake shard, sharp frosty edges, glowing"),
    ("proj_magic",   "glowing purple arcane energy orb with swirling magic runes ring"),
    ("proj_sniper",  "golden glowing energy bullet tracer, pointed and streamlined, pointing right"),
    ("proj_gold",    "shiny gold coin with embossed star, bright yellow metallic shine"),
    ("proj_arrow",   "wooden arrow with steel tip and white feathers, horizontal pointing right"),
    ("proj_heal",    "soft green glowing healing orb with a white medical cross in center"),
    ("proj_thunder", "bright yellow electric lightning bolt, jagged crackling energy, pointing right"),
    ("proj_void",    "dark purple void crescent orb, swirling shadow energy, glowing violet edge"),
]

if __name__ == "__main__":
    import sys
    only = sys.argv[1:] or None
    done, failed = 0, []
    for i, (name, subj) in enumerate(PROJ):
        if only and name not in only:
            continue
        print(f"[{i+1}/{len(PROJ)}] {name}")
        raw = fetch(f"{subj}, {STYLE}", seed=3000 + i)
        if raw is None:
            print("  FAILED"); failed.append(name); continue
        final = trim_center(key_white(raw))
        final.save(os.path.join(OUT, name + ".png"))
        print(f"  saved {name}.png")
        done += 1
        time.sleep(1)
    print(f"\nDone {done}, failed: {failed}")
