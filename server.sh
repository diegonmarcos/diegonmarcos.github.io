#!/bin/sh

# --- Configuration ---
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
CONFIG_FILE="$SCRIPT_DIR/server.json"
LOG_FILE="$SCRIPT_DIR/server.log"

# Defaults - use current working directory for portability (Termux/Desktop)
DEFAULT_PORT=8000
DEFAULT_MOUNT="$(pwd)"

# Live reload server preference (live-server > python fallback)
USE_LIVE_SERVER=true

# Dev mode tracking
LOG_RECEIVER_PID=""
CONSOLE_LOG_FILE="$SCRIPT_DIR/browser-console.log"

# Python helper to read/write JSON safely
py_read() {
    python3 -c "import json, sys; 
try: 
    data = json.load(open('$CONFIG_FILE'))
    print(data.get('$1', ''))
except: 
    print('')" 2>/dev/null
}

py_write() {
    # $1=key, $2=value (string), $3=is_number (bool)
    VAL="'$2'"
    if [ "$3" = "true" ]; then VAL="$2"; fi
    
    python3 -c "import json, os; 
try: 
    data = json.load(open('$CONFIG_FILE'))
except: 
    data = {}
data['$1'] = $VAL
print(json.dumps(data, indent=2))" > "${CONFIG_FILE}.tmp" && mv "${CONFIG_FILE}.tmp" "$CONFIG_FILE"
}

# Load Configuration
load_config() {
    if [ ! -f "$CONFIG_FILE" ]; then
        echo "{}" > "$CONFIG_FILE"
    fi
    PORT=$(py_read "port")
    MOUNT_DIR=$(py_read "mount_point")
    PID=$(py_read "pid")
    LOG_RECEIVER_PID=$(py_read "log_receiver_pid")

    if [ -z "$PORT" ]; then PORT=$DEFAULT_PORT; fi
    if [ -z "$MOUNT_DIR" ]; then MOUNT_DIR=$DEFAULT_MOUNT; fi
}

load_config

# --- Colors ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# --- Helper Functions ---

check_dependencies() {
    # Check basic dependencies (always needed)
    local missing_pkgs=""
    local needs_python=0
    local needs_coreutils=0
    local needs_socat=0
    local needs_awk=0

    if ! command -v python3 >/dev/null 2>&1; then
        needs_python=1
    fi

    # Check dev mode dependencies if requested
    if [ "$1" = "dev" ]; then
        if ! command -v socat >/dev/null 2>&1; then
            needs_socat=1
        fi
        if ! command -v tr >/dev/null 2>&1 || ! command -v cut >/dev/null 2>&1; then
            needs_coreutils=1
        fi
        if ! command -v awk >/dev/null 2>&1; then
            needs_awk=1
        fi
    fi

    # Build package list based on OS
    local is_termux=0
    local installer=""
    local install_cmd=""

    if [ "$(uname -o 2>/dev/null)" = "Android" ]; then
        is_termux=1
        installer="pkg"
        install_cmd="pkg install -y"
    elif [ -f /etc/alpine-release ]; then
        installer="apk"
        install_cmd="apk add --no-cache"
    else
        installer="apt"
        install_cmd="apt-get install -y"
    fi

    # Build package list
    [ $needs_python -eq 1 ] && missing_pkgs="${missing_pkgs} python3"
    [ $needs_socat -eq 1 ] && missing_pkgs="${missing_pkgs} socat"
    [ $needs_coreutils -eq 1 ] && missing_pkgs="${missing_pkgs} coreutils"
    [ $needs_awk -eq 1 ] && missing_pkgs="${missing_pkgs} gawk"

    if [ -n "$missing_pkgs" ]; then
        printf "${YELLOW}Missing dependencies:${NC}$missing_pkgs\n"
        printf "${CYAN}Installing...${NC}\n"

        if $install_cmd $missing_pkgs 2>&1; then
            printf "${GREEN}✓ Dependencies installed successfully${NC}\n"
            sleep 1
            return 0
        else
            printf "${RED}✗ Failed to install dependencies${NC}\n"
            printf "${YELLOW}Please install manually:${NC}\n"
            printf "  $install_cmd$missing_pkgs\n"
            return 1
        fi
    fi
    return 0
}

