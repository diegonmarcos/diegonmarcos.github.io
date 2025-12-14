#!/bin/sh
#=====================================
# MYMAPS BUILD SCRIPT (Vite SPA)
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
PROJECT_NAME="MyMaps"
PORT="8014"

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
    printf "  ${GREEN}build${NC}        # Build for production (Single File SPA)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start Vite dev server :${PORT}\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s${NC}\n" "Project" "Framework" "CSS" "Language" "Dev Server"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}\n" "MyMaps" "React+Vite" "Sass" "TypeScript" "Vite :${PORT}"
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

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    check_dependencies
    cd "$PROJECT_DIR"

    # Clean existing build artifacts
    rm -rf "$DIST_DIR"

    # Compile TypeScript
    # npm run typecheck # Optional, if scripts are set up

    # Build with Vite
    npx vite build

    if [ -d "$DIST_DIR" ]; then
        log_success "Build completed → dist/"
        log_info "Single File SPA generated at dist/index.html"
    else
        log_error "Build directory not created"
        return 1
    fi
}

# Development server
dev() {
    check_dependencies
    cd "$PROJECT_DIR"

    # Create logs directory
    mkdir -p "$PROJECT_DIR/1.ops/logs"

    # Start Vite dev server in background
    nohup npx vite --port $PORT > "$PROJECT_DIR/1.ops/logs/server.log" 2>&1 &

    # Give server time to start
    sleep 2

    # Print URL and return control
    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} Dev Server STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Clean
clean() {
    log_info "Cleaning build artifacts..."
    rm -rf "$DIST_DIR"
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