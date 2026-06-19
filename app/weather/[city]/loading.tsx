"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-3xl bg-red-500/20 p-8 text-center backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-white">
          Failed to Load Weather
        </h2>

        <button
          onClick={() => reset()}
          className="mt-4 rounded-xl bg-white px-4 py-2 font-semibold text-red-500"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
