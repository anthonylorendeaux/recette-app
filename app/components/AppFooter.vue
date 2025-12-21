<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
        </template>

        <UNavigationMenu :items="navLinks" variant="link"
            :ui="{ linkLeadingIcon: 'hidden', linkLabel: 'text-dimmed hover:text-default' }" :highlight="false"
            highlightColor="neutral" />

        <template #right>
            <UButton color="neutral" variant="link" to="https://anthony-lorendeaux.com" target="_blank">Made with ❤️ by
                Anthony Lorendeaux</UButton>
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/nuxt/nuxt"
                target="_blank" aria-label="GitHub" />
        </template>
    </UFooter>
</template>
