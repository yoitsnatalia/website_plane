import { motion } from "framer-motion";
import seal from "../assets/seal.png"
import { useState } from "react"

function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);

    const aboutVariants = {
        initial: { left: "40%", top: "88%", scale: 1 },
        hover: { top: "75%" },
        open: { left: "40%", top: "20%", scale: 1.5, rotate: 90},
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <div className="w-screen h-screen">
                {/* Passport */}
                <motion.div
                    variants={aboutVariants}
                    initial="initial"
                    whileHover={!isOpen ? "hover" : undefined}
                    animate={isOpen ? "open" : "initial"}
                    transition={{ duration: 0.3 }}
                    className="absolute pointer-events-auto cursor-pointer text-amber-200 flex flex-col items-center justify-between p-15 h-148 w-87 rounded-2xl bg-blue-950"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        <h1 className="text-5xl">PASSPORT</h1>
                        <img
                            src={seal}
                            alt="seal icon"
                            className="size-50 items-center"
                        />
                        <div className="justify-items-center">
                            <h3 className="flex text-3xl">United States</h3>
                            <h3 className="flex text-3xl">of America</h3>
                        </div>
            </motion.div>
            </div>
        </div>
    )
}

export default AboutMe;