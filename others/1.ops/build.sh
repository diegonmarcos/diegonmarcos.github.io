#!/bin/sh
#=====================================
# OTHERS BUILD SCRIPT
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
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="Others"
PORT="8008"

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
    printf "  ${GREEN}build${NC}        # Generate index.html from HTML files\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start npm-live server :${PORT}\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s  %s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server" "Watch"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}  ${YELLOW}%s${NC}\n" "Others" "-" "Vanilla" "Vanilla" "npm-live :${PORT}" "-"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Build action
build() {
    log_info "Building ${PROJECT_NAME} index.html..."
    cd "$PROJECT_DIR"

    # Check if Python is available
    if ! command -v python3 >/dev/null 2>&1; then
        log_error "python3 is required but not installed"
        return 1
    fi

    # Run the Python script to generate index.html
    python3 build_index.py

    log_success "index.html generated successfully"
}

# Start development server
dev() {
    log_info "Starting development server..."

    cd "$PROJECT_DIR"

    if command -v live-server >/dev/null 2>&1; then
        log_success "Server starting at http://localhost:${PORT}/"
        log_info "Press Ctrl+C to stop"
        printf "\n"
        live-server --port="${PORT}" --no-browser
    elif command -v npx >/dev/null 2>&1; then
        log_success "Server starting at http://localhost:${PORT}/"
        log_info "Press Ctrl+C to stop"
        printf "\n"
        npx live-server --port="${PORT}" --no-browser
    else
        log_warning "live-server not found, using Python http.server"
        log_success "Server starting at http://localhost:${PORT}/"
        python3 -m http.server "$PORT"
    fi
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."

    find "$PROJECT_DIR" -name "*.tmp" -delete 2>/dev/null || true
    find "$PROJECT_DIR" -name ".DS_Store" -delete 2>/dev/null || true

    log_success "Clean completed (index.html will be regenerated on build)"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
