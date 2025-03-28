import { useState, lazy, Suspense } from "react";
import "./index.css";
import Navbar from "./components/Navbar";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Career = lazy(() => import("./components/Career"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  const [currentSection, setCurrentSection] = useState<string>("Home");

  const renderSection = () => {
    switch (currentSection) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Experience":
        return <Career />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div>
        <Navbar
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-cyan-500"></div>
            </div>
          }
        >
          {renderSection()}
        </Suspense>
      </div>
    </>
  );
}

export default App;
