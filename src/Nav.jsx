import { useState } from 'react';

const navOptions = {
  "About Me": "about_me",
  "Project": "project",
  "Resume": "resume",
  "Linked In": "linked_in",
  "GitHub": "github"
};

function Nav(props) {
    const [navSelect, setNavSelect] = useState("");

    const getNavSelectClass = (navOption) => {
      return navSelect === navOption ? "m-5 italic underline cursor-pointer" : "m-5 hover:italic hover:underline cursor-pointer";
    }

    return (
        <div className="flex flex-col relative justify-center items-center text-5xl text-orange-100">
          <ul className="text-center">
            {Object.keys(navOptions).map(option => (
              // keep track of which nav option is active
              <li className={getNavSelectClass(navOptions[option])} key={navOptions[option]} onClick={() => setNavSelect(navOptions[option])}>{option}</li>
            ))}
          </ul>
        </div>
    )
}

export default Nav;