<script lang="ts">
	import { base } from '$app/paths';
	// Home page with hero section
</script>

<div class="home">
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-content container">
			<div class="hero-avatar">
				<div class="avatar-pixel">
					🎮
				</div>
			</div>

			<h1 class="hero-title">
				<span class="title-line">Diego's</span>
				<span class="title-line accent">Digital Space</span>
			</h1>

			<p class="hero-subtitle">
				A pixel-perfect collection of photos, music, and adventures
			</p>

			<iframe
			  src="{base}/clumsy-bird-game/index.html"
			  style="width: 100%; max-width: 800px; border: 0; margin-top: 2rem; margin-bottom: 2rem;"
			  title="Clumsy Bird Game"
			></iframe>

			<div class="hero-links">
				<a href="{base}/photos" class="hero-link primary">
					<span class="link-icon">📷</span>
					<span class="link-text">Explore Photos</span>
				</a>
				<a href="{base}/music" class="hero-link secondary">
					<span class="link-icon">🎵</span>
					<span class="link-text">My Music</span>
				</a>
				<a href="{base}/stats" class="hero-link secondary">
					<span class="link-icon">📊</span>
					<span class="link-text">View Stats</span>
				</a>
				<a href="{base}/mario" class="hero-link secondary">
					<span class="link-icon">🍄</span>
					<span class="link-text">Play Mario</span>
				</a>
			</div>
		</div>

		<!-- Decorative pixel elements -->
		<div class="pixel-decoration top-left"></div>
		<div class="pixel-decoration top-right"></div>
		<div class="pixel-decoration bottom-left"></div>
		<div class="pixel-decoration bottom-right"></div>
	</section>

	<!-- Quick Info Section -->
	<section class="quick-info">
		<div class="container">
			<div class="info-grid">
				<div class="info-card">
					<div class="info-icon">📷</div>
					<h3 class="info-title">Photo Albums</h3>
					<p class="info-description">
						Browse through moments captured from travels, events, and adventures
					</p>
				</div>

				<div class="info-card">
					<div class="info-icon">🎵</div>
					<h3 class="info-title">Music Taste</h3>
					<p class="info-description">
						Discover my playlists, favorite tracks, and artists from Spotify
					</p>
				</div>

				<div class="info-card">
					<div class="info-icon">📊</div>
					<h3 class="info-title">Activity Stats</h3>
					<p class="info-description">
						Track endurance activities, achievements, and fitness milestones
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Coming Soon Badge -->
	<section class="status-badge">
		<div class="container">
			<div class="badge">
				<span class="badge-icon">🚧</span>
				<span class="badge-text">Currently under construction - More features coming soon!</span>
				<span class="badge-icon">🚧</span>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	@use '../styles/abstracts/variables' as *;
	@use '../styles/abstracts/mixins' as *;

	.home {
		width: 100%;
	}

	// ----------------
	// HERO SECTION
	// ----------------
	.hero {
		position: relative;
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, $gray-900 0%, $background 50%, $purple-900 100%);
		overflow: hidden;
		padding: $space-12 0;

		@include mobile {
			min-height: 60vh;
			padding: $space-8 0;
		}
	}

	.hero-content {
		text-align: center;
		z-index: 2;
	}

	.hero-avatar {
		margin-bottom: $space-8;
		@include flex-center;
	}

	.avatar-pixel {
		font-size: clamp(4rem, 10vw, 8rem);
		@include float(3s);
		filter: drop-shadow(0 0 20px rgba($purple-500, 0.5));
	}

	.hero-title {
		font-family: $font-pixel-heading;
		font-size: $text-3xl;
		margin-bottom: $space-6;
		line-height: $leading-tight;

		.title-line {
			display: block;
			margin-bottom: $space-2;

			&.accent {
				color: $pink-500;
				@include pixel-text-shadow($purple-500);
				@include shimmer;
			}
		}
	}

	.hero-subtitle {
		font-family: $font-pixel-body;
		font-size: $text-xl;
		color: $text-secondary;
		margin-bottom: $space-8;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;

		@include mobile {
			font-size: $text-lg;
		}
	}

	.hero-links {
		display: flex;
		gap: $space-4;
		justify-content: center;
		flex-wrap: wrap;
	}

	.hero-link {
		display: inline-flex;
		align-items: center;
		gap: $space-3;
		padding: $space-4 $space-6;
		font-family: $font-pixel-body;
		font-size: $text-lg;
		border: 3px solid;
		@include transition(all);
		position: relative;

		&.primary {
			background-color: $purple-600;
			border-color: $purple-400;
			color: $text-primary;

			&:hover {
				background-color: $purple-500;
				border-color: $pink-500;
				transform: translateY(-4px);
				@include pixel-shadow(4px, $pink-500);
			}
		}

		&.secondary {
			background-color: transparent;
			border-color: $purple-600;
			color: $purple-400;

			&:hover {
				background-color: rgba($purple-600, 0.3);
				border-color: $purple-400;
				transform: translateY(-4px);
				@include pixel-shadow(4px, $purple-600);
			}
		}

		@include mobile {
			padding: $space-3 $space-4;
			font-size: $text-base;
		}
	}

	.link-icon {
		font-size: $text-2xl;

		@include mobile {
			font-size: $text-xl;
		}
	}

	// Decorative pixel elements
	.pixel-decoration {
		position: absolute;
		width: 40px;
		height: 40px;
		background-color: $purple-500;
		@include pixel-shadow(4px, $purple-700);
		opacity: 0.3;

		&.top-left {
			top: 10%;
			left: 5%;
			@include float(4s);
		}

		&.top-right {
			top: 15%;
			right: 8%;
			@include float(5s);
		}

		&.bottom-left {
			bottom: 15%;
			left: 10%;
			@include float(6s);
		}

		&.bottom-right {
			bottom: 10%;
			right: 5%;
			@include float(3.5s);
		}

		@include mobile {
			width: 20px;
			height: 20px;
		}
	}

	// ----------------
	// QUICK INFO SECTION
	// ----------------
	.quick-info {
		padding: $space-16 0;
		background-color: $background;

		@include mobile {
			padding: $space-12 0;
		}
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: $space-8;

		@include mobile {
			grid-template-columns: 1fr;
			gap: $space-6;
		}
	}

	.info-card {
		background-color: $gray-800;
		border: 3px solid $purple-700;
		padding: $space-8;
		text-align: center;
		@include transition(all);

		&:hover {
			border-color: $purple-500;
			transform: translateY(-8px);
			@include pixel-shadow(4px, $purple-500);
		}
	}

	.info-icon {
		font-size: clamp(3rem, 6vw, 4rem);
		margin-bottom: $space-4;
		@include pulse;
	}

	.info-title {
		font-family: $font-pixel-heading;
		font-size: $text-lg;
		color: $purple-400;
		margin-bottom: $space-3;
	}

	.info-description {
		font-family: $font-pixel-body;
		font-size: $text-base;
		color: $text-secondary;
		line-height: $leading-relaxed;
	}

	// ----------------
	// STATUS BADGE
	// ----------------
	.status-badge {
		padding: $space-8 0 $space-12 0;

		@include mobile {
			padding: $space-6 0 $space-8 0;
		}
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: $space-3;
		padding: $space-4 $space-6;
		background-color: rgba($yellow-400, 0.1);
		border: 2px solid $yellow-400;
		color: $yellow-400;
		font-family: $font-pixel-body;
		font-size: $text-base;
		margin: 0 auto;
		@include pulse;

		@include mobile {
			flex-direction: column;
			text-align: center;
			padding: $space-3;
		}
	}

	.badge-icon {
		font-size: $text-xl;

		@include mobile {
			display: none;
		}
	}

	.badge-text {
		@include mobile {
			font-size: $text-sm;
		}
	}
</style>
