<script lang="ts">
	import type { Track } from '$lib/types';

	interface Props {
		track: Track;
		showPlayedAt?: boolean;
	}

	let { track, showPlayedAt = false }: Props = $props();

	function formatPlayedAt(date: Date): string {
		const now = new Date();
		const diffMs = now.getTime() - date.getTime();
		const diffMins = Math.floor(diffMs / 60000);
		const diffHours = Math.floor(diffMins / 60);
		const diffDays = Math.floor(diffHours / 24);

		if (diffMins < 60) return `${diffMins}m ago`;
		if (diffHours < 24) return `${diffHours}h ago`;
		return `${diffDays}d ago`;
	}
</script>

<div class="track-item">
	<div class="track-album-art">
		{#if track.albumArt}
			<img src={track.albumArt} alt={track.album} />
		{:else}
			<span class="track-placeholder">🎵</span>
		{/if}
	</div>
	<div class="track-info">
		<div class="track-name">{track.name}</div>
		<div class="track-artist">{track.artist}</div>
		{#if showPlayedAt}
			<div class="track-played">{formatPlayedAt(track.playedAt)}</div>
		{/if}
	</div>
	<a href={track.spotifyUrl} target="_blank" rel="noopener noreferrer" class="track-link">
		<span class="track-link-icon">🎧</span>
	</a>
</div>

<style lang="scss">
	@use '../../../styles/abstracts/variables' as *;
	@use '../../../styles/abstracts/mixins' as *;

	.track-item {
		@include pixel-border($gray-700, 2px);
		background: $gray-800;
		padding: $space-3;
		display: flex;
		align-items: center;
		gap: $space-3;
		transition: all 300ms;

		&:hover {
			transform: translateX(4px);
			border-color: $purple-600;
		}
	}

	.track-album-art {
		width: 56px;
		height: 56px;
		border: 2px solid $purple-700;
		overflow: hidden;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $gray-900;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			image-rendering: pixelated;
		}
	}

	.track-placeholder {
		font-size: 1.5rem;
	}

	.track-info {
		flex: 1;
		min-width: 0;
	}

	.track-name {
		font-weight: bold;
		color: $text-primary;
		margin-bottom: $space-1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.track-artist {
		color: $text-secondary;
		font-size: 0.875rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.track-played {
		color: $purple-400;
		font-size: 0.75rem;
		margin-top: $space-1;
	}

	.track-link {
		@include pixel-border($purple-700, 2px);
		padding: $space-2;
		background: $purple-900;
		transition: all 300ms;
		flex-shrink: 0;

		&:hover {
			background: $purple-700;
			transform: scale(1.1);
		}
	}

	.track-link-icon {
		font-size: 1.25rem;
		display: block;
	}
</style>
