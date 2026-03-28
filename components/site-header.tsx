import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          語録
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/quotes"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            語録を探す
          </Link>
          <Link
            href="/categories"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            シチュエーション
          </Link>
          <Link
            href="/persons"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            人物から探す
          </Link>
        </nav>
      </div>
      <Separator />
    </header>
  )
}
