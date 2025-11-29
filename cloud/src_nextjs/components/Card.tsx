'use client';

import { useRef } from 'react';
import { Service } from '@/lib/types';
import { Icon } from './Icon';
import { icons } from '@/lib/services';

interface CardProps {
  service: Service;
  onServiceClick: (service: Service) => void;
  onCopy: (text: string, label: string) => void;
  onOpenUrl: (url: string) => void;
}

export function Card({ service, onServiceClick, onCopy, onOpenUrl }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    cardRef.current.style.setProperty('--rotateX', `${rotateX}deg`);
    cardRef.current.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotateX', '0deg');
    cardRef.current.style.setProperty('--rotateY', '0deg');
  };

  const statusClass = {
    online: 'status-online',
    pending: 'status-pending',
    offline: 'status-offline',
  }[service.status];

  const statusLabel = {
    online: 'Online',
    pending: service.id.includes('vps') ? 'Always Free' : 'Pending',
    offline: 'Offline',
  }[service.status];

  const isVPS = service.id.startsWith('vps-');
  const isVM = service.id.startsWith('vm-');

  return (
    <div
      ref={cardRef}
      className="card-3d relative p-[var(--card-padding)] cursor-pointer
                 bg-[var(--bg-card)] border border-[var(--border-color)]
                 rounded-[var(--border-radius)] transition-all duration-[var(--transition-speed)]
                 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-highlight)]
                 hover:shadow-[0_0_20px_var(--glow)] animate-fadeIn"
      onClick={() => onServiceClick(service)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon */}
      <div className="mb-3 text-[var(--accent-primary)]">
        <Icon path={service.icon} className="w-8 h-8" />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{service.name}</h3>
      <p className="text-sm text-[var(--text-secondary)] mb-3">{service.description}</p>

      {/* CLI Commands for VPS */}
      {isVPS && service.cliConnect && (
        <div className="mt-3 flex items-center gap-2 bg-[var(--bg-secondary)] p-2 rounded-[var(--border-radius)]">
          <code className="flex-1 text-xs text-[var(--accent-primary)] overflow-hidden text-ellipsis whitespace-nowrap">
            {service.cliConnect}
          </code>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCopy(service.cliConnect!, 'CLI command');
            }}
            className="p-1 hover:text-[var(--accent-primary)] transition-colors"
            title="Copy command"
          >
            <Icon path={icons.copy} className="w-4 h-4" />
          </button>
          {service.cliInstall && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCopy(service.cliInstall!, 'CLI install');
              }}
              className="p-1 hover:text-[var(--accent-primary)] transition-colors"
              title="Copy install command"
            >
              <Icon path={icons.download} className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* SSH Command for VMs */}
      {isVM && service.sshCommand && (
        <div className="mt-3 flex items-center gap-2 bg-[var(--bg-secondary)] p-2 rounded-[var(--border-radius)]">
          <code className="flex-1 text-xs text-[var(--accent-primary)] overflow-hidden text-ellipsis whitespace-nowrap">
            {service.sshCommand}
          </code>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCopy(service.sshCommand!, 'SSH command');
            }}
            className="p-1 hover:text-[var(--accent-primary)] transition-colors"
            title="Copy SSH command"
          >
            <Icon path={icons.copy} className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* VM Quick Actions */}
      {isVM && (service.proxyUrl || service.firewallUrl) && (
        <div className="mt-3 flex gap-2">
          {service.proxyUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenUrl(service.proxyUrl!);
              }}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2
                         bg-[var(--bg-secondary)] border border-[var(--border-color)]
                         rounded-[var(--border-radius)] text-xs text-[var(--text-secondary)]
                         hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]
                         transition-all"
            >
              <Icon path={icons.proxy} className="w-3 h-3" />
              Proxy
            </button>
          )}
          {service.firewallUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenUrl(service.firewallUrl!);
              }}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2
                         bg-[var(--bg-secondary)] border border-[var(--border-color)]
                         rounded-[var(--border-radius)] text-xs text-[var(--text-secondary)]
                         hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]
                         transition-all"
            >
              <Icon path={icons.firewall} className="w-3 h-3" />
              Firewall
            </button>
          )}
        </div>
      )}

      {/* Status Badge */}
      <div
        className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-bold rounded-full ${statusClass}`}
      >
        {statusLabel}
      </div>
    </div>
  );
}
