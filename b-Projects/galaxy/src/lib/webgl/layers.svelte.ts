// Shared reactive scene toggles + perf knobs. NerdStats writes them; World gates
// each component on `layers.*`; PerfTune applies `perf.*`. Runes module (Svelte 5).

export const layers = $state({
  stars: true,
  fireflies: true,
  moons: true,
  solar: true,
  comets: true,
  milkyway: true,
  water: true,
  flora: true,
  ghetto: true,
  city: true,
  house: true,
  fauna: true
});

// coarse pointer = touch/mobile → default to a lower DPR ceiling (big FPS win);
// desktop keeps 2. User can still override via the NerdStats selector.
const coarse = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;

export const perf = $state({
  dprCap: coarse ? 1.5 : 2 // device-pixel-ratio ceiling — the single biggest mobile win
});

export const LAYER_LABELS: [keyof typeof layers, string][] = [
  ['stars', 'Stars'], ['fireflies', 'Fireflies'], ['moons', 'Moons'],
  ['solar', 'Solar system'], ['comets', 'Comets'], ['milkyway', 'Milky Way'],
  ['water', 'Water (reflections)'], ['flora', 'Flora'], ['ghetto', 'Ghetto'],
  ['city', 'City'], ['house', 'House'], ['fauna', 'Fauna']
];
