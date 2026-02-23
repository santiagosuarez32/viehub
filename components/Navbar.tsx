"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { useI18n } from "@/lib/i18n/i18n"
import { FlagIcon } from "@/components/FlagIcon"

const locales = ["es", "en", "fr", "it", "de"] as const

export default function Navbar({ locale }: { locale: string }) {

  const router = useRouter()
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function changeLang(newLocale: string) {
    if (!pathname) return

    const parts = pathname.split("/").filter(Boolean)

    // Si no hay segmentos, ir directo a /{locale}
    if (parts.length === 0) {
      router.push(`/${newLocale}`)
      return
    }

    // Si el primer segmento es un locale soportado, reemplazarlo y limpiar posibles restos tipo '/xx'
    if ((locales as readonly string[]).includes(parts[0])) {
      parts[0] = newLocale

      // Si el segundo segmento parece otro locale (p.ej. 'de'), lo eliminamos
      if (parts.length > 1) {
        const second = parts[1]
        const secondLooksLikeLocale = /^[A-Za-z]{2}(-[A-Za-z]{2})?$/.test(second)
        if (secondLooksLikeLocale) {
          parts.splice(1, 1)
        }
      }

      router.push("/" + parts.join("/"))
      return
    }

    // Si el primer segmento parece un locale (ej: 'de'), descartarlo
    const first = parts[0]
    const looksLikeLocale = /^[A-Za-z]{2}(-[A-Za-z]{2})?$/.test(first)
    if (looksLikeLocale) {
      const rest = parts.slice(1)
      router.push(rest.length ? `/${newLocale}/` + rest.join("/") : `/${newLocale}`)
      return
    }

    // En cualquier otro caso, anteponer el nuevo locale conservando el resto
    router.push(`/${newLocale}/` + parts.join("/"))
  }

  function handleClose() {
    setOpen(false)
  }

  const { t } = useI18n()

  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        w-full z-50 transition-all duration-500
        
        sticky top-0
        md:fixed md:top-0 md:left-0
        
        ${scrolled
          ? "backdrop-blur-xl bg-black/70  border-[#CD9A31]/20"
          : "bg-transparent"
        }
      `}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href={`/${locale}`}>
          <h1 className="text-white text-xl cursor-pointer">
            Vie<span className="text-[#CD9A31]">Hub</span>
          </h1>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 items-center text-sm text-white">

          <Link href={`/${locale}`}>{t("common","home")}</Link>
          <Link href={`/${locale}/services`}>{t("common","services")}</Link>
          <Link href={`/${locale}/fleet`}>{t("common","fleet")}</Link>
          <Link href={`/${locale}/contact`}>{t("common","contact")}</Link>

          {/* LANG - solo banderas */}
          <div className="flex gap-1.5 ml-4 items-center">
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className={`p-1 rounded transition-opacity hover:opacity-100 ${locale === lang ? "opacity-100 ring-1 ring-[#CD9A31] ring-offset-1 ring-offset-transparent" : "opacity-70 hover:opacity-90"}`}
                title={lang === "es" ? "Español" : lang === "en" ? "English" : lang === "fr" ? "Français" : lang === "it" ? "Italiano" : "Deutsch"}
                aria-label={lang === "es" ? "Español" : lang === "en" ? "English" : lang === "fr" ? "Français" : lang === "it" ? "Italiano" : "Deutsch"}
              >
                <FlagIcon locale={lang} className="block shrink-0 rounded-sm overflow-hidden" />
              </button>
            ))}
          </div>

        </div>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              absolute
              top-full
              left-0
              w-full
              bg-black/90
              backdrop-blur-xl
              px-6
              py-6
              flex
              flex-col
              gap-4
              text-sm
              text-white
             border-[#CD9A31]/20
            "
          >

            <Link onClick={handleClose} href={`/${locale}`}>
              {t("common","home")}
            </Link>

            <Link onClick={handleClose} href={`/${locale}/services`}>
              {t("common","services")}
            </Link>

            <Link onClick={handleClose} href={`/${locale}/fleet`}>
              {t("common","fleet")}
            </Link>

            <Link onClick={handleClose} href={`/${locale}/contact`}>
              {t("common","contact")}
            </Link>

            <div className="flex gap-2 pt-4 items-center flex-wrap">
              {locales.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    changeLang(lang)
                    handleClose()
                  }}
                  className={`p-1.5 rounded transition-opacity hover:opacity-100 ${locale === lang ? "opacity-100 ring-1 ring-[#CD9A31] ring-offset-1 ring-offset-black/90" : "opacity-70 hover:opacity-90"}`}
                  title={lang === "es" ? "Español" : lang === "en" ? "English" : lang === "fr" ? "Français" : lang === "it" ? "Italiano" : "Deutsch"}
                  aria-label={lang === "es" ? "Español" : lang === "en" ? "English" : lang === "fr" ? "Français" : lang === "it" ? "Italiano" : "Deutsch"}
                >
                  <FlagIcon locale={lang} className="block shrink-0 rounded-sm overflow-hidden" />
                </button>
              ))}
            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </motion.nav>
  )
}