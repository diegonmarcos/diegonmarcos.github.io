<script lang="ts">
  // Instanced grass blades across the walkable ground (skips the lake footprint).
  // Static for perf — thousands of blades, per-instance colour + rotation.
  import * as THREE from 'three';
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const g = cfg.world.grass;
  const lake = cfg.world.water;
  const lakeR = lake.size * 0.55; // keep blades out of the water

  // one tapered blade, base at y=0
  const blade = new THREE.PlaneGeometry(0.4, g.height, 1, 2);
  blade.translate(0, g.height / 2, 0);

  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(blade, mat, g.count);

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const s = new THREE.Vector3();
  const cA = new THREE.Color(g.color);
  const cB = new THREE.Color(g.colorVar);
  const c = new THREE.Color();

  let n = 0;
  for (let i = 0; i < g.count && n < g.count; i++) {
    const x = (Math.random() - 0.5) * g.area;
    const z = (Math.random() - 0.5) * g.area - 30;
    if (Math.hypot(x - lake.center[0], z - lake.center[2]) < lakeR) continue; // skip lake
    q.setFromAxisAngle(up, Math.random() * Math.PI);
    s.set(0.7 + Math.random() * 0.8, 0.7 + Math.random() * 0.9, 1);
    m.compose(new THREE.Vector3(x, 0, z), q, s);
    mesh.setMatrixAt(n, m);
    c.copy(cA).lerp(cB, Math.random());
    mesh.setColorAt(n, c);
    n++;
  }
  mesh.count = n;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
</script>

<T is={mesh} />
