#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────
# front-sw-precache.sh
#
# Serialize a comma-separated URL list to a compact JSON array string.
# Used by `front-sw-build.sh` to turn build.json's `precache` field
# (which the engine flattens to "a,b,c") into the literal JS array text
# that gets injected via `esbuild --define:BUILD_PRECACHE=...`.
#
# Pure data transform. No side effects, no file reads. Matches the
# previous inline node/awk fallback in _engine.sh that this script
# replaces.
#
# Usage:
#   front-sw-precache.sh "url1,url2,url3"
#
# Output:
#   Compact JSON array on stdout, e.g.:
#     ["./","./index.html","./script.js"]
#
#   Empty input → "[]"
#   Whitespace around items is trimmed.
#
# Exit codes:
#   0 — success (always — empty input is valid)
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

input="${1:-}"

if [ -z "$input" ]; then
    printf '[]'
    exit 0
fi

printf '['
first=1
# IFS=, splits on commas. Trim whitespace per item.
old_ifs="$IFS"
IFS=','
for item in $input; do
    IFS="$old_ifs"
    # Strip leading/trailing whitespace.
    trimmed="$(printf '%s' "$item" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')"
    [ -z "$trimmed" ] && continue
    # JSON-escape backslashes + double quotes.
    esc="$(printf '%s' "$trimmed" | sed 's/\\/\\\\/g; s/"/\\"/g')"
    if [ "$first" -eq 1 ]; then
        first=0
    else
        printf ','
    fi
    printf '"%s"' "$esc"
    IFS=','
done
IFS="$old_ifs"
printf ']'
