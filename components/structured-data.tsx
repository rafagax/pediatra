import { SITE_URL, BUSINESS_PHONE, SEDES, GEO, OPENING_HOURS } from "@/lib/site"
import { faqs } from "@/components/faq-section"

// Datos estructurados (Schema.org / JSON-LD).
// Ayudan a Google a entender que esto es una consulta de gastroenterología y
// nutrición pediátrica en Aragua, con sus sedes, teléfono, horario y preguntas frecuentes.
export function StructuredData() {
  const principal = SEDES[0]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Physician"],
        "@id": `${SITE_URL}/#physician`,
        name: "Dra. Katherine Ainslie — Gastroenterología y Nutrición Pediátrica",
        description:
          "Especialista en gastroenterología y nutrición pediátrica en Aragua (Maracay, Turmero, Cagua y Villa de Cura). Diagnóstico y tratamiento de reflujo, estreñimiento, dolor abdominal y atención integral de niños y adolescentes.",
        url: SITE_URL,
        telephone: BUSINESS_PHONE,
        image: `${SITE_URL}/images/portada-katherine.jpg`,
        priceRange: "$$",
        medicalSpecialty: ["Gastroenterologic", "DietNutrition"],
        address: {
          "@type": "PostalAddress",
          streetAddress: principal.lugar,
          addressLocality: principal.ciudad,
          addressRegion: principal.region,
          addressCountry: "VE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        areaServed: SEDES.map((s) => ({ "@type": "City", name: s.ciudad })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: OPENING_HOURS.dias,
          opens: OPENING_HOURS.abre,
          closes: OPENING_HOURS.cierra,
        },
        availableService: [
          "Consulta Pediátrica",
          "Reflujo Gastroesofágico",
          "Manejo del Estreñimiento",
          "Dolor Abdominal",
          "Alergias e Intolerancias Alimentarias",
          "Control de Helicobacter Pylori",
          "Endoscopia Digestiva",
        ].map((name) => ({ "@type": "MedicalProcedure", name })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Dra. Katherine Ainslie",
        inLanguage: "es-VE",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}
