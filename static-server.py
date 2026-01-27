#!/usr/bin/env python3
"""Lightweight HTTP server with Eruda DevTools injection (no logging)."""

import http.server
import socketserver
import sys
import os
import re

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DIRECTORY = sys.argv[2] if len(sys.argv) > 2 else os.getcwd()

ERUDA_SCRIPT = '''
<!-- AUTO-INJECTED: Eruda DevTools -->
<script>
(function() {
  var s = document.createElement("script");
  s.src = "//cdn.jsdelivr.net/npm/eruda";
  s.onload = function() {
    eruda.init();
    console.log("%c[STATIC] Eruda DevTools loaded", "color:green;font-weight:bold");
  };
  document.head.appendChild(s);
})();
</script>
'''

class ErudaHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Get the file path
        path = self.translate_path(self.path)

        # Handle directory -> index.html
        if os.path.isdir(path):
            index_path = os.path.join(path, 'index.html')
            if os.path.exists(index_path):
                path = index_path
            else:
                # Let parent handle directory listing
                return super().do_GET()

        # Check if it's an HTML file
        if path.endswith(('.html', '.htm')) and os.path.exists(path):
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Inject Eruda before </body> or at the end
                if re.search(r'</body>', content, re.IGNORECASE):
                    content = re.sub(
                        r'(</body>)',
                        ERUDA_SCRIPT + r'\1',
                        content,
                        count=1,
                        flags=re.IGNORECASE
                    )
                else:
                    content += ERUDA_SCRIPT

                # Send response
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', len(content.encode('utf-8')))
                self.send_header('Cache-Control', 'no-cache')
                self.end_headers()
                self.wfile.write(content.encode('utf-8'))
                return
            except Exception as e:
                print(f"Error processing {path}: {e}")

        # Non-HTML or error: use default handler
        return super().do_GET()

    def log_message(self, format, *args):
        # Simpler log format
        print(f"[{self.log_date_time_string()}] {args[0]}")

if __name__ == '__main__':
    os.chdir(DIRECTORY)

    with socketserver.TCPServer(("", PORT), ErudaHandler) as httpd:
        print(f"Static Server with Eruda DevTools")
        print(f"  URL:   http://localhost:{PORT}")
        print(f"  Mount: {DIRECTORY}")
        print(f"  Mode:  Eruda auto-injection (no logging)")
        print()
        print("Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
