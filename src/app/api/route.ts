import { NextResponse } from "next/server";
import { BOOKS, GENRES } from "@/store/useAppStore";

export async function GET() {
  return NextResponse.json({
    books: BOOKS.map((book) => ({
      id: book.id,
      title: book.title,
      author: book.author,
      coverImage: book.coverImage,
      genres: book.genres,
      excerpt: book.excerpt,
      chapterCount: book.chapters.length,
    })),
    genres: GENRES,
  });
}
