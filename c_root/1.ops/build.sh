#!/usr/bin/env bash
# =============================================================================
# Build Script for c_root (Root Index)
# Type: Vue 3 + TypeScript + SCSS
# Description: Root landing page for diegonmarcos.github.io
# =============================================================================

set -e  # Exit on error

PROJECT_NAME="c_root"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GLOBAL_NODE_MODULES="/home/diego/mnt_git/front-Github_io/node_modules"
DIST_DIR="$PROJECT_ROOT/dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# =============================================================================
# Functions
# =============================================================================

print_header() {
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║${NC}  ${GREEN}$1${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
}

print_step() {
    echo -e "${YELLOW}▶${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check dependencies
check_deps() {
    print_step "Checking dependencies..."

    if [ ! -d "$GLOBAL_NODE_MODULES" ]; then
        print_error "Global node_modules not found at $GLOBAL_NODE_MODULES"
        exit 1
    fi

    if [ ! -f "$GLOBAL_NODE_MODULES/.bin/vite" ]; then
        print_error "Vite not found in global node_modules"
        echo "Please install dependencies in the root directory:"
        echo "  cd /home/diego/mnt_git/front-Github_io && npm install"
        exit 1
    fi

    print_success "Dependencies OK"
}

# Clean build artifacts
clean() {
    print_header "Cleaning $PROJECT_NAME"

    if [ -d "$DIST_DIR" ]; then
        print_step "Removing dist directory..."
        rm -rf "$DIST_DIR"
        print_success "Cleaned dist/"
    else
        print_success "Already clean"
    fi
}

# Build for production
build() {
    print_header "Building $PROJECT_NAME"

    check_deps

    # Clean first
    clean

    # Build with Vite using global node_modules
    print_step "Running Vite build..."
    cd "$PROJECT_ROOT"
    NODE_PATH="$GLOBAL_NODE_MODULES" "$GLOBAL_NODE_MODULES/.bin/vite" build

    # Remove type="module" and crossorigin attributes for file:// protocol support
    if [ -f "$DIST_DIR/index.html" ]; then
        print_step "Removing CORS attributes for file:// protocol..."
        sed -i 's/ type="module"//g' "$DIST_DIR/index.html"
        sed -i 's/ crossorigin//g' "$DIST_DIR/index.html"
        print_success "Removed module/CORS attributes"
    fi

    if [ $? -eq 0 ]; then
        print_success "Build complete!"
        print_success "Output: $DIST_DIR/"

        echo ""
        echo -e "${GREEN}📦 Build artifacts:${NC}"
        ls -lh "$DIST_DIR/" 2>/dev/null || echo "No dist directory found"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Development mode
dev() {
    print_header "Starting Dev Server for $PROJECT_NAME"

    check_deps

    print_step "Starting Vite dev server..."
    echo -e "${BLUE}Server will be available at: http://localhost:5173${NC}"
    echo ""

    cd "$PROJECT_ROOT"
    NODE_PATH="$GLOBAL_NODE_MODULES" "$GLOBAL_NODE_MODULES/.bin/vite"
}

# Preview production build
preview() {
    print_header "Preview Production Build"

    check_deps

    if [ ! -d "$DIST_DIR" ]; then
        print_error "No dist directory found. Run 'build' first."
        exit 1
    fi

    print_step "Starting preview server..."
    echo -e "${BLUE}Preview will be available at: http://localhost:4173${NC}"
    echo ""

    cd "$PROJECT_ROOT"
    NODE_PATH="$GLOBAL_NODE_MODULES" "$GLOBAL_NODE_MODULES/.bin/vite" preview
}

# Watch mode (same as dev)
watch() {
    dev
}

# Show help
show_help() {
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  build    - Build for production (creates dist/)"
    echo "  dev      - Start development server (port 5173)"
    echo "  preview  - Preview production build (port 4173)"
    echo "  clean    - Remove build artifacts"
    echo "  watch    - Alias for 'dev'"
    echo "  help     - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 build"
    echo "  $0 dev"
    echo "  $0 clean"
}

# =============================================================================
# Main Script
# =============================================================================

# Check if command is provided
if [ $# -eq 0 ]; then
    show_help
    exit 0
fi

# Parse command
case "$1" in
    build)
        build
        ;;
    dev)
        dev
        ;;
    preview)
        preview
        ;;
    clean)
        clean
        ;;
    watch)
        watch
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
