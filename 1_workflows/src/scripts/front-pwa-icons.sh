#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────
# front-pwa-icons.sh
#
# Generate the full set of PWA app-icons from one source image.
# Emits exactly the 3 icons every modern PWA install flow expects:
#
#   icon-192.png            192x192   PNG  purpose=any         (Android home, Chrome install banner)
#   icon-512.png            512x512   PNG  purpose=any         (high-density splash, Windows tile)
#   icon-maskable-512.png   512x512   PNG  purpose=maskable    (Android adaptive: 10% safe-zone padding,
#                                                               so the OS can clip to circle/squircle/etc.
#                                                               without cutting off the logo)
#
# Bonus emitted artefacts:
#   apple-touch-icon-180.png 180x180  PNG (iOS home-screen icon spec)
#
# All outputs are deterministic w.r.t. (source, BG_HEX) — re-running with
# the same inputs produces byte-identical files (idempotent), so the
# cache-hash engine sees a stable hash unless the source actually changed.
#
# Usage:
#   front-pwa-icons.sh SOURCE_IMG OUT_DIR [BG_HEX]
#
#     SOURCE_IMG  — path to a square (or near-square) source. PNG/JPG/SVG ok.
#     OUT_DIR     — directory to write the icons into. Created if absent.
#     BG_HEX      — fill colour for the maskable safe-zone, default #000000.
#                   Use the same value as your manifest's background_color.
#
# Exit codes:
#   0 — success
#   2 — bad usage / missing input / ImageMagick absent
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

SRC="${1:-}"
OUT="${2:-}"
BG="${3:-#000000}"

if [ -z "$SRC" ] || [ -z "$OUT" ]; then
    grep -E '^# (Usage|SOURCE_IMG|OUT_DIR|BG_HEX)' "$0" >&2
    exit 2
fi
[ -f "$SRC" ] || { echo "✗ source image not found: $SRC" >&2; exit 2; }
command -v magick >/dev/null 2>&1 || command -v convert >/dev/null 2>&1 \
    || { echo "✗ ImageMagick (magick/convert) is required" >&2; exit 2; }

mkdir -p "$OUT"

# Use IM7 `magick` if available, else legacy `convert`.
IM="magick"; command -v magick >/dev/null 2>&1 || IM="convert"

emit() {
    local out="$1" size="$2" purpose="$3"
    if [ "$purpose" = "maskable" ]; then
        # Android adaptive icons clip to a centred circle of ~80% diameter.
        # Render the source at 80% of the canvas size and pad the rest
        # with BG so nothing important falls outside the safe zone.
        local inner=$(( size * 80 / 100 ))
        $IM "$SRC" \
            -strip \
            -resize "${inner}x${inner}^" \
            -gravity center \
            -background "$BG" -extent "${size}x${size}" \
            -define png:compression-level=9 \
            "$out"
    else
        $IM "$SRC" \
            -strip \
            -resize "${size}x${size}^" \
            -gravity center \
            -extent "${size}x${size}" \
            -define png:compression-level=9 \
            "$out"
    fi
    echo "  ✓ $(basename "$out")  ${size}x${size}  purpose=${purpose}"
}

emit "$OUT/icon-192.png"             192 any
emit "$OUT/icon-512.png"             512 any
emit "$OUT/icon-maskable-512.png"    512 maskable
emit "$OUT/apple-touch-icon-180.png" 180 any

echo "─────────────────────────────"
echo "✓ generated 4 PWA icons in $OUT (BG=$BG)"
