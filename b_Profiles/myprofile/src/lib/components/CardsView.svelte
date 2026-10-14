<script lang="ts">
  import type { DataItem } from '$lib/types';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';

  let { data }: { data: DataItem[] } = $props();

  // Map card IDs to page names
  const cardPages: Record<string, string> = {
    '1': 'audio',
    '2': 'bio',
    '3': 'geo',
    '4': 'visual',
    '5': 'memory',
    'system': 'syslog'
  };

  function getCardRoute(id: string): string {
    const page = cardPages[id];
    if (!page) return `${base}/`;
    return `${base}/${page}/`;
  }

  // Auto-cycling hover effect
  let activeCardIndex = $state(0);
  let cycleInterval: ReturnType<typeof setInterval> | null = null;

  function startCycle() {
    cycleInterval = setInterval(() => {
      activeCardIndex = (activeCardIndex + 1) % data.length;
    }, 2500);
  }

  function stopCycle() {
    if (cycleInterval) {
      clearInterval(cycleInterval);
      cycleInterval = null;
    }
  }

  onMount(() => {
    startCycle();
    return () => stopCycle();
  });
</script>

<div class="shard-grid fade-in-up">
  {#each data as shard, index}
    <a
      href={getCardRoute(shard.id)}
      class="shard-card type-{shard.type}"
      class:auto-hover={index === activeCardIndex}
      style="--accent: {shard.accentColor}"
    >
      <div
        class="shard-bg-layer"
        style="background-image: url({shard.image})"
      ></div>
      <div class="static-noise"></div>
      <div class="shard-content mono">
        <div class="shard-meta">
          <div class="platform-tag">
            <Icon name={shard.icon} size={14} />
            <span>{shard.platform}</span>
          </div>
          <Icon name="eye" size={14} class="view-icon" />
        </div>
        <div class="shard-info">
          <h3 class="shard-title">{shard.title}</h3>
          <div class="shard-sub">{shard.subtitle}</div>
          <div class="shard-metric">
            <span class="bracket">[</span>{shard.metric}<span class="bracket">]</span>
          </div>
        </div>
        <div class="hover-reveal-btn">INITIALIZE LINK &gt;</div>
      </div>
      <div class="border-line top"></div>
      <div class="border-line bottom"></div>
      <div class="border-line left"></div>
      <div class="border-line right"></div>
    </a>
  {/each}
</div>
