<script lang="ts">
  // Animated stop navigator: dot rail + bouncing chevron. Jumps between the
  // data-driven scroll stops (top / middle / down …); scroll drives the camera.
  import { onMount } from 'svelte';

  let { stops }: { stops: { scroll: number; title: string }[] } = $props();

  let active = $state(0);
  let atEnd = $derived(active >= stops.length - 1);

  const maxScroll = () => document.body.scrollHeight - window.innerHeight;
  function goto(i: number) {
    const s = stops[Math.max(0, Math.min(stops.length - 1, i))];
    window.scrollTo({ top: s.scroll * maxScroll(), behavior: 'smooth' });
  }
  const next = () => goto(atEnd ? 0 : active + 1); // cycles back to top at the end

  onMount(() => {
    const onScroll = () => {
      const frac = maxScroll() > 0 ? window.scrollY / maxScroll() : 0;
      // nearest stop
      let best = 0, bd = Infinity;
      stops.forEach((s, i) => { const d = Math.abs(s.scroll - frac); if (d < bd) { bd = d; best = i; } });
      active = best;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav class="nav" aria-label="Scroll sections">
  <ul class="rail">
    {#each stops as s, i}
      <li>
        <button
          class="dot"
          class:active={i === active}
          onclick={() => goto(i)}
          aria-label={s.title}
          aria-current={i === active ? 'true' : undefined}
        ><span class="label">{s.title}</span></button>
      </li>
    {/each}
  </ul>

  <button class="chevron" class:flip={atEnd} onclick={next} aria-label={atEnd ? 'Back to top' : 'Next section'}>
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>
</nav>

<style>
  .nav {
    position: fixed; right: 22px; top: 50%; transform: translateY(-50%);
    z-index: 30; display: flex; flex-direction: column; align-items: center; gap: 16px;
    pointer-events: none;
  }
  .rail { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; pointer-events: auto; }

  .dot {
    position: relative; display: block;
    width: 12px; height: 12px; padding: 0; border: 0; cursor: pointer;
    border-radius: 50%; background: rgba(157, 180, 255, 0.28);
    transition: background 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .dot:hover { background: rgba(157, 180, 255, 0.6); transform: scale(1.25); }
  .dot.active { background: #cfe0ff; transform: scale(1.35); box-shadow: 0 0 12px rgba(207, 224, 255, 0.8); }
  /* active dot grows a soft ring */
  .dot.active::after {
    content: ''; position: absolute; inset: -6px; border-radius: 50%;
    border: 1px solid rgba(207, 224, 255, 0.4); animation: ring 2s ease-out infinite;
  }
  @keyframes ring { 0% { transform: scale(0.7); opacity: 0.9; } 100% { transform: scale(1.4); opacity: 0; } }

  .label {
    position: absolute; right: 22px; top: 50%; transform: translateY(-50%) translateX(6px);
    white-space: nowrap; opacity: 0; pointer-events: none;
    padding: 3px 8px; border-radius: 6px;
    background: rgba(8, 11, 20, 0.85); color: #dbe6ff;
    font: 500 11px/1 system-ui, sans-serif; letter-spacing: 0.04em;
    transition: opacity 0.25s, transform 0.25s;
  }
  .dot:hover .label, .dot.active .label { opacity: 1; transform: translateY(-50%) translateX(0); }

  .chevron {
    pointer-events: auto; cursor: pointer;
    width: 40px; height: 40px; border-radius: 50%;
    display: grid; place-items: center;
    border: 1px solid rgba(157, 180, 255, 0.35);
    background: rgba(10, 14, 26, 0.7); backdrop-filter: blur(6px);
    color: #cfe0ff;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s, background 0.3s;
    animation: bob 1.8s ease-in-out infinite;
  }
  .chevron:hover { border-color: #9db4ff; background: rgba(20, 26, 44, 0.9); }
  .chevron.flip { transform: rotate(180deg); animation: none; } /* points up at the end */
  .chevron.flip:hover { transform: rotate(180deg) scale(1.08); }
  @keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }

  @media (prefers-reduced-motion: reduce) {
    .chevron, .dot.active::after { animation: none; }
  }
</style>
