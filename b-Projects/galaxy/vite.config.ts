import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: { port: 8023 },
  // three ships large; let it bundle into its own chunk
  build: { target: 'es2020' }
});
