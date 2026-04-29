#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-cache-hashes-map.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-cache-hashes-map.sh
#
# Emit a JSON object mapping URL paths to truncated SHA-256 hex digests.
# The SW bundle bakes this map in as `BUILD_ASSET_HASHES`, then on every
# cache miss the SW computes the SHA-256 of the response body and compares
# the first 12 hex chars to the expected value. Mismatch ⇒ CDN is serving
# stale bytes ⇒ retry with `?v=<hash>` to bypass the edge cache.
#
# Sibling of `front-cache-hash.sh` (which emits the COMBINED hash used as
# the SW cache version). Both share the truncation rule (first 12 hex of
# sha256) so the two outputs are easy to reason about together.
#
# Usage:
#   front-cache-hashes-map.sh <url1>:<file1> [<url2>:<file2> ...]
#
#   Each argument is a colon-separated pair:
#     <url>   — URL the SW will see (e.g. "./script.js"). Used as JSON key.
#     <file>  — absolute path to the dist/ file whose bytes get hashed.
#
# Output:
#   Compact JSON object on stdout, e.g.:
#     {"./index.html":"8079f2bb6fc1","./script.js":"a1b2c3d4e5f6"}
#
#   When invoked with zero pairs, prints "{}" — useful for the
#   `verify:false` escape hatch in build.json.
#
# Exit codes:
#   0 — success
#   2 — bad usage / malformed pair / missing input file
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

if [ "$#" -eq 0 ]; then
    printf '{}'
    exit 0
fi

# Validate every pair before emitting anything — fail-fast, never produce
# a partial JSON object.
for pair in "$@"; do
    case "$pair" in
        *:*) ;;
        *) echo "✗ malformed pair (expected url:file): $pair" >&2; exit 2 ;;
    esac
    file="${pair#*:}"
    [ -f "$file" ] || { echo "✗ not a file: $file" >&2; exit 2; }
done

printf '{'
first=1
for pair in "$@"; do
    url="${pair%%:*}"
    file="${pair#*:}"
    hash="$(sha256sum -- "$file" | awk '{print substr($1,1,12)}')"
    # Escape backslashes + double-quotes in the URL key (paths shouldn't
    # contain either, but stay defensive — the JSON output is compile-time
    # input to esbuild --define).
    esc_url="$(printf '%s' "$url" | sed 's/\\/\\\\/g; s/"/\\"/g')"
    if [ "$first" -eq 1 ]; then
        first=0
    else
        printf ','
    fi
    printf '"%s":"%s"' "$esc_url" "$hash"
done
printf '}'
