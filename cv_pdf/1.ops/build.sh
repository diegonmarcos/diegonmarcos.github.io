#!/bin/sh
#=====================================
# CV_PDF BUILD SCRIPT
#=====================================
# POSIX-compliant build script
# Usage: ./1.ops/build.sh [action]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m'

# Project paths
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="CV PDF"
PORT="8012"
DIST_DIR="$PROJECT_DIR/dist"

# Logging
log_info() { printf "${BLUE}[INFO]${NC} %s\n" "$1"; }
log_success() { printf "${GREEN}[OK]${NC} %s\n" "$1"; }
log_error() { printf "${RED}[ERROR]${NC} %s\n" "$1" >&2; }
log_warning() { printf "${YELLOW}[WARN]${NC} %s\n" "$1"; }

# Help menu
print_usage() {
    printf "${BLUE}===========================================================================${NC}\n"
    printf "${CYAN}  ${PROJECT_NAME} Build Script${NC}\n"
    printf "${BLUE}===========================================================================${NC}\n"
    printf "\n"
    printf "${YELLOW}USAGE:${NC}  ./1.ops/build.sh [action]\n"
    printf "\n"
    printf "${YELLOW}BUILD:${NC}\n"
    printf "  ${GREEN}build${NC}        # Build for production (copy to dist)\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER:${NC}\n"
    printf "  ${GREEN}dev${NC}          # Start live-server :${PORT}\n"
    printf "\n"
    printf "${YELLOW}UTILITY:${NC}\n"
    printf "  ${GREEN}clean${NC}        # Clean build artifacts\n"
    printf "  ${GREEN}help${NC}         # Show this help\n"
    printf "\n"
    printf "${YELLOW}PROJECT INFO:${NC}\n"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${MAGENTA}%-12s  %-10s  %-10s  %-10s  %-14s${NC}\n" "Project" "Framework" "CSS" "JavaScript" "Dev Server"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "  ${CYAN}%-12s${NC}  %-10s  %-10s  %-10s  ${GREEN}%-14s${NC}\n" "CV PDF" "Vanilla" "Tailwind" "-" "live :${PORT}"
    printf "${BLUE}---------------------------------------------------------------------------${NC}\n"
    printf "\n"
}

# Build for production
build() {
    log_info "Building ${PROJECT_NAME}..."

    # Create dist directory
    mkdir -p "$DIST_DIR"

    # Copy assets if they exist (PDF, DOCX, etc.)
    if [ -d "$PROJECT_DIR/assets" ]; then
        cp -r "$PROJECT_DIR/assets" "$DIST_DIR/"
    fi

    # Copy matomo.js from public if exists
    if [ -f "$PROJECT_DIR/public/matomo.js" ]; then
        cp "$PROJECT_DIR/public/matomo.js" "$DIST_DIR/"
    fi

    # Build single-file HTML with embedded PDF
    log_info "Building single-file HTML with embedded PDF..."

    PDF_FILE="$PROJECT_DIR/assets/DiegoNMarcos_CurriculumVitae_en.pdf"
    if [ -f "$PDF_FILE" ]; then
        # Base64 encode the PDF to a temp file
        base64 -w 0 "$PDF_FILE" > "$DIST_DIR/pdf_base64.tmp"

        # Use awk to replace the PDF URL with data URI
        awk -v pdf_file="$DIST_DIR/pdf_base64.tmp" '
        {
            if (index($0, "const url = '\''./assets/DiegoNMarcos_CurriculumVitae_en.pdf'\'';") > 0) {
                # Read base64 content
                getline pdf_base64 < pdf_file
                close(pdf_file)
                print "        const url = '\''data:application/pdf;base64," pdf_base64 "'\'';"
            } else {
                print $0
            }
        }' "$PROJECT_DIR/src_static/index.html" > "$DIST_DIR/index.html"

        rm -f "$DIST_DIR/pdf_base64.tmp"
        log_success "PDF embedded in index.html"
    else
        log_warning "PDF file not found, copying index.html as-is"
        cp "$PROJECT_DIR/src_static/index.html" "$DIST_DIR/index.html"
    fi

    log_success "Build completed → $DIST_DIR"
}

# Development server
dev() {
    cd "$PROJECT_DIR"

    # Start live-server in background
    if command -v npx >/dev/null 2>&1; then
        nohup npx live-server --port=$PORT --no-browser > /dev/null 2>&1 &
    else
        nohup python3 -m http.server $PORT > /dev/null 2>&1 &
    fi

    printf "\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${CYAN}${PROJECT_NAME} Dev Server STARTED${NC}\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}URL:${NC}  ${BLUE}http://localhost:${PORT}/${NC}\n"
    printf "${GREEN}|${NC}  ${YELLOW}Stop:${NC} ./1.ops/build_main.sh kill\n"
    printf "${GREEN}+----------------------------------------------------------+${NC}\n"
    printf "\n"
}

# Clean build artifacts
clean() {
    log_info "Cleaning build artifacts..."
    rm -rf "$DIST_DIR"
    log_success "Clean completed"
}

# Main
main() {
    _action="${1:-help}"

    case "$_action" in
        build)      build ;;
        dev)        dev ;;
        clean)      clean ;;
        help|-h|--help) print_usage ;;
        *)          print_usage ;;
    esac
}

main "$@"
