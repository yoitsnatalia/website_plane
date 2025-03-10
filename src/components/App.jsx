import { useState } from 'react'
import seat from "../assets/scene3.png"
import Nav from "./Nav.jsx";
import Resume from "./Resume.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"

// PROJECTS
// ABOUT ME
// how to close the passport? rn not intuitive 
// make sure you can't click on any other features
// add drop shadow
// RESUME
// make sure you can't click on any other features
// add drop shadow and border?
// resume qr code
// change top and left to x and y
// OVERALL
// connect nav with components

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen overflow-hidden justify-center flex font-instrument">
        <img
          src={seat}
          alt="Background"
          className="absolute inset-0 w-screen h-screen object-cover"
        />
        <h1 className="flex text-5xl text-orange-100 italic m-15 absolute z-1">Natalia Linn</h1>
        <Nav />
        <Resume />
        <AboutMe />
        <Projects />
      </div>
    </>
  )
}

export default App;
