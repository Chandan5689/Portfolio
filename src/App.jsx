import { useState ,useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Project/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  //smooth scroll
  
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
