export function SiteFooter() {
  const whatsappUrl =
    "https://wa.me/584243049579?text=Hola%20Dra.%20Katherine%20Ainslie%2C%20quiero%20agendar%20una%20cita%20con%20la%20pediatra%20gastro.%20Estoy%20interesado(a)%20en%3A%20"

  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold">Dra. Katherine Ainslie</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-background/60">Pediatra Gastro</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Pediatra Gastro en Maracay con atención cercana y coordinación con especialistas para brindar un enfoque
              integral a cada familia.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-background/20 px-4 py-2 text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="text-background/80">
                <span>
                  Consultas de lunes a viernes / emergencias 24/7
                  <br />
                  Maracay, Centro Médico Santa Marta
                  <br />
                  Turmero, Instituto Policlínico Turmero
                  <br />
                  Cagua, Policlínica Centro
                  <br />
                  Villa de Cura, Laboratorio Bearne
                </span>
              </li>
              <li className="text-background/80">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-background">
                  +58 424-304-9579
                </a>
              </li>
              <li className="text-background/80">
                <span>
                  Atención: 24/7
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Cómo llegar</h3>
            <p className="mt-4 text-sm text-background/70">
              Atendemos en cuatro sedes. Escríbenos por WhatsApp y te enviamos la ubicación exacta de la sede que te
              corresponde.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-background/10">
              <img
                src="/images/ubicanos.jpg"
                alt="Ubicación de las sedes - Ubícanos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Dra. Katherine Ainslie · Consulta Pediátrica Gastro en Maracay. Todos los derechos reservados.</p>
          <p>Maracay · Turmero · Cagua · Villa de Cura</p>
        </div>
      </div>
    </footer>
  )
}
