import Image from "next/image"

const steps = [
  {
    title: "Haz clic en agendar",
    description:
      "Escríbenos por WhatsApp y agenda la cita pediátrica en menos de 2 minutos.",
  },
  {
    title: "Diagnóstico claro",
    description:
      "Evaluación completa con tecnología digital y un plan de tratamiento personalizado, sin sorpresas.",
  },
  {
    title: "Plan de atención",
    description:
      "Recibes indicaciones claras, estudios recomendados y seguimiento según la edad del paciente.",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Acompañamos a tu familia para mantener la salud infantil con controles periódicos.",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: Image + stats overlay */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-muted shadow-xl shadow-primary/10 ring-1 ring-border lg:sticky lg:top-28">
              <Image
                src="/images/doctora-2.png"
                alt="Doctora atendiendo con cercanía a paciente pediátrica en consulta"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"
              />

              {/* Quote overlay */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-card/95 p-5 backdrop-blur">
                <p className="font-serif text-base italic leading-snug text-foreground text-pretty">
                  &ldquo;En cada consulta pediátrica escuchamos a tu familia, evaluamos con detalle y te guiamos con
                  un plan claro.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  — Atención integral infantil
                </p>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Cómo trabajamos
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-[2.5rem] sm:leading-[1.1]">
              Un proceso claro, humano y{" "}
              <span className="text-primary">sin sorpresas.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Desde que agendas por WhatsApp hasta el control final, te acompañamos con una atención pediátrica
              cercana, humana y enfocada en prevención.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step, idx) => {
                return (
                  <li key={step.title} className="relative flex gap-4">
                    {idx < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[16px] top-10 h-[calc(100%-0.5rem)] w-px bg-border"
                      />
                    )}

                    <span className="relative mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">
                      {idx + 1}
                    </span>

                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
