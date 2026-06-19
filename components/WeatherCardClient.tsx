"use client";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
import UnitToggle from "./UnitToggle";
import { WeatherData } from "@/types/weather";

interface Props {
  weather: WeatherData;
}

export default function WeatherCardClient({ weather }: Props) {
  const [unit, setUnit] = useState<"C" | "F">("C");

  const convertedWeather = {
    ...weather,

    temperature:
      unit === "F" ? (weather.temperature * 9) / 5 + 32 : weather.temperature,

    feelsLike:
      unit === "F" ? (weather.feelsLike * 9) / 5 + 32 : weather.feelsLike,
  };

  return (
    <>
      <div className="mb-4 flex justify-end">
        <UnitToggle unit={unit} setUnit={setUnit} />
      </div>

      <WeatherCard weather={convertedWeather} />
    </>
  );
}
