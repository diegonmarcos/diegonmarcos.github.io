<script lang="ts">
	import type { Album } from '$lib/types';

	interface Props {
		album: Album;
		onclick?: () => void;
	}

	let { album, onclick }: Props = $props();

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
	}
</script>

<div class="album-card hover-lift" role="button" tabindex="0" onclick={onclick} onkeydown={(e) => e.key === 'Enter' && onclick?.()}>
	<div class="album-cover">
		<span class="album-emoji">{album.coverImage}</span>
		<div class="album-overlay">
			<span class="view-album">View Album</span>
		</div>
	</div>
	<div class="album-info">
		<h3 class="album-title">{album.title}</h3>
		<div class="album-meta">
			<span class="album-count">{album.imageCount} photos</span>
			<span class="album-divider">•</span>
			<span class="album-date">{formatDate(album.date)}</span>
		</div>
		<span class="album-category">{album.category}</span>
	</div>
</div>

<style lang="scss">
	@use '../../../styles/abstracts/variables' as *;
	@use '../../../styles/abstracts/mixins' as *;

	.album-card {
		@include pixel-border($purple-700, 3px);
		background: $gray-800;
		cursor: pointer;
		transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
		overflow: hidden;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 8px 0 $purple-700;

			.album-overlay {
				opacity: 1;
			}
		}
	}

	.album-cover {
		position: relative;
		aspect-ratio: 4 / 3;
		background: linear-gradient(135deg, $purple-900, $purple-800);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.album-emoji {
		font-size: 4rem;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.album-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 300ms;
	}

	.view-album {
		@include pixel-border($purple-500, 2px);
		padding: $space-2 $space-4;
		background: $purple-700;
		color: $text-primary;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 0.875rem;
	}

	.album-info {
		padding: $space-4;
	}

	.album-title {
		font-size: 1.25rem;
		margin-bottom: $space-2;
		color: $text-primary;
	}

	.album-meta {
		display: flex;
		align-items: center;
		gap: $space-2;
		color: $text-secondary;
		font-size: 0.875rem;
		margin-bottom: $space-2;
	}

	.album-divider {
		color: $purple-500;
	}

	.album-category {
		display: inline-block;
		padding: $space-1 $space-3;
		background: $purple-900;
		color: $purple-300;
		font-size: 0.75rem;
		text-transform: uppercase;
		border: 2px solid $purple-700;
	}
</style>
