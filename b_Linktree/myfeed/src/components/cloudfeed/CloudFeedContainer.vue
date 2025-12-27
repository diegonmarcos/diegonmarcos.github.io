<script setup lang="ts">
interface FeedChannel {
  icon: string
  name: string
  url: string
  fullUrl: string
}

const channels: FeedChannel[] = [
  { icon: '🌐', name: 'public', url: 'rss.diegonmarcos.com/public', fullUrl: 'https://rss.diegonmarcos.com/public' },
  { icon: '🌐', name: 'github', url: 'rss.diegonmarcos.com/github', fullUrl: 'https://rss.diegonmarcos.com/github' },
  { icon: '🔒', name: 'alerts', url: 'rss.diegonmarcos.com/alerts', fullUrl: 'https://rss.diegonmarcos.com/alerts' },
  { icon: '🔒', name: 'backup', url: 'rss.diegonmarcos.com/backup', fullUrl: 'https://rss.diegonmarcos.com/backup' },
  { icon: '🔒', name: 'home', url: 'rss.diegonmarcos.com/home', fullUrl: 'https://rss.diegonmarcos.com/home' },
  { icon: '🔒', name: 'cron', url: 'rss.diegonmarcos.com/cron', fullUrl: 'https://rss.diegonmarcos.com/cron' },
  { icon: '🔒', name: 'deploy', url: 'rss.diegonmarcos.com/deploy', fullUrl: 'https://rss.diegonmarcos.com/deploy' },
  { icon: '🔒', name: 'security', url: 'rss.diegonmarcos.com/security', fullUrl: 'https://rss.diegonmarcos.com/security' },
  { icon: '🔒', name: 'test', url: 'rss.diegonmarcos.com/test', fullUrl: 'https://rss.diegonmarcos.com/test' }
]
</script>

<template>
  <div class="cloudfeed-container">
    <div class="channels-section">
      <h3 class="channels-title">Feed Channels</h3>
      <table class="channels-table">
        <thead>
          <tr>
            <th></th>
            <th>Channel</th>
            <th>URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="channel in channels" :key="channel.name">
            <td class="lock-icon">{{ channel.icon }}</td>
            <td>{{ channel.name }}</td>
            <td>{{ channel.url }}</td>
            <td>
              <a :href="channel.fullUrl" target="_blank" class="open-btn">Open</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="channels-links">
        <a href="https://diegonmarcos.github.io/cloud/feed_docs.html" class="channel-admin-link">Documentation</a>
        <span class="separator">|</span>
        <a href="https://rss.diegonmarcos.com" target="_blank" class="channel-admin-link">Open Dashboard →</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cloudfeed-container {
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.channels-section {
  background: var(--bg-secondary, #161b22);
  border: 1px solid var(--border-default, #30363d);
  border-radius: 12px;
  padding: 1.5rem;
}

.channels-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary, #e6edf3);
  margin-bottom: 1rem;
}

.channels-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.channels-table th,
.channels-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border-muted, #21262d);
}

.channels-table th {
  color: var(--text-secondary, #8b949e);
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.channels-table td {
  color: var(--text-primary, #e6edf3);
}

.channels-table tbody tr:hover {
  background: var(--bg-tertiary, #21262d);
}

.lock-icon {
  font-size: 1rem;
  width: 2rem;
}

.open-btn {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: var(--accent-blue, #238636);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background 0.15s ease;
}

.open-btn:hover {
  background: var(--accent-blue-hover, #2ea043);
}

.channels-links {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-muted, #21262d);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.channel-admin-link {
  color: var(--accent-blue, #58a6ff);
  text-decoration: none;
  font-size: 0.875rem;
}

.channel-admin-link:hover {
  text-decoration: underline;
}

.separator {
  color: var(--text-tertiary, #6e7681);
}
</style>
