"use client";
import {MapPin} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CurrentLocationButton() {
  const router = useRouter();

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const apiKey =
            process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

          if (!apiKey) {
            alert("OpenWeather API Key not found");
            return;
          }

          const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
          );

          const data = await response.json();

          if (data.length > 0) {
            router.push(`/weather/${data[0].name}`);
          } else {
            alert("Location not found");
          }
        } catch (error) {
          console.error(error);
          alert("Something went wrong");
        }
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

 return (
  <button
    onClick={handleLocation}
    className="flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 px-4 py-2 text-white hover:bg-white/30 transition-all duration-300"
  >
    <MapPin className="h-4 w-4" />
    <span>Current Location</span>
  </button>
);
}