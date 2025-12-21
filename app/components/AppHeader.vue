<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

defineProps<{
    links: NavigationMenuItem[]
}>()
</script>

<template>
    <UHeader title="Jum's Cookbook" to="/">
        <template #title>
            <NuxtImg src="/logo.png" alt="Jum's Cookbook" class="h-8 w-auto sm:h-10" density="pad" placeholder />
        </template>
        <UNavigationMenu :items="links" />
        <template #body>
            <UNavigationMenu :items="links" orientation="vertical" />
        </template>
        <template #right>
            <UContentSearchButton />
            <UColorModeButton />
        </template>
    </UHeader>
</template>
