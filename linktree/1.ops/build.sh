#!/bin/sh

# This script acts as a router for development tasks.
#
# Usage:
#   sh 1.ops/build.sh [command]
#
# Commands:
#   start       - Starts the live development server.
#   [any other] - Opens the main helper menu.
#   (no command)  - Opens the main helper menu.

case "$1" in
    start)
        echo "Starting live server..."
        # Try to find python3 or python
        if command -v python3 >/dev/null 2>&1; then
            python3 -m http.server
        elif command -v python >/dev/null 2>&1; then
            python -m http.server
        else
            echo "${RED}Error: Could not find 'python3' or 'python'. Please install Python.${NC}" >&2
            exit 1
        fi
        ;;
    *)
        # If no command or an unknown command is given, show the main helper menu.
        if [ -f ./1.ops/helper.sh ]; then
            sh ./1.ops/helper.sh "$@"
        else
            echo "Error: helper.sh not found in 1.ops/"
            exit 1
        fi
        ;;
esac