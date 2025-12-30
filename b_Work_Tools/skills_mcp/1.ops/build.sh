#!/bin/sh
#=====================================
# SKILLS & MCP TOOLS BUILD SCRIPT
#=====================================
# Usage: ./1.ops/build.sh [action]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Project paths
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$PROJECT_DIR/src_static"
DIST_DIR="$PROJECT_DIR/dist"
PROJECT_NAME="Skills & MCP"
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
    printf "${YELLOW}ACTIONS:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build for production (separate CSS/JS)\n"
    printf "  ${GREEN}dev${NC}          # Start dev watchers\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}STACK:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Framework" "CSS" "JS" "Build" "Port"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Vanilla" "Sass" "TypeScript" "esbuild" ":${PORT}"
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

    # Prepare dist directory
    mkdir -p "$DIST_DIR"
    rm -rf "$DIST_DIR"/*

    # Build CSS (Sass) to separate file
    if [ -f "$SRC_DIR/scss/main.scss" ]; then
        log_info "Compiling Sass..."
        npx sass "$SRC_DIR/scss/main.scss" "$DIST_DIR/styles.css" --style=compressed --no-source-map
        log_success "Created: $DIST_DIR/styles.css"
    else
        log_warning "Sass entry point not found: $SRC_DIR/scss/main.scss"
    fi

    # Build JS (TypeScript -> esbuild) to separate file
    if [ -f "$SRC_DIR/typescript/main.ts" ]; then
        log_info "Bundling TypeScript..."
        npx esbuild "$SRC_DIR/typescript/main.ts" --bundle --minify --target=es2015 --format=iife --outfile="$DIST_DIR/script.js"
        log_success "Created: $DIST_DIR/script.js"
    else
        log_warning "TypeScript entry point not found: $SRC_DIR/typescript/main.ts"
    fi

    # Copy HTML files
    log_info "Copying HTML files..."
    for html_file in "$SRC_DIR"/*.html; do
        if [ -f "$html_file" ]; then
            filename=$(basename "$html_file")
            cp "$html_file" "$DIST_DIR/$filename"
            log_success "Copied: $DIST_DIR/$filename"
        fi
    done

    # Copy public assets
    if [ -d "$PROJECT_DIR/public" ] && [ "$(ls -A $PROJECT_DIR/public 2>/dev/null)" ]; then
        cp -r "$PROJECT_DIR/public"/* "$DIST_DIR/" 2>/dev/null || true
    fi

    log_success "Build completed -> $DIST_DIR"
}

# Dev action
dev() {
    log_info "Starting dev watchers..."
    check_dependencies

    mkdir -p "$DIST_DIR"

    # Copy HTML for dev
    cp "$SRC_DIR"/*.html "$DIST_DIR/" 2>/dev/null || true

    # Sass Watch
    if [ -f "$SRC_DIR/scss/main.scss" ]; then
        npx sass "$SRC_DIR/scss/main.scss" "$DIST_DIR/styles.css" --watch --style=expanded --source-map &
    fi

    # TS Watch
    if [ -f "$SRC_DIR/typescript/main.ts" ]; then
        npx esbuild "$SRC_DIR/typescript/main.ts" --bundle --outfile="$DIST_DIR/script.js" --watch --sourcemap &
    fi

    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} DEV STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Files:${NC}  ${BLUE}$DIST_DIR/index.html${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC}   Ctrl+C or ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"

    wait
}

# Clean action
clean() {
    log_info "Cleaning build artifacts..."
    rm -rf "$DIST_DIR"/* 2>/dev/null || true
    log_success "Clean completed"
}

# Main
main() {
    case "${1:-help}" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
