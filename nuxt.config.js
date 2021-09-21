import colors from 'vuetify/es5/util/colors';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - CS Minor Portfolio',
    title: 'CS Minor Portfolio',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio for my minor in Cyber Security',
      },
      {
        name: 'theme-color',
        content: '#121212',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  serverMiddleware: {},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
  ],

  toast: {
    position: 'bottom-center',
    duration: 5000,
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyDUqyxNHDHxi75XFazSawUFEtSVFna6JBs',
      authDomain: 'cs-minor-portfolio-wh.firebaseapp.com',
      projectId: 'cs-minor-portfolio-wh',
      storageBucket: 'cs-minor-portfolio-wh.appspot.com',
      messagingSenderId: '845058648604',
      appId: '1:845058648604:web:fd2a8ae98fe117c3068dd9',
    },
    services: {
      firestore: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'CS Minor',
      short_name: 'CSM',
      lang: 'en',
      theme_color: '#121212',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
