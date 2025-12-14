<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Google I/O Pinball - Play Now</title>
	<meta
		name="description"
		content="Play the official Google I/O 2022 Pinball game built with Flutter. Features Android, Flutter, Chrome, and Firebase mascots with realistic physics."
	/>
</svelte:head>

<div class="pinball-page">
	<div class="game-header">
		<h1>🎯 Google I/O Pinball</h1>
		<p class="game-description">
			Official Google I/O 2022 game built with Flutter & Flame engine. Tap sides to control flippers!
		</p>
		<div class="game-badges">
			<span class="badge">Flutter Powered</span>
			<span class="badge">Mobile Optimized</span>
			<span class="badge">Touch Controls</span>
		</div>
	</div>

	<div class="game-container">
		<iframe
			src="https://pinball.flutter.dev"
			title="Google I/O Pinball Game"
			class="game-frame"
			allow="accelerometer; gyroscope"
			loading="lazy"
		></iframe>
	</div>

	<div class="game-info">
		<div class="info-card">
			<h3>🎮 How to Play</h3>
			<ul>
				<li><strong>Desktop:</strong> Use arrow keys or click flipper buttons</li>
				<li><strong>Mobile:</strong> Tap left/right sides of screen for flippers</li>
				<li><strong>Goal:</strong> Score points and complete character challenges</li>
			</ul>
		</div>

		<div class="info-card">
			<h3>⭐ Features</h3>
			<ul>
				<li>Realistic physics with Forge2D engine</li>
				<li>Google mascots: Android, Flutter, Chrome, Firebase</li>
				<li>Progressive difficulty and achievements</li>
				<li>Beautiful pixel art and animations</li>
			</ul>
		</div>

		<div class="info-card">
			<h3>🔗 Credits</h3>
			<p>
				Built by <strong>Google</strong> & <strong>Very Good Ventures</strong> for Google I/O 2022.
				<br />
				<a
					href="https://github.com/flutter/pinball"
					target="_blank"
					rel="noopener noreferrer"
					class="source-link"
				>
					View Source on GitHub →
				</a>
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/abstracts/variables' as *;
	@use '../../styles/abstracts/mixins' as *;

	.pinball-page {
		max-width: 1400px;
		margin: 0 auto;
		padding: $space-4;
	}

	.game-header {
		text-align: center;
		margin-bottom: $space-8;

		h1 {
			font-family: $font-pixel-heading;
			font-size: clamp(1.5rem, 4vw, 2.5rem);
			color: $pink-500;
			margin-bottom: $space-4;
			text-shadow: 2px 2px 0 $purple-700;
		}

		.game-description {
			font-family: $font-pixel-body;
			font-size: $text-lg;
			color: $text-secondary;
			margin-bottom: $space-4;
			max-width: 600px;
			margin-left: auto;
			margin-right: auto;
		}

		.game-badges {
			display: flex;
			gap: $space-3;
			justify-content: center;
			flex-wrap: wrap;

			.badge {
				padding: $space-2 $space-4;
				background: $purple-700;
				border: 2px solid $purple-500;
				color: $purple-300;
				font-family: $font-pixel-body;
				font-size: $text-sm;
				@include transition(all);

				&:hover {
					background: $purple-600;
					transform: translateY(-2px);
				}
			}
		}
	}

	.game-container {
		position: relative;
		width: 100%;
		max-width: 800px;
		margin: 0 auto $space-12;
		background: $gray-900;
		border: 6px solid $purple-500;
		border-radius: 8px;
		overflow: hidden;
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.5),
			0 0 20px rgba($purple-500, 0.3);

		// Aspect ratio container for responsive sizing
		&::before {
			content: '';
			display: block;
			padding-top: 133.33%; // 3:4 aspect ratio for portrait pinball

			@include mobile {
				padding-top: 150%; // Taller on mobile
			}
		}

		.game-frame {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: none;
			background: $background;
		}
	}

	.game-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: $space-6;
		margin-top: $space-8;

		.info-card {
			background: rgba($gray-800, 0.8);
			border: 3px solid $purple-600;
			padding: $space-6;
			border-radius: 4px;
			backdrop-filter: blur(10px);

			h3 {
				font-family: $font-pixel-heading;
				font-size: $text-lg;
				color: $cyan-400;
				margin-bottom: $space-4;
			}

			ul {
				list-style: none;
				padding: 0;

				li {
					font-family: $font-pixel-body;
					font-size: $text-base;
					color: $text-secondary;
					margin-bottom: $space-2;
					padding-left: $space-4;
					position: relative;

					&::before {
						content: '▸';
						position: absolute;
						left: 0;
						color: $purple-400;
					}

					strong {
						color: $text-primary;
					}
				}
			}

			p {
				font-family: $font-pixel-body;
				font-size: $text-base;
				color: $text-secondary;
				line-height: 1.6;
			}

			.source-link {
				display: inline-block;
				margin-top: $space-3;
				color: $pink-500;
				text-decoration: none;
				font-weight: bold;
				@include transition(all);

				&:hover {
					color: $pink-400;
					transform: translateX(4px);
				}
			}
		}
	}

	@include mobile {
		.game-header {
			h1 {
				font-size: 1.5rem;
			}

			.game-description {
				font-size: $text-base;
			}
		}

		.game-container {
			border-width: 4px;
		}

		.game-info {
			grid-template-columns: 1fr;
		}
	}
</style>
