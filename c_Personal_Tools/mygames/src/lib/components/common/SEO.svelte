<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		title: string;
		description: string;
		type?: 'website' | 'article';
		image?: string;
		url?: string;
		keywords?: string[];
	}

	let {
		title,
		description,
		type = 'website',
		image = `${base}/og-image.png`,
		url = '',
		keywords = []
	}: Props = $props();

	// Construct full URL
	const baseUrl = 'https://diegonmarcos.github.io/mygames';
	const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
	const fullTitle = title.includes('Fun Zone') ? title : `${title} - Fun Zone`;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	{#if keywords.length > 0}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Fun Zone" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={fullUrl} />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<!-- Additional Meta -->
	<meta name="author" content="Diego" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Canonical URL -->
	<link rel="canonical" href={fullUrl} />
</svelte:head>
