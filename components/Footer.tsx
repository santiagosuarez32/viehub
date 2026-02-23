"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/i18n"

export default function Footer({ locale }: { locale: string }) {
  const { t } = useI18n()

  return (
    <footer className="w-full bg-black border-t border-[#CD9A31]/20 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm text-gray-400">

        <div>
          <h3 className="text-white mb-4 text-lg">
            Vie<span className="text-[#CD9A31]">Hub</span>
          </h3>
          <p>
            {t("footer","tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href={`/${locale}`}>{t("common","home")}</Link>
          <Link href={`/${locale}/services`}>{t("common","services")}</Link>
          <Link href={`/${locale}/fleet`}>{t("common","fleet")}</Link>
          <Link href={`/${locale}/contact`}>{t("common","contact")}</Link>
        </div>

        <div>
          <p>📞 +43 660 2202238</p>
          <p>📧 info@viehub.com</p>
          <p>📍 {t("footer","vienna")}</p>
        </div>

      </div>

      <div className="border-t border-[#CD9A31]/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VieHub. {t("footer","rights")}
      </div>

    </footer>
  )
}