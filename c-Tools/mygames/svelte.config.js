import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
// Build: 2025-11-18 - Cookie consent via static files
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/mygames' : '',
			relative: false
		},
		prerender: {
			entries: [
				'/',
				'/photos',
				'/music',
				'/stats',
				'/sitemap.xml',
				'/pinball',
				'/mario',
				'/pac-man',
				'/clumsy-bird'
			]
		}
	}
};

export default config;
