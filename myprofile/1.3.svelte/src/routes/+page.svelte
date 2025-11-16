<script lang="ts">
	import { base } from '$app/paths';
	import PixelIcon from '$lib/components/icons/PixelIcon.svelte';
	import PixelParticles from '$lib/components/effects/PixelParticles.svelte';

	// Card data for masonry grid
	const cards = [
		{
			type: 'hero',
			title: "Diego's Pixel Universe",
			subtitle: 'Where retro gaming meets modern life',
			color: 'purple',
			size: 'large'
		},
		{
			type: 'game',
			title: 'Super Mario',
			icon: 'mario',
			href: `${base}/mario`,
			color: 'red',
			size: 'medium'
		},
		{
			type: 'game',
			title: 'Pac-Man',
			icon: 'pacman',
			href: `${base}/pac-man`,
			color: 'yellow',
			size: 'medium'
		},
		{
			type: 'game',
			title: 'Flappy Bird',
			icon: 'bird',
			href: `${base}/clumsy-bird`,
			color: 'cyan',
			size: 'medium'
		},
		{
			type: 'feature',
			title: 'Photo Gallery',
			description: 'Travel memories & adventures',
			icon: 'photo',
			href: `${base}/photos`,
			color: 'pink',
			size: 'large'
		},
		{
			type: 'feature',
			title: 'Music Vibes',
			description: 'Spotify playlists & favorites',
			icon: 'music',
			href: `${base}/music`,
			color: 'purple',
			size: 'medium'
		},
		{
			type: 'feature',
			title: 'Activity Stats',
			description: 'Fitness & endurance tracking',
			icon: 'stats',
			href: `${base}/stats`,
			color: 'green',
			size: 'medium'
		},
		{
			type: 'social',
			title: 'Connect',
			items: ['GitHub', 'Strava', 'Spotify'],
			size: 'small',
			color: 'cyan'
		},
		{
			type: 'quote',
			text: 'Life is a game, make it pixelated',
			size: 'medium',
			color: 'pink'
		}
	];
</script>

<PixelParticles />

