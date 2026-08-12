# Morse Code Visual Graph UI — Animated Binary Tree Decoder

> **Date**: 2026-03-23
> **Updated**: 2026-03-23
> **Status**: Draft

---

## Goal

Build a Morse code decoder UI with an animated binary tree graph. Random text is generated, printed character by character, and each letter triggers a glowing traversal through the Morse binary tree (dot = left, dash = right). Plain TypeScript + SCSS ITCSS. No frameworks.

---

## Design Specification

### Architecture Overview

- **HTML**: `<div>` elements for nodes (letters, dots, dashes) layered over `<svg>` for connecting edges
- **SCSS (ITCSS)**: Dark neumorphic theme with glow highlights
- **TypeScript**: Graph coordinates, Morse dictionary, async animation queue

### ITCSS Layer Breakdown

| Layer | File | Responsibility |
|-------|------|----------------|
| **Settings** | `_s-colors.scss` | Dark theme: `$color-bg: #1a1a1e`, `$color-glow: #ffe680`, node/line colors |
| **Tools** | `_t-mixins.scss` | `neumorphic-inset` mixin (inset box-shadow), `glow` mixin (box-shadow + color transition) |
| **Objects** | `_o-layout.scss` | `.o-graph-container` (relative, aspect-ratio 1/1), `.o-svg-layer` (absolute, z-index 1) |
| **Components** | `_c-node.scss` | `.c-node` positioning, `--dot` (circle), `--dash` (pill), `.is-active` glow state |
| **Components** | `_c-edge.scss` | SVG line styling, `.is-active` glow state |
| **Components** | `_c-text-display.scss` | Typed text output area |

### SCSS — Key Mixins

```scss
// Tools/_t-mixins.scss
@mixin neumorphic-inset {
  background: $color-node-base;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5), inset -2px -2px 5px rgba(255,255,255,0.05);
}

@mixin glow {
  background-color: $color-glow;
  box-shadow: 0 0 10px $color-glow, 0 0 20px rgba($color-glow, 0.5);
  color: #fff;
  transition: all 0.2s ease-in-out;
}
```

### SCSS — Node Component

```scss
// Components/_c-node.scss
.c-node {
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  color: $color-text;

  &::before {
    content: '';
    display: block;
    @include neumorphic-inset;
  }

  &--dot::before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  &--dash::before {
    width: 40px;
    height: 15px;
    border-radius: 8px;
  }

  &.is-active::before {
    @include glow;
  }
}
```

### TypeScript — Data Model

```typescript
type NodeType = 'dot' | 'dash' | 'root';

interface GraphNode {
  id: string;       // e.g., 'E', 'T', 'root'
  type: NodeType;
  x: number;        // Percentage X coordinate
  y: number;        // Percentage Y coordinate
  parent?: string;  // ID of parent node
}

// Letter -> path from root through binary tree
const morseDictionary: Record<string, string[]> = {
  'E': ['E'],           // .
  'T': ['T'],           // -
  'I': ['E', 'I'],      // ..
  'A': ['E', 'A'],      // .-
  'N': ['T', 'N'],      // -.
  'M': ['T', 'M'],      // --
  // ... full alphabet
};
```

### TypeScript — DOM Renderer

```typescript
function renderGraph(container: HTMLElement, svgContainer: SVGElement) {
  graphConfig.forEach(node => {
    const el = document.createElement('div');
    el.classList.add('c-node', `c-node--${node.type}`);
    el.style.left = `${node.x}%`;
    el.style.top = `${node.y}%`;
    el.dataset.id = node.id;
    container.appendChild(el);

    if (node.parent) {
      const parentNode = graphConfig.find(n => n.id === node.parent);
      if (parentNode) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', `${parentNode.x}%`);
        line.setAttribute('y1', `${parentNode.y}%`);
        line.setAttribute('x2', `${node.x}%`);
        line.setAttribute('y2', `${node.y}%`);
        line.classList.add('c-edge');
        line.dataset.edgeId = `${parentNode.id}-${node.id}`;
        svgContainer.appendChild(line);
      }
    }
  });
}
```

### TypeScript — Animation Engine

```typescript
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function animateLetter(letter: string) {
  const path = morseDictionary[letter.toUpperCase()];
  if (!path) return;

  let currentParent = 'root';

  for (const nodeId of path) {
    const edge = document.querySelector(`[data-edge-id="${currentParent}-${nodeId}"]`);
    const nodeEl = document.querySelector(`[data-id="${nodeId}"]`);

    if (edge) edge.classList.add('is-active');
    if (nodeEl) nodeEl.classList.add('is-active');

    await sleep(300);

    if (edge) edge.classList.remove('is-active');
    if (nodeEl) nodeEl.classList.remove('is-active');

    currentParent = nodeId;
  }

  // Flash final letter node
  const finalNode = document.querySelector(`[data-id="${path[path.length - 1]}"]`);
  if (finalNode) {
    finalNode.classList.add('is-active');
    await sleep(400);
    finalNode.classList.remove('is-active');
  }
}

async function processText(text: string) {
  const textDisplay = document.getElementById('text-display');
  for (const char of text) {
    if (textDisplay) textDisplay.innerHTML += char;
    if (char !== ' ') await animateLetter(char);
    await sleep(200);
  }
}
```

### HTML Skeleton

```html
<div class="c-text-display" id="text-display"></div>
<div class="o-graph-container" id="graph-wrapper">
  <svg class="o-svg-layer" id="graph-svg"></svg>
</div>
```

---

## Checklist

- [ ] Define full Morse binary tree layout (percentage coordinates for all 26 letters + digits)
- [ ] Implement ITCSS structure: settings, tools, objects, components
- [ ] Implement `renderGraph()` — DOM nodes + SVG edges
- [ ] Implement `animateLetter()` — async traversal with glow
- [ ] Implement random text generator feeding `processText()`
- [ ] Add SVG edge draw animation (stroke-dasharray / stroke-dashoffset)
- [ ] Add sound feedback (optional: dot beep, dash tone)
- [ ] Test responsive scaling (percentage-based coordinates)
- [ ] Integrate into front/ repo build system (`build.sh` + `build.json`)
