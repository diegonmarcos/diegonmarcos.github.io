#!/bin/sh
#=====================================
# MARKET WATCH TERMINAL BUILD SCRIPT
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
PROJECT_NAME="Market Watch Terminal"
PORT="8010"
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
    printf "  ${GREEN}build${NC}        # Build Sass and TypeScript (production)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Watch Sass and TypeScript + live server\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "MarketWatch" "-" "Sass" "TypeScript" "live :${PORT}" "Sass, TS"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Check dependencies
check_dependencies() {
    if [ -d "$PROJECT_DIR/node_modules" ]; then
        return 0
    fi
    log_info "Installing dependencies..."
    cd "$PROJECT_DIR"
    npm install
}

# Build SCSS to CSS
build_scss() {
    log_info "Building SCSS..."
    cd "$PROJECT_DIR"

    if [ "$1" = "dev" ]; then
        npm run build:css -- --style=expanded --source-map
    else
        npm run build:css
    fi

    log_success "SCSS compiled successfully"
}

# Build TypeScript to JavaScript
build_typescript() {
    log_info "Building TypeScript..."
    cd "$PROJECT_DIR"

    if [ "$1" = "dev" ]; then
        npm run build:js -- --sourcemap
    else
        npm run build:js
    fi

    log_success "TypeScript compiled successfully"
}

# Build for production
build() {
    log_info "Building ${PROJECT_NAME} for production..."
    check_dependencies

    if [ ! -d "$DIST_DIR" ]; then
        mkdir -p "$DIST_DIR"
    fi

    build_scss "prod"
    build_typescript "prod"

    log_success "Build completed → $DIST_DIR"
}

# Development mode with watch
dev() {
    log_info "Starting development mode with watch..."
    check_dependencies

    if [ ! -d "$DIST_DIR" ]; then
        mkdir -p "$DIST_DIR"
    fi

    cd "$PROJECT_DIR"
    log_success "Watching at http://localhost:${PORT}/"
    log_info "Press Ctrl+C to stop"
    printf "\n"

    npm run dev
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    if [ -d "$DIST_DIR" ]; then
        rm -f "$DIST_DIR/styles.css"
        rm -f "$DIST_DIR/styles.css.map"
        rm -f "$DIST_DIR/script.js"
        rm -f "$DIST_DIR/script.js.map"
        log_success "Build artifacts cleaned"
    else
        log_warning "Dist directory doesn't exist, nothing to clean"
    fi
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
