import { w as writable } from "./index.js";
function createNavigationStore() {
  const { subscribe, set, update } = writable({
    currentPage: "profile",
    targetPage: null,
    isTransitioning: false
  });
  return {
    subscribe,
    startTransition: (from, to) => {
      update((state) => ({
        ...state,
        currentPage: from,
        targetPage: to,
        isTransitioning: true
      }));
    },
    completeTransition: () => {
      update((state) => ({
        ...state,
        currentPage: state.targetPage || state.currentPage,
        targetPage: null,
        isTransitioning: false
      }));
    },
    setPage: (page) => {
      update((state) => ({
        ...state,
        currentPage: page,
        targetPage: null,
        isTransitioning: false
      }));
    }
  };
}
createNavigationStore();
