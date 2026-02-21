"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"

const locales = ["de", "en", "fr", "it", "es"]

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

    const segments = pathname.split("/")

    if (!locales.includes(segments[1])) {
      router.push(`/${newLocale}${pathname}`)
      return
    }

    segments[1] = newLocale

    router.push(segments.join("/") || `/${newLocale}`)
  }

  function handleClose() {
    setOpen(false)
  }

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
          ? "backdrop-blur-xl bg-black/70 border-b border-[#CD9A31]/20"
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

          <Link href={`/${locale}`}>Home</Link>
          <Link href={`/${locale}/services`}>Services</Link>
          <Link href={`/${locale}/fleet`}>Fleet</Link>
          <Link href={`/${locale}/contact`}>Contact</Link>

          {/* LANG */}
          <div className="flex gap-2 text-[#CD9A31] ml-4">
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className={locale === lang ? "font-bold underline" : ""}
              >
                {lang.toUpperCase()}
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
              border-b border-[#CD9A31]/20
            "
          >

            <Link onClick={handleClose} href={`/${locale}`}>
              Home
            </Link>

            <Link onClick={handleClose} href={`/${locale}/services`}>
              Services
            </Link>

            <Link onClick={handleClose} href={`/${locale}/fleet`}>
              Fleet
            </Link>

            <Link onClick={handleClose} href={`/${locale}/contact`}>
              Contact
            </Link>

            <div className="flex gap-3 text-[#CD9A31] pt-4">
              {locales.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    changeLang(lang)
                    handleClose()
                  }}
                  className={locale === lang ? "font-bold underline" : ""}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </motion.nav>
  )
}