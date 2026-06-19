export default function WeatherSkeleton() {
  return (
    <div className="mt-8 animate-pulse rounded-3xl bg-white/20 p-8 backdrop-blur-lg">
      <div className="h-8 w-40 rounded bg-white/30" />

      <div className="mt-6 h-20 w-32 rounded bg-white/30" />

      <div className="mt-6 h-6 w-52 rounded bg-white/30" />

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="h-16 rounded bg-white/30" />
        <div className="h-16 rounded bg-white/30" />
        <div className="h-16 rounded bg-white/30" />
      </div>
    </div>
  );
}
