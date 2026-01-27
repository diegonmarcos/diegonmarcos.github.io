#!/usr/bin/env python3
"""HTTP server with Eruda DevTools + Live Reload (no logging)."""

import http.server
import socketserver
import sys
import os
import re
import json
import time
import threading
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DIRECTORY = sys.argv[2] if len(sys.argv) > 2 else os.getcwd()

# Track file modification times
file_mtimes = {}
last_change = time.time()
lock = threading.Lock()

ERUDA_AND_RELOAD_SCRIPT = '''
<!-- AUTO-INJECTED: Eruda DevTools + Live Reload -->
<script>
(function() {
  // Load Eruda
  var s = document.createElement("script");
  s.src = "//cdn.jsdelivr.net/npm/eruda";
  s.onload = function() {
    eruda.init();
    console.log("%c[LIVE] Eruda DevTools loaded", "color:green;font-weight:bold");
  };
  document.head.appendChild(s);

  // Live Reload - poll for changes
  var lastCheck = Date.now();
  var checkInterval = 1000; // 1 second

  function checkForChanges() {
    fetch("/__live_reload_check?t=" + lastCheck)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.changed) {
          console.log("%c[LIVE] Change detected, reloading...", "color:orange;font-weight:bold");
          location.reload();
        }
        lastCheck = data.timestamp;
      })
      .catch(function() {})
      .finally(function() {
        setTimeout(checkForChanges, checkInterval);
      });
  }

  // Start checking after page load
  setTimeout(checkForChanges, checkInterval);
  console.log("%c[LIVE] Auto-reload enabled (1s polling)", "color:blue;font-weight:bold");
})();
</script>
'''

def scan_files():
    """Scan directory for file changes."""
    global last_change
    changed = False
    current_mtimes = {}

    for root, dirs, files in os.walk(DIRECTORY):
        # Skip hidden directories and node_modules
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']

        for f in files:
            if f.startswith('.'):
                continue
            filepath = os.path.join(root, f)
            try:
                mtime = os.path.getmtime(filepath)
                current_mtimes[filepath] = mtime

                if filepath in file_mtimes:
                    if mtime > file_mtimes[filepath]:
                        changed = True
                        print(f"[CHANGE] {filepath}")
            except OSError:
                pass

    with lock:
        file_mtimes.clear()
        file_mtimes.update(current_mtimes)
        if changed:
            last_change = time.time()

    return changed

def file_watcher():
    """Background thread to watch for file changes."""
    while True:
        scan_files()
        time.sleep(0.5)

class LiveReloadHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Handle live reload check endpoint
        if self.path.startswith('/__live_reload_check'):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()

            # Parse timestamp from query
            try:
                t = float(self.path.split('t=')[1]) / 1000  # Convert ms to seconds
            except:
                t = 0

            with lock:
                changed = last_change > t
                response = json.dumps({
                    'changed': changed,
                    'timestamp': int(time.time() * 1000)
                })

            self.wfile.write(response.encode())
            return

        # Get the file path
        path = self.translate_path(self.path)

        # Handle directory -> index.html
        if os.path.isdir(path):
            index_path = os.path.join(path, 'index.html')
            if os.path.exists(index_path):
                path = index_path
            else:
                return super().do_GET()

        # Check if it's an HTML file
        if path.endswith(('.html', '.htm')) and os.path.exists(path):
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Inject Eruda + Live Reload before </body> or at the end
                if re.search(r'</body>', content, re.IGNORECASE):
                    content = re.sub(
                        r'(</body>)',
                        ERUDA_AND_RELOAD_SCRIPT + r'\1',
                        content,
                        count=1,
                        flags=re.IGNORECASE
                    )
                else:
                    content += ERUDA_AND_RELOAD_SCRIPT

                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', len(content.encode('utf-8')))
                self.send_header('Cache-Control', 'no-cache')
                self.end_headers()
                self.wfile.write(content.encode('utf-8'))
                return
            except Exception as e:
                print(f"Error processing {path}: {e}")

        return super().do_GET()

    def log_message(self, format, *args):
        # Simpler log format, skip reload checks
        if '/__live_reload_check' not in args[0]:
            print(f"[{self.log_date_time_string()}] {args[0]}")

class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

if __name__ == '__main__':
    os.chdir(DIRECTORY)

    # Initial file scan
    scan_files()

    # Start file watcher thread
    watcher = threading.Thread(target=file_watcher, daemon=True)
    watcher.start()

    print(f"Live Server with Eruda + Auto-Reload")
    print(f"  URL:   http://localhost:{PORT}")
    print(f"  Mount: {DIRECTORY}")
    print(f"  Mode:  Eruda + Live Reload (1s polling)")
    print()
    print("Press Ctrl+C to stop")

    with ThreadedTCPServer(("", PORT), LiveReloadHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
