"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { QuoteCard } from "@/components/quote-card"
import type { Quote, Person } from "@/lib/types"

type QuotesContentProps = {
  quotes: Quote[]
  categories: string[]
  persons: Person[]
}

export function QuotesContent({
  quotes,
  categories,
  persons,
}: QuotesContentProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")?.toLowerCase() ?? ""
  const activeCategory = searchParams.get("category") ?? ""

  const personMap = useMemo(() => {
    const map = new Map<string, Person>()
    for (const p of persons) {
      map.set(p.id, p)
    }
    return map
  }, [persons])

  const filtered = useMemo(() => {
    let result = quotes

    if (activeCategory) {
      result = result.filter((q) => q.categories.includes(activeCategory))
    }

    if (query) {
      result = result.filter((q) => {
        if (q.text.toLowerCase().includes(query)) return true
        if (q.source?.toLowerCase().includes(query)) return true
        const person = personMap.get(q.personId)
        if (person?.name.toLowerCase().includes(query)) return true
        return false
      })
    }

    return result
  }, [quotes, query, activeCategory, personMap])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <SearchBar />
        <CategoryFilter categories={categories} />
      </div>

      <p className="text-sm text-muted-foreground">{filtered.length}件の語録</p>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          該当する語録が見つかりませんでした。
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              person={personMap.get(quote.personId)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
