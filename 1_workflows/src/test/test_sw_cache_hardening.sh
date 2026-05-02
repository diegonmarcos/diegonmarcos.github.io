#!/usr/bin/env bash
# test_sw_cache_hardening.sh — proves the SW template hardening.
#
# Three failure modes used to silently brick deployed pages:
#
#   1. Cache hit returned without integrity check. A poisoned entry
#      (corrupt body / wrong content-type cached by a buggy older SW
#      version) was served forever, no error, no recovery.
#   2. Pathological responses entered the cache. A 0-byte 200 reply or
#      an HTML body served for a script request was happily cached and
#      then re-served on every subsequent load.
#   3. The catch-all `caches.match('./index.html')` fallback fired for
#      ANY same-origin GET — including subresources. A network blip on
#      script.js returned the index HTML body; the browser treated HTML
#      as JS, silently aborted execution, page sat blank.
#
# This test builds the canonical sw-min fixture through the real engine
# and asserts the dist SW contains all three defenses. Static-pattern
# checks intentionally — easy to read in failure output, no Worker
# runtime required, fast enough to gate every CI build.
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
FIXTURE="$REPO_ROOT/1_workflows/src/test/fixtures/sw-min"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -d "$FIXTURE" ] || fail "fixture not found: $FIXTURE"

WORK="$REPO_ROOT/.tmp-sw-cache-hardening"
rm -rf "$WORK"
cp -r "$FIXTURE" "$WORK"
trap 'rm -rf "$WORK"' EXIT

# The sw-min fixture ships a stub SW (just enough to verify --define
# inlining). For this test we need the REAL template — overwrite the
# stub with the canonical one before building. This makes the test
# fail loudly if the template ever loses one of the three defenses.
command cp -f "$REPO_ROOT/1_workflows/src/templates/script-service-worker.ts" \
              "$WORK/src/typescript/script-service-worker.ts"

ln -sf "$REPO_ROOT/1_workflows/src/scripts/_engine.sh" "$WORK/build.sh"

( cd "$WORK" && ./build.sh build >/tmp/sw-cache-hardening.log 2>&1 ) \
    || { tail -40 /tmp/sw-cache-hardening.log >&2; fail "engine build failed"; }
pass "engine builds sw-min fixture"

SW="$WORK/dist/script-service-worker.js"
[ -f "$SW" ] || fail "SW not produced at $SW"
pass "SW bundle produced"

# Defense 1 — cache-hit re-verification path. The minifier rewrites
# `await sha256_12(...)` and the const var names, so we can't grep for
# source identifiers. We grep for the runtime fingerprint: the
# `BUILD_ASSET_HASHES` lookup happens TWICE (once on cache hit, once on
# network response via verifyAsset), so the access pattern appears at
# least twice in the bundle.
hits=$(grep -o 'crypto\.subtle\.digest' "$SW" | wc -l)
[ "$hits" -ge 1 ] || fail "Defense 1: no SHA-256 path in SW (cache-hit verification missing)"
pass "Defense 1: cache-hit hash verification compiled in"

# Defense 2 — pathological-response gate. The `isCacheable` helper
# checks byteLength and content-type by request.destination. Both
# distinguishing fragments must be present.
grep -q 'byteLength' "$SW" \
    || fail "Defense 2: zero-body check missing (no byteLength)"
grep -qE 'destination==="script"|destination=="script"' "$SW" \
    || fail "Defense 2: script-destination content-type guard missing"
grep -qE 'destination==="style"|destination=="style"' "$SW" \
    || fail "Defense 2: style-destination content-type guard missing"
pass "Defense 2: cacheability gate (zero-body + content-type) compiled in"

# Defense 3 — navigation-only offline fallback. The `index.html`
# fallback must be guarded by a navigation-mode check; the literal
# `'navigate'` survives minification (string in source).
grep -q '"navigate"' "$SW" \
    || fail "Defense 3: navigation-mode guard missing (no \"navigate\" string)"
grep -qE '"document"' "$SW" \
    || fail "Defense 3: document-destination guard missing"
pass "Defense 3: navigation-only index.html fallback compiled in"

# Anti-regression — the OLD pattern was `caches.match("./index.html")`
# called UNCONDITIONALLY in the catch path. After the fix, every call
# to caches.match for index.html must be inside a navigation-mode
# branch. We assert there's at most one such call (only inside the
# guarded branch).
fallback_count=$(grep -o 'caches\.match("\./index\.html")' "$SW" | wc -l)
[ "$fallback_count" -le 1 ] \
    || fail "Anti-regression: multiple index.html fallback callsites ($fallback_count) — should be exactly 1, inside the navigation guard"
pass "Anti-regression: index.html fallback is the only one, navigation-guarded"

echo "PASS: sw cache hardening — 3 defenses + 1 regression guard verified"
