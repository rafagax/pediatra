/** @type {import('next').NextConfig} */

// Dominio canónico oficial del sitio (apex, sin www).
// Debe coincidir con SITE_URL de lib/site.ts.
const CANONICAL_HOST = "dragastropedia-aragua.com"

const nextConfig = {
  // No revelar la tecnología del servidor en las cabeceras (quita X-Powered-By).
  poweredByHeader: false,

  // Canonicalización de dominio: cualquier visita a www.<dominio> se redirige de
  // forma permanente (308) al dominio raíz, conservando la ruta y los parámetros.
  // Actúa como red de seguridad: si Vercel ya redirige www→apex desde Domains, esa
  // redirección de borde ocurre antes y esta regla nunca llega a ejecutarse (sin
  // bucles ni cadenas, porque tras redirigir el host ya es el apex y no vuelve a
  // coincidir con la condición www).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${CANONICAL_HOST}` }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ]
  },

  // Encabezados de seguridad aplicados a todas las rutas. Conjunto conservador,
  // compatible con los embeds de Google Maps y Google Analytics del sitio
  // (no se añade una CSP restrictiva para no romper esos recursos de terceros).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
    ]
  },
}

export default nextConfig
