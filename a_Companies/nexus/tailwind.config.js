/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./2.src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'vc-primary': '#00F0FF',
        'vc-dark': '#0B0C15',
        'advisory-navy': '#0F172A',
        'advisory-gold': '#D4AF37',
        'corp-blue': '#2563EB',
        'corp-slate': '#F1F5F9'
      }
    },
  },
  plugins: [],
}
