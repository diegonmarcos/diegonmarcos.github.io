#!/usr/bin/env python3
"""
Local-only post editor server for mySocials.
Stdlib only. No third-party dependencies.

Run:
    python3 serve.py
Self-check (does not start the server):
    python3 serve.py --selfcheck
"""

import base64
import json
import re
import shutil
import subprocess
import sys
import urllib.parse
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

HOST = "127.0.0.1"
PORT = 8029

EDIT_DIR = Path(__file__).resolve().parent
MYSOCIALS_DIR = EDIT_DIR.parent
FRONT_DIR = MYSOCIALS_DIR.parent.parent
CDN_DIR = FRONT_DIR.parent / "front-assets-cdn"

DATA_DIR = MYSOCIALS_DIR / "src" / "data"
DIST_DIR = MYSOCIALS_DIR / "dist"
WRAPPER_SCRIPT = FRONT_DIR / "1_cicd" / "src" / "scripts" / "front-data-json-js-wrapper.sh"

CDN_MEDIA_ROOT = CDN_DIR / "b-Media" / "mySocials" / "static" / "media"
JSDELIVR_BASE = "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/b-Media/mySocials/static/media"

EDITOR_HTML = EDIT_DIR / "editor.html"

# Data-driven account registry.
ACCOUNTS = {
    "ig0-diegocnmarcos_": {"media_dir": "diegocnmarcos_", "schema": "ig"},
    "ig1-diegocmarcos_": {"media_dir": "diegocmarcos_", "schema": "ig"},
    "ig2-diegonmarcos": {"media_dir": "", "schema": "ig"},
    "facebook-diegonmarcos": {"media_dir": "facebook-diegonmarcos", "schema": "fb"},
}


def account_json_path(account):
    return DATA_DIR / f"{account}.json"


def media_posts_dir(account):
    """Filesystem dir on the CDN repo for this account's post media."""
    media_dir = ACCOUNTS[account]["media_dir"]
    parts = [p for p in (media_dir, "posts") if p]
    return CDN_MEDIA_ROOT.joinpath(*parts)


def jsdelivr_url(account, filename):
    media_dir = ACCOUNTS[account]["media_dir"]
    parts = [p for p in (media_dir, "posts", filename) if p]
    return JSDELIVR_BASE + "/" + "/".join(parts)


def media_profiles_dir():
    """Filesystem dir on the CDN repo for all accounts' profile photos."""
    return CDN_MEDIA_ROOT / "profiles"


def profile_filename(account, uploaded_filename):
    ext = Path(uploaded_filename).suffix.lower()
    return f"{account}{ext}"


def jsdelivr_profile_url(account, uploaded_filename):
    filename = profile_filename(account, uploaded_filename)
    return JSDELIVR_BASE + "/profiles/" + filename


def sanitize_filename(name):
    name = Path(name).name  # basename only
    name = re.sub(r"[^A-Za-z0-9._-]", "_", name)
    return name


def run_wrapper_and_copy():
    subprocess.run(
        ["bash", str(WRAPPER_SCRIPT), str(DATA_DIR)],
        check=True,
        capture_output=True,
        text=True,
    )
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    for f in DATA_DIR.glob("data-*.json.js"):
        shutil.copy2(f, DIST_DIR / f.name)


def git_publish_repo(repo_dir, subpaths, message):
    log = []
    log.append(f"--- {repo_dir} ---")
    add_cmd = ["git", "-C", str(repo_dir), "add", "-A"] + [str(p) for p in subpaths]
    r = subprocess.run(add_cmd, capture_output=True, text=True)
    log.append(r.stdout + r.stderr)

    status = subprocess.run(
        ["git", "-C", str(repo_dir), "status", "--porcelain"] + [str(p) for p in subpaths],
        capture_output=True,
        text=True,
    )
    if not status.stdout.strip():
        log.append("(nothing to commit)")
        return "\n".join(log)

    # Scope the commit to subpaths with `-- <paths>`. Without the pathspec, git
    # commits the whole staged index — this repo routinely carries unrelated
    # staged work (and a nested front-assets-cdn clone) that must never ride along.
    commit = subprocess.run(
        ["git", "-C", str(repo_dir), "commit", "-m", message, "--"]
        + [str(p) for p in subpaths],
        capture_output=True,
        text=True,
    )
    log.append(commit.stdout + commit.stderr)

    push = subprocess.run(
        ["git", "-C", str(repo_dir), "push"],
        capture_output=True,
        text=True,
    )
    log.append(push.stdout + push.stderr)
    return "\n".join(log)


