<script lang="ts">
  let { mode, toggle }: { mode: 'scenic' | 'free'; toggle: () => void } = $props();
</script>

<button class="mode" onclick={toggle} title={mode === 'scenic' ? 'Switch to free ride' : 'Switch to scenic'}>
  {#if mode === 'scenic'}
    <!-- bicycle: switch to free ride -->
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="5.5" cy="17" r="3.2" /><circle cx="18.5" cy="17" r="3.2" />
      <path d="M5.5 17 9 8h5l-3.5 9M14 8l2.5 9M9 8l2 3h5" />
    </svg>
    <span>Free ride</span>
  {:else}
    <!-- eye/scenic -->
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="2.6" />
    </svg>
    <span>Scenic</span>
  {/if}
</button>

<style>
  .mode {
    position: fixed; top: 18px; left: 18px; z-index: 40;
    display: flex; align-items: center; gap: 8px;
    padding: 8px 13px; border-radius: 22px;
    border: 1px solid rgba(157, 180, 255, 0.4);
    background: rgba(10, 14, 26, 0.7); backdrop-filter: blur(8px);
    color: #cfe0ff; cursor: pointer;
    font: 600 12px/1 system-ui, sans-serif; letter-spacing: 0.04em;
    transition: border-color 0.25s, background 0.25s, transform 0.2s;
  }
  .mode:hover { border-color: #9db4ff; background: rgba(20, 26, 44, 0.85); transform: translateY(-1px); }
</style>
