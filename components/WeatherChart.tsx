"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

type Props = {
  daily: {
    day: string;
    temp: number;
  }[];
};

export default function WeatherChart({ daily }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mt-8">

      <div className="flex justify-between mb-8 overflow-x-auto">
        {daily.map((item, index) => (
          <div key={index} className="text-center min-w-[70px]">
            <p>{item.day}</p>
            <p className="font-bold text-xl">{item.temp}°</p>
          </div>
        ))}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={daily}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              strokeWidth={3}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}