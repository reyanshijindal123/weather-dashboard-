import WeatherCardClient from "@/components/WeatherCardClient";
import { getForecast } from "@/lib/weather";
import { Suspense } from "react";
import Forecast7Days from "@/components/Forecast7Days";
import WeatherSkeleton from "@/components/WeatherSkeleton";

interface WeatherPageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function WeatherPage({ params }: WeatherPageProps) {
  const { city } = await params;

  const weather = await getForecast(city);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 p-6">
      <div className="mx-auto max-w-4xl">
        <WeatherCardClient weather={weather} />
        <Suspense fallback={<WeatherSkeleton />}>
          <Forecast7Days city={city} />
        </Suspense>
      </div>
    </main>
  );
}
