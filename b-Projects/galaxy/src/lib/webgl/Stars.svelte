<script lang="ts">
  import * as THREE from 'three';
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const c = cfg.world.stars;

  const pos = new Float32Array(c.count * 3);
  for (let i = 0; i < c.count; i++) {
    const u = Math.random(), w = Math.random();
    const theta = 2 * Math.PI * u, phi = Math.acos(2 * w - 1);
    const r = c.radius * (0.9 + Math.random() * 0.1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = Math.abs(r * Math.cos(phi)); // upper hemisphere
    pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: 0xffffff, size: 2.4, sizeAttenuation: false, transparent: true, opacity: 0.9, fog: false })
  );
</script>

<T is={stars} />
