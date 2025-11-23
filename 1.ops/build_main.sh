#!/bin/bash

#=====================================
# MAIN BUILD ORCHESTRATOR
#=====================================
# This script orchestrates builds for all sub-projects
# and replicates the GitHub Actions workflow locally.
#
# Usage: ./1.ops/build_main.sh <action> [options]
#

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Banner function
print_banner() {
    echo -e "${CYAN}"
    echo "====================================="
    echo "  MAIN BUILD ORCHESTRATOR"
    echo "====================================="
    echo -e "${NC}"
}

# Usage information
print_usage() {
    cat << EOF
${BLUE}Usage:${NC} ./1.ops/build_main.sh <action> [options]

${YELLOW}Actions:${NC}
  build              - Build all projects
  build-root         - Build root Sass + TypeScript
  build-linktree     - Build linktree (static)
  build-cv-web       - Build cv_web (Sass)
  build-myfeed       - Build MyFeed (Vue 3 + Vite)
  build-myprofile    - Build MyProfile (SvelteKit)
  dev                - Start all development servers
  dev-root           - Start root Sass + TS watch
  dev-linktree       - Start linktree live server
  dev-myfeed         - Start MyFeed dev server
  dev-myprofile      - Start MyProfile dev server
  clean              - Clean all build artifacts
  clean-all          - Clean all build artifacts + node_modules
  test               - Run all tests
  help, -h, --help   - Show this help message

${YELLOW}Options:${NC}
  --verbose, -v      - Verbose output
  --force, -f        - Force rebuild (clean before build)

${YELLOW}Examples:${NC}
  ./1.ops/build_main.sh build                 # Build all projects
  ./1.ops/build_main.sh build-myprofile       # Build only MyProfile
  ./1.ops/build_main.sh dev                   # Start all dev servers
  ./1.ops/build_main.sh build --force         # Clean and build all
  ./1.ops/build_main.sh clean                 # Clean build artifacts

${YELLOW}Project Structure:${NC}
  Root (Sass + TypeScript)
  ├── linktree/        (Static HTML/CSS/JS)
  ├── cv_web/          (Sass)
  ├── myfeed/          (Vue 3 + Vite)
  └── myprofile/       (SvelteKit)

EOF
}

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_section() {
    echo -e "\n${MAGENTA}========================================${NC}"
    echo -e "${MAGENTA}  $1${NC}"
    echo -e "${MAGENTA}========================================${NC}\n"
}

# Check if build.sh exists in a directory
check_build_script() {
    local dir=$1
    local build_script="$PROJECT_ROOT/$dir/1.ops/build.sh"

    if [ -f "$build_script" ]; then
        return 0
    else
        return 1
    fi
}

# Execute build script
execute_build() {
    local project=$1
    local action=$2
    local build_script="$PROJECT_ROOT/$project/1.ops/build.sh"

    # Special case for myprofile which uses 1.1.ops
    if [ "$project" = "myprofile" ]; then
        build_script="$PROJECT_ROOT/$project/1.1.ops/build.sh"
    fi

    log_section "Building: $project"

    if [ -f "$build_script" ]; then
        log_info "Executing: $build_script $action"
        if bash "$build_script" "$action"; then
            log_success "$project build completed"
            return 0
        else
            log_error "$project build failed"
            return 1
        fi
    else
        log_warning "Build script not found: $build_script"
        return 1
    fi
}

# Build all projects
build_all() {
    local force=${1:-false}

    log_section "Building All Projects"

    if [ "$force" = true ]; then
        log_info "Force rebuild enabled - cleaning first..."
        clean_all_builds
    fi

    local failed=0

    # Build root (Sass + TypeScript)
    log_info "Building root Sass + TypeScript..."
    if [ -d "$PROJECT_ROOT/1.ops" ]; then
        cd "$PROJECT_ROOT/1.ops"
        npm install > /dev/null 2>&1 || true
        npm run build || ((failed++))
    fi

    # Build each sub-project
    execute_build "linktree" "build" || ((failed++))
    execute_build "cv_web" "build" || ((failed++))
    execute_build "myfeed" "build" || ((failed++))
    execute_build "myprofile" "build" || ((failed++))

    if [ $failed -eq 0 ]; then
        log_success "All builds completed successfully!"
        return 0
    else
        log_error "$failed build(s) failed"
        return 1
    fi
}

