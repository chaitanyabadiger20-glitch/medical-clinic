/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0F172A',
          900: '#0F1729',
          800: '#1E2A47',
        },
        royal: {
          600: '#1E3A8A',
          500: '#2452C0',
          400: '#3B5BDB',
        },
        emerald: {
          500: '#10B981',
          400: '#34D399',
        },
        gold: '#C9A227',
        light: '#F8FAFC',
        slate: {
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', '"Helvetica Neue"', 'sans-serif'],
        display: ['"Poppins"', '"Montserrat"', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(15, 23, 42, 0.15)',
        'glass': '0 8px 32px rgba(15, 23, 42, 0.1)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}