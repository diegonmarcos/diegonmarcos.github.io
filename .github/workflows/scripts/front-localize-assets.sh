#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════════╗
# ║                                                                  ║
# ║   GENERATED FILE — DO NOT EDIT                                   ║
# ║                                                                  ║
# ║   Source : 1_workflows/src/scripts/front-localize-assets.sh
# ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
# ║   Rebuild: ./1_workflows/build.sh
# ║                                                                  ║
# ║   Manual edits will be overwritten on next build.                ║
# ║                                                                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────────────────────────────
# front-localize-assets.sh
#
# Bring remote banner URLs into the project's local public/ tree.
# Reads a manifest JSON describing { slide, remote, local } entries
# and:
#   1. Downloads each `remote` URL → `<PUBLIC_BASE>/<local>` (idempotent:
#      skips if the file is already on disk and non-empty).
#   2. Rewrites every JSON file in `DATA_DIR` to replace the literal
#      `remote` URL with the relative `<local>` path. Idempotent.
#
# Why a manifest? — one place to declare URL ↔ local-name mappings, one
# engine to enforce them. Adding a new banner = JSON edit only.
#
# Usage:
#   front-localize-assets.sh MANIFEST DATA_DIR PUBLIC_BASE
#
#     MANIFEST     — banners.json (object with `assets: [{remote,local}, …]`)
#     DATA_DIR     — directory containing the *.json files to rewrite
#     PUBLIC_BASE  — directory `local` paths are resolved against
#                    (e.g. linktree/ → so `public/images/banners/X` is
#                    placed at linktree/public/images/banners/X)
#
# Exit codes:
#   0 — success
#   2 — bad arguments / missing files
#   3 — download failure for any URL
# ──────────────────────────────────────────────────────────────────────
set -euo pipefail

MANIFEST="${1:-}"
DATA_DIR="${2:-}"
PUBLIC_BASE="${3:-}"

if [ -z "$MANIFEST" ] || [ -z "$DATA_DIR" ] || [ -z "$PUBLIC_BASE" ]; then
    grep -E '^# (Usage|MANIFEST|DATA_DIR|PUBLIC_BASE)' "$0" >&2
    exit 2
fi
[ -f "$MANIFEST" ]    || { echo "✗ manifest not found: $MANIFEST" >&2; exit 2; }
[ -d "$DATA_DIR" ]    || { echo "✗ DATA_DIR not a directory: $DATA_DIR" >&2; exit 2; }
[ -d "$PUBLIC_BASE" ] || { echo "✗ PUBLIC_BASE not a directory: $PUBLIC_BASE" >&2; exit 2; }

if ! command -v curl >/dev/null 2>&1; then
    echo "✗ curl required" >&2
    exit 2
fi

# Pull rows out of the manifest. Each asset becomes one TSV row:
#   <remote>\t<canonical_local>\t<alias1>,<alias2>,...
# `aliases` is an OPTIONAL array of secondary local paths that should
# be byte-identical copies of the canonical download — useful when one
# remote URL is referenced under multiple semantic names (e.g. the
# original "MY TOOLS" banner now serves both the `media` slide AND the
# TOOLCHAIN overview, but each consumer references its own filename).
mapfile -t rows < <(node -e "
  const m = require('$MANIFEST');
  for (const a of (m.assets || [])) {
    if (!a.remote || !a.local) continue;
    const aliases = Array.isArray(a.aliases) ? a.aliases.join(',') : '';
    process.stdout.write(a.remote + '\t' + a.local + '\t' + aliases + '\n');
  }
")

if [ ${#rows[@]} -eq 0 ]; then
    echo "ℹ manifest declares no assets — nothing to do" >&2
    exit 0
fi

count_dl=0; count_skip=0; count_alias=0
declare -A REWRITES   # remote → canonical local
for row in "${rows[@]}"; do
    IFS=$'\t' read -r remote local_rel aliases_csv <<<"$row"
    REWRITES["$remote"]="$local_rel"

    target="${PUBLIC_BASE%/}/${local_rel}"
    mkdir -p "$(dirname "$target")"

    if [ -s "$target" ]; then
        count_skip=$((count_skip + 1))
    else
        # -L follow redirects, -f fail on HTTP errors, -s silent + -S keep err
        if curl -fsSL -A 'Mozilla/5.0 (linktree-localize)' -o "$target" "$remote"; then
            count_dl=$((count_dl + 1))
            echo "  ✓ $remote → $local_rel"
        else
            echo "  ✗ download failed: $remote" >&2
            rm -f "$target"
            exit 3
        fi
    fi

    # Alias step: byte-copy the canonical download into each alias path
    # (idempotent — skip if alias already exists and is non-empty).
    if [ -n "$aliases_csv" ]; then
        IFS=',' read -ra alias_arr <<<"$aliases_csv"
        for alias_rel in "${alias_arr[@]}"; do
            [ -z "$alias_rel" ] && continue
            alias_target="${PUBLIC_BASE%/}/${alias_rel}"
            mkdir -p "$(dirname "$alias_target")"
            if [ -s "$alias_target" ]; then continue; fi
            cp -f "$target" "$alias_target"
            count_alias=$((count_alias + 1))
            echo "  ↪ alias  → $alias_rel"
        done
    fi
done

# Rewrite step — for every *.json in DATA_DIR, do the URL → local path
# substitution. Use node so we don't risk sed eating special chars.
shopt -s nullglob
json_files=( "$DATA_DIR"/*.json )
shopt -u nullglob

if [ ${#json_files[@]} -eq 0 ]; then
    echo "ℹ no *.json files in $DATA_DIR — skipping rewrite" >&2
else
    # Pass the rewrite map as a JSON env var.
    map_json="$(node -e "
      const m = require('$MANIFEST');
      const o = {};
      for (const a of (m.assets || [])) if (a.remote && a.local) o[a.remote] = a.local;
      process.stdout.write(JSON.stringify(o));
    ")"

    for f in "${json_files[@]}"; do
        # Skip the manifest itself.
        [ "$(realpath "$f")" = "$(realpath "$MANIFEST")" ] && continue
        REWRITE_MAP="$map_json" node -e "
          const fs = require('fs');
          const map = JSON.parse(process.env.REWRITE_MAP);
          let s = fs.readFileSync('$f', 'utf8');
          let n = 0;
          for (const [remote, local] of Object.entries(map)) {
            // Escape regex special chars in URL.
            const esc = remote.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\\$&');
            const re = new RegExp(esc, 'g');
            const before = s;
            s = s.replace(re, local);
            if (s !== before) n += (before.match(re) || []).length;
          }
          if (n > 0) fs.writeFileSync('$f', s);
          if (n > 0) console.log('  ↻ rewrote ' + n + ' ref(s) in ' + '$f'.replace(/^.*\\//,''));
        "
    done
fi

echo "─────────────────────────────"
printf '✓ downloaded %d, already-cached %d, aliased %d, rewrote refs in %d JSON file(s)\n' \
    "$count_dl" "$count_skip" "$count_alias" "${#json_files[@]}"
