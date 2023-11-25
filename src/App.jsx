import React from "react";
import HomePage from "./components/homepage";
import About from "./components/about"; // Corrected import
import Skills from "./components/skills";

const App = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Skills />
    </div>
  );
};

export default App;
