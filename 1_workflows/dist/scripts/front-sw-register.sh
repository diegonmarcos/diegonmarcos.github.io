#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-sw-register.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-sw-register.sh
#
# Inject the SW-registration <script> block right before </head> in
# every listed HTML file. Pulls the snippet from
# `1_workflows/src/templates/sw-register-snippet.html` so the markup is
# data-driven (edit one file, re-deploy, every project picks up the new
# behaviour on its next build).
#
# Idempotent. The snippet starts with the marker comment
# `<!-- sw-register: injected by mod_sw_register`; if that string is
# already present in the target file, the script is a no-op for that
# file. Re-running on a project that's already been processed leaves
# every byte unchanged.
#
# Usage:
#   front-sw-register.sh <dist_dir> <repo_root> <html_files_csv>
#
#     dist_dir       — absolute path to the project's dist/ directory.
#     repo_root      — absolute path to the front/ repo root (locates
#                      the snippet template).
#     html_files_csv — comma-separated list of dist-relative HTML file
#                      names (e.g. "index.html,error.html").
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
    grep -E '^#' "$0" | head -35 >&2
    exit 2
fi

DIST_DIR="$1"
REPO_ROOT="$2"
FILES_CSV="$3"

[ -d "$DIST_DIR" ]  || { echo "✗ sw-register: dist dir not found: $DIST_DIR" >&2; exit 2; }
[ -d "$REPO_ROOT" ] || { echo "✗ sw-register: repo root not found: $REPO_ROOT" >&2; exit 2; }

# Locate the snippet (same dist/src fallback pattern as the other helpers).
SNIPPET="$REPO_ROOT/1_workflows/dist/templates/sw-register-snippet.html"
[ -f "$SNIPPET" ] || SNIPPET="$REPO_ROOT/1_workflows/src/templates/sw-register-snippet.html"
[ -f "$SNIPPET" ] || { echo "✗ sw-register: snippet not found (dist/templates or src/templates)" >&2; exit 2; }

# Marker — must match the first line of the snippet exactly so a single
# substring check is enough to detect prior injection.
MARKER='<!-- sw-register: injected by mod_sw_register'

injected=0
already=0
missing_head=0

# Split CSV → iterate files.
old_ifs="$IFS"
IFS=','
for raw in $FILES_CSV; do
    IFS="$old_ifs"
    f="$(printf '%s' "$raw" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')"
    [ -z "$f" ] && { IFS=','; continue; }
    target="$DIST_DIR/$f"
    if [ ! -f "$target" ]; then
        echo "  ! sw-register: $f not found in dist (skipped)" >&2
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
        echo "  ! sw-register: $f has no </head> tag (skipped)" >&2
        missing_head=$((missing_head + 1))
        IFS=','
        continue
    fi
    # Inject snippet right before the FIRST </head> match. awk is the
    # safest tool here — sed -i with multi-line replacement is fragile
    # across BSD/GNU and easy to mis-quote when the snippet contains
    # slashes, parens, ampersands.
    tmp="$(mktemp)"
    awk -v snippet_file="$SNIPPET" '
        BEGIN { injected = 0 }
        # First </head> only — leave any duplicates alone.
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
