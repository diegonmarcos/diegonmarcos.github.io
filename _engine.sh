#!/bin/sh
#═══════════════════════════════════════════════════════════════
# Universal Build Engine v1.0
# Configured by build.json — identical in every project
#═══════════════════════════════════════════════════════════════
# Usage: ./build.sh [command] [options]
# Commands: build, dev, stop, clean, deploy, deps, status, help

set -e

# ─── PATHS ──────────────────────────────────────────────────
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
CONFIG_FILE="$PROJECT_DIR/build.json"
PID_FILE="$PROJECT_DIR/.build.pid"

# ─── COLORS ─────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; CYAN='\033[0;36m'; MAGENTA='\033[0;35m'
BOLD='\033[1m'; DIM='\033[2m'; NC='\033[0m'

# ─── OPTIONS ────────────────────────────────────────────────
OPT_VERBOSE=false
OPT_DRY_RUN=false
OPT_NO_DEPS=false

# ─── EXIT CODES ─────────────────────────────────────────────
EXIT_OK=0; EXIT_CONFIG=1; EXIT_DEPS=2; EXIT_BUILD=3
EXIT_SERVER=4; EXIT_DEPLOY=5

# ─── LOGGING ────────────────────────────────────────────────
log_info()    { printf "${BLUE}▶${NC} %s\n" "$1"; }
log_success() { printf "${GREEN}✓${NC} %s\n" "$1"; }
log_error()   { printf "${RED}✗${NC} %s\n" "$1" >&2; }
log_warn()    { printf "${YELLOW}!${NC} %s\n" "$1"; }
log_step()    { printf "  ${CYAN}→${NC} %s\n" "$1"; }
log_verbose() { [ "$OPT_VERBOSE" = true ] && printf "  ${DIM}%s${NC}\n" "$1" || true; }

# ─── ERROR HANDLING ─────────────────────────────────────────
cleanup() {
    _exit_code=$?
    if [ $_exit_code -ne 0 ] && [ $_exit_code -ne 130 ]; then
        log_error "Exited with code $_exit_code"
    fi
}
trap cleanup EXIT

# ─── REPO CONFIG ───────────────────────────────────────────
# Reads config.json (repo root) into RC_* shell variables
REPO_ROOT=""
RC_NPM_FLAGS="--no-fund --no-audit --legacy-peer-deps"
RC_DEFAULT_SRC="src"
RC_DEFAULT_DIST="dist"
RC_DEFAULT_PORT=8000
RC_DEFAULT_FW="vanilla"

parse_repo_config() {
    REPO_ROOT="$(cd "$PROJECT_DIR" && git rev-parse --show-toplevel 2>/dev/null)" || REPO_ROOT=""
    local rc="${REPO_ROOT}/config.json"
    [ -f "$rc" ] || return 0

    local _rc_parsed=""
    if command -v node >/dev/null 2>&1; then
        _rc_parsed="$(node -e '
var c = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
var d = c.defaults || {};
console.log("RC_NPM_FLAGS=\"" + (c.deps && c.deps.npm && c.deps.npm.flags || "") + "\"");
console.log("RC_DEFAULT_SRC=\"" + (d.src || "src") + "\"");
console.log("RC_DEFAULT_DIST=\"" + (d.dist || "dist") + "\"");
console.log("RC_DEFAULT_PORT=" + (d.port || 8000));
console.log("RC_DEFAULT_FW=\"" + (d.framework || "vanilla") + "\"");
' "$rc" 2>/dev/null)" || _rc_parsed=""
    elif command -v python3 >/dev/null 2>&1; then
        _rc_parsed="$(python3 -c "
import json, sys
c = json.load(open(sys.argv[1]))
d = c.get('defaults', {})
print('RC_NPM_FLAGS=\"' + c.get('deps', {}).get('npm', {}).get('flags', '') + '\"')
print('RC_DEFAULT_SRC=\"' + d.get('src', 'src') + '\"')
print('RC_DEFAULT_DIST=\"' + d.get('dist', 'dist') + '\"')
print('RC_DEFAULT_PORT=' + str(d.get('port', 8000)))
print('RC_DEFAULT_FW=\"' + d.get('framework', 'vanilla') + '\"')
" "$rc" 2>/dev/null)" || _rc_parsed=""
    fi
    [ -n "$_rc_parsed" ] && eval "$_rc_parsed"
}

