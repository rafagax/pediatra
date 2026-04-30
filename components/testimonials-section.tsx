import Image from "next/image"

const testimonials = [
  {
    name: "María Alejandra G.",
    location: "Las Delicias, Maracay",
    quote:
      "Agendé por WhatsApp en minutos y la atención fue excelente. Me explicaron todo con mucha paciencia.",
    image: "/images/doctora-3.png",
    treatment: "Consulta de diagnóstico",
  },
  {
    name: "Carlos Rivas",
    location: "Centro de Maracay",
    quote:
      "El proceso fue claro y rápido. Se nota la calidad humana en cada consulta y en el seguimiento.",
    image: "/images/doctora-4.png",
    treatment: "Tratamiento integral",
  },
  {
    name: "Mamá de paciente pediátrica",
    location: "Av. Las Delicias",
    quote:
      "Mi hija se sintió cómoda desde el primer momento. La doctora fue muy cariñosa y nos orientó en cada paso.",
    image: "/images/doctora-5.png",
    treatment: "Odontología pediátrica",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="border-t border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Referencias de pacientes
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-[2.5rem] sm:leading-[1.1]">
              Pacientes felices,{" "}
              <span className="text-primary">familias tranquilas</span> en Maracay.
            </h2>
          </div>
          <div className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm">
            <span className="text-sm font-semibold text-foreground">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">· Google Reseñas</span>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <li
              key={t.name}
              className={[
                "soft-card relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg hover:shadow-primary/5",
                idx === 1 ? "md:translate-y-4" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Opinión verificada</span>
                <span>Google</span>
              </div>

              <p className="mt-4 flex-1 text-base leading-relaxed text-foreground text-pretty">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted ring-2 ring-accent">
                  <Image
                    src={t.image || "/placeholder.svg"}
                    alt={`Foto de ${t.name}, paciente atendido en consulta pediátrica en Maracay`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>

              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
                {t.treatment}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
