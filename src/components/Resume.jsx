import { motion, easeInOut } from "framer-motion";
import { useState } from "react";
import airplane from "../assets/airplane_icon.png"

// use top and left if possible so that it is positioned relative to the screen rahter than itself,
// position it so that it starts at top left (no position in class) then use top left percentages to move it
// this one is working as of right now
// you want the card to stick to it's position on page regardless of window resizing, scale can be adjusted later,
// good luck, soldier  

function Resume() {

    const [isHovered, setIsHovered] = useState(false);
    // boarding pass is center of the screen
    const [isOpen, setIsOpen] = useState(false);
    // make sure no interactions are possible during animations
    const [isAnimating, setIsAnimating] = useState(false);

    const resumeVariants = {
        initial: { 
            left: "66%", 
            top: isHovered ? "86%" : "90%",
            transition: isHovered ? { ease: "easeInOut", duration: 0.3 } : { ease: "easeInOut", duration: 1 }
        },
        open: { 
            left: "36%", 
            top: "18%",
            transition: { ease: "easeInOut", duration: 1 },
        },
    };
    return (
        <>
        {/* Full-screen overlay to prevent clicking anything else */}
        {/* {isOpen && (
                <div 
                    className="fixed inset-0 z-40 pointer-events-auto" 
                ></div>
            )} */}

        <div className={`fixed flex inset-0 items-center justify-center ${isOpen ? "pointer-events-auto z-50" : "pointer-events-none z-49"}`}>
            <div className="w-screen h-screen">

                {/* Return button */}
                <div className={`absolute h-49 w-120 cursor-pointer shadow-xl shadow-[#241C37]/90 rounded-3xl bg-black/10 border-3 border-white/70 border-dashed pointer-events-auto top-90/100 left-66/100 hover:bg-pink-100/30`}
                    onClick={() => setIsOpen(false)}>
                    
                </div>

                {/* Boarding Pass */}
                <motion.div
                    variants={resumeVariants}
                    initial="initial"
                    onHoverStart={() => {
                        !isAnimating && setIsHovered(true);
                    }} 
                    onHoverEnd={() => setIsHovered(false)} // Reset position when not hovering
                    transition={{ ease: "easeInOut", duration: 1 }}
                    animate={isOpen ? "open" : "initial"}
                    className="absolute pointer-events-auto h-159 w-123 cursor-pointer text-black"
                    onClick={() => {
                        setIsAnimating(true);
                        setIsOpen(!isOpen);
                        isOpen && setIsHovered(false);
                        // delay resetting `isAnimating` till Animation is done
                        setTimeout(() => {
                            setIsAnimating(false);
                        }, 2000); 
                    }}
                    >
                    {/* Top Section */}
                    <motion.div className={"h-49 w-123 rounded-2xl bg-pink-100"}>
                        <div className="flex">
                            <h1 className="text-6xl pl-8 pt-7 pb-3">RESUME</h1>
                            <div className="ml-auto justify-items-end pr-8">
                                <p className="text-sm pt-8">FLIGHT</p>
                                <h3 className="text-3xl">NL9490</h3>
                            </div>
                        </div> 
                        <div className="flex justify-between pl-8 pr-8">  
                            <div className="mr-auto">
                                <p className="text-sm">ORANGE COUNTY</p>
                                <h1 className="text-6xl pt-2">SNA</h1>
                            </div>
                            <img
                                src={airplane}
                                alt="airplane icon"
                                className="size-13 self-center"
                            />
                            <div className="ml-auto justify-items-end ">
                                <p className="text-sm">YOUR OFFICE</p>
                                <h1 className="text-6xl pt-2">URO</h1>
                            </div>
                        </div> 
                    </motion.div>
                    {/* Bottom Section */}
                    <motion.div className={"h-110 w-123 rounded-2xl bg-pink-100"}>
                        <div className="flex justify-between pl-8 pr-9">
                            <div>
                                <p className="text-sm pt-8">BOARDING</p>
                                <h3 className="text-3xl">4:19PM</h3>
                            </div>
                            <div>
                                <p className="text-sm pt-8">GATE</p>
                                <h3 className="text-3xl">20</h3>
                            </div>
                            <div>
                                <p className="text-sm pt-8">ZONE</p>
                                <h3 className="text-3xl">4</h3>
                            </div>
                            <div>
                                <p className="text-sm pt-8">SEAT</p>
                                <h3 className="text-3xl">16A</h3>
                            </div>
                        </div>
                    </motion.div>
                </motion.div> 
            </div> 
        </div> 
        </>
    )   
}

export default Resume;