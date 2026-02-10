#!/bin/sh
#=====================================
# CV_WEB BUILD SCRIPT
#=====================================
# POSIX-compliant build script
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
DIST_DIR="$PROJECT_DIR/dist"
PROJECT_NAME="CV Web"
PORT="8002"
SASS_DIR="$PROJECT_DIR/3.sass"
CSS_OUTPUT="$PROJECT_DIR/style.css"

# Logging
log_info() { printf "${BLUE}[INFO]${NC} %s\n" "$1"; }
log_success() { printf "${GREEN}[OK]${NC} %s\n" "$1"; }
log_error() { printf "${RED}[ERROR]${NC} %s\n" "$1" >&2; }
log_warning() { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }

# Help menu
print_usage() {
    printf "${BLUE}===========================================================================${NC}\n"
    printf "${CYAN}  ${PROJECT_NAME} Build Script${NC}\n"
    printf "${BLUE}===========================================================================${NC}\n"
    printf "\n"
    printf "${YELLOW}USAGE:${NC}  ./1.ops/build.sh [action]\n"
    printf "\n"
    printf "${YELLOW}BUILD:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build Sass to CSS (production)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start npm-live server :${PORT} + Sass watch\n"
    printf "  ${GREEN}watch${NC}        # Watch Sass files only\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "CV Web" "-" "Sass" "TypeScript" "npm-live :${PORT}" "Sass+TS"
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

# Build TypeScript
build_typescript() {
    log_info "Building TypeScript..."
    cd "$PROJECT_DIR"
    npm run build:bundle
    log_success "TypeScript compiled successfully"
}

# Build Sass
build_sass() {
    log_info "Building Sass for production..."
    cd "$PROJECT_DIR"
    npm run build:css
    log_success "Sass compiled to $CSS_OUTPUT"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    resolve_deps

    # Build TypeScript
    build_typescript

    # Build Sass
    build_sass

    build_single_file
}

# Build single-file HTML (inline CSS) into dist/
build_single_file() {
    log_info "Building single-file HTML..."

    # Clean and create dist directory
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Create symlinks for media assets
    ln -sf ../public "$DIST_DIR/public"

    _html_file="$PROJECT_DIR/src/index.html"
    _css_file="$PROJECT_DIR/style.css"
    _js_file="$PROJECT_DIR/script.js"
    _matomo_file="$PROJECT_DIR/public/matomo.js"
    _output_file="$DIST_DIR/index.html"

    if [ ! -f "$_html_file" ]; then
        log_warning "index.html not found, skipping single-file build"
        return 0
    fi

    # Read CSS content (strip BOM if present)
    _css_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(sed '1s/^\xEF\xBB\xBF//' "$_css_file")
    fi

    # Read JS content
    _js_content=""
    if [ -f "$_js_file" ]; then
        _js_content=$(cat "$_js_file")
    fi

    # Read Matomo tracking content
    _matomo_content=""
    if [ -f "$_matomo_file" ]; then
        _matomo_content=$(cat "$_matomo_file")
    fi

    # Create single-file HTML (inline CSS, JS, and Matomo)
    awk -v css="$_css_content" -v js="$_js_content" -v matomo="$_matomo_content" '
    /<link[^>]*href="style\.css"[^>]*>/ {
        print "<style>"
        print css
        print "</style>"
        next
    }
    /<script[^>]*src="script\.js"[^>]*>/ {
        print "<script>"
        print js
        print "</script>"
        next
    }
    /<script[^>]*src="public\/matomo\.js"[^>]*>/ {
        print "<script>"
        print matomo
        print "</script>"
        next
    }
    { print }
    ' "$_html_file" > "$_output_file"

    # Clean up intermediate files
    rm -f "$PROJECT_DIR/style.css" "$PROJECT_DIR/script.js" "$PROJECT_DIR/style.css.map"

    log_success "Single-file build → $_output_file"
}

# Development mode
dev() {
    resolve_deps
    cd "$PROJECT_DIR"

    # Create symlink to public folder if it doesn't exist
    if [ ! -e "src/public" ] && [ -d "$PROJECT_DIR/public" ]; then
        ln -sf ../public src/public
        log_info "Created symlink: src/public -> ../public"
    fi

    # Start TypeScript/esbuild watch in background (use --watch=forever for daemon mode)
    nohup npx esbuild src/main.ts --bundle --outfile=src/script.js --format=iife --target=es2020 --sourcemap --watch=forever > /dev/null 2>&1 &

    # Start Sass watch in background (outputs to src/style.css)
    nohup npm run watch:css > /dev/null 2>&1 &

    # Start live-server from src directory
    nohup npx live-server src --port="${PORT}" --no-browser --quiet > /dev/null 2>&1 &

    # Print URL and return control
    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Watch Sass only
watch() {
    log_info "Watching Sass and TypeScript files..."
    resolve_deps
    cd "$PROJECT_DIR"

    # Start TypeScript watch in background
    npm run dev:bundle &

    log_success "Watching for changes..."
    log_info "Press Ctrl+C to stop"

    # Start Sass watch in foreground
    npm run watch:css
}

# Clean
clean() {
    log_info "Cleaning build artifacts..."
    rm -f "$CSS_OUTPUT"
    rm -f "$CSS_OUTPUT.map"
    rm -f "$PROJECT_DIR/script.js"
    rm -f "$PROJECT_DIR/index.html"
    rm -rf "$DIST_DIR"
    log_success "Clean completed"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        watch)      watch ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
