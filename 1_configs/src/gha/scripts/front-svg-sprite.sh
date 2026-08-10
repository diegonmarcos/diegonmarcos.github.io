#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────
# front-svg-sprite.sh
#
# Reads every *.svg in a directory and emits ONE sprite file containing
# every icon as a <symbol id="…"> block. Consumers replace each
#     <img class="icon" src="public/icons/foo.svg">
# with
#     <svg class="icon"><use href="public/icons/sprite.svg#foo"/></svg>
# yielding ONE HTTP fetch + GPU-cached <use> instantiation per icon.
#
# Symbol IDs are the basename of the source SVG, sans extension:
#     icons/brand-github.svg → <symbol id="brand-github">…
#
# Usage:
#     front-svg-sprite.sh [SRC_DIR] [OUT_FILE]
#
#     SRC_DIR  — directory containing *.svg files. Default: cwd.
#     OUT_FILE — output sprite path. Default: $SRC_DIR/sprite.svg.
#
# Idempotent: re-running overwrites the sprite atomically.
#
# Exit codes:
#     0 — success
#     2 — SRC_DIR not found
#     3 — no *.svg found in SRC_DIR
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

# Default SRC_DIR to the SYMLINK's directory when invoked via a symlink
# (mirrors front-data-json-js-wrapper.sh convention). Lets a project's
# `public/icons/build.sh` symlink act as a one-shot regenerator.
SRC_DIR="${1:-$(dirname "${BASH_SOURCE[0]}")}"
OUT_FILE="${2:-${SRC_DIR}/sprite.svg}"

if [ ! -d "$SRC_DIR" ]; then
    echo "✗ not a directory: $SRC_DIR" >&2
    exit 2
fi

shopt -s nullglob
icons=( "$SRC_DIR"/*.svg )
shopt -u nullglob

# Skip the sprite itself if it lives inside SRC_DIR.
filtered=()
for f in "${icons[@]}"; do
    [ "$(basename "$f")" = "$(basename "$OUT_FILE")" ] && continue
    filtered+=( "$f" )
done

if [ ${#filtered[@]} -eq 0 ]; then
    echo "✗ no *.svg files found in $SRC_DIR" >&2
    exit 3
fi

tmp="${OUT_FILE}.tmp"
{
    printf '<?xml version="1.0" encoding="UTF-8"?>\n'
    printf '<!-- GENERATED FROM %d SVGs by front-svg-sprite.sh — DO NOT EDIT BY HAND. -->\n' "${#filtered[@]}"
    printf '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n'
    for f in "${filtered[@]}"; do
        id="$(basename "$f" .svg)"
        # Strip <?xml…?> + <svg …> wrapper, keep inner; rewrap as <symbol>.
        # node is in the front repo's PATH via Nix, same as the JSON wrapper.
        node -e "
          const fs = require('fs');
          const src = fs.readFileSync('$f', 'utf8');
          // Pull viewBox if present so the symbol scales correctly.
          const vb = (src.match(/viewBox\\s*=\\s*\"([^\"]+)\"/) || [,'0 0 24 24'])[1];
          // Strip XML decl + outer <svg …> open + closing </svg>.
          let inner = src
            .replace(/^[\\s\\S]*?<svg[^>]*>/, '')
            .replace(/<\\/svg>\\s*\$/, '')
            .trim();
          process.stdout.write('  <symbol id=\"$id\" viewBox=\"' + vb + '\">' + inner + '</symbol>\n');
        "
    done
    printf '</svg>\n'
} > "$tmp"

mv -f "$tmp" "$OUT_FILE"
echo "✓ sprite: ${#filtered[@]} icon(s) → $OUT_FILE"
