const webpack = require("webpack");
export default {
  router: {
    base: "/livre-cafe/",
  },
  srcDir: "src/",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "livre-cafe",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/livre-cafe/favicon.ico" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "@/assets/scss/style.scss", lang: "scss" }],
  styleResources: {
    scss: [
      "@/assets/scss/foundation/_variable.scss",
      "@/assets/scss/mixins/index.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/vue-scrollto"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Exo+2:200,500"],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
      }),
    ],
  },
};
