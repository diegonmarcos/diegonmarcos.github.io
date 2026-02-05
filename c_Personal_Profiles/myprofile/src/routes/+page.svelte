<script lang="ts">
  import { cardsData } from '$lib/data/cardsData';
  import CardsView from '$lib/components/CardsView.svelte';
  import PlayerView from '$lib/components/PlayerView.svelte';
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('profile');
  });
</script>

<div class="page-content profile-page">
  <PlayerView />

  <!-- Quick Action Link -->
  <nav class="quick-actions">
    <a href="./syslog/" class="action-btn terminal-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
      <span>SYS_LOG // TERMINAL AI</span>
    </a>
  </nav>

  <CardsView data={cardsData} />
</div>

<style lang="scss">
  .page-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .profile-page {
    animation: fadeIn 0.6s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateZ(-100px);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: rgba(10, 15, 10, 0.85);
    border: 1px solid rgba(100, 100, 100, 0.3);
    color: #ccc;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }

    &.terminal-btn {
      border-color: rgba(255, 0, 0, 0.4);
      color: #ff0000;

      &:hover {
        background: rgba(255, 0, 0, 0.1);
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
      }
    }
  }
</style>
