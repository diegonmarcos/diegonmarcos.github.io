#!/bin/bash
# Build script for Central Bank Modeling System (Tailwind version)
# Usage: ./build.sh [dev|watch|build]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

case "${1:-build}" in
    dev)
        echo "Starting development server (Tailwind)..."
        npm run dev
        ;;
    watch)
        echo "Starting development server with watch mode (Tailwind)..."
        npm run dev
        ;;
    build)
        echo "Building production bundle (Tailwind)..."
        npm run build
        echo "Build complete! Output in dist/"
        ;;
    *)
        echo "Usage: $0 [dev|watch|build]"
        echo "  dev    - Start development server"
        echo "  watch  - Start development server (alias for dev)"
        echo "  build  - Build production bundle (default)"
        exit 1
        ;;
esac
