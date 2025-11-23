#!/bin/bash

#=====================================
# MYPROFILE BUILD SCRIPT
#=====================================
# Build script for SvelteKit project
#
# Usage: ./1.1.ops/build.sh <action>
#

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Project directory (myprofile/1.3.svelte)
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../1.3.svelte" && pwd)"
PROJECT_NAME="myprofile"
BUILD_DIR="$PROJECT_DIR/build"

# Logging
log_info() { echo -e "${BLUE}[${PROJECT_NAME}]${NC} $1"; }
log_success() { echo -e "${GREEN}[${PROJECT_NAME}]${NC} ✓ $1"; }
log_error() { echo -e "${RED}[${PROJECT_NAME}]${NC} ✗ $1"; }
log_warning() { echo -e "${YELLOW}[${PROJECT_NAME}]${NC} ⚠ $1"; }

print_usage() {
    cat << EOF
${BLUE}MyProfile Build Script${NC}

${YELLOW}Usage:${NC} ./1.1.ops/build.sh <action>

${YELLOW}Actions:${NC}
  build              - Build for production (static adapter)
  dev                - Start development server
  preview            - Preview production build
  clean              - Clean build artifacts
  lint               - Lint Svelte/JS/TS files
  format             - Format code with Prettier
  check              - Run svelte-check for type checking
  test               - Run tests
  test:unit          - Run unit tests
  help               - Show this help

${YELLOW}Tech Stack:${NC}
  - SvelteKit
  - TypeScript
  - Static adapter (for GitHub Pages)
  - Vite

${YELLOW}Project Location:${NC}
  $PROJECT_DIR

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
    log_info "Building SvelteKit for production..."

    check_dependencies

    cd "$PROJECT_DIR"

    # Run SvelteKit build
    npm run build || {
        log_error "Build failed"
        return 1
    }

    # Verify build directory was created
    if [ -d "$BUILD_DIR" ]; then
        log_success "Build completed → $BUILD_DIR"
        log_info "Build size:"
        du -sh "$BUILD_DIR"
        return 0
    else
        log_error "Build directory not created"
        return 1
    fi
}

# Start development server
dev() {
    log_info "Starting SvelteKit development server..."

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

    if [ ! -d "$BUILD_DIR" ]; then
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

    rm -rf "$BUILD_DIR"
    rm -rf "$PROJECT_DIR/.svelte-kit"
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

# Svelte type checking
check_types() {
    log_info "Running svelte-check..."

    check_dependencies

    cd "$PROJECT_DIR"

    if grep -q "check" package.json; then
        npm run check
        log_success "Type checking completed"
    else
        log_warning "No check script found in package.json"
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
        check) check_types ;;
        test) test ;;
        test:unit) test_unit ;;
        help|--help|-h) print_usage ;;
        *)
            log_error "Unknown action: $action"
            print_usage
            exit 1
            ;;
    esac
}

main "$@"
