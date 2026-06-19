import WeatherCardClient from "@/components/WeatherCardClient";
import HourlyForecast from "@/components/HourlyForecast";
import {getWeather} from "@/lib/weather";
import { Suspense } from "react";
import Forecast7Days from "@/components/Forecast7Days";
import WeatherSkeleton from "@/components/WeatherSkeleton";
import RecentSearches from "@/components/RecentSearch";

export default async function WeatherPage({
  params,
}: {
  params: Promise<{
    city: string;
  }>;
}) {
  const{city} = await params;
  const weather= await getWeather(city);
  const bgClass =
  weather.description
    .toLowerCase()
    .includes("rain")
    ? "from-slate-700 via-slate-600 to-blue-900"
    : weather.description
        .toLowerCase()
        .includes("cloud")
    ? "from-gray-500 via-slate-400 to-slate-700"
    : weather.description
        .toLowerCase()
        .includes("clear")
    ? "from-sky-400 via-cyan-400 to-blue-600"
    : "from-blue-500 via-sky-400 to-cyan-300";
  return(
    <main
  className={`
  min-h-screen
  bg-gradient-to-br
  ${bgClass}
  dark:from-slate-950
  dark:via-slate-900
  dark:to-slate-800
  p-6
`}
>
      <div className="mx-auto max-w-4xl">
        <WeatherCardClient
        weather={weather}
        />
        <HourlyForecast
        city={city}/>

        <Suspense fallback ={
          <WeatherSkeleton/>
        }>
          <Forecast7Days city ={city}/>
        </Suspense>

      </div>
    </main>
  )
}