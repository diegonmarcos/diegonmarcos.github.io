#!/usr/bin/env bash
# ============================================================================
# 2_configs · unified-manifest consolidator
# ----------------------------------------------------------------------------
# Reads build.json (declarative spec); produces:
#   dist/front-data-builds.json    array  — every project's build.json
#   dist/front-data-links.json     object — linktree's link tree, merged
#   dist/front-data-projects.json  object — topology derived from build.jsons
#
# Pipeline:
#   1. populate-src       refresh src/builds/ + src/data-links/ symlinks
#   2. consolidate        emit dist/*.json from src/ symlinks (jq-driven)
# ============================================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$(readlink -f "$0")")/.." && pwd)"
SELF="$ROOT/2_configs"
CMD="${1:-build}"

log() { printf '[%s] %s\n' "$(date '+%H:%M:%S')" "$1"; }

step_populate_src() {
  log "▶ populate src/builds (symlinks to every project build.json)"
  mkdir -p "$SELF/src/builds"
  # Wipe stale symlinks first so deletions in the repo propagate.
  find "$SELF/src/builds" -maxdepth 1 -type l -delete 2>/dev/null || true

  local count=0
  while IFS= read -r bj; do
    rel="${bj#$ROOT/}"             # e.g. "c-Cloud/api/build.json" or "e-Root/build.json"
    proj_path="${rel%/build.json}" # → "c-Cloud/api"             or "e-Root"
    top="${proj_path%%/*}"
    # Skip tooling dirs (root or sub-folders that are not real projects)
    case "$top" in
      2_configs|1_workflows|0_docs|0_tasks|node_modules|.git|.github|I_*|II_*|z_*|.obsidian) continue ;;
    esac
    # Symlink name encodes the path: slashes → "__"
    name="${proj_path//\//__}.build.json"
    # Symlink target: relative-to-symlink up to repo root, then $proj_path/build.json
    ln -sf "../../../$proj_path/build.json" "$SELF/src/builds/$name"
    count=$((count + 1))
  done < <(find "$ROOT" -maxdepth 3 -name build.json \
            -not -path "$SELF/*" \
            -not -path "*/node_modules/*" \
            -not -path "*/dist*/*" \
            -not -path "*/.svelte-kit/*" 2>/dev/null)
  log "  $count project build.json symlinks linked"

  log "▶ populate src/data-links (linktree's 3 box JSONs)"
  mkdir -p "$SELF/src/data-links"
  find "$SELF/src/data-links" -maxdepth 1 -type l -delete 2>/dev/null || true
  local lcount=0
  for f in "$ROOT/a-Portals/linktree/src/data/"*.json; do
    [ -f "$f" ] || continue
    base=$(basename "$f")
    case "$base" in *.json.js) continue ;; esac
    ln -sf "../../../a-Portals/linktree/src/data/$base" "$SELF/src/data-links/$base"
    lcount=$((lcount + 1))
  done
  log "  $lcount linktree data symlinks linked"
}

