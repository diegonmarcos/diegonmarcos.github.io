<script lang="ts">
  // A small house: 5 rooms in a row, from scene.json world.house. Two are
  // "furnished" -- complete pre-built interior packs (loft + japanese loft),
  // loaded/autofit/autogrounded the same way City.svelte handles GLBs. Three
  // are "empty" -- no downloaded asset exists for a bare room, so those are
  // a plain hollow box (BackSide material so the camera sees the INSIDE
  // faces when it enters, not a solid opaque cube) rather than faking an
  // asset that isn't there.
  import * as THREE from 'three';
  import { T, useThrelte } from '@threlte/core';
  import { onMount } from 'svelte';
  import type { SceneConfig } from './types';
  import { gltfLoader } from './assets/loaders';
  import { cdnUrl } from './assets/catalog';

  let { cfg }: { cfg: SceneConfig } = $props();
  const H = (cfg as any).world.house;
  const center = H?.center ?? [0, 0, 0];
  const group = new THREE.Group();
  const { renderer } = useThrelte();

  function emptyRoom(size: [number, number, number], p: [number, number, number]) {
    const [w, h, d] = size;
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: '#8a7c68', roughness: 0.95, side: THREE.BackSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(center[0] + p[0], center[1] + h / 2, center[2] + p[2]);
    group.add(mesh);
  }

  onMount(() => {
    if (!H?.rooms) return;
    const loader = gltfLoader(renderer);
    for (const room of H.rooms) {
      if (room.type === 'empty') {
        emptyRoom(room.size, room.p);
        continue;
      }
      loader.load(
        cdnUrl(H.dir + room.m),
        (g) => {
          const o = g.scene;
          const size = new THREE.Vector3();
          new THREE.Box3().setFromObject(o).getSize(size);
          const maxXZ = Math.max(size.x, size.z) || 1;
          o.scale.setScalar(room.s / maxXZ);               // fit footprint to target room size
          const minY = new THREE.Box3().setFromObject(o).min.y; // already scale-adjusted (Box3 reads the object's current, post-scale transform)
          o.position.set(center[0] + room.p[0], center[1] + (room.p[1] ?? 0) - minY, center[2] + room.p[2]);
          o.rotation.y = room.ry ?? 0;
          group.add(o);
        },
        undefined,
        (e) => console.warn('house room load failed', room.m, e)
      );
    }
  });
</script>

<T is={group} />
