export type ServiceId =
  // Active Services
  | 'analytics'
  | 'sync'
  | 'n8n'
  // VPS Providers
  | 'vps-oracle'
  | 'vps-gcloud'
  // VMs
  | 'vm-webserver1'
  | 'vm-servicesserver1'
  | 'vm-arch1'
  // Under Development
  | 'mail'
  | 'terminal'
  | 'dashboard';

export type ServiceStatus = 'online' | 'pending' | 'offline';

export interface Service {
  id: ServiceId;
  name: string;
  description: string;
  url: string;
  status: ServiceStatus;
  icon: string;
  sshCommand?: string;
  cliInstall?: string;
  cliConnect?: string;
  proxyUrl?: string;
  firewallUrl?: string;
}

export interface ServiceSection {
  title: string;
  services: Service[];
}

export interface SSHConnectionInfo {
  username: string;
  host: string;
  command: string;
}

export interface VPSInfo {
  consoleUrl: string;
  sshCommand?: string;
  cliInstall: string;
}