is_running() {
    # Check by saved PID first
    if [ -n "$PID" ] && [ "$PID" != "0" ] && kill -0 "$PID" 2>/dev/null; then
        return 0
    fi
    # Fallback: check if live-server is running on our port
    if pgrep -f "live-server.*--port=$PORT" > /dev/null 2>&1; then
        return 0
    fi
    # Fallback: check if python http.server is running on our port
    if pgrep -f "http.server.*$PORT" > /dev/null 2>&1; then
        return 0
    fi
    # Fallback: check if dev-server.sh is running
    if pgrep -f "dev-server.sh.*$PORT" > /dev/null 2>&1; then
        return 0
    fi
    return 1
}

is_log_receiver_running() {
    # Check if log receiver is running
    if [ -n "$LOG_RECEIVER_PID" ] && [ "$LOG_RECEIVER_PID" != "0" ] && kill -0 "$LOG_RECEIVER_PID" 2>/dev/null; then
        return 0
    fi
    # Fallback: check if log-receiver.sh is running
    if pgrep -f "log-receiver.sh" > /dev/null 2>&1; then
        return 0
    fi
    return 1
}

do_start() {
    if is_running; then
        echo "Server is already running (PID $PID)."
        return
    fi

    # Check dependencies
    if ! check_dependencies; then
        return 1
    fi

    if [ ! -d "$MOUNT_DIR" ]; then
        echo "Error: Mount point '$MOUNT_DIR' does not exist."
        return
    fi

    # Use a named pipe in /tmp to timestamp logs
    FIFO="/tmp/server_log_$$.fifo"
    rm -f "$FIFO"
    mkfifo "$FIFO"

    # Start the logger process in the background
    (
        trap "" HUP
        while IFS= read -r line; do
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] $line" >> "$LOG_FILE"
        done < "$FIFO"
        rm -f "$FIFO"
    ) > /dev/null 2>&1 &

    # Check if live-server is available and enabled
    if [ "$USE_LIVE_SERVER" = "true" ] && command -v live-server >/dev/null 2>&1; then
        echo "Starting live-server (auto-refresh) on port $PORT serving $MOUNT_DIR..."
        nohup live-server "$MOUNT_DIR" --port="$PORT" --no-browser --wait=100 > "$FIFO" 2>&1 &
    else
        echo "Starting Python server on port $PORT serving $MOUNT_DIR..."
        nohup python3 -u -m http.server "$PORT" --directory "$MOUNT_DIR" > "$FIFO" 2>&1 &
    fi

    SERVER_PID=$!

    # Wait for server to start
    sleep 2

    # For live-server, find the actual node process PID
    if [ "$USE_LIVE_SERVER" = "true" ] && command -v live-server >/dev/null 2>&1; then
        ACTUAL_PID=$(pgrep -f "live-server.*--port=$PORT" 2>/dev/null | head -1)
        if [ -n "$ACTUAL_PID" ]; then
            SERVER_PID="$ACTUAL_PID"
        fi
    fi

    # Save Config & PID to JSON
    py_write "port" "$PORT" true
    py_write "mount_point" "$MOUNT_DIR" false
    py_write "pid" "$SERVER_PID" true

    # Reload config to get the new PID
    load_config

    if is_running; then
        if [ "$USE_LIVE_SERVER" = "true" ] && command -v live-server >/dev/null 2>&1; then
            echo "Live server started (auto-refresh enabled). Logs: $LOG_FILE"
        else
            echo "Server started successfully. Logs: $LOG_FILE"
        fi
    else
        echo "Failed to start server. Check logs."
        rm -f "$FIFO"
        # Clear PID on failure
        py_write "pid" "0" true
    fi
}

