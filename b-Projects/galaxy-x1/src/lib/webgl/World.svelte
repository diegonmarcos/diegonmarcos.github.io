<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useThrelte } from '@threlte/core';
  import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
  import type { SceneConfig, Vec3 } from './types';
  import cfgJson from '$lib/data/scene.json';
  import spaceCfg from '$lib/data/space.json';
  import { cdnUrl } from './assets/catalog';

  import CameraRig from './CameraRig.svelte';
  import FreeRig from './free/FreeRig.svelte';
  import Stars from './Stars.svelte';
  import Fireflies from './Fireflies.svelte';
  import SolarSystem from './space/SolarSystem.svelte';
  import Comets from './space/Comets.svelte';
  import MilkyWay from './space/MilkyWay.svelte';
  import Moons from './Moons.svelte';
  import Ground from './Ground.svelte';
  import Water from './Water.svelte';
  import Flora from './Flora.svelte';
  import Ghetto from './Ghetto.svelte';
  import City from './City.svelte';
  import House from './House.svelte';
  import PerfTune from '$engine/PerfTune.svelte';
  import Zones from './Zones.svelte';
  import { layers } from '$engine/layers.svelte';
  import Fauna from './Fauna.svelte';
  import Cubes from './Cubes.svelte';
  import StatsSampler from '$engine/StatsSampler.svelte';

  // Bindable page-owned tooltip DOM element (drives "DRAG TO SPIN / CLICK TO OPEN").
  let { scroll = 0, tooltip = undefined, mode = 'scenic' }: { scroll?: number; tooltip?: HTMLElement; mode?: 'scenic' | 'free' } = $props();

  const cfg = cfgJson as SceneConfig;
  const v = (p: Vec3) => new THREE.Vector3(p[0], p[1], p[2]);
  const { renderer, scene } = useThrelte();

  onMount(() => {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = cfg.render.exposure;
    // Full milky-way sky (equirect); fog still hazes the near forest.
    const sky = new THREE.TextureLoader().load(cdnUrl(spaceCfg.background));
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

{#if mode === 'free'}
  <FreeRig {cfg} />
{:else}
  <CameraRig {scroll} {cfg} />
{/if}

<!-- Fill so nothing is pure black; the two moons (in <Moons/>) are the key/shading lights. -->
<T.AmbientLight color={cfg.night.ambient.color} intensity={cfg.night.ambient.intensity} />
<T.HemisphereLight args={[cfg.night.hemisphere.sky, cfg.night.hemisphere.ground, cfg.night.hemisphere.intensity]} />

<PerfTune />
{#if layers.stars}<Stars {cfg} />{/if}
{#if layers.fireflies}<Fireflies {cfg} />{/if}
{#if layers.moons}<Moons {cfg} />{/if}
{#if layers.solar}<SolarSystem />{/if}
{#if layers.comets}<Comets />{/if}
{#if layers.milkyway}<MilkyWay />{/if}
<Ground {cfg} />
<Zones {cfg} />
{#if layers.water}<Water {cfg} />{/if}
{#if layers.flora}<Flora {cfg} />{/if}
{#if layers.ghetto}<Ghetto {cfg} />{/if}
{#if layers.city}<City {cfg} />{/if}
{#if layers.house}<House {cfg} />{/if}
{#if layers.fauna}<Fauna {cfg} />{/if}
<Cubes {cfg} {tooltip} />
<StatsSampler />
