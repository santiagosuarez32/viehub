"use client"

import { services } from "@/data/services"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Services() {

  const params = useParams()
  const locale = params?.locale as string

  return (

    <section className="w-full py-32 bg-[#0a0a0a] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">

          <p className="text-[#CD9A31] text-sm tracking-widest mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-4xl leading-tight mb-4">
            Premium Transfer
            <span className="text-[#CD9A31]"> Solutions</span>
          </h2>

          <p className="text-gray-400">
            Explore our wide range of chauffeur and airport transfer services.
          </p>

        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {services.map((service, i) => (

    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="h-full"
    >

      <div className="
        group
        bg-black
        border border-[#CD9A31]/20
        rounded-2xl
        overflow-hidden
        hover:border-[#CD9A31]
        transition
        flex flex-col
        h-full
      ">

        <Link
          href={`/${locale}/services/${service.slug}`}
          className="flex flex-col h-full"
        >

          {/* IMAGE */}
          <div className="relative h-[220px] overflow-hidden flex-shrink-0">

            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

          </div>

          {/* CONTENT */}
          <div className="p-6 flex flex-col flex-1">

            <h3 className="text-lg mb-2 min-h-[56px]">
              {service.title}
            </h3>

            <p className="text-sm text-gray-400 mb-6 flex-1">
              {service.desc}
            </p>

            <div className="
              w-full
              py-2.5
              bg-[#CD9A31]
              text-black
              rounded-lg
              text-sm
              text-center
              hover:scale-105
              transition
              mt-auto
            ">
              See More
            </div>

          </div>

        </Link>

      </div>

    </motion.div>

  ))}

</div>

      </div>

    </section>

  )
}