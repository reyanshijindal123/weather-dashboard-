"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [city, setCity] = useState("");

  const router = useRouter();
  const handleSearch = () => {
    if (!city.trim()) return;

    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");

    const updatedHistory = [
      city,
      ...history.filter(
        (item: string) => item.toLowerCase() !== city.toLowerCase(),
      ),
    ].slice(0, 5);

    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));

    router.push(`/weather/${city}`);
  };

  return (
    <div className="rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-2xl">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full rounded-2xl bg-white/80 p-5 text-lg text-black outline-none"
      />

      <button
        onClick={handleSearch}
        className="mt-4 w-full rounded-xl bg-white p-3 font-semibold text-blue-600"
      >
        Search Weather 🔍
      </button>
    </div>
  );
}
