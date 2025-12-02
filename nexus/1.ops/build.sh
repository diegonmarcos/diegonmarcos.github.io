#!/bin/sh
#=====================================
# NEXUS BUILD SCRIPT (Vanilla Version)
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
PROJECT_NAME="Nexus"
PORT="8005"
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
    printf "  ${GREEN}build${NC}        # Build Sass, TypeScript, and create single-file HTML\n"
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
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "Nexus" "Vanilla" "Sass+TW" "TypeScript" "live :${PORT}" "Sass+TS"
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

# Build Sass
build_scss() {
    log_info "Building SCSS..."
    cd "$PROJECT_DIR"
    npm run build:css
    log_success "SCSS compiled successfully"
}

# Build TypeScript
build_ts() {
    log_info "Building TypeScript..."
    cd "$PROJECT_DIR"
    npm run build:ts
    log_success "TypeScript compiled successfully"
}

# Build single-file HTML (inline CSS + JS)
build_single_file() {
    log_info "Building single-file HTML..."

    _html_file="$DIST_DIR/index.html"
    _css_file="$DIST_DIR/styles.css"
    _js_file="$DIST_DIR/script.js"
    _output_file="$DIST_DIR/index_spa.html"

    # Read CSS content
    _css_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(cat "$_css_file")
    fi

    # Read JS content
    _js_content=""
    if [ -f "$_js_file" ]; then
        _js_content=$(cat "$_js_file")
    fi

    # Create single-file HTML
    awk -v css="$_css_content" -v js="$_js_content" '
    /<link[^>]*href="styles\.css"[^>]*>/ {
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
    { print }
    ' "$_html_file" > "$_output_file"

    log_success "Single-file build → $_output_file"
}

# Build for production
build() {
    log_info "Building ${PROJECT_NAME} for production..."
    check_dependencies

    # Clean and create dist directory
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Build Sass and TypeScript (outputs to dist/)
    build_scss
    build_ts

    # Copy source HTML to dist
    cp "$PROJECT_DIR/src_static/index.html" "$DIST_DIR/index.html"

    # Create symlinks for media assets
    ln -sf ../public "$DIST_DIR/public"

    # Build single-file version (inline CSS/JS)
    build_single_file

    # Replace index.html with the inlined version
    mv "$DIST_DIR/index_spa.html" "$DIST_DIR/index.html"
    rm -f "$DIST_DIR/styles.css" "$DIST_DIR/script.js"

    log_success "Build completed → $DIST_DIR"
}

# Development server
dev() {
    log_info "Starting development server..."
    check_dependencies

    # Build first
    mkdir -p "$DIST_DIR"
    cp "$PROJECT_DIR/src_static/index.html" "$DIST_DIR/index.html"
    [ -f "$PROJECT_DIR/favicon.ico" ] && cp "$PROJECT_DIR/favicon.ico" "$DIST_DIR/"

    cd "$PROJECT_DIR"

    # Start Sass watch in background
    nohup npm run dev:css > /dev/null 2>&1 &

    # Start TypeScript watch in background
    nohup npm run dev:ts > /dev/null 2>&1 &

    # Start live-server in background
    nohup npx live-server dist --port="${PORT}" --no-browser --quiet > /dev/null 2>&1 &

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
