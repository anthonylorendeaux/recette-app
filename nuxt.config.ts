export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_module",
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-studio',
  ],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  studio: {
    repository: {
      provider: 'github',
      owner: 'anthonylorendeaux',
      repo: 'recette-app',
      branch: 'master'
    }
  }
})