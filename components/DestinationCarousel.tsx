"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function DestinationCarousel({ images }: { images: string[] }) {

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 1900)

    return () => clearInterval(interval)
  }, [images.length])

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="absolute inset-0">

      {images.map((img, index) => (

        <div
          key={index}
          className={`
            absolute inset-0 transition-opacity duration-1000
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={img}
            alt="Destination image"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>

      ))}

      {/* SMALL WHITE CONTROLS */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full text-xs backdrop-blur-sm transition"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full text-xs backdrop-blur-sm transition"
          >
            ›
          </button>
        </>
      )}

    </div>
  )
}