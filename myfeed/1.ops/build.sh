#!/bin/sh

# MyFeed Vue Build Script (POSIX sh)
# Handles building the Vue 3 application with Vite
# This script runs from myfeed/1.ops/ directory

show_help() {
    cat << EOF
Usage: ./build.sh [COMMAND]

Commands:
    build       Build Vue app for production (output in dist/)
    dev         Run development server with hot reload
    preview     Preview production build locally
    help        Show this help message

Examples:
    ./build.sh build    # Build for production
    ./build.sh dev      # Start dev server
    ./build.sh preview  # Preview production build
    ./build.sh          # Show help

Note: This script must be run from the myfeed/1.ops/ directory

EOF
}

build_site() {
    # Change to myfeed root directory (parent of 1.ops)
    cd "$(dirname "$0")/.." || exit 1

    echo "🔨 Building MyFeed Vue application..."
    echo "Working directory: $(pwd)"
    echo ""

    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
        echo ""
    fi

    # Build the Vue app
    echo "🚀 Running Vite build..."
    npm run build

    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Build complete!"
        echo "📂 Output directory: dist/"
        echo "📊 Build size:"
        du -sh dist/
    else
        echo ""
        echo "❌ Build failed!"
        exit 1
    fi
}

dev_server() {
    # Change to myfeed root directory (parent of 1.ops)
    cd "$(dirname "$0")/.." || exit 1

    echo "🚀 Starting MyFeed development server..."
    echo "Working directory: $(pwd)"
    echo ""

    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
        echo ""
    fi

    echo "🌐 Development server will be available at: http://localhost:3000"
    echo "⚡ Hot Module Replacement (HMR) enabled"
    echo "Press Ctrl+C to stop the server"
    echo ""

    npm run dev
}

preview_build() {
    # Change to myfeed root directory (parent of 1.ops)
    cd "$(dirname "$0")/.." || exit 1

    echo "🔍 Previewing production build..."
    echo "Working directory: $(pwd)"
    echo ""

    # Check if dist exists
    if [ ! -d "dist" ]; then
        echo "⚠️  No build found. Building first..."
        build_site
        echo ""
    fi

    echo "🌐 Preview server will be available at: http://localhost:4173"
    echo "Press Ctrl+C to stop the server"
    echo ""

    npm run preview
}

# Main script logic
case "${1:-}" in
    build)
        build_site
        ;;
    dev)
        dev_server
        ;;
    preview)
        preview_build
        ;;
    help)
        show_help
        ;;
    *)
        show_help
        exit 0
        ;;
esac
