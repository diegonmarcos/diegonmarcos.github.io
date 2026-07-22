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

- **P1 — Rename** `galaxy` → `galaxy-x1`: `git mv`, update `build.json` name, `package.json` name,
  ship.yml build step + registry entry. Verify `build.sh build` green.
- **P2 — Extract `_galaxy-engine/`** from galaxy-x1: move generic files, add `$engine` alias, rewire
  x1 imports. galaxy-x1 stays green (byte-identical behaviour).
- **P3 — New `galaxy` hub**: thin SvelteKit landing, data-driven planet list (`planets.json`),
  cards linking `/galaxy-gaia/ /galaxy-x1/ /galaxy-earth/`. Register in ship.yml.
- **P4 — `galaxy-earth`**: SvelteKit + MapLibre GL JS + raster-DEM terrain (free tiles), GTA rider
  as a custom Three.js layer importing `$engine`. Register in ship.yml.

## Rules for coding agents

See `b-Projects/AGENTS.md`. Non-negotiable: work only on `main`; fully data-driven
(no hardcoded lists — use `*.json`); leave a runnable test; `base:''`; never touch
`galaxy-gaia/dist/`; never `git add -f`.
