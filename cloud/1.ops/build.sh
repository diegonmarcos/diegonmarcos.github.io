#!/bin/sh
#=====================================
# CLOUD BUILD SCRIPT
#=====================================
# Supports both Vanilla and Next.js versions
# Usage: ./1.ops/build.sh [action] [--vanilla|--nextjs]
#
# Default: Next.js (src_nextjs)

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
VANILLA_DIR="$PROJECT_DIR/src_vanilla"
NEXTJS_DIR="$PROJECT_DIR/src_nextjs"
DIST_DIR="$PROJECT_DIR/dist"
PROJECT_NAME="Cloud"
PORT="8006"

# Default to Next.js
USE_NEXTJS=true

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
    printf "${YELLOW}USAGE:${NC}  ./1.ops/build.sh [action] [--vanilla|--nextjs]\n"
    printf "\n"
    printf "${YELLOW}ACTIONS:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build for production\n"
    printf "  ${GREEN}dev${NC}          # Start dev server\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}OPTIONS:${NC}\n"
    printf "  ${GREEN}--vanilla${NC}    # Use Vanilla version (src_vanilla)\n"
    printf "  ${GREEN}--nextjs${NC}     # Use Next.js version (src_nextjs) [default]\n"
    printf "\n"
    printf "${YELLOW}VERSIONS:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Version" "Framework" "CSS" "JS" "Port"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Next.js" "Next.js" "Tailwind" "TypeScript" ":${PORT}"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Vanilla" "Vanilla" "Sass" "TypeScript" ":${PORT}"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Parse arguments
parse_args() {
    for arg in "$@"; do
        case "$arg" in
            --vanilla) USE_NEXTJS=false ;;
            --nextjs)  USE_NEXTJS=true ;;
        esac
    done
}

# Check dependencies
check_dependencies() {
    if [ "$USE_NEXTJS" = true ]; then
        if [ -d "$NEXTJS_DIR/node_modules" ]; then
            return 0
        fi
        log_info "Installing Next.js dependencies..."
        cd "$NEXTJS_DIR"
        npm install
    else
        if [ -d "$VANILLA_DIR/src_static" ] && [ -d "$PROJECT_DIR/node_modules" ]; then
            return 0
        fi
        log_info "Installing Vanilla dependencies..."
        cd "$PROJECT_DIR"
        npm install
    fi
}

# Build action
build() {
    if [ "$USE_NEXTJS" = true ]; then
        build_nextjs
    else
        build_vanilla
    fi
}

# Build Next.js version
build_nextjs() {
    log_info "Building ${PROJECT_NAME} (Next.js)..."
    check_dependencies
    cd "$NEXTJS_DIR"
    npm run build

    # Copy output to dist
    mkdir -p "$DIST_DIR"
    rm -rf "$DIST_DIR"/*
    cp -r "$NEXTJS_DIR/out"/* "$DIST_DIR/"

    log_success "Next.js build completed → $DIST_DIR"
}

# Build Vanilla version
build_vanilla() {
    log_info "Building ${PROJECT_NAME} (Vanilla)..."

    if [ -f "$VANILLA_DIR/1.ops/build.sh" ]; then
        cd "$VANILLA_DIR"
        sh 1.ops/build.sh build

        # Copy output to main dist
        mkdir -p "$DIST_DIR"
        rm -rf "$DIST_DIR"/*
        cp -r "$VANILLA_DIR/dist"/* "$DIST_DIR/"

        log_success "Vanilla build completed → $DIST_DIR"
    else
        log_error "Vanilla build script not found"
        return 1
    fi
}

# Dev action
dev() {
    if [ "$USE_NEXTJS" = true ]; then
        dev_nextjs
    else
        dev_vanilla
    fi
}

# Dev Next.js version
dev_nextjs() {
    check_dependencies
    cd "$NEXTJS_DIR"

    # Start Next.js dev server
    log_info "Starting Next.js dev server..."

    # Check if port is available
    if command -v lsof >/dev/null 2>&1; then
        if lsof -i ":${PORT}" >/dev/null 2>&1; then
            log_warning "Port ${PORT} is in use. Using Next.js default port 3000"
            npm run dev &
        else
            PORT=$PORT npm run dev &
        fi
    else
        npm run dev &
    fi

    sleep 3

    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} (Next.js) STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:3000/cloud/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Dev Vanilla version
dev_vanilla() {
    if [ -f "$VANILLA_DIR/1.ops/build.sh" ]; then
        cd "$VANILLA_DIR"
        sh 1.ops/build.sh dev
    else
        log_error "Vanilla build script not found"
        return 1
    fi
}

# Clean action
clean() {
    log_info "Cleaning build artifacts..."

    # Clean Next.js
    rm -rf "$NEXTJS_DIR/.next" 2>/dev/null || true
    rm -rf "$NEXTJS_DIR/out" 2>/dev/null || true

    # Clean Vanilla
    if [ -f "$VANILLA_DIR/1.ops/build.sh" ]; then
        cd "$VANILLA_DIR"
        sh 1.ops/build.sh clean 2>/dev/null || true
    fi

    # Clean main dist
    rm -rf "$DIST_DIR" 2>/dev/null || true

    log_success "Clean completed"
}

# Main
main() {
    parse_args "$@"

    _action="${1:-help}"

    # Remove options from action
    case "$_action" in
        --*) _action="help" ;;
    esac

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
