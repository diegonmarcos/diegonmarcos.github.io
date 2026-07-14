<script lang="ts">
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
</script>

{#each cfg.world.moons as m}
  <T.Mesh position={m.position}>
    <T.SphereGeometry args={[m.radius, 48, 48]} />
    <T.MeshStandardMaterial
      color={m.color}
      emissive={m.color}
      emissiveIntensity={0.15}
      roughness={1}
      metalness={0}
    />
  </T.Mesh>
{/each}
