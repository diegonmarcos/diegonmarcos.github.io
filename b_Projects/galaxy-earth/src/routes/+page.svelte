<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import mapConfig from '$lib/data/map.json';
  import { freeInput, climbTotal, channelOwners } from '$engine/freeInput';
  import { stepDrive, stepVehicle } from '$engine/locomotion';
  import { stepAirplane, stepHelicopter, stepDrone } from '$engine/flight';
  import type { FlightState, FlightTelemetry } from '$engine/flight';
  import { stepGame } from '$engine/game';
  import type { GameState, GamePhase } from '$engine/game';
  import Joystick from '$engine/Joystick.svelte';
  import Cockpit from '$lib/Cockpit.svelte';
  import { createStreetProvider } from '$lib/street';
  import { createFlightAudio } from '$lib/flightAudio';

  // Speed unit boundary: map.json speeds are km/h (matches the HUD readout);
  // stepDrive works in m/s, so this is the single place the conversion happens.
  const KMH = 1 / 3.6;

  let mapContainer: HTMLDivElement;
  let minimapContainer: HTMLDivElement;
  let minimapArrow: HTMLDivElement;

  const rider = mapConfig.rider;
  const j = rider.joystick;
  const look = j.look;

  // Camera zoom is derived from vehicle size (relative to rider.camera.refSize)
  // plus a speed-based pullback (rider.camera.speedZoom) — real elevation now
  // handles altitude, so zoom only needs to keep fast/large vehicles legible.
  const camCfg = rider.camera;
  function cameraZoomFor(driver: any, cam: any, speedMs?: number): number {
    const size = driver.size ?? camCfg.refSize;
    const vmax = (driver.speed.max ?? 0) * KMH;
    const vRatio = vmax > 0 ? Math.min(1, (speedMs ?? 0) / vmax) : 0;
    const z = cam.zoom + Math.log2(camCfg.refSize / size) - camCfg.speedZoom * (cam.speedZoomMult ?? 1) * vRatio;
    return Math.max(camCfg.minZoom, Math.min(camCfg.maxZoom, z));
  }

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
  let debugVisible = $state(true);
  // Minimap: north-up corner overlay, on by default (core navigation aid). No
  // toggle UI wired yet — the $state flag is here for a future button/keybind.
  let showMinimap = $state(true);
  let showMenu = $state(false);
  let showGraphStats = $state(false);
  let showAbout = $state(false);
  let showKeybindings = $state(false);
  // New WASD/Arrows/Space/+-/1-7/Shift+1-8 scheme reference card, toggled by
  // the 'k' key (see onKeyDown) — separate from the hamburger-menu
  // `showKeybindings` panel above, which is data-driven off rider.keys.
  let showKeybindsPanel = $state(false);
  const keybindsList: { key: string; action: string }[] = [
    { key: 'W A S D', action: 'Move (forward/back/left/right)' },
    { key: 'Arrows / Mouse', action: 'Look direction' },
    { key: 'Space', action: 'Speed up' },
    { key: '+ / -', action: 'Altitude up/down' },
    { key: '1 – 7', action: 'Camera select' },
    { key: 'Shift+1 – 8', action: 'Driver select' },
    { key: ',', action: 'Cycle camera' },
    { key: '.', action: 'Cycle driver' },
    { key: 'K', action: 'Toggle this panel' }
  ];
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
    // A top-level Object.getOwnPropertyNames() replacer ARRAY (the previous approach)
    // filters every nested level down to those same key names too, silently truncating
    // any nested object's own fields — this is why exported logs came back "collapsed".
    // Use a per-value replacer FUNCTION instead (no key-name filtering) with a WeakSet
    // to break cycles instead of throwing and losing the whole line to "[object Object]".
    const seen = new WeakSet<object>();
    try {
      return JSON.stringify(
        a,
        (_key, value) => {
          if (typeof value === 'bigint') return `${value}n`;
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) return '[Circular]';
            seen.add(value);
          }
          return value;
        },
        2
      ) ?? String(a);
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
  const ride: { heading: number; speed?: number; altitude?: number; steer?: number } = { heading: 0 };
  // Vehicle camera feel (FOV zoom + roll lean) is applied only while control==="vehicle";
  // camFovCur/camRollCur are the currently-applied values, tracked outside $state so the
  // rAF loop can compare-before-set (map.setVerticalFieldOfView churns the transform
  // otherwise) without triggering reactivity on every frame.
  let camFovCur: number | undefined;
  let camRollCur = 0;

  // Flight physics (drone/helicopter/airplane): a single persistent FlightState
  // carried across frames like `ride`, plus a persistent throttle/collective
  // LEVER (stays where set — not a momentary axis like moveX/moveY) and the
  // last telemetry frame for the Cockpit HUD + attitude camera to read.
  const flightState: FlightState = {
    heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 0,
    velX: 0, velZ: 0, battery: 1
  };
  // $state (not a plain let) so the throttle-lever UI can bind to/reflect the
  // value the frame() loop mutates each tick — Svelte 5 signals are readable/
  // writable from any closure in the component, including the onMount rAF loop.
  let flightThrottle = $state(0);
  let flightTelemetry = $state<FlightTelemetry | null>(null);
  // Plain (non-reactive) snapshot of the last flight control-step's computed
  // input axes, written every frame by the control branch below and read by
  // the throttled debug dump in riderLayer.render — cheap, no rune overhead.
  let lastFlightDebug: any = null;
  let flightAudioMuted = $state(false);
  // Reassigned once onMount creates the real map/flightAudio instances — same
  // pattern as mapZoomIn/mapToggleTerrain below (template needs a stable
  // reference before onMount runs).
  let toggleFlightAudioMute = () => {};
  let cycleFlightView = () => {};

  // Flight game-loop (spawn/flying/landed/crashed) — persistent across frames
  // like flightState/ride; mirrored into $state fields for the HUD/toast/flash.
  const gameState: GameState = { phase: 'spawn', airborneTime: 0, landings: 0, crashes: 0, crashTimer: 0 };
  let gamePhase = $state<GamePhase>('spawn');
  let gameLandings = $state(0);
  let showLandedToast = $state(false);
  let showCrashFlash = $state(false);

  // Frame-error diagnostic badge — always visible (not just debug mode) once
  // frame() has caught at least one throw; the FIRST error's message+stack is
  // kept so the still-unidentified production throw is inspectable in place.
  let frameErrorCount = $state(0);
  let firstFrameErrorText = $state('');
  let showFrameErrorOverlay = $state(false);
  // Set by the driver-switch $effect below (component scope, no map/groundElev
  // available there yet) and consumed once inside frame() the next tick, where
  // groundElevation is known — that's the only place ASL can be computed.
  let pendingFlightAltDefault: number | null = null;
  // UI toggles for flight-only controls; default to false/0 per spec (no
  // dedicated control existed before flight mode).
  let flightGearDown = $state(true);
  let flightFlaps = $state(0);
  let flightBraking = $state(false);
  let cockpitVisible = $state(rider.cockpit.defaultVisible as boolean);

  $effect(() => {
    // Reset speed AND seed altitude to this driver's own default on every switch
    // (hard snap, no interpolation) — altitude otherwise carries over from
    // stepDrive's `state` object, so e.g. landing a drone at 120m and switching
    // to Walk left the capsule stuck "flying" at 120m instead of on the ground.
    const a: any = (activeDriver as any).altitude;
    ride.altitude = clamp(a.default, a.min, a.max);
    ride.speed = ((activeDriver as any).speed.idle ?? 0) * KMH;
    if ((activeDriver as any).control === 'flight') {
      // Hard snap FlightState too — same reasoning as ride.altitude above.
      flightState.heading = ride.heading;
      flightState.bank = 0;
      flightState.pitch = 0;
      flightState.speed = 0;
      flightState.vspeed = 0;
      flightState.velX = 0;
      flightState.velZ = 0;
      flightState.battery = 1;
      flightThrottle = 0;
      pendingFlightAltDefault = a.default;
      flightTelemetry = null;
    }
    console.log(`[rider] driver -> '${activeDriver.id}' (default altitude ${ride.altitude}m, range [${a.min},${a.max}]m)`);
  });
  $effect(() => {
    console.log(`[rider] camera -> '${activeCamera.id}' (pitch ${activeCamera.pitch}, zoom ${cameraZoomFor(activeDriver, activeCamera)})`);
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

    console.log(`[rider] mount: driver=${activeDriver.id} camera=${activeCamera.id} start=${rider.start}`);

    // --- One-time init self-check. Always runs, regardless of debugVisible —
    // this is a one-shot diagnostic, not a per-frame cost. Isolates "the
    // physics function itself works" from "input isn't reaching it", which is
    // the ambiguity that blocks diagnosing a dead joystick from the console
    // alone. Defensive: must never be able to break the app. ---
    try {
      console.group('[rider] init self-check');

      // Joystick channel-claim check: give the Joystick components time to
      // mount and claim their channels before asserting.
      setTimeout(() => {
        try {
          if (!channelOwners.drive) {
            console.error('[rider] INIT FAILURE: drive joystick never claimed its channel — no stick input will reach flight/vehicle control');
          }
          if (!channelOwners.look) {
            console.error('[rider] INIT FAILURE: look joystick never claimed its channel — no stick input will reach flight/vehicle control');
          }
          console.assert(!!channelOwners.drive, '[rider] channelOwners.drive is null 500ms after mount');
          console.assert(!!channelOwners.look, '[rider] channelOwners.look is null 500ms after mount');
        } catch (err) {
          console.error('[rider] init self-check (channel claim check) threw', err);
        }
      }, 500);

      // Pure synthetic smoke-test of stepAirplane on throwaway state/env —
      // never touches real game state. Full throttle, level input, dt=1/60,
      // 120 iterations (~2 simulated seconds); PASS iff speed increased.
      try {
        const airplaneDriver = rider.drivers.find((d) => (d as any).flight?.model === 'airplane') as any;
        const aparams = airplaneDriver?.flight;
        if (!aparams) {
          console.warn('[rider] init self-check: no airplane driver config found in rider.drivers — skipping stepAirplane smoke test');
        } else {
          const smokeState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 1000 };
          const smokeEnv = { groundElev: 0, dt: 1 / 60 };
          const smokeInput = { pitchAxis: 0, rollAxis: 0, yawAxis: 0, throttle: 1, climbAxis: 0, gearDown: false, flaps: 0, brake: 0 };
          const speedBefore = smokeState.speed;
          for (let i = 0; i < 120; i++) stepAirplane(smokeState, smokeInput, aparams, smokeEnv);
          const speedAfter = smokeState.speed;
          const pass = speedAfter > speedBefore;
          console.assert(pass, '[rider] stepAirplane smoke test: speed did not increase under full throttle');
          console.log(`[rider] stepAirplane smoke test: ${pass ? 'PASS' : 'FAIL'} — speed ${speedBefore.toFixed(2)} -> ${speedAfter.toFixed(2)} over 120 steps (2s) @ full throttle`);
          if (!pass) console.error('[rider] INIT FAILURE: stepAirplane physics smoke test failed — the flight-dynamics function itself is not producing acceleration; the bug is in physics, not input routing');
        }
      } catch (err) {
        console.error('[rider] init self-check (stepAirplane smoke test) threw', err);
      }

      console.groupEnd();
    } catch (err) {
      console.error('[rider] init self-check failed entirely', err);
    }

    // MapLibre is browser-only — must be imported inside onMount (no SSR).
    let map: import('maplibre-gl').Map | undefined;
    // Minimap: a second, lightweight MapLibre instance (same hidden-instance
    // pattern as street.ts's createMaskProvider) rendering a flat 2D north-up
    // reference view centered on the rider. Never allowed to break the main
    // map/frame loop — every touch point is try/catch-guarded.
    let minimap: import('maplibre-gl').Map | undefined;
    let minimapCenter: [number, number] | null = null;
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

    // Flight audio — start() must fire from a user gesture, so wire a one-time
    // pointerdown/keydown listener rather than calling it here.
    const flightAudio = createFlightAudio();
    let flightAudioStarted = false;
    const startFlightAudioOnce = () => {
      if (flightAudioStarted) return;
      flightAudioStarted = true;
      flightAudio.start();
    };
    window.addEventListener('pointerdown', startFlightAudioOnce, { once: true });
    window.addEventListener('keydown', startFlightAudioOnce, { once: true });
    toggleFlightAudioMute = () => {
      flightAudioMuted = !flightAudioMuted;
      flightAudio.setMuted(flightAudioMuted);
    };

    // Street surface provider (road-mask sampling) — created once the map finishes
    // loading (needs a live maplibre instance + the basemap style URL); left null on
    // any failure so physics degrades to normal (friction 1) driving, never breaks.
    let streetProvider: ReturnType<typeof createStreetProvider> | null = null;

    // Counts throws caught inside frame() (see the try/catch/finally there). A
    // single unguarded throw used to kill the rAF loop forever — no movement,
    // no camera, no input response, silently, with no recovery. finally{}
    // guarantees the reschedule always happens; this counter just keeps the
    // console from being spammed if something keeps failing every frame.
    let frameErrors = 0;

    // --- Keyboard bindings (data-driven from rider.keys in map.json) ---
    const heldKeys = new Set<string>();
    function recomputeMoveFromKeys() {
      const keys = rider.keys;
      let moveX = 0, moveY = 0, climb = 0;
      // Space is a speed-up nudge, not a movement key (rider.keys.forward is
      // WASD-only) — fold it in here as a forward-equivalent so ground vehicle/
      // character throttle (which reads freeInput.moveY) picks it up, without
      // ever allowing it to cancel reverse (hence max(), not +=).
      if ([...heldKeys].some((k) => keys.forward.includes(k)) || heldKeys.has(' ')) moveY += 1;
      if ([...heldKeys].some((k) => keys.back.includes(k))) moveY -= 1;
      if ([...heldKeys].some((k) => keys.left.includes(k))) moveX -= 1;
      if ([...heldKeys].some((k) => keys.right.includes(k))) moveX += 1;
      if ([...heldKeys].some((k) => keys.up.includes(k))) climb += 1;
      if ([...heldKeys].some((k) => keys.down.includes(k))) climb -= 1;
      freeInput.moveX = moveX;
      freeInput.moveY = moveY;
      freeInput.climbKeys = climb;
    }
    // Arrow keys are the keyboard fallback for the look-direction channel that
    // mouse-look/the right joystick already drive (freeInput.yawRate/pitchRate —
    // see the Mode-2 flight remap below, which reassigns this same channel to
    // roll/pitch while flying). Held, not discrete, mirroring recomputeMoveFromKeys.
    function recomputeLookFromKeys() {
      let yawRate = 0, pitchRate = 0;
      if (heldKeys.has('ArrowLeft')) yawRate -= 1;
      if (heldKeys.has('ArrowRight')) yawRate += 1;
      if (heldKeys.has('ArrowUp')) pitchRate += 1;
      if (heldKeys.has('ArrowDown')) pitchRate -= 1;
      freeInput.yawRate = yawRate;
      freeInput.pitchRate = pitchRate;
    }
    // Mode-2 flight keyboard remap — reuses the SAME heldKeys Set as
    // recomputeMoveFromKeys above (no parallel key-tracking machinery), just a
    // different combinator read only while in a flight control mode. NOTE: this
    // reads literal key strings ('a'/'d') rather than rider.keys.left/right
    // groups, because those groups fold ground-driving aliases together (see
    // map.json) while flight needs a/d isolated to roll. Arrow keys used to also
    // drive yaw here, but they're now the look/right-stick channel (freeInput.
    // yawRate/pitchRate, read a few lines below via kb.roll's sibling — see
    // rawRoll/rawPitch in the flight branch), so binding them to yaw here too
    // would double-assign the same physical keys to two different flight axes.
    function flightKeyAxes() {
      let pitch = 0, roll = 0, leftY = 0;
      if (heldKeys.has('w')) pitch += 1;
      if (heldKeys.has('s')) pitch -= 1;
      if (heldKeys.has('a')) roll -= 1;
      if (heldKeys.has('d')) roll += 1;
      if (heldKeys.has('q') || heldKeys.has(' ')) leftY += 1;
      if (heldKeys.has('e') || heldKeys.has('c')) leftY -= 1;
      return { pitch, roll, leftY };
    }
    function matchAny(list: string[], key: string) {
      return list.includes(key);
    }
    function cycle<T>(arr: T[], current: T, dir: 1 | -1): T {
      const i = arr.indexOf(current);
      const n = arr.length;
      return arr[(i + dir + n) % n];
    }
    cycleFlightView = () => {
      const ids: string[] = (rider.cockpit as any).viewCycle;
      const cams = ids.map((id) => rider.cameras.find((c) => c.id === id)).filter(Boolean) as (typeof rider.cameras)[number][];
      if (cams.length === 0) return;
      const idx = cams.findIndex((c) => c.id === activeCamera.id);
      activeCamera = idx === -1 ? cams[0] : cycle(cams, cams[idx], 1);
    };
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'F8') {
        e.preventDefault();
        debugVisible = !debugVisible;
        return;
      }
      if ((e.key === 'k' || e.key === 'K') && !e.repeat) {
        e.preventDefault();
        showKeybindsPanel = !showKeybindsPanel;
        return;
      }
      // Camera 1-7 / Shift+driver 1-8 direct-select — instant on keydown edge
      // (like the discrete cycle keys below), not a held state. Read via e.code
      // (DigitN) rather than e.key: Shift+1 on a US layout delivers e.key === '!',
      // not '1', so e.key can't reliably disambiguate camera-select from
      // driver-select once Shift is factored in.
      if (!e.repeat && e.code.startsWith('Digit')) {
        const n = Number(e.code.slice(5));
        if (e.shiftKey) {
          if (n >= 1 && n <= rider.drivers.length) {
            e.preventDefault();
            activeDriver = rider.drivers[n - 1];
          }
        } else if (n >= 1 && n <= rider.cameras.length) {
          e.preventDefault();
          activeCamera = rider.cameras[n - 1];
        }
        return;
      }
      const keys = rider.keys;
      // Normalize: a single-char key (e.g. 'w') can arrive as 'W' once Shift is
      // also held, so keydown's 'w' and keyup's 'W' silently desync — held-key
      // tracking must key off the same normalized string on both ends.
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const isArrow = k === 'ArrowUp' || k === 'ArrowDown' || k === 'ArrowLeft' || k === 'ArrowRight';
      const isHeld =
        matchAny(keys.forward, k) || matchAny(keys.back, k) ||
        matchAny(keys.left, k) || matchAny(keys.right, k) ||
        matchAny(keys.up, k) || matchAny(keys.down, k) ||
        isArrow;
      const isDiscrete =
        matchAny(keys.cameraNext, k) || matchAny(keys.cameraPrev, k) ||
        matchAny(keys.driverNext, k) || matchAny(keys.driverPrev, k);
      if (!isHeld && !isDiscrete) return;
      e.preventDefault();
      if (isHeld) {
        heldKeys.add(k);
        recomputeMoveFromKeys();
        if (isArrow) recomputeLookFromKeys();
      }
      if (isDiscrete && !e.repeat) {
        if (matchAny(keys.cameraNext, k)) activeCamera = cycle(rider.cameras, activeCamera, 1);
        else if (matchAny(keys.cameraPrev, k)) activeCamera = cycle(rider.cameras, activeCamera, -1);
        else if (matchAny(keys.driverNext, k)) activeDriver = cycle(rider.drivers, activeDriver, 1);
        else if (matchAny(keys.driverPrev, k)) activeDriver = cycle(rider.drivers, activeDriver, -1);
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const isArrow = k === 'ArrowUp' || k === 'ArrowDown' || k === 'ArrowLeft' || k === 'ArrowRight';
      if (heldKeys.has(k)) {
        e.preventDefault();
        heldKeys.delete(k);
        recomputeMoveFromKeys();
        if (isArrow) recomputeLookFromKeys();
      }
    }
    // A held key with no matching keyup (alt-tab, OS grabbing focus, devtools)
    // leaves heldKeys stuck forever — clear on blur and on tab-hide.
    function onWindowBlur() {
      heldKeys.clear();
      recomputeMoveFromKeys();
      recomputeLookFromKeys();
    }
    function onVisibilityChange() {
      if (document.hidden) {
        heldKeys.clear();
        recomputeMoveFromKeys();
        recomputeLookFromKeys();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onWindowBlur);
    document.addEventListener('visibilitychange', onVisibilityChange);

    // --- Debug overlay: ON by default now (rich console diagnostics for input/physics
    // debugging); F8 toggles via onKeyDown above, ?debug=0 explicitly disables, ?debug=1
    // is still accepted (redundant with the default but kept for explicit links). ---
    debugVisible = new URLSearchParams(window.location.search).get('debug') !== '0';
    if (debugVisible) {
      console.info('[rider] debug mode ON — F8 toggles, ?debug=0 disables, throttled frame logs every 30 renders');
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

    // On-screen climb buttons: element-only pointerup/leave/cancel handlers are
    // the stuck-input bug (lost capture, finger dragged off, OS gesture steals
    // the pointer) — a window-level fallback guarantees climbPointer zeroes.
    function onClimbPointerUp() {
      freeInput.climbPointer = 0;
    }
    window.addEventListener('pointerup', onClimbPointerUp);
    window.addEventListener('pointercancel', onClimbPointerUp);

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

      // Real 3D altitude via the `elevation` camera option instead of zoom-faking:
      // center elevation is auto-clamped to terrain by default, so without this
      // call `elevation` in jumpTo is a silent no-op (the single critical gotcha).
      (map as any).setCenterClampedToGround(false);
      map.setMaxPitch(look.mapMaxPitch);

      // Minimap: flat 2D north-up reference view, same basemap style as the
      // main map but no terrain/sky/3D — a cheap secondary instance, same
      // spirit as street.ts's hidden mask map. Never allowed to break the
      // main map or the frame loop if it fails to construct.
      try {
        if (minimapContainer) {
          minimap = new maplibre.Map({
            container: minimapContainer,
            style: mapConfig.basemap,
            center: mapConfig.center as [number, number],
            zoom: 15,
            pitch: 0,
            bearing: 0,
            interactive: false,
            attributionControl: false
          });
        }
      } catch (err) {
        console.error('[rider] minimap init failed', err);
        minimap = undefined;
      }

      mapZoomIn = () => map?.zoomIn();
      mapZoomOut = () => map?.zoomOut();
      mapResetBearing = () => map?.resetNorth();
      mapToggleTerrain = () => {
        if (!map) return;
        terrain3d = !terrain3d;
        console.log(`[rider] terrain3d -> ${terrain3d}`);
        map.setTerrain(
          terrain3d ? { source: 'terrain-dem', exaggeration: mapConfig.terrain.exaggeration } : null
        );
      };

      canvasEl = map.getCanvas();
      if (j.mouseLook && canvasEl.requestPointerLock) {
        canvasEl.addEventListener('click', () => canvasEl?.requestPointerLock());
      }

      // MapLibre swallows most tile/style/source errors into this event instead of
      // throwing — without this listener, things like a 404'd DEM tile or a broken
      // source URL never reach the console (or the exported log) at all.
      map.on('error', (e) => {
        console.error('[map] error event', e.error?.message ?? e.error ?? e);
      });
      map.on('sourcedataloading', (e) => {
        if (debugVisible && e.sourceId) console.debug(`[map] source loading: ${e.sourceId}`);
      });
      map.on('dataabort', (e) => {
        if (debugVisible) console.warn(`[map] data load aborted for source '${e.sourceId}'`);
      });

      // The liberty basemap's sprite sheet doesn't cover every POI icon it
      // references (office/ferry_terminal/gate/etc.) — MapLibre warns on every
      // one of those every load. A blank 1x1 fallback (as the warning itself
      // suggests) satisfies the missing-image lookup and stops the log spam.
      map.on('styleimagemissing', (e) => {
        if (!map || map.hasImage(e.id)) return;
        map.addImage(e.id, { width: 1, height: 1, data: new Uint8Array(4) });
      });

      map.on('load', () => {
        if (!map) return;

        try {
          streetProvider = createStreetProvider(maplibre, rider.street as any, mapConfig.basemap);
        } catch (err) {
          console.warn('[rider] street provider failed to initialize — falling back to normal driving', err);
          streetProvider = null;
        }

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
        // v5's sky spec has no "sky-type"/"sky-atmosphere-sun*" keys (those were
        // Mapbox GL JS names) — the real keys are sky-color/horizon-color/
        // fog-color/atmosphere-blend etc.
        map.setSky({
          'sky-color': '#88C6FC',
          'horizon-color': '#ffffff',
          'fog-color': '#ffffff',
          'atmosphere-blend': 0.8
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
          const url = rider.assetsBase + glb;
          console.log(`[rider] loading model for '${driver.id}': ${url}`);
          gltfLoader.load(
            url,
            (gltf) => {
              const obj = gltf.scene;
              const s = driver.model.scale ?? 1;
              obj.scale.setScalar(s);
              obj.rotation.y = driver.model.yaw ?? 0;
              obj.position.y = driver.model.y ?? 0;
              modelCache[driver.id] = obj;
              const box = new THREE.Box3().setFromObject(obj);
              const size = box.getSize(new THREE.Vector3());
              console.log(
                `[rider] model loaded for '${driver.id}': bbox ${size.x.toFixed(2)}x${size.y.toFixed(2)}x${size.z.toFixed(2)} (scale ${s})`
              );
              if (activeDriver.id === driver.id) applyActiveMesh();
            },
            (progress) => {
              if (progress.total) {
                console.debug(
                  `[rider] '${driver.id}' loading ${Math.round((progress.loaded / progress.total) * 100)}%`
                );
              }
            },
            (err) => {
              modelCache[driver.id] = 'error';
              console.error(`[rider] FAILED to load model for '${driver.id}' from ${url} — falling back to procedural mesh`, err);
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
        // Single authoritative clock for the whole rig — frame() below is the only
        // dt owner. render(gl, args), by contrast, is a pure DRAW callback: MapLibre
        // may call it 0..n times per frame, so integrating physics there (the old
        // design) structurally couldn't be trusted as "once per frame".
        let clockPrev = 0;
        // Plain closure snapshot the draw-only render() reads from — never $state,
        // never touched by render() itself.
        const frameState = {
          lngLat: [rider.start[0], rider.start[1]] as [number, number],
          heading: 0,
          agl: 0,
          groundElev: 0,
          vis: 1
        };
        let loggedCameraOnce = '';
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
            // BUGFIX: the whole body stays wrapped in try/catch so a single bad
            // draw can never permanently kill rendering — but this is now harmless
            // either way, because frame()'s own rAF loop (below) keeps ticking and
            // repainting even if a draw throws; render() no longer self-schedules.
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

            // Draw-only: read the last frame() snapshot, no clock/physics/camera here.
            const merc = maplibre.MercatorCoordinate.fromLngLat(
              frameState.lngLat,
              frameState.groundElev + frameState.agl
            );

            // model matrix: translate to the rider's merc x/y/z, rotate mesh to heading,
            // rotate X +90° (three Y-up → mercator Z-up), scale metres → merc units.
            const modelMatrix = new THREE.Matrix4()
              .makeTranslation(merc.x, merc.y, merc.z)
              .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
              .multiply(new THREE.Matrix4().makeRotationZ(-frameState.heading))
              .multiply(new THREE.Matrix4().makeScale(frameState.vis, frameState.vis, frameState.vis));

            camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix).multiply(modelMatrix);

            renderer.resetState();
            renderer.render(scene, camera);

            // Static nature pass: raw mercator→clip matrix, no rider anchor, so the tree
            // scatter renders at its fixed world position independent of rider movement.
            camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
            renderer.render(natureScene, camera);

              if (debugVisible && renderFireCount % 30 === 0) {
                console.groupCollapsed(`[rider] frame ${renderFireCount} — driver=${activeDriver.id}`);
                console.debug('[rider]', {
                  fps: Math.round(fps),
                  renderCalls,
                  driver: activeDriver.id,
                  camera: activeCamera.id,
                  freeInput: { moveX: freeInput.moveX, moveY: freeInput.moveY, yawRate: freeInput.yawRate, pitchRate: freeInput.pitchRate, climb: climbTotal() },
                  frameState
                });
                if ((activeDriver as any).control === 'flight' && lastFlightDebug) {
                  console.debug('[rider] channelOwners', lastFlightDebug.channelOwners);
                  console.table({
                    'raw.moveX': lastFlightDebug.raw.moveX,
                    'raw.moveY': lastFlightDebug.raw.moveY,
                    'raw.yawRate': lastFlightDebug.raw.yawRate,
                    'raw.pitchRate': lastFlightDebug.raw.pitchRate,
                    'key.leftY': lastFlightDebug.keyAxes?.leftY,
                    'key.yaw': lastFlightDebug.keyAxes?.yaw,
                    'key.pitch': lastFlightDebug.keyAxes?.pitch,
                    'key.roll': lastFlightDebug.keyAxes?.roll,
                    rawLeftY: lastFlightDebug.derived.rawLeftY,
                    rawYaw: lastFlightDebug.derived.rawYaw,
                    rawPitch: lastFlightDebug.derived.rawPitch,
                    rawRoll: lastFlightDebug.derived.rawRoll,
                    pitchAxis: lastFlightDebug.axes.pitchAxis,
                    rollAxis: lastFlightDebug.axes.rollAxis,
                    yawAxis: lastFlightDebug.axes.yawAxis,
                    leftY: lastFlightDebug.axes.leftY,
                    throttleOut: lastFlightDebug.axes.throttleOut
                  });
                  console.debug('[rider] telemetry', lastFlightDebug.telemetry, 'phase', lastFlightDebug.phase);
                }
                console.groupEnd();
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

        // frame(): the ONE authoritative rAF loop — owns dt, input integration,
        // stepDrive, HUD writes, the frameState snapshot, map.jumpTo, perf
        // sampling, the sky-dome overlay, and the single triggerRepaint() call.
        // riderLayer.render() above is draw-only and never mutates any of this.
        const frame = (now: number) => {
          if (disposed || !map) return;
          try {
          const dt = clockPrev ? Math.min((now - clockPrev) / 1000, 0.1) : 0;
          clockPrev = now;
          debugNow = now;

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

          // In flight modes the right stick is reassigned to roll/pitch (Mode-2 —
          // see the flight branch below) and no longer drives free-look, so this
          // integration is gated to ground modes only. On switching back to
          // ground the free-look resumes exactly where camBearing/lookPitch was
          // last left (no reset), so it "just works again".
          if ((activeDriver as any).control !== 'flight') {
            // Yaw integrates unbounded (full 360°, no clamp).
            camBearing += freeInput.yawRate * (look.yawRate * Math.PI / 180) * dt;
            // Pitch integrates in degrees, clamped to [minPitch, skyMaxPitch] — this
            // intentionally allows values above mapMaxPitch (85°) toward "sky".
            lookPitch = clamp(
              lookPitch + freeInput.pitchRate * look.pitchRate * dt,
              look.minPitch,
              look.skyMaxPitch
            );
          }

          const driverSpeed: any = (activeDriver as any).speed;
          const driverAltitude: any = (activeDriver as any).altitude;

          // Street surface sampling: position the hidden road-mask map at the rider's
          // CURRENT lngLat (before this frame's physics moves it) and read back the
          // surface under it — feeds friction into the vehicle physics below. It's a
          // nice-to-have (road friction), never allowed to break driving: a throw here
          // disables the provider permanently instead of recurring every frame.
          let surf: ReturnType<NonNullable<typeof streetProvider>['sample']> | null = null;
          if (streetProvider) {
            try {
              streetProvider.setPosition(lngLat);
              surf = streetProvider.sample();
            } catch (err) {
              console.error('[rider] street provider disabled after error', err);
              try { streetProvider.destroy(); } catch {}
              streetProvider = null;
            }
          }

          // Canonical frame is AGL everywhere; ASL (groundElev + agl) appears at
          // exactly two places derived from the same groundElev: model placement
          // (below, via frameState) and the camera `elevation` (below). Queried
          // ONCE per frame here (moved up from below the control branch) so the
          // flight branch's env.groundElev and the ASL math further down share
          // this exact same call — never query terrain twice per frame.
          const groundElevation = map.queryTerrainElevation(lngLat) ?? 0;

          let step: { heading: number; forwardX: number; forwardZ: number; dForward: number; altitude: number };
          if ((activeDriver as any).control === 'flight') {
            const fparams: any = (activeDriver as any).flight;
            if (pendingFlightAltDefault !== null) {
              flightState.altASL = groundElevation + pendingFlightAltDefault;
              pendingFlightAltDefault = null;
            }

            // --- Mode-2 RC flight-stick remap (rider.flightControls) ---
            // Left stick (channel 'drive' → moveX/moveY) and right stick (channel
            // 'look' → yawRate/pitchRate) are REUSED, not new components: left =
            // throttle/climb-lever(Y) + yaw(X); right = pitch(Y, inverted) + roll(X).
            const fc: any = (rider as any).flightControls;
            const kb = flightKeyAxes();
            const applyExpo = (v: number, e: number) => {
              const c = clamp(v, -1, 1);
              return (1 - e) * c + e * c * c * c;
            };
            const rawLeftY = clamp(freeInput.moveY + kb.leftY, -1, 1);
            const rawYaw = clamp(freeInput.moveX, -1, 1);
            // right Y (pitchRate) inverted: stick-back (negative pitchRate, per
            // Joystick's invertY-less convention) reads as nose-up.
            const rawPitch = clamp(-freeInput.pitchRate + kb.pitch, -1, 1);
            const rawRoll = clamp(freeInput.yawRate + kb.roll, -1, 1);

            const pitchAxis = applyExpo(rawPitch, fc.expo);
            const rollAxis = applyExpo(rawRoll, fc.expo);
            const yawAxis = applyExpo(rawYaw, fc.expo);
            const leftY = applyExpo(rawLeftY, fc.expo);

            let throttleOut = flightThrottle;
            if (fc.sticky_throttle.includes(fparams.model)) {
              // Sticky throttle lever: stays where set, nudged by left-Y.
              flightThrottle = clamp(flightThrottle + leftY * dt * 0.5, 0, 1);
              throttleOut = flightThrottle;
            } else if (fparams.model === 'helicopter') {
              // Collective is a direct (non-lever) stick, mapped 0.5±0.5.
              throttleOut = clamp(0.5 + leftY * 0.5, 0, 1);
            }

            const flightInput = {
              pitchAxis,
              rollAxis,
              yawAxis,
              throttle: throttleOut,
              climbAxis: fparams.model === 'drone' ? leftY : 0,
              gearDown: flightGearDown,
              flaps: flightFlaps,
              brake: flightBraking ? 1 : 0
            };
            const flightEnv = { groundElev: groundElevation, dt };
            const stepFn =
              fparams.model === 'airplane' ? stepAirplane :
              fparams.model === 'helicopter' ? stepHelicopter :
              stepDrone;
            const telemetry = stepFn(flightState, flightInput, fparams, flightEnv);
            flightTelemetry = telemetry;

            // Snapshot for the throttled debug dump in riderLayer.render — see
            // lastFlightDebug declaration for why this lives outside $state.
            lastFlightDebug = {
              raw: { moveX: freeInput.moveX, moveY: freeInput.moveY, yawRate: freeInput.yawRate, pitchRate: freeInput.pitchRate },
              keyAxes: kb,
              derived: { rawLeftY, rawYaw, rawPitch, rawRoll },
              axes: { pitchAxis, rollAxis, yawAxis, leftY, throttleOut },
              channelOwners: { ...channelOwners },
              telemetry,
              phase: gameState.phase
            };

            // Chase/orbit flight views: free-look is gated off above, so instead
            // ease camBearing toward the aircraft heading (spring, using the
            // existing camera.springTau) so the view stays behind the nose.
            // Cockpit ('fps') is excluded — it hard-sets bearing from attitude
            // directly further down. Easing (not snapping) camBearing itself
            // means it's already at the right value if the pilot switches back
            // to a ground driver, so ground free-look resumes seamlessly.
            if (activeCamera.id !== 'fps') {
              const tau = Math.max(1e-3, camCfg.springTau);
              const alpha = 1 - Math.exp(-dt / tau);
              const diff = Math.atan2(Math.sin(telemetry.heading - camBearing), Math.cos(telemetry.heading - camBearing));
              camBearing += diff * alpha;
            }

            // Flight game loop (spawn/flying/landed/crashed) — stepped every
            // flight frame regardless of camera view.
            const gameParams = {
              ...(rider as any).game,
              needsGear: fparams.model === 'airplane' && (rider as any).game.needsGear
            };
            const prevPhase = gameState.phase;
            stepGame(gameState, telemetry, gameParams as any, dt);
            gamePhase = gameState.phase;
            gameLandings = gameState.landings;
            if (prevPhase !== 'landed' && gameState.phase === 'landed') {
              showLandedToast = true;
              setTimeout(() => { showLandedToast = false; }, 2500);
            }
            if (prevPhase !== 'crashed' && gameState.phase === 'crashed') {
              showCrashFlash = true;
              setTimeout(() => { showCrashFlash = false; }, 400);
            }
            if (prevPhase === 'crashed' && gameState.phase === 'spawn') {
              // Reset the aircraft in place (no airport DB in this pass): altitude
              // back to the driver's default, speed to idle, wings level.
              const a: any = (activeDriver as any).altitude;
              flightState.altASL = groundElevation + a.default;
              flightState.speed = ((activeDriver as any).speed.idle ?? 0) * KMH;
              flightState.vspeed = 0;
              flightState.bank = 0;
              flightState.pitch = 0;
            }

            flightAudio.update(telemetry, fparams.model);
            // flightState.speed is signed (forward/rearward), unlike telemetry.speed
            // which is an unsigned magnitude for the HUD — position advance needs
            // the sign, so read it off the mutated state, not the telemetry.
            step = {
              heading: telemetry.heading,
              forwardX: Math.sin(telemetry.heading),
              forwardZ: -Math.cos(telemetry.heading),
              dForward: flightState.speed * dt,
              altitude: telemetry.altAGL
            };
          } else if ((activeDriver as any).control === 'vehicle') {
            const vparams: any = (activeDriver as any).vehicle;
            const vstep = stepVehicle(
              ride as any,
              {
                steerAxis: freeInput.moveX,
                throttle: Math.max(0, freeInput.moveY),
                brake: Math.max(0, -freeInput.moveY)
              },
              {
                ...vparams,
                maxSpeed: driverSpeed.max * KMH,
                friction: surf?.friction ?? 1
              },
              dt
            );
            // stepVehicle doesn't own altitude — car/cycle are ground vehicles
            // (altitude.min===max===0), so altitude just carries over unchanged.
            step = { ...vstep, altitude: ride.altitude ?? 0 };
          } else {
            step = stepDrive(
              ride,
              {
                moveX: freeInput.moveX,
                moveY: freeInput.moveY,
                // Screen-forward must match character-forward regardless of camera
                // framing (e.g. the 90°-offset side-scroll camera) — fold the active
                // camera's bearingOffset into the bearing stepDrive steers toward.
                camBearing: camBearing + (activeCamera.bearingOffset * Math.PI) / 180,
                climb: climbTotal()
              },
              {
                min: driverSpeed.min * KMH,
                cruise: driverSpeed.cruise * KMH,
                idle: driverSpeed.idle * KMH,
                max: driverSpeed.max * KMH,
                turn: (activeDriver as any).turnRate * (Math.PI / 180),
                accel: activeDriver.accel,
                turnAtMax: (activeDriver as any).turnAtMax,
                speedRef: driverSpeed.max * KMH,
                lift: driverAltitude.climbRate, // already m/s — not converted
                maxAlt: driverAltitude.max,
                minAlt: driverAltitude.min,
                deadzone: rider.joystick.deadzone
              },
              dt
            );
          }

          // ride.speed / flightState.speed are both m/s (params were *KMH); HUD is km/h.
          // Flight branch never touches `ride`, so ride.speed is stale during flight —
          // read the just-computed flight telemetry instead when airborne.
          hudSpeed = (activeDriver as any).control === 'flight'
            ? (flightTelemetry?.speed ?? 0) / KMH
            : (ride.speed ?? 0) / KMH;
          hudAltitude = step.altitude;

          const merc = maplibre.MercatorCoordinate.fromLngLat(lngLat, groundElevation + step.altitude);
          const metersPerUnit = merc.meterInMercatorCoordinateUnits();
          merc.x += step.forwardX * step.dForward * metersPerUnit;
          merc.y += step.forwardZ * step.dForward * metersPerUnit;
          const nextLngLat = merc.toLngLat();
          lngLat = [nextLngLat.lng, nextLngLat.lat];

          // True metric model scale + a small bounded per-camera legibility boost,
          // instead of a runtime 2^(18-z) hack that changed the model's size while
          // flying (the old altitude-zoom-fake + visibility-boost pair — deleted).
          frameState.lngLat = lngLat;
          frameState.heading = step.heading;
          frameState.agl = step.altitude;
          frameState.groundElev = groundElevation;
          frameState.vis = metersPerUnit * ((activeDriver.model as any)?.scale ?? 1) * ((activeCamera as any).modelBoost ?? 1);

          // Camera: `elevation` replaces zoom-faking — raising elevation raises the
          // eye by the same metre amount while meters-per-pixel stays untouched.
          // Constellation is the one honest exception: at 9000km terrain DEM/mercator
          // z/globe projection all break down, so it opts into a local zoom mapping.
          let zoom: number;
          let elevation: number;
          const orbitZoom: any = (activeDriver as any).orbitZoom;
          if (driverAltitude.model === 'zoom' && orbitZoom) {
            zoom = clamp(orbitZoom.refZoom - Math.log2(Math.max(step.altitude, 1) / orbitZoom.refAltitude), 0.5, 6);
            elevation = 0;
          } else {
            // ride.speed is stale during flight (flight never mutates `ride`) — use
            // the current-frame flight telemetry (m/s, matches cameraZoomFor's speedMs)
            // instead, same staleness class as the hudSpeed fix above.
            const camSpeedMs = (activeDriver as any).control === 'flight'
              ? (flightTelemetry?.speed ?? 0)
              : ride.speed;
            zoom = cameraZoomFor(activeDriver, activeCamera, camSpeedMs);
            const lift = (activeCamera as any).targetLift;
            const targetLift = lift === 'eye' ? driverAltitude.eyeHeight : typeof lift === 'number' ? lift : 0;
            elevation = groundElevation + step.altitude + targetLift;
          }

          const camKey = `${activeDriver.id}:${activeCamera.id}`;
          if (loggedCameraOnce !== camKey) {
            loggedCameraOnce = camKey;
            console.log(`[rider] camera path -> driver '${activeDriver.id}' camera '${activeCamera.id}': zoom ${zoom.toFixed(2)}, model '${driverAltitude.model}', size ${(activeDriver as any).size ?? camCfg.refSize}`);
          }

          const mapPitch = clamp(activeCamera.pitch + lookPitch, 0, look.mapMaxPitch);

          // Vehicle/flight camera feel — FOV widens and the view rolls with
          // speed/steer (vehicle) or bank (flight); only while control is
          // "vehicle" or "flight" so walkers are never touched. Reset to base
          // FOV/no-roll for every other control (including switching AWAY from
          // vehicle/flight) so the view can never be left banked or zoomed.
          const isVehicleControl = (activeDriver as any).control === 'vehicle';
          const isFlightControl = (activeDriver as any).control === 'flight';
          let fovTarget = camCfg.fovBase;
          let rollTarget = 0;
          if (isVehicleControl) {
            const vmax = driverSpeed.max * KMH;
            const vRatio = vmax > 0 ? Math.min(1, Math.abs(ride.speed ?? 0) / vmax) : 0;
            fovTarget = camCfg.fovBase + (camCfg.fovMax - camCfg.fovBase) * vRatio;
            const vparams: any = (activeDriver as any).vehicle;
            // Positive roll = clockwise about the view axis in MapLibre; a car
            // steering right (steer>0) banks the view right, hence the minus sign.
            rollTarget = -camCfg.rollMax * ((ride.steer ?? 0) / vparams.maxSteer) * vRatio;
          } else if (isFlightControl && flightTelemetry) {
            const vmax = driverSpeed.max * KMH;
            const vRatio = vmax > 0 ? Math.min(1, flightTelemetry.speed / vmax) : 0;
            fovTarget = camCfg.fovBase + (camCfg.fovMax - camCfg.fovBase) * vRatio;
            // Chase/orbit views get a half-banked lean (see the cockpit-view
            // override just below, which replaces this with full bank instead).
            rollTarget = -(flightTelemetry.bank * 180) / Math.PI * 0.5;
          }
          if (camFovCur === undefined || Math.abs(fovTarget - camFovCur) > 0.1) {
            camFovCur = fovTarget;
            (map as any).setVerticalFieldOfView?.(camFovCur);
          }
          camRollCur = rollTarget;

          // FLIGHT CAMERA EXCEPTION: camera bearing/pitch are normally user-owned
          // (right look-stick only — see the two "user-owned" comments near the
          // top of this file and in onMount) and never derived from rider heading.
          // Flight mode is the one deliberate exception: the aircraft's own
          // attitude (heading/pitch/bank) drives the camera directly so cockpit
          // and chase views feel piloted rather than free-look. Ground/character
          // paths above are completely untouched by this.
          let jtBearing = (camBearing * 180) / Math.PI + activeCamera.bearingOffset;
          let jtPitch = mapPitch;
          let jtElevation = elevation;
          let jtRoll = camRollCur;
          if (isFlightControl && flightTelemetry) {
            const isCockpitView = activeCamera.id === 'fps';
            if (isCockpitView) {
              const eyeH = (activeDriver as any).cockpitEyeHeight ?? 0;
              jtBearing = (flightTelemetry.heading * 180) / Math.PI;
              jtPitch = clamp(90 - (flightTelemetry.pitch * 180) / Math.PI, 0, look.mapMaxPitch);
              jtRoll = -(flightTelemetry.bank * 180) / Math.PI;
              jtElevation = groundElevation + step.altitude + eyeH;
            }
          }

          map.jumpTo({
            center: lngLat,
            bearing: jtBearing,
            pitch: jtPitch,
            zoom,
            elevation: jtElevation,
            roll: jtRoll
          });

          // Minimap: north-up corner widget, always centered on the rider (the
          // player marker is a fixed CSS arrow at the div's center — no need to
          // convert to pixel coords). Bearing stays 0 (north-up) rather than
          // following camBearing/step.heading every frame — a heading-up minimap
          // would need setBearing() every frame too, which is more render work
          // for a small corner widget and fights the "cheap secondary map"
          // pattern used elsewhere (street.ts). The marker itself still rotates
          // to show heading (see minimapArrow below). Throttled to only touch
          // the map when the position actually moved, matching the frame-loop's
          // general "don't do redundant work" style.
          if (minimap) {
            try {
              const moved =
                !minimapCenter ||
                Math.abs(minimapCenter[0] - lngLat[0]) > 1e-6 ||
                Math.abs(minimapCenter[1] - lngLat[1]) > 1e-6;
              // Coarse altitude-based zoom step: zoom out as the driver climbs,
              // similar in spirit to the main camera's altitude-driven zoom
              // above, but simple — a minimap doesn't need tight tuning.
              const agl = step.altitude ?? 0;
              const minimapZoom = agl > 3000 ? 10 : agl > 500 ? 13 : 15;
              if (moved) {
                minimapCenter = lngLat;
                minimap.jumpTo({ center: lngLat, zoom: minimapZoom, bearing: 0, pitch: 0 });
              }
              if (minimapArrow) {
                minimapArrow.style.transform = `translate(-50%, -50%) rotate(${(step.heading * 180) / Math.PI}deg)`;
              }
            } catch (err) {
              console.error('[rider] minimap update failed', err);
            }
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

          // The ONE triggerRepaint() call in the whole rig — this always-on rAF
          // loop keeps kicking the map's render queue unconditionally every frame
          // regardless of riderLayer.render()'s own state (its try/catch means a
          // thrown draw no longer matters — frame() keeps going either way).
          map.triggerRepaint();
          } catch (err) {
            frameErrors++;
            frameErrorCount = frameErrors;
            if (frameErrors === 1) {
              firstFrameErrorText = err instanceof Error ? `${err.message}\n${err.stack ?? ''}` : String(err);
            }
            if (frameErrors <= 5) console.error('[rider] frame error', err);
            if (frameErrors === 5) console.error('[rider] further frame errors suppressed');
          } finally {
            raf = requestAnimationFrame(frame);
          }
        };
        raf = requestAnimationFrame(frame);
      });
    })();

    return () => {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onWindowBlur);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('error', onWindowError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      window.removeEventListener('resize', onSkyResize);
      window.removeEventListener('pointerup', onClimbPointerUp);
      window.removeEventListener('pointercancel', onClimbPointerUp);
      skyRenderer?.dispose();
      stopMeshEffect?.();
      streetProvider?.destroy();
      flightAudio.destroy();
      try { minimap?.remove(); } catch {}
      map?.remove();
    };
  });
</script>

<div class="map-wrap" class:shake={showCrashFlash}>
  <div bind:this={mapContainer} class="map"></div>
  <canvas bind:this={skyCanvas} class="sky-overlay"></canvas>

  {#if (activeDriver as any).control === 'flight' && flightTelemetry}
    <Cockpit
      telemetry={flightTelemetry}
      model={(activeDriver as any).flight.model}
      visible={cockpitVisible && activeCamera.id === 'fps'}
    />
  {/if}

  <div class="minimap-wrap" class:hidden={!showMinimap}>
    <div bind:this={minimapContainer} class="minimap"></div>
    <div bind:this={minimapArrow} class="minimap-arrow"></div>
  </div>

  {#if showKeybindsPanel}
    <div class="keybinds-overlay">
      {#each keybindsList as row}
        <div class="keybinds-row"><span class="keybinds-key">{row.key}</span><span>{row.action}</span></div>
      {/each}
    </div>
  {/if}

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
        climb {climbTotal().toFixed(2)}
      </div>
      <div>driver {activeDriver.id} · camera {activeCamera.id}</div>
      <div>
        heading {(ride.heading * (180 / Math.PI)).toFixed(1)}° · alt {(ride.altitude ?? 0).toFixed(1)}m
        · speed {hudSpeed.toFixed(2)} km/h
      </div>
      <div class:err={lastError !== 'none'}>err: {lastError}</div>
      {#if (activeDriver as any).control === 'flight'}
        <div>game phase {gamePhase} · landings {gameLandings}</div>
      {/if}
    </div>
  {/if}

  {#if frameErrorCount > 0}
    <button
      type="button"
      class="frame-err-badge"
      onclick={() => (showFrameErrorOverlay = !showFrameErrorOverlay)}
    >⚠ frame errors: {frameErrorCount}</button>
    {#if showFrameErrorOverlay}
      <div class="frame-err-overlay">
        <pre>{firstFrameErrorText}</pre>
      </div>
    {/if}
  {/if}

  {#if showCrashFlash}
    <div class="crash-flash"></div>
  {/if}

  {#if showLandedToast}
    <div class="landed-toast">LANDED ✓</div>
  {/if}

  {#if (activeDriver as any).control === 'flight'}
    <div class="flight-hud">
      {#if (activeDriver as any).flight.model === 'airplane'}
        <div class="throttle-lever">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={flightThrottle}
            aria-label="Throttle"
          />
          <span>THR {(flightThrottle * 100).toFixed(0)}%</span>
        </div>
        <button type="button" class="flight-btn" class:active={flightGearDown} onclick={() => (flightGearDown = !flightGearDown)}>GEAR</button>
        <button type="button" class="flight-btn" class:active={flightFlaps > 0} onclick={() => (flightFlaps = flightFlaps > 0 ? 0 : 1)}>FLAPS</button>
      {/if}
      <button type="button" class="flight-btn view-cycle" aria-label="Cycle camera view" onclick={() => cycleFlightView()}>⟳</button>
      <button type="button" class="flight-btn mute-btn" aria-label="Mute flight audio" onclick={() => toggleFlightAudioMute()}>
        {flightAudioMuted ? '🔇' : '🔊'}
      </button>
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
        {#if (activeDriver as any).control === 'flight'}
          <button
            type="button"
            class="menu-item"
            class:active={flightGearDown}
            onclick={() => (flightGearDown = !flightGearDown)}
          >Gear {flightGearDown ? 'Down' : 'Up'}</button>
          <button
            type="button"
            class="menu-item"
            class:active={flightFlaps > 0}
            onclick={() => (flightFlaps = flightFlaps > 0 ? 0 : 1)}
          >Flaps {flightFlaps > 0 ? 'Out' : 'Up'}</button>
          <button
            type="button"
            class="menu-item"
            class:active={flightBraking}
            onpointerdown={() => (flightBraking = true)}
            onpointerup={() => (flightBraking = false)}
            onpointerleave={() => (flightBraking = false)}
          >Brake</button>
        {/if}
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
            // debug defaults ON, so turning it off must write an explicit ?debug=0
            // (deleting the param would just fall back to the default of on).
            if (debugVisible) url.searchParams.set('debug', '0');
            else url.searchParams.set('debug', '1');
            window.location.href = url.toString();
          }}
        >Debug Mode</button>
        <button
          type="button"
          class="menu-item"
          class:active={cockpitVisible}
          onclick={() => (cockpitVisible = !cockpitVisible)}
        >Cockpit HUD</button>
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

  <div class="velocimeter">{Math.round(hudSpeed)} <span class="redline">/ {(activeDriver as any).speed.max}</span> km/h</div>
  <div class="altimeter">{Math.round(hudAltitude)} <span class="redline">/ {(activeDriver as any).altitude.max}</span> m</div>

  {#if (activeDriver as any).altitude.climbRate > 0}
    <div class="climb">
      <button
        type="button"
        class="climb-btn"
        aria-label="Climb up"
        onpointerdown={() => (freeInput.climbPointer = 1)}
        onpointerup={() => (freeInput.climbPointer = 0)}
        onpointerleave={() => (freeInput.climbPointer = 0)}
        onpointercancel={() => (freeInput.climbPointer = 0)}
      >▲</button>
      <button
        type="button"
        class="climb-btn"
        aria-label="Climb down"
        onpointerdown={() => (freeInput.climbPointer = -1)}
        onpointerup={() => (freeInput.climbPointer = 0)}
        onpointerleave={() => (freeInput.climbPointer = 0)}
        onpointercancel={() => (freeInput.climbPointer = 0)}
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

  /* Keybindings help card: 'K' toggles. Left side of screen (debug-overlay owns
     top-right, minimap owns bottom-left) — same dark translucent HUD look. */
  .keybinds-overlay {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 100;
    pointer-events: none;
    font-family: monospace;
    font-size: 11px;
    line-height: 1.6;
    color: #d8e0ff;
    background: rgba(0, 0, 0, 0.7);
    padding: 8px 10px;
    border-radius: 6px;
    white-space: nowrap;
  }

  .keybinds-row {
    display: flex;
    gap: 12px;
  }

  .keybinds-key {
    display: inline-block;
    min-width: 100px;
    color: #9db4ff;
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

  /* Minimap: fixed bottom-left corner HUD widget. North-up (bearing 0, see
     frame()'s minimap.jumpTo call) — the player marker rotates instead. Styled
     to match .debug-overlay's dark translucent HUD look. */
  .minimap-wrap {
    position: fixed;
    left: 12px;
    bottom: 12px;
    z-index: 100;
    width: 180px;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(216, 224, 255, 0.35);
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }

  .minimap-wrap.hidden {
    display: none;
  }

  .minimap {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .minimap-arrow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #ff6b6b;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
    transform: translate(-50%, -50%);
    transform-origin: center;
  }

  /* --- Flight game loop: crash flash + screen shake, landed toast --- */
  .map-wrap.shake {
    animation: rider-shake 0.4s ease-in-out;
  }
  @keyframes rider-shake {
    10%, 90% { transform: translate(-1px, 0); }
    20%, 80% { transform: translate(2px, -1px); }
    30%, 50%, 70% { transform: translate(-3px, 2px); }
    40%, 60% { transform: translate(3px, -2px); }
  }
  .crash-flash {
    position: fixed;
    inset: 0;
    z-index: 200;
    pointer-events: none;
    background: #ff2d2d;
    animation: rider-crash-flash 0.4s ease-out forwards;
  }
  @keyframes rider-crash-flash {
    from { opacity: 0.65; }
    to { opacity: 0; }
  }
  .landed-toast {
    position: fixed;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 120;
    font-family: monospace;
    font-size: 20px;
    font-weight: bold;
    color: #5ee6a0;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid rgba(94, 230, 160, 0.6);
    pointer-events: none;
  }

  /* --- Frame-error diagnostic badge (always visible when nonzero, not just debug) --- */
  .frame-err-badge {
    position: fixed;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 150;
    font-family: monospace;
    font-size: 12px;
    color: #fff;
    background: #b0201f;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    padding: 4px 10px;
    cursor: pointer;
  }
  .frame-err-overlay {
    position: fixed;
    inset: 8% 8%;
    z-index: 151;
    overflow: auto;
    background: rgba(0, 0, 0, 0.9);
    color: #ff9d9d;
    font-family: monospace;
    font-size: 12px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 157, 157, 0.4);
    white-space: pre-wrap;
  }

  /* --- Flight UI: throttle lever, gear/flaps, view-cycle, mute --- */
  .flight-hud {
    position: fixed;
    right: 26px;
    bottom: 200px;
    z-index: 40;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
  .throttle-lever {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: rgba(10, 14, 26, 0.5);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 8px;
    padding: 8px 6px;
  }
  .throttle-lever input[type='range'] {
    writing-mode: vertical-lr;
    direction: rtl;
    width: 24px;
    height: 100px;
    accent-color: #9db4ff;
  }
  .throttle-lever span {
    font-family: monospace;
    font-size: 10px;
    color: #d8e0ff;
  }
  .flight-btn {
    font-family: monospace;
    font-size: 11px;
    color: #d8e0ff;
    background: rgba(10, 14, 26, 0.55);
    border: 1px solid rgba(157, 180, 255, 0.35);
    border-radius: 6px;
    padding: 6px 10px;
    cursor: pointer;
  }
  .flight-btn.active {
    background: rgba(94, 230, 160, 0.35);
    border-color: rgba(94, 230, 160, 0.7);
    color: #eafff3;
  }
</style>