# ─── CONFIG PARSER ──────────────────────────────────────────
# Reads build.json into CFG_* shell variables using node or python3
parse_config() {
    [ -f "$CONFIG_FILE" ] || {
        log_error "build.json not found in $PROJECT_DIR"
        exit $EXIT_CONFIG
    }

    _parsed=""

    # Try node first (always available for Node.js projects)
    if command -v node >/dev/null 2>&1; then
        _parsed="$(CF="$CONFIG_FILE" RC_FW="$RC_DEFAULT_FW" RC_PORT="$RC_DEFAULT_PORT" RC_SRC="$RC_DEFAULT_SRC" RC_DIST="$RC_DEFAULT_DIST" node -e '
var c = JSON.parse(require("fs").readFileSync(process.env.CF, "utf8"));
var e = process.env;
function p(k, v) {
    v = String(v == null ? "" : v).replace(/\\/g,"\\\\").replace(/"/g,"\\\"").replace(/\$/g,"\\$").replace(/`/g,"\\`");
    console.log(k + "=\"" + v + "\"");
}
p("CFG_NAME", c.name);
p("CFG_FW", c.framework || e.RC_FW);
p("CFG_PORT", c.port || e.RC_PORT);
p("CFG_SRC", c.src || e.RC_SRC);
p("CFG_DIST", c.dist || e.RC_DIST);
var b = c.build || [];
p("CFG_BN", b.length);
b.forEach(function(s, i) {
    var x = "CFG_B" + i + "_";
    ["mod","input","output","files","format","target","html","css","js","from","exclude","script","dir","hash_of","precache","verify","source","out","bg"].forEach(function(k) {
        var v = s[k];
        if (Array.isArray(v)) v = v.join(",");
        p(x + k.toUpperCase(), v);
    });
});
var sv = c.serve || {};
p("CFG_SM", sv.mode || "auto");
p("CFG_SD", sv.dir || c.src || "src");
var w = sv.watch || [];
p("CFG_WN", w.length);
w.forEach(function(s, i) {
    var x = "CFG_W" + i + "_";
    ["mod","input","output","format","target"].forEach(function(k) {
        p(x + k.toUpperCase(), s[k]);
    });
});
var d = c.deploy && c.deploy.targets || {};
var tn = Object.keys(d);
p("CFG_DN", tn.length);
tn.forEach(function(n, i) {
    var x = "CFG_D" + i + "_";
    p(x + "NAME", n);
    ["method","host","path","remote","profile"].forEach(function(k) {
        p(x + k.toUpperCase(), d[n][k]);
    });
});
        ' 2>/dev/null)" || _parsed=""
    fi

    # Fallback to python3
    if [ -z "$_parsed" ] && command -v python3 >/dev/null 2>&1; then
        _parsed="$(CF="$CONFIG_FILE" RC_FW="$RC_DEFAULT_FW" RC_PORT="$RC_DEFAULT_PORT" RC_SRC="$RC_DEFAULT_SRC" RC_DIST="$RC_DEFAULT_DIST" python3 -c '
import json, os
c = json.load(open(os.environ["CF"]))
e = os.environ
def p(k, v):
    v = str(v if v is not None else "").replace("\\\\","\\\\\\\\").replace("\"","\\\\\"").replace("$","\\\\$").replace("`","\\\\`")
    print(f"{k}=\"{v}\"")
p("CFG_NAME", c.get("name"))
p("CFG_FW", c.get("framework", e.get("RC_FW","vanilla")))
p("CFG_PORT", c.get("port", int(e.get("RC_PORT","8000"))))
p("CFG_SRC", c.get("src", e.get("RC_SRC","src")))
p("CFG_DIST", c.get("dist", e.get("RC_DIST","dist")))
b = c.get("build",[])
p("CFG_BN", len(b))
for i,s in enumerate(b):
    x = f"CFG_B{i}_"
    for k in ["mod","input","output","files","format","target","html","css","js","from","exclude","script","dir","hash_of","precache","verify","source","out","bg"]:
        v = s.get(k,"")
        if isinstance(v, list): v = ",".join(str(x) for x in v)
        p(x + k.upper(), v)
sv = c.get("serve",{})
p("CFG_SM", sv.get("mode","auto"))
p("CFG_SD", sv.get("dir", c.get("src","src")))
w = sv.get("watch",[])
p("CFG_WN", len(w))
for i,s in enumerate(w):
    x = f"CFG_W{i}_"
    for k in ["mod","input","output","format","target"]:
        p(x + k.upper(), s.get(k,""))
d = c.get("deploy",{}).get("targets",{})
tn = list(d.keys())
p("CFG_DN", len(tn))
for i,n in enumerate(tn):
    x = f"CFG_D{i}_"
    p(x + "NAME", n)
    for k in ["method","host","path","remote","profile"]:
        p(x + k.upper(), d[n].get(k,""))
        ' 2>/dev/null)" || _parsed=""
    fi

    [ -n "$_parsed" ] || {
        log_error "Cannot parse build.json (need node or python3)"
        exit $EXIT_CONFIG
    }

    eval "$_parsed"
}

# ─── DEP RESOLUTION ─────────────────────────────────────────

# Check which deps from a package.json are missing in a node_modules dir
# Outputs missing package names (with @version) one per line
_check_missing_deps() {
    local pkg_json="$1" nm_dir="$2"
    [ -f "$pkg_json" ] || return 0
    [ -d "$nm_dir" ] || return 0

    node -e "
const p=JSON.parse(require('fs').readFileSync('$pkg_json','utf8'));
const all={...(p.dependencies||{}),...(p.devDependencies||{})};
for(const [k,v] of Object.entries(all)){
  try{require.resolve(k+'/package.json',{paths:['$nm_dir']})}
  catch(e){console.log(k+'@'+v)}
}" 2>/dev/null || python3 -c "
import json,os
p=json.load(open('$pkg_json'))
deps={**p.get('dependencies',{}),**p.get('devDependencies',{})}
for k,v in deps.items():
    if not os.path.isdir(os.path.join('$nm_dir',k)):
        print(k+'@'+v)
" 2>/dev/null || true
}

resolve_deps() {
    [ "$OPT_NO_DEPS" = true ] && return 0
    local pkg_dir="${1:-$PROJECT_DIR}"

    # Find repo root (install target for shared deps)
    local repo_root
    repo_root="$(cd "$pkg_dir" && git rev-parse --show-toplevel 2>/dev/null)" || repo_root=""
    local nm_dir="${repo_root:+$repo_root/node_modules}"
    [ -n "$nm_dir" ] || nm_dir="$pkg_dir/node_modules"

    # Check if project deps are satisfied
    if [ -f "$pkg_dir/package.json" ]; then
        local missing
        missing="$(_check_missing_deps "$pkg_dir/package.json" "$nm_dir")"
        if [ -n "$missing" ]; then
            local install_dir="${repo_root:-$pkg_dir}"
            log_info "Installing missing deps at $install_dir..."
            log_verbose "missing: $missing"
            if command -v npm >/dev/null 2>&1; then
                (cd "$install_dir" && npm install --save-dev $RC_NPM_FLAGS $missing 2>&1 | tail -5) || true
            else
                log_error "npm not found -- cannot install: $missing"
                return $EXIT_DEPS
            fi
        fi
    fi

    # Export paths to repo root node_modules
    if [ -n "$repo_root" ] && [ -d "$repo_root/node_modules" ]; then
        export NODE_PATH="${repo_root}/node_modules${NODE_PATH:+:$NODE_PATH}"
        export PATH="${repo_root}/node_modules/.bin:$PATH"
        log_success "deps: repo root ($repo_root/node_modules)"
        return 0
    fi

    # Fallback: local node_modules
    if [ -d "$pkg_dir/node_modules" ]; then
        log_verbose "deps: local $pkg_dir/node_modules"
        return 0
    fi

    # Last resort: full install at repo root
    if command -v npm >/dev/null 2>&1 && [ -f "$pkg_dir/package.json" ]; then
        local install_dir="${repo_root:-$pkg_dir}"
        log_info "Installing all dependencies in $install_dir..."
        (cd "$install_dir" && npm install $RC_NPM_FLAGS 2>&1 | tail -3)
        if [ -d "$install_dir/node_modules" ]; then
            [ -n "$repo_root" ] && {
                export NODE_PATH="${repo_root}/node_modules${NODE_PATH:+:$NODE_PATH}"
                export PATH="${repo_root}/node_modules/.bin:$PATH"
            }
            log_success "deps: installed in $install_dir"
            return 0
        fi
    fi

    log_error "Dependencies not resolved for $pkg_dir"
    return $EXIT_DEPS
}

# ─── TOOL RUNNER ─────────────────────────────────────────────
# Run a tool: PATH first (Nix / node_modules/.bin), npx fallback
run_tool() {
    local tool="$1"; shift
    if command -v "$tool" >/dev/null 2>&1; then
        "$tool" "$@"
    else
        log_verbose "fallback: npx $tool"
        npx "$tool" "$@"
    fi
}

# ─── BUILD MODULES ──────────────────────────────────────────

# Sass: compile SCSS to CSS
mod_sass() {
    local input="$PROJECT_DIR/$1"
    local output="$DIST_DIR/$2"
    local mode="${3:-prod}"

    [ -f "$input" ] || { log_error "sass: input not found: $input"; return $EXIT_BUILD; }
    mkdir -p "$(dirname "$output")"

    if [ "$mode" = "dev" ]; then
        run_tool sass "$input" "$output" --style=expanded --source-map
    else
        run_tool sass "$input" "$output" --style=compressed --no-source-map
    fi
    [ -f "$output" ] || { log_error "sass produced no output"; return $EXIT_BUILD; }
    log_success "sass: $(basename "$2")"
}

# Esbuild: bundle TypeScript/JavaScript
mod_esbuild() {
    local input="$PROJECT_DIR/$1"
    local output="$DIST_DIR/$2"
    local mode="${3:-prod}"
    local format="${4:-iife}"
    local target="${5:-es2020}"

    [ -f "$input" ] || { log_error "esbuild: input not found: $input"; return $EXIT_BUILD; }
    mkdir -p "$(dirname "$output")"

    local args="--bundle --format=$format --target=$target --outfile=$output"
    if [ "$mode" = "dev" ]; then
        args="$args --sourcemap"
    else
        args="$args --minify"
    fi

    run_tool esbuild "$input" $args
    [ -f "$output" ] || { log_error "esbuild produced no output"; return $EXIT_BUILD; }
    log_success "esbuild: $(basename "$2")"
}

# esbuild for Service Workers — thin wrapper over `front-sw-build.sh`.
# Mirrors the `mod_pwa_icons → front-pwa-icons.sh` delegation pattern.
# All SW-specific logic (hash, per-asset map, precache JSON, esbuild
# invocation, output validation) lives in the orchestrator script.
#
# build.json fields consumed:
#   input    — SW source (.ts), relative to project.
#   output   — SW bundle (.js), relative to dist/.
#   hash_of  — dist-relative paths whose bytes feed BUILD_HASH +
#              BUILD_ASSET_HASHES. Required.
#   precache — URLs to precache on install. Optional.
#   verify   — bool (default true). When true, BUILD_ASSET_HASHES is
#              populated and the SW does runtime SHA-256 verification on
#              first cache miss per asset, recovering with `?v=<hash>`
#              if the CDN edge served stale bytes.
#   format   — esbuild --format (default "iife").
#   target   — esbuild --target (default "es2020").
mod_esbuild_sw() {
    local input="$PROJECT_DIR/$1"
    local output="$DIST_DIR/$2"
    local hash_of="$3"
    local precache="$4"
    local verify="${5:-true}"
    local mode="${6:-prod}"
    local format="${7:-iife}"
    local target="${8:-es2020}"

    # Default verify=true when build.json omits the field.
    [ -z "$verify" ] && verify="true"

    local engine="$REPO_ROOT/1_workflows/dist/scripts/front-sw-build.sh"
    [ -x "$engine" ] || engine="$REPO_ROOT/1_workflows/src/scripts/front-sw-build.sh"
    [ -x "$engine" ] || { log_error "esbuild_sw: front-sw-build.sh not found / not executable"; return $EXIT_BUILD; }

    local summary
    summary="$("$engine" "$input" "$output" "$hash_of" "$precache" "$verify" "$mode" "$format" "$target" "$DIST_DIR" "$REPO_ROOT")" \
        || { log_error "esbuild_sw: orchestrator failed"; return $EXIT_BUILD; }

    log_success "esbuild_sw: $summary"
}

# Inject the SW-registration <script> block into HTML files. Wraps the
# engine `1_workflows/dist/scripts/front-sw-register.sh` so build.json
# can drive which HTMLs get the registration declaratively.
#
# build.json fields:
#   files — comma-separated list of dist-relative HTML file names, OR
#           "*" to inject into every dist/*.html (excluding any HTML
#           that already has the marker comment from a prior run).
#
# Idempotent — the snippet starts with a marker comment that
# front-sw-register.sh detects, so re-running is a no-op for files
# that already have the snippet.
#
# Pairs with `esbuild_sw`: order in build.json matters — register the
# tag BEFORE esbuild_sw so the modified HTML feeds into BUILD_HASH.
mod_sw_register() {
    local files="$1"
    [ -n "$files" ] || { log_error "sw_register: files (HTML list) is required"; return $EXIT_BUILD; }

    local engine="$REPO_ROOT/1_workflows/dist/scripts/front-sw-register.sh"
    [ -x "$engine" ] || engine="$REPO_ROOT/1_workflows/src/scripts/front-sw-register.sh"
    [ -x "$engine" ] || { log_error "sw_register: front-sw-register.sh not found / not executable"; return $EXIT_BUILD; }

    # Expand "*" → every *.html in dist/ (sorted, deterministic).
    if [ "$files" = "*" ]; then
        files=""
        for f in "$DIST_DIR"/*.html; do
            [ -f "$f" ] || continue
            files="${files:+$files,}$(basename "$f")"
        done
        [ -n "$files" ] || { log_warn "sw_register: no *.html in dist/, skipping"; return 0; }
    fi

    local summary
    summary="$("$engine" "$DIST_DIR" "$REPO_ROOT" "$files")" \
        || { log_error "sw_register: engine failed"; return $EXIT_BUILD; }

    log_success "sw_register: $summary"
}

# Generate the full PWA icon set from one source image. Wraps the engine
# `1_workflows/dist/scripts/front-pwa-icons.sh` so build.json can drive
# the source / output / safe-zone-bg fully declaratively.
#
# build.json fields:
#   source — path to source image (relative to project)
#   out    — directory to drop generated icons into (relative to project)
#   bg     — hex colour for the maskable safe-zone padding (default #000000)
#
# Idempotent: skips when every expected icon already exists AND is newer
# than the source image. Re-runs whenever the source is updated.
mod_pwa_icons() {
    local source="$PROJECT_DIR/$1"
    local out="$PROJECT_DIR/$2"
    local bg="${3:-#000000}"

    [ -f "$source" ] || { log_error "pwa_icons: source not found: $source"; return $EXIT_BUILD; }

    local engine="$REPO_ROOT/1_workflows/dist/scripts/front-pwa-icons.sh"
    [ -x "$engine" ] || engine="$REPO_ROOT/1_workflows/src/scripts/front-pwa-icons.sh"
    [ -x "$engine" ] || { log_error "pwa_icons: front-pwa-icons.sh not found / not executable"; return $EXIT_BUILD; }

    # Skip when every expected output already exists and is newer than source.
    local up_to_date=1
    for f in icon-192.png icon-512.png icon-maskable-512.png apple-touch-icon-180.png; do
        if [ ! -f "$out/$f" ] || [ "$source" -nt "$out/$f" ]; then
            up_to_date=0; break
        fi
    done
    if [ $up_to_date -eq 1 ]; then
        log_step "pwa_icons: 4 icons up-to-date (skipping)"
        return 0
    fi

    "$engine" "$source" "$out" "$bg" >/dev/null \
        || { log_error "pwa_icons: engine failed"; return $EXIT_BUILD; }
    log_success "pwa_icons: 4 icons regenerated from $(basename "$source")"
}

# TypeScript compiler
mod_tsc() {
    local dir="$PROJECT_DIR/$1"
    local output_file="$2"
    local mode="${3:-prod}"

    [ -d "$dir" ] || { log_error "tsc: dir not found: $dir"; return $EXIT_BUILD; }

    # Force --outDir to a temp dir under dist/. Critical: project tsconfigs
    # commonly set "outDir": "." (so IDE resolution stays in-tree), which
    # makes a bare `tsc` emit .js + .js.map next to every .ts source — i.e.
    # generated artefacts polluting src/. CLI --outDir overrides tsconfig,
    # so the engine forces a clean emit dir. Move the named output to dist/,
    # then nuke the temp (other tsc by-products are not engine-managed).
    local tsc_tmp="$DIST_DIR/.tsc-tmp"
    rm -rf "$tsc_tmp"
    mkdir -p "$tsc_tmp"

    cd "$dir"
    if [ "$mode" = "dev" ]; then
        run_tool tsc --outDir "$tsc_tmp" --sourceMap
    else
        run_tool tsc --outDir "$tsc_tmp"
    fi

    if [ -n "$output_file" ] && [ -f "$tsc_tmp/$output_file" ]; then
        mv "$tsc_tmp/$output_file" "$DIST_DIR/$output_file"
        [ -f "$tsc_tmp/${output_file}.map" ] && mv "$tsc_tmp/${output_file}.map" "$DIST_DIR/${output_file}.map"
    fi
    rm -rf "$tsc_tmp"
    cd "$PROJECT_DIR"
    log_success "tsc: compiled (outDir forced to dist/.tsc-tmp, no src/ leaks)"
}

# Vite build
mod_vite() {
    cd "$PROJECT_DIR"
    log_info "Running vite build..."
    run_tool vite build
    [ -d "$DIST_DIR" ] || { log_error "vite produced no output"; return $EXIT_BUILD; }
    log_success "vite: build complete"
}

# SvelteKit / npm run build
mod_sveltekit() {
    cd "$PROJECT_DIR"
    log_info "Running npm build..."
    npm run build 2>&1 || { log_error "npm build failed"; return $EXIT_BUILD; }
    log_success "build: complete"
}

# npm run <script>
mod_npm() {
    local script="${1:-build}"
    cd "$PROJECT_DIR"
    npm run "$script" 2>&1 || { log_error "npm run $script failed"; return $EXIT_BUILD; }
    log_success "npm: $script complete"
}

# Copy files to dist
mod_copy() {
    local files="$1"
    local from_dir="${2:-}"
    local exclude="${3:-}"

    local src_base="$PROJECT_DIR"
    [ -n "$from_dir" ] && src_base="$PROJECT_DIR/$from_dir"

    mkdir -p "$DIST_DIR"

    # Handle comma-separated file list or glob.
    # IMPORTANT: noglob (`set -f`) for the OUTER for-loop. Without it,
    # an unquoted `$files` containing only "*" globs against the current
    # working directory (= PROJECT_DIR) before the inner loop sees it,
    # so e.g. `files: "*"` from build.json silently degenerates into
    # the names of the project's top-level files (build.json, build.sh,
    # dist, src, …) — none of which exist in src_base, so nothing gets
    # copied. With noglob the CSV split treats "*" as a literal pattern
    # and the inner `"$src_base"/$pattern` is the only place that
    # actually expands the glob.
    set -f
    _IFS="$IFS"; IFS=","
    for pattern in $files; do
        IFS="$_IFS"
        pattern="$(echo "$pattern" | sed 's/^ *//;s/ *$//')"
        set +f
        for file in "$src_base"/$pattern; do
            [ -f "$file" ] || continue
            _basename="$(basename "$file")"
            # Skip excluded files
            if [ -n "$exclude" ]; then
                case ",$exclude," in
                    *",$_basename,"*) continue ;;
                esac
            fi
            cp "$file" "$DIST_DIR/$_basename"
            log_step "copy: $_basename"
        done
        set -f
    done
    IFS="$_IFS"
    set +f
}

