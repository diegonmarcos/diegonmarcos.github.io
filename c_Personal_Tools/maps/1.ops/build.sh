#!/bin/sh
#=====================================
# MAPS BUILD SCRIPT (SvelteKit + d3-geo)
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
PROJECT_NAME="Maps"
PORT="8014"
BUILD_DIR="$PROJECT_DIR/dist"

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
    printf "  ${GREEN}build${NC}        # Build for production (static adapter)\n"
    printf "  ${GREEN}check${NC}        # Run svelte-check for type checking\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start Vite dev server :${PORT}\n"
    printf "  ${GREEN}preview${NC}      # Preview production build\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-12s  %-10s  %-10s  %-14s${NC}\n" "Project" "Framework" "Renderer" "Language" "Dev Server"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  ${GREEN}%-12s${NC}  %-10s  %-10s  ${CYAN}%-14s${NC}\n" "Maps" "SvelteKit" "d3-geo" "TypeScript" "Vite :${PORT}"
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

# Build for production
build() {
    log_info "Building ${PROJECT_NAME} for production..."
    resolve_deps
    cd "$PROJECT_DIR"

    npm run build 2>&1 || {
        log_error "Build failed"
        return 1
    }

    if [ -d "$BUILD_DIR" ]; then
        log_success "Build completed → $BUILD_DIR"
        log_info "Build size:"
        du -sh "$BUILD_DIR"
    else
        log_error "Build directory not created"
        return 1
    fi
}

# Development server
dev() {
    resolve_deps
    cd "$PROJECT_DIR"

    # Start Vite in background
    nohup npm run dev > /dev/null 2>&1 &

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

# Preview production build
preview() {
    log_info "Starting preview server..."

    if [ ! -d "$BUILD_DIR" ]; then
        log_warning "No production build found. Building first..."
        build
    fi

    cd "$PROJECT_DIR"
    log_success "Preview server starting..."
    npm run preview
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    rm -rf "$BUILD_DIR"
    rm -rf "$PROJECT_DIR/.svelte-kit"

    log_success "Clean completed"
}

# Svelte type checking
check_types() {
    log_info "Running svelte-check..."
    resolve_deps
    cd "$PROJECT_DIR"

    if grep -q "check" package.json 2>/dev/null; then
        npm run check
        log_success "Type checking completed"
    else
        log_warning "No check script found in package.json"
    fi
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        preview)    preview ;;
        clean)      clean ;;
        check)      check_types ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
