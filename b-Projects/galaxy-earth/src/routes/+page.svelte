<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import mapConfig from '$lib/data/map.json';
  import { freeInput } from '$engine/freeInput';
  import { stepDrive, modelVisBoost } from '$engine/locomotion';
  import Joystick from '$engine/Joystick.svelte';

  // Camera altitude compensation: the higher a driver's eye-altitude (drone/heli/plane),
  // the more the follow-cam needs to zoom OUT to keep the vehicle framed, else it's a
  // postage stamp against the terrain. Pure fn — easy to unit-test / tune in isolation.
  const altZoomOffset = (eye: number) =>
    Math.max(0, Math.min(Math.log2(Math.max(eye, 1)) - 1, 8));

  let mapContainer: HTMLDivElement;

  const rider = mapConfig.rider;
  const j = rider.joystick;
  const look = j.look;

  // Driver (vehicle/physics) and camera view are two fully independent selectors —
  // switching one never touches the other. Camera bearing is user-owned (right stick),
  // never derived from rider heading, so steering and looking don't fight each other.
  let activeDriver = $state(
    rider.drivers.find((d) => d.id === rider.defaultDriver) ?? rider.drivers[0]
  );
  let activeCamera = $state(
    rider.cameras.find((c) => c.id === rider.defaultCamera) ?? rider.cameras[0]
  );
  let hudSpeed = $state(0);
  let hudAltitude = $state(0);

  // Perf overlay: FPS (EMA-smoothed) + frame-ms, mirrored into $state each frame so the
  // DOM refreshes; the rolling sample ring lives in a plain closure array (not $state) and
  // is drawn straight onto a small canvas — no charting library needed for one sparkline.
  // P3b: sky-dome overlay canvas — separate three.js renderer/scene, entirely
  // independent of the map's CustomLayer; only shown once lookPitch exceeds
  // look.mapMaxPitch (looking up past the map's own pitch cap).
  let skyCanvas = $state<HTMLCanvasElement>();
  let perfCanvas = $state<HTMLCanvasElement>();
  let fps = $state(0);
  let frameMs = $state(0);
  let perfExpanded = $state(false);
  let renderCalls = $state(0);
  let renderTriangles = $state(0);
  let memGeometries = $state(0);
  let memTextures = $state(0);
  let jsHeapMb = $state<number | undefined>(undefined);
  let fpsGraphCanvas = $state<HTMLCanvasElement>();
  let frameGraphCanvas = $state<HTMLCanvasElement>();
  let drawCallsGraphCanvas = $state<HTMLCanvasElement>();

  // Debug overlay (F8 or ?debug=1): surfaces whether the CustomLayer render()
  // chain is still alive (it self-schedules via map.triggerRepaint() and dies
  // silently if a frame throws before reaching that call) plus live input/driver
  // state. `debugNow` is refreshed from the always-on tick() rAF loop so the
  // LIVE/STALLED readout keeps updating even while render() itself is stalled.
  let debugVisible = $state(false);
  let showMenu = $state(false);
  let showGraphStats = $state(true);
  let showAbout = $state(false);
  let showKeybindings = $state(false);
  let showCameraPicker = $state(false);
  let showDriverPicker = $state(false);
  let terrain3d = $state(true);
  let mapZoomIn = () => {};
  let mapZoomOut = () => {};
  let mapResetBearing = () => {};
  let mapToggleTerrain = () => {};
  const galaxies = [
    { id: 'hub', label: 'Galaxy Hub', href: '/galaxy/' },
    { id: 'earth', label: 'Galaxy Earth', href: '/galaxy-earth/' },
    { id: 'gaia', label: 'Galaxy Gaia', href: '/galaxy-gaia/' },
    { id: 'x1', label: 'Galaxy X1', href: '/galaxy-x1/' }
  ];

  // Log export: every console call (from mount onward, regardless of debug mode)
  // is mirrored into this buffer so "Log Export" can dump the full session —
  // not just the throttled [rider] debug lines.
  const logBuffer: string[] = [];
  let logExportStatus = $state('');
  function formatLogArg(a: unknown): string {
    if (typeof a === 'string') return a;
    if (a instanceof Error) return `${a.name}: ${a.message}\n${a.stack ?? ''}`;
    try {
      return JSON.stringify(a, Object.getOwnPropertyNames(a as object)) ?? String(a);
    } catch {
      return String(a);
    }
  }
  function captureConsole(level: string, args: unknown[]) {
    const ts = new Date().toISOString();
    const line = args.map(formatLogArg).join(' ');
    logBuffer.push(`[${ts}] [${level}] ${line}`);
  }
  async function exportLogs() {
    const text = logBuffer.join('\n');
    const filename = `galaxy-earth-log-${Date.now()}.log`;
    logExportStatus = 'Exporting…';
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('[rider] clipboard copy failed', err);
    }
    try {
      const picker = (window as unknown as { showSaveFilePicker?: (opts: unknown) => Promise<FileSystemFileHandle> }).showSaveFilePicker;
      if (picker) {
        const handle = await picker({ suggestedName: filename });
        const writable = await handle.createWritable();
        await writable.write(text);
        await writable.close();
      } else {
        const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error('[rider] local log save failed/cancelled', err);
    }
    try {
      const res = await fetch('https://api.diegonmarcos.com/c3-infra-api/public/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'galaxy-earth', log: text })
      });
      logExportStatus = res.ok ? 'Copied + saved + uploaded ✓' : `Copied + saved, upload failed (${res.status})`;
    } catch (err) {
      console.error('[rider] log upload failed', err);
      logExportStatus = 'Copied + saved, upload failed (offline?)';
    }
    setTimeout(() => (logExportStatus = ''), 4000);
  }
  let lastError = $state('none');
  let renderFireCount = $state(0);
  let lastRenderTime = $state(0);
  let debugNow = $state(0);

  // Persistent ride state (heading + carried speed/altitude) — lives across frames;
  // only `speed` resets on a driver switch so momentum doesn't teleport.
  const ride: { heading: number; speed?: number; altitude?: number } = { heading: 0 };
  $effect(() => {
    // Reset speed AND seed altitude to this driver's own default (cruise) on every
    // switch — altitude otherwise carries over from stepDrive/stepRide's `state`
    // object, so e.g. landing a drone at 120m and switching to Walk left the
    // capsule stuck "flying" at 120m instead of snapping to the ground.
    ride.speed = 0;
    ride.altitude = activeDriver.altitudeBand?.cruise ?? 0;
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

  // Capsule primitive: the always-available fallback for any driver without a
  // usable GLB (null/missing/failed load). Extracted so makeProceduralVehicle
  // can still delegate to it for ids it doesn't have a distinct shape for.
  function makeCapsule(): THREE.Mesh {
    const geo = new THREE.CapsuleGeometry(rider.character.radius, rider.character.height, 4, 8);
    const mat = new THREE.MeshStandardMaterial({ color: rider.character.color });
    return new THREE.Mesh(geo, mat);
  }

  // Distinct low-poly procedural fallback per driver id — used when a driver's
  // GLB is null/missing/errored. Same metre scale conventions as the capsule so
  // the existing Mercator/world scaling math (modelMatrix) keeps working unchanged.
  function makeProceduralVehicle(driverId: string): THREE.Object3D {
    const color = new THREE.Color(rider.character.color);
    const bodyMat = new THREE.MeshStandardMaterial({ color });
    const darkMat = new THREE.MeshStandardMaterial({ color: color.clone().multiplyScalar(0.6) });
    const lightMat = new THREE.MeshStandardMaterial({ color: color.clone().multiplyScalar(1.3) });

    if (driverId === 'drone') {
      const group = new THREE.Group();
      group.add(new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.6), bodyMat));
      const rotorGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.02, 12);
      const offsets: [number, number][] = [[0.35, 0.35], [0.35, -0.35], [-0.35, 0.35], [-0.35, -0.35]];
      for (const [x, z] of offsets) {
        const rotor = new THREE.Mesh(rotorGeo, darkMat);
        rotor.position.set(x, 0.1, z);
        group.add(rotor);
      }
      return group;
    }
    if (driverId === 'helicopter') {
      const group = new THREE.Group();
      group.add(new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 1.8), bodyMat));
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 1.6), bodyMat);
      tail.position.set(0, 0.1, -1.5);
      group.add(tail);
      const rotor = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.06, 0.15), darkMat);
      rotor.position.set(0, 0.5, 0);
      group.add(rotor);
      return group;
    }
    if (driverId === 'airplane') {
      const group = new THREE.Group();
      const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.4, 10), bodyMat);
      fuselage.rotation.x = Math.PI / 2;
      group.add(fuselage);
      group.add(new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.06, 0.5), lightMat));
      const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.4), darkMat);
      tailFin.position.set(0, 0.25, -1.1);
      group.add(tailFin);
      return group;
    }
    return makeCapsule();
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
    // Mirror every console call into logBuffer (for "Log Export") from mount
    // onward — independent of debug mode, so a full session trace is always
    // available even if the user only opened the menu after something broke.
    (['log', 'info', 'warn', 'error', 'debug'] as const).forEach((level) => {
      const orig = console[level].bind(console);
      console[level] = (...args: unknown[]) => {
        captureConsole(level, args);
        orig(...args);
      };
    });

    // MapLibre is browser-only — must be imported inside onMount (no SSR).
    let map: import('maplibre-gl').Map | undefined;
    let stopMeshEffect: (() => void) | undefined;
    let disposed = false;
    let raf = 0;
    let canvasEl: HTMLCanvasElement | undefined;

    // Camera bearing/pitch are integrated ONLY from the right look-stick (joystick,
    // keyboard, or pointer-lock mouse) — never from rider heading — so the camera
    // stays put while the rider turns underneath it. Hoisted to onMount scope (not
    // component-level $state) so both the pointer-lock mousemove handler (wired up
    // before the map finishes loading) and the rAF follow-cam tick share them.
    let camBearing = 0;
    let lookPitch = 0; // degrees; integrated unbounded, clamped to [minPitch, skyMaxPitch]

    // --- Keyboard bindings (data-driven from rider.keys in map.json) ---
    const heldKeys = new Set<string>();
    function recomputeMoveFromKeys() {
      const keys = rider.keys;
      let moveX = 0, moveY = 0, climb = 0;
      if ([...heldKeys].some((k) => keys.forward.includes(k))) moveY += 1;
      if ([...heldKeys].some((k) => keys.back.includes(k))) moveY -= 1;
      if ([...heldKeys].some((k) => keys.left.includes(k))) moveX -= 1;
      if ([...heldKeys].some((k) => keys.right.includes(k))) moveX += 1;
      if ([...heldKeys].some((k) => keys.up.includes(k))) climb += 1;
      if ([...heldKeys].some((k) => keys.down.includes(k))) climb -= 1;
      freeInput.moveX = moveX;
      freeInput.moveY = moveY;
      freeInput.climb = climb;
    }
    function matchAny(list: string[], key: string) {
      return list.includes(key);
    }
    function cycle<T>(arr: T[], current: T, dir: 1 | -1): T {
      const i = arr.indexOf(current);
      const n = arr.length;
      return arr[(i + dir + n) % n];
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'F8') {
        e.preventDefault();
        debugVisible = !debugVisible;
        return;
      }
      const keys = rider.keys;
      const key = e.key;
      const isHeld =
        matchAny(keys.forward, key) || matchAny(keys.back, key) ||
        matchAny(keys.left, key) || matchAny(keys.right, key) ||
        matchAny(keys.up, key) || matchAny(keys.down, key);
      const isDiscrete =
        matchAny(keys.cameraNext, key) || matchAny(keys.cameraPrev, key) ||
        matchAny(keys.driverNext, key) || matchAny(keys.driverPrev, key);
      if (!isHeld && !isDiscrete) return;
      e.preventDefault();
      if (isHeld) {
        heldKeys.add(key);
        recomputeMoveFromKeys();
      }
      if (isDiscrete && !e.repeat) {
        if (matchAny(keys.cameraNext, key)) activeCamera = cycle(rider.cameras, activeCamera, 1);
        else if (matchAny(keys.cameraPrev, key)) activeCamera = cycle(rider.cameras, activeCamera, -1);
        else if (matchAny(keys.driverNext, key)) activeDriver = cycle(rider.drivers, activeDriver, 1);
        else if (matchAny(keys.driverPrev, key)) activeDriver = cycle(rider.drivers, activeDriver, -1);
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      const keys = rider.keys;
      const key = e.key;
      if (heldKeys.has(key)) {
        e.preventDefault();
        heldKeys.delete(key);
        recomputeMoveFromKeys();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // --- Debug overlay (F8 toggles via onKeyDown above; ?debug=1 sets initial state) ---
    debugVisible = new URLSearchParams(window.location.search).get('debug') === '1';
    if (debugVisible) {
      console.info('[rider] debug mode ON — F8 toggles, throttled frame logs every 30 renders');
      import('eruda').then((m) => {
        const eruda = m.default ?? m;
        eruda.init();
        console.info('[rider] eruda mobile console attached');
      }).catch((err) => console.error('[rider] eruda failed to load', err));
    }
    function onWindowError(e: ErrorEvent) {
      lastError = e.message ?? String(e);
      console.error('[rider] window error', e.error ?? e.message);
    }
    function onUnhandledRejection(e: PromiseRejectionEvent) {
      lastError = e.reason?.message ?? String(e.reason);
      console.error('[rider] unhandled rejection', e.reason);
    }
    window.addEventListener('error', onWindowError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    // --- Pointer-lock mouse-look (only wired up when joystick.mouseLook is true) ---
    let pointerLocked = false;
    function onMouseMove(e: MouseEvent) {
      if (!pointerLocked) return;
      camBearing += e.movementX * look.mouseSensitivity * (Math.PI / 180);
      lookPitch = clamp(lookPitch + e.movementY * look.mouseSensitivity, look.minPitch, look.skyMaxPitch);
    }
    function onPointerLockChange() {
      pointerLocked = !!canvasEl && document.pointerLockElement === canvasEl;
    }
    if (j.mouseLook) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('pointerlockchange', onPointerLockChange);
    }

    // --- P3b: sky-dome overlay (look up past the horizon into sky/stars) ---
    // Fully independent renderer/scene/camera from the map's CustomLayer — a plain
    // full-window overlay canvas that's shown/hidden and faded by opacity, never
    // touching the map's own render(gl, options) path.
    let skyRenderer: THREE.WebGLRenderer | undefined;
    let skyScene: THREE.Scene | undefined;
    let skyCamera: THREE.PerspectiveCamera | undefined;
    if (skyCanvas) {
      skyRenderer = new THREE.WebGLRenderer({ canvas: skyCanvas, alpha: true });
      skyRenderer.setSize(window.innerWidth, window.innerHeight);
      skyCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      skyScene = new THREE.Scene();

      const domeGeo = new THREE.SphereGeometry(500, 32, 32);
      const domeMat = new THREE.ShaderMaterial({
        side: THREE.BackSide,
        uniforms: {
          topColor: { value: new THREE.Color(0x02030c) },
          bottomColor: { value: new THREE.Color(0x1a1030) }
        },
        vertexShader: `
          varying vec3 vWorldPos;
          void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vWorldPos = worldPos.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vWorldPos;
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          void main() {
            float h = clamp(normalize(vWorldPos).y * 0.5 + 0.5, 0.0, 1.0);
            gl_FragColor = vec4(mix(bottomColor, topColor, h), 1.0);
          }
        `
      });
      const dome = new THREE.Mesh(domeGeo, domeMat);
      skyScene.add(dome);

      const starCount = 400;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        const theta = hash01(i, 0.13) * Math.PI * 2;
        const phi = hash01(i, 0.77) * Math.PI * 0.5; // upper hemisphere only (y > 0)
        const r = 480;
        starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        starPos[i * 3 + 1] = r * Math.cos(phi);
        starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, sizeAttenuation: false });
      skyScene.add(new THREE.Points(starGeo, starMat));
    }
    function onSkyResize() {
      if (!skyRenderer || !skyCamera) return;
      skyRenderer.setSize(window.innerWidth, window.innerHeight);
      skyCamera.aspect = window.innerWidth / window.innerHeight;
      skyCamera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onSkyResize);

    // --- Globe/constellation projection swap ---
    let wasGlobe = false;
    $effect(() => {
      const d = activeDriver;
      if (!map) return;
      if (d.globe) {
        if (!wasGlobe) {
          map.setProjection({ type: 'globe' } as any);
          map.setZoom(1); // whole-Earth framing for the constellation driver
        }
        wasGlobe = true;
      } else if (wasGlobe) {
        map.setProjection({ type: 'mercator' } as any);
        wasGlobe = false;
      }
    });

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

      mapZoomIn = () => map?.zoomIn();
      mapZoomOut = () => map?.zoomOut();
      mapResetBearing = () => map?.resetNorth();
      mapToggleTerrain = () => {
        if (!map) return;
        terrain3d = !terrain3d;
        map.setTerrain(
          terrain3d ? { source: 'terrain-dem', exaggeration: mapConfig.terrain.exaggeration } : null
        );
      };

      canvasEl = map.getCanvas();
      if (j.mouseLook && canvasEl.requestPointerLock) {
        canvasEl.addEventListener('click', () => canvasEl?.requestPointerLock());
      }

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

        // MapLibre v5: sky is a top-level style property (map.setSky), not a
        // layer — addLayer({ type: 'sky' }) throws (unknown layer type) in v5.
        map.setSky({
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': mapConfig.sky.sun,
          'sky-atmosphere-sun-intensity': 15
        });

        // --- 3D buildings + green nature (data-driven from map.json) ---
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
            } as any
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
            } as any
          );
        }

        // --- GTA-style walking rider: three.js CustomLayerInterface (threebox pattern) ---
        let lngLat: [number, number] = [rider.start[0], rider.start[1]];
        let scene: THREE.Scene;
        let camera: THREE.Camera;
        let renderer: THREE.WebGLRenderer;
        // GLB model per driver: a distinct procedural shape (or capsule) stays the
        // always-available fallback; a Group ("riderGroup") holds whichever mesh is
        // currently visible (fallback or loaded model) so the modelMatrix math in
        // render() doesn't need to know which it is.
        let riderGroup: THREE.Group;
        const fallbackCache: Record<string, THREE.Object3D> = {};
        function getFallback(driver: (typeof rider.drivers)[number]): THREE.Object3D {
          if (!fallbackCache[driver.id]) fallbackCache[driver.id] = makeProceduralVehicle(driver.id);
          return fallbackCache[driver.id];
        }
        const gltfLoader = new GLTFLoader();
        const modelCache: Record<string, THREE.Object3D | 'loading' | 'error'> = {};
        function ensureModelLoaded(driver: (typeof rider.drivers)[number]) {
          const glb = driver.model?.glb;
          if (!glb || modelCache[driver.id]) return;
          modelCache[driver.id] = 'loading';
          gltfLoader.load(
            rider.assetsBase + glb,
            (gltf) => {
              const obj = gltf.scene;
              const s = driver.model.scale ?? 1;
              obj.scale.setScalar(s);
              obj.rotation.y = driver.model.yaw ?? 0;
              obj.position.y = driver.model.y ?? 0;
              modelCache[driver.id] = obj;
              if (activeDriver.id === driver.id) applyActiveMesh();
            },
            undefined,
            () => {
              modelCache[driver.id] = 'error';
            }
          );
        }
        function applyActiveMesh() {
          if (!riderGroup) return;
          riderGroup.clear();
          const cached = modelCache[activeDriver.id];
          if (activeDriver.model?.glb && cached && cached !== 'loading' && cached !== 'error') {
            riderGroup.add(cached as THREE.Object3D);
          } else {
            riderGroup.add(getFallback(activeDriver));
          }
        }
        let natureScene: THREE.Scene;
        let treesMesh: THREE.InstancedMesh;
        let clockPrev = 0;
        let followGuard = false;
        let currentVisBoost = 1;
        const perfSamples = new Array(60).fill(16.7);
        let perfIdx = 0;
        let fpsEma = 60;
        // Expanded HUD keeps a longer rolling window (~120 samples) for the two line graphs.
        const GRAPH_N = 120;
        const frameGraphSamples = new Array(GRAPH_N).fill(16.7);
        const fpsGraphSamples = new Array(GRAPH_N).fill(60);
        const drawCallsGraphSamples = new Array(GRAPH_N).fill(0);
        let graphIdx = 0;

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

        function drawLineGraph(c: HTMLCanvasElement | undefined, samples: number[], idx: number, max: number, color: string) {
          if (!c) return;
          const ctx = c.getContext('2d');
          if (!ctx) return;
          const w = c.width, h = c.height;
          ctx.clearRect(0, 0, w, h);
          const n = samples.length;
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            const sample = samples[(idx + i) % n];
            const x = (i / (n - 1)) * w;
            const y = h - Math.min(sample, max) / max * h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        function drawExpandedGraphs() {
          if (!perfExpanded) return;
          drawLineGraph(fpsGraphCanvas, fpsGraphSamples, graphIdx, 90, '#5ee6a0');
          drawLineGraph(frameGraphCanvas, frameGraphSamples, graphIdx, 40, frameMs > 33 ? '#ff5c5c' : frameMs > 16 ? '#ffb84d' : '#5ee6a0');
          const drawCallsMax = Math.max(20, ...drawCallsGraphSamples);
          drawLineGraph(drawCallsGraphCanvas, drawCallsGraphSamples, graphIdx, drawCallsMax, '#9db4ff');
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

            riderGroup = new THREE.Group();
            scene.add(riderGroup);

            // Kick off lazy GLB loads for every driver that declares one; the capsule
            // stays visible until each finishes (or forever, if it errors/is null).
            for (const d of rider.drivers) ensureModelLoaded(d);
            applyActiveMesh();

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
          render(gl: WebGLRenderingContext, args: { defaultProjectionData: { mainMatrix: number[] } }) {
            renderFireCount++;
            lastRenderTime = performance.now();
            // BUGFIX: the whole body is wrapped in try/catch so a single bad frame
            // can never permanently kill rendering. This render() re-schedules itself
            // via map.triggerRepaint() at the very end — if it threw before reaching
            // that line the self-scheduling chain died forever, and joystick/keyboard
            // input silently stopped being consumed (see tick()'s own unconditional
            // triggerRepaint() below, which is the belt-and-suspenders fix for that).
            try {
            if (!map) return;
            // MapLibre v5 CustomLayerInterface.render(gl, args) exposes the projection
            // matrix at args.defaultProjectionData.mainMatrix (v4's positional
            // `modelViewProjectionMatrix` arg is gone under v5 — see
            // https://maplibre.org/maplibre-gl-js/docs/examples/add-a-3d-model-to-globe-using-threejs/).
            const matrix = args?.defaultProjectionData?.mainMatrix;
            if (!matrix) {
              console.warn('[rider] no projection matrix from maplibre v5 render args');
              return;
            }

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

              frameGraphSamples[graphIdx % GRAPH_N] = ms;
              fpsGraphSamples[graphIdx % GRAPH_N] = fpsEma;
              graphIdx++;
              drawExpandedGraphs();

              if (renderer) {
                renderCalls = renderer.info.render.calls;
                renderTriangles = renderer.info.render.triangles;
                memGeometries = renderer.info.memory.geometries;
                memTextures = renderer.info.memory.textures;
                // graphIdx has already advanced past frameGraphSamples/fpsGraphSamples
                // above (renderer.info is only known after the three.js render calls
                // this frame) — write to the same slot they just used.
                drawCallsGraphSamples[(graphIdx - 1 + GRAPH_N) % GRAPH_N] = renderCalls;
              }
              const heap = (performance as any).memory?.usedJSHeapSize;
              jsHeapMb = heap != null ? heap / (1024 * 1024) : undefined;
            }

            const step = stepDrive(
              ride,
              {
                moveX: freeInput.moveX,
                moveY: freeInput.moveY,
                // Screen-forward must match character-forward regardless of camera
                // framing (e.g. the 90°-offset side-scroll camera) — fold the active
                // camera's bearingOffset into the bearing stepDrive steers toward.
                camBearing: camBearing + (activeCamera.bearingOffset * Math.PI) / 180,
                climb: freeInput.climb
              },
              {
                min: activeDriver.speed.min,
                avg: activeDriver.speed.avg,
                max: activeDriver.speed.max,
                turn: (activeDriver.turn * Math.PI) / 180 || activeDriver.turn,
                accel: activeDriver.accel,
                lift: activeDriver.lift,
                maxAlt: activeDriver.maxAlt,
                deadzone: rider.joystick.deadzone
              },
              dt
            );

            hudSpeed = ride.speed ?? 0;
            hudAltitude = step.altitude;

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
            const vis = metersPerUnit * currentVisBoost;
            const modelMatrix = new THREE.Matrix4()
              .makeTranslation(merc.x, merc.y, merc.z)
              .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
              .multiply(new THREE.Matrix4().makeRotationZ(-step.heading))
              .multiply(new THREE.Matrix4().makeScale(vis, vis, vis));

            camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix).multiply(modelMatrix);

            renderer.resetState();
            renderer.render(scene, camera);

            // Static nature pass: raw mercator→clip matrix, no rider anchor, so the tree
            // scatter renders at its fixed world position independent of rider movement.
            camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
            renderer.render(natureScene, camera);

            map.triggerRepaint();
              if (debugVisible && renderFireCount % 30 === 0) {
                console.debug('[rider]', {
                  fps: Math.round(fps),
                  renderCalls,
                  driver: activeDriver.id,
                  camera: activeCamera.id,
                  freeInput: { moveX: freeInput.moveX, moveY: freeInput.moveY, yawRate: freeInput.yawRate, pitchRate: freeInput.pitchRate, climb: freeInput.climb },
                  step: { dForward: step.dForward, forwardX: step.forwardX, forwardZ: step.forwardZ, heading: step.heading, altitude: step.altitude },
                  lngLat
                });
              }
            } catch (err) {
              lastError = err instanceof Error ? `${err.message}\n${err.stack ?? ''}` : String(err);
              console.error('[rider] render() threw', err);
            }
          }
        };

        map.addLayer(riderLayer);

        // Swap the visible rider mesh (capsule vs. loaded GLB) whenever the driver
        // changes — the model may already be cached from the background preload above,
        // or may still be 'loading'/'error', in which case applyActiveMesh falls back
        // to the capsule until (if ever) the load resolves.
        // $effect.root because this runs inside map.on('load'), an async callback fired
        // outside Svelte's component-init effect context — a plain $effect() here throws
        // "effect_orphan".
        stopMeshEffect = $effect.root(() => {
          $effect(() => {
            activeDriver;
            applyActiveMesh();
          });
        });

        // Follow-cam: driven off the rAF loop, guarded against re-entrant jumpTo calls.
        // camBearing/lookPitch are user-owned (integrated ONLY from the right look-stick,
        // keyboard, or pointer-lock mouse — never from rider heading) so steering never
        // fights the camera.
        let tickPrev = 0;
        const tick = () => {
          if (disposed || !map) return;
          const now = performance.now();
          const dt = tickPrev ? Math.min((now - tickPrev) / 1000, 0.1) : 0;
          tickPrev = now;
          debugNow = now;

          // ROOT FIX: riderLayer.render() self-schedules the next frame via its own
          // map.triggerRepaint() call at the end of its body — if a frame throws
          // before reaching that line (now guarded by try/catch too, but belt-and-
          // suspenders), the chain used to die forever and joystick input stopped
          // being consumed. This always-on rAF loop keeps kicking the map's render
          // queue unconditionally every frame regardless of render()'s own state.
          if (map && !disposed) map.triggerRepaint();

          // Yaw integrates unbounded (full 360°, no clamp).
          camBearing += freeInput.yawRate * (look.yawRate * Math.PI / 180) * dt;
          // Pitch integrates in degrees, clamped to [minPitch, skyMaxPitch] — this
          // intentionally allows values above mapMaxPitch (85°) toward "sky".
          lookPitch = clamp(
            lookPitch + freeInput.pitchRate * look.pitchRate * dt,
            look.minPitch,
            look.skyMaxPitch
          );

          // Higher-altitude drivers (drone/heli/plane) need the follow-cam pulled
          // back further so the vehicle stays framed instead of filling the screen.
          const effectiveZoom = activeCamera.zoom - altZoomOffset(activeDriver.altitudeBand.eye);
          currentVisBoost = modelVisBoost(effectiveZoom, rider.modelVis);

          if (!followGuard) {
            followGuard = true;
            // P3b: sky-dome overlay goes here — once activeCamera.pitch + lookPitch
            // exceeds look.mapMaxPitch, a sky-dome/space overlay should take over
            // instead of the flat cap below (maplibre pitch tops out at mapMaxPitch).
            const mapPitch = Math.min(activeCamera.pitch + lookPitch, look.mapMaxPitch);
            map.jumpTo({
              center: lngLat,
              bearing: (camBearing * 180) / Math.PI + activeCamera.bearingOffset,
              pitch: mapPitch,
              zoom: effectiveZoom
            });
            followGuard = false;
          }

          // P3b: sky-dome overlay — fade in as lookPitch climbs past mapMaxPitch
          // (the map's own pitch cap), simulating looking up into sky/stars.
          if (skyCanvas && skyRenderer && skyScene && skyCamera) {
            const overlayOpacity = Math.min(1, Math.max(0, (lookPitch - look.mapMaxPitch) / 20));
            if (overlayOpacity <= 0) {
              skyCanvas.style.display = 'none';
            } else {
              skyCanvas.style.display = '';
              skyCanvas.style.opacity = String(overlayOpacity);
              const yawRad = camBearing;
              const upAngle = THREE.MathUtils.degToRad(lookPitch - 90);
              const dir = new THREE.Vector3(
                Math.sin(yawRad) * Math.cos(upAngle),
                Math.sin(upAngle),
                -Math.cos(yawRad) * Math.cos(upAngle)
              );
              skyCamera.position.set(0, 0, 0);
              skyCamera.lookAt(dir);
              skyRenderer.render(skyScene, skyCamera);
            }
          }
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      });
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('error', onWindowError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      window.removeEventListener('resize', onSkyResize);
      skyRenderer?.dispose();
      stopMeshEffect?.();
      map?.remove();
    };
  });
