"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 px-4 py-2 text-white hover:bg-white/30 transition-all duration-300">
    
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
