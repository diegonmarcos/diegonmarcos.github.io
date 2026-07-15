<script lang="ts">
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import { Water } from 'three/addons/objects/Water.js';
  import { base } from '$app/paths';
  import type { SceneConfig, Vec3 } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const { size, center } = cfg.world.water;
  const c = center as Vec3;

  const normals = new THREE.TextureLoader().load(`${base}/${cfg.assets.waterNormals}`);
  normals.wrapS = normals.wrapT = THREE.RepeatWrapping;

  const moon = cfg.world.moons[0]; // reflect the primary moon on the water
  const water = new Water(new THREE.PlaneGeometry(size, size), {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: normals,
    sunDirection: new THREE.Vector3(moon.position[0], moon.position[1], moon.position[2]).normalize(),
    sunColor: new THREE.Color(moon.color).getHex(),
    waterColor: 0x0a1626,
    distortionScale: 2.0,
    fog: false
  });
  water.rotation.x = -Math.PI / 2;
  water.position.set(c[0], c[1], c[2]);

  const mat = water.material as THREE.ShaderMaterial;
  useTask((delta) => { mat.uniforms['time'].value += delta; });
</script>

<T is={water} />
