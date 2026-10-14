<script lang="ts">
  import type { StatsData } from '$lib/types';
  import Icon from './Icon.svelte';

  let { statsData }: { statsData: StatsData } = $props();

  function formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    }
    return num.toLocaleString();
  }

  let contactProfiles = $derived(
    statsData.socialProfiles.filter(p => p.category === 'contact')
  );
  let mainProfiles = $derived(
    statsData.socialProfiles.filter(p => p.category === 'profile')
  );
  let activityProfiles = $derived(
    statsData.socialProfiles.filter(p => p.category === 'activity')
  );
</script>

<div class="stats-dashboard fade-in-up">
  <!-- Header -->
  <div class="stats-header">
    <div class="header-icon">
      <Icon name="bar-chart-3" size={24} />
    </div>
    <h2 class="header-title mono">
      NERD_STATS <span class="dim">//</span> PERSONAL DATA DASHBOARD
    </h2>
    <div class="header-status">
      <span class="status-dot pulse"></span>
      <span class="status-text mono">LIVE</span>
    </div>
  </div>

  <!-- Summary Stats Row -->
  <div class="summary-row">
    <div class="summary-card total-media">
      <Icon name="database" size={28} />
      <div class="summary-content">
        <span class="summary-value mono">{formatNumber(statsData.lifetime.totalMedia)}</span>
        <span class="summary-label">TOTAL MEDIA</span>
      </div>
    </div>
    <div class="summary-card total-reviews">
      <Icon name="star" size={28} />
      <div class="summary-content">
        <span class="summary-value mono">{formatNumber(statsData.lifetime.totalReviews)}</span>
        <span class="summary-label">REVIEWS</span>
      </div>
    </div>
    <div class="summary-card people-reviewed">
      <Icon name="users" size={28} />
      <div class="summary-content">
        <span class="summary-value mono">{statsData.lifetime.peopleReviewed}</span>
        <span class="summary-label">PEOPLE REVIEWED</span>
      </div>
    </div>
  </div>

  <!-- Media Categories Grid -->
  <div class="section-header">
    <Icon name="folder" size={18} />
    <span class="mono">MEDIA_CONSUMPTION</span>
  </div>
  <div class="categories-grid">
    {#each statsData.categories as category}
      <div
        class="category-card"
        style="--card-accent: {category.accentColor}"
      >
        <div class="card-icon">
          <Icon name={category.icon} size={24} />
        </div>
        <div class="card-content">
          <div class="card-count mono">
            {formatNumber(category.count)}{#if category.countUnit}<span class="unit">{category.countUnit}</span>{/if}
          </div>
          <div class="card-label">{category.label}</div>
          {#if category.duration}
            <div class="card-duration mono">
              <Icon name="clock" size={12} />
              {category.duration}
            </div>
          {/if}
          {#if category.extraMetric}
            <div class="card-extra mono">
              <span class="extra-value">{category.extraMetric}</span>
              <span class="extra-label">{category.extraMetricLabel}</span>
            </div>
          {/if}
        </div>
        <div class="card-glow"></div>
      </div>
    {/each}
  </div>

  <!-- Fitness Stats -->
  <div class="section-header">
    <Icon name="dumbbell" size={18} />
    <span class="mono">FITNESS_METRICS</span>
  </div>
  <div class="fitness-row">
    <div class="fitness-card workouts">
      <div class="fitness-icon">
        <Icon name="flame" size={32} />
      </div>
      <div class="fitness-content">
        <span class="fitness-value mono">{statsData.lifetime.totalWorkouts}</span>
        <span class="fitness-label">WORKOUTS</span>
        <span class="fitness-duration mono">{statsData.lifetime.workoutDuration}</span>
      </div>
    </div>
    <div class="fitness-card weight">
      <div class="fitness-icon">
        <Icon name="weight" size={32} />
      </div>
      <div class="fitness-content">
        <span class="fitness-value mono">{statsData.lifetime.totalWeight}</span>
        <span class="fitness-label">TOTAL LIFTED</span>
      </div>
    </div>
    <div class="fitness-card measurements">
      <div class="fitness-icon">
        <Icon name="ruler" size={32} />
      </div>
      <div class="fitness-content">
        <span class="fitness-value mono">{statsData.lifetime.measurements}</span>
        <span class="fitness-label">MEASUREMENTS</span>
      </div>
    </div>
  </div>

  <!-- Social Connections -->
  <div class="section-header">
    <Icon name="share-2" size={18} />
    <span class="mono">SOCIAL_CONNECTIONS</span>
  </div>
  <div class="social-grid">
    <!-- Contact Section -->
    <div class="social-section">
      <div class="social-section-header mono">
        <Icon name="phone" size={14} />
        CONTACT
      </div>
      <div class="social-links">
        {#each contactProfiles as profile}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            style="--link-color: {profile.accentColor}"
          >
            <Icon name={profile.icon} size={18} />
            <span class="link-text">{profile.platform}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Profiles Section -->
    <div class="social-section">
      <div class="social-section-header mono">
        <Icon name="user" size={14} />
        PROFILES
      </div>
      <div class="social-links">
        {#each mainProfiles as profile}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            style="--link-color: {profile.accentColor}"
          >
            <Icon name={profile.icon} size={18} />
            <span class="link-text">{profile.platform}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Activity Section -->
    <div class="social-section">
      <div class="social-section-header mono">
        <Icon name="activity" size={14} />
        ACTIVITY
      </div>
      <div class="social-links">
        {#each activityProfiles as profile}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            style="--link-color: {profile.accentColor}"
          >
            <Icon name={profile.icon} size={18} />
            <span class="link-text">{profile.platform}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- Data Signature -->
  <div class="data-signature mono">
    <span class="signature-text">DATA_SNAPSHOT</span>
    <span class="signature-dot"></span>
    <span class="signature-date">{new Date().toISOString().split('T')[0]}</span>
    <span class="signature-dot"></span>
    <span class="signature-version">v2.0</span>
  </div>
</div>
