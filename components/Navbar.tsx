import ThemeToggle from "./ThemeToggle";
import LocationButton from "./CurrentLocationButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mx-auto mb-6 flex items-center justify-between rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 shadow-2xl">
      <div className="flex items-center gap-3">
  <span className="text-4xl">
    ⛅
  </span>

  <div>
    <h1 className="text-2xl font-bold text-white">
      WeatherSphere
    </h1>

    <p className="text-xs text-white/70">
      Live Weather Dashboard
    </p>
  </div>
</div>

      <div className="flex gap-3">
        <Link
          href="/favorites"
          className="rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 px-4 py-2 text-white hover:bg-white/30 transition-all duration-300 "
        >
          ❤️Favorites
        </Link>
        <LocationButton />

        <ThemeToggle />
      </div>
    </nav>
  );
}
