import colors from 'vuetify/es5/util/colors';

export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | CS Minor Portfolio',
    title: 'Cyber Security Minor Fontys',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio for my FHICT Cyber Security minor',
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
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://content.nuxtjs.org/
    '@nuxt/content',
    // https://sentry.nuxtjs.org/
    '@nuxtjs/sentry',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  sentry: {
    dsn: process.env.SENTRY_DSN || '',
    tracing: true,
    browserOptions: {},
  },

  content: {
    liveEdit: false,
  },

  toast: {
    position: 'bottom-center',
    duration: 5000,
  },

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
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
      background_color: '#121212',
    },
    icon: {
      fileName: 'cs-minor-icon.png',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    // Workaround for issue https://github.com/nuxt/nuxt/issues/10751
    extend(config) {
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch');
    },
  },
};
