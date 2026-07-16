<script lang="ts">
  // Night-mood fireflies: additive glowing points that drift + bob; UnrealBloom
  // (or plain additive) makes them scatter light. Cheap — one Points cloud.
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const f = cfg.world.fireflies;

  const base = new Float32Array(f.count * 3);
  const pos = new Float32Array(f.count * 3);
  const phase = new Float32Array(f.count);
  const speed = new Float32Array(f.count);
  for (let i = 0; i < f.count; i++) {
    const x = (Math.random() - 0.5) * f.area;
    const y = 4 + Math.random() * f.height;
    const z = (Math.random() - 0.5) * f.area;
    base[i * 3] = x; base[i * 3 + 1] = y; base[i * 3 + 2] = z;
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    phase[i] = Math.random() * Math.PI * 2;
    speed[i] = 0.4 + Math.random() * 0.8;
  }

  const geo = new THREE.BufferGeometry();
  const attr = new THREE.BufferAttribute(pos, 3);
  attr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', attr);

  const mat = new THREE.PointsMaterial({
    color: new THREE.Color(f.color),
    size: f.size,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    fog: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geo, mat);

  useTask((delta) => {
    const t = (mat.userData.t = (mat.userData.t ?? 0) + delta);
    for (let i = 0; i < f.count; i++) {
      const p = phase[i], s = speed[i];
      pos[i * 3] = base[i * 3] + Math.sin(t * 0.3 * s + p) * 6;
      pos[i * 3 + 1] = base[i * 3 + 1] + Math.sin(t * s + p) * 3;
      pos[i * 3 + 2] = base[i * 3 + 2] + Math.cos(t * 0.3 * s + p) * 6;
    }
    attr.needsUpdate = true;
    mat.opacity = 0.6 + Math.sin(t * 2) * 0.3; // collective twinkle
  });
</script>

<T is={points} />
