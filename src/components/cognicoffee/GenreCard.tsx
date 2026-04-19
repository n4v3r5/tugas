"use client";

import Image from "next/image";
import type { Genre } from "@/store/useAppStore";

interface GenreCardProps {
  genre: Genre;
}

export default function GenreCard({ genre }: GenreCardProps) {
  return (
    <div className="relative w-40 h-52 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-2 border-coffee-300 dark:border-coffee-700 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
      <Image
        src={genre.image}
        alt={genre.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="160px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-bold text-lg italic drop-shadow-lg">
          {genre.name}
        </p>
      </div>
    </div>
  );
}
