// ==========================================================================
// Configuration - Linktree Mindmap
// ==========================================================================

import type { AppConfig } from './types';

export const config: AppConfig = {
  physics: {
    repulsion: 180,           // Node-node repulsion strength
    attraction: 0.025,        // Edge spring strength
    centerGravity: 0.015,     // Pull toward center
    damping: 0.88,            // Velocity decay (higher = more drift)
    ambientForce: 0.3,        // Random drift strength
    ambientFrequency: 0.002,  // How often drift changes
    minVelocity: 0.02,        // Never fully stop
    maxVelocity: 4,           // Speed limit
  },

  visual: {
    // Radius by depth: [root, branch, card, section, leaf]
    nodeRadiusByDepth: [45, 32, 24, 16, 12],

    // Glow intensity by depth (0-1)
    glowIntensityByDepth: [1.0, 0.8, 0.6, 0.4, 0.25],

    // Opacity by depth (0-1)
    opacityByDepth: [1.0, 0.95, 0.85, 0.7, 0.5],

    // Animation
    breatheDuration: 4000, // ms

    // Background particles
    particleCount: 80,
  },
};

// -----------------------------------------------------------------------------
// Color Palette
// -----------------------------------------------------------------------------

export const colors = {
  // Base
  voidBg: '#0a0a0f',
  voidBgLight: '#12121a',

  // Glass
  glassWhite: 'rgba(255, 255, 255, 0.08)',
  glassWhiteHover: 'rgba(255, 255, 255, 0.12)',
  glassBorder: 'rgba(255, 255, 255, 0.15)',

  // Node colors (defaults, can be overridden by data)
  root: '#60a5fa',
  professional: '#4ade80',
  personal: '#f472b6',

  // Text
  text: '#ffffff',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDim: 'rgba(255, 255, 255, 0.4)',
};

// -----------------------------------------------------------------------------
// Layout Constants
// -----------------------------------------------------------------------------

export const layout = {
  // Initial tree layout spacing
  levelSpacing: 120,      // Vertical space between levels
  siblingSpacing: 80,     // Horizontal space between siblings

  // View constraints
  minZoom: 0.3,
  maxZoom: 2.5,
  defaultZoom: 1,

  // Animation
  panEasing: 0.12,        // Pan/zoom interpolation speed
  hoverFadeSpeed: 0.15,   // Opacity transition speed
};
