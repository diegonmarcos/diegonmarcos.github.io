import buildJson from '../../../build.json';
import { makeEmbedAppScreen } from './_embed-app';

interface BuildJsonShape { apps?: { central_bank?: { url?: string } }; }
const url = (buildJson as BuildJsonShape).apps?.central_bank?.url ?? '/central_bank/';

export const renderCentralBankModelling = makeEmbedAppScreen({
  title: 'Central Bank Modelling',
  section: 'central_bank',
  url,
});
