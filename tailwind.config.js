module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'yellow': '#FFEB3A',
      'black': '#000000',
      'blue': '#3959FF'
    }),
    fontFamily: {
      'karla': ['Karla', 'sans-serif'],
      'inconsolata': ['Inconsolata', 'mono'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
