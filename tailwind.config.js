/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#1e293b',
          950: '#0f172a',
        },
        teal: {
          950: '#042f2e',
        },
        brand: {
          50: '#f0f9fb',
          100: '#d9f0f5',
          200: '#b8e3ec',
          300: '#87cfdf',
          400: '#4eb3cb',
          500: '#2D7389',
          600: '#286379',
          700: '#245264',
          800: '#234554',
          900: '#213a48',
        },
        accent: {
          50: '#fafef0',
          100: '#f5fcd9',
          200: '#eaf9b8',
          300: '#dff687',
          400: '#D2E075',
          500: '#bfd24e',
          600: '#a8b83d',
          700: '#8a9a2f',
          800: '#6d7b26',
          900: '#5a6522',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};