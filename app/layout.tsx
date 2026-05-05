import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dra. Katherine Ainslie | Pediatra y Gastroenterólogo en Maracay",
  description:
    "Especialista en pediatría y gastroenterología infantil en Maracay. Diagnóstico y tratamiento de reflujo, estreñimiento, dolor abdominal y atención integral de niños y adolescentes. Agenda tu cita rápida por WhatsApp.",
  keywords: [
    "pediatra en maracay",
    "gastroenterologo pediatra en maracay",
    "gastropediatra maracay",
    "consulta pediatrica maracay",
    "pediatra infantil aragua",
    "dolor abdominal niños maracay",
    "reflujo en bebes maracay",
    "estreñimiento infantil maracay",
    "dra katherine ainslie",
  ],
  openGraph: {
    title: "Dra. Katherine Ainslie | Pediatra y Gastroenterólogo en Maracay",
    description:
      "Especialista en pediatría y gastroenterología infantil en Maracay. Diagnóstico y tratamiento de reflujo, estreñimiento y dolor abdominal.",
    url: "https://drakatherineainslie.com", // Adjust if domain is known, otherwise relative works for some scrapers but full URL is better.
    siteName: "Dra. Katherine Ainslie",
    images: [
      {
        url: "/images/portada-katherine.png",
        width: 1200,
        height: 630,
        alt: "Dra. Katherine Ainslie - Pediatra Gastroenterólogo",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Katherine Ainslie | Pediatra y Gastroenterólogo",
    description: "Atención integral para la salud digestiva de tus hijos en Maracay.",
    images: ["/images/portada-katherine.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
