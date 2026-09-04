"use client"

import { BriefcaseIcon } from "@heroicons/react/24/outline"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeadingHighlighted,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { SpotlightCard } from "./SpotlightCard"
import { useLocale } from "@/lib/locale"

export function Testimonials() {
  const { t } = useLocale()
  const { jobs } = t.testimonials

  return (
    <div id="experience" className="scroll-mt-8 overflow-hidden py-8 lg:py-16">
      <SectionWrapper>
        <SectionHeadingHighlighted>
          <SectionBadge>{t.testimonials.badge}</SectionBadge>

          <SectionTitle>
            {t.testimonials.titleMain}
            <br />
            <SectionTitleFade>{t.testimonials.titleFade}</SectionTitleFade>
          </SectionTitle>

          <SectionDescription>{t.testimonials.description}</SectionDescription>
        </SectionHeadingHighlighted>

        <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] lg:mt-32">
          <div className="flex w-max animate-marquee items-stretch [--duration:60s] hover:[animation-play-state:paused]">
            {[...jobs, ...jobs].map((job, index) => (
              <div key={index} className="px-2.5">
                <SpotlightCard className="relative h-full w-[28rem] p-8">
                  <div className="pb-8 text-justify font-light text-white/75">{job.body}</div>

                  <div className="mt-auto flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <BriefcaseIcon className="h-5 w-5 text-white/75" />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-white">
                        {job.role} — {job.company}
                      </div>

                      <div className="text-sm text-white/50">{job.period}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
