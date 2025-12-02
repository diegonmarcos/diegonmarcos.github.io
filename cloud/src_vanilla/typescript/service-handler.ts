import type { ServiceId, ServiceUrls } from './types';
import { showNotification } from './notification';
import { parseSSHUrl, showSSHModal } from './ssh-modal';

const serviceUrls: ServiceUrls = {
    // Productivity Services
    'sync': 'https://sync.diegonmarcos.com',
    'mail': '#pending',

    // Machine Learning Services
    'n8n-infra': 'https://n8n.diegonmarcos.com',
    'n8n-ai': '#pending',

    // Others Services
    'analytics': 'https://analytics.diegonmarcos.com',

    // Cloud Providers (console URLs)
    'vps-oracle': 'https://cloud.oracle.com/',
    'vps-gcloud': 'https://console.cloud.google.com/',

    // SSH VMs
    'vm-webserver1': 'ssh://ubuntu@130.110.251.193',
    'vm-servicesserver1': 'ssh://ubuntu@129.151.228.66',
    'vm-arm': 'ssh://ubuntu@pending',
    'vm-gcloud': 'ssh://diego@pending',

    // Infra Services
    'npm-services': 'http://129.151.228.66:81',
    'npm-web': 'http://130.110.251.193:81',
    'npm-arm': '#pending',
    'npm-gcloud': '#pending',
    'matomo-db': '#internal',
    'mail-db': '#pending',
    'terminal': '#pending',
    'flask-cloud-dashboard': '#pending'
};

// VPS CLI install commands
const vpsCliCommands: Record<string, { install: string; connect?: string }> = {
    'vps-oracle': {
        install: 'bash -c "$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"',
        connect: 'oci compute instance list --compartment-id $OCI_COMPARTMENT_ID'
    },
    'vps-gcloud': {
        install: 'curl https://sdk.cloud.google.com | bash && exec -l $SHELL && gcloud init',
        connect: 'gcloud compute instances list'
    }
};

export function handleCardClick(service: ServiceId): void {
    const url = serviceUrls[service];
    if (!url) return;

    console.log(`Navigating to ${service}: ${url}`);

    if (url.startsWith('ssh://')) {
        handleSSH(url);
    } else if (url === '#pending') {
        showNotification('This service is under development.');
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

export function showVPSModal(vpsId: 'vps-oracle' | 'vps-gcloud'): void {
    const cli = vpsCliCommands[vpsId];
    const consoleUrl = serviceUrls[vpsId];
    const vpsName = vpsId === 'vps-oracle' ? 'Oracle Cloud' : 'Google Cloud';

    const overlay = document.createElement('div');
    overlay.className = 'ssh-modal-overlay';
    overlay.innerHTML = `
        <div class="ssh-modal vps-modal">
            <h3>${vpsName} Access</h3>

            <div class="vps-section">
                <h4>Console</h4>
                <button class="vps-action-btn" data-action="console">Open ${vpsName} Console</button>
            </div>

            <div class="vps-section">
                <h4>CLI Installation</h4>
                <div class="ssh-command">
                    <code>${cli.install}</code>
                    <button class="copy-btn" data-action="copy-install">Copy</button>
                </div>
            </div>

            ${cli.connect ? `
            <div class="vps-section">
                <h4>List Instances</h4>
                <div class="ssh-command">
                    <code>${cli.connect}</code>
                    <button class="copy-btn" data-action="copy-connect">Copy</button>
                </div>
            </div>
            ` : ''}

            <button class="close-modal-btn" data-action="close">Close</button>
        </div>
    `;

    overlay.addEventListener('click', (e) => {
        const action = (e.target as HTMLElement).dataset.action;
        if (e.target === overlay || action === 'close') {
            overlay.remove();
        } else if (action === 'console') {
            window.open(consoleUrl, '_blank');
        } else if (action === 'copy-install') {
            navigator.clipboard.writeText(cli.install).then(() => {
                showNotification('CLI install command copied!');
            });
        } else if (action === 'copy-connect') {
            navigator.clipboard.writeText(cli.connect || '').then(() => {
                showNotification('Connect command copied!');
            });
        }
    });

    document.body.appendChild(overlay);
}
