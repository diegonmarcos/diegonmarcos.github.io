// Shared shapes for the data-driven scene config (src/lib/data/scene.json).
export type Vec3 = [number, number, number];

export interface SceneConfig {
  camera: { fov: number; near: number; far: number };
  render: {
    maxPixelRatio: number;
    exposure: number;
    bloom: { strength: number; radius: number; threshold: number };
  };
  assets: {
    sky: string;
    ground: { map: string; normal: string; rough: string; repeat: number };
    waterNormals: string;
  };
  world: {
    ground: { size: number };
    water: { size: number; center: Vec3 };
    stars: { count: number; radius: number };
    moons: { radius: number; position: Vec3; color: string }[];
    trees: { count: number; area: number; clear: number };
    rabbits: { count: number; area: number };
    birds: { count: number; area: number; height: number };
  };
  spline: { sections: number; points: Vec3[]; look: Vec3[] };
  cubes: { label: string; url: string; position: Vec3; color: string }[];
}

/** Anything with a per-frame update hook driven by the render loop. */
export interface Updatable {
  update(elapsed: number, delta: number): void;
}
