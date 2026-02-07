#!/usr/bin/env bash
# =============================================================================
# Build Script for c_root (Root Index)
# Type: Vue 3 + TypeScript + SCSS
# Description: Root landing page for diegonmarcos.github.io
# =============================================================================

set -e  # Exit on error

PROJECT_NAME="c_root"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "$PROJECT_ROOT/.." && pwd)"
DIST_DIR="$PROJECT_ROOT/dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Resolved paths (set by resolve_deps)
VITE_BIN=""
NODE_MODULES=""

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

# Resolve dependencies - tries multiple locations, installs as last resort
resolve_deps() {
    print_step "Resolving dependencies..."

    # 1. System vite (nix, ubuntu, termux global install)
    if command -v vite >/dev/null 2>&1; then
        VITE_BIN="$(command -v vite)"
        NODE_MODULES=""
        # Find the node_modules that contains vue etc for NODE_PATH
        local sys_vite_dir
        sys_vite_dir="$(dirname "$(dirname "$(realpath "$VITE_BIN")")")"
        if [ -d "$sys_vite_dir/node_modules" ]; then
            NODE_MODULES="$sys_vite_dir/node_modules"
        fi
        print_success "Using system vite: $VITE_BIN"
        return 0
    fi

    # 2. Repo root node_modules
    if [ -f "$REPO_ROOT/node_modules/.bin/vite" ]; then
        VITE_BIN="$REPO_ROOT/node_modules/.bin/vite"
        NODE_MODULES="$REPO_ROOT/node_modules"
        print_success "Using repo node_modules: $NODE_MODULES"
        return 0
    fi

    # 3. Project-local node_modules
    if [ -f "$PROJECT_ROOT/node_modules/.bin/vite" ]; then
        VITE_BIN="$PROJECT_ROOT/node_modules/.bin/vite"
        NODE_MODULES="$PROJECT_ROOT/node_modules"
        print_success "Using project node_modules: $NODE_MODULES"
        return 0
    fi

    # 4. npx available (uses npm cache, no install needed)
    if command -v npx >/dev/null 2>&1; then
        # Check if npm is available for install fallback
        if command -v npm >/dev/null 2>&1; then
            print_step "No vite found, installing deps in repo root..."
            cd "$REPO_ROOT"
            npm install --no-fund --no-audit 2>&1 | tail -3
            if [ -f "$REPO_ROOT/node_modules/.bin/vite" ]; then
                VITE_BIN="$REPO_ROOT/node_modules/.bin/vite"
                NODE_MODULES="$REPO_ROOT/node_modules"
                print_success "Installed deps at: $NODE_MODULES"
                return 0
            fi
        fi
    fi

    print_error "Could not resolve vite. Install Node.js and npm, then retry."
    exit 1
}

# Run vite with resolved paths
run_vite() {
    if [ -n "$NODE_MODULES" ]; then
        NODE_PATH="$NODE_MODULES" "$VITE_BIN" "$@"
    else
        "$VITE_BIN" "$@"
    fi
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

    resolve_deps

    # Clean first
    clean

    # Build with Vite
    print_step "Running Vite build..."
    cd "$PROJECT_ROOT"
    run_vite build

    # Remove type="module" and crossorigin attributes for file:// protocol support
    # Add defer to script tag so it executes after DOM is ready
    if [ -f "$DIST_DIR/index.html" ]; then
        print_step "Fixing script attributes for file:// protocol..."
        sed -i 's/ type="module"//g' "$DIST_DIR/index.html"
        sed -i 's/ crossorigin//g' "$DIST_DIR/index.html"
        sed -i 's/<script src="/<script defer src="/g' "$DIST_DIR/index.html"
        print_success "Fixed script attributes (removed module/CORS, added defer)"
    fi

    # Copy standalone HTML pages used by cube view iframes
    print_step "Copying standalone HTML pages..."
    for html_file in "$PROJECT_ROOT/src/"*.html; do
        if [ -f "$html_file" ] && [ "$(basename "$html_file")" != "index.html" ]; then
            cp "$html_file" "$DIST_DIR/"
            print_success "Copied $(basename "$html_file")"
        fi
    done

    # Copy standalone JS modules used by standalone HTML pages
    print_step "Copying standalone JS modules..."
    for js_file in "$PROJECT_ROOT/src/"*.js; do
        if [ -f "$js_file" ]; then
            cp "$js_file" "$DIST_DIR/"
            print_success "Copied $(basename "$js_file")"
        fi
    done

    if [ $? -eq 0 ]; then
        print_success "Build complete!"
        print_success "Output: $DIST_DIR/"

        echo ""
        echo -e "${GREEN}Build artifacts:${NC}"
        ls -lh "$DIST_DIR/" 2>/dev/null || echo "No dist directory found"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Development mode
dev() {
    print_header "Starting Dev Server for $PROJECT_NAME"

    resolve_deps

    print_step "Starting Vite dev server..."
    echo -e "${BLUE}Server will be available at: http://localhost:5173${NC}"
    echo ""

    cd "$PROJECT_ROOT"
    run_vite
}

# Preview production build
preview() {
    print_header "Preview Production Build"

    resolve_deps

    if [ ! -d "$DIST_DIR" ]; then
        print_error "No dist directory found. Run 'build' first."
        exit 1
    fi

    print_step "Starting preview server..."
    echo -e "${BLUE}Preview will be available at: http://localhost:4173${NC}"
    echo ""

    cd "$PROJECT_ROOT"
    run_vite preview
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
    echo "Dependency resolution order:"
    echo "  1. System vite (nix/ubuntu/termux PATH)"
    echo "  2. Repo root node_modules/"
    echo "  3. Project-local node_modules/"
    echo "  4. Auto-install via npm in repo root (fallback)"
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
