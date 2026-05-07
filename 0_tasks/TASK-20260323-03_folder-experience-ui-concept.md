# Folder Experience UI Concept — Skeuomorphic Navigation

> **Date**: 2026-03-23
> **Updated**: 2026-03-23
> **Status**: Draft

---

## Goal

Build a skeuomorphic "file folder" navigation UI where hovering/moving the mouse causes stacked folders to slide open, revealing their contents. Plain TypeScript + SCSS ITCSS architecture. No frameworks.

---

## Design Specification

### Interaction Model

- Folders are stacked vertically with overlap (negative margin)
- On `mouseenter` of folder N: folders N+1, N+2... slide down via `translateY()`
- Folder N's content fades in (`opacity` transition)
- On `mouseleave` of container: all folders reset to stacked position
- Z-index: hovered folder jumps to `z-index: 100`, others reset to stack order

### ITCSS Layer Breakdown

| Layer | File | Responsibility |
|-------|------|----------------|
| **Settings** | `_s-folders.scss` | Folder height, overlap, transition timing variables |
| **Tools** | `_t-folder-tab.scss` | `clip-path` mixin for folder tab shape |
| **Objects** | `_o-stack.scss` | Container managing vertical flow |
| **Components** | `_c-folder.scss` | Folder shifting logic, transitions, z-index |

### SCSS — Core Component

```scss
// Components/_c-folder.scss
.c-folder {
  position: relative;
  height: 80px; // Tab/header height
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  margin-top: -40px; // Overlap effect
  will-change: transform;

  &__content {
    height: 400px;
    opacity: 0;
    transition: opacity 0.3s ease;
    background: inherit;
  }

  &.is-open {
    transform: translateY(0);

    .c-folder__content {
      opacity: 1;
    }

    // All subsequent siblings shift down
    & ~ .c-folder {
      transform: translateY(350px);
    }
  }
}
```

### SCSS — Tab Shape (clip-path)

```scss
// Tools/_t-folder-tab.scss
.c-folder__tab {
  clip-path: polygon(0% 20%, 5% 0%, 30% 0%, 35% 20%, 100% 20%, 100% 100%, 0% 100%);
}
```

### TypeScript — Interaction Layer

```typescript
class FolderNavigation {
  private folders: NodeListOf<HTMLElement>;

  constructor() {
    this.folders = document.querySelectorAll('.c-folder');
    this.init();
  }

  private init(): void {
    this.folders.forEach((folder, index) => {
      folder.addEventListener('mouseenter', () => this.openFolder(index));
    });

    const container = document.querySelector('.o-stack');
    container?.addEventListener('mouseleave', () => this.resetFolders());
  }

  private openFolder(activeIndex: number): void {
    this.folders.forEach((folder, i) => {
      if (i === activeIndex) {
        folder.classList.add('is-open');
        folder.style.zIndex = '100';
      } else {
        folder.classList.remove('is-open');
        folder.style.zIndex = `${i}`;
      }
    });
  }

  private resetFolders(): void {
    this.folders.forEach(f => f.classList.remove('is-open'));
  }
}

new FolderNavigation();
```

### Performance Notes

| Technique | Why |
|-----------|-----|
| `transform: translateY()` | GPU-composited, no layout thrashing (never use `top`/`margin-top` for animation) |
| `will-change: transform` | Promotes elements to own compositor layers |
| `cubic-bezier(0.25, 1, 0.5, 1)` | Snappy ease-out with natural deceleration |
| Class toggle over mouse-follow | CSS transitions handle animation weight — no per-frame JS calc |

### Approach Comparison

| Feature | Class Toggle (recommended) | Mouse-Follow (dynamic) |
|---------|---------------------------|----------------------|
| Logic | CSS transitions handle the weight | JS calculates offset every frame |
| Feel | Snappy and predictable | Elastic and organic |
| Performance | High (compositor) | Medium (can lag on mobile) |

---

## Checklist

- [ ] Create ITCSS directory structure for folder component
- [ ] Implement `_s-folders.scss` settings (variables)
- [ ] Implement `_t-folder-tab.scss` clip-path mixin
- [ ] Implement `_o-stack.scss` container object
- [ ] Implement `_c-folder.scss` component with transitions
- [ ] Implement `FolderNavigation` TypeScript class
- [ ] Test z-index stacking across 5+ folders
- [ ] Test mobile touch fallback (tap instead of hover)
- [ ] Integrate into front/ repo build system (`build.sh` + `build.json`)
