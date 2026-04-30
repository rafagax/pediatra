import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ImageCtaSection() {
  const whatsappUrl =
    "https://wa.me/584243049579?text=Hola%20Dra.%20Katherine%20Ainslie%2C%20quiero%20agendar%20una%20cita%20con%20la%20pediatra%20gastro.%20Estoy%20interesado(a)%20en%3A%20"

  return (
    <section className="py-20 sm:py-28 bg-secondary/20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-start justify-center">
          {/* Primera Imagen */}
          <div className="relative w-full overflow-hidden rounded-[1.8rem] border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Ajustamos el aspect ratio para que se adapte a las imágenes verticales que pasaste */}
            <div className="aspect-[4/5] relative w-full bg-muted">
              <Image
                src="/images/servicios-1.jpg"
                alt="Lista de servicios médicos pediátricos"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Segunda Imagen */}
          <div className="relative w-full overflow-hidden rounded-[1.8rem] border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-[4/5] relative w-full bg-muted">
              <Image
                src="/images/servicios-2.jpg"
                alt="Lista de patologías digestivas infantiles"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center flex flex-col items-center">
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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar cita ahora
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
