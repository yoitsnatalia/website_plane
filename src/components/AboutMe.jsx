// About me as passport

import { motion, useAnimation, easeInOut } from "framer-motion";
import seal from "../assets/seal.png"
import { useState, useEffect, useRef } from "react"
import headshot from "../assets/headshot.png"


function AboutMe({ isDocOpen, onClose }) {
    const [isHovered, setIsHovered ] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // prevent interactions during animations
    const [isAnimating, setIsAnimating] = useState(false);
    // handle animations for the passport cover
    const coverControls = useAnimation();
    // handling text opacity when flip
    const textControls = useAnimation();
    // handle animations for the passport id 
    const idControls = useAnimation();
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

    const variants = {
        initial: { 
            top: "85%", 
            left: windowSize.width < 800 ? "22%" : (windowSize.width < 1400 ? "38%" : "40%"),  
            transition: { ease: easeInOut, duration: 1 }
        },
        hover: { 
            top: "75%", 
            left: windowSize.width < 800 ? "22%" : (windowSize.width < 1400 ? "38%" : "40%"),
            transition: { ease: "easeInOut", duration: 0.3 }
        },
    };

    // handle hover
    useEffect(() => {
        coverControls.start(isHovered ? "hover" : "initial");
        idControls.start(isHovered ? "hover" : "initial")
    }, [isHovered]);

    const handleOpen = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        // move passport up
        await Promise.all([
            coverControls.start({ y: "-100%", transition: { duration: 1.2, ease: easeInOut }}),
            idControls.start({ y: "-100%", transition: { duration: 1.2, ease: easeInOut }})
        ]);

        coverControls.set({ transformOrigin: "left center"});
        idControls.set({ transformOrigin: "left center" });
        // return button appears
        setIsOpen(true);

        // rotate to horizontal position
        await Promise.all([
            coverControls.start({ y: windowSize.width < 800 ? "-120.5%" : (windowSize.width < 1400 ? "-151.5%" : "-151.5%") , x: "50%", scale: windowSize.width < 800 ? 0.8 : (windowSize.width < 1400 ? 1.5 : 1.5), rotate: 90, transition: { duration: 0.5, ease: easeInOut }}),
            idControls.start({ y: windowSize.width < 800 ? "-120.5%" : (windowSize.width < 1400 ? "-151.5%" : "-151.5%"), x: "50%", scale: windowSize.width < 800 ? 0.8 : (windowSize.width < 1400 ? 1.5 : 1.5), rotate: 90, transition: { duration: 0.5, ease: easeInOut }})
        ]);
        
        // flip open
        await Promise.all([
            coverControls.start({ rotateY: 180, transition: { duration: 0.5, ease: easeInOut }}),
            textControls.start({ opacity: 0, transition: { duration: 0.3, ease: easeInOut } })
        ]);

        setIsAnimating(false);
    }

    const handleClose = async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsOpen(false);

        // close passport cover
        await Promise.all([
            coverControls.start({ rotateY: 0, transition: { duration: 0.5, ease: "easeInOut" }}),
            textControls.start({ opacity: 100, transition: { duration: 0.3, ease: "easeInOut" } })
        ]);

        // rotate and return to initial
        await Promise.all([
            coverControls.start({ y: 0, x: 0, scale: 1, rotate: 0, transition: { duration: 0.5, ease: "easeInOut" } }),
            idControls.start({ y: 0, x: 0, scale: 1, rotate: 0, transition: { duration: 0.5, ease: "easeInOut" } })
        ]);

        setIsAnimating(false);
        // notify about me button that passport is closing
        onClose();
    }

    // notify passport that about me button is clicked
    useEffect(() => {
        if (isDocOpen) {
            handleOpen();
        }
    }, [isDocOpen]);
    
    

    return (
        <>
            <div className={ `fixed flex inset-0 items-center justify-center ${isOpen ? "pointer-events-auto z-50" : "pointer-events-none z-49"}` }>
                <div className="w-screen h-screen">

                    {/* Return button */}
                    <motion.div 
                        variants={ variants } 
                        initial="initial"
                        animate={ isOpen ? { opacity: 1, zIndex: 1, transition: { ease: easeInOut } } : { opacity: 0, transition: { ease: easeInOut, duration: 1.5 } } }
                        className="absolute cursor-pointer shadow-xl shadow-[#241C37]/90 h-148 w-87 origin-center border-3 border-white/70 rounded-3xl bg-black/10 border-dashed pointer-events-auto hover:bg-blue-950/30"
                        onClick={ handleClose } 
                    />

                    {/* Passport Cover */}
                    <motion.div
                        id="cover"
                        variants={ variants }
                        initial="initial"
                        onHoverStart={ () => {
                            !isOpen && !isAnimating && setIsHovered(true);
                        }} 
                        onHoverEnd={ () => setIsHovered(false) } 
                        className="absolute pointer-events-auto cursor-pointer border-blue-900 border-5 z-50 h-148 w-87 rounded-2xl text-amber-200 flex flex-col items-center justify-between p-15 bg-blue-950"
                        animate={ coverControls }
                        onClick={ !isOpen ? handleOpen : handleClose }
                        >

                            <motion.h1 animate={ textControls } className="text-5xl">ABOUT ME</motion.h1>
                            <motion.img
                                src={ seal }
                                alt="seal icon"
                                animate={ textControls }
                                className="size-50 items-center"
                            />
                            <motion.div animate={ textControls } className="justify-items-center">
                                <h3 className="flex text-3xl">United States</h3>
                                <h3 className="flex text-3xl">of America</h3>
                            </motion.div>

                    </motion.div>

                    {/* Passport ID */}
                    <motion.div
                        id="id"
                        variants={ variants }
                        initial="initial"
                        className="flex z-10 border-blue-950 border-5 rounded-2xl h-148 w-87 relative bg-indigo-50 items-center justify-center"
                        animate={ idControls }
                        >
                        
                        <div className="absolute w-148 h-87 rounded-2xl transform -rotate-90 origin-center flex justify-start">
                            <div className="m-10 text-indigo-950 items-center">   
                                <div className="flex flex-inline">
                                    
                                    <div>
                                        <img
                                            src={ headshot }
                                            alt="Natalia Linn"
                                            className="size-60 object-contain"
                                        />
                                    </div>
                                    
                                    <div className="flex flex-col ml-5">
                                        <div className="mb-5">
                                            <h3 className="text-xs">Name</h3>
                                            <h1 className="text-4xl">Natalia Linn</h1>
                                        </div>
                                        <div className="flex flex-inline mb-2">
                                            <div className="mr-5">
                                                <h3 className="text-xs">Class</h3>
                                                <h1 className="text-2xl">'27</h1>
                                            </div>
                                            <div>
                                                <h3 className="text-xs">School</h3>
                                                <h1 className="text-2xl text-nowrap">Stanford University</h1>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <h3 className="text-xs">Major</h3>
                                            <h1 className="text-2xl">Computer Science</h1>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Home</h3>
                                            <h1 className="text-2xl">Orange County, CA</h1>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex place-self-center text-xs mt-6 ml-10">
                                    <p>Hey! Thanks for checking out my website! </p>
                                </div>

                            </div> 
                        </div>

                        </motion.div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;