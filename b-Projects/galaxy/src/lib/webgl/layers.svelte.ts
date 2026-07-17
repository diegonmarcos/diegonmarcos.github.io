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
  fauna: true
});

export const perf = $state({
  dprCap: 2 // device-pixel-ratio ceiling — the single biggest mobile win
});

export const LAYER_LABELS: [keyof typeof layers, string][] = [
  ['stars', 'Stars'], ['fireflies', 'Fireflies'], ['moons', 'Moons'],
  ['solar', 'Solar system'], ['comets', 'Comets'], ['milkyway', 'Milky Way'],
  ['water', 'Water (reflections)'], ['flora', 'Flora'], ['ghetto', 'Ghetto'],
  ['city', 'City'], ['fauna', 'Fauna']
];
