#!/bin/bash

# Create Symlinks Script
# Creates all symlinks in 1.ops/CI/ pointing to root configuration files

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

# Function to create symlink
create_symlink() {
    local target="$1"
    local link_name="$2"

    # Check if target exists
    if [ ! -e "$target" ] && [ ! -L "$target" ]; then
        print_warning "Target does not exist: $target (skipping)"
        return 1
    fi

    # Remove existing symlink if it exists
    if [ -L "$link_name" ]; then
        rm "$link_name"
        print_info "Removed old symlink: $link_name"
    fi

    # Create symlink
    ln -s "$target" "$link_name"

    # Verify symlink
    if [ -L "$link_name" ]; then
        print_success "Created: $link_name → $target"
        return 0
    else
        print_error "Failed to create: $link_name"
        return 1
    fi
}

# Main function
main() {
    local project_dir="${1:-.}"

    print_info "Creating symlinks in: $project_dir/1.ops/CI/"
    echo ""

    # Navigate to project directory
    cd "$project_dir" || exit 1

    # Create 1.ops/CI directory if it doesn't exist
    if [ ! -d "1.ops/CI" ]; then
        print_info "Creating 1.ops/CI/ directory..."
        mkdir -p "1.ops/CI"
        print_success "Created 1.ops/CI/"
        echo ""
    fi

    # Navigate to CI directory
    cd "1.ops/CI" || exit 1

    print_info "Creating symlinks..."
    echo ""

    # Count successes
    local success_count=0
    local skip_count=0

    # Configuration files
    print_info "Configuration files:"
    create_symlink "../../package.json" "package.json" && ((success_count++)) || ((skip_count++))
    create_symlink "../../package-lock.json" "package-lock.json" && ((success_count++)) || ((skip_count++))
    create_symlink "../../tsconfig.json" "tsconfig.json" && ((success_count++)) || ((skip_count++))

    echo ""

    # Build tool configs
    print_info "Build tool configurations:"
    create_symlink "../../vite.config.ts" "vite.config.ts" && ((success_count++)) || ((skip_count++))
    create_symlink "../../vite.config.js" "vite.config.js" && ((success_count++)) || ((skip_count++))
    create_symlink "../../svelte.config.js" "svelte.config.js" && ((success_count++)) || ((skip_count++))
    create_symlink "../../tailwind.config.js" "tailwind.config.js" && ((success_count++)) || ((skip_count++))
    create_symlink "../../tailwind.config.ts" "tailwind.config.ts" && ((success_count++)) || ((skip_count++))
    create_symlink "../../postcss.config.js" "postcss.config.js" && ((success_count++)) || ((skip_count++))

    echo ""

    # Build scripts
    print_info "Build scripts:"
    create_symlink "../../build.js" "build.js" && ((success_count++)) || ((skip_count++))

    echo ""

    # CI/CD
    print_info "CI/CD workflows:"
    create_symlink "../../.github/workflows/deploy.yml" "deploy.yml" && ((success_count++)) || ((skip_count++))

    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    print_success "Symlink creation complete!"
    echo ""
    echo "Summary:"
    echo "  Created: $success_count symlinks"
    echo "  Skipped: $skip_count (files not found)"
    echo ""

    # Verify symlinks
    print_info "Verifying symlinks..."
    cd ../..

    if ls -la 1.ops/CI/ | grep -q "^l"; then
        print_success "Symlinks verified successfully"
        echo ""
        echo "Symlinks in 1.ops/CI/:"
        ls -la 1.ops/CI/ | grep "^l" | awk '{print "  →", $9, $10, $11}'
    else
        print_warning "No symlinks found in 1.ops/CI/"
    fi
}

# Show usage if -h or --help
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    cat << EOF
Usage: $0 [PROJECT_DIRECTORY]

Creates symlinks in 1.ops/CI/ pointing to root configuration files.

Arguments:
  PROJECT_DIRECTORY    Path to project (default: current directory)

Options:
  -h, --help          Show this help message

Example:
  $0                  # Create symlinks in current project
  $0 ../nexus         # Create symlinks in nexus project

Symlinks created:
  1.ops/CI/package.json → ../../package.json
  1.ops/CI/build.js → ../../build.js
  1.ops/CI/vite.config.ts → ../../vite.config.ts
  1.ops/CI/deploy.yml → ../../.github/workflows/deploy.yml
  ... and more

Note: Only creates symlinks for files that exist.
EOF
    exit 0
fi

# Enable symlinks in Git (for current repo)
print_info "Configuring Git to handle symlinks..."
git config core.symlinks true 2>/dev/null && print_success "Git configured" || print_warning "Could not configure Git (may need to run in git repo)"
echo ""

# Run main function
main "$@"
