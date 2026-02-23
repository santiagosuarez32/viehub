"use client"

import { ReactLenis } from "lenis/react"

const options = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={options} className="min-h-full">
      {children}
    </ReactLenis>
  )
}
