<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import mapConfig from '$lib/data/map.json';
  import { freeInput } from '$engine/freeInput';
  import { stepRide } from '$engine/locomotion';
  import Joystick from '$engine/Joystick.svelte';

  let mapContainer: HTMLDivElement;

  // ponytail: sail/drive are param profiles — no water/road gating yet (future increment).
  const rider = mapConfig.rider;
  const j = rider.joystick;
  let activeMode = $state(rider.modes.find((m) => m.id === rider.defaultMode) ?? rider.modes[0]);

  // Camera view is decoupled from locomotion mode: switching mode re-points the camera
  // at that mode's default view, but the camera-view FAB can then override it independently.
  let activeCamera = $state(
    rider.cameras.find((c) => c.id === rider.defaultCamera) ?? rider.cameras[0]
  );
  let showModePicker = $state(false);
  let showCameraPicker = $state(false);
  let hudSpeed = $state(0);

  // Perf overlay: FPS (EMA-smoothed) + frame-ms, mirrored into $state each frame so the
  // DOM refreshes; the rolling sample ring lives in a plain closure array (not $state) and
  // is drawn straight onto a small canvas — no charting library needed for one sparkline.
  let perfCanvas = $state<HTMLCanvasElement>();
  let fps = $state(0);
  let frameMs = $state(0);

  // Persistent ride state (heading + carried speed/altitude) — lives across mode switches
  // and across frames; only `speed` resets on a mode change so momentum doesn't teleport.
  const ride: { heading: number; speed?: number; altitude?: number } = { heading: 0 };
  $effect(() => {
    activeCamera = rider.cameras.find((c) => c.id === activeMode.camera) ?? activeCamera;
    ride.speed = 0;
  });

  function clamp(v: number, lo: number, hi: number) {
    return Math.min(hi, Math.max(lo, v));
  }

  // --- deterministic tree scatter: fractional part of index*golden-ratio + salt,
  // no Math.random so the scatter is reproducible across reloads. ---
  const GOLDEN_RATIO = 0.6180339887498949;
  function hash01(i: number, salt: number) {
    const x = i * GOLDEN_RATIO + salt;
    return x - Math.floor(x);
  }

  // Low-poly tree: short cylinder trunk + cone canopy, merged into one vertex-colored
  // BufferGeometry so the whole scatter is a single THREE.InstancedMesh (one draw call).
  function makeTreeGeometry(canopyColor: string, trunkColor: string): THREE.BufferGeometry {
    const trunkHeight = 3;
    const canopyHeight = 6;
    const trunk = new THREE.CylinderGeometry(0.4, 0.5, trunkHeight, 6).toNonIndexed();
    trunk.translate(0, trunkHeight / 2, 0);
    const canopy = new THREE.ConeGeometry(2.4, canopyHeight, 7).toNonIndexed();
    canopy.translate(0, trunkHeight + canopyHeight / 2, 0);

    const trunkPos = trunk.attributes.position as THREE.BufferAttribute;
    const canopyPos = canopy.attributes.position as THREE.BufferAttribute;
    const trunkNrm = trunk.attributes.normal as THREE.BufferAttribute;
    const canopyNrm = canopy.attributes.normal as THREE.BufferAttribute;

    const position = new Float32Array(trunkPos.array.length + canopyPos.array.length);
    position.set(trunkPos.array as Float32Array, 0);
    position.set(canopyPos.array as Float32Array, trunkPos.array.length);

    const normal = new Float32Array(trunkNrm.array.length + canopyNrm.array.length);
    normal.set(trunkNrm.array as Float32Array, 0);
    normal.set(canopyNrm.array as Float32Array, trunkNrm.array.length);

    const color = new Float32Array(trunkPos.count * 3 + canopyPos.count * 3);
    const t = new THREE.Color(trunkColor);
    const c = new THREE.Color(canopyColor);
    for (let i = 0; i < trunkPos.count; i++) t.toArray(color, i * 3);
    for (let i = 0; i < canopyPos.count; i++) c.toArray(color, (trunkPos.count + i) * 3);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(color, 3));
    return geo;
  }

  onMount(() => {
    // MapLibre is browser-only — must be imported inside onMount (no SSR).
    let map: import('maplibre-gl').Map | undefined;
    let disposed = false;
    let raf = 0;

    (async () => {
      const maplibre = (await import('maplibre-gl')).default;
      await import('maplibre-gl/dist/maplibre-gl.css');
      if (disposed) return;

      map = new maplibre.Map({
        container: mapContainer,
        style: mapConfig.basemap,
        center: mapConfig.center as [number, number],
        zoom: mapConfig.zoom,
        pitch: mapConfig.pitch,
        bearing: mapConfig.bearing
      });

      map.addControl(new maplibre.NavigationControl({ visualizePitch: true }), 'top-right');
      map.addControl(new maplibre.TerrainControl({ source: 'terrain-dem', exaggeration: mapConfig.terrain.exaggeration }), 'top-right');

      map.on('load', () => {
        if (!map) return;

        map.addSource('terrain-dem', {
          type: 'raster-dem',
          tiles: mapConfig.terrain.tiles,
          tileSize: mapConfig.terrain.tileSize,
          maxzoom: mapConfig.terrain.maxzoom,
          encoding: mapConfig.terrain.encoding as 'terrarium'
        });

        map.setTerrain({ source: 'terrain-dem', exaggeration: mapConfig.terrain.exaggeration });

        map.addLayer({
          id: 'sky',
          type: 'sky',
          paint: {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': mapConfig.sky.sun,
            'sky-atmosphere-sun-intensity': 15
          }
        });

        // --- 3D buildings + green nature (data-driven from map.json), inserted
        // beneath 'sky' (rider is added further below, ending up on top of both). ---
        const vectorSourceId = Object.entries(map.getStyle()?.sources ?? {}).find(
          ([, s]) => (s as { type?: string }).type === 'vector'
        )?.[0];

        if (vectorSourceId) {
          const nature = mapConfig.nature;
          map.addLayer(
            {
              id: 'nature-green',
              type: 'fill',
              source: vectorSourceId,
              'source-layer': nature.sourceLayer,
              filter: ['in', ['get', 'class'], ['literal', nature.landcoverClasses]],
              paint: {
                'fill-color': nature.greenColor,
                'fill-opacity': nature.greenOpacity
              }
            } as any,
            'sky'
          );

          const b = mapConfig.buildings;
          map.addLayer(
            {
              id: 'buildings-3d',
              type: 'fill-extrusion',
              source: vectorSourceId,
              'source-layer': 'building',
              minzoom: b.minZoom,
              paint: {
                'fill-extrusion-base': ['get', b.baseField],
                'fill-extrusion-height': ['get', b.heightField],
                'fill-extrusion-opacity': b.opacity,
                'fill-extrusion-color': [
                  'interpolate',
                  ['linear'],
                  ['get', b.heightField],
                  0, b.lowColor,
                  b.highRiseMeters, b.highColor
                ]
              }
            } as any,
            'sky'
          );
        }

        // --- GTA-style walking rider: three.js CustomLayerInterface (threebox pattern) ---
        let lngLat: [number, number] = [rider.start[0], rider.start[1]];
        let scene: THREE.Scene;
        let camera: THREE.Camera;
        let renderer: THREE.WebGLRenderer;
        let riderMesh: THREE.Mesh;
        let natureScene: THREE.Scene;
        let treesMesh: THREE.InstancedMesh;
        let clockPrev = 0;
        let followGuard = false;
        const perfSamples = new Array(60).fill(16.7);
        let perfIdx = 0;
        let fpsEma = 60;

        function drawPerfSparkline() {
          const c = perfCanvas;
          if (!c) return;
          const ctx = c.getContext('2d');
          if (!ctx) return;
          const w = c.width, h = c.height;
          ctx.clearRect(0, 0, w, h);
          const n = perfSamples.length;
          const maxMs = 40; // clamp sparkline scale so a single slow frame doesn't flatten it
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            const sample = perfSamples[(perfIdx + i) % n];
            const x = (i / (n - 1)) * w;
            const y = h - Math.min(sample, maxMs) / maxMs * h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = frameMs > 33 ? '#ff5c5c' : frameMs > 16 ? '#ffb84d' : '#5ee6a0';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        const riderLayer: any = {
          id: 'rider',
          type: 'custom',
          renderingMode: '3d',
          onAdd(_map: unknown, gl: WebGLRenderingContext) {
            scene = new THREE.Scene();
            scene.add(new THREE.AmbientLight(0xffffff, 0.6));
            const sun = new THREE.DirectionalLight(0xffffff, 0.8);
            sun.position.set(0, -70, 100).normalize();
            scene.add(sun);

            const geo = new THREE.CapsuleGeometry(
              rider.character.radius,
              rider.character.height,
              4,
              8
            );
            const mat = new THREE.MeshStandardMaterial({ color: rider.character.color });
            riderMesh = new THREE.Mesh(geo, mat);
            scene.add(riderMesh);

            camera = new THREE.Camera();
            renderer = new THREE.WebGLRenderer({ canvas: (map as any).getCanvas(), context: gl });
            renderer.autoClear = false;

            // ponytail: static tree scatter near start; per-tile streaming is a later increment.
            // Rendered as its own scene/pass (see render()) with the raw map matrix — no rider
            // modelMatrix — so trees stay planted in the world while the rider walks/drives off.
            const treeCfg = mapConfig.nature.trees;
            const treeCount = Math.min(treeCfg.count, 300);
            const treeGeo = makeTreeGeometry(treeCfg.canopyColor, treeCfg.trunkColor);
            const treeMat = new THREE.MeshStandardMaterial({ vertexColors: true });
            treesMesh = new THREE.InstancedMesh(treeGeo, treeMat, treeCount);

            const startLngLat: [number, number] = [rider.start[0], rider.start[1]];
            const m4 = new THREE.Matrix4();
            for (let i = 0; i < treeCount; i++) {
              const angle = hash01(i, 0.1) * Math.PI * 2;
              const dist = Math.sqrt(hash01(i, 0.7)) * treeCfg.radius;
              const scale = treeCfg.minScale + hash01(i, 0.4) * (treeCfg.maxScale - treeCfg.minScale);
              const dx = Math.cos(angle) * dist;
              const dz = Math.sin(angle) * dist;

              const treeMerc = maplibre.MercatorCoordinate.fromLngLat(startLngLat, 0);
              const mpuAtStart = treeMerc.meterInMercatorCoordinateUnits();
              treeMerc.x += dx * mpuAtStart;
              treeMerc.y += dz * mpuAtStart;
              const mpu = treeMerc.meterInMercatorCoordinateUnits();

              m4.makeTranslation(treeMerc.x, treeMerc.y, treeMerc.z)
                .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
                .multiply(new THREE.Matrix4().makeScale(mpu * scale, mpu * scale, mpu * scale));
              treesMesh.setMatrixAt(i, m4);
            }
            treesMesh.instanceMatrix.needsUpdate = true;

            natureScene = new THREE.Scene();
            natureScene.add(new THREE.AmbientLight(0xffffff, 0.7));
            const treeSun = new THREE.DirectionalLight(0xffffff, 0.7);
            treeSun.position.set(0, -70, 100).normalize();
            natureScene.add(treeSun);
            natureScene.add(treesMesh);
          },
          render(gl: WebGLRenderingContext, matrix: number[]) {
            if (!map) return;

            const now = performance.now();
            const dt = clockPrev ? Math.min((now - clockPrev) / 1000, 0.1) : 0;
            clockPrev = now;

            if (dt > 0) {
              const ms = dt * 1000;
              frameMs = ms;
              fpsEma = fpsEma + (1000 / ms - fpsEma) * 0.1;
              fps = fpsEma;
              perfSamples[perfIdx % perfSamples.length] = ms;
              perfIdx++;
              drawPerfSparkline();
            }

            const step = stepRide(ride, freeInput, {
              speed: activeMode.speed,
              turn: activeMode.turn,
              steerSign: rider.steerSign,
              accel: activeMode.accel,
              lift: activeMode.lift,
              maxAlt: activeMode.maxAlt
            }, dt);

            hudSpeed = ride.speed ?? 0;

            // ponytail: capsule primitive character; swap for a GLB when art is ready.
            // altitude (metres, fly mode only) lifts the mesh off the terrain.
            const merc = maplibre.MercatorCoordinate.fromLngLat(lngLat, step.altitude);
            const metersPerUnit = merc.meterInMercatorCoordinateUnits();
            merc.x += step.forwardX * step.dForward * metersPerUnit;
            merc.y += step.forwardZ * step.dForward * metersPerUnit;
            const nextLngLat = merc.toLngLat();
            lngLat = [nextLngLat.lng, nextLngLat.lat];

            // model matrix: translate to the rider's merc x/y/z, rotate mesh to heading,
            // rotate X +90° (three Y-up → mercator Z-up), scale metres → merc units.
            const modelMatrix = new THREE.Matrix4()
              .makeTranslation(merc.x, merc.y, merc.z)
              .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
              .multiply(new THREE.Matrix4().makeRotationZ(-step.heading))
              .multiply(new THREE.Matrix4().makeScale(metersPerUnit, metersPerUnit, metersPerUnit));

            camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix).multiply(modelMatrix);

            renderer.resetState();
            renderer.render(scene, camera);

            // Static nature pass: raw mercator→clip matrix, no rider anchor, so the tree
            // scatter renders at its fixed world position independent of rider movement.
            camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
            renderer.render(natureScene, camera);

            map.triggerRepaint();
          }
        };

        map.addLayer(riderLayer);

        // Follow-cam: driven off the rAF loop, guarded against re-entrant jumpTo calls.
        // lookYaw/lookPitch are plain closure locals (not $state) — internal rAF-loop
        // accumulators driven by the right joystick's yawRate/pitchRate, integrated here.
        let lookYaw = 0;
        let lookPitch = 0;
        let tickPrev = 0;
        const look = rider.joystick.look;
        const tick = () => {
          if (disposed || !map) return;
          const now = performance.now();
          const dt = tickPrev ? Math.min((now - tickPrev) / 1000, 0.1) : 0;
          tickPrev = now;

          lookYaw += freeInput.yawRate * look.yawRate * dt;
          lookPitch = clamp(
            lookPitch + freeInput.pitchRate * look.pitchRate * dt,
            look.minPitch - activeCamera.pitch,
            look.maxPitch - activeCamera.pitch
          );

          if (!followGuard) {
            followGuard = true;
            map.jumpTo({
              center: lngLat,
              bearing: (ride.heading * 180) / Math.PI * rider.follow.bearingSign + lookYaw,
              pitch: clamp(activeCamera.pitch + lookPitch, look.minPitch, look.maxPitch),
              zoom: activeCamera.zoom
            });
            followGuard = false;
          }
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      });
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      map?.remove();
    };
  });
</script>

<div class="map-wrap">
  <div bind:this={mapContainer} class="map"></div>
  <div class="hud">
    <a class="back" href="/galaxy/" rel="external">← Galaxy</a>
    <h1>Earth</h1>
    <div class="perf" class:warn={frameMs > 16} class:bad={frameMs > 33}>
      <canvas bind:this={perfCanvas} width="120" height="36"></canvas>
      <div class="perf-text">
        <span>{Math.round(fps)} fps</span>
        <span>{frameMs.toFixed(1)} ms</span>
      </div>
    </div>
  </div>

  <div class="velocimeter">{Math.round(hudSpeed)} km/h</div>

  {#if activeMode.lift}
    <div class="climb">
      <button
        type="button"
        class="climb-btn"
        aria-label="Climb up"
        onpointerdown={() => (freeInput.climb = 1)}
        onpointerup={() => (freeInput.climb = 0)}
        onpointerleave={() => (freeInput.climb = 0)}
        onpointercancel={() => (freeInput.climb = 0)}
      >▲</button>
      <button
        type="button"
        class="climb-btn"
        aria-label="Climb down"
        onpointerdown={() => (freeInput.climb = -1)}
        onpointerup={() => (freeInput.climb = 0)}
        onpointerleave={() => (freeInput.climb = 0)}
        onpointercancel={() => (freeInput.climb = 0)}
      >▼</button>
    </div>
  {/if}

  <div class="fabs">
    {#if showCameraPicker}
      <div class="fab-popup" role="menu" aria-label="Camera view">
        {#each rider.cameras as c (c.id)}
          <button
            type="button"
            class="fab-popup-item"
            class:active={c.id === activeCamera.id}
            onclick={() => { activeCamera = c; showCameraPicker = false; }}
          >
            <span class="icon">{c.icon}</span>
            <span class="label">{c.label}</span>
          </button>
        {/each}
      </div>
    {/if}
    <button
      type="button"
      class="fab"
      aria-label="Camera view"
      onclick={() => { showCameraPicker = !showCameraPicker; showModePicker = false; }}
    >{activeCamera.icon}</button>

    {#if showModePicker}
      <div class="fab-popup" role="menu" aria-label="Locomotion mode">
        {#each rider.modes as m (m.id)}
          <button
            type="button"
            class="fab-popup-item"
            class:active={m.id === activeMode.id}
            onclick={() => { activeMode = m; showModePicker = false; }}
          >
            <span class="icon">{m.icon}</span>
            <span class="label">{m.label}</span>
          </button>
        {/each}
      </div>
    {/if}
    <button
      type="button"
      class="fab"
      aria-label="Locomotion mode"
      onclick={() => { showModePicker = !showModePicker; showCameraPicker = false; }}
    >{activeMode.icon}</button>
  </div>

  <Joystick side="left" channel="move" scale={j.scale} invertX={j.move.invertX} invertY={j.move.invertY} />
  <Joystick side="right" channel="look" scale={j.scale} invertX={j.lookInvert.invertX} invertY={j.lookInvert.invertY} />
</div>

<style>
  :global(html, body) {
    margin: 0;
    height: 100%;
    background: #05060a;
  }

  .map-wrap {
    position: fixed;
    inset: 0;
  }

  .map {
    position: absolute;
    inset: 0;
  }

  .hud {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    color: #e6e8f2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    pointer-events: none;
  }

  .hud .back {
    display: inline-block;
    pointer-events: auto;
    color: #8ecbff;
    text-decoration: none;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }

  .hud .back:hover {
    text-decoration: underline;
  }

  .hud h1 {
    margin: 0;
    font-size: 1.4rem;
    letter-spacing: 0.06em;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  }

  .perf {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem 0.5rem;
    background: rgba(10, 14, 26, 0.45);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 0.5rem;
    backdrop-filter: blur(4px);
    width: max-content;
  }

  .perf canvas {
    display: block;
    width: 120px;
    height: 36px;
  }

  .perf-text {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    font-variant-numeric: tabular-nums;
    color: #5ee6a0;
    line-height: 1.2;
  }

  .perf.warn .perf-text { color: #ffb84d; }
  .perf.bad .perf-text { color: #ff5c5c; }

  .velocimeter {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    padding: 0.35rem 0.9rem;
    background: rgba(10, 14, 26, 0.45);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 999px;
    backdrop-filter: blur(4px);
    color: #e6e8f2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
    pointer-events: none;
  }

  /* Climb control sits to the left of the right look-stick, clear of the FAB stack. */
  .climb {
    position: fixed;
    right: 200px;
    bottom: 26px;
    z-index: 35;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    pointer-events: auto;
  }

  /* Mode + camera-view FABs: stacked bottom-right, above the right look-stick. */
  .fabs {
    position: fixed;
    right: 26px;
    bottom: 200px;
    z-index: 36;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.6rem;
    pointer-events: auto;
  }

  .fab {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid rgba(157, 180, 255, 0.35);
    background: rgba(10, 14, 26, 0.55);
    color: #cfd8ff;
    font-size: 1.4rem;
    line-height: 1;
    backdrop-filter: blur(4px);
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .fab:active {
    background: rgba(157, 180, 255, 0.35);
  }

  .fab-popup {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.35rem;
    background: rgba(10, 14, 26, 0.55);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 1rem;
    backdrop-filter: blur(4px);
  }

  .fab-popup-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.7rem;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: #cfd8ff;
    font-family: inherit;
    font-size: 0.8rem;
    white-space: nowrap;
    cursor: pointer;
    touch-action: manipulation;
  }

  .fab-popup-item .icon {
    font-size: 1.1rem;
  }

  .fab-popup-item.active {
    background: rgba(157, 180, 255, 0.35);
    color: #ffffff;
  }

  .climb-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(157, 180, 255, 0.35);
    background: rgba(10, 14, 26, 0.35);
    color: #cfd8ff;
    font-size: 1.4rem;
    backdrop-filter: blur(4px);
    touch-action: none;
    cursor: pointer;
  }

  .climb-btn:active {
    background: rgba(157, 180, 255, 0.35);
  }
</style>