# Inline CSS and JS into HTML
mod_inline() {
    local html_file="$DIST_DIR/$1"
    local css_file="$DIST_DIR/$2"
    local js_file="$DIST_DIR/$3"

    [ -f "$html_file" ] || { log_error "inline: $1 not found in dist"; return $EXIT_BUILD; }

    # Strip BOM from CSS
    [ -f "$css_file" ] && sed -i '1s/^\xEF\xBB\xBF//' "$css_file"

    local css_base js_base
    css_base="$(basename "$css_file")"
    js_base="$(basename "$js_file")"
    local tmp_file="$DIST_DIR/.inline_tmp.html"

    awk '
    /<link[^>]*href="'"$css_base"'"[^>]*>/ {
        print "<style>"
        while ((getline line < "'"$css_file"'") > 0) print line
        close("'"$css_file"'")
        print "</style>"
        next
    }
    /<link[^>]*href="styles\.css"[^>]*>/ {
        print "<style>"
        while ((getline line < "'"$css_file"'") > 0) print line
        close("'"$css_file"'")
        print "</style>"
        next
    }
    /<script[^>]*src="'"$js_base"'"[^>]*><\/script>/ {
        print "<script>"
        while ((getline line < "'"$js_file"'") > 0) print line
        close("'"$js_file"'")
        print "</script>"
        next
    }
    /<script[^>]*src="script\.js"[^>]*><\/script>/ {
        print "<script>"
        while ((getline line < "'"$js_file"'") > 0) print line
        close("'"$js_file"'")
        print "</script>"
        next
    }
    { print }
    ' "$html_file" > "$tmp_file"

    mv "$tmp_file" "$html_file"
    rm -f "$css_file" "$js_file" "${css_file}.map" "${js_file}.map"
    log_success "inline: CSS+JS → $(basename "$html_file")"
}

