# AGENTS.md — Galaxy constellation (`b-Projects/galaxy*`)

Conventions for any agent editing the galaxy family. Architecture: see
`galaxy-CONSTELLATION-PLAN.md`.

## Structure
- `galaxy/` = hub (planet picker). `galaxy-gaia|x1|earth/` = planets. `_galaxy-engine/` = shared lib.
- Planets import shared engine via Vite alias `$engine` → `../_galaxy-engine/src`.
- Scene-specific code (flora/fauna/terrain/scene.json) lives IN the planet, never in the engine.

## Hard rules (violating any = the change is wrong)
1. **Branch:** work only on `main`. Commit + push directly. No branches, no PRs.
2. **Data-driven:** no hardcoded lists/positions/counts in `.svelte`/`.ts`. Put data in
   `src/lib/data/*.json` (or `planets.json` for the hub). Read it; never inline it.
3. **Tester:** every task leaves ONE runnable check (extend `test/*.mjs`; run `node test/scene.test.mjs`).
4. **Build gate:** after edits run `build.sh build` (or `npm run build`) in the project dir. Must pass.
5. **base:** keep `svelte.config.js` `base: ''` — it already works under subpath deploy. Do not change.
6. **Never** touch `galaxy-gaia/dist/` (frozen deployed output). **Never** `git add -f`.
7. **Deploy registry:** new/renamed project → update BOTH sites in `.github/workflows/ship.yml`
   (build step ~L384 + `PROJECTS=(...)` registry ~L553).
8. Commit from repo root: `git -C /home/diego/git/front ...` (avoids doubled-path bug).

## Build
- Per project: `cd b-Projects/<name> && ./build.sh build`. `build.sh` is a symlink to the universal engine.
- Node scripts over broken `grep`/`find`/`xargs` on this host.

## Engine import example
```ts
import FreeRig from '$engine/free/FreeRig.svelte';
import { layers, perf } from '$engine/layers.svelte';
```
