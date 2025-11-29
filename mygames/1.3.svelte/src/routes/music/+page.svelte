<script lang="ts">
	// Music Page - Spotify Integration Placeholder
	// TODO: Implement actual Spotify API integration

	// Mock data for playlists
	const playlists = [
		{
			id: '1',
			name: 'Coding Focus',
			trackCount: 42,
			coverEmoji: '💻'
		},
		{
			id: '2',
			name: 'Workout Energy',
			trackCount: 38,
			coverEmoji: '🏋️'
		},
		{
			id: '3',
			name: 'Chill Vibes',
			trackCount: 56,
			coverEmoji: '🌊'
		},
		{
			id: '4',
			name: 'Travel Tunes',
			trackCount: 31,
			coverEmoji: '✈️'
		}
	];

	// Mock recently played tracks
	const recentTracks = [
		{ id: '1', name: 'Electric Feel', artist: 'MGMT', album: 'Oracular Spectacular', playedAt: '2 hours ago' },
		{ id: '2', name: 'Take On Me', artist: 'a-ha', album: 'Hunting High and Low', playedAt: '3 hours ago' },
		{ id: '3', name: 'Africa', artist: 'Toto', album: 'Toto IV', playedAt: '5 hours ago' },
		{ id: '4', name: 'September', artist: 'Earth, Wind & Fire', album: 'The Best of Earth, Wind & Fire Vol. 1', playedAt: '7 hours ago' },
		{ id: '5', name: 'Dreams', artist: 'Fleetwood Mac', album: 'Rumours', playedAt: '1 day ago' }
	];

	// Mock top artists
	const topArtists = [
		{ id: '1', name: 'Daft Punk', emoji: '🎧', genres: ['Electronic', 'House'] },
		{ id: '2', name: 'Tame Impala', emoji: '🌀', genres: ['Psychedelic', 'Rock'] },
		{ id: '3', name: 'The Weeknd', emoji: '🌙', genres: ['R&B', 'Pop'] },
		{ id: '4', name: 'Mac DeMarco', emoji: '🎸', genres: ['Indie', 'Rock'] },
		{ id: '5', name: 'Khruangbin', emoji: '🌴', genres: ['Psychedelic', 'Funk'] }
	];

	let timeRange = $state('4weeks');
</script>

<svelte:head>
	<title>Music - Diego's Profile</title>
	<meta name="description" content="Explore my music taste, playlists, and favorite artists" />
</svelte:head>