do_stop() {
    STOPPED=false

    # Kill server processes (port 8000)
    if is_running; then
        # Try killing by saved PID
        if [ -n "$PID" ] && [ "$PID" != "0" ] && kill "$PID" 2>/dev/null; then
            STOPPED=true
        fi
        # Also kill any live-server on our port
        LIVE_PID=$(pgrep -f "live-server.*--port=$PORT" 2>/dev/null)
        if [ -n "$LIVE_PID" ]; then
            kill $LIVE_PID 2>/dev/null && STOPPED=true
        fi
        # Also kill any python http.server on our port
        PY_PID=$(pgrep -f "http.server.*$PORT" 2>/dev/null)
        if [ -n "$PY_PID" ]; then
            kill $PY_PID 2>/dev/null && STOPPED=true
        fi
        # Also kill dev-server.sh
        DEV_PID=$(pgrep -f "dev-server.sh" 2>/dev/null)
        if [ -n "$DEV_PID" ]; then
            kill $DEV_PID 2>/dev/null && STOPPED=true
        fi
        # Kill any socat on port 8000
        SOCAT_8000=$(pgrep -f "socat.*8000" 2>/dev/null)
        if [ -n "$SOCAT_8000" ]; then
            kill $SOCAT_8000 2>/dev/null && STOPPED=true
        fi
    fi

    # Kill log receiver processes (port 8001)
    if is_log_receiver_running; then
        if [ -n "$LOG_RECEIVER_PID" ] && [ "$LOG_RECEIVER_PID" != "0" ]; then
            kill "$LOG_RECEIVER_PID" 2>/dev/null && STOPPED=true
        fi
        # Kill any remaining log-receiver processes
        pkill -f "log-receiver.sh" 2>/dev/null && STOPPED=true
        # Kill any socat on port 19001
        SOCAT_8002=$(pgrep -f "socat.*19001" 2>/dev/null)
        if [ -n "$SOCAT_8002" ]; then
            kill $SOCAT_8002 2>/dev/null && STOPPED=true
        fi
    fi

    # Final cleanup - check both ports
    if [ "$STOPPED" = "true" ]; then
        echo "Server stopped (ports 8000 & 8002)."
    else
        echo "Server is not running."
    fi

    # Clear PIDs
    py_write "pid" "0" true
    py_write "log_receiver_pid" "0" true
}

