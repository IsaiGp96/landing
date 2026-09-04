"use client"

import { SectionWrapper } from "./Section"
import { Logo } from "./Logo"
import { GitHubIcon, LinkedInIcon } from "./Icons"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { useLocale } from "@/lib/locale"

const contactItems = [
  { title: "abraham_gp96@outlook.com", url: "mailto:abraham_gp96@outlook.com" },
  { title: "GitHub — IsaiGp96", url: "https://github.com/IsaiGp96" },
  { title: "LinkedIn", url: "https://linkedin.com/in/abraham-isaí-garcía-2306b7265" },
]

export function Footer() {
  const { t } = useLocale()

  const icons = [
    { component: EnvelopeIcon, name: t.footer.iconNames.email, url: "mailto:abraham_gp96@outlook.com" },
    { component: GitHubIcon, name: t.footer.iconNames.github, url: "https://github.com/IsaiGp96" },
    { component: LinkedInIcon, name: t.footer.iconNames.linkedin, url: "https://linkedin.com/in/abraham-isai-garcia-2306b7265" },
  ]

  const sections = [
    { title: t.footer.navTitle, items: t.header.links },
    { title: t.footer.contactTitle, items: contactItems },
  ]

  return (
    <div className="pt-8 lg:pt-16">
      <div className="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] py-32 lg:px-24 lg:py-32">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
          <div className="h-1.5 w-8 rounded-lg bg-white"></div>
        </div>

        <SectionWrapper>
          <div className="flex w-full flex-col gap-8 sm:flex-row">
            <div className="grid w-full grid-cols-2 flex-row gap-8 sm:w-1/3 sm:flex-col sm:gap-7 lg:flex">
              <Logo className="text-lg font-semibold" />

              <div className="flex gap-3 lg:items-center">
                {icons.map((icon, index) => (
                  <a key={index} href={icon.url} target={icon.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <span className="sr-only">{icon.name}</span>
                    <icon.component className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-8 sm:w-2/3">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-4">
                  <p className="text-sm text-white">{section.title}</p>

                  <ul className="mt-3 space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          className="text-sm font-light text-white/75 transition hover:text-white"
                          href={item.url}
                          target={item.url.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  )
}
