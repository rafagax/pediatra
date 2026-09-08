import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, MessageCircle, Stethoscope } from "lucide-react"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getBlogPost, getPostWhatsAppUrl, getRelatedPosts } from "@/lib/blog-posts"
import { SITE_URL } from "@/lib/site"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`

  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: url },
    authors: [{ name: "Dra. Katherine Ainslie", url: `${SITE_URL}/dra-katherine-ainslie` }],
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url,
      siteName: "Dra. Katherine Ainslie",
      locale: "es_VE",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Dra. Katherine Ainslie"],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [post.image],
    },
  }
}

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const postUrl = `${SITE_URL}/blog/${post.slug}`
  const relatedPosts = getRelatedPosts(post.slug)
  const whatsappUrl = getPostWhatsAppUrl(post.topic)

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.description,
    url: postUrl,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "es-VE",
    author: {
      "@type": "Person",
      name: "Dra. Katherine Ainslie",
      jobTitle: "Gastroenteróloga y Nutrióloga Pediatra",
      url: `${SITE_URL}/dra-katherine-ainslie`,
    },
    reviewedBy: { "@type": "Person", name: "Dra. Katherine Ainslie" },
    publisher: {
      "@type": "Organization",
      name: "Dra. Katherine Ainslie – Gastroenterología y Nutrición Pediátrica",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-ka.png` },
    },
    about: { "@type": "MedicalCondition", name: post.condition },
    audience: { "@type": "PeopleAudience", audienceType: "Padres y cuidadores" },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  }

  return (
    <main className="min-h-screen bg-background page-bg text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(medicalWebPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <SiteHeader />

      <article>
        <header className="border-b border-border/70">
          <div className="mx-auto max-w-4xl px-4 pb-10 pt-9 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
            <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Inicio</Link>
              <span aria-hidden="true">›</span>
              <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page" className="line-clamp-1 text-foreground">{post.title}</span>
            </nav>

            <h1 className="mt-8 font-serif text-[2.5rem] font-medium leading-[1.08] text-balance sm:text-6xl">
              {post.title}
            </h1>

            <div className="mt-7 flex items-center gap-3 border-t border-border/70 pt-6">
              <Link href="/dra-katherine-ainslie" aria-label="Conoce a la Dra. Katherine Ainslie" className="relative h-12 w-12 flex-none overflow-hidden rounded-full border-2 border-card bg-muted shadow-sm">
                <Image src="/images/doctora-1.png" alt="Dra. Katherine Ainslie" fill sizes="48px" className="object-cover object-[45%_28%]" />
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Por <Link href="/dra-katherine-ainslie" className="font-semibold text-foreground hover:text-primary">Dra. Katherine Ainslie</Link>
                {" · "}Gastroenteróloga y Nutrióloga Pediatra{" · "}
                Publicado <time dateTime={post.datePublished}>{post.displayDate}</time>{" · "}
                Revisado <time dateTime={post.dateModified}>{post.displayDate}</time>
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
          <div className="relative aspect-[1200/630] overflow-hidden rounded-[1.75rem] bg-muted shadow-lg shadow-foreground/5 ring-1 ring-border">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="article-prose">{post.body}</div>

          <aside className="article-callout mt-12 rounded-[1.5rem] border border-primary/25 bg-card p-6 shadow-sm sm:p-8" aria-labelledby="consult-title">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Stethoscope className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 id="consult-title" className="font-serif text-2xl font-medium text-foreground">¿Cuándo consultar?</h2>
            </div>
            <div className="article-prose mt-5">{post.consult}</div>
          </aside>

          <section className="mt-14" aria-labelledby="faq-title">
            <h2 id="faq-title" className="font-serif text-3xl font-medium text-foreground">Preguntas frecuentes</h2>
            <dl className="mt-6 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-card">
              {post.faq.map((item) => (
                <div key={item.question} className="p-5 sm:p-6">
                  <dt className="font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14 overflow-hidden rounded-[1.75rem] bg-foreground px-6 py-9 text-background sm:px-9" aria-labelledby="cta-title">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-background/65">
              <CalendarDays className="h-4 w-4" aria-hidden="true" /> Orientación personalizada
            </div>
            <h2 id="cta-title" className="mt-4 font-serif text-3xl font-medium">Agenda una consulta</h2>
            <div className="mt-4 text-base leading-relaxed text-background/75">{post.closing}</div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90">
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Agendar consulta por WhatsApp
            </a>
          </section>

          <aside className="mt-12 flex flex-col gap-5 rounded-[1.5rem] border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8" aria-label="Sobre la autora">
            <div className="relative h-24 w-24 flex-none overflow-hidden rounded-2xl bg-muted">
              <Image src="/images/doctora-1.png" alt="Dra. Katherine Ainslie" fill sizes="96px" className="object-cover object-[45%_28%]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Sobre la autora</p>
              <h2 className="mt-1 font-serif text-2xl font-medium">Dra. Katherine Ainslie</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pediatra y gastroenteróloga infantil.<br />Especialista en Gastroenterología y Nutrición Pediátrica.
              </p>
              <Link href="/dra-katherine-ainslie" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Conoce su trayectoria <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-y border-border bg-secondary/40 py-14 sm:py-20" aria-labelledby="related-title">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-title" className="font-serif text-3xl font-medium text-foreground">Artículos relacionados</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="soft-card group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[1200/630] overflow-hidden bg-muted">
                  <Image src={related.image} alt={related.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-medium leading-snug transition-colors group-hover:text-primary">{related.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Leer artículo <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-7 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        Este contenido es informativo y no sustituye la consulta médica.
      </div>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
