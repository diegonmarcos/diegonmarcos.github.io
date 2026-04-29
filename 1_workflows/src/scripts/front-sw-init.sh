#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────
# front-sw-init.sh
#
# Bootstrap a project for the SW-hashing system. Two responsibilities:
#
#   1. Copy the canonical template SW
#      (1_workflows/src/templates/script-service-worker.ts)
#      into <project>/src/typescript/script-service-worker.ts. NEVER
#      overwrites an existing file — projects with custom SWs (e.g.
#      linktree's GDELT carve-out) keep theirs untouched.
#
#   2. Inspect <project>/build.json + <project>/dist/ to suggest the
#      `esbuild_sw` block that should be appended to build.json. Prints
#      the suggestion as a JSON object on stdout. Does NOT modify
#      build.json — the rollout helper does that step explicitly so
#      humans review the diff.
#
# The suggestion uses build.json's existing `build` array as the source
# of truth (data-driven): every `output` field with extension .js/.css
# becomes a hash_of entry; every copied .html becomes both a hash_of
# entry and a precache entry. "./" is always added to precache so the
# scope root is covered for offline navigation.
#
# Usage:
#   front-sw-init.sh <project_dir>          # copy template + print suggestion
#   front-sw-init.sh --suggest <project_dir>  # only print suggestion
#   front-sw-init.sh --copy-template <project_dir>   # only copy template
#
# Exit codes:
#   0 — success
#   2 — bad usage / missing project / missing template / build.json invalid
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
TEMPLATE="$REPO_ROOT/1_workflows/src/templates/script-service-worker.ts"

mode="all"
case "${1:-}" in
    --suggest)        mode="suggest";       shift ;;
    --copy-template)  mode="copy-template"; shift ;;
esac

PROJECT="${1:-}"
[ -n "$PROJECT" ] || { echo "✗ usage: front-sw-init.sh [--suggest|--copy-template] <project_dir>" >&2; exit 2; }
[ -d "$PROJECT" ] || { echo "✗ project not found: $PROJECT" >&2; exit 2; }
[ -f "$PROJECT/build.json" ] || { echo "✗ build.json not found in $PROJECT" >&2; exit 2; }
[ -f "$TEMPLATE" ] || { echo "✗ template SW not found: $TEMPLATE" >&2; exit 2; }

# ─── Copy template (idempotent — never overwrites) ─────────────
copy_template() {
    local dest="$PROJECT/src/typescript/script-service-worker.ts"
    if [ -f "$dest" ]; then
        echo "→ SW source already present, leaving it untouched: $dest" >&2
        return 0
    fi
    mkdir -p "$(dirname "$dest")"
    cp "$TEMPLATE" "$dest"
    echo "→ copied template SW to $dest" >&2
}

# ─── Suggest esbuild_sw block from build.json + dist/ ──────────
# Delegates to node — same parser the engine itself uses to read
# build.json, so we're guaranteed schema consistency.
suggest() {
    PROJECT="$PROJECT" node -e '
const fs = require("fs");
const path = require("path");
const proj = process.env.PROJECT;
const cfg = JSON.parse(fs.readFileSync(path.join(proj, "build.json"), "utf8"));
const build = cfg.build || [];

// Skip if esbuild_sw already present.
if (build.some(s => s.mod === "esbuild_sw")) {
  process.stderr.write("→ esbuild_sw already present, no suggestion needed\n");
  process.exit(0);
}

const hashOf = new Set();
const precache = new Set(["./"]);

// First pass — collect files that the inline mod consumes (and deletes
// from dist/). These must NOT appear in hash_of or precache, even if a
// preceding esbuild/sass step listed them as outputs.
const inlinedAway = new Set();
for (const step of build) {
  if (step.mod === "inline") {
    if (step.css) inlinedAway.add(step.css);
    if (step.js)  inlinedAway.add(step.js);
  }
}

for (const step of build) {
  if (!step.mod) continue;
  // Direct outputs with relevant extensions.
  if (step.output && /\.(js|css|html)$/i.test(step.output) && !inlinedAway.has(step.output)) {
    hashOf.add(step.output);
    precache.add("./" + step.output);
  }
  // Copied files: glob may include *.html / specific names.
  if (step.mod === "copy" && step.files) {
    const items = String(step.files).split(",").map(s => s.trim()).filter(Boolean);
    for (const it of items) {
      if (it.includes("*")) {
        // Glob — peek at dist/ for files that match the extension.
        // When the pattern has no extension (e.g. "*"), accept any of
        // the three relevant types so wildcard-copies still get covered.
        const ext = path.extname(it).toLowerCase();
        const accepted = ext ? [ext] : [".js", ".css", ".html"];
        try {
          for (const f of fs.readdirSync(path.join(proj, "dist"))) {
            const fext = path.extname(f).toLowerCase();
            if (accepted.includes(fext)
                && !f.startsWith("script-service-worker")
                && !inlinedAway.has(f)) {
              hashOf.add(f);
              precache.add("./" + f);
            }
          }
        } catch { /* dist not built yet */ }
      } else {
        // Specific filename.
        if (/\.(js|css|html)$/i.test(it) && !inlinedAway.has(it)) {
          hashOf.add(it);
          precache.add("./" + it);
        }
      }
    }
  }
  // Inline mod merges css/js into html — only the html survives in dist.
  if (step.mod === "inline" && step.html) {
    hashOf.add(step.html);
    precache.add("./" + step.html);
  }
}

// No hashable assets in dist/ — refuse to suggest a block. The rollout
// treats this as a SKIP rather than patching in a broken (empty
// hash_of) step that would fail at build time.
if (hashOf.size === 0) {
  process.stderr.write("→ no hashable assets in dist/ (no .html/.js/.css copied or built); skipping\n");
  process.exit(3);
}

const block = {
  _doc: "MUST run last — hashes the dist artifacts above to derive BUILD_HASH and inject it into the SW bundle.",
  mod: "esbuild_sw",
  input: "src/typescript/script-service-worker.ts",
  output: "script-service-worker.js",
  format: "iife",
  target: "es2020",
  hash_of: [...hashOf].sort(),
  precache: [...precache].sort()
};

process.stdout.write(JSON.stringify(block, null, 2));
process.stdout.write("\n");
'
}

case "$mode" in
    all)            copy_template; suggest ;;
    suggest)        suggest ;;
    copy-template)  copy_template ;;
esac
