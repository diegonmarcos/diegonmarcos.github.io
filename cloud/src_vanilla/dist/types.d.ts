export type ServiceId = 'analytics' | 'sync' | 'n8n' | 'vps-oracle' | 'vps-gcloud' | 'vm-webserver1' | 'vm-servicesserver1' | 'vm-arch1' | 'mail' | 'terminal' | 'dashboard';
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
//# sourceMappingURL=types.d.ts.map