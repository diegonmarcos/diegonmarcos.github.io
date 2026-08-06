#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-sw-build.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-sw-build.sh
#
# Service-Worker build orchestrator. The engine module
# `_engine.sh::mod_esbuild_sw` is now a thin wrapper that just collects
# arguments from build.json + invokes this script. All SW-specific
# logic — hash computation, per-asset map, precache serialization,
# esbuild invocation, output validation — lives here.
#
# Why a separate script (vs. inlining in _engine.sh):
#   • Single-responsibility: SW-build is its own concern, not engine plumbing.
#   • Testable in isolation (see 1_workflows/src/tests/test-front-sw-build.sh).
#   • Reusable: any other engine (cloud/, unix/) can call this directly.
#   • Mirrors the pattern of `mod_pwa_icons` → `front-pwa-icons.sh`.
#
# Usage:
#   front-sw-build.sh <input> <output> <hash_of> <precache> <verify> \
#                     <mode> <format> <target> <dist_dir> <repo_root>
#
#     input       — absolute path to SW source (.ts).
#     output      — absolute path to write the bundled SW (.js).
#     hash_of     — comma-separated dist-relative paths whose bytes feed
#                   into BUILD_HASH (and BUILD_ASSET_HASHES if verify=true).
#     precache    — comma-separated URLs to precache at install time.
#     verify      — "true" | "false". When true, also injects
#                   BUILD_ASSET_HASHES so the SW can detect stale CDN bytes
#                   on the wire.
#     mode        — "prod" | "dev". Controls minify/sourcemap.
#     format      — esbuild --format value (e.g. "iife").
#     target      — esbuild --target value (e.g. "es2020").
#     dist_dir    — absolute path to the project's dist/ (resolves hash_of).
#     repo_root   — absolute path to the front/ repo root (locates helpers).
#
# Exit codes:
#   0 — success
#   2 — bad usage / missing input file / hash engine failure / esbuild failure
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

if [ "$#" -ne 10 ]; then
    grep -E '^#' "$0" | head -45 >&2
    exit 2
fi

INPUT="$1"
OUTPUT="$2"
HASH_OF="$3"
PRECACHE="$4"
VERIFY="$5"
MODE="$6"
FORMAT="$7"
TARGET="$8"
DIST_DIR="$9"
REPO_ROOT="${10}"

# ─── Validate inputs ───────────────────────────────────────────
[ -f "$INPUT" ]   || { echo "✗ sw-build: input not found: $INPUT" >&2; exit 2; }
[ -d "$DIST_DIR" ] || { echo "✗ sw-build: dist dir not found: $DIST_DIR" >&2; exit 2; }
[ -d "$REPO_ROOT" ] || { echo "✗ sw-build: repo root not found: $REPO_ROOT" >&2; exit 2; }
[ -n "$HASH_OF" ] || { echo "✗ sw-build: hash_of (list of dist files) is required" >&2; exit 2; }

mkdir -p "$(dirname "$OUTPUT")"

# ─── Locate sibling helper scripts ─────────────────────────────
# Prefer the deployed copy under 1_workflows/dist/; fall back to src/
# so the engine works from a fresh checkout before `1_workflows/build.sh`
# has been run.
locate() {
    local name="$1"
    local p="$REPO_ROOT/1_workflows/dist/scripts/$name"
    [ -x "$p" ] && { printf '%s' "$p"; return; }
    p="$REPO_ROOT/1_workflows/src/scripts/$name"
    [ -x "$p" ] && { printf '%s' "$p"; return; }
    echo "✗ sw-build: $name not found (looked in dist/scripts and src/scripts)" >&2
    exit 2
}

HASH_ENGINE="$(locate front-cache-hash.sh)"
MAP_ENGINE="$(locate front-cache-hashes-map.sh)"
PRECACHE_ENGINE="$(locate front-sw-precache.sh)"

# ─── Resolve hash_of paths against dist/ ───────────────────────
# Build two parallel data sets:
#   • hash_paths   — space-separated absolute paths for the combined hash
#   • map_pairs    — space-separated "url:path" pairs for the per-asset map
hash_paths=""
map_pairs=""
old_ifs="$IFS"
IFS=','
for f in $HASH_OF; do
    IFS="$old_ifs"
    f="$(printf '%s' "$f" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')"
    [ -z "$f" ] && { IFS=','; continue; }
    abs="$DIST_DIR/$f"
    [ -f "$abs" ] || { echo "✗ sw-build: hash_of file missing in dist: $abs" >&2; exit 2; }
    hash_paths="$hash_paths $abs"
    # The SW sees URLs relative to the SW scope, which for our setup is
    # always the dist root → "./<file>". Normalise here so build.json
    # can keep the ergonomic "script.js" form.
    map_pairs="$map_pairs ./$f:$abs"
    IFS=','
done
IFS="$old_ifs"

# ─── Compute combined hash (BUILD_HASH) ────────────────────────
BUILD_HASH="$("$HASH_ENGINE" $hash_paths)" || {
    echo "✗ sw-build: hash engine failed" >&2; exit 2;
}
[ -n "$BUILD_HASH" ] || { echo "✗ sw-build: empty hash" >&2; exit 2; }

# ─── Per-asset hash map (BUILD_ASSET_HASHES) ───────────────────
# When verify=false, emit "{}" so the SW's verification path no-ops
# without any source-side conditionals.
if [ "$VERIFY" = "false" ]; then
    BUILD_ASSET_HASHES="{}"
else
    BUILD_ASSET_HASHES="$("$MAP_ENGINE" $map_pairs)" || {
        echo "✗ sw-build: hashes-map engine failed" >&2; exit 2;
    }
fi

# ─── Precache list (BUILD_PRECACHE) ────────────────────────────
BUILD_PRECACHE="$("$PRECACHE_ENGINE" "$PRECACHE")" || {
    echo "✗ sw-build: precache engine failed" >&2; exit 2;
}

# ─── esbuild invocation ────────────────────────────────────────
# --define expects the literal text the constant should expand to. For a
# string we wrap in escaped quotes; for arrays/objects we pass the JSON
# directly. Single-quote the JSON to avoid shell interpolation of $ inside.
ESBUILD_BIN="esbuild"
command -v esbuild >/dev/null 2>&1 || ESBUILD_BIN="npx esbuild"

set -- \
    --bundle \
    --format="$FORMAT" \
    --target="$TARGET" \
    --outfile="$OUTPUT" \
    --define:BUILD_HASH="\"$BUILD_HASH\"" \
    --define:BUILD_PRECACHE="$BUILD_PRECACHE" \
    --define:BUILD_ASSET_HASHES="$BUILD_ASSET_HASHES"

if [ "$MODE" = "dev" ]; then
    set -- "$@" --sourcemap
else
    set -- "$@" --minify
fi

# shellcheck disable=SC2086
$ESBUILD_BIN "$INPUT" "$@" || { echo "✗ sw-build: esbuild failed" >&2; exit 2; }

[ -f "$OUTPUT" ] || { echo "✗ sw-build: produced no output: $OUTPUT" >&2; exit 2; }

# ─── Summary line (consumed by engine for log_success) ─────────
# Format: "<basename> hash=<hash> precache=<n> verify=<bool>"
n_precache=0
if [ -n "$PRECACHE" ]; then
    n_precache="$(printf '%s' "$PRECACHE" | awk -F, '{c=0; for(i=1;i<=NF;i++) if($i!~/^[[:space:]]*$/) c++; print c}')"
fi
printf '%s hash=%s precache=%s verify=%s\n' \
    "$(basename "$OUTPUT")" "$BUILD_HASH" "$n_precache" "$VERIFY"
