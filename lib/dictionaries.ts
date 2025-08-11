const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (locale in dictionaries) {
    return dictionaries[locale as keyof typeof dictionaries]()
  }
  // Fallback to English if locale not found
  return dictionaries.en()
}
