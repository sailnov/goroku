import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "語録 - 名言・セリフ集",
  description:
    "こんなとき、あの人なら何て言う？歴史上の偉人やキャラクターの語録をシチュエーション別に探せるサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
