/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#14172B',
        'coin-label': '#737BAE',
        'coin-sublabel': "#5A5F7D",
        'label-value': '#ECF0FF'
      },
      fontFamily:{
        'Tomorrow': ['Tomorrow', 'sans-serif']
      }
    }
  },
  plugins: [],
}
