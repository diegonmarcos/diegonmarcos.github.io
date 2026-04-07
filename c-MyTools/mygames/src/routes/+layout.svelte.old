<script lang="ts">
	import { base } from '$app/paths';
	import '../styles/global.scss'; // Import global Sass styles
	import Analytics from '$lib/components/common/Analytics.svelte';

	let { children } = $props();

	// Get current path for active nav highlighting
	let currentPath = $state('/');

	// Update on mount and navigation
	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}
</script>

<svelte:head>
	<title>Diego's Profile - Pixel Art Personal Space</title>
	<meta name="description" content="Personal profile showcasing photos, music, and adventures" />
</svelte:head>

<div class="app-container">
	<header class="header">
		<div class="header-content container">
			<div class="logo">
				<a href="{base}/" class="logo-link">
					<span class="logo-icon">🎮</span>
					<span class="logo-text">Diego</span>
				</a>
			</div>

			<nav class="nav">
				<ul class="nav-list">
					<li class="nav-item">
						<a href="{base}/" class="nav-link" class:active={currentPath === `${base}/`}>
							<span class="nav-icon">🏠</span>
							<span class="nav-label">Home</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="{base}/photos" class="nav-link" class:active={currentPath === `${base}/photos`}>
							<span class="nav-icon">📷</span>
							<span class="nav-label">Photos</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="{base}/music" class="nav-link" class:active={currentPath === `${base}/music`}>
							<span class="nav-icon">🎵</span>
							<span class="nav-label">Music</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="{base}/stats" class="nav-link" class:active={currentPath === `${base}/stats`}>
							<span class="nav-icon">📊</span>
							<span class="nav-label">Stats</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="{base}/mario" class="nav-link" class:active={currentPath === `${base}/mario`}>
							<span class="nav-icon">🍄</span>
							<span class="nav-label">Mario</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="{base}/pac-man" class="nav-link" class:active={currentPath === `${base}/pac-man`}>
							<span class="nav-icon">👻</span>
							<span class="nav-label">Pac-Man</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="{base}/clumsy-bird" class="nav-link" class:active={currentPath === `${base}/clumsy-bird`}>
							<span class="nav-icon">🐦</span>
							<span class="nav-label">Flappy Bird</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<main class="main">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="footer-content container">
			<p class="footer-text">
				<span class="pixel-text">Made with 💜 by Diego</span>
			</p>
			<p class="footer-copyright">
				&copy; {new Date().getFullYear()} - Powered by pixels & passion
			</p>
		</div>
	</footer>
</div>

<!-- Analytics Component - Privacy-focused tracking -->
<Analytics />

<style lang="scss">
	@use '../styles/abstracts/variables' as *;
	@use '../styles/abstracts/mixins' as *;

	// ----------------
	// APP CONTAINER
	// ----------------
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: $background;
	}

	// ----------------
	// HEADER
	// ----------------
	.header {
		background-color: $gray-900;
		border-bottom: 4px solid $purple-500;
		position: sticky;
		top: 0;
		z-index: 100;
		@include pixel-shadow(4px, $purple-700);
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: $space-4;
		padding-bottom: $space-4;
		gap: $space-4;

		@include mobile {
			flex-direction: column;
			gap: $space-3;
		}
	}

	// ----------------
	// LOGO
	// ----------------
	.logo {
		flex-shrink: 0;
	}

	.logo-link {
		display: flex;
		align-items: center;
		gap: $space-3;
		@include transition(transform);

		&:hover {
			transform: scale(1.05);
		}
	}

	.logo-icon {
		font-size: $text-2xl;
		@include float(2s);
	}

	.logo-text {
		font-family: $font-pixel-heading;
		font-size: $text-xl;
		color: $pink-500;
		@include pixel-text-shadow($purple-500);

		@include mobile {
			font-size: $text-lg;
		}
	}

	// ----------------
	// NAVIGATION
	// ----------------
	.nav {
		flex-grow: 1;
		display: flex;
		justify-content: flex-end;

		@include mobile {
			width: 100%;
			justify-content: center;
		}
	}

	.nav-list {
		display: flex;
		gap: $space-2;
		list-style: none;
		padding: 0;
		margin: 0;

		@include mobile {
			flex-wrap: wrap;
			justify-content: center;
			gap: $space-2;
		}
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: $space-2;
		padding: $space-3 $space-4;
		background-color: $gray-800;
		border: 2px solid $purple-600;
		color: $text-primary;
		font-family: $font-pixel-body;
		font-size: $text-base;
		@include transition(all);
		position: relative;

		&:hover {
			background-color: $purple-700;
			border-color: $purple-400;
			transform: translateY(-2px);
			@include pixel-shadow(2px, $purple-500);
		}

		&.active {
			background-color: $purple-600;
			border-color: $pink-500;
			@include pixel-shadow(2px, $pink-500);
		}

		@include mobile {
			padding: $space-2 $space-3;
			font-size: $text-sm;
		}
	}

	.nav-icon {
		font-size: $text-lg;

		@include mobile {
			font-size: $text-base;
		}
	}

	.nav-label {
		@include mobile {
			display: none;
		}

		@include respond-to($breakpoint-sm) {
			display: inline;
		}
	}

	// ----------------
	// MAIN CONTENT
	// ----------------
	.main {
		flex-grow: 1;
		width: 100%;
		padding-top: $space-8;
		padding-bottom: $space-8;
	}

	// ----------------
	// FOOTER
	// ----------------
	.footer {
		background-color: $gray-900;
		border-top: 4px solid $purple-500;
		margin-top: auto;
		@include pixel-shadow(-4px, $purple-700);
	}

	.footer-content {
		padding-top: $space-6;
		padding-bottom: $space-6;
		text-align: center;
	}

	.footer-text {
		margin-bottom: $space-2;
		font-size: $text-lg;

		.pixel-text {
			color: $purple-400;
		}
	}

	.footer-copyright {
		font-size: $text-sm;
		color: $text-secondary;
		font-family: $font-pixel-body;
	}
</style>
