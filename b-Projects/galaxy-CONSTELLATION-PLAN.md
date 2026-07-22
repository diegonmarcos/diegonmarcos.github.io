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

- **P5 — locomotion modes** — ✅ DONE (engine `cc1e0470`, earth `98343019`): `stepRide` gained
  opt-in `accel` (inertia/coast) + `lift`/`maxAlt`/`climb` (fly altitude), walk/x1 path byte-identical;
  earth `map.json` now holds a data-driven `modes[]` (walk/cycle/drive/sail/fly) + `defaultMode`, with a
  mode-switch HUD + fly climb ▲▼ control and an adaptive follow-cam per mode. Both build green + tested.
  ponytail: sail/drive are param profiles — no water/road gating yet (future increment).

### P5 interface contract (source of truth — both agents follow exactly)

**Agent C — engine mechanics (touches only `_galaxy-engine/`; keep galaxy-x1 pixel-identical):**
Extend `_galaxy-engine/src/locomotion.ts` BACKWARD-COMPATIBLY (x1 passes none of the new fields, so
its behavior must be byte-identical):
- `RideParams` += optional `accel?: number` (velocity ease rate, 1/s), `lift?: number` (m/s climb),
  `maxAlt?: number` (m). `RideState` += optional `speed?: number` (eased ground speed),
  `altitude?: number` (m). `RideInput` += optional `climb?: number` (-1..1). `RideStep` += `altitude: number`.
- Logic: heading integrate (unchanged). `target = input.throttle * params.speed`. If `params.accel`
  is set → `state.speed += (target - (state.speed ?? target)) * (1 - Math.exp(-params.accel*dt))`
  (inertia/coast); ELSE `state.speed = target` (instant = current walk). `dForward = (state.speed ?? target) * dt`.
  If `params.lift` set → `state.altitude = clamp((state.altitude ?? 0) + (input.climb ?? 0)*params.lift*dt, 0, params.maxAlt ?? Infinity)`;
  else `state.altitude` stays `state.altitude ?? 0`. Return `{heading, forwardX, forwardZ, dForward, altitude: state.altitude ?? 0}`.
- Add `climb: 0` to `_galaxy-engine/src/freeInput.ts` (default 0 → no effect for walk/x1). Comment it.
- Extend `_galaxy-engine/test/locomotion.test.mjs`: (i) NO accel → instant, `dForward===speed*dt`
  (x1 path unchanged); (ii) WITH accel, first step eases (`0 < dForward < speed*dt`); (iii) lift+climb=1
  raises altitude and clamps at `maxAlt`; (iv) climb=0 keeps altitude 0. Print OK, exit 0.
- GATE: galaxy-x1 `node test/scene.test.mjs` + `build.sh build` GREEN (x1 must be identical), engine
  test OK. COMMIT locally, do NOT push.

**Agent D — earth modes UI (touches only `galaxy-earth/`; depends on Agent C's interface):**
- `src/lib/data/map.json`: keep `rider.start`, `rider.character`, `rider.steerSign`, `rider.follow.bearingSign`.
  ADD `rider.defaultMode` (an id) + `rider.modes`: array of `{ id,label,icon, speed,turn,
  follow:{pitch,zoom}, accel?, lift?, maxAlt? }` for walk/cycle/drive/sail/fly (walk = no accel/lift;
  cycle/drive/sail have accel for glide; fly has accel+lift+maxAlt). ALL tunables live here.
- `src/routes/+page.svelte`: add `activeMode` state (init from `defaultMode`). Build the params passed
  to `stepRide` per-frame as `{ speed, turn, steerSign: rider.steerSign, accel, lift, maxAlt }` from the
  active mode. Use `merc = MercatorCoordinate.fromLngLat(lngLat, step.altitude)` so fly lifts the mesh.
  Follow-cam uses `activeMode.follow.pitch/zoom` (+ `rider.follow.bearingSign`).
  Add a data-driven mode-switch HUD row (icon+label buttons from `rider.modes`) that sets `activeMode`.
  Add a climb control (up/down, writes `freeInput.climb` = +1/-1 on press, 0 on release) shown ONLY when
  `activeMode.lift > 0` (fly). Keep `<Joystick/>`. `ponytail:` sail/drive are param profiles — no
  water/road gating yet (future increment).
- Extend `test/earth.test.mjs`: assert `rider.modes` non-empty array; each mode has `id,label,speed,turn,
  follow.pitch,follow.zoom`; `rider.defaultMode` matches a mode id; the `fly` mode has `lift>0`. Keep
  existing asserts. Re-use `$engine` `stepRide` step (as before) to prove a move. OK/exit 0.
- GATE: galaxy-earth `node test/earth.test.mjs` + `build.sh build` GREEN. COMMIT locally, do NOT push.

Minimal viable = 5 selectable modes that feel distinct (speed/turn/inertia) + fly altitude + adaptive
follow-cam. Coordinator (Opus) pushes ONCE after both commits + both builds verified, then watches CI green.

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
