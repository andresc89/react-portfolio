module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'zinc-900': '#192127'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
