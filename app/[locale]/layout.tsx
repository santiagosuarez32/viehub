import Footer from "@/components/Footer"
import "../globals.css"
import Navbar from "@/components/Navbar"
import { I18nProvider } from "@/lib/i18n/i18n"
import LenisProvider from "@/components/LenisProvider"
import FloatingContactButton from "@/components/FloatingContactButton"
import { Exo } from "next/font/google"
import type { Metadata } from "next"

const exo = Exo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-exo",
})

// SEO metadata por locale
const SEO_METADATA: Record<string, { title: string; description: string; keywords: string }> = {
  de: {
    title: "VieHub - Flughafentransfer Wien | Österreich",
    description:
      "Professionelle Flughafentransfer Dienste in Wien, Österreich. Zuverlässige Transfers vom Flughafen Wien (VIE) zu Ihrem Ziel. ✓ Günstige Preise ✓ Reservierung 24/7",
    keywords:
      "Flughafentransfer Wien, Transfer Airport Vienna, Flughafen Wien Transfer, Shuttle Wien, Taxi Wien, Private Transfers Österreich, VIE Airport Transfer",
  },
  en: {
    title: "VieHub - Airport Transfer Vienna | Austria",
    description:
      "Professional airport transfer services in Vienna, Austria. Reliable transportation from Vienna Airport (VIE) to your destination. ✓ Competitive rates ✓ 24/7 Booking",
    keywords:
      "Vienna airport transfer, Austria airport transportation, VIE airport transfer, shuttle Vienna, airport taxi Vienna, private transfers Austria",
  },
  es: {
    title: "VieHub - Traslados Aeropuerto Viena | Austria",
    description:
      "Servicios profesionales de traslado aeropuerto en Viena, Austria. Transporte confiable desde el Aeropuerto de Viena (VIE) a tu destino. ✓ Precios competitivos ✓ Reserva 24/7",
    keywords:
      "Traslado aeropuerto Viena, Transferencia aeropuerto Austria, VIE airport transfer, Shuttle Viena, Taxi aeropuerto Viena, traslados privados Austria",
  },
  fr: {
    title: "VieHub - Transfert Aéroport Vienne | Autriche",
    description:
      "Services de transfert aéroport professionnel à Vienne, Autriche. Transport fiable de l'aéroport de Vienne (VIE) vers votre destination. ✓ Tarifs compétitifs ✓ Réservation 24/7",
    keywords:
      "Transfert aéroport Vienne, Transport aéroport Autriche, VIE airport transfer, Navette Vienne, Taxi aéroport Vienne, transferts privés Autriche",
  },
  it: {
    title: "VieHub - Trasferimento Aeroporto Vienna | Austria",
    description:
      "Servizi professionali di trasferimento aeroporto a Vienna, Austria. Trasporto affidabile dall'aeroporto di Vienna (VIE) alla tua destinazione. ✓ Tariffe competitive ✓ Prenotazione 24/7",
    keywords:
      "Trasferimento aeroporto Vienna, Trasporto aeroporto Austria, VIE airport transfer, Shuttle Vienna, Taxi aeroporto Vienna, trasferimenti privati Austria",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const seo = SEO_METADATA[locale] || SEO_METADATA.en
  const baseUrl = "https://viehub.at"
  const currentUrl = `${baseUrl}/${locale}`

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: currentUrl,
      siteName: "VieHub",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "VieHub Airport Transfer Services Vienna",
          type: "image/png",
        },
      ],
      locale: locale,
      alternateLocale: ["de", "en", "es", "fr", "it"].filter((l) => l !== locale),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${baseUrl}/og-image.png`],
      creator: "@viehub_at",
      site: "@viehub_at",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        fr: `${baseUrl}/fr`,
        it: `${baseUrl}/it`,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <head>
        {/* JSON-LD Schema Markup - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://viehub.at/#organization",
              name: "VieHub",
              alternateName: "VieHub Airport Transfer Services",
              description:
                "Professional airport transfer and transportation services in Vienna, Austria. Reliable shuttle service from Vienna Airport (VIE) to all destinations.",
              url: "https://viehub.at",
              logo: "https://viehub.at/logo.png",
              image: "https://viehub.at/og-image.png",
              telephone: "+43 660 8537912",
              email: "info@viehub.at",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vienna",
                addressLocality: "Vienna",
                addressRegion: "Vienna",
                addressCountry: "AT",
              },
              sameAs: [
                "https://www.facebook.com/viehub",
                "https://www.instagram.com/viehub",
              ],
              areaServed: {
                "@type": "Place",
                name: "Vienna, Austria",
              },
              serviceType: "Airport Transfer",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />

        {/* JSON-LD Schema - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://viehub.at/#organization",
              name: "VieHub",
              url: "https://viehub.at",
              logo: "https://viehub.at/logo.png",
              description: "Professional airport transfer services in Vienna, Austria",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+43 660 8537912",
                email: "info@viehub.at",
                availableLanguage: ["de", "en", "es", "fr", "it"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vienna",
                addressCountry: "AT",
              },
              areaServed: "AT",
            }),
          }}
        />

        {/* Preconnect para mejora de performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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