# Clean build artifacts
clean_all_builds() {
    log_section "Cleaning Build Artifacts"

    # Clean root
    log_info "Cleaning root build artifacts..."
    rm -rf "$PROJECT_ROOT/style.css" "$PROJECT_ROOT/style.css.map"
    rm -rf "$PROJECT_ROOT/script.js" "$PROJECT_ROOT/script.js.map"

    # Clean sub-projects
    execute_build "linktree" "clean" || true
    execute_build "cv_web" "clean" || true
    execute_build "myfeed" "clean" || true
    execute_build "myprofile" "clean" || true

    log_success "All build artifacts cleaned"
}

# Deep clean (including node_modules)
clean_deep() {
    log_section "Deep Cleaning (including node_modules)"

    clean_all_builds

    log_info "Removing node_modules..."
    find "$PROJECT_ROOT" -name "node_modules" -type d -prune -exec rm -rf {} + 2>/dev/null || true
    find "$PROJECT_ROOT" -name "package-lock.json" -type f -delete 2>/dev/null || true

    log_success "Deep clean completed"
}

# Start development servers
dev_all() {
    log_section "Starting All Development Servers"

    log_warning "This will start multiple development servers concurrently."
    log_warning "Press Ctrl+C to stop all servers."
    echo ""

    # Use tmux or screen if available, otherwise warn
    if command -v tmux &> /dev/null; then
        log_info "Starting servers in tmux sessions..."

        tmux new-session -d -s build-root "cd $PROJECT_ROOT/1.ops && npm run watch:all"
        tmux new-session -d -s build-linktree "cd $PROJECT_ROOT/linktree/1.ops && bash build.sh dev"
        tmux new-session -d -s build-myfeed "cd $PROJECT_ROOT/myfeed/1.ops && bash build.sh dev"
        tmux new-session -d -s build-myprofile "cd $PROJECT_ROOT/myprofile/1.1.ops && bash build.sh dev"

        log_success "All servers started in tmux sessions!"
        echo ""
        log_info "To attach to a session: tmux attach -t <session-name>"
        log_info "Sessions: build-root, build-linktree, build-myfeed, build-myprofile"
        log_info "To kill all sessions: tmux kill-session -a"

    else
        log_warning "tmux not found. Starting servers sequentially (Ctrl+C to stop)..."
        log_info "Install tmux for concurrent dev servers: sudo apt-get install tmux"
        echo ""

        # Start root watch in background
        cd "$PROJECT_ROOT/1.ops"
        npm run watch:all &

        # Start others
        execute_build "linktree" "dev" &
        execute_build "myfeed" "dev" &
        execute_build "myprofile" "dev" &

        wait
    fi
}

# Run tests
run_tests() {
    log_section "Running Tests"

    local failed=0

    execute_build "myfeed" "test" || ((failed++))
    execute_build "myprofile" "test" || ((failed++))

    if [ $failed -eq 0 ]; then
        log_success "All tests passed!"
        return 0
    else
        log_error "$failed test suite(s) failed"
        return 1
    fi
}

# Main execution
main() {
    local action=${1:-help}
    local force=false
    local verbose=false

    # Parse options
    shift || true
    while [[ $# -gt 0 ]]; do
        case $1 in
            --force|-f)
                force=true
                shift
                ;;
            --verbose|-v)
                verbose=true
                set -x
                shift
                ;;
            *)
                log_error "Unknown option: $1"
                print_usage
                exit 1
                ;;
        esac
    done

    print_banner

    case $action in
        build)
            build_all $force
            ;;
        build-root)
            log_section "Building Root"
            cd "$PROJECT_ROOT/1.ops"
            npm install
            npm run build
            log_success "Root build completed"
            ;;
        build-linktree)
            execute_build "linktree" "build"
            ;;
        build-cv-web)
            execute_build "cv_web" "build"
            ;;
        build-myfeed)
            execute_build "myfeed" "build"
            ;;
        build-myprofile)
            execute_build "myprofile" "build"
            ;;
        dev)
            dev_all
            ;;
        dev-root)
            log_section "Starting Root Development"
            cd "$PROJECT_ROOT/1.ops"
            npm install
            npm run watch:all
            ;;
        dev-linktree)
            execute_build "linktree" "dev"
            ;;
        dev-myfeed)
            execute_build "myfeed" "dev"
            ;;
        dev-myprofile)
            execute_build "myprofile" "dev"
            ;;
        clean)
            clean_all_builds
            ;;
        clean-all)
            clean_deep
            ;;
        test)
            run_tests
            ;;
        help|-h|--help)
            print_usage
            ;;
        *)
            log_error "Unknown action: $action"
            echo ""
            print_usage
            exit 1
            ;;
    esac
}

# Run main function
main "$@"
