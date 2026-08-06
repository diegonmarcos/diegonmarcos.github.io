#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_front_sw_register.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_front_sw_register.sh — verify the SW-registration injector.
# Properties under test:
#   • Snippet inserted right before the FIRST </head> in the target.
#   • Marker comment makes injection idempotent (re-running on an
#     already-injected file leaves bytes identical).
#   • Multiple HTML files in the CSV all get injected.
#   • Missing </head> → exit 3, file unchanged.
#   • snippet content survives the round-trip (script tag present).
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
ENGINE="$REPO_ROOT/1_workflows/src/scripts/front-sw-register.sh"
SNIPPET="$REPO_ROOT/1_workflows/src/templates/sw-register-snippet.html"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -x "$ENGINE" ]  || fail "engine not executable: $ENGINE"
[ -f "$SNIPPET" ] || fail "snippet missing: $SNIPPET"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cat > "$TMP/index.html" <<'EOF'
<!DOCTYPE html>
<html><head>
<title>fixture</title>
</head>
<body><h1>hi</h1></body></html>
EOF

cat > "$TMP/page2.html" <<'EOF'
<!DOCTYPE html>
<html>
  <head><title>p2</title></head>
  <body></body>
</html>
EOF

cat > "$TMP/no-head.html" <<'EOF'
<!DOCTYPE html><html><body>no head tag</body></html>
EOF

# 1. Inject into a single file.
"$ENGINE" "$TMP" "$REPO_ROOT" "index.html" >/dev/null
grep -qF 'sw-register: injected' "$TMP/index.html" \
    || fail "index.html: marker comment missing after injection"
grep -qF 'navigator.serviceWorker.register' "$TMP/index.html" \
    || fail "index.html: register() call missing"
grep -qE '</head[[:space:]]*>' "$TMP/index.html" \
    || fail "index.html: </head> got destroyed"
pass "single-file injection: marker + register() + </head> all present"

# 2. Idempotency — re-run leaves file byte-identical.
cp "$TMP/index.html" "$TMP/index.before"
"$ENGINE" "$TMP" "$REPO_ROOT" "index.html" >/dev/null
diff -q "$TMP/index.html" "$TMP/index.before" >/dev/null \
    || fail "re-injection mutated already-injected file"
pass "idempotent: re-running leaves bytes unchanged"

# 3. Marker count must be exactly 1 — never duplicated.
n="$(grep -c 'sw-register: injected' "$TMP/index.html")"
[ "$n" = "1" ] || fail "marker count = $n (expected 1)"
pass "marker appears exactly once"

# 4. Multiple files in CSV.
"$ENGINE" "$TMP" "$REPO_ROOT" "index.html, page2.html" >/dev/null
grep -qF 'sw-register: injected' "$TMP/page2.html" \
    || fail "page2.html: marker missing"
pass "CSV with two files: both processed"

# 5. Missing </head> → exit 3, file unchanged.
cp "$TMP/no-head.html" "$TMP/no-head.before"
rc=0
"$ENGINE" "$TMP" "$REPO_ROOT" "no-head.html" >/dev/null 2>&1 || rc=$?
[ "$rc" = "3" ] || fail "expected exit 3 for missing </head>, got $rc"
diff -q "$TMP/no-head.html" "$TMP/no-head.before" >/dev/null \
    || fail "file without </head> was mutated"
pass "missing </head> → exit 3, file untouched"

# 6. Snippet inserted BEFORE </head>, not after.
# The marker line should appear earlier in the file than the </head>.
marker_line="$(grep -n 'sw-register: injected' "$TMP/page2.html" | head -1 | cut -d: -f1)"
head_line="$(grep -n -E '</head[[:space:]]*>' "$TMP/page2.html" | head -1 | cut -d: -f1)"
[ -n "$marker_line" ] && [ -n "$head_line" ] && [ "$marker_line" -lt "$head_line" ] \
    || fail "marker (line $marker_line) is not before </head> (line $head_line)"
pass "snippet inserted strictly before </head>"
