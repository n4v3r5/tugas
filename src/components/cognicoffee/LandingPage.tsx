"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

export default function LandingPage() {
  const { setPage, setOnboarded } = useAppStore();

  const handleGetStarted = () => {
    setOnboarded(true);
    setPage("home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-rose-50 via-coffee-50 to-coffee-100 dark:from-coffee-900 dark:via-coffee-900 dark:to-coffee-800">
      {/* Coffee stain decorations */}
      <div className="coffee-stain w-64 h-64 top-[-50px] right-[-80px] rotate-12" />
      <div className="coffee-stain w-48 h-48 bottom-20 left-[-60px] -rotate-45" />
      <div className="coffee-stain w-32 h-32 top-1/3 right-[-20px] rotate-90" />

      {/* COFFEE text watermark */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-[80px] font-black text-coffee-800 tracking-widest"
            style={{
              top: `${i * 8}%`,
              left: i % 2 === 0 ? "5%" : "30%",
              transform: `rotate(${-5 + i * 2}deg)`,
            }}
          >
            COFFEE
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center px-6 z-10"
      >
        {/* Logo */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-mint-500 drop-shadow-sm">COGNITIVE</span>
            <br />
            <span className="text-mint-500 drop-shadow-sm">COFFEE</span>
          </h1>
        </div>

        {/* Illustration: Coffee cup with books */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 relative">
            {/* Coffee cup illustration */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Cup */}
              <rect x="50" y="70" width="80" height="90" rx="8" fill="#D4B896" stroke="#8B6040" strokeWidth="2" />
              <rect x="55" y="75" width="70" height="30" rx="4" fill="#A07850" opacity="0.6" />
              {/* Ice cubes */}
              <rect x="65" y="80" width="12" height="12" rx="2" fill="#fff" opacity="0.7" transform="rotate(15, 71, 86)" />
              <rect x="85" y="82" width="10" height="10" rx="2" fill="#fff" opacity="0.6" transform="rotate(-10, 90, 87)" />
              <rect x="98" y="78" width="11" height="11" rx="2" fill="#fff" opacity="0.65" transform="rotate(5, 103, 83)" />
              {/* Coffee liquid */}
              <rect x="55" y="92" width="70" height="60" rx="4" fill="#8B6040" opacity="0.5" />
              {/* Straw */}
              <rect x="100" y="40" width="4" height="70" rx="2" fill="#E74C3C" transform="rotate(10, 102, 75)" />
              {/* Cup lid */}
              <rect x="45" y="65" width="90" height="10" rx="5" fill="#E8D5BE" stroke="#8B6040" strokeWidth="1.5" />
              {/* Books stack */}
              <rect x="20" y="140" width="35" height="8" rx="2" fill="#3498DB" stroke="#2980B9" strokeWidth="1" />
              <rect x="22" y="132" width="35" height="8" rx="2" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
              <rect x="18" y="124" width="38" height="8" rx="2" fill="#F1C40F" stroke="#F39C12" strokeWidth="1" />
              {/* Open book right */}
              <ellipse cx="155" cy="155" rx="25" ry="5" fill="#3498DB" opacity="0.8" />
              <path d="M130 155 Q142 130 155 155 Q168 130 180 155" fill="#F5EFE0" stroke="#8B6040" strokeWidth="1.5" />
              <line x1="155" y1="130" x2="155" y2="155" stroke="#8B6040" strokeWidth="1" />
              {/* Coffee beans */}
              <ellipse cx="38" cy="108" rx="8" ry="5" fill="#5D4037" transform="rotate(-30, 38, 108)" />
              <line x1="35" y1="106" x2="41" y2="110" stroke="#3E2723" strokeWidth="1" />
              <ellipse cx="150" cy="118" rx="7" ry="4.5" fill="#5D4037" transform="rotate(20, 150, 118)" />
              <line x1="147" y1="116" x2="153" y2="120" stroke="#3E2723" strokeWidth="1" />
              <ellipse cx="165" cy="138" rx="6" ry="4" fill="#6D4C30" transform="rotate(-15, 165, 138)" />
              <line x1="162" y1="136" x2="168" y2="140" stroke="#3E2723" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>

        {/* Welcome text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm uppercase tracking-widest text-coffee-500 dark:text-coffee-400 mb-2">
            WELCOME TO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-coffee-800 dark:text-coffee-200">Cogni</span>
            <span className="text-coffee-600 dark:text-coffee-400">Coffee</span>
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col gap-3 w-full max-w-xs"
        >
          <button
            onClick={handleGetStarted}
            className="w-full py-3.5 px-6 bg-coffee-700 hover:bg-coffee-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Get Started
          </button>
          <button
            onClick={handleGetStarted}
            className="w-full py-3.5 px-6 bg-coffee-800 hover:bg-coffee-900 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Create your account
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
