#!/bin/sh

# POSIX-compliant script to build the project or run a dev server.

# Default to 'build' if no argument is provided.
ACTION=${1:-build}

# Change to the myfeed directory
cd "$(dirname "$0")/../../myfeed"

# Check the action and run the corresponding npm script.
if [ "$ACTION" = "dev" ]; then
  echo "Starting development server..."
  echo "Script location: $(dirname "$0")"
  LOG_DIR="$(dirname "$0")/../logs"
  echo "Log directory: $LOG_DIR"
  mkdir -p "$LOG_DIR"
  npm run dev > "$LOG_DIR/dev.log" 2>&1
elif [ "$ACTION" = "build" ]; then
  echo "Building the project..."
  npm run build
else
  echo "Invalid action. Use 'dev' or 'build'."
  exit 1
fi