<div class="pixel-home">
	<!-- Parallax Background Layers -->
	<div class="parallax-bg layer-1"></div>
	<div class="parallax-bg layer-2"></div>
	<div class="parallax-bg layer-3"></div>

	<!-- Main Content -->
	<div class="container">
		<!-- Masonry Grid -->
		<div class="masonry-grid">
			{#each cards as card, i}
				{#if card.type === 'hero'}
					<div class="card card-hero card-{card.size} color-{card.color}" data-index={i}>
						<div class="card-content">
							<div class="glitch-title" data-text={card.title}>
								<h1>{card.title}</h1>
							</div>
							<p class="subtitle">{card.subtitle}</p>
							<div class="pixel-avatar">
								<PixelIcon icon="profile" size={80} color="#ec4899" />
							</div>
						</div>
						<div class="card-glow"></div>
					</div>
				{:else if card.type === 'game'}
					<a
						href={card.href}
						class="card card-game card-{card.size} color-{card.color}"
						data-index={i}
					>
						<div class="card-content">
							<div class="icon-wrapper">
								<PixelIcon icon={card.icon} size={64} color="currentColor" />
							</div>
							<h3>{card.title}</h3>
							<div class="arcade-btn">PLAY</div>
						</div>
						<div class="card-scanlines"></div>
					</a>
				{:else if card.type === 'feature'}
					<a
						href={card.href}
						class="card card-feature card-{card.size} color-{card.color}"
						data-index={i}
					>
						<div class="card-content">
							<div class="icon-wrapper">
								<PixelIcon icon={card.icon} size={48} color="currentColor" />
							</div>
							<h3>{card.title}</h3>
							<p class="description">{card.description}</p>
						</div>
						<div class="hover-effect"></div>
					</a>
				{:else if card.type === 'social'}
					<div class="card card-social card-{card.size} color-{card.color}" data-index={i}>
						<div class="card-content">
							<h4>{card.title}</h4>
							<div class="social-icons">
								{#each card.items as item}
									<div class="social-item">{item}</div>
								{/each}
							</div>
						</div>
					</div>
				{:else if card.type === 'quote'}
					<div class="card card-quote card-{card.size} color-{card.color}" data-index={i}>
						<div class="card-content">
							<blockquote>"{card.text}"</blockquote>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use '../styles/abstracts/variables' as *;
	@use '../styles/abstracts/mixins' as *;
	@use '../styles/effects/crt' as *;

	.pixel-home {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
		padding: $space-16 0;

		@include mobile {
			padding: $space-8 0;
		}
	}

	// Parallax Background Layers
	.parallax-bg {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 0;
		opacity: 0.1;

		&.layer-1 {
			background: radial-gradient(circle at 20% 50%, $purple-900 0%, transparent 50%);
			animation: parallax-1 20s ease-in-out infinite;
		}

		&.layer-2 {
			background: radial-gradient(circle at 80% 50%, $pink-500 0%, transparent 50%);
			animation: parallax-2 15s ease-in-out infinite;
		}

		&.layer-3 {
			background: radial-gradient(circle at 50% 80%, $cyan-400 0%, transparent 50%);
			animation: parallax-3 25s ease-in-out infinite;
		}
	}

	@keyframes parallax-1 {
		0%, 100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-30px, 30px);
		}
	}

	@keyframes parallax-2 {
		0%, 100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(30px, -30px);
		}
	}

	@keyframes parallax-3 {
		0%, 100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(20px, 20px);
		}
	}

	// Masonry Grid
	.masonry-grid {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-auto-rows: 200px;
		gap: $space-6;
		padding: $space-4;

		@include mobile {
			grid-template-columns: 1fr;
			grid-auto-rows: 180px;
			gap: $space-4;
		}
	}

	// Card Base Styles
	.card {
		position: relative;
		border: 4px solid currentColor;
		background: rgba($gray-900, 0.9);
		backdrop-filter: blur(10px);
		padding: $space-6;
		cursor: pointer;
		overflow: hidden;
		@include transition(all);
		image-rendering: pixelated;

		// Size variants
		&.card-large {
			grid-row: span 2;
			grid-column: span 2;

			@include mobile {
				grid-column: span 1;
			}
		}

		&.card-medium {
			grid-row: span 1;
		}

		&.card-small {
			grid-row: span 1;
		}

		// Color variants
		&.color-purple {
			color: $purple-400;
			border-color: $purple-500;
		}

		&.color-pink {
			color: $pink-500;
			border-color: $pink-500;
		}

		&.color-cyan {
			color: $cyan-400;
			border-color: $cyan-400;
		}

		&.color-yellow {
			color: $yellow-400;
			border-color: $yellow-400;
		}

		&.color-red {
			color: #ef4444;
			border-color: #ef4444;
		}

		&.color-green {
			color: #22c55e;
			border-color: #22c55e;
		}

		// Hover effects
		&:hover {
			transform: translateY(-8px) scale(1.02);
			@include retro-glow(currentColor);
			box-shadow:
				0 0 20px currentColor,
				0 0 40px currentColor,
				0 8px 32px rgba(0, 0, 0, 0.5);
		}

		// Stagger animation
		animation: card-enter 0.6s ease-out backwards;
		animation-delay: calc(var(--index, 0) * 0.05s);
	}

	@keyframes card-enter {
		from {
			opacity: 0;
			transform: translateY(40px) scale(0.9);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.card-content {
		position: relative;
		z-index: 2;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: $space-3;
	}

	// Hero Card
	.card-hero {
		.glitch-title {
			@include glitch-effect;
			position: relative;

			h1 {
				font-family: $font-pixel-heading;
				font-size: clamp(2rem, 5vw, 3.5rem);
				margin: 0;
			}
		}

		.subtitle {
			font-family: $font-pixel-body;
			font-size: $text-lg;
			color: $text-secondary;
			margin: $space-4 0;
		}

		.pixel-avatar {
			margin-top: $space-4;
			animation: float 3s ease-in-out infinite;
		}
	}

	// Game Cards
	.card-game {
		.icon-wrapper {
			@include float(3s);
		}

		h3 {
			font-family: $font-pixel-heading;
			font-size: $text-xl;
			margin: $space-2 0;
		}

		.arcade-btn {
			margin-top: $space-4;
			padding: $space-2 $space-6;
			background: currentColor;
			color: $background;
			font-family: $font-pixel-body;
			font-weight: bold;
			border: 3px solid currentColor;
			@include transition(all);
			animation: pulse 2s ease-in-out infinite;
		}

		&:hover .arcade-btn {
			transform: scale(1.1);
			box-shadow: 0 0 20px currentColor;
		}

		.card-scanlines {
			@include crt-scanlines;
		}
	}

	// Feature Cards
	.card-feature {
		.icon-wrapper {
			@include pulse;
		}

		h3 {
			font-family: $font-pixel-heading;
			font-size: $text-lg;
			margin: $space-2 0;
		}

		.description {
			font-family: $font-pixel-body;
			font-size: $text-sm;
			color: $text-secondary;
		}
	}

	// Social Card
	.card-social {
		h4 {
			font-family: $font-pixel-heading;
			font-size: $text-base;
			margin-bottom: $space-3;
		}

		.social-icons {
			display: flex;
			flex-direction: column;
			gap: $space-2;
		}

		.social-item {
			font-family: $font-pixel-body;
			font-size: $text-sm;
			padding: $space-1 $space-3;
			background: transparent;
			border: 2px solid currentColor;
			@include transition(all);
			position: relative;

			&::before {
				content: '';
				position: absolute;
				inset: 0;
				background: currentColor;
				opacity: 0.1;
				@include transition(opacity);
			}

			&:hover {
				transform: translateX(4px);

				&::before {
					opacity: 0.3;
				}
			}
		}
	}

	// Quote Card
	.card-quote {
		display: flex;
		align-items: center;
		justify-content: center;

		blockquote {
			font-family: $font-pixel-body;
			font-size: $text-lg;
			font-style: italic;
			color: currentColor;
			margin: 0;
			line-height: 1.6;
		}
	}
</style>
