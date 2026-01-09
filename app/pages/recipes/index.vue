<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const types = recipeCategoryEnum.options
const selectedType = ref(route.query.category as string || 'tous')

const { data: recipes, status } = await useAsyncData(
    () => `recipes-${selectedType.value}`,
    async () => {
        const query = queryCollection('recipes')
            .select("title", "description", "image", "category", "date", "path")
            .order('date', 'DESC')
            .limit(6);
        if (selectedType.value !== 'tous') {
            query.where("category", "=", selectedType.value);
        }

        return query.all();
    },
    {
        watch: [selectedType]
    }
);

watch(selectedType, (newType) => {
    router.push({
        query: {
            ...route.query,
            category: newType === 'tous' ? undefined : newType
        }
    })
})
</script>


<template>
    <UPage>
        <UContainer>
            <UPageHeader title="Recettes" description="Voici la liste de toutes nos recettes, cuisinez bien ! 🍳" />
            <UPageBody>
                <div class="flex flex-wrap gap-2 sm:justify-center">
                    <UButton v-for="type in types" :key="type" :label="capitalizeFirst(type)"
                        :color="selectedType === type ? 'primary' : 'neutral'" @click="selectedType = type"
                        variant="soft" size="sm" />
                </div>

                <RecipePosts v-if="recipes && recipes.length > 0" :recipes="recipes" />

                <UEmpty v-else icon="i-lucide-file" title="Aucune recette trouvée"
                    description="Il n'y a pas de recettes pour votre recherche." />

            </UPageBody>
        </UContainer>
    </UPage>
</template>
