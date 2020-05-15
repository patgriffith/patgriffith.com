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
    fontFamily: {
      default: ['Glacial Indifference', 'sans-serif'],
      hand: ['Gloria Hallelujah', 'sans-serif']
    },
    colors: {   
        white: {
          default: 'white'
        },  
        red: {
          default: 'red'
        },
        orange: {
          default: 'orange'
        },
        yellow: {
          default: 'yellow'
        },
        green: {
          default: 'green'
        },
        blue: {
          default: 'blue'
        },
        purple: {
            default: 'purple' ,
            ghostwhite: 'ghostwhite',
            lavenderblush: 'lavenderblush',
            indigo: 'indigo'
        },  
    }
  },
  variants: {},
  plugins: [],
  purge: false
}
