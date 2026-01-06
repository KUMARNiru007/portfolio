import React from "react";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import Projects from "./components/Projects";
import DiagonalPattern from "./components/DiagonalPattern";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
          <div className="min-h-screen transition-colors duration-300 relative"
            style={{ fontFamily: "var(--font-hk-grotesk)" }}>
              {<Navbar />}
           <div className="relative mx-auto max-w-4xl">

            {/* Diagonal Patterns */}
            <DiagonalPattern side="left" />
            <DiagonalPattern side="right" />

              <Hero />
              <Projects />
          
        </div>
        </div>
              <Footer />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
