import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_40%_at_50%_0%,var(--accent)_0%,transparent_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Cupos de consulta disponibles hoy en Aragua
          </span>

          <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.75rem]">
            Gastroenterología y Nutrición Pediátrica en Aragua.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Agenda por WhatsApp en minutos y recibe orientación clara sobre la consulta de gastroenterología y nutrición
            pediátrica, y los servicios médicos de apoyo disponibles.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 text-base text-primary-foreground hover:bg-primary/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar cita por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card px-7 text-base text-foreground hover:bg-accent"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Escribir por WhatsApp
              </a>
            </Button>
          </div>


        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.8rem] bg-muted shadow-xl shadow-primary/10 ring-1 ring-border">
            <Image
              src="/images/portada-katherine.jpg"
              alt="Doctora pediatra en consultorio médico en Aragua"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/30 to-transparent"
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/30 bg-card/90 px-4 py-3 backdrop-blur">
              <div>
                <p className="font-serif text-sm font-semibold text-foreground">Consulta de Gastroenterología Pediátrica</p>
                <p className="text-[11px] text-muted-foreground">Atención cálida para niños y sus familias</p>
              </div>
              <span className="text-xs font-semibold text-primary">Agenda hoy</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
