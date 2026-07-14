<script lang="ts">
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();

  interface Critter { mesh: THREE.Object3D; phase: number; base: THREE.Vector3; speed: number; }
  const group = new THREE.Group();

  // Rabbits — |sin| bounce, gentle wander.
  const rGeo = new THREE.CapsuleGeometry(1.2, 2, 4, 8);
  const rMat = new THREE.MeshLambertMaterial({ color: 0xd8cfc0 });
  const rabbits: Critter[] = [];
  for (let i = 0; i < cfg.world.rabbits.count; i++) {
    const mesh = new THREE.Mesh(rGeo, rMat);
    const base = new THREE.Vector3((Math.random() - 0.5) * cfg.world.rabbits.area, 2, (Math.random() - 0.5) * cfg.world.rabbits.area);
    mesh.position.copy(base);
    group.add(mesh);
    rabbits.push({ mesh, phase: Math.random() * Math.PI * 2, base, speed: 0.8 + Math.random() });
  }

  // Birds — two triangles flapping on a shared hinge, drifting in circles.
  const wing = new THREE.BufferGeometry();
  wing.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
    0, 0, 0, 6, 0, -2, 0, 0, -4,
    0, 0, 0, -6, 0, -2, 0, 0, -4
  ]), 3));
  wing.computeVertexNormals();
  const bMat = new THREE.MeshLambertMaterial({ color: 0x2b2b33, side: THREE.DoubleSide });
  const birds: Critter[] = [];
  for (let i = 0; i < cfg.world.birds.count; i++) {
    const mesh = new THREE.Mesh(wing, bMat);
    const base = new THREE.Vector3(
      (Math.random() - 0.5) * cfg.world.birds.area,
      cfg.world.birds.height + (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * cfg.world.birds.area
    );
    mesh.position.copy(base);
    group.add(mesh);
    birds.push({ mesh, phase: Math.random() * Math.PI * 2, base, speed: 0.5 + Math.random() });
  }

  let t = 0;
  useTask((delta) => {
    t += delta;
    for (const c of rabbits) {
      c.mesh.position.y = c.base.y + Math.abs(Math.sin(t * c.speed * 2 + c.phase)) * 4;
      c.mesh.position.x = c.base.x + Math.sin(t * 0.3 + c.phase) * 10;
      c.mesh.position.z = c.base.z + Math.cos(t * 0.3 + c.phase) * 10;
      c.mesh.rotation.y = Math.atan2(Math.cos(t * 0.3 + c.phase), -Math.sin(t * 0.3 + c.phase));
    }
    for (const b of birds) {
      const a = t * b.speed;
      b.mesh.position.x = b.base.x + Math.sin(a * 0.4 + b.phase) * 120;
      b.mesh.position.z = b.base.z + Math.cos(a * 0.4 + b.phase) * 120;
      b.mesh.position.y = b.base.y + Math.sin(a + b.phase) * 12;
      b.mesh.rotation.z = Math.sin(a * 6 + b.phase) * 0.5; // flap
      b.mesh.rotation.y = -a * 0.4 - b.phase + Math.PI / 2;
    }
  });
</script>

<T is={group} />
