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

export type ServiceUrls = Record<ServiceId, string>;

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
