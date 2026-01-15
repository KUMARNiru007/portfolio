import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectsPage from "./pages/project";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<ProjectsPage />} />
    </Routes>
  );
};

export default App;
