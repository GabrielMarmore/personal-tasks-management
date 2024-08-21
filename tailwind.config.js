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
    },
    fontFamily: {
      'cursive': ['Shantell Sans', 'cursive'],
    },
  },
  plugins: [],
}

