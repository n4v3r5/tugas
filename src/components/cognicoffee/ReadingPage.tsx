"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Menu,
  Pencil,
  Sun,
  Moon,
  Bookmark,
} from "lucide-react";
import { useAppStore, BOOKS } from "@/store/useAppStore";

export default function ReadingPage() {
  const { selectedBookId, selectedChapter, isDarkMode, toggleDarkMode, setPage, updateProgress, selectChapter } = useAppStore();
  const book = BOOKS.find((b) => b.id === selectedBookId) || BOOKS[0];
  const chapter = book.chapters[selectedChapter] || book.chapters[0];
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBack = () => {
    setPage("book-detail");
    updateProgress(Math.min(100, 35 + selectedChapter * 15));
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-coffee-200 dark:border-coffee-800">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-1.5 -ml-1.5 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-coffee-800 dark:text-coffee-300" />
            </button>
            <div>
              <h1 className="text-sm font-bold text-coffee-800 dark:text-coffee-200">
                {chapter.title}
              </h1>
              <p className="text-[10px] text-coffee-500 dark:text-coffee-400">
                {book.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 max-w-md mx-auto w-full px-5 py-6"
      >
        <div className="text-base text-coffee-900 dark:text-coffee-100 leading-[1.9] whitespace-pre-line font-serif">
          {chapter.content}
        </div>

        {/* Chapter navigation */}
        {book.chapters.length > 1 && (
          <div className="flex gap-3 mt-8 mb-20">
            {selectedChapter > 0 && (
              <button
                onClick={() => selectChapter(selectedChapter - 1)}
                className="flex-1 py-3 bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 font-semibold rounded-xl transition-all hover:bg-coffee-200 dark:hover:bg-coffee-700"
              >
                ← Previous
              </button>
            )}
            {selectedChapter < book.chapters.length - 1 && (
              <button
                onClick={() => selectChapter(selectedChapter + 1)}
                className="flex-1 py-3 bg-coffee-700 hover:bg-coffee-800 text-white font-semibold rounded-xl transition-all"
              >
                Next →
              </button>
            )}
          </div>
        )}
      </motion.div>

      {/* Bottom reading nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-coffee-200 dark:border-coffee-800">
        <div className="max-w-md mx-auto flex items-center justify-around py-3 px-6">
          <button className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors">
            <Menu className="w-5 h-5 text-coffee-700 dark:text-coffee-300" />
          </button>
          <button className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors">
            <Pencil className="w-5 h-5 text-coffee-700 dark:text-coffee-300" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-coffee-700 dark:text-coffee-300" />
            )}
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
          >
            <Bookmark
              className={`w-5 h-5 transition-colors ${
                isBookmarked
                  ? "fill-coffee-700 text-coffee-700 dark:fill-coffee-400 dark:text-coffee-400"
                  : "text-coffee-700 dark:text-coffee-300"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
