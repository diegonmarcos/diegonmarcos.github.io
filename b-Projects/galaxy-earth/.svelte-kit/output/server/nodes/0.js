import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CdlsnpHV.js","_app/immutable/chunks/C2jshoP2.js","_app/immutable/chunks/eaivgScB.js","_app/immutable/chunks/D43Ukwrx.js"];
export const stylesheets = [];
export const fonts = [];
