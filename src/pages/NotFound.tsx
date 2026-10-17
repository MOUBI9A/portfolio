import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found — Hamza El Moueddane";
  }, []);

  return (
    <main className="min-h-screen bg-[#0c0d0d] text-[#f3efe7] flex items-center justify-center px-6">
      <section className="w-full max-w-3xl border border-white/15 p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-[.14em] text-[#ff6b35]">404 / Route not found</p>
        <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-[-.05em] leading-[.95]">
          This path doesn’t exist.
        </h1>
        <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-white/60">
          The portfolio is still here. Return to the main page to explore flagship systems, engineering evidence and the current résumé.
        </p>
        <a
          href="/"
          className="mt-8 min-h-12 px-5 inline-flex items-center gap-2 border border-[#ff6b35] bg-[#ff6b35] text-[#111] font-mono text-xs uppercase tracking-wide"
        >
          <ArrowLeft size={15} /> Back to portfolio
        </a>
      </section>
    </main>
  );
};

export default NotFound;
