import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found — Hamza El Moueddane";
  }, []);

  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <p className="not-found-kicker">404 / Route not found</p>
        <h1>This path doesn’t exist.</h1>
        <p>The portfolio is still here. Return to the main page to explore flagship systems, engineering evidence and the current résumé.</p>
        <a href="/" className="not-found-link"><ArrowLeft size={15} /> Back to portfolio</a>
      </section>
    </main>
  );
};

export default NotFound;
