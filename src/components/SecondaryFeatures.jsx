"use client"

import {
  SectionWrapperRounded,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { BaseSpotlightCard } from "./SpotlightCard"
import { useLocale } from "@/lib/locale"

function FeatureCard({ children }) {
  return (
    <div className="lg:rounded-3xl lg:border lg:border-white/10 lg:bg-white/2.5 lg:p-2">
      <BaseSpotlightCard
        size="640"
        from="rgba(255,255,255,0.10)"
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 shadow-md shadow-zinc-950/50">
        {children}
      </BaseSpotlightCard>
    </div>
  )
}

function SuggestionsFeature({ title, description, items }) {
  return (
    <FeatureCard>
      <div className="p-6 lg:p-8">
        <div className="text-lg text-white">{title}</div>

        <p className="mt-4 text-justify font-light leading-relaxed text-white/75">{description}</p>
      </div>

      <div className="mt-2 pl-6 md:pl-8">
        <div className="flex w-full flex-col items-start gap-3 rounded-tl-xl border-white/10 bg-white/5 p-3">
          {items.map((suggestion, index) => (
            <div key={index} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
              {suggestion}
            </div>
          ))}
        </div>
      </div>
    </FeatureCard>
  )
}

function AnalysisFeature({ title, description, metrics }) {
  const progressValues = [90, 85, 70, 65]

  return (
    <FeatureCard>
      <div className="px-6 md:px-8">
        <div className="flex w-full flex-col items-start gap-2 rounded-b-xl border-white/10 bg-white/5 p-3 lg:gap-3">
          {metrics.map((metric, index) => (
            <div key={index} className="w-full p-1 lg:p-2">
              <div className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
                <div className="text-xs font-light text-white/75 lg:col-span-2">{metric.title}</div>

                <div className="col-span-2 hidden items-center lg:flex">
                  <div className="w-full rounded-full bg-white/25">
                    <div
                      style={{ width: `${progressValues[index]}%` }}
                      className="h-2 rounded-full bg-white/75"></div>
                  </div>
                </div>

                <div className="text-right text-xs font-light text-white lg:col-span-1">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 p-6 md:p-8">
        <div className="text-lg text-white">{title}</div>

        <p className="mt-4 text-justify font-light leading-relaxed text-white/75">{description}</p>
      </div>
    </FeatureCard>
  )
}

export function SecondaryFeatures() {
  const { t } = useLocale()
  const { suggestions, analysis } = t.secondaryFeatures

  return (
    <SectionWrapperRounded>
      <SectionHeading>
        <SectionBadge>{t.secondaryFeatures.badge}</SectionBadge>

        <SectionTitle>
          {t.secondaryFeatures.titleMain}
          <br />
          <SectionTitleFade>{t.secondaryFeatures.titleFade}</SectionTitleFade>
        </SectionTitle>

        <SectionDescription>
          {t.secondaryFeatures.description[0]} <br className="hidden lg:block" />
          {t.secondaryFeatures.description[1]}
        </SectionDescription>
      </SectionHeading>

      <div className="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
        <SuggestionsFeature title={suggestions.title} description={suggestions.description} items={suggestions.items} />

        <AnalysisFeature title={analysis.title} description={analysis.description} metrics={analysis.metrics} />
      </div>
    </SectionWrapperRounded>
  )
}
