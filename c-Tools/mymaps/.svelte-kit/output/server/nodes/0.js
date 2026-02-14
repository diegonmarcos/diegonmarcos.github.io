import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CXYeAoZS.js","_app/immutable/chunks/BpHFVdBK.js","_app/immutable/chunks/Dyi0cJRJ.js","_app/immutable/chunks/D32J1AuY.js","_app/immutable/chunks/qKxsrdYH.js"];
export const stylesheets = ["_app/immutable/assets/0.ClLoWoUb.css"];
export const fonts = [];
