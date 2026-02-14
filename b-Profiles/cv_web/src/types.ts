// Type definitions for the CV Web application

export interface ScrollAnimationOptions {
  threshold: number;
  duration: number;
}

export interface SmoothScrollOptions {
  endY: number;
  duration: number;
}

export interface ViewportSettings {
  desktopWidth: number;
  mobileScale: number;
}

export interface EasterEggConfig {
  clickThreshold: number;
  resetTimeout: number;
  particleCount: number;
}

export type CollapsibleState = 'open' | 'closed';

export interface DOMElements {
  sideNav: HTMLElement | null;
  navToggle: HTMLElement | null;
  mainContent: HTMLElement | null;
  headerContent: HTMLElement | null;
  floatingBtn: HTMLElement | null;
  floatingMenu: HTMLElement | null;
}
