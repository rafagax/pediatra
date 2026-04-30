import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Pediatría General",
    description:
      "Control del niño sano, evaluación integral y seguimiento del crecimiento con atención cercana para el bienestar de tus pequeños.",
    tag: "Consulta pediátrica",
    featured: false,
  },
  {
    title: "Gastroenterología Pediátrica",
    description:
      "Diagnóstico y tratamiento especializado de enfermedades del sistema digestivo, hígado y nutrición en niños y adolescentes.",
    tag: "Subespecialidad pediátrica",
    featured: false,
  },
]

export function ServicesSection() {
  const whatsappUrl =
    "https://wa.me/584243049579?text=Hola%20Dra.%20Katherine%20Ainslie%2C%20quiero%20agendar%20una%20cita%20con%20la%20pediatra%20gastro.%20Estoy%20interesado(a)%20en%3A%20"

  return (
    <section id="servicios" className="border-y border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Servicios principales
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-[2.5rem] sm:leading-[1.1]">
              Servicios médicos disponibles en Maracay,{" "}
              <span className="text-primary">pensados para niños.</span>
            </h2>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-foreground">
              Agendar cita ahora
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service, idx) => {
            const isFeatured = service.featured
            return (
              <li
                key={service.title}
                className={[
                  "soft-card group relative flex flex-col rounded-2xl border p-6",
                  isFeatured
                    ? "border-primary/40 bg-foreground text-background shadow-xl shadow-primary/10 hover:shadow-primary/20"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className={[
                    "absolute right-5 top-5 font-serif text-xs",
                    isFeatured ? "text-background/40" : "text-muted-foreground/60",
                  ].join(" ")}
                >
                  0{idx + 1}
                </span>

                <h3
                  className={[
                    "mt-2 font-serif text-xl font-medium",
                    isFeatured ? "text-background" : "text-foreground",
                  ].join(" ")}
                >
                  {service.title}
                </h3>

                <p
                  className={[
                    "mt-2 flex-1 text-sm leading-relaxed",
                    isFeatured ? "text-background/70" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {service.description}
                </p>

                <span
                  className={[
                    "mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                    isFeatured
                      ? "bg-background/10 text-background"
                      : "bg-secondary text-secondary-foreground",
                  ].join(" ")}
                >
                  {service.tag}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
