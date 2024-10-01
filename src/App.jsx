import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <About />
      <Services />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
