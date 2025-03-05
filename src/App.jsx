import { useState } from 'react'
import seat from "./assets/scene3.png"
// import Flyers from "./Flyers";
import Nav from "./Nav.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen justify-center flex text-white font-instrument">
        <img
          src={seat}
          alt="Background"
          className="absolute inset-0 w-screen h-screen object-cover"
        />
        <h1 className="flex text-5xl text-orange-100 italic m-15 absolute z-1">Natalia Linn</h1>
        <Nav />
      </div>
    </>
  )
}

export default App;
