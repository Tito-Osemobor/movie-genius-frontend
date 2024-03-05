/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'opacBlack-70': 'rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}