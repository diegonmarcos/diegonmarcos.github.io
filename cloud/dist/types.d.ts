export type ServiceId = 'proxy' | 'analytics' | 'firewall' | 'vps-oracle-console' | 'vps-gcloud-console' | 'vm-ubuntu1' | 'vm-arch1' | 'mail' | 'sync' | 'drive' | 'vps-local' | 'terminal' | 'dashboard';
export type ServiceUrls = Record<ServiceId, string>;
export interface SSHConnectionInfo {
    username: string;
    host: string;
    command: string;
}
//# sourceMappingURL=types.d.ts.map