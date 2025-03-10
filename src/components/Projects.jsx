// PROJECTS
// how to close the gallery? button where it's home is?
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

import { motion, useAnimation, easeInOut } from "framer-motion";
import { useState } from "react";
import projectInfo from "./ProjectInfo.jsx"
import stamp from "../assets/stamp.png"



function Projects() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [returningCard, setReturningCard] = useState(null); // Track the last enlarged card
    const [isHovered, setIsHovered] = useState(false);

    const pcVariants = {
        initial: (index) => ({
            scale: isHovered ? 0.55 : 0.6,
            y: isHovered ? "135%" : "145%",
            x: "-20%",
            rotate: isHovered ? `${index * -15 - 65}deg` : "-90deg",
            transition: isHovered ? { ease: "easeInOut", duration: 0.3 } : { ease: "easeInOut", duration: 1 },
        }),
        open: (index) => ({
            scale: 0.6,
            rotate: 0,
            x: index % 2 === 1 ? "66%" : "5%",
            y: index >= 2 ? "61%" : "0%",
            transition: { duration: 1, ease: easeInOut },
        }),
        enlarge: (index) => ({
            scale: selected === index ? 1 : 0.6,
            y: "32%",
            x: "35%",
            rotate: 0,
            zIndex: 100, // Ensure it is above all other cards
            transition: { duration: 0.8, ease: easeInOut },
        }),
        close: (index) => ({
            scale: 0.6,
            y: index >= 2 ? "61%" : "0%",
            x: index % 2 === 1 ? "66%" : "5%",
            rotate: 0,
            zIndex: returningCard === index ? 100 : index, // Keep it on top until fully transitioned
            transition: { duration: 0.8, ease: easeInOut },
        }),
    };

    const handleClick = async (index) => {
        if (!isGalleryOpen) {
            setIsGalleryOpen(true);
        } else if (isGalleryOpen && !isSpotlightOpen) {
            setSelected(index);
            setIsSpotlightOpen(true);
        } else if (isSpotlightOpen && selected === index) {
            // If clicking the already enlarged card, close it
            setReturningCard(index); // Temporarily mark it as returning
            setIsSpotlightOpen(false);
            setSelected(null);

            // Delay resetting `returningCard` to ensure smooth transition
            setTimeout(() => {
                setReturningCard(null);
            }, 800); // Match transition duration
        } 
    };

    const handleReturn = () => {
        if (isGalleryOpen) {
            setIsGalleryOpen(false);
        }
    }

    return (
        <>
            {/* Full-screen overlay to prevent clicking outside */}
            {isGalleryOpen && (
                    <div className="fixed flex inset-0 z-40 pointer-events-auto"></div>
            )}

            <div className={`fixed flex inset-0 items-center justify-center ${isGalleryOpen ? "pointer-events-auto" : "pointer-events-none"} z-50`}>
                <div className="w-screen h-screen">
                    <div 
                        className="absolute cursor-pointer shadow-xl shadow-[#241C37]/90 h-50 w-89 origin-center border-3 border-white/70 rounded-3xl bg-black/10 border-dashed pointer-events-auto left-31 top-220 hover:bg-amber-50/30"
                        onClick={handleReturn}
                        
                    >
                        <div className="flex m-5 w-full h-full">
                            <img
                                src={stamp}
                                alt="postage stamp"
                                className="object-contain size-25 -rotate-90 opacity-10"
                            />
                        </div>
                    </div>

                    {[...Array(4)].map((_, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={pcVariants}
                            initial="initial"
                            animate={
                                isSpotlightOpen && selected === index
                                ? "enlarge"
                                : returningCard === index
                                ? "close"
                                : isGalleryOpen
                                ? "open"
                                : "initial"
                            }
                            onHoverStart={() => setIsHovered(true)} // Move all cards up slightly
                            onHoverEnd={() => setIsHovered(false)} // Reset position when not hovering
                            onClick={() => handleClick(index)}
                            className="absolute cursor-pointer shadow-xl shadow-[#241C37]/90 h-150 w-250 origin-center border-7 border-[#AC9476] rounded-3xl bg-amber-50 pointer-events-auto"
                        >
                            <div className="grid grid-cols-2 text-amber-950 w-full h-full">

                                {/* Picture side */}
                                <div className="flex flex-col justify-center bg-[#EADBC7] rounded-2xl mr-10">
                                    <div className="px-10 pt-10">
                                        
                                        <img
                                            src={projectInfo[index].img}
                                            alt={projectInfo[index].alt}
                                            className="object-contain border-2 border-[#c7b08c] rounded-lg "
                                        />
                                        <p className="justify-self-center text-xl mt-5 mb-1">{projectInfo[index].tools}</p>
                                    </div>
                                    
                                </div>

                                {/* Info Side */}
                                <div className="flex flex-col py-8 pr-8 justify-start">
                                    <div className="flex justify-end mb-5">
                                        <img
                                            src={stamp}
                                            alt="postage stamp"
                                            className="object-contain size-35"
                                        />
                                    </div>
                                    <h1 className="text-6xl mb-4">{projectInfo[index].name}</h1>
                                    <div className="flex flex-inline text-2xl mb-6 text-[#786f61]">
                                        <p>{projectInfo[index].skills}</p>
                                        <p className="mx-3">|</p>
                                        <h3>{projectInfo[index].where}</h3>
                                        <p className="mx-3">|</p>
                                        <h3>{projectInfo[index].date}</h3>
                                    </div>
                                    
                                    <p className="italic text-3xl text-amber-950">{projectInfo[index].description}</p>
                                    <p className="mt-7 text-lg text-amber-950">{projectInfo[index].more}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
