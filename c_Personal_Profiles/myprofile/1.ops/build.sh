#!/bin/sh
#=====================================
# MYPROFILE BUILD SCRIPT
#=====================================
# POSIX-compliant build script for SvelteKit
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
PROJECT_NAME="MyProfile"
PORT="8013"
SRC_DIR="$PROJECT_DIR/src"
DIST_DIR="$PROJECT_DIR/dist"

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
    printf "  ${GREEN}build${NC}        # Build for production\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start SvelteKit dev server :${PORT}\n"
    printf "  ${GREEN}preview${NC}      # Preview production build\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}check${NC}        # Run svelte-check\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  ${GREEN}%-10s${NC}  %-10s  %-10s  ${CYAN}%-14s${NC}  ${YELLOW}%s${NC}\n" "MyProfile" "SvelteKit" "Sass" "TypeScript" "Vite :${PORT}" "HMR"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Check dependencies
check_dependencies() {
    if [ -d "$SRC_DIR/node_modules" ]; then
        return 0
    fi
    log_info "Installing dependencies..."
    cd "$SRC_DIR"
    npm install
}

# Build for production
build() {
    log_info "Building ${PROJECT_NAME} for production..."
    check_dependencies
    cd "$SRC_DIR"

    npm run build 2>&1 || {
        log_error "Build failed"
        return 1
    }

    if [ ! -d "$DIST_DIR" ]; then
        log_error "Build directory not created"
        return 1
    fi

    log_success "Build completed → $DIST_DIR"
}

# Development server
dev() {
    check_dependencies
    cd "$SRC_DIR"

    # Start SvelteKit dev server in background
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

    if [ ! -d "$DIST_DIR" ]; then
        log_warning "No production build found. Building first..."
        build
    fi

    cd "$SRC_DIR"
    log_success "Preview server starting..."
    npm run preview
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    rm -rf "$DIST_DIR"
    rm -rf "$SRC_DIR/.svelte-kit"
    rm -rf "$SRC_DIR/node_modules/.vite"

    log_success "Clean completed"
}

# Svelte check
check() {
    log_info "Running svelte-check..."
    check_dependencies
    cd "$SRC_DIR"

    npx svelte-check || log_warning "Check completed with issues"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev|watch)  dev ;;
        preview)    preview ;;
        clean)      clean ;;
        check|typecheck) check ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
