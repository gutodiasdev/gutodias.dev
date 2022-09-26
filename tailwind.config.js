/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'source-sans': ['"Source Sans Pro"', 'cursive']
      }
    },
  },
  plugins: [],
}
