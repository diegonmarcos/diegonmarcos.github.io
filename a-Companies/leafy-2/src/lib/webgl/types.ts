// Shared shapes for the data-driven scene config (src/lib/data/scene.json).
export type Vec3 = [number, number, number];

export interface FaunaSpecies {
  asset: string; // catalog model id (src/lib/data/assets.json)
  type: 'ground' | 'air';
  count: number;
  scale: number;
  area: number;
  height?: number; // air species only
  clip?: number;   // animation clip index; omit for static (rigged, no clips) models
}

export interface TreeType {
  name: string;
  trunk: string;
  leaf: string;
  shape: 'cone' | 'sphere';
  minHeight: number;
  maxHeight: number;
  weight: number; // relative frequency
}

export interface CubeFace { label: string; url: string; }
export interface Stop {
  scroll: number;
  title: string;
  subtitle: string;
  cube: { size: number; bg: string; faces: CubeFace[] };
}

export interface SceneConfig {
  camera: { fov: number; near: number; far: number };
  render: { maxPixelRatio: number; exposure: number; bloom: { strength: number; radius: number; threshold: number } };
  night: {
    background: string;
    ambient: { color: string; intensity: number };
    hemisphere: { sky: string; ground: string; intensity: number };
  };
  assets: {
    ground: { map: string; normal: string; rough: string; repeat: number };
    waterNormals: string;
  };
  world: {
    ground: { size: number; roughness: number };
    water: { size: number; center: Vec3 };
    stars: { count: number; radius: number };
    moons: { radius: number; position: Vec3; color: string; emissive: number; light: number }[];
    trees: { count: number; area: number; clear: number; types: TreeType[] };
    fauna: FaunaSpecies[];
  };
  spline: { points: Vec3[] };
  stops: Stop[];
}

export interface Updatable { update(elapsed: number, delta: number): void; }
