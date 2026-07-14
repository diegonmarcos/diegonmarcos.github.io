<script lang="ts">
  import { T } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
</script>

{#each cfg.world.moons as m}
  <T.Mesh position={m.position}>
    <T.SphereGeometry args={[m.radius, 64, 64]} />
    <!-- Strong emissive so the huge moons read as light sources; UnrealBloom haloes them. -->
    <T.MeshStandardMaterial
      color={m.color}
      emissive={m.color}
      emissiveIntensity={1.3}
      roughness={0.9}
      metalness={0}
    />
  </T.Mesh>
{/each}
