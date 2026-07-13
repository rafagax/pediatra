import Link from "next/link"
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp"
import { SEDES } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold">
                  Dra. Katherine Ainslie
                </p>

                <p className="text-[11px] uppercase tracking-[0.18em] text-background/60">
                  Gastroenterología y Nutrición Pediátrica
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Especialista en gastroenterología y nutrición pediátrica en
              Aragua, con atención cercana y coordinación con especialistas
              para brindar un enfoque integral a cada familia.
            </p>

            <Link
              href="/dra-katherine-ainslie"
              className="mt-4 inline-flex text-sm font-medium text-background/90 underline-offset-4 hover:underline"
            >
              Conoce la trayectoria de la Dra. Katherine →
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
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
                  Villa de Cura, zona centro
                </span>
              </li>

              <li className="text-background/80">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>

              <li className="text-background/80">
                <span>Atención: 24/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Cómo llegar</h3>

            <p className="mt-4 text-sm text-background/70">
              Atendemos en cuatro sedes. Escríbenos por WhatsApp y te enviamos
              la ubicación exacta de la sede que te corresponde.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {SEDES.map((sede) => (
                <div
                  key={sede.ciudad}
                  className="overflow-hidden rounded-xl border border-background/10"
                >
                  <iframe
                    title={`Ubicación de la sede en ${sede.ciudad}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      sede.mapQuery
                    )}&output=embed`}
                    width="100%"
                    height="130"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block"
                  />

                  <p className="bg-background/5 px-2.5 py-1.5 text-[11px] font-medium text-background/80">
                    {sede.ciudad}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-background/10 pt-6 text-xs text-background/60">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Dra. Katherine Ainslie · Consulta de
              Gastroenterología y Nutrición Pediátrica en Aragua. Todos los
              derechos reservados.
            </p>

            <p>Maracay · Turmero · Cagua · Villa de Cura</p>
          </div>

          <p className="mt-4">
            Sitio web desarrollado por{" "}
            <a
              href="https://webraf.com/"
              rel="nofollow"
              className="font-medium text-background/80 underline underline-offset-4 transition-colors hover:text-background"
            >
              Webraf
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}