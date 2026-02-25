import type { Metadata, Viewport } from "next"
import { ReactNode } from "react"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://viehub.at"),
  verification: {
    google: "79EV-Qgq9XsQhD-q5b5kw3_8nmxxCv_JnPpdnX766VA",
  },
  alternates: {
    languages: {
      de: "https://viehub.at/de",
      en: "https://viehub.at/en",
      es: "https://viehub.at/es",
      fr: "https://viehub.at/fr",
      it: "https://viehub.at/it",
      "x-default": "https://viehub.at/de",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
