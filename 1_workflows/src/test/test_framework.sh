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
         front-data-json-js-wrapper.sh front-localize-assets.sh front-cache-hash.sh \
         front-pwa-icons.sh front-cache-hashes-map.sh front-sw-precache.sh \
         front-sw-build.sh; do
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

# PWA icon engine: feed it any source image, verify the 4 outputs land at
# the right dimensions. Skips gracefully when ImageMagick is missing.
if command -v magick >/dev/null 2>&1 || command -v convert >/dev/null 2>&1; then
    fixt4="$(mktemp -d)"
    trap 'rm -rf "$fixt2" "$fixt3" "$fixt4"' EXIT
    # Synthesize a tiny known-size source via ImageMagick itself.
    if command -v magick >/dev/null 2>&1; then
        magick -size 1024x1024 xc:red "$fixt4/src.png"
    else
        convert -size 1024x1024 xc:red "$fixt4/src.png"
    fi
    bash 1_workflows/dist/scripts/front-pwa-icons.sh "$fixt4/src.png" "$fixt4/out" "#112233" >/dev/null \
        || fail "front-pwa-icons.sh failed against fixture"
    for spec in "icon-192.png:192" "icon-512.png:512" "icon-maskable-512.png:512" "apple-touch-icon-180.png:180"; do
        f="${spec%:*}"; want="${spec#*:}"
        [ -f "$fixt4/out/$f" ] || fail "pwa_icons: $f missing"
        got=$(identify -format '%w' "$fixt4/out/$f")
        [ "$got" = "$want" ] || fail "pwa_icons: $f is ${got}px wide, expected ${want}px"
    done
    pass "front-pwa-icons.sh emits 192/512/maskable-512/apple-180 at correct dimensions"
else
    pass "front-pwa-icons.sh present (ImageMagick not in PATH; runtime test skipped)"
fi

# _engine.sh dev/watch contract: watcher outputs MUST land in
# <project>/dist/watch/ — never back into <project>/src/. The dev server
# serves dist/ with dist/watch/ overlaid on top (so /script.js, /style.css
# resolve to the watcher's live build first, prod build as fallback).
#
# Build a tiny vanilla project under /tmp, run `build.sh dev`, then assert:
#   1. dist/watch/script.js + dist/watch/style.css exist     (watcher wrote there)
#   2. src/script.js + src/style.css do NOT exist            (no leak into source tree)
#   3. HTTP GET /script.js returns the watcher's bytes       (overlay wins over dist/script.js)
#   4. HTTP GET /style.css returns the watcher's bytes
# Then `build.sh stop` and verify watchers are reaped.
if command -v node >/dev/null 2>&1 \
   && command -v esbuild >/dev/null 2>&1 \
   && command -v sass >/dev/null 2>&1; then
    fixt5="$(mktemp -d)"
    trap 'rm -rf "$fixt2" "$fixt3" "$fixt4" "$fixt5"; [ -n "${dev_pid_file:-}" ] && [ -f "$dev_pid_file" ] && kill $(cat "$dev_pid_file") 2>/dev/null; true' EXIT
    mkdir -p "$fixt5/src/typescript" "$fixt5/src/scss"
    cat > "$fixt5/src/typescript/main.ts" <<'EOF'
const tag: string = "dev-watcher-fixture";
console.log(tag);
EOF
    cat > "$fixt5/src/scss/main.scss" <<'EOF'
.dev-watcher-fixture { color: rebeccapurple; }
EOF
    cat > "$fixt5/src/index.html" <<'EOF'
