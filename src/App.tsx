
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import CounselingService from "@/pages/CounselingService";
import ImmigrationService from "@/pages/ImmigrationService";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./i18n";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/counseling" element={<CounselingService />} />
        <Route path="/services/immigration" element={<ImmigrationService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
