import Footer from "@/components/Footer"
import "../globals.css"
import Navbar from "@/components/Navbar"
import { I18nProvider } from "@/lib/i18n/i18n"
import LenisProvider from "@/components/LenisProvider"
import FloatingContactButton from "@/components/FloatingContactButton"
import { Exo } from "next/font/google"

const exo = Exo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-exo",
})

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  return (
    <html lang={locale}>
      <body className={`antialiased ${exo.className}`}>
        <I18nProvider locale={locale as any}>
          <LenisProvider>
            <Navbar locale={locale} />
            {children}
            <Footer locale={locale} />
            <FloatingContactButton />
          </LenisProvider>
        </I18nProvider>
      </body>
    </html>
  )
}