#!/bin/bash
# ============================================
# MyTrips Build Script
# ============================================

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT" || exit 1

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Function to kill process on port
kill_port() {
    local port=$1
    if check_port $port; then
        log_warning "Port $port is in use. Killing process..."
        lsof -ti:$port | xargs kill -9 2>/dev/null
        sleep 1
    fi
}

# Build for production
build() {
    log_info "Building MyTrips for production..."

    # Install dependencies (required for CI)
    log_info "Installing dependencies..."
    npm install

    # Backup ONLY Cultural Regions Map (D3 version) - Vue handles main app
    log_info "Backing up Cultural Regions Map..."
    if [ -f "dist/myroadtrip.html" ]; then
        cp dist/myroadtrip.html dist/myroadtrip.html.bak
    fi

    # Run Vue build (creates main app with Home/Timeline/Stats/Atlas/Collections)
    npm run build
    if [ $? -eq 0 ]; then
        log_success "Vue build completed!"

        # Restore the working Cultural Regions Map (D3 version - too complex for Vue)
        if [ -f "dist/myroadtrip.html.bak" ]; then
            log_info "Restoring Cultural Regions Map (D3 version)..."
            mv dist/myroadtrip.html.bak dist/myroadtrip.html
        fi

        log_success "Build completed!"
        log_info "Main app: Vue version (Home, Timeline, Stats, Atlas, Collections)"
        log_info "Cultural Regions Map: D3 version (preserved)"
    else
        log_error "Build failed!"
        [ -f "dist/myroadtrip.html.bak" ] && mv dist/myroadtrip.html.bak dist/myroadtrip.html
        exit 1
    fi
}

# Start dev server
dev() {
    log_info "Starting MyTrips dev server on port 8018..."

    # Check if port is in use
    kill_port 8018

    # Start dev server
    npm run dev
}

# Watch mode (alias for dev)
watch() {
    dev
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."
    rm -rf dist node_modules/.vite
    log_success "Clean completed!"
}

# Install dependencies
install() {
    log_info "Installing dependencies..."
    npm install
    log_success "Dependencies installed!"
}

# Show help
help() {
    cat << EOF
MyTrips Build Script

Usage: ./1.ops/build.sh [command]

Commands:
    build       Build for production
    dev         Start development server (port 8018)
    watch       Alias for dev
    clean       Clean build artifacts
    install     Install dependencies
    help        Show this help message

Examples:
    ./1.ops/build.sh build
    ./1.ops/build.sh dev
    ./1.ops/build.sh clean
EOF
}

# Main command router
case "${1:-help}" in
    build)
        build
        ;;
    dev)
        dev
        ;;
    watch)
        watch
        ;;
    clean)
        clean
        ;;
    install)
        install
        ;;
    help|--help|-h)
        help
        ;;
    *)
        log_error "Unknown command: $1"
        help
        exit 1
        ;;
esac
