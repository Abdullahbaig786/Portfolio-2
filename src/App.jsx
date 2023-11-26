import React from "react";
import HomePage from "./components/homepage";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
