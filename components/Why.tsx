"use client"

import { ShieldCheck, Clock, Star, BadgeDollarSign } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Why() {

    const { t } = useI18n()
    const sectionRef = useRef<HTMLElement>(null)
    const itemsRef = useRef<HTMLDivElement[]>([])
    const imageRef = useRef<HTMLDivElement>(null)

    const items = [
        {
            icon: <ShieldCheck size={26} />,
            key: "item1"
        },
        {
            icon: <Star size={26} />,
            key: "item2"
        },
        {
            icon: <Clock size={26} />,
            key: "item3"
        },
        {
            icon: <BadgeDollarSign size={26} />,
            key: "item4"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger items fade up
            gsap.fromTo(
                itemsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.18,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    }
                }
            )
            // Image slide from right
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, x: 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
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
            data-builder-block="why_section"
            className="w-full py-28 bg-black text-white overflow-hidden builder-"
        >

            <div
                data-builder-block="why_container"
                className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
            >

                {/* LEFT */}
                <div data-builder-block="why_left">

                    <h2
                        data-builder-text="why_title"
                        className="text-4xl mb-6"
                    >
                        {t("why", "title")} <span className="text-[#CD9A31]">{t("why", "subtitle")}</span>
                    </h2>

                    <p
                        data-builder-text="why_desc"
                        className="text-gray-400 mb-12 max-w-md"
                    >
                        {t("why", "description")}
                    </p>

                    <div
                        data-builder-block="why_grid"
                        className="grid sm:grid-cols-2 gap-10"
                    >

                        {items.map((item, i) => (

                            <div
                                key={i}
                                ref={(el) => { if (el) itemsRef.current[i] = el }}
                                data-builder-block={`why_item_${i}`}
                                className="flex gap-4"
                                style={{ opacity: 0 }}
                            >

                                <div
                                    data-builder-block={`why_icon_${i}`}
                                    className="
min-w-[48px]
h-[48px]
rounded-full
bg-[#111]
border border-[#CD9A31]/30
flex items-center justify-center
text-[#CD9A31]
">{item.icon}
                                </div>

                                <div>

                                    <h4
                                        data-builder-text={`why_item_title_${i}`}
                                        className="mb-1 text-white"
                                    >
                                        {t("why", `${item.key}_title`)}
                                    </h4>

                                    <p
                                        data-builder-text={`why_item_desc_${i}`}
                                        className="text-sm text-gray-400"
                                    >
                                        {t("why", `${item.key}_desc`)}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* RIGHT */}
                <div
                    ref={imageRef}
                    data-builder-block="why_image_wrapper"
                    className="relative flex justify-center"
                    style={{ opacity: 0 }}
                >

                    <div
                        data-builder-block="why_image_container"
                        className="relative rounded-3xl overflow-hidden border border-[#CD9A31]/30"
                    >

                        <img
                            data-builder-image="why_image"
                            src="/why.webp"
                            className="relative z-10 max-w-lg w-full rounded-3xl"
                        />

                    </div>

                    <div
                        data-builder-block="why_glow"
                        className="
absolute
w-[350px]
h-[350px]
bg-[#CD9A31]/20
blur-[120px]
rounded-full
bottom-10
"
                    />

                </div>

            </div>

        </section>
    )
}