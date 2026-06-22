import { WeatherData } from "@/types/weather";

export const getWeatherIcon = (
  condition: string
) => {
  const value = condition.toLowerCase();

  if (value.includes("clear")) return "☀️";
  if (value.includes("cloud")) return "☁️";
  if (value.includes("rain")) return "🌧️";
  if (value.includes("snow")) return "❄️";

  return "🌤️";
};

export const convertWeatherUnits = (
  weather: WeatherData,
  unit: "C" | "F"
): WeatherData => {
  return {
    ...weather,
    temperature:
      unit === "F"
        ? (weather.temperature * 9) / 5 + 32
        : weather.temperature,

    feelsLike:
      unit === "F"
        ? (weather.feelsLike * 9) / 5 + 32
        : weather.feelsLike,
  };
};

export const transformWeatherData = (
  data: any
): WeatherData => {
  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    feelsLike: data.main.feels_like,
    icon: data.weather[0].icon,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    pressure: data.main.pressure,
    visibility: data.visibility / 1000,
  };
};