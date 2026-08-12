#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────
# front-image-encoder.sh
#
# For every *.jpg / *.jpeg / *.png under SRC_DIR (recursive), emits
# *.webp and *.avif siblings. Skips encoding if the sibling is newer
# than the source (idempotent). Cuts page weight ~50% and GPU upload
# time ~50% when consumers use <picture> with the new sources.
#
# Usage:
#     front-image-encoder.sh [SRC_DIR]
#
#     SRC_DIR — directory tree to scan. Default: cwd.
#
# Dependencies (graceful skip if missing):
#     cwebp    — libwebp encoder.   pkg: libwebp / Nix: pkgs.libwebp
#     avifenc  — libavif encoder.   pkg: libavif / Nix: pkgs.libavif
#
# Exit codes:
#     0 — success (or all up-to-date / encoders absent)
#     2 — SRC_DIR not found
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

SRC_DIR="${1:-.}"
if [ ! -d "$SRC_DIR" ]; then
    echo "✗ not a directory: $SRC_DIR" >&2
    exit 2
fi

have_cwebp=0
have_avifenc=0
command -v cwebp   >/dev/null 2>&1 && have_cwebp=1
command -v avifenc >/dev/null 2>&1 && have_avifenc=1

if [ $have_cwebp -eq 0 ] && [ $have_avifenc -eq 0 ]; then
    echo "ℹ no encoder found (cwebp/avifenc) — skipping. Add to flake to enable." >&2
    exit 0
fi

# Idempotency: encode only if sibling missing OR older than source.
needs_encode() {
    local src="$1" sibling="$2"
    [ ! -f "$sibling" ] && return 0
    [ "$src" -nt "$sibling" ] && return 0
    return 1
}

count_w=0; count_a=0; count_skip=0
while IFS= read -r -d '' src; do
    base="${src%.*}"
    if [ $have_cwebp -eq 1 ]; then
        out="${base}.webp"
        if needs_encode "$src" "$out"; then
            cwebp -q 82 -quiet "$src" -o "$out" && count_w=$((count_w+1)) || true
        else count_skip=$((count_skip+1)); fi
    fi
    if [ $have_avifenc -eq 1 ]; then
        out="${base}.avif"
        if needs_encode "$src" "$out"; then
            avifenc --min 24 --max 32 --speed 6 "$src" "$out" >/dev/null 2>&1 && count_a=$((count_a+1)) || true
        else count_skip=$((count_skip+1)); fi
    fi
done < <(find "$SRC_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

echo "─────────────────────────────"
printf '✓ encoded %d webp + %d avif (%d already up-to-date)\n' "$count_w" "$count_a" "$count_skip"
