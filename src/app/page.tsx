"use client";

import { useAppStore } from "@/store/useAppStore";
import LandingPage from "@/components/cognicoffee/LandingPage";
import HomePage from "@/components/cognicoffee/HomePage";
import BookDetailPage from "@/components/cognicoffee/BookDetailPage";
import ReadingPage from "@/components/cognicoffee/ReadingPage";
import ProfilePage from "@/components/cognicoffee/ProfilePage";

export default function CogniCoffeeApp() {
  const { currentPage, isDarkMode } = useAppStore();

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />;
      case "home":
        return <HomePage />;
      case "book-detail":
        return <BookDetailPage />;
      case "reading":
        return <ReadingPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className={isDarkMode && currentPage === "reading" ? "dark" : ""}>
      {renderPage()}
    </div>
  );
}
