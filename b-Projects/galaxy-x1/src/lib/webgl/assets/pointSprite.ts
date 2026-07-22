import * as THREE from 'three';

// Shared round sprite for all THREE.Points clouds so points render as soft discs,
// never square quads. One cached radial-gradient texture, reused everywhere.
let tex: THREE.CanvasTexture | null = null;

export function roundPointTexture(): THREE.CanvasTexture {
  if (tex) return tex;
  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  const x = cv.getContext('2d')!;
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  tex = new THREE.CanvasTexture(cv);
  return tex;
}
