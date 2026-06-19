"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">City Not Found</h2>
        <button
          onClick={() => reset()}
          className=",t-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          Please search a valid city.
        </button>
      </div>
    </div>
  );
}
