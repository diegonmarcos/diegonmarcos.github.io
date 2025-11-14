<script lang="ts">
	// Photo Albums Page
	// TODO: Replace with actual data from photo service

	// Mock album data
	const albums = [
		{
			id: '1',
			title: 'Summer Adventures',
			coverImage: '🏖️',
			imageCount: 24,
			category: 'travel',
			date: new Date('2024-07-15')
		},
		{
			id: '2',
			title: 'Mountain Hiking',
			coverImage: '⛰️',
			imageCount: 18,
			category: 'nature',
			date: new Date('2024-06-20')
		},
		{
			id: '3',
			title: 'City Life',
			coverImage: '🌆',
			imageCount: 32,
			category: 'events',
			date: new Date('2024-05-10')
		},
		{
			id: '4',
			title: 'Food Journey',
			coverImage: '🍜',
			imageCount: 15,
			category: 'other',
			date: new Date('2024-04-05')
		},
		{
			id: '5',
			title: 'Sunset Views',
			coverImage: '🌅',
			imageCount: 12,
			category: 'nature',
			date: new Date('2024-03-22')
		},
		{
			id: '6',
			title: 'Urban Exploration',
			coverImage: '🏙️',
			imageCount: 28,
			category: 'travel',
			date: new Date('2024-02-18')
		}
	];

	let selectedCategory = $state('all');
	let sortBy = $state('newest');

	// Filter and sort albums
	let filteredAlbums = $derived.by(() => {
		const filtered = selectedCategory === 'all'
			? albums
			: albums.filter(album => album.category === selectedCategory);

		const sorted = sortBy === 'newest'
			? [...filtered].sort((a, b) => b.date.getTime() - a.date.getTime())
			: [...filtered].sort((a, b) => a.date.getTime() - b.date.getTime());

		return sorted;
	});

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Photo Albums - Diego's Profile</title>
	<meta name="description" content="Browse through photo albums from travels and adventures" />
</svelte:head>

