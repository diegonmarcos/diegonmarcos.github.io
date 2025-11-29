import { Service, ServiceSection } from './types';

// SVG icon paths (viewBox="0 0 24 24")
export const icons = {
  analytics: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  sync: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  n8n: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
  oracle: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  gcloud: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  server: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><circle cx="12" cy="10" r="3" fill="currentColor"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',
  download: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  proxy: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  firewall: '<rect x="5" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="16" r="1"/><path d="M8 11V7a4 4 0 018 0v4"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 15 4-4-4-4"/><line x1="13" y1="15" x2="17" y2="15"/>',
  dashboard: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  cards: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  tree: '<path d="M12 2v6"/><path d="M12 8L6 14"/><path d="M12 8l6 6"/><circle cx="12" cy="2" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/><path d="M6 18v4"/><path d="M18 18v4"/>',
  architecture: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  ai: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
  sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
};

export const serviceSections: ServiceSection[] = [
  {
    title: 'Services',
    services: [
      {
        id: 'analytics',
        name: 'Matomo Analytics',
        description: 'analytics.diegonmarcos.com',
        url: 'https://analytics.diegonmarcos.com',
        status: 'online',
        icon: icons.analytics,
      },
      {
        id: 'sync',
        name: 'Syncthing',
        description: 'sync.diegonmarcos.com',
        url: 'https://sync.diegonmarcos.com',
        status: 'online',
        icon: icons.sync,
      },
      {
        id: 'n8n',
        name: 'n8n Orchestrator',
        description: 'n8n.diegonmarcos.com',
        url: 'https://n8n.diegonmarcos.com',
        status: 'online',
        icon: icons.n8n,
      },
    ],
  },
  {
    title: 'VPS',
    services: [
      {
        id: 'vps-oracle',
        name: 'Oracle Cloud',
        description: 'Console & OCI CLI',
        url: 'https://cloud.oracle.com/',
        status: 'online',
        icon: icons.oracle,
        cliInstall: 'bash -c "$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"',
        cliConnect: 'oci compute instance list --compartment-id $OCI_COMPARTMENT_ID',
      },
      {
        id: 'vps-gcloud',
        name: 'Google Cloud',
        description: 'Console & gcloud CLI',
        url: 'https://console.cloud.google.com/',
        status: 'online',
        icon: icons.gcloud,
        cliInstall: 'curl https://sdk.cloud.google.com | bash && exec -l $SHELL && gcloud init',
        cliConnect: 'gcloud compute instances list',
      },
    ],
  },
  {
    title: 'VMs',
    services: [
      {
        id: 'vm-webserver1',
        name: 'Oracle/web-server-1',
        description: 'Matomo, Syncthing, NPM',
        url: 'ssh://ubuntu@130.110.251.193',
        status: 'online',
        icon: icons.server,
        sshCommand: 'ssh ubuntu@130.110.251.193',
        proxyUrl: 'http://130.110.251.193:81',
        firewallUrl: 'https://cloud.oracle.com/networking/vcns',
      },
      {
        id: 'vm-servicesserver1',
        name: 'Oracle/services-server-1',
        description: 'n8n Orchestrator, NPM',
        url: 'ssh://ubuntu@129.151.228.66',
        status: 'online',
        icon: icons.server,
        sshCommand: 'ssh ubuntu@129.151.228.66',
        proxyUrl: 'http://129.151.228.66:81',
        firewallUrl: 'https://cloud.oracle.com/networking/vcns',
      },
      {
        id: 'vm-arch1',
        name: 'GCloud/Arch1',
        description: 'arch-server',
        url: 'ssh://user@pending',
        status: 'pending',
        icon: icons.server,
        sshCommand: 'ssh user@[pending]',
      },
    ],
  },
  {
    title: 'Under Development',
    services: [
      {
        id: 'mail',
        name: 'Mail Server',
        description: 'SMTP / IMAP',
        url: '#pending',
        status: 'pending',
        icon: icons.mail,
      },
      {
        id: 'terminal',
        name: 'Web Terminal',
        description: 'Browser-based SSH',
        url: '#pending',
        status: 'pending',
        icon: icons.terminal,
      },
      {
        id: 'dashboard',
        name: 'DevOps Dashboard',
        description: 'Monitoring & Metrics',
        url: '#pending',
        status: 'pending',
        icon: icons.dashboard,
      },
    ],
  },
];

// Helper to parse SSH URLs
export function parseSSHUrl(sshUrl: string): { username: string; host: string; command: string } | null {
  const match = sshUrl.match(/ssh:\/\/([^@]+)@(.+)/);
  if (!match) return null;
  return {
    username: match[1],
    host: match[2],
    command: `ssh ${match[1]}@${match[2]}`,
  };
}
