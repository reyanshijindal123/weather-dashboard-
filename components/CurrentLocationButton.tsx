"use client";

import { useRouter } from "next/navigation";

export default function LocationButton() {
  const router = useRouter();

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`,
        );

        const data = await response.json();

        if (data.length > 0) {
          router.push(`/weather/${data[0].name}`);
        }
      },
      () => {
        alert("Unable to retrieve location");
      },
    );
  };

  return (
    <button
      onClick={handleLocation}
      className="rounded-xl bg-white px-4 py-2 text-black"
    >
      📍 My Location
    </button>
  );
}
