import type { Metadata } from "next"
import { PersonCard } from "@/components/person-card"
import { getAllPersons, getQuoteCountByPerson } from "@/lib/data"

export const metadata: Metadata = {
  title: "人物一覧 - 語録",
}

export default function PersonsPage() {
  const persons = getAllPersons()

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-2xl font-bold tracking-tight">人物一覧</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {persons.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            quoteCount={getQuoteCountByPerson(person.id)}
          />
        ))}
      </div>
    </div>
  )
}
