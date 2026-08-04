import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CPe-_R-B.js","_app/immutable/chunks/N6sx6UCI.js","_app/immutable/chunks/qscThlQe.js","_app/immutable/chunks/BaevXjiz.js"];
export const stylesheets = ["_app/immutable/assets/0.CuhUFBx3.css"];
export const fonts = [];
