<script setup lang="ts">
const cards = ref([
    {
        title: 'Édition 1-Clic',
        description: 'Ajoutez une recette en 30s avec Nuxt Studio, sans code technique',
        icon: 'i-lucide-sparkles',
        to: '/_studio',
    },
    {
        title: 'Recherche Magique',
        description: 'Trouvez "blanquette mamie" en 1s parmi 150+ recettes familiales',
        icon: 'i-lucide-file-search-corner',
        to: '/recettes',
    },
    {
        title: 'Famille Connectée',
        description: 'Tout le monde ajoute ses recettes, partage en temps réel',
        icon: 'i-lucide-users',
    }
]);

const items = [
    'pistache-pictures/1.jpg',
    'pistache-pictures/2.jpg',
    'pistache-pictures/3.jpg',
    'pistache-pictures/4.jpg',
    'pistache-pictures/5.jpg',
    'pistache-pictures/6.jpg'
];
</script>

<template>
    <UPage>
        <UContainer>
            <UPageHeader title="À propos" description="Le livre de recettes de famille, version numérique ✨" />
            <UPageBody>
                <UPageSection orientation="horizontal" title="Comment ça marche ?" description="Nuxt Studio transforme notre site en un véritable CMS visuel.
                            Ajoutez, modifiez ou supprimez des recettes directement depuis l'interface,
                            avec aperçu en temps réel et publication en 1-clic vers GitHub." :links="[{
                                label: 'Nuxt studio', to: 'https://content.nuxt.com/docs/studio/setup', trailingIcon: 'i-lucide-square-arrow-out-up-right', size: 'md', color: 'primary', variant: 'soft'
                            }, {
                                label: 'Modifier les recettes', to: '/recipes', size: 'md', color: 'neutral', variant: 'outline', trailingIcon: 'i-lucide-square-pen'
                            }]">
                    <NuxtImg src="about.png" class="rounded-lg" width="600" height="600" alt="Illustration" />
                </UPageSection>
                <UPageSection title="Fonctionalitées"
                    description="Tout ce que vous avez besoin pour vos recettes préférées" orientation="vertical">
                    <UPageGrid>
                        <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" spotlight
                            spotlight-color="primary" variant="subtle" />
                    </UPageGrid>
                </UPageSection>

                <USeparator icon="i-lucide-a-large-small" />
                <UPageCTA variant="soft" title="Prêt à cuisiner ?" description="Allez consulter toutes nos recettes"
                    orientation="horizontal" :links="[{
                        label: 'Voir toutes les recettes',
                        size: 'xl',
                        trailingIcon: 'i-lucide-cooking-pot',
                        to: '/recettes'
                    }]">
                    <UCarousel v-slot="{ item }" :items="items" class="w-full max-w-xs mx-auto" arrows>
                        <NuxtImg :src="item" width="320" height="320" class="rounded-lg" placeholder />
                    </UCarousel>
                </UPageCTA>
            </UPageBody>
        </UContainer>
    </UPage>

</template>
