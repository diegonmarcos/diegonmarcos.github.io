<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useTask } from '@threlte/core';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js';
  import { base } from '$app/paths';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();

  const group = new THREE.Group();
  const mixers: THREE.AnimationMixer[] = [];
  interface Critter { obj: THREE.Object3D; phase: number; base: THREE.Vector3; speed: number; }
  const rabbits: Critter[] = [];
  const birds: Critter[] = [];
  const loader = new GLTFLoader();
  const url = (p: string) => `${base}/${p}`;

  // Spawn `count` animated clones of a loaded gltf; `place` sets each instance's home position.
  function spawn(gltf: any, count: number, scale: number, clipSel: number | string,
                place: (i: number) => THREE.Vector3, bucket: Critter[]) {
    const clips: THREE.AnimationClip[] = gltf.animations ?? [];
    const clip = typeof clipSel === 'number' ? clips[clipSel]
      : clips.find((c) => c.name.toLowerCase().includes(String(clipSel).toLowerCase())) ?? clips[0];
    for (let i = 0; i < count; i++) {
      const obj = skeletonClone(gltf.scene) as THREE.Object3D; // SkeletonUtils: skinned-safe clone
      obj.scale.setScalar(scale);
      const home = place(i);
      obj.position.copy(home);
      obj.rotation.y = Math.random() * Math.PI * 2;
      group.add(obj);
      if (clip) { const mx = new THREE.AnimationMixer(obj); mx.clipAction(clip).play(); mx.setTime(Math.random() * clip.duration); mixers.push(mx); }
      bucket.push({ obj, phase: Math.random() * Math.PI * 2, base: home.clone(), speed: 0.6 + Math.random() });
    }
  }

  onMount(() => {
    const R = cfg.world.rabbits, B = cfg.world.birds;
    loader.load(url(cfg.assets.models.rabbit), (g) =>
      spawn(g, R.count, R.scale, R.clip, () =>
        new THREE.Vector3((Math.random() - 0.5) * R.area, 0, (Math.random() - 0.5) * R.area - 30), rabbits));
    loader.load(url(cfg.assets.models.bird), (g) =>
      spawn(g, B.count, B.scale, B.clip, () =>
        new THREE.Vector3((Math.random() - 0.5) * B.area, B.height + (Math.random() - 0.5) * 40, (Math.random() - 0.5) * B.area - 60), birds));
  });

  let t = 0;
  useTask((delta) => {
    t += delta;
    for (const m of mixers) m.update(delta);
    // rabbits: gentle graze wander
    for (const c of rabbits) {
      c.obj.position.x = c.base.x + Math.sin(t * 0.3 + c.phase) * 6;
      c.obj.position.z = c.base.z + Math.cos(t * 0.3 + c.phase) * 6;
      c.obj.rotation.y = Math.atan2(Math.cos(t * 0.3 + c.phase), -Math.sin(t * 0.3 + c.phase));
    }
    // birds: wide circling drift + bob
    for (const b of birds) {
      const a = t * b.speed;
      b.obj.position.x = b.base.x + Math.sin(a * 0.35 + b.phase) * 90;
      b.obj.position.z = b.base.z + Math.cos(a * 0.35 + b.phase) * 90;
      b.obj.position.y = b.base.y + Math.sin(a + b.phase) * 10;
      b.obj.rotation.y = -a * 0.35 - b.phase + Math.PI / 2;
    }
  });
</script>

<T is={group} />
