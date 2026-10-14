<script lang="ts">
	// Stats Page - Strava Integration Placeholder
	// TODO: Implement actual Strava API integration

	// Mock overall statistics
	const yearStats = {
		totalDistance: 487.3, // km
		totalActivities: 42,
		totalElevation: 5280, // meters
		totalTime: 38.5 // hours
	};

	// Mock recent activities
	const recentActivities = [
		{
			id: '1',
			name: 'Morning Trail Run',
			type: 'Run',
			distance: 12.4,
			duration: '1h 15m',
			elevation: 320,
			date: '2 hours ago',
			emoji: '🏃'
		},
		{
			id: '2',
			name: 'Evening Bike Ride',
			type: 'Ride',
			distance: 32.7,
			duration: '1h 45m',
			elevation: 580,
			date: '1 day ago',
			emoji: '🚴'
		},
		{
			id: '3',
			name: 'Mountain Hike',
			type: 'Hike',
			distance: 8.5,
			duration: '2h 30m',
			elevation: 720,
			date: '2 days ago',
			emoji: '🥾'
		},
		{
			id: '4',
			name: 'City Run',
			type: 'Run',
			distance: 10.2,
			duration: '58m',
			elevation: 145,
			date: '3 days ago',
			emoji: '🏃'
		},
		{
			id: '5',
			name: 'Long Ride',
			type: 'Ride',
			distance: 45.8,
			duration: '2h 15m',
			elevation: 890,
			date: '5 days ago',
			emoji: '🚴'
		}
	];

	// Mock achievements
	const achievements = [
		{
			id: '1',
			type: 'distance',
			title: 'Longest Run',
			value: '30.5 km',
			date: 'Jun 15, 2024',
			emoji: '🏆'
		},
		{
			id: '2',
			type: 'elevation',
			title: 'Highest Climb',
			value: '1,245 m',
			date: 'Jul 22, 2024',
			emoji: '⛰️'
		},
		{
			id: '3',
			type: 'streak',
			title: 'Activity Streak',
			value: '12 days',
			date: 'Aug 2024',
			emoji: '🔥'
		},
		{
			id: '4',
			type: 'speed',
			title: 'Fastest 5K',
			value: '22:34',
			date: 'May 8, 2024',
			emoji: '⚡'
		}
	];

	let selectedYear = $state('2024');

	function formatNumber(num: number): string {
		return new Intl.NumberFormat('en-US').format(num);
	}
</script>

<svelte:head>
	<title>Activity Stats - Fun Zone</title>
	<meta name="description" content="Track my endurance activities, achievements, and fitness milestones" />
</svelte:head>

