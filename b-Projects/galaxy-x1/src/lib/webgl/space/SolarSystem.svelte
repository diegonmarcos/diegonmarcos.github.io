<script lang="ts">
  // Data-driven solar system in the sky: sun + orbiting planets (real CC-BY
  // textures), moons orbiting their planet, rings, and our procedural Galaxy world.
  // Built imperatively, mounted via <T is={group}>, animated in useTask.
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import { cdnUrl } from '../assets/catalog';
  import space from '$lib/data/space.json';

  const S = space as any;
  const texLoader = new THREE.TextureLoader();
  const tex = (p: string) => {
    const t = texLoader.load(cdnUrl(p));
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };

  const group = new THREE.Group();
  group.position.set(S.system.center[0], S.system.center[1], S.system.center[2]);
  group.rotation.x = S.system.tilt;

  // Sun — unlit bright sphere + a point light that reaches only the planets.
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(S.sun.radius, 48, 48),
    new THREE.MeshBasicMaterial({ map: tex(S.sun.texture), fog: false })
  );
  group.add(sun);
  const sunLight = new THREE.PointLight(new THREE.Color(S.sun.color), S.sun.light, 1400, 0.6);
  group.add(sunLight);

  interface Orbiter { pivot: THREE.Object3D; mesh: THREE.Mesh; speed: number; spin: number; moons: { pivot: THREE.Object3D; speed: number }[]; }
  const orbiters: Orbiter[] = [];

  function planetMaterial(p: any): THREE.Material {
    if (p.procedural === 'galaxy')
      return new THREE.MeshStandardMaterial({ color: '#2f9e63', emissive: '#0c3a22', emissiveIntensity: 0.4, roughness: 0.7, metalness: 0.05, fog: false });
    return new THREE.MeshStandardMaterial({ map: tex(p.texture), roughness: 1, metalness: 0, fog: false });
  }

  for (const p of S.planets) {
    const pivot = new THREE.Group();
    pivot.rotation.y = p.phase ?? 0;
    group.add(pivot);

    const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.radius, 40, 40), planetMaterial(p));
    mesh.position.x = p.orbit;
    mesh.rotation.z = p.axis ?? 0;
    pivot.add(mesh);

    if (p.ring) {
      const ringMat = p.ring.texture
        ? new THREE.MeshBasicMaterial({ map: tex(p.ring.texture), transparent: true, side: THREE.DoubleSide, fog: false, depthWrite: false })
        : new THREE.MeshBasicMaterial({ color: p.ring.color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, fog: false, depthWrite: false });
      const ring = new THREE.Mesh(new THREE.RingGeometry(p.ring.inner, p.ring.outer, 96), ringMat);
      ring.rotation.x = -Math.PI / 2;
      mesh.add(ring);
    }

    const moons: { pivot: THREE.Object3D; speed: number }[] = [];
    for (const m of p.moons ?? []) {
      const mp = new THREE.Group();
      mp.rotation.y = m.phase ?? 0;
      const moonMat = m.texture
        ? new THREE.MeshStandardMaterial({ map: tex(m.texture), roughness: 1, fog: false })
        : new THREE.MeshStandardMaterial({ color: m.color, roughness: 1, fog: false });
      const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(m.radius, 24, 24), moonMat);
      moonMesh.position.x = m.orbit;
      mp.add(moonMesh);
      mesh.add(mp);
      moons.push({ pivot: mp, speed: m.speed });
    }

    orbiters.push({ pivot, mesh, speed: p.speed, spin: 0.15 + (p.radius > 20 ? 0.15 : 0), moons });
  }

  useTask((delta) => {
    group.rotation.y += S.system.spin * delta; // whole system drifts slowly
    for (const o of orbiters) {
      o.pivot.rotation.y += o.speed * delta;   // orbit around sun
      o.mesh.rotation.y += o.spin * delta;      // planet axial spin
      for (const mn of o.moons) mn.pivot.rotation.y += mn.speed * delta;
    }
  });
</script>

<T is={group} />
