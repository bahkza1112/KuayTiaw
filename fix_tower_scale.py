"""Normalize each tower evolution tier's visual scale to match its own 1★ base image's
content-fill-ratio (how much of the square frame the artwork occupies). The AI-generated
tier art was cropped/trimmed independently per image, so tiers ended up filling their
frame more tightly than the base art — since drawTowerIcon draws every tier at the same
fixed box size, a tighter-cropped tier renders visually bigger and overshoots the
ground-shadow ellipse (which is sized off the game grid, not the art), looking like the
tower is floating/oversized relative to its own shadow."""
import os
from PIL import Image

BASE = os.path.join(os.path.dirname(__file__), "assets", "images")

TOWER_BASE_FILES = {
    "tower_cannon": "tower_cannon.png",
    "tower_ice": "tower_ice.png",
    "tower_magic": "tower_magic.png",
    "tower_sniper": "tower_sniper.png",
    "tower_support": "tower_support.png",
    "tower_minigun": "tower_minigun.webp",
    "tower_gold": "tower_gold.png",
    "tower_thunder": "tower_thunder.png",
    "tower_void": "tower_void.png",
    "tower_time": "tower_time.png",
}


def target_fill_ratio(base_path):
    base = Image.open(base_path).convert("RGBA")
    bw, bh = base.size
    bbox = base.getbbox()
    return (bbox[3] - bbox[1]) / bh


def normalize_scale(tier_path, out_path, target_fill):
    tier = Image.open(tier_path).convert("RGBA")
    tw_, th_ = tier.size
    bbox = tier.getbbox()
    if not bbox:
        tier.save(out_path)
        return 1.0
    cropped = tier.crop(bbox)
    cw, ch = cropped.size
    canvas_size = max(tw_, th_)
    desired_ch = canvas_size * target_fill
    scale = desired_ch / ch if ch else 1.0
    new_w, new_h = max(1, round(cw * scale)), max(1, round(ch * scale))
    resized = cropped.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    x = (canvas_size - new_w) // 2
    y = (canvas_size - new_h) // 2
    canvas.paste(resized, (x, y), resized)
    canvas.save(out_path)
    return scale


if __name__ == "__main__":
    for name, base_fname in TOWER_BASE_FILES.items():
        base_path = os.path.join(BASE, base_fname)
        fill = target_fill_ratio(base_path)
        print(f"{name}: target_fill={fill*100:.1f}%")
        for tier in (2, 3, 4):
            for variant in ("", "_g2"):
                fname = f"{name}_s{tier}{variant}.png"
                path = os.path.join(BASE, fname)
                if not os.path.exists(path):
                    print(f"  SKIP (missing) {fname}")
                    continue
                scale = normalize_scale(path, path, fill)
                print(f"  {fname}: scale={scale:.3f}")
    print("\ndone")
