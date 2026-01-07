#!/bin/sh

# --- Configuration ---
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
CONFIG_FILE="$SCRIPT_DIR/server.json"
LOG_FILE="$SCRIPT_DIR/server.log"

# Defaults
DEFAULT_PORT=8000
DEFAULT_MOUNT="$SCRIPT_DIR"

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

is_running() {
    if [ -n "$PID" ] && ps -p "$PID" > /dev/null 2>&1; then
        return 0
    fi
    return 1
}

do_start() {
    if is_running; then
        echo "Server is already running (PID $PID)."
        return
    fi

    if [ ! -d "$MOUNT_DIR" ]; then
        echo "Error: Mount point '$MOUNT_DIR' does not exist."
        return
    fi

    echo "Starting server on port $PORT serving $MOUNT_DIR..."
    
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

    # Start the Python server
    nohup python3 -u -m http.server "$PORT" --directory "$MOUNT_DIR" > "$FIFO" 2>&1 &
    
    SERVER_PID=$!
    
    # Save Config & PID to JSON
    py_write "port" "$PORT" true
    py_write "mount_point" "$MOUNT_DIR" false
    py_write "pid" "$SERVER_PID" true
    
    # Reload config to get the new PID
    load_config

    sleep 1
    
    if is_running; then
        echo "Server started successfully. Logs: $LOG_FILE"
    else
        echo "Failed to start server. Check logs."
        rm -f "$FIFO"
        # Clear PID on failure
        py_write "pid" "0" true
    fi
}

do_stop() {
    if is_running; then
        if kill "$PID" 2>/dev/null; then
            echo "Server stopped."
            py_write "pid" "0" true
        else
            echo "Could not stop server (Process $PID not found)."
            py_write "pid" "0" true
        fi
    else
        echo "Server is not running."
        # Ensure PID is cleared if it was stale
        if [ -n "$PID" ] && [ "$PID" != "0" ]; then
             py_write "pid" "0" true
        fi
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
        
        if is_running; then
            printf "  ${BOLD}STATUS:${NC}  ${GREEN}● ONLINE${NC} (PID: $PID)\n"
            printf "  ${BOLD}URL:${NC}     ${BLUE}http://localhost:$PORT${NC}\n"
        else
            printf "  ${BOLD}STATUS:${NC}  ${RED}○ OFFLINE${NC}\n"
        fi
        printf "  ${BOLD}PORT:${NC}    $PORT\n"
        printf "  ${BOLD}MOUNT:${NC}   $MOUNT_DIR\n"
        
        printf "${CYAN}╟─ CONTROL ────────────────────────────────────────────────${NC}\n"
        printf "  1. ${GREEN}START${NC} Server\n"
        printf "  2. ${RED}STOP${NC} Server\n"
        printf "  3. ${YELLOW}VIEW LOGS${NC} (tail)\n"
        printf "${CYAN}╟─ SETTINGS (server.json) ─────────────────────────────────${NC}\n"
        printf "  4. Edit ${BOLD}PORT${NC}\n"
        printf "  5. Edit ${BOLD}MOUNT POINT${NC}\n"
        printf "${CYAN}╟──────────────────────────────────────────────────────────${NC}\n"
        printf "  6. EXIT\n"
        printf "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}\n"
        printf " Choice [1-6]: "
        read -r choice

        case "$choice" in
            1) echo ""; do_start; sleep 1.5 ;; 
            2) echo ""; do_stop; sleep 1.5 ;; 
            3) echo ""; view_logs; printf "\nPress Enter to continue..."; read -r dummy ;; 
            4) echo ""; edit_port; sleep 1.5 ;; 
            5) echo ""; edit_mount; sleep 1.5 ;; 
            6|q|Q) clear; exit 0 ;; 
            *) ;; 
        esac
    done
}

# --- Main Logic ---
case "$1" in
    start)  do_start ;; 
    stop)   do_stop ;; 
    status) do_status ;; 
    logs)   view_logs ;; 
    config) 
        if [ "$2" = "port" ]; then 
             py_write "port" "$3" true
        fi
        if [ "$2" = "mount" ]; then 
             py_write "mount_point" "$3" false
        fi
        do_status
        ;; 
    tui)    show_tui ;; 
    *) 
        if [ $# -eq 0 ]; then
            show_tui
        else
            echo "Usage: $0 {start|stop|status|logs|tui|config}"
            exit 1
        fi
        ;; 
esac