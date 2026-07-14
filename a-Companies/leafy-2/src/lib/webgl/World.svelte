<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useThrelte } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
  import { base } from '$app/paths';
  import type { SceneConfig } from './types';
  import cfgJson from '$lib/data/scene.json';

  import CameraRig from './CameraRig.svelte';
  import Stars from './Stars.svelte';
  import Moons from './Moons.svelte';
  import Ground from './Ground.svelte';
  import Water from './Water.svelte';
  import Trees from './Trees.svelte';
  import Fauna from './Fauna.svelte';
  import Cubes from './Cubes.svelte';

  let { scroll = 0 }: { scroll?: number } = $props();
  const cfg = cfgJson as SceneConfig;

  // Enable pointer events (onclick / onpointerenter) on meshes in this Canvas.
  interactivity();

  const { renderer, scene } = useThrelte();

  onMount(() => {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = cfg.render.exposure;

    // Real HDRI drives sky background + image-based lighting.
    const pmrem = new THREE.PMREMGenerator(renderer);
    let env: THREE.Texture | undefined;
    new RGBELoader().load(`${base}/${cfg.assets.sky}`, (hdr) => {
      env = pmrem.fromEquirectangular(hdr).texture;
      scene.environment = env;
      scene.background = env;
      hdr.dispose();
      pmrem.dispose();
    });
    return () => { env?.dispose(); scene.environment = null; scene.background = null; };
  });
</script>

<CameraRig {scroll} {cfg} />

<T.DirectionalLight intensity={2.4} position={[300, 600, 200]} />
<T.HemisphereLight args={[0xbfe3ff, 0x4a3b2a, 0.6]} />

<Stars {cfg} />
<Moons {cfg} />
<Ground {cfg} />
<Water {cfg} />
<Trees {cfg} />
<Fauna {cfg} />
<Cubes {cfg} />
