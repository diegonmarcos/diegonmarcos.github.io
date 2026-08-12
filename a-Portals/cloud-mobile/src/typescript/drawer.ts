import type { PortalData, Section } from './types';
import { navigateTo } from './router';

const appNameEl = document.getElementById('drawer-app-name');
const appBuildEl = document.getElementById('drawer-app-build');
const avatarEl = document.getElementById('drawer-user-avatar');
const userNameEl = document.getElementById('drawer-user-name');
const userEmailEl = document.getElementById('drawer-user-email');
const userModeEl = document.getElementById('drawer-user-mode');
const navEl = document.getElementById('drawer-nav');
const drawerEl = document.getElementById('drawer');
const scrimEl = document.getElementById('drawer-scrim');
const hamburgerBtn = document.getElementById('hamburger-btn');
const starSiriusBtn = document.getElementById('star-sirius');

function openDrawer(): void {
  if (!drawerEl || !scrimEl) return;
  drawerEl.classList.add('is-open');
  scrimEl.classList.add('is-open');
  drawerEl.setAttribute('aria-hidden', 'false');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
}

function closeDrawer(): void {
  if (!drawerEl || !scrimEl) return;
  drawerEl.classList.remove('is-open');
  scrimEl.classList.remove('is-open');
  drawerEl.setAttribute('aria-hidden', 'true');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
}

function buildNavItem(id: string, section: Section): HTMLButtonElement {
  const item = document.createElement('button');
  item.className = 'drawer__nav-item';
  item.type = 'button';

  const icon = document.createElement('img');
  icon.src = `public/icons/${section.icon}.svg`;
  icon.alt = '';

  const label = document.createElement('span');
  label.textContent = section.label;

  item.appendChild(icon);
  item.appendChild(label);
  item.addEventListener('click', () => {
    navigateTo(id);
    closeDrawer();
  });

  return item;
}

export function initDrawer(data: PortalData): void {
  if (appNameEl) appNameEl.textContent = data.app.name;
  if (appBuildEl) appBuildEl.textContent = data.app.build;
  if (avatarEl) avatarEl.textContent = data.app.user.initials;
  if (userNameEl) userNameEl.textContent = data.app.user.name;
  if (userEmailEl) userEmailEl.textContent = data.app.user.email;
  if (userModeEl) userModeEl.textContent = `Mode: ${data.app.user.mode}`;

  if (navEl) {
    navEl.innerHTML = '';

    const remainingIds = Object.keys(data.sections).filter((key) => !data.bottomNav.includes(key));
    const orderedIds = [...data.bottomNav, ...remainingIds];

    orderedIds.forEach((id) => {
      const section: Section | undefined = data.sections[id];
      if (!section) return;
      navEl.appendChild(buildNavItem(id, section));
    });
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => openDrawer());
  if (starSiriusBtn) starSiriusBtn.addEventListener('click', () => openDrawer());
  if (scrimEl) scrimEl.addEventListener('click', () => closeDrawer());

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });
}
