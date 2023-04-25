/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#CCDBD2",
        grey: "#D9D9D9",
        casiBlanco: "#F0F7F4",
        verde: "#329F5B",
        texto: "#71717a"

      }
    },
  },
  plugins: [],
}
