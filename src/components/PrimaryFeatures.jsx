"use client"

import clsx from "clsx"
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ServerStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import { SpotlightCard } from "./SpotlightCard"
import { useLocale } from "@/lib/locale"

function FeatureCard({ children, className }) {
  return <SpotlightCard className={clsx("p-8", className)}>{children}</SpotlightCard>
}

function FeatureCardThumbnail({ children }) {
  return <div className="flex items-center justify-center gap-4 py-6">{children}</div>
}

function FeatureCardBody({ children }) {
  return <div className="mt-4">{children}</div>
}

function FeatureCardTitle({ children }) {
  return <div className="text-lg text-white">{children}</div>
}

function FeatureCardDescription({ children }) {
  return <p className="mt-4 text-justify text-sm font-light leading-relaxed text-white/75">{children}</p>
}

function CoordinationFeature({ className, title, description }) {
  const dots = new Array(9)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <UserIcon className="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
        </div>

        <div className="w-[6.5rem] overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <ClipboardDocumentCheckIcon className="relative h-8 w-8 fill-accent-400/10 stroke-[1] text-accent-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>{title}</FeatureCardTitle>
        <FeatureCardDescription>{description}</FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function DevelopmentFeature({ className, title, description }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <CommandLineIcon className="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <ChatBubbleLeftRightIcon className="relative h-8 w-8 fill-accent-400/10 stroke-[1] text-accent-400" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <ServerStackIcon className="relative h-8 w-8 fill-teal-400/10 stroke-[1] text-teal-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>{title}</FeatureCardTitle>
        <FeatureCardDescription>{description}</FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function NetworkingFeature({ className, title, description }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <GlobeAltIcon className="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <ServerStackIcon className="relative h-8 w-8 fill-green-400/10 stroke-[1] text-green-400" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <ClipboardDocumentCheckIcon className="relative h-8 w-8 fill-violet-400/10 stroke-[1] text-violet-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>{title}</FeatureCardTitle>
        <FeatureCardDescription>{description}</FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

export function PrimaryFeatures() {
  const { t } = useLocale()
  const { cards } = t.primaryFeatures

  return (
    <div id="overview" className="scroll-mt-8 py-8 lg:py-16">
      <ScrollReveal once={true} className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeading>
              <SectionBadge>{t.primaryFeatures.badge}</SectionBadge>

              <SectionTitle>
                {t.primaryFeatures.titleMain}
                <SectionTitleFade>
                  {t.primaryFeatures.titleFadeLines[0]}
                  <br />
                  {t.primaryFeatures.titleFadeLines[1]}
                </SectionTitleFade>
              </SectionTitle>

              <SectionDescription>
                {t.primaryFeatures.description[0]} <br className="hidden lg:block" />
                {t.primaryFeatures.description[1]}
              </SectionDescription>
            </SectionHeading>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              <CoordinationFeature
                title={cards.coordination.title}
                description={cards.coordination.description}
                className={clsx(
                  " transition-all delay-150 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <DevelopmentFeature
                title={cards.development.title}
                description={cards.development.description}
                className={clsx(
                  " transition-all delay-300 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <NetworkingFeature
                title={cards.networking.title}
                description={cards.networking.description}
                className={clsx(
                  " transition-all delay-[450ms] duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
