import Link from "next/link"
import { QuoteCard } from "@/components/quote-card"
import {
  getAllCategories,
  getAllQuotes,
  getPersonById,
  getQuotesByCategory,
} from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const allQuotes = getAllQuotes()
  const categories = getAllCategories()
  const featured = allQuotes.slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          こんなとき、
          <span className="text-primary">あの人</span>
          なら何て言う？
        </h1>
        <p className="mx-auto max-w-lg text-lg text-muted-foreground">
          歴史上の偉人やキャラクターの言葉から、
          あなたのシチュエーションにぴったりの一言を見つけよう。
        </p>
      </section>

      {/* シチュエーションから探す */}
      <section className="mb-14">
        <h2 className="mb-5 text-lg font-semibold">
          シチュエーションから探す
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const count = getQuotesByCategory(cat).length
            return (
              <Link
                key={cat}
                href={`/quotes?category=${encodeURIComponent(cat)}`}
              >
                <Badge
                  variant="outline"
                  className="px-3.5 py-1.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {cat}
                  <span className="ml-1.5 text-xs opacity-60">{count}</span>
                </Badge>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ピックアップ */}
      <section className="mb-14">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold">こんな言葉、知ってる？</h2>
          <Link
            href="/quotes"
            className="text-sm text-primary hover:underline"
          >
            もっと見る →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              person={getPersonById(quote.personId)}
            />
          ))}
        </div>
      </section>

      {/* 検索誘導 */}
      <section className="mb-16 rounded-xl border bg-card p-8 text-center">
        <p className="mb-4 text-muted-foreground">
          言いたいこと、伝えたい気持ちはありますか？
        </p>
        <Link
          href="/quotes"
          className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          語録を検索する
        </Link>
      </section>
    </div>
  )
}
