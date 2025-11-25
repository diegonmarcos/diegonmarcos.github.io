#!/bin/sh
# POSIX-compliant build script for cloud dashboard
# Usage: ./build.sh [dev|build|clean|help]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project paths
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST_DIR="${PROJECT_ROOT}/dist"
SCSS_DIR="${PROJECT_ROOT}/src_static/scss"
TS_DIR="${PROJECT_ROOT}/src_static/typescript"

# Print colored messages
print_info() {
    printf "${BLUE}[INFO]${NC} %s\n" "$1"
}

print_success() {
    printf "${GREEN}[SUCCESS]${NC} %s\n" "$1"
}

print_error() {
    printf "${RED}[ERROR]${NC} %s\n" "$1" >&2
}

print_warning() {
    printf "${YELLOW}[WARNING]${NC} %s\n" "$1"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check dependencies
check_dependencies() {
    print_info "Checking dependencies..."

    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi

    if [ ! -d "${PROJECT_ROOT}/node_modules" ]; then
        print_warning "node_modules not found. Running npm install..."
        cd "${PROJECT_ROOT}"
        npm install
    fi

    print_success "All dependencies are available"
}

# Create dist directory if it doesn't exist
ensure_dist() {
    if [ ! -d "${DIST_DIR}" ]; then
        print_info "Creating dist directory..."
        mkdir -p "${DIST_DIR}"
    fi
}

# Build SCSS to CSS
build_scss() {
    print_info "Building SCSS..."
    cd "${PROJECT_ROOT}"

    if [ "$1" = "dev" ]; then
        npm run build:css -- --style=expanded --source-map
    else
        npm run build:css
    fi

    print_success "SCSS compiled successfully"
}

# Build TypeScript to JavaScript
build_typescript() {
    print_info "Building TypeScript..."
    cd "${PROJECT_ROOT}"

    if [ "$1" = "dev" ]; then
        npm run build:js -- --sourcemap
    else
        npm run build:js
    fi

    print_success "TypeScript compiled successfully"
}

# Clean build artifacts
clean_build() {
    print_info "Cleaning build artifacts..."

    if [ -d "${DIST_DIR}" ]; then
        rm -f "${DIST_DIR}/styles.css"
        rm -f "${DIST_DIR}/styles.css.map"
        rm -f "${DIST_DIR}/script.js"
        rm -f "${DIST_DIR}/script.js.map"
        print_success "Build artifacts cleaned"
    else
        print_warning "Dist directory doesn't exist, nothing to clean"
    fi
}

# Full build
build_all() {
    MODE="${1:-prod}"
    print_info "Starting ${MODE} build..."

    check_dependencies
    ensure_dist
    build_scss "$MODE"
    build_typescript "$MODE"

    print_success "Build completed successfully!"
    print_info "Output directory: ${DIST_DIR}"
}

# Development mode with watch
dev_mode() {
    print_info "Starting development mode with watch..."

    check_dependencies
    ensure_dist

    cd "${PROJECT_ROOT}"
    npm run dev
}

# Show help
show_help() {
    cat << EOF
Cloud Dashboard Build Script
Usage: ./build.sh [COMMAND]

Commands:
  build       Build for production (minified, no source maps)
  dev         Start development mode with watch
  clean       Clean build artifacts
  help        Show this help message

Examples:
  ./build.sh build    # Production build
  ./build.sh dev      # Development mode
  ./build.sh clean    # Clean build files

EOF
}

# Main script logic
main() {
    case "${1:-build}" in
        build)
            build_all "prod"
            ;;
        dev)
            dev_mode
            ;;
        clean)
            clean_build
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function
main "$@"