<!doctype html><html><head><link rel="stylesheet" href="style.css"></head>
<body><script src="script.js"></script></body></html>
EOF
    # Pick a free high port (avoid 8001/8002 which the linktree projects use).
    fixt5_port=$(node -e 'var n=require("net"),s=n.createServer();s.listen(0,function(){console.log(s.address().port);s.close()})' 2>/dev/null) \
        || fail "could not pick a free port for dev-watcher fixture"
    cat > "$fixt5/build.json" <<EOF
{
  "name": "dev-watcher-fixture",
  "framework": "vanilla",
  "port": $fixt5_port,
  "src": "src",
  "dist": "dist",
  "build": [
    { "mod": "esbuild", "input": "src/typescript/main.ts", "output": "script.js", "format": "iife", "target": "es2020" },
    { "mod": "sass",    "input": "src/scss/main.scss",     "output": "style.css" },
    { "mod": "copy",    "files": "index.html", "from": "src" }
  ],
  "serve": {
    "mode": "auto",
    "dir":  "src",
    "watch": [
      { "mod": "esbuild", "input": "typescript/main.ts", "output": "script.js", "format": "iife", "target": "es2020" },
      { "mod": "sass",    "input": "scss/main.scss",     "output": "style.css" }
    ]
  },
  "deploy": {}
}
EOF
    ln -sf "$REPO_ROOT/_engine.sh" "$fixt5/build.sh"

    # Start dev (cmd_dev runs cmd_build first, then watchers, then server).
    # --no-deps skips npm resolution (fixture has no package.json — esbuild +
    # sass come from system PATH, not from a project's node_modules).
    (cd "$fixt5" && nohup ./build.sh dev --no-deps > "$fixt5/.dev.log" 2>&1 &)
    dev_pid_file="$fixt5/.dev-runner.pid"
    echo $! > "$dev_pid_file"

    # Poll up to 15s for the watcher's first emit (esbuild --watch=forever
    # has a startup delay before the initial bundle is flushed).
    fixt5_ok=""
    for _ in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15; do
        if [ -s "$fixt5/dist/watch/script.js" ] && [ -s "$fixt5/dist/watch/style.css" ]; then
            fixt5_ok=1; break
        fi
        sleep 1
    done

    # Capture state BEFORE stopping so failure messages are useful.
    [ -n "$fixt5_ok" ] || fail "dev/watch never emitted into dist/watch/ (see $fixt5/.dev.log)"
    [ -f "$fixt5/src/script.js" ] && fail "dev/watch leaked script.js into src/ (engine bug regression)"
    [ -f "$fixt5/src/style.css" ] && fail "dev/watch leaked style.css into src/ (engine bug regression)"
    pass "dev/watch writes ONLY to dist/watch/ (no leak into src/)"

    # Overlay: GET /script.js must return the watcher's bytes (dist/watch/script.js),
    # not the prod build's bytes (dist/script.js). They differ because dev mode adds
    # sourcemaps and prod mode minifies — content length alone distinguishes them.
    if command -v curl >/dev/null 2>&1; then
        served=$(curl -fsS "http://127.0.0.1:$fixt5_port/script.js" 2>/dev/null | wc -c)
        watch_bytes=$(wc -c < "$fixt5/dist/watch/script.js")
        prod_bytes=$(wc -c < "$fixt5/dist/script.js")
        [ "$served" = "$watch_bytes" ] \
            || fail "overlay broken: server returned $served bytes, watch=$watch_bytes prod=$prod_bytes"
        pass "dev server overlays dist/watch/ over dist/ (script.js byte-match)"
    else
        pass "dev server overlay (curl missing — HTTP assertion skipped)"
    fi

    (cd "$fixt5" && ./build.sh stop > /dev/null 2>&1) || true
    sleep 1
    if [ -d /proc ]; then
        # Wait up to 5s for SIGTERM'd watchers to actually exit (sass/esbuild
        # finish their last watch iteration before quitting).
        leaked_cmdlines=""
        for _ in 1 2 3 4 5; do
            leaked_cmdlines=$(grep -aHl "$fixt5" /proc/[0-9]*/cmdline 2>/dev/null || true)
            [ -z "$leaked_cmdlines" ] && break
            sleep 1
        done
        if [ -n "$leaked_cmdlines" ]; then
            echo "$leaked_cmdlines" | while read entry; do
                pid=${entry#/proc/}; pid=${pid%/cmdline}
                cmd=$(tr '\0' ' ' < "$entry" 2>/dev/null)
                echo "    leaked: pid=$pid cmd=$cmd" >&2
            done
            # Force-kill survivors so the test framework doesn't leave orphans
            # if it's running on a dev box.
            echo "$leaked_cmdlines" | while read entry; do
                pid=${entry#/proc/}; pid=${pid%/cmdline}
                kill -9 "$pid" 2>/dev/null || true
            done
            fail "build.sh stop left watcher process(es) running"
        fi
        pass "build.sh stop reaps all dev/watch processes"
    else
        pass "build.sh stop ran (Linux /proc unavailable — pid sweep skipped)"
    fi
else
    pass "dev/watch contract (node + esbuild + sass not all in PATH; runtime test skipped)"
fi

# Data-driven framework: every vanilla project must be wired via the
# data_wrap engine module. Asserts:
#   1. front-init-data-wrap.sh is deployed + documented
#   2. mod_data_wrap is registered in the build dispatch
#   3. Every framework=vanilla project has src/data/ + a data_wrap step
#      in build.json (the templater succeeded; new projects must opt in)
[ -f "1_workflows/dist/scripts/front-init-data-wrap.sh" ] \
    || fail "front-init-data-wrap.sh templater not deployed"
grep -q '^# Usage:' "1_workflows/dist/scripts/front-init-data-wrap.sh" \
    || fail "front-init-data-wrap.sh missing Usage block"
pass "front-init-data-wrap.sh templater deployed + documented"

grep -q 'data_wrap)' "$REPO_ROOT/_engine.sh" \
    || fail "_engine.sh: mod_data_wrap not registered in run_build dispatch"
grep -q '^mod_data_wrap()' "$REPO_ROOT/_engine.sh" \
    || fail "_engine.sh: mod_data_wrap function not defined"
pass "_engine.sh: data_wrap module registered + defined"

# Walk every vanilla project. Each must (a) have src/data/, (b) have a
# data_wrap step in build.json. We don't enforce HTML wiring because some
# vanilla projects have no src/index.html (templater logs + skips those).
unwired=""
for f in $(find "$REPO_ROOT" -name "build.json" -not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/test/fixtures/*" -not -path "*z_Archive*" 2>/dev/null); do
    fw=$(node -e 'try{var c=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));console.log(c.framework||"none")}catch(e){console.log("ERR")}' "$f" 2>/dev/null)
    [ "$fw" = "vanilla" ] || continue
    proj_dir="$(dirname "$f")"
    rel="${proj_dir#$REPO_ROOT/}"
    [ -d "$proj_dir/src/data" ] || { unwired="$unwired\n  - $rel: missing src/data/"; continue; }
    has_wrap=$(node -e 'var c=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));console.log((c.build||[]).some(function(s){return s.mod==="data_wrap"})?"yes":"no")' "$f" 2>/dev/null)
    [ "$has_wrap" = "yes" ] || unwired="$unwired\n  - $rel: build.json missing data_wrap step"
done
if [ -n "$unwired" ]; then
    printf "    unwired vanilla projects:%b\n" "$unwired" >&2
    fail "vanilla projects not wired with data-driven framework"
fi
pass "every framework=vanilla project has data-driven wiring (src/data + data_wrap step)"

# data_wrap module: feed it a fixture and verify it produces the right
# data-*.json.js companions (engine smoke test, no project required).
fixt_dw="$(mktemp -d)"
trap 'rm -rf "$fixt2" "$fixt3" "$fixt4" "${fixt5:-}" "$fixt_dw"; [ -n "${dev_pid_file:-}" ] && [ -f "$dev_pid_file" ] && kill $(cat "$dev_pid_file") 2>/dev/null; true' EXIT
mkdir -p "$fixt_dw/src/data"
cat > "$fixt_dw/src/data/foo.json" <<'EOF'
{ "title": "Foo Page", "_description": "test fixture" }
EOF
cat > "$fixt_dw/src/data/bar.json" <<'EOF'
{ "title": "Bar Page" }
EOF
bash 1_workflows/dist/scripts/front-data-json-js-wrapper.sh "$fixt_dw/src/data" >/dev/null \
    || fail "front-data-json-js-wrapper.sh failed against fixture"
[ -f "$fixt_dw/src/data/data-foo.json.js" ] || fail "data-foo.json.js not produced"
[ -f "$fixt_dw/src/data/data-bar.json.js" ] || fail "data-bar.json.js not produced"
grep -q 'PORTAL_DATA\["foo"\]' "$fixt_dw/src/data/data-foo.json.js" \
    || fail "data-foo.json.js missing PORTAL_DATA[\"foo\"] assignment"
grep -q '"title": "Foo Page"' "$fixt_dw/src/data/data-foo.json.js" \
    || fail "data-foo.json.js missing original JSON content"
pass "data_wrap engine wraps every src/data/*.json into PORTAL_DATA[<key>] companion"

echo "=== all checks passed ==="
