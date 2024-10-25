// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'nuxt-swiper', '@pinia/nuxt', '@nuxt/fonts', '@nuxt/icon'],
  css: ['~/assets/scss/main.scss'],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  }, 
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_mixin.scss" as *; @use "@/assets/scss/_var.scss" as *;',
        },
      },
    },
  },
})