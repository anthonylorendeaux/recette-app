<script setup lang="ts">
const { data: navigation } = await useAsyncData('recipes-navigation', () =>
  queryCollectionNavigation('recipes')
)

const { data: files } = useLazyAsyncData('recipes-search', () =>
  queryCollectionSearchSections('recipes'),
  { server: false }
)

const searchTerm = ref('')

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    }
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch v-model:search-term="searchTerm" :files="files" :navigation="navigation" shortcut="meta_k"
        :fuse="{ resultLimit: 42 }" placeholder="Rechercher une recette..." />
    </ClientOnly>
  </UApp>
</template>
