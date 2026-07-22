<script lang="ts">
  // A GLB moon: loaded from the CDN, scaled to the moon's radius, and made
  // self-emissive (the moons ARE the scene's lights, so the model must glow).
  import * as THREE from 'three';
  import { T, useThrelte } from '@threlte/core';
  import { onMount } from 'svelte';
  import { gltfLoader } from './assets/loaders';
  import { cdnUrl } from './assets/catalog';

  let { mesh, radius, color, emissive, position }: {
    mesh: string; radius: number; color: string; emissive: number; position: number[];
  } = $props();

  const group = new THREE.Group();
  group.position.set(position[0], position[1], position[2]);
  const { renderer } = useThrelte();

  onMount(() => {
    gltfLoader(renderer).load(cdnUrl(mesh), (g) => {
      const o = g.scene;
      const box = new THREE.Box3().setFromObject(o);
      const s = new THREE.Vector3(); box.getSize(s);
      const maxDim = Math.max(s.x, s.y, s.z) || 1;
      o.scale.setScalar((radius * 2) / maxDim); // fit bounding box to the moon diameter
      const c = new THREE.Color(color);
      o.traverse((n: any) => {
        if (!n.isMesh || !n.material) return;
        for (const mat of Array.isArray(n.material) ? n.material : [n.material]) {
          if ('emissive' in mat) { mat.emissive = c; mat.emissiveIntensity = emissive * 0.7; }
          mat.fog = false;
        }
      });
      group.add(o);
    });
  });
</script>

<T is={group} />
