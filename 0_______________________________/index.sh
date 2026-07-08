#!/usr/bin/env bash
# Master-index generator. Reads the already-generated project registry
# (front-topology.json, emitted by `build.sh config`) and projects it into:
#   data.json        — canonical master index (grouped by category), fetched by script.js
# ponytail: topology is the single source of truth — no folder re-scan, no
# deploy-name re-derivation. Regenerate the registry with `build.sh config`.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
topology="$here/../front-topology.json"   # tracked symlink → 2_configs/dist/front-topology.json
[ -f "$topology" ] || { echo "missing $topology — run 'build.sh config' first" >&2; exit 1; }

jq '{
  meta: { generated_from: "front-topology.json", project_count: (.projects | length) },
  categories: (
    .projects
    | map({ name, slug, path, category, framework, port, has_dist })
    | group_by(.category)
    | map({ category: .[0].category, projects: (. | sort_by(.name)) })
    | sort_by(.category)
  )
}' "$topology" > "$here/data.json"

echo "wrote data.json ($(jq '.meta.project_count' "$here/data.json") projects)"
