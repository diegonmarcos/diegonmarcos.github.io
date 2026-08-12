import type { Tile } from './types';

export function renderTileGrid(
  container: HTMLElement,
  tiles: Array<Tile & { color: string }>,
  onSelect: (tile: Tile) => void
): void {
  container.innerHTML = '';

  for (const tile of tiles) {
    const button = document.createElement('button');
    button.className = `tile tile--${tile.color}`;
    button.setAttribute('role', 'listitem');
    button.type = 'button';

    const icon = document.createElement('img');
    icon.className = 'tile__icon';
    icon.src = `public/icons/${tile.icon}.svg`;
    icon.alt = '';

    const label = document.createElement('span');
    label.className = 'tile__label';
    label.textContent = tile.label;

    button.appendChild(icon);
    button.appendChild(label);
    button.addEventListener('click', () => onSelect(tile));

    container.appendChild(button);
  }
}
