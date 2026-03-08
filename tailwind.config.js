/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1f8',
          100: '#d0d8ee',
          200: '#a1b1dd',
          300: '#728acc',
          400: '#4363bb',
          500: '#2a4ea0',
          600: '#1e3a84',
          700: '#1B2B5E',
          800: '#152347',
          900: '#0d1830',
          DEFAULT: '#1B2B5E',
        },
        crimson: {
          50:  '#fdf0f2',
          100: '#fbd5da',
          200: '#f5a8b3',
          300: '#ec6e7f',
          400: '#df344e',
          500: '#c31d37',
          600: '#9B1B30',
          700: '#7d1527',
          800: '#610f1e',
          900: '#490b16',
          DEFAULT: '#9B1B30',
        },
        gold: {
          50:  '#fdf8ee',
          100: '#f9edcf',
          200: '#f2d79f',
          300: '#e9bd67',
          400: '#d9a13a',
          500: '#C9A84C',
          600: '#b08d32',
          700: '#8c6f26',
          800: '#6e551d',
          900: '#543f14',
          DEFAULT: '#C9A84C',
        },
        cream: {
          DEFAULT: '#F5F3EF',
          100: '#FAF9F6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%':       { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
