export type ServiceType = 'proxy' | 'firewall' | 'mail' | 'sync' | 'drive' | 'vps-oracle' | 'analytics' | 'vps-local' | 'terminal' | 'dashboard';
export interface ServiceUrls {
    [key: string]: string;
}
export interface CardElement extends HTMLElement {
    dataset: {
        service: ServiceType;
    };
}
//# sourceMappingURL=types.d.ts.map