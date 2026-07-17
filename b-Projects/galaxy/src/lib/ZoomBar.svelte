<script lang="ts">
  // Vertical zoom / altitude slider for free-ride: drives freeInput.dist (0..1).
  // Top = zoomed all the way out (altitude high → Milky Way). Reflects wheel/pinch/presets.
  import { onMount } from 'svelte';
  import { freeInput } from '$lib/webgl/free/freeInput';

  let val = $state(freeInput.dist);
  let dragging = false;

  onMount(() => {
    let raf = 0;
    const tick = () => { if (!dragging) val = freeInput.dist; raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  });

  const set = (e: Event) => { val = +(e.target as HTMLInputElement).value; freeInput.dist = val; };
</script>

<div class="zoom">
  <span class="cap" aria-hidden="true">＋</span>
  <input
    type="range" min="0" max="1" step="0.005" bind:value={val}
    oninput={set} onpointerdown={() => (dragging = true)} onpointerup={() => (dragging = false)}
    aria-label="Zoom / altitude" />
  <span class="cap" aria-hidden="true">－</span>
</div>

<style>
  .zoom {
    height: 190px; width: 44px; border-radius: 22px;
    background: rgba(10, 14, 26, 0.35); border: 1px solid rgba(157, 180, 255, 0.35);
    backdrop-filter: blur(4px); touch-action: none;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
  }
  .cap { color: rgba(207, 224, 255, 0.6); font: 14px/1 system-ui, sans-serif; pointer-events: none; }
  input[type='range'] {
    writing-mode: vertical-lr; direction: rtl;   /* top = max (zoomed out) */
    width: 22px; height: 150px; accent-color: #9db4ff; cursor: pointer; touch-action: none;
  }
  /* desktop: taller bar → finer altitude precision */
  @media (min-width: 820px) and (pointer: fine) {
    .zoom { height: 340px; width: 54px; }
    input[type='range'] { width: 26px; height: 296px; }
  }
</style>
