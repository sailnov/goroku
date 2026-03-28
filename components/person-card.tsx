import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Person } from "@/lib/types"

type PersonCardProps = {
  person: Person
  quoteCount: number
}

export function PersonCard({ person, quoteCount }: PersonCardProps) {
  return (
    <Link href={`/persons/${person.id}`}>
      <Card className="transition-colors hover:border-primary/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-primary">{person.name}</CardTitle>
            <Badge variant="outline">{quoteCount}件</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{person.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