<div class="music-page">
	<div class="container">
		<!-- Page Header -->
		<header class="page-header">
			<h1 class="page-title">
				<span class="title-icon">🎵</span>
				Music Taste
			</h1>
			<p class="page-subtitle">
				My playlists, favorite tracks, and artists from Spotify
			</p>
		</header>

		<!-- Time Range Selector -->
		<div class="time-range-selector">
			<label for="timeRange" class="selector-label">Time Range:</label>
			<select
				id="timeRange"
				class="selector-dropdown"
				bind:value={timeRange}
			>
				<option value="4weeks">Last 4 Weeks</option>
				<option value="6months">Last 6 Months</option>
				<option value="alltime">All Time</option>
			</select>
		</div>

		<!-- Playlists Section -->
		<section class="section">
			<h2 class="section-title">
				<span class="section-icon">📀</span>
				My Playlists
			</h2>
			<div class="playlists-grid">
				{#each playlists as playlist (playlist.id)}
					<article class="playlist-card hover-lift">
						<div class="playlist-cover">
							<span class="playlist-emoji">{playlist.coverEmoji}</span>
						</div>
						<div class="playlist-info">
							<h3 class="playlist-name">{playlist.name}</h3>
							<p class="playlist-tracks">{playlist.trackCount} tracks</p>
						</div>
						<div class="playlist-action">
							<span class="action-text">▶ Play on Spotify</span>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<!-- Recently Played Section -->
		<section class="section">
			<h2 class="section-title">
				<span class="section-icon">🎶</span>
				Recently Played
			</h2>
			<div class="tracks-list">
				{#each recentTracks as track (track.id)}
					<article class="track-item">
						<div class="track-cover">
							<span class="track-icon">🎵</span>
						</div>
						<div class="track-info">
							<h3 class="track-name">{track.name}</h3>
							<p class="track-artist">{track.artist}</p>
							<p class="track-album">{track.album}</p>
						</div>
						<div class="track-timestamp">
							<span class="timestamp-text">{track.playedAt}</span>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<!-- Top Artists Section -->
		<section class="section">
			<h2 class="section-title">
				<span class="section-icon">🎤</span>
				Top Artists
			</h2>
			<div class="artists-grid">
				{#each topArtists as artist (artist.id)}
					<article class="artist-card hover-lift">
						<div class="artist-avatar">
							<span class="artist-emoji">{artist.emoji}</span>
						</div>
						<h3 class="artist-name">{artist.name}</h3>
						<div class="artist-genres">
							{#each artist.genres as genre}
								<span class="genre-tag">{genre}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</section>

		<!-- Spotify Connection Notice -->
		<div class="notice">
			<div class="notice-content">
				<span class="notice-icon">🎧</span>
				<div class="notice-text-block">
					<p class="notice-title">Spotify Integration Coming Soon!</p>
					<p class="notice-description">
						Currently showing mock data. Real-time Spotify integration with OAuth will be implemented in the next phase.
					</p>
				</div>
				<button class="connect-button" disabled>
					<span class="button-icon">🔒</span>
					<span class="button-text">Connect Spotify</span>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/abstracts/variables' as *;
	@use '../../styles/abstracts/mixins' as *;

	.music-page {
		min-height: 80vh;
		padding-bottom: $space-16;
	}

	// ----------------
	// PAGE HEADER
	// ----------------
	.page-header {
		text-align: center;
		margin-bottom: $space-12;
	}

	.page-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $space-4;
		font-family: $font-pixel-heading;
		font-size: $text-3xl;
		margin-bottom: $space-4;
		@include pixel-text-shadow($purple-500);
	}

	.title-icon {
		font-size: clamp(2.5rem, 6vw, 3.5rem);
		@include float(3s);
	}

	.page-subtitle {
		font-family: $font-pixel-body;
		font-size: $text-lg;
		color: $text-secondary;
	}

	// ----------------
	// TIME RANGE SELECTOR
	// ----------------
	.time-range-selector {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $space-3;
		margin-bottom: $space-12;
	}

	.selector-label {
		font-family: $font-pixel-body;
		font-size: $text-base;
		color: $purple-400;
	}

	.selector-dropdown {
		background-color: $gray-800;
		border: 2px solid $purple-600;
		color: $text-primary;
		font-family: $font-pixel-body;
		font-size: $text-base;
		padding: $space-2 $space-4;
		cursor: pointer;
		@include transition(all);

		&:hover {
			border-color: $purple-400;
			background-color: rgba($purple-600, 0.2);
		}

		&:focus {
			outline: 2px solid $cyan-400;
			outline-offset: 2px;
		}
	}

	// ----------------
	// SECTIONS
	// ----------------
	.section {
		margin-bottom: $space-16;
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: $space-3;
		font-family: $font-pixel-heading;
		font-size: $text-2xl;
		color: $pink-500;
		margin-bottom: $space-8;
		@include pixel-text-shadow($purple-600);
	}

	.section-icon {
		font-size: $text-2xl;
	}

	// ----------------
	// PLAYLISTS
	// ----------------
	.playlists-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: $space-6;

		@include mobile {
			grid-template-columns: 1fr;
		}
	}

	.playlist-card {
		background-color: $gray-800;
		border: 3px solid $purple-700;
		padding: $space-6;
		@include transition(all);
		cursor: pointer;

		&:hover {
			border-color: $purple-500;
			@include pixel-shadow(4px, $purple-500);

			.playlist-action {
				opacity: 1;
			}
		}
	}

	.playlist-cover {
		aspect-ratio: 1;
		background: linear-gradient(135deg, $purple-900 0%, $pink-500 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: $space-4;
	}

	.playlist-emoji {
		font-size: clamp(3rem, 6vw, 4rem);
		@include float(4s);
	}

	.playlist-info {
		margin-bottom: $space-3;
	}

	.playlist-name {
		font-family: $font-pixel-heading;
		font-size: $text-lg;
		color: $purple-400;
		margin-bottom: $space-2;
	}

	.playlist-tracks {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-secondary;
		margin: 0;
	}

	.playlist-action {
		opacity: 0;
		@include transition(opacity);
	}

	.action-text {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $cyan-400;
	}

	// ----------------
	// TRACKS LIST
	// ----------------
	.tracks-list {
		display: flex;
		flex-direction: column;
		gap: $space-4;
	}

	.track-item {
		display: flex;
		align-items: center;
		gap: $space-4;
		background-color: $gray-800;
		border: 2px solid $purple-700;
		padding: $space-4;
		@include transition(all);

		&:hover {
			border-color: $purple-500;
			transform: translateX(4px);
			@include pixel-shadow(4px, $purple-600);
		}

		@include mobile {
			flex-wrap: wrap;
		}
	}

	.track-cover {
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, $purple-700 0%, $pink-500 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.track-icon {
		font-size: $text-2xl;
	}

	.track-info {
		flex-grow: 1;
		min-width: 0;
	}

	.track-name {
		font-family: $font-pixel-heading;
		font-size: $text-base;
		color: $purple-400;
		margin-bottom: $space-1;
		@include truncate;
	}

	.track-artist {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-primary;
		margin-bottom: $space-1;
		@include truncate;
	}

	.track-album {
		font-family: $font-pixel-body;
		font-size: $text-xs;
		color: $text-secondary;
		margin: 0;
		@include truncate;
	}

	.track-timestamp {
		flex-shrink: 0;
	}

	.timestamp-text {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-secondary;
	}

	// ----------------
	// ARTISTS GRID
	// ----------------
	.artists-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: $space-6;

		@include mobile {
			grid-template-columns: repeat(2, 1fr);
			gap: $space-4;
		}
	}

	.artist-card {
		background-color: $gray-800;
		border: 3px solid $purple-700;
		padding: $space-6;
		text-align: center;
		@include transition(all);

		&:hover {
			border-color: $purple-500;
			transform: scale(1.05);
			@include pixel-shadow(4px, $purple-500);
		}
	}

	.artist-avatar {
		width: 100px;
		height: 100px;
		margin: 0 auto $space-4;
		background: linear-gradient(135deg, $purple-900 0%, $purple-600 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.artist-emoji {
		font-size: clamp(2.5rem, 5vw, 3rem);
	}

	.artist-name {
		font-family: $font-pixel-heading;
		font-size: $text-base;
		color: $purple-400;
		margin-bottom: $space-3;
	}

	.artist-genres {
		display: flex;
		flex-wrap: wrap;
		gap: $space-2;
		justify-content: center;
	}

	.genre-tag {
		font-family: $font-pixel-body;
		font-size: $text-xs;
		color: $cyan-400;
		background-color: rgba($cyan-400, 0.1);
		border: 1px solid $cyan-400;
		padding: $space-1 $space-2;
	}

	// ----------------
	// NOTICE
	// ----------------
	.notice {
		margin-top: $space-12;
	}

	.notice-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: $space-6;
		padding: $space-8;
		background: linear-gradient(135deg, rgba($purple-900, 0.5) 0%, rgba($purple-700, 0.3) 100%);
		border: 3px solid $purple-600;

		@include mobile {
			flex-direction: column;
			text-align: center;
		}
	}

	.notice-icon {
		font-size: clamp(2.5rem, 5vw, 3rem);
		flex-shrink: 0;
		@include pulse;
	}

	.notice-text-block {
		flex-grow: 1;
	}

	.notice-title {
		font-family: $font-pixel-heading;
		font-size: $text-lg;
		color: $purple-400;
		margin-bottom: $space-2;
	}

	.notice-description {
		font-family: $font-pixel-body;
		font-size: $text-base;
		color: $text-secondary;
		margin: 0;
	}

	.connect-button {
		display: flex;
		align-items: center;
		gap: $space-2;
		padding: $space-4 $space-6;
		background-color: $gray-700;
		border: 2px solid $gray-600;
		color: $text-secondary;
		font-family: $font-pixel-body;
		font-size: $text-base;
		cursor: not-allowed;
		opacity: 0.6;

		@include mobile {
			width: 100%;
			justify-content: center;
		}
	}

	.button-icon {
		font-size: $text-lg;
	}
</style>
