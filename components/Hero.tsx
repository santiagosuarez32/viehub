"use client";

import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      data-builder-block="hero_section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* BG */}
      <div
        data-builder-block="hero_background"
        className="absolute inset-0"
      >
        <img
          data-builder-image="hero_bg"
          src="/1.webp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div
        data-builder-block="hero_content"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-24"
      >

        {/* TEXT */}
        <motion.div
          data-builder-block="hero_text"
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-center lg:text-left w-full lg:w-1/2"
        >
          <p
            data-builder-text="hero_subtitle"
            className="text-[#CD9A31] tracking-[3px] text-xs sm:text-sm mb-4"
          >
            PRIVATE AIRPORT TRANSFERS
          </p>

          <h1
            data-builder-text="hero_title"
            className="font-bold text-white leading-tight mb-6
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl"
          >
            Premium Chauffeur
            <span className="text-[#CD9A31]"> Service</span>
          </h1>

          <p
            data-builder-text="hero_desc"
            className="text-gray-300 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
          >
            Book your executive airport transfer in seconds with real-time pricing.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          data-builder-block="hero_form"
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8, delay:0.2 }}
          className="bg-[#111]
          w-full
          max-w-lg
          p-6
          sm:p-8
          rounded-2xl
          shadow-2xl
          border border-[#CD9A31]/30"
        >

          <h3
            data-builder-text="form_title"
            className="text-white text-lg sm:text-xl mb-6"
          >
            Book Your Ride
          </h3>

          <div className="space-y-4">

            <Input
              icon={<MapPin size={18}/>}
              placeholder="Pickup Location"
            />

            <Input
              icon={<MapPin size={18}/>}
              placeholder="Dropoff Location"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input icon={<Calendar size={18}/>} type="date"/>
              <Input icon={<Clock size={18}/>} type="time"/>
            </div>

            <SelectPassengers />

            <button
              data-builder-text="hero_cta"
              className="w-full mt-4 py-3.5 rounded-xl bg-[#CD9A31] text-black font-semibold hover:opacity-90 transition text-base"
            >
              CHECK PRICE
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Input({ icon, ...props }: any) {
  return (
    <div
      data-builder-block
      className="flex items-center gap-3 bg-black border border-[#CD9A31]/20 px-4 py-3 rounded-xl"
    >
      {icon}
      <input
        data-builder-text
        {...props}
        className="bg-transparent outline-none text-white w-full text-base"
      />
    </div>
  );
}

function SelectPassengers() {
  return (
    <div
      data-builder-block
      className="flex items-center gap-3 bg-black border border-[#CD9A31]/20 px-4 py-3 rounded-xl"
    >
      <Users size={18}/>
      <select
        data-builder-text="passengers_select"
        className="bg-transparent outline-none text-white w-full text-base"
      >
        <option className="bg-black">Passengers</option>
        <option className="bg-black">1 Passenger</option>
        <option className="bg-black">2 Passengers</option>
        <option className="bg-black">3 Passengers</option>
        <option className="bg-black">4 Passengers</option>
        <option className="bg-black">5 Passengers</option>
        <option className="bg-black">6 Passengers</option>
        <option className="bg-black">7 Passengers</option>
      </select>
    </div>
  );
}