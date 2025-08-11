import type React from "react"
import { notFound } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

const locales = ["en", "fr"]

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(params.locale as any)) notFound()

  return (
    <html lang={params.locale}>
      <body>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">My App</h1>
              <LanguageSwitcher currentLocale={params.locale} />
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
