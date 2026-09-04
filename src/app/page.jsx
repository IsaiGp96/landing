import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { ExtraFeatures } from "@/components/ExtraFeatures"
import { Testimonials } from "@/components/Testimonials"
import { Faq } from "@/components/Faq"
import { Pricing } from "@/components/Pricing"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Isaí García — IT Project Coordinator & Software Engineer",
  description:
    "Landing page personal de Isaí García: coordinación de proyectos IT, desarrollo de software y redes.",
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PrimaryFeatures />
      <Testimonials />
      <ExtraFeatures />
      <SecondaryFeatures />
      <Pricing />
      <Faq />
      <Footer />
    </>
  )
}
