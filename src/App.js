import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font h-full absolute w-full overflow-y-auto">
      <Navbar />
      <About />
      <Skills />
    </main>
  );
}

export default App;
