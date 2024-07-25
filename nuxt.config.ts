// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "vue3-perfect-scrollbar/nuxt",
  ],
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  app: {
    rootAttrs: {
      class: "app-wrapper",
    },
  },
  debug: false,
  ssr: false,
});
