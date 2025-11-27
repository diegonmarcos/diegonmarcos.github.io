#!/bin/sh
#=====================================
# CV_WEB BUILD SCRIPT
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
PROJECT_NAME="CV Web"
PORT="8002"
SASS_DIR="$PROJECT_DIR/3.sass"
CSS_OUTPUT="$PROJECT_DIR/style.css"

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
    printf "  ${GREEN}build${NC}        # Build Sass to CSS (production)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start npm-live server :${PORT} + Sass watch\n"
    printf "  ${GREEN}watch${NC}        # Watch Sass files only\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "CV Web" "-" "Sass" "-" "npm-live :${PORT}" "Sass"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Check dependencies
check_dependencies() {
    if [ -d "$PROJECT_DIR/1.ops/node_modules" ]; then
        return 0
    fi
    log_info "Installing dependencies..."
    cd "$PROJECT_DIR/1.ops"
    npm install
    cd "$PROJECT_DIR"
}

# Build Sass
build() {
    log_info "Building Sass for production..."
    check_dependencies
    cd "$PROJECT_DIR/1.ops"

    if [ -f "package.json" ]; then
        npm run sass:build 2>&1 || {
            log_error "Sass build failed"
            return 1
        }
    elif command -v sass >/dev/null 2>&1; then
        sass "$SASS_DIR/main.scss:$CSS_OUTPUT" --style=compressed
    else
        log_error "Sass compiler not found"
        return 1
    fi

    log_success "Sass compiled to $CSS_OUTPUT"

    build_single_file
}

# Build single-file HTML (inline CSS)
build_single_file() {
    log_info "Building single-file HTML..."

    _html_file="$PROJECT_DIR/index.html"
    _css_file="$PROJECT_DIR/style.css"
    _output_file="$PROJECT_DIR/index_spa.html"

    if [ ! -f "$_html_file" ]; then
        log_warning "index.html not found, skipping single-file build"
        return 0
    fi

    # Read CSS content
    _css_content=""
    if [ -f "$_css_file" ]; then
        _css_content=$(cat "$_css_file")
    fi

    # Create single-file HTML (inline CSS only, CV Web has no local JS)
    awk -v css="$_css_content" '
    /<link[^>]*href="style\.css"[^>]*>/ {
        print "<style>"
        print css
        print "</style>"
        next
    }
    { print }
    ' "$_html_file" > "$_output_file"

    log_success "Single-file build → $_output_file"
}

# Development mode
dev() {
    check_dependencies

    # Start Sass watch in background (silent)
    cd "$PROJECT_DIR/1.ops"
    if [ -f "package.json" ] && grep -q "sass:watch" package.json 2>/dev/null; then
        nohup npm run sass:watch > /dev/null 2>&1 &
    fi

    # Start live-server in background
    cd "$PROJECT_DIR"
    nohup npx live-server --port="${PORT}" --no-browser --quiet > /dev/null 2>&1 &

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

# Watch Sass only
watch() {
    log_info "Watching Sass files..."
    check_dependencies
    cd "$PROJECT_DIR/1.ops"

    if [ -f "package.json" ] && grep -q "sass:watch" package.json 2>/dev/null; then
        log_success "Watching for changes..."
        log_info "Press Ctrl+C to stop"
        npm run sass:watch
    elif command -v sass >/dev/null 2>&1; then
        sass --watch "$SASS_DIR/main.scss:$CSS_OUTPUT"
    else
        log_error "Sass compiler not found"
        return 1
    fi
}

# Clean
clean() {
    log_info "Cleaning build artifacts..."
    rm -f "$CSS_OUTPUT"
    rm -f "$CSS_OUTPUT.map"
    log_success "Clean completed"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        watch)      watch ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
