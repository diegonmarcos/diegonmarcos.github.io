import { initCardEffects, initStatusPulse } from './card-effects';
import { handleCardClick } from './service-handler';
import { initViewToggle, initTreeExpand, initTreeServiceClick, initTreeControls } from './tree-view';
import { initThemeSwitcher } from './theme-switcher';
document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization (first to prevent flash)
    initThemeSwitcher();
    // Card view initialization
    initCardEffects();
    initStatusPulse();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.dataset.service;
            if (service) {
                handleCardClick(service);
            }
        });
    });
    // Tree view initialization
    initViewToggle();
    initTreeExpand();
    initTreeServiceClick();
    initTreeControls();
    // Listen for service clicks from tree view
    document.addEventListener('service-click', ((e) => {
        const service = e.detail.service;
        if (service) {
            handleCardClick(service);
        }
    }));
});
//# sourceMappingURL=main.js.map