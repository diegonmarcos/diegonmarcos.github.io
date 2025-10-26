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
    echo "Copying HTML files to blog directory (side-by-side with markdown)..."

    # Copy all HTML files from _site to blog directory
    find _site -name "*.html" -type f | while read -r file; do
        # Get relative path from _site
        rel_path="${file#_site/}"
        # Copy to current directory, preserving structure
        target_dir="$(dirname "$rel_path")"
        [ "$target_dir" != "." ] && mkdir -p "$target_dir"
        cp -v "$file" "$rel_path"
    done

    echo ""
    echo "Build complete! HTML files generated alongside markdown files"
    echo "Jekyll build output: _site/"
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
