<script lang="ts">
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();

  let refs = $state<THREE.Mesh[]>([]);
  let hovered = $state(-1);

  const open = (url: string) => {
    if (url.startsWith('mailto:')) window.location.href = url;
    else window.open(url, '_blank', 'noopener');
  };
  const cursor = (on: boolean) => { document.body.style.cursor = on ? 'pointer' : 'default'; };

  const spin = cfg.cubes.map(() => 0.3 + Math.random() * 0.4);
  useTask((delta) => {
    refs.forEach((m, i) => {
      if (!m) return;
      m.rotation.y += spin[i] * delta;
      m.rotation.x += spin[i] * 0.5 * delta;
    });
  });
</script>

{#each cfg.cubes as c, i}
  <T.Mesh
    bind:ref={refs[i]}
    position={c.position}
    onclick={() => open(c.url)}
    onpointerenter={() => { hovered = i; cursor(true); }}
    onpointerleave={() => { hovered = -1; cursor(false); }}
  >
    <T.BoxGeometry args={[16, 16, 16]} />
    <T.MeshStandardMaterial
      color={c.color}
      emissive={c.color}
      emissiveIntensity={hovered === i ? 0.9 : 0.25}
      roughness={0.35}
      metalness={0.1}
    />
  </T.Mesh>
{/each}
