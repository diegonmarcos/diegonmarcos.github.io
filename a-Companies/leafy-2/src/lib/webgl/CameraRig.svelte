<script lang="ts">
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig, Vec3 } from './types';

  let { scroll = 0, cfg }: { scroll?: number; cfg: SceneConfig } = $props();

  const v = (p: Vec3) => new THREE.Vector3(p[0], p[1], p[2]);
  const curve = new THREE.CatmullRomCurve3(cfg.spline.points.map(v));
  const lookAt = new THREE.Vector3();
  let camera = $state<THREE.PerspectiveCamera>();

  // Scroll% picks a point on the curvy 8-pt spline; camera looks slightly ahead.
  useTask(() => {
    if (!camera) return;
    const t = THREE.MathUtils.clamp(scroll, 0, 1);
    curve.getPointAt(t, camera.position);
    curve.getPointAt(Math.min(1, t + 0.02), lookAt);
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
