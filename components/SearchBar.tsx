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
    <div className="rounded-3xl bg-white/20 p-6 backdrop-blur-lg shadow-xl">
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
        className="w-full rounded-xl bg-white p-4 text-black outline-none"
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
