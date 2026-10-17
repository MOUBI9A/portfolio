import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFound from "./pages/NotFound";
import ResumePage from "./pages/ResumePage";

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

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/work/:slug" element={<CaseStudyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
