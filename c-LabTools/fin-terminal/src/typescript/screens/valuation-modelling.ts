import buildJson from '../../../build.json';
import { makeEmbedAppScreen } from './_embed-app';

interface BuildJsonShape { apps?: { valuation?: { url?: string } }; }
const url = (buildJson as BuildJsonShape).apps?.valuation?.url ?? '/valuation/';

export const renderValuationModelling = makeEmbedAppScreen({
  title: 'Valuation Modelling',
  section: 'valuation',
  url,
});
