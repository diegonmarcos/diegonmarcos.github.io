'use client';

import { useState, useCallback } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ViewToggle, ViewType } from '@/components/ViewToggle';
import { CardGrid } from '@/components/CardGrid';
import { Notification, useNotification } from '@/components/Notification';
import { serviceSections } from '@/lib/services';
import { Service } from '@/lib/types';

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>('cards');
  const { notification, clearNotification, showNotification } = useNotification();

  const handleCopy = useCallback(async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(`${label} copied!`);
    } catch {
      showNotification('Failed to copy');
    }
  }, [showNotification]);

  const handleOpenUrl = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  const handleServiceClick = useCallback((service: Service) => {
    // Handle different service types
    if (service.url === '#pending') {
      showNotification('This service is under development.');
      return;
    }

    if (service.url.startsWith('ssh://')) {
      // For SSH, copy the command
      if (service.sshCommand) {
        handleCopy(service.sshCommand, 'SSH command');
      }
      return;
    }

    // For VPS, open console
    if (service.id.startsWith('vps-')) {
      window.open(service.url, '_blank');
      return;
    }

    // For regular services, open URL
    if (service.url.startsWith('http')) {
      window.open(service.url, '_blank');
    }
  }, [showNotification, handleCopy]);

  return (
    <main className="min-h-screen py-8 px-4">
      <ThemeToggle />

      {/* Header */}
      <header className="max-w-6xl mx-auto text-center mb-8 animate-fadeInDown">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-purple)] bg-clip-text text-transparent mb-2">
          Cloud Services Dashboard
        </h1>
        <p className="text-[var(--text-secondary)]">Manage your infrastructure</p>

        <ViewToggle activeView={activeView} onViewChange={setActiveView} />
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {activeView === 'cards' && (
          <CardGrid
            sections={serviceSections}
            onServiceClick={handleServiceClick}
            onCopy={handleCopy}
            onOpenUrl={handleOpenUrl}
          />
        )}

        {activeView === 'tree' && (
          <div className="text-center py-20 text-[var(--text-secondary)]">
            <p>Tree view coming soon...</p>
          </div>
        )}

        {activeView === 'architecture' && (
          <div className="w-full h-[600px] rounded-[var(--border-radius-lg)] overflow-hidden border border-[var(--border-color)]">
            <iframe
              src="/arch.html"
              className="w-full h-full bg-[var(--bg-secondary)]"
              title="Server Architecture"
            />
          </div>
        )}

        {activeView === 'ai-architecture' && (
          <div className="w-full h-[600px] rounded-[var(--border-radius-lg)] overflow-hidden border border-[var(--border-color)]">
            <iframe
              src="/ai-arch.html"
              className="w-full h-full bg-[var(--bg-secondary)]"
              title="AI Architecture"
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[var(--border-color)] text-center">
        <a
          href="https://diegonmarcos.github.io/linktree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm
                     bg-[var(--bg-card)] border border-[var(--border-color)]
                     rounded-[var(--border-radius)] text-[var(--text-secondary)]
                     hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]
                     transition-all duration-[var(--transition-speed)]"
        >
          <span className="text-[var(--accent-green)]">$</span>
          <span className="text-[var(--accent-primary)]">go</span>
          <span>linktree</span>
        </a>
      </footer>

      {/* Notification */}
      {notification && (
        <Notification message={notification} onClose={clearNotification} />
      )}
    </main>
  );
}
