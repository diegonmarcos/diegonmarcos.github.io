<script lang="ts">
  // Plant kingdom: data-driven flowers / mushrooms / ferns. Each type is one
  // InstancedMesh of a merged (stem+head) geometry with baked vertex colours,
  // scattered over the ground (skips lake + path clearing).
  import * as THREE from 'three';
  import { T } from '@threlte/core';
  import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const P = cfg.world.plants;
  const lake = cfg.world.water;
  const lakeR = lake.size * 0.55;

  const paint = (geo: THREE.BufferGeometry, hex: string) => {
    const n = geo.attributes.position.count;
    const col = new THREE.Color(hex);
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; }
    geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    return geo;
  };

  function typeGeometry(t: any): THREE.BufferGeometry {
    const h = t.height;
    if (t.kind === 'flower') {
      const stem = paint(new THREE.CylinderGeometry(0.05, 0.09, h, 5).translate(0, h / 2, 0), t.stem);
      const head = paint(new THREE.SphereGeometry(0.55, 8, 6).translate(0, h, 0), t.head);
      return mergeGeometries([stem, head])!;
    }
    if (t.kind === 'mushroom') {
      const stem = paint(new THREE.CylinderGeometry(0.14, 0.2, h, 6).translate(0, h / 2, 0), t.stem);
      const capG = new THREE.SphereGeometry(0.7, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2);
      capG.scale(1, 0.6, 1); capG.translate(0, h, 0);
      return mergeGeometries([stem, paint(capG, t.head)])!;
    }
    // fern: a fan of thin cones
    const parts: THREE.BufferGeometry[] = [];
    for (let k = 0; k < 5; k++) {
      const frond = new THREE.ConeGeometry(0.13, h, 4).translate(0, h / 2, 0);
      frond.rotateZ((k / 5 - 0.4) * 0.9);
      frond.rotateY(k * 1.25);
      parts.push(paint(frond, k % 2 ? t.head : t.stem));
    }
    return mergeGeometries(parts)!;
  }

  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0 });

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const s = new THREE.Vector3();

  for (const t of P.types) {
    const mesh = new THREE.InstancedMesh(typeGeometry(t), mat, t.count);
    let n = 0;
    for (let i = 0; i < t.count * 3 && n < t.count; i++) {
      const x = (Math.random() - 0.5) * P.area;
      const z = (Math.random() - 0.5) * P.area - 30;
      if (Math.hypot(x, z) < P.clear) continue;
      if (Math.hypot(x - lake.center[0], z - lake.center[2]) < lakeR) continue;
      q.setFromAxisAngle(up, Math.random() * Math.PI * 2);
      s.setScalar(0.8 + Math.random() * 0.6);
      m.compose(new THREE.Vector3(x, 0, z), q, s);
      mesh.setMatrixAt(n, m);
      n++;
    }
    mesh.count = n;
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
  }
</script>

<T is={group} />
