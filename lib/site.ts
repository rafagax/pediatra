// Configuración central del negocio para SEO, metadata y datos estructurados (Schema.org).
// Editar aquí actualiza el sitemap, la metadata y el JSON-LD en todo el sitio.

/** Dominio del sitio (sin barra final). */
export const SITE_URL = "https://dragastropedia-aragua.com"

/** Teléfono en formato internacional E.164 (usado en los datos estructurados). */
export const BUSINESS_PHONE = "+584243049579"

/**
 * Sedes donde atiende la doctora. La primera es la sede principal para SEO.
 * `mapQuery` es lo que se busca en Google Maps para cada mapa del footer.
 * ⚠️ En Villa de Cura el consultorio varía según disponibilidad, por eso el mapa
 * apunta solo al pueblo (la doctora indica la dirección exacta por WhatsApp).
 */
export const SEDES = [
  {
    ciudad: "Maracay",
    lugar: "Centro Médico Santa Marta",
    region: "Aragua",
    mapQuery: "Centro Medico Santa Marta, Maracay, Aragua, Venezuela",
  },
  {
    ciudad: "Turmero",
    lugar: "Instituto Policlínico Turmero",
    region: "Aragua",
    mapQuery: "Policlínico Turmero, Turmero, Aragua, Venezuela",
  },
  {
    ciudad: "Cagua",
    lugar: "Policlínica Centro",
    region: "Aragua",
    mapQuery: "Policlínica Centro, Cagua, Aragua, Venezuela",
  },
  {
    ciudad: "Villa de Cura",
    lugar: "Zona centro",
    region: "Aragua",
    mapQuery: "Villa de Cura, Aragua, Venezuela",
  },
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

/**
 * Redes sociales de la doctora (se muestran bajo su foto en /dra-katherine-ainslie).
 * ⚠️ AJUSTAR: reemplaza el "#" con el enlace real de cada red.
 * Deja la cadena vacía ("") en las redes que aún no tenga para ocultarlas.
 */
export const SOCIALS = {
  instagram: "#",
  facebook: "#",
  linkedin: "#",
}