# Strip type="module" and crossorigin for file:// protocol
mod_strip_module() {
    local files="$1"
    _IFS="$IFS"; IFS=","
    for f in $files; do
        IFS="$_IFS"
        f="$(echo "$f" | sed 's/^ *//;s/ *$//')"
        local target="$DIST_DIR/$f"
        [ -f "$target" ] || continue
        sed -i 's/ type="module"//g' "$target"
        sed -i 's/ crossorigin//g' "$target"
        sed -i 's/<script src="/<script defer src="/g' "$target"
        log_step "strip-module: $f"
    done
    IFS="$_IFS"
}

# Create symlink
mod_symlink() {
    local target="$1"
    local link_name="${2:-$(basename "$target")}"
    if [ -d "$PROJECT_DIR/$target" ]; then
        ln -sf "../$target" "$DIST_DIR/$link_name" 2>/dev/null || \
            cp -r "$PROJECT_DIR/$target" "$DIST_DIR/$link_name"
        log_step "symlink: $link_name → $target"
    fi
}

# Wrap every *.json in $1 (default: src/data) as a *.json.js companion that
# assigns the parsed JSON to globalThis.PORTAL_DATA[<key>], so HTML can load
# the data via <script src="data-NAME.json.js"></script> with no fetch / no
# CORS — works under file:// too. Source-of-truth lives in the project's
# src/data/; the wrapped data-*.json.js are emitted alongside the JSON
# (next-step `copy` mod ships them to dist/).
#
# Engine: 1_workflows/{src,dist}/scripts/front-data-json-js-wrapper.sh
# This module just dispatches to the universal engine.
mod_data_wrap() {
    local dir="${1:-src/data}"
    local abs_dir="$PROJECT_DIR/$dir"
    [ -d "$abs_dir" ] || { log_warn "data_wrap: $dir not found, skipping"; return 0; }
    local engine="$REPO_ROOT/1_workflows/dist/scripts/front-data-json-js-wrapper.sh"
    [ -x "$engine" ] || engine="$REPO_ROOT/1_workflows/src/scripts/front-data-json-js-wrapper.sh"
    [ -x "$engine" ] || { log_error "data_wrap: front-data-json-js-wrapper.sh not found"; return $EXIT_BUILD; }
    local out
    out="$("$engine" "$abs_dir" 2>&1)" || { log_error "data_wrap failed: $out"; return $EXIT_BUILD; }
    local n
    n="$(echo "$out" | grep -c '^✓ ')"
    log_step "data_wrap: $n JSON file(s) wrapped in $dir/"
}

# ─── BUILD RUNNER ───────────────────────────────────────────
run_build() {
    local i=0
    local step_n="$CFG_BN"

    # Prepare dist
    mkdir -p "$DIST_DIR"

    while [ "$i" -lt "$step_n" ]; do
        local _n=$((i + 1))
        eval "local _mod=\$CFG_B${i}_MOD"
        eval "local _input=\$CFG_B${i}_INPUT"
        eval "local _output=\$CFG_B${i}_OUTPUT"
        eval "local _files=\$CFG_B${i}_FILES"
        eval "local _format=\$CFG_B${i}_FORMAT"
        eval "local _target=\$CFG_B${i}_TARGET"
        eval "local _html=\$CFG_B${i}_HTML"
        eval "local _css=\$CFG_B${i}_CSS"
        eval "local _js=\$CFG_B${i}_JS"
        eval "local _from=\$CFG_B${i}_FROM"
        eval "local _exclude=\$CFG_B${i}_EXCLUDE"
        eval "local _script=\$CFG_B${i}_SCRIPT"
        eval "local _dir=\$CFG_B${i}_DIR"
        eval "local _hash_of=\$CFG_B${i}_HASH_OF"
        eval "local _precache=\$CFG_B${i}_PRECACHE"
        eval "local _verify=\$CFG_B${i}_VERIFY"
        eval "local _source=\$CFG_B${i}_SOURCE"
        eval "local _out=\$CFG_B${i}_OUT"
        eval "local _bg=\$CFG_B${i}_BG"

        log_info "Step $_n/$step_n: $_mod"

        if [ "$OPT_DRY_RUN" = true ]; then
            log_step "[dry-run] would run: $_mod $_input → $_output"
            i=$((i + 1))
            continue
        fi

        case "$_mod" in
            sass)         mod_sass "$_input" "$_output" "prod" ;;
            esbuild)      mod_esbuild "$_input" "$_output" "prod" "$_format" "$_target" ;;
            esbuild_sw)   mod_esbuild_sw "$_input" "$_output" "$_hash_of" "$_precache" "$_verify" "prod" "$_format" "$_target" ;;
            sw_register)  mod_sw_register "$_files" ;;
            pwa_icons)    mod_pwa_icons "$_source" "$_out" "$_bg" ;;
            tsc)          mod_tsc "$_dir" "$_output" "prod" ;;
            vite)         mod_vite ;;
            sveltekit)    mod_sveltekit ;;
            npm)          mod_npm "$_script" ;;
            copy)         mod_copy "$_files" "$_from" "$_exclude" ;;
            inline)       mod_inline "$_html" "$_css" "$_js" ;;
            strip-module) mod_strip_module "$_files" ;;
            symlink)      mod_symlink "$_files" "$_output" ;;
            data_wrap)    mod_data_wrap "$_dir" ;;
            *)            log_warn "Unknown module: $_mod" ;;
        esac

        i=$((i + 1))
    done
}

# ─── DEV SERVER ─────────────────────────────────────────────

# Node.js static file server (no dependencies)
_node_static_server() {
    local dir="$1" port="$2"
    node -e '
var h=require("http"),f=require("fs"),p=require("path"),d=process.argv[1],port=process.argv[2];
var m={"html":"text/html","css":"text/css","js":"application/javascript","json":"application/json",
"png":"image/png","jpg":"image/jpeg","jpeg":"image/jpeg","gif":"image/gif","svg":"image/svg+xml",
"ico":"image/x-icon","woff":"font/woff","woff2":"font/woff2","ttf":"font/ttf","map":"application/json"};
h.createServer(function(req,res){
    var u=decodeURIComponent(req.url.split("?")[0]);
    var fp=p.join(d,u);
    try{if(f.statSync(fp).isDirectory())fp=p.join(fp,"index.html")}catch(e){}
    if(!f.existsSync(fp)){res.writeHead(404);res.end("Not Found");return}
    var ext=p.extname(fp).slice(1);
    res.writeHead(200,{"Content-Type":m[ext]||"application/octet-stream","Cache-Control":"no-cache"});
    f.createReadStream(fp).pipe(res);
}).listen(port,function(){console.log("Serving "+d+" on http://localhost:"+port)});
    ' "$dir" "$port"
}

# Start dev server with fallback chain.
#
# For vanilla static projects with watchers (CFG_WN > 0), the server root
# is $DIST_DIR (the prod build output) with $DIST_DIR/watch/ overlaid on
# top — so /script.js, /style.css resolve to the watcher's live build,
# falling back to the prod build. node-static is the only mode that
# implements the overlay; when watchers are present, auto-detect is
# overridden to node-static. live-server / python / busybox / php see
# only $DIST_DIR (no overlay; watcher updates not visible).
#
# For projects without watchers, server root is $serve_dir (legacy
# behaviour — typically src/ or dist/ depending on build.json).
start_server() {
    local serve_dir="$PROJECT_DIR/$CFG_SD"
    local overlay_dir=""
    local port="$CFG_PORT"
    local mode="$CFG_SM"

    # When watchers are configured, the dev server serves $DIST_DIR with
    # $DIST_DIR/watch/ as a priority overlay. Outside of watcher mode,
    # the legacy $serve_dir (build.json's serve.dir) is preserved.
    if [ "$CFG_WN" -gt 0 ]; then
        serve_dir="$DIST_DIR"
        overlay_dir="$DIST_DIR/watch"
    fi

    # Detect mode if auto
    if [ "$mode" = "auto" ]; then
        if [ -f "$PROJECT_DIR/vite.config.ts" ] || [ -f "$PROJECT_DIR/vite.config.js" ]; then
            if [ -f "$PROJECT_DIR/svelte.config.js" ] || [ -f "$PROJECT_DIR/svelte.config.ts" ]; then
                mode="sveltekit"
            else
                mode="vite"
            fi
        elif command -v live-server >/dev/null 2>&1; then
            mode="live-server"
        elif command -v node >/dev/null 2>&1; then
            mode="node-static"
        elif command -v python3 >/dev/null 2>&1; then
            mode="python"
        elif command -v busybox >/dev/null 2>&1; then
            mode="busybox"
        elif command -v php >/dev/null 2>&1; then
            mode="php"
        else
            log_error "No HTTP server found. Install one of: node, python3, busybox, php"
            return $EXIT_SERVER
        fi
    fi

    # Watchers need the dist/watch overlay; only node-static implements it.
    # Force node-static for vanilla modes when watchers are present so the
    # watcher's live output wins over the prod build's stale artefacts.
    if [ -n "$overlay_dir" ]; then
        case "$mode" in
            vite|sveltekit) ;;  # framework-managed, skip
            node-static)    ;;  # already correct
            *)
                if command -v node >/dev/null 2>&1; then
                    log_step "watchers present — forcing node-static (overlay support)"
                    mode="node-static"
                else
                    log_warn "watchers configured but node missing; serving without overlay"
                fi
                ;;
        esac
    fi

    # Check if port is already in use
    if command -v lsof >/dev/null 2>&1; then
        local existing_pid
        existing_pid="$(lsof -ti :$port 2>/dev/null | head -1)" || existing_pid=""
        if [ -n "$existing_pid" ]; then
            log_error "Port $port already in use (pid $existing_pid)"
            log_step "Run: ./build.sh stop  or  kill $existing_pid"
            return $EXIT_SERVER
        fi
    fi

    log_info "Starting dev server ($mode) on port $port..."

    case "$mode" in
        vite)
            cd "$PROJECT_DIR"
            nohup npm run dev > /dev/null 2>&1 &
            _write_pid "$!" "$port" "vite"
            ;;
        sveltekit)
            cd "$PROJECT_DIR"
            nohup npm run dev > /dev/null 2>&1 &
            _write_pid "$!" "$port" "sveltekit"
            ;;
        live-server)
            [ -d "$serve_dir" ] || serve_dir="$PROJECT_DIR"
            nohup live-server "$serve_dir" --port="$port" --no-browser --quiet > /dev/null 2>&1 &
            _write_pid "$!" "$port" "live-server"
            ;;
        node-static)
            [ -d "$serve_dir" ] || serve_dir="$PROJECT_DIR"
            # Inline server with optional dist/watch/ overlay. Args:
            #   $1 = root (dist/ when watchers present, else serve.dir)
            #   $2 = port
            #   $3 = overlay dir (dist/watch/) or "" for no overlay
            nohup node -e '