<div class="stats-page">
	<div class="container">
		<!-- Page Header -->
		<header class="page-header">
			<h1 class="page-title">
				<span class="title-icon">📊</span>
				Activity Stats
			</h1>
			<p class="page-subtitle">
				Endurance activities, achievements, and fitness milestones
			</p>
		</header>

		<!-- Year Selector -->
		<div class="year-selector">
			<label for="year" class="selector-label">Year:</label>
			<select
				id="year"
				class="selector-dropdown"
				bind:value={selectedYear}
			>
				<option value="2024">2024</option>
				<option value="2023">2023</option>
				<option value="2022">2022</option>
				<option value="alltime">All Time</option>
			</select>
		</div>

		<!-- Overall Statistics -->
		<section class="section">
			<h2 class="section-title">
				<span class="section-icon">📈</span>
				Overall Statistics
			</h2>
			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-icon">🎯</div>
					<div class="stat-value">{formatNumber(yearStats.totalDistance)} km</div>
					<div class="stat-label">Total Distance</div>
				</div>

				<div class="stat-card">
					<div class="stat-icon">🏃</div>
					<div class="stat-value">{yearStats.totalActivities}</div>
					<div class="stat-label">Activities</div>
				</div>

				<div class="stat-card">
					<div class="stat-icon">⛰️</div>
					<div class="stat-value">{formatNumber(yearStats.totalElevation)} m</div>
					<div class="stat-label">Elevation Gain</div>
				</div>

				<div class="stat-card">
					<div class="stat-icon">⏱️</div>
					<div class="stat-value">{yearStats.totalTime}h</div>
					<div class="stat-label">Total Time</div>
				</div>
			</div>
		</section>

		<!-- Recent Activities -->
		<section class="section">
			<h2 class="section-title">
				<span class="section-icon">🏃</span>
				Recent Activities
			</h2>
			<div class="activities-list">
				{#each recentActivities as activity (activity.id)}
					<article class="activity-item">
						<div class="activity-emoji">
							{activity.emoji}
						</div>
						<div class="activity-content">
							<h3 class="activity-name">{activity.name}</h3>
							<div class="activity-details">
								<span class="detail">
									<span class="detail-icon">📏</span>
									{activity.distance} km
								</span>
								<span class="detail-divider">•</span>
								<span class="detail">
									<span class="detail-icon">⏱️</span>
									{activity.duration}
								</span>
								<span class="detail-divider">•</span>
								<span class="detail">
									<span class="detail-icon">⬆️</span>
									{activity.elevation} m
								</span>
							</div>
							<div class="activity-type">{activity.type}</div>
						</div>
						<div class="activity-timestamp">
							<span class="timestamp-text">{activity.date}</span>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<!-- Achievements -->
		<section class="section">
			<h2 class="section-title">
				<span class="section-icon">🏆</span>
				Achievements & Records
			</h2>
			<div class="achievements-grid">
				{#each achievements as achievement (achievement.id)}
					<article class="achievement-card hover-lift">
						<div class="achievement-badge">
							<span class="badge-emoji">{achievement.emoji}</span>
						</div>
						<div class="achievement-info">
							<h3 class="achievement-title">{achievement.title}</h3>
							<div class="achievement-value">{achievement.value}</div>
							<div class="achievement-date">{achievement.date}</div>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<!-- Strava Connection Notice -->
		<div class="notice">
			<div class="notice-content">
				<span class="notice-icon">🔌</span>
				<div class="notice-text-block">
					<p class="notice-title">Strava Integration Coming Soon!</p>
					<p class="notice-description">
						Currently showing mock data. Real-time Strava API integration will bring live activity tracking, detailed statistics, and route maps.
					</p>
				</div>
				<button class="connect-button" disabled>
					<span class="button-icon">🔒</span>
					<span class="button-text">Connect Strava</span>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/abstracts/variables' as *;
	@use '../../styles/abstracts/mixins' as *;

	.stats-page {
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
	// YEAR SELECTOR
	// ----------------
	.year-selector {
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
	// STATS GRID
	// ----------------
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: $space-6;

		@include mobile {
			grid-template-columns: repeat(2, 1fr);
			gap: $space-4;
		}
	}

	.stat-card {
		background: linear-gradient(135deg, $purple-900 0%, $purple-700 100%);
		border: 3px solid $purple-600;
		padding: $space-8;
		text-align: center;
		@include transition(all);

		&:hover {
			border-color: $purple-400;
			transform: translateY(-4px);
			@include pixel-shadow(4px, $purple-500);
		}
	}

	.stat-icon {
		font-size: clamp(2.5rem, 5vw, 3rem);
		margin-bottom: $space-4;
		@include pulse;
	}

	.stat-value {
		font-family: $font-pixel-heading;
		font-size: $text-2xl;
		color: $cyan-400;
		margin-bottom: $space-2;
	}

	.stat-label {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-secondary;
		text-transform: uppercase;
	}

	// ----------------
	// ACTIVITIES LIST
	// ----------------
	.activities-list {
		display: flex;
		flex-direction: column;
		gap: $space-4;
	}

	.activity-item {
		display: flex;
		align-items: center;
		gap: $space-4;
		background-color: $gray-800;
		border: 2px solid $purple-700;
		padding: $space-6;
		@include transition(all);

		&:hover {
			border-color: $purple-500;
			transform: translateX(4px);
			@include pixel-shadow(4px, $purple-600);
		}

		@include mobile {
			flex-wrap: wrap;
			padding: $space-4;
		}
	}

	.activity-emoji {
		font-size: clamp(2.5rem, 5vw, 3rem);
		flex-shrink: 0;
	}

	.activity-content {
		flex-grow: 1;
		min-width: 0;
	}

	.activity-name {
		font-family: $font-pixel-heading;
		font-size: $text-lg;
		color: $purple-400;
		margin-bottom: $space-2;
	}

	.activity-details {
		display: flex;
		align-items: center;
		gap: $space-2;
		flex-wrap: wrap;
		margin-bottom: $space-2;
	}

	.detail {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-secondary;
		display: flex;
		align-items: center;
		gap: $space-1;
	}

	.detail-icon {
		font-size: $text-base;
	}

	.detail-divider {
		color: $purple-600;
	}

	.activity-type {
		display: inline-block;
		font-family: $font-pixel-body;
		font-size: $text-xs;
		color: $cyan-400;
		background-color: rgba($cyan-400, 0.1);
		border: 1px solid $cyan-400;
		padding: $space-1 $space-3;
		text-transform: uppercase;
	}

	.activity-timestamp {
		flex-shrink: 0;

		@include mobile {
			width: 100%;
		}
	}

	.timestamp-text {
		font-family: $font-pixel-body;
		font-size: $text-sm;
		color: $text-secondary;
	}

	// ----------------
	// ACHIEVEMENTS
	// ----------------
	.achievements-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: $space-6;

		@include mobile {
			grid-template-columns: 1fr;
		}
	}

	.achievement-card {
		background-color: $gray-800;
		border: 3px solid $purple-700;
		padding: $space-6;
		display: flex;
		align-items: center;
		gap: $space-4;
		@include transition(all);

		&:hover {
			border-color: $pink-500;
			@include pixel-shadow(4px, $pink-500);
		}
	}

	.achievement-badge {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, $yellow-400 0%, $pink-500 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		@include pixel-shadow(3px, rgba($yellow-400, 0.3));
	}

	.badge-emoji {
		font-size: clamp(2rem, 4vw, 2.5rem);
		@include float(4s);
	}

	.achievement-info {
		flex-grow: 1;
	}

	.achievement-title {
		font-family: $font-pixel-heading;
		font-size: $text-base;
		color: $purple-400;
		margin-bottom: $space-2;
	}

	.achievement-value {
		font-family: $font-pixel-heading;
		font-size: $text-xl;
		color: $cyan-400;
		margin-bottom: $space-1;
	}

	.achievement-date {
		font-family: $font-pixel-body;
		font-size: $text-xs;
		color: $text-secondary;
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
