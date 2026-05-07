#!/usr/bin/env bash
# ============================================================================
# front/2_configs — consolidator + deriver (cloud/2_configs parity)
# ----------------------------------------------------------------------------
# Pipeline:
#   1. populate-src   refresh symlinks in src/{builds,data-links,inputs}
#   2. consolidate    merge all inputs → dist/_front-data-consolidated.json
#   3. derive         emit dist/front-data-*.json + dist/build-<cat>__<proj>.json
#   4. validate       link-targets + deploy-coverage drift checks
#
# Commands:  build (default = all)  populate-src  consolidate  derive
#            validate  clean  rebuild
# ============================================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$(readlink -f "$0")")/.." && pwd)"
SELF="$ROOT/2_configs"
SRC="$SELF/src"
DIST="$SELF/dist"
CMD="${1:-build}"

log()  { printf '[%s] %s\n' "$(date '+%H:%M:%S')" "$*"; }
sect() { printf '\n\033[1;34m▶ %s\033[0m\n' "$*"; }

# ── helpers ─────────────────────────────────────────────────────────────────
# Map every project on disk → canonical "<cat>__<proj>" key.
# Print one line per project: "cat<TAB>proj<TAB>cat__proj<TAB>repo_path"
list_projects() {
  while IFS= read -r bj; do
    rel="${bj#$ROOT/}"
    proj_path="${rel%/build.json}"
    top="${proj_path%%/*}"
    case "$top" in
      2_configs|1_workflows|0_docs|0_tasks|node_modules|.git|.github|I_*|II_*|z_*|.obsidian) continue ;;
    esac
    if [[ "$proj_path" == */* ]]; then
      cat="${proj_path%%/*}"; proj="${proj_path#*/}"
    else
      cat="-"; proj="$proj_path"
    fi
    key="${proj_path//\//__}"
    printf '%s\t%s\t%s\t%s\n' "$cat" "$proj" "$key" "$proj_path"
  done < <(find "$ROOT" -maxdepth 3 -name build.json \
            -not -path "$SELF/*" \
            -not -path "*/node_modules/*" \
            -not -path "*/dist*/*" \
            -not -path "*/.svelte-kit/*" 2>/dev/null | sort)
}

# ── Phase 0: populate-src ───────────────────────────────────────────────────
step_populate_src() {
  sect "Phase 0 · populate-src (symlinks to all SoT inputs)"
  mkdir -p "$SRC/builds" "$SRC/data-links" "$SRC/inputs/package-jsons" "$SRC/inputs/manifests"

  # builds — symlinks to every project's build.json
  find "$SRC/builds" -maxdepth 1 -type l -delete 2>/dev/null || true
  local n_b=0
  while IFS=$'\t' read -r cat proj key proj_path; do
    ln -sf "../../../$proj_path/build.json" "$SRC/builds/$key.build.json"
    n_b=$((n_b+1))
  done < <(list_projects)
  log "  builds:        $n_b symlinks"

  # data-links — linktree's box JSONs (skip wrappers)
  find "$SRC/data-links" -maxdepth 1 -type l -delete 2>/dev/null || true
  local n_d=0
  for f in "$ROOT/a-Portals/linktree/src/data/"*.json; do
    [ -f "$f" ] || continue
    base=$(basename "$f")
    case "$base" in *.json.js) continue ;; esac
    ln -sf "../../../a-Portals/linktree/src/data/$base" "$SRC/data-links/$base"
    n_d=$((n_d+1))
  done
  log "  data-links:    $n_d symlinks"

  # ship.yml + root config.json (depth-3 — inputs/ → src/ → 2_configs/ → ROOT)
  ln -sfn "../../../1_workflows/src/cicd/ship.yml" "$SRC/inputs/ship.yml"
  ln -sfn "../../../config.json"                   "$SRC/inputs/config.json"
  log "  inputs:        ship.yml + config.json linked"

  # package.jsons (per project)
  find "$SRC/inputs/package-jsons" -maxdepth 1 -type l -delete 2>/dev/null || true
  local n_p=0
  while IFS=$'\t' read -r cat proj key proj_path; do
    pj="$ROOT/$proj_path/package.json"
    if [ -f "$pj" ]; then
      ln -sf "../../../../$proj_path/package.json" "$SRC/inputs/package-jsons/$key.json"
      n_p=$((n_p+1))
    fi
  done < <(list_projects)
  log "  package.jsons: $n_p symlinks"

  # manifest.webmanifest (per project)
  find "$SRC/inputs/manifests" -maxdepth 1 -type l -delete 2>/dev/null || true
  local n_m=0
  while IFS=$'\t' read -r cat proj key proj_path; do
    for cand in "$ROOT/$proj_path/src/manifest.webmanifest" "$ROOT/$proj_path/manifest.webmanifest"; do
      if [ -f "$cand" ]; then
        rel="${cand#$ROOT/}"
        ln -sf "../../../../$rel" "$SRC/inputs/manifests/$key.webmanifest"
        n_m=$((n_m+1)); break
      fi
    done
  done < <(list_projects)
  log "  manifests:     $n_m symlinks"
}

