'use client';

import { Service, ServiceSection } from '@/lib/types';
import { Card } from './Card';

interface CardGridProps {
  sections: ServiceSection[];
  onServiceClick: (service: Service) => void;
  onCopy: (text: string, label: string) => void;
  onOpenUrl: (url: string) => void;
}

export function CardGrid({ sections, onServiceClick, onCopy, onOpenUrl }: CardGridProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, idx) => (
        <div key={section.title} className="animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
          {/* Section Header */}
          <h2 className="text-xl font-bold text-[var(--accent-primary)] mb-6 pb-2 border-b border-[var(--border-color)]">
            {section.title}
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.services.map((service) => (
              <Card
                key={service.id}
                service={service}
                onServiceClick={onServiceClick}
                onCopy={onCopy}
                onOpenUrl={onOpenUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
