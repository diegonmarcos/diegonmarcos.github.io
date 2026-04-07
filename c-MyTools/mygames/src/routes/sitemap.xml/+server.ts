// Sitemap XML Generator
// This creates a sitemap.xml for SEO

import { base } from '$app/paths';

const site = 'https://YOUR_USERNAME.github.io/mygames';

export const prerender = true;

export async function GET() {
	const pages = [
		'',
		'/photos',
		'/music',
		'/stats'
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `	<url>
		<loc>${site}${base}${page}</loc>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