# ── Phase 1: consolidate ────────────────────────────────────────────────────
step_consolidate() {
  sect "Phase 1 · consolidate → _front-data-consolidated.json"
  mkdir -p "$DIST"

  # Build the projects array — each entry has path + raw build.json + raw package.json + raw manifest
  local proj_arr_file; proj_arr_file=$(mktemp)
  trap "rm -f $proj_arr_file" RETURN

  : > "$proj_arr_file"
  while IFS=$'\t' read -r cat proj key proj_path; do
    bj="$SRC/builds/$key.build.json"
    pj="$SRC/inputs/package-jsons/$key.json"
    mj="$SRC/inputs/manifests/$key.webmanifest"
    jq -n \
      --arg cat "$cat" --arg proj "$proj" --arg key "$key" --arg path "$proj_path" \
      --slurpfile build_json "$bj" \
      --argjson  pkg_present "$([ -L "$pj" ] && echo true || echo false)" \
      --argjson  manifest_present "$([ -L "$mj" ] && echo true || echo false)" \
      '{
        category: $cat,
        project:  $proj,
        key:      $key,
        path:     $path,
        build:    ($build_json[0]),
        has_package_json: $pkg_present,
        has_manifest:     $manifest_present
      }' \
      | (
          if [ -L "$pj" ]; then jq --slurpfile pkg "$pj" '. + {package: $pkg[0]}'
          else cat
          fi
        ) \
      | (
          if [ -L "$mj" ]; then jq --slurpfile mf "$mj" '. + {manifest: $mf[0]}'
          else cat
          fi
        ) >> "$proj_arr_file"
  done < <(list_projects)

  # Parse ship.yml PROJECTS=( ... ) into deploys array
  local deploys_arr; deploys_arr=$(awk '/PROJECTS=\(/,/^\s*\)\s*$/' "$SRC/inputs/ship.yml" \
    | grep -oE '"[^"]+"' | sed 's|"||g' \
    | awk -F: 'NF>0 { printf "{\"path\":\"%s\",\"deploy_name\":\"%s\"}\n", $1, ($2==""?"":$2) }' \
    | jq -s '.' )

  # Linktree links — flatten 3 box JSONs (matches earlier shape)
  local links_obj; links_obj=$(jq -s '
    {
      sections: ([ .[] | select(.section?) | { id: .section.id, title: .section.title, box: .section.box, slide_count: (.slides | length) } ]),
      slides:   ([ .[] | select(.section?) as $f | .slides[]? | { section: $f.section.id, id: .id, kind: (.kind // "?"), title: (.title // .id) } ]),
      links:    ([ .[] | select(.section?) as $f | .slides[]? | .columns[]? as $col | $col.links[]?
                   | { section: $f.section.id, slide: $f.section.id, column: ($col.header // ""), label: .label, url: (.url // ""), icon: (.icon // "") } ])
    }' \
    "$SRC/data-links/personal-profiles.json" \
    "$SRC/data-links/personal-tools.json" \
    "$SRC/data-links/professional-profiles.json" 2>/dev/null \
    || jq -n '{sections:[],slides:[],links:[]}')

  # Now assemble
  jq -n \
    --arg ts "$(date -Iseconds)" \
    --slurpfile root_config "$SRC/inputs/config.json" \
    --argjson  deploys "$deploys_arr" \
    --argjson  links "$links_obj" \
    --slurpfile projects <(jq -s '.' "$proj_arr_file") \
    '{
      _meta: {
        generated_by: "2_configs/build.sh consolidate",
        timestamp:    $ts,
        schema:       "front-data/v1"
      },
      root_config: $root_config[0],
      projects:    ($projects[0] // []),
      deploys:     $deploys,
      links:       $links
    }' > "$DIST/_front-data-consolidated.json"

  log "  _front-data-consolidated.json: $(jq '.projects | length' "$DIST/_front-data-consolidated.json") projects · $(jq '.deploys | length' "$DIST/_front-data-consolidated.json") deploys · $(jq '.links.links | length' "$DIST/_front-data-consolidated.json") links"
}

# ── Phase 2: derive (per-concern + per-project) ─────────────────────────────
step_derive() {
  sect "Phase 2 · derive (per-concern outputs)"
  local C="$DIST/_front-data-consolidated.json"

  # Per-concern: builds (raw build.json + _path)
  jq '[ .projects[] | (.build + {_path: .path, _key: .key, _category: .category, _project: .project}) ]' \
    "$C" > "$DIST/front-data-builds.json"
  log "  front-data-builds.json:     $(jq 'length' "$DIST/front-data-builds.json")"

  # Per-concern: projects (flat topology)
  jq '[ .projects[] | {
        path:        .path,
        category:    .category,
        project:     .project,
        key:         .key,
        name:        (.build.name // ""),
        framework:   (.build.framework // "vanilla"),
        port:        (.build.port // null),
        deploy_name: ((.build.deploy.deploy_name // .project)),
        has_pwa:     .has_manifest,
        has_pkg:     .has_package_json
      }]' "$C" > "$DIST/front-data-projects.json"
  log "  front-data-projects.json:   $(jq 'length' "$DIST/front-data-projects.json")"

  # Per-concern: links (already flattened in consolidator)
  jq '.links' "$C" > "$DIST/front-data-links.json"
  log "  front-data-links.json:      sections=$(jq '.sections|length' "$DIST/front-data-links.json") slides=$(jq '.slides|length' "$DIST/front-data-links.json") links=$(jq '.links|length' "$DIST/front-data-links.json")"

  # Per-concern: deploys (parsed ship.yml)
  jq '.deploys' "$C" > "$DIST/front-data-deploys.json"
  log "  front-data-deploys.json:    $(jq 'length' "$DIST/front-data-deploys.json") entries"

  # Per-concern: deps (merged npm deps)
  jq '
    [.projects[] | select(.has_package_json) |
       { key: .key, path: .path, deps: ((.package.dependencies // {}) + (.package.devDependencies // {})) }
    ]
    | { _meta: { project_count: length },
        per_project: .,
        merged: (reduce .[] as $p ({}; . + ($p.deps // {}))) }
  ' "$C" > "$DIST/front-data-deps.json"
  log "  front-data-deps.json:       $(jq '.merged | keys | length' "$DIST/front-data-deps.json") unique deps across $(jq '.per_project | length' "$DIST/front-data-deps.json") packages"

  # Per-concern: categories (counts)
  jq '
    [.projects[] | .category] | group_by(.) | map({ category: .[0], count: length })
    | sort_by(.category)
  ' "$C" > "$DIST/front-data-categories.json"
  log "  front-data-categories.json: $(jq 'length' "$DIST/front-data-categories.json") categories"

  # Per-concern: analytics (Matomo + Umami site IDs from root config — front uses same IDs everywhere)
  jq '{
    matomo: .root_config.analytics.matomo,
    umami:  .root_config.analytics.umami,
    note:   "Front uses shared Matomo container + Umami website ID for all 42 projects (single-tenant)."
  }' "$C" > "$DIST/front-data-analytics.json"
  log "  front-data-analytics.json:  shared {matomo, umami} surfaced"

  # Per-concern: pwa (manifest aggregation)
  jq '
    [.projects[] | select(.has_manifest) |
       { key: .key, path: .path, manifest: .manifest }
    ]' "$C" > "$DIST/front-data-pwa.json"
  log "  front-data-pwa.json:        $(jq 'length' "$DIST/front-data-pwa.json") projects with PWA manifest"

  sect "Phase 2 · derive (per-project resolved configs)"
  # Wipe old per-project derives so deletions propagate
  find "$DIST" -maxdepth 1 -name 'build-*.json' -type f -delete 2>/dev/null || true

  local n=0
  jq -c '.projects[]' "$C" | while IFS= read -r proj; do
    jq -n \
      --argjson p "$proj" \
      --argjson root "$(jq '.root_config' "$C")" \
      --argjson deploys "$(jq '.deploys' "$C")" \
      --argjson links "$(jq '.links' "$C")" \
      '
      ($p.build) + {
        _resolved: {
          path:        $p.path,
          category:    $p.category,
          project:     $p.project,
          key:         $p.key,
          port:        ($p.build.port // $root.defaults.port),
          framework:   ($p.build.framework // $root.defaults.framework),
          src:         ($p.build.src // $root.defaults.src),
          dist:        ($p.build.dist // $root.defaults.dist),
          analytics:   { matomo: $root.analytics.matomo, umami: $root.analytics.umami },
          deploy: (
            [ $deploys[] | select(.path == $p.path) ] as $matches
            | if ($matches | length) == 0 then
                { deployed: false,
                  deploy_name: $p.project,
                  url: null,
                  reason: "no entry in ship.yml PROJECTS=()" }
              else
                ($matches[0]) as $dep
                | { deployed: true,
                    deploy_name: $dep.deploy_name,
                    url: ("https://diegonmarcos.github.io/" + $dep.deploy_name) }
              end
          ),
          consumers: ([ $links.links[] | select(.url | tostring as $u
                          | ($u | test("/" + $p.project + "(/|$)"))
                            or ($u | test("/" + ($p.build.deploy.deploy_name // "__none__") + "(/|$)"))
                       ) | .label ] | unique),
          has_package_json: $p.has_package_json,
          has_manifest:     $p.has_manifest
        }
      }' > "$DIST/build-$(echo "$proj" | jq -r '.key').json"
    n=$((n+1))
  done
  log "  per-project derives:        $(find "$DIST" -maxdepth 1 -name 'build-*.json' -type f | wc -l) build-*.json files"

  # Manifest meta
  jq -n \
    --arg ts "$(date -Iseconds)" \
    --argjson n_proj "$(jq '.projects | length' "$C")" \
    --argjson n_per_concern "$(ls "$DIST"/front-data-*.json 2>/dev/null | wc -l)" \
    --argjson n_per_project "$(find "$DIST" -maxdepth 1 -name 'build-*.json' -type f | wc -l)" \
    '{
      _meta: { generated_by: "2_configs/build.sh", timestamp: $ts, schema: "front-data/v1" },
      projects: $n_proj,
      outputs:  { consolidated: 1, per_concern: $n_per_concern, per_project: $n_per_project }
    }' > "$DIST/manifest.json"
  log "  manifest.json: written"
}

# ── Phase 4: validators ─────────────────────────────────────────────────────
step_validate() {
  sect "Phase 4 · validate (link-targets + deploy-coverage)"
  local C="$DIST/_front-data-consolidated.json"
  local fail=0
  local pass=0

  # link-targets: every linktree URL hitting diegonmarcos.github.io/* must resolve
  # to either a deployed project OR be on a known-aspirational allowlist.
  local broken
  broken=$(jq -r '
    [.deploys[].deploy_name] as $deployed
    | [.links.links[] | .url
        | capture("https?://diegonmarcos\\.github\\.io/(?<slug>[^/?#]+)")?
        | .slug
      ]
    | unique
    | map(select(. as $s | ($deployed | index($s)) | not))
    | .[]
  ' "$C")

  if [ -z "$broken" ]; then
    printf '  \033[32m✓\033[0m link-targets: all linktree URLs resolve to a deployed project\n'
    pass=$((pass+1))
  else
    while IFS= read -r slug; do
      [ -z "$slug" ] && continue
      printf '  \033[33m·\033[0m link-targets: linktree → /%s (no ship.yml entry)\n' "$slug"
    done <<< "$broken"
    pass=$((pass+1))   # not a hard fail — informational
  fi

  # deploy-coverage: every project on disk should either be in ship.yml OR have
  # _opt_out_of_deploy in its build.json (TBD convention).
  local missing
  missing=$(jq -r '
    [.deploys[].path] as $deployed_paths
    | .projects | map(select(.path as $p | ($deployed_paths | index($p)) | not) | .path) | .[]
  ' "$C")
  if [ -z "$missing" ]; then
    printf '  \033[32m✓\033[0m deploy-coverage: every project shipped\n'
    pass=$((pass+1))
  else
    while IFS= read -r p; do
      [ -z "$p" ] && continue
      printf '  \033[33m·\033[0m deploy-coverage: %s (not in ship.yml — add or opt out)\n' "$p"
    done <<< "$missing"
    pass=$((pass+1))   # informational
  fi

  log "validators: $pass run, $fail hard-failed"
  return $fail
}

step_clean() {
  sect "clean dist/"
  rm -rf "$DIST"
}

# ── dispatch ────────────────────────────────────────────────────────────────
case "$CMD" in
  build|all|"")    step_populate_src; step_consolidate; step_derive; step_validate ;;
  populate-src)    step_populate_src ;;
  consolidate)     step_consolidate ;;
  derive)          step_derive ;;
  validate)        step_validate ;;
  clean)           step_clean ;;
  rebuild)         step_clean; step_populate_src; step_consolidate; step_derive; step_validate ;;
  *) echo "Usage: $0 [build|populate-src|consolidate|derive|validate|clean|rebuild]" >&2; exit 2 ;;
esac

log "Done"
