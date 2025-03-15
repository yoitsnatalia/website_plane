import React from "react";
import chime from "../assets/chime.mp3";

const Chime = () => {
  const playSound = () => {
    const audio = new Audio(chime); // Ensure the path is correct
    audio.play();
  };

  return (
    <button
      onClick={playSound}
      className="p-4 cursor-pointer absolute bg-white opacity-50 text-black rounded-lg hover:bg-black hover:text-white top-10 right-10 transition"
    >
      Click me!
    </button>
  );
};

export default Chime;