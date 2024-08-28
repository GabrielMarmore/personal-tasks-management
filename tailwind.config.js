/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#01080e',
      'white': '#e3f0ff',
      'red': '#e91e63',
      'green': '#4caf50',
      'purple': '#351E46',
      'purple-light': '#5D4370'
    },
    fontFamily: {
      'cursive': ['Shantell Sans', 'cursive'],
    },
  },
  plugins: [],
}

