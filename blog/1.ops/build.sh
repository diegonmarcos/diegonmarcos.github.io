#!/bin/sh

# Jekyll management script (POSIX sh)
# Handles building and serving the Jekyll blog
# This script runs from blog/1.ops/ directory

show_help() {
    cat << EOF
Usage: ./build.sh [COMMAND]

Commands:
    build       Convert markdown to HTML (output in 4.jenkyls/_site/)
    serve       Run local development server at http://localhost:4000
    help        Show this help message

Examples:
    ./build.sh build    # Build the site
    ./build.sh serve    # Run development server
    ./build.sh          # Show help

Note: This script must be run from the blog/1.ops/ directory

EOF
}

build_site() {
    # Change to blog root directory (parent of 1.ops)
    cd "$(dirname "$0")/.." || exit 1

    echo "Building Jekyll site with new folder structure..."
    echo "Working directory: $(pwd)"
    echo ""

    # Build Jekyll with config from 4.jenkyls/ and output to 4.jenkyls/_site/
    jekyll build \
        --config "4.jenkyls/_config.yml" \
        --layouts "4.jenkyls/_layouts" \
        --destination "4.jenkyls/_site"

    echo ""
    echo "Copying HTML files to blog root (side-by-side with markdown)..."

    # Copy all HTML files from 4.jenkyls/_site to blog root directory
    find "4.jenkyls/_site" -name "*.html" -type f | while read -r file; do
        # Get relative path from 4.jenkyls/_site
        rel_path="${file#4.jenkyls/_site/}"
        # Copy to blog root, preserving structure
        target_dir="$(dirname "$rel_path")"
        [ "$target_dir" != "." ] && mkdir -p "$target_dir"
        cp -v "$file" "$rel_path"
    done

    echo ""
    echo "Build complete! HTML files generated alongside markdown files"
    echo "Jekyll build output: 4.jenkyls/_site/"
}

serve_site() {
    # Change to blog root directory (parent of 1.ops)
    cd "$(dirname "$0")/.." || exit 1

    echo "Starting Jekyll development server..."
    echo "Using config from: 4.jenkyls/_config.yml"
    echo "Using layouts from: 4.jenkyls/_layouts/"
    echo "The blog will be available at: http://localhost:4000"
    echo "Press Ctrl+C to stop the server"
    echo ""

    jekyll serve \
        --config "4.jenkyls/_config.yml" \
        --layouts "4.jenkyls/_layouts" \
        --destination "4.jenkyls/_site" \
        --livereload
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
