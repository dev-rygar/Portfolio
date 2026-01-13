import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Floater from "./components/Floater";
import Footer from "./components/Footer";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));


function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Floater />
      <div>
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primary"></div>
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Career />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
