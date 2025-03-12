import seat from "../assets/scene3.png"
import Nav from "./Nav.jsx";
import Resume from "./Resume.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"

// PROJECTS
// ABOUT ME
// how to close the passport? rn not intuitive 
// add drop shadow
// change x and y to top and left
// RESUME
// add drop shadow and border?
// resume qr code
// OVERALL
// connect nav with components
// make sure all docs stick to bottom of page when resizing
// adjust scale of docs and text with resizing (maybe make docs a stack when screen is small)

function App() {
  return (
    <>
      <div className="flex relative w-screen h-screen justify-center font-instrument overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${seat})` }}
      >
        <h1 className="flex absolute m-15 z-1 text-5xl text-orange-100 italic">Natalia Linn</h1>
        <Nav />
        <Resume />
        <AboutMe />
        <Projects />
      </div>
    </>
  )
}

export default App;
