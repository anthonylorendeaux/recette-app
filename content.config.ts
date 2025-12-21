import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { recipeCategoryEnum } from './app/utils/categories'

const createIngredientSchema = () => z.object({
  quantity: z.string().describe('Quantité (ex: 200g, 2 pots)'),
  ingredient: z.string().describe('Nom de l\'ingrédient')
})

export default defineContentConfig({
  collections: {
    recipes: defineCollection({
      type: 'page',
      source: 'recipes/*.md',
      schema: z.object({
        title: z.string().describe('Titre de la recette'),
        description: z.string().describe('Description courte pour le référencement'),
        slug: z.string().describe('Slug de l\'article'),
        image: z.string().describe('URL de l\'image principale'),
        author: z.string().default('Famille').describe('Auteur de la recette'),
        category: recipeCategoryEnum,
        date: z.string().date().describe('Date de création (YYYY-MM-DD)'),
        prepTime: z.number().min(0).optional().describe('Temps de préparation (min)'),
        cookTime: z.number().min(0).optional().describe('Temps de cuisson (min)'),
        servings: z.number().min(1).default(4).describe('Nombre de personnes'),
        ingredients: z.array(createIngredientSchema()).optional().describe('Liste des ingrédients')
      })
    }),
  }
})
