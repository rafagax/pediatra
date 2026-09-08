import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { BLOG_POSTS } from "@/lib/blog-posts"
import { SITE_URL } from "@/lib/site"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Blog de salud digestiva infantil | Dra. Katherine Ainslie",
  description:
    "Orientación clara para familias sobre reflujo, estreñimiento, dolor abdominal y alergias alimentarias en bebés y niños.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de salud digestiva infantil | Dra. Katherine Ainslie",
    description: "Información pediátrica clara y cercana para madres, padres y cuidadores en Aragua.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [{
      url: BLOG_POSTS[0].image,
      width: 1200,
      height: 630,
      alt: BLOG_POSTS[0].imageAlt,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de salud digestiva infantil | Dra. Katherine Ainslie",
    description: "Información pediátrica clara y cercana para madres, padres y cuidadores en Aragua.",
    images: [BLOG_POSTS[0].image],
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background page-bg text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_80%_0%,var(--accent)_0%,transparent_68%)]" />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">Inicio</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <span aria-current="page" className="text-foreground">Blog</span>
          </nav>

          <div className="mt-9 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" /> Educación para familias
            </span>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-balance sm:text-6xl">
              Salud digestiva infantil, explicada con claridad
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Información basada en criterios pediátricos para ayudarte a entender síntomas frecuentes, reconocer señales
              de alarma y tomar decisiones acompañadas por un especialista.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.slug} className="soft-card group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
              <Link href={`/blog/${post.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <div className="relative aspect-[1200/630] overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <time dateTime={post.datePublished} className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {post.displayDate}
                  </time>
                  <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Leer artículo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
