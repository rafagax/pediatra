import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { SITE_URL } from "@/lib/site"
import { GraduationCap, Stethoscope, BookOpen, Award, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"

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

const trayectoria = [
  {
    titulo: "Médico Cirujano",
    institucion: "Universidad Nacional Experimental Rómulo Gallegos",
    detalle: "Formación médica de pregrado con rotación hospitalaria en el Hospital Central de Maracay.",
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
    institucion: "Hospital Militar Cnel. Elbano Paredes Vivas, Estado Aragua",
    detalle: "Experiencia hospitalaria en la atención pediátrica bajo el Artículo 08 de la Ley del Ejercicio de la Medicina.",
    periodo: "2020 – 2023",
  },
  {
    titulo: "Subespecialista en Gastroenterología y Nutrición Pediátrica",
    institucion: "Universidad Central de Venezuela · Hospital Militar Universitario Dr. Carlos Arvelo",
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
  { sigla: "LASPGHAN", nombre: "Sociedad Latinoamericana de Gastroenterología, Hepatología y Nutrición Pediátrica" },
  { sigla: "SOVEGASTRO", nombre: "Sociedad Venezolana de Gastroenterología Pediátrica" },
  { sigla: "SOVED", nombre: "Sociedad Venezolana de Endoscopia Digestiva" },
]

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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_40%_at_50%_0%,var(--accent)_0%,transparent_70%)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-8">
          <div className="relative order-last lg:order-first">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.8rem] bg-muted shadow-xl shadow-primary/10 ring-1 ring-border lg:max-w-none">
              <Image
                src="/images/portada-katherine.jpg"
                alt="Dra. Katherine Ainslie, gastroenteróloga y nutrióloga pediatra en Aragua"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Sobre la doctora</span>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl">
              Dra. Katherine Ainslie
            </h1>
            <p className="mt-3 font-serif text-lg text-primary">Gastroenteróloga y Nutrióloga Pediatra</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Soy médico especialista en <strong className="text-foreground">Puericultura y Pediatría</strong>, con
              subespecialidad en <strong className="text-foreground">Gastroenterología y Nutrición Pediátrica</strong>.
              Nací en Maracay y dedico mi ejercicio a cuidar la salud digestiva y el bienestar de niños y adolescentes,
              acompañando a cada familia con cercanía, evidencia científica y un trato humano.
            </p>

            <div className="mt-8">
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

      {/* Formación y trayectoria */}
      <section className="border-t border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Formación y trayectoria
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Más de una década de formación médica continua en las principales universidades y hospitales de Venezuela.
          </p>

          <ol className="mt-10 space-y-6">
            {trayectoria.map((item, idx) => (
              <li
                key={item.titulo}
                className="soft-card relative flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:w-40 sm:flex-col sm:items-start">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-primary">{item.periodo}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">{item.titulo}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.institucion}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detalle}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Áreas de atención */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Stethoscope className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              En qué puedo ayudarte
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Diagnóstico y tratamiento de las principales afecciones digestivas y nutricionales en la infancia y la
            adolescencia.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formación continua */}
      <section className="border-t border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {congreso}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Publicaciones */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

      {/* Sociedades */}
      <section className="border-t border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Sociedades científicas
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Miembro activo de las principales sociedades médicas de pediatría y gastroenterología.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {sociedades.map((soc) => (
              <li key={soc.sigla} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {soc.sigla}
                </span>
                <span className="text-sm leading-relaxed text-foreground">{soc.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-4xl">
            ¿Lista para cuidar la salud digestiva de tu hijo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Agenda tu cita por WhatsApp e indícanos tu zona en Aragua. Te confirmamos disponibilidad en la sede que mejor
            te quede.
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
