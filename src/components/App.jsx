import { useState } from 'react'
import seat from "../assets/scene3.png"
import Nav from "./Nav.jsx";
import Resume from "./Resume.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"

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
