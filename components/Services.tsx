"use client"

import { services } from "@/data/services"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useI18n } from "@/lib/i18n/i18n"
import { servicesTranslations } from "@/lib/i18n/services-translations"
import { SupportedLocale } from "@/lib/i18n/dictionaries"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {

  const params = useParams()
  const locale = params?.locale as string
  const { t } = useI18n()
  const translations = servicesTranslations[locale as SupportedLocale] || servicesTranslations.en

  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (

    <section ref={sectionRef} className="w-full py-32 bg-[#0a0a0a] text-white mt-32 md:mt-40 builder-">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">

          <p className="text-[#CD9A31] text-sm tracking-widest mb-3 builder-">
            {t("common", "services").toUpperCase()}
          </p>

          <h2 className="text-4xl leading-tight mb-4 builder-">
            {t("common", "services")}
            <span className="text-[#CD9A31]"> {t("common", "solutions")}</span>
          </h2>

          <p className="text-gray-400 builder-">
            {t("common", "explore")} {t("common", "services_description")}
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => {
            const translatedService = translations[service.slug as keyof typeof translations]
            const title = translatedService?.title || service.title
            const desc = translatedService?.desc || service.desc

            return (

              <div
                key={service.slug}
                ref={(el) => { if (el) cardsRef.current[i] = el }}
                className="h-full"
                style={{ opacity: 0 }}
              >

                <div className="
        group
        bg-black
        border border-[#CD9A31]/20
        rounded-2xl
        overflow-hidden
        hover:border-[#CD9A31]
        transition
        flex flex-col
        h-full
      ">

                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="flex flex-col h-full"
                  >

                    {/* IMAGE */}
                    <div className="relative h-[220px] overflow-hidden flex-shrink-0">

                      <Image
                        src={service.image}
                        alt={title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-1">

                      <h3 className="text-lg mb-2 min-h-[56px] builder-">
                        {title}
                      </h3>

                      <p className="text-sm text-gray-400 mb-6 flex-1 builder-">
                        {desc}
                      </p>

                      <div className="
              w-full
              py-2.5
              text-white
              border border-[#CD9A31]
              rounded-lg
              text-sm
              text-center
              hover:border-[#E6B84D]
              transition
              mt-auto
              cursor-pointer
              builder-
            "
                        style={{
                          background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)'
                        }}
                      >
                        {t("common", "see_more")}
                      </div>

                    </div>

                  </Link>

                </div>

              </div>

            )
          })}

        </div>

      </div>

    </section>

  )
}