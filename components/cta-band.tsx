import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp"

export function CtaBand() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-foreground p-10 sm:p-14">
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-accent/40 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium text-background/90 backdrop-blur">
                Cupos disponibles esta semana
              </span>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-[1.1] tracking-tight text-background text-balance sm:text-[2.75rem]">
                Agenda la cita con la gastroenteróloga pediatra de tu hijo hoy{" "}
                <span className="text-accent">por WhatsApp en minutos.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-background/75 text-pretty">
                Te ayudamos a elegir el servicio indicado y a confirmar tu horario sin complicaciones.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-primary px-8 text-lg font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Agendar cita ahora
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-background/30 bg-transparent px-7 text-base text-background hover:bg-background/10 hover:text-background"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {WHATSAPP_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