do_start_dev() {
    if is_running; then
        echo "Server is already running (PID $PID)."
        return
    fi

    if [ ! -d "$MOUNT_DIR" ]; then
        echo "Error: Mount point '$MOUNT_DIR' does not exist."
        return
    fi

    # Check all dev mode dependencies
    if ! check_dependencies "dev"; then
        return 1
    fi

    printf "${CYAN}╔════════════════════════════════════════════╗${NC}\n"
    printf "${CYAN}║${NC}  ${BOLD}STARTING DEV MODE${NC}                      ${CYAN}║${NC}\n"
    printf "${CYAN}╚════════════════════════════════════════════╝${NC}\n"
    echo ""

    # Start log receiver
    printf "Starting JSON log receiver on port 19001... "
    "$SCRIPT_DIR/log-receiver.sh" > /dev/null 2>&1 &
    LOG_RECEIVER_PID=$!
    sleep 1

    if kill -0 "$LOG_RECEIVER_PID" 2>/dev/null; then
        printf "${GREEN}✓${NC}\n"
        py_write "log_receiver_pid" "$LOG_RECEIVER_PID" true
    else
        printf "${RED}✗${NC}\n"
        printf "${RED}Failed to start log receiver.${NC}\n"
        return
    fi

    # Start dev server with auto-injection
    printf "Starting dev server (auto-injection) on port $PORT... "
    nohup "$SCRIPT_DIR/dev-server.sh" "$PORT" "$MOUNT_DIR" > "$LOG_FILE" 2>&1 &
    SERVER_PID=$!
    sleep 2

    # Save config
    py_write "port" "$PORT" true
    py_write "mount_point" "$MOUNT_DIR" false
    py_write "pid" "$SERVER_PID" true

    # Reload config
    load_config

    if kill -0 "$SERVER_PID" 2>/dev/null; then
        printf "${GREEN}✓${NC}\n"
        echo ""
        printf "${CYAN}╔════════════════════════════════════════════╗${NC}\n"
        printf "${CYAN}║${NC}  ${BOLD}DEV MODE ACTIVE${NC}                        ${CYAN}║${NC}\n"
        printf "${CYAN}╠════════════════════════════════════════════╣${NC}\n"
        printf "${CYAN}║${NC}  Server:   ${BLUE}${BOLD}http://localhost:$PORT${NC}\n"
        printf "${CYAN}║${NC}  Logs:     ${YELLOW}browser-console.log${NC}\n"
        printf "${CYAN}║${NC}  Mode:     ${GREEN}Auto-injection${NC}\n"
        printf "${CYAN}╚════════════════════════════════════════════╝${NC}\n"
        echo ""
        printf "${GREEN}Features enabled:${NC}\n"
        printf "  ✓ Eruda DevTools (auto-loaded)\n"
        printf "  ✓ Console logging to JSONL file\n"
        printf "  ✓ Error tracking (uncaught + promises)\n"
        printf "  ✓ Auto-injection (no HTML changes needed)\n"
        echo ""
        printf "${YELLOW}Tip:${NC} Use './server.sh console-logs' to view browser logs\n"
    else
        printf "${RED}✗${NC}\n"
        printf "${RED}Failed to start dev server.${NC}\n"
        # Cleanup
        if [ -n "$LOG_RECEIVER_PID" ]; then
            kill "$LOG_RECEIVER_PID" 2>/dev/null
        fi
        py_write "pid" "0" true
        py_write "log_receiver_pid" "0" true
    fi
}

do_stop_dev() {
    printf "Stopping dev mode...\n"

    # Stop main server (port 8000)
    if [ -n "$PID" ] && [ "$PID" != "0" ]; then
        kill "$PID" 2>/dev/null
    fi
    pkill -f "dev-server.sh" 2>/dev/null
    pkill -f "socat.*8000" 2>/dev/null
    printf "${GREEN}✓${NC} Dev server stopped (port 8000)\n"

    # Stop log receiver (port 19001)
    if [ -n "$LOG_RECEIVER_PID" ] && [ "$LOG_RECEIVER_PID" != "0" ]; then
        kill "$LOG_RECEIVER_PID" 2>/dev/null
    fi
    pkill -f "log-receiver.sh" 2>/dev/null
    pkill -f "socat.*19001" 2>/dev/null
    printf "${GREEN}✓${NC} Log receiver stopped (port 19001)\n"

    # Clear PIDs
    py_write "pid" "0" true
    py_write "log_receiver_pid" "0" true

    echo "All dev servers stopped."
}

view_console_logs() {
    if [ -f "$CONSOLE_LOG_FILE" ]; then
        printf "${CYAN}╔════════════════════════════════════════════╗${NC}\n"
        printf "${CYAN}║${NC}  ${BOLD}BROWSER CONSOLE LOGS (last 20)${NC}         ${CYAN}║${NC}\n"
        printf "${CYAN}╚════════════════════════════════════════════╝${NC}\n"
        echo ""

        # Check if jq is available for pretty printing
        if command -v jq >/dev/null 2>&1; then
            tail -n 20 "$CONSOLE_LOG_FILE" | while IFS= read -r line; do
                # Parse JSON and format output
                echo "$line" | jq -r '"\(.server_timestamp) [\(.level | ascii_upcase)] \(.message)"' 2>/dev/null || echo "$line"
            done
        else
            # Fallback: raw JSON output
            tail -n 20 "$CONSOLE_LOG_FILE"
        fi

        echo ""
        printf "${CYAN}────────────────────────────────────────────${NC}\n"
        printf "Total entries: ${YELLOW}$(wc -l < "$CONSOLE_LOG_FILE" | tr -d ' ')${NC}\n"
        echo ""
        printf "${YELLOW}Tips:${NC}\n"
        printf "  • View all: cat $CONSOLE_LOG_FILE | jq .\n"
        printf "  • Errors only: ./server.sh console-errors\n"
        printf "  • Live tail: tail -f $CONSOLE_LOG_FILE | jq .\n"
    else
        printf "${YELLOW}No browser console logs yet.${NC}\n"
        printf "Start dev mode with: ${GREEN}./server.sh dev${NC}\n"
    fi
}

