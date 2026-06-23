export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="animate-pulse">
        
        {/* Weather Card Skeleton */}
        <div className="rounded-[40px] bg-white/10 p-8">

          <div className="h-8 w-40 rounded bg-white/20" />

          <div className="mt-6 h-24 w-48 rounded bg-white/20" />

          <div className="mt-4 h-6 w-32 rounded bg-white/20" />

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-white/20"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}