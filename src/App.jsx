import React from "react";
import HomePage from "./components/homepage";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

const App = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
