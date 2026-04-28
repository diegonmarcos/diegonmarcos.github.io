#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-data-json-js-wrapper.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-data-json-js-wrapper.sh
#
# Wraps every *.json file in a directory as a *.json.js companion that
# assigns the parsed JSON to globalThis.PORTAL_DATA[<key>]. Lets HTML
# pages load the data via plain <script src="…json.js"></script> with
# no fetch / no CORS — works under file:// too.
#
# Output filenames are PREFIXED with `data-` to namespace them clearly:
#     personal-tools.json   →   data-personal-tools.json.js
# The PORTAL_DATA key stays as the bare basename (no prefix), so
# consumer code reads PORTAL_DATA["personal-tools"].
#
# Usage:
#     front-data-json-js-wrapper.sh [DIR]
#
#     DIR — directory containing the *.json files. Default: cwd.
#
# Exit codes:
#     0  — success
#     1  — invalid JSON encountered (file path printed to stderr)
#     2  — DIR not found / not a directory
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

# When invoked via a symlink (e.g. a-Portals/_data/build.sh → this script),
# default DIR to the SYMLINK's directory, not the script target's. That makes
# `bash a-Portals/_data/build.sh` (no args) wrap the JSONs sitting next to
# the symlink. Override with an explicit DIR arg.
DIR="${1:-$(dirname "${BASH_SOURCE[0]}")}"
if [ ! -d "$DIR" ]; then
    echo "✗ not a directory: $DIR" >&2
    exit 2
fi
cd "$DIR"

count=0
shopt -s nullglob
for f in *.json; do
    key="${f%.json}"
    out="data-${key}.json.js"
    # Validate JSON before wrapping. node is in the front repo's PATH via Nix.
    if ! node -e "JSON.parse(require('fs').readFileSync('$f','utf8'))" 2>/dev/null; then
        echo "✗ invalid JSON: $DIR/$f" >&2
        exit 1
    fi
    {
        printf '// GENERATED FROM %s by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.\n' "$f"
        printf '// Re-generate with: bash a-Portals/_data/build.sh\n'
        printf '(function () {\n'
        printf '  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);\n'
        printf '  g.PORTAL_DATA = g.PORTAL_DATA || {};\n'
        printf '  g.PORTAL_DATA[%s] = ' "\"$key\""
        cat "$f"
        printf ';\n'
        printf '})();\n'
    } > "$out"
    count=$((count + 1))
    echo "✓ $f → $out"
done
shopt -u nullglob

echo "─────────────────────────────"
echo "Wrapped $count JSON file(s) → $count data-*.json.js"
