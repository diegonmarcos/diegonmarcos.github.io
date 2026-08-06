#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-lighthouse-snapshot.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-lighthouse-snapshot.sh
#
# Runs Lighthouse against a target URL and prints the four core scores
# (Performance / Accessibility / BestPractices / SEO / PWA when applicable).
# Used as an A/B-test tool between Phase A→G iterations.
#
# Usage:
#     front-lighthouse-snapshot.sh [URL]
#
#     URL — full URL to audit. Default: http://localhost:8001
#
# Output: a one-line summary plus the JSON path for the full report.
#
# Dependencies (graceful skip if missing):
#     lighthouse — Chrome's CI auditor.  Nix: pkgs.lighthouse
#     google-chrome / chromium / chrome — headless browser
#
# Exit codes:
#     0 — success
#     1 — lighthouse missing
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

URL="${1:-http://localhost:8001}"

if ! command -v lighthouse >/dev/null 2>&1; then
    echo "✗ lighthouse not found. Add `pkgs.lighthouse` to the flake to enable." >&2
    exit 1
fi

OUT_DIR="${TMPDIR:-/tmp}/front-lighthouse-$(date +%s)"
mkdir -p "$OUT_DIR"
JSON="${OUT_DIR}/report.json"

lighthouse "$URL" \
    --output=json \
    --output-path="$JSON" \
    --quiet \
    --chrome-flags='--headless=new --no-sandbox' >/dev/null 2>&1 || true

if [ ! -s "$JSON" ]; then
    echo "✗ lighthouse produced no JSON report at $JSON" >&2
    exit 1
fi

# Extract the four big-picture scores via node (JSON in, four numbers out).
node -e "
  const r = require('$JSON');
  const c = r.categories || {};
  const pct = (k) => c[k] ? Math.round(c[k].score * 100) : '—';
  console.log(JSON.stringify({
    url: r.finalDisplayedUrl || r.requestedUrl,
    performance:    pct('performance'),
    accessibility:  pct('accessibility'),
    best_practices: pct('best-practices'),
    seo:            pct('seo'),
    pwa:            pct('pwa'),
  }, null, 2));
"
echo ""
echo "Full report: $JSON"
