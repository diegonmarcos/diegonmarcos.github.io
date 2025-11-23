#!/bin/bash

#=====================================
# MYFEED BUILD SCRIPT
#=====================================
# Build script for Vue 3 + Vite project
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
PROJECT_NAME="myfeed"
DIST_DIR="$PROJECT_DIR/dist"

# Logging
log_info() { echo -e "${BLUE}[${PROJECT_NAME}]${NC} $1"; }
log_success() { echo -e "${GREEN}[${PROJECT_NAME}]${NC} ✓ $1"; }
log_error() { echo -e "${RED}[${PROJECT_NAME}]${NC} ✗ $1"; }
log_warning() { echo -e "${YELLOW}[${PROJECT_NAME}]${NC} ⚠ $1"; }

print_usage() {
    cat << EOF
${BLUE}MyFeed Build Script${NC}

${YELLOW}Usage:${NC} ./1.ops/build.sh <action>

${YELLOW}Actions:${NC}
  build              - Build for production
  dev                - Start development server
  preview            - Preview production build
  clean              - Clean build artifacts
  lint               - Lint Vue/JS/TS files
  format             - Format code with Prettier
  test               - Run tests
  test:unit          - Run unit tests
  typecheck          - Run TypeScript type checking
  help               - Show this help

${YELLOW}Tech Stack:${NC}
  - Vue 3 (Composition API)
  - Vite
  - TypeScript
  - Pinia (state management)
  - Vue Router

EOF
}

# Check if npm dependencies are installed
check_dependencies() {
    if [ ! -d "$PROJECT_DIR/node_modules" ]; then
        log_info "Installing dependencies..."
        cd "$PROJECT_DIR"
        npm install
    fi
}

# Build for production
build() {
    log_info "Building for production..."

    check_dependencies

    cd "$PROJECT_DIR"

    # Run Vite build
    npm run build || {
        log_error "Build failed"
        return 1
    }

    # Verify dist directory was created
    if [ -d "$DIST_DIR" ]; then
        log_success "Build completed → $DIST_DIR"
        log_info "Build size:"
        du -sh "$DIST_DIR"
        return 0
    else
        log_error "Build directory not created"
        return 1
    fi
}

# Start development server
dev() {
    log_info "Starting Vite development server..."

    check_dependencies

    cd "$PROJECT_DIR"

    log_success "Development server starting..."
    log_info "Press Ctrl+C to stop"
    echo ""

    npm run dev
}

# Preview production build
preview() {
    log_info "Starting preview server for production build..."

    if [ ! -d "$DIST_DIR" ]; then
        log_warning "No production build found. Building first..."
        build
    fi

    cd "$PROJECT_DIR"

    log_success "Preview server starting..."
    npm run preview
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    rm -rf "$DIST_DIR"
    rm -rf "$PROJECT_DIR/.vite"
    rm -rf "$PROJECT_DIR/node_modules/.vite"

    log_success "Clean completed"
}

# Lint files
lint() {
    log_info "Linting files..."

    check_dependencies

    cd "$PROJECT_DIR"

    if grep -q "lint" package.json; then
        npm run lint || log_warning "Linting completed with warnings"
    else
        log_warning "No lint script found in package.json"
    fi

    log_success "Linting completed"
}

# Format code
format() {
    log_info "Formatting code..."

    check_dependencies

    cd "$PROJECT_DIR"

    if grep -q "format" package.json; then
        npm run format
        log_success "Code formatted"
    else
        log_warning "No format script found in package.json"
    fi
}

# Run tests
test() {
    log_info "Running tests..."

    check_dependencies

    cd "$PROJECT_DIR"

    if grep -q "\"test\"" package.json; then
        npm run test
    else
        log_warning "No test script found in package.json"
        log_info "Skipping tests"
    fi

    log_success "Tests completed"
}

# Run unit tests
test_unit() {
    log_info "Running unit tests..."

    check_dependencies

    cd "$PROJECT_DIR"

    if grep -q "test:unit" package.json; then
        npm run test:unit
    else
        log_warning "No test:unit script found"
    fi
}

# TypeScript type checking
typecheck() {
    log_info "Running TypeScript type checking..."

    check_dependencies

    cd "$PROJECT_DIR"

    if grep -q "type-check" package.json; then
        npm run type-check
        log_success "Type checking completed"
    else
        log_warning "No type-check script found"
    fi
}

# Main execution
main() {
    local action=${1:-help}

    case $action in
        build) build ;;
        dev) dev ;;
        preview) preview ;;
        clean) clean ;;
        lint) lint ;;
        format) format ;;
        test) test ;;
        test:unit) test_unit ;;
        typecheck) typecheck ;;
        help|--help|-h) print_usage ;;
        *)
            log_error "Unknown action: $action"
            print_usage
            exit 1
            ;;
    esac
}

main "$@"
