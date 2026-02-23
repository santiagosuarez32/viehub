import { services } from "@/data/services"
import { notFound } from "next/navigation"
import { servicesTranslations } from "@/lib/i18n/services-translations"
import { SupportedLocale, getDictionarySync } from "@/lib/i18n/dictionaries"
import ServicePageClient from "@/components/ServicePageClient"

const LOCALES = ["es", "en", "fr", "it", "de"] as const

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  )
}

type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function ServicePage({ params }: Props) {
  const resolved = await params
  const slug = resolved?.slug
  const locale = resolved?.locale ?? "en"
  if (!slug) return notFound()

  const dict = getDictionarySync((LOCALES as readonly string[]).includes(locale) ? (locale as SupportedLocale) : "en")

  const service = services.find(s => s.slug === slug)

  if (!service) return notFound()

  // Get translated content
  const translations = servicesTranslations[locale as SupportedLocale] || servicesTranslations.en
  const translatedService = translations[slug as keyof typeof translations] || null
  
  const title = translatedService?.title || service.title
  const longDesc = translatedService?.longDesc || service.longDesc

  const otherServices = services
    .filter(s => s.slug !== slug)
    .slice(0, 3)

  return (
    <ServicePageClient
      title={title}
      longDesc={longDesc}
      image={service.image}
      serviceTitle={service.title}
      slug={slug}
      locale={locale}
      steps={service.steps}
      otherServices={otherServices}
      dict={dict}
    />
  )
}