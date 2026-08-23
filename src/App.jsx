import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import AIWorkspace from "./sections/AIWorkspace";
import FeaturedProjects from "./sections/FeaturedProjects";
import ProjectUnavailable from "./pages/ProjectUnavailable";
import Experiment from "./pages/Experiment";
import NotFound from "./pages/NotFound";

const PortfolioHome = () => {
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          const headerOffset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {/* <ShowcaseSection /> */}
      <LogoShowcase />
      {/* <FeatureCards /> */}
      <Experience />
      <TechStack />
      <AIWorkspace />
      <FeaturedProjects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/projects/unavailable/:platform" element={<ProjectUnavailable />} />
      <Route path="/projects/unavailable" element={<ProjectUnavailable />} />
      <Route path="/experiment" element={<Experiment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
