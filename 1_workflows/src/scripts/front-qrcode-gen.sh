#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────
# front-qrcode-gen.sh
#
# Engine helper for the `qrcode_gen` build.json mod. Runs the project's
# TypeScript QR-code generator (src/typescript/qrcode/qr-code-generator.ts)
# against a manifest JSON, emitting:
#   • vCard 3.0 files declared in manifest.vcfFiles (default: src/public/*.vcf)
#   • Styled QR PNGs declared in manifest.qrcodes      (default: src/public/qr-code-*.png)
#   • The data-driven qrcode.html (default: src/qrcode.html)
#
# Reproducibility: invokes the project's LOCAL `tsx` binary
# (<project>/node_modules/.bin/tsx). NEVER uses `npx` — that would pull
# from network/cache and break "same input → same output". The project's
# package.json MUST declare tsx + qr-code-styling + qrcode + sharp + jsdom
# in devDependencies, installed via `npm install` (also reproducible
# via package-lock.json).
#
# Usage:
#     front-qrcode-gen.sh <project_dir> [manifest_rel_path]
#
#     <project_dir>      — absolute path to the project (contains build.json)
#     [manifest_rel_path]— relative to project_dir;
#                          default: src/typescript/qrcode/qrcodes.json
#
# Exit codes:
#     0 — success
#     1 — bad usage / project layout / tsx missing
#     2 — generator script failed
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

PROJECT="${1:-}"
MANIFEST_REL="${2:-src/typescript/qrcode/qrcodes.json}"

[ -n "$PROJECT" ] || { echo "✗ usage: front-qrcode-gen.sh <project_dir> [manifest_rel_path]" >&2; exit 1; }
[ -d "$PROJECT" ] || { echo "✗ project dir not found: $PROJECT" >&2; exit 1; }

GENERATOR="$PROJECT/src/typescript/qrcode/qr-code-generator.ts"
MANIFEST="$PROJECT/$MANIFEST_REL"

[ -f "$GENERATOR" ] || { echo "✗ qrcode generator not found: $GENERATOR" >&2; exit 1; }
[ -f "$MANIFEST" ]  || { echo "✗ qrcode manifest not found: $MANIFEST" >&2; exit 1; }

# Resolve tsx via standard npm-monorepo lookup order:
#   1) project-local node_modules/.bin/tsx
#   2) walk up parent dirs until we find one (root node_modules/.bin/tsx
#      when deps were hoisted by `npm install` at the repo root — which
#      is what GHA does)
TSX_BIN=""
_dir="$PROJECT"
while [ "$_dir" != "/" ] && [ -n "$_dir" ]; do
    if [ -x "$_dir/node_modules/.bin/tsx" ]; then
        TSX_BIN="$_dir/node_modules/.bin/tsx"
        break
    fi
    _dir="$(dirname "$_dir")"
done

[ -x "$TSX_BIN" ] || {
    echo "✗ tsx not found anywhere from $PROJECT upward" >&2
    echo "  Declare tsx + qr-code-styling + qrcode + sharp + jsdom in package.json devDependencies (project or repo root) and run \`npm install\`." >&2
    exit 1
}

# Invoke the generator with the absolute manifest path. The generator's
# PROJECT_ROOT is computed from its own location, so cwd doesn't matter,
# but we cd into the project for predictable relative paths.
(
    cd "$PROJECT"
    "$TSX_BIN" "$GENERATOR" --manifest="$MANIFEST_REL"
)
