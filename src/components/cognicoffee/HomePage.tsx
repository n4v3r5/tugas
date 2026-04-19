"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useAppStore, BOOKS, GENRES } from "@/store/useAppStore";
import Header from "./Header";
import BookCard from "./BookCard";
import GenreCard from "./GenreCard";
import BottomNav from "./BottomNav";

export default function HomePage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const continueRef = useRef<HTMLDivElement>(null);

  const continueReadingBooks = [BOOKS[0], BOOKS[4], BOOKS[5]];
  const newStoryBooks = [BOOKS[1], BOOKS[2], BOOKS[3], BOOKS[0]];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        title="CogniCoffee"
        tagline="Read your book, claim your coffee"
        showSearch
      />

      <main className="flex-1 pb-20 max-w-md mx-auto w-full">
        {/* READ YOUR STORY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-lg font-bold text-coffee-800 dark:text-coffee-200 px-4 mb-3">
            READ YOUR STORY
          </h2>
          <div
            ref={storyRef}
            className="flex gap-3 px-4 overflow-x-auto no-scrollbar"
          >
            {newStoryBooks.map((book) => (
              <BookCard key={book.id} book={book} size="md" />
            ))}
          </div>
          {/* Navigation dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            <div className="w-2 h-2 rounded-full bg-coffee-400" />
            <div className="w-2 h-2 rounded-full bg-coffee-200 dark:bg-coffee-700" />
            <div className="w-2 h-2 rounded-full bg-coffee-200 dark:bg-coffee-700" />
          </div>
        </motion.section>

        {/* GENRE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <h2 className="text-lg font-bold text-coffee-800 dark:text-coffee-200 px-4 mb-3">
            GENRE
          </h2>
          <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
            {GENRES.map((genre) => (
              <GenreCard key={genre.id} genre={genre} />
            ))}
          </div>
        </motion.section>

        {/* CONTINUE READING */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-lg font-bold text-coffee-800 dark:text-coffee-200 px-4 mb-3">
            CONTINUE READING
          </h2>
          <div
            ref={continueRef}
            className="flex gap-3 px-4 overflow-x-auto no-scrollbar"
          >
            {continueReadingBooks.map((book) => (
              <BookCard key={book.id} book={book} size="md" />
            ))}
          </div>
        </motion.section>

        {/* Popular this week */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 mb-4"
        >
          <h2 className="text-lg font-bold text-coffee-800 dark:text-coffee-200 px-4 mb-3">
            POPULAR THIS WEEK
          </h2>
          <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
            {BOOKS.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} size="sm" />
            ))}
          </div>
        </motion.section>
      </main>

      <BottomNav />
    </div>
  );
}
