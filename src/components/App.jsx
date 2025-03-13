import { useState } from 'react';
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
// adjust scale of docs and text with resizing (maybe make docs a stack when screen is small)

function App() {
  const [activeDoc, setActiveDoc] = useState(null);

  // notify nav that doc has closed and to reset
  const handleDocClose = () => {
    setActiveDoc(null);
  }

  return (
    <>
      <div className="flex relative w-screen h-screen justify-center font-instrument overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${seat})` }}>

        <h1 className="flex absolute m-15 z-1 text-5xl text-orange-100 italic">Natalia Linn</h1>
        <Nav activeDoc={ activeDoc } setActiveDoc={ setActiveDoc }/>
        <Resume isDocOpen={ activeDoc === "resume" } onClose={ handleDocClose } />
        <AboutMe isDocOpen={ activeDoc === "about_me" } onClose={ handleDocClose } />
        <Projects isDocOpen={ activeDoc === "projects" } onClose={ handleDocClose } />

      </div>
    </>
  )
}

export default App;
