"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { useI18n } from "@/lib/i18n/i18n"
import { FlagIcon } from "@/components/FlagIcon"

const locales = ["es", "en", "fr", "it", "de"] as const

const langNames = {
  es: "Espanol",
  en: "English",
  fr: "Francais",
  it: "Italiano",
  de: "Deutsch"
}

const localePattern = /^[A-Za-z]{2}(-[A-Za-z]{2})?$/

export default function Navbar({ locale }: { locale: string }) {

  const router = useRouter()
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

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
      router.push("/" + newLocale)
      return
    }

    // Si el primer segmento es un locale soportado, reemplazarlo y limpiar posibles restos tipo '/xx'
    if ((locales as readonly string[]).includes(parts[0])) {
      parts[0] = newLocale

      // Si el segundo segmento parece otro locale (p.ej. 'de'), lo eliminamos
      if (parts.length > 1) {
        const second = parts[1]
        const secondLooksLikeLocale = localePattern.test(second)
        if (secondLooksLikeLocale) {
          parts.splice(1, 1)
        }
      }

      router.push("/" + parts.join("/"))
      return
    }

    // Si el primer segmento parece un locale (ej: 'de'), descartarlo
    const first = parts[0]
    const looksLikeLocale = localePattern.test(first)
    if (looksLikeLocale) {
      const rest = parts.slice(1)
      router.push(rest.length ? "/" + newLocale + "/" + rest.join("/") : "/" + newLocale)
      return
    }

    // En cualquier otro caso, anteponer el nuevo locale conservando el resto
    router.push("/" + newLocale + "/" + parts.join("/"))
  }

  function handleClose() {
    setOpen(false)
  }

  const { t } = useI18n()

  const navClasses = scrolled
    ? "w-full z-50 transition-all duration-500 sticky top-0 md:fixed md:top-0 md:left-0 backdrop-blur-xl bg-black/70"
    : "w-full z-50 transition-all duration-500 sticky top-0 md:fixed md:top-0 md:left-0 bg-transparent"
  
  const navStyle = scrolled ? { borderColor: 'rgba(205, 154, 49, 0.2)' } : undefined

  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={navClasses}
      style={navStyle}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link 
          href={"/" + locale} 
          className="flex items-center gap-2"
          onClick={() => {
            if (pathname === "/" + locale) {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
          <img 
            src="/logo.png" 
            alt="VieHub Logo" 
            className="h-32 w-32 md:h-24 md:w-24 object-contain"
          />
        
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 items-center text-sm text-white">

          <Link href={"/" + locale} className="mr-auto">{t("common","home")}</Link>
          <Link href={"/" + locale + "/services"}>{t("common","services")}</Link>
          <Link href={"/" + locale + "/fleet"}>{t("common","fleet")}</Link>
          <Link href={"/" + locale + "/contact"}>{t("common","contact")}</Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-1.5 rounded transition-opacity hover:opacity-100 flex items-center gap-1"
              aria-label="Select language"
            >
              <FlagIcon locale={locale as any} className="block shrink-0 rounded-sm overflow-hidden" />
              <ChevronDown size={16} className="text-white" />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 py-2 px-1 rounded-lg shadow-lg min-w-32"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
              >
                {locales.map((lang) => {
                  const isActive = locale === lang
                  return (
                    <button
                      key={lang}
                      onClick={() => {
                        changeLang(lang)
                        setLangOpen(false)
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded transition-all hover:bg-white/10"
                      style={isActive ? { backgroundColor: 'rgba(205, 154, 49, 0.2)' } : undefined}
                    >
                      <FlagIcon locale={lang} className="block shrink-0 rounded-sm overflow-hidden" />
                      <span className="text-sm text-white">{langNames[lang]}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <Link
            href={`/${locale}#booking-form`}
            className="text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)', border: '1px solid #CD9A31' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)'; e.currentTarget.style.borderColor = '#E6B84D' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)'; e.currentTarget.style.borderColor = '#CD9A31' }}
          >
            <MessageCircle size={16} />
            {t("common","book_now")}
          </Link>

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

            <Link onClick={handleClose} href={"/" + locale}>
              {t("common","home")}
            </Link>

            <Link onClick={handleClose} href={"/" + locale + "/services"}>
              {t("common","services")}
            </Link>

            <Link onClick={handleClose} href={"/" + locale + "/fleet"}>
              {t("common","fleet")}
            </Link>

            <Link onClick={handleClose} href={"/" + locale + "/contact"}>
              {t("common","contact")}
            </Link>

            <div className="flex gap-2 pt-4 items-center flex-wrap">
              {locales.map((lang) => {
                const isActive = locale === lang
                const buttonClass = isActive
                  ? "p-1.5 rounded transition-opacity hover:opacity-100 opacity-100 ring-1 ring-offset-1 ring-offset-black/90" 
                  : "p-1.5 rounded transition-opacity hover:opacity-100 opacity-70 hover:opacity-90"
                
                return (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLang(lang)
                      handleClose()
                    }}
                    className={buttonClass}
                    style={isActive ? { borderColor: '#CD9A31' } : undefined}
                    title={langNames[lang]}
                    aria-label={langNames[lang]}
                  >
                    <FlagIcon locale={lang} className="block shrink-0 rounded-sm overflow-hidden" />
                  </button>
                )
              })}
            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </motion.nav>
  )
}