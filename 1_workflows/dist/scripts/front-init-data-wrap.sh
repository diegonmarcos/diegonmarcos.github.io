#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-init-data-wrap.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-init-data-wrap.sh
#
# One-shot templater that wires the data-driven framework into a vanilla
# TS+CSS project: creates src/data/<slug>.json with one bootstrap field,
# patches build.json to add `data_wrap` + `copy` build steps, and patches
# src/index.html to load + apply the data (sets document.title from
# PORTAL_DATA[<slug>].title).
#
# Idempotent: re-running the script on a project that already has the
# wiring is a no-op.
#
# Usage:
#     front-init-data-wrap.sh <project-dir>
#
#     <project-dir> — directory containing build.json + src/index.html.
#
# Exit codes:
#     0 — success (wired, or already wired)
#     1 — invalid args / project layout
#     2 — JSON tooling missing (need node)
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

PROJECT_DIR="${1:-}"
[ -n "$PROJECT_DIR" ] || { echo "usage: $0 <project-dir>" >&2; exit 1; }
[ -d "$PROJECT_DIR" ] || { echo "✗ not a directory: $PROJECT_DIR" >&2; exit 1; }
[ -f "$PROJECT_DIR/build.json" ] || { echo "✗ no build.json in $PROJECT_DIR" >&2; exit 1; }
command -v node >/dev/null 2>&1 || { echo "✗ node required" >&2; exit 2; }

PROJECT_DIR="$(cd "$PROJECT_DIR" && pwd)"
DIR_BASENAME="$(basename "$PROJECT_DIR")"

# Slugify: lowercase + replace any non-alphanumeric with `-`. Used as the
# JSON filename + PORTAL_DATA key. Stable across runs (idempotent).
SLUG="$(printf '%s' "$DIR_BASENAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g; s/--*/-/g; s/^-//; s/-$//')"

DATA_DIR="$PROJECT_DIR/src/data"
DATA_JSON="$DATA_DIR/$SLUG.json"
HTML="$PROJECT_DIR/src/index.html"

# ── Step 1: src/data/<slug>.json ─────────────────────────────────────
mkdir -p "$DATA_DIR"

if [ -f "$DATA_JSON" ]; then
    echo "  · $SLUG.json already exists (skipping)"
else
    # Seed the JSON with the project's existing <title> (or the slug if
    # the HTML has no title or the HTML is missing). Bootstrap field —
    # subsequent edits add real fields.
    title=""
    if [ -f "$HTML" ]; then
        title="$(node -e '
var fs=require("fs");
var html=fs.readFileSync(process.argv[1],"utf8");
var m=html.match(/<title>([\s\S]*?)<\/title>/i);
process.stdout.write(m ? m[1].trim() : "");
' "$HTML")" || title=""
    fi
    [ -n "$title" ] || title="$SLUG"

    node -e '
var fs=require("fs");
var data={
  "_description": "Bootstrap data-driven entry. Add fields here; consume them in HTML/TS via globalThis.PORTAL_DATA[\"" + process.argv[2] + "\"].<field>.",
  "title": process.argv[3]
};
fs.writeFileSync(process.argv[1], JSON.stringify(data,null,2)+"\n");
' "$DATA_JSON" "$SLUG" "$title"
    echo "  ✓ created $SLUG.json (title='$title')"
fi

# ── Step 2: build.json — add data_wrap + copy steps if missing ───────
node -e '
var fs=require("fs"), path=require("path");
var bjPath=process.argv[1], slug=process.argv[2];
var bj=JSON.parse(fs.readFileSync(bjPath,"utf8"));
bj.build = bj.build || [];

var hasWrap = bj.build.some(function(s){ return s.mod==="data_wrap" && s.dir==="src/data"; });
var hasCopy = bj.build.some(function(s){ return s.mod==="copy" && s.files==="data-*.json.js" && s.from==="src/data"; });

var changed = false;
// Insert data_wrap as the FIRST step (so wrappers exist before any copy
// step that depends on them). Skip if already present.
if (!hasWrap) {
    bj.build.unshift({
        "_doc": "Wrap every *.json in src/data/ as a globalThis.PORTAL_DATA[<key>] companion (data-*.json.js). Engine: front-data-json-js-wrapper.sh.",
        "mod": "data_wrap",
        "dir": "src/data"
    });
    changed = true;
}
// Append copy step right after the wrap step (or at end if not contiguous).
if (!hasCopy) {
    var wrapIdx = bj.build.findIndex(function(s){ return s.mod==="data_wrap" && s.dir==="src/data"; });
    var copyStep = {
        "_doc": "Ship the wrapped data-*.json.js companions to dist/ root, so HTML can load them with <script src=\"data-<KEY>.json.js\"></script> — no fetch, no CORS.",
        "mod": "copy",
        "files": "data-*.json.js",
        "from": "src/data"
    };
    if (wrapIdx >= 0 && wrapIdx + 1 <= bj.build.length) {
        bj.build.splice(wrapIdx + 1, 0, copyStep);
    } else {
        bj.build.push(copyStep);
    }
    changed = true;
}

if (changed) {
    fs.writeFileSync(bjPath, JSON.stringify(bj,null,2)+"\n");
    console.log("  ✓ build.json patched (data_wrap + copy steps added)");
} else {
    console.log("  · build.json already wired (skipping)");
}
' "$PROJECT_DIR/build.json" "$SLUG"

# ── Step 3: src/index.html — load + consume data ─────────────────────
if [ ! -f "$HTML" ]; then
    echo "  · no src/index.html — HTML wiring skipped (data still loaded by build)"
    exit 0
fi

if grep -q "data-${SLUG}.json.js" "$HTML" 2>/dev/null; then
    echo "  · HTML already loads data-${SLUG}.json.js (skipping)"
    exit 0
fi

# Insert two tags right before </head>:
#   1. <script src="data-<slug>.json.js"></script>   (sync — defines PORTAL_DATA)
#   2. <script>document.title = PORTAL_DATA[...].title || document.title;</script>
node -e '
var fs=require("fs");
var path=process.argv[1], slug=process.argv[2];
var html=fs.readFileSync(path,"utf8");
var inject =
"\n    <!-- Data-driven framework: PORTAL_DATA[\"" + slug + "\"] hydrated by front-data-json-js-wrapper.sh -->\n" +
"    <script src=\"data-" + slug + ".json.js\"></script>\n" +
"    <script>(function(){var d=globalThis.PORTAL_DATA&&PORTAL_DATA[\"" + slug + "\"];if(d&&d.title)document.title=d.title;})();</script>\n  ";
if (/<\/head>/i.test(html)) {
    html = html.replace(/(<\/head>)/i, inject + "$1");
} else {
    html = inject + html;
}
fs.writeFileSync(path, html);
console.log("  ✓ HTML wired (data-" + slug + ".json.js + title hydrator before </head>)");
' "$HTML" "$SLUG"