var h=require("http"),f=require("fs"),p=require("path");
var d=process.argv[1], port=process.argv[2], overlay=process.argv[3]||"";
var m={"html":"text/html","css":"text/css","js":"application/javascript","mjs":"application/javascript",
"json":"application/json","map":"application/json","webmanifest":"application/manifest+json",
"png":"image/png","jpg":"image/jpeg","jpeg":"image/jpeg","gif":"image/gif","webp":"image/webp",
"svg":"image/svg+xml","ico":"image/x-icon","mp4":"video/mp4","woff":"font/woff","woff2":"font/woff2","ttf":"font/ttf"};
function resolveIn(root,u){var fp=p.join(root,u);try{if(f.statSync(fp).isDirectory())fp=p.join(fp,"index.html");}catch(e){}return f.existsSync(fp)?fp:null;}
h.createServer(function(req,res){
    var u=decodeURIComponent(req.url.split("?")[0]);
    var fp=(overlay&&resolveIn(overlay,u))||resolveIn(d,u);
    if(!fp){res.writeHead(404);res.end("Not Found");return;}
    var ext=p.extname(fp).slice(1);
    res.writeHead(200,{"Content-Type":m[ext]||"application/octet-stream","Cache-Control":"no-cache"});
    f.createReadStream(fp).pipe(res);
}).listen(port,function(){});
            ' "$serve_dir" "$port" "$overlay_dir" > /dev/null 2>&1 &
            _write_pid "$!" "$port" "node-static"
            ;;
        python)
            [ -d "$serve_dir" ] || serve_dir="$PROJECT_DIR"
            nohup python3 -m http.server "$port" --directory "$serve_dir" > /dev/null 2>&1 &
            _write_pid "$!" "$port" "python3"
            ;;
        busybox)
            [ -d "$serve_dir" ] || serve_dir="$PROJECT_DIR"
            nohup busybox httpd -f -p "$port" -h "$serve_dir" > /dev/null 2>&1 &
            _write_pid "$!" "$port" "busybox"
            ;;
        php)
            [ -d "$serve_dir" ] || serve_dir="$PROJECT_DIR"
            nohup php -S "localhost:$port" -t "$serve_dir" > /dev/null 2>&1 &
            _write_pid "$!" "$port" "php"
            ;;
        *)
            log_error "Unknown serve mode: $mode"
            return $EXIT_SERVER
            ;;
    esac
}

# Reap any pre-existing watcher whose argv or cwd matches `$2`. Idempotent: makes
# `build.sh dev` safe to run twice without piling up duplicate `--watch=forever`
# processes (the leak that orphans esbuild after a closed terminal — nohup
# detaches them from SIGHUP, so they survive the parent shell forever).
#
# $1 = tool name (esbuild, sass, tsc) — must be argv[0] or end of an absolute argv[0]
# $2 = unique fingerprint string — typically the absolute output path (esbuild,
#      sass) or the absolute project subdir (tsc, which has no path in argv).
#
# Matches when the tool's command line OR its cwd contains $2 — covers both
# argv-tagged watchers (esbuild, sass) and cwd-tagged ones (tsc).
_kill_existing_watcher() {
    local mode="$1" match="$2"
    [ -z "$mode" ] || [ -z "$match" ] && return 0
    [ -d /proc ] || return 0  # only Linux

    local hits="" entry pid cmd cwd
    for entry in /proc/[0-9]*/cmdline; do
        [ -r "$entry" ] || continue
        cmd=$(tr '\0' ' ' < "$entry" 2>/dev/null)
        case "$cmd" in
            "$mode "*|*"/$mode "*) ;;
            *) continue ;;
        esac
        pid="${entry#/proc/}"; pid="${pid%/cmdline}"
        cwd=$(readlink "/proc/$pid/cwd" 2>/dev/null)
        case "$cmd $cwd" in
            *"$match"*) hits="$hits $pid" ;;
        esac
    done
    [ -z "$hits" ] && return 0

    log_step "reaping stale ${mode} watcher(s):${hits}"
    # shellcheck disable=SC2086
    kill $hits 2>/dev/null || true
    sleep 0.3
    # shellcheck disable=SC2086
    kill -9 $hits 2>/dev/null || true
}

# Start file watchers for dev mode.
#
# Inputs are read from $serve_dir (build.json's `serve.dir`, default src/).
# Outputs go to $DIST_DIR/watch/ — NEVER back into src/. Keeps generated
# artefacts out of the source tree (no leaks into git, no script.js /
# style.css polluting src/). The dev server overlays dist/watch/ on top
# of dist/ so /script.js, /style.css resolve to the watcher's live build
# first, falling back to the prod build.
start_watchers() {
    local i=0
    local serve_dir="$PROJECT_DIR/$CFG_SD"
    local watch_dir="$DIST_DIR/watch"
    mkdir -p "$watch_dir"

    while [ "$i" -lt "$CFG_WN" ]; do
        eval "local _mod=\$CFG_W${i}_MOD"
        eval "local _input=\$CFG_W${i}_INPUT"
        eval "local _output=\$CFG_W${i}_OUTPUT"
        eval "local _format=\$CFG_W${i}_FORMAT"
        eval "local _target=\$CFG_W${i}_TARGET"

        case "$_mod" in
            sass)
                _kill_existing_watcher sass "$watch_dir/$_output"
                nohup sass "$serve_dir/$_input" "$watch_dir/$_output" --watch --style=expanded --source-map > /dev/null 2>&1 &
                _append_pid "$!" "sass"
                log_step "watcher: sass → dist/watch/$_output"
                ;;
            esbuild)
                local fmt="${_format:-iife}"
                local tgt="${_target:-es2020}"
                _kill_existing_watcher esbuild "$watch_dir/$_output"
                nohup esbuild "$serve_dir/$_input" --bundle --outfile="$watch_dir/$_output" --format="$fmt" --target="$tgt" --sourcemap --watch=forever > /dev/null 2>&1 &
                _append_pid "$!" "esbuild"
                log_step "watcher: esbuild → dist/watch/$_output"
                ;;
            tsc)
                # tsc honours its own tsconfig.json's outDir — that tsconfig
                # MUST point outDir at "<dist>/watch" for the overlay to work.
                local tsc_dir="$serve_dir"
                [ -n "$_input" ] && tsc_dir="$serve_dir/$_input"
                _kill_existing_watcher tsc "$tsc_dir"
                cd "$tsc_dir"
                nohup tsc --watch > /dev/null 2>&1 &
                _append_pid "$!" "tsc"
                cd "$PROJECT_DIR"
                log_step "watcher: tsc (tsconfig outDir must be dist/watch)"
                ;;
        esac

        i=$((i + 1))
    done
}

# ─── SERVER MANAGEMENT ──────────────────────────────────────

