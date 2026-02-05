

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "trailingSlash": "always",
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CmDuytcs.js","_app/immutable/chunks/BpHFVdBK.js","_app/immutable/chunks/Dyi0cJRJ.js","_app/immutable/chunks/Co4gL7Fm.js","_app/immutable/chunks/B7AKX-54.js","_app/immutable/chunks/D32J1AuY.js","_app/immutable/chunks/Bs5Te_zd.js","_app/immutable/chunks/qKxsrdYH.js","_app/immutable/chunks/B6z4V7zx.js","_app/immutable/chunks/OdnnCPwg.js","_app/immutable/chunks/DWVVDL2F.js","_app/immutable/chunks/DXl8p3-Q.js","_app/immutable/chunks/62dkkLdj.js","_app/immutable/chunks/IR8sAqcL.js","_app/immutable/chunks/DxTjl29k.js"];
export const stylesheets = [];
export const fonts = [];
