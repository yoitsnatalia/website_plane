// Project gallery as postcards

import { motion, easeInOut } from "framer-motion";
import { useState, useEffect } from "react";
import projectInfo from "./ProjectInfo.jsx";
import stamp from "../assets/stamp.png";


function Projects({ isDocOpen, onClose }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    // spotlight -> a card is spotlighted
    const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
    // spotlight card open behavior 
    const [selected, setSelected] = useState(null);
    // spotlight card return behavior
    const [returningCard, setReturningCard] = useState(null);
    // for grouping cards animation for hover
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    // get window size for resizing
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // handle resizing
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // notify projects that projects button is selected
    useEffect(() => {
        setIsGalleryOpen(isDocOpen);
    }, [isDocOpen]);

    const variants = {
        initial: (index) => ({
            scale: windowSize.width < 800 ? (isHovered ? 0.44 : 0.5) : (windowSize.width < 1400 ? (isHovered ? 0.55 : 0.6) : (isHovered ? 0.55 : 0.6)),
            top: windowSize.width < 800 ? (isHovered ? "83%" : "86%") : (windowSize.width < 1400 ? (isHovered ? "83%" : "89%") : (isHovered ? "83%" : "89%")) ,
            left: windowSize.width < 800 ? "-38%" : (windowSize.width < 1400 ? "11%" : "-10%"),
            rotate: isHovered ? `${ index * -15 - 65 }deg` : "-90deg",
            // open hover animation should be faster than leave hover and close gallery (return to initial)
            transition: isHovered ? { ease: "easeInOut", duration: 0.3 } : { ease: "easeInOut", duration: 1 },
        }),
        // open Gallery
        open: (index) => ({
            scale: windowSize.width < 800 ? 0.25 : (windowSize.width < 1400 ? 0.6 : 0.6),
            rotate: 0,
            top: windowSize.width < 800 ? `${-10 + (index * 16)}%` : (windowSize.width < 1400 ? (index % 2 === 1 ? "38%" : "0%") : (index % 2 === 1 ? "38%" : "0%")) ,
            left: windowSize.width < 800 ? "-40%" : (windowSize.width < 1400 ? (index >= 2 ? "3%" : "39%") : (index >= 2 ? "3%" : "39%")),
            transition: { duration: 1, ease: easeInOut },
        }),
        // one card is spotlighted
        spotlight: (index) => ({
            scale: windowSize.width < 800 ? (selected === index && 0.5) : (windowSize.width < 1400 ? (selected === index && 1) : (selected === index && 1)) ,
            top: windowSize.width < 800 ? "18%" : (windowSize.width < 1400 ? "18%" : "18%"),
            left: windowSize.width < 800 ? "-40%" : (windowSize.width < 1400 ? "21%" : "21%"),
            rotate: 0,
            zIndex: 100, 
            transition: { duration: 0.8, ease: easeInOut },
        }),
        // from Spotlight 
        returnCard: (index) => ({
            scale: windowSize.width < 800 ? 0.25 : (windowSize.width < 1400 ? 0.6 : 0.6),
            top: windowSize.width < 800 ? `${-10 + (index * 16)}%` : (windowSize.width < 1400 ? (index % 2 === 1 ? "38%" : "0%") : (index % 2 === 1 ? "38%" : "0%")) ,
            left: windowSize.width < 800 ? "-40%" : (windowSize.width < 1400 ? (index >= 2 ? "3%" : "39%") : (index >= 2 ? "3%" : "39%")),
            rotate: 0,
            zIndex: returningCard === index ? 100 : index, // Keep it on top until fully transitioned
            transition: { duration: 0.8, ease: easeInOut },
        }),
    };

    // open gallery and spotlight functionality
    const handleClick = async (index) => {

        if (!isGalleryOpen) {
            setIsGalleryOpen(true);
        } else if (isGalleryOpen && !isSpotlightOpen) {
            setSelected(index);
            setIsSpotlightOpen(true);
        } else if (isSpotlightOpen && selected === index) {
            // if clicking the spotlighted card, return it
            setReturningCard(index); // temporarily mark it as returning
            setIsSpotlightOpen(false);
            setSelected(null);

            // delay resetting `returningCard` for smooth transition
            setTimeout(() => {
                setReturningCard(null);
            }, 800); // match transition duration
        } 

    };

    // close gallery
    const handleClose = () => {
        if (isGalleryOpen) {
            setIsAnimating(true);
            setIsGalleryOpen(false);

            // delay resetting `isAnimating` till Animation is done
            setTimeout(() => {
                setIsAnimating(false);
                // notify projects button that projects closing
                onClose();
            }, 1200);
             
        }
    }

    return (
        <>
            {/* Set Container */}
            <div className={ `fixed flex inset-0 items-center justify-center ${ isGalleryOpen ? "pointer-events-auto z-50" : "pointer-events-none z-49" }` }>
                <div className="w-screen h-screen">
                    
                    {/* Return button */}
                    <motion.div 
                        variants={ variants }
                        initial="initial"
                        animate={ isGalleryOpen ? { opacity: 1 } : { opacity: 0 } }
                        className="absolute opacity-0 cursor-pointer shadow-xl shadow-[#241C37]/90 h-150 w-250 origin-center border-3 border-white/70 rounded-3xl bg-black/10 border-dashed pointer-events-auto hover:bg-amber-50/30"
                        onClick={ handleClose } 
                        transition={ { ease: easeInOut, duration: 3} }
                    >

                        <div className="flex justify-end w-full h-full">
                            <img
                                src={ stamp }
                                alt="postage stamp"
                                className="object-contain size-35 m-10 opacity-10"
                            />
                        </div>

                    </motion.div>

                    {/* Postcards */}
                    {[...Array(4)].map((_, index) => (

                        <motion.div
                            key={ index }
                            custom={ index }
                            variants={ variants }
                            initial="initial"
                            animate={
                                isSpotlightOpen && selected === index
                                ? "spotlight"
                                : returningCard === index
                                ? "returnCard"
                                : isGalleryOpen
                                ? "open"
                                : "initial"
                            }
                            onHoverStart={ () => {
                                !isAnimating && setIsHovered(true);
                            }} // Move all cards up slightly
                            onHoverEnd={ () => setIsHovered(false) } // Reset position when not hovering
                            onClick={ () => handleClick(index) }
                            className="absolute cursor-pointer shadow-xl shadow-[#241C37]/90 h-150 w-250 origin-center border-7 border-[#AC9476] rounded-3xl bg-amber-50 pointer-events-auto"
                        >
                            
                            {/* Postcard Content */}
                            <div className="grid grid-cols-2 text-amber-950 w-full h-full">

                                {/* Picture side */}
                                <div className="flex flex-col justify-center bg-[#EADBC7] rounded-2xl mr-10">

                                    <div className="px-10 pt-10">
                                        <img
                                            src={ projectInfo[index].img }
                                            alt={ projectInfo[index].alt }
                                            className="object-contain border-2 border-[#c7b08c] rounded-lg "
                                        />
                                        <p className="justify-self-center text-xl mt-5 mb-1">{ projectInfo[index].tools }</p>
                                    </div>
                                    
                                </div>

                                {/* Info Side */}
                                <div className="flex flex-col py-8 pr-8 justify-start">

                                    <div className="flex justify-end mb-5">
                                        <img
                                            src={ stamp }
                                            alt="postage stamp"
                                            className="object-contain size-35"
                                        />
                                    </div>
                                    <h1 className="text-6xl mb-4">{ projectInfo[index].name }</h1>
                                    <div className="flex flex-inline text-2xl mb-6 text-[#786f61]">
                                        <p>{ projectInfo[index].skills }</p>
                                        <p className="mx-3">|</p>
                                        <h3>{ projectInfo[index].where }</h3>
                                        <p className="mx-3">|</p>
                                        <h3>{ projectInfo[index].date }</h3>
                                    </div>
                                    <p className="italic text-3xl text-amber-950">{ projectInfo[index].description }</p>
                                    <p className="mt-7 text-lg text-amber-950">{ projectInfo[index].more }</p>

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
