#!/bin/sh
#=====================================
# CLOUD BUILD SCRIPT
#=====================================
# Supports Vanilla and Vue 3 versions
# Usage: ./1.ops/build.sh [action] [--vanilla|--vue]
#
# Default: Vanilla (single-file SPA)

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
VANILLA_DIR="$PROJECT_DIR/src_vanilla"
VUE_DIR="$PROJECT_DIR/src_vue"
DIST_DIR="$PROJECT_DIR/dist"
DIST_VANILLA="$PROJECT_DIR/dist_vanilla"
DIST_VUE="$PROJECT_DIR/dist_vue"
PROJECT_NAME="Cloud"
PORT="8006"

# Default to Vanilla (single-file SPA)
USE_VUE=false

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
    printf "${YELLOW}USAGE:${NC}  ./1.ops/build.sh [action] [--vanilla|--vue]\n"
    printf "\n"
    printf "${YELLOW}ACTIONS:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build for production\n"
    printf "  ${GREEN}dev${NC}          # Start dev server\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}OPTIONS:${NC}\n"
    printf "  ${GREEN}--vanilla${NC}    # Use Vanilla version (src_vanilla) [default]\n"
    printf "  ${GREEN}--vue${NC}        # Use Vue 3 version (src_vue)\n"
    printf "\n"
    printf "${YELLOW}VERSIONS:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Version" "Framework" "CSS" "JS" "Port"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Vanilla" "Vanilla" "Sass" "TypeScript" ":${PORT}"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  %-14s\n" "Vue 3" "Vue 3" "Sass" "TypeScript" ":${PORT}"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Parse arguments
parse_args() {
    for arg in "$@"; do
        case "$arg" in
            --vanilla) USE_VUE=false ;;
            --vue)     USE_VUE=true ;;
        esac
    done
}

# Check dependencies
check_dependencies_vue() {
    if [ -d "$VUE_DIR/node_modules" ]; then
        return 0
    fi
    log_info "Installing Vue 3 dependencies..."
    cd "$VUE_DIR"
    npm install
}

check_dependencies_vanilla() {
    if [ -d "$PROJECT_DIR/node_modules" ]; then
        return 0
    fi
    log_info "Installing Vanilla dependencies..."
    cd "$PROJECT_DIR"
    npm install
}

