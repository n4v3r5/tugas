"use client";

import { ArrowLeft, Share2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showShare?: boolean;
  showSearch?: boolean;
  onBack?: () => void;
  tagline?: string;
}

export default function Header({
  title,
  showBack = false,
  showShare = false,
  showSearch = false,
  onBack,
  tagline,
}: HeaderProps) {
  const { setPage } = useAppStore();

  const handleBack = () => {
    if (onBack) onBack();
    else setPage("home");
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-coffee-200 dark:border-coffee-800">
      <div className="max-w-md mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={handleBack}
              className="p-1.5 -ml-1.5 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-coffee-800 dark:text-coffee-300" />
            </button>
          )}
          <div>
            {title && (
              <h1 className="text-lg font-bold text-coffee-800 dark:text-coffee-200">
                {title}
              </h1>
            )}
            {tagline && (
              <p className="text-xs text-coffee-500 dark:text-coffee-400">
                {tagline}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {showSearch && (
            <button className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors">
              <svg
                className="w-5 h-5 text-coffee-800 dark:text-coffee-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          )}
          {showShare && (
            <button className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors">
              <Share2 className="w-5 h-5 text-coffee-800 dark:text-coffee-300" />
            </button>
          )}
          {showSearch && (
            <button className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors">
              <div className="w-5 h-5 rounded-full bg-coffee-700 dark:bg-coffee-500 flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">☕</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
