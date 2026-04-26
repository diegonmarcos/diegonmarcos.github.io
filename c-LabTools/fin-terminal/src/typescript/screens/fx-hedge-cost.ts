import buildJson from '../../../build.json';
import { makeEmbedAppScreen } from './_embed-app';

interface BuildJsonShape { apps?: { fx_hedge?: { url?: string } }; }
const url = (buildJson as BuildJsonShape).apps?.fx_hedge?.url ?? 'public/fx-hedge.html';

// FX Hedge Cost — Treasury FX Suite (standalone Tailwind + Chart.js page).
// Source HTML is bundled into src/public/fx-hedge.html so it ships with the
// fin-terminal build; iframe-embedded under the FOREX nav category.
export const renderFxHedgeCost = makeEmbedAppScreen({
  title: 'FX Hedge Cost',
  section: 'fx_hedge',
  url,
});
