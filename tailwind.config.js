/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl': '1px 2px 8px -5px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
