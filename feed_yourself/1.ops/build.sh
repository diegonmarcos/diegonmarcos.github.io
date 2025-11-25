#!/usr/bin/env bash

#=====================================
# FEED YOURSELF BUILD SCRIPT
#=====================================
# This is a simple build script that copies the standalone HTML file
# to the dist directory for deployment.

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root directory
if [ -n "${BASH_SOURCE[0]}" ]; then
    PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
else
    PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fi

ACTION=${1:-build}

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

case $ACTION in
    build)
        log_info "Building feed_yourself..."
        mkdir -p "$PROJECT_ROOT/dist"

        # Copy the main HTML file from src_static
        if [ -f "$PROJECT_ROOT/src_static/feed_yourself.html" ]; then
            cp "$PROJECT_ROOT/src_static/feed_yourself.html" "$PROJECT_ROOT/dist/index.html"
            log_success "Copied feed_yourself.html to dist/index.html"
        else
            echo "Error: src_static/feed_yourself.html not found"
            exit 1
        fi

        # Copy public assets if they exist
        if [ -d "$PROJECT_ROOT/public" ]; then
            cp -r "$PROJECT_ROOT/public/"* "$PROJECT_ROOT/dist/" 2>/dev/null || true
            log_success "Copied public assets to dist/"
        fi

        log_success "feed_yourself build complete!"
        ;;

    dev)
        log_info "Starting feed_yourself dev server..."
        log_info "Serving at http://localhost:8003/"
        cd "$PROJECT_ROOT"
        python3 -m http.server 8003
        ;;

    clean)
        log_info "Cleaning feed_yourself dist..."
        rm -rf "$PROJECT_ROOT/dist"
        log_success "Clean complete"
        ;;

    *)
        echo "Usage: $0 {build|dev|clean}"
        exit 1
        ;;
esac
