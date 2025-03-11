import { motion } from "framer-motion";
import { useState } from "react";
import airplane from "../assets/airplane_icon.png"

function Resume() {
    const [isOpen, setIsOpen] = useState(false);

    const resumeVariants = {
        initial: { x: "235%", y: "143%" },
        hover: { y: "132%" },
        open: { x: "123%", y: "25%"},
    };
    return (
        <>
        {/* Full-screen overlay to prevent clicking anything else */}
        {isOpen && (
                <div 
                    className="fixed inset-0 z-40 pointer-events-auto" 
                ></div>
            )}

        <div className={`fixed flex inset-0 items-center justify-center ${isOpen ? "pointer-events-auto z-50" : "pointer-events-none z-49"}`}>
            <div className="w-screen h-screen">
                {/* Boarding Pass */}
                <motion.div
                    variants={resumeVariants}
                    initial="initial"
                    whileHover={!isOpen ? "hover" : undefined}
                    animate={isOpen ? "open" : "initial"}
                    transition={{ duration: 0.3 }}
                    className="absolute pointer-events-auto cursor-pointer text-black"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    {/* Top Section */}
                    <motion.div className="h-49 w-123 rounded-2xl bg-pink-100">
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
                    <motion.div className="h-110 w-123 rounded-2xl bg-pink-100">
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