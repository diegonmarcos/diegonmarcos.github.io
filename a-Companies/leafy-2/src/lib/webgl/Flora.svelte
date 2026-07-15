<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useThrelte } from '@threlte/core';
  import { gltfLoader } from './assets/loaders';
  import { meshUrl } from './assets/catalog';
  import type { SceneConfig, FloraSpec } from './types';

  // Data-driven Quaternius nature GLBs replacing the old procedural Trees/Grass/Plants.
  // Most packs bundle several variants in ONE glb, laid out in a row inside RootNode;
  // we split those children, re-centre each on its own origin, and scatter clones.
  // big-tree.glb is a single centred object (flagged `single` in scene.json) — cloned whole.
  let { cfg }: { cfg: SceneConfig } = $props();

  const group = new THREE.Group();
  const { renderer } = useThrelte();
  const loader = gltfLoader(renderer);

  // Return the list of pickable "unit" objects for a loaded GLB, each re-centred on
  // X/Z and grounded (bbox bottom at y=0) so scale+position place it cleanly.
  function unitsFor(gltf: any, spec: FloraSpec): THREE.Object3D[] {
    const root: THREE.Object3D = gltf.scene.children[0] ?? gltf.scene;
    const raw: THREE.Object3D[] =
      spec.single || root.children.length < 2
        ? [gltf.scene]
        : spec.childIndex !== undefined
          ? [root.children[spec.childIndex] ?? root.children[0]]
          : root.children.slice();

    return raw.map((o) => {
      const unit = o.clone(true);
      unit.position.set(0, 0, 0);
      unit.rotation.set(0, 0, 0);
      unit.scale.set(1, 1, 1);
      unit.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(unit);
      const ctr = new THREE.Vector3();
      box.getCenter(ctr);
      // shift so centred on X/Z and resting on the ground plane
      unit.position.set(-ctr.x, -box.min.y, -ctr.z);
      const wrap = new THREE.Group();
      wrap.add(unit);
      return wrap;
    });
  }

  function scatter(gltf: any, spec: FloraSpec) {
    const units = unitsFor(gltf, spec);
    if (!units.length) return;
    for (let i = 0; i < spec.count; i++) {
      let x = 0, z = 0;
      do {
        x = (Math.random() - 0.5) * spec.area;
        z = (Math.random() - 0.5) * spec.area;
      } while (Math.hypot(x, z) < spec.clear); // keep the path start clear
      const src = units[i % units.length];
      const obj = src.clone(true);
      obj.position.set(x, 0, z);
      if (spec.yaw) obj.rotation.y = Math.random() * Math.PI * 2;
      obj.scale.setScalar(spec.minScale + Math.random() * (spec.maxScale - spec.minScale));
      group.add(obj);
    }
  }

  onMount(() => {
    for (const spec of cfg.world.flora) {
      loader.load(meshUrl(spec.asset), (g) => scatter(g, spec), undefined,
        (e) => console.warn('flora load failed', spec.asset, e));
    }
  });
</script>

<T is={group} />
