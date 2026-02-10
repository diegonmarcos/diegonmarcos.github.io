#!/bin/sh
#=====================================
# MYFEED BUILD SCRIPT (VANILLA)
#=====================================
# POSIX-compliant build script for multi-page vanilla app
# Usage: ./1.ops/build.sh [action]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m'

# Project paths
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="MyFeed"
PORT="8003"
DIST_DIR="$PROJECT_DIR/dist"

# Logging
log_info() { printf "${BLUE}[INFO]${NC} %s\n" "$1"; }
log_success() { printf "${GREEN}[OK]${NC} %s\n" "$1"; }
log_error() { printf "${RED}[ERROR]${NC} %s\n" "$1" >&2; }
log_warning() { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }

# Help menu
print_usage() {
    printf "${BLUE}===========================================================================${NC}\n"
    printf "${CYAN}  ${PROJECT_NAME} Build Script (Vanilla Multi-Page)${NC}\n"
    printf "${BLUE}===========================================================================${NC}\n"
    printf "\n"
    printf "${YELLOW}USAGE:${NC}  ./1.ops/build.sh [action]\n"
    printf "\n"
    printf "${YELLOW}BUILD:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build Sass + TS, create single-file HTML pages\n"
    printf "  ${GREEN}typecheck${NC}    # Run TypeScript type checking\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start live-server :${PORT} + Sass/TS watch\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "MyFeed" "Vanilla" "Sass" "TypeScript" "live-server :${PORT}" "Sass+TS"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Check dependencies
# Resolve node dependencies - checks multiple locations before installing
# Usage: resolve_deps [package_dir]
resolve_deps() {
    local pkg_dir="${1:-$PROJECT_DIR}"

    # 1. Already installed locally
    if [ -d "$pkg_dir/node_modules" ]; then
        return 0
    fi

    # 2. Repo root shared node_modules
    local repo_root
    repo_root="$(cd "$pkg_dir" && git rev-parse --show-toplevel 2>/dev/null)" || repo_root=""
    if [ -n "$repo_root" ] && [ -d "$repo_root/node_modules" ]; then
        export NODE_PATH="${repo_root}/node_modules${NODE_PATH:+:$NODE_PATH}"
        export PATH="${repo_root}/node_modules/.bin:$PATH"
        log_info "Using shared deps: $repo_root/node_modules"
        return 0
    fi

    # 3. Auto-install in package dir
    if command -v npm >/dev/null 2>&1 && [ -f "$pkg_dir/package.json" ]; then
        log_info "Installing dependencies in $pkg_dir..."
        (cd "$pkg_dir" && npm install --no-fund --no-audit 2>&1 | tail -3)
        if [ -d "$pkg_dir/node_modules" ]; then
            return 0
        fi
    fi

    log_error "Dependencies not resolved for $pkg_dir"
    return 1
}

# Build Sass
build_scss() {
    log_info "Building SCSS..."
    cd "$PROJECT_DIR"
    npx sass src_static/scss/main.scss style.css --style=compressed --no-source-map
    log_success "SCSS compiled successfully"
}

# Build TypeScript
build_typescript() {
    log_info "Building TypeScript..."
    cd "$PROJECT_DIR"
    npx esbuild src_static/typescript/main.ts --bundle --outfile=script.js --format=iife --target=es2020 --minify
    log_success "TypeScript compiled successfully"
}

# Build separate files (HTML + CSS + JS)
build_separate_files() {
    log_info "Building separate HTML, CSS, JS files..."

    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Copy public folder (not symlink, for file:// protocol compatibility)
    if [ -d "$PROJECT_DIR/public" ]; then
        cp -r "$PROJECT_DIR/public" "$DIST_DIR/public"
        log_success "Copied: public/"
    fi

    # Move CSS and JS to dist
    mv "$PROJECT_DIR/style.css" "$DIST_DIR/style.css"
    mv "$PROJECT_DIR/script.js" "$DIST_DIR/script.js"
    log_success "Copied: style.css, script.js"

    # Copy HTML files (they already have relative paths)
    for _html_file in "$PROJECT_DIR/src_static/"*.html; do
        _filename=$(basename "$_html_file")
        cp "$_html_file" "$DIST_DIR/$_filename"
        log_success "Copied: $_filename"
    done

    log_success "All files built → $DIST_DIR"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    resolve_deps

    build_typescript
    build_scss

    _errors=0
    [ -f "$PROJECT_DIR/style.css" ] || { log_error "style.css not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/script.js" ] || { log_error "script.js not found"; _errors=$((_errors + 1)); }

    if [ "$_errors" -eq 0 ]; then
        build_separate_files
        log_success "Build completed successfully"
        log_info "Build size:"
        du -sh "$DIST_DIR"
        return 0
    else
        log_error "Build failed: $_errors missing file(s)"
        return 1
    fi
}

# Development server
dev() {
    resolve_deps
    cd "$PROJECT_DIR"

    # Create symlink to public folder if it doesn't exist
    if [ ! -e "src_static/public" ] && [ -d "$PROJECT_DIR/public" ]; then
        ln -sf ../public src_static/public
        log_info "Created symlink: src_static/public -> ../public"
    fi

    # Start TypeScript/esbuild watch in background
    nohup npx esbuild src_static/typescript/main.ts --bundle --outfile=src_static/script.js --format=iife --target=es2020 --sourcemap --watch=forever > /dev/null 2>&1 &

    # Start Sass watch in background
    nohup npx sass src_static/scss/main.scss src_static/style.css --style=expanded --source-map --watch > /dev/null 2>&1 &

    # Start live-server from src_static directory
    nohup npx live-server src_static --port="${PORT}" --no-browser --quiet > /dev/null 2>&1 &

    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    rm -rf "$DIST_DIR"
    rm -f "$PROJECT_DIR/style.css" "$PROJECT_DIR/script.js"
    rm -f "$PROJECT_DIR/src_static/style.css" "$PROJECT_DIR/src_static/script.js"
    rm -f "$PROJECT_DIR/src_static/style.css.map"

    log_success "Clean completed"
}

# TypeScript type checking
typecheck() {
    log_info "Running TypeScript type checking..."
    resolve_deps
    cd "$PROJECT_DIR"

    npx tsc --noEmit -p tsconfig-vanilla.json
    log_success "Type checking completed"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        typecheck)  typecheck ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
