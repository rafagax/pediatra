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
  title: "Odontóloga en Maracay | Clínica Dental en Las Delicias",
  description:
    "Clínica dental en Maracay, Av. Las Delicias. Odontóloga especialista en limpieza dental, ortodoncia, implantes y urgencias odontológicas con atención personalizada y cita rápida por WhatsApp.",
  keywords: [
    "odontologa en maracay",
    "clinica dental maracay",
    "dentista en maracay las delicias",
    "limpieza dental maracay",
    "ortodoncia en maracay",
    "implantes dentales en maracay",
    "urgencia odontologica maracay",
    "consulta odontologica maracay",
  ],
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
