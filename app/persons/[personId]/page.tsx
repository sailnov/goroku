import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { QuoteCard } from "@/components/quote-card"
import {
  getAllPersons,
  getPersonById,
  getQuotesByPersonId,
} from "@/lib/data"

type Props = {
  params: Promise<{ personId: string }>
}

export async function generateStaticParams() {
  return getAllPersons().map((p) => ({ personId: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { personId } = await params
  const person = getPersonById(personId)
  if (!person) return { title: "Not Found - 語録" }
  return { title: `${person.name} - 語録` }
}

export default async function PersonDetailPage({ params }: Props) {
  const { personId } = await params
  const person = getPersonById(personId)
  if (!person) notFound()

  const quotes = getQuotesByPersonId(personId)

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-10">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-primary">
          {person.name}
        </h1>
        <p className="text-muted-foreground">{person.description}</p>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-semibold">
          この人の語録
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            {quotes.length}件
          </span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} person={person} />
          ))}
        </div>
      </section>
    </div>
  )
}
