#!/usr/bin/env bash
# test_front_cache_hashes_map.sh — verify the per-file hash-map engine.
# Properties under test:
#   • No args      → "{}"
#   • One pair     → {"<url>":"<hash>"} with valid 12-hex value
#   • Multiple     → all keys present, JSON well-formed
#   • Missing file → exit 2
#   • Hash matches the truncation rule (first 12 hex of sha256)
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ENGINE="$REPO_ROOT/1_workflows/src/scripts/front-cache-hashes-map.sh"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -x "$ENGINE" ] || fail "engine not executable: $ENGINE"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Empty case
out="$("$ENGINE")"
[ "$out" = "{}" ] || fail "empty input expected '{}', got '$out'"
pass "no args → '{}'"

# One pair
printf 'hello' > "$TMP/a.txt"
expected="$(sha256sum "$TMP/a.txt" | awk '{print substr($1,1,12)}')"
out="$("$ENGINE" "./a.txt:$TMP/a.txt")"
[ "$out" = "{\"./a.txt\":\"$expected\"}" ] \
    || fail "one pair: expected '{\"./a.txt\":\"$expected\"}', got '$out'"
pass "one pair → matches sha256-12 truncation"

# Multiple pairs (preserve order)
printf 'world' > "$TMP/b.txt"
expected_b="$(sha256sum "$TMP/b.txt" | awk '{print substr($1,1,12)}')"
out="$("$ENGINE" "./a.txt:$TMP/a.txt" "./b.txt:$TMP/b.txt")"
case "$out" in
    "{\"./a.txt\":\"$expected\",\"./b.txt\":\"$expected_b\"}") ;;
    *) fail "two pairs: unexpected output '$out'" ;;
esac
pass "two pairs → both keys present in declared order"

# Missing file
if "$ENGINE" "./x:$TMP/no-such" 2>/dev/null; then
    fail "missing file did not exit non-zero"
fi
pass "missing file → non-zero exit"

# Malformed pair (no colon)
if "$ENGINE" "no-colon" 2>/dev/null; then
    fail "malformed pair did not exit non-zero"
fi
pass "malformed pair → non-zero exit"
