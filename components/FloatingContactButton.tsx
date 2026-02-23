'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SiTelegram, SiViber } from 'react-icons/si'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n/i18n'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()
  const phoneNumber = '+43 660 8537912'

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

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3"
            >
              {contacts.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <motion.a
                    key={contact.id}
                    href={contact.href}
                    target={contact.target}
                    rel={contact.target === '_blank' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${contact.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group relative`}
                    title={contact.label}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {contact.label}
                    </span>
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
          title="Contacto"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="phone"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
