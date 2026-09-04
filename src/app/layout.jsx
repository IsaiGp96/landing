import "@/styles/main.css"

import { Inter, JetBrains_Mono } from "next/font/google"

import { LocaleProvider } from "@/lib/locale"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html
      className={`h-full scroll-smooth bg-zinc-950 text-white antialiased ${inter.variable} ${jetbrainsMono.variable}`}
      lang="es">
      <body className="h-full">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
