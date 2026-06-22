import Link from "next/link";
import CurrentLocationButton from "./CurrentLocationButton";

export default function Navbar() {
  return (
    <nav
      className="sticky top-4 z-50 mx-auto mb-6 w-full max-w-6xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-4 py-4 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Logo + Title */}
        <div className="flex min-w-0 items-center gap-3">
          <span className="text-4xl shrink-0">⛅</span>

          <div className="min-w-0">
            <h1 className="truncate text-xl md:text-2xl font-bold text-white">
              WeatherSphere
            </h1>

            <p className="text-xs text-white/70">
              Live Weather Dashboard
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/favorites"
            className="rounded-xl border border-white/20 bg-white/20 px-4 py-2 text-white backdrop-blur-lg transition-all duration-300 hover:bg-white/30">
            ❤️ Favorites
          </Link>

          <CurrentLocationButton />
        </div>
      </div>
    </nav>
  );
}