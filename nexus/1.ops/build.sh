#!/usr/bin/env bash

#=====================================
# Nexus Holdings BUILD SCRIPT
#=====================================
# Nexus Holdings - Capital & Corporate Services
# Vue 3 + TypeScript + Tailwind CSS

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Project paths
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="$PROJECT_DIR/dist"

# Logging
log_info() { printf "${BLUE}[nexus]${NC} $1\n"; }
log_success() { printf "${GREEN}[nexus]${NC} ✓ $1\n"; }
log_error() { printf "${RED}[nexus]${NC} ✗ $1\n" >&2; }
log_warning() { printf "${YELLOW}[nexus]${NC} $1\n"; }

# Build function
build() {
    log_info "Building Nexus Holdings..."
    
    cd "$PROJECT_DIR"
    
    if [ ! -d "node_modules" ]; then
        log_warning "node_modules not found. Running npm install..."
        npm install
    fi
    
    log_info "Running production build..."
    npm run build
    
    log_success "Build completed! Output: $BUILD_DIR"
}

# Dev function
dev() {
    log_info "Starting Nexus Holdings development server..."
    
    cd "$PROJECT_DIR"
    
    if [ ! -d "node_modules" ]; then
        log_warning "node_modules not found. Running npm install..."
        npm install
    fi
    
    log_success "Development server starting..."
    log_info "Press Ctrl+C to stop"
    printf "\n"
    
    npm run dev
}

# Clean function
clean() {
    log_info "Cleaning build artifacts..."
    rm -rf "$BUILD_DIR"
    rm -rf "$PROJECT_DIR/node_modules/.vite"
    log_success "Clean completed"
}

# Main
case "${1:-help}" in
    build)
        build
        ;;
    dev)
        dev
        ;;
    clean)
        clean
        ;;
    *)
        cat << EOF
${CYAN}Nexus Holdings Build Script${NC}

${YELLOW}Usage:${NC} ./1.ops/build.sh <command>

${YELLOW}Commands:${NC}
  build    Build for production
  dev      Start development server
  clean    Clean build artifacts
  help     Show this help

${YELLOW}Tech Stack:${NC}
  Vue 3 + TypeScript + Tailwind CSS + Vite
  Port: 3001

EOF
        ;;
esac
