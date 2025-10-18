/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#322c27',
        cream: '#ece9d6',
      },
      fontFamily: {
        amarante: ['Amarante', 'serif'],
        pirata: ['Pirata One', 'serif'],
      },
    },
  },
  plugins: [],
}