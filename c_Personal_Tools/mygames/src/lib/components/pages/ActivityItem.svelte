<script lang="ts">
	import type { Activity } from '$lib/types';

	interface Props {
		activity: Activity;
	}

	let { activity }: Props = $props();

	function formatDistance(meters: number): string {
		return (meters / 1000).toFixed(2);
	}

	function formatDuration(seconds: number): string {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
	}

	function formatElevation(meters: number): string {
		return Math.round(meters).toString();
	}

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	}

	function getActivityIcon(type: Activity['type']): string {
		const icons = {
			Run: '🏃',
			Ride: '🚴',
			Hike: '🥾',
			Walk: '🚶'
		};
		return icons[type] || '🏃';
	}
</script>

<a href={activity.stravaUrl} target="_blank" rel="noopener noreferrer" class="activity-item">
	<div class="activity-header">
		<span class="activity-icon">{getActivityIcon(activity.type)}</span>
		<div class="activity-title-group">
			<h3 class="activity-name">{activity.name}</h3>
			<span class="activity-date">{formatDate(activity.date)}</span>
		</div>
	</div>
	<div class="activity-stats">
		<div class="stat">
			<span class="stat-label">Distance</span>
			<span class="stat-value">{formatDistance(activity.distance)} km</span>
		</div>
		<div class="stat">
			<span class="stat-label">Time</span>
			<span class="stat-value">{formatDuration(activity.duration)}</span>
		</div>
		<div class="stat">
			<span class="stat-label">Elevation</span>
			<span class="stat-value">{formatElevation(activity.elevationGain)} m</span>
		</div>
	</div>
</a>

<style lang="scss">
	@use '../../../styles/abstracts/variables' as *;
	@use '../../../styles/abstracts/mixins' as *;

	.activity-item {
		@include pixel-border($gray-700, 2px);
		background: $gray-800;
		padding: $space-4;
		transition: all 300ms;
		display: block;
		text-decoration: none;

		&:hover {
			transform: translateX(4px);
			border-color: $purple-600;
		}
	}

	.activity-header {
		display: flex;
		align-items: center;
		gap: $space-3;
		margin-bottom: $space-3;
	}

	.activity-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.activity-title-group {
		flex: 1;
		min-width: 0;
	}

	.activity-name {
		font-size: 1.125rem;
		color: $text-primary;
		margin-bottom: $space-1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.activity-date {
		color: $text-secondary;
		font-size: 0.875rem;
	}

	.activity-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: $space-3;
		padding-top: $space-3;
		border-top: 2px solid $gray-700;
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: $space-1;
	}

	.stat-label {
		color: $text-secondary;
		font-size: 0.75rem;
		text-transform: uppercase;
	}

	.stat-value {
		color: $purple-400;
		font-weight: bold;
		font-size: 1rem;
	}
</style>
