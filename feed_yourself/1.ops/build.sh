#!/bin/sh
#=====================================
# FEED YOURSELF BUILD SCRIPT
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
PROJECT_NAME="Feed Yourself"
PORT="8007"
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
    printf "  ${GREEN}build${NC}        # Build both apps to dist (single-file outputs)\n"
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
    printf "  ${MAGENTA}%-20s  %-10s  %-10s  %s${NC}\n" "Output" "Source" "CSS" "Description"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-20s${NC}  %-10s  %-10s  %s\n" "index.html" "src_static" "Sass" "Menu Designer Pro"
    printf "  ${CYAN}%-20s${NC}  %-10s  %-10s  %s\n" "protein_calculator.html" "src_static_2" "Sass" "Protein Calculator"
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

# Build Sass for both folders
build_scss() {
    log_info "Building SCSS for src_static..."
    cd "$PROJECT_DIR"
    npm run build:css
    log_success "SCSS (src_static) compiled successfully"

    log_info "Building SCSS for src_static_2..."
    npm run build:css2
    log_success "SCSS (src_static_2) compiled successfully"
}

# Build single-file HTML (inline CSS) for src_static
build_single_file_1() {
    log_info "Building single-file HTML for src_static..."

    _html_file="$PROJECT_DIR/src_static/feed_yourself.html"
    _css_file="$DIST_DIR/style.css"
    _output_file="$DIST_DIR/index.html"

    # Read CSS content
    _css_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(cat "$_css_file")
    fi

    # Create single-file HTML
    awk -v css="$_css_content" '
    /<link[^>]*href="style\.css"[^>]*>/ {
        print "<style>"
        print css
        print "</style>"
        next
    }
    { print }
    ' "$_html_file" > "$_output_file"

    log_success "Single-file build → index.html"
}

# Build single-file HTML (inline CSS) for src_static_2
build_single_file_2() {
    log_info "Building single-file HTML for src_static_2..."

    _html_file="$PROJECT_DIR/src_static_2/index.html"
    _css_file="$DIST_DIR/style2.css"
    _output_file="$DIST_DIR/protein_calculator.html"

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

    log_success "Single-file build → protein_calculator.html"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."
    check_dependencies

    # Clean dist folder first
    log_info "Cleaning dist folder..."
    rm -rf "$DIST_DIR"
    mkdir -p "$DIST_DIR"
    log_success "dist folder cleared"

    # Build Sass for both folders
    build_scss

    # Build single-file versions (CSS inlined)
    build_single_file_1
    build_single_file_2

    # Copy public assets if they exist
    if [ -d "$PROJECT_DIR/public" ]; then
        cp -r "$PROJECT_DIR/public/"* "$DIST_DIR/" 2>/dev/null || true
        log_success "Copied public assets to dist/"
    fi

    # Cleanup intermediate CSS files
    rm -f "$DIST_DIR/style.css" "$DIST_DIR/style2.css"
    log_success "Cleaned up intermediate CSS files"

    log_success "Build completed!"
    printf "\n"
    printf "${GREEN}Output files:${NC}\n"
    printf "  - dist/index.html (Menu Designer - single file)\n"
    printf "  - dist/protein_calculator.html (Protein Calculator - single file)\n"
    printf "\n"
}

# Start development server
dev() {
    check_dependencies
    cd "$PROJECT_DIR"

    # Start Sass watch in background
    nohup npm run dev:css > /dev/null 2>&1 &

    # Start live-server in background (serve from dist)
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
