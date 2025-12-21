<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  headline: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
})

</script>

<template>

  <UPageHeader :title="title" :description="description" :headline="headline">
  </UPageHeader>
  <NuxtImg v-if="image" :src="image" :alt="title" class="rounded-lg my-4" placeholder />

</template>
