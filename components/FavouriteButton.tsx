"use client";
import { useState } from "react";
import { saveFavorite, removeFavorite } from "@/lib/favourite";
interface Props {
  city: string;
}
export default function FavouriteButton({ city }: Props)
 {
  const [isFavourite, setisFavourite] = useState(false);

  const handleClick = () => {
    try {

    
    if (isFavourite) {
      removeFavorite(city);
    } else {
      saveFavorite(city);
    }
    setisFavourite(!isFavourite);
  }catch (error) {
    console.error(error);
  }
};
 return (
    <button
      onClick={handleClick}
      className="rounded-xl bg-red-500 px-4 py-2 text-white"
    >
      {isFavourite ? "❤️ Saved" : "🤍 Add to Favourites"}
    </button>
  );
}
