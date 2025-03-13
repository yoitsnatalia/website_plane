import { useState, useEffect } from 'react';
import seat from "../assets/scene3.png"
import Nav from "./Nav.jsx";
import Resume from "./Resume.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import React from "react";

// PROJECTS
// ABOUT ME
// RESUME
// resume qr code
// OVERALL
// connect nav with components
// adjust scale of docs and text with resizing (maybe make docs a stack when screen is small)

function App() {
  const [activeDoc, setActiveDoc] = useState(null);
  
  return (
    <>
      <div className="flex relative w-screen h-screen justify-center font-instrument overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${seat})` }}
      >
        <h1 className="flex absolute m-15 z-1 text-5xl text-orange-100 italic">Natalia Linn</h1>
        <Nav setActiveDoc={ setActiveDoc }/>
        <Resume isDocOpen={activeDoc === "resume"} />
        <AboutMe isDocOpen={activeDoc === "about_me"} />
        <Projects isDocOpen={activeDoc === "projects"} />
      </div>
    </>
  )
}

export default App;
