"use client"

import { services } from "@/data/services"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useI18n } from "@/lib/i18n/i18n"
import { servicesTranslations } from "@/lib/i18n/services-translations"
import { SupportedLocale } from "@/lib/i18n/dictionaries"

export default function Services() {

  const params = useParams()
  const locale = params?.locale as string
  const { t } = useI18n()
  const translations = servicesTranslations[locale as SupportedLocale] || servicesTranslations.en

  return (

    <section className="w-full py-32 bg-[#0a0a0a] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">

          <p className="text-[#CD9A31] text-sm tracking-widest mb-3">
            {t("common", "services").toUpperCase()}
          </p>

          <h2 className="text-4xl leading-tight mb-4">
            {t("common", "services")}
            <span className="text-[#CD9A31]"> {t("common", "solutions")}</span>
          </h2>

          <p className="text-gray-400">
            {t("common", "explore")} {t("common", "services_description")}
          </p>

        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {services.map((service, i) => {
    const translatedService = translations[service.slug as keyof typeof translations]
    const title = translatedService?.title || service.title
    const desc = translatedService?.desc || service.desc

    return (

    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="h-full"
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

            <h3 className="text-lg mb-2 min-h-[56px]">
              {title}
            </h3>

            <p className="text-sm text-gray-400 mb-6 flex-1">
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

    </motion.div>

    )
  })}

</div>

      </div>

    </section>

  )
}