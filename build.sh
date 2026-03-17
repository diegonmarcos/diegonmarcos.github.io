#!/bin/sh
# Front Monorepo Orchestrator
# Single entry point: deps, build, config, clean
# Per-project builds delegated to _engine.sh via symlinked build.sh
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
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

    # Node deps — merge all project package.json into root, then npm install
    log "Scanning projects and generating root package.json..."
    _generate_package_json
    log "Installing node dependencies..."
    local npm_flags="--no-fund --no-audit --legacy-peer-deps"
    if [ -f "$CONFIG_FILE" ] && command -v node >/dev/null 2>&1; then
        npm_flags="$(node -p 'var c=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));(c.deps&&c.deps.npm&&c.deps.npm.flags)||""' "$CONFIG_FILE" 2>/dev/null)" || npm_flags="--no-fund --no-audit --legacy-peer-deps"
    fi
    cd "$SCRIPT_DIR" && npm install $npm_flags

    # Generate front-deps.json (consolidated deps grouped by language)
    log "Generating front-deps.json..."
    _generate_front_deps_json

    log "All dependencies installed."
}

# =============================================================================
# Generate merged package.json from all project package.json files
# =============================================================================

_generate_package_json() {
    node -e "
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = execSync('find . -maxdepth 3 -name build.json -not -path ./build.json', {cwd: '$SCRIPT_DIR'})
    .toString().trim().split('\n').filter(Boolean);

const deps = {};
const devDeps = {};

for (const bjson of glob) {
    const dir = path.join('$SCRIPT_DIR', path.dirname(bjson));
    const pkgPath = path.join(dir, 'package.json');
    if (!fs.existsSync(pkgPath)) continue;

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    Object.entries(pkg.dependencies || {}).forEach(([k, v]) => {
        if (!deps[k] || v > deps[k]) deps[k] = v;
    });
    Object.entries(pkg.devDependencies || {}).forEach(([k, v]) => {
        if (!devDeps[k] || v > devDeps[k]) devDeps[k] = v;
    });
}

const sort = obj => Object.fromEntries(Object.entries(obj).sort(([a],[b]) => a.localeCompare(b)));
const nodeVer = fs.readFileSync('$NODE_VERSION_FILE', 'utf8').trim();

const root = {
    name: 'front-monorepo',
    private: true,
    description: 'Auto-generated by build.sh deps — merged deps from all projects',
    engines: { node: '>=' + nodeVer },
    dependencies: sort(deps),
    devDependencies: sort(devDeps)
};

fs.writeFileSync(path.join('$SCRIPT_DIR', 'package.json'), JSON.stringify(root, null, 2) + '\n');
const total = Object.keys(deps).length + Object.keys(devDeps).length;
console.log('package.json: ' + total + ' packages (' + Object.keys(deps).length + ' deps + ' + Object.keys(devDeps).length + ' devDeps)');
" 2>/dev/null || python3 -c "
import json, os, glob as g

repo = '$SCRIPT_DIR'
deps, dev = {}, {}
node_ver = open('$NODE_VERSION_FILE').read().strip()

for bjson in g.glob(os.path.join(repo, '*', '*', 'build.json')) + g.glob(os.path.join(repo, '*', 'build.json')):
    d = os.path.dirname(bjson)
    pkg = os.path.join(d, 'package.json')
    if not os.path.exists(pkg): continue
    p = json.load(open(pkg))
    for k, v in p.get('dependencies', {}).items():
        if k not in deps or v > deps[k]: deps[k] = v
    for k, v in p.get('devDependencies', {}).items():
        if k not in dev or v > dev[k]: dev[k] = v

root = {
    'name': 'front-monorepo',
    'private': True,
    'description': 'Auto-generated by build.sh deps -- merged deps from all projects',
    'engines': {'node': '>=' + node_ver},
    'dependencies': dict(sorted(deps.items())),
    'devDependencies': dict(sorted(dev.items()))
}

with open(os.path.join(repo, 'package.json'), 'w') as f:
    json.dump(root, f, indent=2)
    f.write('\n')
total = len(deps) + len(dev)
print(f'package.json: {total} packages ({len(deps)} deps + {len(dev)} devDeps)')
"
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

fs.writeFileSync(path.join(repo, 'front-deps.json'), JSON.stringify(output, null, 2) + '\n');
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
    const buildSteps = (config.build || []).map(s => s.mod);

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

fs.writeFileSync(path.join(repo, 'front-topology.json'), JSON.stringify(topology, null, 2) + '\n');
console.log('front-topology.json: ' + projects.length + ' projects');

// Summary by category
const cats = {};
projects.forEach(p => { cats[p.category] = (cats[p.category] || 0) + 1; });
Object.entries(cats).sort().forEach(([k, v]) => console.log('  ' + k + ': ' + v));
"
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
