<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import mapConfig from '$lib/data/map.json';
  import { freeInput } from '$engine/freeInput';
  import { stepRide } from '$engine/locomotion';
  import Joystick from '$engine/Joystick.svelte';

  let mapContainer: HTMLDivElement;

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

        // --- GTA-style walking rider: three.js CustomLayerInterface (threebox pattern) ---
        const rider = mapConfig.rider;
        const ride = { heading: 0 };
        let lngLat: [number, number] = [rider.start[0], rider.start[1]];
        let scene: THREE.Scene;
        let camera: THREE.Camera;
        let renderer: THREE.WebGLRenderer;
        let riderMesh: THREE.Mesh;
        let clockPrev = 0;
        let followGuard = false;

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
          },
          render(gl: WebGLRenderingContext, matrix: number[]) {
            if (!map) return;

            const now = performance.now();
            const dt = clockPrev ? Math.min((now - clockPrev) / 1000, 0.1) : 0;
            clockPrev = now;

            const step = stepRide(ride, freeInput, rider, dt);

            // ponytail: capsule primitive character; swap for a GLB when art is ready.
            const merc = maplibre.MercatorCoordinate.fromLngLat(lngLat, 0);
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
            map.triggerRepaint();
          }
        };

        map.addLayer(riderLayer);

        // Follow-cam: driven off the rAF loop, guarded against re-entrant jumpTo calls.
        const tick = () => {
          if (disposed || !map) return;
          if (!followGuard) {
            followGuard = true;
            map.jumpTo({
              center: lngLat,
              bearing: (ride.heading * 180) / Math.PI * rider.follow.bearingSign,
              pitch: rider.follow.pitch,
              zoom: rider.follow.zoom
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
  </div>
  <Joystick />
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
</style>
