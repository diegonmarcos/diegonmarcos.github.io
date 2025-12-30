#!/bin/sh
#=====================================
# FEED YOURSELF BUILD SCRIPT
#=====================================
# POSIX-compliant build script for 3-page tabbed SPA
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
PROJECT_NAME="Feed Yourself"
PORT="8007"
DIST_DIR="$PROJECT_DIR/dist"

# Source folders (renamed from src_static, src_static_2)
SRC_0="$PROJECT_DIR/src_0"  # Menu Selector
SRC_1="$PROJECT_DIR/src_1"  # Meal Designer
SRC_2="$PROJECT_DIR/src_2"  # Recipes

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
    printf "  ${GREEN}build${NC}        # Build all 3 pages to dist (single-file outputs)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start npm-live server :${PORT}\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-20s  %-10s  %-10s  %s${NC}\n" "Output" "Source" "Tech" "Description"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-20s${NC}  %-10s  %-10s  %s\n" "index.html" "src_0" "TS+Sass" "Menu Selector"
    printf "  ${CYAN}%-20s${NC}  %-10s  %-10s  %s\n" "meal_designer.html" "src_1" "JS+Sass" "Meal Designer"
    printf "  ${CYAN}%-20s${NC}  %-10s  %-10s  %s\n" "recipes.html" "src_2" "TS+Sass" "Recipes"
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

# Build SCSS for all folders
build_scss() {
    log_info "Building SCSS for src_0 (Menu Selector)..."
    cd "$PROJECT_DIR"
    npx sass "$SRC_0/scss/main.scss" "$DIST_DIR/style0.css" --style=compressed --no-source-map
    log_success "SCSS (src_0) compiled"

    log_info "Building SCSS for src_1 (Meal Designer)..."
    npx sass "$SRC_1/scss/main.scss" "$DIST_DIR/style1.css" --style=compressed --no-source-map
    log_success "SCSS (src_1) compiled"

    log_info "Building SCSS for src_2 (Recipes)..."
    npx sass "$SRC_2/scss/main.scss" "$DIST_DIR/style2.css" --style=compressed --no-source-map
    log_success "SCSS (src_2) compiled"
}

# Build TypeScript for folders that have it
build_ts() {
    # src_0 has TypeScript
    if [ -f "$SRC_0/typescript/main.ts" ]; then
        log_info "Building TypeScript for src_0..."
        cd "$PROJECT_DIR"
        npx esbuild "$SRC_0/typescript/main.ts" --bundle --outfile="$DIST_DIR/script0.js" --minify --target=es2015
        log_success "TypeScript (src_0) compiled"
    fi

    # src_2 has TypeScript
    if [ -f "$SRC_2/typescript/main.ts" ]; then
        log_info "Building TypeScript for src_2..."
        npx esbuild "$SRC_2/typescript/main.ts" --bundle --outfile="$DIST_DIR/script2.js" --minify --target=es2015
        log_success "TypeScript (src_2) compiled"
    fi
}

# Build single-file HTML for src_0 (Menu Selector)
build_single_file_0() {
    log_info "Building single-file HTML for src_0..."

    _html_file="$SRC_0/feed_yourself.html"
    _css_file="$DIST_DIR/style0.css"
    _js_file="$DIST_DIR/script0.js"
    _output_file="$DIST_DIR/index.html"

    # Read CSS and JS content
    _css_content=""
    _js_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(cat "$_css_file")
    fi
    if [ -f "$_js_file" ]; then
        _js_content=$(cat "$_js_file")
    fi

    # Create single-file HTML (inline CSS and JS)
    awk -v css="$_css_content" -v js="$_js_content" '
    /<link[^>]*href="style\.css"[^>]*>/ {
        print "<style>"
        print css
        print "</style>"
        next
    }
    /<script[^>]*src="script\.js"[^>]*><\/script>/ {
        print "<script>"
        print js
        print "</script>"
        next
    }
    { print }
    ' "$_html_file" > "$_output_file"

    log_success "Single-file build → index.html"
}

