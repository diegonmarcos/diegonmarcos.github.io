'use client';

import { useEffect, useState } from 'react';

type Theme = 'minimalistic' | 'blurred';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('blurred');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cloud-dashboard-theme') as Theme;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'minimalistic' ? 'blurred' : 'minimalistic';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cloud-dashboard-theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2
                 border border-[var(--border-color)] rounded-[var(--border-radius)]
                 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)]
                 text-[var(--text-primary)] transition-all duration-[var(--transition-speed)]
                 hover:border-[var(--accent-primary)]"
      title="Switch theme"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <span className="text-xs capitalize">{theme}</span>
    </button>
  );
}
