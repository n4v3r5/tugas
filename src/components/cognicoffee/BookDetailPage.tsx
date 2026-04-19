"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAppStore, BOOKS } from "@/store/useAppStore";
import Header from "./Header";

export default function BookDetailPage() {
  const { selectedBookId, setPage } = useAppStore();
  const book = BOOKS.find((b) => b.id === selectedBookId) || BOOKS[0];

  const handleRead = () => {
    setPage("reading");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        showBack
        showShare
        onBack={() => setPage("home")}
      />

      <main className="flex-1 pb-8 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4"
        >
          {/* Book Cover and Info */}
          <div className="flex gap-4 mt-4">
            <div className="relative w-32 h-48 flex-shrink-0 rounded-lg overflow-hidden shadow-xl border-2 border-coffee-300 dark:border-coffee-700">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <h1 className="text-xl font-bold text-coffee-800 dark:text-coffee-200 leading-tight">
                  {book.title}
                </h1>
                <p className="text-sm text-coffee-500 dark:text-coffee-400 mt-1">
                  Oleh {book.author}
                </p>
              </div>
              <button
                onClick={handleRead}
                className="self-start px-6 py-2.5 bg-coffee-700 hover:bg-coffee-800 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Read
              </button>
            </div>
          </div>

          {/* Genre Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {book.genres.map((genre) => (
              <span
                key={genre}
                className="px-3.5 py-1.5 bg-coffee-700 dark:bg-coffee-800 text-white text-xs font-semibold rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <div className="mt-6">
            <div className="w-full h-px bg-coffee-300 dark:bg-coffee-700 mb-4" />
            <div className="text-sm text-coffee-900 dark:text-coffee-200 leading-relaxed whitespace-pre-line font-serif">
              {book.excerpt}
            </div>
            <div className="w-full h-px bg-coffee-300 dark:bg-coffee-700 mt-4" />
          </div>

          {/* Continue Reading Button */}
          <button
            onClick={handleRead}
            className="w-full mt-5 py-3.5 bg-coffee-700 hover:bg-coffee-800 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Continue Reading
          </button>
        </motion.div>
      </main>
    </div>
  );
}
