/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      '80': '0.8em',
      '100': '1em',
      '110': '1.1em',
      '150': '1.5em',
      '200': '2em',
      '300': '3em',
    },
    lineHeight: {
      '0': '1em',
      '1': '1.1em',
      '2': '1.2em',
      '3': '1.3em',
      '4': '1.4em',
      '5': '1.5em',
    },
    fontFamily: {
      body: ['Glacial Indifference', 'sans-serif'],
      hand: ['Gloria Hallelujah', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
  purge: false
}
