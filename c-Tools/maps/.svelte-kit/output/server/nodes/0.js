import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DMjuXrj1.js","_app/immutable/chunks/C1f7F5bl.js","_app/immutable/chunks/Dpyu_rjF.js","_app/immutable/chunks/DbnDA8bE.js"];
export const stylesheets = ["_app/immutable/assets/0.CuhUFBx3.css"];
export const fonts = [];