# Build action
build() {
    if [ "$USE_VUE" = true ]; then
        build_vue
    else
        build_vanilla
    fi

    # Copy chosen build to official dist/
    mkdir -p "$DIST_DIR"
    rm -rf "$DIST_DIR"/*
    if [ "$USE_VUE" = true ]; then
        cp -r "$DIST_VUE"/* "$DIST_DIR/"
        log_success "Copied Vue 3 build → $DIST_DIR"
    else
        cp -r "$DIST_VANILLA"/* "$DIST_DIR/"
        log_success "Copied Vanilla build → $DIST_DIR"
    fi
}

# Build Vue 3 version
build_vue() {
    log_info "Building ${PROJECT_NAME} (Vue 3)..."
    check_dependencies_vue
    cd "$VUE_DIR"
    npm run build

    # Copy public assets
    mkdir -p "$DIST_VUE"
    cp "$PROJECT_DIR/public"/*.png "$DIST_VUE/" 2>/dev/null || true
    cp "$PROJECT_DIR/public"/*.jpg "$DIST_VUE/" 2>/dev/null || true
    cp "$PROJECT_DIR/public"/matomo.js "$DIST_VUE/" 2>/dev/null || true

    log_success "Vue 3 single-file build → $DIST_VUE"
}

# Build Vanilla version
build_vanilla() {
    log_info "Building ${PROJECT_NAME} (Vanilla)..."

    # Ensure dependencies are installed
    check_dependencies_vanilla

    # Prepare dist directory
    mkdir -p "$DIST_VANILLA"
    rm -rf "$DIST_VANILLA"/*

    # Build CSS (Sass) to temp file
    TEMP_CSS="$DIST_VANILLA/.temp.css"
    if [ -f "$VANILLA_DIR/scss/main.scss" ]; then
        log_info "Compiling Sass..."
        npx sass "$VANILLA_DIR/scss/main.scss" "$TEMP_CSS" --style=compressed --no-source-map
    else
        log_warning "Sass entry point not found: $VANILLA_DIR/scss/main.scss"
        touch "$TEMP_CSS"
    fi

    # Build JS (TypeScript -> esbuild) to temp file
    TEMP_JS="$DIST_VANILLA/.temp.js"
    if [ -f "$VANILLA_DIR/typescript/main.ts" ]; then
        log_info "Bundling TypeScript..."
        npx esbuild "$VANILLA_DIR/typescript/main.ts" --bundle --minify --target=es2015 --format=iife --outfile="$TEMP_JS"
    else
        log_warning "TypeScript entry point not found: $VANILLA_DIR/typescript/main.ts"
        touch "$TEMP_JS"
    fi

    # Inline CSS and JS into HTML files using Node.js
    log_info "Inlining CSS and JS into HTML files..."
    for html_file in "$VANILLA_DIR"/*.html; do
        if [ -f "$html_file" ]; then
            filename=$(basename "$html_file")
            log_info "Processing $filename..."

            node -e "
const fs = require('fs');
let html = fs.readFileSync('$html_file', 'utf8');
const css = fs.readFileSync('$TEMP_CSS', 'utf8');
const js = fs.readFileSync('$TEMP_JS', 'utf8');

// Replace stylesheet link with inline style
html = html.replace(/<link[^>]*rel=[\"']stylesheet[\"'][^>]*href=[\"']styles\\.css[\"'][^>]*>/gi, '<style>' + css + '</style>');
html = html.replace(/<link[^>]*href=[\"']styles\\.css[\"'][^>]*rel=[\"']stylesheet[\"'][^>]*>/gi, '<style>' + css + '</style>');

// Replace script src with inline script (handles both script.js and main.js)
html = html.replace(/<script[^>]*src=[\"']script\\.js[\"'][^>]*><\\/script>/gi, '<script>' + js + '</script>');
html = html.replace(/<script[^>]*src=[\"']main\\.js[\"'][^>]*><\\/script>/gi, '<script>' + js + '</script>');

// Copy data JS files as external files (allows updating data without rebuilding HTML)
const dataFiles = ['cloud_dash_data.js', 'ccusage_data.js', 'cloud_costs_data.js'];
dataFiles.forEach(file => {
    const srcPath = '$VANILLA_DIR/' + file;
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, '$DIST_VANILLA/' + file);
    }
});

fs.writeFileSync('$DIST_VANILLA/$filename', html);
"
            log_success "Created single-file: $DIST_VANILLA/$filename"
        fi
    done

    # Clean up temp files
    rm -f "$TEMP_CSS" "$TEMP_JS"

    # Copy public assets (images, etc.) - still needed for og:image references
    if [ -d "$PROJECT_DIR/public" ]; then
        ln -sf "$PROJECT_DIR/public" "$DIST_VANILLA/public" 2>/dev/null || cp -r "$PROJECT_DIR/public" "$DIST_VANILLA/"
    fi

    log_success "Vanilla single-file build completed → $DIST_VANILLA"
}

# Dev action
dev() {
    if [ "$USE_VUE" = true ]; then
        dev_vue
    else
        dev_vanilla
    fi
}

# Dev Vue 3 version
dev_vue() {
    check_dependencies_vue
    cd "$VUE_DIR"

    log_info "Starting Vue 3 dev server..."
    npm run dev &

    sleep 2

    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} (Vue 3) STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Dev Vanilla version
dev_vanilla() {
    log_info "Starting Vanilla dev watchers..."
    check_dependencies_vanilla
    
    mkdir -p "$DIST_VANILLA"

    # Sass Watch
    if [ -f "$VANILLA_DIR/scss/main.scss" ]; then
        npx sass "$VANILLA_DIR/scss/main.scss" "$DIST_VANILLA/styles.css" --watch --style=expanded --source-map &
    fi
    
    # TS Watch
    if [ -f "$VANILLA_DIR/typescript/main.ts" ]; then
        npx esbuild "$VANILLA_DIR/typescript/main.ts" --bundle --outfile="$DIST_VANILLA/script.js" --watch --sourcemap &
    fi

    log_success "Watchers started. Open $DIST_VANILLA/index.html in your browser."
}

# Clean action
clean() {
    log_info "Cleaning build artifacts..."

    # Clean Vue 3
    rm -rf "$VUE_DIR/node_modules/.vite" 2>/dev/null || true
    rm -rf "$DIST_VUE"/* 2>/dev/null || true

    # Clean Vanilla
    if [ -f "$VANILLA_DIR/1.ops/build.sh" ]; then
        cd "$VANILLA_DIR"
        sh 1.ops/build.sh clean 2>/dev/null || true
    fi
    rm -rf "$DIST_VANILLA"/* 2>/dev/null || true

    # Clean official dist
    rm -rf "$DIST_DIR"/* 2>/dev/null || true

    log_success "Clean completed"
}

# Main
main() {
    parse_args "$@"

    _action="${1:-help}"

    # Remove options from action
    case "$_action" in
        --*) _action="help" ;;
    esac

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
