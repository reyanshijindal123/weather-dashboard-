"use client";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
import UnitToggle from "./UnitToggle";
import { WeatherData } from "@/types/weather";
import { convertWeatherUnits } from "@/app/helpers/weather-helper";

interface Props {
  weather: WeatherData;
}

export default function WeatherCardClient({ weather }: Props) {
  const [unit, setUnit] = useState<"C" | "F">("C");

const convertedWeather = convertWeatherUnits(weather,unit);
  return (
    <>
      <div className="mb-4 flex justify-end">
        <UnitToggle unit={unit} setUnit={setUnit} />
      </div>

      <WeatherCard weather={convertedWeather} />
    </>
  );
}
