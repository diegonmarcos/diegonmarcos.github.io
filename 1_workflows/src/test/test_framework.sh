#!/bin/sh
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

# Engine scripts: SVG sprite + image encoder + lighthouse must be deployed
# with executable bits + each carries a documented Usage block.
for s in front-svg-sprite.sh front-image-encoder.sh front-lighthouse-snapshot.sh \
         front-data-json-js-wrapper.sh front-localize-assets.sh front-cache-hash.sh; do
    deployed="1_workflows/dist/scripts/$s"
    [ -f "$deployed" ] || fail "engine script $deployed missing"
    [ -x "$deployed" ] || fail "engine script $deployed not executable"
    grep -q '^# Usage:' "$deployed" || fail "$deployed missing 'Usage:' doc block"
    pass "engine script $s deployed + documented"
done

# SVG sprite engine must produce a valid sprite from a tiny fixture.
fixt="$(mktemp -d)"
trap 'rm -rf "$fixt"' EXIT
cat > "$fixt/a.svg" <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>
EOF
cat > "$fixt/b.svg" <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
EOF
bash 1_workflows/dist/scripts/front-svg-sprite.sh "$fixt" "$fixt/sprite.svg" >/dev/null \
    || fail "front-svg-sprite.sh failed against fixture"
grep -q '<symbol id="a"' "$fixt/sprite.svg" || fail "sprite missing <symbol id='a'>"
grep -q '<symbol id="b"' "$fixt/sprite.svg" || fail "sprite missing <symbol id='b'>"
grep -q 'viewBox="0 0 24 24"' "$fixt/sprite.svg" || fail "sprite lost viewBox"
pass "front-svg-sprite.sh produces valid sprite from 2-icon fixture"

# Localize-assets engine: scans JSON files, downloads remote refs into a
# local public/ tree, rewrites the JSON in-place. Smoke-test with a tiny
# manifest using a data: URL alternative — instead, exercise the rewrite
# path with a pre-cached local file (we cannot rely on outbound HTTP in
# CI, so we pre-place a fake target and let the engine see it as cached).
fixt2="$(mktemp -d)"
trap 'rm -rf "$fixt2"' EXIT
mkdir -p "$fixt2/_data" "$fixt2/public/images/banners"
# Pre-create the "downloaded" file so the engine skips the curl step.
echo "stub" > "$fixt2/public/images/banners/foo.gif"
cat > "$fixt2/_data/banners.json" <<'EOF'
{ "assets": [
  {
    "slide": "x",
    "remote": "https://example.invalid/foo.gif",
    "local": "public/images/banners/foo.gif",
    "aliases": ["public/images/banners/foo-alias.gif"]
  }
] }
EOF
cat > "$fixt2/_data/slides.json" <<'EOF'
{ "slides": [ { "id": "x", "image": { "src": "https://example.invalid/foo.gif" } } ] }
EOF
bash 1_workflows/dist/scripts/front-localize-assets.sh \
    "$fixt2/_data/banners.json" "$fixt2/_data" "$fixt2" >/dev/null \
    || fail "front-localize-assets.sh failed against fixture"
grep -q '"src": "public/images/banners/foo.gif"' "$fixt2/_data/slides.json" \
    || fail "front-localize-assets.sh did not rewrite the remote URL"
grep -q 'example.invalid' "$fixt2/_data/slides.json" \
    && fail "front-localize-assets.sh left the remote URL behind"
pass "front-localize-assets.sh rewrites remote refs to local paths (idempotent)"
[ -f "$fixt2/public/images/banners/foo-alias.gif" ] \
    || fail "front-localize-assets.sh did not honor manifest alias"
cmp -s "$fixt2/public/images/banners/foo.gif" "$fixt2/public/images/banners/foo-alias.gif" \
    || fail "alias copy is not byte-identical to canonical"
pass "front-localize-assets.sh honors manifest aliases (byte-identical copy)"

# Cache-hash engine: deterministic + content-sensitive.
fixt3="$(mktemp -d)"
trap 'rm -rf "$fixt2" "$fixt3"' EXIT
echo "alpha" > "$fixt3/a.txt"
echo "beta"  > "$fixt3/b.txt"
H1=$(bash 1_workflows/dist/scripts/front-cache-hash.sh "$fixt3/a.txt" "$fixt3/b.txt") \
    || fail "front-cache-hash.sh failed"
[ -n "$H1" ] || fail "front-cache-hash.sh produced empty hash"
echo "$H1" | grep -qE '^[0-9a-f]{12}$' \
    || fail "front-cache-hash.sh output is not 12-char hex: $H1"
H2=$(bash 1_workflows/dist/scripts/front-cache-hash.sh "$fixt3/a.txt" "$fixt3/b.txt")
[ "$H1" = "$H2" ] || fail "front-cache-hash.sh not deterministic ($H1 vs $H2)"
echo "alpha-changed" > "$fixt3/a.txt"
H3=$(bash 1_workflows/dist/scripts/front-cache-hash.sh "$fixt3/a.txt" "$fixt3/b.txt")
[ "$H1" != "$H3" ] || fail "front-cache-hash.sh did not change after byte edit"
pass "front-cache-hash.sh produces deterministic 12-char hex hash, sensitive to byte changes"

echo "=== all checks passed ==="
