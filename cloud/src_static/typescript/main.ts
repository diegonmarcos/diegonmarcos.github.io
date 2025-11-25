import { initCardEffects, initStatusPulse } from './card-effects';
import { handleCardClick } from './service-handler';
import type { ServiceId } from './types';

document.addEventListener('DOMContentLoaded', () => {
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
});
