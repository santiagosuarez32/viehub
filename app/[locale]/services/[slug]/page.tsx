import { services } from "@/data/services"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import DOMPurify from "isomorphic-dompurify"
import Steps from "@/components/Steps"
import { servicesTranslations } from "@/lib/i18n/services-translations"
import { SupportedLocale, getDictionarySync } from "@/lib/i18n/dictionaries"

type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function ServicePage({ params }: Props) {

  const { slug, locale } = await params
  const dict = getDictionarySync(locale as SupportedLocale)

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
    <main className="w-full bg-black text-white">

      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2">

            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl mb-6">
              {title}
            </h1>

            <div
              className="text-gray-400 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(longDesc)
              }}
            />
          </div>

        <div className="space-y-8">

  {/* BOOK BOX */}
  <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-5">

    <h4 className="text-lg font-medium">
      {dict.common.book_now}
    </h4>

    <button className="w-full py-3 bg-[#CD9A31] text-black rounded-lg hover:scale-105 transition">
      {dict.common.reserve_now}
    </button>

    <a
      href="https://wa.me/436602202238"
      target="_blank"
      className="w-full block text-center py-3 border border-[#25D366] text-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-black transition"
    >
      {dict.common.whatsapp_booking}
    </a>

  </div>


  {/* OTHER SERVICES */}
  <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-6">

    <h4 className="text-lg font-medium mb-2">
      {dict.common.other_services}
    </h4>

    <div className="space-y-5">

      {otherServices.map((s) => (
        <Link
          key={s.slug}
          href={`/${locale}/services/${s.slug}`}
          className="block group"
        >
          <div className="flex gap-4 items-center p-3 rounded-xl hover:bg-[#111] transition">

            <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="80px"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <span className="text-sm text-gray-300 group-hover:text-white transition">
              {s.title}
            </span>

          </div>
        </Link>
      ))}

    </div>

  </div>

</div>

        </div>
      </section>

      <Steps steps={service.steps} />

    </main>
  )
}