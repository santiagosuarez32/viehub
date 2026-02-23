'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useI18n } from '@/lib/i18n/i18n'

export default function FloatingContactButton() {
  const phoneNumber = '+436602202238'
  const phoneUrl = `tel:${phoneNumber}`
  const { t } = useI18n()

  return (
    <motion.a
      href={phoneUrl}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={t("common", "call_number")}
    >
      <Phone className="w-7 h-7" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {t("common", "call_number")}
      </span>
    </motion.a>
  )
}
