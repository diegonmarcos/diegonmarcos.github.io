# Dev Mode - Browser DevTools for Android

Pure POSIX shell implementation of browser DevTools for Android environments where Chrome/Firefox DevTools are not available.

## Features

✅ **Auto-Injection** - No manual script tags needed, works with ANY HTML file
✅ **Eruda DevTools** - Full in-browser DevTools (console, elements, network, resources)
✅ **Console Logging** - All browser console output logged to JSONL file
✅ **Error Tracking** - Captures uncaught errors and promise rejections
✅ **Pure POSIX** - Works on Alpine, Termux, and any POSIX shell
✅ **Zero Dependencies** - Only requires `socat` (no Node.js, no Python for dev server)

## Quick Start

### Install Dependencies

```bash
# Alpine/Termux
pkg install socat

# Optional: for pretty log viewing
pkg install jq
```

### Start Dev Mode

```bash
# Interactive TUI
./server.sh

# Or directly from command line
./server.sh dev

# Or with start command
./server.sh start --dev
```

### View Logs

```bash
# View last 20 console logs
./server.sh console-logs

# View only errors
./server.sh console-errors

# Live tail (real-time)
./server.sh console-tail

# View raw JSON
./server.sh console-json
```

## Architecture

```
┌─────────────────────────────────────┐
│  Browser                            │
│  ├─ Your HTML page                 │
│  ├─ Auto-injected Eruda DevTools   │
│  └─ Console interceptor             │
│     └─ POST logs to :8001           │
└─────────────────────────────────────┘
         │                    │
         ↓                    ↓
    Port 8000            Port 8001
  dev-server.sh      log-receiver.sh
  (file serving +    (receives JSON logs)
   auto-injection)          │
                            ↓
                  browser-console.log
                     (JSONL format)
```

## Components

### 1. **dev-server.sh** - HTTP server with auto-injection
- Serves files from mount directory
- Detects HTML files
- Injects Eruda + console logger before `</body>` tag
- No modifications to your source files

### 2. **log-receiver.sh** - JSON log receiver
- Listens on port 8001
- Receives POST requests from browser
- Writes JSONL (JSON Lines) format
- Adds server-side timestamp

### 3. **server.sh** - Control script
- Manages both servers
- TUI interface
- Helper commands for viewing logs

## Log Format (JSONL)

Each line is a complete JSON object:

```json
{"level":"log","message":"Page loaded","url":"http://localhost:8000/index.html","timestamp":"2026-01-23T15:30:22.451Z","server_timestamp":"2026-01-23T15:30:22Z"}
{"level":"error","message":"TypeError: Cannot read property 'x'","url":"http://localhost:8000/app.js","timestamp":"2026-01-23T15:30:25.123Z","server_timestamp":"2026-01-23T15:30:25Z"}
```

### Query with jq

```bash
# Pretty print all logs
jq . browser-console.log

# Filter by level
jq 'select(.level == "error")' browser-console.log

# Extract timestamp and message
jq -r '"\(.timestamp) [\(.level)] \(.message)"' browser-console.log

# Count by level
jq -s 'group_by(.level) | map({level: .[0].level, count: length})' browser-console.log

# Search for text
jq 'select(.message | contains("undefined"))' browser-console.log

# Live tail (pretty)
tail -f browser-console.log | jq .
```

## Commands

### Server Control

```bash
./server.sh start          # Normal mode (live-server/python)
./server.sh dev            # Dev mode (auto-inject)
./server.sh stop           # Stop all servers
./server.sh status         # Show status
```

### Dev Tools

```bash
./server.sh console-logs       # View last 20 logs
./server.sh console-errors     # View errors/warnings only
./server.sh console-json       # View all logs (JSON)
./server.sh console-tail       # Live tail
./server.sh console-clear      # Clear log file
```

### Configuration

```bash
./server.sh config port 8080           # Change port
./server.sh config mount /path/to/dir  # Change directory
```

## TUI Menu

Run `./server.sh` (no arguments) to launch interactive menu:

