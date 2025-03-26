
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy } from "react";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import CounselingService from "./pages/CounselingService";
import ImmigrationService from "./pages/ImmigrationService";
import TrainingService from "./pages/TrainingService";
import CareerGuidanceService from "./pages/CareerGuidanceService";

function App() {
  useEffect(() => {
    // For debugging
    console.log("App mounted");
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/counseling" element={<CounselingService />} />
        <Route path="/services/immigration" element={<ImmigrationService />} />
        <Route path="/services/training" element={<TrainingService />} />
        <Route path="/services/career-guidance" element={<CareerGuidanceService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
