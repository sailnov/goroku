"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"

type CategoryFilterProps = {
  categories: string[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category") ?? ""

  function handleClick(category: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (activeCategory === category) {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.replace(`/quotes?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button key={cat} onClick={() => handleClick(cat)}>
          <Badge variant={activeCategory === cat ? "default" : "outline"}>
            {cat}
          </Badge>
        </button>
      ))}
    </div>
  )
}
