export function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/584243049579?text=Hola%20Dra.%20Katherine%20Ainslie%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20m%C3%A9dica%20pedi%C3%A1trica%20para%20mi%20hijo%2Fa.%20%C2%BFPodr%C3%ADa%20indicarme%20horarios%20disponibles%3F"

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pediátrica por WhatsApp"
      className="wa-pulse fixed bottom-8 right-6 z-[999998] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M19.05 4.91A10 10 0 0 0 4.32 18.5L3 22l3.62-1.27a10 10 0 0 0 4.78 1.22h.01a10 10 0 0 0 7.64-17.04ZM12.41 20.3h-.01a8.27 8.27 0 0 1-4.21-1.16l-.3-.18-2.15.75.74-2.1-.2-.32a8.3 8.3 0 1 1 6.13 3.01Zm4.66-6.2c-.26-.13-1.5-.74-1.74-.83-.23-.08-.4-.13-.57.13s-.65.83-.8 1c-.15.18-.3.2-.55.07-.26-.13-1.07-.39-2.04-1.25-.76-.67-1.27-1.5-1.42-1.76-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.57-1.39-.79-1.9-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.07-.69.33-.23.26-.9.88-.9 2.16 0 1.27.92 2.5 1.05 2.67.13.18 1.83 2.79 4.43 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.49-.29Z" />
      </svg>
      <span className="sr-only">Agendar consulta pediátrica por WhatsApp</span>
    </a>
  )
}
