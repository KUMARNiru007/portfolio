import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectsPage from "./pages/Project";
import BlogPage from "./pages/Blog";
import { ScrollTop } from "./components/ui/scrollToTop";

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blogs" element={<BlogPage />} />
    </Routes>
    <ScrollTop />
    </>
  );
};

export default App;
