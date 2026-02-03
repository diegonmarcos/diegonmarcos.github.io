

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DlFrnlPR.js","_app/immutable/chunks/CZqZxQ13.js","_app/immutable/chunks/asKwNPUx.js","_app/immutable/chunks/C-UB_xPj.js","_app/immutable/chunks/Dl1iZ6KQ.js","_app/immutable/chunks/tH1fzSQy.js","_app/immutable/chunks/Bwsin777.js","_app/immutable/chunks/nxaZ-_5b.js","_app/immutable/chunks/CuBdEQPs.js","_app/immutable/chunks/Dno6Q1ME.js","_app/immutable/chunks/BZCT7ppd.js","_app/immutable/chunks/5zRb6lcS.js","_app/immutable/chunks/CHBto5wF.js","_app/immutable/chunks/DhYG5ZPg.js","_app/immutable/chunks/WvyJtVsR.js"];
export const stylesheets = [];
export const fonts = [];
