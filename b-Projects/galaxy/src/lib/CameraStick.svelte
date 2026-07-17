<script lang="ts">
  // Right-side camera joystick for free-ride: hold to orbit (yaw) + tilt (pitch).
  // Writes normalized rates into freeInput; FreeRig integrates them per frame.
  // Deflection radius R derives from the rendered size, so the desktop 2x scale
  // (CSS media query) automatically doubles the usable travel too.
  import { freeInput } from '$lib/webgl/free/freeInput';

  let base = $state<HTMLElement>();
  let knob = $state<HTMLElement>();
  let active = false;
  let cx = 0, cy = 0, R = 56;
  let kx = $state(0), ky = $state(0);

  $effect(() => { if (knob) knob.style.transform = `translate(${kx}px, ${ky}px)`; });

  const pt = (e: PointerEvent) => ({ x: e.clientX, y: e.clientY });
  function down(e: PointerEvent) {
    if (!base) return;
    const r = base.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2; R = r.width * 0.42;
    active = true; base.setPointerCapture(e.pointerId); move(e);
  }
  function move(e: PointerEvent) {
    if (!active) return;
    const p = pt(e);
    let dx = p.x - cx, dy = p.y - cy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    kx = dx; ky = dy;
    freeInput.yawRate = dx / R;    // right → orbit clockwise
    freeInput.pitchRate = -dy / R; // up → tilt toward top-down
  }
  function up() { active = false; kx = 0; ky = 0; freeInput.yawRate = 0; freeInput.pitchRate = 0; }
</script>

<div class="joy cam" bind:this={base} onpointerdown={down} onpointermove={move} onpointerup={up} onpointercancel={up}>
  <div class="knob" bind:this={knob}></div>
  <span class="ic" aria-hidden="true">◎</span>
</div>

<style>
  .joy {
    width: 264px; height: 264px; border-radius: 50%;
    background: rgba(10, 14, 26, 0.35); border: 1px solid rgba(157, 180, 255, 0.35);
    backdrop-filter: blur(4px); touch-action: none; cursor: grab;
    display: grid; place-items: center; position: relative;
  }
  .joy:active { cursor: grabbing; }
  .knob {
    width: 104px; height: 104px; border-radius: 50%;
    background: rgba(125, 255, 176, 0.45); border: 1px solid rgba(207, 255, 224, 0.7);
    box-shadow: 0 0 14px rgba(125, 255, 176, 0.5); pointer-events: none;
  }
  .ic {
    position: absolute; top: 8px; color: rgba(207, 224, 255, 0.6);
    font: 14px/1 system-ui, sans-serif; pointer-events: none;
  }
  /* desktop: 2x the whole control (radius auto-scales from rendered size) */
  @media (min-width: 820px) and (pointer: fine) {
    .joy { width: 320px; height: 320px; }
    .knob { width: 128px; height: 128px; }
    .ic { top: 14px; font-size: 20px; }
  }
</style>
