import React from "react";
import HomePage from "./components/homepage";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
