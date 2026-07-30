<script lang="ts">
  // On-screen joystick for free-ride: writes steer/throttle (move) or yawRate/pitchRate
  // (look) into freeInput. Reused as both the left move-stick and right look-stick.
  //
  // Robustness contract: nothing may leave this stick stuck deflected. Pointer
  // tracking (move/up/cancel) is bound at the window level in addition to the
  // element, because capture can be lost (lostpointercapture), the OS can steal
  // the pointer, or the finger can lift outside the element bounds. Tab-away,
  // page-hide and visibility changes all force a reset too. Every path funnels
  // through one reset() so there is exactly one way back to neutral.
  import { onDestroy } from 'svelte';
  import { freeInput, claimChannel, releaseChannel, ownsChannel } from './freeInput';

  let {
    side = 'left',
    scale = 1,
    invertX = false,
    invertY = false,
    channel = 'move',
    deadzone = 0
  }: {
    side?: 'left' | 'right';
    scale?: number;
    invertX?: boolean;
    invertY?: boolean;
    channel?: 'move' | 'look' | 'drive';
    deadzone?: number;
  } = $props();

  let base = $state<HTMLElement>();
  let knob = $state<HTMLElement>();
  let active = false;
  let activePointerId = -1;
  let cx = 0, cy = 0, R = 56;
  let kx = $state(0), ky = $state(0);
  let listenersAttached = false;

  const owner = claimChannel(channel);
  onDestroy(() => {
    reset();
    releaseChannel(channel, owner);
  });

  $effect(() => { if (knob) knob.style.transform = `translate(${kx}px, ${ky}px)`; });

  const pt = (e: PointerEvent) => ({ x: e.clientX, y: e.clientY });

  function writeChannel(x: number, y: number) {
    if (!ownsChannel(channel, owner)) return;
    if (channel === 'look') {
      freeInput.yawRate = x;
      freeInput.pitchRate = y;
    } else if (channel === 'drive') {
      freeInput.moveX = x;
      freeInput.moveY = y;
    } else {
      freeInput.steer = x;
      freeInput.throttle = y;
    }
  }

  function attachWindowListeners() {
    if (listenersAttached) return;
    listenersAttached = true;
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    window.addEventListener('blur', reset);
    window.addEventListener('pagehide', reset);
    document.addEventListener('visibilitychange', onVisibility);
  }

  function detachWindowListeners() {
    if (!listenersAttached) return;
    listenersAttached = false;
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerup', up);
    window.removeEventListener('pointercancel', up);
    window.removeEventListener('blur', reset);
    window.removeEventListener('pagehide', reset);
    document.removeEventListener('visibilitychange', onVisibility);
  }

  function onVisibility() {
    if (document.hidden) reset();
  }

  function down(e: PointerEvent) {
    if (!base) return;
    e.preventDefault();
    // MapLibre's canvas sits underneath and also has pointer handlers — without
    // this, a prime suspect for "one stick works, the other doesn't".
    e.stopPropagation();
    const r = base.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2; R = r.width * 0.42;
    active = true;
    activePointerId = e.pointerId;
    try {
      base.setPointerCapture(e.pointerId);
    } catch {
      // ignore — the pointerId filter below still keeps this stick's input correct
    }
    attachWindowListeners();
    move(e);
  }

  function move(e: PointerEvent) {
    if (!active || e.pointerId !== activePointerId) return;
    // Self-healing watchdog: a mouse reporting buttons===0 mid-drag means the
    // up event was missed entirely (e.g. released outside the window).
    if (e.pointerType === 'mouse' && e.buttons === 0) { reset(); return; }
    const p = pt(e);
    let dx = p.x - cx, dy = p.y - cy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    kx = dx; ky = dy; // knob always tracks the raw (clamped) finger position
    let mag = d / R;
    if (mag > 1) mag = 1;
    const norm = mag <= deadzone ? 0 : (mag - deadzone) / (1 - deadzone);
    const ux = d > 0 ? dx / d : 0, uy = d > 0 ? dy / d : 0;
    const x = (invertX ? -1 : 1) * ux * norm;
    const y = (invertY ? -1 : 1) * -uy * norm;
    writeChannel(x, y);
  }

  function up(e: PointerEvent) {
    if (e.pointerId !== activePointerId) return;
    reset();
  }

  function reset() {
    active = false;
    activePointerId = -1;
    kx = 0; ky = 0;
    writeChannel(0, 0);
    detachWindowListeners();
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
  onlostpointercapture={reset}
  oncontextmenu={(e) => { e.preventDefault(); reset(); }}
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
