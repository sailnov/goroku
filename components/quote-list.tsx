import { QuoteCard } from "@/components/quote-card"
import type { Quote, Person } from "@/lib/types"

type QuoteListProps = {
  quotes: Quote[]
  persons: Map<string, Person>
}

export function QuoteList({ quotes, persons }: QuoteListProps) {
  if (quotes.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        該当する語録が見つかりませんでした。
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          person={persons.get(quote.personId)}
        />
      ))}
    </div>
  )
}
