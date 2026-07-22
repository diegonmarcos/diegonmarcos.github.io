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
- **P4b — engine decouple + rider** — ✅ DONE (engine `de220321`, earth rider `daeb7855`): shared
  `$engine/freeInput` + pure `$engine/locomotion.stepRide` extracted; both flagged couplings fixed
  (NerdStats via `{pkg,layers,layerLabels}` props; scene layers → x1 `sceneLayers.svelte`); earth
  gets a Three.js CustomLayerInterface rider (capsule char, walk + follow-cam) on the MapLibre
  terrain, driven by the shared engine + `$engine/Joystick`, tunables in `map.json`. Both build green
  + tested. Next increments: real character GLB, then cycle/drive/sail/fly locomotion modes.

### P4b interface contract (source of truth — both agents follow this exactly)

**Agent A — engine decouple (touches only `_galaxy-engine/` + `galaxy-x1/`; keep x1 pixel-identical):**
1. `git mv galaxy-x1/src/lib/webgl/free/freeInput.ts → _galaxy-engine/src/freeInput.ts`. It is the
   shared input bag; engine controls (`Joystick`/`CameraStick`/`ZoomBar`) import it `./freeInput`;
   x1 consumers (`FreeRig`, `ViewPresets`, `MilkyWay`, `routes/+page.svelte`) import `$engine/freeInput`.
   Removes the `$lib/webgl/free/freeInput` coupling that made engine controls depend on x1's `$lib`.
2. NEW `_galaxy-engine/src/locomotion.ts` — framework-agnostic, NO three/threlte/DOM. Pure:
   `stepRide(state:{heading:number}, input:{steer:number,throttle:number}, params:{speed:number,turn:number,steerSign?:number}, dt:number)`
   → mutates `state.heading` and returns `{heading, forwardX, forwardZ, dForward}` (dForward = signed
   metres this frame). Extract ONLY x1 FreeRig lines ~96-99 (heading integrate + forward + vel*dt);
   FreeRig then calls `stepRide` and keeps its own camera-boom/galaxy-overview math unchanged.
3. Fix `_galaxy-engine/src/NerdStats.svelte`: DELETE `import pkg from '../../galaxy-x1/package.json'`
   and the `LAYER_LABELS` import; instead accept props `{ pkg, layers, layerLabels }`. Move the
   x1-scene-specific `layers` $state + `LAYER_LABELS` OUT of `_galaxy-engine/src/layers.svelte.ts`
   (engine keeps only generic `perf`) into `galaxy-x1/src/lib/sceneLayers.svelte.ts`. x1's caller of
   `<NerdStats>` passes `pkg={x1 package.json}`, `layers`, `layerLabels` in.
4. NEW `_galaxy-engine/test/locomotion.test.mjs` — asserts `stepRide` is deterministic: zero input →
   no move; throttle=1 advances `dForward>0`; steer integrates heading. Prints OK, exit 0.
5. Gate: `galaxy-x1` `build.sh build` green + `node test/scene.test.mjs` green. COMMIT locally
   (`git -C /home/diego/git/front commit`), do NOT push.

**Agent B — earth GTA rider (touches only `galaxy-earth/`; depends on Agent A's engine interface):**
- Add a `rider` block to `galaxy-earth/src/lib/data/map.json` (data-driven): `start:[lng,lat]`,
  `speed` (m/s), `turn` (rad/s), `character:{asset|primitive, scale, color}`, `follow:{pitch,zoom}`.
- In `+page.svelte`, after `map.on('load')`, register a Three.js **CustomLayerInterface** ('rider')
  that owns a THREE.Scene+Camera; `render(gl, matrix)` draws with MapLibre's view-projection matrix
  (threebox-style: place the character mesh at its `MercatorCoordinate`). Each frame read
  `$engine/freeInput`, call `$engine/locomotion` `stepRide`, advance the character's lng/lat by
  `dForward` along heading (via `MercatorCoordinate`), rotate mesh to heading, and follow-cam with
  `map.easeTo({center, bearing:heading, pitch:follow.pitch, zoom:follow.zoom, duration:0})`.
  Mount the shared `$engine/Joystick.svelte` (writes freeInput.steer/throttle) as the on-screen control.
- Extend `test/earth.test.mjs`: assert `map.json.rider.start` is a 2-number array, `speed`/`turn`
  numeric, and re-uses `$engine/locomotion` `stepRide` to prove one step moves the position. OK/exit 0.
- Gate: `galaxy-earth` `build.sh build` green + `node test/earth.test.mjs` green. COMMIT locally, do NOT push.

Minimal viable = ONE character, walk + follow-cam. Cycle/drive/sail/fly are later increments.
Coordinator (Opus) does the SINGLE push after both commits land + both builds verified, then watches CI green.

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
