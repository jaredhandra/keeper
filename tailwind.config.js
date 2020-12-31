module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#DBE1EB',
        secondary: '#3F403B',
        background: '#FDF8F8',
        border: '#696D66'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
