export default {
  mode: 'universal',
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      var projects = fs.readdirSync('./content/projects').map(file => {
        return {
          route: `/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/projects/${file}`),
        };
      });
      var words = fs.readdirSync('./content/words').map(file => {
        let payload = require(`./content/words/${file}`)
        return {
          route: '/' + (typeof payload.project !== 'undefined' ? payload.project : 'words') + `/${path.parse(file).name}`, // Return the slug
          payload: payload,
        };
      });
      let pages = projects.concat(words)
      return pages
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: "msapplication-TileColor", content: "#6B46C1" },
      { name: "theme-color", content: "#6B46C1" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/fav/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/fav/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/fav/favicon-16x16.png" },
      { rel: "manifest", href: "/fav/site.webmanifest" },
      { rel: "mask-icon", href: "/fav/safari-pinned-tab.svg", color: "#6B46C1" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/markdown.js' },
    { src: "~/plugins/prism.js", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/netlify-files'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-interpolation'
  ],
  netlifyFiles: {
    netlifyToml: {
      redirects: [
        {
          from: '/resume',
          to: 'https://docs.google.com/document/d/1VP9QyA_wGLdSWg6rZHX0NoLZo8nrZv8Z0_QTN08ey5c/edit?usp=sharing',
          status: 301
        }
      ]
    }
  },
  markdownit: {
    injected: true,
  },
  googleAnalytics: {
    id: 'UA-165327686-1',
    // debug: {
    //   enabled: true,
    //   sendHitTask: true
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
