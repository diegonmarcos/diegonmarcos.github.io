import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 8018,
		open: false,
	},
	css: {
		preprocessorOptions: {
			scss: {
				// Use modern Sass API
			}
		}
	}
});
