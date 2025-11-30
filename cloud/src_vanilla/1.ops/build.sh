#!/bin/sh
#=====================================
# CLOUD BUILD SCRIPT
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
PROJECT_NAME="Cloud"
PORT="8006"
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
    printf "  ${GREEN}dev${NC}          # Watch Sass and TypeScript\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "Cloud" "-" "Sass" "TypeScript" "npm-live :${PORT}" "Sass, TS"
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
    build_single_file

    log_success "Build completed → $DIST_DIR"
}

# Build single-file HTML (inline CSS + JS)
build_single_file() {
    log_info "Building single-file HTML..."

    _html_file="$DIST_DIR/index.html"
    _css_file="$DIST_DIR/styles.css"
    _js_file="$DIST_DIR/script.js"
    _output_file="$DIST_DIR/index_spa.html"

    if [ ! -f "$_html_file" ]; then
        log_warning "index.html not found, skipping single-file build"
        return 0
    fi

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
    # Replace <link rel="stylesheet" href="styles.css"> with inline <style>
    # Replace <script src="script.js"></script> with inline <script>

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

# Development mode with watch
dev() {
    check_dependencies

    if [ ! -d "$DIST_DIR" ]; then
        mkdir -p "$DIST_DIR"
    fi

    cd "$PROJECT_DIR"

    # Start watchers in background (silent)
    nohup npm run dev:css > /dev/null 2>&1 &
    # Start tsc watch and esbuild watch separately (esbuild needs --watch=forever for daemon mode)
    nohup npx tsc --watch > /dev/null 2>&1 &
    nohup npx esbuild src_static/typescript/main.ts --bundle --outfile=dist/script.js --watch=forever --sourcemap > /dev/null 2>&1 &

    # Start live-server in background
    nohup npx live-server "$DIST_DIR" --port=${PORT} --no-browser --quiet > /dev/null 2>&1 &

    # Print URL and return control
    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} Dashboard STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
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
