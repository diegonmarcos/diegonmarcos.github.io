'use client';

import { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

export function Notification({ message, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 px-4 py-3
                  bg-[var(--bg-card)] border border-[var(--accent-primary)]
                  rounded-[var(--border-radius)] text-[var(--text-primary)]
                  shadow-lg transition-all duration-300
                  ${isVisible ? 'animate-slideIn opacity-100' : 'opacity-0 translate-x-4'}`}
    >
      {message}
    </div>
  );
}

// Global notification state
let showNotificationFn: ((message: string) => void) | null = null;

export function useNotification() {
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    showNotificationFn = (message: string) => setNotification(message);
    return () => {
      showNotificationFn = null;
    };
  }, []);

  return {
    notification,
    clearNotification: () => setNotification(null),
    showNotification: (message: string) => setNotification(message),
  };
}

export function showNotification(message: string) {
  if (showNotificationFn) {
    showNotificationFn(message);
  }
}
