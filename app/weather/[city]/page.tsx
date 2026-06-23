import WeatherCardClient from "@/components/WeatherCardClient";
import { getWeather } from "@/lib/weather";
import { Suspense } from "react";
import WeatherSkeleton from "@/components/WeatherSkeleton";
import RecentSearches from "@/components/RecentSearch";
import { getHourlyForecast } from "@/lib/weather";
export default async function WeatherPage({
  params,
}: {
  params: Promise<{
    city: string;
  }>;
}) {
  const { city } = await params;

  const weather = await getWeather(city);

  const hourlyForecast= await getHourlyForecast(city);
  const graphData = hourlyForecast?.list?.slice(0, 8).map((item: any) => ({
  time: new Date(item.dt * 1000).getHours(),
  temp: Math.round(item.main.temp),
}));

  

  const weatherDescription =
    weather.description.toLowerCase();

  const bgClass = weatherDescription.includes("rain")
    ? "from-slate-700 via-slate-600 to-blue-900"
    : weatherDescription.includes("cloud")
    ? "from-gray-500 via-slate-400 to-slate-700"
    : weatherDescription.includes("clear")
    ? "from-sky-400 via-cyan-400 to-blue-600"
    : "from-blue-500 via-sky-400 to-cyan-300";

  return (
    <main
      className={`
        relative
        overflow-hidden
        min-h-screen
        bg-gradient-to-br
        ${bgClass}
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-800
        p-6
      `}
    >
      {/* Rain Effect */}
      {weatherDescription.includes("rain") && (
        <div className="absolute inset-0 animate-pulse bg-white/5" />
      )}

      {/* Cloud Effect */}
      {weatherDescription.includes("cloud") && (
        <div className="absolute top-10 left-20 text-8xl opacity-20 animate-bounce">
          ☁️
        </div>
      )}

      {/* Sunny Effect */}
      {weatherDescription.includes("clear") && (
        <div className="absolute top-10 right-10 text-8xl opacity-20 animate-pulse">
          ☀️
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl">
        <WeatherCardClient
          weather={weather}
        />
       

        <RecentSearches />

        
        <Suspense
          fallback={<WeatherSkeleton />}
        >
          
        </Suspense>
      </div>
    </main>
  );
}