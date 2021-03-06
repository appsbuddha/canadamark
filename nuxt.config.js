export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'ssr',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CANADAMARK',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: '/fonts/Sanomat-Web-Regular-Regular.ttf', crossorigin: "anonymous" },
      { rel: 'preload', as: 'font', href: '/fonts/D-Din-Regular.ttf', crossorigin: "anonymous" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://www.canadamark.com',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
