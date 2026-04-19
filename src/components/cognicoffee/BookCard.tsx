"use client";

import Image from "next/image";
import { useAppStore, type Book } from "@/store/useAppStore";

interface BookCardProps {
  book: Book;
  size?: "sm" | "md" | "lg";
}

export default function BookCard({ book, size = "md" }: BookCardProps) {
  const { selectBook } = useAppStore();

  const sizeClasses = {
    sm: "w-24 h-36",
    md: "w-32 h-48",
    lg: "w-40 h-60",
  };

  return (
    <button
      onClick={() => selectBook(book.id)}
      className={`group relative ${sizeClasses[size]} flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-coffee-300 dark:border-coffee-700`}
    >
      <Image
        src={book.coverImage}
        alt={book.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 128px, 160px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <p className="text-white text-xs font-bold leading-tight line-clamp-2 drop-shadow-lg">
          {book.title}
        </p>
        <p className="text-white/80 text-[10px] mt-0.5">{book.author}</p>
      </div>
    </button>
  );
}
