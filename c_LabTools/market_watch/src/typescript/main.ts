// Market Watch Terminal - Main Entry Point
import {
  DM_INDEXES, EM_INDEXES,
  DM_CURRENCIES, EM_CURRENCIES,
  COMMODITIES, BUFFETT_PORTFOLIO, PERSONAL_WATCHLIST,
  US_YIELDS, BRL_YIELDS,
  FOOTER_KEYS
} from './data';

import {
  renderTable,
  renderYieldTable,
  renderYieldChart,
  renderFooterKeys
} from './render';

// Initialize clock display
const initClock = (): void => {
  const clockEl = document.getElementById('clock-display');
  if (!clockEl) return;

  const updateClock = (): void => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    clockEl.innerHTML = `${date} <span class="time">${time}</span>`;
  };

  updateClock();
  setInterval(updateClock, 1000);
};

// Initialize Panel 1: Global Equity Indices
const initPanel1 = (): void => {
  const content = document.getElementById('panel-1-content');
  if (!content) return;

  content.innerHTML =
    renderTable(DM_INDEXES, 'DEVELOPED MARKETS (DM)') +
    renderTable(EM_INDEXES, 'EMERGING MARKETS (EM)');
};

// Initialize Panel 2: Foreign Exchange
const initPanel2 = (): void => {
  const content = document.getElementById('panel-2-content');
  if (!content) return;

  content.innerHTML =
    renderTable(DM_CURRENCIES, 'G10 / DEVELOPED CURRENCIES') +
    renderTable(EM_CURRENCIES, 'EMERGING MARKET CURRENCIES');
};

// Initialize Panel 3: Portfolio & Commodities
const initPanel3 = (): void => {
  const content = document.getElementById('panel-3-content');
  if (!content) return;

  content.innerHTML =
    renderTable(COMMODITIES, 'KEY COMMODITY FUTURES') +
    renderTable(BUFFETT_PORTFOLIO, 'BUFFETT (BERKSHIRE) HOLDINGS') +
    renderTable(PERSONAL_WATCHLIST, 'PERSONAL WATCHLIST');
};

// Initialize Panel 4: Rates & Curves
const initPanel4 = (): void => {
  const chartContainer = document.getElementById('yield-chart-container');
  const tablesContainer = document.getElementById('yield-tables-container');

  if (chartContainer) {
    chartContainer.innerHTML = renderYieldChart();
  }

  if (tablesContainer) {
    tablesContainer.innerHTML =
      renderYieldTable(US_YIELDS, 'US TREASURIES') +
      '<div class="table-divider"></div>' +
      renderYieldTable(BRL_YIELDS, 'BRAZIL FUTURES (DI)');
  }
};

// Initialize Footer
const initFooter = (): void => {
  const footerKeys = document.getElementById('footer-keys');
  if (!footerKeys) return;

  footerKeys.innerHTML = renderFooterKeys(FOOTER_KEYS);
};

// Simulate live updates (random price ticks)
const initLiveUpdates = (): void => {
  const updateRandomCell = (): void => {
    const cells = document.querySelectorAll('.perf-cell');
    if (cells.length === 0) return;

    // Pick a random cell
    const randomIndex = Math.floor(Math.random() * cells.length);
    const cell = cells[randomIndex] as HTMLElement;

    // Add flash effect
    const isPositive = Math.random() > 0.5;
    cell.classList.add(isPositive ? 'flash-up' : 'flash-down');

    // Remove flash after animation
    setTimeout(() => {
      cell.classList.remove('flash-up', 'flash-down');
    }, 500);
  };

  // Random updates every 1-3 seconds
  setInterval(() => {
    if (Math.random() > 0.7) {
      updateRandomCell();
    }
  }, 1000);
};

// Main initialization
const init = (): void => {
  initClock();
  initPanel1();
  initPanel2();
  initPanel3();
  initPanel4();
  initFooter();
  initLiveUpdates();

  console.log('Market Watch Terminal initialized');
};

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
