"""Generate 'glow-pulse' idle-animation frame B for each tower image, by boosting
brightness/saturation on already-bright/saturated pixels (glow highlights) — NOT a
fresh AI regeneration, so the silhouette stays pixel-identical to frame A (avoids the
img2img-consistency problem: pollinations/flux has no image-conditioning, so asking it
to redraw the same tower gives a different-looking tower each time)."""
import os
import numpy as np
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


def glow_pulse_frame(path, boost_v=1.35, boost_s=1.15):
    img = Image.open(path).convert("RGBA")
    arr = np.array(img).astype(np.float64)
    rgb = arr[:, :, :3] / 255.0
    a = arr[:, :, 3]
    maxc = rgb.max(axis=2)
    minc = rgb.min(axis=2)
    v = maxc
    s = np.where(maxc > 0, (maxc - minc) / np.where(maxc == 0, 1, maxc), 0)
    glow_mask = (v > 0.55) & (s > 0.25)
    scale_v = np.where(glow_mask, boost_v, 1.0)
    scale_s = np.where(glow_mask, boost_s, 1.0)
    new_v = np.clip(v * scale_v, 0, 1)
    new_s = np.clip(s * scale_s, 0, 1)
    ratio = np.where(v > 0, new_v / np.where(v == 0, 1, v), 1.0)
    boosted = rgb * ratio[:, :, None]
    mean = boosted.mean(axis=2, keepdims=True)
    sat_ratio = np.where(s > 0, new_s / np.where(s == 0, 1, s), 1.0)[:, :, None]
    boosted = mean + (boosted - mean) * sat_ratio
    boosted = np.clip(boosted, 0, 1)
    out_rgb = (boosted * 255).astype(np.uint8)
    out = np.dstack([out_rgb, a.astype(np.uint8)])
    return Image.fromarray(out, "RGBA")


def frame2_name(fname):
    stem, ext = os.path.splitext(fname)
    return stem + "_g2.png"  # always save frame2 as png regardless of source ext


if __name__ == "__main__":
    jobs = []
    for name, fname in TOWER_BASE_FILES.items():
        jobs.append(fname)
        for tier in (2, 3, 4):
            jobs.append(f"{name}_s{tier}.png")
    done, failed = 0, []
    for fname in jobs:
        src = os.path.join(BASE, fname)
        if not os.path.exists(src):
            print(f"SKIP (missing) {fname}")
            failed.append(fname)
            continue
        out_name = frame2_name(fname)
        out_path = os.path.join(BASE, out_name)
        try:
            im = glow_pulse_frame(src)
            im.save(out_path)
            print(f"saved {out_name}")
            done += 1
        except Exception as e:
            print(f"FAILED {fname}: {e}")
            failed.append(fname)
    print(f"\nDone {done}, failed: {failed}")
