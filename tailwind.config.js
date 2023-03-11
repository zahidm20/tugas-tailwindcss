/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'login' : "url('../img/bg.png')"
      }
    },
  },
  plugins: [],
}
