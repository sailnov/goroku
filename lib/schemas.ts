import { z } from "zod"

export const PersonSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string().optional(),
})

export const QuoteSchema = z.object({
  id: z.string(),
  text: z.string(),
  personId: z.string(),
  categories: z.array(z.string()),
  source: z.string().optional(),
  episode: z.string().optional(),
})
