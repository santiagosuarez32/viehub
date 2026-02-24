"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Steps from "@/components/Steps"
import { sanitizeHtml } from "@/lib/sanitize-html"
import { getDictionarySync, SupportedLocale } from "@/lib/i18n/dictionaries"

type ServicePageClientProps = {
  title: string
  longDesc: string
  image: string
  serviceTitle: string
  slug: string
  locale: string
  steps: any[]
  otherServices: Array<{
    slug: string
    title: string
    image: string
  }>
  dict: ReturnType<typeof getDictionarySync>
}

export default function ServicePageClient({
  title,
  longDesc,
  image,
  serviceTitle,
  slug,
  locale,
  steps,
  otherServices,
  dict,
}: ServicePageClientProps) {
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10">
              <Image
                src={image}
                alt={serviceTitle}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl mb-6">{title}</h1>

            <div
              className="text-gray-400 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(longDesc),
              }}
            />
          </div>

          <div className="space-y-8">
            {/* BOOK BOX */}
            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#CD9A31]/30 space-y-5">
              <h4 className="text-lg font-medium">{dict.common.book_now}</h4>

              <Link
                href={`/${locale}#booking-form`}
                className="w-full py-3 bg-[#CD9A31] text-black rounded-lg hover:scale-105 transition text-center inline-flex items-center justify-center"
              >
                {dict.common.reserve_now}
              </Link>

              <a
                href="https://wa.me/43 660 8537912"
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

      <Steps steps={steps} />
    </main>
  )
}
