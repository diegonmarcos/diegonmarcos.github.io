#!/bin/sh
#=====================================
# LINKTREE MINDMAP BUILD SCRIPT
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
PROJECT_NAME="Linktree Mindmap"
PORT="8018"

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
    printf "  ${GREEN}build${NC}        # Build Sass, TypeScript and copy to dist/\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start live server :${PORT} + Sass watch\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-18s  %-10s  %-10s  %-10s  %-14s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-18s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}\n" "Linktree Mindmap" "Vanilla" "Sass" "TypeScript" "live :${PORT}"
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
    npm run build:css
    log_success "SCSS compiled successfully"
}

# Build TypeScript
build_typescript() {
    log_info "Building TypeScript..."
    cd "$PROJECT_DIR"
    npm run build:bundle
    log_success "TypeScript compiled successfully"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    resolve_deps

    # Build TypeScript
    build_typescript

    # Build Sass
    build_scss

    # Check required files exist
    _errors=0
    [ -f "$PROJECT_DIR/src/index.html" ] || { log_error "src/index.html not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/style.css" ] || { log_error "style.css not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/script.js" ] || { log_error "script.js not found"; _errors=$((_errors + 1)); }

    if [ "$_errors" -eq 0 ]; then
        build_dist
        log_success "Build completed successfully"
        return 0
    else
        log_error "Build failed: $_errors missing file(s)"
        return 1
    fi
}

# Build dist with separate files
build_dist() {
    log_info "Building dist with separate files..."

    # Clean and create dist directory
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR/public"

    # Copy public assets (instead of symlink for file:// protocol support)
    log_info "Copying public assets..."
    cp "$PROJECT_DIR/public/data.json" "$DIST_DIR/public/" 2>/dev/null || log_warning "data.json not found"

    # Copy icons directory if it exists
    if [ -d "$PROJECT_DIR/public/icons" ] || [ -L "$PROJECT_DIR/public/icons" ]; then
        cp -rL "$PROJECT_DIR/public/icons" "$DIST_DIR/public/" 2>/dev/null || log_warning "icons directory not found"
    fi

    # Copy favicon if it exists
    find "$PROJECT_DIR/public" -maxdepth 1 -name "favicon.*" -exec cp {} "$DIST_DIR/public/" \; 2>/dev/null

    log_success "Copied public assets -> dist/public/"

    # Copy HTML
    cp "$PROJECT_DIR/src/index.html" "$DIST_DIR/index.html"
    log_success "Copied index.html -> dist/"

    # Move CSS
    mv "$PROJECT_DIR/style.css" "$DIST_DIR/style.css"
    log_success "Moved style.css -> dist/"

    # Move JS
    mv "$PROJECT_DIR/script.js" "$DIST_DIR/script.js"
    log_success "Moved script.js -> dist/"

    log_success "Build output -> $DIST_DIR"
    log_info "Can be opened directly with file:// protocol"
}

# Start development server
dev() {
    resolve_deps
    cd "$PROJECT_DIR"

    # Create symlink to public folder if it doesn't exist
    if [ ! -e "src/public" ] && [ -d "$PROJECT_DIR/public" ]; then
        ln -sf ../public src/public
        log_info "Created symlink: src/public -> ../public"
    fi

    # Start TypeScript/esbuild watch in background
    nohup npx esbuild src/typescript/main.ts --bundle --outfile=src/script.js --format=iife --target=es2020 --sourcemap --watch=forever > /dev/null 2>&1 &

    # Start Sass watch in background
    nohup npm run dev:css > /dev/null 2>&1 &

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

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    find "$PROJECT_DIR" -name "*.tmp" -delete 2>/dev/null || true
    find "$PROJECT_DIR" -name ".DS_Store" -delete 2>/dev/null || true
    rm -f "$PROJECT_DIR/style.css" 2>/dev/null || true
    rm -f "$PROJECT_DIR/script.js" 2>/dev/null || true
    rm -f "$PROJECT_DIR/style.min.css" 2>/dev/null || true
    rm -f "$PROJECT_DIR/script.min.js" 2>/dev/null || true
    rm -rf "$DIST_DIR" 2>/dev/null || true

    log_success "Clean completed"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
