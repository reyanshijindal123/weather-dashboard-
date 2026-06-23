interface ForecastDayCardProps {
  day: string;
  icon: string;
  max: number;
  min: number;
  active?: boolean;
}

export default function ForecastDayCard({
  day,
  icon,
  max,
  min,
  active,
}: ForecastDayCardProps) {
  return (
    <div
      className={`
      min-w-[90px]
      rounded-2xl
      p-4
      text-center
      ${
        active
          ? "bg-white/20 border border-white/20"
          : "bg-white/5"
      }
      `}
    >
      <p>{day}</p>

      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt=""
        className="mx-auto"
      />

      <p className="font-bold">{max}°</p>

      <p className="text-white/60">
        {min}°
      </p>
    </div>
  );
}