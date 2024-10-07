import React from "react";
import About from "./anothercomponents/About";
import Technology from "./anothercomponents/Technology";
import Footer from "./anothercomponents/Footer";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <About />
        <Technology />
        <Footer />
      </div>
    </>
  );
}

export default App;