# Build single-file HTML for src_1 (Meal Designer)
build_single_file_1() {
    log_info "Building single-file HTML for src_1..."

    _html_file="$SRC_1/index.html"
    _css_file="$DIST_DIR/style1.css"
    _output_file="$DIST_DIR/meal_designer.html"

    # Read CSS content
    _css_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(cat "$_css_file")
    fi

    # Create single-file HTML by replacing CSS link with inline styles
    awk -v css="$_css_content" '
    /<link[^>]*href="css\/main\.css"[^>]*>/ {
        print "<style>"
        print css
        print "</style>"
        next
    }
    { print }
    ' "$_html_file" > "$_output_file"

    log_success "Single-file build → meal_designer.html"
}

# Build single-file HTML for src_2 (Recipes)
build_single_file_2() {
    log_info "Building single-file HTML for src_2..."

    _html_file="$SRC_2/index.html"
    _css_file="$DIST_DIR/style2.css"
    _js_file="$DIST_DIR/script2.js"
    _output_file="$DIST_DIR/recipes.html"

    # Read CSS and JS content
    _css_content=""
    _js_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(cat "$_css_file")
    fi
    if [ -f "$_js_file" ]; then
        _js_content=$(cat "$_js_file")
    fi

    # Create single-file HTML (inline CSS and JS)
    awk -v css="$_css_content" -v js="$_js_content" '
    /<link[^>]*href="style\.css"[^>]*>/ {
        print "<style>"
        print css
        print "</style>"
        next
    }
    /<script[^>]*src="script\.js"[^>]*><\/script>/ {
        print "<script>"
        print js
        print "</script>"
        next
    }
    { print }
    ' "$_html_file" > "$_output_file"

    log_success "Single-file build → recipes.html"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    check_dependencies

    # Clean and create dist directory
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"

    # Build Sass for all folders
    build_scss

    # Build TypeScript for folders that have it
    build_ts

    # Create symlinks for media assets
    ln -sf ../public "$DIST_DIR/public"

    # Build single-file versions
    build_single_file_0
    build_single_file_1
    build_single_file_2

    # Cleanup intermediate files
    rm -f "$DIST_DIR"/style*.css "$DIST_DIR"/script*.js

    log_success "Build completed!"
    printf "\n"
    printf "${GREEN}Output files:${NC}\n"
    printf "  - dist/index.html (Menu Selector)\n"
    printf "  - dist/meal_designer.html (Meal Designer)\n"
    printf "  - dist/recipes.html (Recipes)\n"
    printf "\n"
}

# Start development server
dev() {
    check_dependencies
    cd "$PROJECT_DIR"
    mkdir -p "$DIST_DIR"

    # Start Sass watch for all folders in background (setsid for new session)
    setsid npx sass "$SRC_0/scss/main.scss:$DIST_DIR/style0.css" "$SRC_1/scss/main.scss:$DIST_DIR/style1.css" "$SRC_2/scss/main.scss:$DIST_DIR/style2.css" --watch --style=expanded > /dev/null 2>&1 &

    # Start TypeScript watch for src_0 and src_2
    if [ -f "$SRC_0/typescript/main.ts" ]; then
        setsid npx esbuild "$SRC_0/typescript/main.ts" --bundle --outfile="$DIST_DIR/script0.js" --target=es2020 --watch=forever > /dev/null 2>&1 &
    fi
    if [ -f "$SRC_2/typescript/main.ts" ]; then
        setsid npx esbuild "$SRC_2/typescript/main.ts" --bundle --outfile="$DIST_DIR/script2.js" --target=es2020 --watch=forever > /dev/null 2>&1 &
    fi

    # Start live-server in background (setsid creates new session, survives parent exit)
    setsid npx live-server dist --port="${PORT}" --no-browser --quiet > /dev/null 2>&1 &

    # Wait a moment for server to start
    sleep 2

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
