#!/usr/bin/env bash

#=====================================
# MAIN BUILD ORCHESTRATOR
#=====================================
# This script orchestrates builds for all sub-projects
# and replicates the GitHub Actions workflow locally.
#
# Usage: ./1.ops/build_main.sh <action> [options]
#
# NOTE: This script requires bash. Do not run with 'sh' or 'dash'.

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project root directory - more robust detection
if [ -n "${BASH_SOURCE[0]}" ]; then
    # When run with bash
    PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
else
    # Fallback for other shells or when sourced
    PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fi

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
    printf "${BLUE}═══════════════════════════════════════════════════════════════════════════${NC}\n"
    printf "${CYAN}                        MAIN BUILD ORCHESTRATOR                            ${NC}\n"
    printf "${BLUE}═══════════════════════════════════════════════════════════════════════════${NC}\n"
    printf "\n"
    printf "${YELLOW}USAGE:${NC}\n"
    printf "  ./1.ops/build_main.sh <action> [options]\n"
    printf "\n"
    printf "${YELLOW}BUILD ACTIONS:${NC}\n"
    printf "  ${GREEN}build${NC}              Build all projects\n"
    printf "  ${GREEN}build-root${NC}         Build root (Sass + TypeScript)\n"
    printf "  ${GREEN}build-linktree${NC}     Build linktree (static HTML/CSS/JS)\n"
    printf "  ${GREEN}build-cv-web${NC}       Build cv_web (Sass only)\n"
    printf "  ${GREEN}build-myfeed${NC}       Build MyFeed (Vue 3 + Vite)\n"
    printf "  ${GREEN}build-myprofile${NC}    Build MyProfile (SvelteKit)\n"
    printf "  ${GREEN}build-nexus${NC}      Build Nexus (Vue 3 + Tailwind)\n"
    printf "\n"
    printf "${YELLOW}DEVELOPMENT ACTIONS:${NC}\n"
    printf "  ${GREEN}dev${NC}                Start all dev servers (quiet mode)\n"
    printf "  ${GREEN}dev-root${NC}           Start root Sass + TypeScript watch\n"
    printf "  ${GREEN}dev-linktree${NC}       Start linktree HTTP server\n"
    printf "  ${GREEN}dev-cv-web${NC}         Start cv_web Sass watch\n"
    printf "  ${GREEN}dev-myfeed${NC}         Start MyFeed dev server\n"
    printf "  ${GREEN}dev-myprofile${NC}      Start MyProfile dev server\n"
    printf "  ${GREEN}dev-nexus${NC}        Start Nexus dev server\n"
    printf "\n"
    printf "${YELLOW}UTILITY ACTIONS:${NC}\n"
    printf "  ${GREEN}kill${NC}               Kill all running dev servers\n"
    printf "  ${GREEN}clean${NC}              Clean all build artifacts\n"
    printf "  ${GREEN}clean-all${NC}          Clean build artifacts + node_modules\n"
    printf "  ${GREEN}test${NC}               Run all tests\n"
    printf "  ${GREEN}help${NC}               Show this help message\n"
    printf "\n"
    printf "${YELLOW}OPTIONS:${NC}\n"
    printf "  ${GREEN}-v, --verbose${NC}      Show all output (useful for debugging)\n"
    printf "  ${GREEN}-f, --force${NC}        Force rebuild (clean before build)\n"
    printf "\n"
    printf "${YELLOW}EXAMPLES:${NC}\n"
    printf "  ${BLUE}./1.ops/build_main.sh build${NC}                 # Build all projects\n"
    printf "  ${BLUE}./1.ops/build_main.sh dev${NC}                   # Start all dev servers (quiet)\n"
    printf "  ${BLUE}./1.ops/build_main.sh dev --verbose${NC}         # Start all dev servers (verbose)\n"
    printf "  ${BLUE}./1.ops/build_main.sh kill${NC}                  # Stop all running servers\n"
    printf "  ${BLUE}./1.ops/build_main.sh build --force${NC}         # Clean + build all\n"
    printf "  ${BLUE}./1.ops/build_main.sh build-myprofile${NC}       # Build only MyProfile\n"
    printf "\n"
    printf "${YELLOW}PROJECT STRUCTURE & TECH STACK:${NC}\n"
    printf "${BLUE}═══════════════════════════════════════════════════════════════════════════${NC}\n"
    printf "  ${MAGENTA}%-15s  %-18s  %-17s  %s${NC}\n" "Project" "CSS" "JavaScript" "Framework"
    printf "${BLUE}───────────────────────────────────────────────────────────────────────────${NC}\n"
    printf "  ${CYAN}%-15s${NC}  %-18s  %-17s  ${GREEN}%s${NC}\n" "Root" "Sass" "TypeScript" "—"
    printf "  ${CYAN}%-15s${NC}  %-18s  %-17s  ${GREEN}%s${NC}\n" "Linktree" "Vanilla CSS" "Vanilla JS" "—"
    printf "  ${CYAN}%-15s${NC}  %-18s  %-17s  ${GREEN}%s${NC}\n" "CV Web" "Sass" "—" "—"
    printf "  ${CYAN}%-15s${NC}  %-18s  %-17s  ${GREEN}%s${NC}\n" "MyFeed" "Sass" "TypeScript" "Vue 3"
    printf "  ${CYAN}%-15s${NC}  %-18s  %-17s  ${GREEN}%s${NC}\n" "MyProfile" "Sass" "TypeScript" "SvelteKit"
    printf "  ${CYAN}%-15s${NC}  %-18s  %-17s  ${GREEN}%s${NC}\n" "Nexus" "Tailwind CSS" "TypeScript" "Vue 3"
    printf "${BLUE}═══════════════════════════════════════════════════════════════════════════${NC}\n"
    printf "\n"
    printf "${YELLOW}DEV SERVER URLS:${NC}\n"
    printf "  Run '${GREEN}bash 1.ops/build_main.sh dev${NC}' to see all server URLs\n"
    printf "\n"
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

    # Build root Sass
    log_info "Building root Sass..."
    if [ -d "$PROJECT_ROOT/3.sass" ]; then
        (cd "$PROJECT_ROOT/3.sass" && npm install > /dev/null 2>&1 && npm run sass:build) || ((failed++))
    fi

    # Build root TypeScript
    log_info "Building root TypeScript..."
    if [ -d "$PROJECT_ROOT/4.ts" ]; then
        (cd "$PROJECT_ROOT/4.ts" && npm install > /dev/null 2>&1 && npm run ts:build) || ((failed++))
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
    local verbose=${1:-false}

    log_section "Starting All Development Servers"

    log_warning "This will start multiple development servers concurrently."
    echo ""

    # Redirect output unless verbose mode
    local output_redirect=""
    if [ "$verbose" = false ]; then
        output_redirect="> /dev/null 2>&1"
    fi

    # Use tmux or screen if available, otherwise warn
    if command -v tmux &> /dev/null; then
        log_info "Starting servers in tmux sessions..."

        tmux new-session -d -s build-root-sass "cd $PROJECT_ROOT/3.sass && npm install && npm run sass:watch"
        tmux new-session -d -s build-root-ts "cd $PROJECT_ROOT/4.ts && npm install && npm run ts:watch"
        tmux new-session -d -s build-linktree "cd $PROJECT_ROOT/linktree/1.ops && bash build.sh dev"
        tmux new-session -d -s build-cv-web "cd $PROJECT_ROOT/cv_web/3.sass && npm install && npm run sass:watch"
        tmux new-session -d -s build-myfeed "cd $PROJECT_ROOT/myfeed/1.ops && bash build.sh dev"
        tmux new-session -d -s build-myprofile "cd $PROJECT_ROOT/myprofile/1.1.ops && bash build.sh dev"
        tmux new-session -d -s build-nexus "cd $PROJECT_ROOT/nexus/1.ops && bash build.sh dev"

        log_success "All servers started in tmux sessions!"
        echo ""
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${CYAN}📡 Development Servers Running:${NC}"
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${BLUE}  🌐 Root (Landing):${NC}      http://localhost:8000/ ${YELLOW}(Sass watch active, TS watch active)${NC}"
        echo -e "${BLUE}  🔗 Linktree:${NC}            http://localhost:8000/linktree/"
        echo -e "${BLUE}  📄 CV Web (Portfolio):${NC}  http://localhost:8000/cv_web/ ${YELLOW}(Sass watch active)${NC}"
        echo -e "${BLUE}  📰 MyFeed:${NC}              http://localhost:3000/myfeed/"
        echo -e "${BLUE}  👤 MyProfile:${NC}           http://localhost:5173/"
        echo -e "${BLUE}  🏢 Nexus:${NC}             http://localhost:3001/nexus/"
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo ""
        log_info "Tmux Sessions: build-root-sass, build-root-ts, build-linktree, build-cv-web, build-myfeed, build-myprofile, build-nexus"
        log_info "To view logs: tmux attach -t <session-name>"
        log_info "To kill all servers: bash $PROJECT_ROOT/1.ops/build_main.sh kill"
        echo ""
        log_success "Returning to prompt. Dev servers are running in background."

    else
        log_warning "tmux not found. Starting servers in background..."
        log_info "Install tmux for better session management: sudo apt-get install tmux"
        echo ""

        # Create log directory
        mkdir -p "$PROJECT_ROOT/1.ops/logs"

        # Start root Sass watch in background
        log_info "Starting root Sass..."
        (cd "$PROJECT_ROOT/3.sass" && if [ "$verbose" = false ]; then
            nohup npm install > /dev/null 2>&1 &
            nohup npm run sass:watch > "$PROJECT_ROOT/3.sass/logs/sass-dev.log" 2>&1 &
        else
            npm install
            npm run sass:watch &
        fi)

        # Start root TypeScript watch in background
        log_info "Starting root TypeScript..."
        (cd "$PROJECT_ROOT/4.ts" && if [ "$verbose" = false ]; then
            nohup npm install > /dev/null 2>&1 &
            nohup npm run ts:watch > "$PROJECT_ROOT/4.ts/logs/ts-dev.log" 2>&1 &
        else
            npm install
            npm run ts:watch &
        fi)

        # Start others in background with logs
        log_info "Starting linktree..."
        if [ "$verbose" = false ]; then
            nohup bash "$PROJECT_ROOT/linktree/1.ops/build.sh" dev > "$PROJECT_ROOT/1.ops/logs/linktree-dev.log" 2>&1 &
        else
            bash "$PROJECT_ROOT/linktree/1.ops/build.sh" dev &
        fi

        log_info "Starting cv_web Sass..."
        if [ "$verbose" = false ]; then
            (cd "$PROJECT_ROOT/cv_web/3.sass" && nohup npm install > /dev/null 2>&1 & nohup npm run sass:watch > "$PROJECT_ROOT/cv_web/3.sass/logs/sass-dev.log" 2>&1 &)
        else
            (cd "$PROJECT_ROOT/cv_web/3.sass" && npm install && npm run sass:watch &)
        fi

        log_info "Starting myfeed..."
        if [ "$verbose" = false ]; then
            nohup bash "$PROJECT_ROOT/myfeed/1.ops/build.sh" dev > "$PROJECT_ROOT/1.ops/logs/myfeed-dev.log" 2>&1 &
        else
            bash "$PROJECT_ROOT/myfeed/1.ops/build.sh" dev &
        fi

        log_info "Starting myprofile..."
        if [ "$verbose" = false ]; then
            nohup bash "$PROJECT_ROOT/myprofile/1.1.ops/build.sh" dev > "$PROJECT_ROOT/1.ops/logs/myprofile-dev.log" 2>&1 &
        else
            bash "$PROJECT_ROOT/myprofile/1.1.ops/build.sh" dev &
        fi

        log_info "Starting nexus..."
        if [ "$verbose" = false ]; then
            nohup bash "$PROJECT_ROOT/nexus/1.ops/build.sh" dev > "$PROJECT_ROOT/1.ops/logs/nexus-dev.log" 2>&1 &
        else
            bash "$PROJECT_ROOT/nexus/1.ops/build.sh" dev &
        fi

        sleep 3  # Give servers time to start

        log_success "All servers started in background!"
        echo ""
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${CYAN}📡 Development Servers Running:${NC}"
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${BLUE}  🌐 Root (Landing):${NC}      http://localhost:8000/ ${YELLOW}(Sass watch active)${NC}"
        echo -e "${BLUE}  🔗 Linktree:${NC}            http://localhost:8000/linktree/"
        echo -e "${BLUE}  📄 CV Web (Portfolio):${NC}  http://localhost:8000/cv_web/ ${YELLOW}(Sass watch active)${NC}"
        echo -e "${BLUE}  📰 MyFeed:${NC}              http://localhost:3000/myfeed/"
        echo -e "${BLUE}  👤 MyProfile:${NC}           http://localhost:5173/"
        echo -e "${BLUE}  🏢 Nexus:${NC}             http://localhost:3001/nexus/"
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo ""
        log_info "Logs: $PROJECT_ROOT/1.ops/logs/<project>-dev.log"
        log_info "View logs: tail -f $PROJECT_ROOT/1.ops/logs/<project>-dev.log"
        log_info "Kill servers: bash $PROJECT_ROOT/1.ops/build_main.sh kill"
        echo ""
        log_success "Returning to prompt. Dev servers are running in background."
    fi
}

