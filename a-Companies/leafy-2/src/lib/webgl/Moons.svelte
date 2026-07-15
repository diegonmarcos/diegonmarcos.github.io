<script lang="ts">
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  // Each moon is the scene's light: an emissive disc + a directional light of its
  // own colour/intensity, aimed at the origin. Data-driven exposure per moon.
</script>

{#each cfg.world.moons as m}
  <T.Mesh position={m.position}>
    <T.SphereGeometry args={[m.radius, 64, 64]} />
    <T.MeshStandardMaterial
      color={m.color}
      emissive={m.color}
      emissiveIntensity={m.emissive}
      roughness={0.9}
      metalness={0}
      fog={false}
    />
  </T.Mesh>

  <T.DirectionalLight color={m.color} intensity={m.light} position={m.position} />
{/each}
