<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll fixed app>
      <v-app-bar-nav-icon
        aria-label="Open Drawer"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        id="btnThemeSwitch"
        aria-label="Switch Theme"
        class="mr-4"
        :ripple="false"
        icon
        @click="themeSwitch"
      >
        <v-icon>mdi-brightness-4</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'MFA',
          to: '/tasks/mfa',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'TICT',
          to: '/tasks/tict',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'Cryptography',
          to: '/tasks/cryptography',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'Risk Analysis',
          to: '/tasks/risk-analysis',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'Captcha',
          to: '/tasks/captcha',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'Security By Design',
          to: '/tasks/Security-By-Design',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'SDLC',
          to: '/tasks/Secure-Development-Life-Cycle',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'GDPR',
          to: '/tasks/gdpr',
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'ICT Article',
          to: '/tasks/ICT-Article',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      // title: 'CS Minor',
    };
  },
  computed: {
    title() {
      let pageName = this.$route.name;
      if (pageName === 'index' || pageName === null) return 'CS Minor';
      pageName = pageName.substring(6); // removes the word tasks- for a clean name in the UI
      pageName = pageName.replace(/-/g, ' '); // replace all instances of - with a whitespace
      return 'CS Minor' + ' | ' + pageName;
    },
  },
  created() {
    const darkMode = this.$cookies.get('csmp_darkMode');
    if (darkMode !== null) {
      this.$vuetify.theme.dark = darkMode;
    }
  },
  methods: {
    themeSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$cookies.set('csmp_darkMode', this.$vuetify.theme.dark);
    },
  },
};
</script>

<style>
.nuxt-content h1 {
  font-weight: 300;
  font-size: 6rem;
  letter-spacing: 0.015625em;
}

.nuxt-content h2 {
  font-weight: 300;
  font-size: 3.75rem;
  letter-spacing: 0.0083333333em;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: normal;
}

.nuxt-content h4 {
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: 0.0073529412em;
}

.nuxt-content h5 {
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: normal;
}

.nuxt-content h6 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.0125em;
}

.nuxt-content p {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.03125em;
}
</style>
