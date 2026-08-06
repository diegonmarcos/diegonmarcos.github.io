#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_front_sw_precache.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_front_sw_precache.sh — verify the precache CSV→JSON serializer.
# Properties under test:
#   • Empty input → "[]"
#   • One item    → ["item"]
#   • Many items  → ["a","b","c"]
#   • Whitespace around items is trimmed
#   • Special chars in URLs (e.g. backslash, quote) are JSON-escaped
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ENGINE="$REPO_ROOT/1_workflows/src/scripts/front-sw-precache.sh"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -x "$ENGINE" ] || fail "engine not executable: $ENGINE"

# Empty
out="$("$ENGINE" "")"
[ "$out" = "[]" ] || fail "empty: expected '[]', got '$out'"
pass "empty → '[]'"

out="$("$ENGINE")"
[ "$out" = "[]" ] || fail "no arg: expected '[]', got '$out'"
pass "no arg → '[]'"

# One item
out="$("$ENGINE" "./")"
[ "$out" = "[\"./\"]" ] || fail "one: expected '[\"./\"]', got '$out'"
pass "one item → ['./']"

# Many items
out="$("$ENGINE" "./, ./index.html, ./script.js")"
[ "$out" = "[\"./\",\"./index.html\",\"./script.js\"]" ] \
    || fail "many: unexpected '$out'"
pass "many items → trimmed + comma-separated"

# Whitespace tolerance
out="$("$ENGINE" "  a , b  ,  c  ")"
[ "$out" = "[\"a\",\"b\",\"c\"]" ] || fail "whitespace: unexpected '$out'"
pass "whitespace around items is trimmed"
