# Galaxy Constellation — Architecture Plan

**Vision:** `galaxy` is a **hub of planets**. Each planet is an explorable, GTA-style
world (walk / cycle / drive / sail / fly). Planets share ONE locomotion + camera +
UI engine; they differ only in their *scene source* (procedural flora, real terrain, …).

## Target layout (`b-Projects/`)

| Folder | Role | Deploy name | URL |
|--------|------|-------------|-----|
| `galaxy/` | **Hub** — thin landing / planet picker | `galaxy` | `/galaxy/` |
| `galaxy-gaia/` | Planet 1 — already deployed (committed `dist/` only) | `galaxy-gaia` | `/galaxy-gaia/` |
| `galaxy-x1/` | Planet 2 — the experimental world (current `galaxy/` source, git-mv'd) | `galaxy-x1` | `/galaxy-x1/` |
| `galaxy-earth/` | Planet 3 — MapLibre 3D DEM terrain + GTA rider (NEW) | `galaxy-earth` | `/galaxy-earth/` |
| `_galaxy-engine/` | **Shared** — rider/camera/controls/webgl-core/NerdStats (x1 + earth import) | — (lib, not deployed) | — |

## Shared engine (`_galaxy-engine/`) — the one real abstraction

Generic, scene-agnostic pieces extracted from current galaxy source:
- Locomotion + camera: `free/FreeRig.svelte`, camera presets, `PerfTune.svelte`
- Controls/UI: `Joystick.svelte`, `ZoomBar.svelte`, `NerdStats.svelte`, `StatsSampler.svelte`, `gpuStats.ts`
- State: `layers.svelte.ts` (layer toggles + perf knobs)
- Assets util: `assets/pointSprite.ts`, `assets/catalog.ts` (cdnUrl)

**Consumed via Vite alias** `$engine` → `../_galaxy-engine/src` in each planet's
`vite.config.ts` (no npm publish, no workspace — lazy + works). Planets import
`import FreeRig from '$engine/free/FreeRig.svelte'`.

Scene-specific stays per-planet: Flora, Fauna, Water, Ghetto, City, Zones, scene.json.

## Deploy wiring (`.github/workflows/ship.yml`)

Two edit sites per project:
1. Per-project build step (`id: build-<name>`, `contains(... 'b-Projects/<name>/')`, `cd b-Projects/<name>`) — ~line 384.
2. `PROJECTS=( … "b-Projects/<name>:<deploy_name>" … )` registry — ~line 553.

`svelte.config.js` keeps `base: ''` (already works under subpath deploy). Don't change it.

## Phases (each ends BUILD-GREEN before the next; Opus verifies the gate)

- **P1 — Rename** `galaxy` → `galaxy-x1`: `git mv`, update `build.json`/`package.json` name,
  ship.yml build step + registry. — ✅ DONE `9f4f3c6f`
- **P2 — Extract `_galaxy-engine/`** from galaxy-x1: move perf/stats/controls (`gpuStats`,
  `StatsSampler`, `PerfTune`, `layers`, `NerdStats`, `Joystick`, `ZoomBar`, `CameraStick`),
  add `$engine` alias, rewire x1 imports. — ✅ DONE `521a35b3`
- **P3 — New `galaxy` hub**: thin SvelteKit landing, data-driven `planets.json`, cards
  linking the planets. Registered in ship.yml. — ✅ DONE `c35c99ba`
- **P4a — `galaxy-earth` basemap**: SvelteKit + MapLibre GL JS + terrarium raster-DEM 3D
  terrain (keyless: OpenFreeMap basemap), data-driven `map.json`. Registered in ship.yml. — ✅ DONE
- **P4b — engine decouple + rider** (NEXT): extract camera/locomotion (`FreeRig`/`CameraRig`/
  `freeInput` + presets) into `_galaxy-engine` with a scene-agnostic interface (fixes the flagged
  `NerdStats` `../../galaxy-x1/package.json` hardcode + scene-specific `LAYER_LABELS`); then the GTA
  rider as a Three.js custom layer on earth's MapLibre terrain, importing `$engine`. Minimal viable
  first (one character, walk + follow-cam); cycle/drive/sail/fly are later increments.

## CI oper/ deploy discipline (learned P1–P4a)

Two workflows auto-commit to `main` per push — Pages Deployment ("commit built dist back") and
"Regenerate (2_configs)". **Bursting several pushes within minutes makes their runs overlap and the
loser's push is rejected non-fast-forward** (commit-back autostash does not stash *untracked*
regenerated `2_configs/*.json`, so a concurrently-landed sibling project's config collides on
rebase-checkout). Spaced single pushes go green (history + `30fee59f` confirm). **Rule: one push,
let its run settle to green, then the next.** Do NOT rewrite the shared commit-back engine to "fix"
this mid-scope — it serves 30+ projects and works under normal cadence.

## Rules for coding agents

See `b-Projects/AGENTS.md`. Non-negotiable: work only on `main`; fully data-driven
(no hardcoded lists — use `*.json`); leave a runnable test; `base:''`; never touch
`galaxy-gaia/dist/`; never `git add -f`.
