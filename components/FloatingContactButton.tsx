'use client'

import { Phone, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SiTelegram, SiViber } from 'react-icons/si'
import { useState, useRef, useEffect } from 'react'
import { useI18n } from '@/lib/i18n/i18n'
import gsap from 'gsap'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()
  const phoneNumber = '+43 660 8537912'

  const panelRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLAnchorElement[]>([])
  // track if the panel was ever mounted
  const mountedRef = useRef(false)

  const contacts = [
    {
      id: 'phone',
      label: t("common", "call_number"),
      href: `tel:${phoneNumber}`,
      icon: Phone,
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: `https://wa.me/${phoneNumber.replace(/\D/g, '')}`,
      icon: FaWhatsapp,
      color: 'bg-green-500 hover:bg-green-600',
      target: '_blank',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      href: `https://t.me/send?phone=${phoneNumber.replace(/\D/g, '')}`,
      icon: SiTelegram,
      color: 'bg-sky-500 hover:bg-sky-600',
      target: '_blank',
    },
    {
      id: 'viber',
      label: 'Viber',
      href: `viber://contact?number=${phoneNumber.replace(/\D/g, '')}`,
      icon: SiViber,
      color: 'bg-purple-500 hover:bg-purple-600',
      target: '_blank',
    },
  ]

  // Animate panel open/close
  useEffect(() => {
    const panel = panelRef.current
    const backdrop = backdropRef.current
    if (!panel || !backdrop) return

    if (isOpen) {
      mountedRef.current = true
      // Show
      gsap.set(panel, { display: 'flex' })
      gsap.set(backdrop, { display: 'block' })
      gsap.fromTo(
        panel,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.22, ease: 'power2.out' }
      )
      gsap.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: 'power2.out' }
      )
      // Stagger items
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.22, stagger: 0.05, ease: 'power2.out', delay: 0.05 }
      )
    } else if (mountedRef.current) {
      // Hide
      gsap.to(panel, {
        opacity: 0,
        scale: 0.85,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          if (panel) gsap.set(panel, { display: 'none' })
        }
      })
      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => {
          if (backdrop) gsap.set(backdrop, { display: 'none' })
        }
      })
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        style={{ display: 'none' }}
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed bottom-6 right-6 z-50">

        {/* Contact panel */}
        <div
          ref={panelRef}
          style={{ display: 'none' }}
          className="absolute bottom-20 right-0 flex-col gap-3"
        >
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={contact.id}
                ref={(el) => { if (el) itemsRef.current[index] = el }}
                href={contact.href}
                target={contact.target}
                rel={contact.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={`${contact.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group relative hover:scale-110 active:scale-95`}
                title={contact.label}
                style={{ opacity: 0 }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {contact.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Main button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-90"
          title="Contacto"
        >
          <div
            style={{
              transition: 'transform 0.2s ease, opacity 0.15s ease',
              transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
              opacity: 1
            }}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Phone className="w-7 h-7" />}
          </div>
        </button>

      </div>
    </>
  )
}
