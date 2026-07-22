<script lang="ts">
  import * as THREE from 'three';
  import { T } from '@threlte/core';
  import { cdnUrl } from './assets/catalog';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const g = cfg.assets.ground;

  const loader = new THREE.TextureLoader();
  const url = (p: string) => cdnUrl(p);

  const tune = (t: THREE.Texture, srgb = false) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(g.repeat, g.repeat);
    t.anisotropy = 8;
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    return t;
  };

  const map = tune(loader.load(url(g.map)), true);
  const normalMap = tune(loader.load(url(g.normal)));
  const roughnessMap = tune(loader.load(url(g.rough)));
</script>

<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
  <T.PlaneGeometry args={[cfg.world.ground.size, cfg.world.ground.size]} />
  <T.MeshStandardMaterial {map} {normalMap} {roughnessMap} roughness={1} metalness={0} />
</T.Mesh>
