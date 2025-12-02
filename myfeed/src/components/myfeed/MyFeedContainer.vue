<script setup lang="ts">
import { ref } from 'vue'
import TabBar from '../common/TabBar.vue'
import GitHubRow from './GitHubRow.vue'
import MusicRow from './MusicRow.vue'
import VideoRow from './VideoRow.vue'
import { useGitHubFeed } from '../../composables/useGitHubFeed'
import { useTidalFeed } from '../../composables/useTidalFeed'
import { useYouTubeFeed } from '../../composables/useYouTubeFeed'
import { Github, Music, Youtube, RefreshCw } from 'lucide-vue-next'

const activeTab = ref('github')

const tabs = [
  { id: 'github', label: 'GitHub' },
  { id: 'music', label: 'Music' },
  { id: 'youtube', label: 'YouTube' },
]

// GitHub feed
const { events: githubEvents, loading: githubLoading, loadEvents: refreshGitHub } = useGitHubFeed()

// Tidal feed
const { tracks: tidalTracks, isLoading: tidalLoading, fetchTidalFeed: refreshTidal } = useTidalFeed()

// YouTube feed
const { videos: youtubeVideos, isLoading: youtubeLoading, fetchYouTubeFeed: refreshYouTube } = useYouTubeFeed()

function refresh() {
  switch (activeTab.value) {
    case 'github':
      refreshGitHub()
      break
    case 'music':
      refreshTidal()
      break
    case 'youtube':
      refreshYouTube()
      break
  }
}
</script>

<template>
  <div class="myfeed">
    <div class="myfeed__header">
      <TabBar :tabs="tabs" :active-tab="activeTab" @update:active-tab="activeTab = $event" />
      <button class="btn btn--ghost btn--icon" @click="refresh" title="Refresh">
        <RefreshCw class="w-4 h-4" />
      </button>
    </div>

    <!-- GitHub Tab -->
    <div v-if="activeTab === 'github'" class="feed-list">
      <div v-if="githubLoading" class="p-4 text-text-tertiary text-sm">Loading GitHub activity...</div>
      <template v-else-if="githubEvents.length > 0">
        <div class="section-header">
          <Github class="section-header__icon" />
          <span>Recent Activity</span>
        </div>
        <GitHubRow
          v-for="event in githubEvents.slice(0, 30)"
          :key="event.id"
          :event="event"
        />
      </template>
      <div v-else class="empty-state">
        <Github class="empty-state__icon" />
        <p class="empty-state__title">No GitHub activity</p>
        <p class="empty-state__description">Recent activity will appear here</p>
      </div>
    </div>

    <!-- Music Tab -->
    <div v-if="activeTab === 'music'" class="feed-list">
      <div v-if="tidalLoading" class="p-4 text-text-tertiary text-sm">Loading music...</div>
      <template v-else-if="tidalTracks.length > 0">
        <div class="section-header">
          <Music class="section-header__icon" />
          <span>Tidal Library</span>
        </div>
        <MusicRow
          v-for="track in tidalTracks.slice(0, 30)"
          :key="track.id"
          :track="{
            id: track.id,
            title: track.title,
            artist: track.artist,
            album: track.album,
            duration: track.duration,
            url: track.tidalUrl,
            coverUrl: track.coverUrl
          }"
        />
      </template>
      <div v-else class="empty-state">
        <Music class="empty-state__icon" />
        <p class="empty-state__title">No music data</p>
        <p class="empty-state__description">Connect your Tidal account</p>
      </div>
    </div>

    <!-- YouTube Tab -->
    <div v-if="activeTab === 'youtube'" class="feed-list">
      <div v-if="youtubeLoading" class="p-4 text-text-tertiary text-sm">Loading videos...</div>
      <template v-else-if="youtubeVideos.length > 0">
        <div class="section-header">
          <Youtube class="section-header__icon" />
          <span>Liked Videos</span>
        </div>
        <VideoRow
          v-for="video in youtubeVideos.slice(0, 30)"
          :key="video.id"
          :video="{
            id: video.id,
            title: video.title,
            channel: video.author || 'Unknown',
            url: video.url,
            publishedAt: video.publishDate,
            thumbnail: video.thumbnail
          }"
        />
      </template>
      <div v-else class="empty-state">
        <Youtube class="empty-state__icon" />
        <p class="empty-state__title">No videos</p>
        <p class="empty-state__description">Liked videos will appear here</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myfeed__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-surface, #161b22);
}

.myfeed__header .tab-bar {
  flex: 1;
  border-bottom: none;
}
</style>
