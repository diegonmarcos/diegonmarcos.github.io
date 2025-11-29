/**
 * Matomo Tracking - Health Tracker Page
 *
 * Tracks:
 * - Metric card interactions
 * - Chart interactions
 * - Time period selections
 * - Data inputs
 */

(function() {
  'use strict';

  if (typeof _paq === 'undefined') {
    console.warn('Matomo not loaded - tracking disabled');
    return;
  }

  // Click tracking
  document.addEventListener('click', function(e) {
    var target = e.target.closest('a, button, [data-metric], .metric-card');
    if (!target) return;

    // Metric cards
    if (target.classList.contains('metric-card') || target.closest('.metric-card')) {
      var metricName = target.querySelector('.metric-title')?.textContent.trim() ||
                       target.getAttribute('data-metric') ||
                       'Unknown Metric';

      _paq.push(['trackEvent', 'HealthTracker', 'Metric Click', metricName]);
    }

    // Chart interactions
    else if (target.closest('canvas') || target.classList.contains('chart-container')) {
      var chartType = target.getAttribute('data-chart') || 'Chart';

      _paq.push(['trackEvent', 'HealthTracker', 'Chart Interaction', chartType]);
    }

    // Time period buttons
    else if (target.getAttribute('data-period') || target.textContent.match(/day|week|month|year/i)) {
      var period = target.getAttribute('data-period') || target.textContent.trim();

      _paq.push(['trackEvent', 'HealthTracker', 'Period Select', period]);
    }

    // Navigation tabs
    else if (target.classList.contains('tab') || target.getAttribute('data-tab')) {
      var tabName = target.getAttribute('data-tab') || target.textContent.trim();

      _paq.push(['trackEvent', 'HealthTracker', 'Tab Navigation', tabName]);
    }
  });

  // Track form submissions / data inputs
  document.addEventListener('change', function(e) {
    var target = e.target;

    if (target.type === 'number' || target.type === 'range') {
      var inputName = target.getAttribute('name') ||
                      target.getAttribute('data-metric') ||
                      target.closest('label')?.textContent.trim() ||
                      'Data Input';

      _paq.push(['trackEvent', 'HealthTracker', 'Data Input', inputName]);
    }
  });

  // Track page load metrics count
  window.addEventListener('load', function() {
    var metrics = document.querySelectorAll('.metric-card, [data-metric]');

    if (metrics.length > 0) {
      _paq.push(['trackEvent', 'HealthTracker', 'Metrics Loaded', metrics.length.toString()]);
    }
  });

})();
