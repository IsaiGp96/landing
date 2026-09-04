"use client"

import clsx from "clsx"
import { XMarkIcon } from "@heroicons/react/24/outline"

import {
  SectionWrapperRounded,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"

import { Details } from "./Details"
import { useLocale } from "@/lib/locale"

export function Faq() {
  const { t } = useLocale()
  const questions = t.faq.items

  return (
    <SectionWrapperRounded id="faq" className="scroll-mt-8">
      <SectionHeading>
        <SectionBadge>{t.faq.badge}</SectionBadge>

        <SectionTitle>
          <span>{t.faq.titleMain} </span>
          <SectionTitleFade>
            {t.faq.titleFadeLines[0]}
            <br />
            {t.faq.titleFadeLines[1]}
          </SectionTitleFade>
        </SectionTitle>

        <SectionDescription>{t.faq.description}</SectionDescription>
      </SectionHeading>

      <div className="mt-8 lg:mt-16">
        <Details className="mx-auto max-w-3xl">
          {questions.map((question, index) => (
            <Details.Item key={index} className="group border-b border-white/10">
              {(isActive, toggle) => (
                <>
                  <button
                    type="button"
                    onClick={toggle}
                    aria-expanded={isActive}
                    className="flex w-full items-center py-6 text-left">
                    <div className="text-white/75 transition hover:text-white">{question.title}</div>

                    <div className="relative ml-auto">
                      <XMarkIcon
                        className={clsx(
                          "h-6 w-6 text-white/50 transition-transform duration-500",
                          isActive ? "rotate-180" : "rotate-45",
                        )}
                      />
                    </div>
                  </button>

                  <Details.Content className="overflow-hidden transition-all duration-500 will-change-[height]">
                    <div className="pb-6 text-justify font-light text-white/75">{question.content}</div>
                  </Details.Content>
                </>
              )}
            </Details.Item>
          ))}
        </Details>
      </div>
    </SectionWrapperRounded>
  )
}
