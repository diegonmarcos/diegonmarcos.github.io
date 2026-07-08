#!/bin/sh
# Front Monorepo Orchestrator
# Single entry point: deps, build, config, clean
# Per-project builds delegated to _engine.sh via symlinked build.sh
set -e

# Resolve self path (handles symlink invocation from repo root or direct)
SELF="$0"
case "$SELF" in /*) ;; *) SELF="$(pwd)/$SELF" ;; esac
while [ -L "$SELF" ]; do
    _t="$(readlink "$SELF")"
    case "$_t" in /*) SELF="$_t" ;; *) SELF="$(dirname "$SELF")/$_t" ;; esac
done
# Walk up from script's real dir to find repo root (marker: config.json)
SCRIPT_DIR="$(cd "$(dirname "$SELF")" && pwd)"
while [ "$SCRIPT_DIR" != "/" ] && [ ! -f "$SCRIPT_DIR/config.json" ]; do
    SCRIPT_DIR="$(dirname "$SCRIPT_DIR")"
done
[ -f "$SCRIPT_DIR/config.json" ] || { echo "ERROR: config.json not found walking up from $0" >&2; exit 1; }
CONFIG_FILE="$SCRIPT_DIR/config.json"
NODE_VERSION_FILE="$SCRIPT_DIR/.node-version"

# =============================================================================
# Helpers
# =============================================================================

log() { printf "[%s] %s\n" "$(date '+%H:%M:%S')" "$1"; }
log_error() { printf "[%s] ERROR: %s\n" "$(date '+%H:%M:%S')" "$1" >&2; }

# Auto-yes in CI or non-interactive
AUTO_YES=false
[ ! -t 0 ] && AUTO_YES=true
[ -n "${CI:-}" ] && AUTO_YES=true
[ -n "${GITHUB_ACTIONS:-}" ] && AUTO_YES=true

confirm() {
    [ "$AUTO_YES" = "true" ] && return 0
    printf "  %s [y/N] " "$1"
    read -r answer
    [ "$answer" = "y" ] || [ "$answer" = "Y" ]
}

# =============================================================================
# Dependency Engine — reads config.json .deps section
# =============================================================================

deps_binaries() { jq -r '.deps.system | keys[]' "$CONFIG_FILE" | tr '\n' ' '; }
deps_pkg_name() { jq -r ".deps.system[\"$1\"][\"$2\"] // empty" "$CONFIG_FILE"; }

check_deps() {
    missing=""
    for bin in $(deps_binaries); do
        command -v "$bin" >/dev/null 2>&1 || missing="$missing $bin"
    done
    [ -z "$missing" ] && return 0

    echo ""
    echo "============================================"
    echo "  MISSING DEPENDENCIES:$missing"
    echo "============================================"
    echo "  Run: ./build.sh deps"
    echo ""
    return 1
}

cmd_deps() {
    log "Installing all dependencies from config.json..."

    # System deps
    missing=""
    for bin in $(deps_binaries); do
        command -v "$bin" >/dev/null 2>&1 || missing="$missing $bin"
    done

    if [ -n "$missing" ]; then
        if command -v nix >/dev/null 2>&1; then
            nix_args=""
            for bin in $missing; do
                pkg=$(deps_pkg_name "$bin" "nix")
                [ -n "$pkg" ] && nix_args="$nix_args nixpkgs#$pkg"
            done
            [ -n "$nix_args" ] && {
                confirm "Install via nix:$nix_args?" || { log "Aborted."; exit 1; }
                log "Nix: installing$nix_args"
                nix profile install $nix_args
            }
        elif command -v apt-get >/dev/null 2>&1; then
            apt_args=""
            for bin in $missing; do
                pkg=$(deps_pkg_name "$bin" "apt")
                [ -n "$pkg" ] && apt_args="$apt_args $pkg"
            done
            [ -n "$apt_args" ] && {
                confirm "Install via apt:$apt_args?" || { log "Aborted."; exit 1; }
                sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -q $apt_args
            }
        else
            log_error "No supported package manager. Install manually:$missing"
            exit 1
        fi
    else
        log "System: all binaries on PATH"
    fi

    # Node deps — front-deps.json is the SINGLE SOURCE; the root package.json
    # is a derived, gitignored install manifest (npm needs one to populate the
    # shared node_modules). Order: per-project package.json → front-deps.json →
    # root package.json → npm install.
    log "Generating front-deps.json (single source of deps)..."
    _generate_front_deps_json
    log "Deriving root package.json from front-deps.json..."
    local gen="$SCRIPT_DIR/1_workflows/dist/scripts/front-gen-root-pkg.sh"
    [ -x "$gen" ] || gen="$SCRIPT_DIR/1_workflows/src/scripts/front-gen-root-pkg.sh"
    "$gen" "$SCRIPT_DIR"
    log "Installing node dependencies..."
    local npm_flags="--no-fund --no-audit --legacy-peer-deps"
    if [ -f "$CONFIG_FILE" ] && command -v node >/dev/null 2>&1; then
        npm_flags="$(node -p 'var c=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));(c.deps&&c.deps.npm&&c.deps.npm.flags)||""' "$CONFIG_FILE" 2>/dev/null)" || npm_flags="--no-fund --no-audit --legacy-peer-deps"
    fi
    cd "$SCRIPT_DIR" && npm install $npm_flags

    log "All dependencies installed."
}

# =============================================================================
# Generate front-deps.json (same grouped format as cloud-deps.json)
# =============================================================================

_generate_front_deps_json() {
    node -e "
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = '$SCRIPT_DIR';
const glob = execSync('find . -maxdepth 3 -name build.json -not -path ./build.json -not -path \"./z_Archive/*\"', {cwd: repo})
    .toString().trim().split('\n').filter(Boolean);

const perService = [];
const mergedDeps = {};
const mergedDevDeps = {};

for (const bjson of glob) {
    const dir = path.join(repo, path.dirname(bjson));
    const pkgPath = path.join(dir, 'package.json');
    if (!fs.existsSync(pkgPath)) continue;

    const bj = JSON.parse(fs.readFileSync(path.join(repo, bjson), 'utf8'));
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const deps = pkg.dependencies || {};
    const devDeps = pkg.devDependencies || {};

    Object.entries(deps).forEach(([k, v]) => {
        if (!mergedDeps[k] || v > mergedDeps[k]) mergedDeps[k] = v;
    });
    Object.entries(devDeps).forEach(([k, v]) => {
        if (!mergedDevDeps[k] || v > mergedDevDeps[k]) mergedDevDeps[k] = v;
    });

    perService.push({
        service: bj.name || path.basename(dir),
        folder: path.dirname(bjson).replace(/^\.\/?/, ''),
        category: bj.category || 'unknown',
        dependencies: deps,
        devDependencies: devDeps
    });
}

const sort = obj => Object.fromEntries(Object.entries(obj).sort(([a],[b]) => a.localeCompare(b)));
const total = Object.keys(mergedDeps).length + Object.keys(mergedDevDeps).length;

const output = {
    _meta: {
        generated_by: 'front/build.sh deps',
        generated_at: new Date().toISOString(),
        total_services: perService.length,
        total_packages: total
    },
    node: {
        merged: {
            dependencies: sort(mergedDeps),
            devDependencies: sort(mergedDevDeps)
        },
        per_service: perService.sort((a, b) => a.folder.localeCompare(b.folder))
    }
};

// front-deps.json is a symlink into the I_front-data submodule, which is NOT
// checked out in CI (dangling symlink). Resolve the real target and ensure its
// parent exists so writeFileSync never dies on ENOENT — same pattern as cmd_config.
const outPath = path.join(repo, 'front-deps.json');
let realPath = outPath;
try { realPath = fs.realpathSync(outPath); }
catch (e) {
    try { realPath = path.resolve(path.dirname(outPath), fs.readlinkSync(outPath)); }
    catch (e2) { realPath = outPath; }
}
fs.mkdirSync(path.dirname(realPath), { recursive: true });
fs.writeFileSync(realPath, JSON.stringify(output, null, 2) + '\n');
console.log('front-deps.json: ' + total + ' packages from ' + perService.length + ' projects');
" 2>/dev/null || log "SKIP front-deps.json (node not available)"
}

# =============================================================================
# Config — generate front-topology.json from all build.json files
# =============================================================================

cmd_config() {
    log "Generating front-topology.json..."
    node -e "
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = '$SCRIPT_DIR';
const glob = execSync('find . -maxdepth 3 -name build.json -not -path ./build.json -not -path \"./z_Archive/*\"', {cwd: repo})
    .toString().trim().split('\n').filter(Boolean).sort();

const projects = [];

for (const bjson of glob) {
    const dir = path.dirname(bjson);
    const config = JSON.parse(fs.readFileSync(path.join(repo, bjson), 'utf8'));
    const clean = dir.replace(/^\.\/?/, '');
    const parts = clean.split('/').filter(Boolean);
    const category = parts[0] || '';
    const slug = parts.slice(1).join('/') || parts[0];

    // Check for package.json deps
    const pkgPath = path.join(repo, dir, 'package.json');
    let depCount = 0;
    if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        depCount = Object.keys(pkg.dependencies || {}).length + Object.keys(pkg.devDependencies || {}).length;
    }

    // Check dist
    const distPath = path.join(repo, dir, config.dist || 'dist');
    const hasDist = fs.existsSync(distPath);

    // Build steps
    const buildSteps = Array.isArray(config.build) ? config.build.map(s => s.mod) : [];

    projects.push({
        name: config.name,
        slug: slug,
        path: dir.replace(/^\.\/?/, ''),
        category: category,
        framework: config.framework || 'vanilla',
        port: config.port || null,
        build_steps: buildSteps,
        dep_count: depCount,
        has_dist: hasDist,
        deploy_name: slug.split('/').pop()
    });
}

const topology = {
    _meta: {
        generated_by: 'build.sh config',
        timestamp: new Date().toISOString(),
        project_count: projects.length
    },
    projects: projects
};

// front-topology.json may be a symlink into a submodule (e.g. I_front-data) that
// is NOT checked out (submodules are read-only here and never force-registered).
// Resolve the real target and ensure its parent exists so generation never dies
// on a dangling symlink — that ENOENT was the gen-configs CI failure.
const outPath = path.join(repo, 'front-topology.json');
let realPath = outPath;
try {
    realPath = fs.realpathSync(outPath);
} catch (e) {
    try { realPath = path.resolve(path.dirname(outPath), fs.readlinkSync(outPath)); }
    catch (e2) { realPath = outPath; }
}
fs.mkdirSync(path.dirname(realPath), { recursive: true });
fs.writeFileSync(realPath, JSON.stringify(topology, null, 2) + '\n');
console.log('front-topology.json: ' + projects.length + ' projects');

// Summary by category
const cats = {};
projects.forEach(p => { cats[p.category] = (cats[p.category] || 0) + 1; });
Object.entries(cats).sort().forEach(([k, v]) => console.log('  ' + k + ': ' + v));
"
    # Regenerate the master index (0_ folder) from the fresh topology
    local index_gen="$SCRIPT_DIR/0_______________________________/index.sh"
    if [ -x "$index_gen" ]; then
        log "Regenerating master index..."
        "$index_gen"
    fi
    log "Done."
}

# =============================================================================
# Build — build one or all projects
# =============================================================================

cmd_build() {
    project="$1"

    if [ -n "$project" ]; then
        _build_project "$project"
    else
        log "Building all projects..."
        failed="" passed=0 errors=0

        for bjson in $(find "$SCRIPT_DIR" -maxdepth 3 -name "build.json" -not -path "$SCRIPT_DIR/build.json" -not -path "*/z_Archive/*" | sort); do
            dir="$(dirname "$bjson")"
            name="$(basename "$dir")"

            [ ! -f "$dir/build.sh" ] && continue

            log "Building $name..."
            if (cd "$dir" && sh build.sh build); then
                passed=$((passed + 1))
            else
                errors=$((errors + 1))
                failed="$failed $name"
            fi
        done

        echo ""
        echo "========================================"
        echo "  Passed: $passed  Failed: $errors"
        [ -n "$failed" ] && echo "  FAILED:$failed"
        echo "========================================"
        [ $errors -eq 0 ]
    fi
}

_build_project() {
    name="$1"
    dir=$(find "$SCRIPT_DIR" -maxdepth 3 -type d -name "$name" -not -path "*/z_Archive/*" -not -path "*/node_modules/*" | head -1)
    [ -z "$dir" ] && { log_error "Project not found: $name"; exit 1; }
    [ ! -f "$dir/build.sh" ] && { log_error "No build.sh in $dir"; exit 1; }

    log "Building $name..."
    (cd "$dir" && sh build.sh build)
    log "Built $name"
}

# =============================================================================
# Clean
# =============================================================================

cmd_clean() {
    log "Cleaning all dist/ folders..."
    count=0
    for d in $(find "$SCRIPT_DIR" -maxdepth 3 -type d -name "dist" -not -path "*/node_modules/*"); do
        rm -rf "$d"
        count=$((count + 1))
    done
    log "Cleaned $count dist/ folders"
}

# =============================================================================
# Analytics — audit/inject tracking tags across all projects
# =============================================================================

cmd_analytics() {
    sub="${1:-check}"
    extra="${2:-}"
    log "Analytics $sub across all projects..."
    for bjson in $(find "$SCRIPT_DIR" -maxdepth 3 -name "build.json" -not -path "$SCRIPT_DIR/build.json" -not -path "*/z_Archive/*" | sort); do
        dir="$(dirname "$bjson")"
        [ -f "$dir/build.sh" ] || continue
        (cd "$dir" && sh build.sh analytics "$sub" "$extra")
    done
}

# =============================================================================
# Usage
# =============================================================================

usage() {
    cat <<'EOF'
Front Monorepo Orchestrator — repo-level CLI for front/

USAGE:  ./build.sh <command> [args]

SETUP:
    deps                  Install ALL dependencies (system + node)

PIPELINE:
    build [project]       Build one or all projects via _engine.sh
    clean                 Remove all dist/ folders
    analytics [check|inject|remove <provider>]
                          Audit/inject/remove tracking tags in source HTML

CONFIG:
    config                Generate front-topology.json from all build.json files

EXAMPLES:
    ./build.sh deps               Install everything
    ./build.sh build               Build all projects
    ./build.sh build linktree      Build single project
    ./build.sh config              Generate front-topology.json
    ./build.sh clean               Remove all dist/
EOF
    exit 0
}

# =============================================================================
# Main
# =============================================================================

command="${1:-}"; shift 2>/dev/null || true

# Check deps at startup (skip for 'deps' command)
if [ "$command" != "deps" ] && [ "$command" != "help" ] && [ -n "$command" ]; then
    check_deps || exit 1
fi

case "$command" in
    deps)     cmd_deps ;;
    build)    cmd_build "$@" ;;
    clean)    cmd_clean ;;
    analytics) cmd_analytics "$@" ;;
    config)   cmd_config ;;
    ""|help)  usage ;;
    *)        log_error "Unknown: $command"; usage ;;
esac
