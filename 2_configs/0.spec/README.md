# 2_configs · Unified Manifest Consolidator

> Mirrors cloud's `cloud-data/` pattern. Every per-project `build.json` and the
> linktree link tree are aggregated here into the **single source of truth** for
> any cross-project view of the repo (CI, link health, drift detection,
> reports, dashboards).

## Layout

```
2_configs/
├── build.sh                        # standalone consolidator (not engine symlink)
├── build.json                      # declarative spec: what to consolidate, where
├── 0.spec/README.md                # this file
├── src/
│   ├── builds/<cat>__<proj>.build.json   ← symlinks to every project's build.json
│   └── data-links/<file>.json            ← symlinks to a-Portals/linktree/src/data/*.json
└── dist/                                  # generated, git-tracked
    ├── front-data-builds.json     # array — every build.json with _path injected
    ├── front-data-projects.json   # array — flat topology
    ├── front-data-links.json      # object — sections / slides / flattened links
    └── manifest.json              # meta + counts
```

## Usage

```bash
~/git/front/2_configs/build.sh build         # populate src/ + emit dist/
~/git/front/2_configs/build.sh populate-src  # refresh symlinks only
~/git/front/2_configs/build.sh consolidate   # rebuild dist/ from current src/
~/git/front/2_configs/build.sh rebuild       # clean + build
~/git/front/2_configs/build.sh clean         # wipe dist/
```

## What downstream readers get

```bash
# every link advertised by linktree
jq '.links[] | "\(.section)/\(.slide)/\(.column)\t\(.label)\t\(.url)"' dist/front-data-links.json

# every project + its port + framework, sorted by category
jq '.[] | [.category, .project, .port, .framework] | @tsv' dist/front-data-projects.json | sort

# raw consolidated builds for cross-project diffing
jq '.[] | select(.framework=="svelte")' dist/front-data-builds.json
```

## Why this lives in-tree (not as a submodule)

`I_front-data/` (sibling) is a separate git submodule that holds the
**legacy** `front-topology.json` + `front-deps.json` artefacts pushed to its
own remote. `2_configs/` is the **forward-looking** consolidator: richer
shape (links, deploy state, full build steps), in-tree so it tracks the
working state, and meant to eventually replace I_front-data once consumers
migrate.

## Future steps

1. Add `front-data-deps.json` — merged npm dependencies (`I_front-data/front-deps.json` already does this; port the logic here).
2. Add `front-data-deploy-status.json` — diff `front-data-projects.json` against `1_workflows/src/cicd/ship.yml` PROJECTS list to find drift.
3. Promote consolidation to a proper engine module (`mod_consolidate` in `_engine.sh`) so other repos can reuse it.
4. Add a CI hook: any `build.json` change auto-rebuilds `2_configs/dist/`.
