import { WeatherData } from "@/types/weather";
import {getDailyForecast,} from "@/app/helpers/weather-helper";
import { transformWeatherData } from "@/app/helpers/weather-helper";
export async function getWeather(
  city: string
): Promise<WeatherData> {
  const apiKey =
    process.env.OPENWEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch weather"
    );
  }

  const data = await response.json();

  return transformWeatherData(data);
}

export async function getHourlyForecast(
  city: string
) {
  const apiKey =
    process.env.OPENWEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch hourly forecast"
    );
  }

  const data = await response.json();

  return data.list.slice(0, 8);
}

export async function getForecast(
  city: string
) {
  const apiKey =
    process.env.OPENWEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch forecast"
    );
  }

  const data = await response.json();

  return getDailyForecast(data.list);
}