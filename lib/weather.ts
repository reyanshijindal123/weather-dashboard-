import { WeatherData } from "@/types/weather";
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

  const dailyData = data.list.filter(
    (item: { dt_txt: string }) =>
      item.dt_txt.includes("12:00:00")
  );

  return dailyData.slice(0, 7);
}