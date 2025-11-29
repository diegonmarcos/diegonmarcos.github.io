<script lang="ts">
	import { base } from '$app/paths';
	import PixelIcon from '$lib/components/icons/PixelIcon.svelte';
	import PixelParticles from '$lib/components/effects/PixelParticles.svelte';

	const games = [
		{ title: 'Pinball', icon: 'pinball', href: `${base}/pinball`, color: 'purple' },
		{ title: 'Super Mario', icon: 'mario', href: `${base}/mario`, color: 'red' },
		{ title: 'Pac-Man', icon: 'pacman', href: `${base}/pac-man`, color: 'yellow' },
		{ title: 'Flappy Bird', icon: 'bird', href: `${base}/clumsy-bird`, color: 'cyan' }
	];

	const features = [
		{ title: 'Photos', icon: 'photo', href: `${base}/photos`, color: 'pink', desc: 'Travel memories' },
		{ title: 'Music', icon: 'music', href: `${base}/music`, color: 'purple', desc: 'Spotify vibes' },
		{ title: 'Stats', icon: 'stats', href: `${base}/stats`, color: 'green', desc: 'Activity tracking' }
	];
</script>

<PixelParticles />

<div class="fun-zone-home">
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-content">
			<div class="hero-icon">
				<PixelIcon icon="gamepad" size={120} color="#ec4899" />
			</div>
			<h1 class="hero-title" data-text="FUN ZONE">FUN ZONE</h1>
			<p class="hero-subtitle">Retro Arcade & Pixel Entertainment</p>
		</div>
	</section>

	<!-- Console CTA -->
	<section class="console-cta">
		<a href="{base}/console" class="console-btn">
			<div class="btn-glow"></div>
			<div class="btn-content">
				<span class="btn-icon">🕹️</span>
				<div class="btn-text">
					<span class="btn-title">ENTER THE CONSOLE</span>
					<span class="btn-desc">Trivia, Karaoke & More</span>
				</div>
				<span class="btn-arrow">→</span>
			</div>
		</a>
	</section>

	<!-- Games Grid -->
	<section class="section container">
		<h2 class="section-title">🎮 Quick Play</h2>
		<div class="games-grid">
			{#each games as game}
				<a href={game.href} class="game-card color-{game.color}">
					<div class="card-icon">
						<PixelIcon icon={game.icon} size={64} color="currentColor" />
					</div>
					<h3>{game.title}</h3>
					<span class="play-btn">PLAY</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- Features Grid -->
	<section class="section container">
		<h2 class="section-title">✨ Explore</h2>
		<div class="features-grid">
			{#each features as feature}
				<a href={feature.href} class="feature-card color-{feature.color}">
					<div class="card-icon">
						<PixelIcon icon={feature.icon} size={48} color="currentColor" />
					</div>
					<div class="card-info">
						<h3>{feature.title}</h3>
						<p>{feature.desc}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

<style lang="scss">
	@use '../styles/abstracts/variables' as *;
	@use '../styles/abstracts/mixins' as *;
	@use '../styles/effects/crt' as *;

	.fun-zone-home {
		min-height: 100vh;
		padding-bottom: $space-16;
	}

	// Hero Section
	.hero {
		text-align: center;
		padding: $space-16 $space-4;
		position: relative;

		@include mobile {
			padding: $space-8 $space-4;
		}
	}

	.hero-content {
		position: relative;
		z-index: 2;
	}

	.hero-icon {
		margin-bottom: $space-6;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-15px); }
	}

	.hero-title {
		font-family: $font-pixel-heading;
		font-size: clamp(3rem, 10vw, 5rem);
		color: $pink-500;
		margin: 0;
		text-shadow:
			4px 4px 0 $purple-700,
			0 0 30px $pink-500,
			0 0 60px rgba($pink-500, 0.5);
		@include glitch-effect;
	}

	.hero-subtitle {
		font-family: $font-pixel-body;
		font-size: $text-lg;
		color: $purple-400;
		margin-top: $space-4;
		letter-spacing: 0.1em;
	}

	// Console CTA
	.console-cta {
		display: flex;
		justify-content: center;
		padding: $space-8 $space-4;
	}

	.console-btn {
		position: relative;
		display: flex;
		align-items: center;
		padding: $space-6 $space-12;
		background: linear-gradient(135deg, rgba($purple-900, 0.9), rgba($gray-900, 0.95));
		border: 4px solid $pink-500;
		border-radius: 8px;
		text-decoration: none;
		overflow: hidden;
		@include transition(all);

		&:hover {
			transform: translateY(-4px) scale(1.02);
			border-color: $cyan-400;
			box-shadow:
				0 0 30px $pink-500,
				0 0 60px rgba($cyan-400, 0.3),
				0 10px 40px rgba(0, 0, 0, 0.5);

			.btn-glow {
				opacity: 1;
			}

			.btn-arrow {
				transform: translateX(5px);
				color: $cyan-400;
			}
		}

		.btn-glow {
			position: absolute;
			inset: 0;
			background: linear-gradient(45deg,
				rgba($pink-500, 0.2),
				rgba($cyan-400, 0.2),
				rgba($pink-500, 0.2)
			);
			background-size: 200% 200%;
			animation: gradient-shift 3s ease infinite;
			opacity: 0;
			@include transition(opacity);
		}

		.btn-content {
			position: relative;
			z-index: 2;
			display: flex;
			align-items: center;
			gap: $space-4;
		}

		.btn-icon {
			font-size: 3rem;
			animation: pulse 2s ease-in-out infinite;
		}

		.btn-text {
			display: flex;
			flex-direction: column;
			gap: $space-1;
			text-align: left;
		}

		.btn-title {
			font-family: $font-pixel-heading;
			font-size: $text-xl;
			color: $pink-500;
			text-shadow: 0 0 10px $pink-500;
		}

		.btn-desc {
			font-family: $font-pixel-body;
			font-size: $text-sm;
			color: $purple-400;
		}

		.btn-arrow {
			font-size: $text-2xl;
			color: $purple-500;
			@include transition(all);
		}
	}

	@keyframes gradient-shift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.1); }
	}

	// Sections
	.section {
		padding: $space-8 0;
	}

	.section-title {
		font-family: $font-pixel-heading;
		font-size: $text-2xl;
		color: $pink-500;
		text-align: center;
		margin-bottom: $space-8;
		text-shadow: 2px 2px 0 $purple-700;
	}

	// Games Grid
	.games-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: $space-6;

		@include mobile {
			grid-template-columns: repeat(2, 1fr);
			gap: $space-4;
		}
	}

	.game-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-4;
		padding: $space-8;
		background: rgba($gray-900, 0.9);
		border: 4px solid currentColor;
		border-radius: 8px;
		text-decoration: none;
		@include transition(all);

		&:hover {
			transform: translateY(-8px);
			box-shadow: 0 0 30px currentColor;

			.play-btn {
				background: currentColor;
				color: $background;
			}
		}

		h3 {
			font-family: $font-pixel-heading;
			font-size: $text-lg;
			color: $text-primary;
			margin: 0;
		}

		.card-icon {
			animation: float 3s ease-in-out infinite;
		}

		.play-btn {
			font-family: $font-pixel-body;
			font-size: $text-sm;
			padding: $space-2 $space-4;
			border: 2px solid currentColor;
			color: currentColor;
			@include transition(all);
		}

		// Color variants
		&.color-purple { color: $purple-500; }
		&.color-red { color: #ef4444; }
		&.color-yellow { color: $yellow-400; }
		&.color-cyan { color: $cyan-400; }
	}

	// Features Grid
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: $space-6;
	}

	.feature-card {
		display: flex;
		align-items: center;
		gap: $space-4;
		padding: $space-6;
		background: rgba($gray-900, 0.9);
		border: 3px solid currentColor;
		border-radius: 8px;
		text-decoration: none;
		@include transition(all);

		&:hover {
			transform: translateX(8px);
			box-shadow: 0 0 20px currentColor;
		}

		.card-info {
			h3 {
				font-family: $font-pixel-heading;
				font-size: $text-base;
				color: $text-primary;
				margin: 0 0 $space-1 0;
			}

			p {
				font-family: $font-pixel-body;
				font-size: $text-sm;
				color: $text-secondary;
				margin: 0;
			}
		}

		// Color variants
		&.color-pink { color: $pink-500; }
		&.color-purple { color: $purple-500; }
		&.color-green { color: #22c55e; }
	}
</style>
