/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          500: '#6E07F3',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};