import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { SITE_URL, SOCIALS } from "@/lib/site"
import { ArrowRight, CheckCircle2, ExternalLink, GraduationCap, Award, BookOpen } from "lucide-react"

const PAGE_PATH = "/dra-katherine-ainslie"

export const metadata: Metadata = {
  title: "Sobre la Dra. Katherine Ainslie | Gastroenteróloga y Nutrióloga Pediatra",
  description:
    "Conoce a la Dra. Katherine Ainslie: médico especialista en Puericultura y Pediatría con subespecialidad en Gastroenterología y Nutrición Pediátrica (UCV). Formación, experiencia hospitalaria, publicaciones científicas y sociedades médicas en Aragua, Venezuela.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Sobre la Dra. Katherine Ainslie | Gastroenteróloga y Nutrióloga Pediatra",
    description:
      "Médico especialista en Puericultura y Pediatría con subespecialidad en Gastroenterología y Nutrición Pediátrica. Trayectoria, publicaciones y sociedades científicas.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "profile",
    images: [
      {
        url: "/images/portada-katherine.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Katherine Ainslie, gastroenteróloga y nutrióloga pediatra",
      },
    ],
  },
}

const stats = [
  { valor: "+10", texto: "Años de formación y ejercicio médico" },
  { valor: "2", texto: "Postgrados: Pediatría · Gastro y Nutrición" },
  { valor: "4", texto: "Sociedades científicas" },
  { valor: "4", texto: "Sedes en el estado Aragua" },
]

const credenciales = ["Pediatra Puericultora", "Subespecialista UCV", "Endoscopia digestiva"]

const trayectoria = [
  {
    titulo: "Médico Cirujano",
    institucion: "Universidad Nacional Experimental Rómulo Gallegos",
    detalle: "Formación médica de pregrado con rotación en el Hospital Central de Maracay.",
    periodo: "2012 – 2019",
  },
  {
    titulo: "Especialista en Puericultura y Pediatría",
    institucion: "Universidad de Carabobo · Hospital Central de Maracay",
    detalle: "Postgrado dedicado al cuidado integral y el desarrollo saludable de niños y adolescentes.",
    periodo: "2019 – 2023",
  },
  {
    titulo: "Médico interno de pediatría",
    institucion: "Hospital Militar Cnel. Elbano Paredes Vivas, Aragua",
    detalle: "Experiencia hospitalaria en atención pediátrica (Art. 08 de la Ley del Ejercicio de la Medicina).",
    periodo: "2020 – 2023",
  },
  {
    titulo: "Subespecialista en Gastroenterología y Nutrición Pediátrica",
    institucion: "Universidad Central de Venezuela · Hospital Militar Dr. Carlos Arvelo",
    detalle: "Subespecialidad enfocada en la salud digestiva y nutricional de niños y adolescentes.",
    periodo: "2024 – 2025",
  },
]

const areas = [
  "Reflujo gastroesofágico",
  "Estreñimiento infantil",
  "Dolor abdominal crónico",
  "Alergias e intolerancias alimentarias",
  "Enfermedad celíaca",
  "Infección por Helicobacter pylori",
  "Hemorragias digestivas",
  "Endoscopia digestiva pediátrica",
  "Evaluación y plan nutricional",
  "Control de niño sano",
]

const congresos = [
  "SOVED 2025 · XVII Congreso Venezolano de Endoscopia Digestiva",
  "SOVEGASTRO 2025 · XLVI Congreso Nacional de Gastroenterología y XXVI de Gastroenterología Pediátrica",
  "SOVEGASTRO 2024 · XLV Congreso Nacional de Gastroenterología y XXV de Gastroenterología Pediátrica",
  "SVPP 2023 · LXIX Congreso Venezolano de Puericultura y Pediatría",
  "Jornada Regional de Aragua 2023 · Neumopediatría para pediatras",
  "SVCP 2019 · XVIII Congreso Venezolano de Cirugía Pediátrica",
  "SVPP 2020 · Webinar Semana de Pediatría",
  "FUNVIC 2020 · Actualización de arritmias cardíacas en tiempos de Covid-19",
  "UPEL-UNESCO 2019 · Diplomado en Seguridad y Salud Ocupacional (200 h)",
]

