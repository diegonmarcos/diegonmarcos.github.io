import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.5k2RP5Ea.js","_app/immutable/chunks/DTA30TDk.js","_app/immutable/chunks/BSqcXsmM.js","_app/immutable/chunks/NWNhCqId.js","_app/immutable/chunks/DetevbZ9.js"];
export const stylesheets = ["_app/immutable/assets/0.ClLoWoUb.css"];
export const fonts = [];
