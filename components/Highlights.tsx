"use client"

import { ShieldCheck, Clock, UserCheck, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Highlights() {

    const { t } = useI18n()
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])

    const items = [
        {
            icon: <ShieldCheck size={34} />,
            key: "item1"
        },
        {
            icon: <UserCheck size={34} />,
            key: "item2"
        },
        {
            icon: <Clock size={34} />,
            key: "item3"
        },
        {
            icon: <Sparkles size={34} />,
            key: "item4"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.13,
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
            data-builder-block="highlights_section"
            className="w-full py-28 bg-[#0a0a0a] text-white builder-"
        >

            <div
                data-builder-block="highlights_container"
                className="max-w-7xl mx-auto px-6"
            >

                {/* HEADER */}
                <div
                    data-builder-block="highlights_header"
                    className="text-center mb-16 max-w-2xl mx-auto"
                >

                    <h2
                        data-builder-text="highlights_title"
                        className="text-4xl font-light mb-4"
                    >
                        {t("why", "title")} <span className="text-[#CD9A31]">{t("why", "subtitle")}</span>
                    </h2>

                    <p
                        data-builder-text="highlights_desc"
                        className="text-gray-400"
                    >
                        {t("why", "description")}
                    </p>

                </div>

                {/* CARDS */}
                <div
                    data-builder-block="highlights_cards"
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >

                    {items.map((item, i) => (

                        <div
                            key={i}
                            ref={(el) => { if (el) cardsRef.current[i] = el }}
                            data-builder-block={`highlight_card_${i}`}
                            className="
bg-[#111]
border border-[#CD9A31]/20
rounded-2xl
p-6
text-left
hover:border-[#CD9A31]/60
transition
group
"
                            style={{ opacity: 0 }}
                        >

                            {/* ICON */}
                            <div
                                data-builder-block={`highlight_icon_${i}`}
                                className="
w-[60px]
h-[60px]
rounded-xl
bg-[#CD9A31]/10
flex
items-center
justify-center
text-[#CD9A31]
mb-5
group-hover:scale-110
transition
"
                            >
                                {item.icon}
                            </div>

                            {/* TITLE */}
                            <h4
                                data-builder-text={`highlight_title_${i}`}
                                className="text-lg mb-2"
                            >
                                {t("highlights", `${item.key}_title`)}
                            </h4>

                            {/* DESC */}
                            <p
                                data-builder-text={`highlight_desc_${i}`}
                                className="text-sm text-gray-400 leading-relaxed"
                            >
                                {t("highlights", `${item.key}_desc`)}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}