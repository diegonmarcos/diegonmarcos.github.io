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
# Reproducibility: compiles with the project's LOCAL `tsc` binary then runs
# with `node`. NEVER uses `npx` — that would pull from network/cache and
# break "same input → same output". The project's package.json MUST declare
# typescript + qr-code-styling + qrcode + sharp + jsdom in devDependencies,
# installed via `npm install` (also reproducible via package-lock.json).
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

# Resolve tsc via standard npm-monorepo lookup order:
#   1) project-local node_modules/.bin/tsc
#   2) walk up parent dirs until we find one (root node_modules/.bin/tsc
#      when deps were hoisted by `npm install` at the repo root — which
#      is what GHA does)
TSC_BIN=""
_dir="$PROJECT"
while [ "$_dir" != "/" ] && [ -n "$_dir" ]; do
    if [ -x "$_dir/node_modules/.bin/tsc" ]; then
        TSC_BIN="$_dir/node_modules/.bin/tsc"
        break
    fi
    _dir="$(dirname "$_dir")"
done

[ -x "$TSC_BIN" ] || {
    echo "✗ tsc not found anywhere from $PROJECT upward" >&2
    echo "  Declare typescript + qr-code-styling + qrcode + sharp + jsdom in package.json devDependencies (project or repo root) and run \`npm install\`." >&2
    exit 1
}

# Compile the generator to a temp dir and run with node.
TMP_OUT="$(mktemp -d)"
trap 'rm -rf "$TMP_OUT"' EXIT

"$TSC_BIN" \
    --target ES2020 \
    --module CommonJS \
    --moduleResolution node16 \
    --esModuleInterop true \
    --skipLibCheck true \
    --outDir "$TMP_OUT" \
    "$GENERATOR"

# Invoke the compiled generator. The generator's PROJECT_ROOT is computed
# from its own __dirname, so we pass it the original source path so it
# resolves assets relative to the project root correctly.
(
    cd "$PROJECT"
    node "$TMP_OUT/qr-code-generator.js" --manifest="$MANIFEST_REL"
)
