import { persons } from "@/data/persons"
import { quotes } from "@/data/quotes"
import type { Person, Quote } from "@/lib/types"

export function getAllPersons(): Person[] {
  return persons
}

export function getPersonById(id: string): Person | undefined {
  return persons.find((p) => p.id === id)
}

export function getAllQuotes(): Quote[] {
  return quotes
}

export function getQuotesByPersonId(personId: string): Quote[] {
  return quotes.filter((q) => q.personId === personId)
}

export function getQuotesByCategory(category: string): Quote[] {
  return quotes.filter((q) => q.categories.includes(category))
}

export function searchQuotes(query: string): Quote[] {
  const lower = query.toLowerCase()
  return quotes.filter((q) => {
    if (q.text.toLowerCase().includes(lower)) return true
    if (q.source?.toLowerCase().includes(lower)) return true
    const person = getPersonById(q.personId)
    if (person?.name.toLowerCase().includes(lower)) return true
    return false
  })
}

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export function getAllCategories(): string[] {
  const set = new Set<string>()
  for (const q of quotes) {
    for (const c of q.categories) {
      set.add(c)
    }
  }
  return Array.from(set).sort()
}

export function getPersonForQuote(quote: Quote): Person | undefined {
  return getPersonById(quote.personId)
}

export function getQuoteCountByPerson(personId: string): number {
  return quotes.filter((q) => q.personId === personId).length
}
