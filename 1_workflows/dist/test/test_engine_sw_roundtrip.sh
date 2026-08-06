#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_engine_sw_roundtrip.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_engine_sw_roundtrip.sh — invoke the FULL engine (build.sh) on the
# sw-min fixture and verify cache invalidation works end-to-end. This
# proves _engine.sh::mod_esbuild_sw correctly delegates to the new
# orchestrator (front-sw-build.sh) and that the wired pipeline produces
# different SW bytes when any hash_of source changes.
#
# Properties under test:
#   • Engine builds the fixture without error.
#   • Resulting SW bundle exists and contains the BUILD_HASH cache key.
#   • Mutating one byte in src/style.css → rebuild → BUILD_HASH changes
#     and SW bundle bytes differ.
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
FIXTURE="$REPO_ROOT/1_workflows/src/test/fixtures/sw-min"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -d "$FIXTURE" ] || fail "fixture not found: $FIXTURE"
[ -x "$REPO_ROOT/1_workflows/src/scripts/_engine.sh" ] || fail "_engine.sh not executable"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Materialise the fixture inside a copy of the front/ tree. We need the
# fixture to live under REPO_ROOT so `git rev-parse --show-toplevel`
# inside _engine.sh resolves to the front repo and locates the helper
# scripts. Use a sibling project dir under front/ that's git-ignored.
WORK="$REPO_ROOT/.tmp-sw-roundtrip"
rm -rf "$WORK"
cp -r "$FIXTURE" "$WORK"
trap 'rm -rf "$WORK" "$TMP"' EXIT

# Project-level build.sh symlink, just like every real project.
ln -sf "$REPO_ROOT/1_workflows/src/scripts/_engine.sh" "$WORK/build.sh"

build() {
    ( cd "$WORK" && ./build.sh build >/tmp/sw-roundtrip.log 2>&1 ) || {
        cat /tmp/sw-roundtrip.log; fail "build.sh failed"
    }
}

build
SW="$WORK/dist/script-service-worker.js"
[ -f "$SW" ] || fail "no SW produced: $SW"
pass "engine built fixture: SW exists"

hash_v1="$(grep -oE 'static-[a-f0-9]{12}' "$SW" | head -1 | sed 's/^static-//')"
[ -n "$hash_v1" ] || fail "no BUILD_HASH found in SW bundle"
pass "BUILD_HASH inlined ($hash_v1)"

# Capture the v1 bundle for byte-diff comparison.
cp "$SW" "$TMP/sw-v1.js"

# Mutate one byte in a hash_of source.
printf 'body { font-family: serif; }\n' > "$WORK/src/style.css"

build
hash_v2="$(grep -oE 'static-[a-f0-9]{12}' "$SW" | head -1 | sed 's/^static-//')"
[ -n "$hash_v2" ] || fail "no BUILD_HASH found in SW bundle (rebuild)"
[ "$hash_v1" != "$hash_v2" ] || fail "BUILD_HASH did not change after style.css mutation"
pass "byte change in style.css → new BUILD_HASH ($hash_v1 → $hash_v2)"

if diff -q "$SW" "$TMP/sw-v1.js" >/dev/null; then
    fail "SW bundle bytes did not change despite hash diff"
fi
pass "SW bundle bytes differ between v1 and v2"
