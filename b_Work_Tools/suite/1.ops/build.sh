#!/bin/sh
# Suite Build Script - Simple copy from src/ to dist/
# Usage: ./build.sh [build|clean|dev]

PROJECT_NAME="Suite"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { printf "${BLUE}[${PROJECT_NAME}]${NC} %s\n" "$1"; }
log_success() { printf "${GREEN}[${PROJECT_NAME}]${NC} %s\n" "$1"; }
log_error() { printf "${RED}[${PROJECT_NAME}]${NC} %s\n" "$1"; }

build() {
    log_info "Building ${PROJECT_NAME}..."

    # Create dist if not exists
    mkdir -p "${PROJECT_DIR}/dist"

    # Clean dist
    rm -rf "${PROJECT_DIR}/dist"/*

    # Copy src to dist
    cp -r "${PROJECT_DIR}/src"/* "${PROJECT_DIR}/dist/"

    log_success "Build complete: dist/"
}

clean() {
    log_info "Cleaning ${PROJECT_NAME}..."
    rm -rf "${PROJECT_DIR}/dist"/*
    log_success "Clean complete"
}

dev() {
    log_info "Starting dev server on :8021..."
    cd "${PROJECT_DIR}/src" && python3 -m http.server 8021
}

case "${1:-build}" in
    build) build ;;
    clean) clean ;;
    dev) dev ;;
    *) echo "Usage: $0 {build|clean|dev}"; exit 1 ;;
esac
