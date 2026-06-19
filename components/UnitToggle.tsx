"use client";
interface Props {
  unit: "C" | "F";
  setUnit: (unit: "C" | "F") => void;
}
export default function UnitToggle({ unit, setUnit }: Props) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setUnit("C")}
        className={`rounded-xl px-4 py-2 ${
          unit === "C" ? "bg-white text-black" : "bg-white/20 text-white"
        }`}
      >
        °C
      </button>

      <button
        onClick={() => setUnit("F")}
        className={`rounded-xl px-4 py-2 ${
          unit === "F" ? "bg-white text-black" : "bg-white/20 text-white"
        }`}
      >
        °F
      </button>
    </div>
  );
}
