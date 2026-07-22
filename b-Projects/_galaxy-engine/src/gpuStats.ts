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
  vendor: '—',
  // footprint — CPU (main-thread load estimate) + VRAM (scene-walk byte estimate).
  // Memory (JS heap) is polled DOM-side in NerdStats via performance.memory.
  cores: 0,     // navigator.hardwareConcurrency
  cpuPct: 0,    // est. main-thread load % (frame time vs display refresh budget)
  vramMB: 0,    // est. GPU memory: texture + geometry bytes walked from the scene
  // active render-stack settings (declared in the 3D stack panel)
  dpr: 0,       // renderer pixel ratio actually in use
  bufW: 0,      // drawing-buffer width  (px actually shaded)
  bufH: 0,      // drawing-buffer height
  renderMode: '—' // always | on-demand | manual
};
