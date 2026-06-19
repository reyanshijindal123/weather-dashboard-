import { WeatherData } from "@/types/weather";
import FavouriteButton from "./FavouriteButton";

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div
      className="
    mt-8
    rounded-3xl
    bg-white/15
    border
    border-white/20
    backdrop-blur-xl
    p-8
    text-white
    shadow-2xl
    "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">{weather.city}</h2>

          <p className="mt-4 text-7xl font-light">
            {Math.round(weather.temperature)}°
          </p>

          <p className="mt-2 text-xl capitalize">{weather.description}</p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          alt={weather.description}
          className="h-32 w-32"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm opacity-70">Humidity</p>

          <p className="text-lg">{weather.humidity}%</p>
        </div>

        <div>
          <p className="text-sm opacity-70">Wind</p>

          <p className="text-lg">{weather.windSpeed} m/s</p>
        </div>

        <div>
          <p className="text-sm opacity-70">Feels Like</p>

          <p className="text-lg">{Math.round(weather.feelsLike)}°</p>
        </div>
      </div>

      <div className="mt-6">
        <FavouriteButton city={weather.city} />
      </div>
    </div>
  );
}
