import { Suspense } from "react"
import type { Metadata } from "next"
import { getAllCategories, getAllPersons, getAllQuotes } from "@/lib/data"
import { QuotesContent } from "./quotes-content"

export const metadata: Metadata = {
  title: "語録一覧 - 語録",
}

export default function QuotesPage() {
  const allQuotes = getAllQuotes()
  const allCategories = getAllCategories()
  const allPersons = getAllPersons()

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-2 text-2xl font-bold tracking-tight">語録を探す</h1>
      <p className="mb-8 text-muted-foreground">
        キーワードやシチュエーションで、ぴったりの一言を見つけよう
      </p>
      <Suspense>
        <QuotesContent
          quotes={allQuotes}
          categories={allCategories}
          persons={allPersons}
        />
      </Suspense>
    </div>
  )
}
