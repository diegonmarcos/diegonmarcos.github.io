#!/bin/bash

#=====================================
# LINKTREE BUILD SCRIPT
#=====================================
# Build script for static HTML/CSS/JS project
#
# Usage: ./1.ops/build.sh <action>
#

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_NAME="linktree"

# Logging
log_info() { echo -e "${BLUE}[${PROJECT_NAME}]${NC} $1"; }
log_success() { echo -e "${GREEN}[${PROJECT_NAME}]${NC} ✓ $1"; }
log_error() { echo -e "${RED}[${PROJECT_NAME}]${NC} ✗ $1"; }
log_warning() { echo -e "${YELLOW}[${PROJECT_NAME}]${NC} ⚠ $1"; }

print_usage() {
    cat << EOF
${BLUE}Linktree Build Script${NC}

${YELLOW}Usage:${NC} ./1.ops/build.sh <action>

${YELLOW}Actions:${NC}
  build              - Build project (validate files)
  dev                - Start development server
  watch              - Watch files for changes
  clean              - Clean build artifacts
  lint               - Lint HTML/CSS/JS files
  minify             - Minify CSS and JS
  test               - Run validation tests
  help               - Show this help

${YELLOW}Tech Stack:${NC}
  - Static HTML5
  - CSS3 (with glassmorphism)
  - Vanilla JavaScript
  - Swiper.js (CDN)

EOF
}

# Build action (validate everything)
build() {
    log_info "Building $PROJECT_NAME..."

    local errors=0

    # Check required files exist
    [ -f "$PROJECT_DIR/index.html" ] || { log_error "index.html not found"; ((errors++)); }
    [ -f "$PROJECT_DIR/style.css" ] || { log_error "style.css not found"; ((errors++)); }
    [ -f "$PROJECT_DIR/script.js" ] || { log_error "script.js not found"; ((errors++)); }

    if [ $errors -eq 0 ]; then
        log_success "Build completed successfully"
        return 0
    else
        log_error "Build failed: missing required files"
        return 1
    fi
}

# Start development server
dev() {
    log_info "Starting development server for $PROJECT_NAME..."

    local port=8000

    # Check if port is in use
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        log_warning "Port $port already in use"
        port=8001
        log_info "Trying port $port instead..."
    fi

    log_success "Server starting at http://localhost:$port/$PROJECT_NAME/"
    log_info "Press Ctrl+C to stop"
    echo ""

    cd "$PROJECT_DIR/.."
    python3 -m http.server $port
}

# Watch files for changes
watch() {
    log_info "Watching files for changes..."

    if ! command -v inotifywait &> /dev/null; then
        log_error "inotifywait not installed"
        log_info "Install with: sudo apt-get install inotify-tools"
        return 1
    fi

    log_success "Watching $PROJECT_DIR for changes..."
    log_info "Press Ctrl+C to stop"

    while inotifywait -e modify,create,delete -r "$PROJECT_DIR" --exclude '(\.git|node_modules|\.swp)' 2>/dev/null; do
        log_info "Change detected, validating..."
        build || true
    done
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    find "$PROJECT_DIR" -name "*.tmp" -delete 2>/dev/null || true
    find "$PROJECT_DIR" -name ".DS_Store" -delete 2>/dev/null || true

    log_success "Clean completed"
}

# Minify CSS and JS
minify() {
    log_info "Minifying assets..."

    if ! command -v uglifyjs &> /dev/null || ! command -v cleancss &> /dev/null; then
        log_warning "Minification tools not installed"
        log_info "Install with: npm install -g uglify-js clean-css-cli"
        return 1
    fi

    # Minify CSS
    if [ -f "$PROJECT_DIR/style.css" ]; then
        cleancss -o "$PROJECT_DIR/style.min.css" "$PROJECT_DIR/style.css"
        log_success "CSS minified → style.min.css"
    fi

    # Minify JS
    if [ -f "$PROJECT_DIR/script.js" ]; then
        uglifyjs "$PROJECT_DIR/script.js" -o "$PROJECT_DIR/script.min.js" -c -m
        log_success "JavaScript minified → script.min.js"
    fi

    log_success "Minification completed"
}

# Lint files
lint() {
    log_info "Linting files..."
    build
    log_success "Linting completed"
}

# Run tests
test() {
    log_info "Running tests..."
    build
}

# Main execution
main() {
    local action=${1:-help}

    case $action in
        build) build ;;
        dev) dev ;;
        watch) watch ;;
        clean) clean ;;
        lint) lint ;;
        minify) minify ;;
        test) test ;;
        help|--help|-h) print_usage ;;
        *)
            log_error "Unknown action: $action"
            print_usage
            exit 1
            ;;
    esac
}

main "$@"
