<script lang="ts">
  import * as THREE from 'three';
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const c = cfg.world.trees;

  const trunks = new THREE.InstancedMesh(
    new THREE.CylinderGeometry(1.2, 1.8, 12, 6),
    new THREE.MeshLambertMaterial({ color: 0x5b3a21 }),
    c.count
  );
  const leaves = new THREE.InstancedMesh(
    new THREE.ConeGeometry(9, 22, 7),
    new THREE.MeshLambertMaterial({ color: 0x2f7d32 }),
    c.count
  );

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const s = new THREE.Vector3();

  for (let i = 0; i < c.count; i++) {
    let x = 0, z = 0;
    do {
      x = (Math.random() - 0.5) * c.area;
      z = (Math.random() - 0.5) * c.area;
    } while (Math.hypot(x, z) < c.clear); // keep a clearing near the path start
    const scale = 0.7 + Math.random() * 0.9;
    q.setFromAxisAngle(up, Math.random() * Math.PI);
    s.setScalar(scale);
    m.compose(new THREE.Vector3(x, 6 * scale, z), q, s);
    trunks.setMatrixAt(i, m);
    m.compose(new THREE.Vector3(x, 22 * scale, z), q, s);
    leaves.setMatrixAt(i, m);
  }
  trunks.instanceMatrix.needsUpdate = true;
  leaves.instanceMatrix.needsUpdate = true;
</script>

<T is={trunks} />
<T is={leaves} />
