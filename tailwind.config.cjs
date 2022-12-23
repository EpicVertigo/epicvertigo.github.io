/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,css}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        bignoodle: ['BigNoodle', 'sans']
      }
    },
  },
  plugins: [],
}
