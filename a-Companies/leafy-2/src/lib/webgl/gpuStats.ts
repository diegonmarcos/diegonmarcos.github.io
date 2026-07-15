// Shared render-stats bag. The in-canvas <StatsSampler/> writes it every frame;
// the DOM <NerdStats/> panel polls it. Plain object → no cross-module rune quirks.
export const gpuStats = {
  fps: 0,
  ms: 0,
  calls: 0,
  triangles: 0,
  geometries: 0,
  textures: 0,
  programs: 0,
  gpu: '—',
  vendor: '—'
};
