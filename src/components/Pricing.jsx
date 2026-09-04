"use client"

import clsx from "clsx"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"

import { SpotlightCard, BaseSpotlightCard } from "./SpotlightCard"
import { useLocale } from "@/lib/locale"

function FeatureList({ features }) {
  return features.map((feature, index) => (
    <div key={index} className="py-2">
      {feature}
    </div>
  ))
}

function PricingPlan({ plan, mailSubject }) {
  if (plan.highlighted) {
    return (
      <SpotlightCard className="p-8">
        <div className="font-mono text-white">{plan.name}</div>

        <div className="mt-4 flex items-end">
          <div className="font-lead text-4xl font-bold text-white">{plan.price}</div>

          <span className="ml-1 text-sm text-white/50">{plan.unit}</span>
        </div>

        <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
          <FeatureList features={plan.features} />
        </div>

        <div className="mt-12">
          <a
            href={`mailto:abraham_gp96@outlook.com?subject=${encodeURIComponent(mailSubject)}`}
            className="inline-block w-full rounded-lg bg-white px-4 py-2 text-center font-medium text-zinc-950 transition duration-300 hover:bg-white/80">
            {plan.cta}
          </a>
        </div>
      </SpotlightCard>
    )
  }

  return (
    <div className="lg:flex lg:items-end lg:pb-5">
      <BaseSpotlightCard from="rgba(255,255,255,0.2)" className="relative w-full rounded-2xl p-8 lg:rounded-3xl">
        <div className="absolute inset-x-0 bottom-5 top-0 rounded-2xl bg-gradient-to-b from-white/15 to-transparent lg:rounded-3xl"></div>

        <div className="absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:rounded-[calc(theme(borderRadius.3xl)-1px)]"></div>

        <div className="relative">
          <div className="font-mono text-white">{plan.name}</div>

          <div className="mt-4 flex items-end">
            <div className="font-lead text-4xl font-bold text-white">{plan.price}</div>

            <span className="ml-1 text-sm text-white/50">{plan.unit}</span>
          </div>

          <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
            <FeatureList features={plan.features} />
          </div>

          <div className="mt-12">
            <a
              href={`mailto:abraham_gp96@outlook.com?subject=${encodeURIComponent(mailSubject)}`}
              className="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10">
              {plan.cta}
            </a>
          </div>
        </div>
      </BaseSpotlightCard>
    </div>
  )
}

function CustomPlan({ plan, mailSubject }) {
  return (
    <div className="lg:flex lg:items-end lg:pb-5">
      <BaseSpotlightCard from="rgba(255,255,255,0.2)" className="relative w-full rounded-2xl p-8 lg:rounded-3xl">
        <div className="absolute inset-x-0 bottom-5 top-0 rounded-2xl bg-gradient-to-b from-white/15 to-transparent lg:rounded-3xl"></div>

        <div className="absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:rounded-[calc(theme(borderRadius.3xl)-1px)]"></div>

        <div className="relative">
          <div className="font-mono text-white">{plan.name}</div>

          <div className="mt-4 flex items-end">
            <div className="font-lead text-4xl font-bold text-white">{plan.price}</div>
          </div>

          <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
            <FeatureList features={plan.features} />
          </div>

          <div className="mt-12">
            <a
              href={`mailto:abraham_gp96@outlook.com?subject=${encodeURIComponent(mailSubject)}`}
              className="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10">
              {plan.cta}
            </a>
          </div>
        </div>
      </BaseSpotlightCard>
    </div>
  )
}

export function Pricing() {
  const { t } = useLocale()
  const { pricing } = t

  return (
    <div id="pricing" className="scroll-mt-8 py-8 lg:py-16">
      <SectionWrapper>
        <SectionHeading>
          <SectionBadge>{pricing.badge}</SectionBadge>

          <SectionTitle>
            {pricing.titleMain}
            <br />
            <span>{pricing.titleWord} </span>
            <SectionTitleFade>{pricing.titleFade}</SectionTitleFade>
          </SectionTitle>

          <SectionDescription>{pricing.description}</SectionDescription>
        </SectionHeading>

        <div className="mt-8 lg:mt-16">
          <div className={clsx("mx-auto grid max-w-6xl gap-4 lg:grid-cols-4 lg:gap-4")}>
            {pricing.plans.map((plan, index) => (
              <PricingPlan key={index} plan={plan} mailSubject={pricing.mailSubjectProposal(plan.name)} />
            ))}
            <CustomPlan plan={pricing.custom} mailSubject={pricing.mailSubjectQuote} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