class Handler(BaseHTTPRequestHandler):
    def _send_json(self, obj, status=200):
        body = json.dumps(obj).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _send_bytes(self, data, content_type, status=200):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def _read_json_body(self):
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"
        return json.loads(raw.decode("utf-8"))

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        try:
            if path == "/":
                html = EDITOR_HTML.read_text(encoding="utf-8")
                self._send_bytes(html.encode("utf-8"), "text/html; charset=utf-8")
                return

            if path == "/api/accounts":
                out = [
                    {"key": key, "schema": info["schema"]}
                    for key, info in ACCOUNTS.items()
                ]
                self._send_json(out)
                return

            if path == "/api/data":
                qs = urllib.parse.parse_qs(parsed.query)
                account = (qs.get("account") or [None])[0]
                if account not in ACCOUNTS:
                    self._send_json({"ok": False, "error": "unknown account"}, 400)
                    return
                data = json.loads(account_json_path(account).read_text(encoding="utf-8"))
                self._send_json(data)
                return

            if path.startswith("/cdn/"):
                relpath = urllib.parse.unquote(path[len("/cdn/"):])
                target = (CDN_MEDIA_ROOT / relpath).resolve()
                if not str(target).startswith(str(CDN_MEDIA_ROOT.resolve()) + "/"):
                    self._send_json({"ok": False, "error": "invalid path"}, 400)
                    return
                if not target.is_file():
                    self._send_json({"ok": False, "error": "not found"}, 404)
                    return
                content_type = "application/octet-stream"
                suffix = target.suffix.lower()
                if suffix in (".jpg", ".jpeg"):
                    content_type = "image/jpeg"
                elif suffix == ".png":
                    content_type = "image/png"
                elif suffix == ".webp":
                    content_type = "image/webp"
                elif suffix == ".gif":
                    content_type = "image/gif"
                self._send_bytes(target.read_bytes(), content_type)
                return

            self._send_json({"ok": False, "error": "not found"}, 404)
        except Exception as e:
            self._send_json({"ok": False, "error": str(e)}, 500)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        try:
            if path == "/api/save":
                body = self._read_json_body()
                account = body.get("account")
                posts = body.get("posts")
                if account not in ACCOUNTS or not isinstance(posts, list):
                    self._send_json({"ok": False, "error": "invalid request"}, 400)
                    return
                profile_photo = body.get("profile_photo")
                json_path = account_json_path(account)
                data = json.loads(json_path.read_text(encoding="utf-8"))
                data["posts"] = posts
                if isinstance(data.get("profile"), dict) and isinstance(
                    data["profile"].get("posts"), (int, float)
                ):
                    data["profile"]["posts"] = len(posts)
                if profile_photo and isinstance(data.get("profile"), dict):
                    data["profile"]["photo"] = profile_photo
                with json_path.open("w", encoding="utf-8") as fh:
                    json.dump(data, fh, ensure_ascii=False, indent=1)
                run_wrapper_and_copy()
                self._send_json({"ok": True})
                return

            if path == "/api/image":
                body = self._read_json_body()
                account = body.get("account")
                filename = body.get("filename")
                b64 = body.get("b64")
                kind = body.get("kind") or "post"
                if account not in ACCOUNTS or not filename or not b64:
                    self._send_json({"ok": False, "error": "invalid request"}, 400)
                    return
                if kind not in ("post", "profile"):
                    self._send_json({"ok": False, "error": "invalid kind"}, 400)
                    return

                if kind == "profile":
                    safe_name = profile_filename(account, sanitize_filename(filename))
                    target_dir = media_profiles_dir()
                    target_dir.mkdir(parents=True, exist_ok=True)
                    target_file = target_dir / safe_name
                    target_file.write_bytes(base64.b64decode(b64))

                    local_url = "/cdn/profiles/" + safe_name

                    self._send_json({
                        "ok": True,
                        "url": jsdelivr_profile_url(account, filename),
                        "local": local_url,
                    })
                    return

                safe_name = sanitize_filename(filename)
                target_dir = media_posts_dir(account)
                target_dir.mkdir(parents=True, exist_ok=True)
                target_file = target_dir / safe_name
                target_file.write_bytes(base64.b64decode(b64))

                media_dir = ACCOUNTS[account]["media_dir"]
                rel_parts = [p for p in (media_dir, "posts", safe_name) if p]
                local_url = "/cdn/" + "/".join(rel_parts)

                self._send_json({
                    "ok": True,
                    "url": jsdelivr_url(account, safe_name),
                    "local": local_url,
                })
                return

            if path == "/api/publish":
                message = "content(mySocials): update posts via local editor"
                cdn_log = git_publish_repo(
                    CDN_DIR,
                    [CDN_DIR / "b-Media" / "mySocials" / "static" / "media"],
                    message,
                )
                front_log = git_publish_repo(
                    FRONT_DIR,
                    [MYSOCIALS_DIR / "src" / "data", MYSOCIALS_DIR / "dist"],
                    message,
                )
                self._send_json({"ok": True, "log": cdn_log + "\n\n" + front_log})
                return

            self._send_json({"ok": False, "error": "not found"}, 404)
        except Exception as e:
            self._send_json({"ok": False, "error": str(e)}, 500)


