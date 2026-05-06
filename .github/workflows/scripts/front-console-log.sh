#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-console-log.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-console-log.sh
#
# Inject the console-log capture <script> block right before </head> in
# every listed HTML file. Pulls the snippet from
# `1_workflows/src/templates/console-log-snippet.html` so the markup is
# data-driven (edit one file, re-deploy, every project picks up the new
# behaviour on its next build).
#
# The snippet captures: console.* / window.onerror / unhandledrejection /
# service-worker lifecycle / page lifecycle / resource-load failures, and
# ships them via sendBeacon to http://localhost:19001 — the local
# `server-log-receiver.sh` daemon, which appends JSONL to
# `browser-console.log` in the front repo root.
#
# Idempotent. The snippet starts with the marker comment
# `<!-- console-log: injected by mod_console_log`; if that string is
# already present in the target file, the script is a no-op for that
# file. Re-running on a project that's already been processed leaves
# every byte unchanged.
#
# Pairs with `mod_sw_register` — order in build.json doesn't matter for
# correctness, but conventionally inject console_log AFTER sw_register so
# the SW boilerplate sees the global console hooks already in place.
#
# Usage:
#   front-console-log.sh <dist_dir> <repo_root> <html_files_csv>
#
#     dist_dir       — absolute path to the project's dist/ directory.
#     repo_root      — absolute path to the front/ repo root (locates
#                      the snippet template).
#     html_files_csv — comma-separated list of dist-relative HTML file
#                      names (e.g. "index.html,error.html"), OR the
#                      special token "*" to inject into every *.html
#                      found at the top level of dist_dir.
#
# Output (stdout):
#   Per-file status lines: "  ✓ <file>" (injected) or
#                          "  → <file> (already injected)"
#   Final summary line: "<n> file(s) injected, <m> already done"
#
# Exit codes:
#   0 — success
#   2 — bad usage / missing snippet / missing dist_dir
#   3 — at least one HTML file lacked </head> tag
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

if [ "$#" -lt 3 ]; then
    grep -E '^#' "$0" | head -45 >&2
    exit 2
fi

DIST_DIR="$1"
REPO_ROOT="$2"
FILES_CSV="$3"

[ -d "$DIST_DIR" ]  || { echo "✗ console-log: dist dir not found: $DIST_DIR" >&2; exit 2; }
[ -d "$REPO_ROOT" ] || { echo "✗ console-log: repo root not found: $REPO_ROOT" >&2; exit 2; }

# "*" → enumerate every dist/*.html (sorted, deterministic). Done in the
# script (not the engine) so _engine.sh doesn't need a per-mod wrapper.
if [ "$FILES_CSV" = "*" ]; then
    FILES_CSV=""
    for f in "$DIST_DIR"/*.html; do
        [ -f "$f" ] || continue
        FILES_CSV="${FILES_CSV:+$FILES_CSV,}$(basename "$f")"
    done
    if [ -z "$FILES_CSV" ]; then
        echo "→ console-log: no *.html in $DIST_DIR, skipping" >&2
        exit 0
    fi
fi

SNIPPET="$REPO_ROOT/1_workflows/dist/templates/console-log-snippet.html"
[ -f "$SNIPPET" ] || SNIPPET="$REPO_ROOT/1_workflows/src/templates/console-log-snippet.html"
[ -f "$SNIPPET" ] || { echo "✗ console-log: snippet not found (dist/templates or src/templates)" >&2; exit 2; }

# Companion reader/locator — TypeScript source compiled to a same-origin
# console-logs.js shipped alongside index.html so the inline writer's
# `<script src="console-logs.js">` resolves locally. Always overwrite
# (file is small, deterministic, no per-project content).
TS_SRC="$REPO_ROOT/1_workflows/dist/templates/console-logs.ts"
[ -f "$TS_SRC" ] || TS_SRC="$REPO_ROOT/1_workflows/src/templates/console-logs.ts"
[ -f "$TS_SRC" ] || { echo "✗ console-log: console-logs.ts not found (dist/templates or src/templates)" >&2; exit 2; }
ESBUILD_BIN="esbuild"
command -v esbuild >/dev/null 2>&1 || ESBUILD_BIN="npx esbuild"
$ESBUILD_BIN "$TS_SRC" --bundle --format=iife --target=es2020 --minify \
    --outfile="$DIST_DIR/console-logs.js" >/dev/null 2>&1 \
    || { echo "✗ console-log: esbuild failed for $TS_SRC" >&2; exit 2; }
printf '  ✓ %s (companion reader API)\n' 'console-logs.js'

MARKER='<!-- console-log: injected by mod_console_log'

injected=0
already=0
missing_head=0

old_ifs="$IFS"
IFS=','
for raw in $FILES_CSV; do
    IFS="$old_ifs"
    f="$(printf '%s' "$raw" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')"
    [ -z "$f" ] && { IFS=','; continue; }
    target="$DIST_DIR/$f"
    if [ ! -f "$target" ]; then
        echo "  ! console-log: $f not found in dist (skipped)" >&2
        IFS=','
        continue
    fi
    if grep -qF -- "$MARKER" "$target" 2>/dev/null; then
        printf '  → %s (already injected)\n' "$f"
        already=$((already + 1))
        IFS=','
        continue
    fi
    if ! grep -qiE '</head[[:space:]]*>' "$target"; then
        echo "  ! console-log: $f has no </head> tag (skipped)" >&2
        missing_head=$((missing_head + 1))
        IFS=','
        continue
    fi
    tmp="$(mktemp)"
    awk -v snippet_file="$SNIPPET" '
        BEGIN { injected = 0 }
        !injected && /<\/head[[:space:]]*>/ {
            while ((getline line < snippet_file) > 0) print line
            close(snippet_file)
            injected = 1
        }
        { print }
    ' "$target" > "$tmp"
    mv "$tmp" "$target"
    printf '  ✓ %s\n' "$f"
    injected=$((injected + 1))
    IFS=','
done
IFS="$old_ifs"

printf '%d file(s) injected, %d already done\n' "$injected" "$already"

[ "$missing_head" -gt 0 ] && exit 3
exit 0
