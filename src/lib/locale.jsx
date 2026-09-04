"use client"

import { createContext, useContext, useEffect, useState } from "react"

import { translations } from "@/content/translations"

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("es")

  useEffect(() => {
    const stored = window.localStorage.getItem("locale")
    if (stored === "es" || stored === "en") setLocale(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem("locale", locale)
  }, [locale])

  function toggleLocale() {
    setLocale((prev) => (prev === "es" ? "en" : "es"))
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error("useLocale must be used within a LocaleProvider")
  return context
}
