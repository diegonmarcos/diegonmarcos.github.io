/**
 * Matomo Tracking - Market Watch Terminal Page
 *
 * Tracks:
 * - Widget interactions
 * - Ticker/symbol clicks
 * - Time frame selections
 * - Chart interactions
 * - Data refresh events
 */

(function() {
  'use strict';

  if (typeof _paq === 'undefined') {
    console.warn('Matomo not loaded - tracking disabled');
    return;
  }

  // Click tracking
  document.addEventListener('click', function(e) {
    var target = e.target.closest('a, button, [data-symbol], [data-widget], .ticker-item');
    if (!target) return;

    // Ticker/Symbol clicks
    if (target.classList.contains('ticker-item') || target.getAttribute('data-symbol')) {
      var symbol = target.getAttribute('data-symbol') ||
                   target.querySelector('.symbol')?.textContent.trim() ||
                   target.textContent.trim();

      _paq.push(['trackEvent', 'MarketWatch', 'Symbol Click', symbol]);
    }

    // Widget interactions
    else if (target.closest('[data-widget]') || target.classList.contains('widget')) {
      var widgetName = target.closest('[data-widget]')?.getAttribute('data-widget') ||
                       target.querySelector('.widget-title')?.textContent.trim() ||
                       'Widget';

      _paq.push(['trackEvent', 'MarketWatch', 'Widget Interaction', widgetName]);
    }

    // Time frame selections
    else if (target.getAttribute('data-timeframe') || target.textContent.match(/1D|1W|1M|3M|1Y|5Y|ALL/i)) {
      var timeframe = target.getAttribute('data-timeframe') || target.textContent.trim();

      _paq.push(['trackEvent', 'MarketWatch', 'Timeframe Select', timeframe]);
    }

    // Chart type toggles
    else if (target.getAttribute('data-chart-type') || target.classList.contains('chart-toggle')) {
      var chartType = target.getAttribute('data-chart-type') || target.textContent.trim();

      _paq.push(['trackEvent', 'MarketWatch', 'Chart Type', chartType]);
    }

    // Refresh buttons
    else if (target.classList.contains('refresh-btn') || target.getAttribute('data-refresh')) {
      var section = target.closest('[data-widget]')?.getAttribute('data-widget') || 'Data';

      _paq.push(['trackEvent', 'MarketWatch', 'Refresh', section]);
    }

    // Linktree button
    else if (target.classList.contains('linktree-btn') || target.href?.includes('linktree')) {
      _paq.push(['trackEvent', 'MarketWatch', 'External Link', 'Linktree']);
    }
  });

  // Track search inputs
  document.addEventListener('submit', function(e) {
    var form = e.target;
    var searchInput = form.querySelector('input[type="search"], input[name="symbol"]');

    if (searchInput) {
      _paq.push(['trackEvent', 'MarketWatch', 'Search', searchInput.value || 'empty']);
    }
  });

  // Track page load - widgets count
  window.addEventListener('load', function() {
    var widgets = document.querySelectorAll('[data-widget], .widget');
    var tickers = document.querySelectorAll('[data-symbol], .ticker-item');

    if (widgets.length > 0) {
      _paq.push(['trackEvent', 'MarketWatch', 'Widgets Loaded', widgets.length.toString()]);
    }

    if (tickers.length > 0) {
      _paq.push(['trackEvent', 'MarketWatch', 'Tickers Loaded', tickers.length.toString()]);
    }
  });

})();
