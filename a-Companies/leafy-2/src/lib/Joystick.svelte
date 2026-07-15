<script lang="ts">
  // On-screen joystick for free-ride: writes steer/throttle into freeInput.
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
    freeInput.steer = dx / R;
    freeInput.throttle = -dy / R;
  }
  function up() { active = false; kx = 0; ky = 0; freeInput.steer = 0; freeInput.throttle = 0; }
</script>

<div class="joy" bind:this={base} onpointerdown={down} onpointermove={move} onpointerup={up} onpointercancel={up}>
  <div class="knob" bind:this={knob}></div>
</div>

<style>
  .joy {
    position: fixed; left: 26px; bottom: 26px; z-index: 35;
    width: 132px; height: 132px; border-radius: 50%;
    background: rgba(10, 14, 26, 0.35); border: 1px solid rgba(157, 180, 255, 0.35);
    backdrop-filter: blur(4px); touch-action: none; cursor: grab;
    display: grid; place-items: center;
  }
  .joy:active { cursor: grabbing; }
  .knob {
    width: 52px; height: 52px; border-radius: 50%;
    background: rgba(157, 180, 255, 0.5); border: 1px solid rgba(207, 224, 255, 0.7);
    box-shadow: 0 0 14px rgba(157, 180, 255, 0.5); pointer-events: none;
  }
</style>
