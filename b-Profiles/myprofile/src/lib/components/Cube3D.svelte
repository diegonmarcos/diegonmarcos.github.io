<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  // Props for the 3 stages/faces
  let {
    currentStage = 0,
    onStageChange,
    face1,
    face2,
    face3
  }: {
    currentStage?: number;
    onStageChange?: (stage: number) => void;
    face1?: Snippet;
    face2?: Snippet;
    face3?: Snippet;
  } = $props();

  // Cube rotation based on current stage
  let rotationX = $state(0);
  let rotationY = $state(0);

  // Stage labels
  const stages = [
    { id: 0, label: 'PROFILE', rotX: 0, rotY: 0 },
    { id: 1, label: 'STATS', rotX: 0, rotY: -90 },
    { id: 2, label: 'TERMINAL', rotX: 0, rotY: -180 }
  ];

  // Update rotation when stage changes
  $effect(() => {
    const stage = stages[currentStage];
    if (stage) {
      rotationX = stage.rotX;
      rotationY = stage.rotY;
    }
  });

  function nextStage() {
    const next = (currentStage + 1) % 3;
    onStageChange?.(next);
  }

  function prevStage() {
    const prev = (currentStage - 1 + 3) % 3;
    onStageChange?.(prev);
  }

  function goToStage(stage: number) {
    onStageChange?.(stage);
  }

  // Keyboard navigation
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextStage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      prevStage();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="cube-container">
  <!-- Navigation Controls -->
  <div class="cube-nav">
    <button class="cube-nav-btn prev" onclick={prevStage} aria-label="Previous stage">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>

    <div class="cube-indicators">
      {#each stages as stage}
        <button
          class="cube-indicator"
          class:active={currentStage === stage.id}
          onclick={() => goToStage(stage.id)}
          aria-label="Go to {stage.label}"
        >
          <span class="indicator-dot"></span>
          <span class="indicator-label mono">{stage.label}</span>
        </button>
      {/each}
    </div>

    <button class="cube-nav-btn next" onclick={nextStage} aria-label="Next stage">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>

  <!-- 3D Cube Scene -->
  <div class="cube-scene">
    <div
      class="cube"
      style="transform: rotateX({rotationX}deg) rotateY({rotationY}deg)"
    >
      <!-- Face 1: Profile/Cards -->
      <div class="cube-face front">
        {#if face1}
          {@render face1()}
        {/if}
      </div>

      <!-- Face 2: Stats -->
      <div class="cube-face right">
        {#if face2}
          {@render face2()}
        {/if}
      </div>

      <!-- Face 3: Terminal -->
      <div class="cube-face back">
        {#if face3}
          {@render face3()}
        {/if}
      </div>

      <!-- Face 4: Extra (left side, wraps around) -->
      <div class="cube-face left">
        {#if face1}
          {@render face1()}
        {/if}
      </div>
    </div>
  </div>

  <!-- Stage Title -->
  <div class="cube-stage-title mono">
    <span class="stage-number">[{currentStage + 1}/3]</span>
    <span class="stage-name">{stages[currentStage]?.label}</span>
  </div>
</div>

<style lang="scss">
  .cube-container {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-6;
    padding: $space-4;
  }

  .cube-nav {
    display: flex;
    align-items: center;
    gap: $space-4;
    z-index: 20;
  }

  .cube-nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: rgba($bg-dark-panel, 0.8);
    border: 1px solid $border-dim;
    border-radius: 50%;
    color: $terminal-green;
    cursor: pointer;
    @include transition(all);

    &:hover {
      background: rgba($terminal-green, 0.1);
      border-color: $terminal-green;
      box-shadow: 0 0 20px rgba($terminal-green, 0.3);
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .cube-indicators {
    display: flex;
    gap: $space-4;
  }

  .cube-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-1;
    padding: $space-2 $space-4;
    background: transparent;
    border: none;
    cursor: pointer;
    @include transition(all);

    .indicator-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: $border-dim;
      border: 2px solid $border-light;
      @include transition(all);
    }

    .indicator-label {
      font-size: $text-xs;
      color: $text-dim;
      letter-spacing: 0.1em;
      @include transition(color);
    }

    &:hover {
      .indicator-dot {
        border-color: $terminal-green;
      }
      .indicator-label {
        color: $text-light;
      }
    }

    &.active {
      .indicator-dot {
        background: $terminal-green;
        border-color: $terminal-green;
        box-shadow: 0 0 15px $terminal-green;
      }
      .indicator-label {
        color: $terminal-green;
      }
    }
  }

  .cube-scene {
    width: 100%;
    max-width: 1000px;
    height: 600px;
    perspective: 2000px;
    perspective-origin: center center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: rgba($bg-black, 0.95);
    border: 1px solid $border-dim;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: $space-4;

    // Custom scrollbar
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background: $terminal-dim;
      border-radius: 3px;
    }
  }

  .front {
    transform: translateZ(500px);
  }

  .right {
    transform: rotateY(90deg) translateZ(500px);
  }

  .back {
    transform: rotateY(180deg) translateZ(500px);
  }

  .left {
    transform: rotateY(-90deg) translateZ(500px);
  }

  .cube-stage-title {
    display: flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-6;
    background: rgba($bg-dark-panel, 0.8);
    border: 1px solid $border-dim;
    border-radius: 4px;

    .stage-number {
      color: $terminal-green;
      font-size: $text-sm;
    }

    .stage-name {
      color: $text-white;
      font-size: $text-lg;
      letter-spacing: 0.15em;
    }
  }

  // Responsive
  @media (max-width: 768px) {
    .cube-scene {
      height: 450px;
      perspective: 1500px;
    }

    .front { transform: translateZ(350px); }
    .right { transform: rotateY(90deg) translateZ(350px); }
    .back { transform: rotateY(180deg) translateZ(350px); }
    .left { transform: rotateY(-90deg) translateZ(350px); }

    .cube-indicators {
      gap: $space-2;
    }

    .indicator-label {
      display: none;
    }
  }
</style>
