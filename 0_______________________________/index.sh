#!/usr/bin/env bash
# Master-index generator. Reads the already-generated project registry
# (front-topology.json, emitted by `build.sh config`) and projects it into:
#   index.json       — canonical master index (grouped by category)
#   index.json.js    — PORTAL_DATA wrapper (repo forbids fetch(); file://-safe)
# ponytail: topology is the single source of truth — no folder re-scan, no
# deploy-name re-derivation. Regenerate the registry with `build.sh config`.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
topology="$here/../I_front-data/front-topology.json"
[ -f "$topology" ] || { echo "missing $topology — run 'build.sh config' first" >&2; exit 1; }

jq '{
  meta: { generated_from: "front-topology.json", project_count: (.projects | length) },
  categories: (
    .projects
    | map({ name, slug, path, category, framework, port })
    | group_by(.category)
    | map({ category: .[0].category, projects: (. | sort_by(.name)) })
    | sort_by(.category)
  )
}' "$topology" > "$here/index.json"

# PORTAL_DATA wrapper — index.script.js reads globalThis.PORTAL_DATA.index
{
  printf 'globalThis.PORTAL_DATA = globalThis.PORTAL_DATA || {};\n'
  printf 'globalThis.PORTAL_DATA.index = '
  cat "$here/index.json"
  printf ';\n'
} > "$here/index.json.js"

echo "wrote index.json + index.json.js ($(jq '.meta.project_count' "$here/index.json") projects)"
