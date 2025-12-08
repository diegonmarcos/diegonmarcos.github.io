import { initCardEffects, initStatusPulse } from './card-effects';
import { handleCardClick } from './service-handler';
import { initViewToggle, initTreeExpand, initTreeServiceClick, initTreeControls, initTreeFilter } from './tree-view';
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
    initTreeFilter();

    // Listen for service clicks from tree view
    document.addEventListener('service-click', ((e: CustomEvent) => {
        const service = e.detail.service as ServiceId;
        if (service) {
            handleCardClick(service);
        }
    }) as EventListener);

    // Tree node copy buttons
    document.querySelectorAll<HTMLButtonElement>('.node-copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const copyText = btn.dataset.copy;
            if (copyText) {
                navigator.clipboard.writeText(copyText).then(() => {
                    btn.style.color = 'var(--accent-green)';
                    btn.style.borderColor = 'var(--accent-green)';
                    setTimeout(() => {
                        btn.style.color = '';
                        btn.style.borderColor = '';
                    }, 1000);
                });
            }
        });
    });

    // Tree node URL buttons
    document.querySelectorAll<HTMLButtonElement>('.node-url-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = btn.dataset.url;
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Tree action buttons (new design)
    document.querySelectorAll<HTMLButtonElement>('.tree-action-btn.url-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = btn.dataset.url;
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // VM Card action buttons - URL
    document.querySelectorAll<HTMLButtonElement>('.vm-action-btn.btn-url').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = btn.dataset.url;
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // VM Card action buttons - SSH copy
    document.querySelectorAll<HTMLButtonElement>('.vm-action-btn.btn-ssh').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const copyText = btn.dataset.copy;
            if (copyText) {
                navigator.clipboard.writeText(copyText).then(() => {
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.classList.remove('copied');
                    }, 1000);
                });
            }
        });
    });

    // Wake-on-Demand Calculator
    initWakeCalculator();
});

// Wake-on-Demand Usage Calculator
function initWakeCalculator() {
    const hoursInput = document.getElementById('wake-hours') as HTMLInputElement;
    const bandwidthInput = document.getElementById('wake-bandwidth') as HTMLInputElement;

    if (!hoursInput || !bandwidthInput) return;

    // OCI E4.Flex pricing
    const COMPUTE_RATE = 0.0096;  // $/hr per OCPU (1 OCPU, 16GB RAM)
    const STORAGE_COST = 2.55;    // Fixed: 100GB boot @ $0.0255/GB/mo
    const BANDWIDTH_RATE = 0.0085; // $/GB (after first 10TB free)

    function calculate() {
        const hours = parseFloat(hoursInput.value) || 0;
        const bandwidth = parseFloat(bandwidthInput.value) || 0;

        // Compute cost
        const computeCost = hours * COMPUTE_RATE;

        // Bandwidth cost (first 10TB free per month)
        const bandwidthCost = bandwidth * BANDWIDTH_RATE;

        // Total
        const totalCost = computeCost + STORAGE_COST + bandwidthCost;

        // Update display
        const hoursDisplay = document.getElementById('wake-hours-display');
        const bwDisplay = document.getElementById('wake-bw-display');
        const computeEl = document.getElementById('wake-compute-cost');
        const bandwidthEl = document.getElementById('wake-bandwidth-cost');
        const totalEl = document.getElementById('wake-total-cost');

        if (hoursDisplay) hoursDisplay.textContent = hours.toString();
        if (bwDisplay) bwDisplay.textContent = bandwidth.toString();
        if (computeEl) computeEl.textContent = `$${computeCost.toFixed(2)}`;
        if (bandwidthEl) bandwidthEl.textContent = `$${bandwidthCost.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${totalCost.toFixed(2)}`;
    }

    hoursInput.addEventListener('input', calculate);
    bandwidthInput.addEventListener('input', calculate);

    // Initial calculation
    calculate();
}
