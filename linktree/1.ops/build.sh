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
    printf "  ${GREEN}build${NC}        # Validate project files\n"
    printf "  ${GREEN}minify${NC}       # Minify CSS and JS\n"
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
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "Linktree" "-" "Vanilla" "Vanilla" "npm-live :${PORT}" "-"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME}..."

    _errors=0

    # Check required files exist
    [ -f "$PROJECT_DIR/index.html" ] || { log_error "index.html not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/style.css" ] || { log_error "style.css not found"; _errors=$((_errors + 1)); }
    [ -f "$PROJECT_DIR/script.js" ] || { log_error "script.js not found"; _errors=$((_errors + 1)); }

    if [ "$_errors" -eq 0 ]; then
        log_success "Build completed successfully"
        return 0
    else
        log_error "Build failed: $_errors missing file(s)"
        return 1
    fi
}

# Start development server
dev() {
    log_info "Starting development server..."

    # Check if live-server is available
    if command -v live-server >/dev/null 2>&1; then
        log_success "Server starting at http://localhost:${PORT}/"
        log_info "Press Ctrl+C to stop"
        printf "\n"
        cd "$PROJECT_DIR"
        live-server --port="${PORT}" --no-browser
    elif command -v npx >/dev/null 2>&1; then
        log_success "Server starting at http://localhost:${PORT}/"
        log_info "Press Ctrl+C to stop"
        printf "\n"
        cd "$PROJECT_DIR"
        npx live-server --port="${PORT}" --no-browser
    else
        log_warning "live-server not found, using Python http.server"
        log_success "Server starting at http://localhost:${PORT}/"
        cd "$PROJECT_DIR"
        python3 -m http.server "$PORT"
    fi
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    find "$PROJECT_DIR" -name "*.tmp" -delete 2>/dev/null || true
    find "$PROJECT_DIR" -name ".DS_Store" -delete 2>/dev/null || true
    rm -f "$PROJECT_DIR/style.min.css" 2>/dev/null || true
    rm -f "$PROJECT_DIR/script.min.js" 2>/dev/null || true

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
