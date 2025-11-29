// Gallery view toggle module

import { getElementById, querySelectorAll, addClass, removeClass, setCSSProperty } from '../utils/dom';

let galleryEnabled = false;

/**
 * Set thumbnail backgrounds for links with data-preview attribute
 */
function setThumbnailBackgrounds(): void {
  const links = querySelectorAll<HTMLElement>('.link');

  links.forEach(link => {
    const previewUrl = link.getAttribute('data-preview');
    if (previewUrl) {
      setCSSProperty(link, '--thumbnail-url', `url(${previewUrl})`);
    }
  });
}

/**
 * Toggle gallery mode on/off
 */
function toggleGalleryMode(toggle: HTMLInputElement): void {
  galleryEnabled = toggle.checked;
  localStorage.setItem('galleryEnabled', String(galleryEnabled));

  if (galleryEnabled) {
    setThumbnailBackgrounds();
    addClass(document.body, 'gallery-mode');
  } else {
    removeClass(document.body, 'gallery-mode');
  }
}

/**
 * Initialize gallery view toggle
 */
export function initGalleryToggle(): void {
  const galleryToggle = getElementById<HTMLInputElement>('gallery-toggle');

  if (!galleryToggle) return;

  // Load saved state
  galleryEnabled = localStorage.getItem('galleryEnabled') === 'true';
  galleryToggle.checked = galleryEnabled;

  // Event listener
  galleryToggle.addEventListener('change', () => toggleGalleryMode(galleryToggle));

  // Initialize on page load if enabled
  if (galleryEnabled) {
    setThumbnailBackgrounds();
    toggleGalleryMode(galleryToggle);
  }
}
