#!/bin/bash

# Standard Project Structure Creator
# Creates standardized folder structure for projects

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ ${NC}$1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Function to create directory if it doesn't exist
create_dir() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        print_success "Created: $dir"
    else
        print_warning "Already exists: $dir"
    fi
}

# Function to create README if it doesn't exist
create_readme() {
    local dir="$1"
    local title="$2"
    local description="$3"
    local readme="$dir/README.md"

    if [ ! -f "$readme" ]; then
        cat > "$readme" << EOF
# $title

$description

## Contents

- Purpose and overview
- Documentation links
- Key files and their purposes

---

Created: $(date +%Y-%m-%d)
EOF
        print_success "Created: $readme"
    else
        print_warning "Already exists: $readme"
    fi
}

# Main function
main() {
    local project_dir="${1:-.}"

    print_info "Creating standard project structure in: $project_dir"
    echo ""

    # Navigate to project directory
    cd "$project_dir" || exit 1

    # Create core folders
    print_info "Creating core folders..."
    create_dir "src"
    create_dir "dist"
    create_dir "spec"
    create_dir "ops"
    create_dir "assets"

    # Create optional folders
    print_info "Creating optional folders..."
    create_dir "analytics"
    create_dir "public"

    # Create subdirectories in src/
    print_info "Creating src/ subdirectories..."
    create_dir "src/components"
    create_dir "src/views"
    create_dir "src/styles"
    create_dir "src/utils"
    create_dir "src/types"

    # Create subdirectories in spec/
    print_info "Creating spec/ subdirectories..."
    create_dir "spec/archive"

    # Create subdirectories in ops/
    print_info "Creating ops/ subdirectories..."
    create_dir "ops/logs"
    create_dir "ops/scripts"

    # Create subdirectories in assets/
    print_info "Creating assets/ subdirectories..."
    create_dir "assets/images"
    create_dir "assets/fonts"
    create_dir "assets/icons"
    create_dir "assets/data"

    # Create README files
    echo ""
    print_info "Creating README files..."
    create_readme "spec" "Specifications" "Project specifications, architecture documentation, and technical requirements."
    create_readme "ops" "Operations" "Build scripts, deployment configurations, and operational documentation."
    create_readme "assets" "Assets" "Static assets including images, fonts, icons, and data files."

    # Create .gitkeep files for empty directories
    echo ""
    print_info "Creating .gitkeep files..."
    for dir in dist/assets ops/logs assets/images assets/fonts assets/icons assets/data; do
        if [ -d "$dir" ] && [ -z "$(ls -A $dir)" ]; then
            touch "$dir/.gitkeep"
            print_success "Created .gitkeep in: $dir"
        fi
    done

    echo ""
    print_success "Standard project structure created successfully!"
    echo ""
    print_info "Structure:"
    tree -L 2 -I 'node_modules|.git' . 2>/dev/null || find . -maxdepth 2 -type d | grep -v node_modules | grep -v .git | sort
}

# Show usage if -h or --help
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    cat << EOF
Usage: $0 [PROJECT_DIRECTORY]

Creates a standardized folder structure for web projects.

Arguments:
  PROJECT_DIRECTORY    Path to project (default: current directory)

Options:
  -h, --help          Show this help message

Example:
  $0                  # Create structure in current directory
  $0 my-new-project   # Create structure in my-new-project/

Folders created:
  src/          - Source code
  dist/         - Build output
  spec/         - Specifications
  ops/          - Operations & scripts
  assets/       - Static assets
  analytics/    - Analytics (optional)
  public/       - Public files (optional)

See PROJECT_STRUCTURE.md for full documentation.
EOF
    exit 0
fi

# Run main function
main "$@"
