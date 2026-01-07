<script setup lang="ts">

const route = useRoute()

const { data: recipe } = await useAsyncData(route.path, () => {
  return queryCollection('recipes').path(route.path).first()
})

if (!recipe.value) {
  throw createError({ statusCode: 404, statusMessage: 'Recette introuvable' })
}

</script>

<template>

  <UPageHeader :title="recipe?.title" :description="recipe?.description" :headline="recipe?.category">
  </UPageHeader>
  <NuxtImg v-if="recipe?.image" :src="recipe?.image" :alt="recipe.title" class="rounded-lg my-4" placeholder />

</template>
