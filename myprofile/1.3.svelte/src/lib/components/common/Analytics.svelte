<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { matomo } from '$lib/services/matomo.service';

	// Initialize Matomo on component mount
	onMount(() => {
		matomo.init();
	});

	// Track page views when route changes
	$: if ($page.url.pathname) {
		matomo.trackPageView();
	}
</script>

<!--
  Analytics Component

  This component initializes Matomo analytics and tracks page views.
  It's privacy-focused with the following features:
  - Cookie-less tracking
  - Respects Do Not Track (DNT)
  - GDPR compliant
  - Can be disabled via environment variable

  Usage: Include in +layout.svelte
-->
