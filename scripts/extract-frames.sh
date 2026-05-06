#!/usr/bin/env bash
# Reproduces the public/frames/* WebP sequence from inputs/plant_growth.mp4.
#
# Two-stage pipeline: ffmpeg (with colorkey to alpha-key the near-white video
# background) → cwebp (preserve alpha). The resulting frames have transparent
# backgrounds, so the page background flows through naturally — no CSS blend
# modes required.
#
# Requires: ffmpeg + cwebp on PATH.
#   brew install ffmpeg webp

set -euo pipefail

SRC="${SRC:-plant_growth.mp4}"
OUT_DIR="${OUT_DIR:-public/frames}"
TMP_DIR="$(mktemp -d -t plant-frames-XXXXXX)"
trap 'rm -rf "$TMP_DIR"' EXIT

if [ ! -f "$SRC" ]; then
  echo "error: $SRC not found. Set SRC=path/to/plant.mp4 or place plant_growth.mp4 at repo root." >&2
  exit 1
fi

if ! command -v ffmpeg >/dev/null; then
  echo "error: ffmpeg not on PATH. Install with: brew install ffmpeg" >&2
  exit 1
fi
if ! command -v cwebp >/dev/null; then
  echo "error: cwebp not on PATH. Install with: brew install webp" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"
rm -f "$OUT_DIR"/*.webp

# Stage 1: PNG with alpha-keyed background.
#   scale=1200:-2  → resize to 1200px wide (-2 = preserve AR, even number)
#   format=rgba    → ensure alpha channel exists for the next filter
#   colorkey       → make pixels within 10% of #F3F4F2 (sampled video bg)
#                    transparent, with a light 6% edge blend.
ffmpeg -y -i "$SRC" \
  -vf "scale=1200:-2:flags=lanczos,format=rgba,colorkey=color=0xF3F4F2:similarity=0.10:blend=0.06" \
  -fps_mode passthrough \
  "$TMP_DIR/frame_%04d.png" </dev/null > /dev/null 2>&1

# Stage 2: PNG → WebP, alpha preserved at high quality.
for f in "$TMP_DIR"/*.png; do
  name="$(basename "${f%.png}.webp")"
  cwebp -q 80 -alpha_q 100 -mt -quiet "$f" -o "$OUT_DIR/$name"
done

count="$(find "$OUT_DIR" -name 'frame_*.webp' | wc -l | tr -d ' ')"
total="$(du -sh "$OUT_DIR" | cut -f1)"
echo "wrote $count frames to $OUT_DIR (total $total)"
