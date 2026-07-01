// Datos de contacto de WhatsApp centralizados.
// Editar aquí actualiza todos los botones y enlaces del sitio.

/** Número de WhatsApp en formato internacional, sin "+" (usado en los enlaces wa.me). */
export const WHATSAPP_NUMBER = "584243049579"

/** Número formateado para mostrar al usuario. */
export const WHATSAPP_DISPLAY = "+58 424 304 9579"

/** Mensaje prellenado por defecto para agendar una cita. */
const DEFAULT_MESSAGE =
  "Hola Dra. Katherine Ainslie, quiero agendar una cita. Estoy interesado(a) en: "

/**
 * Genera un enlace a WhatsApp con un mensaje opcional prellenado.
 * @param message Texto del mensaje. Si se pasa cadena vacía, el enlace no lleva mensaje.
 */
export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Enlace de WhatsApp con el mensaje de agendar cita (el más usado en el sitio). */
export const WHATSAPP_URL = getWhatsAppUrl()
