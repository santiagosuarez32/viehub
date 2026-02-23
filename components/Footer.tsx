"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/i18n"
import { destinations } from "@/data/destinations"
import { services } from "@/data/services"
import { destinationsTranslations } from "@/lib/i18n/destinations-translations"
import { servicesTranslations } from "@/lib/i18n/services-translations"
import type { SupportedLocale } from "@/lib/i18n/dictionaries"

export default function Footer({ locale }: { locale: string }) {
  const { t } = useI18n()
  const supportedLocale = locale as SupportedLocale

  // Obtener traducciones de destinos y servicios
  const destTranslations = destinationsTranslations[supportedLocale] || destinationsTranslations.en
  const servTranslations = servicesTranslations[supportedLocale] || servicesTranslations.en

  return (
    <footer className="w-full bg-black border-t border-[#CD9A31]/20 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-gray-400">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/logo.png" 
              alt="VieHub Logo" 
              className="h-10 w-10 object-contain"
            />
            <h3 className="text-white text-lg">
              Vie<span className="text-[#CD9A31]">Hub</span>
            </h3>
          </div>
          <p className="mb-4">
            {t("footer","tagline")}
          </p>
          <div className="flex flex-col gap-2">
            <p>📞 +43 660 8537912</p>
            <p>📧 info@viehub.com</p>
            <p>📍 {t("footer","vienna")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">{t("common","services")}</h4>
          {services.slice(0, 6).map((service) => (
            <Link 
              key={service.slug} 
              href={`/${locale}/services/${service.slug}`}
              className="hover:text-[#CD9A31] transition-colors"
            >
              {(servTranslations as any)[service.slug]?.title || service.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">{t("common","top_locations")}</h4>
          {destinations.map((destination) => (
            <Link 
              key={destination.slug} 
              href={`/${locale}/destinations/${destination.slug}`}
              className="hover:text-[#CD9A31] transition-colors"
            >
              {(destTranslations as any)[destination.slug]?.title || destination.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">{t("common","explore")}</h4>
          <Link href={`/${locale}`} className="hover:text-[#CD9A31] transition-colors">{t("common","home")}</Link>
          <Link href={`/${locale}/services`} className="hover:text-[#CD9A31] transition-colors">{t("common","services")}</Link>
          <Link href={`/${locale}/fleet`} className="hover:text-[#CD9A31] transition-colors">{t("common","fleet")}</Link>
          <Link href={`/${locale}/contact`} className="hover:text-[#CD9A31] transition-colors">{t("common","contact")}</Link>
        </div>

      </div>

      <div className="border-t border-[#CD9A31]/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VieHub. {t("footer","rights")}
      </div>

    </footer>
  )
}