<script setup lang="ts">
interface Props {
    recipes: any
    highlightFirst?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    recipes: () => [],
    highlightFirst: true,
})

</script>

<template>
    <UBlogPosts v-if="recipes?.length">
        <UBlogPost v-for="(recipe, index) in recipes" :key="index" v-bind="recipe" :to="recipe.path"
            :orientation="highlightFirst && index === 0 ? 'horizontal' : 'vertical'"
            :class="[highlightFirst && index === 0 && 'col-span-full']" :badge="{
                label: capitalizeFirst(recipe.category),
                variant: 'soft',
                color: 'neutral'
            }" />
    </UBlogPosts>
</template>
