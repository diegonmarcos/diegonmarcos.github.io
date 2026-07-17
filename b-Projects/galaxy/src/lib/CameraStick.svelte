<script lang="ts">
  // Right-side camera joystick for free-ride: hold to orbit (yaw) + tilt (pitch).
  // Writes normalized rates into freeInput; FreeRig integrates them per frame.
  import { freeInput } from '$lib/webgl/free/freeInput';

  let base = $state<HTMLElement>();
  let knob = $state<HTMLElement>();
  let active = false;
  let cx = 0, cy = 0;
  const R = 56;
  let kx = $state(0), ky = $state(0);

  $effect(() => { if (knob) knob.style.transform = `translate(${kx}px, ${ky}px)`; });

  const pt = (e: PointerEvent) => ({ x: e.clientX, y: e.clientY });
  function down(e: PointerEvent) {
    if (!base) return;
    const r = base.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2;
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
    position: fixed; right: 26px; bottom: 26px; z-index: 35;
    width: 132px; height: 132px; border-radius: 50%;
    background: rgba(10, 14, 26, 0.35); border: 1px solid rgba(157, 180, 255, 0.35);
    backdrop-filter: blur(4px); touch-action: none; cursor: grab;
    display: grid; place-items: center;
  }
  .joy:active { cursor: grabbing; }
  .knob {
    width: 52px; height: 52px; border-radius: 50%;
    background: rgba(125, 255, 176, 0.45); border: 1px solid rgba(207, 255, 224, 0.7);
    box-shadow: 0 0 14px rgba(125, 255, 176, 0.5); pointer-events: none;
  }
  .ic {
    position: absolute; top: 8px; color: rgba(207, 224, 255, 0.6);
    font: 14px/1 system-ui, sans-serif; pointer-events: none;
  }
</style>
