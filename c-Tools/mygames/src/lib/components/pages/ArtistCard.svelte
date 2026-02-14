<script lang="ts">
	import type { Artist } from '$lib/types';

	interface Props {
		artist: Artist;
	}

	let { artist }: Props = $props();
</script>

<a href={artist.spotifyUrl} target="_blank" rel="noopener noreferrer" class="artist-card hover-lift">
	<div class="artist-image">
		{#if artist.image}
			<img src={artist.image} alt={artist.name} />
		{:else}
			<span class="artist-placeholder">🎤</span>
		{/if}
	</div>
	<div class="artist-info">
		<h3 class="artist-name">{artist.name}</h3>
		{#if artist.genres.length > 0}
			<div class="artist-genres">
				{artist.genres.slice(0, 2).join(', ')}
			</div>
		{/if}
	</div>
</a>

<style lang="scss">
	@use '../../../styles/abstracts/variables' as *;
	@use '../../../styles/abstracts/mixins' as *;

	.artist-card {
		@include pixel-border($purple-700, 3px);
		background: $gray-800;
		overflow: hidden;
		transition: all 300ms;
		display: block;
		text-decoration: none;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 8px 0 $purple-700;
			border-color: $purple-500;
		}
	}

	.artist-image {
		aspect-ratio: 1;
		background: linear-gradient(135deg, $purple-900, $purple-800);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.artist-placeholder {
		font-size: 4rem;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.artist-info {
		padding: $space-3;
	}

	.artist-name {
		font-size: 1.125rem;
		color: $text-primary;
		margin-bottom: $space-2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.artist-genres {
		color: $text-secondary;
		font-size: 0.875rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
