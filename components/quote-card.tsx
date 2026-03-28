import Link from "next/link"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Quote, Person } from "@/lib/types"

type QuoteCardProps = {
  quote: Quote
  person?: Person
}

export function QuoteCard({ quote, person }: QuoteCardProps) {
  return (
    <Card className="flex flex-col justify-between">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            {person && (
              <Link
                href={`/persons/${person.id}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                — {person.name}
              </Link>
            )}
            {quote.source && (
              <span className="text-xs text-muted-foreground">
                （{quote.source}
                {quote.episode && ` ${quote.episode}`}）
              </span>
            )}
          </div>
        </CardHeader>
      <CardContent>
        <blockquote className="text-base leading-relaxed">
          「{quote.text}」
        </blockquote>
      </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-1.5">
            {quote.categories.map((cat) => (
              <Link
                key={cat}
                href={`/quotes?category=${encodeURIComponent(cat)}`}
              >
                <Badge
                  variant="secondary"
                  className="transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {cat}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
    </Card>
  )
}