</script>

<div class="map-wrap">
  <div bind:this={mapContainer} class="map"></div>
  <canvas bind:this={skyCanvas} class="sky-overlay"></canvas>

  {#if debugVisible}
    <div class="debug-overlay">
      <div>fps {Math.round(fps)} · {renderCalls} draws</div>
      <div>
        render: {renderFireCount} calls —
        {debugNow - lastRenderTime > 500 ? 'STALLED' : 'LIVE'}
      </div>
      <div>
        moveX {freeInput.moveX.toFixed(2)} moveY {freeInput.moveY.toFixed(2)}
      </div>
      <div>
        yawRate {freeInput.yawRate.toFixed(2)} pitchRate {freeInput.pitchRate.toFixed(2)}
        climb {freeInput.climb.toFixed(2)}
      </div>
      <div>driver {activeDriver.id} · camera {activeCamera.id}</div>
      <div>
        heading {(ride.heading * (180 / Math.PI)).toFixed(1)}° · alt {(ride.altitude ?? 0).toFixed(1)}m
        · speed {hudSpeed.toFixed(2)}
      </div>
      <div class:err={lastError !== 'none'}>err: {lastError}</div>
    </div>
  {/if}

  <button
    type="button"
    class="hamburger"
    class:active={showMenu}
    aria-label="Menu"
    aria-expanded={showMenu}
    onclick={() => (showMenu = !showMenu)}
  >☰</button>

  {#if showMenu}
    <nav class="menu" aria-label="Main menu">
      <section class="menu-section">
        <h2>Galaxies</h2>
        {#each galaxies as g (g.id)}
          <a class="menu-item" href={g.href} rel="external">{g.label}</a>
        {/each}
      </section>

      <section class="menu-section">
        <h2>Camera View</h2>
        <div class="menu-row">
          <button type="button" class="menu-btn" onclick={mapZoomIn}>Zoom +</button>
          <button type="button" class="menu-btn" onclick={mapZoomOut}>Zoom −</button>
          <button type="button" class="menu-btn" onclick={mapResetBearing}>Reset View</button>
          <button type="button" class="menu-btn" class:active={terrain3d} onclick={mapToggleTerrain}>
            3D {terrain3d ? 'On' : 'Off'}
          </button>
        </div>
        {#each rider.cameras as c (c.id)}
          <button
            type="button"
            class="menu-item"
            class:active={c.id === activeCamera.id}
            onclick={() => (activeCamera = c)}
          >
            <span class="icon">{c.icon}</span> {c.label}
          </button>
        {/each}
      </section>

      <section class="menu-section">
        <h2>Drive Mode</h2>
        {#each rider.drivers as d (d.id)}
          <button
            type="button"
            class="menu-item"
            class:active={d.id === activeDriver.id}
            onclick={() => (activeDriver = d)}
          >
            <span class="icon">{d.icon}</span> {d.label}
          </button>
        {/each}
      </section>

      <section class="menu-section">
        <h2>Configs</h2>
        <button
          type="button"
          class="menu-item"
          class:active={showGraphStats}
          onclick={() => (showGraphStats = !showGraphStats)}
        >Graph Stats</button>
        <button
          type="button"
          class="menu-item"
          class:active={debugVisible}
          onclick={() => {
            const url = new URL(window.location.href);
            if (debugVisible) url.searchParams.delete('debug');
            else url.searchParams.set('debug', '1');
            window.location.href = url.toString();
          }}
        >Debug Mode</button>
        <button type="button" class="menu-item" onclick={exportLogs}>
          Log Export{logExportStatus ? ` — ${logExportStatus}` : ''}
        </button>
        <button
          type="button"
          class="menu-item"
          class:active={showKeybindings}
          onclick={() => (showKeybindings = !showKeybindings)}
        >Keybindings</button>
        {#if showKeybindings}
          <div class="menu-about">
            {#each Object.entries(rider.keys) as [action, keys]}
              <p><strong>{action}</strong>: {(keys as string[]).join(' / ')}</p>
            {/each}
            <p><strong>debug</strong>: F8</p>
          </div>
        {/if}
        <button
          type="button"
          class="menu-item"
          class:active={showAbout}
          onclick={() => (showAbout = !showAbout)}
        >About</button>
        {#if showAbout}
          <div class="menu-about">
            <p>Galaxy Earth — a 3D terrain basemap built with SvelteKit, MapLibre GL JS v5, and Three.js. Drive, fly, or walk across real-world terrain in a GTA-style twin-stick rig with a free-look camera.</p>
            <p><a href="https://github.com/diegonmarcos/diegonmarcos.github.io" rel="external">github.com/diegonmarcos/diegonmarcos.github.io</a></p>
            <p>Part of the Galaxy constellation of apps (Hub, Earth, Gaia, X1).</p>
          </div>
        {/if}
      </section>
    </nav>
  {/if}

  <div class="fabs">
    <div class="fab-anchor">
      {#if showCameraPicker}
        <div class="fab-popup" role="menu" aria-label="Camera view">
          {#each rider.cameras as c (c.id)}
            <button
              type="button"
              class="fab-popup-item"
              class:active={c.id === activeCamera.id}
              onclick={() => {
                activeCamera = c;
                showCameraPicker = false;
              }}
            ><span class="icon">{c.icon}</span> {c.label}</button>
          {/each}
        </div>
      {/if}
      <button
        type="button"
        class="fab"
        aria-label="Camera view"
        onclick={() => {
          showCameraPicker = !showCameraPicker;
          showDriverPicker = false;
        }}
      >{activeCamera.icon}</button>
    </div>

    <div class="fab-anchor">
      {#if showDriverPicker}
        <div class="fab-popup" role="menu" aria-label="Driver">
          {#each rider.drivers as d (d.id)}
            <button
              type="button"
              class="fab-popup-item"
              class:active={d.id === activeDriver.id}
              onclick={() => {
                activeDriver = d;
                showDriverPicker = false;
              }}
            ><span class="icon">{d.icon}</span> {d.label}</button>
          {/each}
        </div>
      {/if}
      <button
        type="button"
        class="fab"
        aria-label="Driver mode"
        onclick={() => {
          showDriverPicker = !showDriverPicker;
          showCameraPicker = false;
        }}
      >{activeDriver.icon}</button>
    </div>
  </div>

  <div class="hud">
    <a class="back" href="/galaxy/" rel="external">← Galaxy</a>
    <h1>Earth</h1>
    {#if showGraphStats}
    <button
      type="button"
      class="perf"
      class:warn={frameMs > 16}
      class:bad={frameMs > 33}
      aria-expanded={perfExpanded}
      aria-label="Toggle performance stats"
      onclick={() => (perfExpanded = !perfExpanded)}
    >
      <canvas bind:this={perfCanvas} width="120" height="36"></canvas>
      <div class="perf-text">
        <span>{Math.round(fps)} fps</span>
        <span>{renderCalls} draws</span>
      </div>
    </button>
    {/if}

    {#if showGraphStats && perfExpanded}
      <div class="perf-panel">
        <div class="perf-row">
          <span class="perf-label">FPS</span>
          <canvas bind:this={fpsGraphCanvas} width="160" height="40"></canvas>
          <span class="perf-num">{Math.round(fps)}</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Frame</span>
          <canvas bind:this={frameGraphCanvas} width="160" height="40"></canvas>
          <span class="perf-num" class:warn={frameMs > 16} class:bad={frameMs > 33}>{frameMs.toFixed(1)} ms</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Draws</span>
          <canvas bind:this={drawCallsGraphCanvas} width="160" height="40"></canvas>
          <span class="perf-num">{renderCalls}</span>
        </div>
        <div class="perf-stat"><span>Draw calls</span><span>{renderCalls}</span></div>
        <div class="perf-stat"><span>Triangles</span><span>{renderTriangles.toLocaleString()}</span></div>
        <div class="perf-stat"><span>Geometries</span><span>{memGeometries}</span></div>
        <div class="perf-stat"><span>Textures</span><span>{memTextures}</span></div>
        {#if jsHeapMb != null}
          <div class="perf-stat"><span>JS heap</span><span>{jsHeapMb.toFixed(1)} MB</span></div>
        {/if}
      </div>
    {/if}
  </div>

  <div class="velocimeter">{Math.round(hudSpeed)} <span class="redline">/ {activeDriver.speed.max}</span> km/h</div>
  {#if activeDriver.lift}
    <div class="altimeter">{Math.round(hudAltitude)} <span class="redline">/ {activeDriver.maxAlt}</span> m</div>
  {/if}

  {#if activeDriver.lift}
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


  <Joystick side="left" channel="drive" scale={j.scale} />
  <Joystick side="right" channel="look" scale={j.scale} />
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

  /* P3b: sky-dome overlay — sits above the map, below HUD/joysticks so those
     stay clickable and visible; opacity/display are driven from the rAF tick. */
  .sky-overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    display: none;
  }

  .hud {
    position: absolute;
    top: 1rem;
    left: 4.5rem;
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
    pointer-events: auto;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
  }

  .perf-panel {
    margin-top: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.5rem 0.6rem;
    background: rgba(10, 14, 26, 0.55);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 0.5rem;
    backdrop-filter: blur(4px);
    width: max-content;
    pointer-events: auto;
    font-size: 0.7rem;
    font-variant-numeric: tabular-nums;
  }

  .perf-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .perf-row canvas {
    display: block;
    width: 160px;
    height: 40px;
  }

  .perf-label {
    width: 3rem;
    color: #9db4ff;
  }

  .perf-num {
    width: 4.5rem;
    text-align: right;
    color: #5ee6a0;
  }

  .perf-num.warn { color: #ffb84d; }
  .perf-num.bad { color: #ff5c5c; }

  .perf-stat {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: #cfd8ff;
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

  .velocimeter .redline {
    opacity: 0.6;
    font-size: 0.75em;
  }

  /* Same pill as .velocimeter, offset to its right — shown only for lift-capable
     drivers (drone/helicopter/airplane/constellation), since ground vehicles have
     no altitude control. */
  .altimeter {
    position: fixed;
    top: 1rem;
    left: calc(50% + 6.5rem);
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

  .altimeter .redline {
    opacity: 0.6;
    font-size: 0.75em;
  }

  /* Climb control centered between the two joysticks, at bottom-center. */
  .climb {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 26px;
    z-index: 35;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    pointer-events: auto;
  }

  /* Top-left hamburger menu: Galaxies / Camera View / Drive Mode / Configs. */
  .hamburger {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 40;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(157, 180, 255, 0.35);
    background: rgba(10, 14, 26, 0.55);
    color: #cfd8ff;
    font-size: 1.3rem;
    line-height: 1;
    backdrop-filter: blur(4px);
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .hamburger.active {
    background: rgba(157, 180, 255, 0.35);
    border-color: rgba(157, 180, 255, 0.7);
  }

  .menu {
    position: fixed;
    top: 1rem;
    left: 4.5rem;
    z-index: 39;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: min(280px, calc(100vw - 5.5rem));
    max-height: calc(100vh - 2rem);
    max-height: calc(100dvh - 2rem);
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    padding: 0.8rem;
    background: rgba(10, 14, 26, 0.7);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 1rem;
    backdrop-filter: blur(6px);
    color: #cfd8ff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 0.85rem;
  }

  .menu-section h2 {
    margin: 0 0 0.4rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(207, 216, 255, 0.6);
  }

  .menu-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.4rem;
  }

  .menu-btn {
    flex: 1 1 auto;
    padding: 0.35rem 0.5rem;
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 0.5rem;
    background: transparent;
    color: #cfd8ff;
    font-family: inherit;
    font-size: 0.75rem;
    cursor: pointer;
    touch-action: manipulation;
  }

  .menu-btn.active {
    background: rgba(157, 180, 255, 0.35);
    color: #ffffff;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border: none;
    border-radius: 0.6rem;
    background: transparent;
    color: #cfd8ff;
    font-family: inherit;
    font-size: 0.8rem;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    touch-action: manipulation;
  }

  .menu-item.active {
    background: rgba(157, 180, 255, 0.35);
    color: #ffffff;
  }

  .menu-item .icon {
    font-size: 1rem;
  }

  .menu-about {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    line-height: 1.4;
    color: rgba(207, 216, 255, 0.85);
  }

  .menu-about a {
    color: #9db4ff;
  }

  /* Quick-access FABs: stacked bottom-right, above the right look-stick. */
  .fabs {
    position: fixed;
    right: 26px;
    bottom: 260px;
    z-index: 36;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.6rem;
    pointer-events: auto;
  }

  .fab-anchor {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;
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

  /* Debug overlay: F8 or ?debug=1. Read-only diagnostics for the render()
     self-scheduling chain (renderFireCount/lastRenderTime) plus live input state. */
  .debug-overlay {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 100;
    pointer-events: none;
    font-family: monospace;
    font-size: 11px;
    line-height: 1.5;
    color: #d8e0ff;
    background: rgba(0, 0, 0, 0.7);
    padding: 8px 10px;
    border-radius: 6px;
    white-space: nowrap;
  }

  .debug-overlay .err {
    color: #ff6b6b;
  }
</style>
