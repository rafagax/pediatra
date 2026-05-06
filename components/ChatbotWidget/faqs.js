// faqs.js
// Aquí pegas todas las preguntas frecuentes del negocio. 
// Sigue el formato Q: [Pregunta] A: [Respuesta] para que la IA lo entienda mejor.

export const FAQS_TEMPLATE = `
=== INFORMACIÓN GENERAL Y CONTACTO ===
Q: ¿Quién es la Dra. Katherine Ainslie?
A: Es médico pediatra y gastroenterólogo infantil, especialista en salud digestiva para niños y adolescentes. Brinda atención cálida, humana y enfocada en la prevención.

Q: ¿Cuáles son sus horarios de atención?
A: Las consultas regulares son de lunes a viernes y los horarios varían según la sede. Además, la doctora cuenta con disponibilidad para emergencias 24/7. Por favor, consulta por WhatsApp para confirmarte la disponibilidad.

Q: ¿Dónde están ubicados?
A: Atendemos en cuatro sedes: Maracay (Centro Médico Santa Marta), Turmero (Instituto Policlínico Turmero), Cagua (Policlínica Centro) y Villa de Cura (Laboratorio Bearne). Al agendar, te enviamos la ubicación exacta.

Q: ¿Cuál es el número de teléfono o contacto?
A: Puedes comunicarte directamente al +58 424-304-9579 vía WhatsApp para agendar citas, consultar precios o reportar emergencias.

=== SOBRE LA CONSULTA Y LOGÍSTICA ===
Q: ¿Trabajan con seguros médicos?
A: Para información actualizada sobre aseguradoras aliadas y claves de emergencia, por favor indícanos por WhatsApp qué seguro tienes y te confirmamos si trabajamos con él.

Q: ¿Cuánto dura la consulta?
A: La primera consulta suele durar entre 40 y 60 minutos, ya que la Dra. Katherine realiza una evaluación exhaustiva, revisa antecedentes, evalúa al paciente y explica detalladamente el plan de tratamiento.

Q: ¿Ofrecen consultas online o telemedicina?
A: Ofrecemos orientación inicial y seguimiento online para ciertos casos, pero para un diagnóstico preciso, especialmente en gastroenterología, la evaluación presencial es fundamental. Escríbenos para evaluar tu caso.

Q: ¿Qué debo llevar a la primera consulta?
A: Trae el carnet de vacunas, peso y talla previos (si los tienes), cualquier informe médico anterior, exámenes de laboratorio o imágenes recientes, y una lista con los síntomas o dudas que tengas.

Q: ¿Cuáles son los métodos de pago aceptados?
A: Aceptamos diversas modalidades de pago (pago móvil, transferencias, divisas en efectivo, Zelle, etc.). Al momento de agendar te confirmamos los métodos exactos y los costos según la sede.

Q: ¿Atienden a adultos?
A: La consulta de la Dra. Katherine es exclusivamente pediátrica (lactantes, niños y adolescentes). Sin embargo, en nuestras sedes contamos con especialistas de apoyo que sí atienden adultos.

=== GASTROENTEROLOGÍA INFANTIL (SÍNTOMAS Y ENFERMEDADES) ===
Q: ¿Cuándo debo llevar a mi hijo al gastroenterólogo infantil?
A: Debes acudir si presenta: dolor abdominal crónico, diarrea de más de una semana, vómitos frecuentes, estreñimiento severo, sangre en las heces, dificultad para tragar, o si notas que no gana peso o talla adecuadamente.

Q: ¿Qué enfermedades trata la Gastroenterología Infantil?
A: Tratamos reflujo gastroesofágico, estreñimiento, dolor abdominal, alergias alimentarias, enfermedad celíaca, infección por Helicobacter Pylori, parasitosis severas, colitis, entre otras afecciones digestivas.

Q: Mi bebé regurgita (bota leche) mucho, ¿es normal o es reflujo?
A: La regurgitación en bebés puede ser normal (reflujo fisiológico), pero si viene acompañada de llanto excesivo, arqueo de la espalda, rechazo al alimento, pérdida de peso o tos crónica, requiere evaluación para descartar Enfermedad por Reflujo Gastroesofágico.

Q: ¿Cuántos días puede estar un niño sin hacer pupú (estreñimiento)?
A: Varía según la edad y alimentación (los bebés lactados de forma exclusiva pueden pasar varios días). Sin embargo, si las heces son duras (como bolitas), le duele al evacuar, hay sangre, o pasan más de 3 días en niños mayores con molestias, debe ser evaluado.

Q: ¿Qué hago si mi hijo tiene dolor de barriga recurrente?
A: El dolor abdominal recurrente requiere evaluación médica. No lo automediques con analgésicos o desparasitantes sin diagnóstico, ya que puede ocultar el problema real (desde estreñimiento hasta infecciones como H. Pylori). Agenda una cita.

Q: ¿Por qué las heces de mi bebé son verdes o de colores raros?
A: El color verde o amarillento es normal en bebés alimentados con leche materna o fórmula. Sin embargo, si las heces son blancas, rojas (con sangre) o negras, debes contactarnos de inmediato, ya que son signos de alarma.

=== ALERGIAS Y NUTRICIÓN ===
Q: ¿Cómo sé si mi hijo es alérgico a la proteína de la leche de vaca (APLV)?
A: Los síntomas de APLV pueden incluir cólicos severos, sangre o moco en las heces, erupciones en la piel, vómitos y rechazo al alimento. Requiere un diagnóstico clínico preciso por un gastroenterólogo infantil.

Q: ¿Tratan alergias al gluten (celiaquía)?
A: Sí, nos especializamos en la detección temprana y el abordaje de alergias alimentarias y enfermedad celíaca, diseñando un plan nutricional seguro y guiando a la familia en el proceso.

Q: ¿Ayudan con la alimentación complementaria o bebés que no quieren comer?
A: Sí, parte de la consulta integral incluye evaluación nutricional. Te guiamos en el inicio de la alimentación complementaria (ablactación) y manejamos trastornos de la conducta alimentaria en la infancia.

=== PROCEDIMIENTOS MÉDICOS ===
Q: ¿Realizan endoscopias y colonoscopias a niños?
A: Sí, contamos con equipos pediátricos especializados para realizar procedimientos de Endoscopia Digestiva Superior y Colonoscopia en un ambiente seguro y adaptado para niños.

Q: ¿Las endoscopias en niños se hacen con anestesia?
A: Sí. Todos los procedimientos endoscópicos pediátricos se realizan bajo sedación o anestesia general supervisada por un anestesiólogo pediátrico para garantizar que el niño no sienta dolor ni miedo.

Q: ¿Es dolorosa la endoscopia?
A: No, el procedimiento no es doloroso gracias a la sedación/anestesia. El paciente se despierta tranquilo una vez finalizado el estudio. Puede haber una leve molestia en la garganta temporal.

Q: ¿Para qué sirve diagnosticar y tratar el Helicobacter Pylori (H. pylori)?
A: El H. pylori es una bacteria que causa inflamación del estómago (gastritis) y úlceras. Erradicarlo alivia el dolor abdominal crónico, previene sangrados y evita complicaciones graves a largo plazo.

=== PEDIATRÍA GENERAL ===
Q: ¿Qué servicios ofrecen en la consulta de Pediatría Integral?
A: Ofrecemos control de niño sano, evaluación nutricional (peso y talla), seguimiento del neurodesarrollo, revisión de vacunas y tratamiento de enfermedades comunes (gripe, fiebre, infecciones).

Q: Mi hijo tiene fiebre, ¿qué hago?
A: Mantén al niño hidratado y con ropa ligera. Puedes administrar el antipirético que la doctora te haya indicado previamente para su peso. Si la fiebre es mayor a 39°C, no cede, el niño está muy decaído o es un bebé menor de 3 meses, contáctanos de inmediato.

Q: ¿Colocan vacunas en el consultorio?
A: En la consulta pediátrica realizamos la esquematización de vacunas, revisamos el carnet y te indicamos cuáles le corresponden a tu hijo según su edad. Consúltanos por WhatsApp sobre la disponibilidad de dosis específicas en nuestras sedes.

=== URGENCIAS Y EMERGENCIAS ===
Q: ¿Qué debo hacer si mi hijo se tragó una moneda, pila o juguete (cuerpo extraño)?
A: ¡Es una emergencia médica! No intentes hacerlo vomitar ni le des alimentos o líquidos. Llévalo de inmediato a la emergencia y contáctanos al +58 424-304-9579. Las pilas de botón y objetos punzantes son extremadamente peligrosos.

Q: ¿Qué hago si mi hijo presenta sangrado en las heces o vomita sangre?
A: Las hemorragias digestivas requieren atención médica urgente. Llámanos o escríbenos de inmediato, contamos con atención para emergencias 24/7.

Q: Mi hijo tiene mucha diarrea y vómitos, ¿cuándo es una urgencia?
A: Es una urgencia si notas signos de deshidratación: llanto sin lágrimas, boca muy seca, pañales secos por más de 6 horas, ojos hundidos o si no tolera ningún líquido por boca. Contáctanos inmediatamente.

=== CIERRE Y AGENDAMIENTO ===
Q: ¡Perfecto! ¿Cómo agendo mi cita?
A: ¡Muy fácil! Escríbenos por WhatsApp al +58 424-304-9579, indícanos el nombre del paciente, su edad, y en cuál de nuestras sedes deseas la cita (Maracay, Turmero, Cagua o Villa de Cura). Te enviaremos las opciones de horario de inmediato.
`;