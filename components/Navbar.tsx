import ThemeToggle from "./ThemeToggle";
import LocationButton from "./CurrentLocationButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="text-3xl font-bold text-white">WeatherSphere ⛅</h1>

      <div className="flex gap-3">
        <Link
          href="/favorites"
          className="rounded-xl bg-white px-4 py-2 text-black"
        >
          ❤️Favorites
        </Link>
        <LocationButton />

        <ThemeToggle />
      </div>
    </nav>
  );
}
