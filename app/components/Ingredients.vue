<script setup lang="ts">
import type { CheckboxGroupItem } from '@nuxt/ui'

const props = defineProps({
  ingredients: {
    type: Array as PropType<Array<{ quantity: string, ingredient: string }>>,
    default: () => []
  }
})

const items = computed<CheckboxGroupItem[]>(() => {
  return props.ingredients.map(ingredient => ({
    label: `${ingredient.quantity} - ${ingredient.ingredient}`,
    value: ingredient.ingredient,
  }))
})

const value = ref<string[]>([])
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3>
          <UIcon name="i-lucide-shopping-basket" />
          Ingrédients
        </h3>
        <UBadge :label="`${ingredients.length} éléments`" variant="subtle" />
      </div>
    </template>

    <UCheckboxGroup v-model="value" :items="items" class="mt-4" />
  </UCard>
</template>
