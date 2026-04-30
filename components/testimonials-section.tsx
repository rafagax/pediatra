"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "María Alejandra G.",
    location: "Las Delicias, Maracay",
    quote: "Agendé por WhatsApp en minutos y la atención fue excelente. Me explicaron todo con mucha paciencia.",
    image: "/images/doctora-3.png",
    treatment: "Consulta de diagnóstico",
  },
  {
    name: "Carlos Rivas",
    location: "Centro de Maracay",
    quote: "El proceso fue claro y rápido. Se nota la calidad humana en cada consulta y en el seguimiento.",
    image: "/images/doctora-4.png",
    treatment: "Tratamiento integral",
  },
  {
    name: "Mamá de paciente pediátrica",
    location: "Av. Las Delicias",
    quote: "Mi hija se sintió cómoda desde el primer momento. La doctora fue muy cariñosa y nos orientó en cada paso.",
    image: "/images/doctora-5.png",
    treatment: "Odontología pediátrica",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)

  // Lógica avanzada de auto-scroll fluido
  useEffect(() => {
    let animationFrameId

    const animateScroll = () => {
      // Si el usuario no está tocando/haciendo hover, movemos el scroll
      if (scrollRef.current && !isInteracting) {
        // VELOCIDAD: Cambia este número para hacerlo más rápido (ej: 1.5 o 2) o más lento (ej: 0.5)
        scrollRef.current.scrollLeft += 1.2

        const { scrollLeft, scrollWidth } = scrollRef.current

        // Magia del infinito: Si llegamos a la mitad exacta del contenedor (que equivale a la primera lista completa), 
        // regresamos a 0 de forma invisible sin que el usuario lo note.
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0
        }
      }
      // Llamamos al siguiente frame
      animationFrameId = requestAnimationFrame(animateScroll)
    }

    // Iniciamos la animación
    animationFrameId = requestAnimationFrame(animateScroll)

    // Limpiamos al desmontar
    return () => cancelAnimationFrame(animationFrameId)
  }, [isInteracting])

  const renderCard = (t, idx, isDesktop) => (
    <li
      key={`${t.name}-${isDesktop ? 'desktop' : 'mobile'}-${idx}`}
      className={[
        "soft-card relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow",
        isDesktop ? "w-auto" : "w-[300px] shrink-0",
        isDesktop && idx === 1 ? "md:translate-y-4" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Opinión verificada</span>
        <span className="font-semibold text-primary">Google</span>
      </div>

      <p className="mt-4 flex-1 text-base leading-relaxed text-foreground text-pretty select-none">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted ring-2 ring-accent">
          <Image
            src={t.image || "/placeholder.svg"}
            alt={`Foto de ${t.name}, paciente de pediatría en Maracay`}
            fill
            sizes="48px"
            className="object-cover pointer-events-none"
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
  )

  return (
    <section id="testimonios" className="border-t border-border bg-secondary/40 py-12 sm:py-16 overflow-hidden">

      {/* Ocultamos la barra de scroll nativa en todos los navegadores */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

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
          <div className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm hidden md:block">
            <span className="text-sm font-semibold text-foreground">4.9 / 5</span>
            <span className="text-sm text-muted-foreground"> · Google Reseñas</span>
          </div>
        </div>

        {/* VERSIÓN MÓVIL: Contenedor con Scroll Nativo y JS Scroll */}
        <div
          className="md:hidden mt-14 flex overflow-x-auto hide-scrollbar [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]"
          ref={scrollRef}
          // Eventos para pausar cuando el usuario toma el control
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
        >
          <div className="flex w-max gap-6 pr-6 py-4">
            {/* Renderizamos DOS VECES la lista para la ilusión de infinito */}
            {testimonials.map((t, idx) => renderCard(t, idx, false))}
            {testimonials.map((t, idx) => renderCard(t, idx, false))}
          </div>
        </div>

        {/* VERSIÓN ESCRITORIO: Grid original estático */}
        <ul className="hidden md:grid mt-14 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => renderCard(t, idx, true))}
        </ul>

      </div>
    </section>
  )
}