# Write PID file (JSON). Preserves any watcher PIDs already recorded by
# _append_pid (which seeds a skeleton when watchers start before the
# server) — merges into the existing file rather than overwriting.
_write_pid() {
    local pid="$1" port="$2" server_type="$3"
    local now
    now="$(date -u +%Y-%m-%dT%H:%M:%S 2>/dev/null || date +%s)"

    if [ -f "$PID_FILE" ] && command -v node >/dev/null 2>&1; then
        node -e '
var fs=require("fs"),f=process.argv[1];
var p={};try{p=JSON.parse(fs.readFileSync(f,"utf8"));}catch(e){}
p.port=parseInt(process.argv[2]);
p.server=process.argv[3];
p.started=process.argv[4];
p.pids=p.pids||{};
p.pids[process.argv[3]]=parseInt(process.argv[5]);
fs.writeFileSync(f,JSON.stringify(p)+"\n");
        ' "$PID_FILE" "$port" "$server_type" "$now" "$pid" 2>/dev/null && return
    fi
    printf '{"port":%s,"server":"%s","started":"%s","pids":{"%s":%s}}\n' \
        "$port" "$server_type" "$now" "$server_type" "$pid" > "$PID_FILE"
}

# Append a PID to existing pidfile (or seed a fresh skeleton if missing).
# cmd_dev starts watchers BEFORE start_server, so the file may not exist
# yet on the first append — without seeding, watcher PIDs would be lost
# and `build.sh stop` couldn't reap them. Seeding with `pids:{}` makes
# the first watcher's append succeed; start_server's later _write_pid
# preserves any already-recorded watcher PIDs by merging instead of
# overwriting.
_append_pid() {
    local pid="$1" name="$2"
    command -v node >/dev/null 2>&1 || return 0
    if [ ! -f "$PID_FILE" ]; then
        printf '{"pids":{}}\n' > "$PID_FILE"
    fi
    node -e '
var fs=require("fs"),f=process.argv[1],p=JSON.parse(fs.readFileSync(f,"utf8"));
p.pids = p.pids || {};
p.pids[process.argv[2]]=parseInt(process.argv[3]);
fs.writeFileSync(f,JSON.stringify(p)+"\n");
    ' "$PID_FILE" "$name" "$pid" 2>/dev/null || true
}

# Check if server is running
check_server() {
    if [ ! -f "$PID_FILE" ]; then
        echo "stopped"
        return 1
    fi

    # Read PIDs and check if alive
    local all_alive=true
    if command -v node >/dev/null 2>&1; then
        local pids
        pids="$(node -e '
var p=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));
Object.entries(p.pids).forEach(function(e){console.log(e[0]+":"+e[1])});
        ' "$PID_FILE" 2>/dev/null)" || { echo "stopped"; return 1; }

        echo "$pids" | while IFS=: read -r name pid; do
            if kill -0 "$pid" 2>/dev/null; then
                printf "  ${GREEN}✓${NC} %-12s pid %s\n" "$name" "$pid"
            else
                printf "  ${RED}✗${NC} %-12s pid %s (dead)\n" "$name" "$pid"
                all_alive=false
            fi
        done

        local port
        port="$(node -p 'JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).port' "$PID_FILE" 2>/dev/null)" || port=""
        [ -n "$port" ] && printf "  ${CYAN}→${NC} http://localhost:%s/\n" "$port"
    fi

    return 0
}

# Stop server and all watchers
stop_server() {
    if [ ! -f "$PID_FILE" ]; then
        log_warn "No server running (.build.pid not found)"
        return 0
    fi

    log_info "Stopping server..."

    if command -v node >/dev/null 2>&1; then
        node -e '
var fs=require("fs"),p=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));
Object.entries(p.pids).forEach(function(e){
    try{process.kill(parseInt(e[1]),"SIGTERM");console.log("Stopped "+e[0]+" (pid "+e[1]+")")}
    catch(err){console.log("Already stopped: "+e[0]+" (pid "+e[1]+")")}
});
        ' "$PID_FILE" 2>/dev/null || true
    else
        # Fallback: try to kill known PIDs from file
        grep -oE '"[a-z]+": *[0-9]+' "$PID_FILE" 2>/dev/null | grep -oE '[0-9]+' | while read -r pid; do
            kill "$pid" 2>/dev/null || true
        done
    fi

    rm -f "$PID_FILE"
    log_success "Server stopped"
}

# ─── DEPLOYMENT ─────────────────────────────────────────────

deploy_rsync() {
    local host="$1" path="$2"
    [ -d "$DIST_DIR" ] || { log_error "dist/ is empty — build first"; return $EXIT_DEPLOY; }
    command -v rsync >/dev/null 2>&1 || { log_error "rsync not found"; return $EXIT_DEPLOY; }

    log_info "Deploying via rsync to $host:$path..."
    rsync -avz --delete "$DIST_DIR/" "${host}:${path}" 2>&1 || {
        log_error "rsync failed"
        return $EXIT_DEPLOY
    }
    log_success "Deployed via rsync"
}

deploy_scp() {
    local host="$1" path="$2"
    [ -d "$DIST_DIR" ] || { log_error "dist/ is empty — build first"; return $EXIT_DEPLOY; }

    log_info "Deploying via scp to $host:$path..."
    scp -r "$DIST_DIR/"* "${host}:${path}" 2>&1 || {
        log_error "scp failed"
        return $EXIT_DEPLOY
    }
    log_success "Deployed via scp"
}

deploy_rclone() {
    local remote="$1"
    [ -d "$DIST_DIR" ] || { log_error "dist/ is empty — build first"; return $EXIT_DEPLOY; }
    command -v rclone >/dev/null 2>&1 || { log_error "rclone not found"; return $EXIT_DEPLOY; }

    log_info "Deploying via rclone to $remote..."
    rclone sync "$DIST_DIR/" "$remote" --progress 2>&1 || {
        log_error "rclone failed"
        return $EXIT_DEPLOY
    }
    log_success "Deployed via rclone"
}

deploy_unison() {
    local profile="$1"
    command -v unison >/dev/null 2>&1 || { log_error "unison not found"; return $EXIT_DEPLOY; }

    log_info "Syncing via unison (profile: $profile)..."
    unison "$profile" -batch 2>&1 || {
        log_error "unison failed"
        return $EXIT_DEPLOY
    }
    log_success "Synced via unison"
}

run_deploy() {
    local target_name="${1:-}"

    # If no target specified, use first
    if [ -z "$target_name" ] && [ "$CFG_DN" -gt 0 ]; then
        eval "target_name=\$CFG_D0_NAME"
    fi

    [ -n "$target_name" ] || {
        log_error "No deploy targets configured in build.json"
        return $EXIT_DEPLOY
    }

    # Find target by name
    local i=0
    while [ "$i" -lt "$CFG_DN" ]; do
        eval "local _name=\$CFG_D${i}_NAME"
        if [ "$_name" = "$target_name" ]; then
            eval "local _method=\$CFG_D${i}_METHOD"
            eval "local _host=\$CFG_D${i}_HOST"
            eval "local _path=\$CFG_D${i}_PATH"
            eval "local _remote=\$CFG_D${i}_REMOTE"
            eval "local _profile=\$CFG_D${i}_PROFILE"

            if [ "$OPT_DRY_RUN" = true ]; then
                log_info "[dry-run] would deploy via $_method to $_name"
                return 0
            fi

            case "$_method" in
                rsync)  deploy_rsync "$_host" "$_path" ;;
                scp)    deploy_scp "$_host" "$_path" ;;
                rclone) deploy_rclone "$_remote" ;;
                unison) deploy_unison "$_profile" ;;
                *)      log_error "Unknown deploy method: $_method"; return $EXIT_DEPLOY ;;
            esac
            return $?
        fi
        i=$((i + 1))
    done

    log_error "Deploy target '$target_name' not found"
    log_step "Available: $(i=0; while [ $i -lt $CFG_DN ]; do eval "printf \$CFG_D${i}_NAME"; printf " "; i=$((i+1)); done)"
    return $EXIT_DEPLOY
}

# ─── STATUS & HELPER ────────────────────────────────────────

# Get dependency status
_deps_status() {
    if [ -d "$PROJECT_DIR/node_modules" ]; then
        printf "${GREEN}✓${NC}  local (./node_modules)"
    else
        local repo_root
        repo_root="$(cd "$PROJECT_DIR" && git rev-parse --show-toplevel 2>/dev/null)" || repo_root=""
        if [ -n "$repo_root" ] && [ -d "$repo_root/node_modules" ]; then
            local rel
            rel="$(python3 -c "import os.path;print(os.path.relpath('$repo_root/node_modules','$PROJECT_DIR'))" 2>/dev/null || echo "$repo_root/node_modules")"
            printf "${GREEN}✓${NC}  repo root ($rel)"
        else
            printf "${RED}✗${NC}  not installed — run: ./build.sh deps"
        fi
    fi
}

