#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_engine_copy_glob.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_engine_copy_glob.sh — verify `mod_copy` correctly handles a
# `files: "*"` pattern, which previously silently degenerated into the
# names of files in the project root (instead of files in src/).
#
# Properties under test:
#   • `files: "*"` from build.json copies EVERY top-level file in src/
#     into dist/.
#   • Subdirectories under src/ are skipped (mod_copy only handles files).
#   • Multiple comma-separated patterns work alongside each other.
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

[ -x "$REPO_ROOT/1_workflows/src/scripts/_engine.sh" ] || fail "_engine.sh not executable"

# Materialise a tiny fixture under the repo so $REPO_ROOT inside _engine.sh
# resolves correctly (mod_copy reads PROJECT_DIR + REPO_ROOT from
# parse_repo_config).
WORK="$REPO_ROOT/.tmp-copy-glob-test"
rm -rf "$WORK"
mkdir -p "$WORK/src/sub"
trap 'rm -rf "$WORK"' EXIT

# Three top-level files + one subdir file. Only the top-level files
# should land in dist (mod_copy ignores subdirectories).
echo '<html></html>' > "$WORK/src/index.html"
echo 'a=1'           > "$WORK/src/data.txt"
echo 'console.log(0)' > "$WORK/src/app.js"
echo 'nested'        > "$WORK/src/sub/nested.txt"

cat > "$WORK/build.json" <<'EOF'
{
  "name": "copy-glob-test",
  "framework": "vanilla",
  "src": "src",
  "dist": "dist",
  "build": [
    { "mod": "copy", "files": "*", "from": "src" }
  ]
}
EOF

ln -sf "$REPO_ROOT/1_workflows/src/scripts/_engine.sh" "$WORK/build.sh"

( cd "$WORK" && ./build.sh build > /tmp/copy-glob-test.log 2>&1 ) || {
    cat /tmp/copy-glob-test.log
    fail "build.sh build failed"
}

[ -f "$WORK/dist/index.html" ] || fail "dist/index.html missing — mod_copy did not honour 'files: \"*\"'"
[ -f "$WORK/dist/data.txt" ]    || fail "dist/data.txt missing"
[ -f "$WORK/dist/app.js" ]      || fail "dist/app.js missing"
pass "files: \"*\" copies every top-level src/ file"

[ ! -e "$WORK/dist/sub" ] && [ ! -e "$WORK/dist/nested.txt" ] \
    || fail "subdirectory leaked into dist (mod_copy should only handle files)"
pass "subdirectories under src/ are skipped"

# Also verify multi-pattern still works (regression check that the
# noglob fix didn't break the explicit-CSV path).
cat > "$WORK/build.json" <<'EOF'
{
  "name": "copy-glob-test",
  "framework": "vanilla",
  "src": "src",
  "dist": "dist",
  "build": [
    { "mod": "copy", "files": "index.html, *.txt", "from": "src" }
  ]
}
EOF
rm -rf "$WORK/dist"
( cd "$WORK" && ./build.sh build > /tmp/copy-glob-test.log 2>&1 ) || {
    cat /tmp/copy-glob-test.log
    fail "build.sh build (multi-pattern) failed"
}
[ -f "$WORK/dist/index.html" ] || fail "multi-pattern: dist/index.html missing"
[ -f "$WORK/dist/data.txt" ]   || fail "multi-pattern: dist/data.txt missing (glob *.txt did not fire)"
[ ! -f "$WORK/dist/app.js" ]   || fail "multi-pattern: dist/app.js leaked (was not in the patterns)"
pass "CSV with explicit name + extension glob both expand correctly"
