import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BA_M5e9P.js","_app/immutable/chunks/C8SwF1nt.js","_app/immutable/chunks/rnULtISp.js","_app/immutable/chunks/DM6dy9g1.js"];
export const stylesheets = [];
export const fonts = [];
