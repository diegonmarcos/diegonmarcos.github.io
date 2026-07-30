<script lang="ts">
  // On-screen joystick for free-ride: writes steer/throttle (move) or yawRate/pitchRate
  // (look) into freeInput. Reused as both the left move-stick and right look-stick.
  import { freeInput } from './freeInput';

  let {
    side = 'left',
    scale = 1,
    invertX = false,
    invertY = false,
    channel = 'move'
  }: {
    side?: 'left' | 'right';
    scale?: number;
    invertX?: boolean;
    invertY?: boolean;
    channel?: 'move' | 'look' | 'drive';
  } = $props();

  let base = $state<HTMLElement>();
  let knob = $state<HTMLElement>();
  let active = false;
  let activePointerId = -1;
  let cx = 0, cy = 0, R = 56;
  let kx = $state(0), ky = $state(0);

  $effect(() => { if (knob) knob.style.transform = `translate(${kx}px, ${ky}px)`; });

  const pt = (e: PointerEvent) => ({ x: e.clientX, y: e.clientY });
  function down(e: PointerEvent) {
    if (!base) return;
    const r = base.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2; R = r.width * 0.42;
    active = true;
    activePointerId = e.pointerId;
    // If capture fails (InvalidStateError — e.g. a stale/already-released pointerId),
    // this stick would otherwise keep reading pointermove events meant for a DIFFERENT
    // element/pointer once the finger leaves its bounds, producing bogus diagonal jumps.
    try {
      base.setPointerCapture(e.pointerId);
    } catch {
      // ignore — the pointerId filter below still keeps this stick's input correct
    }
    move(e);
  }
  function move(e: PointerEvent) {
    if (!active || e.pointerId !== activePointerId) return;
    const p = pt(e);
    let dx = p.x - cx, dy = p.y - cy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    kx = dx; ky = dy;
    if (channel === 'look') {
      freeInput.yawRate = (invertX ? -1 : 1) * dx / R;
      freeInput.pitchRate = (invertY ? -1 : 1) * (-dy / R);
    } else if (channel === 'drive') {
      freeInput.moveX = (invertX ? -1 : 1) * dx / R;
      freeInput.moveY = (invertY ? -1 : 1) * (-dy / R);
    } else {
      freeInput.steer = (invertX ? -1 : 1) * dx / R;
      freeInput.throttle = (invertY ? -1 : 1) * (-dy / R);
    }
  }
  function up(e: PointerEvent) {
    if (e.pointerId !== activePointerId) return;
    active = false; activePointerId = -1; kx = 0; ky = 0;
    if (channel === 'look') {
      freeInput.yawRate = 0;
      freeInput.pitchRate = 0;
    } else if (channel === 'drive') {
      freeInput.moveX = 0;
      freeInput.moveY = 0;
    } else {
      freeInput.steer = 0;
      freeInput.throttle = 0;
    }
  }
</script>

<div
  class="joy"
  class:right={side === 'right'}
  style={`--joy-scale: ${scale}`}
  role="slider"
  aria-label={channel === 'look' ? 'Look' : channel === 'drive' ? 'Drive' : 'Move'}
  aria-valuenow={0}
  tabindex="0"
  bind:this={base}
  onpointerdown={down}
  onpointermove={move}
  onpointerup={up}
  onpointercancel={up}
>
  <div class="knob" bind:this={knob}></div>
</div>

<style>
  .joy {
    position: fixed; left: 26px; bottom: 26px; z-index: 35;
    width: calc(264px * var(--joy-scale, 1)); height: calc(264px * var(--joy-scale, 1)); border-radius: 50%;
    background: rgba(10, 14, 26, 0.35); border: 1px solid rgba(157, 180, 255, 0.35);
    backdrop-filter: blur(4px); touch-action: none; cursor: grab;
    display: grid; place-items: center;
  }
  .joy.right { left: auto; right: 26px; }
  .joy:active { cursor: grabbing; }
  .knob {
    width: calc(104px * var(--joy-scale, 1)); height: calc(104px * var(--joy-scale, 1)); border-radius: 50%;
    background: rgba(157, 180, 255, 0.5); border: 1px solid rgba(207, 224, 255, 0.7);
    box-shadow: 0 0 14px rgba(157, 180, 255, 0.5); pointer-events: none;
  }
  /* desktop: 2x the whole control (radius auto-scales from rendered size) */
  @media (min-width: 820px) and (pointer: fine) {
    .joy { width: calc(320px * var(--joy-scale, 1)); height: calc(320px * var(--joy-scale, 1)); }
    .knob { width: calc(128px * var(--joy-scale, 1)); height: calc(128px * var(--joy-scale, 1)); }
  }
</style>
