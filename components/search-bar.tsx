"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") ?? "")

  const updateUrl = useCallback(
    (q: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (q) {
        params.set("q", q)
      } else {
        params.delete("q")
      }
      router.replace(`/quotes?${params.toString()}`)
    },
    [router, searchParams]
  )

  useEffect(() => {
    const timer = setTimeout(() => updateUrl(query), 300)
    return () => clearTimeout(timer)
  }, [query, updateUrl])

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="言いたいこと、人物名、キーワードで検索..."
        className="pl-9"
      />
    </div>
  )
}
