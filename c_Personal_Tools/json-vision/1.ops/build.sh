#!/bin/sh
# JSON Vision Build Script
# POSIX-compliant build script for JSON Vision

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="JSON Vision"
PORT="8017"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { printf "${GREEN}[INFO]${NC} %s\n" "$1"; }
log_warn() { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }
log_error() { printf "${RED}[ERROR]${NC} %s\n" "$1"; }

# Resolve node dependencies - checks multiple locations before installing
# Usage: resolve_deps [package_dir]
resolve_deps() {
    local pkg_dir="${1:-$PROJECT_DIR}"

    # 1. Already installed locally
    if [ -d "$pkg_dir/node_modules" ]; then
        return 0
    fi

    # 2. Repo root shared node_modules
    local repo_root
    repo_root="$(cd "$pkg_dir" && git rev-parse --show-toplevel 2>/dev/null)" || repo_root=""
    if [ -n "$repo_root" ] && [ -d "$repo_root/node_modules" ]; then
        export NODE_PATH="${repo_root}/node_modules${NODE_PATH:+:$NODE_PATH}"
        export PATH="${repo_root}/node_modules/.bin:$PATH"
        log_info "Using shared deps: $repo_root/node_modules"
        return 0
    fi

    # 3. Auto-install in package dir
    if command -v npm >/dev/null 2>&1 && [ -f "$pkg_dir/package.json" ]; then
        log_info "Installing dependencies in $pkg_dir..."
        (cd "$pkg_dir" && npm install --no-fund --no-audit 2>&1 | tail -3)
        if [ -d "$pkg_dir/node_modules" ]; then
            return 0
        fi
    fi

    log_error "Dependencies not resolved for $pkg_dir"
    return 1
}

build() {
    log_info "Building ${PROJECT_NAME} for production..."
    resolve_deps
    cd "$PROJECT_DIR"
    npm run build 2>&1 || { log_error "Build failed"; return 1; }

    if [ -f "$PROJECT_DIR/dist/index.html" ]; then
        SIZE=$(du -h "$PROJECT_DIR/dist/index.html" | cut -f1)
        log_info "Build successful! Output: dist/index.html (${SIZE})"
    else
        log_error "Build output not found"
        return 1
    fi
}

dev() {
    log_info "Starting ${PROJECT_NAME} dev server on port ${PORT}..."
    resolve_deps
    cd "$PROJECT_DIR"
    npm run dev -- --port "$PORT" 2>&1
}

clean() {
    log_info "Cleaning build artifacts..."
    rm -rf "$PROJECT_DIR/dist" "$PROJECT_DIR/node_modules/.vite"
    log_info "Clean complete"
}

case "${1:-build}" in
    build) build ;;
    dev) dev ;;
    clean) clean ;;
    *) echo "Usage: $0 {build|dev|clean}"; exit 1 ;;
esac
