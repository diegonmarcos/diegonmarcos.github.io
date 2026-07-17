<script lang="ts">
  // City district beyond the ghetto: GLB buildings/road/vehicles/props placed from
  // scene.json world.city. Each model is fitted to a target footprint and dropped so
  // its base sits on the ground (y=0). Warm street lamps light it (night scene).
  import * as THREE from 'three';
  import { T, useThrelte } from '@threlte/core';
  import { onMount } from 'svelte';
  import type { SceneConfig } from './types';
  import { gltfLoader } from './assets/loaders';
  import { cdnUrl } from './assets/catalog';

  let { cfg }: { cfg: SceneConfig } = $props();
  const C = (cfg as any).world.city;
  const zShift = C?.zShift ?? 0; // push the whole district into its own zone, clear of the ghetto
  const group = new THREE.Group();
  const { renderer } = useThrelte();

  // warm street lamps
  if (C?.lamps) {
    const col = new THREE.Color(C.lampColor ?? '#ffd9a0');
    for (const p of C.lamps) {
      const l = new THREE.PointLight(col, C.lampIntensity ?? 1.5, C.lampRange ?? 240, 1.4);
      l.position.set(p[0], p[1], p[2] + zShift);
      group.add(l);
    }
  }

  onMount(() => {
    if (!C?.place) return;
    const loader = gltfLoader(renderer);
    for (const it of C.place) {
      loader.load(
        cdnUrl(C.dir + it.m),
        (g) => {
          const o = g.scene;
          const size = new THREE.Vector3();
          new THREE.Box3().setFromObject(o).getSize(size);
          const maxXZ = Math.max(size.x, size.z) || 1;
          o.scale.setScalar(it.s / maxXZ);               // fit footprint to target size
          const minY = new THREE.Box3().setFromObject(o).min.y;
          o.position.set(it.p[0], (it.p[1] ?? 0) - minY, it.p[2] + zShift); // base on ground
          o.rotation.y = it.ry ?? 0;
          group.add(o);
        },
        undefined,
        (e) => console.warn('city model load failed', it.m, e)
      );
    }
  });
</script>

<T is={group} />
