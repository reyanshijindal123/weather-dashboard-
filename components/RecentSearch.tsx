"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RecentSearches() {
  const [searches, setSearches] = useState<string[]>([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");

    setSearches(history);
  }, []);

  if (searches.length === 0) return null;

  return (
    <div
      className="
      mt-6
      rounded-3xl
      bg-white/15
      border
      border-white/20
      backdrop-blur-xl
      p-6
      text-white
    "
    >
      <h2 className="mb-4 text-xl font-bold">Recent Searches</h2>

      <div className="flex flex-wrap gap-2">
        {searches.map((city) => (
          <Link
            key={city}
            href={`/weather/${city}`}
            className="
                rounded-xl
                bg-white/20
                px-4
                py-2
              "
          >
            {city}
          </Link>
        ))}
      </div>
    </div>
  );
}
