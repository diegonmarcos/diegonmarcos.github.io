/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Obsidian Purple Palette
        obsidian: {
          950: '#1a0b2e',
          900: '#2d1b4e',
          800: '#3f2b5e',
          700: '#523c6e',
          600: '#7c5cbf',
          500: '#9b7fd4',
          400: '#b89ee8',
          300: '#d4c3f5',
          200: '#e9e0fa',
          100: '#f5f2fd',
        },
        violet: {
          accent: '#8b5cf6',
          glow: '#a78bfa',
        },
        amethyst: {
          glow: '#a78bfa',
        },
        lavender: {
          soft: '#c4b5fd',
        },
        // Grays with purple tint
        gray: {
          950: '#0f0a1a',
          900: '#1e1731',
          800: '#2d2540',
          700: '#3d3450',
          600: '#5c5470',
          500: '#7b7690',
          400: '#a39db0',
          300: '#c4c0cc',
          200: '#e1dfe6',
          100: '#f0eff3',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Charter',
          'Georgia',
          'Iowan Old Style',
          'serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-lg': '0 12px 32px rgba(0, 0, 0, 0.25)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
