#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-cache-hash.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-cache-hash.sh
#
# Derive a deterministic short hash from a list of files. The hash is
# the truncated sha256 of the per-file sha256 digests. Same inputs +
# same byte content → same hash, every time. Any byte change in any
# input → different hash.
#
# Used by the build pipeline to inject a content-aware cache key into
# Service Workers + asset URLs, so caches invalidate automatically when
# any source byte changes — no manual VERSION bumps.
#
# Usage:
#   front-cache-hash.sh <file1> [file2 ...]
#
# Output: 12-char lowercase hex on stdout (truncated sha256).
#
# Exit codes:
#   0 — success
#   2 — bad usage / missing input file
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

if [ "$#" -eq 0 ]; then
    grep -E '^# (Usage|Output)' "$0" >&2
    exit 2
fi

for f in "$@"; do
    [ -f "$f" ] || { echo "✗ not a file: $f" >&2; exit 2; }
done

# Step 1: per-file sha256 in declared order.
# Step 2: sha256 of the concatenated digests, truncated to 12 hex chars.
sha256sum -- "$@" | awk '{print $1}' | sha256sum | awk '{print substr($1,1,12)}'
