import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp"

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-40">
      <div className="border-b border-border/60 bg-foreground text-background">
        <div className="mx-auto flex min-h-9 max-w-6xl items-center justify-center px-4 py-2 text-center text-[11px] sm:px-6 md:justify-between md:text-left lg:px-8">
          <span className="text-background/80">Maracay · Turmero · Cagua · Villa de Cura</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-background/90 transition-colors hover:text-background md:block"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>

      <header className="w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/#inicio" className="flex items-center gap-2.5 transition-opacity hover:opacity-85">
            <Image
              src="/images/logo-ka.png"
              alt="Logo de la Dra. Katherine Ainslie"
              width={494}
              height={278}
              priority
              className="h-9 w-auto flex-none sm:h-11"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">Dra. Katherine Ainslie</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Gastroenterología y Nutrición Pediátrica
              </span>
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            <a href="/#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Servicios
            </a>
            <a href="/#proceso" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Proceso
            </a>
            <Link
              href="/dra-katherine-ainslie"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              La Doctora
            </Link>
            <a href="/#testimonios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pacientes
            </a>
            <a href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Preguntas
            </a>
          </nav>

          <Button asChild size="sm" className="rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90 sm:px-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4 hidden sm:block" aria-hidden="true" />
              Agendar Cita
            </a>
          </Button>
        </div>

        <nav aria-label="Navegación móvil" className="border-t border-border/60 md:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6">
            <a href="/#servicios" className="py-1.5 text-muted-foreground transition-colors hover:text-foreground">Servicios</a>
            <a href="/#proceso" className="py-1.5 text-muted-foreground transition-colors hover:text-foreground">Proceso</a>
            <Link href="/dra-katherine-ainslie" className="py-1.5 text-muted-foreground transition-colors hover:text-foreground">La Doctora</Link>
            <a href="/#testimonios" className="py-1.5 text-muted-foreground transition-colors hover:text-foreground">Reseñas</a>
            <a href="/#contacto" className="py-1.5 text-muted-foreground transition-colors hover:text-foreground">Contacto</a>
          </div>
        </nav>
      </header>
    </div>
  )
}
