import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300">
        <section className="mx-auto max-w-4xl px-4 py-12">
          <SearchBar />
        </section>
      </section>
    </main>
  );
}
