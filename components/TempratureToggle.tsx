"use client";

interface Props {
  isCelsius: boolean;
  setIsCelsius: (
    value: boolean
  ) => void;
}

export default function TemperatureToggle({
  isCelsius,
  setIsCelsius,
}: Props) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() =>
          setIsCelsius(true)
        }
        className={`rounded-xl px-4 py-2 ${
          isCelsius
            ? "bg-white text-black"
            : "bg-white/20 text-white"
        }`}
      >
        °C
      </button>

      <button
        onClick={() =>
          setIsCelsius(false)
        }
        className={`rounded-xl px-4 py-2 ${
          !isCelsius
            ? "bg-white text-black"
            : "bg-white/20 text-white"
        }`}
      >
        °F
      </button>
    </div>
  );
}