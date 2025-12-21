<script setup lang="ts">
const { data: recipes } = await useAsyncData('recipes', () => {
    const query = queryCollection('recipes')
        .select("title", "description", "image", "category", "date", "slug")
        .order('date', 'DESC')
        .limit(3);
    return query.all();
});
</script>

<template>
    <UPage>
        <UPageCTA orientation="horizontal" variant="soft" :links="[{
            label: 'Voir les recettes', to: '/recipes', trailingIcon: 'i-lucide-move-right', size: 'md', color: 'primary', variant: 'soft'
        }, {
            label: 'En savoir plus', to: '/about', size: 'md', color: 'neutral', variant: 'outline'
        }]" class="rounded-none">
            <template #title>
                Jum's <span class="text-primary">Cook book</span>
            </template>
            <template #description>
                Les recettes de vos jumeaux favoris à un seul endroit. 🧑‍🍳
            </template>
            <NuxtImg src="hero.png" width="320" height="364" alt="Illustration" class="w-full rounded-lg" />
        </UPageCTA>

        <UPageBody>
            <UContainer>
                <h2 class="text-xl sm:text-3xl font-bold text-left">
                    Les dernières recettes
                </h2>
                <USeparator icon="i-lucide-cooking-pot" class="mb-2" />
                <RecipePosts v-if="recipes" :recipes="recipes" :highlightFirst="false" />
            </UContainer>
        </UPageBody>
    </UPage>
</template>