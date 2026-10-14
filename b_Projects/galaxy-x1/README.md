# galaxy — Daylight Surreal Scrollworld

Real-time **SvelteKit + Threlte** scroll experience. Declarative Three.js
components (`<T>`) with a `svelte/motion` spring driving the scroll camera —
no manual `lerp`, no imperative render loop. Real CC0 assets.

## Run

```bash
./build.sh dev      # dev server on :8023
./build.sh build    # static build → dist/ (GitHub Pages)
npm test            # data-contract check (scene.json + assets on disk)
```

## Architecture (manifesto section refs in each component)

```
src/lib/
  data/scene.json        # SINGLE source of truth: counts, colors, asset paths, camera spline
  webgl/
    types.ts             # SceneConfig
    World.svelte         # orchestrator — HDRI env + IBL, lights, mounts every sub-component
    CameraRig.svelte     # <T.PerspectiveCamera> on a Catmull-Rom curve, sampled by scroll spring (§5)
    Stars.svelte         # 3000-point starfield (§2)
    Moons.svelte         # procedural glowing moons (§2)
    Ground.svelte        # real-textured plane, diff/normal/rough (§5)
    Water.svelte         # three/addons Water via <T is={…}>, real normals, useTask time (§5)
    Trees.svelte         # instanced low-poly trees with a clearing (§5)
    Fauna.svelte         # hopping rabbits + drifting birds, useTask animated (§5)
    Cubes.svelte         # project cubes, Threlte interactivity() events (§3,§5)
src/routes/+page.svelte  # <Canvas>, scroll→Spring, z10 UI overlay, a11y <nav> mirror (§3,§7)
static/assets/           # committed CC0 assets
```

Scroll → `Spring` (svelte/motion) → passed as `scroll` prop → `CameraRig`
samples the spline each frame in `useTask`. Bloom/post-processing was dropped
in the Threlte port (ACES tone mapping kept); re-add with `@threlte/extras`
effects if wanted.

## Assets (all CC0 / permissive)

| File | Source | License |
|------|--------|---------|
| `hdri/sky_1k.hdr` | Poly Haven — kloofendal_43d_clear_puresky | CC0 |
| `textures/ground_{diff,nor,rough}_1k.jpg` | Poly Haven — aerial_grass_rock | CC0 |
| `textures/waternormals.jpg` | three.js examples | MIT |

Models (trees, rabbits, birds, moons) are procedural — kept low-poly to match
the surreal aesthetic. Swap in GLBs by adding paths to `scene.json` and a
GLTFLoader in `assets/loaders.ts`.
