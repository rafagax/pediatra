import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBand } from "@/components/cta-band"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background page-bg text-foreground">
      <SiteHeader />
      <HeroSection />
      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProcessSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <TestimonialsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <CtaBand />
      </RevealOnScroll>
      <RevealOnScroll>
        <FaqSection />
      </RevealOnScroll>
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
