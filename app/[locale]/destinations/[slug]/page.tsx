import { destinations } from "@/data/destinations"
import { notFound } from "next/navigation"
import { destinationsTranslations } from "@/lib/i18n/destinations-translations"
import { SupportedLocale, getDictionarySync } from "@/lib/i18n/dictionaries"
import DestinationPageClient from "@/components/DestinationPageClient"

const LOCALES = ["es", "en", "fr", "it", "de"] as const

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    destinations.map((d) => ({ locale, slug: d.slug }))
  )
}

type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function DestinationPage({ params }: Props) {
  const resolved = await params
  const slug = resolved?.slug
  const locale = resolved?.locale ?? "en"
  if (!slug) return notFound()

  const dict = getDictionarySync((LOCALES as readonly string[]).includes(locale) ? (locale as SupportedLocale) : "en")

  const destination = destinations.find(d => d.slug === slug)

  if (!destination) return notFound()

  // Get translated content
  const translations = destinationsTranslations[locale as SupportedLocale] || destinationsTranslations.en
  const translatedDest = translations[slug as keyof typeof translations] || null
  
  const title = translatedDest?.title || destination.title
  const longDesc = translatedDest?.longDesc || destination.longDesc
  const steps =
    (translatedDest && "steps" in translatedDest ? translatedDest.steps : undefined) ??
    destination.steps

  const otherDestinations = destinations
    .filter(d => d.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(d => {
      const translatedOther = translations[d.slug as keyof typeof translations] || null
      return {
        slug: d.slug,
        title: translatedOther?.title || d.title,
        image: d.image
      }
    })

  return (
    <DestinationPageClient
      title={title}
      longDesc={longDesc}
      gallery={destination.gallery || []}
      destinationImage={destination.image}
      slug={slug}
      locale={locale}
      otherDestinations={otherDestinations}
      dict={dict}
    />
  )
}