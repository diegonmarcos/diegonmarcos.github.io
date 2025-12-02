/**
 * Matomo Tracking - MyGames Page
 *
 * Tracks:
 * - Game selections
 * - Game launches
 * - Navigation interactions
 * - Theme toggles
 */

(function() {
  'use strict';

  if (typeof _paq === 'undefined') {
    console.warn('Matomo not loaded - tracking disabled');
    return;
  }

  // Click tracking
  document.addEventListener('click', function(e) {
    var target = e.target.closest('a, button, .game-card, .game-link');
    if (!target) return;

    // Game card clicks
    if (target.classList.contains('game-card') || target.classList.contains('game-link')) {
      var gameName = target.getAttribute('data-game') || target.textContent.trim();

      _paq.push(['trackEvent', 'MyGames', 'Game Select', gameName]);
    }

    // Game launch buttons
    else if (target.classList.contains('play-btn') || target.id === 'play-game') {
      var game = target.getAttribute('data-game') || 'unknown';

      _paq.push(['trackEvent', 'MyGames', 'Game Launch', game]);
    }

    // Theme toggle
    else if (target.id === 'theme-toggle') {
      _paq.push(['trackEvent', 'MyGames', 'Theme', 'Toggle']);
    }

    // Navigation links
    else if (target.tagName === 'A' && target.href) {
      var linkText = target.textContent.trim();

      _paq.push(['trackEvent', 'MyGames', 'Navigation', linkText]);
    }
  });

  // Track page load
  window.addEventListener('load', function() {
    var gameCards = document.querySelectorAll('.game-card');

    if (gameCards.length > 0) {
      _paq.push(['trackEvent', 'MyGames', 'Games Available', gameCards.length.toString()]);
    }
  });

})();
