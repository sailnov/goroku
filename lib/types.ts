export type Person = {
  id: string
  name: string
  description: string
  imageUrl?: string
}

export type Quote = {
  id: string
  text: string
  personId: string
  categories: string[]
  source?: string
  episode?: string
}
