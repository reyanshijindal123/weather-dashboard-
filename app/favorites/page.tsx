"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function FavoritesPage() {
  const [favourites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);
  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-6 text=4xl font-bold">Favorite Cities ❤️</h1>
      <div className="space-y-4">
        {favourites.map((city) => (
          <Link
            key={city}
            href={`/Weather/${city}`}
            className="block rounded-xl bg-white/20 p-4"
          >
            {city}
          </Link>
        ))}
      </div>
    </main>
  );
}
