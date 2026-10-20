import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

const RouteFallback = () => (
  <div className="section-wrap" role="status" aria-live="polite">
    <span className="sr-only">Loading page…</span>
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;