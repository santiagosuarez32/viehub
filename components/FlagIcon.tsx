"use client"

const size = { w: 24, h: 18 }

export function FlagES({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} width={size.w} height={size.h} aria-hidden>
      <rect width="24" height="6" fill="#AA151B" />
      <rect y="6" width="24" height="6" fill="#F1BF00" />
      <rect y="12" width="24" height="6" fill="#AA151B" />
    </svg>
  )
}

export function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} width={size.w} height={size.h} aria-hidden>
      <rect width="24" height="18" fill="#012169" />
      {/* Cruz blanca de San Jorge + borde */}
      <path fill="none" stroke="#fff" strokeWidth="3" d="M0 9h24M12 0v18" />
      <path fill="none" stroke="#C8102E" strokeWidth="1.5" d="M0 9h24M12 0v18" />
      {/* Aspa blanca de San Andrés */}
      <path fill="none" stroke="#fff" strokeWidth="2.5" d="M0 0l24 18M24 0L0 18" />
      <path fill="none" stroke="#C8102E" strokeWidth="1.2" d="M0 0l24 18M24 0L0 18" />
    </svg>
  )
}

export function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} width={size.w} height={size.h} aria-hidden>
      <rect width="8" height="18" fill="#002395" />
      <rect x="8" width="8" height="18" fill="#fff" />
      <rect x="16" width="8" height="18" fill="#ED2939" />
    </svg>
  )
}

export function FlagIT({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} width={size.w} height={size.h} aria-hidden>
      <rect width="8" height="18" fill="#009246" />
      <rect x="8" width="8" height="18" fill="#fff" />
      <rect x="16" width="8" height="18" fill="#CE2B37" />
    </svg>
  )
}

export function FlagDE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} width={size.w} height={size.h} aria-hidden>
      <rect width="24" height="6" fill="#000" />
      <rect y="6" width="24" height="6" fill="#DD0000" />
      <rect y="12" width="24" height="6" fill="#FFCE00" />
    </svg>
  )
}

const flags = {
  es: FlagES,
  en: FlagGB,
  fr: FlagFR,
  it: FlagIT,
  de: FlagDE,
} as const

export function FlagIcon({ locale, className }: { locale: keyof typeof flags; className?: string }) {
  const Icon = flags[locale]
  return Icon ? <Icon className={className} /> : null
}
