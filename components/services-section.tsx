"use client"

import { useRef, useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Consulta Pediátrica",
    description: "Atención especializada, control de niño sano, evaluación nutricional y esquematización de vacunas.",
    tag: "Pediatría Integral",
    featured: false,
  },
  {
    title: "Reflujo Gastroesofágico",
    description: "Diagnóstico preciso y tratamiento avanzado para episodios de reflujo y acidez en niños.",
    tag: "Gastroenterología",
    featured: false,
  },
  {
    title: "Manejo del Estreñimiento",
    description: "Evaluación detallada y plan de manejo efectivo del estreñimiento infantil.",
    tag: "Gastroenterología",
    featured: false,
  },
  {
    title: "Dolor Abdominal",
    description: "Evaluación exhaustiva para determinar y tratar las causas del dolor abdominal recurrente.",
    tag: "Patologías Digestivas",
    featured: false,
  },
  {
    title: "Alergias e Intolerancias",
    description: "Detección y abordaje de alergias alimentarias y enfermedad celíaca con enfoque nutricional.",
    tag: "Nutrición Pediátrica",
    featured: false,
  },
  {
    title: "Control de H. Pylori",
    description: "Diagnóstico y tratamiento oportuno para erradicar la infección por Helicobacter pylori.",
    tag: "Patologías Digestivas",
    featured: false,
  },
  {
    title: "Hemorragias Digestivas",
    description: "Atención médica urgente y evaluación especializada ante cuadros de sangrado digestivo y rectal.",
    tag: "Atención Especializada",
    featured: false,
  },
  {
    title: "Endoscopia Digestiva",
    description: "Procedimientos de Endoscopia Digestiva Superior y Colonoscopia para un diagnóstico seguro.",
    tag: "Procedimientos",
    featured: false,
  },
]

export function ServicesSection() {
  const scrollRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)

  const whatsappUrl =
    "https://wa.me/584243049579?text=Hola%20Dra.%20Katherine%20Ainslie%2C%20quiero%20agendar%20una%20cita%20con%20la%20pediatra%20gastro.%20Estoy%20interesado(a)%20en%3A%20"

  // Lógica avanzada de auto-scroll fluido
  useEffect(() => {
    let animationFrameId

    const animateScroll = () => {
      if (scrollRef.current && !isInteracting) {
        // Velocidad de la marquesina (puedes ajustarla)
        scrollRef.current.scrollLeft += 1.2

        const { scrollLeft, scrollWidth } = scrollRef.current

        // Efecto infinito
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll)
    }

    animationFrameId = requestAnimationFrame(animateScroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isInteracting])

  // Extraemos la tarjeta a una función para no repetir código entre el carrusel y el grid
  const renderCard = (service, idx, isDesktop) => {
    const isFeatured = service.featured
    return (
      <li
        key={`${service.title}-${isDesktop ? 'desktop' : 'mobile'}-${idx}`}
        className={[
          isDesktop ? "w-auto" : "w-[300px] shrink-0", // Móvil: 300px fijos. PC: Auto
          "soft-card group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 select-none",
          isFeatured
            ? "border-primary/40 bg-foreground text-background shadow-xl shadow-primary/10 hover:shadow-primary/20"
            : "border-border bg-card hover:border-[#0A192F]/40 hover:bg-[#0A192F] hover:shadow-xl hover:shadow-[#0A192F]/20 hover:-translate-y-1",
        ].join(" ")}
      >
        <span
          aria-hidden="true"
          className={[
            "absolute right-5 top-5 font-serif text-xs transition-colors duration-300",
            isFeatured ? "text-background/40" : "text-muted-foreground/60 group-hover:text-blue-100/40",
          ].join(" ")}
        >
          0{idx + 1}
        </span>

        <h3
          className={[
            "mt-2 font-serif text-xl font-medium transition-colors duration-300",
            isFeatured ? "text-background" : "text-foreground group-hover:text-white",
          ].join(" ")}
        >
          {service.title}
        </h3>

        <p
          className={[
            "mt-2 flex-1 text-sm leading-relaxed transition-colors duration-300",
            isFeatured ? "text-background/70" : "text-muted-foreground group-hover:text-blue-50/80",
          ].join(" ")}
        >
          {service.description}
        </p>

        <span
          className={[
            "mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300",
            isFeatured
              ? "bg-background/10 text-background"
              : "bg-secondary text-secondary-foreground group-hover:bg-white/10 group-hover:text-white",
          ].join(" ")}
        >
          {service.tag}
        </span>
      </li>
    )
  }

  return (
    <section id="servicios" className="border-y border-border bg-secondary/40 py-12 sm:py-16 overflow-hidden">

      {/* Ocultamos la barra de scroll nativa */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

          {/* Contenedor de Títulos */}
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Servicios principales
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-[2.5rem] sm:leading-[1.1]">
              Servicios médicos disponibles en Maracay,{" "}
              <span className="text-primary">pensados para niños.</span>
            </h2>
          </div>

          {/* BOTÓN CTA MEJORADO */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98] md:py-2.5"
          >
            <span>Agendar cita ahora</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

        </div>
      </div>

      {/* VERSIÓN MÓVIL: Carrusel Infinito con control manual (Oculto desde 'sm') */}
      <div
        className="sm:hidden mt-14 flex overflow-x-auto hide-scrollbar [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]"
        ref={scrollRef}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        {/* El padding py-4 evita que se corten las sombras (shadow-xl) de las tarjetas */}
        <div className="flex w-max gap-5 pr-5 py-4">
          {services.map((s, i) => renderCard(s, i, false))}
          {services.map((s, i) => renderCard(s, i, false))}
        </div>
      </div>

      {/* VERSIÓN ESCRITORIO: Grid original (Oculto en móvil) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="hidden sm:grid mt-14 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => renderCard(s, i, true))}
        </ul>
      </div>

    </section>
  )
}