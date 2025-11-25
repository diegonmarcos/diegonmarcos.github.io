import { ServiceType, ServiceUrls } from './types';
import { NotificationManager } from './notification';

// Service click handler
export class ServiceHandler {
  private serviceUrls: ServiceUrls = {
    'proxy': '/proxy',
    'firewall': '/firewall',
    'mail': '/mail',
    'sync': '/sync',
    'drive': '/drive',
    'vps-oracle': '/vps/oracle',
    'analytics': '/analytics',
    'vps-local': '/vps/local',
    'terminal': '/terminal',
    'dashboard': '/ops/dashboard'
  };

  private notificationManager: NotificationManager;

  constructor() {
    this.notificationManager = NotificationManager.getInstance();
  }

  public handleClick(service: ServiceType): void {
    const url = this.serviceUrls[service];

    if (url) {
      console.log(`Navigating to ${service}: ${url}`);

      // For now, show a notification
      const serviceName = service.replace('-', ' ').toUpperCase();
      this.notificationManager.show(`Opening ${serviceName}...`);

      // Uncomment to enable navigation
      // window.location.href = url;
    }
  }
}