# Kill all running dev servers
kill_servers() {
    log_section "Killing All Development Servers"

    local killed=0

    # Kill tmux sessions if they exist
    if command -v tmux &> /dev/null; then
        for session in build-root build-linktree build-cv-web build-myfeed build-myprofile build-nexus; do
            if tmux has-session -t "$session" 2>/dev/null; then
                log_info "Killing tmux session: $session"
                tmux kill-session -t "$session" 2>/dev/null && ((killed++)) || true
            fi
        done
    fi

    # Kill Python HTTP servers (linktree and potentially others on port 8000/8001)
    local python_pids=$(pgrep -f "python3.*http.server" || true)
    if [ -n "$python_pids" ]; then
        log_info "Killing Python HTTP servers..."
        echo "$python_pids" | xargs kill -15 2>/dev/null && killed=$((killed + $(echo "$python_pids" | wc -w))) || true
        sleep 1
        python_pids=$(pgrep -f "python3.*http.server" || true)
        if [ -n "$python_pids" ]; then
            echo "$python_pids" | xargs kill -9 2>/dev/null || true
        fi
    fi

    # Kill Vite dev servers (myfeed and myprofile)
    local vite_pids=$(pgrep -f "node.*vite" || true)
    if [ -n "$vite_pids" ]; then
        log_info "Killing Vite dev servers..."
        echo "$vite_pids" | xargs kill -15 2>/dev/null && killed=$((killed + $(echo "$vite_pids" | wc -w))) || true
        sleep 1
        vite_pids=$(pgrep -f "node.*vite" || true)
        if [ -n "$vite_pids" ]; then
            echo "$vite_pids" | xargs kill -9 2>/dev/null || true
        fi
    fi

    # Kill concurrently processes (root watch:all)
    local concurrently_pids=$(pgrep -f "node.*concurrently" || true)
    if [ -n "$concurrently_pids" ]; then
        log_info "Killing concurrently processes..."
        echo "$concurrently_pids" | xargs kill -15 2>/dev/null && killed=$((killed + $(echo "$concurrently_pids" | wc -w))) || true
        sleep 1
        concurrently_pids=$(pgrep -f "node.*concurrently" || true)
        if [ -n "$concurrently_pids" ]; then
            echo "$concurrently_pids" | xargs kill -9 2>/dev/null || true
        fi
    fi

    # Kill npm run processes (sass:watch, ts:watch, etc.)
    local npm_pids=$(pgrep -f "npm run" || true)
    if [ -n "$npm_pids" ]; then
        log_info "Killing npm processes..."
        echo "$npm_pids" | xargs kill -15 2>/dev/null && killed=$((killed + $(echo "$npm_pids" | wc -w))) || true
        sleep 1
        npm_pids=$(pgrep -f "npm run" || true)
        if [ -n "$npm_pids" ]; then
            echo "$npm_pids" | xargs kill -9 2>/dev/null || true
        fi
    fi

    # Kill Sass watch processes
    local sass_pids=$(pgrep -f "sass.*--watch" || true)
    if [ -n "$sass_pids" ]; then
        log_info "Killing Sass watch processes..."
        echo "$sass_pids" | xargs kill -15 2>/dev/null && killed=$((killed + $(echo "$sass_pids" | wc -w))) || true
        sleep 1
        sass_pids=$(pgrep -f "sass.*--watch" || true)
        if [ -n "$sass_pids" ]; then
            echo "$sass_pids" | xargs kill -9 2>/dev/null || true
        fi
    fi

    # Kill TypeScript watch processes
    local tsc_pids=$(pgrep -f "tsc.*--watch" || true)
    if [ -n "$tsc_pids" ]; then
        log_info "Killing TypeScript watch processes..."
        echo "$tsc_pids" | xargs kill -15 2>/dev/null && killed=$((killed + $(echo "$tsc_pids" | wc -w))) || true
        sleep 1
        tsc_pids=$(pgrep -f "tsc.*--watch" || true)
        if [ -n "$tsc_pids" ]; then
            echo "$tsc_pids" | xargs kill -9 2>/dev/null || true
        fi
    fi

    if [ $killed -gt 0 ]; then
        log_success "Killed $killed process(es)"
    else
        log_warning "No running dev servers found"
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
            log_section "Building Root Sass"
            (cd "$PROJECT_ROOT/3.sass" && npm install && npm run sass:build)
            log_section "Building Root TypeScript"
            (cd "$PROJECT_ROOT/4.ts" && npm install && npm run ts:build)
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
        build-nexus)
            execute_build "nexus" "build"
            ;;
        dev)
            dev_all $verbose
            ;;
        dev-root)
            log_section "Starting Root Sass Development"
            (cd "$PROJECT_ROOT/3.sass" && npm install && npm run sass:watch) &
            log_section "Starting Root TypeScript Development"
            (cd "$PROJECT_ROOT/4.ts" && npm install && npm run ts:watch) &
            log_success "Root development servers started"
            ;;
        dev-linktree)
            execute_build "linktree" "dev"
            ;;
        dev-cv-web)
            log_section "Starting cv_web Sass Development"
            (cd "$PROJECT_ROOT/cv_web/3.sass" && npm install && npm run sass:watch)
            log_success "cv_web Sass development server started"
            ;;
        dev-myfeed)
            execute_build "myfeed" "dev"
            ;;
        dev-myprofile)
            execute_build "myprofile" "dev"
            ;;
        dev-nexus)
            execute_build "nexus" "dev"
            ;;
        kill)
            kill_servers
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
