import type { NavigationMenuItem } from '@nuxt/ui'
import { recipeCategoryEnum } from './categories'

const categoryLinks: NavigationMenuItem[] = recipeCategoryEnum.options
    .filter(cat => cat !== 'tous')
    .map(cat => ({
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
        to: `/recipes?category=${cat}`
    }))

export const navLinks: NavigationMenuItem[] = [
    {
        label: 'Accueil',
        icon: 'i-lucide-house',
        to: '/'
    },
    {
        label: 'Recettes',
        icon: 'i-lucide-book-open-text',
        to: '/recipes',
        /* children: categoryLinks */
    },
    {
        label: 'À propos',
        icon: 'i-lucide-user',
        to: '/about'
    },
]
