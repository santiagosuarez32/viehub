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
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { t } = useI18n();

  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "",
    vehicle: "",
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleCloseSuccess = () => {
    setSuccess(false);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePassengersChange = (value: string) => {
    setForm(prev => {
      const next = { ...prev, passengers: value };
      const count = Number(value);
      if (!Number.isNaN(count) && count >= 7) {
        next.vehicle = "van";
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.pickup || !form.dropoff || !form.name || !form.phone || !form.date || !form.time || !form.passengers || !form.vehicle) {
      setError(t("hero", "validation_required"));
      return;
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(t("hero", "validation_email"));
      return;
    }

    setLoading(true);

    try {
      const passengerKeyMap: Record<string, string> = {
        "1": "passenger_one",
        "2": "passenger_two",
        "3": "passenger_three",
        "4": "passenger_four",
        "5": "passenger_five",
        "6": "passenger_six",
        "7": "passenger_seven",
      };

      const payload = {
        ...form,
        passengers: t("hero", passengerKeyMap[form.passengers] || "passenger_one"),
        vehicle: t("hero", `vehicle_${form.vehicle}`),
      };

      const response = await fetch(
        "https://codewweb.app.n8n.cloud/webhook/reserva",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      setSuccess(true);

      setForm({
        pickup: "",
        dropoff: "",
        date: "",
        time: "",
        passengers: "",
        vehicle: "",
        name: "",
        phone: "",
        email: "",
        notes: ""
      });

    } catch (err) {
      setError("Error sending reservation.");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0">
        {/* Desktop image */}
        <Image
          src="/hero.webp"
          alt="Airport transfer"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden md:block"
        />
        {/* Mobile image */}
        <Image
          src="/hero-mobile.png"
          alt="Airport transfer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:hidden"
          style={{ objectPosition: "center -40%" }}
        />
        {/* Gradiente más claro en mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 md:py-24">

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
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#CD9A31]/30 bg-black/20 md:bg-[#111] md:backdrop-blur-none"
        >

          {/* CHILD SEATS */}
          <div className="mb-6 bg-white/10 border border-white/20 rounded-xl p-4 text-sm">

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
              <AddressAutocomplete
                icon={<MapPin size={18} />}
                placeholder={t("hero", "pickup_location")}
                value={form.pickup}
                onChange={(value: string) => handleChange("pickup", value)}
                required
              />
              <AddressAutocomplete
                icon={<MapPin size={18} />}
                placeholder={t("hero", "dropoff_location")}
                value={form.dropoff}
                onChange={(value: string) => handleChange("dropoff", value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                icon={<Calendar size={18} />}
                type="date"
                value={form.date}
                onChange={(e: any) => handleChange("date", e.target.value)}
                required
              />
              <Input
                icon={<Clock size={18} />}
                type="time"
                value={form.time}
                onChange={(e: any) => handleChange("time", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectPassengers
                t={t}
                value={form.passengers}
                onChange={handlePassengersChange}
                required
              />
              <SelectVehicle
                t={t}
                value={form.vehicle}
                onChange={(value: string) => handleChange("vehicle", value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                icon={<Users size={18} />}
                placeholder={t("hero", "full_name")}
                value={form.name}
                onChange={(e: any) => handleChange("name", e.target.value)}
                required
              />
              <Input
                icon={<Phone size={18} />}
                type="tel"
                inputMode="tel"
                placeholder={t("hero", "phone_number")}
                value={form.phone}
                onChange={(e: any) => handleChange("phone", e.target.value)}
                required
              />
            </div>

            <Input
              icon={<Mail size={18} />}
              type="email"
              placeholder={t("hero", "email_address")}
              value={form.email}
              onChange={(e: any) => handleChange("email", e.target.value)}
            />

            <textarea
              value={form.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              placeholder={t("hero", "special_requests")}
              className="w-full bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl text-white outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3.5 rounded-xl text-black font-semibold text-base bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] hover:scale-[1.02] transition disabled:opacity-50"
            >
              {loading ? "Sending..." : t("hero", "book_now")}
            </button>

            {error && (
              <p className="text-red-400 text-center mt-4">
                {error}
              </p>
            )}

          </div>
        </motion.form>
      </div>

      {success && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseSuccess}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-[#CD9A31]/40 bg-[#111] p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400">
              ✓
            </div>
            <h4 className="text-white text-xl mb-2">
              {t("hero", "reservation_success_title")}
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              {t("hero", "reservation_success_message")}
            </p>
            <button
              type="button"
              onClick={handleCloseSuccess}
              className="w-full py-3 rounded-xl text-black font-semibold bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] hover:scale-[1.02] transition"
            >
              {t("hero", "reservation_success_button")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

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

function AddressAutocomplete({ icon, placeholder, value, onChange, required }: any) {
  const [query, setQuery] = useState(value || "");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setQuery(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }

      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&countrycodes=at,de,it,ch,fr,es,pt,nl,be,lu,dk,se,no,fi,pl,cz,sk,hu,ro,bg,gr,hr,si,ee,lv,lt,ie,mt&q=${encodeURIComponent(query)}`,
          {
            signal: controller.signal,
            headers: {
              "Accept-Language": "en"
            }
          }
        );
        if (!response.ok) {
          setSuggestions([]);
          return;
        }
        const data = await response.json();
        setSuggestions(Array.isArray(data) ? data : []);
        setOpen(true);
      } catch (err) {
        if ((err as any)?.name !== "AbortError") {
          setSuggestions([]);
        }
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (label: string) => {
    setQuery(label);
    onChange(label);
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setQuery(next);
    onChange(next);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex items-center gap-3 bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl">
        {icon}
        <input
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="bg-transparent outline-none text-white w-full text-base"
          autoComplete="off"
          onFocus={() => query.length >= 3 && setOpen(true)}
          required={required}
        />
      </div>

      {open && (suggestions.length > 0 || loading) && (
        <div className="absolute left-0 right-0 mt-2 rounded-xl border border-[#CD9A31]/20 bg-[#0e0e0e] shadow-xl z-20 overflow-hidden">
          {loading && (
            <div className="px-4 py-3 text-sm text-gray-400">Loading...</div>
          )}
          {!loading && (
            <div className="max-h-56 overflow-y-auto">
              {suggestions.map((item) => (
                <button
                  key={`${item.place_id}`}
                  type="button"
                  onClick={() => handleSelect(item.display_name)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition"
                >
                  {item.display_name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SelectPassengers({ t, value, onChange, required }: any) {
  return (
    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl">
      <Users size={18} />
      <select
        className="bg-transparent outline-none text-white w-full text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option className="bg-black" value="">
          {t("hero", "passenger_select")}
        </option>
        <option className="bg-black" value="1">
          {t("hero", "passenger_one")}
        </option>
        <option className="bg-black" value="2">
          {t("hero", "passenger_two")}
        </option>
        <option className="bg-black" value="3">
          {t("hero", "passenger_three")}
        </option>
        <option className="bg-black" value="4">
          {t("hero", "passenger_four")}
        </option>
        <option className="bg-black" value="5">
          {t("hero", "passenger_five")}
        </option>
        <option className="bg-black" value="6">
          {t("hero", "passenger_six")}
        </option>
        <option className="bg-black" value="7">
          {t("hero", "passenger_seven")}
        </option>
      </select>
    </div>
  );
}

function SelectVehicle({ t, value, onChange, required }: any) {
  return (
    <div className="flex items-center gap-3 bg-black/20 backdrop-blur-lg md:bg-black/50 border border-[#CD9A31]/20 px-4 py-3 rounded-xl">
      <select
        className="bg-transparent outline-none text-white w-full text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option className="bg-black" value="">
          {t("hero", "vehicle_select")}
        </option>
        <option className="bg-black" value="standard">
          {t("hero", "vehicle_standard")}
        </option>
        <option className="bg-black" value="business">
          {t("hero", "vehicle_business")}
        </option>
        <option className="bg-black" value="van">
          {t("hero", "vehicle_van")}
        </option>
      </select>
    </div>
  );
}