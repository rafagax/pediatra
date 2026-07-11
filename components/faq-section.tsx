import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqs = [
  {
    q: "¿Cómo agendo una cita pediátrica?",
    a: "Puedes agendar directamente por WhatsApp. Solo haz clic en el botón de agendar cita, cuéntanos qué servicio te interesa y te confirmamos horario disponible.",
  },
  {
    q: "¿Qué servicios médicos ofrecen?",
    a: "Además de pediatría, contamos con apoyo de especialistas en cardiología, neumonología, otorrinolaringología, endocrinología infantil, dermatología, nefrología y neurocirugía.",
  },
  {
    q: "¿Atienden niños y adultos?",
    a: "Sí. La consulta principal es pediátrica y también ofrecemos coordinación con especialistas que atienden tanto pacientes pediátricos como adultos según cada caso.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Atendemos en Maracay (Centro Médico Santa Marta), Turmero (Instituto Policlínico Turmero), Cagua (Policlínica Centro) y Villa de Cura (zona centro). Escríbenos por WhatsApp y te compartimos la ubicación exacta según la sede.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-secondary/40 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Preguntas frecuentes</span>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-4xl">
            Resolvemos tus dudas antes de tu primera cita.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Como consulta pediátrica en Aragua, queremos que llegues informada y tranquila. ¿No encuentras tu duda?
            Escríbenos por WhatsApp y te respondemos personalmente.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={item.q}
              value={`item-${idx}`}
              className="border-b border-border first:border-t-0"
            >
              <AccordionTrigger className="py-5 text-left font-serif text-lg font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
