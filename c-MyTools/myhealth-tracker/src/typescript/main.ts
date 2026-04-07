import { initDatabase } from './database';
import { initDashboard } from './dashboard';

const init = (): void => {
  const today = new Date();
  const threeMonthsAgo = new Date(today);
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  initDatabase(threeMonthsAgo, today);
  initDashboard();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
