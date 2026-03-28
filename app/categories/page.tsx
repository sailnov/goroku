import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getAllCategories, getQuotesByCategory } from "@/lib/data"

export const metadata: Metadata = {
  title: "シチュエーション一覧 - 語録",
  description: "シチュエーションやテーマから語録を探す",
}

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-3 text-2xl font-bold tracking-tight">
        シチュエーションから探す
      </h1>
      <p className="mb-8 text-muted-foreground">
        気持ちやシチュエーションに合った語録を見つけよう
      </p>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => {
          const count = getQuotesByCategory(category).length
          return (
            <Link
              key={category}
              href={`/quotes?category=${encodeURIComponent(category)}`}
            >
              <Card className="transition-colors hover:border-primary/40 hover:bg-primary/5">
                <CardContent className="flex items-center justify-between">
                  <span className="font-medium">{category}</span>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {count}件
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
