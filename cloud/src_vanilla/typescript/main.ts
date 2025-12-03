import { initCardEffects, initStatusPulse } from './card-effects';
import { handleCardClick } from './service-handler';
import { initViewToggle, initTreeExpand, initTreeServiceClick, initTreeControls } from './tree-view';
import { initThemeSwitcher } from './theme-switcher';
import { initZoomControl } from './zoom-control';
import type { ServiceId } from './types';

document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization (first to prevent flash)
    initThemeSwitcher();

    // Zoom control initialization
    initZoomControl();

    // Card view initialization
    initCardEffects();
    initStatusPulse();

    const cards = document.querySelectorAll<HTMLElement>('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.dataset.service as ServiceId;
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
    document.addEventListener('service-click', ((e: CustomEvent) => {
        const service = e.detail.service as ServiceId;
        if (service) {
            handleCardClick(service);
        }
    }) as EventListener);
});
