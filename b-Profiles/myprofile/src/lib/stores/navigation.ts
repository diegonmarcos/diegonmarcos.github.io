import { writable } from 'svelte/store';

export type PageName = 'profile' | 'audio' | 'bio' | 'geo' | 'visual' | 'memory' | 'syslog';

interface NavigationState {
  currentPage: PageName;
  targetPage: PageName | null;
  isTransitioning: boolean;
}

function createNavigationStore() {
  const { subscribe, set, update } = writable<NavigationState>({
    currentPage: 'profile',
    targetPage: null,
    isTransitioning: false
  });

  return {
    subscribe,
    startTransition: (from: PageName, to: PageName) => {
      update(state => ({
        ...state,
        currentPage: from,
        targetPage: to,
        isTransitioning: true
      }));
    },
    completeTransition: () => {
      update(state => ({
        ...state,
        currentPage: state.targetPage || state.currentPage,
        targetPage: null,
        isTransitioning: false
      }));
    },
    setPage: (page: PageName) => {
      update(state => ({
        ...state,
        currentPage: page,
        targetPage: null,
        isTransitioning: false
      }));
    }
  };
}

export const navigation = createNavigationStore();

// Page metadata - 6 cube faces
export const pages: Record<PageName, { label: string; icon: string; color: string }> = {
  profile: { label: 'PROFILE', icon: 'user', color: '#00ff41' },
  audio: { label: 'AUDIO', icon: 'music', color: '#00f3ff' },
  bio: { label: 'BIO', icon: 'activity', color: '#ff9100' },
  geo: { label: 'GEO', icon: 'globe', color: '#00ff9d' },
  visual: { label: 'VISUAL', icon: 'youtube', color: '#ff0055' },
  memory: { label: 'MEMORY', icon: 'camera', color: '#bc13fe' },
  syslog: { label: 'SYSLOG', icon: 'terminal', color: '#ff0000' }
};

// Page order for cube navigation (profile is home, then 6 content pages)
export const pageOrder: PageName[] = ['profile', 'audio', 'bio', 'geo', 'visual', 'memory', 'syslog'];
