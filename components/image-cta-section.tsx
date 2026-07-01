import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/whatsapp"

export function ImageCtaSection() {
  return (
    <section className="py-12 sm:py-16 bg-secondary/20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* CORRECCIÓN 1: Se eliminaron 'items-start' y 'justify-center'. 
            Esto permite que las columnas ocupen el 100% del ancho disponible en móvil. */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">

          {/* Primera Imagen */}
          <div className="relative w-full aspect-square bg-muted overflow-hidden rounded-[1.8rem] border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/2servicios-1.jpg"
              alt="Lista de servicios médicos pediátricos"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Segunda Imagen */}
          <div className="relative w-full aspect-square bg-muted overflow-hidden rounded-[1.8rem] border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/2servicios-2.jpg"
              alt="Lista de patologías digestivas infantiles"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>

        <div className="mt-12 text-center flex flex-col items-center">
          <h3 className="mb-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            Especialistas en la salud digestiva de tu familia
          </h3>
          <p className="mb-8 max-w-2xl text-muted-foreground text-pretty">
            Contamos con el conocimiento y la experiencia para diagnosticar y tratar todas estas patologías. No dejes la salud de tus hijos en espera.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-lg font-medium text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-14"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar cita ahora
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}