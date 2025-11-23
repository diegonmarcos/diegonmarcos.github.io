#!/bin/bash

#=====================================
# CV_WEB BUILD SCRIPT
#=====================================
# Build script for Sass-based project
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
PROJECT_NAME="cv_web"
SASS_DIR="$PROJECT_DIR/3.sass"
SASS_INPUT="$SASS_DIR/main.scss"
CSS_OUTPUT="$PROJECT_DIR/style.css"

# Logging
log_info() { echo -e "${BLUE}[${PROJECT_NAME}]${NC} $1"; }
log_success() { echo -e "${GREEN}[${PROJECT_NAME}]${NC} ✓ $1"; }
log_error() { echo -e "${RED}[${PROJECT_NAME}]${NC} ✗ $1"; }
log_warning() { echo -e "${YELLOW}[${PROJECT_NAME}]${NC} ⚠ $1"; }

print_usage() {
    cat << EOF
${BLUE}CV_Web Build Script${NC}

${YELLOW}Usage:${NC} ./1.ops/build.sh <action>

${YELLOW}Actions:${NC}
  build              - Build Sass to CSS (production)
  dev                - Build Sass to CSS (development) + watch
  watch              - Watch Sass files for changes
  clean              - Clean build artifacts
  lint               - Lint Sass files
  test               - Run validation tests
  help               - Show this help

${YELLOW}Tech Stack:${NC}
  - Sass/SCSS
  - HTML5
  - Modern CSS architecture

EOF
}

# Check if npm dependencies are installed
check_dependencies() {
    if [ ! -d "$PROJECT_DIR/1.ops/node_modules" ]; then
        log_info "Installing dependencies..."
        cd "$PROJECT_DIR/1.ops"
        npm install
        cd "$PROJECT_DIR"
    fi
}

# Build Sass (production)
build() {
    log_info "Building Sass for production..."

    check_dependencies

    cd "$PROJECT_DIR/1.ops"

    if [ -f "package.json" ]; then
        # Use npm script if available
        npm run sass:build 2>&1 || {
            log_error "Sass build failed"
            return 1
        }
    else
        # Fallback to direct sass command
        if command -v sass &> /dev/null; then
            sass "$SASS_INPUT:$CSS_OUTPUT" --style=compressed
        else
            log_error "Sass compiler not found"
            log_info "Install with: npm install -g sass"
            return 1
        fi
    fi

    log_success "Sass compiled to $CSS_OUTPUT"
}

# Development build
dev() {
    log_info "Starting Sass development mode..."

    check_dependencies

    cd "$PROJECT_DIR/1.ops"

    if [ -f "package.json" ] && grep -q "sass:watch" package.json; then
        log_success "Watching Sass files for changes..."
        log_info "Press Ctrl+C to stop"
        npm run sass:watch
    else
        if command -v sass &> /dev/null; then
            sass --watch "$SASS_INPUT:$CSS_OUTPUT"
        else
            log_error "Sass compiler not found"
            return 1
        fi
    fi
}

# Watch Sass files
watch() {
    dev
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    rm -f "$CSS_OUTPUT"
    rm -f "$CSS_OUTPUT.map"
    rm -f "$PROJECT_DIR/1.ops/logs/"*.map 2>/dev/null || true

    log_success "Clean completed"
}

# Lint Sass files
lint() {
    log_info "Linting Sass files..."

    if command -v stylelint &> /dev/null; then
        stylelint "$SASS_DIR/**/*.scss" || log_warning "Linting completed with warnings"
    else
        log_warning "stylelint not installed"
        log_info "Install with: npm install -g stylelint stylelint-config-standard-scss"
    fi

    log_success "Linting completed"
}

# Run tests
test() {
    log_info "Running tests..."

    # Test that Sass compiles without errors
    build

    # Check output file exists
    if [ -f "$CSS_OUTPUT" ]; then
        log_success "CSS file generated successfully"
        return 0
    else
        log_error "CSS file not generated"
        return 1
    fi
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
