"use client";

import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Baby,
  CheckCircle,
  Star,
  Phone,
  Mail
} from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Airport transfer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-24">
        
        {/* TEXT (SIN ANIMACIÓN) */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <p className="text-[#CD9A31] tracking-[3px] text-xs sm:text-sm mb-4">
            {t("hero", "tagline")}
          </p>

         <h1 className="font-bold leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] bg-clip-text text-transparent">
  {t("hero", "title")}
  <br />
  {t("hero", "title_price")}
</h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            {t("hero", "subtitle")}
          </p>
        </div>

        {/* FORM (con animación suave) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#CD9A31]/30 bg-black/20 backdrop-blur-xl md:bg-[#111] md:backdrop-blur-none"
        >
          
          {/* CHILD SEATS */}
          <div className="mb-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-sm">
            
            <div className="flex items-center gap-2 mb-3 text-white tracking-widest text-[11px] uppercase">
              <Baby size={16} className="text-[#CD9A31]" />
              {t("hero", "child_seats_title")}
            </div>

            <div className="space-y-1 text-gray-200 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                {t("hero", "infant_seats")}
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                {t("hero", "toddler_seats")}
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" />
                {t("hero", "booster_seats")}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3 text-[#CD9A31] text-xs">
              <Star size={14} />
              {t("hero", "free_installation")}
            </div>
          </div>

          <h3 className="text-white text-xl mb-2 text-center">
            {t("hero", "book_transfer")}
          </h3>

          <p className="text-gray-400 text-sm text-center mb-6">
            {t("hero", "instant_confirmation")}
          </p>

          <div className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input icon={<MapPin size={18} />} placeholder={t("hero", "pickup_location")} />
              <Input icon={<MapPin size={18} />} placeholder={t("hero", "dropoff_location")} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input icon={<Calendar size={18} />} type="date" />
              <Input icon={<Clock size={18} />} type="time" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectPassengers t={t} />
              <SelectVehicle t={t} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input icon={<Users size={18} />} placeholder={t("hero", "full_name")} />
              <Input icon={<Phone size={18} />} placeholder={t("hero", "phone_number")} />
            </div>

            <Input icon={<Mail size={18} />} placeholder={t("hero", "email_address")} />

            <textarea
              placeholder={t("hero", "special_requests")}
              className="w-full bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl text-white outline-none"
            />

            <button
              className="w-full mt-4 py-3.5 rounded-xl text-black font-semibold text-base bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] hover:scale-[1.02] transition"
            >
              {t("hero", "book_now")}
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================= INPUT ================= */

function Input({ icon, ...props }: any) {
  return (
    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl">
      {icon}
      <input
        {...props}
        className="bg-transparent outline-none text-white w-full text-base"
      />
    </div>
  );
}


/* ================= PASSENGERS ================= */

function SelectPassengers({ t }: any) {
  return (
    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl">
      <Users size={18} />
      <select className="bg-transparent outline-none text-white w-full text-base">
        <option className="bg-black">{t("hero", "passenger_one")}</option>
        <option className="bg-black">{t("hero", "passenger_two")}</option>
        <option className="bg-black">{t("hero", "passenger_three")}</option>
        <option className="bg-black">{t("hero", "passenger_four")}</option>
        <option className="bg-black">{t("hero", "passenger_five")}</option>
        <option className="bg-black">{t("hero", "passenger_six")}</option>
        <option className="bg-black">{t("hero", "passenger_seven")}</option>
      </select>
    </div>
  );
}


/* ================= VEHICLE ================= */

function SelectVehicle({ t }: any) {
  return (
    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl">
      <select className="bg-transparent outline-none text-white w-full text-base">
        <option className="bg-black">{t("hero", "vehicle_standard")}</option>
        <option className="bg-black">{t("hero", "vehicle_business")}</option>
        <option className="bg-black">{t("hero", "vehicle_van")}</option>
      </select>
    </div>
  );
}