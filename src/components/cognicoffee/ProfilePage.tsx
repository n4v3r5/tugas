"use client";

import { motion } from "framer-motion";
import { Settings, ArrowLeft } from "lucide-react";
import { useAppStore, BOOKS } from "@/store/useAppStore";
import Image from "next/image";

export default function ProfilePage() {
  const { userName, readingProgress, points, setPage } = useAppStore();

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Book collage background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="grid grid-cols-3 gap-1 p-2">
          {BOOKS.concat(BOOKS).map((book, i) => (
            <div
              key={i}
              className="relative aspect-[2/3] rounded overflow-hidden"
            >
              <Image
                src={book.coverImage}
                alt=""
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Coffee stain */}
      <div className="coffee-stain w-40 h-40 bottom-10 right-[-30px] rotate-45" />

      {/* Settings icon */}
      <div className="absolute top-4 right-4 z-10">
        <button className="p-2 rounded-full bg-coffee-100/80 dark:bg-coffee-800/80 hover:bg-coffee-200 dark:hover:bg-coffee-700 transition-colors">
          <Settings className="w-5 h-5 text-coffee-700 dark:text-coffee-300" />
        </button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xs"
        >
          {/* Title */}
          <h1 className="text-2xl font-bold text-coffee-800 dark:text-coffee-200 text-center mb-6">
            Your Profile
          </h1>

          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-28 h-28 rounded-full bg-rose-100 dark:bg-coffee-700 flex items-center justify-center shadow-lg border-3 border-coffee-300 dark:border-coffee-600">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {/* Simple female avatar illustration */}
                <circle cx="50" cy="38" r="18" fill="#D4A574" />
                <ellipse cx="50" cy="90" rx="28" ry="22" fill="#FFB6C1" />
                <path
                  d="M32 35 Q35 15 50 12 Q65 15 68 35 Q68 50 50 55 Q32 50 32 35Z"
                  fill="#5D4037"
                />
                <circle cx="43" cy="38" r="2" fill="#3E2723" />
                <circle cx="57" cy="38" r="2" fill="#3E2723" />
                <path
                  d="M46 44 Q50 47 54 44"
                  fill="none"
                  stroke="#3E2723"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M30 55 Q25 70 30 90"
                  fill="#5D4037"
                />
                <path
                  d="M70 55 Q75 70 70 90"
                  fill="#5D4037"
                />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl font-bold text-coffee-800 dark:text-coffee-200 text-center mb-8">
            {userName.toUpperCase()}
          </h2>

          {/* Reading Progress */}
          <div className="mb-5">
            <h3 className="text-xs font-bold text-coffee-800 dark:text-coffee-200 mb-2 tracking-wider">
              READING PROGRESS
            </h3>
            <div className="relative h-8 bg-coffee-200 dark:bg-coffee-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${readingProgress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-coffee-700 dark:bg-coffee-500 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow">
                  {readingProgress}%
                </span>
              </div>
            </div>
          </div>

          {/* Points */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-coffee-800 dark:text-coffee-200 mb-2 tracking-wider">
              POINTS
            </h3>
            <div className="relative h-8 bg-coffee-200 dark:bg-coffee-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, points / 5)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-coffee-700 dark:bg-coffee-500 rounded-full flex items-center justify-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow">
                  ☕ {points} pts
                </span>
              </div>
            </div>
          </div>

          {/* Back to home button */}
          <button
            onClick={() => setPage("home")}
            className="w-full py-3.5 bg-coffee-700 hover:bg-coffee-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        </motion.div>
      </main>
    </div>
  );
}
