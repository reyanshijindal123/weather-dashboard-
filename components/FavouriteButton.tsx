"use client";
import { useState } from "react";
import { saveFavorite, removeFavorite } from "@/lib/favorite";
import {Heart} from "lucide-react"
interface Props {
  city: string;
}
export default function FavouriteButton({ city }: Props){
 
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
      className="rounded-xl bg-white/10 backdrop-blur-lg border-white/20 p-3 hover:bg-white/20 transition-all"
    >
<Heart
className ={`h-5 w-5 ${
  isFavourite
  ? "fill-red-500 text-red-500"
  : "text-white"
}`}
/>
</button>
 )
}
