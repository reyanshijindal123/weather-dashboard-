import Navbar from "@/components/Navbar";
import RecentSearches from "@/components/RecentSearch";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-500 via-sky-400 to-cyan-700">
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300">
        <section className="mx-auto max-w-7xl px-4 py-12">
          <SearchBar />
          <RecentSearches/>
        </section>
      </section>
    </main>
  );
}
