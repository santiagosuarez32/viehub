import Footer from "@/components/Footer"
import "../globals.css"
import Navbar from "@/components/Navbar"

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
      <body>
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  )
}