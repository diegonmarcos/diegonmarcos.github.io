#!/bin/sh
# JSON Vision Build Script
# POSIX-compliant build script for JSON Vision

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="JSON Vision"
PORT="8016"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { printf "${GREEN}[INFO]${NC} %s\n" "$1"; }
log_warn() { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }
log_error() { printf "${RED}[ERROR]${NC} %s\n" "$1"; }

check_dependencies() {
    log_info "Checking dependencies..."
    if [ ! -d "$PROJECT_DIR/node_modules" ]; then
        log_warn "node_modules not found, installing..."
        cd "$PROJECT_DIR"
        npm install 2>&1 || { log_error "npm install failed"; return 1; }
    fi
}

build() {
    log_info "Building ${PROJECT_NAME} for production..."
    check_dependencies
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
    check_dependencies
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
