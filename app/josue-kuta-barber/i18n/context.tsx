"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translations, languageNames, type Language } from "./translations"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  languageNames: typeof languageNames
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = useCallback(
    (key: string) => {
      return translations[language][key] || translations.fr[key] || key
    },
    [language]
  )

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, languageNames }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
