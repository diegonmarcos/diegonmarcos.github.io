<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useTask } from '@threlte/core';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js';
  import { base } from '$app/paths';
  import type { SceneConfig, FaunaSpecies } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();

  const group = new THREE.Group();
  const mixers: THREE.AnimationMixer[] = [];
  interface Critter { obj: THREE.Object3D; type: 'ground' | 'air'; phase: number; base: THREE.Vector3; speed: number; }
  const critters: Critter[] = [];
  const loader = new GLTFLoader();
  const url = (p: string) => `${base}/${p}`;

  function spawn(gltf: any, s: FaunaSpecies) {
    const clips: THREE.AnimationClip[] = gltf.animations ?? [];
    const clip = s.clip !== undefined ? clips[s.clip] : undefined;
    for (let i = 0; i < s.count; i++) {
      const obj = skeletonClone(gltf.scene) as THREE.Object3D; // skinned-safe
      obj.scale.setScalar(s.scale);
      const y = s.type === 'air' ? (s.height ?? 60) + (Math.random() - 0.5) * 40 : 0;
      const base = new THREE.Vector3((Math.random() - 0.5) * s.area, y, (Math.random() - 0.5) * s.area - 40);
      obj.position.copy(base);
      obj.rotation.y = Math.random() * Math.PI * 2;
      group.add(obj);
      if (clip) { const mx = new THREE.AnimationMixer(obj); mx.clipAction(clip).play(); mx.setTime(Math.random() * clip.duration); mixers.push(mx); }
      critters.push({ obj, type: s.type, phase: Math.random() * Math.PI * 2, base, speed: 0.6 + Math.random() });
    }
  }

  onMount(() => {
    for (const s of cfg.world.fauna) {
      loader.load(url(s.model), (g) => spawn(g, s), undefined, (e) => console.warn('fauna load failed', s.model, e));
    }
  });

  let t = 0;
  useTask((delta) => {
    t += delta;
    for (const m of mixers) m.update(delta);
    for (const c of critters) {
      if (c.type === 'ground') {
        c.obj.position.x = c.base.x + Math.sin(t * 0.3 + c.phase) * 6;
        c.obj.position.z = c.base.z + Math.cos(t * 0.3 + c.phase) * 6;
        c.obj.rotation.y = Math.atan2(Math.cos(t * 0.3 + c.phase), -Math.sin(t * 0.3 + c.phase));
      } else {
        const a = t * c.speed;
        c.obj.position.x = c.base.x + Math.sin(a * 0.35 + c.phase) * 90;
        c.obj.position.z = c.base.z + Math.cos(a * 0.35 + c.phase) * 90;
        c.obj.position.y = c.base.y + Math.sin(a + c.phase) * 10;
        c.obj.rotation.y = -a * 0.35 - c.phase + Math.PI / 2;
      }
    }
  });
</script>

<T is={group} />
