#!/usr/bin/env bash

#=====================================
# OTHERS BUILD SCRIPT
#=====================================
# Generates index.html by scanning all HTML files in the directory

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
        log_info "Building others index.html..."
        cd "$PROJECT_ROOT"

        # Check if Python is available
        if ! command -v python3 &> /dev/null; then
            echo "Error: python3 is required but not installed"
            exit 1
        fi

        # Run the Python script to generate index.html
        python3 build_index.py

        log_success "others index.html generated successfully!"
        ;;

    dev)
        log_info "Starting others dev server..."
        log_info "Serving at http://localhost:8004/"
        cd "$PROJECT_ROOT"
        python3 -m http.server 8004
        ;;

    clean)
        log_info "Cleaning others..."
        # We keep index.html as it's tracked, but could regenerate it
        log_success "Clean complete (index.html will be regenerated on build)"
        ;;

    *)
        echo "Usage: $0 {build|dev|clean}"
        exit 1
        ;;
esac
