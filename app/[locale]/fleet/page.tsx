"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Briefcase, Shield, Star, Award, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n"
import { useParams } from "next/navigation"

export default function FleetPage() {
  const { t } = useI18n()
  const params = useParams()
  const locale = params?.locale as string | undefined

  const cars = [
    {
      title: "Standard",
      subtitle: "Mercedes E-Class",
      pax: 3,
      bags: 2,
      price: 42,
      img: "/sta.webp",
      features: ["child_seats", "wifi", "air_conditioning", "leather_seats"],
      description: "Perfect for business trips and airport transfers with premium comfort and style."
    },
    {
      title: "Station Wagon",
      subtitle: "Mercedes E-Class T-Model",
      pax: 4,
      bags: 3,
      price: 46,
      img: "/wa.webp",
      popular: true,
      features: ["extra_luggage", "child_seats", "premium_comfort", "wifi"],
      description: "Ideal for families or travelers with extra luggage. Maximum space and comfort."
    },
    {
      title: "V-Class",
      subtitle: "Mercedes V-Class",
      pax: 7,
      bags: 7,
      price: 65,
      img: "/v.webp",
      features: ["group_travel", "business_teams", "family_trips", "maximum_comfort"],
      description: "Perfect for group travel, business teams or large families. Unmatched space and luxury."
    }
  ]

  const guarantees = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      desc: "All vehicles fully insured and certified"
    },
    {
      icon: Star,
      title: "Premium Quality",
      desc: "Latest Mercedes-Benz models"
    },
    {
      icon: Award,
      title: "Professional Drivers",
      desc: "Experienced and courteous chauffeurs"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      desc: "Available anytime, any day"
    }
  ]

  return (
    <main className="w-full overflow-hidden bg-black">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Fleet"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-[#CD9A31] tracking-[3px] text-sm mb-4">
            {t("common", "fleet").toUpperCase()}
          </p>
          <h1 className="font-bold leading-tight mb-6 text-5xl md:text-7xl bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] bg-clip-text text-transparent">
            Our Premium Fleet
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience luxury and comfort with our fleet of latest Mercedes-Benz vehicles. 
            Each car is meticulously maintained to ensure your journey is perfect.
          </p>
        </div>
      </section>

      {/* VEHICLES GRID */}
      <section className="w-full py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cars.map((car, i) => (
              <div
                key={i}
                className="
                  relative
                  bg-[#0a0a0a]
                  border border-[#CD9A31]/40
                  rounded-2xl
                  overflow-hidden
                  transition
                  hover:scale-[1.02]
                  hover:shadow-[0_0_45px_rgba(205,154,49,0.35)]
                  flex flex-col
                "
              >
                {/* BADGE */}
                {car.popular && (
                  <div className="absolute z-20 top-4 right-4">
                    <span className="text-[11px] px-4 py-1.5 bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] text-black rounded-full font-semibold">
                      {t("common", "most_popular").toUpperCase()}
                    </span>
                  </div>
                )}

                {/* IMAGE */}
                <div className="relative w-full h-[280px] overflow-hidden">
                  <Image
                    src={car.img}
                    alt={car.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="px-6 py-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl text-white font-semibold">
                      {car.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {car.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm flex-1">
                    {car.description}
                  </p>

                  <div className="flex gap-6 text-[#CD9A31] text-sm pt-2">
                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span>{car.pax} {t("common", "pax")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      <span>{car.bags} {t("common", "bags")}</span>
                    </div>
                  </div>

                  <div className="border-t border-[#CD9A31]/20 pt-4">
                    <p className="text-xs text-gray-500 mb-2">FEATURES</p>
                    <ul className="text-gray-400 text-sm space-y-1.5">
                      {car.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-[#CD9A31]">✓</span>
                          {t("common", f as any)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#CD9A31]/20">
                    <div>
                      <p className="text-xs text-gray-500">{t("common", "from_price")}</p>
                      <p className="text-[#CD9A31] text-2xl font-semibold">
                        €{car.price}
                      </p>
                    </div>
                    <Link
                      href={`/${locale || ""}#booking-form`}
                      className="
                      px-6
                      py-3
                      rounded-lg
                      text-black
                      text-sm
                      font-semibold
                      bg-gradient-to-r
                      from-[#fff2c9]
                      via-[#CD9A31]
                      to-[#8f640f]
                      hover:scale-105
                      transition
                    "
                    >
                      {t("common", "book")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES SECTION */}
      <section className="w-full py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#CD9A31] tracking-[3px] text-sm mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Our <span className="text-[#CD9A31]">Guarantee</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We ensure the highest standards of service and quality for every journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((item, i) => (
              <div
                key={i}
                className="
                  bg-black
                  border border-[#CD9A31]/30
                  rounded-2xl
                  p-6
                  text-center
                  hover:border-[#CD9A31]
                  transition
                  hover:shadow-[0_0_25px_rgba(205,154,49,0.2)]
                "
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#CD9A31]/10 border border-[#CD9A31]/30 mb-4">
                  <item.icon className="text-[#CD9A31]" size={28} />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Ready to Book Your <span className="text-[#CD9A31]">Premium Transfer?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us now and experience the luxury of professional chauffeur service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+436608537912"
              className="
                px-8
                py-4
                rounded-xl
                text-black
                font-semibold
                bg-gradient-to-r
                from-[#fff2c9]
                via-[#CD9A31]
                to-[#8f640f]
                hover:scale-105
                transition
                inline-block
              "
            >
              Call +43 660 8537912
            </a>
            <a
              href="#book"
              className="
                px-8
                py-4
                rounded-xl
                text-white
                font-semibold
                border-2
                border-[#CD9A31]
                hover:bg-[#CD9A31]/10
                transition
                inline-block
              "
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
