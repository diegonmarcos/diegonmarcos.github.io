#!/bin/sh
# =============================================================================
# Build Script for CV_WEB
# =============================================================================
# POSIX-compliant shell script for Sass compilation in the cv_web directory.
#
# Usage:
#   ./build.sh [command]
#
# Commands:
#   build   - Compile Sass to compressed CSS (production)
#   dev     - Compile Sass to expanded CSS (development)
#   watch   - Watch for changes and auto-compile
#   help    - Show this help message
#
# Examples:
#   ./build.sh build    # Build for production
#   ./build.sh watch    # Watch for changes
#   ./build.sh dev      # Build for development
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
    printf "${PURPLE}  CV_WEB Sass Builder${NC}\n"
    printf "${PURPLE}================================${NC}\n\n"
}

print_help() {
    print_header
    cat << 'EOF'
Usage: ./build.sh [command]

Commands:
  build   - Compile Sass to compressed CSS (production)
  dev     - Compile Sass to expanded CSS (development)
  watch   - Watch for changes and auto-compile
  help    - Show this help message

Examples:
  ./build.sh build    # Build for production
  ./build.sh watch    # Watch for changes
  ./build.sh dev      # Build for development

Notes:
  - Run 'npm install' before first use.
  - Watch mode runs until you press Ctrl+C.
EOF
}

check_dependencies() {
    if [ ! -f "package.json" ]; then
        printf "${RED}✗ Error: package.json not found.${NC}\n"
        return 1
    fi

    if [ ! -d "node_modules" ]; then
        printf "${YELLOW}⚠ Warning: node_modules not found.${NC}\n"
        printf "${CYAN}→ Installing dependencies...${NC}\n"
        npm install
    fi

    return 0
}

build_sass() {
    style="$1"  # "compressed" or "expanded"
    src="scss/main.scss"
    out="style.css"

    printf "${CYAN}→ Building Sass ($style)...${NC}\n"

    if [ ! -f "$src" ]; then
        printf "${RED}✗ Error: Source file not found: $src${NC}\n"
        return 1
    fi

    npx sass "$src:$out" --style="$style" --no-source-map

    if [ $? -eq 0 ]; then
        size=$(du -h "$out" | cut -f1)
        printf "${GREEN}✓ Successfully compiled: $out ($size)${NC}\n\n"
    else
        printf "${RED}✗ Compilation failed.${NC}\n\n"
        return 1
    fi
}

watch_sass() {
    src="scss/main.scss"
    out="style.css"

    printf "${CYAN}→ Watching Sass for changes...${NC}\n"
    printf "${YELLOW}  Press Ctrl+C to stop${NC}\n\n"

    npx sass --watch "$src:$out"
}

# ==============================================================================
# Main Script
# ==============================================================================

# Parse arguments
COMMAND="${1:-help}"

# Show header
print_header

# Handle help command
if [ "$COMMAND" = "help" ] || [ "$COMMAND" = "-h" ] || [ "$COMMAND" = "--help" ]; then
    print_help
    exit 0
fi

# Validate command
case "$COMMAND" in
    build|dev|watch)
        ;;
    *)
        printf "${RED}✗ Error: Unknown command \'%s\'${NC}\n"
        printf "Run './build.sh help' for usage information\n"
        exit 1
        ;;
esac

# Determine style based on command
if [ "$COMMAND" = "build" ]; then
    STYLE="compressed"
    MODE="Production"
elif [ "$COMMAND" = "dev" ]; then
    STYLE="expanded"
    MODE="Development"
fi

# Execute command
check_dependencies || exit 1

if [ "$COMMAND" = "watch" ]; then
    watch_sass
else
    printf "${BLUE}Building in $MODE mode...${NC}\n\n"
    build_sass "$STYLE"
fi

exit 0
