#!/usr/bin/env bash
# ============================================================================
# myID — declarative integrity tester
# ----------------------------------------------------------------------------
# Reads build.json + mock.json as source of truth; never hardcodes paths.
# Runs: build.sh clean → build.sh build → assertions on dist/ + asset refs.
# Exits 0 on success, non-zero on first failure.
# ============================================================================
set -euo pipefail

PROJ_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$PROJ_DIR/src"
DIST_DIR="$PROJ_DIR/dist"
PUBLIC_DIR="$PROJ_DIR/public"
BUILD_JSON="$PROJ_DIR/build.json"
MOCK_JSON="$SRC_DIR/data/mock.json"

pass=0; fail=0
ok()   { printf '  \033[32m✓\033[0m %s\n'   "$*"; pass=$((pass+1)); }
nope() { printf '  \033[31m✗\033[0m %s\n'   "$*"; fail=$((fail+1)); }

echo "▶ myID tester  ($PROJ_DIR)"

# --- Phase 1: pipeline (engine, not inline) -----------------------------------
echo "▶ Phase 1 · engine pipeline"
"$PROJ_DIR/build.sh" clean >/dev/null 2>&1 || true
if "$PROJ_DIR/build.sh" build >/tmp/myid-build.log 2>&1; then
  ok "build.sh build → exit 0"
else
  nope "build.sh build failed (see /tmp/myid-build.log)"
  tail -20 /tmp/myid-build.log
  exit 1
fi

# --- Phase 2: dist artifacts (derived from build.json) ------------------------
echo "▶ Phase 2 · dist artifacts (declared in build.json)"
expected_outputs=$(jq -r '
  .build[]
  | select(.mod=="esbuild" or .mod=="esbuild_sw" or .mod=="sass")
  | .output' "$BUILD_JSON")
expected_outputs+=$'\nindex.html'
while IFS= read -r f; do
  [ -z "$f" ] && continue
  if [ -s "$DIST_DIR/$f" ]; then ok "dist/$f  ($(stat -c%s "$DIST_DIR/$f") bytes)"
  else nope "dist/$f missing or empty"; fi
done <<< "$expected_outputs"

# data-*.json.js wrappers (one per src/data/*.json)
while IFS= read -r j; do
  base=$(basename "$j" .json)
  wrap="data-${base}.json.js"
  if [ -s "$DIST_DIR/$wrap" ]; then ok "dist/$wrap  (wrapper for $base.json)"
  else nope "dist/$wrap missing"; fi
done < <(find "$SRC_DIR/data" -maxdepth 1 -name '*.json')

# public symlink declared by build.json mod=symlink
if [ -L "$DIST_DIR/public" ]; then ok "dist/public is a symlink → $(readlink "$DIST_DIR/public")"
else nope "dist/public is not a symlink"; fi

# --- Phase 3: PORTAL_DATA wrapper integrity ----------------------------------
echo "▶ Phase 3 · PORTAL_DATA wrapper"
if grep -qE '\.PORTAL_DATA *=|PORTAL_DATA\["[a-z0-9_-]+"\]' "$DIST_DIR/data-mock.json.js"; then
  ok "data-mock.json.js sets PORTAL_DATA on global"
else
  nope "data-mock.json.js missing PORTAL_DATA assignment"
fi
if grep -q '"mock"' "$DIST_DIR/data-mock.json.js"; then
  ok "wrapper key is \"mock\" (matches loader)"
else
  nope "wrapper key \"mock\" not found in data-mock.json.js"
fi

# --- Phase 4: HTML wires PORTAL_DATA + analytics + script.js -----------------
echo "▶ Phase 4 · index.html wiring"
html="$DIST_DIR/index.html"
for tag in 'data-mock.json.js' 'data-myid.json.js' 'data-nav.json.js' 'script.js' 'matomo' 'umami'; do
  if grep -qi "$tag" "$html"; then ok "index.html references $tag"
  else nope "index.html missing $tag"; fi
done

# --- Phase 5: mock.json asset references resolve -----------------------------
echo "▶ Phase 5 · asset integrity (mock.json → public/)"
missing=0
while IFS= read -r asset; do
  [ -z "$asset" ] && continue
  # Strip leading "assets/" since public/ is the root mounted at runtime
  rel="${asset#assets/}"
  if [ -f "$PUBLIC_DIR/assets/$rel" ]; then
    : # silent ok
  else
    nope "asset not found on disk: $asset"
    missing=$((missing+1))
  fi
done < <(jq -r '
  [
    .holder.photo,
    .holder.signature,
    .categories[].documents[].assets // {} | .[]?
  ] | map(select(. != null and . != "")) | unique | .[]
' "$MOCK_JSON")
if [ "$missing" = 0 ]; then ok "all referenced assets present in public/"; fi

# --- Phase 6: schema sanity --------------------------------------------------
echo "▶ Phase 6 · mock.json schema sanity"
real_cats=$(jq '.categories | length' "$MOCK_JSON")
real_docs=$(jq '[.categories[].documents | length] | add' "$MOCK_JSON")
meta_cats=$(jq '.meta.counts.categories' "$MOCK_JSON")
meta_docs=$(jq '.meta.counts.documents' "$MOCK_JSON")
if [ "$real_cats" = "$meta_cats" ]; then ok "meta.counts.categories ($meta_cats) matches reality ($real_cats)"
else nope "meta.counts.categories=$meta_cats but actual=$real_cats"; fi
if [ "$real_docs" = "$meta_docs" ]; then ok "meta.counts.documents ($meta_docs) matches reality ($real_docs)"
else nope "meta.counts.documents=$meta_docs but actual=$real_docs"; fi

# Every doc has id, type, label, issuer.country, status
bad_docs=$(jq -r '
  [ .categories[].documents[]
    | select((.id // "") == "" or (.type // "") == "" or (.label // "") == "" or (.issuer.country // "") == "" or (.status // "") == "")
    | .id // "<missing-id>" ] | length' "$MOCK_JSON")
if [ "$bad_docs" = 0 ]; then ok "all documents have id+type+label+issuer.country+status"
else nope "$bad_docs documents missing required fields"; fi

# --- Summary -----------------------------------------------------------------
echo
if [ "$fail" = 0 ]; then
  printf '▶ \033[32m%d passed, 0 failed\033[0m\n' "$pass"
  exit 0
else
  printf '▶ \033[31m%d passed, %d failed\033[0m\n' "$pass" "$fail"
  exit 1
fi
