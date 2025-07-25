/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        50: 'repeat(80, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}