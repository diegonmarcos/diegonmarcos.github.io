#!/bin/bash
# =============================================================================
# MyMaps Build Script
# React + Vite + TypeScript + SCSS
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_NAME="mymaps"
DEV_PORT=8014

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

cd "$PROJECT_DIR"

# =============================================================================
# Commands
# =============================================================================

cmd_install() {
    log_info "Installing dependencies..."
    npm install
    log_success "Dependencies installed"
}

cmd_build() {
    log_info "Building $PROJECT_NAME for production..."

    # Ensure dependencies are installed
    if [ ! -d "node_modules" ]; then
        cmd_install
    fi

    # Run Vite build
    npx vite build

    # Verify output
    if [ -f "dist/index.html" ]; then
        log_success "Build complete! Output in dist/"
        ls -lh dist/
    else
        log_error "Build failed - no index.html found"
        exit 1
    fi
}

cmd_dev() {
    log_info "Starting dev server on port $DEV_PORT..."

    # Ensure dependencies are installed
    if [ ! -d "node_modules" ]; then
        cmd_install
    fi

    npx vite --port $DEV_PORT
}

cmd_preview() {
    log_info "Previewing production build..."

    if [ ! -d "dist" ]; then
        log_warn "No dist folder found, building first..."
        cmd_build
    fi

    npx vite preview --port $DEV_PORT
}

cmd_clean() {
    log_info "Cleaning build artifacts..."
    rm -rf dist node_modules/.vite
    log_success "Clean complete"
}

cmd_watch() {
    log_info "Starting dev server with watch mode..."
    cmd_dev
}

cmd_help() {
    echo ""
    echo "Usage: ./build.sh [command]"
    echo ""
    echo "Commands:"
    echo "  build    Build for production"
    echo "  dev      Start development server"
    echo "  preview  Preview production build"
    echo "  clean    Remove build artifacts"
    echo "  install  Install dependencies"
    echo "  watch    Alias for dev"
    echo "  help     Show this help"
    echo ""
}

# =============================================================================
# Main
# =============================================================================

case "${1:-help}" in
    build)   cmd_build ;;
    dev)     cmd_dev ;;
    preview) cmd_preview ;;
    clean)   cmd_clean ;;
    install) cmd_install ;;
    watch)   cmd_watch ;;
    help)    cmd_help ;;
    *)
        log_error "Unknown command: $1"
        cmd_help
        exit 1
        ;;
esac
