import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'labrada': ['Labrada', 'serif'],
      },
      height: {
        'screen-minus-header': 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
} 