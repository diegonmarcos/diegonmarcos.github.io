import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DPdwpNqv.js","_app/immutable/chunks/Caw1DNdb.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/DlIj0L74.js","_app/immutable/chunks/0n6Vdrcu.js"];
export const stylesheets = ["_app/immutable/assets/0.2cU8glKW.css"];
export const fonts = [];
