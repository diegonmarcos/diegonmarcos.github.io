<script lang="ts">
  import '$lib/styles/_global.scss';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { navigation, pages, pageOrder, type PageName } from '$lib/stores/navigation';
  import { mediaLinks, cardsData } from '$lib/data/cardsData';
  import StarfieldBg from '$lib/components/StarfieldBg.svelte';
  import CubeTransition from '$lib/components/CubeTransition.svelte';
  import CubeNav from '$lib/components/CubeNav.svelte';
  import MediasView from '$lib/components/MediasView.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { onMount } from 'svelte';

  let { children } = $props();

  // Transition state
  let showTransition = $state(false);
  let transitionFrom = $state<PageName>('profile');
  let transitionTo = $state<PageName>('audio');
  let booting = $state(true);

  // Get current page from path (handles both with and without trailing slash)
  function getPageFromPath(path: string): PageName {
    if (path.includes('/audio')) return 'audio';
    if (path.includes('/bio')) return 'bio';
    if (path.includes('/geo')) return 'geo';
    if (path.includes('/visual')) return 'visual';
    if (path.includes('/memory')) return 'memory';
    if (path.includes('/syslog')) return 'syslog';
    if (path.includes('/stats')) return 'profile'; // Legacy redirect
    if (path.includes('/terminal')) return 'syslog'; // Legacy redirect
    if (path.includes('/galaxy')) return 'syslog'; // Legacy redirect
    return 'profile';
  }

  // Navigate with cube transition
  async function navigateWithCube(targetPage: PageName) {
    const currentPath = $page.url.pathname;
    const currentPage = getPageFromPath(currentPath);

    if (currentPage === targetPage) return;

    transitionFrom = currentPage;
    transitionTo = targetPage;
    showTransition = true;
  }

  // Get proper path with base
  function getPagePath(pageName: PageName): string {
    if (pageName === 'profile') return `${base}/`;
    return `${base}/${pageName}/`;
  }

  function onTransitionComplete() {
    showTransition = false;
    window.location.href = getPagePath(transitionTo);
  }

  // Keyboard navigation is now handled by CubeNav component (press 'c' to open)

  // Scaling state for mobile
  let scaleValue = $state(1);
  let scaledHeight = $state('100vh');

  onMount(() => {
    // Boot sequence - only on first visit
    const hasBooted = sessionStorage.getItem('hasBooted');
    if (hasBooted) {
      booting = false;
    } else {
      setTimeout(() => {
        booting = false;
        sessionStorage.setItem('hasBooted', 'true');
      }, 2000);
    }

    // Auto-scale for mobile to fit desktop view
    function updateScale() {
      const designWidth = 1200;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const path = window.location.pathname;

      // Skip scaling for shader-heavy pages (they handle their own responsive layout)
      const shaderPages = ['/audio', '/bio', '/geo', '/visual', '/memory', '/syslog', '/galaxy'];
      if (shaderPages.some(p => path.includes(p))) {
        scaleValue = 1;
        scaledHeight = '100vh';
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        return;
      }

      if (screenWidth < designWidth) {
        const scale = screenWidth / designWidth;
        scaleValue = scale;
        scaledHeight = `${screenHeight / scale}px`;
        // Lock the viewport
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      } else {
        scaleValue = 1;
        scaledHeight = '100vh';
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    }
    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  });

  // Get current page reactively
  let currentPage = $derived(getPageFromPath($page.url.pathname));
</script>

<!-- Viewport wrapper for mobile scaling -->
<div class="viewport-wrapper" style="width: 100vw; height: 100vh; overflow: hidden;">
  <div
    class="scale-container"
    style="transform: scale({scaleValue}); transform-origin: top left; width: {scaleValue < 1 ? '1200px' : '100%'}; height: {scaledHeight};"
  >
    <div class="matrix-container">
      <!-- Starfield Background -->
      <StarfieldBg />

      <!-- Vignette & Scanlines -->
      <div class="vignette"></div>
      <div class="scanlines"></div>

      <!-- Cube Transition Overlay -->
      <CubeTransition
        isActive={showTransition}
        fromPage={transitionFrom}
        toPage={transitionTo}
        onComplete={onTransitionComplete}
      />

      <!-- Boot Screen -->
      {#if booting}
        <div class="boot-screen">
          <div class="terminal-text">
            <div class="typewriter mono">INITIALIZING SYSTEM...</div>
            <div class="typewriter mono delay-1">LOADING 3D SHADER ENGINE...</div>
            <div class="typewriter mono delay-2">RENDERING GALAXY...</div>
            <div class="typewriter mono delay-3">ACTIVATING AURORA BOREALIS...</div>
          </div>
        </div>
      {:else}
        <!-- Main HUD -->
        <div class="app">
          <!-- Header -->
          <header class="tactical-header">
            <h1 class="logo-text mono">
              DIEGO N. MARCOS <span class="green">//</span> {pages[currentPage].label}
            </h1>
          </header>

          <!-- Page Navigation Indicators -->
          <nav class="cube-nav">
            <div class="cube-indicators">
              {#each pageOrder as pageName}
                {@const pageInfo = pages[pageName]}
                <a
                  href={pageName === 'profile' ? `${base}/` : `${base}/${pageName}/`}
                  class="cube-indicator"
                  class:active={currentPage === pageName}
                  style="--indicator-color: {pageInfo.color}"
                  aria-label="Go to {pageInfo.label}"
                >
                  <span class="indicator-dot"></span>
                  <span class="indicator-label mono">{pageInfo.label}</span>
                </a>
              {/each}
            </div>
          </nav>

          <!-- Page Content -->
          <main class="hud-interface">
            {@render children()}
          </main>

          <!-- Stage Title -->
          <div class="cube-stage-title mono" style="--stage-color: {pages[currentPage].color}">
            <span class="stage-number">[{pageOrder.indexOf(currentPage) + 1}/{pageOrder.length}]</span>
            <span class="stage-name">{pages[currentPage].label}</span>
          </div>

          <!-- Linktree CTA -->
          <section class="linktree-cta">
            <a
              href="https://linktree.diegonmarcos.com"
              target="_blank"
              rel="noopener noreferrer"
              class="linktree-btn shimmer"
            >
              <span>LINKTREE</span>
            </a>
          </section>

          <!-- Footer -->
          <footer class="terminal-dock mono">
            <MediasView {mediaLinks} trackedApps={cardsData} />
            <div class="dock-content">
              <span class="prompt">root@dnm:~/{currentPage}#</span>
              <span class="cursor blink">█</span>
            </div>
          </footer>

          <!-- Cube Navigation Overlay (press C to open) -->
          <CubeNav />
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .viewport-wrapper {
    position: fixed;
    top: 0;
    left: 0;
  }

  .scale-container {
    position: relative;
  }

  .app {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .cube-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    z-index: 20;
  }

  .cube-indicators {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cube-indicator {
    --indicator-color: #00ff41;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 0.4rem 0.6rem;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    .indicator-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(50, 50, 50, 0.8);
      border: 2px solid color-mix(in srgb, var(--indicator-color) 40%, transparent);
      transition: all 0.3s ease;
    }

    .indicator-label {
      font-size: 0.6rem;
      color: rgba(150, 150, 150, 0.8);
      letter-spacing: 0.05em;
      transition: color 0.3s ease;
    }

    &:hover {
      .indicator-dot {
        border-color: var(--indicator-color);
      }
      .indicator-label {
        color: var(--indicator-color);
      }
    }

    &.active {
      .indicator-dot {
        background: var(--indicator-color);
        border-color: var(--indicator-color);
        box-shadow: 0 0 12px var(--indicator-color);
      }
      .indicator-label {
        color: var(--indicator-color);
      }
    }
  }

  .cube-stage-title {
    --stage-color: #00ff41;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    background: rgba(10, 15, 10, 0.8);
    border: 1px solid color-mix(in srgb, var(--stage-color) 30%, transparent);
    border-radius: 4px;
    margin: 1rem auto;
    width: fit-content;

    .stage-number {
      color: var(--stage-color);
      font-size: 0.875rem;
    }

    .stage-name {
      color: #ffffff;
      font-size: 1.1rem;
      letter-spacing: 0.15em;
    }
  }

  .boot-screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .terminal-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .typewriter {
    color: #00ff41;
    font-size: 1rem;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 0.8s steps(30) forwards;
    opacity: 0;

    &.delay-1 { animation-delay: 0.3s; }
    &.delay-2 { animation-delay: 0.6s; }
    &.delay-3 { animation-delay: 0.9s; }
  }

  @keyframes typing {
    from { width: 0; opacity: 1; }
    to { width: 100%; opacity: 1; }
  }

  .hud-interface {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .cube-indicators {
      gap: 0.25rem;
    }

    .indicator-label {
      display: none;
    }
  }
</style>