# Get build status
_build_status() {
    if [ -d "$DIST_DIR" ]; then
        local count size age
        count="$(find "$DIST_DIR" -type f 2>/dev/null | wc -l | tr -d ' ')"
        size="$(du -sh "$DIST_DIR" 2>/dev/null | cut -f1)"
        printf "${GREEN}✓${NC}  dist/ — %s files, %s" "$count" "$size"
    else
        printf "${RED}✗${NC}  not built — run: ./build.sh build"
    fi
}

# Get server status
_server_status() {
    if [ -f "$PID_FILE" ] && command -v node >/dev/null 2>&1; then
        local port server
        port="$(node -p 'JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).port' "$PID_FILE" 2>/dev/null)" || port=""
        server="$(node -p 'JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).server' "$PID_FILE" 2>/dev/null)" || server=""

        # Check if main process is alive
        local main_pid
        main_pid="$(node -p 'var p=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));p.pids[p.server]||Object.values(p.pids)[0]' "$PID_FILE" 2>/dev/null)" || main_pid=""

        if [ -n "$main_pid" ] && kill -0 "$main_pid" 2>/dev/null; then
            printf "${GREEN}✓${NC}  http://localhost:%s  (%s, pid %s)" "$port" "$server" "$main_pid"
        else
            printf "${YELLOW}!${NC}  stale pidfile (server not running)"
            rm -f "$PID_FILE"
        fi
    else
        printf "${DIM}—${NC}  not running"
    fi
}

# Get deploy status
_deploy_status() {
    if [ "$CFG_DN" -gt 0 ]; then
        local i=0
        while [ "$i" -lt "$CFG_DN" ]; do
            eval "local _name=\$CFG_D${i}_NAME"
            eval "local _method=\$CFG_D${i}_METHOD"
            eval "local _host=\$CFG_D${i}_HOST"
            eval "local _path=\$CFG_D${i}_PATH"
            eval "local _remote=\$CFG_D${i}_REMOTE"
            local dest="$_host:$_path"
            [ -z "$_host" ] && dest="$_remote"
            printf "  ${CYAN}%-12s${NC}  %s → %s\n" "$_name" "$_method" "$dest"
            i=$((i + 1))
        done
    else
        printf "  ${DIM}—  not configured${NC}\n"
    fi
}

# Print helper/status display
print_helper() {
    local fw_label="$CFG_FW"
    case "$CFG_FW" in
        vue)       fw_label="Vue 3" ;;
        react)     fw_label="React" ;;
        sveltekit) fw_label="SvelteKit" ;;
        vanilla)   fw_label="Vanilla" ;;
    esac

    printf "\n"
    printf "${BLUE}╔══════════════════════════════════════════════════════════════╗${NC}\n"
    printf "${BLUE}║${NC}  ${BOLD}${CFG_NAME}${NC} — ${fw_label} :${CFG_PORT}\n"
    printf "${BLUE}╚══════════════════════════════════════════════════════════════╝${NC}\n"
    printf "\n"

    # Status
    printf " ${BOLD}Status:${NC}\n"
    printf "   deps    "; _deps_status; printf "\n"
    printf "   build   "; _build_status; printf "\n"
    printf "   server  "; _server_status; printf "\n"
    printf "\n"

    # Commands
    printf " ${BOLD}Commands:${NC}\n"
    printf "   ${GREEN}build${NC}              Build for production → dist/\n"
    printf "   ${GREEN}dev${NC}                Start dev server with watchers (port %s)\n" "$CFG_PORT"
    printf "   ${GREEN}stop${NC}               Kill running dev server\n"
    printf "   ${GREEN}clean${NC}              Remove build artifacts\n"
    if [ "$CFG_DN" -gt 0 ]; then
        printf "   ${GREEN}deploy [target]${NC}    Deploy dist/ to remote server\n"
    fi
    printf "   ${GREEN}deps${NC}               Install/check dependencies\n"
    printf "   ${GREEN}status${NC}             Full status details\n"
    printf "\n"

    # Deploy targets
    if [ "$CFG_DN" -gt 0 ]; then
        printf " ${BOLD}Deploy targets:${NC}\n"
        _deploy_status
        printf "\n"
    fi

    # Options
    printf " ${BOLD}Options:${NC}\n"
    printf "   ${DIM}--dry-run${NC}          Show what would run\n"
    printf "   ${DIM}--verbose${NC}          Print all commands\n"
    printf "   ${DIM}--no-deps${NC}          Skip dependency resolution\n"
    printf "\n"

    # Build pipeline
    if [ "$CFG_BN" -gt 0 ]; then
        printf " ${BOLD}Build pipeline:${NC}\n"
        local i=0
        while [ "$i" -lt "$CFG_BN" ]; do
            eval "local _mod=\$CFG_B${i}_MOD"
            eval "local _input=\$CFG_B${i}_INPUT"
            eval "local _output=\$CFG_B${i}_OUTPUT"
            eval "local _files=\$CFG_B${i}_FILES"
            local detail=""
            [ -n "$_input" ] && detail="$_input"
            [ -n "$_files" ] && detail="$_files"
            [ -n "$_output" ] && [ -n "$detail" ] && detail="$detail → $_output"
            printf "   %s. ${CYAN}%-14s${NC} %s\n" "$((i + 1))" "$_mod" "$detail"
            i=$((i + 1))
        done
        printf "\n"
    fi

    # Paths
    printf " ${BOLD}Paths:${NC}\n"
    printf "   src     %s/\n" "$CFG_SRC"
    printf "   dist    %s/\n" "$CFG_DIST"
    printf "\n"
}

# ─── COMMANDS ───────────────────────────────────────────────

cmd_build() {
    log_info "Building $CFG_NAME for production..."
    resolve_deps
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"
    run_build
    log_success "Build complete → $DIST_DIR"
}

