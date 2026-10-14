import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: '200.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: '',
      relative: true
    },
    prerender: {
      entries: ['*'],
      handleHttpError: ({ path, message }) => {
        // Planet links point to sibling-deployed sites, not local routes.
        if (path.startsWith('/galaxy-')) return;
        throw new Error(message);
      }
    }
  }
};

export default config;
