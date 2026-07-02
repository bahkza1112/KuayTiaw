import requests, os, time, io
from urllib.parse import quote
from PIL import Image
from collections import deque

OUT = os.path.join(os.path.dirname(__file__), "assets", "images")
os.makedirs(OUT, exist_ok=True)

# type index -> (filename, prompt subject)  matching ENAMES order in js/enemy.js
STYLE = "chibi cartoon monster, Kingdom Rush art style, thick black outline, cel-shaded flat vibrant colors, cute but menacing, front three-quarter view, centered single character, plain solid white background, die-cut sticker, no text"

ENEMIES = [
    ("enemy_goblin",       "small green goblin gremlin with big pointy ears, red eyes, tiny leather loincloth, holding a rusty dagger"),
    ("enemy_skeleton",     "undead skeleton warrior, white bones, glowing eye sockets, holding a chipped sword and small round shield"),
    ("enemy_shadow",       "dark purple shadowy ghost wraith, smoky wispy body, glowing white eyes, semi-transparent tattered cloak"),
    ("enemy_fire_spirit",  "fiery flame elemental spirit, orange and red burning body, ember particles, angry glowing yellow eyes"),
    ("enemy_boss_demon",   "big red horned demon boss, muscular, dark armor plates, large clawed hands, glowing orange eyes, menacing grin"),
    ("enemy_golem",        "chunky stone rock golem, mossy boulder body, glowing orange cracks and core, heavy stubby arms"),
    ("enemy_bat",          "cute purple giant bat, big membrane wings spread, red eyes, tiny fangs, small round body"),
    ("enemy_wyvern",       "green two-legged wyvern dragon, leathery wings, sharp claws and teeth, spiky tail, fierce"),
    ("enemy_shield_knight","heavily armored knight, full steel plate armor, huge tower shield with blue emblem, closed helmet"),
    ("enemy_dark_lord",    "dark sorcerer lord, black hooded robe, glowing purple eyes, floating skull staff, purple magic aura"),
    ("enemy_shaman",       "green goblin shaman, tribal bone mask, feathered wooden staff, glowing green magic sparks in hands"),
    ("enemy_berserk",      "grey-skinned orc berserker, twin battle axes, torn armor, red raging eyes, muscular, charging"),
    ("enemy_robot",        "steampunk fantasy robot, bronze metal body, single glowing red visor eye, steam pipes, mechanical legs"),
    ("enemy_mother",       "giant purple spider brood mother, eight legs, glowing egg sac abdomen, multiple red eyes, fangs"),
    ("enemy_naga_king",    "naga serpent king, blue scaled snake body, human torso, golden crown, holding a trident, coiled tail"),
    ("enemy_destroyer",    "divine destroyer god titan, huge, cracked golden armor, dark energy aura, multiple glowing wings"),
    ("enemy_ice_king",     "ice king boss, frozen blue crown and armor, ice crystal staff, glacier blue skin, frosty breath"),
    ("enemy_harpy",        "harpy bird woman, eagle wings and talons, orange feathers, fierce face, diving attack pose"),
    ("enemy_shadow_dragon","black shadow dragon, dark purple scales, smoke and shadow wisps, glowing purple eyes, large wingspan"),
]

def fetch(prompt, seed):
    url = f"https://image.pollinations.ai/prompt/{quote(prompt)}?width=768&height=768&model=flux&nologo=true&seed={seed}"
    for attempt in range(4):
        try:
            r = requests.get(url, timeout=180)
            if r.status_code == 200 and r.content[:8] == b'\x89PNG\r\n\x1a\n' or (r.status_code==200 and len(r.content)>2000):
                return Image.open(io.BytesIO(r.content)).convert("RGBA")
            print(f"    status {r.status_code} len {len(r.content)} retry")
        except Exception as e:
            print(f"    err {e} retry")
        time.sleep(4)
    return None

def key_white(img, thr=232, feather=2):
    """Border-connected flood fill removing near-white bg, saturation-aware."""
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    def is_bg(x, y):
        r, g, b, a = px[x, y]
        mn, mx = min(r, g, b), max(r, g, b)
        sat = mx - mn
        return mx >= thr and sat <= 28
    visited = bytearray(w * h)
    dq = deque()
    for x in range(w):
        for y in (0, h - 1):
            if is_bg(x, y) and not visited[y*w+x]:
                dq.append((x, y)); visited[y*w+x] = 1
    for y in range(h):
        for x in (0, w - 1):
            if is_bg(x, y) and not visited[y*w+x]:
                dq.append((x, y)); visited[y*w+x] = 1
    while dq:
        x, y = dq.popleft()
        r, g, b, a = px[x, y]
        px[x, y] = (r, g, b, 0)
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nx, ny = x+dx, y+dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny*w+nx] and is_bg(nx, ny):
                visited[ny*w+nx] = 1; dq.append((nx, ny))
    # feather: soften alpha on edges
    for _ in range(feather):
        px = img.load()
        soft = []
        for y in range(h):
            for x in range(w):
                if px[x, y][3] == 0:
                    continue
                # if touching a transparent pixel, halve alpha once
                edge = False
                for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
                    nx, ny = x+dx, y+dy
                    if 0 <= nx < w and 0 <= ny < h and px[nx, ny][3] == 0:
                        edge = True; break
                if edge:
                    r, g, b, a = px[x, y]
                    soft.append((x, y, (r, g, b, int(a*0.55))))
        for x, y, v in soft:
            px[x, y] = v
    return img

def trim_center(img, pad_ratio=0.06):
    bbox = img.getbbox()
    if not bbox:
        return img
    cropped = img.crop(bbox)
    w, h = cropped.size
    side = int(max(w, h) * (1 + pad_ratio*2))
    canvas = Image.new("RGBA", (side, side), (0,0,0,0))
    canvas.paste(cropped, ((side-w)//2, (side-h)//2), cropped)
    return canvas.resize((512, 512), Image.LANCZOS)

if __name__ == "__main__":
    import sys
    only = sys.argv[1:] if len(sys.argv) > 1 else None
    done, failed = 0, []
    for i, (name, subj) in enumerate(ENEMIES):
        if only and name not in only:
            continue
        print(f"[{i+1}/{len(ENEMIES)}] {name}")
        prompt = f"{subj}, {STYLE}"
        raw = fetch(prompt, seed=1000+i)
        if raw is None:
            print("  FAILED fetch"); failed.append(name); continue
        keyed = key_white(raw)
        final = trim_center(keyed)
        final.save(os.path.join(OUT, name + ".png"))
        print(f"  saved {name}.png")
        done += 1
        time.sleep(1)
    print(f"\nDone {done}, failed: {failed}")
