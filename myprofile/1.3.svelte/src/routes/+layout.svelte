<script lang="ts">
	import { base } from '$app/paths';
	import '../styles/global.scss';
	import Analytics from '$lib/components/common/Analytics.svelte';
	import PixelIcon from '$lib/components/icons/PixelIcon.svelte';

	let { children } = $props();

	// Get current path for active nav highlighting
	let currentPath = $state('/');
	let menuOpen = $state(false);

	// Update on mount and navigation
	if (typeof window !== 'undefined') {
		currentPath = window.location.pathname;
	}

	const navItems = [
		{ href: '/', icon: 'home', label: 'Home' },
		{ href: '/photos', icon: 'photo', label: 'Photos' },
		{ href: '/music', icon: 'music', label: 'Music' },
		{ href: '/stats', icon: 'stats', label: 'Stats' },
		{ href: '/pinball', icon: 'pinball', label: 'Pinball' },
		{ href: '/mario', icon: 'mario', label: 'Mario' },
		{ href: '/pac-man', icon: 'pacman', label: 'Pac-Man' },
		{ href: '/clumsy-bird', icon: 'bird', label: 'Flappy' }
	];
</script>

<svelte:head>
	<title>Diego's Pixel Universe - Retro Gaming Meets Modern Life</title>
	<meta
		name="description"
		content="A pixel art personal space showcasing photos, music, fitness stats, and retro games"
	/>

	<!-- Google Tag Manager Consent Mode -->
	{@html `
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('consent', 'default', {
			'ad_storage': 'denied',
			'analytics_storage': 'denied',
			'ad_personalization': 'denied',
			'ad_user_data': 'denied',
			'wait_for_update': 500
		});
		gtag('set', 'ads_data_redaction', true);
	</script>
	`}

	<!-- Google Tag Manager -->
	{@html `
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TN9SV57D');</script>
	`}
	<!-- End Google Tag Manager -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TN9SV57D"
	height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="app-container crt-screen">
	<!-- Arcade Header -->
	<header class="arcade-header">
		<div class="header-content container">
			<!-- Logo -->
			<a href="{base}/" class="logo-arcade">
				<div class="logo-screen">
					<PixelIcon icon="profile" size={48} color="#ec4899" />
				</div>
				<div class="logo-text">
					<span class="logo-name glitch" data-text="DIEGO">DIEGO</span>
					<span class="logo-subtitle">PIXEL UNIVERSE</span>
				</div>
			</a>

			<!-- Arcade Controls (Navigation) -->
			<nav class="arcade-controls">
				<button class="menu-toggle" onclick={() => (menuOpen = !menuOpen)} aria-label="Toggle navigation menu">
					<span></span>
					<span></span>
					<span></span>
				</button>

				<div class="controls-panel" class:open={menuOpen}>
					{#each navItems as { href, icon, label }}
						{@const isActive = currentPath === `${base}${href}`}
						<a href="{base}{href}" class="control-btn" class:active={isActive}>
							<div class="btn-face">
								<div class="btn-icon">
									<PixelIcon {icon} size={24} color={isActive ? '#ec4899' : '#a855f7'} />
								</div>
								<span class="btn-label">{label}</span>
							</div>
							<div class="btn-shadow"></div>
						</a>
					{/each}
				</div>
			</nav>
		</div>

		<!-- Decorative LED Strip -->
		<div class="led-strip">
			{#each Array(20) as _, i}
				<div class="led" style="--delay: {i * 0.1}s"></div>
			{/each}
		</div>
	</header>

	<!-- Main Content -->
	<main class="main-screen">
		<div class="scanlines"></div>
		{@render children()}
	</main>

	<!-- Arcade Footer -->
	<footer class="arcade-footer">
		<div class="footer-content container">
			<div class="footer-display">
				<div class="pixel-heart">
					<PixelIcon icon="heart" size={20} color="#ec4899" />
				</div>
				<p class="footer-text">MADE WITH PIXELS & PASSION</p>
			</div>
			<a href="https://linktree.diegonmarcos.com" target="_blank" rel="noopener" class="linktree-btn">
				<span class="btn-icon">🔗</span>
				<span class="btn-text">LINKTREE</span>
				<span class="btn-arrow">→</span>
			</a>
			<div class="footer-score">
				<span class="label">YEAR</span>
				<span class="value">{new Date().getFullYear()}</span>
			</div>
			<div class="footer-credits">
				<span class="credit-text">INSERT COIN TO CONTINUE</span>
			</div>
		</div>
	</footer>
</div>

<!-- Analytics Component -->
<Analytics />

<style lang="scss">
	@use '../styles/abstracts/variables' as *;
	@use '../styles/abstracts/mixins' as *;
	@use '../styles/effects/crt' as *;

	// App Container
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: $background;
		position: relative;
	}

	// CRT Screen Effect
	.crt-screen {
		@include crt-curve;

		&::before {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: repeating-linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.1) 0px,
				rgba(0, 0, 0, 0.1) 1px,
				transparent 1px,
				transparent 2px
			);
			pointer-events: none;
			z-index: 9999;
		}
	}

	// Arcade Header
	.arcade-header {
		background: linear-gradient(180deg, $gray-900 0%, $gray-800 100%);
		border-bottom: 6px solid $purple-500;
		box-shadow:
			0 4px 0 $purple-700,
			0 8px 20px rgba(0, 0, 0, 0.5);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: $space-4 $space-6;
		gap: $space-6;

		@include mobile {
			flex-direction: column;
			padding: $space-3;
			gap: $space-3;
		}
	}

	// Logo
	.logo-arcade {
		display: flex;
		align-items: center;
		gap: $space-4;
		@include transition(transform);

		&:hover {
			transform: scale(1.05);
		}

		.logo-screen {
			padding: $space-2;
			background: $gray-800;
			border: 4px solid $purple-500;
			@include retro-glow($pink-500);
			@include float(3s);
		}

		.logo-text {
			display: flex;
			flex-direction: column;
			gap: $space-1;
		}

		.logo-name {
			font-family: $font-pixel-heading;
			font-size: $text-2xl;
			color: $pink-500;
			text-shadow:
				2px 2px 0 $purple-700,
				0 0 10px $pink-500;
			position: relative;

			&.glitch {
				@include glitch-effect;
			}
		}

		.logo-subtitle {
			font-family: $font-pixel-body;
			font-size: $text-xs;
			color: $purple-400;
			letter-spacing: 0.1em;
		}
	}

	// Arcade Controls (Navigation)
	.arcade-controls {
		position: relative;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: $space-2;

		span {
			width: 30px;
			height: 4px;
			background: $purple-400;
			@include transition(all);
		}

		@include mobile {
			display: flex;
		}
	}

	.controls-panel {
		display: flex;
		gap: $space-2;
		flex-wrap: wrap;

		@include mobile {
			position: absolute;
			top: 100%;
			right: 0;
			background: $gray-900;
			border: 4px solid $purple-500;
			padding: $space-4;
			flex-direction: column;
			min-width: 200px;
			display: none;

			&.open {
				display: flex;
			}
		}
	}

	.control-btn {
		position: relative;
		display: block;
		@include transition(all);

		.btn-face {
			position: relative;
			z-index: 2;
			display: flex;
			align-items: center;
			gap: $space-2;
			padding: $space-3 $space-4;
			background: linear-gradient(180deg, $gray-700 0%, $gray-800 100%);
			border: 3px solid $purple-600;
			border-radius: 4px;
			@include transition(all);

			.btn-label {
				font-family: $font-pixel-body;
				font-size: $text-sm;
				color: $purple-300;
				white-space: nowrap;

				@include mobile {
					font-size: $text-xs;
				}
			}
		}

		.btn-shadow {
			position: absolute;
			bottom: -4px;
			left: 0;
			right: 0;
			height: 6px;
			background: $purple-800;
			border-radius: 0 0 4px 4px;
			@include transition(all);
		}

		&:hover .btn-face {
			transform: translateY(-2px);
			border-color: $purple-400;
			box-shadow: 0 0 15px rgba($purple-500, 0.5);
		}

		&:active .btn-face {
			transform: translateY(2px);
		}

		&:active .btn-shadow {
			height: 2px;
		}

		&.active .btn-face {
			background: linear-gradient(180deg, $purple-700 0%, $purple-800 100%);
			border-color: $pink-500;
			@include retro-glow($pink-500);

			.btn-label {
				color: $pink-400;
			}
		}
	}

	// LED Strip
	.led-strip {
		display: flex;
		justify-content: space-evenly;
		padding: $space-2 0;
		background: $gray-900;
		border-top: 2px solid $gray-700;
	}

	.led {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: $purple-600;
		box-shadow: 0 0 10px $purple-500;
		animation: led-blink 2s ease-in-out infinite;
		animation-delay: var(--delay, 0s);
	}

	@keyframes led-blink {
		0%, 100% {
			opacity: 0.3;
		}
		50% {
			opacity: 1;
			box-shadow: 0 0 15px $purple-400;
		}
	}

	// Main Screen
	.main-screen {
		flex-grow: 1;
		position: relative;
		padding: $space-8 0;

		@include mobile {
			padding: $space-4 0;
		}
	}

	.scanlines {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.05) 0px,
			rgba(0, 0, 0, 0.05) 2px,
			transparent 2px,
			transparent 4px
		);
		pointer-events: none;
		z-index: 1;
		animation: scanline-move 8s linear infinite;
	}

	@keyframes scanline-move {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(8px);
		}
	}

	// Arcade Footer
	.arcade-footer {
		background: linear-gradient(180deg, $gray-800 0%, $gray-900 100%);
		border-top: 6px solid $purple-500;
		box-shadow:
			0 -4px 0 $purple-700,
			0 -8px 20px rgba(0, 0, 0, 0.5);
		margin-top: auto;
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: $space-6;
		gap: $space-4;

		@include mobile {
			flex-direction: column;
			text-align: center;
			padding: $space-4;
		}
	}

	.footer-display {
		display: flex;
		align-items: center;
		gap: $space-3;

		.pixel-heart {
			@include pulse;
		}

		.footer-text {
			font-family: $font-pixel-body;
			font-size: $text-sm;
			color: $purple-400;
			letter-spacing: 0.05em;
		}
	}

	.footer-score {
		display: flex;
		gap: $space-2;
		align-items: center;
		font-family: $font-pixel-body;

		.label {
			font-size: $text-xs;
			color: $text-secondary;
		}

		.value {
			font-size: $text-lg;
			color: $pink-500;
			font-weight: bold;
		}
	}

	.footer-credits {
		.credit-text {
			font-family: $font-pixel-body;
			font-size: $text-xs;
			color: $cyan-400;
			animation: blink 1.5s step-end infinite;
		}
	}

	@keyframes blink {
		0%, 50% {
			opacity: 1;
		}
		51%, 100% {
			opacity: 0;
		}
	}

	// Shimmer animation
	@keyframes shimmer {
		0% { background-position: 200% 0; }
		100% { background-position: -200% 0; }
	}

	// Linktree Button
	.linktree-btn {
		display: flex;
		align-items: center;
		gap: $space-2;
		padding: $space-3 $space-4;
		background: linear-gradient(110deg, $gray-700 0%, $gray-700 35%, lighten($gray-700, 10%) 50%, $gray-700 65%, $gray-700 100%);
		background-size: 200% 100%;
		animation: shimmer 3s linear infinite;
		border: 3px solid $purple-600;
		border-radius: 4px;
		font-family: $font-pixel-body;
		color: $purple-300;
		text-decoration: none;
		@include transition(all);

		.btn-icon {
			font-size: $text-lg;
		}

		.btn-text {
			font-size: $text-sm;
			letter-spacing: 0.1em;
			color: $cyan-400;
		}

		.btn-arrow {
			font-size: $text-sm;
			color: $purple-400;
			opacity: 0;
			transform: translateX(-5px);
			@include transition(all);
		}

		&:hover {
			border-color: $pink-500;
			@include retro-glow($pink-500);
			transform: translateY(-2px);
			background: linear-gradient(110deg, lighten($gray-700, 5%) 0%, lighten($gray-700, 5%) 35%, lighten($gray-700, 15%) 50%, lighten($gray-700, 5%) 65%, lighten($gray-700, 5%) 100%);
			background-size: 200% 100%;

			.btn-text {
				color: $pink-400;
			}

			.btn-arrow {
				opacity: 1;
				transform: translateX(0);
				color: $pink-400;
			}
		}
	}
</style>
