<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useThrelte } from '@threlte/core';
  import type { SceneConfig, Vec3 } from './types';
  import cfgJson from '$lib/data/scene.json';

  import CameraRig from './CameraRig.svelte';
  import Stars from './Stars.svelte';
  import Moons from './Moons.svelte';
  import Ground from './Ground.svelte';
  import Water from './Water.svelte';
  import Trees from './Trees.svelte';
  import Fauna from './Fauna.svelte';
  import Cubes from './Cubes.svelte';

  // Bindable page-owned tooltip DOM element (drives "DRAG TO SPIN / CLICK TO OPEN").
  let { scroll = 0, tooltip = undefined }: { scroll?: number; tooltip?: HTMLElement } = $props();

  const cfg = cfgJson as SceneConfig;
  const v = (p: Vec3) => new THREE.Vector3(p[0], p[1], p[2]);
  const { renderer, scene } = useThrelte();

  onMount(() => {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = cfg.render.exposure;
    scene.background = new THREE.Color(cfg.night.background); // night sky, not an HDRI
  });
</script>

<CameraRig {scroll} {cfg} />

<!-- Faint cool hemisphere fill only; the two moons (in <Moons/>) are the real lights. -->
<T.HemisphereLight args={[cfg.night.hemisphere.sky, cfg.night.hemisphere.ground, cfg.night.hemisphere.intensity]} />

<Stars {cfg} />
<Moons {cfg} />
<Ground {cfg} />
<Water {cfg} />
<Trees {cfg} />
<Fauna {cfg} />
<Cubes {cfg} {tooltip} />
