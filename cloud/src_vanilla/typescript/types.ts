export type ServiceId =
    // Productivity Services
    | 'sync'
    | 'mail'
    // Machine Learning Services
    | 'n8n-infra'
    | 'n8n-ai'
    // Others Services
    | 'analytics'
    // Cloud Providers
    | 'vps-oracle'
    | 'vps-gcloud'
    // SSH VMs
    | 'vm-webserver1'
    | 'vm-servicesserver1'
    | 'vm-arm'
    | 'vm-gcloud'
    // Infra Services
    | 'npm-services'
    | 'npm-web'
    | 'npm-arm'
    | 'npm-gcloud'
    | 'matomo-db'
    | 'mail-db'
    | 'terminal'
    | 'flask-cloud-dashboard';

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
