#!/bin/sh

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/test/test_framework.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# test_framework.sh — verify front's declarative framework is wired correctly
set -e

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
cd "$REPO_ROOT"

fail() { echo "FAIL: $1" >&2; exit 1; }
pass() { echo "  ✓ $1"; }

echo "=== front framework conformance ==="

git config --local --get include.path 2>/dev/null | grep -q '1_workflows/dist/gitconfig' \
    || fail ".git/config missing [include]"
pass ".git/config [include] wired"

[ "$(git config core.hooksPath)" = "1_workflows/dist/hooks" ] \
    || fail "core.hooksPath != 1_workflows/dist/hooks"
pass "hooksPath = 1_workflows/dist/hooks"

git config alias.sync | grep -q 'cloud-git-sync.sh' || fail "alias.sync missing"
pass "alias.sync defined"

[ -x "1_workflows/dist/hooks/pre-commit" ] || fail "pre-commit missing"
pass "pre-commit hook deployed + executable"

[ ! -d "$REPO_ROOT/.githooks" ] || fail ".githooks/ still exists"
pass "no stale .githooks/"

git ls-files .gitconfig 2>/dev/null | grep -q '^.gitconfig$' \
    && fail ".gitconfig still tracked at root"
pass "no stale .gitconfig tracked at root"

grep -q "git config --file .gitmodules" "1_workflows/dist/hooks/pre-commit" \
    || fail "pre-commit not data-driven for submodules"
pass "pre-commit data-driven for submodules"

# Preserve domain engine: _engine.sh must still exist + executable
[ -x "$REPO_ROOT/_engine.sh" ] \
    || fail "_engine.sh (web-project domain engine) missing or not executable"
pass "_engine.sh (domain engine) preserved"

# GHA workflows deployed with generated header
for wf in 1_workflows/src/cicd/*.yml; do
    [ -f "$wf" ] || continue
    name="$(basename "$wf")"
    deployed=".github/workflows/$name"
    [ -f "$deployed" ] || fail "$deployed missing"
    grep -q "GENERATED FILE — DO NOT EDIT" "$deployed" \
        || fail "$deployed missing engine-generated header"
    pass "workflow $name deployed with header"
done

echo "=== all checks passed ==="
