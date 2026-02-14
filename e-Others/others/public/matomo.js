/**
 * Matomo Tracking - Others Page
 *
 * Tracks:
 * - Link/navigation clicks
 * - Card interactions
 * - Content engagement
 */

(function() {
  'use strict';

  if (typeof _paq === 'undefined') {
    console.warn('Matomo not loaded - tracking disabled');
    return;
  }

  // Generic click tracking
  document.addEventListener('click', function(e) {
    var target = e.target.closest('a, button');
    if (!target) return;

    // Track card clicks
    if (target.closest('.project-card')) {
      var linkText = target.textContent.trim();
      var linkUrl = target.href || 'no-url';

      _paq.push(['trackEvent', 'Others', 'Card Click', linkText, linkUrl]);
    }
  });

  // Page loaded
  _paq.push(['trackEvent', 'Others', 'Page', 'Loaded']);

})();
