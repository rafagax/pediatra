// Configuración central del negocio para SEO, metadata y datos estructurados (Schema.org).
// Editar aquí actualiza el sitemap, la metadata y el JSON-LD en todo el sitio.

/** Dominio del sitio (sin barra final). */
export const SITE_URL = "https://dragastropedia-aragua.com"

/** Teléfono en formato internacional E.164 (usado en los datos estructurados). */
export const BUSINESS_PHONE = "+584243049579"

/** Sedes donde atiende la doctora. La primera es la sede principal para SEO. */
export const SEDES = [
  { ciudad: "Maracay", lugar: "Centro Médico Santa Marta", region: "Aragua" },
  { ciudad: "Turmero", lugar: "Instituto Policlínico Turmero", region: "Aragua" },
  { ciudad: "Cagua", lugar: "Policlínica Centro", region: "Aragua" },
  { ciudad: "Villa de Cura", lugar: "Laboratorio Bearne", region: "Aragua" },
]

/**
 * Coordenadas aproximadas de la sede principal (Maracay).
 * ⚠️ AJUSTAR con la ubicación exacta del Centro Médico Santa Marta (Google Maps → clic derecho → copiar coordenadas).
 */
export const GEO = { latitude: 10.2469, longitude: -67.5958 }

/**
 * Horario de atención de la consulta.
 * ⚠️ AJUSTAR con el horario real de la doctora.
 */
export const OPENING_HOURS = {
  dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  abre: "08:00",
  cierra: "16:00",
}
