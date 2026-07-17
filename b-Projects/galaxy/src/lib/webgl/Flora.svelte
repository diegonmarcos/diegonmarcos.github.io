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
    // Ensure parent transforms (RootNode up-axis rotation etc.) are resolved so
    // getWorldQuaternion below returns the true authored orientation.
    gltf.scene.updateMatrixWorld(true);
    const root: THREE.Object3D = gltf.scene.children[0] ?? gltf.scene;
    const raw: THREE.Object3D[] =
      spec.single || root.children.length < 2
        ? [gltf.scene]
        : spec.childIndex !== undefined
          ? [root.children[spec.childIndex] ?? root.children[0]]
          : root.children.slice();

    return raw.map((o) => {
      // Capture the variant's WORLD orientation before re-parenting. Quaternius
      // packs bake an up-axis rotation on the RootNode; re-parenting the child to
      // a fresh group at identity would drop it and tip the tree on its side.
      const worldQuat = new THREE.Quaternion();
      o.getWorldQuaternion(worldQuat);
      const unit = o.clone(true);
      // Keep the variant's authored transform (Quaternius bakes each variant's real
      // scale into its node; discarding it collapses trees to sub-unit geometry).
      // Reset row-layout position, but PRESERVE world orientation (upright).
      unit.position.set(0, 0, 0);
      unit.quaternion.copy(worldQuat);
      unit.updateMatrixWorld(true);
      // Measure the variant's REAL rendered bbox (this child only, post-transform).
      const box = new THREE.Box3().setFromObject(unit);
      const ctr = new THREE.Vector3();
      box.getCenter(ctr);
      const size = new THREE.Vector3();
      box.getSize(size);
      // Normalise to exactly 1 world-unit tall so scene.json min/maxScale read as
      // literal world-unit heights, independent of each GLB's baked scale.
      const norm = size.y > 1e-6 ? 1 / size.y : 1;
      // Centre on X/Z about the (normalised) origin and drop the bottom to y=0.
      unit.position.set(-ctr.x * norm, -box.min.y * norm, -ctr.z * norm);
      unit.scale.multiplyScalar(norm);
      // wrap so a later group-level scale (= target height) keeps bottom pinned at y=0.
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
