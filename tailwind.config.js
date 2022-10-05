/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'universe': 'universe',
        'opensans': 'Open Sans'
      },
      colors: {
        'cf-light-blue': '#0099CC',
        'cf-blue': '#003359',
        'cf-yellow': '#f6a800'
      }
    },
  },
  plugins: [],
}