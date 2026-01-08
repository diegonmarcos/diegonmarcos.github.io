const esbuild = require('./node_modules/esbuild');

const isProd = process.argv.includes('--minify');
const outfile = process.argv.includes('--dev') ? 'src_static/script.js' : 'script.js';

esbuild.buildSync({
  entryPoints: ['src_static/typescript/main.ts'],
  bundle: true,
  outfile: outfile,
  format: 'iife',
  target: 'es2020',
  minify: isProd,
  sourcemap: !isProd
});

console.log(`Built: ${outfile}`);
