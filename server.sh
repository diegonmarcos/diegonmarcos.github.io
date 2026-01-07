#!/bin/sh

# --- Configuration ---
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
CONFIG_FILE="$SCRIPT_DIR/.server.conf"
PID_FILE="$SCRIPT_DIR/.server.pid"
LOG_FILE="$SCRIPT_DIR/server.log"

# Defaults
DEFAULT_PORT=8000
DEFAULT_MOUNT="$SCRIPT_DIR"

# Load Configuration
load_config() {
    if [ -f "$CONFIG_FILE" ]; then
        . "$CONFIG_FILE"
    fi
    : "${PORT:=$DEFAULT_PORT}"
    : "${MOUNT_DIR:=$DEFAULT_MOUNT}"
}

# Save Configuration
save_config() {
    echo "PORT=$PORT" > "$CONFIG_FILE"
    echo "MOUNT_DIR=\"$MOUNT_DIR\"" >> "$CONFIG_FILE"
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
    if [ -f "$PID_FILE" ]; then
        read -r pid < "$PID_FILE"
        if [ -n "$pid" ] && ps -p "$pid" > /dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

do_start() {
    if is_running; then
        read -r pid < "$PID_FILE"
        echo "Server is already running (PID $pid)."
        return
    fi

    if [ ! -d "$MOUNT_DIR" ]; then
        echo "Error: Mount point '$MOUNT_DIR' does not exist."
        return
    fi

    echo "Starting server on port $PORT serving $MOUNT_DIR..."
    
    # Use a named pipe to timestamp logs while preserving the PID
    FIFO="$SCRIPT_DIR/.server_log.fifo"
    rm -f "$FIFO"
    mkfifo "$FIFO"

    # Start the logger process in the background
    # It reads from the FIFO, prepends the date, and writes to LOG_FILE
    (
        trap "" HUP # Ensure it survives terminal closure
        while IFS= read -r line; do
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] $line" >> "$LOG_FILE"
        done < "$FIFO"
        # Cleanup when the writer (server) closes the pipe
        rm -f "$FIFO"
    ) > /dev/null 2>&1 &

    # Start the Python server, directing output to the FIFO
    # -u ensures output is unbuffered so it appears in logs immediately
    nohup python3 -u -m http.server "$PORT" --directory "$MOUNT_DIR" > "$FIFO" 2>&1 &
    
    SERVER_PID=$!
    echo "$SERVER_PID" > "$PID_FILE"
    
    sleep 1
    
    if is_running; then
        echo "Server started successfully. Logs: $LOG_FILE"
    else
        echo "Failed to start server. Check logs."
        rm -f "$FIFO" # Cleanup if start failed
        [ -f "$PID_FILE" ] && rm "$PID_FILE"
    fi
}

do_stop() {
    if [ -f "$PID_FILE" ]; then
        read -r pid < "$PID_FILE"
        if kill "$pid" 2>/dev/null; then
            rm "$PID_FILE"
            echo "Server stopped."
            # The logger loop will automatically exit when it sees EOF from the pipe
        else
            echo "Could not stop server (Process $pid not found)."
            rm "$PID_FILE"
        fi
    else
        echo "Server is not running."
    fi
}

do_status() {
    printf "${CYAN}--- Server Information ---${NC}\n"
    if is_running; then
        read -r pid < "$PID_FILE"
        printf "Status:      ${GREEN}${BOLD}RUNNING${NC}\n"
        printf "PID:         ${YELLOW}$pid${NC}\n"
        printf "Port:        ${YELLOW}$PORT${NC}\n"
        printf "URL:         ${BLUE}${BOLD}http://localhost:$PORT${NC}\n"
        printf "Mount Point: $MOUNT_DIR\n"
        printf "Log File:    $LOG_FILE\n"
    else
        printf "Status:      ${RED}${BOLD}STOPPED${NC}\n"
        printf "Port:        $PORT\n"
        printf "Mount Point: $MOUNT_DIR\n"
    fi
    printf "${CYAN}--------------------------${NC}\n"
}

edit_port() {
    printf "Enter new port [Current: $PORT]: "
    read -r new_port
    if [ -n "$new_port" ]; then
        if echo "$new_port" | grep -Eq '^[0-9]+$'; then
            PORT="$new_port"
            save_config
            echo "Port updated to $PORT."
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
            save_config
            echo "Mount point updated to $MOUNT_DIR."
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
        printf "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}\n"
        printf "${CYAN}║${NC}           ${BOLD}WEB SERVER CONTROL PANEL${NC}                       ${CYAN}║${NC}\n"
        printf "${CYAN}╠══════════════════════════════════════════════════════════╝${NC}\n"
        
        if is_running; then
            read -r pid < "$PID_FILE"
            printf "  ${BOLD}STATUS:${NC}  ${GREEN}● ONLINE${NC} (PID: $pid)\n"
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
        printf "${CYAN}╟─ SETTINGS ───────────────────────────────────────────────${NC}\n"
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
        if [ "$2" = "port" ]; then PORT=$3; save_config; fi
        if [ "$2" = "mount" ]; then MOUNT_DIR=$3; save_config; fi
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