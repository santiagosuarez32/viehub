import { destinations } from "@/data/destinations"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import DestinationCarousel from "@/components/DestinationCarousel"
import { destinationsTranslations } from "@/lib/i18n/destinations-translations"
import { SupportedLocale, getDictionarySync } from "@/lib/i18n/dictionaries"
import { sanitizeHtml } from "@/lib/sanitize-html"

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

  return (
    <main className="w-full bg-black text-white">

      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            {/* CAROUSEL */}
            <div className="w-full mb-10">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden isolate">
                <DestinationCarousel images={destination.gallery || [destination.image]} />
              </div>
            </div>

            <h1 className="text-4xl mb-6">
              {title}
            </h1>

            {/* 🔥 MOBILE BOOKING BOX */}
            <div className="lg:hidden mb-10">
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-4">

                <h4 className="text-lg">
                  {dict.common.book_now}
                </h4>

                <button className="w-full py-3 bg-[#CD9A31] text-black rounded-lg hover:scale-105 transition">
                  {dict.common.reserve_now}
                </button>

                <a
                  href="https://wa.me/436602202238"
                  target="_blank"
                  className="block w-full text-center py-3 border border-[#25D366] text-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-black transition"
                >
                  {dict.common.whatsapp_booking}
                </a>

                <a
                  href="tel:+436602202238"
                  className="block w-full text-center py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition"
                >
                  {dict.common.call_number}
                </a>

              </div>
            </div>

            {/* TEXT */}
            <div
              className="text-gray-400 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(longDesc)
              }}
            />

          </div>

          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:block space-y-6">

            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-5">

              <h4 className="text-lg">
                {dict.common.book_now}
              </h4>

              <button className="w-full py-3 bg-[#CD9A31] text-black rounded-lg hover:scale-105 transition">
                {dict.common.reserve_now}
              </button>

              <a
                href="https://wa.me/436602202238"
                target="_blank"
                className="block w-full text-center py-3 border border-[#25D366] text-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-black transition"
              >
                {dict.common.whatsapp_booking}
              </a>

              <a
                href="tel:+436602202238"
                className="block w-full text-center py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                {dict.common.call_number}
              </a>

            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-4">

              <h4 className="mb-3">
                {dict.common.other_destinations}
              </h4>

              {otherDestinations.map((d) => (

                <Link
                  key={d.slug}
                  href={`/${locale}/destinations/${d.slug}`}
                >
                  <div className="flex gap-4 mb-4 items-center cursor-pointer group">

                    <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={d.image}
                        alt={d.title}
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-110 transition"
                      />
                    </div>

                    <span className="text-sm text-gray-300 group-hover:text-[#CD9A31] transition">
                      {d.title}
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}