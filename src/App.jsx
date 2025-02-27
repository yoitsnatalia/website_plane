import { useState } from 'react'
import seat from "./assets/scene.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-screen flex items-center text-white font-instrument">
        <img
          src={seat}
          alt="Background"
          className="absolute inset-0 w-screen object-cover"
        />
        <h1 className="text-8xl relative bottom-7 left-10 rotate-5">Natalia Linn</h1>
      </div>
    </>
  )
}

export default App
