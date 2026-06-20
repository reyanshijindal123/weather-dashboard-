import { WeatherData } from "@/types/weather";

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
  console.log(data)
  

  return {
    city: data.name,
    temperature: data.main.temp,
    description:data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    feelsLike:data.main.feels_like,
    icon: data.weather[0].icon,
  };
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

  console.log(data)

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

  const dailyData =
    data.list.filter(
      (item: {
        dt_txt: string;
      }) =>
        item.dt_txt.includes(
          "12:00:00"
        )
    );

  return dailyData.slice(0, 5);
}