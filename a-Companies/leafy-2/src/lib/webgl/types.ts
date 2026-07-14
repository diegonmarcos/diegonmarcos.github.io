// Shared shapes for the data-driven scene config (src/lib/data/scene.json).
export type Vec3 = [number, number, number];

export interface FaunaSpecies {
  model: string;
  type: 'ground' | 'air';
  count: number;
  scale: number;
  area: number;
  height?: number; // air species only
  clip?: number;   // animation clip index; omit for static (rigged, no clips) models
}

export interface CubeFace { label: string; url: string; }
export interface CubeConfig { scroll: number; size: number; bg: string; faces: CubeFace[]; }

export interface SceneConfig {
  camera: { fov: number; near: number; far: number };
  render: { maxPixelRatio: number; exposure: number; bloom: { strength: number; radius: number; threshold: number } };
  night: {
    background: string;
    moonlight: { color: string; intensity: number; position: Vec3 };
    hemisphere: { sky: string; ground: string; intensity: number };
  };
  assets: {
    ground: { map: string; normal: string; rough: string; repeat: number };
    waterNormals: string;
  };
  world: {
    ground: { size: number };
    water: { size: number; center: Vec3 };
    stars: { count: number; radius: number };
    moons: { radius: number; position: Vec3; color: string }[];
    trees: { count: number; area: number; clear: number };
    fauna: FaunaSpecies[];
  };
  spline: { points: Vec3[] };
  cubes: CubeConfig[];
}

export interface Updatable { update(elapsed: number, delta: number): void; }
