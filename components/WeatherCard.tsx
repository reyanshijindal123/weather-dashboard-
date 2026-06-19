import { WeatherData } from "@/types/weather";
import FavouriteButton from "./FavouriteButton";

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({
  weather,
}: WeatherCardProps) {
  return (
    <div
      className="
      mt-8
      rounded-[40px]
      bg-white/15
      backdrop-blur-xl
      border
      border-white/20
      shadow-2xl
      p-8
      text-white
      hover:scale-[1.02]
      transition-all
      duration-300
      "
    >
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

        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt={weather.description}
          className="h-48 w-48"
        />
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4">
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
            {weather.windSpeed}
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
      </div>

      <div className="mt-8">
        <FavouriteButton
          city={weather.city}
        />
      </div>
    </div>
  );
}