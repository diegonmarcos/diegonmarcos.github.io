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
# Uses the system `tsc` (installed via nix on the build server) then runs
# the compiled output with `node`. The project's package.json declares
# qr-code-styling + qrcode + sharp + jsdom in devDependencies.
#
# Usage:
#     qrcode-gen.sh <project_dir> [manifest_rel_path]
#
#     <project_dir>      — absolute path to the project (contains build.json)
#     [manifest_rel_path]— relative to project_dir;
#                          default: src/typescript/qrcode/qrcodes.json
#
# Exit codes:
#     0 — success
#     1 — bad usage / project layout / tsc missing
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

TSC_BIN="$(command -v tsc 2>/dev/null)"
if [ -z "$TSC_BIN" ]; then
    echo "⚠ tsc not found in PATH — skipping QR regeneration (existing src/public/qr-code-*.png will be used). Install typescript via the system package manager to enable regeneration." >&2
    exit 0
fi

# Resolve the repo root so we can pass its node_modules to NODE_PATH.
# The compiled output lands in a temp dir with no node_modules, so without
# NODE_PATH node cannot find jsdom, sharp, qrcode, etc.
REPO_ROOT="$(git -C "$PROJECT" rev-parse --show-toplevel 2>/dev/null || true)"
NODE_MODULES_PATH=""
if [ -n "$REPO_ROOT" ] && [ -d "$REPO_ROOT/node_modules" ]; then
    NODE_MODULES_PATH="$REPO_ROOT/node_modules"
elif [ -d "$PROJECT/node_modules" ]; then
    NODE_MODULES_PATH="$PROJECT/node_modules"
fi

# Compile the generator to a temp dir and run with node.
TMP_OUT="$(mktemp -d)"
trap 'rm -rf "$TMP_OUT"' EXIT

"$TSC_BIN" \
    --target ES2020 \
    --module node16 \
    --moduleResolution node16 \
    --esModuleInterop true \
    --skipLibCheck true \
    --outDir "$TMP_OUT" \
    "$GENERATOR"

# Invoke the compiled generator. The generator's PROJECT_ROOT is computed
# from its own __dirname, so we pass it the original source path so it
# resolves assets relative to the project root correctly.
# NODE_PATH lets node find packages installed in the repo root node_modules
# even though the compiled output lives in a temp directory.
(
    cd "$PROJECT"
    NODE_PATH="${NODE_MODULES_PATH}${NODE_PATH:+:$NODE_PATH}" \
        node "$TMP_OUT/qr-code-generator.js" --manifest="$MANIFEST_REL"
)
