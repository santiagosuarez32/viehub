"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n"
import Image from "next/image"

export default function ContactPage() {
  const { t } = useI18n()

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    setSuccess(true)
    
    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+43 660 8537912",
      link: "tel:+436608537912",
      target: undefined
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@viehub.com",
      link: "mailto:info@viehub.com",
      target: undefined
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Vienna, Austria",
      link: "https://maps.google.com/?q=Vienna%2C%20Austria",
      target: "_blank"
    },
    {
      icon: Clock,
      title: "Availability",
      content: "24/7 Service",
      link: null,
      target: undefined
    }
  ]

  return (
    <main className="w-full overflow-hidden bg-black">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-[#CD9A31] tracking-[3px] text-sm mb-4">
            GET IN TOUCH
          </p>
          <h1 className="font-bold leading-tight mb-6 text-5xl md:text-7xl bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or ready to book? We're here to help 24/7
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="w-full py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => {
              const CardWrapper: any = item.link ? "a" : "div"

              return (
                <CardWrapper
                  key={i}
                  href={item.link || undefined}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="
                    bg-black
                    border border-[#CD9A31]/30
                    rounded-2xl
                    p-6
                    text-center
                    hover:border-[#CD9A31]
                    transition
                    hover:shadow-[0_0_25px_rgba(205,154,49,0.2)]
                    block
                  "
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#CD9A31]/10 border border-[#CD9A31]/30 mb-4">
                    <item.icon className="text-[#CD9A31]" size={24} />
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-2 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 hover:text-[#CD9A31] transition text-base">
                    {item.content}
                  </p>
                </CardWrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="w-full py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white font-bold mb-4">
              Send us a <span className="text-[#CD9A31]">Message</span>
            </h2>
            <p className="text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          {success && (
            <div className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center">
              ✓ Thank you for your message! We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="
                    w-full
                    bg-[#0a0a0a]
                    border border-[#CD9A31]/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-[#CD9A31]
                    transition
                  "
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="
                    w-full
                    bg-[#0a0a0a]
                    border border-[#CD9A31]/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-[#CD9A31]
                    transition
                  "
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="
                    w-full
                    bg-[#0a0a0a]
                    border border-[#CD9A31]/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-[#CD9A31]
                    transition
                  "
                  placeholder="+43 660 1234567"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="
                    w-full
                    bg-[#0a0a0a]
                    border border-[#CD9A31]/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    outline-none
                    focus:border-[#CD9A31]
                    transition
                  "
                  placeholder="Transfer Inquiry"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Message *
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={6}
                className="
                  w-full
                  bg-[#0a0a0a]
                  border border-[#CD9A31]/20
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-[#CD9A31]
                  transition
                  resize-none
                "
                placeholder="Tell us about your transfer needs..."
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                text-black
                font-semibold
                text-base
                bg-gradient-to-r
                from-[#fff2c9]
                via-[#CD9A31]
                to-[#8f640f]
                hover:scale-[1.02]
                transition
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Send size={20} />
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* MAP OR ADDITIONAL INFO */}
      <section className="w-full py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl text-white font-bold mb-6">
                Why <span className="text-[#CD9A31]">Choose Us?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CD9A31]/10 border border-[#CD9A31]/30 flex items-center justify-center text-[#CD9A31] font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      Professional Service
                    </h3>
                    <p className="text-gray-400">
                      Licensed, insured, and experienced chauffeurs at your service
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CD9A31]/10 border border-[#CD9A31]/30 flex items-center justify-center text-[#CD9A31] font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      Premium Fleet
                    </h3>
                    <p className="text-gray-400">
                      Latest Mercedes-Benz vehicles with maximum comfort
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CD9A31]/10 border border-[#CD9A31]/30 flex items-center justify-center text-[#CD9A31] font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      Fixed Pricing
                    </h3>
                    <p className="text-gray-400">
                      Transparent prices with no hidden fees or surprises
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CD9A31]/10 border border-[#CD9A31]/30 flex items-center justify-center text-[#CD9A31] font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      24/7 Availability
                    </h3>
                    <p className="text-gray-400">
                      Available anytime, any day for your convenience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-[#CD9A31]/30 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl text-white font-bold mb-6">
                Quick <span className="text-[#CD9A31]">Contact</span>
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+436608537912"
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-xl
                    bg-[#CD9A31]/5
                    border border-[#CD9A31]/20
                    hover:border-[#CD9A31]
                    transition
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-full bg-[#CD9A31]/10 flex items-center justify-center group-hover:bg-[#CD9A31]/20 transition">
                    <Phone className="text-[#CD9A31]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us now</p>
                    <p className="text-white text-lg font-semibold">+43 660 8537912</p>
                  </div>
                </a>

                <a
                  href="mailto:info@viehub.com"
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-xl
                    bg-[#CD9A31]/5
                    border border-[#CD9A31]/20
                    hover:border-[#CD9A31]
                    transition
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-full bg-[#CD9A31]/10 flex items-center justify-center group-hover:bg-[#CD9A31]/20 transition">
                    <Mail className="text-[#CD9A31]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us</p>
                    <p className="text-white text-lg font-semibold">info@viehub.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/436608537912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-xl
                    bg-green-500/5
                    border border-green-500/20
                    hover:border-green-500
                    transition
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition">
                    <svg
                      className="text-green-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white text-lg font-semibold">Message us</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
