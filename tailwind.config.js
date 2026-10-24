/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0c1b',
          800: '#11142b',
          700: '#1b1f3b',
          600: '#272c52',
        },
        violet: {
          glow: '#7c5cff',
        },
        cyan: {
          glow: '#22d3ee',
        },
        magenta: {
          glow: '#e879f7',
        },
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(124,92,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,92,255,0.07) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.4)',
        'glow-soft': '0 0 60px -20px rgba(124,92,255,0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
