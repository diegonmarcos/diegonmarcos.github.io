#!/usr/bin/env bash
# test_front_cache_hash.sh — verify the combined-hash engine.
# Properties under test:
#   • Same bytes  → same 12-hex hash (deterministic).
#   • One byte change in any input → different hash (content-aware).
#   • Missing input → exit 2.
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ENGINE="$REPO_ROOT/1_workflows/src/scripts/front-cache-hash.sh"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -x "$ENGINE" ] || fail "engine not executable: $ENGINE"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

printf 'A' > "$TMP/a"
printf 'B' > "$TMP/b"

h1="$("$ENGINE" "$TMP/a" "$TMP/b")"
h2="$("$ENGINE" "$TMP/a" "$TMP/b")"
[ "$h1" = "$h2" ] || fail "non-deterministic: $h1 vs $h2"
pass "same input → same hash ($h1)"

[ "${#h1}" -eq 12 ] || fail "expected 12-hex hash, got ${#h1} chars: $h1"
pass "hash is 12 hex chars"

printf 'X' > "$TMP/b"
h3="$("$ENGINE" "$TMP/a" "$TMP/b")"
[ "$h1" != "$h3" ] || fail "byte change did not change hash: still $h1"
pass "byte change → different hash ($h1 → $h3)"

if "$ENGINE" "$TMP/missing" 2>/dev/null; then
    fail "missing input did not exit non-zero"
fi
pass "missing input → non-zero exit"
