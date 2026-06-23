import ForecastDayCard from "./ForecastDayCard";

const forecast = [
  { day: "Mon", icon: "01d", max: 38, min: 27 },
  { day: "Tue", icon: "01d", max: 39, min: 27 },
  { day: "Wed", icon: "01d", max: 39, min: 27 },
  { day: "Thu", icon: "02d", max: 38, min: 27 },
  { day: "Fri", icon: "02d", max: 37, min: 27 },
  { day: "Sat", icon: "02d", max: 39, min: 28 },
  { day: "Sun", icon: "01d", max: 38, min: 27 },
];

export default function ForecastSection() {
  return (
    <div className="mt-10">
      <div className="flex gap-3 overflow-x-auto">
        {forecast.map((item, index) => (
          <ForecastDayCard
            key={index}
            {...item}
            active={index === 0}
          />
        ))}
      </div>
    </div>
  );
}