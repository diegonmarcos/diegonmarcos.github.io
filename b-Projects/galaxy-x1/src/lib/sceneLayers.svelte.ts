// x1-scene-specific reactive layer toggles. NerdStats (engine) writes them via props;
// World gates each component on `layers.*`. Runes module (Svelte 5).

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

export const LAYER_LABELS: [keyof typeof layers, string][] = [
  ['stars', 'Stars'], ['fireflies', 'Fireflies'], ['moons', 'Moons'],
  ['solar', 'Solar system'], ['comets', 'Comets'], ['milkyway', 'Milky Way'],
  ['water', 'Water (reflections)'], ['flora', 'Flora'], ['ghetto', 'Ghetto'],
  ['city', 'City'], ['house', 'House'], ['fauna', 'Fauna']
];
