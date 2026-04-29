#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_front_sw_build.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_front_sw_build.sh — verify the SW build orchestrator end-to-end.
# Properties under test:
#   • Output bundle is created.
#   • BUILD_HASH define is inlined (12-hex string).
#   • BUILD_PRECACHE is inlined as a JSON array literal containing every
#     declared URL.
#   • BUILD_ASSET_HASHES is inlined as a JSON object containing every
#     hash_of file under its "./<name>" key.
#   • verify=false → BUILD_ASSET_HASHES is "{}".
#   • Same hash_of bytes → identical BUILD_HASH; one byte change → diff.
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ENGINE="$REPO_ROOT/1_workflows/src/scripts/front-sw-build.sh"
FIXTURE="$REPO_ROOT/1_workflows/src/test/fixtures/sw-min"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -x "$ENGINE" ]  || fail "orchestrator not executable: $ENGINE"
[ -d "$FIXTURE" ] || fail "fixture not found: $FIXTURE"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cp -r "$FIXTURE/." "$TMP/"

DIST="$TMP/dist"
mkdir -p "$DIST"

# Stage the dist/ files the SW will hash. We bypass the full engine here
# so this test is independent of the wider build pipeline.
cp "$TMP/src/index.html" "$DIST/index.html"
cp "$TMP/src/style.css"  "$DIST/style.css"
printf 'console.log("v1");' > "$DIST/script.js"

OUT="$DIST/script-service-worker.js"

run_orch() {
    local verify="$1"
    "$ENGINE" \
        "$TMP/src/typescript/script-service-worker.ts" \
        "$OUT" \
        "index.html,script.js,style.css" \
        "./,./index.html,./script.js,./style.css" \
        "$verify" \
        "prod" \
        "iife" \
        "es2020" \
        "$DIST" \
        "$REPO_ROOT" \
        > /tmp/sw-build.log 2>&1
}

run_orch true || { cat /tmp/sw-build.log; fail "orchestrator failed (verify=true)"; }
[ -f "$OUT" ] || fail "no output produced: $OUT"
pass "verify=true: orchestrator succeeded + output exists"

bundle="$(cat "$OUT")"

# BUILD_HASH inlined as cache key — extract the hash for later comparison.
hash_v1="$(printf '%s' "$bundle" | grep -oE 'static-[a-f0-9]{12}' | head -1 | sed 's/^static-//')"
[ -n "$hash_v1" ] || fail "BUILD_HASH not inlined (no static-<hex> in bundle)"
[ "${#hash_v1}" -eq 12 ] || fail "BUILD_HASH wrong length: $hash_v1"
pass "BUILD_HASH inlined ($hash_v1)"

# BUILD_PRECACHE: the array literal must contain every declared URL.
for url in "./" "./index.html" "./script.js" "./style.css"; do
    case "$bundle" in
        *"\"$url\""*) ;;
        *) fail "BUILD_PRECACHE missing URL: $url" ;;
    esac
done
pass "BUILD_PRECACHE contains all declared URLs"

# BUILD_ASSET_HASHES: must contain every hash_of key with a 12-hex value.
for key in "./index.html" "./script.js" "./style.css"; do
    if ! printf '%s' "$bundle" | grep -qE "\"$key\":\"[a-f0-9]{12}\""; then
        fail "BUILD_ASSET_HASHES missing or malformed entry for $key"
    fi
done
pass "BUILD_ASSET_HASHES contains all hash_of files with 12-hex values"

# Determinism: same inputs → same bundle.
cp "$OUT" "$TMP/sw-1st.js"
run_orch true || fail "second build failed"
diff -q "$OUT" "$TMP/sw-1st.js" >/dev/null || fail "rebuild produced different bundle bytes"
pass "deterministic: same inputs → identical bundle"

# Sensitivity: mutate one byte → BUILD_HASH changes.
printf 'console.log("v2");' > "$DIST/script.js"
run_orch true || fail "third build failed"
hash_v2="$(grep -oE 'static-[a-f0-9]{12}' "$OUT" | head -1 | sed 's/^static-//')"
[ "$hash_v1" != "$hash_v2" ] || fail "byte change did not change BUILD_HASH (still $hash_v1)"
pass "byte change in script.js → new BUILD_HASH ($hash_v1 → $hash_v2)"

# verify=false → BUILD_ASSET_HASHES is "{}".
run_orch false || fail "verify=false build failed"
case "$(cat "$OUT")" in
    *'{}'*) ;;
    *) fail "verify=false: expected '{}' marker in bundle" ;;
esac
# It must NOT contain real hashes for any hash_of file.
if grep -qE '"\./script\.js":"[a-f0-9]{12}"' "$OUT"; then
    fail "verify=false: BUILD_ASSET_HASHES still contains hashes"
fi
pass "verify=false → BUILD_ASSET_HASHES is empty"
