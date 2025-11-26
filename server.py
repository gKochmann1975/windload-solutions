#!/usr/bin/env python3
"""
Simple HTTP server for Wind Load Solutions website
Run with: python server.py
Access at: http://localhost:8000
"""

import http.server
import socketserver
import os
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler with proper MIME types and directory listing"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        # Custom 404 handling
        if not os.path.exists(self.translate_path(self.path)):
            self.send_error(404, "Page not found")
            return
        return super().do_GET()


def run_server():
    """Start the HTTP server"""
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"\n{'='*60}")
        print(f"🌐 Wind Load Solutions Server Running")
        print(f"{'='*60}")
        print(f"\n📍 Server Address: http://localhost:{PORT}")
        print(f"📁 Serving files from: {DIRECTORY}")
        print(f"\n🚀 Open your browser and navigate to:")
        print(f"   http://localhost:{PORT}/index.html")
        print(f"\n⏹  Press Ctrl+C to stop the server")
        print(f"{'='*60}\n")

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n\n{'='*60}")
            print(f"🛑 Server stopped by user")
            print(f"{'='*60}\n")


if __name__ == "__main__":
    run_server()
