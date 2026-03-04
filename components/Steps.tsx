"use client"

import { CalendarCheck, CarFront, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n"
import { getDictionarySync } from "@/lib/i18n/dictionaries"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const icons = [<CalendarCheck key="1" size={20} />, <CarFront key="2" size={20} />, <CheckCircle key="3" size={20} />]

export default function Steps({ steps: stepsProp, slug }: { steps?: { step1: string; step2: string; step3: string } | string[], slug?: string }) {

  const { t } = useI18n()
  const params = useParams()
  const locale = params?.locale as string | undefined

  const dict = getDictionarySync(locale as any || "en")

  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

  const defaultSteps = [
    { icon: icons[0], number: "01", title: t("steps", "step1_title"), desc: t("steps", "step1_desc") },
    { icon: icons[1], number: "02", title: t("steps", "step2_title"), desc: t("steps", "step2_desc") },
    { icon: icons[2], number: "03", title: t("steps", "step3_title"), desc: t("steps", "step3_desc") }
  ]

  // Get service-specific steps from dictionary if slug is provided
  let stepsFormatted
  if (slug && dict.service_steps && typeof dict.service_steps === 'object') {
    const serviceSteps = (dict.service_steps as any)[slug]
    if (serviceSteps && typeof serviceSteps === 'object' && serviceSteps.step1) {
      stepsFormatted = [
        { icon: icons[0], number: "01", title: serviceSteps.step1, desc: "" },
        { icon: icons[1], number: "02", title: serviceSteps.step2, desc: "" },
        { icon: icons[2], number: "03", title: serviceSteps.step3, desc: "" }
      ]
    } else if (dict.destination_steps && typeof dict.destination_steps === 'object') {
      const destSteps = (dict.destination_steps as any)[slug]
      if (destSteps && typeof destSteps === 'object' && destSteps.step1) {
        stepsFormatted = [
          { icon: icons[0], number: "01", title: destSteps.step1, desc: "" },
          { icon: icons[1], number: "02", title: destSteps.step2, desc: "" },
          { icon: icons[2], number: "03", title: destSteps.step3, desc: "" }
        ]
      } else {
        stepsFormatted = defaultSteps
      }
    } else {
      stepsFormatted = defaultSteps
    }
  } else if (slug && dict.destination_steps && typeof dict.destination_steps === 'object') {
    const destSteps = (dict.destination_steps as any)[slug]
    if (destSteps && typeof destSteps === 'object' && destSteps.step1) {
      stepsFormatted = [
        { icon: icons[0], number: "01", title: destSteps.step1, desc: "" },
        { icon: icons[1], number: "02", title: destSteps.step2, desc: "" },
        { icon: icons[2], number: "03", title: destSteps.step3, desc: "" }
      ]
    } else {
      stepsFormatted = defaultSteps
    }
  } else {
    stepsFormatted = defaultSteps
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (

    <section
      ref={sectionRef}
      data-builder-block="steps_section"
      className="w-full py-32 bg-black text-white relative overflow-hidden builder-"
    >

      <div
        data-builder-block="steps_container"
        className="max-w-7xl mx-auto px-6 text-center"
      >

        {/* TITLE */}
        <p
          data-builder-text="steps_subtitle"
          className="text-[#CD9A31] tracking-widest text-sm mb-3"
        >
          {t("steps", "title").toUpperCase()}
        </p>

        <h2
          data-builder-text="steps_title"
          className="text-4xl font-light mb-20"
        >
          {t("steps", "booking_is")} <span className="text-[#CD9A31]">{t("steps", "easy")}</span>
        </h2>

        {/* WRAPPER */}
        <div
          data-builder-block="steps_wrapper"
          className="relative"
        >

          {/* DESKTOP LINE */}
          <div
            data-builder-block="steps_line_desktop"
            className="
absolute
top-[40px]
left-1/2
-translate-x-1/2
w-full
h-[1px]
bg-[#CD9A31]/30
hidden md:block
"
          />

          {/* MOBILE LINE */}
          <div
            data-builder-block="steps_line_mobile"
            className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[1px]
h-full
bg-[#CD9A31]/20
md:hidden
"
          />

          {/* STEPS */}
          <div
            data-builder-block="steps_grid"
            className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-16
"
          >

            {stepsFormatted.map((step, i) => (

              <div
                key={i}
                ref={(el) => { if (el) stepsRef.current[i] = el }}
                data-builder-block={`step_${i}`}
                className="relative flex flex-col items-center max-w-xs mx-auto z-10"
                style={{ opacity: 0 }}
              >

                {/* ICON */}
                <div
                  data-builder-block={`step_icon_${i}`}
                  className="
w-[42px]
h-[42px]
rounded-full
bg-[#111]
border border-[#CD9A31]/40
flex items-center justify-center
text-[#CD9A31]
mb-6
">
                  {step.icon}
                </div>

                {/* NUMBER */}
                <span
                  data-builder-text={`step_number_${i}`}
                  className="
text-[70px]
md:text-[110px]
font-bold
text-transparent
stroke-text
leading-none
mb-2
">
                  {step.number}
                </span>

                {/* TITLE */}
                <h4
                  data-builder-text={`step_title_${i}`}
                  className="mb-2 text-lg">
                  {step.title}
                </h4>

                {/* DESC */}
                <p
                  data-builder-text={`step_desc_${i}`}
                  className="text-sm text-gray-400 max-w-[220px]">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}
        <div
          data-builder-block="steps_cta_wrapper"
        >
          <Link
            href={`/${locale || ""}#booking-form`}
            data-builder-text="steps_cta"
            className="
mt-16
inline-flex
items-center
justify-center
px-8
py-3
bg-[#CD9A31]
text-black
rounded-xl
text-sm
hover:scale-105
transition
"
          >
            {t("common", "reserve_now")}
          </Link>
        </div>

      </div>

    </section>

  )
}