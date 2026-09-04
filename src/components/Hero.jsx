"use client"

import { SectionWrapper } from "@/components/Section"
import { useLocale } from "@/lib/locale"

const codeLines = [
  { indent: 0, tokens: [{ t: "const", c: "text-fuchsia-400" }, { t: " isai " }, { t: "= " }, { t: "{", c: "text-white/50" }] },
  { indent: 1, tokens: [{ t: "role", c: "text-cyan-300" }, { t: ": " }, { t: '"IT Project Coordinator"', c: "text-amber-300" }, { t: "," }] },
  { indent: 1, tokens: [{ t: "stack", c: "text-cyan-300" }, { t: ": [" }, { t: '"Python", "React", "Node.js", "PostgreSQL"', c: "text-amber-300" }, { t: "]," }] },
  { indent: 1, tokens: [{ t: "networking", c: "text-cyan-300" }, { t: ": " }, { t: '"VLANs, VPN, Ubiquiti"', c: "text-amber-300" }, { t: "," }] },
  { indent: 1, tokens: [{ t: "relocation", c: "text-cyan-300" }, { t: ": " }, { t: "true", c: "text-violet-400" }, { t: "," }] },
  { indent: 0, tokens: [{ t: "}", c: "text-white/50" }] },
]

export function Hero() {
  const { t } = useLocale()

  return (
    <div className="relative pt-32">
      <div className="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

      <SectionWrapper className="py-8 lg:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="group text-center font-display text-3xl font-light leading-tight lg:text-5xl">
            <span>{t.hero.greeting} </span>
            <span className="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent">
              Isaí García
            </span>
          </h1>

          <h2 className="mt-8 max-w-xl text-center text-lg text-white/60 lg:text-xl">{t.hero.subtitle}</h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
            <a
              href="mailto:abraham_gp96@outlook.com"
              className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
              {t.hero.ctaPrimary}
            </a>

            <a
              href="#pricing"
              className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur transition duration-300 hover:bg-white/15">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-3xl lg:mt-16">
            <div className="absolute -top-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[128px]"></div>

            <div className="relative w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/10 p-2 shadow-2xl shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-3xl">
              <div className="rounded-xl border border-white/10 bg-zinc-950/80 shadow-md shadow-zinc-950/50 lg:rounded-2xl">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/70"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/70"></div>
                  <span className="ml-3 font-mono text-xs text-white/40">profile.js</span>
                </div>

                <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed lg:text-sm">
                  <code>
                    {codeLines.map((line, index) => (
                      <div key={index} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                        {line.tokens.map((token, tokenIndex) => (
                          <span key={tokenIndex} className={token.c ?? "text-white/75"}>
                            {token.t}
                          </span>
                        ))}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
