#!/bin/sh
#=====================================
# LINKTREE BUILD SCRIPT
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
PROJECT_NAME="Linktree"
PORT="8001"

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
    printf "  ${GREEN}build${NC}        # Build Sass and create single-file HTML\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start npm-live server :${PORT} + Sass watch\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "Linktree" "-" "Sass" "TypeScript" "npm-live :${PORT}" "Sass+TS"
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
build_typescript() {
    log_info "Building TypeScript..."
    cd "$PROJECT_DIR"
    npm run build:bundle
    log_success "TypeScript compiled successfully"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    check_dependencies

    # Build TypeScript
    build_typescript

    # Build Sass
    build_scss

    # Check required files exist
    _errors=0
    [ -f "$PROJECT_DIR/src_static/index.html" ] || { log_error "src_static/index.html not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/style.css" ] || { log_error "style.css not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/script.js" ] || { log_error "script.js not found"; _errors=$((_errors + 1)); }

    if [ "$_errors" -eq 0 ]; then
        build_single_file
        log_success "Build completed successfully"
        return 0
    else
        log_error "Build failed: $_errors missing file(s)"
        return 1
    fi
}

# Build single-file HTML (inline CSS + JS) into dist/
build_single_file() {
    log_info "Building single-file HTML..."

    # Clean and create dist directory (remove tsc artifacts)
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Create symlinks for media assets
    ln -sf ../public "$DIST_DIR/public"
    ln -sf ../1.ops "$DIST_DIR/1.ops"

    _html_file="$PROJECT_DIR/src_static/index.html"
    _css_file="$PROJECT_DIR/style.css"
    _js_file="$PROJECT_DIR/script.js"
    _output_file="$DIST_DIR/index.html"

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
    /<link[^>]*href="style\.css"[^>]*>/ {
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

    # Clean up intermediate files
    rm -f "$PROJECT_DIR/style.css" "$PROJECT_DIR/script.js"

    log_success "Single-file build → $_output_file"
}

# Start development server
dev() {
    check_dependencies
    cd "$PROJECT_DIR"

    # Start TypeScript watch in background (outputs to src_static)
    nohup npm run dev:bundle > /dev/null 2>&1 &

    # Start Sass watch in background (outputs to src_static)
    nohup npm run dev:css > /dev/null 2>&1 &

    # Start live-server from src_static directory
    nohup npx live-server src_static --port="${PORT}" --no-browser --quiet > /dev/null 2>&1 &

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
    rm -f "$PROJECT_DIR/index.html" 2>/dev/null || true
    rm -rf "$DIST_DIR" 2>/dev/null || true

    log_success "Clean completed"
}

# Minify CSS and JS
minify() {
    log_info "Minifying assets..."

    if ! command -v uglifyjs >/dev/null 2>&1 || ! command -v cleancss >/dev/null 2>&1; then
        log_warning "Minification tools not installed"
        log_info "Install with: npm install -g uglify-js clean-css-cli"
        return 1
    fi

    if [ -f "$PROJECT_DIR/style.css" ]; then
        cleancss -o "$PROJECT_DIR/style.min.css" "$PROJECT_DIR/style.css"
        log_success "CSS minified"
    fi

    if [ -f "$PROJECT_DIR/script.js" ]; then
        uglifyjs "$PROJECT_DIR/script.js" -o "$PROJECT_DIR/script.min.js" -c -m
        log_success "JavaScript minified"
    fi

    log_success "Minification completed"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        minify)     minify ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
