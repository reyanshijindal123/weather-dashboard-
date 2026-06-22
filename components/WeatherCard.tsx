import { WeatherData } from "@/types/weather";
import FavouriteButton from "./FavouriteButton";
import { getWeatherIcon } from "@/app/helpers/weather-helper";
import { formatTime } from "@/app/helpers/date-helper";
import { formatVisibility } from "@/app/helpers/date-helper";
import Image from "next/image";
interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({
  weather,
}: WeatherCardProps) {
  const condition =
    weather.description.toLowerCase();

  return (
    <div className="mt-8 rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 text-white hover:scale-[1.02] transition-all duration-300">
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <div>
          <p className="text-lg opacity-80">
            📍 {weather.city}
          </p>

          <h1 className="mt-4 text-8xl font-light">
            {Math.round(weather.temperature)}°
          </h1>

          <p className="mt-2 text-2xl capitalize">
            {weather.description}
          </p>

          <p className="mt-3 text-lg opacity-80">
            Feels like {Math.round(weather.feelsLike)}°
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          
          {/* Glow Effect */}
          <div className="absolute h-40 w-40 rounded-full bg-white/20 blur-3xl" />

          {/* Emoji */}
          <div className="relative z-10 text-6xl mb-2">
            {getWeatherIcon(condition)}
          </div>

          {/* Weather Icon */}
          <Image
  src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
  alt={weather.description}
  width={160}
  height={160}
/>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Humidity
          </p>

          <p className="mt-2 text-2xl font-bold">
            {weather.humidity}%
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Wind
          </p>

          <p className="mt-2 text-2xl font-bold">
            {weather.windSpeed} m/s
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Feels Like
          </p>

          <p className="mt-2 text-2xl font-bold">
            {Math.round(weather.feelsLike)}°
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Sunrise
          </p>

          <p className="mt-2 text-lg font-bold">
            {formatTime(weather.sunrise)}
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Sunset
          </p>

          <p className="mt-2 text-lg font-bold">
            {formatTime(weather.sunset)}
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Pressure
          </p>

          <p className="mt-2 text-lg font-bold">
            {weather.pressure} hPa
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="opacity-70">
            Visibility
          </p>

          <p className="mt-2 text-lg font-bold">
            {formatVisibility(weather.visibility)}
          </p>
        </div>

      </div>

      <div className="mt-8">
        <FavouriteButton city={weather.city} />
      </div>

    </div>
  );
}