```
╔══════════════════════════════════════════════════════════╗
║           WEB SERVER CONTROL PANEL                       ║
╠══════════════════════════════════════════════════════════╝
  STATUS:  ● ONLINE (PID: 12345)
  URL:     http://localhost:8000
  MODE:    ● DEV MODE (Logger PID: 12346)
  PORT:    8000
  MOUNT:   /data/data/com.termux/files/home/Git/front-Github_io
╟─ CONTROL ────────────────────────────────────────────────
  1. START Server (Normal)
  2. START Server (DEV MODE - Auto-inject DevTools)
  3. STOP Server
  4. VIEW LOGS (server)
╟─ DEV TOOLS ──────────────────────────────────────────────
  5. VIEW LOGS (browser console)
  6. VIEW ERRORS (browser console)
  7. CLEAR browser console logs
╟─ SETTINGS (server.json) ─────────────────────────────────
  8. Edit PORT
  9. Edit MOUNT POINT
╟──────────────────────────────────────────────────────────
  0. EXIT
╚══════════════════════════════════════════════════════════╝
```

## What Gets Injected

When dev mode is active, this script is auto-injected before `</body>`:

```html
<!-- AUTO-INJECTED DEV TOOLS -->
<script>
(function() {
  // Load Eruda from CDN
  var s = document.createElement("script");
  s.src = "//cdn.jsdelivr.net/npm/eruda";
  s.onload = function() {
    eruda.init();
  };
  document.head.appendChild(s);

  // Intercept console methods
  var orig = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info
  };

  function send(level, args) {
    // POST to log receiver
    fetch("http://localhost:8001/log", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        level: level,
        message: /* formatted message */,
        url: location.href,
        timestamp: new Date().toISOString()
      })
    });
  }

  console.log = function() {
    orig.log.apply(console, arguments);
    send("log", arguments);
  };

  // ... similar for error, warn, info

  // Catch uncaught errors
  window.addEventListener("error", function(e) { /* ... */ });
  window.addEventListener("unhandledrejection", function(e) { /* ... */ });
})();
</script>
```

## Browser Experience

When you open any HTML page in dev mode:

1. Page loads normally
2. Eruda DevTools icon appears in bottom-right
3. Tap icon to open DevTools panel
4. Use console, elements, network tabs
5. All console output is logged to file

## Use Cases

- **Android Development** - Debug web apps on Android without USB
- **Termux/Alpine** - Local web development in containerized environments
- **Remote Debugging** - Debug on devices without Chrome DevTools
- **Log Analysis** - Collect and analyze browser logs offline
- **CI/CD** - Automated browser testing with log capture

## Troubleshooting

### Port 8001 already in use

```bash
# Find and kill process
pkill -f log-receiver.sh
# Or manually
lsof -i :8001
kill <PID>
```

### Eruda doesn't load

- Check network connection (CDN required)
- Check browser console for errors
- Verify injection in View Source

### Logs not appearing

```bash
# Check if log receiver is running
./server.sh status

# Check if file exists
ls -lh browser-console.log

# Test manually
curl -X POST http://localhost:8001/log \
  -H "Content-Type: application/json" \
  -d '{"level":"test","message":"hello","url":"manual","timestamp":"2026-01-23T00:00:00Z"}'

# Check the log
tail browser-console.log
```

## Files

```
front-Github_io/
├── server.sh              # Main control script
├── dev-server.sh          # HTTP server with auto-injection
├── log-receiver.sh        # JSON log receiver
├── server.json            # Configuration (auto-generated)
├── server.log             # HTTP server logs
├── browser-console.log    # Browser console logs (JSONL)
└── [your HTML files]      # Unchanged!
```

## POSIX Compliance

All scripts are pure POSIX shell (`#!/bin/sh`):
- No bash-specific features
- No `[[` syntax
- No arrays
- Works on busybox, dash, ash, bash

## Performance

- **Minimal overhead** - Only HTML files are processed
- **Binary-safe** - CSS, JS, images served directly
- **No temp files** - Injection done in memory
- **Async logging** - Non-blocking POST requests

## Security Notes

- Dev mode is for **local development only**
- Binds to `localhost` by default
- No authentication on log receiver
- CORS enabled for localhost

## Contributing

This is a pure shell implementation. Contributions welcome for:
- Better error handling
- Additional log formats
- Performance improvements
- POSIX compliance fixes

## License

MIT - Free to use, modify, and distribute.
