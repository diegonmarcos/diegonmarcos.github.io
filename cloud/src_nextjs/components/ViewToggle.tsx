'use client';

import { Icon } from './Icon';
import { icons } from '@/lib/services';

export type ViewType = 'cards' | 'tree' | 'architecture' | 'ai-architecture';

interface ViewToggleProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const viewGroups = [
  {
    label: 'Services',
    views: [
      { id: 'cards' as ViewType, label: 'Cards', icon: icons.cards },
      { id: 'tree' as ViewType, label: 'Tree', icon: icons.tree },
    ],
  },
  {
    label: 'Architecture',
    views: [
      { id: 'architecture' as ViewType, label: 'Server', icon: icons.architecture },
      { id: 'ai-architecture' as ViewType, label: 'AI', icon: icons.ai },
    ],
  },
];

export function ViewToggle({ activeView, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
      {viewGroups.map((group, idx) => (
        <div key={group.label} className="flex items-center gap-2">
          {idx > 0 && (
            <span className="hidden sm:block w-px h-8 bg-[var(--border-color)] mx-2" />
          )}
          <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">
            {group.label}
          </span>
          <div className="flex gap-1 bg-[var(--bg-secondary)] p-1 rounded-[var(--border-radius)]">
            {group.views.map((view) => (
              <button
                key={view.id}
                onClick={() => onViewChange(view.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-[var(--border-radius)]
                           transition-all duration-[var(--transition-speed)]
                           ${
                             activeView === view.id
                               ? 'bg-[var(--accent-primary)] text-black font-bold'
                               : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                           }`}
              >
                <Icon path={view.icon} className="w-4 h-4" />
                {view.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
