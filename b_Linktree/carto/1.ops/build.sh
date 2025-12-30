#!/bin/sh
#=====================================
# CARTO BUILD SCRIPT
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
PROJECT_NAME="Carto (Arcanum Triad)"
PORT="8001"
DIST_DIR="$PROJECT_DIR/dist"
SRC_STATIC="$PROJECT_DIR/src_static"

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
    printf "  ${GREEN}build${NC}        # Copy HTML to dist (production)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start live-server for development\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-20s  %-10s  %-10s  %-14s${NC}\n" "Project" "Framework" "Type" "Dev Server"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-20s${NC}  %-10s  %-10s  ${GREEN}%-14s${NC}\n" "Carto" "Vanilla" "Static HTML" "live-server :${PORT}"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Build for production
build() {
    log_info "Building ${PROJECT_NAME} for production..."

    # Clean and create dist directory
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Copy HTML file
    if [ -f "$SRC_STATIC/index.html" ]; then
        cp "$SRC_STATIC/index.html" "$DIST_DIR/index.html"
        log_success "Copied index.html to dist"
    else
        log_error "index.html not found in src_static"
        exit 1
    fi

    # Create symlink for public if it exists
    if [ -d "$PROJECT_DIR/public" ]; then
        ln -sf ../public "$DIST_DIR/public"
        log_info "Created symlink: dist/public -> ../public"
    fi

    log_success "Build completed → $DIST_DIR"
}

# Development mode with live-server
dev() {
    log_info "Starting development mode..."

    cd "$SRC_STATIC"

    # Create symlink to public folder if it doesn't exist
    if [ ! -e "public" ] && [ -d "$PROJECT_DIR/public" ]; then
        ln -sf ../public public
        log_info "Created symlink: src_static/public -> ../public"
    fi

    # Start live-server
    nohup npx live-server . --port=${PORT} --no-browser --quiet > /dev/null 2>&1 &

    # Print URL and return control
    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} Dev Server STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} pkill -f 'live-server.*${PORT}'\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    if [ -d "$DIST_DIR" ]; then
        rm -rf "$DIST_DIR"
        log_success "Dist directory cleaned"
    fi

    log_success "Build artifacts cleaned"
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
