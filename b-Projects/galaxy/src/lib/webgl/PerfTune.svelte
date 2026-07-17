<script lang="ts">
  // Mobile perf: cap the renderer's device-pixel-ratio. A phone at DPR 3 renders
  // ~4x the pixels of DPR 1.5; clamping to perf.dprCap is the single biggest FPS win.
  import { useThrelte } from '@threlte/core';
  import { perf } from './layers.svelte';

  const { dpr } = useThrelte();

  $effect(() => {
    const want = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, perf.dprCap);
    if (dpr.current !== want) dpr.set(want);
  });
</script>
