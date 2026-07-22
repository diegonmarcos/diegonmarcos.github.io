<script lang="ts">
  import planets from '$lib/data/planets.json';
</script>

<main>
  <header>
    <h1>Galaxy</h1>
    <p class="subtitle">A constellation of worlds</p>
  </header>

  <div class="grid">
    {#each planets as planet (planet.id)}
      {#if planet.status === 'soon'}
        <div class="card disabled">
          <div class="card-head">
            <h2>{planet.name}</h2>
            <span class="badge soon">soon</span>
          </div>
          <p>{planet.tagline}</p>
        </div>
      {:else}
        <a class="card" href={planet.url}>
          <div class="card-head">
            <h2>{planet.name}</h2>
            <span class="badge live">live</span>
          </div>
          <p>{planet.tagline}</p>
        </a>
      {/if}
    {/each}
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    background: radial-gradient(ellipse at top, #10131f 0%, #05060a 60%, #000 100%);
    color: #e6e8f2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    min-height: 100vh;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 1.5rem 3rem;
  }

  header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
    letter-spacing: 0.08em;
    background: linear-gradient(120deg, #8ecbff, #c9a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .subtitle {
    color: #8b90ab;
    margin-top: 0.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 1.25rem 1.4rem;
    transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
  }

  a.card:hover {
    transform: translateY(-3px);
    border-color: rgba(142, 203, 255, 0.5);
    background: rgba(255, 255, 255, 0.06);
  }

  .card.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .card h2 {
    margin: 0;
    font-size: 1.15rem;
  }

  .card p {
    margin: 0.6rem 0 0;
    color: #a8adc7;
    font-size: 0.92rem;
  }

  .badge {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    white-space: nowrap;
  }

  .badge.live {
    background: rgba(94, 224, 150, 0.15);
    color: #6ee7a8;
    border: 1px solid rgba(110, 231, 168, 0.35);
  }

  .badge.soon {
    background: rgba(255, 255, 255, 0.06);
    color: #9095b0;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
</style>