def selfcheck():
    errors = []

    for account, info in ACCOUNTS.items():
        json_path = account_json_path(account)
        if not json_path.is_file():
            errors.append(f"missing json for account {account}: {json_path}")
            continue
        try:
            data = json.loads(json_path.read_text(encoding="utf-8"))
        except Exception as e:
            errors.append(f"invalid json for {account}: {e}")
            continue
        if not isinstance(data.get("posts"), list):
            errors.append(f"account {account} has no 'posts' list")

    if not WRAPPER_SCRIPT.is_file():
        errors.append(f"wrapper script missing: {WRAPPER_SCRIPT}")

    if not CDN_MEDIA_ROOT.is_dir():
        errors.append(f"CDN media root missing: {CDN_MEDIA_ROOT}")

    expected1 = (
        "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/"
        "b-Media/mySocials/static/media/diegocnmarcos_/posts/x.webp"
    )
    got1 = jsdelivr_url("ig0-diegocnmarcos_", "x.webp")
    if got1 != expected1:
        errors.append(f"jsdelivr url mismatch: {got1!r} != {expected1!r}")

    expected2 = (
        "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/"
        "b-Media/mySocials/static/media/posts/y.jpg"
    )
    got2 = jsdelivr_url("ig2-diegonmarcos", "y.jpg")
    if got2 != expected2:
        errors.append(f"jsdelivr url mismatch: {got2!r} != {expected2!r}")

    expected3 = (
        "https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/"
        "b-Media/mySocials/static/media/profiles/ig2-diegonmarcos.jpg"
    )
    got3 = jsdelivr_profile_url("ig2-diegonmarcos", "whatever.JPG")
    if got3 != expected3:
        errors.append(f"jsdelivr profile url mismatch: {got3!r} != {expected3!r}")

    if errors:
        for e in errors:
            print("FAIL:", e, file=sys.stderr)
        sys.exit(1)

    print("selfcheck OK")
    sys.exit(0)


def main():
    if "--selfcheck" in sys.argv:
        selfcheck()
        return

    server = HTTPServer((HOST, PORT), Handler)
    print(f"Serving mySocials editor at http://{HOST}:{PORT}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
