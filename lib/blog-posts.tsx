import type { ReactNode } from "react"
import Link from "next/link"

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPost = {
  slug: string
  seoTitle: string
  title: string
  description: string
  excerpt: string
  image: string
  imageAlt: string
  topic: string
  condition: string
  datePublished: string
  dateModified: string
  displayDate: string
  body: ReactNode
  consult: ReactNode
  closing: ReactNode
  faq: BlogFaq[]
}

const ArticleLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
    {children}
  </Link>
)

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "reflujo-en-bebes",
    seoTitle: "Reflujo en bebés: ¿cuándo es normal? | Dra. Ainslie",
    title: "Reflujo en bebés: cuándo es normal y cuándo preocuparse",
    description:
      "¿Tu bebé regurgita mucho? Una especialista en gastroenterología pediátrica de Maracay explica cuándo el reflujo en bebés es normal, cuándo preocuparse y cómo se trata.",
    excerpt:
      "Aprende a distinguir el reflujo fisiológico de las señales que necesitan evaluación médica y conoce qué puedes hacer en casa.",
    image: "/images/blog/reflujo-en-bebes-maracay.webp",
    imageAlt: "Bebé recostado sobre el hombro de su madre después de comer",
    topic: "reflujo",
    condition: "Reflujo gastroesofágico",
    datePublished: "2026-08-08",
    dateModified: "2026-08-08",
    displayDate: "8 de agosto de 2026",
    body: (
      <>
        <p>
          Si tu bebé regurgita después de casi todas las tomas, no estás sola: es una de las consultas más frecuentes
          que recibo en Maracay. La buena noticia es que, en la mayoría de los casos, el reflujo en bebés es normal y
          desaparece solo. La clave está en saber distinguir ese reflujo &ldquo;de crecimiento&rdquo; del que sí necesita atención.
        </p>

        <h2>¿Qué es el reflujo en bebés?</h2>
        <p>
          El reflujo gastroesofágico es el paso del contenido del estómago hacia el esófago (el tubo que conecta la
          boca con el estómago). En los bebés ocurre porque el músculo que cierra la entrada del estómago todavía está
          inmaduro, el estómago es pequeño, la alimentación es líquida y pasan gran parte del día acostados.
        </p>
        <p>
          Por eso, entre los 2 y los 4 meses, muchos bebés regurgitan varias veces al día. Se les llama a veces
          &ldquo;regurgitadores felices&rdquo;: devuelven leche, pero comen bien, ganan peso y están tranquilos.
        </p>

        <h2>Reflujo normal (fisiológico) vs. enfermedad por reflujo</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr><th>Reflujo normal</th><th>Enfermedad por reflujo (ERGE)</th></tr>
            </thead>
            <tbody>
              <tr><td>Regurgita sin esfuerzo, sin dolor</td><td>Llora o arquea la espalda al comer o después</td></tr>
              <tr><td>Gana peso adecuadamente</td><td>Poca ganancia de peso o pérdida de peso</td></tr>
              <tr><td>Come con gusto</td><td>Rechaza el pecho o el biberón</td></tr>
              <tr><td>Duerme y está tranquilo entre tomas</td><td>Irritable la mayor parte del día</td></tr>
              <tr><td>Mejora entre los 6 y 12 meses</td><td>Persiste o empeora con el tiempo</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          La diferencia no está en la cantidad de leche que devuelve, sino en cómo está el bebé: si crece bien y está
          cómodo, casi siempre es reflujo fisiológico.
        </p>

        <h2>¿Hasta qué edad es normal el reflujo?</h2>
        <p>
          El pico suele estar alrededor de los 4 meses. A partir de los 6 meses, con la introducción de alimentos
          sólidos y al empezar a sentarse, la mayoría mejora notablemente. Cerca del año, más del 90 % de los bebés ha
          dejado de regurgitar. Si después de los 12–18 meses continúa, conviene una evaluación.
        </p>

        <h2>Qué puedes hacer en casa</h2>
        <ul>
          <li><strong>Tomas más pequeñas y frecuentes.</strong> Un estómago muy lleno regurgita más.</li>
          <li><strong>Sacar los gases</strong> a mitad de la toma y al final.</li>
          <li><strong>Mantenerlo en posición vertical</strong> unos 20–30 minutos después de comer.</li>
          <li><strong>No apretar el pañal ni la ropa</strong> sobre el abdomen.</li>
          <li><strong>Evitar el humo de cigarrillo</strong> en casa; empeora el reflujo.</li>
          <li><strong>Si toma pecho:</strong> continúa con la lactancia; es la mejor alimentación también para bebés con reflujo.</li>
          <li><strong>Si toma fórmula:</strong> verifica la preparación correcta y el tamaño del chupón del biberón. Antes de cambiar de fórmula, consulta.</li>
        </ul>
        <p>
          <strong>Lo que no se recomienda:</strong> acostarlo boca abajo o de lado para dormir (aumenta el riesgo de
          muerte súbita), ni elevar el colchón de la cuna con almohadas. Tampoco dar medicamentos antirreflujo por
          cuenta propia; en el reflujo fisiológico no ayudan y pueden tener efectos secundarios.
        </p>

        <h2>¿Puede ser otra cosa?</h2>
        <p>
          Algunos bebés con &ldquo;reflujo que no mejora&rdquo; en realidad tienen una{" "}
          <ArticleLink href="/blog/alergia-proteina-leche-de-vaca">alergia a la proteína de leche de vaca</ArticleLink>,
          que puede presentarse con regurgitaciones, cólicos intensos, deposiciones con moco o sangre y dermatitis.
          Otras causas menos frecuentes que el especialista descarta en consulta son obstrucciones del tracto digestivo
          (como la estenosis pilórica) y problemas neurológicos o metabólicos.
        </p>

        <h2>Cómo se evalúa el reflujo en consulta</h2>
        <p>
          En la <ArticleLink href="/#servicios">consulta de gastroenterología pediátrica</ArticleLink> revisamos la
          curva de peso y talla, la forma de alimentación, el patrón de regurgitaciones y los síntomas asociados. En la
          gran mayoría de los casos el diagnóstico es clínico y no hacen falta estudios. Solo cuando hay señales de
          alarma se indican exámenes como ecografía, pH-metría o endoscopia digestiva pediátrica.
        </p>
      </>
    ),
    consult: (
      <>
        <p>Agenda una cita si tu bebé presenta alguno de estos signos:</p>
        <ul>
          <li>Vómitos con fuerza (en proyectil) o de color verde o amarillo.</li>
          <li>Sangre en el vómito o en las heces.</li>
          <li>No gana peso, pierde peso o rechaza alimentarse.</li>
          <li>Llanto inconsolable o arqueo de la espalda con las tomas.</li>
          <li>Tos crónica, silbido al respirar, neumonías repetidas o pausas al respirar.</li>
          <li>Reflujo que empieza después de los 6 meses o que persiste después de los 12–18 meses.</li>
        </ul>
        <p>Si el bebé está decaído, deshidratado o tiene fiebre, acude a un servicio de emergencia.</p>
      </>
    ),
    closing: (
      <p>
        Si tu bebé regurgita pero crece bien y está tranquilo, lo más probable es que solo necesite tiempo. Si tienes
        dudas o reconoces alguna señal de alarma, en Maracay, Turmero, Cagua y Villa de Cura puedo evaluarlo y darte un
        plan claro.
      </p>
    ),
    faq: [
      { question: "¿El reflujo hace daño al bebé?", answer: "El reflujo fisiológico no. Solo la enfermedad por reflujo, con inflamación del esófago o compromiso del peso, requiere tratamiento." },
      { question: "¿Debo espesar la leche?", answer: "Solo bajo indicación médica. Espesar sin control puede alterar la nutrición del bebé o empeorar el estreñimiento." },
      { question: "¿Cambiar de fórmula soluciona el reflujo?", answer: "Cambiar de fórmula repetidamente sin diagnóstico rara vez ayuda. Si se sospecha alergia a la proteína de leche de vaca, el cambio debe ser a una fórmula específica indicada por el especialista." },
      { question: "¿El reflujo es hereditario?", answer: "Hay cierta predisposición familiar, pero el principal factor en bebés es la inmadurez normal del sistema digestivo." },
    ],
  },
  {
    slug: "estrenimiento-en-ninos",
    seoTitle: "Estreñimiento en niños: causas y qué hacer | Dra. Ainslie",
    title: "Estreñimiento en niños: causas, qué hacer en casa y cuándo consultar",
    description:
      "Tu hijo no va al baño o le duele al evacuar. Una especialista en gastroenterología pediátrica explica las causas del estreñimiento infantil, qué hacer en casa y cuándo consultar.",
    excerpt:
      "Conoce las causas más frecuentes, las rutinas que ayudan y las señales que indican cuándo acudir al especialista.",
    image: "/images/blog/estrenimiento-en-ninos-maracay.webp",
    imageAlt: "Niño pequeño sentado en el inodoro con apoyo para los pies",
    topic: "estreñimiento",
    condition: "Estreñimiento infantil",
    datePublished: "2026-08-23",
    dateModified: "2026-08-23",
    displayDate: "23 de agosto de 2026",
    body: (
      <>
        <p>
          &ldquo;Mi hijo no hace popó&rdquo;, &ldquo;llora cuando va al baño&rdquo;, &ldquo;se aguanta y mancha la ropa interior&rdquo;.
          El estreñimiento es uno de los motivos de consulta más comunes en pediatría, y también uno de los que más
          angustia genera. Aquí te explico por qué ocurre, qué funciona en casa y en qué momento necesita un especialista.
        </p>

        <h2>¿Cuándo hablamos de estreñimiento?</h2>
        <p>No se trata solo de &ldquo;cuántas veces va&rdquo;. Un niño está estreñido cuando presenta, durante al menos un mes, dos o más de estos signos:</p>
        <ul>
          <li>Menos de 3 evacuaciones a la semana.</li>
          <li>Heces duras, grandes o en bolitas.</li>
          <li>Dolor o esfuerzo al evacuar.</li>
          <li>Posturas para &ldquo;aguantarse&rdquo; (cruzar las piernas, ponerse rígido, esconderse).</li>
          <li>Manchado de heces en la ropa interior.</li>
          <li>Heces tan grandes que tapan el inodoro.</li>
        </ul>
        <p>En bebés que toman solo pecho es normal pasar varios días sin evacuar si las heces son blandas y el bebé está cómodo. Eso no es estreñimiento.</p>

        <h2>Causas más frecuentes</h2>
        <p>
          En más del 90 % de los niños el estreñimiento es <strong>funcional</strong>: no hay una enfermedad detrás, sino
          un círculo que se repite. Algo produce una evacuación dolorosa (una deposición dura, un cambio de rutina), el
          niño aprende a aguantarse para evitar el dolor, las heces se acumulan y endurecen, y la siguiente evacuación duele más.
        </p>
        <p>Situaciones que suelen iniciarlo:</p>
        <ul>
          <li>Paso de leche a alimentos sólidos, o del pecho a la fórmula.</li>
          <li>Retiro del pañal antes de que el niño esté listo.</li>
          <li>Inicio del preescolar o la escuela (evita los baños ajenos).</li>
          <li>Dieta baja en fibra y agua, con exceso de lácteos, harinas refinadas y comida procesada.</li>
          <li>Viajes, mudanzas, cambios de rutina o situaciones de estrés.</li>
        </ul>
        <p>
          Con menos frecuencia, el estreñimiento tiene una causa orgánica: hipotiroidismo, enfermedad celíaca, alergia
          a la proteína de leche de vaca, enfermedad de Hirschsprung (ausencia de nervios en un segmento del intestino),
          alteraciones de la médula espinal o efectos de algunos medicamentos. El especialista sabe reconocer las señales
          que hacen sospechar estas causas.
        </p>

        <h2>Qué hacer en casa</h2>
        <h3>1. Alimentación</h3>
        <ul>
          <li>Frutas enteras con fibra: lechosa, mango, ciruela, pera, mandarina, guayaba.</li>
          <li>Vegetales en almuerzo y cena; leguminosas (caraotas, lentejas) varias veces por semana.</li>
          <li>Cereales integrales y avena en lugar de harinas refinadas.</li>
          <li>Agua durante el día, sobre todo con calor.</li>
          <li>Moderar lácteos: en mayores de 1 año, no más de 2–3 porciones diarias.</li>
          <li>Reducir comida procesada, galletas, refrescos y jugos industriales.</li>
        </ul>
        <h3>2. Rutina de baño</h3>
        <ul>
          <li>Sentarlo en el inodoro 5–10 minutos después de las comidas principales (el intestino se activa al comer).</li>
          <li>Con los pies apoyados en un banquito para que las rodillas queden por encima de la cadera.</li>
          <li>Sin presión ni regaños. Celebrar el intento, no solo el resultado.</li>
        </ul>
        <h3>3. Actividad física</h3>
        <p>Jugar, correr y moverse ayuda al movimiento intestinal. Limitar el tiempo de pantallas también ayuda.</p>
        <h3>4. Si retiraste el pañal y empezó el problema</h3>
        <p>Es válido volver al pañal temporalmente para evacuar. Forzar el control de esfínteres empeora el estreñimiento.</p>
        <p><strong>Lo que no debes hacer:</strong> usar laxantes, supositorios o enemas por cuenta propia de forma repetida. Pueden ser parte del tratamiento, pero deben indicarse por un pediatra con dosis y duración adecuadas.</p>

        <h2>¿Por qué mancha la ropa interior si está estreñido?</h2>
        <p>
          Parece contradictorio, pero es frecuente. Cuando hay heces acumuladas y endurecidas en el recto, las heces más
          líquidas se escapan alrededor sin que el niño lo controle. No es que &ldquo;no le importe&rdquo; ni que sea flojera: es
          un signo de estreñimiento avanzado que necesita tratamiento.
        </p>

        <h2>Cómo se trata en consulta</h2>
        <p>
          El tratamiento del estreñimiento funcional tiene tres partes: vaciar el intestino si hay heces retenidas,
          mantener las heces blandas durante varios meses para que el niño pierda el miedo a evacuar, y reeducar el
          hábito. Suele necesitar más tiempo del que los padres esperan, con frecuencia entre 6 y 12 meses, y suspender
          el tratamiento demasiado pronto es la causa más común de recaída. Una{" "}
          <ArticleLink href="/">gastroenterólogo pediatra en Maracay</ArticleLink> puede orientar un plan individual.
        </p>
      </>
    ),
    consult: (
      <ul>
        <li>Estreñimiento de más de 2–3 semanas que no mejora con cambios en la dieta.</li>
        <li>Sangre en las heces o dolor intenso al evacuar.</li>
        <li>Manchado de la ropa interior.</li>
        <li>Abdomen hinchado, vómitos o fiebre junto al estreñimiento.</li>
        <li>Poca ganancia de peso o pérdida de peso.</li>
        <li>Estreñimiento desde el nacimiento o retraso en expulsar el meconio (primera deposición) más de 48 horas.</li>
        <li><ArticleLink href="/blog/dolor-abdominal-en-ninos">Dolor abdominal frecuente</ArticleLink> asociado.</li>
      </ul>
    ),
    closing: (
      <p>
        El estreñimiento infantil se resuelve casi siempre, pero necesita un plan constante y acompañamiento. Si tu hijo
        lleva semanas con dificultad para evacuar o ya mancha la ropa, agenda una consulta en cualquiera de mis sedes en Aragua.
      </p>
    ),
    faq: [
      { question: "¿Cuántas veces al día debe evacuar un niño?", answer: "Varía mucho: desde 3 veces al día hasta 3 veces por semana puede ser normal, siempre que las heces sean blandas y no haya dolor." },
      { question: "¿El plátano estriñe?", answer: "El plátano verde o pintón sí puede endurecer las heces; el maduro no tanto. En cualquier caso, lo que importa es el conjunto de la alimentación." },
      { question: "¿El estreñimiento causa dolor de barriga?", answer: "Sí, es una de las causas más frecuentes de dolor abdominal recurrente en niños." },
      { question: "¿Se cura solo?", answer: "A veces sí en fases iniciales, pero el estreñimiento establecido tiende a cronificarse si no se trata." },
    ],
  },
  {
    slug: "dolor-abdominal-en-ninos",
    seoTitle: "Dolor de barriga frecuente en niños: causas | Dra. Ainslie",
    title: "Dolor de barriga frecuente en niños: qué puede ser y qué hacer",
    description:
      "¿A tu hijo le duele la barriga con frecuencia? Conoce las causas más comunes del dolor abdominal recurrente en niños, las señales de alarma y cuándo consultar.",
    excerpt:
      "Una guía clara sobre las causas habituales del dolor de barriga, las señales de alarma y cómo prepararte para la consulta.",
    image: "/images/blog/dolor-abdominal-en-ninos-maracay.webp",
    imageAlt: "Niña de edad escolar con las manos sobre el abdomen",
    topic: "dolor abdominal",
    condition: "Dolor abdominal recurrente",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    displayDate: "7 de septiembre de 2026",
    body: (
      <>
        <p>
          &ldquo;Me duele la barriga&rdquo; es una frase que casi todos los niños dicen alguna vez. El problema es cuando se
          repite semana tras semana, hace que falte al colegio o lo despierta en la noche. Como especialista en gastroenterología pediátrica,
          veo muchos niños de Maracay y sus alrededores con dolor abdominal recurrente, y la mayoría de los padres llegan
          con la misma pregunta: ¿es algo grave?
        </p>

        <h2>¿Qué es el dolor abdominal recurrente?</h2>
        <p>
          Se considera recurrente cuando el dolor aparece al menos una vez por semana durante dos meses o más, o cuando
          son tres o más episodios en tres meses que afectan las actividades del niño. Es muy frecuente: entre el 10 % y
          el 20 % de los niños en edad escolar lo presentan en algún momento.
        </p>

        <h2>Causas más frecuentes</h2>
        <h3>Dolor abdominal funcional</h3>
        <p>
          Es la causa número uno. El intestino del niño funciona, pero es más sensible a estímulos normales (gases,
          digestión, estrés). El dolor es real, no es &ldquo;inventado&rdquo;, pero no hay una lesión que lo produzca. Suele ser
          alrededor del ombligo, aparece y desaparece, y no lo despierta por la noche. Incluye cuadros como el síndrome
          de intestino irritable y la dispepsia funcional.
        </p>
        <h3><ArticleLink href="/blog/estrenimiento-en-ninos">Estreñimiento</ArticleLink></h3>
        <p>Muchos niños con dolor abdominal recurrente tienen heces retenidas sin que los padres lo sepan. Es una de las primeras cosas que evaluamos.</p>
        <h3>Intolerancia a la lactosa</h3>
        <p>Dolor, gases y diarrea después de consumir lácteos. Más frecuente en niños mayores y adolescentes.</p>
        <h3>Infección por <em>Helicobacter pylori</em></h3>
        <p>
          Esta bacteria puede causar gastritis y úlceras. Se sospecha cuando el dolor está en la parte alta del abdomen,
          hay náuseas, ardor o antecedentes familiares. El diagnóstico requiere pruebas específicas; el{" "}
          <ArticleLink href="/#servicios">Helicobacter pylori</ArticleLink> no se trata &ldquo;por si acaso&rdquo;.
        </p>
        <h3>Alergias alimentarias y enfermedad celíaca</h3>
        <p>
          En niños pequeños, la <ArticleLink href="/blog/alergia-proteina-leche-de-vaca">alergia a la proteína de leche de vaca</ArticleLink>{" "}
          puede dar dolor y cólicos. La enfermedad celíaca (intolerancia permanente al gluten) puede presentarse con dolor,
          distensión, diarrea o estreñimiento y talla baja.
        </p>
        <h3>Otras causas</h3>
        <p>Parásitos intestinales (frecuentes en nuestro medio, pero no son la causa de todo dolor abdominal), infecciones urinarias, reflujo, enfermedad inflamatoria intestinal, y causas que requieren atención inmediata como la apendicitis.</p>

        <h2>Señales que orientan a una causa orgánica</h2>
        <p>Cuanto más lejos del ombligo esté el dolor y más síntomas acompañantes tenga, más probable es que exista una causa específica. Las señales que hacen pensar en algo más que dolor funcional:</p>
        <ul>
          <li>Dolor que despierta al niño en la noche.</li>
          <li>Dolor localizado lejos del ombligo (lado derecho, parte alta).</li>
          <li>Pérdida de peso o estancamiento de la talla.</li>
          <li>Vómitos persistentes, sobre todo con bilis o sangre.</li>
          <li>Sangre en las heces o diarrea crónica.</li>
          <li>Fiebre recurrente sin explicación.</li>
          <li>Dolor o dificultad para tragar.</li>
          <li>Lesiones alrededor del ano, aftas frecuentes en la boca, dolor articular o erupciones.</li>
          <li>Antecedentes familiares de enfermedad celíaca, enfermedad inflamatoria intestinal o úlcera péptica.</li>
          <li>Menor de 5 años con dolor recurrente.</li>
        </ul>

        <h2>Qué puedes hacer en casa</h2>
        <ul>
          <li>Lleva un <strong>diario del dolor</strong> durante 2 semanas: hora, duración, qué comió, cómo evacuó, si faltó al colegio. Es la herramienta más útil en la consulta.</li>
          <li>Observa las <strong>deposiciones</strong>: frecuencia, consistencia, presencia de sangre.</li>
          <li>Revisa la <strong>alimentación</strong>: exceso de jugos, refrescos, chicles y golosinas puede producir gases y dolor.</li>
          <li><strong>Mantén la rutina</strong>: horarios de comida, sueño y actividad física.</li>
          <li><strong>No lo etiquetes</strong> como &ldquo;exagerado&rdquo; ni lo sobreprotejas; ambas cosas empeoran el dolor funcional.</li>
          <li><strong>No des analgésicos, antiparasitarios ni antiácidos de forma repetida</strong> sin diagnóstico.</li>
        </ul>

        <h2>Cómo se evalúa en consulta</h2>
        <p>
          La historia clínica y el examen físico resuelven la mayoría de los casos. Según lo que encontremos, pueden
          indicarse exámenes de heces, hematología, pruebas para celiaquía o <em>Helicobacter pylori</em>, ecografía
          abdominal y, solo en casos seleccionados, endoscopia digestiva pediátrica. El objetivo no es hacer todos los
          exámenes, sino los correctos.
        </p>
      </>
    ),
    consult: (
      <>
        <p><strong>Consulta con especialista</strong> si el dolor:</p>
        <ul>
          <li>Se repite por más de 2 meses o interfiere con el colegio, el juego o el sueño.</li>
          <li>Se acompaña de cualquiera de las señales de alarma de arriba.</li>
        </ul>
        <p><strong>Acude a emergencia de inmediato</strong> si hay:</p>
        <ul>
          <li>Dolor intenso y continuo, sobre todo en el lado derecho inferior del abdomen.</li>
          <li>Abdomen duro o muy hinchado.</li>
          <li>Vómitos verdes o con sangre.</li>
          <li>Sangre abundante en las heces.</li>
          <li>Fiebre alta con dolor intenso, o el niño está decaído o pálido.</li>
        </ul>
      </>
    ),
    closing: (
      <p>
        Un dolor de barriga que se repite merece una evaluación tranquila y ordenada, sin exámenes innecesarios pero sin
        pasar por alto lo importante. Si tu hijo lleva semanas quejándose, agenda una consulta en Maracay, Turmero, Cagua
        o Villa de Cura.
      </p>
    ),
    faq: [
      { question: "¿El dolor de barriga por nervios existe?", answer: "Sí. El estrés escolar o familiar puede desencadenar o empeorar el dolor funcional. Eso no significa que el dolor sea falso: el intestino y el cerebro están conectados." },
      { question: "¿Debo desparasitarlo?", answer: "Solo si hay diagnóstico o indicación de su pediatra. Desparasitar por rutina no resuelve el dolor abdominal recurrente." },
      { question: "¿Necesita endoscopia?", answer: "La mayoría no. Se indica cuando hay señales de alarma o sospecha de úlcera, celiaquía, enfermedad inflamatoria intestinal u otras causas específicas." },
      { question: "¿Se le va a quitar?", answer: "El dolor funcional mejora con el tiempo, un plan claro y el acompañamiento adecuado. Las causas orgánicas tienen tratamiento específico." },
    ],
  },
  {
    slug: "alergia-proteina-leche-de-vaca",
    seoTitle: "Alergia a la proteína de leche de vaca en bebés | Dra. Ainslie",
    title: "Alergia a la proteína de leche de vaca en bebés: síntomas y diagnóstico",
    description:
      "Síntomas de la alergia a la proteína de leche de vaca (APLV) en bebés, cómo se diagnostica correctamente y qué hacer si toma pecho o fórmula. Por la Dra. Katherine Ainslie.",
    excerpt:
      "Descubre cómo reconocer la APLV, en qué se diferencia de la intolerancia a la lactosa y cómo se confirma el diagnóstico.",
    image: "/images/blog/alergia-proteina-leche-de-vaca-bebes.webp",
    imageAlt: "Madre amamantando a su bebé",
    topic: "alergia a la leche",
    condition: "Alergia a la proteína de leche de vaca",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    displayDate: "22 de septiembre de 2026",
    body: (
      <>
        <p>
          La alergia a la proteína de leche de vaca (APLV) es la alergia alimentaria más común en los primeros años de
          vida. También es una de las más sobrediagnosticadas: muchos bebés reciben fórmulas especiales sin necesitarlas,
          y otros con síntomas claros pasan meses sin diagnóstico. Aquí te explico cómo reconocerla y cómo se confirma
          de forma correcta.
        </p>

        <h2>¿Qué es la APLV?</h2>
        <p>
          Es una reacción del sistema inmunológico contra las proteínas de la leche de vaca. No es lo mismo que la
          intolerancia a la lactosa, que es la dificultad para digerir el azúcar de la leche y es muy poco frecuente en bebés.
        </p>
        <p>
          Afecta aproximadamente al 2–3 % de los lactantes. Puede aparecer en bebés que toman fórmula y también en bebés
          que toman solo pecho, porque las proteínas de la leche que consume la madre pasan a la leche materna en pequeñas cantidades.
        </p>

        <h2>Dos tipos de reacción</h2>
        <p><strong>Reacción inmediata (mediada por IgE):</strong> aparece entre minutos y 2 horas después de tomar leche. Ronchas, hinchazón de labios o párpados, vómitos, tos o dificultad para respirar. Puede ser grave (anafilaxia) y requiere atención de emergencia.</p>
        <p><strong>Reacción tardía (no mediada por IgE):</strong> aparece horas o días después. Es la forma más frecuente en bebés y la más difícil de reconocer porque los síntomas se confunden con cólicos, reflujo o &ldquo;un estómago sensible&rdquo;.</p>

        <h2>Síntomas de la forma tardía (la más común)</h2>
        <p>Suelen combinarse síntomas digestivos, de la piel y generales:</p>
        <ul>
          <li>Regurgitaciones o vómitos frecuentes que no mejoran con las medidas habituales del <ArticleLink href="/blog/reflujo-en-bebes">reflujo en bebés</ArticleLink>.</li>
          <li>Cólicos intensos, llanto prolongado e irritabilidad.</li>
          <li>Deposiciones con moco o hilos de sangre.</li>
          <li>Diarrea persistente o, en otros casos, estreñimiento.</li>
          <li>Dermatitis atópica (piel seca, enrojecida, con picazón) de moderada a severa.</li>
          <li>Rechazo del alimento.</li>
          <li>Poca ganancia de peso.</li>
        </ul>
        <p>Ningún síntoma aislado confirma la alergia. Lo característico es la combinación de varios y su persistencia.</p>

        <h2>Cómo se diagnostica correctamente</h2>
        <p>
          No existen pruebas de laboratorio que confirmen por sí solas la forma tardía de la APLV. Las pruebas de IgE y
          las pruebas cutáneas ayudan en la forma inmediata, pero pueden salir normales en la forma tardía. Y las pruebas
          de &ldquo;intolerancia alimentaria&rdquo; que se venden por internet o en algunos laboratorios (IgG, pruebas de cabello,
          etc.) no tienen validez científica.
        </p>
        <p>El diagnóstico se hace en dos pasos:</p>
        <ol>
          <li><strong>Dieta de eliminación:</strong> se retira la proteína de leche de vaca durante 2 a 4 semanas y se observa si los síntomas mejoran claramente.</li>
          <li><strong>Prueba de provocación (reintroducción):</strong> se vuelve a introducir la leche de forma controlada. Si los síntomas reaparecen, se confirma la alergia. Este paso es fundamental; sin él, muchos bebés quedan con una dieta restrictiva innecesaria.</li>
        </ol>
        <p>Ambos pasos deben hacerse bajo supervisión de un especialista, especialmente la reintroducción.</p>

        <h2>Qué hacer si tu bebé toma pecho</h2>
        <p>
          <strong>Continúa amamantando.</strong> La lactancia materna sigue siendo la mejor opción. Lo que se indica es que
          la madre retire de su dieta la leche de vaca y sus derivados (queso, yogur, mantequilla, productos que la
          contengan como ingrediente), con un suplemento de calcio si es necesario. Los síntomas del bebé suelen mejorar
          en 2–4 semanas. La dieta de la madre debe ser guiada para que no sea más restrictiva de lo necesario.
        </p>

        <h2>Qué hacer si tu bebé toma fórmula</h2>
        <p>
          No sirve cambiar a una fórmula &ldquo;de cabra&rdquo;, &ldquo;sin lactosa&rdquo;, &ldquo;de soya&rdquo; en menores de 6 meses ni a leches
          vegetales. Las fórmulas indicadas son las <strong>extensamente hidrolizadas</strong> (la proteína está fragmentada)
          y, en casos graves o que no mejoran, las <strong>fórmulas de aminoácidos</strong>. Son costosas y deben usarse solo
          cuando el diagnóstico está bien fundamentado.
        </p>

        <h2>¿Es para siempre?</h2>
        <p>
          En la mayoría de los casos, no. Más de la mitad de los niños tolera la leche de vaca al año de edad y alrededor
          del 80 % a los 3 años. El especialista programa reintroducciones periódicas para saber cuándo se puede volver a
          incluir la leche en la dieta, sin mantener restricciones más tiempo del necesario.
        </p>

        <h2>Errores frecuentes</h2>
        <ul>
          <li>Retirar la leche &ldquo;a ver si mejora&rdquo; sin volver a introducirla para confirmar.</li>
          <li>Mantener al bebé o a la madre en dietas muy restrictivas durante meses sin seguimiento.</li>
          <li>Diagnosticar alergia solo por una prueba de laboratorio o por un test sin validez.</li>
          <li>Introducir alimentos sólidos con retraso por miedo a otras alergias. Al contrario, la introducción oportuna y variada (alrededor de los 6 meses) ayuda a prevenirlas.</li>
        </ul>
        <p>
          Si necesitas orientación, la <ArticleLink href="/#servicios">consulta de nutrición pediátrica</ArticleLink> permite
          valorar cada caso sin restricciones innecesarias.
        </p>
      </>
    ),
    consult: (
      <>
        <ul>
          <li>Sangre o moco en las heces del bebé.</li>
          <li>Reflujo o cólicos intensos que no mejoran con las medidas habituales.</li>
          <li>Dermatitis atópica moderada o severa junto con síntomas digestivos.</li>
          <li>Poca ganancia de peso.</li>
          <li>Diarrea de más de 2 semanas.</li>
          <li>Antes de cambiar de fórmula o de retirar lácteos de la dieta de la madre.</li>
        </ul>
        <p><strong>Emergencia inmediata</strong> si tras tomar leche aparecen hinchazón de labios o cara, dificultad para respirar, vómitos repetidos con palidez o decaimiento.</p>
      </>
    ),
    closing: (
      <p>
        El diagnóstico correcto de la APLV evita dos problemas: dejar a un bebé con síntomas sin tratar, o mantenerlo
        con restricciones innecesarias. Si reconoces varios de estos síntomas en tu bebé, agenda una consulta de
        gastroenterología y nutrición pediátrica en cualquiera de mis sedes en Aragua.
      </p>
    ),
    faq: [
      { question: "¿Alergia a la leche e intolerancia a la lactosa son lo mismo?", answer: "No. La alergia es una reacción inmunológica a la proteína; la intolerancia es dificultad para digerir el azúcar de la leche. Las fórmulas sin lactosa no sirven para la alergia." },
      { question: "¿Si tiene APLV será alérgico a otros alimentos?", answer: "Un porcentaje pequeño puede reaccionar también a otras proteínas (huevo, soya), pero la mayoría solo a la leche. No se retiran otros alimentos de forma preventiva." },
      { question: "¿Puede seguir tomando pecho?", answer: "Sí, y es lo recomendado. Se ajusta la dieta de la madre." },
      { question: "¿La APLV causa estreñimiento?", answer: "Puede ser una de sus manifestaciones, sobre todo cuando el estreñimiento no responde al tratamiento habitual." },
    ],
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function isBlogPostPublished(post: BlogPost, now = new Date()) {
  const publicationDate = new Date(`${post.datePublished}T00:00:00-04:00`)
  return publicationDate.getTime() <= now.getTime()
}

export function getRelatedPosts(slug: string) {
  const currentIndex = BLOG_POSTS.findIndex((post) => post.slug === slug)
  return [BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length], BLOG_POSTS[(currentIndex + 2) % BLOG_POSTS.length]]
}

export function getPostWhatsAppUrl(topic: string) {
  const message = `Hola Dra. Katherine, leí el artículo sobre ${topic} y quiero agendar una cita.`
  return `https://wa.me/584243049579?text=${encodeURIComponent(message)}`
}
