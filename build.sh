#!/bin/sh
# ==============================================================================
# Build Script for Portfolio Website
# ==============================================================================
# POSIX-compliant shell script for Sass compilation
# Handles both root and cv_web directories
#
# Usage:
#   ./build.sh [command] [target]
#
# Commands:
#   build   - Compile Sass to compressed CSS (production)
#   dev     - Compile Sass to expanded CSS (development)
#   watch   - Watch for changes and auto-compile
#   all     - Build both root and cv_web
#   help    - Show this help message
#
# Targets:
#   root    - Build root directory only (default)
#   cv_web  - Build cv_web directory only
#   all     - Build both directories
#
# Examples:
#   ./build.sh build          # Build root (production)
#   ./build.sh watch          # Watch root for changes
#   ./build.sh build cv_web   # Build cv_web only
#   ./build.sh build all      # Build both directories
# ==============================================================================

set -e  # Exit on error

# Colors for output (POSIX compatible)
if [ -t 1 ]; then
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    BLUE='\033[0;34m'
    PURPLE='\033[0;35m'
    CYAN='\033[0;36m'
    NC='\033[0m' # No Color
else
    RED=''
    GREEN=''
    YELLOW=''
    BLUE=''
    PURPLE=''
    CYAN=''
    NC=''
fi

# ==============================================================================
# Functions
# ==============================================================================

print_header() {
    printf "${PURPLE}================================${NC}\n"
    printf "${PURPLE}  Portfolio Website Builder${NC}\n"
    printf "${PURPLE}================================${NC}\n\n"
}

print_help() {
    print_header
    cat << 'EOF'
Usage: ./build.sh [command] [target]

Commands:
  build   - Compile Sass to compressed CSS (production)
  dev     - Compile Sass to expanded CSS (development)
  watch   - Watch for changes and auto-compile
  all     - Build both root and cv_web
  help    - Show this help message

Targets:
  root    - Build root directory only (default)
  cv_web  - Build cv_web directory only
  all     - Build both directories

Examples:
  ./build.sh build          # Build root (production)
  ./build.sh watch          # Watch root for changes
  ./build.sh build cv_web   # Build cv_web only
  ./build.sh build all      # Build both directories
  ./build.sh dev all        # Dev build for both

Notes:
  - Run 'npm install' in root and cv_web before first use
  - Watch mode runs until you press Ctrl+C
  - Production builds are minified, dev builds are readable
EOF
}

check_dependencies() {
    target_dir="$1"

    if [ ! -f "$target_dir/package.json" ]; then
        printf "${RED}✗ Error: package.json not found in $target_dir${NC}\n"
        return 1
    fi

    if [ ! -d "$target_dir/node_modules" ]; then
        printf "${YELLOW}⚠ Warning: node_modules not found in $target_dir${NC}\n"
        printf "${CYAN}→ Installing dependencies...${NC}\n"
        cd "$target_dir"
        npm install
        cd - > /dev/null
    fi

    return 0
}

build_sass() {
    target_dir="$1"
    style="$2"  # "compressed" or "expanded"

    printf "${CYAN}→ Building Sass in $target_dir ($style)...${NC}\n"

    # Determine source and output based on directory
    if [ "$target_dir" = "." ]; then
        src="sass/style.scss"
        out="style.css"
        dir_name="root"
    else
        src="$target_dir/scss/main.scss"
        out="$target_dir/style.css"
        dir_name="$target_dir"
    fi

    # Check if source file exists
    if [ ! -f "$src" ]; then
        printf "${RED}✗ Error: Source file not found: $src${NC}\n"
        return 1
    fi

    # Run Sass compiler
    if [ "$target_dir" = "." ]; then
        npx sass "$src:$out" --style="$style" --no-source-map
    else
        cd "$target_dir"
        npx sass "scss/main.scss:style.css" --style="$style" --no-source-map
        cd - > /dev/null
    fi

    if [ $? -eq 0 ]; then
        size=$(du -h "$out" | cut -f1)
        printf "${GREEN}✓ Successfully compiled: $out ($size)${NC}\n\n"
    else
        printf "${RED}✗ Compilation failed for $dir_name${NC}\n\n"
        return 1
    fi
}

watch_sass() {
    target_dir="$1"

    printf "${CYAN}→ Watching Sass in $target_dir for changes...${NC}\n"
    printf "${YELLOW}  Press Ctrl+C to stop${NC}\n\n"

    # Determine source and output based on directory
    if [ "$target_dir" = "." ]; then
        src="sass/style.scss"
        out="style.css"
    else
        cd "$target_dir"
        src="scss/main.scss"
        out="style.css"
    fi

    # Run Sass in watch mode
    npx sass --watch "$src:$out"
}

# ==============================================================================
# Main Script
# ==============================================================================

# Parse arguments
COMMAND="${1:-help}"
TARGET="${2:-root}"

# Show header
print_header

# Handle help command
if [ "$COMMAND" = "help" ] || [ "$COMMAND" = "-h" ] || [ "$COMMAND" = "--help" ]; then
    print_help
    exit 0
fi

# Validate command
case "$COMMAND" in
    build|dev|watch|all)
        ;;
    *)
        printf "${RED}✗ Error: Unknown command '$COMMAND'${NC}\n"
        printf "Run './build.sh help' for usage information\n"
        exit 1
        ;;
esac

# Handle special cases
if [ "$COMMAND" = "all" ]; then
    TARGET="all"
    COMMAND="build"
fi

# Determine style based on command
if [ "$COMMAND" = "build" ]; then
    STYLE="compressed"
    MODE="Production"
elif [ "$COMMAND" = "dev" ]; then
    STYLE="expanded"
    MODE="Development"
fi

# Execute based on target
case "$TARGET" in
    root)
        printf "${BLUE}Building root directory in $MODE mode...${NC}\n\n"
        check_dependencies "." || exit 1

        if [ "$COMMAND" = "watch" ]; then
            watch_sass "."
        else
            build_sass "." "$STYLE"
        fi
        ;;

    cv_web)
        printf "${BLUE}Building cv_web directory in $MODE mode...${NC}\n\n"
        check_dependencies "cv_web" || exit 1

        if [ "$COMMAND" = "watch" ]; then
            watch_sass "cv_web"
        else
            build_sass "cv_web" "$STYLE"
        fi
        ;;

    all)
        printf "${BLUE}Building both directories in $MODE mode...${NC}\n\n"

        # Check dependencies for both
        check_dependencies "." || exit 1
        check_dependencies "cv_web" || exit 1

        if [ "$COMMAND" = "watch" ]; then
            printf "${YELLOW}⚠ Note: Watch mode only supports one directory at a time${NC}\n"
            printf "${CYAN}→ Watching root directory...${NC}\n\n"
            watch_sass "."
        else
            # Build root
            printf "${PURPLE}[1/2] Root Directory${NC}\n"
            build_sass "." "$STYLE"

            # Build cv_web
            printf "${PURPLE}[2/2] cv_web Directory${NC}\n"
            build_sass "cv_web" "$STYLE"

            printf "${GREEN}✓ All builds completed successfully!${NC}\n"
        fi
        ;;

    *)
        printf "${RED}✗ Error: Unknown target '$TARGET'${NC}\n"
        printf "Valid targets: root, cv_web, all\n"
        exit 1
        ;;
esac

exit 0
