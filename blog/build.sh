#!/bin/sh

# Jekyll management script (POSIX sh)
# Handles building and serving the Jekyll blog

show_help() {
    cat << EOF
Usage: ./build.sh [COMMAND]

Commands:
    build       Convert markdown to HTML (output in _site/)
    serve       Run local development server at http://localhost:4000
    help        Show this help message

Examples:
    ./build.sh build    # Build the site
    ./build.sh serve    # Run development server
    ./build.sh          # Show help

EOF
}

build_site() {
    echo "Building Jekyll site..."
    echo ""
    jekyll build
    echo ""
    echo "Build complete! HTML files are in the _site/ directory"
}

serve_site() {
    echo "Starting Jekyll development server..."
    echo "The blog will be available at: http://localhost:4000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    jekyll serve --livereload
}

# Main script logic
case "${1:-}" in
    build)
        build_site
        ;;
    serve)
        serve_site
        ;;
    help)
        show_help
        ;;
    *)
        show_help
        exit 0
        ;;
esac
