import { getHourlyForecast } from "@/lib/weather";
import { formatTime } from "@/app/helpers/date-helper";
interface Props {
  city: string;
}

export default async function HourlyForecast({
  city,
}: Props) {
  const forecast =
    await getHourlyForecast(city);

  return (
    <div className="mt-8 rounded-3xl bg-white/15 border border-white/20 backdrop-blur-xl p-6 text-white shadow-2xl hover:scale-[1.02] transition-all duration-300">

      <h2 className="mb-4 text-2xl font-bold">
        Hourly Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto">

        {forecast.map(
          (hour: any) => (
            <div
              key={hour.dt}
              className="min-w-[120px] rounded-3xl bg-white/15 backdrop-blur-lg border border-white/20 p-5 text-center hover:scale-105 transition-all duration-300">

            
              <p>
                {formatTime(hour.dt)}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt=""
                className="mx-auto"
              />

              <p className="font-bold">
                {Math.round(
                  hour.main.temp
                )}
                °
              </p>
            </div>
          )
        )}

      </div>
    </div>
  );
}