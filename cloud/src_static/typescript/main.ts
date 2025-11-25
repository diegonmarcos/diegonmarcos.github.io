import { CardEffects } from './card-effects';
import { ServiceHandler } from './service-handler';
import { StatusMonitor } from './status-monitor';
import { CardElement } from './types';

// Main application entry point
class CloudDashboard {
  private serviceHandler: ServiceHandler;
  private statusMonitor: StatusMonitor;

  constructor() {
    this.serviceHandler = new ServiceHandler();
    this.statusMonitor = new StatusMonitor();
    this.initializeCards();
  }

  private initializeCards(): void {
    const cards = document.querySelectorAll<CardElement>('.card');

    cards.forEach(card => {
      // Initialize 3D card effects
      new CardEffects(card);

      // Add click handler
      card.addEventListener('click', () => {
        const service = card.dataset.service;
        if (service) {
          this.serviceHandler.handleClick(service);
        }
      });
    });
  }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CloudDashboard();
});
