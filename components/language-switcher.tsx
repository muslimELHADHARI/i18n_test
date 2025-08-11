"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = {
  en: { name: "English", flag: "🇺🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
}

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/"
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Globe className="h-4 w-4 mr-2" />
          {languages[currentLocale as keyof typeof languages]?.flag}{" "}
          {languages[currentLocale as keyof typeof languages]?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([locale, { name, flag }]) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={currentLocale === locale ? "bg-accent" : ""}
          >
            <span className="mr-2">{flag}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
