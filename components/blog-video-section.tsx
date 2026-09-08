import { PlayCircle } from "lucide-react"
import { BLOG_VIDEO_URL } from "@/lib/site"

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1)
    if (parsed.hostname.endsWith("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) return parsed.pathname.split("/")[2]
      return parsed.searchParams.get("v")
    }
  } catch {
    return null
  }
  return null
}

export function BlogVideoSection() {
  if (!BLOG_VIDEO_URL) return null

  const youtubeId = getYouTubeId(BLOG_VIDEO_URL)
  const isLocalVideo = BLOG_VIDEO_URL.startsWith("/")
  if (!youtubeId && !isLocalVideo) return null

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8" aria-labelledby="blog-video-title">
      <div className="grid items-center gap-7 overflow-hidden rounded-[1.75rem] border border-border bg-card p-5 shadow-sm sm:p-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <PlayCircle className="h-4 w-4" aria-hidden="true" /> La doctora te explica
          </span>
          <h2 id="blog-video-title" className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">
            Consejos en video para cuidar la salud digestiva infantil
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            La Dra. Katherine Ainslie conversa sobre estos síntomas frecuentes y explica cuándo conviene solicitar una evaluación.
          </p>
        </div>

        <div className="aspect-video overflow-hidden rounded-2xl bg-foreground/5 ring-1 ring-border">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title="Dra. Katherine Ainslie: salud digestiva infantil"
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video className="h-full w-full object-cover" controls preload="metadata">
              <source src={BLOG_VIDEO_URL} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          )}
        </div>
      </div>
    </section>
  )
}
