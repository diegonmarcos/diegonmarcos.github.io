<script lang="ts">
  // Per-zone floors: a round patch of the right material for each world zone —
  // Wild Forest = grass green, Ghetto = stone grey, City Center = road dark.
  // Round (CircleGeometry) so the floors read organic and stay square-free.
  import * as THREE from 'three';
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const zones = ((cfg as any).world.zones ?? []) as {
    name: string; center: number[]; r: number; color: string; rough?: number; metal?: number;
  }[];

  const group = new THREE.Group();
  const disc = new THREE.CircleGeometry(1, 64);
  for (const z of zones) {
    const m = new THREE.Mesh(
      disc,
      new THREE.MeshStandardMaterial({ color: z.color, roughness: z.rough ?? 1, metalness: z.metal ?? 0, fog: true })
    );
    m.rotation.x = -Math.PI / 2;
    m.scale.setScalar(z.r);
    m.position.set(z.center[0], z.center[1], z.center[2]);
    m.receiveShadow = true;
    group.add(m);
  }
</script>

<T is={group} />