step_consolidate() {
  log "▶ consolidate → dist/"
  mkdir -p "$SELF/dist"

  # 1) front-data-builds.json — array of every build.json with its repo path attached
  jq -s '
    map(.[0] as $first
        | $first
        | . + {_path: input_filename | sub("^.*/2_configs/src/builds/"; "") | sub("\\.build\\.json$"; "") | gsub("__"; "/")}
    )
  ' "$SELF/src/builds/"*.build.json 2>/dev/null > "$SELF/dist/front-data-builds.json" \
    || jq -n '[]' > "$SELF/dist/front-data-builds.json"
  # Simpler & more reliable: inject path via filename mapping
  jq -n --slurpfile arr <(
    for f in "$SELF/src/builds/"*.build.json; do
      [ -f "$f" ] || continue
      base=$(basename "$f" .build.json)
      proj_path=$(printf '%s' "$base" | sed 's|__|/|')
      jq --arg p "$proj_path" '. + {_path: $p}' "$f"
    done | jq -s '.'
  ) '$arr[0]' > "$SELF/dist/front-data-builds.json"
  count=$(jq 'length' "$SELF/dist/front-data-builds.json")
  log "  front-data-builds.json: $count projects"

  # 2) front-data-projects.json — topology: {category, project, path, port, framework, deploy_name}
  jq '
    [ .[]
      | { path: ._path,
          category: (._path | split("/")[0]),
          project:  (._path | split("/")[1]),
          name:     (.name // ""),
          framework:(.framework // "vanilla"),
          port:     (.port // null),
          deploy_name: ((.deploy.deploy_name // ._path | split("/")[1]))
        }
    ]
  ' "$SELF/dist/front-data-builds.json" > "$SELF/dist/front-data-projects.json"
  log "  front-data-projects.json: $(jq 'length' "$SELF/dist/front-data-projects.json") entries"

  # 3) front-data-links.json — flatten linktree's 3 box JSONs
  jq -s '
    {
      sections: ([ .[] | select(.section?) | { id: .section.id, title: .section.title, box: .section.box, slide_count: (.slides | length) } ]),
      slides:   ([ .[] | select(.section?) as $f | .slides[]?
                   | { section: $f.section.id, id: .id, kind: (.kind // "?"), title: (.title // .id),
                       columns: ([(.columns // [])[] | { header: (.header // ""), link_count: (.links | length) }]) } ]),
      links:    ([ .[] | select(.section?) as $f | .slides[]? | .columns[]? as $col
                   | $col.links[]? | { section: $f.section.id, slide: $f.section.id, column: ($col.header // ""), label: .label, url: (.url // ""), icon: (.icon // "") } ])
    }
  ' "$SELF/src/data-links/personal-profiles.json" \
    "$SELF/src/data-links/personal-tools.json" \
    "$SELF/src/data-links/professional-profiles.json" 2>/dev/null > "$SELF/dist/front-data-links.json" \
    || jq -n '{sections:[], slides:[], links:[]}' > "$SELF/dist/front-data-links.json"
  log "  front-data-links.json: $(jq '.sections|length' "$SELF/dist/front-data-links.json") sections, $(jq '.slides|length' "$SELF/dist/front-data-links.json") slides, $(jq '.links|length' "$SELF/dist/front-data-links.json") links"

  # 4) manifest.json — meta about all of the above
  jq -n \
    --arg ts "$(date -Iseconds)" \
    --argjson n_builds "$(jq 'length' "$SELF/dist/front-data-builds.json")" \
    --argjson n_proj   "$(jq 'length' "$SELF/dist/front-data-projects.json")" \
    --argjson n_sec    "$(jq '.sections|length' "$SELF/dist/front-data-links.json")" \
    --argjson n_slides "$(jq '.slides|length' "$SELF/dist/front-data-links.json")" \
    --argjson n_links  "$(jq '.links|length' "$SELF/dist/front-data-links.json")" \
    '{
      _meta: { generated_by: "2_configs/build.sh", timestamp: $ts },
      builds:   $n_builds,
      projects: $n_proj,
      links:    { sections: $n_sec, slides: $n_slides, links: $n_links },
      outputs:  [
        "dist/front-data-builds.json",
        "dist/front-data-projects.json",
        "dist/front-data-links.json"
      ]
    }' > "$SELF/dist/manifest.json"
  log "  manifest.json written"
}

step_clean() {
  log "▶ clean dist/"
  rm -rf "$SELF/dist"
}

case "$CMD" in
  build|"")        step_populate_src; step_consolidate ;;
  populate-src)    step_populate_src ;;
  consolidate)     step_consolidate ;;
  clean)           step_clean ;;
  rebuild)         step_clean; step_populate_src; step_consolidate ;;
  *) echo "Usage: $0 [build|populate-src|consolidate|clean|rebuild]" ; exit 2 ;;
esac

log "Done"
