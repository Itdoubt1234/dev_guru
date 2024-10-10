import React from "react";
import About from "./anothercomponents/About";
import Technology from "./anothercomponents/Technology";
import Footer from "./anothercomponents/Footer";
import Landing from "./anothercomponents/Landing";
import Future from "./anothercomponents/Future";

import About1 from "./anothercomponents/About1";
import Features from "./anothercomponents/Features";
import Navbar from "./anothercomponents/Navbar";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <Navbar />
        <About1 />
        <About />
        <Technology />
        <Footer />
        <Landing />
        <Features />
        <Future />
      </div>
    </>
  );
}

export default App;
