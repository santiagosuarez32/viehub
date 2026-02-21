"use client"

import Link from "next/link"

export default function Footer({ locale }: { locale: string }) {

  return (
    <footer className="w-full bg-black border-t border-[#CD9A31]/20 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm text-gray-400">

        <div>
          <h3 className="text-white mb-4 text-lg">
            Vie<span className="text-[#CD9A31]">Hub</span>
          </h3>
          <p>
            Premium airport and private transfer services across Vienna and Europe.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href={`/${locale}`}>Home</Link>
          <Link href={`/${locale}/services`}>Services</Link>
          <Link href={`/${locale}/fleet`}>Fleet</Link>
          <Link href={`/${locale}/contact`}>Contact</Link>
        </div>

        <div>
          <p>📞 +43 660 2202238</p>
          <p>📧 info@viehub.com</p>
          <p>📍 Vienna, Austria</p>
        </div>

      </div>

      <div className="border-t border-[#CD9A31]/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VieHub. All rights reserved.
      </div>

    </footer>
  )
}