<div class="photos-page">
	<div class="container">
		<!-- Page Header -->
		<header class="page-header">
			<h1 class="page-title">
				<span class="title-icon">📷</span>
				Photo Albums
			</h1>
			<p class="page-subtitle">
				A collection of moments captured from travels, events, and adventures
			</p>
		</header>

		<!-- Filters -->
		<div class="filters">
			<div class="filter-group">
				<label for="category" class="filter-label">Category:</label>
				<select
					id="category"
					class="filter-select"
					bind:value={selectedCategory}
				>
					<option value="all">All</option>
					<option value="travel">Travel</option>
					<option value="nature">Nature</option>
					<option value="events">Events</option>
					<option value="other">Other</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="sort" class="filter-label">Sort by:</label>
				<select
					id="sort"
					class="filter-select"
					bind:value={sortBy}
				>
					<option value="newest">Newest First</option>
					<option value="oldest">Oldest First</option>
				</select>
			</div>
		</div>

		<!-- Albums Grid -->
		<div class="albums-grid">
			{#each filteredAlbums as album (album.id)}
				<article class="album-card hover-lift">
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
				</article>
			{/each}
		</div>

		<!-- Empty State -->
		{#if filteredAlbums.length === 0}
			<div class="empty-state">
				<div class="empty-icon">📭</div>
				<p class="empty-text">No albums found in this category</p>
				<button
					class="reset-button"
					onclick={() => { selectedCategory = 'all'; }}
				>
					Show All Albums
				</button>
			</div>
		{/if}

		<!-- Coming Soon Notice -->
		<div class="notice">
			<div class="notice-content">
				<span class="notice-icon">🚧</span>
				<p class="notice-text">
					Album galleries and lightbox viewer coming soon! Currently showing placeholder albums.
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/abstracts/variables' as *;
	@use '../../styles/abstracts/mixins' as *;

	.photos-page {
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
		max-width: 600px;
		margin: 0 auto;
	}

	// ----------------
	// FILTERS
	// ----------------
	.filters {
		display: flex;
		gap: $space-6;
		justify-content: center;
		margin-bottom: $space-12;
		flex-wrap: wrap;

		@include mobile {
			flex-direction: column;
			gap: $space-4;
		}
	}

	.filter-group {
		display: flex;
		align-items: center;
		gap: $space-3;
	}

	.filter-label {
		font-family: $font-pixel-body;
		font-size: $text-base;
		color: $purple-400;
	}

	.filter-select {
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
	// ALBUMS GRID
	// ----------------
	.albums-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: $space-8;
		margin-bottom: $space-12;

		@include mobile {
			grid-template-columns: 1fr;
			gap: $space-6;
		}
	}

	.album-card {
		background-color: $gray-800;
		border: 3px solid $purple-700;
		overflow: hidden;
		@include transition(all);
		cursor: pointer;

		&:hover {
			border-color: $purple-500;
			transform: translateY(-8px);
			@include pixel-shadow(6px, $purple-500);

			.album-overlay {
				opacity: 1;
			}
		}
	}

	.album-cover {
		position: relative;
		aspect-ratio: 4 / 3;
		background: linear-gradient(135deg, $purple-900 0%, $gray-900 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.album-emoji {
		font-size: clamp(4rem, 8vw, 6rem);
		@include float(4s);
		filter: drop-shadow(0 0 20px rgba($purple-500, 0.5));
	}

	.album-overlay {
		position: absolute;
		inset: 0;
		background-color: rgba($purple-900, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		@include transition(opacity);
	}

	.view-album {
		font-family: $font-pixel-body;
		font-size: $text-lg;
		color: $pink-500;
		padding: $space-3 $space-6;
		border: 2px solid $pink-500;
		@include shimmer;
	}

	.album-info {
		padding: $space-6;
	}

	.album-title {
		font-family: $font-pixel-heading;
		font-size: $text-lg;
		color: $purple-400;
		margin-bottom: $space-3;
	}

	.album-meta {
		display: flex;
		align-items: center;
		gap: $space-2;
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-secondary;
		margin-bottom: $space-3;
	}

	.album-divider {
		color: $purple-600;
	}

	.album-category {
		display: inline-block;
		font-family: $font-pixel-body;
		font-size: $text-xs;
		color: $cyan-400;
		background-color: rgba($cyan-400, 0.1);
		border: 1px solid $cyan-400;
		padding: $space-1 $space-3;
		text-transform: uppercase;
	}

	// ----------------
	// EMPTY STATE
	// ----------------
	.empty-state {
		text-align: center;
		padding: $space-16 $space-4;
	}

	.empty-icon {
		font-size: clamp(4rem, 10vw, 6rem);
		margin-bottom: $space-6;
		opacity: 0.5;
	}

	.empty-text {
		font-family: $font-pixel-body;
		font-size: $text-xl;
		color: $text-secondary;
		margin-bottom: $space-6;
	}

	.reset-button {
		font-family: $font-pixel-body;
		font-size: $text-base;
		color: $text-primary;
		background-color: $purple-600;
		border: 2px solid $purple-400;
		padding: $space-3 $space-6;
		cursor: pointer;
		@include transition(all);

		&:hover {
			background-color: $purple-500;
			transform: translateY(-2px);
			@include pixel-shadow(3px, $purple-400);
		}
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
		justify-content: center;
		gap: $space-4;
		padding: $space-6;
		background-color: rgba($yellow-400, 0.1);
		border: 2px solid $yellow-400;

		@include mobile {
			flex-direction: column;
			text-align: center;
		}
	}

	.notice-icon {
		font-size: $text-2xl;
		@include pulse;
	}

	.notice-text {
		font-family: $font-pixel-body;
		font-size: $text-base;
		color: $yellow-400;
		margin: 0;
	}
</style>
