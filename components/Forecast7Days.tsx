import { getHourlyForecast } from "@/lib/weather";
import { formatForecastDate } from "@/app/helpers/date-helper";
interface Props {
  city: string;
}

export default async function Forecast7Days({ city }: Props) {
  const Forecast = await getHourlyForecast(city);

  return (
    <div className="mt-8 rounded-3xl bg-white/20 p-6 backdrop-blur-lg text-white shadow-2xl">
      <h2 className="mb-4 text-2xl font-bold">5 Day Forecast</h2>

      <div className="space-y-4">
        {Forecast.map(
          (day: {
            dt: number;
            main: {
              temp: number;
            };
            weather: {
              icon: string;
            }[];
          }) => (
            <div key={day.dt} className="flex items-center justify-between rounded-2xl bg-white/10 p-4 hover:bg-white/20 transition-all duration-300">
              <p>
                {formatForecastDate(day.dt)}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt=""
                />

                <p>{Math.round(day.main.temp)}°</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
