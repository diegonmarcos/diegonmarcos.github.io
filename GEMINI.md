# Gemini CLI - Project Notes

## Rules
1. **I WILL BE STRICTED TO WHAT I AM ASKED FOR**

## Server Management
A lightweight POSIX-compliant web server manager has been implemented.

- **Script:** `server.sh`
- **Config:** `server.json` (stores port, mount point, and running PID)
- **Logs:** `server.log` (prepends date and time to all server output)

### Usage
- Run TUI: `./server.sh`
- Start: `./server.sh start`
- Stop: `./server.sh stop`
- Status: `./server.sh status`
- View Logs: `./server.sh logs`