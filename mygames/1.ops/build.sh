#!/bin/sh
#=====================================
# MYPROFILE BUILD SCRIPT
#=====================================
# POSIX-compliant build script
# Usage: ./1.ops/build.sh [action]

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
PROJECT_DIR="$(cd "$(dirname "$0")/../src" && pwd)"
PROJECT_NAME="MyProfile"
PORT="8004"
BUILD_DIR="$PROJECT_DIR/build"

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
    printf "${YELLOW}USAGE:${NC}  ./1.ops/build.sh [action]\n"
    printf "\n"
    printf "${YELLOW}BUILD:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build for production (static adapter)\n"
    printf "  ${GREEN}lint${NC}         # Lint Svelte/JS/TS files\n"
    printf "  ${GREEN}check${NC}        # Run svelte-check for type checking\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start Vite dev server :${PORT}\n"
    printf "  ${GREEN}preview${NC}      # Preview production build\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}format${NC}       # Format code with Prettier\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  ${GREEN}%-10s${NC}  %-10s  %-10s  ${CYAN}%-14s${NC}  ${YELLOW}%s${NC}\n" "MyProfile" "SvelteKit" "CSS" "TypeScript" "Vite :${PORT}" "HMR"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Check dependencies
check_dependencies() {
    if [ -d "$PROJECT_DIR/node_modules" ]; then
        return 0
    fi
    log_info "Installing dependencies..."
    cd "$PROJECT_DIR"
    npm install
}

# Build for production
build() {
    log_info "Building ${PROJECT_NAME} for production..."
    check_dependencies
    cd "$PROJECT_DIR"

    npm run build 2>&1 || {
        log_error "Build failed"
        return 1
    }

    if [ -d "$BUILD_DIR" ]; then
        log_success "Build completed → $BUILD_DIR"
        log_info "Build size:"
        du -sh "$BUILD_DIR"
    else
        log_error "Build directory not created"
        return 1
    fi
}

# Development server
dev() {
    check_dependencies
    cd "$PROJECT_DIR"

    # Start Vite in background
    nohup npm run dev > /dev/null 2>&1 &

    # Print URL and return control
    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Preview production build
preview() {
    log_info "Starting preview server..."

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

    if grep -q "lint" package.json 2>/dev/null; then
        npm run lint || log_warning "Linting completed with warnings"
    else
        log_warning "No lint script found in package.json"
    fi
}

# Format code
format() {
    log_info "Formatting code..."
    check_dependencies
    cd "$PROJECT_DIR"

    if grep -q "format" package.json 2>/dev/null; then
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

    if grep -q "check" package.json 2>/dev/null; then
        npm run check
        log_success "Type checking completed"
    else
        log_warning "No check script found in package.json"
    fi
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        preview)    preview ;;
        clean)      clean ;;
        lint)       lint ;;
        format)     format ;;
        check)      check_types ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
