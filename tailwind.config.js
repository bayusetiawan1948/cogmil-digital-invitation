/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E74646',
        secondary: '#FA9884',
        third: '#FFE5CA',
        fourth: '#FFF3E2',
        black: '#101010',
        white: '#F6F6F6',
      },
      fontFamily: {
        RS: 'Roboto Slab',
      },
    },
  },
  plugins: [],
};
