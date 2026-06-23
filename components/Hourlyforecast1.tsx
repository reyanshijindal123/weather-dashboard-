"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function HourlyForecast() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5"
      >
        <h3 className="text-xl font-semibold text-white">
          Hourly Forecast
        </h3>

        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          
        </div>
      )}
    </div>
  );
}