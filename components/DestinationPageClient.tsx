"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import DestinationCarousel from "@/components/DestinationCarousel"
import { sanitizeHtml } from "@/lib/sanitize-html"
import { getDictionarySync } from "@/lib/i18n/dictionaries"

type DestinationPageClientProps = {
  title: string
  longDesc: string
  gallery: string[]
  destinationImage: string
  slug: string
  locale: string
  steps?: any[]
  otherDestinations: Array<{
    slug: string
    title: string
    image: string
  }>
  dict: ReturnType<typeof getDictionarySync>
}

export default function DestinationPageClient({
  title,
  longDesc,
  gallery,
  destinationImage,
  slug,
  locale,
  otherDestinations,
  dict,
}: DestinationPageClientProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [slug, locale])

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }, 0)
  }, [])

  return (
    <main className="w-full bg-black text-white">
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* CAROUSEL */}
            <div className="w-full mb-10">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden isolate">
                <DestinationCarousel
                  images={gallery && gallery.length > 0 ? gallery : [destinationImage]}
                />
              </div>
            </div>

            <h1 className="text-4xl mb-6">{title}</h1>

            {/* 🔥 MOBILE BOOKING BOX */}
            <div className="lg:hidden mb-10">
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-4">
                <h4 className="text-lg">{dict.common.book_now}</h4>

                <button className="w-full py-3 bg-[#CD9A31] text-black rounded-lg hover:scale-105 transition">
                  {dict.common.reserve_now}
                </button>

                <a
                  href="tel:+43 660 8537912"
                  className="block w-full text-center py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  {dict.common.call_number}
                </a>

                <a
                  href="tel:+43 660 8537912"
                  className="block w-full text-center py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition"
                >
                  {dict.common.whatsapp_booking}
                </a>
              </div>
            </div>

            {/* TEXT */}
            <div
              className="text-gray-400 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(longDesc),
              }}
            />
          </div>

          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-5">
              <h4 className="text-lg">{dict.common.book_now}</h4>

              <button className="w-full py-3 bg-[#CD9A31] text-black rounded-lg hover:scale-105 transition">
                {dict.common.reserve_now}
              </button>

              <a
                href="tel:+43 660 8537912"
                className="block w-full text-center py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                {dict.common.call_number}
              </a>

              <a
                href="tel:+43 660 8537912"
                className="block w-full text-center py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                {dict.common.whatsapp_booking}
              </a>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-4">
              <h4 className="mb-3">{dict.common.other_destinations}</h4>

              {otherDestinations.map((d) => (
                <Link key={d.slug} href={`/${locale}/destinations/${d.slug}`}>
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
