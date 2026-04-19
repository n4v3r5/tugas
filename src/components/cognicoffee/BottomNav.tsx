"use client";

import { BookOpen, Home, User } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

export default function BottomNav() {
  const { currentPage, setPage } = useAppStore();

  const navItems = [
    { id: "home" as const, icon: BookOpen, label: "Library" },
    { id: "home" as const, icon: Home, label: "Home" },
    { id: "profile" as const, icon: User, label: "Profile" },
  ];

  const getIsActive = (id: string) => {
    if (id === "profile") return currentPage === "profile";
    if (id === "home") return currentPage === "home";
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-coffee-200 dark:border-coffee-800">
      <div className="max-w-md mx-auto flex items-center justify-around py-2 px-4">
        {navItems.map((item, index) => {
          const isActive = index === 1
            ? currentPage === "home"
            : index === 2
              ? currentPage === "profile"
              : currentPage === "home";
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => {
                if (index === 2) setPage("profile");
                else setPage("home");
              }}
              className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-coffee-800 dark:text-coffee-400"
                  : "text-coffee-400 dark:text-coffee-600 hover:text-coffee-600"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
