import type { ServiceId, ServiceUrls } from './types';
import { showNotification } from './notification';
import { parseSSHUrl, showSSHModal } from './ssh-modal';

const serviceUrls: ServiceUrls = {
    // Active Services
    'proxy': 'http://130.110.251.193:81',
    'analytics': 'http://130.110.251.193:8080',
    'firewall': '../vps_oracle/spec.md',

    // Active VPS
    'vps-oracle-console': 'https://cloud.oracle.com/',
    'vps-gcloud-console': 'https://console.cloud.google.com/',

    // Active VMs
    'vm-ubuntu1': 'ssh://ubuntu@130.110.251.193',
    'vm-arch1': 'ssh://user@pending',

    // Under Development
    'mail': '../mail/index.html',
    'sync': '../sync/index.html',
    'drive': '../drive/index.html',
    'vps-local': '../vps_google/index.html',
    'terminal': '../1.ops/index.html',
    'dashboard': '../0.spec/index.html'
};

export function handleCardClick(service: ServiceId): void {
    const url = serviceUrls[service];
    if (!url) return;

    console.log(`Navigating to ${service}: ${url}`);

    if (url.startsWith('ssh://')) {
        handleSSH(url);
    } else if (url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}

function handleSSH(sshUrl: string): void {
    const sshInfo = parseSSHUrl(sshUrl);
    if (!sshInfo) return;

    if (sshInfo.host === 'pending' || sshInfo.host.includes('pending')) {
        showNotification('This VM is not yet configured. IP address pending.');
        return;
    }

    showSSHModal(sshInfo);
}