cmd_dev() {
    log_info "Starting $CFG_NAME dev environment..."
    resolve_deps

    # Prime dist/ with the prod build BEFORE starting watchers/server.
    # Watchers write live outputs to dist/watch/; the server overlays
    # dist/watch/ on dist/, so dist/ must hold the static assets (HTML,
    # public/ symlink, data wrappers, ...) for the server to find them
    # while the watchers' compiled outputs override script.js / style.css.
    if [ "$CFG_BN" -gt 0 ]; then
        rm -rf "$DIST_DIR"
        mkdir -p "$DIST_DIR"
        run_build
    fi

    # Start watchers (write into dist/watch/ — see start_watchers comment)
    if [ "$CFG_WN" -gt 0 ]; then
        start_watchers
    fi

    # Start server (serves dist/ with dist/watch/ overlay when watchers present)
    start_server

    sleep 1

    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${CFG_NAME} STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${CFG_PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./build.sh stop\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

cmd_stop() {
    stop_server
}

# Reap orphan dev watchers across the whole front/ tree (any project whose
# build.sh dev was started in a since-closed terminal — nohup detaches the
# watcher from SIGHUP so it survives forever, accumulating between sessions).
# Uses REPO_ROOT (set by parse_repo_config) as the unique substring — every
# legitimate watcher under front/ has the front/ prefix in its argv or cwd.
cmd_kill_orphans() {
    local front_root="$REPO_ROOT"
    [ -z "$front_root" ] && front_root="$(cd "$PROJECT_DIR" && git rev-parse --show-toplevel 2>/dev/null)"
    [ -z "$front_root" ] && { log_error "kill-orphans: cannot resolve front/ repo root"; return 1; }

    log_info "Reaping orphan dev watchers under $front_root ..."
    _kill_existing_watcher esbuild "$front_root/"
    _kill_existing_watcher sass    "$front_root/"
    _kill_existing_watcher tsc     "$front_root/"
    log_success "Orphan reap complete"
}

cmd_clean() {
    log_info "Cleaning build artifacts..."
    rm -rf "$DIST_DIR"
    rm -f "$PID_FILE"
    rm -rf "$PROJECT_DIR/node_modules/.vite" 2>/dev/null || true
    rm -rf "$PROJECT_DIR/.svelte-kit" 2>/dev/null || true
    log_success "Clean complete"
}

cmd_deploy() {
    local target="${1:-}"
    run_deploy "$target"
}

cmd_deps() {
    OPT_NO_DEPS=false
    resolve_deps
}

cmd_status() {
    printf "\n ${BOLD}Server:${NC}\n"
    if [ -f "$PID_FILE" ]; then
        check_server
    else
        printf "  ${DIM}Not running${NC}\n"
    fi
    printf "\n ${BOLD}Build:${NC}\n"
    printf "   "; _build_status; printf "\n"
    printf "\n ${BOLD}Dependencies:${NC}\n"
    printf "   "; _deps_status; printf "\n"
    printf "\n"
}

# ─── ANALYTICS ─────────────────────────────────────────────

cmd_analytics() {
    local sub="${1:-check}"
    # Build ordered list of candidate src dirs. Pattern $CFG_SRC first, then known
    # alternates — a project may use src/ as a stub and src_static/ as the real one
    # (e.g. central_bank), so collect all existing dirs rather than stopping at first.
    local _src_dirs=""
    for _candidate in "$CFG_SRC" src src_static; do
        local _d="$PROJECT_DIR/$_candidate"
        [ -d "$_d" ] || continue
        # de-dupe (in case $CFG_SRC == src)
        case " $_src_dirs " in *" $_d "*) ;; *) _src_dirs="$_src_dirs $_d" ;; esac
    done
    _src_dirs="${_src_dirs# }"
    [ -n "$_src_dirs" ] || { log_warn "analytics: no src dir found"; return 0; }

    # Read analytics config from config.json (single source of truth)
    local repo_config="${REPO_ROOT}/config.json"

    local umami_site_id="PENDING_FIRST_DEPLOY"
    if [ -f "$repo_config" ] && command -v node >/dev/null 2>&1; then
        umami_site_id="$(node -p 'JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).analytics.umami.site_id' "$repo_config" 2>/dev/null)" || umami_site_id="PENDING_FIRST_DEPLOY"
    elif [ -f "$repo_config" ] && command -v python3 >/dev/null 2>&1; then
        umami_site_id="$(python3 -c "import json;print(json.load(open('$repo_config'))['analytics']['umami']['site_id'])" 2>/dev/null)" || umami_site_id="PENDING_FIRST_DEPLOY"
    fi

    if [ "$umami_site_id" = "PENDING_FIRST_DEPLOY" ] && [ "$sub" = "inject" ]; then
        log_error "Umami site_id not configured yet — update config.json after first deploy"
        return 1
    fi

    local matomo_marker="container_odwLIyPV"
    local umami_marker="analytics.diegonmarcos.com/umami"

    local matomo_tag='<!-- Matomo Tag Manager -->\
<script>\
var _mtm = window._mtm = window._mtm || [];\
_mtm.push({'"'"'mtm.startTime'"'"': (new Date().getTime()), '"'"'event'"'"': '"'"'mtm.Start'"'"'});\
(function() {\
  var d=document, g=d.createElement('"'"'script'"'"'), s=d.getElementsByTagName('"'"'script'"'"')[0];\
  g.async=true; g.src='"'"'https://analytics.diegonmarcos.com/js/container_odwLIyPV.js'"'"';\
  s.parentNode.insertBefore(g,s);\
})();\
</script>\
<!-- End Matomo Tag Manager -->'

    local umami_tag="<!-- Umami Analytics -->
<script defer src=\"https://analytics.diegonmarcos.com/umami/script.js\" data-website-id=\"${umami_site_id}\"></script>
<!-- End Umami Analytics -->"

    case "$sub" in
        check)
            log_info "Analytics audit: $CFG_NAME"
            local total=0 has_both=0 has_matomo=0 has_umami=0 has_none=0
            for f in $(find $_src_dirs -name "*.html" -type f -not -path "*/dist/*" -not -path "*/node_modules/*" -not -path "*/.svelte-kit/*" 2>/dev/null); do
                total=$((total + 1))
                local _rel="${f#$PROJECT_DIR/}"
                local _m=false _u=false
                grep -q "$matomo_marker" "$f" && _m=true
                grep -q "$umami_marker" "$f" && _u=true
                if [ "$_m" = true ] && [ "$_u" = true ]; then
                    has_both=$((has_both + 1))
                    log_step "$_rel ${GREEN}matomo+umami${NC}"
                elif [ "$_m" = true ]; then
                    has_matomo=$((has_matomo + 1))
                    log_step "$_rel ${YELLOW}matomo only${NC}"
                elif [ "$_u" = true ]; then
                    has_umami=$((has_umami + 1))
                    log_step "$_rel ${YELLOW}umami only${NC}"
                else
                    has_none=$((has_none + 1))
                    log_step "$_rel ${RED}none${NC}"
                fi
            done
            printf "\n"
            log_info "Total: $total | Both: $has_both | Matomo: $has_matomo | Umami: $has_umami | None: $has_none"
            ;;
        inject)
            log_info "Injecting analytics tags: $CFG_NAME"
            local injected=0 skipped=0
            for f in $(find $_src_dirs -name "*.html" -type f -not -path "*/dist/*" -not -path "*/node_modules/*" -not -path "*/.svelte-kit/*" 2>/dev/null); do
                local _rel="${f#$PROJECT_DIR/}"
                grep -q "</head>" "$f" || { log_step "skip (no </head>): $_rel"; skipped=$((skipped + 1)); continue; }

                local _need_matomo=false _need_umami=false
                grep -q "$matomo_marker" "$f" || _need_matomo=true
                grep -q "$umami_marker" "$f" || _need_umami=true

                if [ "$_need_matomo" = false ] && [ "$_need_umami" = false ]; then
                    log_step "skip (has both): $_rel"
                    skipped=$((skipped + 1))
                    continue
                fi

                local _inject=""
                [ "$_need_matomo" = true ] && _inject="$matomo_tag"
                if [ "$_need_umami" = true ]; then
                    [ -n "$_inject" ] && _inject="$_inject
"
                    _inject="$_inject$umami_tag"
                fi

                awk -v tag="$_inject" '/<\/head>/ { print tag } { print }' "$f" > "$f.tmp" && mv "$f.tmp" "$f"
                injected=$((injected + 1))
                local _what=""
                [ "$_need_matomo" = true ] && _what="matomo"
                [ "$_need_umami" = true ] && _what="${_what:+$_what+}umami"
                log_success "injected $_what: $_rel"
            done
            printf "\n"
            log_info "Injected: $injected | Skipped: $skipped"
            ;;
        remove)
            local provider="${2:-}"
            [ -z "$provider" ] && { log_error "Usage: build.sh analytics remove <matomo|umami>"; return 1; }
            log_info "Removing $provider tags: $CFG_NAME"
            local removed=0
            local start_marker="" end_marker=""
            case "$provider" in
                matomo) start_marker="<!-- Matomo Tag Manager -->"; end_marker="<!-- End Matomo Tag Manager -->" ;;
                umami)  start_marker="<!-- Umami Analytics -->"; end_marker="<!-- End Umami Analytics -->" ;;
                *)      log_error "Unknown provider: $provider (use matomo or umami)"; return 1 ;;
            esac
            for f in $(find $_src_dirs -name "*.html" -type f -not -path "*/dist/*" -not -path "*/node_modules/*" -not -path "*/.svelte-kit/*" 2>/dev/null); do
                local _rel="${f#$PROJECT_DIR/}"
                if grep -q "$start_marker" "$f"; then
                    awk -v s="$start_marker" -v e="$end_marker" '
                        $0 ~ s { skip=1; next }
                        $0 ~ e { skip=0; next }
                        !skip { print }
                    ' "$f" > "$f.tmp" && mv "$f.tmp" "$f"
                    removed=$((removed + 1))
                    log_success "removed $provider: $_rel"
                fi
            done
            log_info "Removed from $removed files"
            ;;
        *)
            log_error "Unknown analytics subcommand: $sub (use check, inject, remove)"
            return 1
            ;;
    esac
}

# ─── MAIN ───────────────────────────────────────────────────
main() {
    # Parse options
    _action=""
    _deploy_target=""
    _extra_arg=""
    for arg in "$@"; do
        case "$arg" in
            --verbose)  OPT_VERBOSE=true ;;
            --dry-run)  OPT_DRY_RUN=true ;;
            --no-deps)  OPT_NO_DEPS=true ;;
            --*)        ;; # ignore unknown options
            *)
                if [ -z "$_action" ]; then
                    _action="$arg"
                elif [ -z "$_deploy_target" ]; then
                    _deploy_target="$arg"
                else
                    _extra_arg="$arg"
                fi
                ;;
        esac
    done

    # Load repo-wide config (config.json at repo root)
    parse_repo_config

    # Parse project config (build.json)
    if [ -f "$CONFIG_FILE" ]; then
        parse_config
        DIST_DIR="$PROJECT_DIR/$CFG_DIST"
    else
        if [ -z "$_action" ] || [ "$_action" = "help" ]; then
            printf "${RED}✗${NC} build.json not found in %s\n" "$PROJECT_DIR"
            printf "  Create a build.json to configure this project.\n"
            exit $EXIT_CONFIG
        fi
    fi

    # Default action: show helper
    [ -z "$_action" ] && { print_helper; exit 0; }

    case "$_action" in
        build)      cmd_build ;;
        dev|watch)  cmd_dev ;;
        stop|kill)  cmd_stop ;;
        kill-orphans|reap) cmd_kill_orphans ;;
        clean)      cmd_clean ;;
        deploy)     cmd_deploy "$_deploy_target" ;;
        deps)       cmd_deps ;;
        status)     cmd_status ;;
        analytics)  cmd_analytics "$_deploy_target" "$_extra_arg" ;;
        help|-h|--help) print_helper ;;
        *)
            log_error "Unknown command: $_action"
            print_helper
            exit 1
            ;;
    esac
}

main "$@"
