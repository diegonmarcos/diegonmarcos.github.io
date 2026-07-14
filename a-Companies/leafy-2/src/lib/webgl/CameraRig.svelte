<script lang="ts">
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig, Vec3 } from './types';

  let { scroll = 0, cfg }: { scroll?: number; cfg: SceneConfig } = $props();

  const v = (p: Vec3) => new THREE.Vector3(p[0], p[1], p[2]);
  const path = new THREE.CatmullRomCurve3(cfg.spline.points.map(v));
  const look = new THREE.CatmullRomCurve3(cfg.spline.look.map(v));
  const lookAt = new THREE.Vector3();

  let camera = $state<THREE.PerspectiveCamera>();

  // Spring smoothing lives in the page; here we just sample the curve at scroll%.
  useTask(() => {
    if (!camera) return;
    const t = THREE.MathUtils.clamp(scroll, 0, 1);
    path.getPointAt(t, camera.position);
    look.getPointAt(t, lookAt);
    camera.lookAt(lookAt);
  });
</script>

<T.PerspectiveCamera
  makeDefault
  bind:ref={camera}
  fov={cfg.camera.fov}
  near={cfg.camera.near}
  far={cfg.camera.far}
/>