view_console_errors() {
    if [ -f "$CONSOLE_LOG_FILE" ]; then
        printf "${RED}╔════════════════════════════════════════════╗${NC}\n"
        printf "${RED}║${NC}  ${BOLD}ERRORS & WARNINGS ONLY${NC}                 ${RED}║${NC}\n"
        printf "${RED}╚════════════════════════════════════════════╝${NC}\n"
        echo ""

        if command -v jq >/dev/null 2>&1; then
            # Filter for errors, warnings, uncaught, and promise rejections
            jq -r 'select(.level == "error" or .level == "warn" or .level == "uncaught" or .level == "promise") | "\(.server_timestamp) [\(.level | ascii_upcase)] \(.message)"' "$CONSOLE_LOG_FILE" 2>/dev/null
        else
            printf "${YELLOW}Install jq for better filtering: pkg install jq${NC}\n"
            grep -E '"level":"(error|warn|uncaught|promise)"' "$CONSOLE_LOG_FILE" 2>/dev/null || echo "No errors found."
        fi

        echo ""
        printf "${RED}────────────────────────────────────────────${NC}\n"
    else
        printf "${YELLOW}No browser console logs yet.${NC}\n"
    fi
}

clear_console_logs() {
    if [ -f "$CONSOLE_LOG_FILE" ]; then
        printf "Clear browser console logs? [y/N]: "
        read -r confirm
        if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
            > "$CONSOLE_LOG_FILE"
            printf "${GREEN}✓${NC} Browser console logs cleared.\n"
        else
            echo "Cancelled."
        fi
    else
        echo "No logs to clear."
    fi
}

do_status() {
    printf "${CYAN}--- Server Information ---${NC}\n"
    if is_running; then
        printf "Status:      ${GREEN}${BOLD}RUNNING${NC}\n"
        printf "PID:         ${YELLOW}$PID${NC}\n"
        printf "Port:        ${YELLOW}$PORT${NC}\n"
        printf "URL:         ${BLUE}${BOLD}http://localhost:$PORT${NC}\n"
        printf "Mount Point: $MOUNT_DIR\n"
        printf "Log File:    $LOG_FILE\n"
        printf "Config File: $CONFIG_FILE\n"
    else
        printf "Status:      ${RED}${BOLD}STOPPED${NC}\n"
        printf "Port:        $PORT\n"
        printf "Mount Point: $MOUNT_DIR\n"
        printf "Config File: $CONFIG_FILE\n"
    fi
    printf "${CYAN}--------------------------${NC}\n"
}

edit_port() {
    printf "Enter new port [Current: $PORT]: "
    read -r new_port
    if [ -n "$new_port" ]; then
        if echo "$new_port" | grep -Eq '^[0-9]+$'; then
            PORT="$new_port"
            py_write "port" "$PORT" true
            echo "Port updated to $PORT (Saved to server.json)."
        else
            echo "${RED}Invalid port.${NC}"
        fi
    fi
}

