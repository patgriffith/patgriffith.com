export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */

 serverMiddleware: [
    '~/servermiddleware/seo.js'
  ],

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
    '@/assets/css/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/markdown.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxtdown',
    '@nuxtjs/axios',
  ],
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
