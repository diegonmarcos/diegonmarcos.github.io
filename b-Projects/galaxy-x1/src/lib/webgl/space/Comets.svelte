<script lang="ts">
  // Comets passing by: a bright head + fading tail, streaking in a straight line
  // high across the sky, respawning on the far side. Additive glow, fog-free.
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import space from '$lib/data/space.json';

  const C = (space as any).comets;
  const center = new THREE.Vector3((space as any).system.center[0], (space as any).system.center[1], (space as any).system.center[2]);
  const color = new THREE.Color(C.color);

  const group = new THREE.Group();
  interface Comet { obj: THREE.Group; vel: THREE.Vector3; }
  const comets: Comet[] = [];

  const headGeo = new THREE.SphereGeometry(1.6, 12, 12);
  const headMat = new THREE.MeshBasicMaterial({ color, fog: false });
  const tailGeo = new THREE.ConeGeometry(1.4, C.trail, 12, 1, true);
  const tailMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, fog: false, depthWrite: false, blending: THREE.AdditiveBlending });

  const rand = (i: number, k: number) => (Math.sin(i * 12.9898 + k * 78.233) * 43758.5453) % 1; // deterministic-ish per index

  function spawn(c: Comet, i: number) {
    // start on a random point of a shell around the system, aim roughly through it
    const a = rand(i, comets.length + 1) * Math.PI * 2;
    const y = center.y + (rand(i, 2) - 0.5) * 300;
    c.obj.position.set(center.x + Math.cos(a) * C.field, y, center.z + Math.sin(a) * C.field);
    const target = center.clone().add(new THREE.Vector3((rand(i, 3) - 0.5) * 200, (rand(i, 4) - 0.5) * 200, (rand(i, 5) - 0.5) * 200));
    c.vel.copy(target.sub(c.obj.position).normalize()).multiplyScalar(C.speed);
    c.obj.lookAt(c.obj.position.clone().add(c.vel)); // tail points back
  }

  for (let i = 0; i < C.count; i++) {
    const obj = new THREE.Group();
    const head = new THREE.Mesh(headGeo, headMat);
    const tail = new THREE.Mesh(tailGeo, tailMat);
    tail.position.z = -C.trail / 2; // extend behind the head
    tail.rotation.x = Math.PI / 2;
    obj.add(head, tail);
    group.add(obj);
    const c = { obj, vel: new THREE.Vector3() };
    spawn(c, i);
    comets.push(c);
  }

  let tick = 0;
  useTask((delta) => {
    tick++;
    comets.forEach((c, i) => {
      c.obj.position.addScaledVector(c.vel, delta);
      if (c.obj.position.distanceTo(center) > C.field * 1.1) spawn(c, i + tick);
    });
  });
</script>

<T is={group} />