edit_mount() {
    printf "Enter new mount directory [Current: $MOUNT_DIR]: "
    read -r new_mount
    if [ -n "$new_mount" ]; then
        if [ -d "$new_mount" ]; then
            MOUNT_DIR=$(cd "$new_mount" && pwd)
            py_write "mount_point" "$MOUNT_DIR" false
            echo "Mount point updated to $MOUNT_DIR (Saved to server.json)."
        else
            echo "${RED}Error: Directory does not exist.${NC}"
        fi
    fi
}

view_logs() {
    if [ -f "$LOG_FILE" ]; then
        echo "--- Showing last 20 lines of $LOG_FILE ---"
        tail -n 20 "$LOG_FILE"
        echo "------------------------------------------"
    else
        echo "Log file not found."
    fi
}

show_tui() {
    while true; do
        clear
        # Reload config to ensure status is up to date
        load_config

        printf "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}\n"
        printf "${CYAN}║${NC}           ${BOLD}WEB SERVER CONTROL PANEL${NC}                       ${CYAN}║${NC}\n"
        printf "${CYAN}╠══════════════════════════════════════════════════════════╝${NC}\n"

        # Server status
        if is_running; then
            printf "  ${BOLD}STATUS:${NC}  ${GREEN}● ONLINE${NC} (PID: $PID)\n"
            printf "  ${BOLD}URL:${NC}     ${BLUE}http://localhost:$PORT${NC}\n"
        else
            printf "  ${BOLD}STATUS:${NC}  ${RED}○ OFFLINE${NC}\n"
        fi

        # Dev mode status
        if is_log_receiver_running; then
            printf "  ${BOLD}MODE:${NC}    ${YELLOW}● DEV MODE${NC} (Logger PID: $LOG_RECEIVER_PID)\n"
        fi

        printf "  ${BOLD}PORT:${NC}    $PORT\n"
        printf "  ${BOLD}MOUNT:${NC}   $MOUNT_DIR\n"

        printf "${CYAN}╟─ CONTROL ────────────────────────────────────────────────${NC}\n"
        printf "  1. ${GREEN}START${NC} Server (Normal)\n"
        printf "  2. ${GREEN}START${NC} Server (${YELLOW}DEV MODE${NC} - Auto-inject DevTools)\n"
        printf "  3. ${RED}STOP${NC} Server\n"
        printf "  4. ${YELLOW}VIEW LOGS${NC} (server)\n"
        printf "${CYAN}╟─ DEV TOOLS ──────────────────────────────────────────────${NC}\n"
        printf "  5. ${YELLOW}VIEW LOGS${NC} (browser console)\n"
        printf "  6. ${RED}VIEW ERRORS${NC} (browser console)\n"
        printf "  7. ${RED}CLEAR${NC} browser console logs\n"
        printf "${CYAN}╟─ SETTINGS (server.json) ─────────────────────────────────${NC}\n"
        printf "  8. Edit ${BOLD}PORT${NC}\n"
        printf "  9. Edit ${BOLD}MOUNT POINT${NC}\n"
        printf "${CYAN}╟──────────────────────────────────────────────────────────${NC}\n"
        printf "  0. EXIT\n"
        printf "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}\n"
        printf " Choice [0-9]: "
        read -r choice

        case "$choice" in
            1) echo ""; do_start; sleep 1.5 ;;
            2) echo ""; do_start_dev; sleep 2 ;;
            3) echo ""; do_stop_dev; sleep 1.5 ;;
            4) echo ""; view_logs; printf "\nPress Enter to continue..."; read -r dummy ;;
            5) echo ""; view_console_logs; printf "\nPress Enter to continue..."; read -r dummy ;;
            6) echo ""; view_console_errors; printf "\nPress Enter to continue..."; read -r dummy ;;
            7) echo ""; clear_console_logs; sleep 1.5 ;;
            8) echo ""; edit_port; sleep 1.5 ;;
            9) echo ""; edit_mount; sleep 1.5 ;;
            0|q|Q) clear; exit 0 ;;
            *) ;;
        esac
    done
}

