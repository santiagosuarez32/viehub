"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/1.webp",
    subtitle: "PRIVATE AIRPORT TRANSFERS",
    title1: "hola Chauffeur",
    title2: "Service in Europe",
    desc: "Book your premium transfer in seconds with fixed pricing.",
  },
  {
    image: "/2.webp",
    subtitle: "EXECUTIVE TRAVEL",
    title1: "asd ",
    title2: "Travel Smart",
    desc: "Professional drivers available 24/7 across all major cities.",
  },
];

export default function HeroSlider() {

  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState({x:0,y:0});

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const move = (e:any)=>{
      setOffset({
        x:(e.clientX - window.innerWidth/2)/60,
        y:(e.clientY - window.innerHeight/2)/60
      })
    }
    window.addEventListener("mousemove",move)
    return ()=>window.removeEventListener("mousemove",move)
  },[])

  return (
    <section
      data-builder-block="hero_section"
      className="relative w-full min-h-screen overflow-hidden font-[var(--font-exo)]"
    >

      {/* BACKGROUND */}
      {slides.map((slide,i)=>(
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            i===active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center animate-zoomSlow"
            style={{
              transform:`translate(${offset.x}px,${offset.y}px) scale(1.1)`,
              backgroundImage:`
              linear-gradient(90deg, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3)),
              url(${slide.image})
              `
            }}
            data-builder-image={`hero_image_${i}`}
          />
        </div>
      ))}

      <div className="relative z-20 w-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div className="space-y-6 text-white">

            <p
              data-builder-text="hero_subtitle"
              className="tracking-[4px] text-sm text-[#CD9A31] animate-fadeUp delay-200"
            >
              {slides[active].subtitle}
            </p>

            <h1
              data-builder-text="hero_title"
              className="text-4xl md:text-6xl font-semibold leading-tight animate-fadeUp delay-500"
            >
              {slides[active].title1}{" "}
              <span className="bg-gradient-to-r from-[#CD9A31] via-[#f1c55e] to-[#CD9A31] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(205,154,49,0.35)]">
                {slides[active].title2}
              </span>
            </h1>

            <p
              data-builder-text="hero_desc"
              className="text-zinc-300 max-w-md animate-fadeUp delay-700"
            >
              {slides[active].desc}
            </p>

          </div>

          {/* FORM */}
          <div
            data-builder-block="booking_form"
            className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#CD9A31]/60 via-[#f1c55e]/30 to-transparent shadow-[0_0_70px_rgba(205,154,49,0.2)] animate-float"
          >
            <div className="bg-black/60 backdrop-blur-2xl rounded-2xl p-6 space-y-3 border border-white/5">

              <h3
                data-builder-text="form_title"
                className="text-xl font-semibold bg-gradient-to-r from-[#CD9A31] via-[#f1c55e] to-[#CD9A31] bg-clip-text text-transparent"
              >
                Book Your Ride
              </h3>

              <input data-builder-text="pickup" placeholder="Pickup Location" className="w-full bg-black/70 border border-[#CD9A31]/20 px-4 py-2 rounded-md text-white"/>
              <input data-builder-text="dropoff" placeholder="Drop-off Location" className="w-full bg-black/70 border border-[#CD9A31]/20 px-4 py-2 rounded-md text-white"/>

              <div className="grid grid-cols-2 gap-2">
                <input type="date" data-builder-text="date" className="bg-black/70 border border-[#CD9A31]/20 px-4 py-2 rounded-md text-white"/>
                <input type="time" data-builder-text="time" className="bg-black/70 border border-[#CD9A31]/20 px-4 py-2 rounded-md text-white"/>
              </div>

              <input type="number" data-builder-text="passengers" placeholder="Passengers" className="w-full bg-black/70 border border-[#CD9A31]/20 px-4 py-2 rounded-md text-white"/>

              <button
                data-builder-text="submit_btn"
                className="relative w-full mt-3 py-2 rounded-md overflow-hidden font-semibold text-black bg-gradient-to-r from-[#CD9A31] via-[#f1c55e] to-[#CD9A31]"
              >
                CHECK PRICE
                <span className="absolute inset-0 animate-shimmer opacity-30"></span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