const publicaciones = [
  {
    titulo: "Hallazgos clínicos y endoscópicos en niños con hemorragia digestiva inferior",
    fuente: "SciELO Venezuela",
    url: "https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0016-35032025000100019",
  },
  {
    titulo:
      "Evaluación de la calidad de historias clínicas del servicio de neurocirugía, Hospital Central de Maracay, Aragua, Venezuela (2019)",
    fuente: "Publicado el 1 de marzo de 2020",
    url: "http://maiquiflores.overblog.es/2020/03/evaluacion-de-la-calidad-de-historias-clinicas-delservicio-de-neurocirugia-hospital-central-de-maracay.aragua-venezuela.2019.html",
  },
]

const sociedades = [
  { sigla: "SVPP", nombre: "Sociedad Venezolana de Puericultura y Pediatría" },
  { sigla: "LASPGHAN", nombre: "Soc. Latinoamericana de Gastroenterología, Hepatología y Nutrición Pediátrica" },
  { sigla: "SOVEGASTRO", nombre: "Sociedad Venezolana de Gastroenterología Pediátrica" },
  { sigla: "SOVED", nombre: "Sociedad Venezolana de Endoscopia Digestiva" },
]

// Iconos de redes en SVG (evitamos depender de iconos de marca de librerías).
const socialLinks = [
  {
    nombre: "Instagram",
    url: SOCIALS.instagram,
    svg: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    nombre: "Facebook",
    url: SOCIALS.facebook,
    svg: (
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"
      />
    ),
  },
  {
    nombre: "TikTok",
    url: SOCIALS.tiktok,
    svg: (
      <path
        fill="currentColor"
        d="M12.53 2h3.02c.18 1.62 1.02 3.03 2.46 3.75.6.3 1.28.48 1.99.51v3.02c-1.62-.03-3.14-.5-4.45-1.3v6.25c0 3.19-2.6 5.77-5.8 5.77-3.19 0-5.78-2.58-5.78-5.77 0-3.03 2.33-5.52 5.3-5.76v3.09a2.72 2.72 0 0 0-2.21 2.67 2.72 2.72 0 1 0 5.44.05V2z"
      />
    ),
  },
  {
    nombre: "LinkedIn",
    url: SOCIALS.linkedin,
    svg: (
      <path
        fill="currentColor"
        d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
      />
    ),
  },
].filter((s) => s.url && s.url.trim() !== "")

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}${PAGE_PATH}#person`,
  name: "Katherine del Carmen Ainslie Montilva",
  alternateName: "Dra. Katherine Ainslie",
  givenName: "Katherine",
  familyName: "Ainslie Montilva",
  jobTitle: "Gastroenteróloga y Nutrióloga Pediatra",
  gender: "Female",
  nationality: "Venezolana",
  image: `${SITE_URL}/images/portada-katherine.jpg`,
  url: `${SITE_URL}${PAGE_PATH}`,
  worksFor: { "@id": `${SITE_URL}/#physician` },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad Nacional Experimental Rómulo Gallegos" },
    { "@type": "CollegeOrUniversity", name: "Universidad de Carabobo" },
    { "@type": "CollegeOrUniversity", name: "Universidad Central de Venezuela" },
  ],
  memberOf: sociedades.map((s) => ({ "@type": "MedicalOrganization", name: `${s.nombre} (${s.sigla})` })),
  knowsAbout: areas,
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Médico Cirujano" },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Especialidad médica",
      name: "Especialista en Puericultura y Pediatría",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Subespecialidad médica",
      name: "Gastroenterología y Nutrición Pediátrica",
    },
  ],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background page-bg text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <SiteHeader />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_70%_0%,var(--accent)_0%,transparent_65%)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
          {/* Foto + redes (arriba en móvil, derecha en escritorio) */}
          <div className="order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              {/* Panel decorativo detrás de la foto */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] bg-primary/10 sm:-right-4 sm:-top-4"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-accent to-muted shadow-lg shadow-primary/10 ring-1 ring-border">
                <Image
                  src="/images/portada-katherine.jpg"
                  alt="Dra. Katherine Ainslie, gastroenteróloga y nutrióloga pediatra en Aragua"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-bottom"
                />
                {/* Tarjeta flotante */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/40 bg-card/90 px-4 py-2.5 backdrop-blur">
                  <div>
                    <p className="font-serif text-sm font-semibold text-foreground">Dra. Katherine Ainslie</p>
                    <p className="text-[11px] text-muted-foreground">Gastro y Nutrición Pediátrica</p>
                  </div>
                  <span className="text-[11px] font-semibold text-primary">UCV</span>
                </div>
              </div>

              {/* Redes sociales — debajo de la foto */}
              {socialLinks.length > 0 && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <span className="w-full text-center text-xs font-medium text-muted-foreground sm:w-auto">
                    Sígueme:
                  </span>
                  {socialLinks.map((s) => {
                    const activo = s.url !== "#" && s.url.trim() !== ""
                    const clases =
                      "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm"
                    const icono = (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        {s.svg}
                      </svg>
                    )
                    return activo ? (
                      <a
                        key={s.nombre}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.nombre}
                        className={`${clases} transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground`}
                      >
                        {icono}
                      </a>
                    ) : (
                      <span key={s.nombre} aria-label={`${s.nombre} (próximamente)`} className={`${clases} opacity-60`}>
                        {icono}
                      </span>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Texto */}
          <div className="order-last text-center lg:order-first lg:text-left">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Sobre la doctora</span>
            <h1 className="mt-4 font-serif text-[2.6rem] font-medium leading-[1] tracking-tight text-foreground text-balance sm:text-6xl">
              Dra. Katherine <span className="text-primary">Ainslie</span>
            </h1>
            <p className="mt-4 text-base font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-lg sm:tracking-[0.2em]">
              Gastroenteróloga y Nutrióloga Pediatra
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0">
              Cuido la salud digestiva y el bienestar de niños y adolescentes en el estado Aragua, combinando
              evidencia científica con un trato cercano y humano para tu familia.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {credenciales.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
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
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ESTADÍSTICAS ---------- */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-foreground px-6 py-10 text-background sm:px-10">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.texto} className="text-center md:text-left">
                <dt className="font-serif text-4xl font-medium text-background sm:text-5xl">{s.valor}</dt>
                <dd className="mt-2 text-sm leading-snug text-background/70 text-pretty">{s.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- HISTORIA + CITA ---------- */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Mi vocación</span>
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-snug text-foreground text-balance sm:text-3xl">
            &ldquo;Cada niño merece una atención cercana, basada en evidencia y llena de calidez humana.&rdquo;
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
            Nací en Maracay y desde muy temprano supe que quería dedicar mi vida a cuidar a los más pequeños. Me formé
            como pediatra y me subespecialicé en gastroenterología y nutrición pediátrica para acompañar a las familias
            en cada etapa del crecimiento de sus hijos, con diagnósticos claros y tratamientos a la medida.
          </p>
          <p className="mt-4 font-serif text-lg text-primary">— Dra. Katherine Ainslie</p>
        </div>
      </section>

      {/* ---------- TRAYECTORIA ---------- */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Formación y trayectoria
            </h2>
          </div>

          <ol className="relative mt-10 space-y-8 border-l border-border pl-6 sm:pl-8">
            {trayectoria.map((item) => (
              <li key={item.titulo} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[39px]"
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.periodo}</span>
                <h3 className="mt-1 font-serif text-xl font-medium text-foreground">{item.titulo}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{item.institucion}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{item.detalle}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- ÁREAS ---------- */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-4xl">
            En qué puedo <span className="text-primary">ayudarte</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Diagnóstico y tratamiento de las principales afecciones digestivas y nutricionales en la infancia y la
            adolescencia.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CONGRESOS ---------- */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Congresos y formación continua
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Actualización permanente en los congresos y jornadas más relevantes de pediatría y gastroenterología.
          </p>

          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {congresos.map((congreso) => (
              <li
                key={congreso}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {congreso}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- PUBLICACIONES ---------- */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Publicaciones científicas
            </h2>
          </div>

          <ul className="mt-10 space-y-4">
            {publicaciones.map((pub) => (
              <li key={pub.titulo} className="soft-card rounded-2xl border border-border bg-card p-6">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary">
                      {pub.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{pub.fuente}</p>
                  </div>
                  <ExternalLink
                    className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- SOCIEDADES ---------- */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Sociedades científicas
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Miembro activo de las principales sociedades médicas de pediatría y gastroenterología.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {sociedades.map((soc) => (
              <li key={soc.sigla} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
                  {soc.sigla}
                </span>
                <span className="text-sm leading-relaxed text-foreground">{soc.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-14 text-center text-background sm:px-10">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-background text-balance sm:text-4xl">
            ¿Lista para cuidar la salud digestiva de tu hijo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/75 text-pretty">
            Agenda tu cita por WhatsApp e indícanos tu zona en Aragua. Te confirmamos disponibilidad en la sede que
            mejor te quede.
          </p>
          <div className="mt-8 flex justify-center">
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
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
