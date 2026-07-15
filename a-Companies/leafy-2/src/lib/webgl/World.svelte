<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useThrelte } from '@threlte/core';
  import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
  import type { SceneConfig, Vec3 } from './types';
  import cfgJson from '$lib/data/scene.json';
  import spaceCfg from '$lib/data/space.json';
  import { base } from '$app/paths';

  import CameraRig from './CameraRig.svelte';
  import Stars from './Stars.svelte';
  import Fireflies from './Fireflies.svelte';
  import SolarSystem from './space/SolarSystem.svelte';
  import Comets from './space/Comets.svelte';
  import Moons from './Moons.svelte';
  import Ground from './Ground.svelte';
  import Water from './Water.svelte';
  import Trees from './Trees.svelte';
  import Grass from './Grass.svelte';
  import Plants from './Plants.svelte';
  import Ghetto from './Ghetto.svelte';
  import Fauna from './Fauna.svelte';
  import Cubes from './Cubes.svelte';
  import StatsSampler from './StatsSampler.svelte';

  // Bindable page-owned tooltip DOM element (drives "DRAG TO SPIN / CLICK TO OPEN").
  let { scroll = 0, tooltip = undefined }: { scroll?: number; tooltip?: HTMLElement } = $props();

  const cfg = cfgJson as SceneConfig;
  const v = (p: Vec3) => new THREE.Vector3(p[0], p[1], p[2]);
  const { renderer, scene } = useThrelte();

  onMount(() => {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = cfg.render.exposure;
    // Full milky-way sky (equirect); fog still hazes the near forest.
    const sky = new THREE.TextureLoader().load(`${base}/${spaceCfg.background}`);
    sky.mapping = THREE.EquirectangularReflectionMapping;
    sky.colorSpace = THREE.SRGBColorSpace;
    scene.background = sky;
    scene.fog = new THREE.Fog(new THREE.Color(cfg.night.fog.color), cfg.night.fog.near, cfg.night.fog.far);

    // Neutral procedural IBL so PBR/metallic materials (GLB animals) aren't pure black.
    // Dim intensity keeps the night mood; background stays the dark colour above.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = cfg.night.env.intensity;
    pmrem.dispose();
    return () => { env.dispose(); scene.environment = null; };
  });
</script>

<CameraRig {scroll} {cfg} />

<!-- Fill so nothing is pure black; the two moons (in <Moons/>) are the key/shading lights. -->
<T.AmbientLight color={cfg.night.ambient.color} intensity={cfg.night.ambient.intensity} />
<T.HemisphereLight args={[cfg.night.hemisphere.sky, cfg.night.hemisphere.ground, cfg.night.hemisphere.intensity]} />

<Stars {cfg} />
<Fireflies {cfg} />
<Moons {cfg} />
<SolarSystem />
<Comets />
<Ground {cfg} />
<Water {cfg} />
<Trees {cfg} />
<Grass {cfg} />
<Plants {cfg} />
<Ghetto {cfg} />
<Fauna {cfg} />
<Cubes {cfg} {tooltip} />
<StatsSampler />