# --- Main Logic ---
case "$1" in
    start)
        if [ "$2" = "--dev" ] || [ "$2" = "-d" ]; then
            do_start_dev
        else
            do_start
        fi
        ;;
    dev)
        do_start_dev
        ;;
    stop)
        do_stop_dev
        ;;
    status)
        do_status
        if is_log_receiver_running; then
            echo ""
            printf "${YELLOW}Dev Mode: ACTIVE${NC} (Log receiver PID: $LOG_RECEIVER_PID)\n"
            printf "Console logs: $CONSOLE_LOG_FILE\n"
        fi
        ;;
    logs)
        view_logs
        ;;
    console-logs)
        view_console_logs
        ;;
    console-errors)
        view_console_errors
        ;;
    console-clear)
        clear_console_logs
        ;;
    console-json)
        if [ -f "$CONSOLE_LOG_FILE" ]; then
            if command -v jq >/dev/null 2>&1; then
                cat "$CONSOLE_LOG_FILE" | jq .
            else
                cat "$CONSOLE_LOG_FILE"
            fi
        else
            echo "No browser console logs found."
        fi
        ;;
    console-tail)
        if [ -f "$CONSOLE_LOG_FILE" ]; then
            printf "${CYAN}Following browser console logs (Ctrl+C to stop)...${NC}\n"
            if command -v jq >/dev/null 2>&1; then
                tail -f "$CONSOLE_LOG_FILE" | jq -r '"\(.server_timestamp) [\(.level | ascii_upcase)] \(.message)"'
            else
                tail -f "$CONSOLE_LOG_FILE"
            fi
        else
            echo "No browser console logs found."
        fi
        ;;
    config)
        if [ "$2" = "port" ]; then
             py_write "port" "$3" true
        fi
        if [ "$2" = "mount" ]; then
             py_write "mount_point" "$3" false
        fi
        do_status
        ;;
    tui)
        show_tui
        ;;
    help|--help|-h)
        cat << EOF
${BOLD}Web Server Control Script${NC}

${CYAN}USAGE:${NC}
  $0 [command] [options]

${CYAN}COMMANDS:${NC}
  ${GREEN}start${NC} [--dev|-d]   Start server (use --dev for dev mode)
  ${GREEN}dev${NC}                Start in dev mode (auto-inject DevTools)
  ${RED}stop${NC}               Stop server and dev tools
  ${YELLOW}status${NC}             Show server status
  ${YELLOW}logs${NC}               View server logs

  ${CYAN}DEV MODE COMMANDS:${NC}
  ${YELLOW}console-logs${NC}       View browser console logs (last 20)
  ${RED}console-errors${NC}     View only errors and warnings
  ${YELLOW}console-json${NC}       View raw JSON logs (all)
  ${YELLOW}console-tail${NC}       Live tail browser console logs
  ${RED}console-clear${NC}      Clear browser console logs

  ${CYAN}SETTINGS:${NC}
  config port <num>   Set port number
  config mount <dir>  Set mount directory

  ${CYAN}INTERACTIVE:${NC}
  tui                 Launch interactive TUI menu
  help                Show this help message

${CYAN}DEV MODE FEATURES:${NC}
  • Eruda DevTools auto-loaded in browser
  • Console logging to JSONL file
  • Error tracking (uncaught errors + promise rejections)
  • Auto-injection (no HTML modifications needed)

${CYAN}EXAMPLES:${NC}
  $0                    # Launch TUI
  $0 dev                # Start in dev mode
  $0 start --dev        # Start in dev mode
  $0 console-logs       # View browser console
  $0 console-tail       # Live tail browser logs

${CYAN}FILES:${NC}
  Config:        $CONFIG_FILE
  Server logs:   $LOG_FILE
  Console logs:  $CONSOLE_LOG_FILE

EOF
        ;;
    *)
        if [ $# -eq 0 ]; then
            show_tui
        else
            echo "Unknown command: $1"
            echo "Use '$0 help' for usage information"
            exit 1
        fi
        ;;
esac