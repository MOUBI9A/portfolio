import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFound from "./pages/NotFound";
import ResumePage from "./pages/ResumePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/work/:slug" element={<CaseStudyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
