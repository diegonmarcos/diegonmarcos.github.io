import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: { port: 8025, fs: { allow: ['..'] } },
  build: { target: 'es2020' }
});
