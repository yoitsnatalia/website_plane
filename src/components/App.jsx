import { useState } from 'react';
import background from "../assets/background.png"
import Nav from "./Nav.jsx";
import Resume from "./Resume.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import React from "react";

function App() {
  const [activeDoc, setActiveDoc] = useState(null);

  // notify nav that doc has closed and to reset
  const handleDocClose = () => {
    setActiveDoc(null);
  }

  return (
    <>
      <div className="flex relative w-screen h-screen justify-center font-instrument overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ background })` }}>

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
