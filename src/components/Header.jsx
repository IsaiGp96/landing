"use client"

import { useState } from "react"
import clsx from "clsx"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"

import { SectionWrapper } from "@/components/Section"
import { Logo } from "@/components/Logo"
import { ScrollProgress } from "@/components/ScrollProgress"
import { useLocale } from "@/lib/locale"
import { useActiveSection } from "@/lib/useActiveSection"

const SECTION_IDS = ["overview", "experience", "skills", "pricing", "faq"]

function LanguageToggle({ className }) {
  const { toggleLocale, t } = useLocale()

  return (
    <button
      onClick={toggleLocale}
      type="button"
      aria-label={t.languageToggle.aria}
      className={
        className ??
        "inline-block rounded-full bg-white/10 px-3 py-2 text-sm backdrop-blur transition duration-300 hover:bg-white/15"
      }>
      {t.languageToggle.label}
    </button>
  )
}

function Navigation({ activeId }) {
  const { t } = useLocale()

  return (
    <div className="ml-auto hidden items-center gap-8 lg:flex">
      {t.header.links.map((link, index) => {
        const isActive = link.url.slice(1) === activeId

        return (
          <a
            key={index}
            href={link.url}
            aria-current={isActive ? "true" : undefined}
            className={clsx(
              "relative inline-block py-1 text-sm transition",
              isActive ? "text-white" : "text-white/75 hover:text-white",
            )}>
            {link.title}
            <span
              className={clsx(
                "absolute inset-x-0 -bottom-1 h-px bg-accent-400 transition-opacity",
                isActive ? "opacity-100" : "opacity-0",
              )}
            />
          </a>
        )
      })}

      <LanguageToggle />

      <a
        href="mailto:abraham_gp96@outlook.com"
        className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition duration-300 hover:bg-white/15">
        {t.header.contact}
      </a>
    </div>
  )
}

function MobileMenu({ showMenu, activeId, onNavigate }) {
  const { t } = useLocale()

  return (
    showMenu && (
      <div className="py-4">
        <ul className="flex flex-col items-center space-y-4">
          {t.header.links.map((link, index) => {
            const isActive = link.url.slice(1) === activeId

            return (
              <li key={index}>
                <a
                  href={link.url}
                  onClick={onNavigate}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    "inline-block text-base font-medium transition",
                    isActive ? "text-white" : "text-white/75 hover:text-white",
                  )}>
                  {link.title}
                </a>
              </li>
            )
          })}
          <li>
            <LanguageToggle className="inline-block rounded-full bg-white/10 px-4 py-2 text-base font-medium backdrop-blur transition duration-300 hover:bg-white/15" />
          </li>
        </ul>
      </div>
    )
  )
}

export function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-zinc-950/30 backdrop-blur-lg">
      <SectionWrapper>
        <header>
          <nav className="flex items-center justify-between py-4">
            <div>
              <a href="#" className="inline-flex items-center gap-2">
                <Logo className="text-lg font-normal lg:text-2xl" />
              </a>
            </div>

            <Navigation activeId={activeId} />

            <button
              onClick={() => setShowMenu(!showMenu)}
              type="button"
              aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={showMenu}
              className="relative ml-auto inline-flex lg:hidden">
              <Bars2Icon className={`h-6 w-6 transition duration-500 ${showMenu ? "rotate-180 opacity-0" : ""}`} />
              <XMarkIcon
                className={`absolute inset-0 h-6 w-6 transition duration-500 ${
                  showMenu ? "" : "-rotate-180 opacity-0"
                }`}
              />
            </button>
          </nav>
        </header>

        <MobileMenu showMenu={showMenu} activeId={activeId} onNavigate={() => setShowMenu(false)} />
      </SectionWrapper>

      <ScrollProgress />
    </div>
  )
}
