// Shared generic perf knobs. PerfTune applies `perf.*`. Scene-specific layer toggles
// live per-planet (e.g. galaxy-x1's `$lib/sceneLayers.svelte`). Runes module (Svelte 5).

// coarse pointer = touch/mobile → default to a lower DPR ceiling (big FPS win);
// desktop keeps 2. User can still override via the NerdStats selector.
const coarse = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;

export const perf = $state({
  dprCap: coarse ? 1.5 : 2 // device-pixel-ratio ceiling — the single biggest mobile win
});
