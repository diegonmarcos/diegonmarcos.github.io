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
        // Apple Glassy Pixel Art Palette
        obsidian: {
          950: '#0a0a0f',
          900: '#1a1a2e',
          800: '#2d2b4e',
          700: '#3f3a6e',
          600: '#5c52bf',
          500: '#7b6fd4',
          400: '#9b8ee8',
          300: '#c4b8f5',
          200: '#e0d8fa',
          100: '#f0eafd',
        },
        violet: {
          accent: '#8b5cf6',
          glow: '#a78bfa',
        },
        // Apple Colors
        apple: {
          blue: '#007aff',
          green: '#34c759',
          pink: '#ff2d55',
          orange: '#ff9500',
          purple: '#af52de',
        },
        // Pixel Art Neon
        pixel: {
          cyan: '#00d4ff',
          magenta: '#ff00ff',
          yellow: '#ffff00',
          lime: '#00ff88',
        },
        amethyst: {
          glow: '#a78bfa',
        },
        lavender: {
          soft: '#c4b5fd',
        },
        // Grays with purple tint
        gray: {
          950: '#0a0a10',
          900: '#1c1c24',
          800: '#2c2c3a',
          700: '#3c3c50',
          600: '#5c5c70',
          500: '#8c8c9a',
          400: '#acacb8',
          300: '#c8c8d0',
          200: '#e4e4e8',
          100: '#f4f4f6',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
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
        pixel: [
          'Press Start 2P',
          'VT323',
          'monospace',
        ],
        'pixel-body': [
          'VT323',
          'Courier New',
          'monospace',
        ],
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-lg': '0 12px 40px rgba(0, 0, 0, 0.3)',
        'glass-strong': '0 16px 48px rgba(0, 0, 0, 0.35), 0 0 60px rgba(139, 92, 246, 0.15)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)',
        'glow-mixed': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(0, 212, 255, 0.15)',
        'pixel': '0 0 0 2px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)',
        'pixel-hover': '0 0 0 2px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'pixel-pulse': 'pixel-pulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pixel-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(0, 212, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.2)',
          },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.5), 0 0 60px rgba(0, 212, 255, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      borderRadius: {
        'pixel': '4px',
        'pixel-lg': '8px',
      },
      backgroundImage: {
        'pixel-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(0, 212, 255, 0.2) 100%)',
        'apple-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #007aff 50%, #00d4ff 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
