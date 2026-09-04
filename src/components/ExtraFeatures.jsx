"use client"

import clsx from "clsx"
import {
  AcademicCapIcon,
  CircleStackIcon,
  CommandLineIcon,
  GlobeAltIcon,
  LanguageIcon,
  QueueListIcon,
  RectangleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"

import { SectionWrapper, SectionBadge, SectionHeadingHighlighted, SectionTitleSmall } from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import { useLocale } from "@/lib/locale"

const icons = [
  CommandLineIcon,
  CircleStackIcon,
  RectangleStackIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  QueueListIcon,
  LanguageIcon,
  AcademicCapIcon,
]

export function ExtraFeatures() {
  const { t } = useLocale()
  const features = t.extraFeatures.items.map((item, index) => ({ ...item, icon: icons[index] }))

  return (
    <div id="skills" className="scroll-mt-8 py-8 lg:py-16">
      <ScrollReveal once={true} className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeadingHighlighted>
              <SectionBadge>{t.extraFeatures.badge}</SectionBadge>

              <SectionTitleSmall>{t.extraFeatures.title}</SectionTitleSmall>
            </SectionHeadingHighlighted>

            <div className="mt-8 lg:mt-16">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{ "--delay": `${index * 150}ms` }}
                    className={clsx(
                      "transition-all delay-[--delay] duration-[--duration]",
                      !isActive ? "translate-y-8 opacity-0" : "",
                    )}>
                    <div className="flex items-center">
                      <div className="rounded border border-white/5 bg-white/5 p-1">
                        <feature.icon className="h-5 w-5 fill-white/10 text-white" />
                      </div>

                      <div className="ml-4 text-lg">{feature.title}</div>
                    </div>

                    <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
