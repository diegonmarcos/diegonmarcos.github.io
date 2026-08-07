// Single source of truth for the FAB (bottom-right) and hamburger (top-left)
// menus — both render from this list instead of maintaining two copies of
// the same buttons in index.html.

export interface MenuItem {
  id: string;
  icon: string;
  label: string;
  href?: string;
}

export interface MenuGroup {
  label: string;
  items: MenuItem[];
}

export const MENU_GROUPS: MenuGroup[] = [
  {
    label: 'View',
    items: [
      { id: 'btn-pixelworld', icon: 'device-gamepad.svg', label: 'Pixel World', href: 'https://diegonmarcos.github.io/linktree_pixel-world/' },
      { id: 'btn-mindmap', icon: 'git-branch.svg', label: 'Mindmap' },
      { id: 'iconview-btn', icon: 'cards.svg', label: 'Icon View' },
      { id: 'cardview-btn', icon: 'cards.svg', label: 'Card View' },
      { id: 'zoom-out-btn', icon: 'zoom-out.svg', label: 'Zoom Out' },
      { id: 'zoom-in-btn', icon: 'zoom-in.svg', label: 'Zoom In' },
    ],
  },
  {
    label: 'Theme',
    items: [
      { id: 'lite-toggle', icon: 'bolt.svg', label: 'Light Mode' },
      { id: 'theme-toggle', icon: 'bulb.svg', label: 'Theme Toggle' },
      { id: 'audio-toggle', icon: 'headphones.svg', label: 'Audio Toggle' },
    ],
  },
  {
    label: 'Dev',
    items: [
      { id: 'status-toggle', icon: 'database.svg', label: 'Status' },
      { id: 'eruda-toggle', icon: 'code.svg', label: 'Dev Tools' },
      { id: 'logcat-toggle', icon: 'file-stack.svg', label: 'Logcat' },
      { id: 'sw-reset-toggle', icon: 'refresh.svg', label: 'Clear Cache' },
      { id: 'about-toggle', icon: 'info-circle.svg', label: 'About' },
    ],
  },
];
