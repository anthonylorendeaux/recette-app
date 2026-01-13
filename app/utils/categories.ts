import z from 'zod'

export type RecipeCategory = 'tous' | 'entrée' | 'plat principal' | 'dessert' | 'goûter' | 'apéro'

export const recipeCategoryEnum = z.enum([
    'tous',
    'entrée',
    'plat principal',
    'dessert',
    'goûter',
    'apéro'
])
